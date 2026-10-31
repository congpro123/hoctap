// Trang dùng JavaScript để đổi mục nên gửi page_view cho các lượt chuyển nội bộ.
const originalGo=go;
go=function(view){
  const previous=currentView;
  originalGo(view);
  if(currentView===view&&previous!==view&&typeof gtag==='function'){
    const title=view==='home'?'Tổng quan':view==='subjects'?'Kho đề thi':view==='history'?'Lịch sử làm bài':view.startsWith('subject-')?subjects[Number(view.slice(8))]?.[0]||'Môn học':'Trang học tập';
    gtag('event','page_view',{page_title:`${title} · Lớp học tổ hợp Tin`,page_location:`${location.origin}${location.pathname}#${view}`});
  }
};
