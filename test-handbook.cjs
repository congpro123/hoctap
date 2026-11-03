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
  'handbook-english.js',
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
assert.ok(hb.english, 'Có phần Tiếng Anh từ REVIEW 1');

// Kiểm tra số lượng chương và công thức
assert.ok(hb.math.sections.length === 3, 'Toán 10 có đúng 3 chương chuẩn tiến độ (Mệnh đề, BPT, Hệ thức lượng)');
assert.ok(hb.physics.sections.length === 2, 'Vật lý 10 có đúng 2 chương chuẩn ma trận Giữa kì I (Mở đầu, Động học)');
const totalPhysItems = hb.physics.sections.reduce((acc, s) => acc + s.items.length, 0);
assert.ok(totalPhysItems >= 8, 'Vật lý 10 có đầy đủ ít nhất 8 chủ đề chi tiết');
assert.ok(hb.chemistry.sections.length === 3, 'Hóa học 10 có đúng 3 chương chuẩn tiến độ (Nguyên tử, Cấu hình, Bảng tuần hoàn)');

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
assert.ok(appHtml.includes('Định lí Cosin') || appHtml.includes('Định lí côsin'), 'Toán 10 có Định lí Cosin');
assert.ok(appHtml.includes('Mệnh đề'), 'Toán 10 có Mệnh đề');
assert.ok(appHtml.includes('Bất phương trình'), 'Toán 10 có Bất phương trình bậc nhất hai ẩn');
assert.ok(!appHtml.includes('Vectơ trong mặt phẳng'), 'Toán 10 không có Vectơ (chưa học)');

console.log('--- 5. Kiểm tra renderHandbook(physics) ---');
vm.runInContext("renderHandbook('physics')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Độ dịch chuyển'), 'Vật lý 10 có Độ dịch chuyển');
assert.ok(appHtml.includes('Sai số'), 'Vật lý 10 có Sai số thực nghiệm');
assert.ok(appHtml.includes('Rơi tự do'), 'Vật lý 10 có Rơi tự do');
assert.ok(appHtml.includes('Đồ thị'), 'Vật lý 10 có Đồ thị chuyển động');
assert.ok(appHtml.includes('Gia tốc'), 'Vật lý 10 có Gia tốc & Chuyển động biến đổi đều');
assert.ok(!appHtml.includes('Chuyển động ném ngang'), 'Vật lý 10 không có Ném ngang (ngoài ma trận Giữa kì I)');
assert.ok(!appHtml.includes('Mômen lực'), 'Vật lý 10 không có Mômen lực (ngoài ma trận Giữa kì I)');

console.log('--- 6. Kiểm tra renderHandbook(chemistry) ---');
vm.runInContext("renderHandbook('chemistry')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Cấu tạo nguyên tử'), 'Hóa học 10 có Cấu tạo nguyên tử');
assert.ok(appHtml.includes('Bảng tuần hoàn'), 'Hóa học 10 có Bảng tuần hoàn');
assert.ok(appHtml.includes('Bán bão hòa') || appHtml.includes('bán bão hòa'), 'Hóa học 10 có ngoại lệ bán bão hòa Cr, Cu');
assert.ok(!appHtml.includes('Liên kết hóa học'), 'Hóa học 10 không có Liên kết hóa học (chưa học)');
assert.ok(!appHtml.includes('Oxi hóa - Khử'), 'Hóa học 10 không có Phản ứng Oxi hóa - Khử (chưa học)');

console.log('--- 7. Kiểm tra tính năng tìm kiếm nhanh trong sổ tay ---');
vm.runInContext("renderHandbook('all', 'Heron')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Heron: S ='), 'Tìm kiếm Heron ra công thức');

vm.runInContext("renderHandbook('all', 'tu-khoa-khong-ton-tai-123456')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Không tìm thấy công thức phù hợp'), 'Hiển thị thông báo khi không tìm thấy');

console.log('--- 8. Kiểm tra Banner Sổ tay trên trang chủ home() ---');
vm.runInContext("renderHandbook('english')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('supplied/REVIEW-1.docx'), 'Sổ tay Tiếng Anh có liên kết tài liệu nguồn');
assert.ok(appHtml.includes('Passive Voice') && appHtml.includes('Stative verbs'), 'Có ngữ pháp trong tài liệu');
assert.ok(!appHtml.includes('Heron: S ='), 'Lọc Tiếng Anh không hiển thị công thức Toán');
vm.runInContext("renderHandbook('english', 'passive')", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Bảng công thức bị động theo thì'), 'Tìm theo passive hiển thị kiến thức bị động');
assert.ok(!appHtml.includes('Gia đình và trách nhiệm'), 'Tìm kiếm loại các mục không phù hợp');
vm.runInContext(`renderHandbook('english', '\\x22><img src=x onerror=alert(1)>')`, context);
appHtml = elements.get('app').innerHTML;
assert.ok(!appHtml.includes('<img src=x'), 'Từ khóa tìm kiếm được hiển thị an toàn');

vm.runInContext("home()", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('handbook-feature-banner'), 'Trang chủ có banner nổi bật sổ tay');
assert.ok(appHtml.includes('Mở sổ tay kiến thức'), 'Trang chủ có nút mở sổ tay');

console.log('--- 9. Kiểm tra nút mở sổ tay trong catalog() ---');
vm.runInContext("catalog(0)", context);
appHtml = elements.get('app').innerHTML;
assert.ok(appHtml.includes('Xem sổ tay công thức'), 'Kho đề có nút xem sổ tay công thức');
vm.runInContext('catalog(4)', context);
assert.ok(elements.get('app').innerHTML.includes('#handbook-english'), 'Kho đề Tiếng Anh mở được sổ tay Tiếng Anh');

console.log('✅ TẤT CẢ CÁC KIỂM TRA CHO SỔ TAY KIẾN THỨC ĐỀU THÀNH CÔNG VÀ CHÍNH XÁC!');
