// Mở rộng kho đề và cho phép xem lại các câu sai trong lịch sử.
function card(e){
  const label=e.subject==='math'?'∑ &nbsp; TOÁN 10':e.subject==='chemistry'?'⚗ &nbsp; HÓA HỌC 10':'⚛ &nbsp; VẬT LÝ 10';
  let statusBadge = '';
  let bottomAction = `<button class="primary" data-start="${e.id}">Bắt đầu làm bài →</button>`;
  
  if (typeof window !== 'undefined' && window.auth && typeof window.auth.getExamStatus === 'function') {
    const st = window.auth.getExamStatus(e.id);
    if (st && st.hasDone && st.bestResult) {
      const best = st.bestResult;
      const pts = (typeof pointText === 'function') ? pointText(best.points) : best.points;
      const maxPts = (typeof pointText === 'function') ? pointText(best.maxPoints) : best.maxPoints;
      statusBadge = `<div class="exam-status-badge completed"><span class="status-icon">✓</span><span class="status-text">ĐÃ LÀM · <b>${pts} / ${maxPts}</b> điểm</span>${st.attempts > 1 ? `<span class="attempts-count">(${st.attempts} lần)</span>` : ''}</div>`;
      bottomAction = `<div class="card-action-group"><button class="secondary btn-card-review" data-review-exam="${e.id}">Xem lại</button><button class="primary" data-start="${e.id}">Làm lại →</button></div>`;
    } else {
      statusBadge = `<div class="exam-status-badge pending"><span class="status-icon">○</span><span class="status-text">Chưa làm</span></div>`;
    }
  }

  return `<article class="exam-card ${statusBadge.includes('completed') ? 'card-completed' : ''}"><div class="card-top"><span class="subject-pill">${label}</span><span class="card-code">${e.id}</span></div>${statusBadge}<h3>${e.title}</h3><p>${e.description}</p><div class="meta"><span>◷ &nbsp; ${e.minutes} phút</span><span>☷ &nbsp; ${e.questions.length} nhiều lựa chọn</span><span>✓ &nbsp; ${e.tf.length} đúng/sai</span><span>✎ &nbsp; ${e.short.length} trả lời ngắn</span></div>${sourceLine(e)}<div class="card-bottom"><span>Giữa học kì I</span>${bottomAction}</div></article>`;
}
function tiles(){
  const counts={0:'math',1:'physics',5:'chemistry'};
  return `<div class="subject-grid">${subjects.map((s,i)=>`<button class="subject-tile" data-subjectto="${i}"><span class="tile-icon" style="background:${s[2]};color:${s[3]}">${s[1]}</span><b>${s[0]}</b><small>${counts[i]?exams.filter(e=>e.subject===counts[i]).length+' đề thi':'Sắp cập nhật đề thi'}</small></button>`).join('')}</div>`;
}
function home(){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('home')) return;
  const groups=[['math',0,'Toán 10 · Giữa kì I','Mệnh đề, tập hợp, bất phương trình và hệ thức lượng'],['physics',1,'Vật lý 10 · Giữa kì I','Ưu tiên nguồn Quảng Trị và miền Trung'],['chemistry',5,'Hóa học 10 · Giữa kì I','Cấu tạo nguyên tử và bảng tuần hoàn']];
  app.innerHTML=`<div class="content"><section class="hero"><div class="hero-copy"><span class="eyebrow">✦ &nbsp; KHÔNG GIAN HỌC TẬP CỦA BẠN</span><h1>Học tập hôm nay,<br>tự tin ngày mai.</h1><p>Luyện đề Toán, Vật lý và Hóa học lớp 10 với đồng hồ thi, ba dạng câu hỏi và phần xem lại bài đã nộp.</p></div><div class="hero-art"><div class="orbit"></div><div class="planet one">📚</div><div class="planet two">∑</div><div class="planet three">✦</div></div></section><section class="stats"><div class="stat"><span class="stat-icon purple">▦</span><div><b>07</b><small>Môn học</small></div></div><div class="stat"><span class="stat-icon orange">☷</span><div><b>${String(exams.length).padStart(2,'0')}</b><small>Đề thi sẵn sàng</small></div></div><div class="stat"><span class="stat-icon green">◷</span><div><b>${String(saved().length).padStart(2,'0')}</b><small>Lượt thi đã hoàn thành</small></div></div></section><section class="handbook-feature-banner"><div class="hfb-left"><span class="eyebrow" style="background:#ffffff22;color:#ffffff;border-color:#ffffff33;">📖 TÀI LIỆU ÔN THI ĐẶC BIỆT</span><h2>Sổ tay Công thức & Lý thuyết Giữa kì I</h2><p>Tổng hợp cô đọng toàn bộ công thức, định lí quan trọng và bẫy đề thi cần thuộc cho môn Toán 10, Vật lí 10, Hóa học 10.</p><div class="hfb-tags"><span>∑ Toán 10</span><span>⚛️ Vật lý 10</span><span>🧪 Hóa học 10</span></div></div><div class="hfb-right"><a href="#handbook" class="hfb-btn">Mở sổ tay kiến thức →</a></div></section>${groups.map(([subject,index,title,desc])=>{const list=exams.filter(e=>e.subject===subject);return `<section class="lower-section"><div class="section-head"><div><h2>${title}</h2><p>${list.length} bài luyện · ${desc}</p></div><button class="text-link" data-subjectto="${index}">Xem tất cả →</button></div><div class="cards">${list.slice(0,4).map(card).join('')}</div></section>`}).join('')}<section class="lower-section"><div class="section-head"><div><h2>Khám phá môn học</h2><p>7 môn trong tổ hợp học tập của bạn</p></div></div>${tiles()}</section></div>`;
  setNav('home');
}
function catalog(index){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('subjects')) return;
  const mapping={0:'math',1:'physics',5:'chemistry'},list=index===undefined?exams:exams.filter(e=>e.subject===mapping[index]);
  const name=index===undefined?'Kho đề thi':subjects[index][0];
  app.innerHTML=`<div class="content"><div class="page-heading"><h1>${name}</h1><p>${list.length?`${list.length} bài luyện giữa kì I lớp 10 · Nhiều lựa chọn, đúng/sai và trả lời ngắn · Không có tự luận.`:'Môn học này đang được cập nhật đề thi.'}</p><div style="margin:14px 0 10px;"><a href="#handbook${index!==undefined?'-'+mapping[index]:''}" class="secondary handbook-quick-btn" style="display:inline-flex;align-items:center;gap:8px;font-size:13px;padding:8px 16px;border-radius:8px;"><span>📖</span> Xem sổ tay công thức & lý thuyết ${index!==undefined?name:'các môn'} ➔</a></div></div>${index===undefined?`<div class="filter-row"><button class="filter active" data-viewto="subjects">Tất cả</button>${[[0,'Toán'],[1,'Vật lý'],[5,'Hóa học']].map(([i,n])=>`<button class="filter" data-subjectto="${i}">${n} (${exams.filter(e=>e.subject===mapping[i]).length})</button>`).join('')}</div>`:''}${list.length?`<div class="cards">${list.map(card).join('')}</div>`:`<div class="notice"><b>Đề thi đang được cập nhật</b>Môn ${name} chưa có bộ đề.<br><br><button class="primary" data-viewto="subjects">Xem kho đề →</button></div>`}${index===undefined?`<section class="lower-section"><div class="section-head"><h2>Danh sách môn học</h2></div>${tiles()}</section>`:''}</div>`;
  setNav(index===undefined?'subjects':'subject-'+index);
}
function history(){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('history')) return;
  const allItems=saved();
  const currentUser = (typeof window !== 'undefined' && window.auth && typeof window.auth.getCurrentUser === 'function') ? window.auth.getCurrentUser() : null;
  const items = currentUser ? allItems.filter(x => x.userId === currentUser.id || (!x.userId && currentUser.id === 'u-an')) : allItems;

  app.innerHTML=`<div class="content"><div class="page-heading">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
      <div>
        <h1>Lịch sử làm bài</h1>
        <p>Kết quả và đáp án đã chọn được lưu trên trình duyệt của thiết bị này. Bấm “Xem câu sai” để ôn lại bài đã làm.</p>
      </div>
      ${currentUser ? `
        <div class="history-user-info-banner">
          <span>${(typeof window !== 'undefined' && window.auth && window.auth.isAdmin(currentUser)) ? 'Quản trị viên' : 'Học sinh'}: <b>${esc(currentUser.name)}</b> (@${esc(currentUser.username)})</span>
          <button class="secondary small" id="btn-hist-switch">Đổi tài khoản</button>
          ${(typeof window !== 'undefined' && window.auth && window.auth.isAdmin(currentUser)) ? `<a href="#stats" class="primary small" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px;">📊 Thống kê cả lớp ➔</a>` : ''}
        </div>
      ` : ''}
    </div>
  </div>${items.length?`<div class="history-list">${items.map((x,i)=>{
    const realIdx = allItems.indexOf(x);
    return `<div class="history-item"><div><strong>${esc(x.title)}</strong><small>${formatDate(x.date)}${x.timeSpentText ? ` · ⏱ Làm trong: <b>${esc(x.timeSpentText)}</b>` : (x.timeSpent ? ` · ⏱ Làm trong: <b>${Math.ceil(x.timeSpent / 60)} phút</b>` : '')} · ${x.reason==='time'?'Hết giờ':'Đã nộp bài'} · ${Math.max(0,x.total-x.correct)} ý sai hoặc bỏ trống · Thí sinh: ${esc(x.studentName || (currentUser ? currentUser.name : 'Học sinh'))}</small></div><div class="history-actions"><span class="history-score">${x.correct}/${x.total}</span><button class="secondary" data-review="${realIdx}">Xem câu sai →</button></div></div>`;
  }).join('')}</div>`:`<div class="notice"><b>Chưa có bài thi nào cho tài khoản ${currentUser ? esc(currentUser.name) : ''}</b>Hãy thử một bộ đề để bắt đầu theo dõi kết quả.<br><br><button class="primary" data-viewto="subjects">Khám phá đề thi →</button></div>`}</div>`;
  setNav('history');
  const swBtn = document.getElementById('btn-hist-switch');
  if (swBtn && window.auth) swBtn.onclick = () => window.auth.openModal('switch');
}
function reviewPast(index){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('history')) return;
  const r=saved()[index];if(!r)return history();
  const e=typeof historicalExamForResult==='function'?historicalExamForResult(r):exams.find(x=>x.id===r.id);
  if(!e){
    app.innerHTML=`<div class="content"><div class="notice"><b>Không tìm thấy bộ đề gốc</b>Điểm của bài vẫn được lưu: ${r.correct}/${r.total}.<br><br><button class="primary" data-viewto="history">Về lịch sử</button></div></div>`;
    return setNav('history');
  }
  const a=r.answers||{},legacy=r.total===e.questions.length;
  const wrong=[], all=[];

  (e.questions||[]).forEach((q,i)=>{
    const chosen=a['m'+i]??a[i];
    const ok=chosen!==undefined&&chosen===q[2];
    const optionsHtml=Array.isArray(q[1])&&q[1].length?`<div class="review-options-list">${q[1].map((opt,idx)=>{
      const isKey=idx===q[2];
      const isChosen=idx===chosen;
      const cls=isKey?'review-option-row key-correct':(isChosen&&!ok?'review-option-row user-wrong':'review-option-row');
      const icon=isKey?'✓':(isChosen&&!ok?'✗':'○');
      return `<div class="${cls}"><b>${'ABCD'[idx]}.</b> <span>${esc(cleanOptionText(opt))}</span> <span style="margin-left:auto;font-weight:700;">${icon}</span></div>`;
    }).join('')}</div>`:'';
    const statusHtml=`<div class="review-status-row">
      ${ok?`<span class="badge-user-ans correct">✓ Bạn đã chọn đúng (${'ABCD'[chosen]})</span>`:chosen===undefined?`<span class="badge-user-ans unanswered">⚠️ Bạn chưa chọn câu này (Bỏ trống · 0 điểm)</span>`:`<span class="badge-user-ans wrong">✗ Bạn đã chọn: ${'ABCD'[chosen]}. ${esc(cleanOptionText(q[1][chosen]))}</span>`}
      <span class="badge-correct-ans">✓ Đáp án chuẩn: ${'ABCD'[q[2]]}. ${esc(cleanOptionText(q[1][q[2]]))}</span>
    </div>`;
    const explainText=q[3]||'Áp dụng định nghĩa và kiến thức chuẩn trong chương trình SGK Lớp 10 để giải ra đáp án đúng.';
    const solutionHtml=`<div class="solution-box theme-study">
      <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
      <div class="solution-body">${explainText}</div>
    </div>`;
    const cardHtml=`<div class="review-item">
      <div class="review-item-header">
        <span class="review-part-tag">Phần I · Trắc nghiệm</span>
        <span class="review-item-number">Câu ${i+1}</span>
      </div>
      <div class="review-q-text"><b>Câu ${i+1}.</b> ${q[0]}</div>
      ${optionsHtml}
      ${statusHtml}
      ${solutionHtml}
    </div>`;
    all.push(cardHtml);
    if(!ok)wrong.push(cardHtml);
  });

  if(!legacy){
    const isTrue=v=>(v===true||v==='true'||v==='Đúng'||v==='đúng');
    const isMatch=(u,exp)=>u!==undefined&&u!==null&&Boolean(u)===isTrue(exp);
    (e.tf||[]).forEach((q,i)=>{
      (q.items||[]).forEach((item,j)=>{
        const chosen=a['t'+i+'-'+j];
        const ok=isMatch(chosen,item[1]);
        const expTrue=isTrue(item[1]);
        const statusHtml=`<div class="review-status-row">
          ${ok?`<span class="badge-user-ans correct">✓ Bạn chọn: ${chosen?'ĐÚNG':'SAI'} (Chính xác)</span>`:chosen===undefined?`<span class="badge-user-ans unanswered">⚠️ Chưa chọn ý này (Bỏ trống · 0 điểm)</span>`:`<span class="badge-user-ans wrong">✗ Bạn chọn: ${chosen?'ĐÚNG':'SAI'}</span>`}
          <span class="badge-correct-ans">✓ Khẳng định này là: <b>${expTrue?'ĐÚNG':'SAI'}</b></span>
        </div>`;
        const explainText=item[2]||(expTrue?'Khẳng định này là ĐÚNG theo kiến thức lý thuyết và định lý trong SGK Lớp 10.':'Khẳng định này là SAI theo kiến thức lý thuyết và định lý trong SGK Lớp 10.');
        const solutionHtml=`<div class="solution-box theme-study">
          <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
          <div class="solution-body">${explainText}</div>
        </div>`;
        const cardHtml=`<div class="review-item">
          <div class="review-item-header">
            <span class="review-part-tag">Phần II · Đúng / Sai</span>
            <span class="review-item-number">Câu ${i+1} – Ý ${'abcd'[j]})</span>
          </div>
          <div class="review-stem-box">
            <div class="review-stem-title">📖 Đề bài chung (Câu ${i+1}):</div>
            <div class="review-stem-content">${q.stem}</div>
          </div>
          <div class="review-q-text"><b>Ý ${'abcd'[j]}):</b> ${cleanItemText(item[0])}</div>
          ${statusHtml}
          ${solutionHtml}
        </div>`;
        all.push(cardHtml);
        if(!ok)wrong.push(cardHtml);
      });
    });

    (e.short||[]).forEach((q,i)=>{
      const chosen=a['s'+i];
      const ok=shortCorrect(chosen,q.answer);
      const statusHtml=`<div class="review-status-row">
        ${ok?`<span class="badge-user-ans correct">✓ Bạn điền: ${esc(chosen)} (Chính xác)</span>`:chosen===undefined||String(chosen).trim()===''?`<span class="badge-user-ans unanswered">⚠️ Chưa điền đáp án (Bỏ trống · 0 điểm)</span>`:`<span class="badge-user-ans wrong">✗ Bạn đã điền: ${esc(chosen)}</span>`}
        <span class="badge-correct-ans">✓ Đáp án chuẩn: <b>${esc(q.answer)}${q.unit?' '+esc(q.unit):''}</b></span>
      </div>`;
      const explainText=q.explain||q.explanation||'Áp dụng các định luật và công thức tính toán theo chuẩn kiến thức Lớp 10 để giải ra kết quả trên.';
      const solutionHtml=`<div class="solution-box theme-study">
        <div class="solution-header">💡 HƯỚNG DẪN GIẢI CHI TIẾT (KIẾN THỨC LỚP 10):</div>
        <div class="solution-body">${explainText}</div>
      </div>`;
      const cardHtml=`<div class="review-item">
        <div class="review-item-header">
          <span class="review-part-tag">Phần III · Trả lời ngắn</span>
          <span class="review-item-number">Câu ${i+1}</span>
        </div>
        <div class="review-q-text"><b>Câu ${i+1}.</b> ${q.text||q.question}</div>
        ${statusHtml}
        ${solutionHtml}
      </div>`;
      all.push(cardHtml);
      if(!ok)wrong.push(cardHtml);
    });
  }

  const filterBarHtml=wrong.length>0?`<div class="review-toggle-bar">
    <button type="button" class="tab-btn active" data-review-filter="wrong">Chỉ câu sai & cần ôn lại (${wrong.length})</button>
    <button type="button" class="tab-btn" data-review-filter="all">Xem tất cả câu & lời giải (${all.length})</button>
  </div>`:'';

  const listContainerHtml=wrong.length>0?`
    <div id="review-list-wrong">${wrong.join('')}</div>
    <div id="review-list-all" style="display:none;">${all.join('')}</div>
  `:`
    <div class="notice" style="background:#f0fdf4;border:1px solid #86efac;color:#166534;margin:20px 0;padding:18px;border-radius:10px;">
      <b style="font-size:16px;">🎉 Chúc mừng! Bạn không có câu sai nào!</b>
      <p style="margin:6px 0 0;font-size:13px;">Bạn đã trả lời đúng toàn bộ các câu hỏi trong đề này.</p>
    </div>
    <div class="section-head" style="margin-top:24px;"><h2>Toàn bộ lời giải chi tiết (Lớp 10)</h2></div>
    <div id="review-list-all">${all.join('')}</div>
  `;

  app.innerHTML=`<div class="content"><div class="result-panel"><div class="result-icon">📘</div><h1>Xem lại bài đã làm</h1><p>${esc(r.title)} · ${formatDate(r.date)}${r.timeSpentText ? ` · ⏱ Thời gian làm bài: <b>${esc(r.timeSpentText)}</b>` : (r.timeSpent ? ` · ⏱ Thời gian làm bài: <b>${Math.ceil(r.timeSpent / 60)} phút</b>` : '')}</p><div class="score">${r.correct}/${r.total}</div><p>${wrong.length} ý sai hoặc bỏ trống${legacy?' · Bài cũ chỉ có phần nhiều lựa chọn':''}</p>${sourceLine(e)}<div class="review-actions"><button class="secondary" data-viewto="history">← Lịch sử làm bài</button><button class="primary" data-start="${e.id}">Làm lại đề này ↻</button></div>${filterBarHtml}<div class="review">${listContainerHtml}</div></div></div>`;
  setNav('result');window.scrollTo(0,0);
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-review]');
  if(button)reviewPast(Number(button.dataset.review));
  const revExamBtn=event.target.closest('[data-review-exam]');
  if(revExamBtn){
    const examId = revExamBtn.dataset.reviewExam;
    const all = saved();
    const currentUser = (typeof window !== 'undefined' && window.auth && typeof window.auth.getCurrentUser === 'function') ? window.auth.getCurrentUser() : null;
    let idx = all.findIndex(r => r.id === examId && (!currentUser || r.userId === currentUser.id || (!r.userId && currentUser.id === 'u-an')));
    if (idx === -1) idx = all.findIndex(r => r.id === examId);
    if (idx !== -1) reviewPast(idx);
    else if (window.auth) window.auth.openModal('switch');
    return;
  }
  const filterBtn=event.target.closest('[data-review-filter]');
  if(filterBtn){
    const filter=filterBtn.dataset.reviewFilter;
    document.querySelectorAll('[data-review-filter]').forEach(b=>{
      b.classList.toggle('active',b===filterBtn);
    });
    const wList=document.getElementById('review-list-wrong');
    const aList=document.getElementById('review-list-all');
    if(wList&&aList){
      if(filter==='all'){wList.style.display='none';aList.style.display='block';}
      else{wList.style.display='block';aList.style.display='none';}
    }
  }
});
if (typeof location !== 'undefined' && location.hash) {
  const h = location.hash;
  if (h === '#history') history();
  else if (h === '#stats') { if (window.auth) window.auth.renderStatsView(); }
  else if (h.startsWith('#subject-')) catalog(Number(h.split('-')[1]));
  else if (h === '#subjects') catalog();
  else if (h === '#handbook' || h.startsWith('#handbook-')) {
    const part = h.replace('#handbook', '').replace(/^-/, '');
    if (typeof renderHandbook === 'function') renderHandbook(part || 'all');
  }
  else home();
} else {
  home();
}
