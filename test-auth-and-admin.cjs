const assert = require('assert/strict');

// Thiết lập môi trường DOM giả lập cho Node.js
class MockClassList {
  constructor() { this.classes = new Set(); }
  add(...c) { c.forEach(x => this.classes.add(x)); }
  remove(...c) { c.forEach(x => this.classes.delete(x)); }
  toggle(c, force) {
    if (force !== undefined) {
      if (force) this.classes.add(c); else this.classes.delete(c);
      return force;
    }
    if (this.classes.has(c)) { this.classes.delete(c); return false; }
    this.classes.add(c); return true;
  }
  contains(c) { return this.classes.has(c); }
  toString() { return Array.from(this.classes).join(' '); }
}

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.innerHTML = '';
    this.textContent = '';
    this.id = '';
    this.dataset = {};
    this.classList = new MockClassList();
    this.style = {};
    this.attributes = {};
  }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }
  querySelector(sel) { return null; }
  querySelectorAll() { return []; }
  closest() { return null; }
  scrollIntoView() {}
}

const mockLocalStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; },
  clear() { this.store = {}; }
};

global.window = global;
global.localStorage = mockLocalStorage;

const appEl = new MockElement('div');
appEl.id = 'app';
const modalRoot = new MockElement('div');
modalRoot.id = 'modal-root';
const topRight = new MockElement('div');
topRight.classList.add('top-right');
const statsLink = new MockElement('a');
statsLink.setAttribute('href', '#stats');
statsLink.setAttribute('data-view', 'stats');

global.document = {
  getElementById(id) {
    if (id === 'app') return appEl;
    if (id === 'modal-root') return modalRoot;
    return new MockElement('div');
  },
  querySelector(sel) {
    if (sel === '.top-right') return topRight;
    if (sel.includes('stats')) return statsLink;
    return null;
  },
  querySelectorAll() { return []; },
  createElement(tag) { return new MockElement(tag); },
  body: { appendChild() {} },
  addEventListener() {},
  removeEventListener() {}
};

global.location = { hash: '#home' };
global.setNav = function() {};
global.formatDate = function() { return '02/11/2026'; };
global.getSubjectMeta = function(s) { return { name: s, icon: '⚛', bg: '#fff', color: '#000' }; };
global.pointText = function(p) { return String(p); };

// Nạp dist/auth.js
require('./dist/auth.js');

console.log('--- BẮT ĐẦU KIỂM THỬ BẢO MẬT ADMIN & DATABASE ĐỒNG BỘ ---');

// TEST 1: Khởi tạo chưa đăng nhập (Auth Gate)
mockLocalStorage.clear();
assert.strictEqual(window.auth.getCurrentUser(), null, 'Chưa đăng nhập thì getCurrentUser() = null');
assert.strictEqual(window.auth.isLoggedIn(), false, 'isLoggedIn() = false');
assert.strictEqual(window.auth.isAdmin(), false, 'isAdmin() = false');

// Bật modal khi chưa đăng nhập
window.auth.openModal('login', false);
assert.ok(!modalRoot.innerHTML.includes('tab-switch'), 'TUYỆT ĐỐI KHÔNG CÓ tab "Chọn nhanh tài khoản" (switch)');
assert.ok(!modalRoot.innerHTML.includes('btn-switch-user'), 'Không có nút chọn nhanh tài khoản');
assert.ok(modalRoot.innerHTML.includes('Tạo tài khoản mới'), 'Có tab Đăng ký tài khoản');
assert.ok(modalRoot.innerHTML.includes('Đăng nhập'), 'Có tab Đăng nhập');
assert.ok(!modalRoot.innerHTML.includes('btn-close-auth'), 'Không cho tắt modal khi chưa đăng nhập');
console.log('✓ TEST 1 ĐẠT: Không cho chọn nhanh tài khoản, bắt buộc đăng ký/đăng nhập tài khoản riêng');

// TEST 2: Đăng nhập Admin BẮT BUỘC có mật khẩu đúng
const failAdmin1 = window.auth.login('admin', 'wrong_pass');
assert.strictEqual(failAdmin1.success, false, 'Nhập sai mật khẩu Admin phải bị từ chối');
assert.strictEqual(window.auth.isLoggedIn(), false, 'Chưa đăng nhập được khi mật khẩu sai');

const failAdmin2 = window.auth.login('admin', '');
assert.strictEqual(failAdmin2.success, false, 'Không nhập mật khẩu Admin phải bị từ chối');

const okAdmin = window.auth.login('admin', '123');
assert.strictEqual(okAdmin.success, true, 'Nhập đúng mật khẩu 123 đăng nhập Admin thành công');
assert.strictEqual(window.auth.isAdmin(), true, 'Tài khoản admin có quyền Quản trị viên');
console.log('✓ TEST 2 ĐẠT: Vào tài khoản Admin BẮT BUỘC phải nhập đúng mật khẩu, chặn hoàn toàn mật khẩu sai');

// TEST 3: Đăng xuất và Tạo tài khoản Học sinh riêng
window.auth.logout();
assert.strictEqual(window.auth.isLoggedIn(), false, 'Đã đăng xuất thành công');

// Đăng ký học sinh bình thường
const regStudent = window.auth.register('Trần Thu Trang', 'thutrang10a', 'trang123', 'trang123', false);
assert.strictEqual(regStudent.success, true, 'Đăng ký học sinh mới thành công');
assert.strictEqual(window.auth.getCurrentUser().username, 'thutrang10a');
assert.strictEqual(window.auth.isAdmin(), false, 'Tài khoản học sinh không có quyền Admin');

// Thử tự phong Admin bằng cách không có mã bí mật
const failFakeAdmin = window.auth.register('Kẻ Mạo Danh', 'hacker99', '123456', '123456', true, 'wrong_key');
assert.strictEqual(failFakeAdmin.success, false, 'Đăng ký Admin với mã bí mật sai phải bị từ chối');
console.log('✓ TEST 3 ĐẠT: Học sinh tạo tài khoản riêng, không thể tự phong quyền Admin nếu không có mã xác thực');

// TEST 4: Học sinh truy cập trang Thống kê lớp học (#stats)
window.auth.renderAccessDenied();
assert.ok(appEl.innerHTML.includes('access-denied-card'), 'Hiển thị màn hình từ chối');
assert.ok(appEl.innerHTML.includes('admin-login-box'), 'Hiển thị form đăng nhập Admin trực tiếp yêu cầu mật khẩu');
assert.ok(!appEl.innerHTML.includes('Đổi sang tài khoản Giáo viên có sẵn'), 'Tuyệt đối không có nút chuyển nhanh sang Admin');
console.log('✓ TEST 4 ĐẠT: Học sinh vào #stats bị chặn, muốn vào phải nhập đúng mật khẩu Quản trị viên');

// TEST 5: Lưu kết quả làm bài vào Database
const sampleResult = {
  id: 'vatli-10-de-01',
  title: 'Vật lí 10 - Đề 01',
  subject: 'physics',
  userId: window.auth.getCurrentUser().id,
  username: window.auth.getCurrentUser().username,
  studentName: window.auth.getCurrentUser().name,
  total: 28,
  correct: 27,
  points: 6.75,
  maxPoints: 7.0,
  answers: { m0: 0 },
  date: new Date().toISOString()
};

window.auth.saveExamResult(sampleResult);
const savedResults = window.auth.getUserResults(sampleResult.userId);
assert.strictEqual(savedResults.length, 1, 'Bài làm đã được lưu vào database');
assert.strictEqual(savedResults[0].points, 6.75, 'Điểm số bài làm được lưu chính xác');
console.log('✓ TEST 5 ĐẠT: Bài làm và điểm số được lưu tự động lên Database');

console.log('\n=== TẤT CẢ 5 BÀI TEST BẢO MẬT ADMIN & DATABASE ĐỀU ĐẠT 100%! ===');
