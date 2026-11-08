// THPT số 1 Phan Chu Trinh, Đắk Lắk - đề chính thức mã 1001 từ 5 ảnh đề và bảng đáp án người dùng cung cấp.
const dakInterval = `<svg viewBox="0 0 350 65" role="img" aria-label="Trục số: khoảng từ âm 2 đến 3 không bị gạch sọc; hai đầu đều không lấy" style="display:block;max-width:350px;width:100%;margin:10px auto"><path d="M20 28H330M23 15l12 26m3-26l12 26m3-26l12 26m3-26l12 26m3-26l12 26m3-26l12 26m105-26l12 26m3-26l12 26m3-26l12 26m3-26l12 26m3-26l12 26" stroke="currentColor" fill="none"/><path d="M125 17q-12 11 0 22M230 17q12 11 0 22" fill="none" stroke="#1d4ed8" stroke-width="2"/><text x="110" y="58">−2</text><text x="225" y="58">3</text></svg>`;
const dakVenn = `<svg viewBox="0 0 360 150" role="img" aria-label="Hai tập A và B giao nhau, vùng gạch sọc là phần giao" style="display:block;max-width:360px;width:100%;margin:10px auto"><defs><pattern id="dakHatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(40)"><path d="M0 0V6" stroke="#b45353" stroke-width="2"/></pattern><clipPath id="dakClip"><circle cx="220" cy="75" r="60"/></clipPath></defs><circle cx="140" cy="75" r="60" fill="none" stroke="#245274" stroke-width="2"/><circle cx="220" cy="75" r="60" fill="none" stroke="#245274" stroke-width="2"/><circle cx="140" cy="75" r="60" fill="url(#dakHatch)" clip-path="url(#dakClip)"/><text x="100" y="80">A</text><text x="255" y="80">B</text></svg>`;
const dakCircle = `<svg viewBox="0 0 360 180" role="img" aria-label="Nửa đường tròn đơn vị, M có hoành độ âm 3 phần 5 và tung độ 4 phần 5" style="display:block;max-width:360px;width:100%;margin:10px auto"><path d="M40 150H330M180 160V15M65 150A115 115 0 0 1 295 150M180 150 111 58M111 58V150M111 58H180" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="111" cy="58" r="4" fill="#b91c1c"/><text x="94" y="50">M</text><text x="161" y="168">O</text><text x="91" y="170">−3/5</text><text x="185" y="60">4/5</text><text x="310" y="169">x</text><text x="185" y="20">y</text></svg>`;
const dakRegion = `<svg viewBox="0 0 330 270" role="img" aria-label="Miền nghiệm tứ giác O(0;0), A(4;0), B(2;3), C(0;4), kể cả biên" style="display:block;max-width:330px;width:100%;margin:10px auto"><polygon points="50,230 250,230 150,80 50,30" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/><path d="M30 230H295M50 250V15" stroke="currentColor" stroke-width="2"/><text x="35" y="249">O</text><text x="251" y="249">A(4;0)</text><text x="155" y="75">B(2;3)</text><text x="5" y="28">C(0;4)</text></svg>`;
const dakSports = `<svg viewBox="0 0 400 210" role="img" aria-label="Sơ đồ Venn lớp 10A: chỉ bóng đá 14, cả hai 8, chỉ cầu lông 11, không thích môn nào 7" style="display:block;max-width:400px;width:100%;margin:10px auto"><rect x="10" y="10" width="380" height="190" rx="12" fill="#f8fafc" stroke="#1e3a8a"/><circle cx="165" cy="105" r="70" fill="#dbeafe" stroke="#245274"/><circle cx="235" cy="105" r="70" fill="#fee2e2" fill-opacity=".7" stroke="#b91c1c"/><text x="100" y="32">Bóng đá</text><text x="255" y="32">Cầu lông</text><text x="125" y="112">14</text><text x="193" y="112">8</text><text x="275" y="112">11</text><text x="358" y="180">7</text></svg>`;
const dakTriangle = `<svg viewBox="0 0 350 260" role="img" aria-label="Tam giác ABC với góc A 45 độ, góc B 60 độ, BC bằng 6 căn 2" style="display:block;max-width:350px;width:100%;margin:10px auto"><path d="M175 20 35 220H305Z" fill="none" stroke="#245274" stroke-width="2"/><text x="169" y="17">A</text><text x="20" y="238">B</text><text x="308" y="238">C</text><text x="150" y="245">6√2</text><text x="153" y="48">45°</text><text x="47" y="210">60°</text></svg>`;
const dakCable = `<svg viewBox="0 0 400 245" role="img" aria-label="Tam giác ABC, D trên BC, M trên AB, N trên AD; cáp nối D với M và C với N" style="display:block;max-width:400px;width:100%;margin:10px auto"><path d="M45 210 165 20 375 210ZM165 20 245 210M93 134 245 210M375 210 205 115" fill="none" stroke="#245274" stroke-width="2"/><text x="158" y="17">A</text><text x="30" y="228">B</text><text x="240" y="229">D</text><text x="378" y="229">C</text><text x="79" y="128">M</text><text x="201" y="110">N</text><text x="42" y="100">20 m</text><text x="258" y="100">34 m</text><text x="175" y="240">42 m</text></svg>`;

const mathDakLak1001 = [{
  id: 'toan-10-dak-lak-1001',
  title: 'Toán 10 - THPT số 1 Phan Chu Trinh, Đắk Lắk - Giữa kỳ I 2026–2027 - Mã 1001',
  subject: 'math', minutes: 90, mcUnit: 0.25,
  school: 'Trường THPT số 1 Phan Chu Trinh', province: 'Đắk Lắk', year: '2026–2027',
  description: 'Đề chính thức mã 1001: 12 câu chọn đáp án, 4 câu đúng/sai (mỗi câu 4 ý), 6 câu trả lời ngắn; đối chiếu bảng đáp án do người dùng cung cấp.',
  source: { school: 'Trường THPT số 1 Phan Chu Trinh', province: 'Đắk Lắk', year: '2026–2027', url: '#', note: 'Nội dung từ 5 ảnh đề chính thức và bảng đáp án mã 1001 do người dùng cung cấp.' },
  questions: [
    ['Cho X={x∈ℝ | −4<x≤7}. Tập hợp X viết dưới dạng khoảng, đoạn, nửa khoảng là', ['(−4;7).', '[−4;7).', '(−4;7].', '[−4;7].'], 2, '−4 không lấy, 7 được lấy nên X=(−4;7].'],
    ['Cho mệnh đề P: ∀x∈ℝ, x²−4x+7>0. Mệnh đề phủ định của P là', ['∀x∈ℝ, x²−4x+7≠0.', '∃x∈ℝ, x²−4x+7≤0.', '∃x∈ℝ, x²−4x+7=0.', '∃x∈ℝ, x²−4x+7>0.'], 1, 'Phủ định ∀ là ∃; phủ định >0 là ≤0.'],
    [`Cho tập hợp S là phần không bị gạch sọc trên trục số. S là tập nào? ${dakInterval}`, ['[−2;3).', '(−2;3).', '(−∞;−2)∪(3;+∞).', '[−2;3].'], 1, 'Khoảng giữa −2 và 3 không chứa hai đầu mút.'],
    ['Cho tam giác ABC có BC=a, CA=b, AB=c. Công thức tính diện tích S là', ['S=½bc sin A.', 'S=½bc cos A.', 'S=bc sin A.', 'S=bc cos A.'], 0, 'Diện tích bằng nửa tích hai cạnh kề nhân sin góc xen giữa.'],
    ['Cho tam giác ABC có BC=a, CA=b, AB=c. Khẳng định nào đúng?', ['a²=b²+c²−bc cos A.', 'a²=b²+c²+2bc cos A.', 'a²=b²+c²+bc cos A.', 'a²=b²+c²−2bc cos A.'], 3, 'Định lý cosin: a²=b²+c²−2bc cos A.'],
    ['Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn x,y?', ['{2x+y−3=0; x−4y=1}', '{x+y>2; x²−y≤4}', '{2x+y−3<0; x−4y≥1}', '{3x−y≥0; xy+y<5}'], 2, 'C gồm hai bất phương trình bậc nhất theo x,y.'],
    ['Cho M={a;b;c}, trong đó a,b,c phân biệt và khác 0. Tập nào là tập con của M?', ['{a;d}.', 'a.', '{0}.', '{a;c}.'], 3, 'Cả a và c đều thuộc M.'],
    ['Cho bất phương trình 2x−3y+1>0. Cặp số nào là nghiệm?', ['(1;2).', '(−1;1).', '(1;1).', '(2;1).'], 3, 'Với (2;1): 2·2−3·1+1=2>0.'],
    [`Cho biểu đồ Venn, phần gạch sọc biểu diễn tập hợp nào? ${dakVenn}`, ['A∩B.', 'B\\A.', 'A\\B.', 'A∪B.'], 0, 'Vùng chung của hai hình là giao A∩B.'],
    [`Cho nửa đường tròn đơn vị tâm O. Điểm M trên đường tròn có hình chiếu lên Ox là −3/5 và lên Oy là 4/5. Giá trị cos α bằng bao nhiêu? ${dakCircle}`, ['−3/4.', '4/5.', '3/5.', '−3/5.'], 3, 'Trên đường tròn đơn vị, cos α là hoành độ của M: −3/5.'],
    ['Bất phương trình nào là bất phương trình bậc nhất hai ẩn x,y?', ['3x−2y+5≤0.', 'x+3xy−4<0.', 'xy≥−2.', '2x²−y>3.'], 0, 'Chỉ A có dạng ax+by+c≤0.'],
    ['Trong các câu sau, câu nào là một mệnh đề toán học?', ['Hình thoi có hai đường chéo vuông góc phải không?', 'Môn Toán thật là thú vị!', '19 là một số lẻ.', 'Phương trình x²−4x+3=0 có nghiệm không?'], 2, '“19 là một số lẻ” là câu khẳng định có giá trị đúng.']
  ],
  tf: [
    { stem: `Cho hệ x≥0, y≥0, 3x+2y≤12, x+2y≤8. Miền nghiệm là tứ giác OABC với O(0;0), A(4;0), B(2;3), C(0;4), kể cả bốn cạnh. ${dakRegion}`,
      items: [
        ['F(x;y)=2x+3y tại O(0;0) bằng 0.', true, 'F(0;0)=0.'],
        ['Đỉnh B có tọa độ (3;2).', false, 'Giải hai đường biên cho B=(2;3).'],
        ['M(1;2) thuộc miền nghiệm.', true, '3·1+2·2=7≤12 và 1+2·2=5≤8; x,y≥0.'],
        ['Miền nghiệm là tứ giác OABC, kể cả bốn cạnh.', true, 'Bốn đỉnh O,A,B,C đều trên miền nghiệm; dấu ≤,≥ cho lấy cả biên.']
      ] },
    { stem: 'Cho A=[−2;4), B={x∈ℝ | 1<x≤6}.', items: [
      ['A∪B=[−2;6].', true, 'Hai khoảng giao nhau, hợp từ −2 đến 6.'],
      ['B=(1;6].', true, 'Đây là cách viết B dưới dạng khoảng.'],
      ['Phần bù của A trong ℝ là (−∞;−2]∪(4;+∞).', false, 'Phần bù đúng là (−∞;−2)∪[4;+∞).'],
      ['A có vô số phần tử.', true, 'A là một khoảng liên tục khác rỗng.']
    ] },
    { stem: `Lớp 10A khảo sát hai môn Bóng đá và Cầu lông: chỉ thích Bóng đá 14 học sinh; thích cả hai 8; chỉ thích Cầu lông 11; không thích môn nào 7. ${dakSports}`, items: [
      ['Chỉ thích Bóng đá, không thích Cầu lông là 22 học sinh.', false, 'Chỉ Bóng đá có 14 học sinh.'],
      ['Thích cả hai môn là 8 học sinh.', true, 'Số ở vùng giao là 8.'],
      ['Tổng số học sinh lớp 10A là 33.', false, 'Tổng lớp =14+8+11+7=40.'],
      ['Thích ít nhất một trong hai môn là 33 học sinh.', true, 'Hợp hai môn gồm 14+8+11=33 học sinh.']
    ] },
    { stem: `Cho tam giác ABC có A=45°, B=60° và BC=6√2. ${dakTriangle}`, items: [
      ['sin A=√2/2.', true, 'sin45°=√2/2.'],
      ['Bán kính đường tròn nội tiếp r=S/p, với S là diện tích, p là nửa chu vi.', true, 'Công thức chuẩn r=S/p.'],
      ['CA=7√2.', false, 'Theo định lý sin: CA=BC·sin60°/sin45°=6√3.'],
      ['C=75°.', true, 'C=180°−45°−60°=75°.']
    ] }
  ],
  short: [
    { question: 'Nhóm Lan rảnh trong A=[14;18], nhóm Minh rảnh trong B=(15;20]. Có bao nhiêu số nguyên trong khoảng thời gian chung A∩B?', answer: 3, explanation: 'A∩B=(15;18], gồm các số nguyên 16,17,18.' },
    { question: 'Biết tan x=2. Tính P=(4sin x+cos x)/(2sin x−cos x).', answer: 3, explanation: 'Chia tử mẫu cho cos x: P=(4tan x+1)/(2tan x−1)=(8+1)/(4−1)=3.' },
    { question: 'Ba bồn hoa ở A,B,C tạo tam giác có AB=14 m, BC=30 m, CA=40 m. Tính bán kính R (mét) của đường tròn ngoại tiếp tam giác ABC.', answer: 25, unit: 'm', explanation: 'p=(14+30+40)/2=42, S=√[42·28·12·2]=168; R=abc/(4S)=14·30·40/(4·168)=25 m.' },
    { question: 'Ba danh sách số thứ tự học sinh A={4;7}, B={7;x}, C={4;y} bằng nhau: A=B=C. Tính x+y.', answer: 11, explanation: 'Từ A=B suy ra x=4; từ A=C suy ra y=7; x+y=11.' },
    { question: 'Câu lạc bộ làm hai loại nến “Ban Mai” và “Hoàng Hôn”. Mỗi bộ Ban Mai cần 200 g sáp và 40 ml tinh dầu; Hoàng Hôn cần 300 g sáp và 20 ml tinh dầu. Có tối đa 6 kg sáp và 800 ml tinh dầu. Sáp giá 60 nghìn đồng/kg, tinh dầu 50 nghìn đồng/100 ml; mỗi bộ dùng thêm cốc 8 nghìn đồng và hộp 10 nghìn đồng. Phí gian hàng 120 nghìn và trang trí 60 nghìn. Giá bán Ban Mai 100 nghìn, Hoàng Hôn 86 nghìn đồng/bộ; sản phẩm làm ra bán hết. Lợi nhuận ròng lớn nhất là bao nhiêu nghìn đồng?', answer: 970, unit: 'nghìn đồng', explanation: 'Gọi x,y là số bộ. Ràng buộc 2x+3y≤60, 2x+y≤40, x,y≥0. Lãi mỗi bộ lần lượt 50 và 40 nghìn; chi phí cố định 180 nghìn. Tối đa 50x+40y−180 tại x=15,y=10, được 970 nghìn đồng.' },
    { question: `Trên thảm cỏ tam giác ABC có AB=20 m, BC=42 m, CA=34 m. D nằm trên BC (khác B,C), bán kính đường tròn ngoại tiếp tam giác ABD là 12,5 m. M chọn trên AB, N chọn trên AD (kể cả hai đầu mút). Tìm giá trị nhỏ nhất của DM+CN, làm tròn đến hàng phần mười (mét). ${dakCable}`, answer: 37.2, unit: 'm', explanation: 'Đặt B=(0,0), C=(42,0). Từ AB=20, AC=34 suy ra A=(12,16). Bán kính ngoại tiếp ABD bằng 5AD/8=12,5 nên AD=20; D=(24,0). Khoảng cách nhỏ nhất DM là khoảng cách D đến AB, bằng 19,2 m (hình chiếu nằm trên AB). Hình chiếu của C lên đường AD nằm ngoài đoạn AD, nên CN nhỏ nhất tại N=D: CD=18 m. Tổng nhỏ nhất 37,2 m.' }
  ],
  essay: []
}];
