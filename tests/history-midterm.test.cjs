const assert = require('node:assert/strict');
const path = require('node:path');
global.window = global;
global.handbookData = {};
const examModule = path.join(__dirname, '../dist/history-midterm-exams.js');
require(path.join(__dirname, '../dist/history-midterm-hard-bank.js'));
require(examModule);
const legacyExams = global.historyMidtermExams;
require(path.join(__dirname, '../dist/history-midterm-advanced.js'));
require(path.join(__dirname, '../dist/handbook-history.js'));

const exams = global.historyMidtermExams;
assert.equal(global.historyMidtermLegacyExams, legacyExams, 'Giữ bộ đề cũ để xem lại bài đã nộp');
assert.equal(exams.length, 10);
assert.equal(new Set(exams.map(exam => exam.id)).size, 10);
assert.ok(exams.every((exam, i) => exam.version === 2 && exam.id !== legacyExams[i].id));
assert.equal(new Set(exams.map(exam => exam.essay[0].question)).size, 10);
assert.equal(new Set(exams.map(exam => exam.essay[1].question)).size, 10);
assert.equal(new Set(exams.map(exam => JSON.stringify([exam.questions, exam.tf, exam.essay]))).size, 10);
assert.ok(exams.every((exam, i) => exam.questions.every((q, j) => q[0] !== legacyExams[i].questions[j][0])), 'Mỗi câu trắc nghiệm phải được ra mới');
assert.ok(new Set(exams.flatMap(exam => exam.questions.map(q => q[0]))).size >= 50, 'Ngân hàng câu hỏi quá lặp');
assert.equal(new Set(exams.flatMap(exam => exam.tf.map(group => group.stem))).size, 20, 'Thiếu dạng tư liệu đúng/sai');
assert.deepEqual(Object.fromEntries(Object.entries(global.historyMidtermHardBanks).map(([tag, bank]) => [tag, bank.length])), {b1n:8,b1h:10,b2h:8,b3n:10,b4n:10,b4h:10});
const answerPositions = [0, 0, 0, 0];
for (const question of exams.flatMap(exam => exam.questions)) {
  answerPositions[question[2]]++;
  const foilLength = Math.max(...question[1].filter((_, index) => index !== question[2]).map(option => option.length));
  assert.ok(question[1][question[2]].length <= foilLength * 1.31, `Đáp án lộ vì dài bất thường: ${question[0]}`);
}
assert.ok(answerPositions.every(count => count >= 20 && count <= 40), `Vị trí đáp án lệch: ${answerPositions}`);

const expectedTags = ['b1n','b1n','b1h','b2h','b2h','b3n','b3n','b3n','b4n','b4n','b4n','b4h'];
for (const exam of exams) {
  assert.equal(exam.subject, 'history');
  assert.equal(exam.duration, 90);
  assert.deepEqual(exam.matrixTags, expectedTags);
  assert.equal(exam.questions.length, 12);
  assert.equal(new Set(exam.questions.map(q => q[0])).size, 12, `${exam.id}: câu trùng trong một đề`);
  for (const [stem, options, key, explanation] of exam.questions) {
    assert.ok(stem && explanation, `${exam.id}: thiếu câu hỏi hoặc giải thích`);
    assert.equal(options.length, 4);
    assert.equal(new Set(options).size, 4, `${exam.id}: lựa chọn trùng`);
    assert.ok(Number.isInteger(key) && key >= 0 && key < 4);
    assert.ok(options[key].trim());
  }
  assert.equal(exam.tf.length, 4);
  assert.equal(new Set(exam.tf.map(group => group.stem)).size, 4);
  for (const group of exam.tf) {
    assert.ok(group.stem.length >= 130, `${exam.id}: đoạn tư liệu quá ngắn`);
    assert.equal(group.items.length, 4);
    assert.ok(group.items.some(item => item[1]) && group.items.some(item => !item[1]), `${exam.id}: nhóm Đ/S một chiều`);
    for (const [statement, truth, explanation] of group.items) {
      assert.ok(statement && explanation);
      assert.equal(typeof truth, 'boolean');
    }
  }
  assert.equal(exam.essay.length, 2);
  assert.deepEqual(exam.essay.map(item => item.points), [1,2]);
  assert.ok(exam.essay.every(item => item.question && item.solution));
  assert.equal(exam.questions.length * .25 + exam.tf.length + exam.essay.reduce((n,item)=>n+item.points,0), 10);
}

assert.equal(global.handbookData.history.id, 'history');
assert.equal(global.handbookData.history.sections.length, 4);
assert.deepEqual(global.handbookData.history.sections.map(section => section.items.length), [2, 2, 2, 2]);
const handbookItems = global.handbookData.history.sections.flatMap(section => section.items);
assert.equal(handbookItems.length, 8);
assert.equal(new Set(handbookItems.map(item => item.name)).size, handbookItems.length);
assert.ok(handbookItems.every(item => item.name && item.formula && item.desc && item.lesson));
assert.equal(handbookItems.reduce((total, item) => total + item.sourceItems.length, 0), 40);
assert.equal(new Set(handbookItems.flatMap(item => item.sourceItems)).size, 40);
assert.ok(handbookItems.some(item => item.desc.includes('Nho giáo: giá trị tích cực')));
assert.ok(handbookItems.some(item => item.desc.includes('Văn minh nông nghiệp: bốn trung tâm ven sông')));
assert.ok(handbookItems.some(item => item.desc.includes('Chức năng và nhiệm vụ của Sử học')));
assert.ok(handbookItems.every(item => !item.desc.includes('SGK Bài 5')));
assert.ok(exams.every(exam => exam.essay.every(item => !/Hy Lạp|La Mã|phương Tây/.test(item.question))));
assert.ok(exams.every(exam => exam.questions.every(([stem, options]) => !/Hy Lạp|La Mã|phương Tây/.test([stem, ...options].join(' ')))));
assert.ok(exams.some(exam => exam.tf.some(group => /Quan họ|Vơ-ni-dơ|Hoàng thành|Điện Biên Phủ/.test(group.stem))));
console.log('10 đề Lịch sử, ma trận, đáp án/giải thích, thang điểm và sổ tay: OK');
