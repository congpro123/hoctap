// Nâng cấp 10 đề Phổ thông theo ma trận giữa kỳ I Toán 10 của tỉnh Quảng Trị.
// Cấu trúc: 12 MCQ, 2 câu Đ/S (8 ý), 4 trả lời ngắn, 6 tự luận.
(function () {
  'use strict';
  if (typeof newMathExams === 'undefined') return;

  const configs = [
    { a:-4,b:3,c:-1,d:7,p:2,q:3,m:1 }, { a:-5,b:4,c:0,d:8,p:3,q:2,m:2 },
    { a:-3,b:5,c:1,d:9,p:2,q:4,m:1 }, { a:-6,b:2,c:-2,d:6,p:4,q:3,m:2 },
    { a:-2,b:6,c:2,d:10,p:3,q:5,m:1 }, { a:-7,b:1,c:-3,d:5,p:5,q:2,m:2 },
    { a:-1,b:7,c:3,d:11,p:4,q:5,m:1 }, { a:-8,b:0,c:-4,d:4,p:5,q:3,m:2 },
    { a:-3,b:6,c:0,d:9,p:2,q:5,m:1 }, { a:-5,b:2,c:-1,d:8,p:3,q:4,m:2 }
  ];

  const fmt = n => Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100).replace('.', ',');
  const interval = (l, r, lc = true, rc = false) => `${lc ? '[' : '('}${l}; ${r}${rc ? ']' : ')'}`;
  function mc(stem, correct, wrong, explanation, shift) {
    const values = [String(correct), ...wrong.map(String)];
    const s = shift % 4;
    const options = values.slice(s).concat(values.slice(0, s));
    return [stem, options, options.indexOf(String(correct)), explanation];
  }

  function buildExam(cfg, index) {
    const n = index + 1;
    const A = interval(cfg.a, cfg.b, true, false);
    const B = interval(cfg.c, cfg.d, false, true);
    const il = Math.max(cfg.a, cfg.c), ir = Math.min(cfg.b, cfg.d);
    const inter = interval(il, ir, cfg.a >= cfg.c, cfg.b > cfg.d);
    const union = interval(Math.min(cfg.a,cfg.c), Math.max(cfg.b,cfg.d), true, true);
    const k = cfg.p + cfg.q;
    const scale = cfg.m;
    const sides = [13*scale, 14*scale, 15*scale];
    const area = 84*scale*scale, radius = 65*scale/8, inradius = 4*scale;
    const integerCount = Math.max(0, Math.floor(ir - 1e-9) - Math.ceil(il + 1e-9) + 1);
    const optMax = Math.max(6*cfg.p, 4*cfg.q);
    let bestPlan = { x:0, y:0, profit:0 };
    for (let x=0; x<=30; x++) for (let y=0; y<=30; y++) {
      if (cfg.p*x + cfg.q*y <= 6*cfg.p + 4*cfg.q && x + 2*y <= 14) {
        const profit = (cfg.p+2)*x + (cfg.q+3)*y;
        if (profit > bestPlan.profit) bestPlan = { x, y, profit };
      }
    }

    return {
      questions: [
        mc(`Phủ định của mệnh đề P: “Với mọi x thuộc R, x² - ${2*cfg.p}x + ${cfg.p*cfg.p+1} > 0” là`,
          `Tồn tại x thuộc R sao cho x² - ${2*cfg.p}x + ${cfg.p*cfg.p+1} ≤ 0`,
          [`Với mọi x thuộc R, x² - ${2*cfg.p}x + ${cfg.p*cfg.p+1} ≤ 0`,`Tồn tại x thuộc R sao cho x² - ${2*cfg.p}x + ${cfg.p*cfg.p+1} < 0`,`Tồn tại x thuộc R sao cho x² - ${2*cfg.p}x + ${cfg.p*cfg.p+1} = 0`],
          'Phủ định “mọi x, f(x)>0” là “tồn tại x, f(x)≤0”.', n),
        mc('Trong các phát biểu sau, phát biểu nào là mệnh đề đúng?',
          'Nếu một tứ giác là hình vuông thì hai đường chéo của nó vuông góc',
          ['Hai tam giác có cùng diện tích thì bằng nhau','Mọi số thực đều có căn bậc hai là số thực','Phương trình x² + 1 = 0 có nghiệm thực'],
          'Hình vuông có hai đường chéo vuông góc; các phát biểu còn lại sai.', n+1),
        mc(`Cho A = ${A}, B = ${B}. Khi đó A ∩ B bằng`, inter,
          [union, interval(il,ir,true,true), B],
          'Lấy đầu mút trái lớn hơn và đầu mút phải nhỏ hơn, đồng thời xét điều kiện lấy đầu mút.', n+2),
        mc(`Lớp 10A có ${28+k} học sinh; ${18+cfg.p} bạn thích Toán, ${16+cfg.q} bạn thích Vật lí và ${8+cfg.p} bạn thích cả hai. Số bạn không thích môn nào là`,
          `${(28+k)-((18+cfg.p)+(16+cfg.q)-(8+cfg.p))}`,
          [`${(28+k)-((18+cfg.p)+(16+cfg.q)-(8+cfg.p))+1}`,`${(28+k)-((18+cfg.p)+(16+cfg.q)-(8+cfg.p))+2}`,`${(28+k)-((18+cfg.p)+(16+cfg.q)-(8+cfg.p))+3}`],
          'Dùng công thức n(A∪B)=n(A)+n(B)-n(A∩B), rồi lấy sĩ số trừ kết quả.', n+3),
        mc('Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?',
          `${cfg.p}x - ${cfg.q}y + ${k} ≤ 0`,
          [`x² - ${cfg.q}y < 1`,`${cfg.p}xy + y ≥ 2`,`x + y + z > ${k}`],
          'Bất phương trình bậc nhất hai ẩn có dạng ax+by+c so sánh với 0, với a,b không đồng thời bằng 0.', n),
        mc(`Điểm nào thuộc miền nghiệm của ${cfg.p}x + ${cfg.q}y ≤ ${2*cfg.p+cfg.q}?`,
          '(2; 1)', ['(3; 2)','(4; 1)','(1; 3)'],
          `Thay (2;1) được ${2*cfg.p+cfg.q}, thỏa dấu bằng; các điểm còn lại không thỏa.`, n+1),
        mc(`Miền nghiệm của hệ x ≥ 0, y ≥ 0, x + y ≤ ${k+3} là tam giác có diện tích bằng`,
          fmt((k+3)*(k+3)/2), [fmt((k+3)*(k+3)),fmt(k+3),fmt(2*(k+3))],
          `Ba đỉnh là (0;0), (${k+3};0), (0;${k+3}), nên S=(${k+3})²/2.`, n+2),
        mc(`Giá trị lớn nhất của F = ${cfg.p}x + ${cfg.q}y trên miền x ≥ 0, y ≥ 0, x + y ≤ 6 là`,
          `${6*Math.max(cfg.p,cfg.q)}`, [`${6*Math.min(cfg.p,cfg.q)}`,`${3*(cfg.p+cfg.q)}`,`${6*(cfg.p+cfg.q)}`],
          'Giá trị lớn nhất đạt tại đỉnh nằm trên trục ứng với hệ số lớn hơn.', n+3),
        mc(`Một xưởng làm x sản phẩm A và y sản phẩm B, cần ${cfg.p}x + ${cfg.q}y ≤ ${6*cfg.p+4*cfg.q} giờ máy. Phương án nào sử dụng hết số giờ máy?`,
          '(6; 4)', ['(5; 4)','(6; 3)','(4; 4)'],
          `Thay (6;4) cho đúng ${6*cfg.p+4*cfg.q} giờ.`, n),
        mc(`Cho góc α thuộc (90°;180°) và tan α = -${cfg.p}/${cfg.q}. Giá trị của biểu thức (sin α - cos α)/(sin α + cos α) là`,
          fmt((cfg.p+cfg.q)/(cfg.p-cfg.q)), [fmt((cfg.p-cfg.q)/(cfg.p+cfg.q)),fmt(-(cfg.p+cfg.q)/(cfg.p-cfg.q)),fmt(cfg.p/cfg.q)],
          'Chia cả tử và mẫu cho cos α, được (tan α-1)/(tan α+1).', n+1),
        mc(`Tam giác ABC có AB=${cfg.p+4}, AC=${cfg.q+5} và góc A=60°. Khi đó BC² bằng`,
          `${(cfg.p+4)**2+(cfg.q+5)**2-(cfg.p+4)*(cfg.q+5)}`,
          [`${(cfg.p+4)**2+(cfg.q+5)**2}`,`${(cfg.p+4)**2+(cfg.q+5)**2-(cfg.p+4)*(cfg.q+5)+1}`,`${(cfg.p+4)**2+(cfg.q+5)**2-(cfg.p+4)*(cfg.q+5)-1}`],
          'Áp dụng định lí côsin: BC²=AB²+AC²-2·AB·AC·cos60°.', n+2),
        mc(`Tam giác có ba cạnh ${sides.join(', ')}. Bán kính đường tròn nội tiếp bằng`,
          `${inradius}`, [`${radius}`,`${7*scale}`,`${6*scale}`],
          `Nửa chu vi bằng ${21*scale}, diện tích bằng ${area}; r=S/p=${inradius}.`, n+3)
      ],
      tf: [
        {
          stem: `Cho A = ${A}, B = ${B} và mệnh đề P: “Với mọi x thuộc R, (x-${cfg.p})²+1>0”.`,
          items: [
            [`P là mệnh đề đúng`, true, 'Bình phương không âm nên (x-p)²+1 luôn dương.'],
            [`Phủ định của P là “Tồn tại x thuộc R sao cho (x-${cfg.p})²+1≤0”`, true, 'Đúng quy tắc phủ định lượng từ.'],
            [`A ∩ B = ${inter}`, true, 'Giao hai khoảng được xác định bởi phần chung.'],
            [`A ∪ B = ${A}`, false, `Hai khoảng chồng nhau và hợp kéo dài đến ${Math.max(cfg.b,cfg.d)}.`]
          ]
        },
        {
          stem: `Cho tam giác ABC có ba cạnh lần lượt ${sides.join(', ')} và diện tích S.`,
          items: [
            [`Nửa chu vi tam giác bằng ${21*scale}`, true, 'Cộng ba cạnh rồi chia hai.'],
            [`S = ${area}`, true, 'Công thức Heron cho S=84 khi tỉ lệ 1; diện tích tăng theo bình phương tỉ lệ.'],
            [`Bán kính đường tròn nội tiếp bằng ${inradius}`, true, 'r=S/p.'],
            [`Bán kính đường tròn ngoại tiếp bằng ${fmt(radius+scale)}`, false, `R=abc/(4S)=${fmt(radius)}.`]
          ]
        }
      ],
      short: [
        { text:`Có bao nhiêu số nguyên thuộc A ∩ B, với A=${A}, B=${B}?`, answer:String(integerCount), explanation:`A∩B=${inter}; đếm các số nguyên trong khoảng này.` },
        { text:`Tìm giá trị lớn nhất của F=${cfg.p}x+${cfg.q}y trên miền có các đỉnh (0;0), (6;0), (0;4).`, answer:String(optMax), explanation:'Tính F tại ba đỉnh và chọn giá trị lớn nhất.' },
        { text:`Tam giác có ba cạnh ${sides.join(', ')}. Tính diện tích tam giác.`, answer:String(area), explanation:'Dùng công thức Heron.' },
        { text:`Lớp có ${28+k} học sinh, ${18+cfg.p} bạn thích Toán, ${16+cfg.q} bạn thích Vật lí, ${8+cfg.p} bạn thích cả hai. Có bao nhiêu bạn không thích môn nào?`, answer:String((28+k)-((18+cfg.p)+(16+cfg.q)-(8+cfg.p))), explanation:'Áp dụng công thức cộng của hai tập hợp.' }
      ],
      essay: [
        { title:'Câu 1 (0,5 điểm)', question:`Phát biểu mệnh đề đảo của: “Nếu n chia hết cho ${2*cfg.p} thì n chia hết cho ${cfg.p}”. Xét tính đúng sai.`, solution:`Mệnh đề đảo: “Nếu n chia hết cho ${cfg.p} thì n chia hết cho ${2*cfg.p}”. Mệnh đề sai; chẳng hạn n=${cfg.p} chia hết cho ${cfg.p} nhưng không chia hết cho ${2*cfg.p}.` },
        { title:'Câu 2 (0,5 điểm)', question:`Cho tan α=-${cfg.p}/${cfg.q}, 90°<α<180°. Tính sin α và cos α.`, solution:`Ở góc phần tư II, sin α>0, cos α<0. Từ 1+tan²α=1/cos²α suy ra cos α=-${cfg.q}/√(${cfg.p*cfg.p+cfg.q*cfg.q}), sin α=${cfg.p}/√(${cfg.p*cfg.p+cfg.q*cfg.q}).` },
        { title:'Câu 3 (0,5 điểm)', question:`Cho A=${A}, B=${B}. Tìm A∩B, A∪B và phần bù của A∩B trong A.`, solution:`A∩B=${inter}; A∪B=${union}. Vì B không chứa đầu mút ${cfg.c}, phần bù của A∩B trong A là [${cfg.a}; ${cfg.c}].` },
        { title:'Câu 4 (0,5 điểm)', question:`Biểu diễn miền nghiệm của hệ x≥0, y≥0, x+y≤6 và tìm giá trị lớn nhất của F=${cfg.p}x+${cfg.q}y.`, solution:`Miền nghiệm là tam giác có các đỉnh O(0;0), A(6;0), B(0;6). Tính F tại ba đỉnh: 0, ${6*cfg.p}, ${6*cfg.q}; do đó max F=${6*Math.max(cfg.p,cfg.q)}.` },
        { title:'Câu 5 (0,5 điểm)', question:`Một cơ sở làm hai loại sản phẩm A, B. Mỗi A cần ${cfg.p} giờ máy và 1 giờ hoàn thiện; mỗi B cần ${cfg.q} giờ máy và 2 giờ hoàn thiện. Có tối đa ${6*cfg.p+4*cfg.q} giờ máy và 14 giờ hoàn thiện. Lãi mỗi A là ${cfg.p+2} trăm nghìn, mỗi B là ${cfg.q+3} trăm nghìn. Lập hệ bất phương trình và xác định phương án lãi lớn nhất.`, solution:`Đặt x,y là số sản phẩm, x,y là số nguyên không âm. Hệ: ${cfg.p}x+${cfg.q}y≤${6*cfg.p+4*cfg.q}; x+2y≤14. Kiểm tra các điểm nguyên trong miền nghiệm cho phương án tối ưu x=${bestPlan.x}, y=${bestPlan.y}; lợi nhuận lớn nhất L=${bestPlan.profit} trăm nghìn đồng.` },
        { title:'Câu 6 (0,5 điểm)', question:`Cho tam giác ABC có ba cạnh ${sides.join(', ')}. Tính diện tích, bán kính đường tròn nội tiếp và ngoại tiếp của tam giác.`, solution:`Nửa chu vi p=${21*scale}. Theo Heron, S=√[p(p-a)(p-b)(p-c)]=${area}. Suy ra r=S/p=${inradius}; R=abc/(4S)=${fmt(radius)}.` }
      ]
    };
  }

  configs.forEach((cfg, index) => {
    const exam = newMathExams.find(item => item.id === `toan-10-pho-thong-${String(index+1).padStart(2,'0')}`);
    if (!exam) return;
    const upgraded = buildExam(cfg, index);
    Object.assign(exam, upgraded, {
      title: `Toán 10 - Đề phổ thông ${String(index+1).padStart(2,'0')} - Chuẩn ma trận tỉnh Quảng Trị`,
      description: 'Đề nâng cao theo ma trận giữa kỳ I Toán 10: 12 câu ABCD, 2 câu đúng/sai, 4 câu trả lời ngắn, 6 câu tự luận; mức độ 40% biết, 30% hiểu, 20% vận dụng, 10% vận dụng cao.',
      matrix: { nhanBiet:40, thongHieu:30, vanDung:20, vanDungCao:10 },
      source: { school:'Tham chiếu đề THPT Đông Hà, THPT Lê Lợi và THPT Chuyên Lê Quý Đôn', province:'Quảng Trị', year:'2026–2027', note:'Biên soạn mới theo ma trận người dùng cung cấp; không sao chép đáp án viết tay.' }
    });
  });
})();
