// Thang điểm bài luyện: I 0,25/câu; II 0/0,1/0,25/0,5/1 theo số ý đúng; III 0,5/câu (Hóa 10: 0,25/câu chuẩn ma trận; hoặc theo đề gốc).
const pointText=n=>Number(n).toLocaleString('vi-VN',{maximumFractionDigits:2});
function scoreExam(e,a={},legacy=false){
  const mcUnit = (e && typeof e.mcUnit === 'number') ? e.mcUnit : 0.25;
  const mcCorrect=e.questions.reduce((n,q,i)=>n+(mcAnswerMatches(e,i,a['m'+i],q)||a[i]===q[2]?1:0),0);
  const mc=Math.round(mcCorrect*mcUnit*100)/100;
  let tfCorrect=0,tf=0,shortCorrectCount=0,short=0,essayCorrect=0,essay=0,essayMax=0;
  const shortUnit = (e && typeof e.shortUnit === 'number') ? e.shortUnit : ((e && e.subject === 'chemistry') ? 0.25 : 0.5);
  if(!legacy){
    const isTrue=v=>(v===true||v==='true'||v==='Đúng'||v==='đúng');
    const isMatch=(u,exp)=>u!==undefined&&u!==null&&isTrue(u)===isTrue(exp);
    e.tf.forEach((q,i)=>{const count=q.items.reduce((n,item,j)=>n+(isMatch(a['t'+i+'-'+j],item[1])?1:0),0);tfCorrect+=count;tf+=e.tfScoring==='per-item'?count*.25:[0,.1,.25,.5,1][count]});
    e.short.forEach((q,i)=>{if(shortCorrect(a['s'+i],q.answer)){shortCorrectCount++;short+=shortUnit}});
  }
  const hasAiEssay = !legacy && Array.isArray(e.essay) && e.essay.length > 0 && e.essay.some((_,i)=>a['tlMode'+i] !== undefined || a['tlGrade'+i] !== undefined);
  if(hasAiEssay){
    e.essay.forEach((question,i)=>{
      const maxForQuestion=typeof essayPointValue==='function'?essayPointValue(question,e):((typeof e.essayPoints==='number'?e.essayPoints:3)/e.essay.length);
      essayMax+=maxForQuestion;
      const grade=a['tlGrade'+i];
      if(a['tlMode'+i]!=='draft' && grade && Number.isFinite(Number(grade.scorePercent))){
        essay+=maxForQuestion*Math.max(0,Math.min(100,Number(grade.scorePercent)))/100;
        if(grade.verdict==='correct')essayCorrect++;
      }
    });
  }
  return {mc,tf,short,essay:Math.round(essay*100)/100,essayMax:Math.round(essayMax*100)/100,points:Math.round((mc+tf+short+essay)*100)/100,max:Math.round((e.questions.length*mcUnit+(legacy?0:e.tf.length+e.short.length*shortUnit)+essayMax)*100)/100,correct:mcCorrect+tfCorrect+shortCorrectCount+essayCorrect,total:e.questions.length+(legacy?0:e.tf.reduce((n,q)=>n+q.items.length,0)+e.short.length+(hasAiEssay?e.essay.length:0))};
}
function scoreForResult(r){const e=typeof historicalExamForResult==='function'?historicalExamForResult(r):exams.find(x=>x.id===r.id);return e?scoreExam(e,r.answers||{},r.total===e.questions.length):null}
submitExam=async function(reason){
  if(!activeExam||isSubmittingExam)return;
  isSubmittingExam=true;
  const e=activeExam;clearInterval(ticker);
  (e.essay||[]).forEach((_,i)=>{if(answers['tlMode'+i]===undefined)answers['tlMode'+i]=typeof essayMode==='function'?essayMode(i):'ai'});
  const pending=(e.essay||[]).map((_,i)=>i).filter(i=>answers['tlMode'+i]!=='draft'&&String(answers['tl'+i]||'').trim()&&(!answers['tlGrade'+i]||answers['tlGrade'+i].answerSnapshot!==String(answers['tl'+i]).trim()));
  let gradingNotice=null;
  if(pending.length){
    gradingNotice=document.createElement('div');
    gradingNotice.className='ai-submit-notice';
    gradingNotice.innerHTML=`<span></span><b>Gemini đang chấm tổng hợp ${pending.length} câu tự luận…</b><small>Chỉ gửi một lượt khi nộp bài. Vui lòng giữ trang này mở.</small>`;
    document.body.appendChild(gradingNotice);
    if(typeof gradeEssays==='function')await gradeEssays(pending);
    else await Promise.allSettled(pending.map(i=>gradeEssay(i,{silent:true})));
    gradingNotice.remove();
  }
  const score=scoreExam(e,answers);
  const currentUser = (typeof window !== 'undefined' && window.auth && typeof window.auth.getCurrentUser === 'function') ? window.auth.getCurrentUser() : null;

  const totalMs = (e.minutes || e.duration || 45) * 60000;
  const leftMs = (typeof isExamPaused !== 'undefined' && isExamPaused) ? (remainingMs || 0) : Math.max(0, (typeof deadline !== 'undefined' ? deadline : Date.now()) - Date.now());
  const spentMs = reason === 'time' ? totalMs : Math.max(1000, Math.min(totalMs, totalMs - leftMs));
  const timeSpentSeconds = Math.round(spentMs / 1000);
  const m = Math.floor(timeSpentSeconds / 60);
  const s = timeSpentSeconds % 60;
  const timeSpentText = reason === 'time' ? `${e.minutes || e.duration || 45} phút (Hết giờ)` : (m > 0 ? (s > 0 ? `${m} phút ${s} giây` : `${m} phút`) : `${s} giây`);

  const result={
    id:e.id,
    title:e.title,
    subject:e.subject,
    userId: currentUser ? currentUser.id : 'u-an',
    username: currentUser ? currentUser.username : 'nguyenvanan',
    studentName: currentUser ? currentUser.name : 'Nguyễn Văn An',
    total:score.total,
    correct:score.correct,
    points:score.points,
    maxPoints:score.max,
    aiGradingVersion:1,
    questionSetVersion:e.id==='toan-10-de-13'?3:2,
    answers:{...answers},
    date:new Date().toISOString(),
    reason,
    timeSpent: timeSpentSeconds,
    timeSpentText: timeSpentText
  };
  const all=saved();all.unshift(result);
  localStorage.setItem('hoctap-results',JSON.stringify(all.slice(0,100)));
  if (typeof window !== 'undefined' && window.auth && typeof window.auth.saveExamResult === 'function') { window.auth.saveExamResult(result); }
  localStorage.removeItem('hoctap-draft');activeExam=null;isSubmittingExam=false;renderResult(result);
};
const previousRenderExam=renderExam;
renderExam=function(){
  previousRenderExam();
  const line=document.querySelector('.exam-heading p');
  if(line && activeExam){
    const mcUnit = typeof activeExam.mcUnit === 'number' ? activeExam.mcUnit : 0.25;
    const sUnit = typeof activeExam.shortUnit === 'number' ? activeExam.shortUnit : (activeExam.subject === 'chemistry' ? 0.25 : 0.5);
    const essayPoints = typeof activeExam.essayPoints === 'number' ? activeExam.essayPoints : 3.0;
    const graded=[activeExam.questions.length?`Phần I ${pointText(mcUnit)} điểm/câu`:null,activeExam.tf.length?'Phần II tối đa 1 điểm/câu':null,activeExam.short.length?`Phần III ${pointText(sUnit)} điểm/câu`:null].filter(Boolean);
    line.insertAdjacentHTML('afterend',`<p class="grading-note">${graded.length?`Thang điểm tự chấm: ${graded.join(' · ')}.`:'Bài tự luyện.'}${activeExam.essay?.length && essayPoints>0?` Phần IV tối đa ${pointText(essayPoints)} điểm; chỉ các câu chọn AI mới được Gemini chấm tự động.`:''}</p>`);
  }
};
const previousRenderResult=renderResult;
renderResult=function(r){
  previousRenderResult(r);
  const score=scoreForResult(r);if(!score)return;
  const examObj=exams.find(x=>x.id===r.id);
  const mcUnit = examObj && typeof examObj.mcUnit === 'number' ? examObj.mcUnit : 0.25;
  const sUnit = examObj && typeof examObj.shortUnit === 'number' ? examObj.shortUnit : (examObj && examObj.subject === 'chemistry' ? 0.25 : 0.5);
  const panel=document.querySelector('.result-panel');
  panel.querySelector('.score').textContent=`${pointText(score.points)} / ${pointText(score.max)} điểm`;
  panel.querySelector('.result-icon').textContent=score.points/score.max>=.7?'🏅':'📘';
  const detail=panel.querySelectorAll(':scope > p')[1];
  if (score.max === 0) {
    panel.querySelector('.score').textContent='Bài tự luyện · tự đối chiếu lời giải';
    panel.querySelector('.result-icon').textContent='📖';
  }
  detail.textContent=score.max === 0 ? 'Bài này gồm câu tự luận, hệ thống không tự chấm điểm.' : `${score.correct}/${score.total} ý đúng · Điểm theo bố cục bài luyện, không quy đổi về thang 10.`;
  const essayBadge=(examObj && Array.isArray(examObj.essay) && examObj.essay.length > 0)?`<span>Phần IV <b>${pointText(score.essay||0)} / ${pointText(score.essayMax||0)}</b></span>`:'';
  detail.insertAdjacentHTML('afterend',`<div class="score-breakdown"><span>Phần I <b>${pointText(score.mc)} / ${pointText(examObj.questions.length*mcUnit)}</b></span>${r.total===examObj.questions.length?'':`<span>Phần II <b>${pointText(score.tf)} / ${pointText(examObj.tf.length)}</b></span><span>Phần III <b>${pointText(score.short)} / ${pointText(examObj.short.length*sUnit)}</b></span>`}${essayBadge}</div>`);
};
const previousHistory=history;
history=function(){previousHistory();document.querySelectorAll('.history-item').forEach(item=>{const index=Number(item.querySelector('[data-review]')?.dataset.review),r=saved()[index],score=r&&scoreForResult(r);if(!score)return;item.querySelector('.history-score').textContent=score.max===0?'Tự luyện':`${pointText(score.points)} / ${pointText(score.max)} điểm`;if(score.max>0)item.querySelector('small').textContent+=` · ${score.correct}/${score.total} ý đúng`})};
const previousReviewPast=reviewPast;
reviewPast=function(index){
  previousReviewPast(index);
  const r=saved()[index],score=r&&scoreForResult(r);
  const panel=document.querySelector('.result-panel');
  if(!panel||!score)return;
  const el=panel.querySelector('.score');
  if(el)el.textContent=score.max===0?'Bài tự luyện · tự đối chiếu lời giải':`${pointText(score.points)} / ${pointText(score.max)} điểm`;
  const icon=panel.querySelector('.result-icon');
  if(icon)icon.textContent=score.points/score.max>=.7?'🏅':'📘';
  const e=typeof historicalExamForResult==='function'?historicalExamForResult(r):exams.find(x=>x.id===r.id);
  if(e && !panel.querySelector('.score-breakdown')){
    const mcUnit = typeof e.mcUnit === 'number' ? e.mcUnit : 0.25;
    const sUnit = typeof e.shortUnit === 'number' ? e.shortUnit : (e.subject === 'chemistry' ? 0.25 : 0.5);
    const detail=panel.querySelectorAll(':scope > p')[1];
    if(detail){
      const essayBadge = (Array.isArray(e.essay) && e.essay.length > 0) ? `<span>Phần IV <b>${pointText(score.essay||0)} / ${pointText(score.essayMax||0)}</b></span>` : '';
      detail.insertAdjacentHTML('afterend',`<div class="score-breakdown"><span>Phần I <b>${pointText(score.mc)} / ${pointText(e.questions.length*mcUnit)}</b></span>${r.total===e.questions.length?'':`<span>Phần II <b>${pointText(score.tf)} / ${pointText(e.tf.length)}</b></span><span>Phần III <b>${pointText(score.short)} / ${pointText(e.short.length*sUnit)}</b></span>`}${essayBadge}</div>`);
    }
  }
  if(typeof tryRenderKatex==='function')tryRenderKatex(panel);
};

function regradeAllSavedResults(){
  try{
    const all = typeof saved === 'function' ? saved() : [];
    let changed = false;
    all.forEach(r => {
      if(!r || !r.id || !r.answers) return;
      const sc = scoreForResult(r);
      if(!sc) return;
      if(Math.abs((r.points !== undefined ? r.points : r.score) - sc.points) > 0.001 || r.correct !== sc.correct){
        r.points = sc.points;
        r.score = sc.points;
        r.correct = sc.correct;
        r.total = sc.total;
        r.maxPoints = sc.max;
        changed = true;
      }
    });
    if(changed && typeof localStorage !== 'undefined'){
      localStorage.setItem('hoctap-results', JSON.stringify(all));
    }
  }catch(_){}
}
if(typeof document !== 'undefined'){
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', regradeAllSavedResults);
  } else {
    regradeAllSavedResults();
  }
}
