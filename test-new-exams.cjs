const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

const elements = new Map();
function mockElement(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      id,
      dataset: { view: 'home' },
      textContent: '',
      innerHTML: '',
      style: {},
      classList: { toggle() {}, add() {}, remove() {} },
      querySelector(sel) {
        if (sel === '.score') return { textContent: '' };
        if (sel === '.result-icon') return { textContent: '' };
        return mockElement('sub-' + sel);
      },
      querySelectorAll(sel) {
        if (sel === ':scope > p') {
          return [{ textContent: '' }, { textContent: '', insertAdjacentHTML() {} }];
        }
        return [mockElement('item-1'), mockElement('item-2')];
      },
      insertAdjacentHTML() {}
    });
  }
  return elements.get(id);
}

const document = {
  getElementById: id => mockElement(id),
  querySelector: sel => mockElement('query-' + sel),
  querySelectorAll: () => [mockElement('q-1'), mockElement('q-2')],
  addEventListener: () => {}
};

const storageStore = new Map();
const localStorage = {
  getItem: k => storageStore.get(k) || null,
  setItem: (k, v) => storageStore.set(k, String(v)),
  removeItem: k => storageStore.delete(k)
};

const window = { scrollTo: () => {}, addEventListener: () => {} };

const context = vm.createContext({
  document,
  localStorage,
  window,
  Intl,
  Date,
  Math,
  Number,
  String,
  Array,
  Set,
  Map,
  console
});

for (const file of [
  'supplied_exams.js',
  'extra-exams.js',
  'math-exams.js',
  'app.js',
  'ui-upgrades.js',
  'scoring.js',
  'dedup.js'
]) {
  vm.runInContext(fs.readFileSync(`dist/${file}`, 'utf8'), context, { filename: file });
}

const exams = vm.runInContext('exams', context);
assert.equal(exams.length, 34, 'Tổng số đề thi phải là 34');

for (const examId of ['toan-10-de-11', 'toan-10-de-12']) {
  const e = exams.find(x => x.id === examId);
  assert.ok(e, `Tìm thấy ${examId}`);
  assert.equal(e.questions.length, 12, '12 câu trắc nghiệm');
  assert.equal(e.tf.length, 2, '2 câu đúng sai');
  assert.equal(e.short.length, 4, '4 câu trả lời ngắn');

  // Kiểm tra đáp án chuẩn và điểm số tối đa
  const perfectAnswers = {};
  e.questions.forEach((q, i) => { perfectAnswers['m' + i] = q[2]; });
  e.tf.forEach((q, i) => { q.items.forEach((it, j) => { perfectAnswers['t' + i + '-' + j] = it[1]; }); });
  e.short.forEach((q, i) => { perfectAnswers['s' + i] = String(q.answer); });

  const score = vm.runInContext(`scoreExam(exams.find(x => x.id === '${examId}'), ${JSON.stringify(perfectAnswers)}, false)`, context);
  console.log(`Điểm số tối đa của ${examId}:`, score);
  assert.equal(score.points, 7, 'Điểm đạt tối đa phải là 7/7');
  assert.equal(score.correct, 24, '24/24 ý đúng');
  assert.equal(score.total, 24, 'Tổng 24 ý');
}

for (const examId of ['hoahoc-10-de-11', 'hoahoc-10-de-12']) {
  const e = exams.find(x => x.id === examId);
  assert.ok(e, `Tìm thấy ${examId}`);
  assert.ok(e.questions.length >= 10, 'Ít nhất 10 câu trắc nghiệm');
  assert.ok(e.tf.length >= 2, 'Ít nhất 2 câu đúng sai');
  assert.equal(e.short.length, 4, '4 câu trả lời ngắn');

  const perfectAnswers = {};
  e.questions.forEach((q, i) => { perfectAnswers['m' + i] = q[2]; });
  e.tf.forEach((q, i) => { q.items.forEach((it, j) => { perfectAnswers['t' + i + '-' + j] = it[1]; }); });
  e.short.forEach((q, i) => { perfectAnswers['s' + i] = String(q.answer); });

  const score = vm.runInContext(`scoreExam(exams.find(x => x.id === '${examId}'), ${JSON.stringify(perfectAnswers)}, false)`, context);
  console.log(`Điểm số tối đa của ${examId}:`, score);
  assert.equal(score.points, score.max, 'Điểm trắc nghiệm tự động đạt tối đa');
  assert.equal(score.correct, score.total, 'Tất cả các ý trả lời đúng');
}

console.log('✅ ĐÃ KIỂM TRA THÀNH CÔNG TẤT CẢ CÁC BỘ ĐỀ MỚI BỔ SUNG (Toán 11, 12 & Hóa học 11, 12)!');
