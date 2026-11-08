// Tăng độ phân hóa cho 10 đề Phổ thông, tham chiếu dạng hỏi trong các đề giữa kỳ
// Toán 10 chính thức của Quảng Trị/Hướng Hóa và Lê Quý Đôn (2025–2027).
(function () {
  'use strict';
  if (typeof newMathExams === 'undefined') return;

  const cfgs = [
    [2,3,1], [3,2,2], [2,4,1], [4,3,2], [3,5,1],
    [5,2,2], [4,5,1], [5,3,2], [2,5,1], [3,4,2]
  ];
  const abc = 'ABCD';
  const fmt = x => Number.isInteger(x) ? String(x) : String(Math.round(x * 100) / 100).replace('.', ',');
  const gcd = (a,b) => b ? gcd(b,a%b) : Math.abs(a);
  function frac(a,b) { if(b<0){a=-a;b=-b;} const g=gcd(a,b); a/=g; b/=g; return b===1 ? String(a) : `${a}/${b}`; }
  function mc(stem, correct, wrong, why, shift) {
    const base=[String(correct),...wrong.map(String)], s=shift%4;
    const opts=base.slice(s).concat(base.slice(0,s));
    return [stem,opts,opts.indexOf(String(correct)),why];
  }
  function maxIntegerProfit(p,q,m) {
    let best={x:0,y:0,v:-Infinity};
    for(let x=0;x<=20;x++) for(let y=0;y<=20;y++) {
      if(2*x+y<=12+m && x+2*y<=12 && x+y<=8+m) {
        const v=(p+3)*x+(q+4)*y;
        if(v>best.v) best={x,y,v};
      }
    }
    return best;
  }

  cfgs.forEach(([p,q,m],i) => {
    const exam=newMathExams.find(e=>e.id===`toan-10-pho-thong-${String(i+1).padStart(2,'0')}`);
    if(!exam) return;
    const sh=i+1, r=p+q, best=maxIntegerProfit(p,q,m);
    const total=42+r, aOnly=12+p, bOnly=11+q, both=8+m;
    const neither=total-aOnly-bOnly-both;
    const u=6+p, v=7+q, side2=u*u+v*v-u*v;
    const tanNum=p+1, tanDen=q+1;
    const trig=frac(tanNum+tanDen,tanNum-tanDen);

    // Câu nhận biết vẫn có bẫy chuẩn về lượng từ, điều kiện cần/đủ và đầu mút.
    exam.questions[1]=mc(
      `Cho mệnh đề P: “Nếu n chia hết cho ${2*p} thì n chia hết cho ${p}” (n là số nguyên). Phát biểu nào sau đây đúng?`,
      `“n chia hết cho ${2*p}” là điều kiện đủ để “n chia hết cho ${p}”`,
      [`“n chia hết cho ${2*p}” là điều kiện cần để “n chia hết cho ${p}”`,`Mệnh đề đảo của P luôn đúng`,`P tương đương với mệnh đề đảo của nó`],
      'Trong P⇒Q, P là điều kiện đủ của Q; chiều đảo không đúng, chẳng hạn n=p.',sh);
    exam.questions[3]=mc(
      `Cho A=[-${p}; ${q+5}) và B=(m-1; ${q}+m]. Với m=${m}, tập A\\B là`,
      `[-${p}; ${m-1}] ∪ (${q+m}; ${q+5})`,
      [`[-${p}; ${m-1}) ∪ [${q+m}; ${q+5})`,`[-${p}; ${m-1}] ∪ [${q+m}; ${q+5})`,`(${m-1}; ${q+m}]`],
      'Phải xét riêng việc B không lấy đầu trái nhưng lấy đầu phải; đây là bẫy đầu mút.',sh+1);
    exam.questions[5]=mc(
      `Điểm nào sau đây thuộc miền nghiệm của bất phương trình ${p}x-${q}y>${p-q}?`,
      `(1; 0)`, [`(0; 1)`,`(1; 1)`,`(-1; 0)`],
      'Thay từng cặp số; lưu ý bất phương trình nghiêm nên điểm trên bờ không thuộc miền nghiệm.',sh+2);
    exam.questions[6]=mc(
      `Miền nghiệm của hệ x≥0, y≥0, 2x+y≤${12+m}, x+2y≤12 là một tứ giác. Diện tích của miền nghiệm bằng`,
      fmt(((12+m)*(12-m)+12*(12+2*m))/12),
      [fmt(((12+m)**2)/4),fmt(18+m),fmt(((12+m)*6)/2)],
      'Xác định giao điểm hai đường biên rồi chia miền thành hai tam giác; không được coi miền là tam giác vuông.',sh+3);
    exam.questions[7]=mc(
      `Một cơ sở sản xuất x sản phẩm A, y sản phẩm B (x,y là số nguyên không âm), thỏa 2x+y≤${12+m}, x+2y≤12, x+y≤${8+m}. Lợi nhuận F=${p+3}x+${q+4}y. Giá trị lớn nhất của F là`,
      best.v,[best.v-1,best.v+(p+q),best.v-(p+q)],
      `Phải xét các điểm nguyên khả thi, không chỉ giao điểm hình học. Tối ưu tại (${best.x};${best.y}), F=${best.v}.`,sh);
    exam.questions[8]=mc(
      `Một xe chở tối đa ${12+m} tấn và không quá 12 kiện. Kiện A nặng 2 tấn, kiện B nặng 1 tấn; mỗi kiện A chiếm 1 vị trí, kiện B chiếm 2 vị trí. Nếu chở x kiện A, y kiện B thì hệ điều kiện đúng là`,
      `{2x+y≤${12+m}; x+2y≤12; x≥0; y≥0}`,
      [`{2x+y≥${12+m}; x+2y≤12; x,y≥0}`,`{x+2y≤${12+m}; 2x+y≤12; x,y>0}`,`{2x+y≤${12+m}; x+2y≥12; x,y≥0}`],
      'Từ “tối đa/không quá” suy ra dấu ≤; số lượng có thể bằng 0.',sh+1);
    exam.questions[9]=mc(
      `Cho 90°<α<180° và tanα=-${tanNum}/${tanDen}. Giá trị E=(sinα-cosα)/(sinα+cosα) bằng`,
      trig,[frac(tanNum-tanDen,tanNum+tanDen),frac(-(tanNum+tanDen),tanNum-tanDen),frac(tanNum,tanDen)],
      'Chia cả tử và mẫu cho cosα: E=(tanα-1)/(tanα+1); phải giữ dấu âm của tanα.',sh+2);
    exam.questions[10]=mc(
      `Tam giác ABC có AB=${u}, AC=${v}, góc A=60°. Khẳng định nào đúng?`,
      `BC=√${side2}`, [`BC=${u+v}`,`BC=√${u*u+v*v}`,`BC=${Math.abs(u-v)}`],
      'Định lí côsin: BC²=AB²+AC²-2·AB·AC·cos60°.',sh+3);
    exam.questions[11]=mc(
      `Tam giác có các cạnh 13${m===2?'·2':''}, 14${m===2?'·2':''}, 15${m===2?'·2':''}. Tỉ số R/r giữa bán kính ngoại tiếp và nội tiếp bằng`,
      '65/32',['65/16','13/4','21/8'],
      'Với tam giác 13–14–15: S=84, r=4, R=65/8; khi phóng đại, R/r không đổi.',sh);

    exam.tf=[
      {stem:`Cho A=[-${p}; ${q+2}), B=(${m-2}; ${p+m}] và P(x): x²-${2*p}x+${p*p+1}>0.`,items:[
        ['Mệnh đề “∀x∈R, P(x)” đúng',true,'P(x)=(x-p)²+1 luôn dương.'],
        ['Phủ định của “∀x∈R, P(x)” là “∃x∈R, P(x)≤0”',true,'Đổi ∀ thành ∃ và > thành ≤.'],
        [`Điểm ${m-2} thuộc A∩B`,false,'B không chứa đầu mút trái.'],
        [`A\\B luôn là một khoảng`,false,'Hiệu có thể là hợp của hai khoảng rời nhau.']
      ]},
      {stem:`Cho tam giác ABC có AB=${u}, AC=${v}, A=60°; gọi a=BC, S là diện tích và R là bán kính ngoại tiếp.`,items:[
        [`a²=${side2}`,true,'Theo định lí côsin.'],
        [`S=${u*v}√3/4`,true,'S=AB·AC·sin60°/2.'],
        ['Nếu tăng đồng thời AB và AC gấp đôi, giữ nguyên góc A thì S tăng gấp đôi',false,'Diện tích tăng theo bình phương tỉ số đồng dạng, tức gấp 4.'],
        [`R=a/(2sin60°)`,true,'Theo định lí sin: a/sinA=2R.']
      ]}
    ];

    exam.short=[
      {text:`Lớp có ${total} học sinh. Có ${aOnly} bạn chỉ thích Toán, ${bOnly} bạn chỉ thích Vật lí và ${both} bạn thích cả hai môn. Có bao nhiêu bạn không thích môn nào?`,answer:String(neither),explanation:'Bốn nhóm “chỉ A”, “chỉ B”, “cả hai”, “không môn nào” đôi một rời nhau.'},
      {text:`Tìm giá trị lớn nhất của F=${p+3}x+${q+4}y với x,y nguyên không âm, 2x+y≤${12+m}, x+2y≤12, x+y≤${8+m}.`,answer:String(best.v),explanation:`Liệt kê các điểm nguyên khả thi; tối ưu tại (${best.x};${best.y}).`},
      {text:`Cho tam giác ABC có AB=${u}, AC=${v}, A=60°. Tính BC².`,answer:String(side2),explanation:'Áp dụng định lí côsin.'},
      {text:`Cho 90°<α<180°, tanα=-${tanNum}/${tanDen}. Tính (sinα-cosα)/(sinα+cosα).`,answer:trig,explanation:'Chia cả tử và mẫu cho cosα rồi rút gọn.'}
    ];

    exam.essay=[
      {title:'Câu 1 (0,5 điểm)',question:`Cho P(n): “n²-n chia hết cho 2” với n∈Z. Chứng minh P(n) và phát biểu mệnh đề đảo của “Nếu n chia hết cho ${2*p} thì n chia hết cho ${p}”; xét đúng sai.`,solution:`n²-n=n(n-1), tích hai số nguyên liên tiếp nên chẵn. Mệnh đề đảo: nếu n chia hết cho ${p} thì n chia hết cho ${2*p}; sai, phản ví dụ n=${p}.`},
      {title:'Câu 2 (0,5 điểm)',question:`Cho A=[-${p}; ${q+5}), B=(m-1; m+${m}]. Tìm tất cả m nguyên để B⊂A.`,solution:`Cần m-1≥-${p} (được phép bằng vì B không lấy đầu trái) và m+${m}<${q+5} (B lấy đầu phải còn A không lấy đầu phải). Suy ra ${1-p}≤m<${q+5-m}; chọn các m nguyên.`},
      {title:'Câu 3 (0,5 điểm)',question:`Biểu diễn miền nghiệm của hệ 2x+y≤${12+m}, x+2y≤12, x≥0, y≥0. Tìm tọa độ các đỉnh và tính diện tích.`,solution:'Vẽ hai đường biên, lấy giao với hai trục và giao điểm của chúng; miền nghiệm là tứ giác. Dùng công thức tọa độ hoặc chia thành hai tam giác để tính diện tích.'},
      {title:'Câu 4 (0,5 điểm)',question:`Một cơ sở làm x sản phẩm A, y sản phẩm B (nguyên không âm), chịu các ràng buộc 2x+y≤${12+m}, x+2y≤12, x+y≤${8+m}. Lãi lần lượt ${p+3} và ${q+4} trăm nghìn đồng. Tìm phương án tối ưu.`,solution:`Xét các điểm nguyên trong miền nghiệm. Phương án tối ưu là x=${best.x}, y=${best.y}, lợi nhuận ${best.v} trăm nghìn đồng.`},
      {title:'Câu 5 (0,5 điểm)',question:`Từ hai điểm A, B trên cùng một bờ sông, AB=${20+p} m. Người ta nhìn một cây C ở bờ đối diện dưới các góc CAB=${30+p}° và CBA=${45+q}°. Tính AC và khoảng cách từ C đến AB (làm tròn 0,1 m).`,solution:'Tính C=180°-A-B. Dùng định lí sin AC/sinB=AB/sinC, sau đó h=AC·sinA; làm tròn ở bước cuối.'},
      {title:'Câu 6 (0,5 điểm)',question:`Một tàu đi ${24+m} hải lí theo hướng lệch ${20+p}° so với đường thẳng từ cảng A đến B, biết AB=${70+q} hải lí. Tính quãng đường còn lại đến B và góc đổi hướng của tàu (làm tròn 0,1).`,solution:'Mô hình hóa thành tam giác. Dùng định lí côsin để tính cạnh còn lại, rồi dùng định lí sin hoặc côsin tính góc trong; góc đổi hướng là góc bù phù hợp với hướng chuyển động.'}
    ];

    exam.description='Đề phân hóa theo ma trận giữa kỳ I Toán 10 tỉnh Quảng Trị: bẫy lượng từ, đầu mút, miền nghiệm, tối ưu nguyên và hệ thức lượng nhiều bước; 40% biết, 30% hiểu, 20% vận dụng, 10% vận dụng cao.';
    exam.source={school:'Tham chiếu đề chính thức THPT Hướng Hóa, THPT Quảng Trị và THPT Lê Quý Đôn',province:'Quảng Trị và miền Trung',year:'2025–2027',note:'Dạng hỏi và mức phân hóa tham khảo đề công khai trên TOANMATH; số liệu và lời văn được biến đổi, đáp án được tính độc lập.'};
  });
})();
