const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

console.log('--- 1. Kiểm tra validate-exams.cjs ---');
require('./validate-exams.cjs');

console.log('--- 2. Kiểm tra verify-scoring.cjs ---');
require('./verify-scoring.cjs');

console.log('--- 3. Kiểm tra môi trường mô phỏng (DOM, app.js, ui-upgrades.js, scoring.js) ---');
const elements = new Map();
function mockElement(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      id,
      dataset: { view: 'home' },
      textContent: '',
      innerHTML: '',
      style: {},
      classList: {
        toggle(cls, val) { this[cls] = val; },
        add(cls) { this[cls] = true; },
        remove(cls) { this[cls] = false; }
      },
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
  querySelectorAll: sel => [mockElement('q-1'), mockElement('q-2')],
  addEventListener: () => {}
};

const storageStore = new Map();
const localStorage = {
  getItem: k => storageStore.get(k) || null,
  setItem: (k, v) => storageStore.set(k, String(v)),
  removeItem: k => storageStore.delete(k)
};

const window = {
  scrollTo: () => {},
  addEventListener: () => {}
};

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

console.log('--- 4. Kiểm tra renderResult và reviewPast trên đề vatli-10-de-05 ---');
const exams = vm.runInContext('exams', context);
assert.ok(exams.length >= 38, 'Tổng số đề thi phải từ 38 trở lên');

const exam = exams.find(e => e.id === 'vatli-10-de-05');
assert.ok(exam, 'Tìm thấy đề vatli-10-de-05');

// Tạo một bài thi giả lập: 12 câu MC (làm đúng 8, sai 4), Part II (làm đúng 5, sai 3), Part III (làm đúng 2, sai 2)
const answers = {
  // MC
  m0: exam.questions[0][2], // đúng
  m1: (exam.questions[1][2] + 1) % 4, // sai
  m2: exam.questions[2][2], // đúng
  m3: (exam.questions[3][2] + 2) % 4, // sai
  m4: exam.questions[4][2], // đúng
  m5: exam.questions[5][2], // đúng
  // m6 chưa trả lời
  m7: exam.questions[7][2], // đúng
  m8: exam.questions[8][2], // đúng
  m9: exam.questions[9][2], // đúng
  m10: exam.questions[10][2], // đúng
  m11: exam.questions[11][2], // đúng

  // TF
  't0-0': exam.tf[0].items[0][1], // đúng
  't0-1': !exam.tf[0].items[1][1], // sai
  't0-2': exam.tf[0].items[2][1], // đúng
  't0-3': exam.tf[0].items[3][1], // đúng
  't1-0': exam.tf[1].items[0][1], // đúng
  't1-1': exam.tf[1].items[1][1], // đúng
  't1-2': !exam.tf[1].items[2][1], // sai
  // t1-3 chưa trả lời

  // Short
  s0: String(exam.short[0].answer), // đúng
  s1: '99999', // sai
  s2: String(exam.short[2].answer) // đúng
  // s3 chưa điền
};

// Gọi scoreExam
const score = vm.runInContext(`scoreExam(exams.find(e => e.id === 'vatli-10-de-05'), ${JSON.stringify(answers)}, false)`, context);
console.log('Điểm bài thi:', score);
assert.ok(score.points > 0, 'Điểm số phải lớn hơn 0');

const resultObj = {
  id: exam.id,
  title: exam.title,
  total: score.total,
  correct: score.correct,
  points: score.points,
  maxPoints: score.max,
  questionSetVersion: 2,
  answers,
  date: new Date().toISOString(),
  reason: 'manual'
};

// Lưu vào localStorage
storageStore.set('hoctap-results', JSON.stringify([resultObj]));

// Test renderResult
console.log('--- 5. Test renderResult ---');
vm.runInContext(`renderResult(${JSON.stringify(resultObj)})`, context);
const appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10)'), 'renderResult phải có tiêu đề lời giải Lớp 10');
assert.ok(appHtml.includes('solution-box'), 'renderResult phải có class solution-box');
assert.ok(appHtml.includes('review-stem-box'), 'renderResult phải hiển thị đề bài chung Phần II');
assert.ok(appHtml.includes('badge-user-ans wrong'), 'renderResult phải đánh dấu câu làm sai');
assert.ok(appHtml.includes('badge-correct-ans'), 'renderResult phải hiển thị đáp án chuẩn');

// Test reviewPast
console.log('--- 6. Test reviewPast ---');
vm.runInContext('reviewPast(0)', context);
const reviewHtml = elements.get('app').innerHTML;
assert.ok(reviewHtml.includes('💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10)'), 'reviewPast phải có tiêu đề lời giải Lớp 10');
assert.ok(reviewHtml.includes('solution-box'), 'reviewPast phải có class solution-box');
assert.ok(reviewHtml.includes('review-stem-box'), 'reviewPast phải có đề bài chung Phần II');
assert.ok(reviewHtml.includes('📖 Đề bài chung (Câu'), 'reviewPast phải có tiêu đề đề bài chung');
assert.ok(reviewHtml.includes('review-toggle-bar'), 'reviewPast phải có thanh chuyển đổi tab câu sai / tất cả');
assert.ok(reviewHtml.includes('id="review-list-wrong"'), 'reviewPast phải có container review-list-wrong');
assert.ok(reviewHtml.includes('id="review-list-all"'), 'reviewPast phải có container review-list-all');

console.log('✅ TẤT CẢ CÁC BƯỚC KIỂM TRA ĐỀU THÀNH CÔNG VÀ CHÍNH XÁC!');
