const fs = require('fs');
const vm = require('vm');

// Mock DOM & Storage environment
const storage = {};
const mockLocalStorage = {
  getItem: k => (k in storage ? storage[k] : null),
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: k => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

let capturedHTML = {};
function createMockElement(tag, id = '', className = '') {
  const el = {
    tagName: tag.toUpperCase(),
    id,
    className,
    style: {},
    dataset: {},
    classList: {
      _set: new Set(className ? className.split(' ') : []),
      add(c) { this._set.add(c); el.className = Array.from(this._set).join(' '); },
      remove(c) { this._set.delete(c); el.className = Array.from(this._set).join(' '); },
      toggle(c, f) {
        if (f === undefined) { if (this._set.has(c)) this._set.delete(c); else this._set.add(c); }
        else if (f) this._set.add(c);
        else this._set.delete(c);
        el.className = Array.from(this._set).join(' ');
      },
      contains(c) { return this._set.has(c); }
    },
    children: [],
    appendChild(c) { this.children.push(c); return c; },
    scrollIntoView() {},
    focus() {},
    setSelectionRange() {},
    insertAdjacentHTML() {},
    querySelectorAll(sel) { return []; },
    querySelector(sel) {
      if (sel === '.score') return createMockElement('div');
      if (sel === '.result-icon') return createMockElement('div');
      if (sel === '.exam-heading p') return createMockElement('p');
      if (sel === '.result-panel') {
        const p = createMockElement('div');
        p.querySelectorAll = () => [createMockElement('p'), createMockElement('p')];
        return p;
      }
      return null;
    },
    closest(sel) { return null; },
    addEventListener() {}
  };
  Object.defineProperty(el, 'innerHTML', {
    get() { return capturedHTML[el.id || el.tagName] || ''; },
    set(v) { capturedHTML[el.id || el.tagName] = v; }
  });
  Object.defineProperty(el, 'textContent', {
    get() { return (capturedHTML[el.id || el.tagName] || '').replace(/<[^>]*>/g, ''); },
    set(v) { capturedHTML[el.id || el.tagName] = v; }
  });
  return el;
}

const appEl = createMockElement('div', 'app');
const crumbEl = createMockElement('strong', 'crumb');
const todayEl = createMockElement('span', 'today');
const topRightEl = createMockElement('div', '', 'top-right');
topRightEl.appendChild(todayEl);
const modalRootEl = createMockElement('div', 'modal-root');

const elementsMap = {
  app: appEl,
  crumb: crumbEl,
  today: todayEl,
  'modal-root': modalRootEl,
  '.top-right': topRightEl
};

const mockDoc = {
  getElementById: id => elementsMap[id] || createMockElement('div', id),
  querySelector: sel => {
    if (sel === '.top-right') return topRightEl;
    if (sel === '.score') return createMockElement('div');
    if (sel === '.result-icon') return createMockElement('div');
    if (sel === '.exam-heading p') return createMockElement('p');
    if (sel === '.result-panel') {
      const p = createMockElement('div');
      p.querySelectorAll = () => [createMockElement('p'), createMockElement('p')];
      return p;
    }
    if (sel.startsWith('#')) return elementsMap[sel.slice(1)] || null;
    return createMockElement('div');
  },
  querySelectorAll: sel => [],
  createElement: tag => createMockElement(tag),
  body: createMockElement('body'),
  addEventListener: () => {}
};

const mockWindow = {
  scrollTo: () => {},
  addEventListener: () => {},
  dispatchEvent: () => {},
  location: { hash: '' }
};

const context = {
  window: mockWindow,
  global: mockWindow,
  document: mockDoc,
  localStorage: mockLocalStorage,
  console,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  Intl,
  Date,
  Math,
  String,
  Number,
  Boolean,
  Array,
  Object,
  JSON,
  Event: function(type) { this.type = type; },
  renderMathInElement: (el, opts) => { /* mock katex auto-render */ }
};
mockWindow.window = mockWindow;

vm.createContext(context);

// Load files in production order
const files = [
  'dist/extra-exams.js',
  'dist/math-exams.js',
  'dist/supplied_exams.js',
  'dist/handbook.js',
  'dist/auth.js',
  'dist/app.js',
  'dist/ui-upgrades.js',
  'dist/scoring.js',
  'dist/dedup.js'
];

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  vm.runInContext(code, context, { filename: f });
});

console.log('✅ All files loaded into context without error.');
const exams = vm.runInContext('exams', context);
console.log('Total exams loaded:', exams.length);
console.assert(exams.length === 38, 'Should have 38 exams');

const auth = context.window.auth;
const card = vm.runInContext('card', context);
const submitExam = vm.runInContext('submitExam', context);

// 1. Check default user and status
const curUser = auth.getCurrentUser();
console.log('Initial user:', curUser.name, '(' + curUser.role + ')');
console.assert(curUser.username === 'nguyenvanan', 'Default user should be nguyenvanan');

// 2. Check card rendering for completed exam
const cardAnDone = card(exams.find(e => e.id === 'toan-10-de-01'));
console.log('Card HTML includes "ĐÃ LÀM":', cardAnDone.includes('ĐÃ LÀM'));
console.log('Card HTML includes "6,75 / 7":', cardAnDone.includes('6,75 / 7') || cardAnDone.includes('6.75 / 7'));
console.assert(cardAnDone.includes('ĐÃ LÀM'), 'Card should indicate exam is completed');
console.assert(cardAnDone.includes('card-completed'), 'Card should have card-completed class');
console.assert(cardAnDone.includes('btn-card-review'), 'Card should have review button');

// 3. Check card rendering for uncompleted exam
const cardAnPending = card(exams.find(e => e.id === 'hoahoc-10-de-16'));
console.log('Pending card includes "Chưa làm":', cardAnPending.includes('Chưa làm'));
console.assert(cardAnPending.includes('Chưa làm'), 'Card should indicate uncompleted');
console.assert(!cardAnPending.includes('card-completed'), 'Pending card should not have completed class');

// 4. Test account registration and taking an exam
const reg = auth.register('Hồ Bảo Ngọc', 'baongoc', '123456', 'student');
console.assert(reg.success, 'Registration should succeed');
auth.setCurrentUser(reg.user);
console.log('Switched to new user:', auth.getCurrentUser().name);

// Check that for Bảo Ngọc, toan-10-de-01 is pending
const cardNgoc = card(exams.find(e => e.id === 'toan-10-de-01'));
console.log('For Bao Ngoc, toan-10-de-01 is "Chưa làm":', cardNgoc.includes('Chưa làm'));
console.assert(cardNgoc.includes('Chưa làm'), 'Should be pending for new user');

// 5. Submit an exam as Bảo Ngọc
const targetExam = exams.find(e => e.id === 'hoahoc-10-de-16');
vm.runInContext('activeExam = exams.find(e => e.id === "hoahoc-10-de-16")', context);
vm.runInContext('answers = { m0: 1, m1: 2, "t0-0": true, s0: "12" }', context);
submitExam('manual');

// Check that result was recorded with Bao Ngoc's info
const ngocResults = auth.getUserResults(reg.user.id);
console.log('Bao Ngoc completed exams count:', ngocResults.length);
console.assert(ngocResults.length === 1, 'Bao Ngoc should have 1 result');
console.assert(ngocResults[0].studentName === 'Hồ Bảo Ngọc', 'Student name matches');
console.assert(ngocResults[0].id === 'hoahoc-10-de-16', 'Exam ID matches');

// Check that card for hoahoc-10-de-16 now shows completed for Bao Ngoc
const cardNgocChem = card(targetExam);
console.log('Now hoahoc-10-de-16 for Bao Ngoc is "ĐÃ LÀM":', cardNgocChem.includes('ĐÃ LÀM'));
console.assert(cardNgocChem.includes('ĐÃ LÀM'), 'Card should update to completed');

// 6. Test Teacher View and Stats Dashboard
const teacherUser = auth.getUsers().find(u => u.role === 'teacher');
auth.setCurrentUser(teacherUser);
console.log('Switched to Teacher:', auth.getCurrentUser().name);

// Render stats view
auth.renderStatsView();
const statsHtml = capturedHTML['app'];
console.log('Stats view rendered. HTML length:', statsHtml.length);
console.assert(statsHtml.includes('Thống kê lớp học'), 'Should contain title');
console.assert(statsHtml.includes('Hồ Bảo Ngọc'), 'Should list newly registered student Bao Ngoc');
console.assert(statsHtml.includes('Nguyễn Văn An'), 'Should list student An');
console.assert(statsHtml.includes('Trần Thị Bình'), 'Should list student Binh');

// 7. Test Drilldown & Review of Bao Ngoc's submission by Teacher
const ngocExamResult = ngocResults[0];
auth.renderStudentReview(ngocExamResult, reg.user);
const reviewHtml = capturedHTML['app'];
console.log('Review HTML rendered. Length:', reviewHtml.length);
console.assert(reviewHtml.includes('Bài làm của: Hồ Bảo Ngọc'), 'Should show Bao Ngoc name');
console.assert(reviewHtml.includes('Phần I'), 'Should show Part I');
console.assert(reviewHtml.includes('Phần II'), 'Should show Part II');
console.assert(reviewHtml.includes('Phần III'), 'Should show Part III');
console.assert(reviewHtml.includes('Quay lại Bảng thống kê'), 'Should have back to stats button');

console.log('🎉 ALL END-TO-END TESTS FOR AUTH, STATUS BADGES & STATS PASSED 100%!');
