// Hệ thống Xác thực Tài khoản, Phân quyền Bảo mật Admin và Cơ sở Dữ liệu Đám mây (Cloud Database)
// - Bắt buộc Đăng nhập / Đăng ký tài khoản riêng để sử dụng trang web
// - Bắt buộc nhập mật khẩu để vào tài khoản Admin; Tuyệt đối không cho chọn nhanh tài khoản
// - Tự động đồng bộ bài làm, điểm số và tài khoản lên Cloud Database để Admin theo dõi thời gian thực

(function() {
  'use strict';

  const STORAGE_USERS = 'hoctap-users';
  const STORAGE_CURRENT_USER = 'hoctap-current-user';
  const STORAGE_RESULTS = 'hoctap-results';
  // One-time cleanup requested on 2026-11-03. Keep later attempts, even below 3 points.
  const LOW_SCORE_CUTOFF = Date.parse('2026-11-03T16:53:42Z');
  const resultSubmittedAt = result => {
    const parsed = Date.parse(result?.date);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const isRemovedLowScore = result => {
    const points = Number(result?.points ?? result?.score);
    const submittedAt = Date.parse(result?.date);
    return Number.isFinite(points) && points < 3 && Number.isFinite(submittedAt) && submittedAt <= LOW_SCORE_CUTOFF;
  };
  const keepResults = results => results.filter(result => !isRemovedLowScore(result));

  // Cấu hình Google Firebase Realtime Database (Đồng bộ thời gian thực đa trình duyệt, đa thiết bị)
  const FIREBASE_CONFIG = {
    databaseURL: 'https://hoctap-b7d06-default-rtdb.asia-southeast1.firebasedatabase.app'
  };

  // Cloud Database Endpoints (REST API dự phòng cho web tĩnh GitHub Pages)
  const CLOUD_CONFIG = {
    USERS_URL: 'https://api.restful-api.dev/objects/ff808181a09d98f701a19a5fa72d05a5',
    RESULTS_URL: 'https://api.restful-api.dev/objects/ff808181a09d98f701a19a5fa7c905a6'
  };

  // Tài khoản cốt lõi khởi tạo mặc định (Admin và học sinh congpro123 / thaithanhcong)
  const DEFAULT_ADMIN = {
    id: 'u-admin',
    username: 'admin',
    password: '123',
    name: 'Quản trị viên (Admin)',
    role: 'admin',
    createdAt: '2026-09-01T00:00:00.000Z'
  };

  const DEFAULT_STUDENT_CONGPRO = {
    id: 'u-congpro123',
    username: 'congpro123',
    password: '123',
    name: 'Thái Thành Công',
    role: 'student',
    createdAt: '2026-11-02T00:00:00.000Z'
  };

  const DEFAULT_STUDENT_CONG = {
    id: 'u-thaithanhcong',
    username: 'thaithanhcong',
    password: '123',
    name: 'Thái Thành Công',
    role: 'student',
    createdAt: '2026-11-02T00:00:00.000Z'
  };

  const DEFAULT_USERS = [DEFAULT_ADMIN, DEFAULT_STUDENT_CONGPRO, DEFAULT_STUDENT_CONG];

  // 1. Adapter Đồng bộ Cơ sở Dữ liệu Đám mây (Google Firebase Realtime Database + REST Fallback)
  const CloudDB = {
    isSyncing: false,
    status: 'unknown', // 'online' | 'limited' | 'offline' | 'unknown'
    statusMessage: '',
    engine: 'firebase', // 'firebase' | 'rest'

    getFirebaseUrl() {
      try {
        const custom = localStorage.getItem('hoctap-firebase-url');
        if (custom && custom.trim()) {
          return custom.trim().replace(/\/+$/, '');
        }
      } catch (_) {}
      return (FIREBASE_CONFIG.databaseURL || '').trim().replace(/\/+$/, '');
    },

    setFirebaseUrl(url) {
      try {
        if (url && url.trim()) {
          localStorage.setItem('hoctap-firebase-url', url.trim().replace(/\/+$/, ''));
        } else {
          localStorage.removeItem('hoctap-firebase-url');
        }
      } catch (_) {}
    },

    async fetchUsers() {
      const fbUrl = this.getFirebaseUrl();
      if (fbUrl) {
        try {
          const res = await fetch(`${fbUrl}/users.json`, { cache: 'no-store' });
          if (res.ok) {
            const data = await res.json();
            if (data) {
              this.status = 'online';
              this.engine = 'firebase';
              this.statusMessage = 'Đã kết nối và đồng bộ Google Firebase Realtime Database.';
              if (Array.isArray(data)) return data;
              if (typeof data === 'object') return Object.values(data);
            }
          }
        } catch (err) {
          console.warn('Firebase fetchUsers err:', err);
        }
      }

      try {
        const res = await fetch(CLOUD_CONFIG.USERS_URL, { cache: 'no-store' });
        if (res.status === 429) {
          this.status = 'limited';
          this.statusMessage = 'API công cộng đạt hạn ngạch 50 lượt/ngày. Dữ liệu đang được lưu trữ an toàn trong trình duyệt.';
          return null;
        }
        if (!res.ok) {
          this.status = 'offline';
          this.statusMessage = 'Không thể kết nối máy chủ Cloud (' + res.status + ').';
          return null;
        }
        const json = await res.json();
        if (json && json.data && Array.isArray(json.data.users)) {
          this.status = 'online';
          this.engine = 'rest';
          this.statusMessage = 'Đã kết nối và đồng bộ Cloud Database.';
          return json.data.users;
        }
      } catch (err) {
        this.status = 'offline';
        this.statusMessage = 'Lỗi kết nối Cloud: ' + (err.message || 'Offline');
      }
      return null;
    },

    async pushUser(newUser) {
      const fbUrl = this.getFirebaseUrl();
      if (fbUrl) {
        try {
          const remote = (await this.fetchUsers()) || [];
          const local = auth.getLocalUsers();
          const merged = [...local];
          remote.forEach(ru => {
            if (!merged.some(u => u.username.toLowerCase() === ru.username.toLowerCase())) {
              merged.push(ru);
            }
          });
          if (newUser && !merged.some(u => u.username.toLowerCase() === newUser.username.toLowerCase())) {
            merged.push(newUser);
          }
          const res = await fetch(`${fbUrl}/users.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(merged)
          });
          if (res.ok) {
            this.status = 'online';
            this.engine = 'firebase';
            auth.saveLocalUsers(merged);
            return;
          }
        } catch (err) {
          console.warn('Firebase pushUser err:', err);
        }
      }

      try {
        const currentUsers = (await this.fetchUsers()) || auth.getLocalUsers();
        if (!currentUsers.some(u => u.username.toLowerCase() === newUser.username.toLowerCase())) {
          currentUsers.push(newUser);
          const res = await fetch(CLOUD_CONFIG.USERS_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'hoctap_database_users',
              data: { users: currentUsers }
            })
          });
          if (res.ok) {
            this.status = 'online';
            this.engine = 'rest';
          } else if (res.status === 429) {
            this.status = 'limited';
          }
        }
      } catch (err) {
        console.warn('Lỗi lưu Cloud User:', err);
      }
    },

    async fetchResults() {
      const fbUrl = this.getFirebaseUrl();
      if (fbUrl) {
        try {
          const res = await fetch(`${fbUrl}/results.json`, { cache: 'no-store' });
          if (res.ok) {
            const data = await res.json();
            if (data) {
              this.status = 'online';
              this.engine = 'firebase';
              if (Array.isArray(data)) return keepResults(data);
              if (typeof data === 'object') return keepResults(Object.values(data));
            }
          }
        } catch (err) {
          console.warn('Firebase fetchResults err:', err);
        }
      }

      try {
        const res = await fetch(CLOUD_CONFIG.RESULTS_URL, { cache: 'no-store' });
        if (res.status === 429) {
          this.status = 'limited';
          return null;
        }
        if (!res.ok) {
          this.status = 'offline';
          return null;
        }
        const json = await res.json();
        if (json && json.data && Array.isArray(json.data.results)) {
          this.status = 'online';
          this.engine = 'rest';
          return keepResults(json.data.results);
        }
      } catch (err) {
        console.warn('Lỗi đọc Cloud Results:', err);
      }
      return null;
    },

    async pushResult(newResult) {
      const fbUrl = this.getFirebaseUrl();
      if (fbUrl) {
        try {
          const remote = (await this.fetchResults()) || [];
          const local = auth.getLocalResults();
          const merged = [...local];
          remote.forEach(rr => {
            if (!merged.some(lr => lr.id === rr.id && lr.userId === rr.userId && lr.date === rr.date)) {
              merged.push(rr);
            }
          });
          if (newResult && !merged.some(lr => lr.id === newResult.id && lr.userId === newResult.userId && lr.date === newResult.date)) {
            merged.unshift(newResult);
          }
          const trimmed = keepResults(merged).slice(0, 500);
          const res = await fetch(`${fbUrl}/results.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(trimmed)
          });
          if (res.ok) {
            this.status = 'online';
            this.engine = 'firebase';
            auth.saveLocalResults(trimmed);
            return;
          }
        } catch (err) {
          console.warn('Firebase pushResult err:', err);
        }
      }

      try {
        const currentResults = (await this.fetchResults()) || auth.getLocalResults();
        const exists = currentResults.some(r => r.id === newResult.id && r.userId === newResult.userId && r.date === newResult.date);
        if (!exists) {
          currentResults.unshift(newResult);
          const trimmed = currentResults.slice(0, 500);
          const res = await fetch(CLOUD_CONFIG.RESULTS_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'hoctap_database_results',
              data: { results: trimmed }
            })
          });
          if (res.ok) {
            this.status = 'online';
            this.engine = 'rest';
          } else if (res.status === 429) {
            this.status = 'limited';
          }
        }
      } catch (err) {
        console.warn('Lỗi lưu Cloud Result:', err);
      }
    },

    async updateResult(updatedResult) {
      const fbUrl = this.getFirebaseUrl();
      if (!fbUrl) throw new Error('Không có kết nối lưu kết quả trực tuyến.');
      const response = await fetch(`${fbUrl}/results.json`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Không đọc được bài nộp đã lưu.');
      const data = await response.json();
      const entries = data && typeof data === 'object' ? Object.entries(data) : [];
      const matches = entries.filter(([, result]) => result && result.id === updatedResult.id && result.userId === updatedResult.userId && result.date === updatedResult.date);
      if (matches.length !== 1) throw new Error('Không xác định được duy nhất bài nộp cần chấm lại.');
      const key = encodeURIComponent(matches[0][0]);
      const saved = await fetch(`${fbUrl}/results/${key}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedResult)
      });
      if (!saved.ok) throw new Error('Chấm xong nhưng chưa lưu được điểm mới; vui lòng thử lại.');
      return true;
    },

    async replaceResults(results) {
      const trimmed = keepResults(Array.isArray(results) ? results : []).slice(0, 500);
      const fbUrl = this.getFirebaseUrl();
      if (fbUrl) {
        try {
          const res = await fetch(`${fbUrl}/results.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(trimmed)
          });
          if (res.ok) {
            this.status = 'online';
            this.engine = 'firebase';
            auth.saveLocalResults(trimmed);
            return true;
          }
        } catch (err) {
          console.warn('Firebase replaceResults err:', err);
        }
      }

      try {
        const res = await fetch(CLOUD_CONFIG.RESULTS_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'hoctap_database_results',
            data: { results: trimmed }
          })
        });
        if (res.ok) {
          this.status = 'online';
          this.engine = 'rest';
          auth.saveLocalResults(trimmed);
          return true;
        }
      } catch (err) {
        console.warn('REST replaceResults err:', err);
      }
      return false;
    }
  };

  const auth = {
    CloudDB,

    // Lấy danh sách tài khoản từ localStorage
    getLocalUsers() {
      try {
        const str = localStorage.getItem(STORAGE_USERS);
        if (str) {
          const arr = JSON.parse(str);
          if (Array.isArray(arr) && arr.length > 0) {
            let changed = false;
            // Đảm bảo luôn có tài khoản admin và học sinh thaithanhcong
            DEFAULT_USERS.forEach(defU => {
              if (!arr.some(u => u.username.toLowerCase() === defU.username.toLowerCase())) {
                arr.push(defU);
                changed = true;
              }
            });
            if (changed) {
              this.saveLocalUsers(arr);
            }
            return arr;
          }
        }
      } catch (_) {}
      const initList = [...DEFAULT_USERS];
      this.saveLocalUsers(initList);
      return initList;
    },

    saveLocalUsers(users) {
      try {
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
      } catch (_) {}
    },

    // Lấy danh sách người dùng (kết hợp đồng bộ Cloud Database)
    getUsers() {
      return this.getLocalUsers();
    },

    // Kiểm tra tài khoản đang đăng nhập (null nếu chưa đăng nhập)
    getCurrentUser() {
      try {
        const str = localStorage.getItem(STORAGE_CURRENT_USER);
        if (str) {
          const u = JSON.parse(str);
          if (u && u.id) return this.getLocalUsers().find(x => x.id === u.id && x.username === u.username) || null;
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
      return u.role === 'admin' || u.role === 'teacher';
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

    // Đăng nhập: BẮT BUỘC kiểm tra mật khẩu, không bypass
    login(username, password) {
      const u = String(username || '').trim().toLowerCase();
      const p = String(password || '').trim();

      if (!u || !p) {
        return { success: false, message: 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.' };
      }

      const users = this.getLocalUsers();
      let found = users.find(x => x.username.toLowerCase() === u && String(x.password) === p);

      if (!found) {
        return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.' };
      }

      this.setCurrentUser(found);
      this.closeModal();
      this.refreshCurrentView();
      return { success: true, user: found };
    },

    // Đăng ký tài khoản riêng: Bắt buộc tạo tài khoản mới
    register(name, username, password, confirmPassword, isAdminRole = false) {
      const n = String(name || '').trim();
      const u = String(username || '').trim().toLowerCase();
      const p = String(password || '').trim();
      const cp = String(confirmPassword || '').trim();

      if (!n || !u || !p) {
        return { success: false, message: 'Vui lòng điền đầy đủ họ và tên, tên đăng nhập và mật khẩu.' };
      }
      if (u.length < 3) {
        return { success: false, message: 'Tên đăng nhập phải có ít nhất 3 kí tự (viết liền không dấu).' };
      }
      if (p.length < 3) {
        return { success: false, message: 'Mật khẩu phải có ít nhất 3 kí tự để bảo đảm an toàn.' };
      }
      if (cp && p !== cp) {
        return { success: false, message: 'Mật khẩu xác nhận không trùng khớp.' };
      }

      // Tuyệt đối không cho phép tự đăng ký quyền Quản trị viên ở giao diện công khai
      if (isAdminRole) {
        return { success: false, message: 'Hệ thống đã khóa tính năng tự đăng ký quyền Quản trị viên.' };
      }

      const finalRole = 'student';

      const users = this.getLocalUsers();
      if (users.some(x => x.username.toLowerCase() === u)) {
        return { success: false, message: 'Tên đăng nhập "' + u + '" đã tồn tại. Vui lòng chọn tên đăng nhập khác.' };
      }

      const newUser = {
        id: 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: n,
        username: u,
        password: p,
        role: finalRole,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      this.saveLocalUsers(users);
      this.setCurrentUser(newUser);

      // Lưu lên Cloud Database
      CloudDB.pushUser(newUser);

      this.closeModal();
      this.refreshCurrentView();
      return { success: true, user: newUser };
    },

    logout() {
      this.setCurrentUser(null);
      this.requireAuth('home');
    },

    // 2. Cổng xác thực (Auth Gate) - Khóa toàn bộ trang web khi chưa đăng nhập
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
            <div class="auth-gate-logo">Học tập <small>Tổ hợp Tin · Lớp 10</small></div>
            <h2>Chào mừng bạn đến với Phòng Luyện thi Trực tuyến</h2>
            <p>Hệ thống yêu cầu mỗi học sinh và giáo viên phải có tài khoản riêng để làm bài, tự động lưu lịch sử và thống kê điểm số lên Cơ sở dữ liệu.</p>
            <div class="auth-gate-btn-group">
              <button class="primary auth-gate-btn" id="btn-gate-open-login">🔑 Đăng nhập tài khoản của bạn ➔</button>
              <button class="secondary auth-gate-btn" id="btn-gate-open-reg">✨ Tạo tài khoản mới (Học sinh / Giáo viên)</button>
            </div>
          </div>
        </div>
      `;

      const bLogin = document.getElementById('btn-gate-open-login');
      if (bLogin) bLogin.onclick = () => this.openModal('login', false);
      const bReg = document.getElementById('btn-gate-open-reg');
      if (bReg) bReg.onclick = () => this.openModal('register', false);
    },

    // 3. Màn hình Từ chối truy cập & Form Đăng nhập Admin bảo mật
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
            <h2>Khu vực Quản trị viên & Giáo viên</h2>
            <p>Trang Thống kê lớp học và Theo dõi điểm số toàn bộ học sinh được bảo mật. Bắt buộc phải có tài khoản Quản trị viên để truy cập.</p>
            <div class="access-current-account-info">
              <span>👤 Tài khoản hiện tại: <b>${uName}</b> (@${uUsername})</span>
              <span class="role-badge student">Học sinh</span>
            </div>

            <!-- Form đăng nhập Admin trực tiếp yêu cầu mật khẩu -->
            <div class="admin-login-box">
              <h4 style="margin:0 0 10px 0;font-size:14px;color:#0f172a;text-align:center;">🔑 Đăng nhập tài khoản Quản trị viên (Admin)</h4>
              <form id="form-admin-auth">
                <div class="form-group">
                  <label for="admin-direct-user">Tên đăng nhập Admin</label>
                  <input type="text" id="admin-direct-user" value="admin" required autocomplete="username">
                </div>
                <div class="form-group">
                  <label for="admin-direct-pass">Mật khẩu Admin</label>
                  <input type="password" id="admin-direct-pass" placeholder="Nhập mật khẩu quản trị viên" required autocomplete="current-password">
                </div>
                <div class="auth-error-msg" id="admin-direct-error" style="margin-bottom:8px;"></div>
                <button type="submit" class="primary" style="width:100%;padding:10px;font-weight:700;">Xác thực & Vào trang Thống kê ➔</button>
              </form>
            </div>

            <div class="access-denied-actions">
              <button class="secondary" id="btn-denied-home">⬅ Quay lại Trang chủ</button>
            </div>
          </div>
        </div>
      `;

      if (typeof setNav === 'function') setNav('stats');

      const adminForm = document.getElementById('form-admin-auth');
      if (adminForm) {
        adminForm.onsubmit = (e) => {
          e.preventDefault();
          const u = document.getElementById('admin-direct-user').value;
          const p = document.getElementById('admin-direct-pass').value;
          const res = this.login(u, p);
          if (res.success) {
            if (this.isAdmin(res.user)) {
              this.renderStatsView();
            } else {
              const errEl = document.getElementById('admin-direct-error');
              if (errEl) errEl.textContent = 'Tài khoản này không có quyền Quản trị viên (Admin).';
            }
          } else {
            const errEl = document.getElementById('admin-direct-error');
            if (errEl) errEl.textContent = 'Mật khẩu quản trị viên không chính xác!';
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

    // 4. Lịch sử bài làm & Đề đã làm (Đồng bộ Cloud Database)
    getLocalResults() {
      try {
        const str = localStorage.getItem(STORAGE_RESULTS);
        const results = str ? JSON.parse(str) : [];
        if (!Array.isArray(results)) return [];
        const kept = keepResults(results);
        if (kept.length !== results.length) this.saveLocalResults(kept);
        return kept;
      } catch (_) {
        return [];
      }
    },

    saveLocalResults(results) {
      try {
        localStorage.setItem(STORAGE_RESULTS, JSON.stringify(keepResults(results).slice(0, 500)));
      } catch (_) {}
    },

    getAllResults() {
      return this.getLocalResults();
    },

    getUserResults(userId) {
      const cur = this.getCurrentUser();
      const targetId = userId || (cur ? cur.id : null);
      if (!targetId) return [];
      const all = this.getAllResults();
      const users = this.getUsers();
      const targetUser = users.find(u => u.id === targetId);
      const targetUsername = targetUser ? (targetUser.username || '').toLowerCase() : '';

      return all.filter(r => {
        if (r.userId === targetId) return true;
        if (targetUsername && r.username && r.username.toLowerCase() === targetUsername) return true;
        if ((targetId === 'u-congpro123' || targetId === 'u-thaithanhcong' || targetUsername === 'congpro123' || targetUsername === 'thaithanhcong') && (r.username === 'congpro123' || r.username === 'thaithanhcong' || !r.userId)) return true;
        return false;
      }).sort((a, b) => resultSubmittedAt(b) - resultSubmittedAt(a));
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

    // Tự động lưu kết quả bài thi: Lưu vào LocalStorage và đẩy lên Cloud Database
    saveExamResult(result) {
      const all = this.getLocalResults();
      if (!all.some(r => r.id === result.id && r.userId === result.userId && r.date === result.date)) all.unshift(result);
      this.saveLocalResults(all);

      // Đẩy lên Cloud Database trong nền (không làm gián đoạn người dùng)
      CloudDB.pushResult(result).then(() => {
        console.log('✅ Đã lưu và đồng bộ bài làm lên Cloud Database:', result.id);
      }).catch(err => console.warn('Lỗi đồng bộ Cloud Result:', err));
    },

    async replaceAllResults(results) {
      const normalized = keepResults(Array.isArray(results) ? results : []).slice(0, 500);
      this.saveLocalResults(normalized);
      return CloudDB.replaceResults(normalized);
    },

    async updateSavedResult(result) {
      await CloudDB.updateResult(result);
      const all = this.getLocalResults();
      const index = all.findIndex(item => item.id === result.id && item.userId === result.userId && item.date === result.date);
      if (index >= 0) all[index] = result;
      else all.unshift(result);
      this.saveLocalResults(all);
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

    // Đồng bộ tự động trong nền từ Firebase / Cloud Database khi mở trang
    async syncFromCloudSilently() {
      try {
        // Tự động chuẩn hóa và đẩy các kết quả cũ chưa có thông tin học sinh lên Firebase
        const cur = this.getCurrentUser();
        const localBefore = this.getLocalResults();
        let fixedLegacy = false;
        localBefore.forEach(r => {
          if (!r.userId || !r.username) {
            r.userId = cur ? cur.id : 'u-congpro123';
            r.username = cur ? cur.username : 'congpro123';
            r.studentName = cur ? cur.name : 'Thái Thành Công';
            if (r.points === undefined) r.points = (r.score !== undefined ? r.score : 0.25);
            if (r.maxPoints === undefined) r.maxPoints = 10;
            if (!r.subject) {
              r.subject = (r.id && r.id.startsWith('toan-')) ? 'math' : (r.id && r.id.startsWith('vatli-')) ? 'physics' : 'chemistry';
            }
            fixedLegacy = true;
          }
        });
        if (fixedLegacy) {
          this.saveLocalResults(localBefore);
          localBefore.forEach(r => CloudDB.pushResult(r));
        }

        const [cloudUsers, cloudResults] = await Promise.all([
          CloudDB.fetchUsers(),
          CloudDB.fetchResults()
        ]);
        if (cloudUsers && Array.isArray(cloudUsers)) {
          const local = this.getLocalUsers();
          let changed = false;
          cloudUsers.forEach(cu => {
            if (!local.some(lu => lu.username.toLowerCase() === cu.username.toLowerCase())) {
              local.push(cu);
              changed = true;
            }
          });
          if (changed) this.saveLocalUsers(local);
        }
        if (cloudResults && Array.isArray(cloudResults)) {
          const localR = this.getLocalResults();
          let changedR = false;
          cloudResults.forEach(cr => {
            const existing = localR.find(lr => lr.id === cr.id && lr.userId === cr.userId && lr.date === cr.date);
            if (!existing) {
              localR.push(cr);
              changedR = true;
            } else if (cr.points !== undefined && (cr.points !== existing.points || cr.correct !== existing.correct)) {
              existing.points = cr.points;
              existing.score = cr.score;
              existing.correct = cr.correct;
              existing.total = cr.total;
              existing.maxPoints = cr.maxPoints;
              changedR = true;
            }
          });

          // Tự động chấm lại toàn bộ bài làm theo đáp án cập nhật mới nhất
          if (typeof exams !== 'undefined' && Array.isArray(exams) && typeof scoreExam === 'function') {
            localR.forEach(r => {
              if (!r || !r.id || !r.answers) return;
              const ex = exams.find(x => x.id === r.id);
              if (!ex) return;
              const sc = scoreExam(ex, r.answers, r.total === ex.questions.length);
              if (sc && (Math.abs((r.points !== undefined ? r.points : r.score) - sc.points) > 0.001 || r.correct !== sc.correct)) {
                r.points = sc.points;
                r.score = sc.points;
                r.correct = sc.correct;
                r.total = sc.total;
                r.maxPoints = sc.max;
                changedR = true;
              }
            });
          }

          if (changedR) {
            this.saveLocalResults(localR);
            const hash = (typeof location !== 'undefined' ? location.hash : '') || '#home';
            if (hash === '#home' && typeof home === 'function') home();
            else if (hash === '#subjects' && typeof catalog === 'function') catalog();
            else if (hash.startsWith('#subject-') && typeof catalog === 'function') catalog(Number(hash.split('-')[1]));
          }
        }
      } catch (_) {}
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
        statsLink.innerHTML = `<span class="nav-icon">📊</span> <span class="nav-text">Thống kê lớp</span> <small class="admin-badge-tag">Admin</small>`;
      } else {
        statsLink.innerHTML = `<span class="nav-icon">🔒</span> <span class="nav-text">Thống kê lớp</span> <small class="admin-lock-tag">Admin</small>`;
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
      const roleText = user.role === 'admin' ? 'Quản trị viên' : user.role === 'teacher' ? 'Giáo viên' : 'Học sinh';
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

    // 7. Cửa sổ Modal Đăng nhập / Đăng ký (KHÔNG CÓ CHỌN NHANH, BẮT BUỘC TÀI KHOẢN RIÊNG)
    openModal(initialTab = 'login', canClose = true) {
      if (!this.isLoggedIn()) {
        canClose = false;
      }

      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
      }

      modalRoot.innerHTML = `
        <div class="auth-modal-overlay" id="auth-modal-overlay">
          <div class="auth-modal-card">
            <div class="auth-modal-header">
              <div class="auth-brand">
                <span class="auth-brand-mark">✦</span>
                <div>
                  <h3>TÀI KHOẢN HỌC TẬP</h3>
                  <small>Đăng nhập hoặc đăng ký tài khoản cá nhân</small>
                </div>
              </div>
              ${canClose ? `<button class="auth-close-btn" id="btn-close-auth" title="Đóng">&times;</button>` : ''}
            </div>

            <div class="auth-tabs">
              <button class="auth-tab ${initialTab === 'login' ? 'active' : ''}" data-tab="login">Đăng nhập</button>
              <button class="auth-tab ${initialTab === 'register' ? 'active' : ''}" data-tab="register">Tạo tài khoản mới</button>
            </div>

            <!-- Tab Đăng nhập -->
            <div class="auth-tab-content ${initialTab === 'login' ? 'active' : ''}" id="tab-login">
              <form id="form-auth-login" class="auth-form">
                <div class="form-group">
                  <label for="login-username">Tên đăng nhập</label>
                  <input type="text" id="login-username" placeholder="Nhập tên đăng nhập của bạn" required autocomplete="username">
                </div>
                <div class="form-group">
                  <label for="login-password">Mật khẩu</label>
                  <input type="password" id="login-password" placeholder="Nhập mật khẩu" required autocomplete="current-password">
                </div>
                <div class="auth-error-msg" id="login-error-msg"></div>
                <button type="submit" class="primary auth-submit-btn">Đăng nhập vào hệ thống ➔</button>
              </form>
            </div>

            <!-- Tab Đăng ký -->
            <div class="auth-tab-content ${initialTab === 'register' ? 'active' : ''}" id="tab-register">
              <form id="form-auth-register" class="auth-form">
                <div class="form-group">
                  <label for="reg-name">Họ và tên của bạn</label>
                  <input type="text" id="reg-name" placeholder="Ví dụ: Nguyễn Văn Hoàng" required>
                </div>
                <div class="form-group">
                  <label for="reg-username">Tên đăng nhập (viết liền, không dấu)</label>
                  <input type="text" id="reg-username" placeholder="Ví dụ: vanhoang10a" required>
                </div>
                <div class="form-group">
                  <label for="reg-password">Mật khẩu</label>
                  <input type="password" id="reg-password" placeholder="Tạo mật khẩu cho tài khoản" required>
                </div>
                <div class="form-group">
                  <label for="reg-confirm-password">Xác nhận lại mật khẩu</label>
                  <input type="password" id="reg-confirm-password" placeholder="Nhập lại mật khẩu phía trên" required>
                </div>


                <div class="auth-error-msg" id="reg-error-msg"></div>
                <button type="submit" class="primary auth-submit-btn">Tạo tài khoản và bắt đầu học ➔</button>
              </form>
            </div>
          </div>
        </div>
      `;

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
          const cp = document.getElementById('reg-confirm-password').value;
          const res = this.register(name, u, p, cp);
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

    // 8. Giao diện Thống kê Lớp học & Xem lịch sử bài làm (DÀNH CHO ADMIN)
    // Đồng bộ trực tiếp từ Cloud Database
    async renderStatsView(filterStudentId = null, filterSubject = null, searchQuery = '') {
      if (!this.requireAuth('stats')) return;
      if (!this.isAdmin()) {
        this.renderAccessDenied();
        return;
      }

      const appEl = document.getElementById('app');
      if (!appEl) return;

      const currentUser = this.getCurrentUser();

      // Hiển thị khung chờ tải từ Cloud Database
      appEl.innerHTML = `
        <div class="content stats-page">
          <div class="page-heading">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
              <div>
                <span class="eyebrow" style="background:#fef3c7;color:#b45309;border:none;">KHU VỰC QUẢN TRỊ VIÊN</span>
                <h1>📊 Thống kê lớp học & Quản lý điểm số</h1>
                <p>Đang tải và đồng bộ dữ liệu thời gian thực từ Cloud Database...</p>
              </div>
            </div>
          </div>
          <div style="text-align:center;padding:40px;"><span style="font-size:24px;">⏳ Đang đồng bộ dữ liệu lớp học...</span></div>
        </div>
      `;

      // Đồng bộ từ Cloud Database trong nền
      const [cloudUsers, cloudResults] = await Promise.all([
        CloudDB.fetchUsers(),
        CloudDB.fetchResults()
      ]);

      if (cloudUsers && Array.isArray(cloudUsers)) {
        // Gộp users
        const local = this.getLocalUsers();
        cloudUsers.forEach(cu => {
          if (!local.some(lu => lu.id === cu.id || lu.username.toLowerCase() === cu.username.toLowerCase())) {
            local.push(cu);
          }
        });
        this.saveLocalUsers(local);
      }

      if (cloudResults && Array.isArray(cloudResults)) {
        // Gộp results
        const localRes = this.getLocalResults();
        cloudResults.forEach(cr => {
          if (!localRes.some(lr => lr.id === cr.id && lr.userId === cr.userId && lr.date === cr.date)) {
            localRes.push(cr);
          }
        });
        this.saveLocalResults(localRes);
      }

      const users = this.getUsers();
      const allResults = this.getAllResults();

      // Danh sách học sinh (không tính admin)
      const students = users.filter(u => u.role !== 'admin' && u.role !== 'teacher');
      const displayAccounts = users;

      // Tính toán 4 khối số liệu
      const totalAttempts = allResults.length;
      const totalStudents = students.length;
      let totalPoints = 0;
      let totalMax = 0;
      allResults.forEach(r => {
        totalPoints += (r.points || 0);
        totalMax += (r.maxPoints || 7.0);
      });
      const avgScore = totalAttempts > 0 ? (totalPoints / totalAttempts).toFixed(2).replace('.', ',') : '0';

      // Học sinh được chọn xem chi tiết
      let selectedUser = null;
      if (filterStudentId) {
        selectedUser = users.find(u => u.id === filterStudentId);
      }
      if (!selectedUser && students.length > 0) {
        selectedUser = students[0];
      }

      let studentResults = this.getUserResults(selectedUser ? selectedUser.id : null);
      if (filterSubject) {
        studentResults = studentResults.filter(r => r.subject === filterSubject);
      }

      // Xác định badge trạng thái Cloud DB trung thực
      let cloudBadgeHtml = '';
      if (CloudDB.engine === 'firebase' && CloudDB.status === 'online') {
        cloudBadgeHtml = `<span class="cloud-sync-badge firebase" style="background:#fff7ed;color:#ea580c;border:1px solid #fed7aa;" title="Đã kết nối và đồng bộ thời gian thực với Google Firebase Realtime Database">🔥 Firebase: Trực tuyến</span>`;
      } else if (CloudDB.status === 'online') {
        cloudBadgeHtml = `<span class="cloud-sync-badge" title="Đã kết nối và đồng bộ Cloud Database thành công">🟢 Cloud DB: Đã kết nối</span>`;
      } else if (CloudDB.status === 'limited') {
        cloudBadgeHtml = `<span class="cloud-sync-badge warning" title="API công cộng đạt hạn ngạch 50 lượt/ngày. Dữ liệu đang được lưu trữ an toàn trong trình duyệt.">⚠️ Cloud DB: Lưu trữ Cục bộ (Hết hạn mức API ngày)</span>`;
      } else {
        cloudBadgeHtml = `<span class="cloud-sync-badge warning" title="Không thể kết nối máy chủ Cloud. Hệ thống tự động lưu trữ an toàn trong máy.">⚠️ Cloud DB: Chế độ Cục bộ (Offline)</span>`;
      }

      appEl.innerHTML = `
        <div class="content stats-page">
          <div class="page-heading">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
              <div>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                  <span class="eyebrow" style="background:#fef3c7;color:#b45309;border:none;">KHU VỰC QUẢN TRỊ VIÊN</span>
                  ${cloudBadgeHtml}
                </div>
                <h1>📊 Thống kê lớp học & Quản lý điểm số</h1>
                <p>Theo dõi trực tuyến tiến độ, kết quả thi và đáp án chi tiết của tất cả học sinh đã lưu trên hệ thống.</p>
              </div>
              <div class="stats-top-actions" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
                <button class="secondary small" id="btn-stats-add-user" style="font-weight:700;">➕ Thêm học sinh</button>
                <button class="secondary small" id="btn-stats-config-firebase" style="font-weight:700;background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;">🔥 Cấu hình Firebase</button>
                <button class="secondary small" id="btn-stats-refresh-cloud">🔄 Làm mới từ Cloud DB</button>
                <button class="secondary small" id="btn-stats-export-json">📥 Xuất file JSON</button>
                <button class="secondary small" id="btn-stats-import-json">📤 Nạp file JSON</button>
                <input type="file" id="input-stats-import-file" accept=".json" style="display:none;">
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
              <div><b>${(typeof exams !== "undefined" && exams.length) ? exams.length : 0}</b><small>Bộ đề luyện tập</small></div>
            </div>
          </section>

          <section class="stats-card-box exam-presence-panel" id="exam-presence-panel" aria-live="polite">Đang tải danh sách người làm bài…</section>

          <!-- Bảng danh sách tất cả học sinh -->
          <section class="stats-card-box">
            <div class="stats-box-header">
              <div>
                <h3>Danh sách học sinh & Bảng điểm lớp học</h3>
                <small>Bấm "Xem chi tiết" của bất kì học sinh nào để xem lịch sử làm bài và từng câu đúng/sai</small>
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
                      const roleLabel = isAdm ? 'Quản trị viên' : 'Học sinh';

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
                          <td><b>${uResults.length}</b> / ${(typeof exams !== "undefined" && exams.length) ? exams.length : 39} đề</td>
                          <td><strong class="score-text-val">${uAvg}${uResults.length > 0 ? ' đ' : ''}</strong></td>
                          <td>${uResults.length > 0 ? `<span class="best-score-badge">🏅 ${best.toLocaleString('vi-VN')} đ</span>` : '—'}</td>
                          <td><small>${lastDate}</small></td>
                          <td style="text-align:right;white-space:nowrap;">
                            ${!isAdm ? `
                              <button class="secondary small btn-edit-student-pass" data-student-id="${u.id}" data-student-name="${escapeHtml(u.name)}" data-student-user="${escapeHtml(u.username)}" style="margin-right:6px;" title="Đổi mật khẩu cho học sinh này">
                                🔑 Đổi MK
                              </button>
                            ` : ''}
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

          <!-- Khung chi tiết bài làm của học sinh được chọn -->
          ${selectedUser ? `
            <section class="student-drilldown-box">
              <div class="drilldown-header">
                <div>
                  <span class="eyebrow" style="background:#e0e7ff;color:#3730a3;border:none;">LỊCH SỬ CHI TIẾT CỦA HỌC SINH</span>
                  <h2>${escapeHtml(selectedUser.name)} (@${escapeHtml(selectedUser.username)})</h2>
                  <p>Tổng cộng <b>${studentResults.length}</b> lượt thi đã được đồng bộ lên cơ sở dữ liệu.</p>
                </div>
                <div class="drilldown-filter-tabs">
                  <button class="filter ${!filterSubject ? 'active' : ''}" data-filter-sub="">Tất cả môn (${this.getUserResults(selectedUser.id).length})</button>
                  <button class="filter ${filterSubject === 'math' ? 'active' : ''}" data-filter-sub="math">Toán (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'math').length})</button>
                  <button class="filter ${filterSubject === 'physics' ? 'active' : ''}" data-filter-sub="physics">Vật lí (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'physics').length})</button>
                  <button class="filter ${filterSubject === 'english' ? 'active' : ''}" data-filter-sub="english">Tiếng Anh (${this.getUserResults(selectedUser.id).filter(r => r.subject === 'english').length})</button>
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
                            <small>${r.correct}/${r.total} ý đúng · ${r.reason === 'time' ? 'Hết giờ' : 'Đã nộp'}${r.timeSpentText ? ` · ⏱ Làm trong: ${escapeHtml(r.timeSpentText)}` : (r.timeSpent ? ` · ⏱ Làm trong: ${Math.ceil(r.timeSpent / 60)} phút` : '')}</small>
                          </div>
                          <button class="primary small btn-review-result" data-result-idx="${rIdx}" data-student-id="${selectedUser.id}">
                            Xem lại câu đúng/sai ➔
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : `
                <div class="notice" style="margin:20px 0;">
                  <b>Học sinh này chưa làm bài thi nào ${filterSubject ? `cho môn đã chọn` : ''}.</b><br>
                  Khi học sinh hoàn thành bất kì đề thi nào, điểm và lời giải chi tiết sẽ tự động hiển thị tại đây.
                </div>
              `}
            </section>
          ` : ''}
        </div>
      `;

      if (typeof setNav === 'function') setNav('stats');
      window.examPresence?.mountAdmin();

      // Nút Thêm học sinh thủ công
      const btnAddUser = document.getElementById('btn-stats-add-user');
      if (btnAddUser) {
        btnAddUser.onclick = () => {
          const name = prompt('Nhập Họ và tên học sinh:', 'Thái Thành Công');
          if (!name || !name.trim()) return;
          const defaultUser = name.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]/g, '');
          const username = prompt('Nhập Tên đăng nhập (username):', defaultUser);
          if (!username || !username.trim()) return;
          const password = prompt('Nhập mật khẩu đăng nhập cho học sinh (ít nhất 3 ký tự):');
          if (!password || !password.trim()) return;

          const adminUser = this.getCurrentUser();
          const res = this.register(name.trim(), username.trim(), password.trim(), password.trim(), false);
          if (res.success) this.setCurrentUser(adminUser);
          if (!res.success) {
            alert(res.message);
          } else {
            alert(`✅ Đã tạo thành công tài khoản học sinh: ${res.user.name} (@${res.user.username})`);
            this.renderStatsView(res.user.id);
          }
        };
      }

      // Nút cấu hình Google Firebase Realtime Database
      const btnCfgFb = document.getElementById('btn-stats-config-firebase');
      if (btnCfgFb) {
        btnCfgFb.onclick = () => {
          const curFb = CloudDB.getFirebaseUrl();
          const inp = prompt(
            '🔥 CẤU HÌNH GOOGLE FIREBASE REALTIME DATABASE\n\n' +
            'Nhập URL Firebase Realtime Database của bạn để đồng bộ thời gian thực xuyên suốt mọi trình duyệt và thiết bị (không giới hạn lượt gọi):\n\n' +
            'Ví dụ: https://du-an-cua-ban-default-rtdb.asia-southeast1.firebasedatabase.app',
            curFb
          );
          if (inp !== null) {
            CloudDB.setFirebaseUrl(inp.trim());
            alert('✅ Đã lưu cấu hình Firebase! Đang tiến hành kết nối và đồng bộ...');
            this.renderStatsView();
          }
        };
      }

      // Nút làm mới dữ liệu từ Cloud
      const btnRefresh = document.getElementById('btn-stats-refresh-cloud');
      if (btnRefresh) {
        btnRefresh.onclick = () => {
          this.renderStatsView(selectedUser ? selectedUser.id : null, filterSubject, searchQuery);
        };
      }

      // Nút xuất file JSON
      const btnExport = document.getElementById('btn-stats-export-json');
      if (btnExport) {
        btnExport.onclick = () => {
          const exportData = {
            exportDate: new Date().toISOString(),
            users: this.getUsers(),
            results: this.getAllResults()
          };
          const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `du-lieu-lop-hoc-${new Date().toISOString().slice(0, 10)}.json`;
          a.click();
          URL.revokeObjectURL(url);
        };
      }

      // Nút nạp file JSON (Import / Restore)
      const btnImport = document.getElementById('btn-stats-import-json');
      const inputImport = document.getElementById('input-stats-import-file');
      if (btnImport && inputImport) {
        btnImport.onclick = () => inputImport.click();
        inputImport.onchange = (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (evt) => {
            try {
              const data = JSON.parse(evt.target.result);
              if (!data || (!Array.isArray(data.users) && !Array.isArray(data.results))) {
                alert('File JSON không đúng định dạng dữ liệu lớp học.');
                return;
              }
              let addedUsers = 0;
              let addedResults = 0;
              if (Array.isArray(data.users)) {
                const local = this.getLocalUsers();
                data.users.forEach(u => {
                  if (!local.some(x => x.username.toLowerCase() === u.username.toLowerCase())) {
                    local.push(u);
                    addedUsers++;
                  }
                });
                this.saveLocalUsers(local);
              }
              if (Array.isArray(data.results)) {
                const localR = this.getLocalResults();
                data.results.forEach(r => {
                  if (!localR.some(x => x.id === r.id && x.userId === r.userId && x.date === r.date)) {
                    localR.push(r);
                    addedResults++;
                  }
                });
                this.saveLocalResults(localR);
              }
              alert(`✅ Đã nạp thành công: ${addedUsers} tài khoản mới, ${addedResults} bài làm thi!`);
              this.renderStatsView();
            } catch (err) {
              alert('Lỗi đọc file JSON: ' + err.message);
            }
          };
          reader.readAsText(file);
          inputImport.value = '';
        };
      }

      // Nút đổi mật khẩu cho học sinh
      appEl.querySelectorAll('.btn-edit-student-pass').forEach(btn => {
        btn.onclick = () => {
          const sid = btn.dataset.studentId;
          const sName = btn.dataset.studentName;
          const sUser = btn.dataset.studentUser;
          const newPass = prompt(`Nhập mật khẩu mới cho học sinh ${sName} (@${sUser}):`, '123');
          if (newPass && newPass.trim().length >= 3) {
            const users = this.getLocalUsers();
            const target = users.find(x => x.id === sid);
            if (target) {
              target.password = newPass.trim();
              this.saveLocalUsers(users);
              alert(`✅ Đã cập nhật mật khẩu cho @${target.username} thành "${newPass.trim()}"!`);
            }
          } else if (newPass !== null) {
            alert('Mật khẩu phải có ít nhất 3 kí tự.');
          }
        };
      });

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

      // Phần IV (Essay)
      if (Array.isArray(e.essay) && e.essay.length > 0) {
        e.essay.forEach((essay, i) => {
          const userWork = a['tl' + i];
          const mode = a['tlMode' + i] === 'draft' ? 'draft' : 'ai';
          const aiGradeHtml = mode === 'ai' && typeof essayGradeResultHtml === 'function'
            ? essayGradeResultHtml(i, a)
            : '';
          reviewCards.push(`
            <div class="review-item">
              <div class="review-item-header">
                <span class="review-part-tag" style="background:#fef3c7;color:#92400e;">Phần IV · Tự luận</span>
                <span class="review-item-number">${escapeHtml(essay.title || `Câu ${i + 1}`)}</span>
              </div>
              <div class="review-q-text"><b>${escapeHtml(essay.title || `Câu ${i + 1}.`)}</b> ${essay.question}</div>
              <div class="student-essay-box" style="margin:12px 0;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
                <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;">${mode === 'draft' ? '✎ C2 · Làm trên nháp — không chấm AI' : '📝 C1 · Bài làm đã nhập trên web:'}</div>
                <div style="font-size:14px;color:#1e293b;white-space:pre-wrap;font-family:inherit;">${mode === 'draft' ? '<span style="color:#64748b;font-style:italic;">Học sinh chọn làm trên nháp; câu này không được gửi tới Gemini.</span>' : (userWork ? escapeHtml(userWork) : '<span style="color:#64748b;font-style:italic;">Chưa nhập bài làm.</span>')}</div>
              </div>
              ${aiGradeHtml}
              <div class="solution-box theme-study">
                <div class="solution-header">💡 HƯỚNG DẪN CHẤM & LỜI GIẢI CHI TIẾT:</div>
                <div class="solution-body">${essay.solution || 'Áp dụng kiến thức chuẩn SGK.'}</div>
              </div>
            </div>
          `);
        });
      }

      appEl.innerHTML = `
        <div class="content">
          <div class="result-panel">
            <div class="result-icon">📋</div>
            <h2>Bài làm của: ${escapeHtml(sName)}</h2>
            <p style="font-size:15px;color:#475569;margin-bottom:8px;">${escapeHtml(e.title)}</p>
            <div class="score">${pointText(score.points)} / ${pointText(score.max)} điểm</div>
            <p>${score.correct}/${score.total} ý đúng · Nộp lúc: ${formatDate(r.date)}${r.timeSpentText ? ` · ⏱ Thời gian làm bài: <b>${escapeHtml(r.timeSpentText)}</b>` : (r.timeSpent ? ` · ⏱ Thời gian làm bài: <b>${Math.ceil(r.timeSpent / 60)} phút</b>` : '')}</p>
            <div class="score-breakdown">
              <span>Phần I <b>${pointText(score.mc)} / ${pointText(e.questions.length * ((e.mcUnit !== undefined) ? e.mcUnit : 0.25))}</b></span>
              <span>Phần II <b>${pointText(score.tf)} / ${pointText(e.tf.length)}</b></span>
              <span>Phần III <b>${pointText(score.short)} / ${pointText(e.short.length * ((e.shortUnit !== undefined) ? e.shortUnit : (e.subject === 'chemistry' ? 0.25 : 0.5)))}</b></span>
            </div>
            <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="primary" id="btn-return-stats">⬅ Quay lại Bảng thống kê</button>
              ${e.id === 'toan-10-le-loi-102' && a.m7 === 2 ? '<button class="primary" id="btn-rescore-corrected-answer">✓ Đồng bộ điểm câu 8 đã sửa</button>' : ''}
              ${(e.essay || []).some((_, i) => a['tlMode' + i] !== 'draft' && String(a['tl' + i] || '').trim() && a['tlGradeError' + i]) ? '<button class="primary" id="btn-regrade-essays">🔄 Chấm lại tự luận bị lỗi</button>' : ''}
              <span id="regrade-status" role="status"></span>
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
      const rescoreBtn = document.getElementById('btn-rescore-corrected-answer');
      if (rescoreBtn) rescoreBtn.onclick = async () => {
        const status = document.getElementById('regrade-status');
        rescoreBtn.disabled = true;
        status.textContent = 'Đang lưu điểm đã chấm lại…';
        try {
          const updated = { ...r, points: score.points, maxPoints: score.max, correct: score.correct, total: score.total };
          await this.updateSavedResult(updated);
          this.renderStudentReview(updated, studentUser);
        } catch (error) {
          status.textContent = error.message || 'Chưa lưu được điểm mới.';
          rescoreBtn.disabled = false;
        }
      };
      const regradeBtn = document.getElementById('btn-regrade-essays');
      if (regradeBtn) regradeBtn.onclick = async () => {
        const status = document.getElementById('regrade-status');
        regradeBtn.disabled = true;
        status.textContent = 'Đang chấm lại các câu tự luận bị lỗi…';
        try {
          const items = e.essay.map((essay, i) => ({
            id: String(i), question: essay.question,
            referenceAnswer: essay.solution || 'Đối chiếu theo kiến thức Lớp 10.',
            studentAnswer: String(a['tl' + i] || '').trim()
          })).filter(item => item.studentAnswer && a['tlMode' + item.id] !== 'draft' && a['tlGradeError' + item.id]);
          if (!items.length) throw new Error('Không còn câu tự luận bị lỗi để chấm lại.');
          const response = await window.AIGrading.gradeEssays({ subject: 'Toán', examTitle: e.title, items });
          const grades = new Map((response.grades || []).map(grade => [String(grade.id), grade]));
          if (items.some(item => !grades.has(item.id))) throw new Error('Dịch vụ chấm chưa trả đủ kết quả cho các câu.');
          const updated = { ...r, answers: { ...a } };
          items.forEach(item => {
            const { id, ...grade } = grades.get(item.id);
            updated.answers['tlGrade' + item.id] = { ...grade, answerSnapshot: item.studentAnswer };
            delete updated.answers['tlGradeError' + item.id];
          });
          const newScore = scoreExam(e, updated.answers);
          Object.assign(updated, { points: newScore.points, maxPoints: newScore.max, correct: newScore.correct, total: newScore.total });
          await this.updateSavedResult(updated);
          this.renderStudentReview(updated, studentUser);
        } catch (error) {
          status.textContent = error.message || 'Chấm lại chưa thành công.';
          regradeBtn.disabled = false;
        }
      };
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

  // Khởi tạo
  auth.getLocalUsers();
  auth.syncFromCloudSilently();

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        auth.updateUI();
        auth.syncFromCloudSilently();
      });
    } else {
      auth.updateUI();
    }
  }

  // Toàn cục
  if (typeof window !== 'undefined') {
    window.auth = auth;
  }
  if (typeof global !== 'undefined') {
    global.auth = auth;
  }
})();
