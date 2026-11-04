// Giữ câu xuất hiện đầu tiên; thay các câu trùng giữa những đề cùng môn bằng câu mới có đáp án tính được.
const legacyExamMap=new Map(exams.map(e=>[e.id,JSON.parse(JSON.stringify(e))]));
if(typeof legacyDongHa1003!=='undefined')legacyExamMap.set('toan-10-de-13',legacyDongHa1003);
function historicalExamForResult(r){
  if(r.id==='toan-10-de-13')return (r.questionSetVersion===3?exams.find(e=>e.id===r.id):r.questionSetVersion===2&&typeof legacyDongHa1003v2!=='undefined'?legacyDongHa1003v2:legacyExamMap.get(r.id))||null;
  return (r.questionSetVersion===2?exams.find(e=>e.id===r.id):legacyExamMap.get(r.id))||null;
}
function numericChoice(stem,answer,unit,reason,serial){
  const values=[answer,answer+1,answer+2,answer+3];
  const place=serial%4,correct=values[0];
  values[0]=values[place];values[place]=correct;
  return [stem,values.map(v=>`${v}${unit}`),place,reason];
}
function physicsQuestion(k){
  const n=Math.floor(k/8)+1,t=k%8;
  if(t===0){const sec=4+n,meters=sec*(3+n);return numericChoice(`Một xe đi đều ${meters} m trong ${sec} s. Tốc độ của xe bằng bao nhiêu?`,3+n,' m/s',`v = s/t = ${meters}/${sec} = ${3+n} m/s.`,k)}
  if(t===1){const v=2+n,time=5+n;return numericChoice(`Một người đi đều với tốc độ ${v} m/s trong ${time} s. Quãng đường đi được là bao nhiêu?`,v*time,' m',`s = vt = ${v} × ${time} = ${v*time} m.`,k)}
  if(t===2){const v=3+n,sec=2+n;return numericChoice(`Vật xuất phát từ gốc, chuyển động thẳng đều theo chiều dương với ${v} m/s. Sau ${sec} s, độ dịch chuyển là bao nhiêu?`,v*sec,' m',`d = vt = ${v*sec} m.`,k)}
  if(t===3){const side=3+n;return numericChoice(`Vật đi ${side} m về phía Đông rồi ${side} m về phía Tây. Độ lớn độ dịch chuyển cuối cùng là bao nhiêu?`,0,' m','Vật trở về vị trí đầu nên độ dịch chuyển bằng 0.',k)}
  if(t===4){const v=4+n;return numericChoice(`Đổi tốc độ ${v*3.6} km/h sang m/s.`,v,' m/s',`Chia ${v*3.6} cho 3,6 được ${v} m/s.`,k)}
  if(t===5){const a=1+n,sec=3+n;return numericChoice(`Vật bắt đầu từ trạng thái nghỉ, gia tốc không đổi ${a} m/s². Sau ${sec} s, tốc độ là bao nhiêu?`,a*sec,' m/s',`v = at = ${a*sec} m/s.`,k)}
  if(t===6){const v0=2+n,v=6+n*2,sec=4;return numericChoice(`Tốc độ tăng từ ${v0} lên ${v} m/s sau ${sec} s. Gia tốc trung bình là bao nhiêu?`,(v-v0)/sec,' m/s²',`a = Δv/Δt = (${v}−${v0})/${sec}.`,k)}
  const x=2+n;return numericChoice(`Ba lần đo độ dài là ${x-1} cm, ${x} cm và ${x+1} cm. Giá trị trung bình là bao nhiêu?`,x,' cm',`Trung bình cộng bằng ${x} cm.`,k);
}
function mathQuestion(k){
  const n=Math.floor(k/8)+1,t=k%8;
  if(t===0)return numericChoice(`Tập A có ${n+2} phần tử. Tập A có bao nhiêu tập con?`,2**(n+2),'',`Số tập con là 2^${n+2}.`,k);
  if(t===1){const a=8+n,b=6+n,c=2+n;return numericChoice(`Lớp có ${a} bạn thích Toán, ${b} bạn thích Lý, ${c} bạn thích cả hai. Có bao nhiêu bạn thích ít nhất một môn?`,a+b-c,'',`Áp dụng |A∪B| = ${a}+${b}−${c}.`,k)}
  if(t===2){const a=2+n,b=4+n;return numericChoice(`Tam giác vuông có hai cạnh góc vuông ${a} và ${b}. Diện tích bằng bao nhiêu?`,a*b/2,'',`S = ${a} × ${b} / 2.`,k)}
  if(t===3){const a=3+n;return numericChoice(`Tập nghiệm nguyên của ${a} ≤ x ≤ ${a+5} có bao nhiêu phần tử?`,6,'','Có sáu số nguyên liên tiếp, kể cả hai đầu mút.',k)}
  if(t===4){const a=2+n;return numericChoice(`Cho A={1,2,...,${a}}, B={${a},${a+1}}. Giao A∩B có bao nhiêu phần tử?`,1,'','Chỉ có phần tử chung là số cuối của A.',k)}
  if(t===5){const a=3+n,b=4+n;return numericChoice(`Điểm (${a};${b}) thỏa x+y≤${a+b+1}. Giá trị x+y tại điểm đó bằng bao nhiêu?`,a+b,'',`Thay tọa độ được ${a}+${b}.`,k)}
  if(t===6){const a=2+n;return numericChoice(`Tam giác đều cạnh ${a} có chu vi bằng bao nhiêu?`,3*a,'',`Chu vi bằng 3 × ${a}.`,k)}
  const a=1+n;return numericChoice(`Với A={${a},${a+1},${a+2}}, B={${a+2},${a+3}}, hợp A∪B có bao nhiêu phần tử?`,4,'','Hợp gồm bốn số nguyên liên tiếp.',k);
}
function chemistryQuestion(k){
  const n=Math.floor(k/8)+1,t=k%8,z=5+n;
  if(t===0)return numericChoice(`Nguyên tử trung hòa có số hiệu nguyên tử Z=${z}. Nó có bao nhiêu electron?`,z,'','Nguyên tử trung hòa có số electron bằng số proton, bằng Z.',k);
  if(t===1)return numericChoice(`Hạt nhân có ${z} proton và ${n+6} neutron. Số khối A bằng bao nhiêu?`,z+n+6,'',`A=p+n=${z}+${n+6}.`,k);
  if(t===2)return numericChoice(`Nguyên tử trung hòa có ${z} proton. Tổng số hạt mang điện là bao nhiêu?`,2*z,'',`Có ${z} proton và ${z} electron.`,k);
  if(t===3)return numericChoice(`Ion X⁺ tạo từ nguyên tử trung hòa có ${z} electron. Ion X⁺ có bao nhiêu electron?`,z-1,'','Ion dương một điện tích đã mất một electron.',k);
  if(t===4)return numericChoice(`Ion Y⁻ tạo từ nguyên tử trung hòa có ${z} electron. Ion Y⁻ có bao nhiêu electron?`,z+1,'','Ion âm một điện tích đã nhận thêm một electron.',k);
  if(t===5)return numericChoice(`Hai đồng vị cùng nguyên tố có số khối ${z+8} và ${z+9}, cùng có ${z} proton. Đồng vị thứ nhất có bao nhiêu neutron?`,8,'',`n=A−Z=(${z+8})−${z}=8.`,k);
  if(t===6)return numericChoice(`Nguyên tử trung hòa có ${z} electron và ${n+5} neutron. Tổng số hạt cơ bản là bao nhiêu?`,2*z+n+5,'',`p+e+n=${z}+${z}+${n+5}.`,k);
  return numericChoice(`Hạt nhân có điện tích +${z}e. Số proton trong hạt nhân là bao nhiêu?`,z,'','Mỗi proton mang điện tích +e.',k);
}
function newPhysicsTF(k){const n=k+2,v=n+3,t=4;return {stem:`Xét vật chuyển động đều với tốc độ ${v} m/s trong ${t} s (tình huống ${k+1}).`,items:[[`Quãng đường đi được là ${v*t} m.`,true],[`Tốc độ bằng ${v} m/s.`,true],[`Thời gian chuyển động là ${v} s.`,false],[`Nếu đi ngược chiều ban đầu, độ lớn độ dịch chuyển vẫn là ${v*t} m.`,true]]}}
function newMathTF(k){const n=k+2;return {stem:`Cho A={${n},${n+1},${n+2}}, B={${n+2},${n+3}}.`,items:[[`A∩B={${n+2}}.`,true],[`A∪B có 4 phần tử.`,true],[`${n+3} thuộc A.`,false],[`A có 3 phần tử.`,true]]}}
function newChemistryTF(k){const z=k+6;return {stem:`Xét nguyên tử trung hòa X có Z=${z} và ${z+1} neutron.`,items:[[`X có ${z} proton.`,true],[`X có ${z} electron.`,true],[`Số khối của X là ${2*z+1}.`,true],[`X có ${z+1} proton.`,false]]}}
function newPhysicsShort(k){const n=k+2,v=n+3,t=n+4;return {text:`Xe đi đều ${v*t} m trong ${t} s. Tốc độ bằng bao nhiêu m/s?`,answer:v,unit:'m/s',explain:`v=s/t=${v*t}/${t}=${v} m/s.`}}
function newMathShort(k){const n=k+2;return {text:`Tập A={${n},${n+1},${n+2}} có bao nhiêu tập con?`,answer:8,unit:'',explain:'Tập có 3 phần tử nên có 2³=8 tập con.'}}
function newChemistryShort(k){const z=k+6;return {text:`Nguyên tử trung hòa có Z=${z} và ${z+2} neutron. Tổng số hạt proton, neutron, electron là bao nhiêu?`,answer:3*z+2,unit:'',explain:`p+e+n=${z}+${z}+${z+2}=${3*z+2}.`}}
const fallback={physics:{mc:physicsQuestion,tf:newPhysicsTF,short:newPhysicsShort},math:{mc:mathQuestion,tf:newMathTF,short:newMathShort},chemistry:{mc:chemistryQuestion,tf:newChemistryTF,short:newChemistryShort}};
for(const subject of Object.keys(fallback)){
  const seen={mc:new Set(),tf:new Set(),short:new Set()},serial={mc:0,tf:0,short:0};
  for(const exam of exams.filter(e=>e.subject===subject)){
    if(exam.id==='toan-10-de-13')continue; // Preserve the supplied Dong Ha paper verbatim.
    for(const [part,key,field] of [['mc','questions',0],['tf','tf','stem'],['short','short','text']]){
      exam[key]=exam[key].map(question=>{
        let current=question,stem=current[field];
        while(seen[part].has(stem)){
          current=fallback[subject][part](serial[part]++);stem=current[field];
        }
        seen[part].add(stem);return current;
      });
    }
  }
}
// Giữ trang được yêu cầu khi nạp lại dữ liệu thay vì luôn quay về Tổng quan.
if (typeof location !== 'undefined' && location.hash && typeof window !== 'undefined' && window.dispatchEvent) {
  window.dispatchEvent(new Event('hashchange'));
} else {
  home();
}
