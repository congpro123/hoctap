// THPT Lê Lợi, Quảng Trị — đề giữa kỳ I Toán 10, năm 2026–2027, mã 102.
// Chép từ ba trang ảnh người dùng cung cấp; đáp án được giải độc lập, không theo nét khoanh tay.
function ll102Plane(id, kind, shaded) {
  const rising = kind === 'rising';
  const line = rising ? 'M35 110L115 25' : kind === 'fallingA' ? 'M115 25L195 110' : 'M35 110L115 145';
  const hatch = rising ? (shaded === 'below' ? '0,165 0,110 35,110 115,25 220,25 220,165' : '0,0 220,0 220,25 115,25 35,110 0,110') : kind === 'fallingA' ? '0,0 115,0 115,25 195,110 220,110 220,165 0,165' : '0,0 35,0 35,110 115,145 115,165 0,165';
  const yLabel = kind === 'fallingD' ? '−3' : '3';
  const xLabel = kind === 'fallingA' ? '2' : '−2';
  return `<svg viewBox="0 0 220 175" role="img" aria-label="Đồ thị đường thẳng qua (${xLabel};0) và (0;${yLabel}); miền gạch sọc ở ${shaded === 'below' ? 'phía dưới' : 'phía trên'} đường thẳng" style="display:block;width:min(100%,220px);margin:4px auto"><defs><pattern id="ll102h${id}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V7" stroke="#667085" stroke-width="1.4"/></pattern></defs><polygon points="${hatch}" fill="url(#ll102h${id})"/><path d="M10 110H210M115 158V7" stroke="currentColor" fill="none"/><path d="${line}" stroke="currentColor" stroke-width="2.2" fill="none"/><text x="119" y="125" font-size="12">O</text><text x="204" y="105" font-size="12">x</text><text x="120" y="16" font-size="12">y</text><text x="${kind === 'fallingA' ? 193 : 23}" y="125" font-size="12">${xLabel}</text><text x="119" y="${kind === 'fallingD' ? 149 : 30}" font-size="12">${yLabel}</text></svg>`;
}
const ll102Circle = `<svg viewBox="0 0 330 205" role="img" aria-label="Nửa đường tròn đơn vị tâm O; A ở (1;0), M ở góc phần tư II có hình chiếu (a;0) và (0;b), góc AOM bằng alpha" style="display:block;width:min(100%,330px);margin:8px auto"><path d="M20 170H310M165 190V12M45 170A120 120 0 0 1 285 170M165 170 92 75" stroke="currentColor" stroke-width="2" fill="none"/><path d="M92 75V170M92 75H165" stroke="#64748b" stroke-dasharray="4 4" fill="none"/><path d="M188 170A23 23 0 0 0 151 152" stroke="#1d4ed8" fill="none"/><circle cx="92" cy="75" r="3"/><text x="78" y="68">M</text><text x="153" y="188">O</text><text x="280" y="187">A</text><text x="87" y="190">a</text><text x="171" y="80">b</text><text x="185" y="148">α</text><text x="28" y="190">−1</text><text x="281" y="190">1</text><text x="306" y="165">x</text><text x="171" y="20">y</text></svg>`;
const ll102Trapezoid = `<svg viewBox="0 0 440 205" role="img" aria-label="Hình thang ABCD với AD song song BC, A dưới trái, B trên trái, C trên phải, D dưới phải; AB là đường đi dài 70 mét; đường chéo AC và BD; góc BAC 54 độ, DAC 22 độ, ABD 73 độ" style="display:block;width:min(100%,440px);margin:8px auto"><path d="M55 170 100 25 380 25 315 170Z M55 170 380 25M100 25 315 170" stroke="currentColor" stroke-width="2" fill="none"/><path d="M40 170 85 25" stroke="#6b7280" stroke-width="5"/><text x="42" y="185">A</text><text x="90" y="20">B</text><text x="382" y="22">C</text><text x="315" y="186">D</text><text x="16" y="92" font-size="12">Đường đi</text><text x="65" y="105" font-size="12">70 m</text><text x="90" y="153" font-size="12">22°</text><text x="69" y="126" font-size="12">54°</text><text x="124" y="61" font-size="12">73°</text></svg>`;
// Hiển thị đúng vùng hình tháp trong ảnh trang 3 gốc, không vẽ lại hoặc đổi dữ kiện.
const ll102Tower = `<svg viewBox="765 1335 300 355" role="img" aria-label="Hình tháp và hai cột mốc chụp từ trang 3 của đề Lê Lợi mã 102" style="display:block;width:min(100%,360px);margin:8px auto"><image href="supplied/le-loi-102-page3-original.png" x="0" y="0" width="1152" height="2048"/></svg>`;

const mathLeLoi102 = [{
  id: 'toan-10-le-loi-102', title: 'Toán 10 - THPT Lê Lợi, Quảng Trị - Giữa kỳ I 2026–2027 - Mã 102',
  subject: 'math', minutes: 90, mcUnit: 0.25, school: 'Trường THPT Lê Lợi', province: 'Quảng Trị', year: '2026–2027',
  description: 'Đề mã 102: 12 câu chọn đáp án, 2 câu đúng/sai (mỗi câu 4 ý), 4 câu trả lời ngắn và 5 câu tự luận.',
  source: { school: 'Trường THPT Lê Lợi', province: 'Quảng Trị', year: '2026–2027', url: '#', note: 'Ba ảnh chụp đầy đủ 3 trang đề do người dùng cung cấp; hình được dựng lại, đáp án giải độc lập.' },
  questions: [
    ['Phát biểu nào sau đây không phải là một mệnh đề?', ['Hà Nội là thủ đô của Việt Nam.', 'Trái Đất quay quanh Mặt Trời.', '5+3=9.', 'Ngày mai bạn có đi chơi không?'], 3, 'Câu hỏi không có giá trị đúng hoặc sai xác định.'],
    ['Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?', ['{x+y≤10; 2x+y≤12}', '{x+y≤100; 2x+y²>0}', '{x²+y≤0; x−3y=12}', '{x+y>10; 2x+y+z≤12}'], 0, 'A gồm hai bất phương trình bậc nhất theo x và y.'],
    ['Miền nghiệm của bất phương trình x+2y<−4 là nửa mặt phẳng chứa điểm nào sau đây?', ['(0;0).', '(0;−1).', '(−5;0).', '(1;−1).'], 2, 'Thay (−5;0) được −5<−4.'],
    ['Điểm nào sau đây không thuộc miền nghiệm của hệ {2x+3y−1>0; 5x−y+4<0}?', ['(−2;4).', '(0;1).', '(−1;4).', '(−3;4).'], 1, 'Tại (0;1), 5x−y+4=3>0 nên không thỏa bất phương trình thứ hai.'],
    ['Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?', ['x+y+z<0.', '2x≥2yx+6.', '3x−y−4≤0.', '2x²−y>0.'], 2, 'Chỉ C có dạng ax+by+c≤0 với hai ẩn x,y.'],
    ['Cặp số (x₀;y₀) nào sau đây không là nghiệm của bất phương trình x−4y+5≥0?', ['(0;0).', '(1;−3).', '(−2;1).', '(−5;0).'], 2, 'Tại (−2;1), x−4y+5=−1<0.'],
    ['Cho mệnh đề Q: “∃x∈ℝ: x²−4x+3=0”. Mệnh đề phủ định của Q là', ['∀x∈ℝ: x²−4x+3≠0.', '∀x∈ℝ: x²−4x+3<0.', '∃x∈ℝ: x²−4x+3≠0.', '∀x∈ℝ: x²−4x+3=0.'], 0, 'Đổi ∃ thành ∀ và dấu = thành ≠.'],
    ['Miền nghiệm của bất phương trình 3x−2y>−6 được biểu diễn bởi hình nào? Vùng gạch sọc là vùng không thuộc miền nghiệm.', [ll102Plane('a','fallingA','below'), ll102Plane('b','rising','below'), ll102Plane('c','rising','above'), ll102Plane('d','fallingD','above')], 2, 'Đường biên y=3x/2+3 đi qua (−2;0),(0;3); điểm O thỏa 0>−6 nên miền nghiệm chứa O và nằm dưới đường thẳng. Hình C gạch sọc phía trên đường thẳng (miền bị loại), để phần chứa O không gạch sọc.'],
    ['Cho góc tù x (90°<x<180°). Khẳng định nào sau đây là đúng?', ['tan x>0.', 'cos x>0.', 'sin x<0.', 'cot x<0.'], 3, 'Trong góc phần tư II, cot x âm.'],
    ['Cho tứ giác ABCD. Xét mệnh đề: “Nếu tứ giác ABCD là hình thoi thì tứ giác ABCD có hai đường chéo vuông góc”. Mệnh đề đảo của mệnh đề đó là', ['Nếu tứ giác ABCD là hình bình hành thì hai đường chéo vuông góc.', 'Nếu tứ giác ABCD không là hình thoi thì hai đường chéo không vuông góc.', 'Nếu tứ giác ABCD có hai đường chéo vuông góc thì tứ giác ABCD là hình thoi.', 'Nếu hai đường chéo không vuông góc thì tứ giác ABCD không là hình thoi.'], 2, 'Mệnh đề đảo hoán đổi giả thiết và kết luận.'],
    ['Cho tập hợp A={x∈ℤ | −2≤x<3}. Khi đó A là tập hợp nào sau đây?', ['(−2;3).', '{−2;−1;0;1;2;3}.', '[−2;3).', '{−2;−1;0;1;2}.'], 3, 'Liệt kê các số nguyên từ −2 đến 2.'],
    ['Cho tan α=3. Tính giá trị của biểu thức B=(2sin α−5cos α)/(sin α+2cos α) bằng', ['1.', '−1/5.', '1/5.', '3/5.'], 2, 'Chia tử và mẫu cho cos α: B=(2·3−5)/(3+2)=1/5.']
  ],
  tf: [
    { stem: 'Xét tính đúng sai của các mệnh đề sau:', items: [
      ['∃n∈ℕ, 4ⁿ≤2n+1.', true, 'Lấy n=0 thì 4⁰=1≤1.'],
      ['Nếu A={0;2;4;6;8}, B={2;3;4;5} thì A∩B={2;4}.', true, 'Hai phần tử chung là 2 và 4.'],
      ['−6<2 ⇒ (−6)²<2².', false, '36 không nhỏ hơn 4.'],
      ['Cho mệnh đề P: “∀x∈ℝ, x²−x+2>0”. Khi đó P̄: “∃x∈ℝ, x²−x+2≤0”.', true, 'Phủ định ∀ là ∃, phủ định >0 là ≤0.']
    ] },
    { stem: `Trên nửa đường tròn đơn vị, cho góc AOM=α như hình vẽ sau. Khi đó: ${ll102Circle}`, items: [
      ['cos α<0.', true, 'M ở góc phần tư II nên hoành độ a=cos α<0.'],
      ['sin α=1−b.', false, 'Trên đường tròn đơn vị, sin α=b.'],
      ['tan α=b/a.', true, 'tan α=sin α/cos α=b/a.'],
      ['3cos(180°−α)·tan α−sin(180°−α)·cot α+3b tan α·cot α=a.', false, 'Thay cos(180°−α)=−a, sin(180°−α)=b, tan α=b/a, cot α=a/b. Vế trái bằng −a.']
    ] }
  ],
  short: [
    { question: 'Trong một cuộc phỏng vấn 47 học sinh của lớp 10A về việc tập luyện các môn thể dục thể thao vào ngày nghỉ cuối tuần, có 20 học sinh thích chơi bóng đá, 25 học sinh thích chơi cầu lông và 12 học sinh không thích cả hai môn trên. Có bao nhiêu học sinh chỉ thích chơi cầu lông?', answer: 15, explanation: 'Thích ít nhất một môn: 47−12=35. Thích cả hai: 20+25−35=10. Chỉ cầu lông: 25−10=15.' },
    { question: `Ông An vừa được cấp một mảnh đất trồng lúa có dạng hình thang ABCD với AD∥BC. Cạnh AB dọc theo đường đi và có độ dài 70m. Sử dụng giác kế, người ta đo được các góc DAC=22°, BAC=54° và ABD=73°. Hãy tính gần đúng diện tích mảnh đất của ông An (đơn vị mét vuông, kết quả chính xác đến hàng đơn vị). ${ll102Trapezoid}`, answer: 9548, unit: 'm²', explanation: '∠BAD=76°, ∠ADB=31°. Chiều cao h=70sin76°; AD=70sin73°/sin31°. Vì AC tạo với AD góc 22°, BC=h/tan22°−70cos76°. Diện tích (AD+BC)h/2≈9547,9 m², làm tròn 9548 m².' },
    { question: 'Cho hai tập hợp D=(4;18] và B=[7;23). Tìm số phần tử là số nguyên thuộc tập hợp D∪B.', answer: 18, explanation: 'D∪B=(4;23), gồm các số nguyên 5,6,…,22: có 18 số.' },
    { question: 'Tính diện tích miền nghiệm của hệ bất phương trình {x≤0; y≥0; 2x−y≥−2}.', answer: 1, explanation: 'Miền tam giác có các đỉnh (−1;0), (0;0), (0;2). Diện tích bằng 1·2/2=1.' }
  ],
  essay: [
    { title: 'Câu 1.', question: 'Cho mệnh đề: “Nếu một tứ giác là hình chữ nhật thì nó có hai đường chéo bằng nhau”.<br>a) Phát biểu mệnh đề đảo của mệnh đề trên.<br>b) Mệnh đề đảo đúng hay sai? Giải thích.', solution: 'a) Nếu một tứ giác có hai đường chéo bằng nhau thì nó là hình chữ nhật. b) Sai: hình thang cân có hai đường chéo bằng nhau nhưng không nhất thiết là hình chữ nhật.' },
    { title: 'Câu 2.', question: 'Cho tam giác ABC có AB=10; AC=5; Ĉ=80°. Tính góc B̂ (đơn vị độ, làm tròn đến hàng phần chục).', solution: 'Theo định lý sin: sin B/AC=sin C/AB, nên sin B=(5/10)sin80°. Vì B<C nên B≈29,5°.' },
    { title: 'Câu 3.', question: 'Cho hai tập hợp A=(−2;7] và B=[1;m+2]. Biết B≠∅, có bao nhiêu giá trị nguyên của tham số m để tập hợp A∪B=A.', solution: 'B≠∅ cho m+2≥1, tức m≥−1. B⊆A cho m+2≤7, tức m≤5. Có 7 giá trị nguyên m từ −1 đến 5.' },
    { title: 'Câu 4.', question: 'Một xưởng sản xuất có hai loại máy là máy cưa gỗ tự động và máy đánh bóng bề mặt để sản xuất hai loại sản phẩm bàn học sinh và ghế gỗ. Để sản xuất 1 cái bàn học sinh cần dùng máy cưa gỗ tự động trong 3 giờ và dùng máy đánh bóng bề mặt trong 2 giờ. Để sản xuất 1 cái ghế gỗ cần dùng máy cưa gỗ tự động trong 1 giờ và dùng máy đánh bóng bề mặt trong 2 giờ. Cho biết mỗi máy không thể sản xuất đồng thời hai loại sản phẩm. Máy cưa gỗ tự động làm việc không quá 12 giờ một ngày, máy đánh bóng bề mặt làm việc không quá 12 giờ một ngày. Một cái bàn học sinh lãi 113 ngàn đồng và một cái ghế gỗ lãi 88 ngàn đồng. Tính số tiền lãi (ngàn đồng) có thể thu được lớn nhất.', solution: 'Gọi x,y là số bàn và ghế. Ràng buộc 3x+y≤12, x+y≤6, x,y≥0. Hàm lãi P=113x+88y. Xét các đỉnh (0;0),(4;0),(3;3),(0;6): giá trị lớn nhất là 603 nghìn đồng tại x=y=3.' },
    { title: 'Câu 5.', question: `Một người đứng ở trên một tháp truyền hình cao 280 m so với mặt đất, muốn xác định khoảng cách giữa hai cột mốc trên mặt đất bên dưới. Người đó quan sát thấy góc được tạo bởi hai đường ngắm tới hai mốc này là 43°, góc giữa phương thẳng đứng và đường ngắm tới một điểm mốc trên mặt đất là 62° và đến điểm mốc khác là 54° (Hình). Tính khoảng cách giữa hai cột mốc này. ${ll102Tower}`, solution: 'Khoảng cách từ đỉnh tháp đến hai mốc lần lượt là 280/cos62° và 280/cos54°. Áp dụng định lý cosin với góc xen giữa 43°: khoảng cách hai mốc =√[(280/cos62°)²+(280/cos54°)²−2(280/cos62°)(280/cos54°)cos43°]≈408,7 m.' }
  ]
}];
escapeExamMathFields(mathLeLoi102[0]);
