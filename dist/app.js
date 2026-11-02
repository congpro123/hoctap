const subjects = [
  ['Toán', '∑', '#e9e7ff', '#6155e8'],
  ['Vật lý', '⚛️', '#e7f4ff', '#4b9ad8'],
  ['Tin học', '⌘', '#e7f8f0', '#26a979'],
  ['Công nghệ nông nghiệp', '♣', '#eef7e7', '#72ae4b'],
  ['Tiếng Anh', 'Aa', '#fff0e8', '#ec8e63'],
  ['Hoá học', '🧪', '#fceaf4', '#d76fab'],
  ['Lịch sử', '☸', '#fff4df', '#dba546']
];

// Hàm lọc bỏ tiền tố trùng lặp 'A.', 'B.', 'C.', 'D.' hoặc 'a)', 'b)', 'c)', 'd)'
function cleanOptionText(text) {
  if (!text) return '';
  return String(text).replace(/^[A-Da-d][\)\.\:\-]\s*/, '').trim();

}

function cleanItemText(text) {
  if (!text) return '';
  return String(text).replace(/^[a-dA-D][\)\.\:\-]\s*/, '').trim();
}

const isTfTrue = v => (v === true || v === 'true' || v === 'Đúng' || v === 'đúng');
const isTfMatch = (user, expected) => user !== undefined && user !== null && Boolean(user) === isTfTrue(expected);

// Hàm chuẩn hóa dữ liệu đề thi tự động tương thích
function normalizeExam(e) {
  if (!e.source) {
    e.source = {
      school: e.school || 'Đề thi chuẩn',
      province: e.province || '',
      year: e.year || '',
      url: e.sourceUrl || '#',
      note: 'Chuẩn ma trận Bộ GD&ĐT 2026–2027'
    };
  }
  if (!e.minutes && e.duration) e.minutes = e.duration;
  if (!e.minutes) e.minutes = e.subject === 'math' ? 90 : 45;
  if (!e.description) {
    e.description = `Bộ đề kiểm tra giữa học kì I môn ${e.subject === 'math' ? 'Toán 10' : e.subject === 'chemistry' ? 'Hóa học 10' : 'Vật lí 10'}.`;
  }
  
  const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
  if (Array.isArray(e.questions)) {
    e.questions.forEach(q => {
      if (typeof q[2] === 'string' && letterMap[q[2].toUpperCase()] !== undefined) {
        q[2] = letterMap[q[2].toUpperCase()];
      }
      if (Array.isArray(q[1])) {
        q[1] = q[1].map(cleanOptionText);
      }
    });
  } else {
    e.questions = [];
  }

  if (Array.isArray(e.tf)) {
    e.tf.forEach(tfItem => {
      if (Array.isArray(tfItem.items)) {
        tfItem.items.forEach(it => {
          if (it && it[0]) it[0] = cleanItemText(it[0]);
          if (it && it[1] !== undefined) {
            it[1] = isTfTrue(it[1]);
          }
        });
      }
    });
  } else {
    e.tf = [];
  }

  if (Array.isArray(e.short)) {
    e.short.forEach(s => {
      if (!s.text && s.question) s.text = s.question;
      if (!s.question && s.text) s.question = s.text;
      if (s.explain && !s.explanation) s.explanation = s.explain;
      if (s.explanation && !s.explain) s.explain = s.explanation;
    });
  } else {
    e.short = [];
  }
  return e;
}

// Khởi tạo danh sách đề thi (dùng let để an toàn không lỗi const)
let exams = [];
const rawData = (typeof suppliedExams !== 'undefined' && Array.isArray(suppliedExams) && suppliedExams.length > 0)
  ? suppliedExams
  : (typeof window !== 'undefined' && Array.isArray(window.suppliedExams) && window.suppliedExams.length > 0)
    ? window.suppliedExams
    : (typeof mathExams !== 'undefined' && typeof extraExams !== 'undefined')
      ? [...mathExams, ...extraExams]
      : [];

if (rawData.length > 0) {
  exams = rawData.map(normalizeExam);
} else {
  exams = [
    {
      id: 'TOAN10-GKI-01',
      title: 'Toán 10 · Giữa kì I – Đề 01',
      description: 'Mệnh đề, tập hợp và bất phương trình bậc nhất hai ẩn.',
      subject: 'math',
      minutes: 90,
      source: { school: 'THPT Hướng Hóa', province: 'Quảng Trị', year: '2026–2027', url: '#', note: 'Đề minh họa' },
      questions: [['Câu nào là mệnh đề toán học?', ['Trời đẹp quá!', '17 là số nguyên tố.', 'Bạn khỏe không?', 'Cố lên!'], 1, '17 là số nguyên tố là mệnh đề đúng.']],
      tf: [{ stem: 'Cho tập hợp A = {1, 2, 3}.', items: [['1 thuộc A', true, 'Đúng'], ['4 thuộc A', false, 'Sai']] }],
      short: [{ text: 'Số phần tử của tập A = {1, 2, 3} là bao nhiêu?', answer: 3, unit: '', explain: 'Tập A có 3 phần tử.' }]
    }
  ];
}

const app = document.getElementById('app');
let currentView = 'home', activeExam = null, answers = {}, deadline = 0, ticker = null;
let isExamPaused = false, remainingMs = 0;
function tryRenderKatex(root) {
  try {
    if (typeof renderMathInElement === 'function' && root) {
      renderMathInElement(root, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  } catch (err) {
    console.warn('KaTeX render warning:', err);
  }
}

const esc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const saved = () => { try { return JSON.parse(localStorage.getItem('hoctap-results') || '[]'); } catch { return []; } };
const formatDate = d => {
  try {
    return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(d));
  } catch {
    return String(d);
  }
};

const todayEl = document.getElementById('today');
if (todayEl) {
  todayEl.textContent = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
}

const subjectNavEl = document.getElementById('subject-nav');
if (subjectNavEl) {
  subjectNavEl.innerHTML = subjects.map((s, i) =>
    `<a href="#subject-${i}" class="subject-link" data-subjectto="${i}"><span class="subject-icon">${s[1]}</span>${s[0]}</a>`
  ).join('');
}

function getSubjectMeta(subj) {
  if (subj === 'math') return { icon: '∑', name: 'TOÁN 10', color: '#6155e8', bg: '#e9e7ff', id: 0 };
  if (subj === 'chemistry') return { icon: '🧪', name: 'HÓA HỌC 10', color: '#d76fab', bg: '#fceaf4', id: 5 };
  return { icon: '⚛️', name: 'VẬT LÝ 10', color: '#4b9ad8', bg: '#e7f4ff', id: 1 };
}

function setNav(view) {
  document.querySelectorAll('.nav-link').forEach(x => x.classList.toggle('active', x.dataset.view == view));
  document.querySelectorAll('.subject-link').forEach(x => x.classList.toggle('active', view == 'subject-' + x.dataset.subjectto));
  const crumbEl = document.getElementById('crumb');
  if (crumbEl) {
    crumbEl.textContent = ({ home: 'TỔNG QUAN', subjects: 'KHO ĐỀ THI', handbook: 'SỔ TAY KIẾN THỨC', history: 'LỊCH SỬ LÀM BÀI', stats: 'THỐNG KÊ LỚP HỌC', exam: 'PHÒNG THI', result: 'KẾT QUẢ' })[view] || 'MÔN HỌC';
  }
  if (typeof window !== 'undefined' && window.auth && typeof window.auth.renderTopBarUser === 'function') {
    window.auth.renderTopBarUser();
  }
}

function sourceLine(e) {
  const src = e.source || {};
  const url = src.url || e.sourceUrl || '#';
  const school = src.school || e.school || 'Tài liệu chuẩn cấu trúc Bộ GD&ĐT';
  const prov = src.province || e.province || '';
  const yr = src.year || e.year || '';
  const note = src.note || '';
  return `<div class="source-line">Nguồn tham khảo: <a href="${url}" target="_blank" rel="noopener noreferrer">${esc(school)}${prov ? ' · ' + esc(prov) : ''}${yr ? ' · ' + esc(yr) : ''} ↗</a>${note ? `<small>${esc(note)}</small>` : ''}</div>`;
}

function totalItems(e) {
  const qLen = e.questions ? e.questions.length : 0;
  const tfLen = e.tf ? e.tf.reduce((n, q) => n + (q.items ? q.items.length : 0), 0) : 0;
  const shortLen = e.short ? e.short.length : 0;
  return qLen + tfLen + shortLen;
}

function card(e) {
  const sm = getSubjectMeta(e.subject);
  const qCount = e.questions ? e.questions.length : 0;
  const tfCount = e.tf ? e.tf.length : 0;
  const shortCount = e.short ? e.short.length : 0;
  const minutes = e.minutes || e.duration || 45;
  return `<article class="exam-card">
    <div class="card-top">
      <span class="subject-pill" style="background:${sm.bg};color:${sm.color}">${sm.icon}&nbsp; ${sm.name}</span>
      <span class="card-code">${esc(e.id)}</span>
    </div>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.description || 'Đề kiểm tra giữa học kì I theo cấu trúc mới Bộ GD&ĐT.')}</p>
    <div class="meta">
      <span>⏱&nbsp; ${minutes} phút</span>
      <span>📋&nbsp; ${qCount} trắc nghiệm</span>
      <span>☑&nbsp; ${tfCount} đúng/sai</span>
      <span>✍&nbsp; ${shortCount} trả lời ngắn</span>
      ${(e.essay && e.essay.length > 0) ? `<span>📝&nbsp; ${e.essay.length} tự luận</span>` : ''}
    </div>
    ${sourceLine(e)}
    <div class="card-bottom">
      <span>Giữa học kì I</span>
      <button class="primary" data-start="${esc(e.id)}">Bắt đầu làm bài ➔</button>
    </div>
  </article>`;
}

function tiles() {
  return `<div class="subject-grid">${subjects.map((s, i) => {
    let cnt = 0;
    if (i === 0) cnt = exams.filter(e => e.subject === 'math').length;
    else if (i === 1) cnt = exams.filter(e => e.subject === 'physics').length;
    else if (i === 5) cnt = exams.filter(e => e.subject === 'chemistry').length;
    const label = cnt > 0 ? `${cnt} đề thi sẵn sàng` : 'Sắp cập nhật đề thi';
    return `<button class="subject-tile" data-subjectto="${i}">
      <span class="tile-icon" style="background:${s[2]};color:${s[3]}">${s[1]}</span>
      <b>${s[0]}</b>
      <small>${label}</small>
    </button>`;
  }).join('')}</div>`;
}

function home() {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('home')) return;
  const n = saved().length;
  app.innerHTML = `<div class="content">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">🚀&nbsp; PHÒNG LUYỆN THI TRỰC TUYẾN 2026–2027</span>
        <h1>Học tập hôm nay,<br>tự tin ngày mai.</h1>
        <p>Hệ thống ôn luyện trực tuyến với trọn bộ 30 đề thi chuẩn cấu trúc mới Bộ GD&ĐT (Toán 10, Vật lí 10, Hóa học 10), chấm điểm tức thì và hướng dẫn giải chi tiết.</p>
      </div>
      <div class="hero-art">
        <div class="orbit"></div>
        <div class="planet one">∑</div>
        <div class="planet two">⚛️</div>
        <div class="planet three">🧪</div>
      </div>
    </section>
    <section class="stats">
      <div class="stat"><span class="stat-icon purple">▦</span><div><b>07</b><small>Môn học</small></div></div>
      <div class="stat"><span class="stat-icon orange">📋</span><div><b>${String(exams.length).padStart(2, '0')}</b><small>Đề thi sẵn sàng</small></div></div>
      <div class="stat"><span class="stat-icon green">🎯</span><div><b>${String(n).padStart(2, '0')}</b><small>Lượt thi đã hoàn thành</small></div></div>
    </section>
    
    <section class="section-head">
      <div>
        <h2>Đề thi nổi bật giữa kì I</h2>
        <p>Kho 30 đề chọn lọc chuẩn cấu trúc mới kèm đáp án và hướng dẫn giải chi tiết</p>
      </div>
      <button class="text-link" data-viewto="subjects">Xem toàn bộ kho đề ➔</button>
    </section>
    
    <div class="cards">
      ${exams.slice(0, 6).map(card).join('')}
    </div>

    <section class="lower-section">
      <div class="section-head">
        <div>
          <h2>Khám phá các môn học</h2>
          <p>Lựa chọn môn học để xem toàn bộ danh sách 10 đề thi từng môn</p>
        </div>
      </div>
      ${tiles()}
    </section>
  </div>`;
  setNav('home');
}

function catalog(index) {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('subjects')) return;
  let filtered = exams;
  let title = 'Kho đề thi';
  let subtitle = 'Chọn môn học và bộ đề để bắt đầu một lượt thi thử.';
  
  if (index === 0) {
    filtered = exams.filter(e => e.subject === 'math');
    title = 'Toán 10 · Kho đề thi giữa kì I';
    subtitle = `Trọn bộ ${filtered.length} đề thi Toán 10 (thời gian làm bài 90 phút), cấu trúc chuẩn 3 phần có lời giải chi tiết.`;
  } else if (index === 1) {
    filtered = exams.filter(e => e.subject === 'physics');
    title = 'Vật lý 10 · Kho đề thi giữa kì I';
    subtitle = `Trọn bộ ${filtered.length} đề thi Vật lý 10 (thời gian làm bài 45 phút), cấu trúc chuẩn 3 phần có lời giải chi tiết.`;
  } else if (index === 5) {
    filtered = exams.filter(e => e.subject === 'chemistry');
    title = 'Hóa học 10 · Kho đề thi giữa kì I';
    subtitle = `Trọn bộ ${filtered.length} đề thi Hóa học 10 (thời gian làm bài 45 phút), cấu trúc chuẩn 3 phần có lời giải chi tiết.`;
  } else if (index !== undefined) {
    filtered = [];
    title = subjects[index][0];
    subtitle = 'Bộ đề ôn luyện cho môn học này đang được chuẩn bị và sẽ sớm ra mắt.';
  }

  app.innerHTML = `<div class="content">
    <div class="page-heading">
      <h1>${esc(title)}</h1>
      <p>${esc(subtitle)}</p>
    </div>
    <div class="filter-row">
      <button class="filter ${index === undefined ? 'active' : ''}" data-viewto="subjects">Tất cả (${exams.length})</button>
      <button class="filter ${index === 0 ? 'active' : ''}" data-subjectto="0">Toán 10 (${exams.filter(e => e.subject === 'math').length})</button>
      <button class="filter ${index === 1 ? 'active' : ''}" data-subjectto="1">Vật lý 10 (${exams.filter(e => e.subject === 'physics').length})</button>
      <button class="filter ${index === 5 ? 'active' : ''}" data-subjectto="5">Hóa học 10 (${exams.filter(e => e.subject === 'chemistry').length})</button>
    </div>
    ${filtered.length ? `<div class="cards">${filtered.map(card).join('')}</div>` : `<div class="notice"><b>Bộ đề ${esc(title)} sẽ xuất hiện tại đây.</b><br>Trước mắt, bạn có thể luyện tập với 30 đề Toán 10, Vật lý 10 và Hóa học 10.<br><br><button class="primary" data-viewto="subjects">Xem tất cả đề thi ➔</button></div>`}
    ${index === undefined ? `<section class="lower-section"><div class="section-head"><h2>Danh mục môn học</h2></div>${tiles()}</section>` : ''}
  </div>`;
  setNav(index === undefined ? 'subjects' : `subject-${index}`);
}

function history() {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('history')) return;
  const items = saved();
  app.innerHTML = `<div class="content">
    <div class="page-heading">
      <h1>Lịch sử làm bài</h1>
      <p>Kết quả làm bài thi được lưu tự động trên trình duyệt thiết bị này.</p>
    </div>
    ${items.length ? `<div class="history-list">${items.map(x => `<div class="history-item">
      <div>
        <strong>${esc(x.title)}</strong>
        <small>${formatDate(x.date)} · ${x.reason === 'time' ? 'Hết giờ' : 'Đã nộp bài'}</small>
      </div>
      <div class="history-score">${x.correct}/${x.total} (${(x.correct / x.total * 10).toFixed(1).replace('.', ',')} đ)</div>
    </div>`).join('')}</div>` : `<div class="notice">
      <b>Chưa có bài thi nào được hoàn thành</b><br>Hãy thử sức với một đề thi để bắt đầu theo dõi tiến bộ của bạn.<br><br>
      <button class="primary" data-viewto="subjects">Khám phá kho đề thi ➔</button>
    </div>`}
  </div>`;
  setNav('history');
}

function formatTimeRemaining(ms) {
  const left = Math.max(0, ms);
  const m = Math.floor(left / 60000);
  const s = Math.floor((left % 60000) / 1000);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function pauseExam() {
  if (!activeExam || isExamPaused) return;
  isExamPaused = true;
  remainingMs = Math.max(0, deadline - Date.now());
  clearInterval(ticker);
  persistDraft();
  showPauseModal();
}

function resumeExam() {
  if (!activeExam) return;
  isExamPaused = false;
  deadline = Date.now() + remainingMs;
  persistDraft();
  hidePauseModal();
  clearInterval(ticker);
  ticker = setInterval(tick, 1000);
  tick();
}

function showPauseModal() {
  let modal = document.getElementById('exam-pause-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'exam-pause-modal';
    modal.className = 'exam-modal-overlay';
    document.body.appendChild(modal);
  }
  const timeStr = formatTimeRemaining(remainingMs);
  modal.innerHTML = `
    <div class="exam-modal-card pause-card">
      <div class="exam-modal-icon">⏸️</div>
      <h2>Bài thi đang tạm dừng</h2>
      <div class="pause-time-badge">⏱ Thời gian còn lại: <b>${timeStr}</b></div>
      <p class="pause-desc">Đồng hồ đếm ngược đã dừng. Tất cả các câu bạn đã chọn và ghi chú đều được lưu an toàn. Bạn có thể nghỉ ngơi và bấm Tiếp tục làm bài bất cứ khi nào sẵn sàng.</p>
      <div class="exam-modal-actions">
        <button class="primary" data-exam-resume="1">▶ Tiếp tục làm bài</button>
        <button class="aux-btn stop" data-exam-stop="1" style="padding:10px 16px;">⏹ Dừng thi</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
  const examLayout = document.querySelector('.exam-layout');
  if (examLayout) examLayout.classList.add('blurred');
}

function hidePauseModal() {
  const modal = document.getElementById('exam-pause-modal');
  if (modal) modal.style.display = 'none';
  const examLayout = document.querySelector('.exam-layout');
  if (examLayout) examLayout.classList.remove('blurred');
}

function confirmStopExam() {
  if (!activeExam) return;
  if (!isExamPaused) {
    remainingMs = Math.max(0, deadline - Date.now());
    clearInterval(ticker);
  }
  let modal = document.getElementById('exam-stop-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'exam-stop-modal';
    modal.className = 'exam-modal-overlay';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="exam-modal-card stop-card">
      <div class="exam-modal-icon stop-icon">⏹️</div>
      <h2>Xác nhận dừng thi?</h2>
      <p class="stop-warning">Bạn đang làm bài: <b>${esc(activeExam.title)}</b></p>
      <div class="stop-info-box">
        <p>• <b>Dừng thi & Thoát:</b> Hủy phiên làm bài này, xóa bản nháp và quay lại kho đề thi (không ghi nhận điểm).</p>
        <p>• <b>Nộp bài ngay:</b> Chấm điểm và lưu kết quả các câu bạn đã hoàn thành.</p>
      </div>
      <div class="exam-modal-actions vertical">
        <button class="danger-btn" data-exam-stop-confirm="1">⏹ Dừng thi (Hủy phiên làm bài)</button>
        <button class="primary" data-exam-stop-submit="1">📥 Nộp bài & Chấm điểm ngay</button>
        <button class="secondary" data-exam-stop-cancel="1">↩ Tiếp tục làm bài</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function hideStopModal() {
  const modal = document.getElementById('exam-stop-modal');
  if (modal) modal.style.display = 'none';
}

function stopExamFinal() {
  hideStopModal();
  hidePauseModal();
  clearInterval(ticker);
  activeExam = null;
  answers = {};
  isExamPaused = false;
  remainingMs = 0;
  localStorage.removeItem('hoctap-draft');
  catalog();
}

function startExam(id) {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('exam')) return;
  const e = exams.find(x => x.id === id);
  if (!e) return;
  hidePauseModal();
  hideStopModal();
  isExamPaused = false;
  remainingMs = 0;
  const draft = localStorage.getItem('hoctap-draft');
  if (draft) {
    try {
      const d = JSON.parse(draft);
      if (d.id === id) {
        answers = d.answers || {};
        if (d.isPaused && typeof d.remainingMs === 'number' && d.remainingMs > 0) {
          isExamPaused = true;
          remainingMs = d.remainingMs;
          deadline = Date.now() + remainingMs;
        } else if (d.deadline > Date.now()) {
          deadline = d.deadline;
        } else {
          answers = {};
          deadline = Date.now() + (e.minutes || e.duration || 45) * 60000;
        }
      } else {
        answers = {};
        deadline = Date.now() + (e.minutes || e.duration || 45) * 60000;
      }
    } catch {
      answers = {};
      deadline = Date.now() + (e.minutes || e.duration || 45) * 60000;
    }
  } else {
    answers = {};
    deadline = Date.now() + (e.minutes || e.duration || 45) * 60000;
  }
  activeExam = e;
  persistDraft();
  renderExam();
  if (isExamPaused) {
    showPauseModal();
  } else {
    clearInterval(ticker);
    ticker = setInterval(tick, 1000);
    tick();
  }
}

function persistDraft() {
  if (activeExam) {
    localStorage.setItem('hoctap-draft', JSON.stringify({
      id: activeExam.id,
      answers,
      deadline,
      isPaused: isExamPaused,
      remainingMs: isExamPaused ? remainingMs : Math.max(0, deadline - Date.now())
    }));
  }
}

function renderExam() {
  const e = activeExam;
  const sm = getSubjectMeta(e.subject);
  const qLen = e.questions ? e.questions.length : 0;
  const tfLen = e.tf ? e.tf.length : 0;
  const shortLen = e.short ? e.short.length : 0;
  
  app.innerHTML = `<div class="content">
    <div class="exam-layout">
      <div class="exam-main">
        <div class="exam-heading">
          <div>
            <span class="subject-pill" style="background:${sm.bg};color:${sm.color}">${sm.icon}&nbsp; PHÒNG THI ${sm.name}</span>
            <h1>${esc(e.title)}</h1>
            <p>Phần I: ${qLen} trắc nghiệm (0,25đ/câu) · Phần II: ${tfLen} câu đúng/sai · Phần III: ${shortLen} câu trả lời ngắn (0,5đ/câu)${(e.essay && e.essay.length > 0) ? ` · Phần IV: ${e.essay.length} câu tự luận` : ''}</p>
          </div>
          <div class="exam-header-controls">
            <div class="timer" id="timer">--:--</div>
            <div class="exam-quick-actions">
              <button class="btn-timer-ctrl pause" data-exam-pause="1" title="Tạm dừng làm bài">⏸ Tạm dừng</button>
              <button class="btn-timer-ctrl stop" data-exam-stop="1" title="Dừng thi / Hủy bài">⏹ Dừng thi</button>
            </div>
          </div>
        </div>
        ${sourceLine(e)}
        
        <h2 class="part-heading">Phần I · Nhiều lựa chọn (${(e.questions || []).length} câu)</h2>
        ${(e.questions || []).map((q, i) => `<div class="question" id="q-${i}">
          <div class="q-title">
            <span class="q-number">Câu ${i + 1}.</span>
            <span>${q[0]}</span>
          </div>
          <div class="options">
            ${q[1].map((o, j) => `<label class="option ${answers['m' + i] === j ? 'selected' : ''}">
              <input type="radio" name="m${i}" value="${j}" data-kind="m" data-index="${i}" ${answers['m' + i] === j ? 'checked' : ''}>
              <span>${'ABCD'[j]}. ${cleanOptionText(o)}</span>
            </label>`).join('')}
          </div>
        </div>`).join('')}

        <h2 class="part-heading">Phần II · Đúng / Sai (2 câu, mỗi câu 4 ý a, b, c, d)</h2>
        ${(e.tf || []).map((q, i) => `<div class="question" id="tf-${i}">
          <div class="q-title">
            <span class="q-number">Câu ${i + 1}.</span>
            <span>${q.stem}</span>
          </div>
          ${(q.items || []).map((item, j) => `<div class="tf-row">
            <span><b>${'abcd'[j]})</b> ${cleanItemText(item[0])}</span>
            <div class="tf-options">
              <label><input type="radio" name="t${i}-${j}" value="true" data-kind="t" data-index="${i}-${j}" ${answers['t' + i + '-' + j] === true ? 'checked' : ''}> Đúng</label>
              <label><input type="radio" name="t${i}-${j}" value="false" data-kind="t" data-index="${i}-${j}" ${answers['t' + i + '-' + j] === false ? 'checked' : ''}> Sai</label>
            </div>
          </div>`).join('')}
        </div>`).join('')}

        <h2 class="part-heading">Phần III · Trả lời ngắn (4 câu)</h2>
        <p class="short-hint">Điền số đáp án chính xác (chấp nhận cả dấu phẩy và dấu chấm thập phân).</p>
        ${(e.short || []).map((q, i) => `<div class="question" id="short-${i}">
          <div class="q-title">
            <span class="q-number">Câu ${i + 1}.</span>
            <span>${q.text || q.question}</span>
          </div>
          <div class="short-field">
            <input type="text" inputmode="decimal" autocomplete="off" data-kind="s" data-index="${i}" value="${esc(answers['s' + i] ?? '')}" aria-label="Trả lời ngắn câu ${i + 1}">
            <span>${esc(q.unit || '')}</span>
          </div>
        </div>`).join('')}

        ${(e.essay && e.essay.length > 0) ? `
        <h2 class="part-heading">Phần IV · Tự luận (${e.essay.length} câu · 3,0 điểm)</h2>
        <div class="essay-guide-banner" style="background:#eff6ff;border:1px solid #bfdbfe;border-left:4px solid #3b82f6;border-radius:8px;padding:12px 16px;margin:12px 0 16px;font-size:13.5px;color:#1e3a8a;line-height:1.55;">
          📝 <b>Lưu ý phần tự luận:</b> Bạn có thể làm bài ra giấy nháp. Nếu <b>không muốn gõ lại bài làm lên máy, bạn có thể bỏ qua các ô bên dưới</b> và bấm <b>"Nộp bài thi"</b> bất cứ lúc nào. Khi nộp bài, hệ thống sẽ mở đầy đủ <b>Lời giải chi tiết và Barem điểm chấm từng bước</b> để bạn tự chấm điểm và đối chiếu.
        </div>
        ${e.essay.map((q, i) => `<div class="question" id="essay-${i}">
          <div class="q-title" style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <div>
              <span class="q-number">${esc(q.title || `Câu ${i + 1}.`)}</span>
              <span>${q.question}</span>
            </div>
            <span style="font-size:11px;font-weight:600;color:#64748b;background:#f1f5f9;padding:3px 8px;border-radius:6px;align-self:flex-start;">Tùy chọn ghi chú</span>
          </div>
          <div class="essay-field" style="margin-top:10px;">
            <textarea class="essay-input" data-kind="tl" data-index="${i}" rows="3" placeholder="Tùy chọn: Nhập nhanh lời giải hoặc ghi chú (hoặc bỏ trống nếu bạn đã làm ra nháp)..." style="width:100%;box-sizing:border-box;padding:10px 14px;border:1.5px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:14px;line-height:1.5;resize:vertical;background:#fafafa;">${esc(answers['tl' + i] ?? '')}</textarea>
          </div>
        </div>`).join('')}
        ` : ''}
      </div>

      <aside class="exam-aside">
        <div class="aside-label">TIẾN ĐỘ BÀI LÀM</div>
        <div class="progress-text" id="progress-text"></div>
        <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
        <div class="aside-label" style="margin-top:16px;">BẢNG NHẢY CÂU HỎI</div>
        <div class="q-grid">
          ${(e.questions || []).map((_, i) => `<button class="q-jump" data-jump="${i}">${i + 1}</button>`).join('')}
        </div>
        ${(e.essay && e.essay.length > 0) ? `
        <div class="aside-label" style="margin-top:12px;font-size:11px;color:#64748b;">TỰ LUẬN</div>
        <div class="q-grid">
          ${e.essay.map((_, i) => `<button class="q-jump essay-jump" data-jump-essay="${i}">TL${i + 1}</button>`).join('')}
        </div>
        ` : ''}
        <div class="aside-note">Tiến độ bài làm được lưu tự động trên máy. Khi hết thời gian đếm ngược, bài thi sẽ tự động được thu và chấm điểm.</div>
        <div class="exam-control-group">
          <button class="primary submit" data-submit="1">📥 Nộp bài thi</button>
          <div class="exam-aux-buttons">
            <button class="aux-btn pause" data-exam-pause="1" title="Tạm dừng làm bài">⏸ Tạm dừng</button>
            <button class="aux-btn stop" data-exam-stop="1" title="Dừng thi / Thoát">⏹ Dừng thi</button>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
  
  setNav('exam');
  updateProgress();
  tryRenderKatex(app);
}

function updateProgress() {
  if (!activeExam) return;
  const mcCount = (activeExam.questions || []).filter((_, i) => answers['m' + i] !== undefined).length;
  let tfCount = 0;
  (activeExam.tf || []).forEach((q, i) => {
    (q.items || []).forEach((_, j) => {
      if (answers['t' + i + '-' + j] !== undefined) tfCount++;
    });
  });
  const shortCount = (activeExam.short || []).filter((_, i) => answers['s' + i] !== undefined && String(answers['s' + i]).trim() !== '').length;
  const essayCount = (activeExam.essay || []).filter((_, i) => answers['tl' + i] !== undefined && String(answers['tl' + i]).trim() !== '').length;
  const n = mcCount + tfCount + shortCount;
  const total = totalItems(activeExam);
  const progText = document.getElementById('progress-text');
  const progFill = document.getElementById('progress-fill');
  if (progText) {
    progText.textContent = `${n}/${total} ý trắc nghiệm/điền số${essayCount > 0 ? ` · ${essayCount} câu TL có ghi chú` : ''}`;
  }
  if (progFill) progFill.style.width = `${total > 0 ? (100 * n / total) : 0}%`;
  document.querySelectorAll('.q-jump[data-jump]').forEach((x, i) => {
    x.classList.toggle('done', answers['m' + i] !== undefined);
  });
  document.querySelectorAll('.essay-jump').forEach((x, i) => {
    x.classList.toggle('done', answers['tl' + i] !== undefined && String(answers['tl' + i]).trim() !== '');
  });
}

function tick() {
  if (!activeExam) return;
  const left = Math.max(0, deadline - Date.now());
  const m = Math.floor(left / 60000);
  const s = Math.floor((left % 60000) / 1000);
  const el = document.getElementById('timer');
  if (el) {
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.classList.toggle('urgent', left <= 60000);
  }
  if (left <= 0) submitExam('time');
}

function shortCorrect(input, answer) {
  if (input === undefined || String(input).trim() === '') return false;
  const normInput = String(input).trim().replace(',', '.');
  const normAns = String(answer).trim().replace(',', '.');
  if (/^-?\d+(\.\d+)?$/.test(normInput) && /^-?\d+(\.\d+)?$/.test(normAns)) {
    return Math.abs(Number(normInput) - Number(normAns)) < 0.001;
  }
  const strippedInput = normInput.replace(/\s*[^\d.-]+$/, '').trim();
  const strippedAns = normAns.replace(/\s*[^\d.-]+$/, '').trim();
  if (/^-?\d+(\.\d+)?$/.test(strippedInput) && /^-?\d+(\.\d+)?$/.test(strippedAns)) {
    return Math.abs(Number(strippedInput) - Number(strippedAns)) < 0.001;
  }
  return normInput.toLowerCase() === normAns.toLowerCase();
}

function submitExam(reason) {
  if (!activeExam) return;
  const e = activeExam;
  clearInterval(ticker);
  
  let correct = 0;
  let scoreP1 = 0;
  (e.questions || []).forEach((q, i) => {
    if (answers['m' + i] === q[2]) {
      correct++;
      scoreP1 += 0.25;
    }
  });

  let scoreP2 = 0;
  (e.tf || []).forEach((q, i) => {
    let subCorrect = 0;
    (q.items || []).forEach((item, j) => {
      if (isTfMatch(answers['t' + i + '-' + j], item[1])) {
        correct++;
        subCorrect++;
      }
    });
    if (subCorrect === 1) scoreP2 += 0.1;
    else if (subCorrect === 2) scoreP2 += 0.25;
    else if (subCorrect === 3) scoreP2 += 0.5;
    else if (subCorrect === 4) scoreP2 += 1.0;
  });

  let scoreP3 = 0;
  (e.short || []).forEach((q, i) => {
    if (shortCorrect(answers['s' + i], q.answer)) {
      correct++;
      scoreP3 += 0.5;
    }
  });

  const totalScore = Math.min(10, Math.round((scoreP1 + scoreP2 + scoreP3) * 100) / 100);

  const curUser = (typeof auth !== 'undefined' && typeof auth.getCurrentUser === 'function') ? auth.getCurrentUser() : null;
  const examSub = e.subject || (e.id.startsWith('toan-') ? 'math' : e.id.startsWith('vatli-') ? 'physics' : 'chemistry');

  const result = {
    id: e.id,
    title: e.title,
    subject: examSub,
    total: totalItems(e),
    correct,
    score: totalScore,
    points: totalScore,
    maxPoints: 10,
    answers: { ...answers },
    date: new Date().toISOString(),
    reason,
    userId: curUser ? curUser.id : 'u-congpro123',
    username: curUser ? curUser.username : 'congpro123',
    studentName: curUser ? curUser.name : 'Thái Thành Công'
  };

  if (typeof auth !== 'undefined' && typeof auth.saveExamResult === 'function') {
    auth.saveExamResult(result);
  } else {
    const all = saved();
    all.unshift(result);
    localStorage.setItem('hoctap-results', JSON.stringify(all.slice(0, 50)));
  }
  localStorage.removeItem('hoctap-draft');
  activeExam = null;
  renderResult(result);
}

function renderResult(r) {
  hidePauseModal();
  hideStopModal();
  const e = exams.find(x => x.id === r.id) || { title: r.title, questions: [], tf: [], short: [] };
  const scoreNum = r.score !== undefined ? r.score : (r.correct / r.total * 10);
  
  app.innerHTML = `<div class="content">
    <div class="result-panel">
      <div class="result-icon">${scoreNum >= 7 ? '🎉' : scoreNum >= 5 ? '📘' : '💪'}</div>
      <h1>${r.reason === 'time' ? 'Đã hết giờ làm bài!' : 'Bạn đã hoàn thành bài thi!'}</h1>
      <p><b>${esc(r.title)}</b> · Hoàn thành: ${formatDate(r.date)}</p>
      
      <div class="score">${scoreNum.toFixed(2).replace('.', ',')} / 10 Điểm</div>
      <p style="color:#64748b;font-size:15px;margin-bottom:24px;">Trả lời đúng: <b>${r.correct}</b> / ${r.total} ý hỏi · Điểm chuẩn cấu trúc Bộ GD&ĐT 2026–2027.</p>
      
      ${sourceLine(e)}
      
      <div style="display:flex;gap:12px;justify-content:center;margin:24px 0;">
        <button class="primary" data-start="${esc(r.id)}">Làm lại đề này ↺</button>
        <button class="secondary" data-viewto="subjects">Về kho đề thi ➔</button>
      </div>

      <div class="review">
        <div class="section-head">
          <h2>Chi tiết lời giải & hướng dẫn chấm (Kiến thức Lớp 10)</h2>
        </div>

        <h3>Phần I · Trắc nghiệm 4 lựa chọn (${(e.questions || []).length} câu)</h3>
        ${(e.questions || []).map((q, i) => {
          const user = r.answers['m' + i];
          const ok = user === q[2];
          return `<div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag">Phần I · Trắc nghiệm</span>
              <span class="review-item-number">Câu ${i + 1}</span>
            </div>
            <div class="review-q-text"><b>Câu ${i + 1}.</b> ${q[0]}</div>
            ${Array.isArray(q[1]) && q[1].length ? `
            <div class="review-options-list">
              ${q[1].map((opt, optIdx) => {
                const isKey = optIdx === q[2];
                const isChosen = optIdx === user;
                const cls = isKey ? 'review-option-row key-correct' : (isChosen && !ok ? 'review-option-row user-wrong' : 'review-option-row');
                const icon = isKey ? '✓' : (isChosen && !ok ? '✗' : '○');
                return `<div class="${cls}"><b>${'ABCD'[optIdx]}.</b> <span>${esc(cleanOptionText(opt))}</span> <span style="margin-left:auto;font-weight:700;">${icon}</span></div>`;
              }).join('')}
            </div>` : ''}
            <div class="review-status-row">
              ${ok ? `<span class="badge-user-ans correct">✓ Bạn đã chọn: ${'ABCD'[user]} (Đúng)</span>` : user === undefined ? `<span class="badge-user-ans unanswered">⚪ Chưa trả lời câu này</span>` : `<span class="badge-user-ans wrong">✗ Bạn chọn: ${'ABCD'[user]}. ${esc(cleanOptionText(q[1][user]))}</span>`}
              <span class="badge-correct-ans">✓ Đáp án chuẩn: ${'ABCD'[q[2]]}. ${esc(cleanOptionText(q[1][q[2]]))}</span>
            </div>
            <div class="solution-box theme-study">
              <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
              <div class="solution-body">${q[3] || 'Áp dụng định nghĩa và kiến thức SGK Lớp 10 để chọn đáp án đúng.'}</div>
            </div>
          </div>`;
        }).join('')}

        <h3>Phần II · Trắc nghiệm Đúng / Sai (2 câu)</h3>
        ${(e.tf || []).map((q, i) => `<div class="review-item">
          <div class="review-item-header">
            <span class="review-part-tag">Phần II · Đúng / Sai</span>
            <span class="review-item-number">Câu ${i + 1}</span>
          </div>
          <div class="review-stem-box">
            <div class="review-stem-title">📖 Đề bài chung (Câu ${i + 1}):</div>
            <div class="review-stem-content">${q.stem}</div>
          </div>
          ${(q.items || []).map((item, j) => {
            const user = r.answers['t' + i + '-' + j];
            const ok = isTfMatch(user, item[1]);
            const expTrue = isTfTrue(item[1]);
            return `<div class="sub-review">
              <div style="font-size: 14.5px; color: #1e293b; line-height: 1.5; font-weight:600;"><b>Ý ${'abcd'[j]}):</b> ${cleanItemText(item[0])}</div>
              <div class="review-status-row">
                ${ok ? `<span class="badge-user-ans correct">✓ Bạn chọn: ${user ? 'ĐÚNG' : 'SAI'} (Chính xác)</span>` : user === undefined ? `<span class="badge-user-ans unanswered">⚪ Chưa chọn ý này</span>` : `<span class="badge-user-ans wrong">✗ Bạn chọn: ${user ? 'ĐÚNG' : 'SAI'}</span>`}
                <span class="badge-correct-ans">✓ Khẳng định này là: <b>${expTrue ? 'ĐÚNG' : 'SAI'}</b></span>
              </div>
              <div class="solution-box theme-study" style="margin-top:8px;">
                <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
                <div class="solution-body">${item[2] || (expTrue ? 'Khẳng định này là ĐÚNG theo kiến thức Lớp 10.' : 'Khẳng định này là SAI theo kiến thức Lớp 10.')}</div>
              </div>
            </div>`;
          }).join('')}
        </div>`).join('')}

        <h3>Phần III · Trả lời ngắn (4 câu)</h3>
        ${(e.short || []).map((q, i) => {
          const user = r.answers['s' + i];
          const ok = shortCorrect(user, q.answer);
          return `<div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag">Phần III · Trả lời ngắn</span>
              <span class="review-item-number">Câu ${i + 1}</span>
            </div>
            <div class="review-q-text"><b>Câu ${i + 1}.</b> ${q.text || q.question}</div>
            <div class="review-status-row">
              ${ok ? `<span class="badge-user-ans correct">✓ Bạn điền: ${esc(user)} (Chính xác)</span>` : user === undefined || String(user).trim() === '' ? `<span class="badge-user-ans unanswered">⚪ Chưa điền kết quả</span>` : `<span class="badge-user-ans wrong">✗ Bạn đã điền: ${esc(user)}</span>`}
              <span class="badge-correct-ans">✓ Đáp án chuẩn: <b>${esc(q.answer)}${q.unit ? ' ' + esc(q.unit) : ''}</b></span>
            </div>
            <div class="solution-box theme-study">
              <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
              <div class="solution-body">${q.explain || q.explanation || 'Áp dụng các định luật và công thức tính toán theo chuẩn kiến thức Lớp 10.'}</div>
            </div>
          </div>`;
        }).join('')}

        ${(e.essay && e.essay.length > 0) ? `
        <h3>Phần IV · Tự luận (${e.essay.length} câu)</h3>
        ${e.essay.map((q, i) => {
          const userWork = r.answers['tl' + i];
          return `<div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag" style="background:#fef3c7;color:#92400e;">Phần IV · Tự luận</span>
              <span class="review-item-number">${esc(q.title || `Câu ${i + 1}`)}</span>
            </div>
            <div class="review-q-text"><b>${esc(q.title || `Câu ${i + 1}.`)}</b> ${q.question}</div>
            <div class="student-essay-box" style="margin:12px 0;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
              <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;">📝 Bài làm / ghi chú của bạn:</div>
              <div style="font-size:14px;color:#1e293b;white-space:pre-wrap;font-family:inherit;">${userWork ? esc(userWork) : '<span style="color:#64748b;font-style:italic;">(Bỏ qua ô nhập / làm ra giấy nháp — đối chiếu lời giải chi tiết và barem điểm chấm bên dưới)</span>'}</div>
            </div>
            <div class="solution-box theme-study">
              <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT & BAREM ĐIỂM CHẤM:</div>
              <div class="solution-body">${q.solution || 'Áp dụng định lý và kiến thức SGK để trình bày lời giải.'}</div>
            </div>
          </div>`;
        }).join('')}
        ` : ''}
      </div>
    </div>
  </div>`;
  setNav('result');
  tryRenderKatex(app);
}

// Lắng nghe sự kiện toàn cục
document.addEventListener('click', e => {
  // Bắt tất cả các liên kết / nút mở Sổ tay kiến thức
  const hbLink = e.target.closest('a[href="#handbook"], a[href^="#handbook-"], [data-view="handbook"], [data-viewto="handbook"]');
  if (hbLink) {
    const href = hbLink.getAttribute('href') || '#handbook';
    const part = href.replace('#handbook', '').replace(/^-/, '');
    try { if (typeof window !== 'undefined' && window.location) window.location.hash = href; } catch (_) {}
    if (typeof renderHandbook === 'function') {
      renderHandbook(part || 'all');
      return;
    }
  }

  // Bắt các nút điều hướng sidebar .nav-link
  const navLink = e.target.closest('.nav-link[data-view]');
  if (navLink) {
    const v = navLink.dataset.view;
    if (v === 'handbook') {
      if (typeof renderHandbook === 'function') { renderHandbook('all'); return; }
    } else if (v === 'home') {
      home(); return;
    } else if (v === 'subjects') {
      catalog(); return;
    } else if (v === 'history') {
      history(); return;
    } else if (v === 'stats') {
      if (typeof window !== 'undefined' && window.auth && typeof window.auth.renderStatsView === 'function') {
        window.auth.renderStatsView(); return;
      }
    }
  }

  const b = e.target.closest('[data-start],[data-viewto],[data-subjectto],[data-submit],[data-jump]');
  if (!b) return;
  if (b.dataset.start) startExam(b.dataset.start);
  else if (b.dataset.viewto) ({ home, subjects: () => catalog(), handbook: () => (typeof renderHandbook === 'function' ? renderHandbook('all') : null), history })[b.dataset.viewto]();
  else if (b.dataset.subjectto !== undefined) catalog(Number(b.dataset.subjectto));
  else if (b.dataset.submit) {
    if (activeExam) {
      const unans = [];
      const qLen = activeExam.questions ? activeExam.questions.length : 0;
      for (let i = 0; i < qLen; i++) {
        if (answers['m' + i] === undefined) unans.push(`Câu ${i + 1} (Phần I)`);
      }
      (activeExam.tf || []).forEach((q, i) => {
        (q.items || []).forEach((_, j) => {
          if (answers['t' + i + '-' + j] === undefined) unans.push(`Câu ${i + 1}${['a','b','c','d'][j]} (Phần II)`);
        });
      });
      (activeExam.short || []).forEach((q, i) => {
        if (answers['s' + i] === undefined || String(answers['s' + i]).trim() === '') {
          unans.push(`Câu ${i + 1} (Phần III)`);
        }
      });
      if (unans.length > 0) {
        const confirmMsg = `Bạn còn ${unans.length} câu/ý chưa hoàn thành:\n• ${unans.slice(0, 5).join('\n• ')}${unans.length > 5 ? `\n• ...và ${unans.length - 5} câu khác` : ''}\n\nBạn có chắc chắn muốn nộp bài ngay không?`;
        if (typeof confirm === 'function' && !confirm(confirmMsg)) return;
      }
    }
    submitExam('manual');
  }
  else if (b.dataset.jump) {
    const el = document.getElementById('q-' + b.dataset.jump);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  else if (b.dataset.jumpEssay !== undefined) {
    const el = document.getElementById('essay-' + b.dataset.jumpEssay);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  else if (b.dataset.examPause) pauseExam();
  else if (b.dataset.examResume) resumeExam();
  else if (b.dataset.examStop) confirmStopExam();
  else if (b.dataset.examStopConfirm) stopExamFinal();
  else if (b.dataset.examStopSubmit) {
    hideStopModal();
    hidePauseModal();
    submitExam('manual');
  }
  else if (b.dataset.examStopCancel) {
    hideStopModal();
    if (isExamPaused) {
      showPauseModal();
    } else {
      deadline = Date.now() + remainingMs;
      clearInterval(ticker);
      ticker = setInterval(tick, 1000);
      tick();
    }
  }
});

function handleExamInput(e) {
  const t = e.target;
  if (!t || !t.dataset || !t.dataset.kind) return;
  if (t.dataset.kind === 'm') answers['m' + t.dataset.index] = Number(t.value);
  else if (t.dataset.kind === 't') answers['t' + t.dataset.index] = t.value === 'true';
  else if (t.dataset.kind === 's') answers['s' + t.dataset.index] = t.value;
  else if (t.dataset.kind === 'tl') answers['tl' + t.dataset.index] = t.value;
  persistDraft();
  updateProgress();
}
document.addEventListener('input', handleExamInput);
document.addEventListener('change', handleExamInput);

if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('hashchange', () => {
    const h = (typeof location !== 'undefined' && location.hash) ? location.hash : '';
    if (h === '#history') history();
    else if (h === '#stats') { if (typeof window !== 'undefined' && window.auth && typeof window.auth.renderStatsView === 'function') window.auth.renderStatsView(); }
    else if (h.startsWith('#subject-')) catalog(Number(h.split('-')[1]));
    else if (h === '#subjects') catalog();
    else if (h === '#handbook' || h.startsWith('#handbook-')) {
      const part = h.replace('#handbook', '').replace(/^-/, '');
      if (typeof renderHandbook === 'function') renderHandbook(part || 'all');
    }
    else home();
  });
}

// Khởi chạy khi nạp trang
if (typeof location !== 'undefined' && location.hash && typeof window !== 'undefined' && window.dispatchEvent) {
  window.dispatchEvent(new Event('hashchange'));
} else {
  home();
}
