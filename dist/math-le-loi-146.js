// Thay đề 04 cũ bằng nguyên nội dung mã 146 trong PDF THPT Lê Lợi 2023–2024.
const leLoi146 = suppliedExams.find(e => e.id === 'toan-10-de-04');
if (leLoi146) Object.assign(leLoi146, {
  title: 'Toán 10 - Đề 04 - THPT Lê Lợi, Quảng Trị - Giữa kỳ I 2023–2024 - Mã 146',
  subject: 'math', duration: 90, school: 'Trường THPT Lê Lợi', province: 'Quảng Trị', year: '2023–2024',
  description: 'Đề gốc mã 146: 25 câu trắc nghiệm và 5 câu tự luận, theo PDF do người dùng cung cấp.',
  source: { school: 'Trường THPT Lê Lợi', province: 'Quảng Trị', year: '2023–2024', url: 'supplied/le-loi-toan10-gki-2023-2024-ma146.pdf', note: 'PDF đề gốc và bảng đáp án trắc nghiệm, mã 146.' },
  mcUnit: 0.2, tf: [], short: [],
  questions: [
    ['Câu nào sau đây là mệnh đề phủ định của mệnh đề: ∃x ∈ ℚ, x² + x − 1 = 0?', ['∀x ∈ ℚ, x² + x − 1 = 0.', '∀x ∈ ℝ, x² + x − 1 ≠ 0.', '∀x ∈ ℚ, x² + x − 1 ≠ 0.', '∃x ∈ ℚ, x² + x − 1 ≠ 0.'], 2, 'Phủ định ∃ là ∀, giữ nguyên tập ℚ và phủ định dấu bằng.'],
    ['Trong các câu sau câu nào không phải mệnh đề?', ['√5 > 2.', 'x² > 0.', 'Đông Hà là thành phố trực thuộc trung ương.', '7 không phải số nguyên tố.'], 1, 'x² > 0 chứa biến x chưa xác định nên chưa có giá trị đúng/sai.'],
    ['Mệnh đề nào sau đây đúng?', ['Một số vừa chia hết cho 5 vừa chia hết cho 6 thì nó chia hết cho 30.', '∀x ∈ ℝ, √(x²) = x.', 'Phương trình x² + 3x − 2 = 0 có nghiệm hữu tỷ.', 'Hình chữ nhật có 2 đường chéo vuông góc với nhau.'], 0, 'Vì 5 và 6 nguyên tố cùng nhau, một số chia hết cho cả hai thì chia hết cho 30.'],
    ['Cho góc α tù. Khẳng định nào dưới đây là đúng?', ['tan α > 0.', 'cot α < 0.', 'sin α < 0.', 'cos α > 0.'], 1, 'Ở góc phần tư II, sin dương còn cos, tan, cot âm.'],
    ['Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình x − 2y ≤ 7; x − y ≥ 4?', ['(1; −3).', '(−3; 1).', '(2; 1).', '(0; 0).'], 0, 'Thay (1;−3): 1−2(−3)=7≤7 và 1−(−3)=4≥4.'],
    ['Cho tập X có biểu diễn trên trục số: phía từ −5 về +∞ bị gạch bỏ, điểm −5 không lấy. Tập X là phần không bị gạch bỏ. Khẳng định nào đúng?', ['X = (−5; +∞).', 'X = (−∞; −5).', 'X = (−∞; −5].', 'X = [−5; +∞).'], 1, 'Phần không bị gạch bỏ nằm bên trái −5, không gồm −5.'],
    ['Cho tập A = {x ∈ ℝ | 4 ≤ x ≤ 9}. Tập A là tập nào sau đây?', ['[4;9].', '(4;9).', '[4;9).', '(4;9].'], 0, 'Hai bất đẳng thức đều không nghiêm ngặt nên lấy cả 4 và 9.'],
    ['Cho mệnh đề chứa biến P(n): “n² − 1 là số nguyên tố”. Với giá trị nào của n thì P(n) đúng?', ['5.', '2.', '7.', '8.'], 1, 'n=2 thì n²−1=3 là số nguyên tố; các lựa chọn khác cho hợp số.'],
    ['Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?', ['x² + y² < 1.', 'y + z > 2x.', 'x² − 4 ≥ y.', '2x − 3y ≤ 1.'], 3, '2x−3y≤1 là bất phương trình bậc nhất theo đúng hai ẩn x,y.'],
    ['Trong các mệnh đề sau mệnh đề nào sai?', ['Tam giác ABC đều ⇔ tam giác ABC có 3 góc bằng nhau.', 'Tam giác ABC đều ⇔ tam giác ABC cân.', 'Tam giác ABC đều ⇔ tam giác ABC cân và có 1 góc bằng 60°.', 'Tam giác ABC đều ⇔ tam giác ABC có 3 cạnh bằng nhau.'], 1, 'Tam giác cân chưa chắc đều.'],
    ['Giá trị của tan 30° + cot 30° bằng bao nhiêu?', ['2', '2/√3', '(1+√3)/3', '4/√3'], 3, '1/√3+√3=4/√3.'],
    ['Cho tập hợp A = {x²+1 | x ∈ ℕ, x ≤ 4}. Hãy liệt kê các phần tử của A.', ['{2;5;10;17}', '{1;2;5;10;17}', '{0;1;2;3;4}', '{0;1;4;9;16}'], 1, 'x=0,1,2,3,4 cho A={1;2;5;10;17}.'],
    ['Trong các hệ sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?', ['{x+y≤10; 2x+y≤12}', '{x+y>10; 2x+y+z≤12}', '{x+y≤10; 2x+y=12}', '{x+y≤100; 2x+y²>0}'], 0, 'Cả hai ràng buộc ở A đều là bất phương trình bậc nhất theo x,y.'],
    ['Trong các đẳng thức sau, đẳng thức nào sai?', ['cos30° = sin120°.', 'sin60° = cos120°.', 'cos45° = sin135°.', 'cos45° = sin45°.'], 1, 'sin60°=√3/2 còn cos120°=−1/2.'],
    ['Hệ bất phương trình nào sau đây không phải là hệ bất phương trình bậc nhất hai ẩn?', ['{x+√y<1; x−2y≥3}', '{x−y≤0; x−y≥−2}', '{x+5y≤2; y≥1}', '{y<0; x>0}'], 0, '√y không là biểu thức bậc nhất.'],
    ['Miền không tô màu (kể cả các đường thẳng) trên hình đề gốc là miền nghiệm của hệ nào? Hai đường biên là 4x+y=0 và x−y−2=0.', ['{4x+y≤0; x−y−2≥0}', '{4x+y<0; x−y−2<0}', '{4x+y≤0; x−y−2≤0}', '{4x+y<0; x−y−2>0}'], 2, 'Vì gồm các đường biên nên dùng ≤; thử điểm trong miền không tô màu cho cả hai vế không dương. Xem hình gốc trong PDF.'],
    ['Cho tam giác ABC có AC=6, A=30°, C=80°. Độ dài BC gần nhất với giá trị nào?', ['3.', '3,3.', '3,1.', '3,2.'], 3, 'B=70°. Theo định lý sin, BC=6sin30°/sin70°≈3,2.'],
    ['Cho tam giác ABC có AB=6, AC=8, BC=10. Tính bán kính đường tròn ngoại tiếp tam giác ABC.', ['5.', '1/20.', '20.', '1/5.'], 0, 'Tam giác vuông cạnh huyền 10 nên R=10/2=5.'],
    ['Cho tam giác ABC có AC=3, AB=4 và A=60°. Tính độ dài BC.', ['2√13.', '√13.', '√19.', '13.'], 1, 'Định lý cos: BC²=3²+4²−2·3·4·cos60°=13.'],
    ['Cho tam giác ABC có AC=50, BC=30 và B=75°. Diện tích tam giác ABC gần nhất với giá trị nào?', ['724,5.', '724,4.', '702,8.', '702,9.'], 3, 'Theo định lý sin tìm góc A rồi góc C; diện tích xấp xỉ 702,9.'],
    ['Cho A=(−∞;1), B=[0;5]. Khi đó A∪B là tập nào?', ['[0;5]', '[0;1)', '(−∞;5]', '(0;+∞)'], 2, 'Hai tập giao nhau và hợp phủ từ −∞ đến 5, lấy 5.'],
    ['Cho tan α=3. Giá trị của P=(2sinα−3cosα)/(3sinα+5cosα) là', ['−14/3.', '−3/14.', '14/3.', '3/14.'], 3, 'Chia tử mẫu cho cosα: P=(2tanα−3)/(3tanα+5)=3/14.'],
    ['Tam giác có ba cạnh lần lượt là 4, 7, 8. Góc bé nhất của tam giác có cosin bằng bao nhiêu?', ['31/64.', '1/56.', '97/56.', '97/112.'], 3, 'Góc bé nhất đối diện cạnh 4: cos=(7²+8²−4²)/(2·7·8)=97/112.'],
    ['Biểu thức P=tan55°+cos63°+tan125°+cos117°+sin180° có giá trị bằng', ['0.', '1.', '2tan55°.', '2cos63°.'], 0, 'tan125°=−tan55°, cos117°=−cos63°, sin180°=0.'],
    ['Cho A=(−1;5], B=(2;7). Tìm A\\B.', ['(−1;2].', '(2;5].', '(−1;2).', '(−1;7).'], 0, '2 không thuộc B nên A\\B=(−1;2].']
  ],
  essay: [
    { title: 'Câu 26.', question: 'Biểu diễn miền nghiệm của bất phương trình x−2y>1 trên mặt phẳng tọa độ.', solution: 'Vẽ đường thẳng x−2y=1 bằng nét đứt. Miền nghiệm y<(x−1)/2 là nửa mặt phẳng phía dưới đường thẳng, không kể đường biên.' },
    { title: 'Câu 27.', question: 'a) Phát biểu định lý dưới dạng điều kiện cần, điều kiện đủ: “Nếu số tự nhiên n có chữ số tận cùng bằng 5 thì n chia hết cho 5”.<br>b) Viết mệnh đề phủ định của “∃x∈ℝ, 2x²−3x+1=0”.', solution: 'a) Có chữ số tận cùng bằng 5 là điều kiện đủ để chia hết cho 5; chia hết cho 5 là điều kiện cần để có chữ số tận cùng bằng 5.<br>b) ∀x∈ℝ, 2x²−3x+1≠0.' },
    { title: 'Câu 28.', question: 'Trong 45 học sinh lớp 10A có 15 bạn học lực Tốt, 20 bạn hạnh kiểm Tốt, 10 bạn có cả hai. Có bao nhiêu bạn không thuộc nhóm nào?', solution: '|A∪B|=15+20−10=25. Số học sinh không thuộc nhóm nào: 45−25=20.' },
    { title: 'Câu 29.', question: 'Cần đo chiều cao AB của tòa tháp, B là chân tháp. Trên đường thẳng B,D,C có CD=32 m; góc BCA=46°, góc BDA=70°. Tính AB, làm tròn đến một chữ số thập phân.', solution: 'Đặt BD=x, AB=h. tan70°=h/x; tan46°=h/(x+32). Do đó x=32tan46°/(tan70°−tan46°), h=x tan70°≈53,2 m.' },
    { title: 'Câu 30.', question: 'Một đội có tối đa 24 g hương liệu, 9 lít nước, 210 g đường. Mỗi lít nước cam cần 30 g đường, 1 lít nước, 1 g hương liệu và được 60 điểm; mỗi lít nước táo cần 10 g đường, 1 lít nước, 4 g hương liệu và được 80 điểm. Pha mỗi loại bao nhiêu lít để được điểm cao nhất?', solution: 'Gọi x,y là số lít cam,táo. Ràng buộc: x+4y≤24; x+y≤9; 3x+y≤21; x,y≥0. Tối đa P=60x+80y. So sánh tại các đỉnh miền nghiệm, lớn nhất là P=640 tại (x,y)=(4,5). Vậy pha 4 lít cam và 5 lít táo.' }
  ]
});

// Câu hỏi được chèn vào HTML: mã hóa dấu so sánh, giữ nguyên thẻ xuống dòng.
function escapeExamMathText(value) {
  if (typeof value !== 'string') return value;
  return value.split(/(<svg\b[\s\S]*?<\/svg>|<br\s*\/?>)/gi).map(part =>
    /^<(?:svg\b|br\s*\/?>)/i.test(part) ? part : part.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  ).join('');
}
function escapeExamMathFields(exam) {
  if (!exam) return;
  exam.questions.forEach(q => { q[0] = escapeExamMathText(q[0]); q[1] = q[1].map(escapeExamMathText); q[3] = escapeExamMathText(q[3]); });
  (exam.tf || []).forEach(q => { q.stem = escapeExamMathText(q.stem); q.items.forEach(item => { item[0] = escapeExamMathText(item[0]); item[2] = escapeExamMathText(item[2]); }); });
  (exam.short || []).forEach(q => { q.question = escapeExamMathText(q.question); q.explanation = escapeExamMathText(q.explanation); });
  (exam.essay || []).forEach(q => { q.question = escapeExamMathText(q.question); q.solution = escapeExamMathText(q.solution); });
}
escapeExamMathFields(leLoi146);
