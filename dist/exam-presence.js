// Lightweight exam presence: no answers or scores are sent to this endpoint.
(function () {
  'use strict';
  const DEFAULT_DB = 'https://hoctap-b7d06-default-rtdb.asia-southeast1.firebasedatabase.app';
  const HEARTBEAT_MS = 15000;
  const ACTIVE_FOR_MS = 120000;
  const newId = () => {
    try { return crypto.randomUUID(); }
    catch (_) { return 'session-' + Date.now() + '-' + Math.random().toString(36).slice(2); }
  };
  let currentExam = null;
  let currentAttemptId = null;
  let startedAt = null;
  let paused = false;
  let heartbeatTimer = null;
  let adminTimer = null;
  let publicTimer = null;
  let lastPublicCount = null;
  let emptySince = 0;
  let lastAdminRecords = null;
  let adminEmptySince = 0;
  let publicRefreshing = false;
  let adminRefreshing = false;
  let presenceWrite = Promise.resolve();

  function endpoint() {
    let base = DEFAULT_DB;
    try { base = localStorage.getItem('hoctap-firebase-url') || base; } catch (_) {}
    return base.replace(/\/+$/, '') + '/exam-presence';
  }

  function historyEndpoint() {
    return endpoint().replace(/\/exam-presence$/, '/exam-attempt-history');
  }

  function user() {
    return window.auth && typeof window.auth.getCurrentUser === 'function'
      ? window.auth.getCurrentUser() : null;
  }

  function send() {
    const account = user();
    if (!currentExam || !account) return;
    const now = Date.now();
    const payload = {
      userId: account.id,
      username: account.username,
      name: account.name,
      examId: currentExam.id,
      examTitle: currentExam.title,
      status: paused ? 'paused' : 'active',
      startedAt,
      updatedAt: now
    };
    const attemptId = currentAttemptId;
    presenceWrite = presenceWrite.catch(() => {}).then(() => fetch(`${endpoint()}/${encodeURIComponent(attemptId)}.json`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), keepalive: true
    })).catch(() => {});
    fetch(`${historyEndpoint()}/${encodeURIComponent(currentAttemptId)}.json`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), keepalive: true
    }).catch(() => {});
  }

  function stop(reason = 'left') {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
    const attemptId = currentAttemptId;
    const account = user();
    const exam = currentExam;
    if (attemptId && account && exam) {
      const now = Date.now();
      const finalStatus = reason === 'submitted' || reason === 'time' ? 'submitted'
        : reason === 'cancelled' ? 'cancelled' : 'left';
      fetch(`${historyEndpoint()}/${encodeURIComponent(attemptId)}.json`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: finalStatus, updatedAt: now, endedAt: now }), keepalive: true
      }).catch(() => {});
      presenceWrite = presenceWrite.catch(() => {}).then(() => fetch(`${endpoint()}/${encodeURIComponent(attemptId)}.json`, {
        method: 'DELETE', keepalive: true
      })).catch(() => {});
    }
    currentExam = null;
    currentAttemptId = null;
    startedAt = null;
  }

  function start(exam, isPaused) {
    if (!exam) return;
    if (currentExam && currentExam.id !== exam.id) stop('left');
    if (!currentAttemptId) {
      currentAttemptId = newId();
      startedAt = Date.now();
    }
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

  function formatTime(value) {
    const time = Number(value);
    if (!Number.isFinite(time)) return 'Không rõ thời gian';
    return new Intl.DateTimeFormat('vi-VN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(new Date(time));
  }

  function statusText(record) {
    if ((record.status === 'active' || record.status === 'paused') && Date.now() - Number(record.updatedAt || 0) >= ACTIVE_FOR_MS) {
      return 'Mất kết nối';
    }
    return ({ active: 'Đang làm', paused: 'Tạm dừng', submitted: 'Đã nộp', cancelled: 'Đã hủy', left: 'Đã rời trang' })[record.status] || 'Không rõ';
  }

  function activePeople(records) {
    const now = Date.now();
    const byUser = new Map();
    Object.values(records || {}).forEach(record => {
      if (!record || !['active', 'paused'].includes(record.status)) return;
      const updatedAt = Number(record.updatedAt);
      if (!Number.isFinite(updatedAt) || updatedAt > now + 30000 || now - updatedAt >= ACTIVE_FOR_MS) return;
      const key = record.userId || record.username;
      if (key && (!byUser.has(key) || Number(byUser.get(key).updatedAt) < updatedAt)) byUser.set(key, record);
    });
    return [...byUser.values()].sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt));
  }

  function renderAdmin(root, records, historyRecords) {
    const people = activePeople(records);
    root.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = `🔴 Đang làm bài: ${people.length} người`;
    root.appendChild(heading);
    if (!people.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Hiện không có ai đang làm bài thi.';
      root.appendChild(empty);
    } else {
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

    const historyHeading = document.createElement('h3');
    historyHeading.className = 'exam-history-heading';
    historyHeading.textContent = '🕘 Lịch sử làm bài gần nhất';
    root.appendChild(historyHeading);
    const history = Object.values(historyRecords || {})
      .filter(record => record && (record.userId || record.username) && record.examId)
      .sort((a, b) => Number(b.updatedAt || b.startedAt || 0) - Number(a.updatedAt || a.startedAt || 0))
      .slice(0, 50);
    if (!history.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Chưa có lịch sử làm bài được ghi nhận.';
      root.appendChild(empty);
      return;
    }
    const tableWrap = document.createElement('div');
    tableWrap.className = 'exam-history-table-wrap';
    const table = document.createElement('table');
    table.className = 'exam-history-table';
    table.innerHTML = '<thead><tr><th>Học sinh</th><th>Đề thi</th><th>Bắt đầu</th><th>Cập nhật</th><th>Trạng thái</th></tr></thead>';
    const body = document.createElement('tbody');
    history.forEach(record => {
      const row = document.createElement('tr');
      const values = [
        `${record.name || record.username || 'Học sinh'} (@${record.username || '?'})`,
        record.examTitle || record.examId || 'Đề thi',
        formatTime(record.startedAt),
        formatTime(record.endedAt || record.updatedAt),
        statusText(record)
      ];
      values.forEach((value, index) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        if (index === 4) cell.className = `exam-history-status status-${record.status || 'unknown'}`;
        row.appendChild(cell);
      });
      body.appendChild(row);
    });
    table.appendChild(body);
    tableWrap.appendChild(table);
    root.appendChild(tableWrap);
  }

  function mountAdmin() {
    clearInterval(adminTimer);
    const root = document.getElementById('exam-presence-panel');
    if (!root || !window.auth || !window.auth.isAdmin()) return;
    const refresh = async () => {
      if (adminRefreshing) return;
      if (!root.isConnected || location.hash !== '#stats') {
        clearInterval(adminTimer);
        adminTimer = null;
        return;
      }
      adminRefreshing = true;
      try {
        const [presenceResponse, historyResponse] = await Promise.all([
          fetch(`${endpoint()}.json`, { cache: 'no-store' }),
          fetch(`${historyEndpoint()}.json`, { cache: 'no-store' })
        ]);
        if (!presenceResponse.ok || !historyResponse.ok) throw new Error('Không kết nối được dữ liệu trực tuyến.');
        const records = await presenceResponse.json();
        const historyRecords = await historyResponse.json();
        if (!activePeople(records).length && lastAdminRecords && activePeople(lastAdminRecords).length) {
          if (!adminEmptySince) adminEmptySince = Date.now();
          if (Date.now() - adminEmptySince < 20000) {
            renderAdmin(root, lastAdminRecords, historyRecords);
            return;
          }
        } else adminEmptySince = 0;
        lastAdminRecords = records;
        renderAdmin(root, records, historyRecords);
      } catch (_) {
        if (!lastAdminRecords) root.textContent = 'Chưa tải được danh sách người đang làm bài. Sẽ tự thử lại.';
      } finally {
        adminRefreshing = false;
      }
    };
    refresh();
    adminTimer = setInterval(refresh, 10000);
  }

  function mountPublic() {
    clearInterval(publicTimer);
    const badge = document.getElementById('public-exam-count');
    if (!badge) return;
    const refresh = async () => {
      if (publicRefreshing) return;
      publicRefreshing = true;
      try {
        const response = await fetch(`${endpoint()}.json`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Presence unavailable');
        const count = activePeople(await response.json()).length;
        // Wait for a second empty sample before showing zero after a live count.
        if (count === 0 && lastPublicCount > 0) {
          if (!emptySince) emptySince = Date.now();
          if (Date.now() - emptySince < 20000) return;
        } else emptySince = 0;
        lastPublicCount = count;
        badge.textContent = `${count} người đang làm bài`;
        badge.title = 'Số người đang làm hoặc tạm dừng bài thi';
      } catch (_) {
        if (lastPublicCount === null) badge.textContent = 'Đang cập nhật số người làm bài';
      } finally {
        publicRefreshing = false;
      }
    };
    refresh();
    publicTimer = setInterval(refresh, 10000);
  }

  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', () => { if (currentExam) send(); });
  window.addEventListener('focus', () => { if (currentExam) send(); });
  window.addEventListener('visibilitychange', () => { if (!document.hidden && currentExam) send(); });
  window.examPresence = { start, setPaused, stop, mountAdmin, mountPublic };
})();
