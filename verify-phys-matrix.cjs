const assert = require('assert/strict');
const part1 = require('./data-phys-matrix-part1.cjs');
const part2 = require('./data-phys-matrix-part2.cjs');

const exams = [
  part1.exam01,
  part1.exam02,
  part1.exam03,
  part1.exam04,
  part1.exam05,
  part2.exam06,
  part2.exam07,
  part2.exam08,
  part2.exam09,
  part2.exam10
];

console.log(`Đang kiểm tra 10 đề Vật lí mới... Số lượng: ${exams.length}`);

// 1. Kiểm tra cấu trúc & tổng điểm
exams.forEach((e, idx) => {
  assert.strictEqual(e.questions.length, 16, `${e.id} phải có đúng 16 câu MC`);
  assert.strictEqual(e.tf.length, 2, `${e.id} phải có đúng 2 câu TF`);
  e.tf.forEach((q, i) => {
    assert.strictEqual(q.items.length, 4, `${e.id} TF ${i+1} phải có 4 ý`);
  });
  assert.strictEqual(e.short.length, 4, `${e.id} phải có đúng 4 câu Short`);
  assert.strictEqual(e.mcUnit, 0.25, `${e.id} mcUnit phải là 0.25`);
  assert.strictEqual(e.shortUnit, 0.25, `${e.id} shortUnit phải là 0.25`);

  // Tính điểm max
  const maxScore = e.questions.length * e.mcUnit + e.tf.length * 1.0 + e.short.length * e.shortUnit;
  assert.strictEqual(maxScore, 7.0, `${e.id} tổng điểm trắc nghiệm phải là 7.0 điểm`);

  // Kiểm tra đáp án Short có trong explanation
  e.short.forEach((s, i) => {
    const exp = s.explanation || '';
    const ansDot = String(s.answer).replace(',', '.');
    const ansComma = String(s.answer).replace('.', ',');
    assert.ok(exp.includes(ansDot) || exp.includes(ansComma), `${e.id} short câu ${i+1} đáp án ${s.answer} phải có trong explanation`);
  });
});
console.log('✅ Cấu trúc và tổng điểm 7.0 của cả 10 đề Vật lí đều hợp lệ 100%!');

// 2. Kiểm tra trùng lặp MC
const mcMap = new Map();
exams.forEach(e => {
  e.questions.forEach((q, i) => {
    const norm = q[0].trim().toLowerCase().replace(/\s+/g, ' ');
    if (!mcMap.has(norm)) mcMap.set(norm, []);
    mcMap.get(norm).push({ id: e.id, q: i + 1 });
  });
});

let mcDupes = 0;
for (const [norm, occ] of mcMap.entries()) {
  if (occ.length > 1) {
    mcDupes++;
    console.log(`[Trùng MC] "${norm.slice(0, 60)}...":`, occ);
  }
}
assert.strictEqual(mcDupes, 0, 'Không được có câu MC nào trùng lặp giữa 10 đề');
console.log('✅ Không có câu MC nào trùng lặp giữa 10 đề Vật lí (0/160 câu trùng)!');

// 3. Kiểm tra trùng lặp TF
const tfMap = new Map();
exams.forEach(e => {
  e.tf.forEach((q, i) => {
    q.items.forEach((it, j) => {
      const norm = it[0].trim().toLowerCase().replace(/\s+/g, ' ');
      if (!tfMap.has(norm)) tfMap.set(norm, []);
      tfMap.get(norm).push({ id: e.id, tf: i + 1, item: j + 1 });
    });
  });
});

let tfDupes = 0;
for (const [norm, occ] of tfMap.entries()) {
  if (occ.length > 1) {
    tfDupes++;
    console.log(`[Trùng TF] "${norm.slice(0, 60)}...":`, occ);
  }
}
assert.strictEqual(tfDupes, 0, 'Không được có ý TF nào trùng lặp giữa 10 đề');
console.log('✅ Không có ý TF nào trùng lặp giữa 10 đề Vật lí (0/80 ý trùng)!');

// 4. Kiểm tra trùng lặp Short
const shortMap = new Map();
exams.forEach(e => {
  e.short.forEach((s, i) => {
    const norm = s.question.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!shortMap.has(norm)) shortMap.set(norm, []);
    shortMap.get(norm).push({ id: e.id, s: i + 1 });
  });
});

let shortDupes = 0;
for (const [norm, occ] of shortMap.entries()) {
  if (occ.length > 1) {
    shortDupes++;
    console.log(`[Trùng Short] "${norm.slice(0, 60)}...":`, occ);
  }
}
assert.strictEqual(shortDupes, 0, 'Không được có câu Short nào trùng lặp giữa 10 đề');
console.log('✅ Không có câu Short nào trùng lặp giữa 10 đề Vật lí (0/40 câu trùng)!');

console.log('\n=== TẤT CẢ 10 ĐỀ VẬT LÍ ĐÃ ĐẠT TIÊU CHUẨN MA TRẬN 100%! ===');
