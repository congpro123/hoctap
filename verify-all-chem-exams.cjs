const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

console.log('--- 1. Kiểm tra nạp file dist/supplied_exams.js ---');
const content = fs.readFileSync('dist/supplied_exams.js', 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(content + '\n;allExams = suppliedExams;', ctx);

assert.equal(ctx.allExams.length, 38, 'Tổng số đề phải là 38 (12 Toán, 10 Lý, 16 Hóa)');

const chemExams = ctx.allExams.filter(e => e.subject === 'chemistry');
assert.equal(chemExams.length, 16, 'Phải có đúng 16 đề Hóa');

console.log('--- 2. Kiểm tra cấu trúc từng đề Hóa ---');
chemExams.forEach((e, idx) => {
  console.log(`Kiểm tra ${e.id} - ${e.title}`);
  assert.ok(e.questions.length >= 10, `${e.id} phải có ít nhất 10 câu Phần I`);
  assert.ok(e.tf.length >= 2, `${e.id} phải có ít nhất 2 câu Phần II`);
  assert.ok(e.short.length >= 4, `${e.id} phải có ít nhất 4 câu Phần III`);
  assert.ok((e.essay || []).length >= 1, `${e.id} phải có ít nhất 1 câu Phần IV (Tự luận)`);

  // Kiểm tra từng câu Phần I
  e.questions.forEach((q, qIdx) => {
    assert.ok(q[0] && q[0].length > 5, `Câu ${qIdx + 1} của ${e.id} phải có nội dung câu hỏi`);
    assert.equal(q[1].length, 4, `Câu ${qIdx + 1} của ${e.id} phải có 4 đáp án A, B, C, D`);
    assert.ok(Number.isInteger(q[2]) && q[2] >= 0 && q[2] < 4, `Câu ${qIdx + 1} của ${e.id} đáp án đúng phải từ 0 đến 3`);
    assert.ok(q[3] && q[3].length > 5, `Câu ${qIdx + 1} của ${e.id} phải có lời giải chi tiết`);
  });

  // Kiểm tra từng câu Phần II
  e.tf.forEach((tf, tfIdx) => {
    assert.ok(tf.stem && tf.stem.length > 5, `Đề dẫn câu TF ${tfIdx + 1} của ${e.id} phải hợp lệ`);
    assert.equal(tf.items.length, 4, `Câu TF ${tfIdx + 1} của ${e.id} phải có 4 ý a, b, c, d`);
    tf.items.forEach(([stmt, ans, exp], iIdx) => {
      assert.ok(stmt && stmt.length > 5, `Ý ${iIdx + 1} câu TF ${tfIdx + 1} của ${e.id} phải có nội dung`);
      assert.equal(typeof ans, 'boolean', `Ý ${iIdx + 1} câu TF ${tfIdx + 1} của ${e.id} đáp án phải là boolean`);
      assert.ok(exp && exp.length > 5, `Ý ${iIdx + 1} câu TF ${tfIdx + 1} của ${e.id} phải có giải thích`);
    });
  });

  // Kiểm tra từng câu Phần III
  e.short.forEach((s, sIdx) => {
    assert.ok(s.question && s.question.length > 5, `Câu ngắn ${sIdx + 1} của ${e.id} phải có đề`);
    assert.ok(s.answer !== undefined && s.answer !== null && String(s.answer).length > 0, `Câu ngắn ${sIdx + 1} của ${e.id} phải có đáp án`);
    assert.ok(s.explanation && s.explanation.length > 5, `Câu ngắn ${sIdx + 1} của ${e.id} phải có giải thích`);
  });

  // Kiểm tra từng câu Phần IV
  e.essay.forEach((es, esIdx) => {
    assert.ok(es.title, `Tự luận ${esIdx + 1} của ${e.id} phải có tiêu đề`);
    assert.ok(es.question, `Tự luận ${esIdx + 1} của ${e.id} phải có đề bài`);
    assert.ok(es.solution, `Tự luận ${esIdx + 1} của ${e.id} phải có hướng dẫn giải và thang điểm`);
  });
});

console.log('--- 3. Kiểm tra tính điểm qua scoring.js ---');
const scoringCode = fs.readFileSync('dist/scoring.js', 'utf8');
const scoreCtx = {
  shortCorrect: (inp, ans) => String(inp).trim().replace(',', '.') === String(ans).trim().replace(',', '.'),
  exams: ctx.allExams,
  activeExam: null,
  answers: {},
  ticker: null,
  saved: () => [],
  localStorage: { setItem: () => {}, removeItem: () => {} },
  document: { querySelector: () => null },
  renderExam: () => {},
  renderResult: () => {},
  history: () => {},
  reviewPast: () => {}
};
vm.createContext(scoreCtx);
vm.runInContext(scoringCode, scoreCtx);

chemExams.forEach(e => {
  const empty = scoreCtx.scoreExam(e, {});
  assert.equal(empty.points, 0);

  // Tạo đáp án đúng 100%
  const allCorrect = {};
  e.questions.forEach((q, i) => { allCorrect['m' + i] = q[2]; });
  e.tf.forEach((tf, i) => {
    tf.items.forEach((it, j) => { allCorrect[`t${i}-${j}`] = it[1]; });
  });
  e.short.forEach((s, i) => { allCorrect['s' + i] = s.answer; });

  const perfect = scoreCtx.scoreExam(e, allCorrect);
  assert.equal(perfect.points, perfect.max, `${e.id} làm đúng 100% phải được đúng tối đa`);
  assert.equal(perfect.correct, perfect.total, `${e.id} tất cả các ý phải đúng`);
});

console.log('✅ TẤT CẢ 16 ĐỀ HÓA HỌC ĐỀU HỢP LỆ VÀ TÍNH ĐIỂM CHÍNH XÁC!');
