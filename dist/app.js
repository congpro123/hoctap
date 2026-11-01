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
    crumbEl.textContent = ({ home: 'TỔNG QUAN', subjects: 'KHO ĐỀ THI', handbook: 'SỔ TAY KIẾN THỨC', history: 'LỊCH SỬ LÀM BÀI', exam: 'PHÒNG THI', result: 'KẾT QUẢ' })[view] || 'MÔN HỌC';
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

function startExam(id) {
  const e = exams.find(x => x.id === id);
  if (!e) return;
  const draft = localStorage.getItem('hoctap-draft');
  if (draft) {
    try {
      const d = JSON.parse(draft);
      if (d.id === id && d.deadline > Date.now()) {
        answers = d.answers || {};
        deadline = d.deadline;
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
  clearInterval(ticker);
  ticker = setInterval(tick, 1000);
  tick();
}

function persistDraft() {
  if (activeExam) {
    localStorage.setItem('hoctap-draft', JSON.stringify({ id: activeExam.id, answers, deadline }));
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
            <p>Phần I: ${qLen} trắc nghiệm (0,25đ/câu) · Phần II: ${tfLen} câu đúng/sai · Phần III: ${shortLen} câu trả lời ngắn (0,5đ/câu)</p>
          </div>
          <div class="timer" id="timer">--:--</div>
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
      </div>

      <aside class="exam-aside">
        <div class="aside-label">TIẾN ĐỘ BÀI LÀM</div>
        <div class="progress-text" id="progress-text"></div>
        <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
        <div class="aside-label" style="margin-top:16px;">BẢNG NHẢY CÂU HỎI</div>
        <div class="q-grid">
          ${(e.questions || []).map((_, i) => `<button class="q-jump" data-jump="${i}">${i + 1}</button>`).join('')}
        </div>
        <div class="aside-note">Tiến độ bài làm được lưu tự động trên máy. Khi hết thời gian đếm ngược, bài thi sẽ tự động được thu và chấm điểm.</div>
        <button class="primary submit" data-submit="1">Nộp bài thi</button>
      </aside>
    </div>
  </div>`;
  
  setNav('exam');
  updateProgress();
}

function updateProgress() {
  if (!activeExam) return;
  const n = Object.keys(answers).filter(k => answers[k] !== '' && answers[k] !== undefined).length;
  const total = totalItems(activeExam);
  const progText = document.getElementById('progress-text');
  const progFill = document.getElementById('progress-fill');
  if (progText) progText.textContent = `${n}/${total} ý đã hoàn thành`;
  if (progFill) progFill.style.width = `${total > 0 ? (100 * n / total) : 0}%`;
  document.querySelectorAll('.q-jump').forEach((x, i) => {
    x.classList.toggle('done', answers['m' + i] !== undefined);
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

  const result = {
    id: e.id,
    title: e.title,
    total: totalItems(e),
    correct,
    score: totalScore,
    answers: { ...answers },
    date: new Date().toISOString(),
    reason
  };

  const all = saved();
  all.unshift(result);
  localStorage.setItem('hoctap-results', JSON.stringify(all.slice(0, 50)));
  localStorage.removeItem('hoctap-draft');
  activeExam = null;
  renderResult(result);
}

function renderResult(r) {
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
      </div>
    </div>
  </div>`;
  setNav('result');
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
    }
  }

  const b = e.target.closest('[data-start],[data-viewto],[data-subjectto],[data-submit],[data-jump]');
  if (!b) return;
  if (b.dataset.start) startExam(b.dataset.start);
  else if (b.dataset.viewto) ({ home, subjects: () => catalog(), handbook: () => (typeof renderHandbook === 'function' ? renderHandbook('all') : null), history })[b.dataset.viewto]();
  else if (b.dataset.subjectto !== undefined) catalog(Number(b.dataset.subjectto));
  else if (b.dataset.submit) submitExam('manual');
  else if (b.dataset.jump) {
    const el = document.getElementById('q-' + b.dataset.jump);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
});

document.addEventListener('input', e => {
  const t = e.target;
  if (!t.dataset.kind) return;
  if (t.dataset.kind === 'm') answers['m' + t.dataset.index] = Number(t.value);
  else if (t.dataset.kind === 't') answers['t' + t.dataset.index] = t.value === 'true';
  else if (t.dataset.kind === 's') answers['s' + t.dataset.index] = t.value;
  persistDraft();
  updateProgress();
});

if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('hashchange', () => {
    const h = (typeof location !== 'undefined' && location.hash) ? location.hash : '';
    if (h === '#history') history();
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
