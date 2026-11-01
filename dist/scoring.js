// Thang điểm bài luyện: I 0,25/câu; II 0/0,1/0,25/0,5/1 theo số ý đúng; III 0,5/câu (Hóa 10: 0,25/câu chuẩn ma trận).
const pointText=n=>Number(n).toLocaleString('vi-VN',{maximumFractionDigits:2});
function scoreExam(e,a={},legacy=false){
  const mcCorrect=e.questions.reduce((n,q,i)=>n+(a['m'+i]===q[2]||a[i]===q[2]?1:0),0);
  const mc=mcCorrect*.25;
  let tfCorrect=0,tf=0,shortCorrectCount=0,short=0;
  const shortUnit = (e && e.subject === 'chemistry') ? 0.25 : 0.5;
  if(!legacy){
    const isTrue=v=>(v===true||v==='true'||v==='Đúng'||v==='đúng');
    const isMatch=(u,exp)=>u!==undefined&&u!==null&&Boolean(u)===isTrue(exp);
    e.tf.forEach((q,i)=>{const count=q.items.reduce((n,item,j)=>n+(isMatch(a['t'+i+'-'+j],item[1])?1:0),0);tfCorrect+=count;tf+=[0,.1,.25,.5,1][count]});
    e.short.forEach((q,i)=>{if(shortCorrect(a['s'+i],q.answer)){shortCorrectCount++;short+=shortUnit}});
  }
  return {mc,tf,short,points:Math.round((mc+tf+short)*100)/100,max:e.questions.length*.25+(legacy?0:e.tf.length+e.short.length*shortUnit),correct:mcCorrect+tfCorrect+shortCorrectCount,total:e.questions.length+(legacy?0:e.tf.reduce((n,q)=>n+q.items.length,0)+e.short.length)};
}
function scoreForResult(r){const e=typeof historicalExamForResult==='function'?historicalExamForResult(r):exams.find(x=>x.id===r.id);return e?scoreExam(e,r.answers||{},r.total===e.questions.length):null}
submitExam=function(reason){
  if(!activeExam)return;
  const e=activeExam;clearInterval(ticker);
  const score=scoreExam(e,answers);
  const result={id:e.id,title:e.title,total:score.total,correct:score.correct,points:score.points,maxPoints:score.max,questionSetVersion:2,answers:{...answers},date:new Date().toISOString(),reason};
  const all=saved();all.unshift(result);
  localStorage.setItem('hoctap-results',JSON.stringify(all.slice(0,50)));
  localStorage.removeItem('hoctap-draft');activeExam=null;renderResult(result);
};
const previousRenderExam=renderExam;
renderExam=function(){
  previousRenderExam();
  const line=document.querySelector('.exam-heading p');
  if(line && activeExam){
    const sUnit = activeExam.subject === 'chemistry' ? '0,25' : '0,5';
    line.insertAdjacentHTML('afterend',`<p class="grading-note">Thang điểm trắc nghiệm: Phần I 0,25 điểm/câu · Phần II tối đa 1 điểm/câu (đúng 1/2/3/4 ý: 0,1/0,25/0,5/1 điểm) · Phần III ${sUnit} điểm/câu. Tổng tối đa ${pointText(scoreExam(activeExam).max)} điểm (phần trắc nghiệm tự động) + 3,0 điểm phần Tự luận.</p>`);
  }
};
const previousRenderResult=renderResult;
renderResult=function(r){
  previousRenderResult(r);
  const score=scoreForResult(r);if(!score)return;
  const examObj=exams.find(x=>x.id===r.id);
  const sUnit=examObj&&examObj.subject==='chemistry'?0.25:0.5;
  const panel=document.querySelector('.result-panel');
  panel.querySelector('.score').textContent=`${pointText(score.points)} / ${pointText(score.max)} điểm`;
  panel.querySelector('.result-icon').textContent=score.points/score.max>=.7?'🏅':'📘';
  const detail=panel.querySelectorAll(':scope > p')[1];
  detail.textContent=`${score.correct}/${score.total} ý đúng · Điểm theo bố cục bài luyện, không quy đổi về thang 10.`;
  detail.insertAdjacentHTML('afterend',`<div class="score-breakdown"><span>Phần I <b>${pointText(score.mc)} / ${pointText(examObj.questions.length*.25)}</b></span>${r.total===examObj.questions.length?'':`<span>Phần II <b>${pointText(score.tf)} / ${pointText(examObj.tf.length)}</b></span><span>Phần III <b>${pointText(score.short)} / ${pointText(examObj.short.length*sUnit)}</b></span>`}</div>`);
};
const previousHistory=history;
history=function(){previousHistory();document.querySelectorAll('.history-item').forEach((item,i)=>{const r=saved()[i],score=scoreForResult(r);if(!score)return;item.querySelector('.history-score').textContent=`${pointText(score.points)} / ${pointText(score.max)} điểm`;item.querySelector('small').textContent+=` · ${score.correct}/${score.total} ý đúng`})};
const previousReviewPast=reviewPast;
reviewPast=function(index){previousReviewPast(index);const r=saved()[index],score=r&&scoreForResult(r);const el=document.querySelector('.result-panel .score');if(el&&score)el.textContent=`${pointText(score.points)} / ${pointText(score.max)} điểm`};
