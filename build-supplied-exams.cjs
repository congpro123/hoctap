const fs=require('fs'), path=require('path'), cp=require('child_process');
const root=__dirname, out=path.join(root,'dist','supplied');fs.mkdirSync(out,{recursive:true});
const dirs=[['toán','math','Toán'],['lý','physics','Vật lý'],['hoá','chemistry','Hóa học']];
const all=[];
for(const [folder,subject,label] of dirs){
 const base=path.join('C:\\Users\\super\\Downloads\\Documents',folder);
 const files=fs.readdirSync(base);const examFile=path.join(base,files.find(x=>x.startsWith('Bo_'))), answerFile=path.join(base,files.find(x=>x.startsWith('Dap_')));
 const pdftotext='C:\\Program Files\\Git\\mingw64\\bin\\pdftotext.exe';
 const readPages=file=>cp.execFileSync(pdftotext,['-enc','UTF-8','-layout',file,'-'],{encoding:'utf8',maxBuffer:20e6}).split('\f').filter(x=>x.trim());
 const examPages=readPages(examFile),answerPages=readPages(answerFile);
 const answerText=answerPages.join(' ').replace(/\s+Trang\s+\d+\s*/g,' ').replace(/\s+/g,' ');
 const sections=answerText.split(/ĐÁP ÁN & LỜI GIẢI CHI TIẾT ĐỀ SỐ\s*/).slice(1);
 if(sections.length!==10)throw Error(folder+' has '+sections.length+' answer sections');
 const starts=[1];for(let n=2;n<=10;n++){
  const marker=new RegExp('ĐỀ SỐ\\s*'+String(n).padStart(2,'0')+'\\s*:');
  const index=examPages.findIndex((p,i)=>i>0&&marker.test(p));if(index<0)throw Error(folder+' missing exam '+n);starts.push(index);
 }
 const ansStarts=[];for(let n=1;n<=10;n++){
  const marker=new RegExp('ĐÁP ÁN & LỜI GIẢI CHI TIẾT ĐỀ SỐ\\s*'+String(n).padStart(2,'0')+'\\s*:');
  const index=answerPages.findIndex(p=>marker.test(p));if(index<0)throw Error(folder+' missing answer '+n);ansStarts.push(index);
 }
 for(let i=0;i<10;i++){
  const sec=sections[i],part1=sec.split(/2\. Đáp án/)[0],part2=(sec.split(/2\. Đáp án/)[1]||'').split(/3\. Đáp số/)[0],part3=(sec.split(/3\. Đáp số/)[1]||'').split(/4\. Lời giải chi tiết & Thang điểm Phần IV/)[0];
  const mc=[...part1.matchAll(/Câu\s+(\d+)\s*\(Chọn\s+([ABCD])\)\s*:\s*([\s\S]*?)(?=Câu\s+\d+\s*\(Chọn|2\. Đáp án|$)/g)].map(x=>({number:+x[1],key:x[2],explain:x[3].replace(/\s+/g,' ').trim()}));
  const tf=[...part2.matchAll(/Ý\s+([abcd])\)\s*[—–-]\s*(Đúng|Sai)\s*:\s*([\s\S]*?)(?=Ý\s+[abcd]\)|Câu\s+\d+\s*:|$)/g)].map(x=>({letter:x[1],key:x[2]==='Đúng',explain:x[3].replace(/\s+/g,' ').trim()}));
  const short=[...part3.matchAll(/Câu\s+([1-4])\s*[—–-]\s+Đáp số:\s*(.*?)\.\s*Lời giải:\s*(.*?)(?=Câu\s+[1-4]\s*[—–-]\s+Đáp số:|$)/g)].map(x=>({number:+x[1],key:x[2].trim(),explain:x[3].trim()}));
  if(mc.length!==12||tf.length!==8||short.length!==4)throw Error(`${folder} ${i+1}: ${mc.length}/${tf.length}/${short.length}`);
  const heading=sec.split('\n').slice(0,3).join(' ').replace(/\s+/g,' ').split('Nguồn đề gốc:')[0].trim();
  const prefix=subject+'-'+String(i+1).padStart(2,'0');
  const examOut=path.join(out,prefix+'-de.pdf'),answerOut=path.join(out,prefix+'-giai.pdf');
  const py='C:\\Users\\super\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe';
  const code='from pypdf import PdfReader,PdfWriter; import sys; r=PdfReader(sys.argv[1]); w=PdfWriter(); [w.add_page(r.pages[i]) for i in range(int(sys.argv[3]),min(int(sys.argv[4]),len(r.pages)))]; w.write(sys.argv[2])';
  cp.execFileSync(py,['-c',code,examFile,examOut,String(starts[i]),String(i<9?starts[i+1]+1:examPages.length)],{stdio:'pipe'});
  cp.execFileSync(py,['-c',code,answerFile,answerOut,String(ansStarts[i]),String(i<9?ansStarts[i+1]+1:answerPages.length)],{stdio:'pipe'});
  const mins=(examPages[starts[i]].match(/Thời gian:\s*(\d+)\s*phút/)||[])[1]||'45';
  all.push({id:prefix,subject,title:`${label} 10 · Giữa kì I — Đề ${String(i+1).padStart(2,'0')}`,description:heading.replace(/^\d\d\s*:\s*/,'').slice(0,170),minutes:+mins,examPdf:'supplied/'+prefix+'-de.pdf',answerPdf:'supplied/'+prefix+'-giai.pdf',mc,tf,short,source:{school:'Theo tài liệu người dùng cung cấp',province:'',year:'',url:'',note:'Đề và lời giải từ PDF do người dùng cung cấp; thông tin trường/năm trong tài liệu chưa được xác minh độc lập.'}});
 }
}
fs.writeFileSync(path.join(root,'dist','supplied-exams.js'),'const suppliedExams='+JSON.stringify(all)+';\n');
console.log('Built '+all.length+' supplied exams.');
