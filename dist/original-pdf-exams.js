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
    shortUnit: 0.5,
    short: [
      { text: 'Phần III · Câu 1 — nhập tập A ∩ B (xem đề gốc trang 3).', answer: '[−4;2)', acceptedAnswers: ['[-4;2)', '[−4,2)', '[-4,2)'], explain: 'A ∩ B = [−4; 2).' },
      { text: 'Phần III · Câu 2 — nhập số học sinh giỏi ít nhất một môn (xem đề gốc trang 3).', answer: '37', explain: '20 + 17 + 14 − 6 − 5 − 4 + 1 = 37.' },
      { text: 'Phần III · Câu 3 — nhập bất phương trình dạng y ≤ ... biểu diễn miền nghiệm (xem đề gốc trang 3).', answer: 'y≤2x', acceptedAnswers: ['y <= 2x', 'y<=2x', '2x−y≥0', '2x-y>=0'], explain: 'Vẽ đường thẳng y = 2x bằng nét liền; lấy nửa mặt phẳng y ≤ 2x, gồm cả đường thẳng.' },
      { text: 'Phần III · Câu 4 — nhập độ dài đường cao hₐ (xem đề gốc trang 3).', answer: '7√2/2', acceptedAnswers: ['7sqrt2/2', '7*sqrt(2)/2', '7/√2', '7/sqrt(2)', '4.949747'], explain: 'sin A = 4/5, S = 14, a = 4√2 nên hₐ = 2S/a = 7√2/2.' },
      { text: 'Phần III · Câu 5 — nhập số tấn trục sắt và đinh ốc theo dạng (trục sắt; đinh ốc) (xem đề gốc trang 3).', answer: '(1;3)', acceptedAnswers: ['1;3', '(1,3)', '1,3', '1 3'], explain: '3x + y ≤ 6, x + y ≤ 4, x,y ≥ 0. Lợi nhuận 2x + y đạt 5 triệu đồng tại x = 1 tấn trục sắt, y = 3 tấn đinh ốc.' },
      { text: 'Phần III · Câu 6 — nhập bán kính đường tròn ngoại tiếp (xem đề gốc trang 3).', answer: '4.5', acceptedAnswers: ['9/2'], explain: 'S(BDE)/S(ABC) = cos² B = 1/9, do đó cos B = 1/3. Từ DE = AC·cos B suy ra AC = 6√2; R = AC/(2sin B) = 9/2.' }
    ]
  }
];
