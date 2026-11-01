// Test unit logic của dist/auth.js
const fs = require('fs');
const vm = require('vm');

// Mock browser environment
const localStorageData = {};
const mockLocalStorage = {
  getItem: (k) => (k in localStorageData ? localStorageData[k] : null),
  setItem: (k, v) => { localStorageData[k] = String(v); },
  removeItem: (k) => { delete localStorageData[k]; },
  clear: () => { Object.keys(localStorageData).forEach(k => delete localStorageData[k]); }
};

const domElements = {};
function createMockEl(tag = 'div') {
  const el = {
    tagName: tag.toUpperCase(),
    innerHTML: '',
    textContent: '',
    style: {},
    classList: {
      _classes: new Set(),
      add: (c) => el.classList._classes.add(c),
      remove: (c) => el.classList._classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (el.classList._classes.has(c)) el.classList._classes.delete(c);
          else el.classList._classes.add(c);
        } else if (force) {
          el.classList._classes.add(c);
        } else {
          el.classList._classes.delete(c);
        }
      },
      contains: (c) => el.classList._classes.has(c)
    },
    children: [],
    appendChild: (child) => { el.children.push(child); return child; },
    querySelector: (sel) => null,
    querySelectorAll: (sel) => [],
    addEventListener: () => {},
    dataset: {}
  };
  return el;
}

const mockDoc = {
  getElementById: (id) => {
    if (!domElements[id]) domElements[id] = createMockEl('div');
    return domElements[id];
  },
  querySelector: (sel) => {
    if (sel === '.top-right') {
      if (!domElements['.top-right']) domElements['.top-right'] = createMockEl('div');
      return domElements['.top-right'];
    }
    return createMockEl('div');
  },
  querySelectorAll: (sel) => [],
  createElement: (tag) => createMockEl(tag),
  body: createMockEl('body')
};

const sandbox = {
  window: {},
  document: mockDoc,
  localStorage: mockLocalStorage,
  console,
  setTimeout,
  clearTimeout,
  Intl,
  Date,
  Math,
  String,
  Number,
  Boolean,
  Array,
  Object,
  JSON
};
sandbox.window = sandbox;
sandbox.global = sandbox;

const authCode = fs.readFileSync('dist/auth.js', 'utf8');
vm.createContext(sandbox);
vm.runInContext(authCode, sandbox);

const auth = sandbox.window.auth;
console.log('Auth initialized successfully:', Boolean(auth));

// 1. Test getUsers and default accounts
const users = auth.getUsers();
console.log('Total initial users:', users.length);
console.assert(users.length === 4, 'Should have 4 initial users');
const teacher = users.find(u => u.role === 'teacher');
console.log('Teacher account:', teacher.name, '(' + teacher.username + ')');
console.assert(teacher.username === 'thaygiao', 'Teacher username should be thaygiao');

// 2. Test getCurrentUser
const cur = auth.getCurrentUser();
console.log('Default current user:', cur.name);
console.assert(cur.username === 'nguyenvanan', 'Default user should be nguyenvanan');

// 3. Test Register new student
const regResult = auth.register('Vũ Minh Đức', 'ducvu', '123456', 'student');
console.log('Register result:', regResult.success, regResult.user ? regResult.user.name : regResult.message);
console.assert(regResult.success, 'Registration should succeed');
const updatedUsers = auth.getUsers();
console.log('Users count after register:', updatedUsers.length);
console.assert(updatedUsers.length === 5, 'Should have 5 users now');

// 4. Test duplicate register rejection
const dupReg = auth.register('Người Trùng', 'ducvu', '999');
console.log('Duplicate register handled:', !dupReg.success, dupReg.message);
console.assert(!dupReg.success, 'Duplicate username should fail');

// 5. Test login
const loginWrong = auth.login('ducvu', 'wrongpass');
console.log('Wrong pass login failed properly:', !loginWrong.success);
console.assert(!loginWrong.success, 'Wrong password should fail');

const loginOk = auth.login('ducvu', '123456');
console.log('Correct login succeeded:', loginOk.success, loginOk.user.name);
console.assert(loginOk.success && loginOk.user.username === 'ducvu', 'Login should succeed');
console.assert(auth.getCurrentUser().username === 'ducvu', 'Current user should be ducvu');

// 6. Test Seed results & getUserResults
const allRes = auth.getAllResults();
console.log('Initial seed results count:', allRes.length);
console.assert(allRes.length > 0, 'Seed results should be initialized');

const anResults = auth.getUserResults('u-an');
console.log('Nguyen Van An results count:', anResults.length);
console.assert(anResults.length >= 2, 'An should have at least 2 seed exams');

// 7. Test getExamStatus for an exam An took
const statusAn = auth.getExamStatus('toan-10-de-01', 'u-an');
console.log('Exam status for An (toan-10-de-01):', statusAn.hasDone, 'Points:', statusAn.bestResult ? statusAn.bestResult.points : null);
console.assert(statusAn.hasDone === true, 'An should have done toan-10-de-01');
console.assert(statusAn.bestResult.points === 6.75, 'An points should be 6.75');

// 8. Test getExamStatus for Duc Vu (new user with no exams yet)
const statusDuc = auth.getExamStatus('toan-10-de-01', 'u-ducvu');
console.log('Exam status for Duc (toan-10-de-01):', statusDuc.hasDone);
console.assert(statusDuc.hasDone === false, 'Duc should not have done this exam yet');

console.log('ALL UNIT TESTS FOR AUTH CORE PASSED!');
