// Lightweight exam presence: no answers or scores are sent to this endpoint.
(function () {
  'use strict';
  const DEFAULT_DB = 'https://hoctap-b7d06-default-rtdb.asia-southeast1.firebasedatabase.app';
  const HEARTBEAT_MS = 15000;
  const ACTIVE_FOR_MS = 60000;
  const sessionId = (() => {
    try {
      const existing = sessionStorage.getItem('hoctap-exam-session');
      if (existing) return existing;
      const created = crypto.randomUUID();
      sessionStorage.setItem('hoctap-exam-session', created);
      return created;
    } catch (_) {
      return 'session-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    }
  })();
  let currentExam = null;
  let paused = false;
  let heartbeatTimer = null;
  let adminTimer = null;

  function endpoint() {
    let base = DEFAULT_DB;
    try { base = localStorage.getItem('hoctap-firebase-url') || base; } catch (_) {}
    return base.replace(/\/+$/, '') + '/exam-presence';
  }

  function user() {
    return window.auth && typeof window.auth.getCurrentUser === 'function'
      ? window.auth.getCurrentUser() : null;
  }

  function send() {
    const account = user();
    if (!currentExam || !account) return;
    if (!document.querySelector('.exam-layout') && !document.querySelector('.original-pdf-exam')) {
      stop();
      return;
    }
    const payload = {
      userId: account.id,
      username: account.username,
      name: account.name,
      examId: currentExam.id,
      examTitle: currentExam.title,
      status: paused ? 'paused' : 'active',
      updatedAt: Date.now()
    };
    fetch(`${endpoint()}/${encodeURIComponent(sessionId)}.json`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), keepalive: true
    }).catch(() => {});
  }

  function stop() {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
    currentExam = null;
    fetch(`${endpoint()}/${encodeURIComponent(sessionId)}.json`, {
      method: 'DELETE', keepalive: true
    }).catch(() => {});
  }

  function start(exam, isPaused) {
    if (!exam) return;
    currentExam = { id: exam.id, title: exam.title };
    paused = !!isPaused;
    clearInterval(heartbeatTimer);
    send();
    heartbeatTimer = setInterval(send, HEARTBEAT_MS);
  }

  function setPaused(value) {
    if (!currentExam) return;
    paused = !!value;
    send();
  }

  function renderAdmin(root, records) {
    const recent = Object.values(records || {}).filter(record =>
      record && record.status === 'active' &&
      Number.isFinite(Number(record.updatedAt)) &&
      Date.now() - Number(record.updatedAt) >= 0 &&
      Date.now() - Number(record.updatedAt) < ACTIVE_FOR_MS
    );
    const byUser = new Map();
    recent.forEach(record => {
      const key = record.userId || record.username;
      if (key && (!byUser.has(key) || byUser.get(key).updatedAt < record.updatedAt)) byUser.set(key, record);
    });
    const people = [...byUser.values()].sort((a, b) => b.updatedAt - a.updatedAt);
    root.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = `🔴 Đang làm bài: ${people.length} người`;
    root.appendChild(heading);
    if (!people.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Hiện không có ai đang làm bài thi.';
      root.appendChild(empty);
      return;
    }
    const list = document.createElement('ul');
    list.className = 'exam-presence-list';
    people.forEach(record => {
      const item = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = `${record.name || record.username || 'Học sinh'} (@${record.username || '?'})`;
      const exam = document.createElement('span');
      exam.textContent = record.examTitle || record.examId || 'Đề thi';
      item.append(name, exam);
      list.appendChild(item);
    });
    root.appendChild(list);
  }

  function mountAdmin() {
    clearInterval(adminTimer);
    const root = document.getElementById('exam-presence-panel');
    if (!root || !window.auth || !window.auth.isAdmin()) return;
    const refresh = async () => {
      if (!root.isConnected || location.hash !== '#stats') {
        clearInterval(adminTimer);
        adminTimer = null;
        return;
      }
      try {
        const response = await fetch(`${endpoint()}.json`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Không kết nối được dữ liệu trực tuyến.');
        renderAdmin(root, await response.json());
      } catch (_) {
        root.textContent = 'Chưa tải được danh sách người đang làm bài. Sẽ tự thử lại.';
      }
    };
    refresh();
    adminTimer = setInterval(refresh, 10000);
  }

  window.addEventListener('pagehide', stop);
  window.examPresence = { start, setPaused, stop, mountAdmin };
})();
