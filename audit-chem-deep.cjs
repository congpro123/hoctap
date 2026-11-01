const chem1 = require('./data-chem-1.cjs');
const chem2 = require('./data-chem-2.cjs');
const exams = [...chem1, ...chem2];

console.log('=== TOÀN DIỆN KIỂM TRA 10 ĐỀ HÓA HỌC ===\n');

let hasError = false;

if (exams.length !== 10) {
  console.error(`❌ Số lượng đề không đúng: ${exams.length} (cần 10 đề)`);
  hasError = true;
}

exams.forEach((e, idx) => {
  const num = idx + 1;
  const id = e.id;
  
  // 1. Kiểm tra số lượng
  const mcLen = (e.questions || []).length;
  const tfLen = (e.tf || []).length;
  const tfItemsCount = (e.tf || []).reduce((acc, t) => acc + (t.items ? t.items.length : 0), 0);
  const shortLen = (e.short || []).length;
  const essayLen = (e.essay || []).length;

  if (mcLen !== 16 || tfLen !== 2 || tfItemsCount !== 8 || shortLen !== 4 || essayLen !== 3) {
    console.error(`❌ [${id}] Sai cấu trúc: MC=${mcLen}/16, TF=${tfLen}/2 (${tfItemsCount}/8 items), Short=${shortLen}/4, Essay=${essayLen}/3`);
    hasError = true;
  } else {
    console.log(`✅ [${id}] Cấu trúc chuẩn 100%: 16 MC, 2 TF (8 lệnh), 4 Short, 3 Essay.`);
  }

  // 2. Kiểm tra đáp án MC
  e.questions.forEach((q, qIdx) => {
    if (!q[0] || !Array.isArray(q[1]) || q[1].length !== 4 || typeof q[2] !== 'number' || q[2] < 0 || q[2] > 3 || !q[3]) {
      console.error(`❌ [${id}] MC câu ${qIdx + 1} không hợp lệ!`);
      hasError = true;
    }
  });

  // 3. Kiểm tra TF
  e.tf.forEach((t, tIdx) => {
    if (!t.stem || !Array.isArray(t.items) || t.items.length !== 4) {
      console.error(`❌ [${id}] TF câu ${tIdx + 1} không hợp lệ!`);
      hasError = true;
    }
    t.items.forEach((item, itemIdx) => {
      if (!item[0] || typeof item[1] !== 'boolean' || !item[2]) {
        console.error(`❌ [${id}] TF câu ${tIdx + 1} lệnh ${itemIdx + 1} không hợp lệ!`);
        hasError = true;
      }
    });
  });

  // 4. Kiểm tra Short
  e.short.forEach((s, sIdx) => {
    if (!s.question || s.answer === undefined || s.answer === '' || !s.explanation) {
      console.error(`❌ [${id}] Short câu ${sIdx + 1} không hợp lệ!`);
      hasError = true;
    }
  });

  // 5. Kiểm tra Essay
  e.essay.forEach((es, esIdx) => {
    if (!es.title || !es.question || !es.solution) {
      console.error(`❌ [${id}] Essay câu ${esIdx + 1} không hợp lệ!`);
      hasError = true;
    }
  });
});

// 6. Kiểm tra trùng lặp toàn diện
console.log('\n--- KIỂM TRA TRÙNG LẶP TOÀN BỘ CÂU HỎI ---');
function checkUnique(name, extractor) {
  const seen = new Map();
  let count = 0;
  exams.forEach(e => {
    const list = extractor(e);
    list.forEach((item, i) => {
      const key = item.trim().toLowerCase().replace(/<[^>]+>/g, '').replace(/\s+/g, ' ');
      if (seen.has(key)) {
        console.error(`❌ Trùng lặp ${name}: "${key.slice(0, 60)}..." giữa ${seen.get(key)} và ${e.id} (#${i+1})`);
        count++;
        hasError = true;
      } else {
        seen.set(key, `${e.id} (#${i+1})`);
      }
    });
  });
  if (count === 0) {
    console.log(`✅ Toàn bộ ${name} độc lập 100% (0 trùng lặp)!`);
  }
}

checkUnique('Phần I (MC)', e => e.questions.map(q => q[0]));
checkUnique('Phần II (TF)', e => e.tf.flatMap(t => t.items.map(it => it[0])));
checkUnique('Phần III (Short)', e => e.short.map(s => s.question));
checkUnique('Phần IV (Essay)', e => e.essay.map(es => es.question));

if (!hasError) {
  console.log('\n🌟 TẤT CẢ 10 ĐỀ HÓA ĐỀU ĐẠT CHUẨN HOÀN HẢO! SẴN SÀNG MERGE!');
} else {
  console.error('\n⚠️ PHÁT HIỆN LỖI CẦN SỬA!');
  process.exit(1);
}
