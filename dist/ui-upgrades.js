// Mở rộng kho đề và cho phép xem lại các câu sai trong lịch sử.
function card(e){
  const labels={math:'Toán 10',physics:'Vật lý 10',chemistry:'Hóa học 10',english:'Tiếng Anh 10'};
  let status='<span class="exam-status-badge pending">Chưa làm</span>';
  let action=`<button class="primary" data-start="${esc(e.id)}">Làm bài</button>`;
  if(e.originalPdf){
    status='<span class="exam-status-badge pending">Đề PDF gốc · 3 trang</span>';
    action=`<button class="primary" data-start="${esc(e.id)}">Xem đề</button>`;
  } else if(window.auth && typeof window.auth.getExamStatus==='function'){
    const st=window.auth.getExamStatus(e.id);
    if(st?.hasDone && st.bestResult){
      const best=st.bestResult;
      status=`<span class="exam-status-badge completed">Đã làm · <b>${pointText(best.points)} / ${pointText(best.maxPoints)}</b></span>`;
      action=`<div class="card-action-group"><button class="secondary btn-card-review" data-review-exam="${esc(e.id)}">Xem lại</button><button class="primary" data-start="${esc(e.id)}">Làm lại</button></div>`;
    }
  }
  return `<article class="exam-card" data-subject="${esc(e.subject)}"><div class="exam-body"><div class="card-top"><span class="subject-pill">${labels[e.subject]||'Lớp 10'}</span><span class="card-code">${esc(e.id)}</span></div><h3>${esc(e.title)}</h3><div class="meta"><span>${e.minutes} phút</span>${e.questions.length?`<span>${e.questions.length} nhiều lựa chọn</span>`:''}${e.tf.length?`<span>${e.tf.length} đúng/sai</span>`:''}${e.short.length?`<span>${e.short.length} ${e.originalPdf ? 'tự luận có chấm điểm' : 'trả lời ngắn'}</span>`:''}${e.essay?.length?`<span>${e.essay.length} tự luận</span>`:''}</div>${sourceLine(e)}</div><div class="exam-actions">${status}${action}</div></article>`;
}

function tiles(){
  const counts={0:'math',1:'physics',4:'english',5:'chemistry'};
  return `<div class="subject-grid">${subjects.map((s,i)=>`<button class="subject-tile" data-subjectto="${i}"><span class="tile-icon" style="background:${s[2]};color:${s[3]}">${s[1]}</span><b>${s[0]}</b><small>${counts[i]?exams.filter(e=>e.subject===counts[i]).length+' đề thi':'Sắp cập nhật đề thi'}</small></button>`).join('')}</div>`;
}
function home(){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('home')) return;
  const groups = [
    ['math',0,'Toán','Mệnh đề, tập hợp và hệ thức lượng','T'],
    ['physics',1,'Vật lý','Đo lường và chuyển động','L'],
    ['chemistry',5,'Hóa học','Nguyên tử và bảng tuần hoàn','H'],
    ['english',4,'Tiếng Anh','REVIEW 1 · Ngữ pháp và kỹ năng','EN']
  ];
  const featured = groups.map(([subject])=>exams.find(e=>e.subject===subject)).filter(Boolean);
  app.innerHTML = `<div class="content dashboard-page">
    <div class="workspace-heading"><div><div class="page-pretitle">Lớp 10 · Học kỳ I</div><h1>Tổng quan học tập</h1><p>Chọn môn học, ôn lại kiến thức và bắt đầu một lượt luyện đề.</p></div><button class="btn btn-primary" data-viewto="subjects">Vào kho đề thi <img src="vendor/tabler/icons/arrow-right.svg" alt="" class="button-icon"></button></div>
    <section class="summary-strip" aria-label="Tổng quan kho học tập">
      <div><span>Đề thi trong kho</span><strong>${exams.length}</strong></div>
      <div><span>Môn có đề luyện</span><strong>${new Set(exams.map(e=>e.subject)).size}<small> / 7 môn</small></strong></div>
      <div><span>Lượt thi đã hoàn thành</span><strong>${saved().length}</strong></div>
    </section>
    <div class="overview-grid">
      <section class="card course-panel"><div class="card-header"><h2 class="card-title">Môn đang ôn tập</h2><button class="text-link" data-viewto="subjects">Xem kho đề</button></div><div class="course-list">${groups.map(([subject,index,name,desc,mark])=>`<button class="course-row" data-subjectto="${index}"><span class="course-mark">${mark}</span><span class="course-description"><strong>${name}</strong><small>${desc}</small></span><span class="course-count">${exams.filter(e=>e.subject===subject).length} đề</span><img src="vendor/tabler/icons/arrow-right.svg" class="row-arrow" alt=""></button>`).join('')}</div><div class="card-footer"><span>Kiểm tra giữa học kỳ I</span><button class="text-link" data-viewto="subjects">Tất cả 7 môn →</button></div></section>
      <section class="card handbook-feature-banner"><div class="card-header"><h2 class="card-title">Sổ tay kiến thức</h2><img src="vendor/tabler/icons/book-2.svg" width="20" height="20" alt=""></div><div class="card-body"><p class="handbook-intro">Tra cứu công thức, ngữ pháp và ví dụ theo các dạng bài trong đề.</p><div class="handbook-shortcuts">${groups.map(([subject,,name])=>`<a href="#handbook-${subject}"><span>${name}</span><img src="vendor/tabler/icons/arrow-right.svg" class="row-arrow" alt=""></a>`).join('')}</div></div><div class="card-footer"><a class="text-link" href="#handbook">Mở sổ tay kiến thức →</a></div></section>
    </div>
    <section class="recent-section"><div class="section-head"><div><h2>Đề luyện theo môn</h2><p>Mỗi môn một đề để bắt đầu. Xem toàn bộ đề trong kho khi cần luyện thêm.</p></div><button class="text-link" data-viewto="subjects">Tất cả ${exams.length} đề →</button></div><div class="cards exam-list">${featured.map(card).join('')}</div></section>
  </div>`;
  setNav('home');
}

function catalog(index){
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('subjects')) return;
  const mapping={0:'math',1:'physics',4:'english',5:'chemistry'},list=index===undefined?exams:exams.filter(e=>e.subject===mapping[index]);
  const name=index===undefined?'Kho đề thi':subjects[index][0];
  app.innerHTML=`<div class="content"><div class="page-heading"><h1>${name}</h1><p>${list.length?`${list.length} bài luyện lớp 10 · Xem cấu trúc từng bài trên thẻ đề và lời giải sau khi nộp.`:'Môn học này đang được cập nhật đề thi.'}</p>${mapping[index]?`<div style="margin:14px 0 10px;"><a href="#handbook-${mapping[index]}" class="secondary handbook-quick-btn" style="display:inline-flex;align-items:center;gap:8px;font-size:13px;padding:8px 16px;border-radius:8px;"><span>📖</span> Xem sổ tay công thức & lý thuyết ${name} ➔</a></div>`:''}</div>${index===undefined?`<div class="filter-row"><button class="filter active" data-viewto="subjects">Tất cả</button>${[[0,'Toán'],[1,'Vật lý'],[4,'Tiếng Anh'],[5,'Hóa học']].map(([i,n])=>`<button class="filter" data-subjectto="${i}">${n} (${exams.filter(e=>e.subject===mapping[i]).length})</button>`).join('')}</div>`:''}${list.length?`<div class="catalog-toolbar"><label class="catalog-search"><img src="vendor/tabler/icons/search.svg" alt="" width="18" height="18"><input class="form-control" type="search" data-exam-search aria-label="Tìm đề thi" placeholder="Tìm tên đề, trường hoặc tỉnh…"></label><span class="catalog-count" data-catalog-count aria-live="polite">${list.length} đề thi</span></div><div class="cards exam-list">${list.map(card).join('')}</div><div class="catalog-empty notice" data-catalog-empty hidden>Không tìm thấy đề phù hợp. Hãy thử tên trường, tỉnh hoặc từ khóa khác.</div>`:`<div class="notice"><b>Đề thi đang được cập nhật</b>Môn ${name} chưa có bộ đề.<br><br><button class="primary" data-viewto="subjects">Xem kho đề →</button></div>`}${index===undefined?`<section class="lower-section"><div class="section-head"><h2>Danh sách môn học</h2></div>${tiles()}</section>`:''}</div>`;
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
    const isMatch=(u,exp)=>u!==undefined&&u!==null&&isTrue(u)===isTrue(exp);
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
      const ok=shortCorrect(chosen,q.answer,q.acceptedAnswers);
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

  const essayCards = [];
  if (Array.isArray(e.essay) && e.essay.length > 0) {
    e.essay.forEach((essay, i) => {
      const userWork = a['tl' + i];
      const hasWork = userWork !== undefined && String(userWork).trim() !== '';
      essayCards.push(`
        <div class="review-item" id="review-essay-${i}">
          <div class="review-item-header">
            <span class="review-part-tag" style="background:#fef3c7;color:#92400e;">Phần IV · Tự luận</span>
            <span class="review-item-number">${esc(essay.title || `Câu ${i + 1}`)}</span>
          </div>
          <div class="review-q-text"><b>${esc(essay.title || `Câu ${i + 1}.`)}</b> ${essay.question}</div>
          <div class="student-essay-box" style="margin:12px 0;padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
            <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;">📝 Bài làm / ghi chú của bạn:</div>
            <div style="font-size:14px;color:#1e293b;white-space:pre-wrap;font-family:inherit;">${hasWork ? esc(userWork) : '<span style="color:#64748b;font-style:italic;">(Bỏ qua ô nhập / làm ra giấy nháp — đối chiếu lời giải chi tiết và barem điểm chấm bên dưới)</span>'}</div>
          </div>
          <div class="solution-box theme-study">
            <div class="solution-header">${e.subject === 'english' ? '💡 LỜI GIẢI VÀ ĐÁP ÁN:' : '💡 HƯỚNG DẪN GIẢI CHI TIẾT & BAREM ĐIỂM CHẤM:'}</div>
            <div class="solution-body">${essay.solution || 'Áp dụng định lý và kiến thức SGK để trình bày lời giải.'}</div>
          </div>
        </div>
      `);
    });
  }

  const essaySectionHtml = essayCards.length > 0 ? `
    <div class="review-essay-section" style="margin-top:32px;border-top:2px dashed #cbd5e1;padding-top:24px;">
      <div class="section-head" style="margin-bottom:16px;">
        <div>
          <h2>Phần IV · Tự luận (${essayCards.length} câu)</h2>
          <p>${e.subject === 'english' ? 'Xem lại bài làm / ghi chú bạn đã lưu cùng lời giải và đáp án.' : 'Xem lại bài làm / ghi chú bạn đã lưu cùng barem điểm chấm và hướng dẫn giải chi tiết.'}</p>
        </div>
      </div>
      <div class="review-essay-list">${essayCards.join('')}</div>
    </div>
  ` : '';

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

  app.innerHTML=`<div class="content"><div class="result-panel"><div class="result-icon">📘</div><h1>Xem lại bài đã làm</h1><p>${esc(r.title)} · ${formatDate(r.date)}${r.timeSpentText ? ` · ⏱ Thời gian làm bài: <b>${esc(r.timeSpentText)}</b>` : (r.timeSpent ? ` · ⏱ Thời gian làm bài: <b>${Math.ceil(r.timeSpent / 60)} phút</b>` : '')}</p><div class="score">${r.correct}/${r.total}</div><p>${wrong.length} ý sai hoặc bỏ trống${legacy?' · Bài cũ chỉ có phần nhiều lựa chọn':''}</p>${sourceLine(e)}<div class="review-actions"><button class="secondary" data-viewto="history">← Lịch sử làm bài</button><button class="primary" data-start="${e.id}">Làm lại đề này ↻</button></div>${filterBarHtml}<div class="review">${listContainerHtml}${essaySectionHtml}</div></div></div>`;
  setNav('result');window.scrollTo(0,0);
  if (typeof tryRenderKatex === 'function') {
    tryRenderKatex(app);
  }
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

// Filter the current catalog without changing exam data or answers.
document.addEventListener('input', event=>{
  if(!event.target.matches?.('[data-exam-search]'))return;
  const normalize=value=>value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
  const query=normalize(event.target.value.trim());
  let count=0;
  document.querySelectorAll('#app .exam-list .exam-card').forEach(row=>{row.hidden=!normalize(row.textContent).includes(query);if(!row.hidden)count++;});
  const label=document.querySelector('[data-catalog-count]');if(label)label.textContent=count+' đề thi';
  const empty=document.querySelector('[data-catalog-empty]');if(empty)empty.hidden=count!==0;
});
