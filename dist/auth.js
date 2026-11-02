// Hệ thống Đăng nhập, Đăng ký, Lịch sử làm bài theo tài khoản và Phân quyền Quản trị (Admin)
// Bắt buộc xác thực trước khi sử dụng toàn bộ trang web; Phân quyền xem thống kê lớp học chỉ dành cho Admin

(function() {
  'use strict';

  const STORAGE_USERS = 'hoctap-users';
  const STORAGE_CURRENT_USER = 'hoctap-current-user';
  const STORAGE_RESULTS = 'hoctap-results';

  // Dữ liệu tài khoản khởi tạo mẫu (có đầy đủ Quản trị viên, Giáo viên và Học sinh)
  const DEFAULT_USERS = [
    { id: 'u-admin', username: 'admin', password: '123', name: 'Quản trị viên (Admin)', role: 'admin', createdAt: '2026-09-01T00:00:00.000Z' },
    { id: 'u-teacher', username: 'thaygiao', password: '123', name: 'Thầy Nguyễn Văn Nam', role: 'teacher', createdAt: '2026-09-01T08:00:00.000Z' },
    { id: 'u-an', username: 'nguyenvanan', password: '123', name: 'Nguyễn Văn An', role: 'student', createdAt: '2026-09-05T09:00:00.000Z' },
    { id: 'u-binh', username: 'tranthibinh', password: '123', name: 'Trần Thị Bình', role: 'student', createdAt: '2026-09-06T10:00:00.000Z' },
    { id: 'u-huy', username: 'lequanghuy', password: '123', name: 'Lê Quang Huy', role: 'student', createdAt: '2026-09-07T14:30:00.000Z' }
  ];

  // Khởi tạo hạt giống kết quả thi cho các học sinh mẫu
  function initSeedResults() {
    try {
      const existing = localStorage.getItem(STORAGE_RESULTS);
      if (existing) {
        const arr = JSON.parse(existing);
        if (Array.isArray(arr) && arr.length > 0) return;
      }
    } catch (_) {}

    const seed = [
      {
        id: 'toan-10-de-01',
        title: 'Toán 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị',
        subject: 'math',
        userId: 'u-an',
        username: 'nguyenvanan',
        studentName: 'Nguyễn Văn An',
        total: 24,
        correct: 23,
        points: 6.75,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: { m0: 0, m1: 2, m2: 0, m3: 1, m4: 2, m5: 3, m6: 1, m7: 2, m8: 0, m9: 3, m10: 1, m11: 2, 't0-0': true, 't0-1': true, 't0-2': true, 't0-3': true, 't1-0': true, 't1-1': false, 't1-2': true, 't1-3': true, s0: '3', s1: '25', s2: '60', s3: '4' },
        date: new Date(Date.now() - 3600000 * 48).toISOString(),
        reason: 'manual'
      },
      {
        id: 'vatli-10-de-01',
        title: 'Vật lí 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị',
        subject: 'physics',
        userId: 'u-an',
        username: 'nguyenvanan',
        studentName: 'Nguyễn Văn An',
        total: 28,
        correct: 28,
        points: 7.0,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: { m0: 0, m1: 0, m2: 0, m3: 0, m4: 0, m5: 0, m6: 0, m7: 0, m8: 0, m9: 0, m10: 0, m11: 0, m12: 0, m13: 0, m14: 0, m15: 0, 't0-0': true, 't0-1': false, 't0-2': true, 't0-3': true, 't1-0': true, 't1-1': false, 't1-2': true, 't1-3': true, s0: '36', s1: '4', s2: '0.5', s3: '3' },
        date: new Date(Date.now() - 3600000 * 24).toISOString(),
        reason: 'manual'
      },
      {
        id: 'hoahoc-10-de-01',
        title: 'Hóa học 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị',
        subject: 'chemistry',
        userId: 'u-an',
        username: 'nguyenvanan',
        studentName: 'Nguyễn Văn An',
        total: 28,
        correct: 26,
        points: 6.5,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: {},
        date: new Date(Date.now() - 3600000 * 6).toISOString(),
        reason: 'manual'
      },
      {
        id: 'toan-10-de-02',
        title: 'Toán 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị',
        subject: 'math',
        userId: 'u-binh',
        username: 'tranthibinh',
        studentName: 'Trần Thị Bình',
        total: 24,
        correct: 24,
        points: 7.0,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: {},
        date: new Date(Date.now() - 3600000 * 36).toISOString(),
        reason: 'manual'
      },
      {
        id: 'hoahoc-10-de-02',
        title: 'Hóa học 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị',
        subject: 'chemistry',
        userId: 'u-binh',
        username: 'tranthibinh',
        studentName: 'Trần Thị Bình',
        total: 28,
        correct: 25,
        points: 6.25,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: {},
        date: new Date(Date.now() - 3600000 * 12).toISOString(),
        reason: 'manual'
      },
      {
        id: 'vatli-10-de-02',
        title: 'Vật lí 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị',
        subject: 'physics',
        userId: 'u-huy',
        username: 'lequanghuy',
        studentName: 'Lê Quang Huy',
        total: 28,
        correct: 24,
        points: 5.75,
        maxPoints: 7.0,
        questionSetVersion: 2,
        answers: {},
        date: new Date(Date.now() - 3600000 * 18).toISOString(),
        reason: 'manual'
      }
    ];

    try {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(seed));
    } catch (_) {}
  }

  const auth = {
    // 1. Quản lí tài khoản người dùng
    getUsers() {
      try {
        const str = localStorage.getItem(STORAGE_USERS);
        if (str) {
          const arr = JSON.parse(str);
          if (Array.isArray(arr) && arr.length > 0) {
            // Đảm bảo tài khoản admin luôn tồn tại
            if (!arr.some(u => u.username === 'admin')) {
              arr.unshift(DEFAULT_USERS[0]);
              this.saveUsers(arr);
            }
            return arr;
          }
        }
      } catch (_) {}
      this.saveUsers(DEFAULT_USERS);
      return [...DEFAULT_USERS];
    },

    saveUsers(users) {
      try {
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
      } catch (_) {}
    },

    // Kiểm tra tài khoản hiện tại (null nếu chưa đăng nhập)
    getCurrentUser() {
      try {
        const str = localStorage.getItem(STORAGE_CURRENT_USER);
        if (str) {
          const u = JSON.parse(str);
          if (u && u.id) return u;
        }
      } catch (_) {}
      return null;
    },

    isLoggedIn() {
      return !!this.getCurrentUser();
    },

    isAdmin(user) {
      const u = user || this.getCurrentUser();
      if (!u) return false;
      return u.role === 'admin' || u.role === 'teacher' || u.username === 'admin' || u.username === 'thaygiao';
    },

    setCurrentUser(user) {
      try {
        if (user) {
          localStorage.setItem(STORAGE_CURRENT_USER, JSON.stringify(user));
        } else {
          localStorage.removeItem(STORAGE_CURRENT_USER);
        }
      } catch (_) {}
      this.updateUI();
    },

    login(username, password) {
      const u = String(username || '').trim().toLowerCase();
      const p = String(password || '').trim();
      const users = this.getUsers();
      const found = users.find(x => x.username.toLowerCase() === u && x.password === p);
      if (!found) {
        return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không chính xác.' };
      }
      this.setCurrentUser(found);
      this.closeModal();
      this.refreshCurrentView();
      return { success: true, user: found };
    },

    register(name, username, password, role = 'student') {
      const n = String(name || '').trim();
      const u = String(username || '').trim().toLowerCase();
      const p = String(password || '').trim();
      if (!n || !u || !p) {
        return { success: false, message: 'Vui lòng điền đầy đủ họ tên, tên đăng nhập và mật khẩu.' };
      }
      if (u.length < 3) {
        return { success: false, message: 'Tên đăng nhập phải có ít nhất 3 kí tự.' };
      }
      const users = this.getUsers();
      if (users.some(x => x.username.toLowerCase() === u)) {
        return { success: false, message: 'Tên đăng nhập này đã được sử dụng. Vui lòng chọn tên khác.' };
      }
      const isRoleAdmin = role === 'admin' || role === 'teacher';
      const newUser = {
        id: 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: n,
        username: u,
        password: p,
        role: isRoleAdmin ? 'admin' : 'student',
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      this.saveUsers(users);
      this.setCurrentUser(newUser);
      this.closeModal();
      this.refreshCurrentView();
      return { success: true, user: newUser };
    },

    logout() {
      this.setCurrentUser(null);
      this.requireAuth('home');
    },

    // 2. Cổng xác thực (Auth Gate) - Bắt buộc đăng nhập
    requireAuth(targetView = 'home') {
      if (this.isLoggedIn()) return true;
      this.renderAuthGate(targetView);
      this.openModal('login', false);
      return false;
    },

    renderAuthGate(targetView = 'home') {
      const appEl = document.getElementById('app');
      if (!appEl) return;
      if (typeof setNav === 'function') setNav('home');

      appEl.innerHTML = `
        <div class="content auth-gate-screen">
          <div class="auth-gate-card">
            <span class="auth-gate-badge">🔒 YÊU CẦU ĐĂNG NHẬP</span>
            <div class="auth-gate-logo">✦ HỌC<span style="color:#2563eb;">TẬP</span><small style="font-size:12px;color:#64748b;margin-left:4px;">SPACE</small></div>
            <h2>Chào mừng bạn đến với Không gian Luyện thi</h2>
            <p>Vui lòng đăng nhập hoặc tạo tài khoản mới để bắt đầu luyện tập 38 bộ đề thi chuẩn, tra cứu sổ tay kiến thức và theo dõi lịch sử bài làm của bạn.</p>
            <div class="auth-gate-btn-group">
              <button class="primary auth-gate-btn" id="btn-gate-open-login">🔑 Đăng nhập vào hệ thống ➔</button>
              <button class="secondary auth-gate-btn" id="btn-gate-open-reg">✨ Tạo tài khoản mới</button>
              <button class="auth-gate-btn-link" id="btn-gate-open-switch">⚡ Chọn nhanh tài khoản có sẵn (trải nghiệm thử)</button>
            </div>
          </div>
        </div>
      `;

      const bLogin = document.getElementById('btn-gate-open-login');
      if (bLogin) bLogin.onclick = () => this.openModal('login', false);
      const bReg = document.getElementById('btn-gate-open-reg');
      if (bReg) bReg.onclick = () => this.openModal('register', false);
      const bSwitch = document.getElementById('btn-gate-open-switch');
      if (bSwitch) bSwitch.onclick = () => this.openModal('switch', false);
    },

    // 3. Màn hình Từ chối truy cập (Access Denied) khi không phải Admin
    renderAccessDenied() {
      const appEl = document.getElementById('app');
      if (!appEl) return;
      const user = this.getCurrentUser();
      const uName = user ? escapeHtml(user.name) : 'Người dùng';
      const uUsername = user ? escapeHtml(user.username) : '';

      appEl.innerHTML = `
        <div class="content">
          <div class="access-denied-card">
            <div class="access-denied-icon">🔒</div>
            <h2>Khu vực dành riêng cho Quản trị viên (Admin)</h2>
            <p>Trang Thống kê lớp học và Theo dõi bài làm chỉ dành riêng cho tài khoản Quản trị viên hoặc Giáo viên phụ trách bộ môn.</p>
            <div class="access-current-account-info">
              <span>👤 Bạn đang đăng nhập: <b>${uName}</b> (@${uUsername})</span>
              <span class="role-badge student">Học sinh</span>
            </div>
            <p style="font-size:13px;color:#64748b;margin:0 0 16px 0;">Nếu bạn là Quản trị viên hoặc Giáo viên, vui lòng đăng nhập bằng tài khoản Admin để truy cập trang này.</p>
            <div class="access-denied-actions">
              <button class="primary" id="btn-denied-login-admin">🔑 Đăng nhập tài khoản Admin ➔</button>
              <button class="secondary" id="btn-denied-quick-teacher">⚡ Đổi sang tài khoản Giáo viên có sẵn</button>
              <button class="secondary" id="btn-denied-home">⬅ Về trang chủ</button>
            </div>
          </div>
        </div>
      `;

      if (typeof setNav === 'function') setNav('stats');

      const bAdmin = document.getElementById('btn-denied-login-admin');
      if (bAdmin) bAdmin.onclick = () => this.openModal('login', true);

      const bTeach = document.getElementById('btn-denied-quick-teacher');
      if (bTeach) {
        bTeach.onclick = () => {
          const teachUser = this.getUsers().find(u => u.username === 'thaygiao' || u.username === 'admin');
          if (teachUser) {
            this.setCurrentUser(teachUser);
            this.renderStatsView();
          }
        };
      }

      const bHome = document.getElementById('btn-denied-home');
      if (bHome) {
        bHome.onclick = () => {
          if (typeof window !== 'undefined' && window.location) window.location.hash = '#home';
          if (typeof home === 'function') home();
        };
      }
    },

    // 4. Lịch sử bài làm & Đề đã làm
    getAllResults() {
      try {
        const str = localStorage.getItem(STORAGE_RESULTS);
        return str ? JSON.parse(str) : [];
      } catch (_) {
        return [];
      }
    },

    getUserResults(userId) {
      const cur = this.getCurrentUser();
      const targetId = userId || (cur ? cur.id : null);
      if (!targetId) return [];
      const all = this.getAllResults();
      return all.filter(r => r.userId === targetId || (!r.userId && targetId === 'u-an'));
    },

    getExamStatus(examId, userId) {
      const cur = this.getCurrentUser();
      const targetId = userId || (cur ? cur.id : null);
      if (!targetId) {
        return { hasDone: false, attempts: 0, bestResult: null, lastResult: null };
      }
      const userResults = this.getUserResults(targetId);
      const matches = userResults.filter(r => r.id === examId);
      if (matches.length === 0) {
        return { hasDone: false, attempts: 0, bestResult: null, lastResult: null };
      }
      let best = matches[0];
      matches.forEach(m => {
        if ((m.points || 0) > (best.points || 0)) best = m;
      });
      return {
        hasDone: true,
        attempts: matches.length,
        bestResult: best,
        lastResult: matches[0]
      };
    },

    // 5. Cập nhật giao diện khi đổi tài khoản / đăng xuất
    refreshCurrentView() {
      if (!this.isLoggedIn()) {
        this.requireAuth('home');
        return;
      }
      if (typeof window !== 'undefined' && window.location) {
        const hash = window.location.hash || '';
        if (hash === '#history' && typeof history === 'function') history();
        else if (hash === '#stats') this.renderStatsView();
        else if (hash === '#subjects' && typeof catalog === 'function') catalog();
        else if (hash.startsWith('#subject-') && typeof catalog === 'function') catalog(Number(hash.split('-')[1]));
        else if (hash === '#handbook' || hash.startsWith('#handbook-')) {
          const part = hash.replace('#handbook', '').replace(/^-/, '');
          if (typeof renderHandbook === 'function') renderHandbook(part || 'all');
        }
        else if (typeof home === 'function') home();
      }
    },

    updateUI() {
      this.renderTopBarUser();
      this.renderSidebar();
    },

    renderSidebar() {
      const statsLink = document.querySelector('.nav-link[data-view="stats"], a[href="#stats"]');
      if (!statsLink) return;
      const cur = this.getCurrentUser();
      const isAdm = this.isAdmin(cur);

      if (cur && isAdm) {
        statsLink.innerHTML = `<span>📊</span> Thống kê lớp học <span class="admin-badge-tag">Admin</span>`;
      } else {
        statsLink.innerHTML = `<span>🔒</span> Thống kê lớp học <span class="admin-lock-tag">Admin</span>`;
      }
    },

    // 6. Hiển thị thông tin tài khoản trên Topbar với Menu Dropdown
    renderTopBarUser() {
      const user = this.getCurrentUser();
      const topRight = document.querySelector('.top-right');
      if (!topRight) return;

      const todayStr = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

      if (!user) {
        topRight.innerHTML = `
          <span class="today" id="today">${todayStr}</span>
          <button class="primary auth-topbar-login-btn" id="btn-topbar-login" style="padding:7px 16px;border-radius:8px;font-size:13px;font-weight:700;">🔑 Đăng nhập / Đăng ký</button>
        `;
        const b = document.getElementById('btn-topbar-login');
        if (b) b.onclick = () => this.openModal('login', false);
        return;
      }

      const isAdm = this.isAdmin(user);
      const isTeacher = user.role === 'teacher';
      const roleText = user.role === 'admin' ? 'Quản trị viên' : isTeacher ? 'Giáo viên' : 'Học sinh';
      const roleBadgeClass = isAdm ? 'role-badge admin' : 'role-badge student';
      const initial = (user.name || user.username || 'U').trim().charAt(0).toUpperCase();

      topRight.innerHTML = `
        <span class="today" id="today">${todayStr}</span>
        <div class="user-dropdown-container" id="user-dropdown-container">
          <button class="user-profile-btn" id="btn-user-profile" title="Tài khoản: ${escapeHtml(user.name)}">
            <span class="avatar-circle ${isAdm ? 'avatar-teacher' : ''}">${initial}</span>
            <div class="user-info-text">
              <strong class="user-display-name">${escapeHtml(user.name)}</strong>
              <span class="${roleBadgeClass}">${roleText}</span>
            </div>
            <span class="user-dropdown-arrow">▾</span>
          </button>
          <div class="user-dropdown-menu" id="user-dropdown-menu" style="display:none;">
            <div class="user-menu-header">
              <b>${escapeHtml(user.name)}</b>
              <small>@${escapeHtml(user.username)} · ${roleText}</small>
            </div>
            <button class="user-menu-item" id="menu-item-switch">🔄 Đổi tài khoản khác</button>
            ${isAdm ? `<button class="user-menu-item" id="menu-item-stats">📊 Quản lý thống kê lớp</button>` : ''}
            <button class="user-menu-item logout-item" id="menu-item-logout">🚪 Đăng xuất</button>
          </div>
        </div>
      `;

      const btnProfile = document.getElementById('btn-user-profile');
      const menu = document.getElementById('user-dropdown-menu');

      if (btnProfile && menu) {
        btnProfile.onclick = (e) => {
          e.stopPropagation();
          const isShown = menu.style.display === 'block';
          menu.style.display = isShown ? 'none' : 'block';
        };

        const onDocClick = (e) => {
          if (!e.target.closest('#user-dropdown-container')) {
            if (menu) menu.style.display = 'none';
          }
        };
        document.removeEventListener('click', onDocClick);
        document.addEventListener('click', onDocClick);
      }

      const itemSwitch = document.getElementById('menu-item-switch');
      if (itemSwitch) {
        itemSwitch.onclick = () => {
          if (menu) menu.style.display = 'none';
          this.openModal('switch', true);
        };
      }

      const itemStats = document.getElementById('menu-item-stats');
      if (itemStats) {
        itemStats.onclick = () => {
          if (menu) menu.style.display = 'none';
          if (typeof window !== 'undefined' && window.location) window.location.hash = '#stats';
          this.renderStatsView();
        };
      }

      const itemLogout = document.getElementById('menu-item-logout');
      if (itemLogout) {
        itemLogout.onclick = () => {
          if (menu) menu.style.display = 'none';
          this.logout();
        };
      }
    },

    // 7. Cửa sổ Modal Đăng nhập / Đăng ký / Chuyển tài khoản
    openModal(initialTab = 'login', canClose = true) {
      // Nếu chưa đăng nhập thì bắt buộc không được đóng modal
      if (!this.isLoggedIn()) {
        canClose = false;
      }

      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
      }

      const currentUser = this.getCurrentUser();
      const users = this.getUsers();

      modalRoot.innerHTML = `
        <div class="auth-modal-overlay" id="auth-modal-overlay">
          <div class="auth-modal-card">
            <div class="auth-modal-header">
              <div class="auth-brand">
                <span class="auth-brand-mark">✦</span>
                <div>
                  <h3>TÀI KHOẢN HỌC TẬP</h3>
                  <small>Đăng nhập, đăng ký hoặc chọn nhanh tài khoản</small>
                </div>
              </div>
              ${canClose ? `<button class="auth-close-btn" id="btn-close-auth" title="Đóng">&times;</button>` : ''}
            </div>

            <div class="auth-tabs">
              <button class="auth-tab ${initialTab === 'login' ? 'active' : ''}" data-tab="login">Đăng nhập</button>
              <button class="auth-tab ${initialTab === 'register' ? 'active' : ''}" data-tab="register">Đăng ký mới</button>
              <button class="auth-tab ${initialTab === 'switch' ? 'active' : ''}" data-tab="switch">Chọn nhanh tài khoản (${users.length})</button>
            </div>

            <div class="auth-tab-content ${initialTab === 'login' ? 'active' : ''}" id="tab-login">
              <form id="form-auth-login" class="auth-form">
                <div class="form-group">
                  <label for="login-username">Tên đăng nhập</label>
                  <input type="text" id="login-username" placeholder="Ví dụ: admin, thaygiao, nguyenvanan..." required autocomplete="username">
                </div>
                <div class="form-group">
                  <label for="login-password">Mật khẩu</label>
                  <input type="password" id="login-password" placeholder="Nhập mật khẩu (tài khoản mẫu: 123)" required autocomplete="current-password">
                </div>
                <div class="auth-error-msg" id="login-error-msg"></div>
                <button type="submit" class="primary auth-submit-btn">Đăng nhập vào hệ thống ➔</button>
                <div style="margin-top:12px;font-size:12px;color:#64748b;line-height:1.5;background:#f8fafc;padding:10px 14px;border-radius:8px;border:1px solid #e2e8f0;">
                  💡 <b>Tài khoản mẫu có sẵn:</b><br>
                  • <b>Admin:</b> <code>admin</code> (MK: <code>123</code>) · Toàn quyền xem thống kê lớp<br>
                  • <b>Giáo viên:</b> <code>thaygiao</code> (MK: <code>123</code>)<br>
                  • <b>Học sinh:</b> <code>nguyenvanan</code>, <code>tranthibinh</code>, <code>lequanghuy</code> (MK: <code>123</code>)
                </div>
              </form>
            </div>

            <div class="auth-tab-content ${initialTab === 'register' ? 'active' : ''}" id="tab-register">
              <form id="form-auth-register" class="auth-form">
                <div class="form-group">
                  <label for="reg-name">Họ và tên</label>
                  <input type="text" id="reg-name" placeholder="Ví dụ: Hoàng Minh Đức" required>
                </div>
                <div class="form-group">
                  <label for="reg-username">Tên đăng nhập (viết liền không dấu)</label>
                  <input type="text" id="reg-username" placeholder="Ví dụ: minhduc10a1" required>
                </div>
                <div class="form-group">
                  <label for="reg-password">Mật khẩu</label>
                  <input type="password" id="reg-password" placeholder="Tạo mật khẩu dễ nhớ" required>
                </div>
                <div class="form-group">
                  <label for="reg-role">Vai trò</label>
                  <select id="reg-role" class="auth-select">
                    <option value="student">👨‍🎓 Học sinh</option>
                    <option value="admin">👨‍💼 Quản trị viên (Admin) / Giáo viên</option>
                  </select>
                </div>
                <div class="auth-error-msg" id="reg-error-msg"></div>
                <button type="submit" class="primary auth-submit-btn">Tạo tài khoản và bắt đầu học ➔</button>
              </form>
            </div>

            <div class="auth-tab-content ${initialTab === 'switch' ? 'active' : ''}" id="tab-switch">
              <p class="auth-subtitle">Bấm "Chọn" để trải nghiệm ngay với tài khoản mẫu:</p>
              <div class="user-select-list">
                ${users.map(u => {
                  const isCur = currentUser && u.id === currentUser.id;
                  const resCount = this.getUserResults(u.id).length;
                  const uInit = (u.name || u.username).trim().charAt(0).toUpperCase();
                  const isAdm = this.isAdmin(u);
                  const roleBadge = isAdm ? (u.role === 'admin' ? 'Quản trị viên' : 'Giáo viên') : 'Học sinh';

                  return `<div class="user-select-item ${isCur ? 'selected' : ''}" data-switch-id="${u.id}">
                    <div class="user-item-left">
                      <span class="avatar-circle small ${isAdm ? 'avatar-teacher' : ''}">${uInit}</span>
                      <div>
                        <strong>${escapeHtml(u.name)}</strong>
                        <small>@${escapeHtml(u.username)} · <span class="role-badge ${isAdm ? 'admin' : 'student'}" style="display:inline-block;padding:1px 6px;font-size:10px;">${roleBadge}</span> · <b>${resCount}</b> bài đã làm</small>
                      </div>
                    </div>
                    <div class="user-item-right">
                      ${isCur ? `<span class="badge-active-user">Đang dùng ✓</span>` : `<button class="secondary btn-switch-user" data-switch-id="${u.id}">Chọn ➔</button>`}
                    </div>
                  </div>`;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      // Xử lý sự kiện đóng modal (nếu được phép)
      if (canClose) {
        const closeBtn = document.getElementById('btn-close-auth');
        const overlay = document.getElementById('auth-modal-overlay');
        if (closeBtn) closeBtn.onclick = () => this.closeModal();
        if (overlay) {
          overlay.onclick = (e) => {
            if (e.target === overlay) this.closeModal();
          };
        }
      }

      // Chuyển tab
      const tabBtns = modalRoot.querySelectorAll('.auth-tab');
      tabBtns.forEach(btn => {
        btn.onclick = () => {
          const target = btn.dataset.tab;
          tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === target));
          modalRoot.querySelectorAll('.auth-tab-content').forEach(c => {
            c.classList.toggle('active', c.id === 'tab-' + target);
          });
        };
      });

      // Chuyển nhanh tài khoản
      modalRoot.querySelectorAll('[data-switch-id]').forEach(el => {
        el.onclick = () => {
          const uid = el.dataset.switchId;
          const targetUser = users.find(x => x.id === uid);
          if (targetUser) {
            this.setCurrentUser(targetUser);
            this.closeModal();
            this.refreshCurrentView();
          }
        };
      });

      // Submit đăng nhập
      const loginForm = document.getElementById('form-auth-login');
      if (loginForm) {
        loginForm.onsubmit = (e) => {
          e.preventDefault();
          const u = document.getElementById('login-username').value;
          const p = document.getElementById('login-password').value;
          const res = this.login(u, p);
          if (!res.success) {
            const err = document.getElementById('login-error-msg');
            if (err) err.textContent = res.message;
          }
        };
      }

      // Submit đăng ký
      const regForm = document.getElementById('form-auth-register');
      if (regForm) {
        regForm.onsubmit = (e) => {
          e.preventDefault();
          const name = document.getElementById('reg-name').value;
          const u = document.getElementById('reg-username').value;
          const p = document.getElementById('reg-password').value;
          const role = document.getElementById('reg-role').value;
          const res = this.register(name, u, p, role);
          if (!res.success) {
            const err = document.getElementById('reg-error-msg');
            if (err) err.textContent = res.message;
          }
        };
      }
    },

    closeModal() {
      const modalRoot = document.getElementById('modal-root');
      if (modalRoot) modalRoot.innerHTML = '';
    },

    // 8. Giao diện Thống kê Lớp học & Xem lịch sử bài làm của các tài khoản khác (DÀNH RIÊNG CHO ADMIN)
    renderStatsView(filterStudentId = null, filterSubject = null, searchQuery = '') {
      if (!this.requireAuth('stats')) return;
      if (!this.isAdmin()) {
        this.renderAccessDenied();
        return;
      }

      const appEl = document.getElementById('app');
      if (!appEl) return;

      const users = this.getUsers();
      const allResults = this.getAllResults();
      const currentUser = this.getCurrentUser();

      // Danh sách học sinh (hoặc tài khoản)
      const students = users.filter(u => u.role !== 'teacher' && u.role !== 'admin');
      const displayAccounts = users; // hiển thị tất cả tài khoản để quản trị

      // Tính toán số liệu tổng quan
      const totalAttempts = allResults.length;
      const totalStudents = students.length;
      let totalPoints = 0;
      let totalMax = 0;
      allResults.forEach(r => {
        totalPoints += (r.points || 0);
        totalMax += (r.maxPoints || 7.0);
      });
      const avgScore = totalAttempts > 0 ? (totalPoints / totalAttempts).toFixed(2).replace('.', ',') : '0';

      // Tìm học sinh được chọn để xem chi tiết
      let selectedUser = null;
      if (filterStudentId) {
        selectedUser = users.find(u => u.id === filterStudentId);
      }
      if (!selectedUser && users.length > 0) {
        selectedUser = currentUser || users[0];
      }

      // Kết quả của học sinh được chọn
      let studentResults = this.getUserResults(selectedUser ? selectedUser.id : null);
      if (filterSubject) {
        studentResults = studentResults.filter(r => r.subject === filterSubject);
      }

      appEl.innerHTML = `
        <div class="content stats-page">
          <div class="page-heading">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
              <div>
                <span class="eyebrow" style="background:#fef3c7;color:#b45309;border:none;">KHU VỰC QUẢN TRỊ VIÊN</span>
                <h1>📊 Thống kê lớp học & Theo dõi làm bài</h1>
                <p>Xem tổng quan tiến độ của cả lớp và tra cứu chi tiết lịch sử bài làm của từng học sinh.</p>
              </div>
              <div class="stats-top-actions">
                <button class="secondary" id="btn-stats-switch-user">👤 Đổi tài khoản (${escapeHtml(currentUser.name)})</button>
              </div>
            </div>
          </div>

          <!-- 4 Khối tổng quan -->
          <section class="stats stats-grid-4">
            <div class="stat">
              <span class="stat-icon purple">👥</span>
              <div><b>${String(totalStudents).padStart(2, '0')}</b><small>Tài khoản học sinh</small></div>
            </div>
            <div class="stat">
              <span class="stat-icon orange">📝</span>
              <div><b>${String(totalAttempts).padStart(2, '0')}</b><small>Lượt thi đã hoàn thành</small></div>
            </div>
            <div class="stat">
              <span class="stat-icon green">🎯</span>
              <div><b>${avgScore} đ</b><small>Điểm trung bình toàn lớp</small></div>
            </div>
            <div class="stat">
              <span class="stat-icon blue">📋</span>
              <div><b>38</b><small>Bộ đề thi chuẩn 3 môn</small></div>
            </div>
          </section>

          <!-- Bảng danh sách tất cả tài khoản -->
          <section class="stats-card-box">
            <div class="stats-box-header">
              <div>
                <h3>Danh sách tài khoản & Bảng theo dõi học tập</h3>
                <small>Bấm vào "Xem chi tiết" của bất kì học sinh nào để xem toàn bộ lịch sử thi cử của bạn đó</small>
              </div>
              <div class="stats-search-wrap">
                <input type="text" id="stats-search-input" placeholder="🔍 Tìm theo tên hoặc username..." value="${escapeHtml(searchQuery)}">
              </div>
            </div>

            <div class="stats-table-responsive">
              <table class="stats-table">
                <thead>
                  <tr>
                    <th>Học sinh / Tài khoản</th>
                    <th>Vai trò</th>
                    <th>Số đề đã làm</th>
                    <th>Điểm trung bình</th>
                    <th>Điểm cao nhất</th>
                    <th>Lần thi gần nhất</th>
                    <th style="text-align:right;">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  ${displayAccounts
                    .filter(u => {
                      if (!searchQuery) return true;
                      const q = searchQuery.toLowerCase();
                      return u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q);
                    })
                    .map(u => {
                      const uResults = this.getUserResults(u.id);
                      const isSel = selectedUser && selectedUser.id === u.id;
                      const isCur = u.id === currentUser.id;
                      const isAdm = this.isAdmin(u);
                      const roleLabel = u.role === 'admin' ? 'Quản trị viên' : u.role === 'teacher' ? 'Giáo viên' : 'Học sinh';

                      let uPts = 0;
                      let uMax = 0;
                      let best = 0;
                      uResults.forEach(r => {
                        const p = r.points || 0;
                        uPts += p;
                        if (p > best) best = p;
                        uMax = Math.max(uMax, r.maxPoints || 7);
                      });
                      const uAvg = uResults.length > 0 ? (uPts / uResults.length).toFixed(2).replace('.', ',') : '—';
                      const lastDate = uResults.length > 0 ? formatDate(uResults[0].date) : 'Chưa thi';
                      const uInit = (u.name || u.username).trim().charAt(0).toUpperCase();

                      return `
                        <tr class="${isSel ? 'row-selected' : ''}">
                          <td>
                            <div class="table-user-cell">
                              <span class="avatar-circle small ${isAdm ? 'avatar-teacher' : ''}">${uInit}</span>
                              <div>
                                <strong>${escapeHtml(u.name)}</strong>
                                ${isCur ? `<span class="badge-cur-tag">Bạn</span>` : ''}
                                <small>@${escapeHtml(u.username)}</small>
                              </div>
                            </div>
                          </td>
                          <td><span class="role-badge ${isAdm ? 'admin' : 'student'}">${roleLabel}</span></td>
                          <td><b>${uResults.length}</b> / 38 đề</td>
                          <td><strong class="score-text-val">${uAvg}${uResults.length > 0 ? ' đ' : ''}</strong></td>
                          <td>${uResults.length > 0 ? `<span class="best-score-badge">🏅 ${best.toLocaleString('vi-VN')} đ</span>` : '—'}</td>
                          <td><small>${lastDate}</small></td>
                          <td style="text-align:right;">
                            <button class="primary small btn-view-student" data-student-id="${u.id}">
                              ${isSel ? 'Đang xem ▼' : 'Xem chi tiết ➔'}
                            </button>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                </tbody>
              </table>
            </div>
          </section>

          <!-- Khung chi tiết lịch sử của học sinh được chọn -->
          ${selectedUser ? `
            <section class="student-drilldown-box">
              <div class="drilldown-header">
                <div>
                  <span class="eyebrow" style="background:#e0e7ff;color:#3730a3;border:none;">LỊCH SỬ CHI TIẾT CỦA TÀI KHOẢN</span>
                  <h2>${escapeHtml(selectedUser.name)} (@${escapeHtml(selectedUser.username)})</h2>
                  <p>Tổng cộng <b>${studentResults.length}</b> lượt làm bài thi đã được hệ thống ghi nhận.</p>
                </div>
                <div class="drilldown-filter-tabs">
                  <button class="filter ${!filterSubject ? 'active' : ''}" data-filter-sub="">Tất cả môn (${this.getUserResults(selectedUser.id).length})</button>
                  <button class="filter ${filterSubject === 'math' ? 'active' : ''}" data-filter-sub="math">Toán (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'math').length})</button>
                  <button class="filter ${filterSubject === 'physics' ? 'active' : ''}" data-filter-sub="physics">Vật lí (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'physics').length})</button>
                  <button class="filter ${filterSubject === 'chemistry' ? 'active' : ''}" data-filter-sub="chemistry">Hóa học (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'chemistry').length})</button>
                </div>
              </div>

              ${studentResults.length > 0 ? `
                <div class="student-history-grid">
                  ${studentResults.map((r, rIdx) => {
                    const sm = getSubjectMeta(r.subject || 'physics');
                    const pts = (r.points !== undefined) ? r.points : 0;
                    const maxP = (r.maxPoints !== undefined) ? r.maxPoints : 7.0;
                    const dateStr = formatDate(r.date);
                    const isPerfect = pts >= maxP && maxP > 0;

                    return `
                      <div class="student-history-card">
                        <div class="shc-top">
                          <span class="subject-pill" style="background:${sm.bg};color:${sm.color}">${sm.icon} ${sm.name}</span>
                          <span class="shc-date">${dateStr}</span>
                        </div>
                        <h4>${escapeHtml(r.title)}</h4>
                        <div class="shc-score-row">
                          <div class="shc-score-box ${isPerfect ? 'perfect' : ''}">
                            <span class="shc-score-num">${pts.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} / ${maxP.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}</span>
                            <small>${r.correct}/${r.total} ý đúng · ${r.reason === 'time' ? 'Hết giờ' : 'Đã nộp'}</small>
                          </div>
                          <button class="primary small btn-review-result" data-result-idx="${rIdx}" data-student-id="${selectedUser.id}">
                            Xem lại bài làm & câu sai ➔
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : `
                <div class="notice" style="margin:20px 0;">
                  <b>Học sinh này chưa làm bài thi nào ${filterSubject ? `cho môn đã chọn` : ''}.</b><br>
                  Khi học sinh hoàn thành bất kì đề thi nào, kết quả và đáp án chi tiết sẽ tự động hiển thị tại đây.
                </div>
              `}
            </section>
          ` : ''}
        </div>
      `;

      if (typeof setNav === 'function') setNav('stats');

      // Gắn sự kiện cho các nút trong trang Thống kê
      const switchBtn = document.getElementById('btn-stats-switch-user');
      if (switchBtn) switchBtn.onclick = () => this.openModal('switch', true);

      // Tìm kiếm học sinh
      const searchInput = document.getElementById('stats-search-input');
      if (searchInput) {
        searchInput.oninput = (e) => {
          this.renderStatsView(selectedUser ? selectedUser.id : null, filterSubject, e.target.value);
        };
      }

      // Xem học sinh cụ thể
      appEl.querySelectorAll('.btn-view-student').forEach(btn => {
        btn.onclick = () => {
          const sid = btn.dataset.studentId;
          this.renderStatsView(sid, filterSubject, searchQuery);
          const drill = document.querySelector('.student-drilldown-box');
          if (drill) drill.scrollIntoView({ behavior: 'smooth' });
        };
      });

      // Lọc môn học trong drilldown
      appEl.querySelectorAll('[data-filter-sub]').forEach(btn => {
        btn.onclick = () => {
          const sub = btn.dataset.filterSub || null;
          this.renderStatsView(selectedUser ? selectedUser.id : null, sub, searchQuery);
        };
      });

      // Xem chi tiết câu đúng/sai bài làm của học sinh
      appEl.querySelectorAll('.btn-review-result').forEach(btn => {
        btn.onclick = () => {
          const rIdx = Number(btn.dataset.resultIdx);
          const targetUser = users.find(u => u.id === btn.dataset.studentId);
          const results = this.getUserResults(targetUser ? targetUser.id : null);
          const targetResult = results[rIdx];
          if (targetResult) {
            this.renderStudentReview(targetResult, targetUser);
          }
        };
      });
    },

    // 9. Xem lại bài làm của một học sinh cụ thể (giáo viên xem bài làm chi tiết)
    renderStudentReview(r, studentUser) {
      const e = (typeof exams !== 'undefined' && Array.isArray(exams)) ? exams.find(x => x.id === r.id) : null;
      const appEl = document.getElementById('app');
      if (!appEl) return;

      if (!e) {
        appEl.innerHTML = `
          <div class="content">
            <div class="notice">
              <b>Không tìm thấy dữ liệu đề thi gốc ${escapeHtml(r.id)}.</b><br>
              Điểm số: ${r.points}/${r.maxPoints} (${r.correct}/${r.total} ý đúng).<br><br>
              <button class="primary" id="btn-back-to-stats">Quay lại Thống kê</button>
            </div>
          </div>
        `;
        document.getElementById('btn-back-to-stats').onclick = () => this.renderStatsView(studentUser.id);
        return;
      }

      const a = r.answers || {};
      const score = (typeof scoreExam === 'function') ? scoreExam(e, a) : { points: r.points, max: r.maxPoints, correct: r.correct, total: r.total };
      const sName = studentUser ? studentUser.name : (r.studentName || 'Học sinh');

      // Tách các câu đúng/sai để hiển thị
      const reviewCards = [];

      // Phần I (MC)
      (e.questions || []).forEach((q, i) => {
        const userChoice = a['m' + i] !== undefined ? a['m' + i] : a[i];
        const isOk = userChoice === q[2];
        const userLetter = userChoice !== undefined && userChoice >= 0 ? ['A', 'B', 'C', 'D'][userChoice] : 'Chưa chọn';
        const correctLetter = ['A', 'B', 'C', 'D'][q[2]];

        reviewCards.push(`
          <div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag">Phần I · Trắc nghiệm lựa chọn</span>
              <span class="review-item-number">Câu ${i + 1}</span>
            </div>
            <div class="review-q-text"><b>Câu ${i + 1}.</b> ${q[0]}</div>
            <div class="review-status-row">
              ${isOk ? `<span class="badge-user-ans correct">✓ Học sinh chọn: <b>${userLetter}</b> (Chính xác)</span>` : userChoice === undefined ? `<span class="badge-user-ans unanswered">⚠️ Chưa chọn câu này (Bỏ trống · 0 điểm)</span>` : `<span class="badge-user-ans wrong">✗ Học sinh chọn: <b>${userLetter}</b></span>`}
              <span class="badge-correct-ans">✓ Đáp án đúng: <b>${correctLetter}</b></span>
            </div>
            <div class="solution-box theme-study">
              <div class="solution-header">💡 HƯỚNG DẪN GIẢI:</div>
              <div class="solution-body">${q[3] || 'Áp dụng kiến thức chuẩn SGK.'}</div>
            </div>
          </div>
        `);
      });

      // Phần II (TF)
      (e.tf || []).forEach((tf, i) => {
        const isTfTrue = v => (v === true || v === 'true' || v === 'Đúng' || v === 'đúng');
        const isTfMatch = (u, exp) => u !== undefined && u !== null && Boolean(u) === isTfTrue(exp);

        reviewCards.push(`
          <div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag">Phần II · Trắc nghiệm Đúng/Sai</span>
              <span class="review-item-number">Câu ${i + 1}</span>
            </div>
            <div class="review-q-text"><b>Câu ${i + 1}.</b> ${tf.stem}</div>
            <div class="tf-review-table-wrap">
              <table class="tf-review-table">
                <thead>
                  <tr>
                    <th>Ý hỏi</th>
                    <th>Đáp án chuẩn</th>
                    <th>Học sinh chọn</th>
                    <th>Kết quả</th>
                  </tr>
                </thead>
                <tbody>
                  ${tf.items.map((it, j) => {
                    const uAns = a['t' + i + '-' + j];
                    const expAns = isTfTrue(it[1]);
                    const ok = isTfMatch(uAns, expAns);
                    return `
                      <tr>
                        <td><b>${it[0]}</b><br><small style="color:#64748b;">${it[2] || ''}</small></td>
                        <td><span class="badge-tf-ans ${expAns ? 't' : 'f'}">${expAns ? 'Đúng' : 'Sai'}</span></td>
                        <td><span class="badge-tf-ans ${uAns === true ? 't' : uAns === false ? 'f' : 'none'}">${uAns === true ? 'Đúng' : uAns === false ? 'Sai' : 'Chưa chọn'}</span></td>
                        <td><span class="badge-eval ${ok ? 'ok' : 'fail'}">${ok ? '✓ Đúng (+điểm)' : '✗ Sai'}</span></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `);
      });

      // Phần III (Short)
      (e.short || []).forEach((s, i) => {
        const chosen = a['s' + i];
        const ok = (typeof shortCorrect === 'function') ? shortCorrect(chosen, s.answer) : String(chosen).trim().replace(',', '.') === String(s.answer).trim().replace(',', '.');

        reviewCards.push(`
          <div class="review-item">
            <div class="review-item-header">
              <span class="review-part-tag">Phần III · Trả lời ngắn</span>
              <span class="review-item-number">Câu ${i + 1}</span>
            </div>
            <div class="review-q-text"><b>Câu ${i + 1}.</b> ${s.question || s.text}</div>
            <div class="review-status-row">
              ${ok ? `<span class="badge-user-ans correct">✓ Học sinh điền: <b>${escapeHtml(chosen)}</b> (Chính xác)</span>` : chosen === undefined || String(chosen).trim() === '' ? `<span class="badge-user-ans unanswered">⚠️ Chưa điền đáp án (Bỏ trống · 0 điểm)</span>` : `<span class="badge-user-ans wrong">✗ Học sinh điền: <b>${escapeHtml(chosen)}</b></span>`}
              <span class="badge-correct-ans">✓ Đáp án chuẩn: <b>${escapeHtml(s.answer)}</b></span>
            </div>
            <div class="solution-box theme-study">
              <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT:</div>
              <div class="solution-body">${s.explanation || s.explain || 'Áp dụng công thức và tính toán theo chuẩn kiến thức.'}</div>
            </div>
          </div>
        `);
      });

      appEl.innerHTML = `
        <div class="content">
          <div class="result-panel">
            <div class="result-icon">📋</div>
            <h2>Bài làm của: ${escapeHtml(sName)}</h2>
            <p style="font-size:15px;color:#475569;margin-bottom:8px;">${escapeHtml(e.title)}</p>
            <div class="score">${pointText(score.points)} / ${pointText(score.max)} điểm</div>
            <p>${score.correct}/${score.total} ý đúng · Nộp lúc: ${formatDate(r.date)}</p>
            <div class="score-breakdown">
              <span>Phần I <b>${pointText(score.mc)} / ${pointText(e.questions.length * ((e.mcUnit !== undefined) ? e.mcUnit : 0.25))}</b></span>
              <span>Phần II <b>${pointText(score.tf)} / ${pointText(e.tf.length)}</b></span>
              <span>Phần III <b>${pointText(score.short)} / ${pointText(e.short.length * ((e.shortUnit !== undefined) ? e.shortUnit : (e.subject === 'chemistry' ? 0.25 : 0.5)))}</b></span>
            </div>
            <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="primary" id="btn-return-stats">⬅ Quay lại Bảng thống kê</button>
            </div>
          </div>

          <div class="review-heading">
            <h3>Chi tiết từng câu trong bài nộp của ${escapeHtml(sName)}:</h3>
          </div>
          <div class="review-list">
            ${reviewCards.join('')}
          </div>
        </div>
      `;

      if (typeof setNav === 'function') setNav('result');
      window.scrollTo(0, 0);
      const retBtn = document.getElementById('btn-return-stats');
      if (retBtn) retBtn.onclick = () => this.renderStatsView(studentUser ? studentUser.id : null);
      if (typeof renderMathInElement === 'function') {
        try {
          renderMathInElement(appEl, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        } catch (_) {}
      }
    }
  };

  function escapeHtml(str) {
    if (str === undefined || str === null) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Khởi tạo hạt giống kết quả thi và người dùng
  initSeedResults();
  auth.getUsers();

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => auth.updateUI());
    } else {
      auth.updateUI();
    }
  }

  // Đưa vào phạm vi toàn cục
  if (typeof window !== 'undefined') {
    window.auth = auth;
  }
  if (typeof global !== 'undefined') {
    global.auth = auth;
  }
})();
