const fs = require('fs');
const assert = require('assert');

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
    this.children = [];
    this.parentElement = null;
  }

  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }

  querySelector(sel) {
    return this.querySelectorAll(sel)[0] || null;
  }

  querySelectorAll(sel) {
    const res = [];
    // Hỗ trợ tìm kiếm cơ bản dựa trên innerHTML / ID
    if (sel.startsWith('#')) {
      const targetId = sel.slice(1);
      if (this.id === targetId) res.push(this);
    }
    return res;
  }

  closest(sel) { return null; }
  scrollIntoView() {}
}

const mockLocalStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; },
  clear() { this.store = {}; }
};

// Khởi tạo window, document, localStorage
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
    if (id === 'btn-close-auth') return new MockElement('button');
    if (id === 'login-username') return { value: 'admin' };
    if (id === 'login-password') return { value: '123' };
    return new MockElement('div');
  },
  querySelector(sel) {
    if (sel === '.top-right') return topRight;
    if (sel.includes('stats')) return statsLink;
    return null;
  },
  querySelectorAll() { return []; },
  createElement(tag) { return new MockElement(tag); },
  body: {
    appendChild(child) {}
  },
  addEventListener() {},
  removeEventListener() {}
};

global.location = { hash: '#home' };
global.setNav = function(view) {};
global.formatDate = function(d) { return '02/11/2026'; };
global.getSubjectMeta = function(s) { return { name: s, icon: '⚛', bg: '#fff', color: '#000' }; };
global.pointText = function(p) { return String(p); };

// Nạp dist/auth.js
require('./dist/auth.js');

console.log('--- BẮT ĐẦU KIỂM THỬ AUTH GATE & PHÂN QUYỀN ADMIN ---');

// TEST 1: Khởi tạo chưa đăng nhập (Auth Gate)
mockLocalStorage.clear();
assert.strictEqual(window.auth.getCurrentUser(), null, 'Chưa đăng nhập thì getCurrentUser() phải trả về null');
assert.strictEqual(window.auth.isLoggedIn(), false, 'isLoggedIn() phải là false');
assert.strictEqual(window.auth.isAdmin(), false, 'isAdmin() phải là false khi chưa đăng nhập');

// Gọi requireAuth() khi chưa đăng nhập
const authResult = window.auth.requireAuth('home');
assert.strictEqual(authResult, false, 'requireAuth() phải trả về false khi chưa đăng nhập');
assert.ok(appEl.innerHTML.includes('auth-gate-screen'), 'Phải hiển thị .auth-gate-screen khi chưa đăng nhập');
assert.ok(modalRoot.innerHTML.includes('auth-modal-card'), 'Phải mở modal xác thực');
assert.ok(!modalRoot.innerHTML.includes('btn-close-auth'), 'Modal không được có nút đóng khi canClose=false (chưa đăng nhập)');
console.log('✓ TEST 1 ĐẠT: Cổng Auth Gate bắt buộc đăng nhập hoạt động chính xác (modal không thể tắt khi chưa đăng nhập)');

// TEST 2: Đăng nhập tài khoản Học sinh (nguyenvanan)
const loginStudent = window.auth.login('nguyenvanan', '123');
assert.ok(loginStudent.success, 'Đăng nhập học sinh nguyenvanan thành công');
assert.strictEqual(window.auth.isLoggedIn(), true, 'Đã đăng nhập thành công');
assert.strictEqual(window.auth.getCurrentUser().username, 'nguyenvanan', 'User hiện tại là nguyenvanan');
assert.strictEqual(window.auth.isAdmin(), false, 'Học sinh không phải là admin');

// Học sinh truy cập trang Thống kê lớp học (#stats)
window.auth.renderStatsView();
assert.ok(appEl.innerHTML.includes('access-denied-card'), 'Học sinh truy cập #stats phải bị chuyển vào màn hình Access Denied');
assert.ok(appEl.innerHTML.includes('Khu vực dành riêng cho Quản trị viên'), 'Phải có tiêu đề cảnh báo từ chối truy cập');
assert.ok(!appEl.innerHTML.includes('stats-table'), 'Học sinh tuyệt đối không được xem bảng thống kê lớp học');
console.log('✓ TEST 2 ĐẠT: Học sinh truy cập #stats bị chặn bởi Access Denied');

// TEST 3: Đăng nhập tài khoản Admin (admin / 123)
const loginAdmin = window.auth.login('admin', '123');
assert.ok(loginAdmin.success, 'Đăng nhập admin thành công');
assert.strictEqual(window.auth.isLoggedIn(), true, 'Admin đã đăng nhập');
assert.strictEqual(window.auth.isAdmin(), true, 'isAdmin() phải trả về true');

// Admin truy cập trang Thống kê lớp học (#stats)
window.auth.renderStatsView();
assert.ok(!appEl.innerHTML.includes('access-denied-card'), 'Admin không bị từ chối');
assert.ok(appEl.innerHTML.includes('stats-page'), 'Admin được xem trang stats-page');
assert.ok(appEl.innerHTML.includes('stats-table'), 'Admin xem được bảng danh sách học sinh stats-table');
assert.ok(appEl.innerHTML.includes('Nguyễn Văn An'), 'Bảng có chứa học sinh Nguyễn Văn An');
console.log('✓ TEST 3 ĐẠT: Tài khoản Admin xem đầy đủ Thống kê lớp học và chi tiết học sinh');

// TEST 4: Tài khoản Giáo viên (thaygiao / 123) cũng có quyền Admin
const loginTeacher = window.auth.login('thaygiao', '123');
assert.ok(loginTeacher.success, 'Đăng nhập giáo viên thaygiao thành công');
assert.strictEqual(window.auth.isAdmin(), true, 'Giáo viên thaygiao có quyền Admin xem thống kê');
window.auth.renderStatsView();
assert.ok(appEl.innerHTML.includes('stats-table'), 'Giáo viên xem được bảng thống kê');
console.log('✓ TEST 4 ĐẠT: Tài khoản Giáo viên có quyền Admin quản trị thống kê lớp');

// TEST 5: Đăng xuất (Logout)
window.auth.logout();
assert.strictEqual(window.auth.isLoggedIn(), false, 'Sau khi logout, isLoggedIn() phải là false');
assert.strictEqual(window.auth.getCurrentUser(), null, 'Sau khi logout, currentUser là null');
assert.ok(appEl.innerHTML.includes('auth-gate-screen'), 'Sau khi logout, app lập tức quay về auth-gate-screen');
console.log('✓ TEST 5 ĐẠT: Đăng xuất xóa phiên và lập tức khóa màn hình Auth Gate');

// TEST 6: Đăng ký tài khoản mới
const regStudent = window.auth.register('Trần Văn Nam', 'tvnam10', '123456', 'student');
assert.ok(regStudent.success, 'Đăng ký học sinh mới thành công');
assert.strictEqual(window.auth.getCurrentUser().username, 'tvnam10');
assert.strictEqual(window.auth.isAdmin(), false, 'Tài khoản mới đăng ký vai trò học sinh');

const regAdmin = window.auth.register('Cô Lê Thảo', 'lethao_gv', '123456', 'admin');
assert.ok(regAdmin.success, 'Đăng ký giáo viên/admin mới thành công');
assert.strictEqual(window.auth.getCurrentUser().username, 'lethao_gv');
assert.strictEqual(window.auth.isAdmin(), true, 'Tài khoản mới đăng ký vai trò admin có quyền quản trị');
console.log('✓ TEST 6 ĐẠT: Đăng ký tài khoản mới và phân quyền vai trò chuẩn xác');

console.log('=== TẤT CẢ CÁC BÀI TEST AUTH GATE & ADMIN ĐỀU THÀNH CÔNG 100%! ===');
