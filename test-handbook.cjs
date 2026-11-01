const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

console.log('--- 1. Kiểm tra cú pháp và nạp script handbook.js ---');
const elements = new Map();
function mockElement(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      id,
      dataset: { view: 'home' },
      textContent: '',
      innerHTML: '',
      value: '',
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
      insertAdjacentHTML() {},
      focus() {},
      setSelectionRange() {},
      addEventListener() {}
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

const window = {
  scrollTo: () => {},
  addEventListener: () => {},
  print: () => {}
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
  'handbook.js',
  'scoring.js',
  'dedup.js'
]) {
  vm.runInContext(fs.readFileSync(`dist/${file}`, 'utf8'), context, { filename: file });
}

console.log('--- 2. Kiểm tra dữ liệu sổ tay handbookData ---');
const hb = vm.runInContext('handbookData', context);
assert.ok(hb, 'handbookData phải tồn tại');
assert.ok(hb.math, 'Có phần Toán 10');
assert.ok(hb.physics, 'Có phần Vật lý 10');
assert.ok(hb.chemistry, 'Có phần Hóa học 10');

// Kiểm tra số lượng chương và công thức
assert.ok(hb.math.sections.length >= 4, 'Toán 10 có ít nhất 4 chương');
assert.ok(hb.physics.sections.length >= 5, 'Vật lý 10 có ít nhất 5 chương');
assert.ok(hb.chemistry.sections.length >= 5, 'Hóa học 10 có ít nhất 5 chương');

console.log('--- 3. Kiểm tra renderHandbook(all) ---');
vm.runInContext("renderHandbook('all')", context);
let appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)'), 'Có tiêu đề sổ tay');
assert.ok(appHtml.includes('Toán 10'), 'Hiển thị môn Toán 10');
assert.ok(appHtml.includes('Vật lý 10'), 'Hiển thị môn Vật lý 10');
assert.ok(appHtml.includes('Hóa học 10'), 'Hiển thị môn Hóa học 10');
assert.ok(appHtml.includes('formula-box'), 'Có hộp công thức formula-box');
assert.ok(appHtml.includes('trap-box'), 'Có hộp bẫy đề thi trap-box');

console.log('--- 4. Kiểm tra renderHandbook(math) ---');
vm.runInContext("renderHandbook('math')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Heron'), 'Toán 10 có công thức Heron');
assert.ok(appHtml.includes('Định lí côsin'), 'Toán 10 có Định lí côsin');
assert.ok(appHtml.includes('Mệnh đề'), 'Toán 10 có Mệnh đề');
assert.ok(appHtml.includes('Vectơ trong mặt phẳng'), 'Toán 10 có Vectơ');
assert.ok(appHtml.includes('Tích vô hướng'), 'Toán 10 có Tích vô hướng');

console.log('--- 5. Kiểm tra renderHandbook(physics) ---');
vm.runInContext("renderHandbook('physics')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Độ dịch chuyển'), 'Vật lý 10 có Độ dịch chuyển');
assert.ok(appHtml.includes('Newton'), 'Vật lý 10 có Định luật Newton');
assert.ok(appHtml.includes('Rơi tự do'), 'Vật lý 10 có Rơi tự do');
assert.ok(appHtml.includes('Chuyển động ném ngang'), 'Vật lý 10 có Ném ngang');
assert.ok(appHtml.includes('Mômen lực'), 'Vật lý 10 có Mômen lực');

console.log('--- 6. Kiểm tra renderHandbook(chemistry) ---');
vm.runInContext("renderHandbook('chemistry')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Cấu tạo nguyên tử'), 'Hóa học 10 có Cấu tạo nguyên tử');
assert.ok(appHtml.includes('Bảng tuần hoàn'), 'Hóa học 10 có Bảng tuần hoàn');
assert.ok(appHtml.includes('bán bão hòa'), 'Hóa học 10 có ngoại lệ bán bão hòa Cr, Cu');
assert.ok(appHtml.includes('Liên kết hóa học'), 'Hóa học 10 có Liên kết hóa học');
assert.ok(appHtml.includes('Oxi hóa - Khử'), 'Hóa học 10 có Phản ứng Oxi hóa - Khử');

console.log('--- 7. Kiểm tra tính năng tìm kiếm nhanh trong sổ tay ---');
vm.runInContext("renderHandbook('all', 'Heron')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Heron: S ='), 'Tìm kiếm Heron ra công thức');

vm.runInContext("renderHandbook('all', 'tu-khoa-khong-ton-tai-123456')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Không tìm thấy công thức phù hợp'), 'Hiển thị thông báo khi không tìm thấy');

console.log('--- 8. Kiểm tra Banner Sổ tay trên trang chủ home() ---');
vm.runInContext("home()", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('handbook-feature-banner'), 'Trang chủ có banner nổi bật sổ tay');
assert.ok(appHtml.includes('Mở sổ tay kiến thức'), 'Trang chủ có nút mở sổ tay');

console.log('--- 9. Kiểm tra nút mở sổ tay trong catalog() ---');
vm.runInContext("catalog(0)", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Xem sổ tay công thức'), 'Kho đề có nút xem sổ tay công thức');

console.log('✅ TẤT CẢ CÁC KIỂM TRA CHO SỔ TAY KIẾN THỨC ĐỀU THÀNH CÔNG VÀ CHÍNH XÁC!');
