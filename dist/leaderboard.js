(function () {
  'use strict';
  const DB = 'https://hoctap-b7d06-default-rtdb.asia-southeast1.firebasedatabase.app';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  const list = value => Array.isArray(value) ? value.filter(Boolean) : Object.values(value || {}).filter(Boolean);
  const pct = result => {
    const points = Number(result.points ?? result.score);
    const max = Number(result.maxPoints || 10);
    return Number.isFinite(points) && Number.isFinite(max) && max > 0 ? Math.max(0, Math.min(10, points / max * 10)) : null;
  };
  const formatScore = value => Number(value).toLocaleString('vi-VN', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  const roleLabel = role => role === 'admin' ? 'Admin' : role === 'teacher' ? 'Giáo viên' : 'Học sinh';

  function buildRows(users, results) {
    const usersById = new Map(users.filter(u => u.id).map(u => [u.id, u]));
    const usersByName = new Map(users.filter(u => u.username).map(u => [String(u.username).toLowerCase(), u]));
    const groups = new Map();
    results.forEach(result => {
      const value = pct(result);
      if (value === null) return;
      const username = String(result.username || '').toLowerCase();
      const account = usersById.get(result.userId) || usersByName.get(username);
      const key = account?.id || result.userId || username;
      if (!key) return;
      if (!groups.has(key)) groups.set(key, {
        id: key,
        name: account?.name || result.name || result.username || 'Tài khoản',
        username: account?.username || result.username || '',
        role: account?.role || 'student',
        attempts: 0, total: 0, best: 0, latest: 0
      });
      const row = groups.get(key);
      row.attempts++;
      row.total += value;
      row.best = Math.max(row.best, value);
      row.latest = Math.max(row.latest, Date.parse(result.date || '') || 0);
    });
    return [...groups.values()].map(row => ({ ...row, average: row.total / row.attempts }))
      .sort((a, b) => b.average - a.average || b.attempts - a.attempts || b.best - a.best || b.latest - a.latest)
      .map((row, index) => ({ ...row, rank: index + 1 }));
  }

  async function fetchData() {
    const [usersResponse, resultsResponse, presenceResponse] = await Promise.all([
      fetch(`${DB}/users.json`, { cache: 'no-store' }),
      fetch(`${DB}/results.json`, { cache: 'no-store' }),
      fetch(`${DB}/exam-presence.json`, { cache: 'no-store' })
    ]);
    if (!usersResponse.ok || !resultsResponse.ok) throw new Error('Không tải được dữ liệu bảng xếp hạng.');
    return {
      users: list(await usersResponse.json()),
      results: list(await resultsResponse.json()),
      presence: presenceResponse.ok ? list(await presenceResponse.json()) : []
    };
  }

  function activePeople(records) {
    const now = Date.now();
    const byUser = new Map();
    records.forEach(record => {
      const updated = Number(record?.updatedAt);
      if (!record || !['active', 'paused'].includes(record.status) || !Number.isFinite(updated) || now - updated >= 120000) return;
      const key = record.userId || record.username;
      if (key && (!byUser.has(key) || Number(byUser.get(key).updatedAt) < updated)) byUser.set(key, record);
    });
    return [...byUser.values()].sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt));
  }

  function renderLive(people) {
    if (!people.length) return '<p class="leaderboard-empty">Hiện chưa có ai đang làm bài.</p>';
    return `<div class="public-live-grid">${people.map(person => `
      <article class="public-live-person">
        <span class="live-dot" aria-hidden="true"></span>
        <div><strong>${esc(person.name || person.username || 'Tài khoản')}</strong><small>@${esc(person.username || '?')} · ${person.status === 'paused' ? 'Tạm dừng' : 'Đang làm'}</small></div>
        <span>${esc(person.examTitle || person.examId || 'Đề thi')}</span>
      </article>`).join('')}</div>`;
  }

  async function renderLeaderboardView() {
    if (typeof setNav === 'function') setNav('ranking');
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = '<div class="content leaderboard-page"><div class="leaderboard-loading">⏳ Đang tải bảng xếp hạng…</div></div>';
    try {
      const data = await fetchData();
      const rows = buildRows(data.users, data.results);
      const people = activePeople(data.presence);
      const podium = rows.slice(0, 3);
      app.innerHTML = `<div class="content leaderboard-page">
        <div class="page-heading leaderboard-heading"><div><span class="eyebrow leaderboard-eyebrow">THÀNH TÍCH TOÀN TRANG</span><h1>🏆 Bảng xếp hạng tài khoản</h1><p>Xếp theo điểm trung bình quy đổi về thang 10; nếu bằng điểm, tài khoản có nhiều lượt làm hơn đứng trước, sau đó xét điểm cao nhất. Tài khoản chưa làm bài không xuất hiện.</p></div><button class="secondary" id="refresh-leaderboard">↻ Cập nhật</button></div>
        <section class="leaderboard-live-card"><div class="stats-box-header"><div><h2>🔴 Đang làm bài: ${people.length} người</h2><p>Công khai theo thời gian thực cho mọi tài khoản</p></div></div>${renderLive(people)}</section>
        ${podium.length ? `<section class="leaderboard-podium">${podium.map((row, index) => `<article class="podium-card rank-${index + 1}"><span class="podium-medal">${['🥇','🥈','🥉'][index]}</span><strong>${esc(row.name)}</strong><small>@${esc(row.username)} · ${roleLabel(row.role)}</small><b>${formatScore(row.average)} điểm</b><span>${row.attempts} lượt làm · cao nhất ${formatScore(row.best)}</span></article>`).join('')}</section>` : ''}
        <section class="stats-card-box leaderboard-table-card"><div class="stats-box-header"><div><h2>Xếp hạng đầy đủ</h2><p>${rows.length} tài khoản đã có bài làm</p></div></div>
          ${rows.length ? `<div class="stats-table-responsive"><table class="stats-table leaderboard-table"><thead><tr><th>Hạng</th><th>Tài khoản</th><th>Vai trò</th><th>Lượt làm</th><th>Điểm TB (/10)</th><th>Cao nhất (/10)</th></tr></thead><tbody>${rows.map(row => `<tr><td class="rank-cell">${row.rank <= 3 ? ['🥇','🥈','🥉'][row.rank - 1] : `#${row.rank}`}</td><td><strong>${esc(row.name)}</strong><small>@${esc(row.username)}</small></td><td><span class="role-badge ${row.role === 'admin' ? 'admin' : 'student'}">${roleLabel(row.role)}</span></td><td>${row.attempts}</td><td><strong>${formatScore(row.average)}</strong></td><td>${formatScore(row.best)}</td></tr>`).join('')}</tbody></table></div>` : '<p class="leaderboard-empty">Chưa có tài khoản nào nộp bài.</p>'}
        </section>
      </div>`;
      document.getElementById('refresh-leaderboard')?.addEventListener('click', renderLeaderboardView);
    } catch (error) {
      app.innerHTML = `<div class="content"><div class="notice"><b>Chưa tải được bảng xếp hạng</b>${esc(error.message)}<br><button class="primary" id="retry-leaderboard">Thử lại</button></div></div>`;
      document.getElementById('retry-leaderboard')?.addEventListener('click', renderLeaderboardView);
    }
  }

  window.renderLeaderboardView = renderLeaderboardView;
})();
