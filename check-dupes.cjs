const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('dist/supplied_exams.js', 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(content + '\n;allExams = suppliedExams;', ctx);

console.log('=== PHÂN TÍCH TRÙNG LẶP TRONG TẤT CẢ CÁC ĐỀ ===');

['chemistry', 'physics', 'math'].forEach(subj => {
  console.log(`\n================= MÔN ${subj.toUpperCase()} =================`);
  const exams = ctx.allExams.filter(e => e.subject === subj);
  
  // 1. Kiểm tra Phần I (MC)
  const mcMap = new Map();
  exams.forEach(e => {
    e.questions.forEach((q, idx) => {
      // Chuẩn hóa câu hỏi để so sánh
      const text = q[0].trim().toLowerCase().replace(/\s+/g, ' ');
      if (!mcMap.has(text)) mcMap.set(text, []);
      mcMap.get(text).push({ id: e.id, index: idx + 1 });
    });
  });

  let mcDupes = 0;
  for (const [text, occurrences] of mcMap.entries()) {
    if (occurrences.length > 1) {
      mcDupes++;
      console.log(`[Trùng MC] (${occurrences.length} lần): "${text.slice(0, 70)}..."`);
      console.log(`    Các đề: ${occurrences.map(o => `${o.id} (câu ${o.index})`).join(', ')}`);
    }
  }
  console.log(`Tổng số câu MC bị trùng trong môn ${subj}: ${mcDupes}`);

  // 2. Kiểm tra Phần II (TF)
  const tfMap = new Map();
  exams.forEach(e => {
    (e.tf || []).forEach((tf, tfIdx) => {
      tf.items.forEach(([stmt], itemIdx) => {
        const text = stmt.trim().toLowerCase().replace(/\s+/g, ' ');
        if (!tfMap.has(text)) tfMap.set(text, []);
        tfMap.get(text).push({ id: e.id, tfIdx: tfIdx + 1, itemIdx: itemIdx + 1 });
      });
    });
  });

  let tfDupes = 0;
  for (const [text, occurrences] of tfMap.entries()) {
    if (occurrences.length > 1) {
      tfDupes++;
      console.log(`[Trùng TF] (${occurrences.length} lần): "${text.slice(0, 70)}..."`);
      console.log(`    Các đề: ${occurrences.map(o => `${o.id} (bài ${o.tfIdx}.${o.itemIdx})`).join(', ')}`);
    }
  }
  console.log(`Tổng số ý TF bị trùng trong môn ${subj}: ${tfDupes}`);

  // 3. Kiểm tra Phần III (Short)
  const shortMap = new Map();
  exams.forEach(e => {
    (e.short || []).forEach((s, sIdx) => {
      const text = (s.question || s.text || '').trim().toLowerCase().replace(/\s+/g, ' ');
      if (!shortMap.has(text)) shortMap.set(text, []);
      shortMap.get(text).push({ id: e.id, index: sIdx + 1, ans: s.answer });
    });
  });

  let shortDupes = 0;
  for (const [text, occurrences] of shortMap.entries()) {
    if (occurrences.length > 1) {
      shortDupes++;
      console.log(`[Trùng Short] (${occurrences.length} lần): "${text.slice(0, 70)}..."`);
      console.log(`    Các đề: ${occurrences.map(o => `${o.id} (câu ${o.index})`).join(', ')}`);
    }
  }
  console.log(`Tổng số câu Short bị trùng trong môn ${subj}: ${shortDupes}`);

  // 4. Kiểm tra Phần IV (Essay)
  const essayMap = new Map();
  exams.forEach(e => {
    (e.essay || []).forEach((es, esIdx) => {
      const text = (es.question || '').trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 60);
      if (!essayMap.has(text)) essayMap.set(text, []);
      essayMap.get(text).push({ id: e.id, index: esIdx + 1 });
    });
  });

  let essayDupes = 0;
  for (const [text, occurrences] of essayMap.entries()) {
    if (occurrences.length > 1) {
      essayDupes++;
      console.log(`[Trùng Essay] (${occurrences.length} lần): "${text}..."`);
      console.log(`    Các đề: ${occurrences.map(o => `${o.id} (câu ${o.index})`).join(', ')}`);
    }
  }
  console.log(`Tổng số câu Essay bị trùng trong môn ${subj}: ${essayDupes}`);
});
