// Chỉ giới thiệu một lần cho mỗi tài liệu gốc. Không dùng lại ngân hàng câu hỏi tự biên soạn.
const additionalOriginals=[
  ['TO-GOC-06','math','THPT Nguyễn Văn Cừ','Quảng Nam','2023–2024','https://thi247.com/de-giua-ki-1-toan-10-nam-2023-2024-truong-thpt-nguyen-van-cu-quang-nam/',90],
  ['TO-GOC-07','math','THPT Nguyễn Huệ','Quảng Nam','2022–2023','https://thi247.com/de-giua-hoc-ky-1-toan-10-nam-2022-2023-truong-thpt-nguyen-hue-quang-nam/',90],
  ['TO-GOC-08','math','THPT Võ Nguyên Giáp','Quảng Nam','2023–2024','https://file.giaitoan.edu.vn/file-pdf/de-giua-ky-1-toan-10-nam-2023-2024-truong-thpt-vo-nguyen-giap-quang-nam.pdf',90],
  ['TO-GOC-09','math','THPT Võ Nguyên Giáp','Quảng Nam','2022–2023','https://thi247.com/de-giua-ki-1-toan-10-nam-2022-2023-truong-thpt-vo-nguyen-giap-quang-nam/',90],
  ['TO-GOC-10','math','THPT Nguyễn Trân','Bình Định','2023–2024','https://file.toan8.edu.vn/file-pdf/de-giua-ki-1-toan-10-nam-2023-2024-truong-thpt-nguyen-tran-binh-dinh.pdf',90],
  ['HH-GOC-06','chemistry','THPT Ngô Gia Tự','Đắk Lắk','2024–2025','https://thi247.com/de-giua-ky-1-hoa-hoc-10-nam-2024-2025-truong-thpt-ngo-gia-tu-dak-lak/',45],
  ['HH-GOC-07','chemistry','THPT Lê Hồng Phong','Đắk Lắk','2024–2025','https://thi247.com/de-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-le-hong-phong-dak-lak/',45],
  ['HH-GOC-08','chemistry','THPT Nguyễn Văn Cừ','Quảng Nam','2023–2024','https://thi247.com/de-giua-ki-1-hoa-hoc-10-nam-2023-2024-truong-thpt-nguyen-van-cu-quang-nam/',45],
  ['HH-GOC-09','chemistry','THPT Lê Hồng Phong','Quảng Nam','2023–2024','https://thi247.com/de-giua-ky-1-hoa-hoc-10-nam-2023-2024-truong-thpt-le-hong-phong-quang-nam/',45],
  ['HH-GOC-10','chemistry','THPT Lê Lợi','Kon Tum','2023–2024','https://thi247.com/de-giua-ki-1-hoa-hoc-10-nam-2023-2024-truong-thpt-le-loi-kon-tum/',45]
].map(([id,subject,school,province,year,url,minutes])=>({id,subject,minutes,source:{school,province,year,url}}));
const originalExams=[...new Map([...exams,...additionalOriginals].map(e=>[e.source.url,e])).values()];
const originalBySubject=subject=>originalExams.filter(e=>e.subject===subject);
function originalSourceLine(e){return `<div class="source-line">Đề gốc: <a href="${e.source.url}" target="_blank" rel="noopener noreferrer">${e.source.school} · ${e.source.province} · ${e.source.year} ↗</a><small>Câu hỏi được xem trực tiếp tại trang nguồn, không biên tập lại.</small></div>`}
function card(e){
  const label=e.subject==='math'?'∑ &nbsp; TOÁN 10':e.subject==='chemistry'?'⚗ &nbsp; HÓA HỌC 10':'⚛ &nbsp; VẬT LÝ 10';
  return `<article class="exam-card"><div class="card-top"><span class="subject-pill">${label}</span><span class="card-code">${e.source.year}</span></div><h3>${e.source.school} · ${e.source.province}</h3><p>Đề kiểm tra giữa học kì I lớp 10 nguyên bản tại nguồn.</p><div class="meta"><span>◷ &nbsp; ${e.minutes} phút</span><span>↗ &nbsp; Xem nguyên văn</span></div>${originalSourceLine(e)}<div class="card-bottom"><span>Đề gốc</span><button class="primary" data-start="${e.id}">Mở phòng thi →</button></div></article>`;
}
function tiles(){const mapping={0:'math',1:'physics',5:'chemistry'};return `<div class="subject-grid">${subjects.map((s,i)=>`<button class="subject-tile" data-subjectto="${i}"><span class="tile-icon" style="background:${s[2]};color:${s[3]}">${s[1]}</span><b>${s[0]}</b><small>${mapping[i]?originalBySubject(mapping[i]).length+' đề gốc':'Sắp cập nhật đề thi'}</small></button>`).join('')}</div>`}
function home(){
  const groups=[['math',0,'Toán 10'],['physics',1,'Vật lý 10'],['chemistry',5,'Hóa học 10']];
  app.innerHTML=`<div class="content"><section class="hero"><div class="hero-copy"><span class="eyebrow">✦ &nbsp; KHO ĐỀ NGUYÊN BẢN</span><h1>Đề thật, đúng nguồn,<br>không lặp câu hỏi.</h1><p>Mở tài liệu gốc để làm bài với đồng hồ đếm ngược. Các bài luyện tự biên soạn đã được rút khỏi kho đề.</p></div><div class="hero-art"><div class="orbit"></div><div class="planet one">📚</div><div class="planet two">∑</div><div class="planet three">✦</div></div></section><section class="stats"><div class="stat"><span class="stat-icon purple">▦</span><div><b>07</b><small>Môn học</small></div></div><div class="stat"><span class="stat-icon orange">☷</span><div><b>${String(originalExams.length).padStart(2,'0')}</b><small>Đề gốc riêng biệt</small></div></div><div class="stat"><span class="stat-icon green">◷</span><div><b>${String(saved().length).padStart(2,'0')}</b><small>Bài đã lưu trước đây</small></div></div></section>${groups.map(([subject,index,name])=>`<section class="lower-section"><div class="section-head"><div><h2>${name} · Giữa kì I</h2><p>${originalBySubject(subject).length} đề gốc riêng biệt, có đường dẫn nguồn</p></div><button class="text-link" data-subjectto="${index}">Xem tất cả →</button></div><div class="cards">${originalBySubject(subject).slice(0,4).map(card).join('')}</div></section>`).join('')}<section class="lower-section"><div class="section-head"><div><h2>Khám phá môn học</h2><p>7 môn trong tổ hợp học tập của bạn</p></div></div>${tiles()}</section></div>`;setNav('home');
}
function catalog(index){
  const mapping={0:'math',1:'physics',5:'chemistry'},list=index===undefined?originalExams:originalBySubject(mapping[index]);
  const name=index===undefined?'Kho đề gốc':subjects[index][0];
  app.innerHTML=`<div class="content"><div class="page-heading"><h1>${name}</h1><p>${list.length?`${list.length} đề giữa kì I lớp 10 riêng biệt · Xem nguyên bản tại trang nguồn.`:'Môn học này đang được cập nhật đề thi.'}</p></div>${index===undefined?`<div class="filter-row"><button class="filter active" data-viewto="subjects">Tất cả</button>${[[0,'Toán'],[1,'Vật lý'],[5,'Hóa học']].map(([i,n])=>`<button class="filter" data-subjectto="${i}">${n} (${originalBySubject(mapping[i]).length})</button>`).join('')}</div>`:''}${list.length?`<div class="cards">${list.map(card).join('')}</div>`:`<div class="notice"><b>Đề thi đang được cập nhật</b>Chưa có tài liệu gốc cho môn ${name}.</div>`}${index===undefined?`<section class="lower-section"><div class="section-head"><h2>Danh sách môn học</h2></div>${tiles()}</section>`:''}</div>`;setNav(index===undefined?'subjects':'subject-'+index);
}
let originalDeadline=0,originalTimer=null;
startExam=function(id){
  const e=originalExams.find(x=>x.id===id)||exams.find(x=>x.id===id);
  if(!e)return;
  clearInterval(originalTimer);originalDeadline=Date.now()+e.minutes*60000;
  app.innerHTML=`<div class="content"><div class="page-heading"><h1>${e.source.school} · ${e.source.province}</h1><p>Đề gốc giữa kì I · ${e.source.year}</p></div><div class="original-room"><div class="original-toolbar"><span class="timer" id="original-timer">--:--</span><a class="primary" href="${e.source.url}" target="_blank" rel="noopener noreferrer">Mở đề gốc ở trang nguồn ↗</a><button class="secondary" data-viewto="subjects">Về kho đề</button></div><p>Đồng hồ chạy trên trang này. Đề và đáp án thuộc trang nguồn; nếu tài liệu có phần tự luận, bạn có thể bỏ qua phần đó.</p><p>Trang hiện chưa chấm tự động cho đề gốc vì đáp án từng nguồn cần được đối chiếu với tài liệu chính thức. Lịch sử các bài đã làm trước đây vẫn được giữ.</p>${originalSourceLine(e)}<iframe class="original-frame" src="${e.source.url}" title="Đề gốc ${e.source.school}" loading="lazy"></iframe><p>Nếu nguồn không cho hiển thị trong khung, bấm “Mở đề gốc ở trang nguồn” ở phía trên.</p></div></div>`;
  setNav('exam');
  const update=()=>{const left=Math.max(0,originalDeadline-Date.now()),el=document.getElementById('original-timer');if(!el){clearInterval(originalTimer);return}el.textContent=`${String(Math.floor(left/60000)).padStart(2,'0')}:${String(Math.floor(left%60000/1000)).padStart(2,'0')}`;if(!left){clearInterval(originalTimer);el.textContent='Hết giờ'}};
  originalTimer=setInterval(update,1000);update();
};
home();
