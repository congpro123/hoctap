const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('dist/supplied_exams.js', 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(content + '\n;allExams = suppliedExams;', ctx);

console.log('=== DANH SÁCH CẦN SỬA MÔN VẬT LÍ (10 ĐỀ) ===\n');

const physExams = ctx.allExams.filter(e => e.subject === 'physics');

// 1. MC duplicates or high similarity
console.log('--- 1. TRÙNG LẶP / TƯƠNG ĐỒNG CAO PHẦN I (MC) ---');
for (let i = 0; i < physExams.length; i++) {
  for (let j = i + 1; j < physExams.length; j++) {
    const e1 = physExams[i];
    const e2 = physExams[j];
    (e1.questions || []).forEach((q1, i1) => {
      (e2.questions || []).forEach((q2, i2) => {
        const t1 = q1[0].toLowerCase().replace(/<[^>]+>/g, '').trim();
        const t2 = q2[0].toLowerCase().replace(/<[^>]+>/g, '').trim();
        if (t1.slice(0, 40) === t2.slice(0, 40)) {
          console.log(`[MC Match] [${e1.id} #${i1+1}] vs [${e2.id} #${i2+1}]`);
          console.log(`  (1): ${q1[0].slice(0, 80)}`);
          console.log(`  (2): ${q2[0].slice(0, 80)}`);
        }
      });
    });
  }
}

// 2. Short duplicates (same numbers / identical question)
console.log('\n--- 2. TRÙNG LẶP PHẦN III (SHORT) ---');
for (let i = 0; i < physExams.length; i++) {
  for (let j = i + 1; j < physExams.length; j++) {
    const e1 = physExams[i];
    const e2 = physExams[j];
    (e1.short || []).forEach((s1, i1) => {
      const q1 = typeof s1 === 'object' ? s1.question : s1[0];
      const a1 = String(typeof s1 === 'object' ? s1.answer : s1[1]).trim();
      (e2.short || []).forEach((s2, i2) => {
        const q2 = typeof s2 === 'object' ? s2.question : s2[0];
        const a2 = String(typeof s2 === 'object' ? s2.answer : s2[1]).trim();
        const t1 = q1.toLowerCase().replace(/<[^>]+>/g, '').trim();
        const t2 = q2.toLowerCase().replace(/<[^>]+>/g, '').trim();
        if (a1 === a2 || t1.slice(0, 30) === t2.slice(0, 30)) {
          console.log(`[Short Match] [${e1.id} #${i1+1}] vs [${e2.id} #${i2+1}] (Ans: ${a1} vs ${a2})`);
          console.log(`  (1): ${q1.slice(0, 80)}`);
          console.log(`  (2): ${q2.slice(0, 80)}`);
        }
      });
    });
  }
}

// 3. TF duplicates
console.log('\n--- 3. TRÙNG LẶP PHẦN II (TF) ---');
for (let i = 0; i < physExams.length; i++) {
  for (let j = i + 1; j < physExams.length; j++) {
    const e1 = physExams[i];
    const e2 = physExams[j];
    (e1.tf || []).forEach((t1, t1Idx) => {
      (e2.tf || []).forEach((t2, t2Idx) => {
        const s1 = t1.stem.toLowerCase().replace(/<[^>]+>/g, '').trim();
        const s2 = t2.stem.toLowerCase().replace(/<[^>]+>/g, '').trim();
        if (s1.slice(0, 30) === s2.slice(0, 30)) {
          console.log(`[TF Match] [${e1.id} TF${t1Idx+1}] vs [${e2.id} TF${t2Idx+1}]`);
          console.log(`  (1): ${t1.stem.slice(0, 80)}`);
          console.log(`  (2): ${t2.stem.slice(0, 80)}`);
        }
      });
    });
  }
}
