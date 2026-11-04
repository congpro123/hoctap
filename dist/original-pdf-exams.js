// Tài liệu PDF gốc do người dùng cung cấp; giữ nguyên toàn bộ nội dung và hình minh họa.
const originalPdfExams = [
  {
    id: 'TOAN10-ON-TAP-GKI-MA101',
    title: 'Toán 10 - Đề ôn tập kiểm tra giữa kỳ I - Mã đề 101',
    description: 'Đề gốc 03 trang, giữ nguyên định dạng và hình minh họa trong PDF.',
    subject: 'math',
    minutes: 90,
    originalPdf: true,
    source: {
      school: 'Đề ôn tập kiểm tra giữa kỳ I - Môn Toán khối 10',
      province: '',
      year: '',
      url: 'supplied/de-on-tap-so-1-dh.pdf',
      note: 'Bản PDF gốc do người dùng cung cấp; không biên tập.'
    },
    mcUnit: 0.25,
    questions: [3, 0, 0, 1, 2, 2, 0, 2, 2, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1]
      .map((answer, i) => [`Câu ${i + 1} — xem nguyên văn và hình minh họa ở trang ${i < 10 ? 1 : 2} của đề gốc.`, ['Phương án A trong đề gốc', 'Phương án B trong đề gốc', 'Phương án C trong đề gốc', 'Phương án D trong đề gốc'], answer, `Đáp án ${'ABCD'[answer]}. Đối chiếu với câu ${i + 1} trên trang đề gốc.`]),
    tf: [
      { stem: 'Phần II, Câu 1 — xem nguyên văn bảng mệnh đề ở trang 3 của đề gốc.', items: [['Mệnh đề a) trong đề gốc.', true, 'Đúng. B = {2; 7}.'], ['Mệnh đề b) trong đề gốc.', false, 'Sai: với x = 10, x² − 10x + 9 = 9 > 0.'], ['Mệnh đề c) trong đề gốc.', true, 'Đúng: A ∪ B = {1; 2; 5; 6; 7; 10}.'], ['Mệnh đề d) trong đề gốc.', true, 'Đúng: A \\ B = {1; 5; 6; 10}.']] },
      { stem: 'Phần II, Câu 2 — xem nguyên văn bảng mệnh đề ở trang 3 của đề gốc.', items: [['Mệnh đề a) trong đề gốc.', true, 'Đúng: tan 60° = √3.'], ['Mệnh đề b) trong đề gốc.', false, 'Sai: sin(A + C) = sin 120° = √3/2, còn cos B = 1/2.'], ['Mệnh đề c) trong đề gốc.', true, 'Đúng: AC² = 2² + 3² − 2·2·3·cos 60° = 7.'], ['Mệnh đề d) trong đề gốc.', false, 'Sai: diện tích tam giác là 3√3/2.']] }
    ],
    short: [],
    essay: [
      { title: 'Phần III · Câu 1', question: 'Xem nguyên văn câu 1 trên trang 3 của đề gốc.', solution: 'A ∩ B = [−4; 2).' },
      { title: 'Phần III · Câu 2', question: 'Xem nguyên văn câu 2 trên trang 3 của đề gốc.', solution: 'Số học sinh giỏi ít nhất một môn: 20 + 17 + 14 − 6 − 5 − 4 + 1 = 37.' },
      { title: 'Phần III · Câu 3', question: 'Xem nguyên văn câu 3 trên trang 3 của đề gốc.', solution: 'Vẽ đường thẳng y = 2x bằng nét liền; miền nghiệm là nửa mặt phẳng y ≤ 2x, gồm cả đường thẳng.' },
      { title: 'Phần III · Câu 4', question: 'Xem nguyên văn câu 4 trên trang 3 của đề gốc.', solution: 'sin A = 4/5; diện tích tam giác bằng (7·5·4/5)/2 = 14. Theo định lý cos, a = √(7² + 5² − 2·7·5·3/5) = 4√2. Do đó hₐ = 2·14/(4√2) = 7√2/2.' },
      { title: 'Phần III · Câu 5', question: 'Xem nguyên văn câu 5 trên trang 3 của đề gốc.', solution: 'Gọi x, y lần lượt là số tấn trục sắt và đinh ốc. Ràng buộc: 3x + y ≤ 6, x + y ≤ 4, x ≥ 0, y ≥ 0. Tối đa hóa 2x + y. Giá trị lớn nhất là 5 triệu đồng tại (x, y) = (1, 3).' },
      { title: 'Phần III · Câu 6', question: 'Xem nguyên văn câu 6 trên trang 3 của đề gốc.', solution: 'Hai tam giác BDE và BAC đồng dạng với tỉ số cos B. Từ S(ABC) = 9S(BDE), suy ra cos B = 1/3. DE = AC·cos B nên AC = 6√2. Vì sin B = 2√2/3, bán kính đường tròn ngoại tiếp R = AC/(2sin B) = 9/2.' }
    ]
  }
];
