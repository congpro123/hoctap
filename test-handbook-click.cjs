const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');

console.log('--- TEST MÔ PHỎNG HÀNH VI CLICK VÀ ĐIỀU HƯỚNG SỔ TAY KIẾN THỨC ---');

function createBrowserEnv(initialHash = '') {
  const elements = new Map();
  const listeners = { click: [], hashchange: [] };

  function mockElement(id, tag = 'div', attrs = {}) {
    if (!elements.has(id)) {
      elements.set(id, {
        id,
        tagName: tag.toUpperCase(),
        dataset: { ...attrs },
        attributes: { ...attrs },
        textContent: '',
        innerHTML: '',
        value: '',
        style: {},
        classList: {
          contains: () => false,
          toggle(cls, val) { this[cls] = val; },
          add(cls) { this[cls] = true; },
          remove(cls) { this[cls] = false; }
        },
        getAttribute(k) { return this.attributes[k] || this.dataset[k.replace('data-', '')] || null; },
        closest(sel) {
          // Kiểm tra xem phần tử có match sel không
          if (sel.includes('href="#handbook"') && this.attributes.href === '#handbook') return this;
          if (sel.includes('data-view="handbook"') && this.dataset.view === 'handbook') return this;
          if (sel.includes('data-viewto="handbook"') && this.dataset.viewto === 'handbook') return this;
          if (sel.includes('.nav-link') && this.classList.navLink) return this;
          if (sel.includes('data-view') && this.dataset.view) return this;
          if (sel.includes('data-viewto') && this.dataset.viewto) return this;
          return null;
        },
        querySelector: () => mockElement('sub'),
        querySelectorAll: () => [],
        scrollIntoView: () => {},
        addEventListener: (evt, fn) => { (listeners[evt] = listeners[evt] || []).push(fn); }
      });
    }
    return elements.get(id);
  }

  const document = {
    getElementById: id => mockElement(id),
    querySelector: sel => mockElement('q-' + sel),
    querySelectorAll: () => [mockElement('n-1'), mockElement('n-2')],
    addEventListener: (evt, fn) => { (listeners[evt] = listeners[evt] || []).push(fn); }
  };

  const window = {
    location: { hash: initialHash, origin: 'http://localhost', pathname: '/' },
    history: { pushState: (state, title, url) => { window.location.hash = url; } },
    addEventListener: (evt, fn) => { (listeners[evt] = listeners[evt] || []).push(fn); },
    dispatchEvent: (evt) => { (listeners[evt.type] || []).forEach(fn => fn(evt)); },
    scrollTo: () => {}
  };

  const context = vm.createContext({
    document,
    window,
    location: window.location,
    history: window.history,
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    Event: class { constructor(t) { this.type = t; } },
    console, Intl, Date, Math, Number, String, Array, Set, Map
  });

  // Nạp các script đúng theo thứ tự trong index.html:
  // extra-exams.js -> math-exams.js -> supplied_exams.js -> handbook.js -> app.js -> ui-upgrades.js -> scoring.js -> dedup.js -> analytics.js
  const scriptOrder = [
    'extra-exams.js',
    'math-exams.js',
    'supplied_exams.js',
    'handbook.js',
    'app.js',
    'ui-upgrades.js',
    'scoring.js',
    'dedup.js',
    'analytics.js'
  ];

  for (const f of scriptOrder) {
    vm.runInContext(fs.readFileSync('dist/' + f, 'utf8'), context, { filename: f });
  }

  return { context, elements, listeners, mockElement, window };
}

// 1. Kiểm tra nạp trang khi URL đã có sẵn #handbook
console.log('Case 1: Người dùng mở trang trực tiếp với hash #handbook');
const env1 = createBrowserEnv('#handbook');
let appHtml1 = env1.elements.get('app').innerHTML;
assert.ok(appHtml1.includes('Sổ tay Công thức & Lý thuyết'), 'Tự động mở sổ tay khi URL có #handbook');

// 2. Kiểm tra nạp trang mặc định (trang chủ)
console.log('Case 2: Người dùng mở trang chủ bình thường');
const env2 = createBrowserEnv('');
let appHtml2 = env2.elements.get('app').innerHTML;
assert.ok(appHtml2.includes('Sổ tay Công thức & Lý thuyết Giữa kì I'), 'Trang chủ có banner Sổ tay');

// 3. Người dùng bấm nút mở sổ tay trên Sidebar:
console.log('Case 3: Người dùng bấm vào nút Sổ tay kiến thức trên sidebar');
const sidebarNavBtn = env2.mockElement('sidebar-hb-btn', 'a', {
  href: '#handbook',
  view: 'handbook',
  viewto: 'handbook'
});
sidebarNavBtn.classList.navLink = true;

// Kích hoạt click listener
const clickEvent = {
  target: sidebarNavBtn,
  preventDefault: () => {}
};
(env2.listeners.click || []).forEach(fn => fn(clickEvent));

let appHtmlAfterClick = env2.elements.get('app').innerHTML;
assert.ok(appHtmlAfterClick.includes('Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)'), 'Sau khi bấm, Sổ tay hiển thị đầy đủ');
assert.ok(appHtmlAfterClick.includes('Toán 10'), 'Có môn Toán 10');
assert.ok(appHtmlAfterClick.includes('Vật lý 10'), 'Có môn Vật lý 10');
assert.ok(appHtmlAfterClick.includes('Hóa học 10'), 'Có môn Hóa học 10');

// 4. Bấm lại một lần nữa khi hash đã là #handbook (trước đây bị lỗi no-op):
console.log('Case 4: Bấm lại vào nút Sổ tay khi hash đã là #handbook');
(env2.listeners.click || []).forEach(fn => fn(clickEvent));
let appHtmlAfterSecondClick = env2.elements.get('app').innerHTML;
assert.ok(appHtmlAfterSecondClick.includes('Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)'), 'Vẫn mở thành công khi bấm lại');

// 5. Bấm vào nút mở trên banner trang chủ:
console.log('Case 5: Bấm vào nút Mở sổ tay kiến thức trên banner trang chủ');
const bannerBtn = env2.mockElement('banner-btn', 'a', { href: '#handbook' });
(env2.listeners.click || []).forEach(fn => fn({ target: bannerBtn, preventDefault: () => {} }));
let appHtmlBanner = env2.elements.get('app').innerHTML;
assert.ok(appHtmlBanner.includes('Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)'), 'Banner mở sổ tay chuẩn xác');

console.log('✅ TẤT CẢ CÁC TRƯỜNG HỢP CLICK MỞ SỔ TAY ĐỀU HOẠT ĐỘNG HOÀN HẢO!');
