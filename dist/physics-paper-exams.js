// Năm đề Vật lí từ thư mục tailieu. Nội dung đề được hiển thị bằng ảnh trang gốc;
// dữ liệu dưới đây chỉ tạo phiếu trả lời và chấm theo đáp án của tài liệu nguồn.
(() => {
  const letterIndex = letter => 'ABCD'.indexOf(letter);
  const makeMc = keys => keys.map((letter, index) => [
    `Chọn phương án cho Câu ${index + 1} trên đề nguyên bản.`,
    ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'],
    letterIndex(letter),
    `Đáp án theo tài liệu nguồn: ${letter}.`
  ]);
  const makeTf = rows => rows.map((row, index) => ({
    stem: `Chọn Đúng hoặc Sai cho bốn ý của Câu ${index + 1} trên đề nguyên bản.`,
    items: row.map((answer, itemIndex) => [
      `Ý ${'abcd'[itemIndex]}) trong đề nguyên bản.`,
      answer,
      `Theo đáp án của tài liệu nguồn, ý ${'abcd'[itemIndex]}) là ${answer ? 'Đúng' : 'Sai'}.`
    ])
  }));
  const makeShort = (answers, explanations = []) => answers.map((answer, index) => ({
    question: `Nhập đáp án Câu ${index + 1} của Phần III trên đề nguyên bản.`,
    answer,
    explanation: explanations[index] || `Đáp án theo tài liệu nguồn: ${answer}.`
  }));
  const source = (name, url) => ({
    school: name,
    province: '',
    year: '',
    url,
    note: 'Nội dung, công thức và hình minh họa lấy nguyên bản từ tài liệu Word do người dùng cung cấp; chỉ loại dấu lộ đáp án trên bản thi.'
  });

  window.physicsPaperExams = [
    {
      id: 'vatli-10-tailieu-so-5',
      title: 'Vật lí 10 - Kiểm tra giữa kì I - Số 5',
      description: 'Đề tương tác nguyên bản: 18 câu nhiều lựa chọn, 4 câu đúng/sai, 6 câu trả lời ngắn và 3 bài tự luận.',
      subject: 'physics', minutes: 45, addedAt: '2026-11-10T12:05:00+07:00',
      paperExam: true, pageCount: 6, paperBase: 'supplied/physics-tailieu-05',
      source: source('Kiểm tra giữa kì I - Số 5', 'supplied/physics-tailieu-05.pdf'),
      mcUnit: 0.25, shortUnit: 0.25, essayPoints: 3,
      questions: makeMc(['D','A','C','C','C','C','A','D','C','D','A','D','B','D','B','C','B','C']),
      tf: makeTf([
        [false, false, true, true],
        [false, true, true, false],
        [true, false, true, false],
        [false, true, true, false]
      ]),
      short: makeShort(['60','16','13','12.5','8.94','11'], [
        'Đồng hồ chỉ 60 km/h.',
        '54 km/h = 15 m/s; hành khách đi cùng chiều 1 m/s nên vận tốc đối với mặt đường là 16 m/s.',
        'Độ dịch chuyển là √(5² + 12²) = 13 km.',
        'v₀ = 5 m/s, v = 3 m/s; t = 2s/(v₀+v) = 100/8 = 12,5 s.',
        'v₀ = √(2gh) = √80 ≈ 8,94 m/s.',
        'Giải hai phương trình rơi tự do cho thời điểm gặp nhau thu được quãng đường viên A đã rơi xấp xỉ 11 m.'
      ]),
      essay: [
        { title: 'Bài 1 (1 điểm)', points: 1, question: 'Bạn Hương đi học từ nhà đến trường theo lộ trình ABC như hình trong đề. AB = 400 m trong 6 phút, BC = 300 m trong 4 phút. Tính tốc độ trung bình và vận tốc trung bình khi đi từ nhà đến trường.', solution: 'Tổng quãng đường 700 m, tổng thời gian 600 s nên tốc độ trung bình 7/6 ≈ 1,17 m/s. Độ dịch chuyển AC = 500 m nên độ lớn vận tốc trung bình 5/6 ≈ 0,83 m/s, hướng từ A đến C.' },
        { title: 'Bài 2 (1 điểm)', points: 1, question: 'a) Ca nô có tốc độ tối đa 18 km/h trong nước yên lặng, chạy ngang sông có dòng chảy Bắc–Nam 5 m/s. Tính vận tốc tối đa đối với bờ và hướng chuyển động. b) Ô tô đi 6 km về Tây, 4 km về Nam rồi 3 km về Đông. Xác định độ dịch chuyển.', solution: 'a) 5 m/s = 18 km/h nên tốc độ đối với bờ là 18√2 ≈ 25,46 km/h, lệch 45° theo chiều dòng chảy. b) Độ dịch chuyển có các thành phần 3 km về Tây và 4 km về Nam, độ lớn 5 km, hướng Tây Nam.' },
        { title: 'Bài 3 (1 điểm)', points: 1, question: 'Một vật rơi tự do từ độ cao h. Quãng đường rơi trong giây cuối là 45 m, lấy g = 10 m/s². Tìm h và vận tốc ngay trước khi chạm đất.', solution: 'Gọi thời gian rơi là n giây: Δs cuối = 5(2n−1) = 45 nên n = 5 s. h = ½gt² = 125 m và v = gt = 50 m/s.' }
      ]
    },
    {
      id: 'vatli-10-tailieu-so-4',
      title: 'Vật lí 10 - Kiểm tra giữa kì I - Số 4',
      description: 'Đề tương tác nguyên bản: 18 câu nhiều lựa chọn, 4 câu đúng/sai, 6 câu trả lời ngắn và 4 bài tự luận.',
      subject: 'physics', minutes: 45, addedAt: '2026-11-10T12:04:00+07:00',
      paperExam: true, pageCount: 6, paperBase: 'supplied/physics-tailieu-04',
      source: source('Kiểm tra giữa kì I - Số 4', 'supplied/physics-tailieu-04.pdf'),
      mcUnit: 0.25, shortUnit: 0.25, essayPoints: 3,
      questions: makeMc(['B','C','A','C','D','B','C','C','B','A','A','C','A','D','D','B','D','D']),
      tf: makeTf([
        [true, true, true, false],
        [false, true, true, false],
        [true, false, false, true],
        [true, false, true, false]
      ]),
      short: makeShort(['2.8','40','0.33','10','40','200'], [
        'Sai số tuyệt đối là 2,3 + 0,5 = 2,8 g.',
        'Người anh bơi 20 m đến cuối bể rồi 20 m quay lại: 40 m.',
        'Tỉ số độ dốc tan30°/tan60° = 1/3 ≈ 0,33.',
        'Vận tốc có độ lớn 5 m/s nên trong 2 s vật đi 10 m.',
        'Hai xe gặp tại x = 40 km, cũng là khoảng cách từ vị trí xuất phát của xe 2.',
        'Độ lớn vận tốc tổng hợp √(200²+10²) ≈ 200 m/s khi làm tròn phần nguyên.'
      ]),
      essay: [
        { title: 'Câu 1 (1 điểm)', points: 1, question: 'Dựa vào đồ thị độ dịch chuyển–thời gian trong đề: a) tính quãng đường và độ dịch chuyển từ 0 đến 5 s; b) tính vận tốc trung bình từ 1 s đến 2,5 s.', solution: 'Từ đồ thị: d đi 0→4→−2→−2→0 cm nên quãng đường 12 cm và độ dịch chuyển 0 cm. Từ 1 s đến 2,5 s: vtb = (−2−4)/(2,5−1) = −4 cm/s.' },
        { title: 'Câu 2 (1 điểm)', points: 1, question: 'Ca nô đi thẳng qua sông rộng 0,10 km; tốc độ trong nước yên lặng 4,0 km/h, dòng chảy 3,0 km/h. Tính vận tốc đối với bờ và thời gian qua sông.', solution: 'Vận tốc đối với bờ có độ lớn √(4²+3²)=5 km/h. Thành phần qua sông là 4 km/h nên thời gian 0,10/4=0,025 h=1,5 phút.' },
        { title: 'Câu 3 (0,5 điểm)', points: 0.5, question: 'Quả cầu bắt đầu lăn từ đỉnh dốc dài 150 m, sau 15 s đến chân dốc; tiếp tục đi ngang 75 m rồi dừng. Hai giai đoạn đều biến đổi đều. Tính tổng thời gian.', solution: 'Giai đoạn 1: v = 2s/t = 20 m/s. Giai đoạn 2: vận tốc trung bình 10 m/s nên t₂ = 75/10 = 7,5 s. Tổng thời gian 22,5 s.' },
        { title: 'Câu 4 (0,5 điểm)', points: 0.5, question: 'Vật rơi tự do, trong giây thứ 2 rơi được 14,73 m. Tính gia tốc tại nơi thí nghiệm.', solution: 'Quãng đường trong giây thứ 2 là ½g(2²−1²)=1,5g=14,73 nên g=9,82 m/s².' }
      ]
    },
    {
      id: 'vatli-10-tailieu-so-3',
      title: 'Vật lí 10 - Kiểm tra giữa kì I - Số 3 (minh họa của Bộ)',
      description: 'Đề tương tác nguyên bản: 18 câu nhiều lựa chọn, 4 câu đúng/sai, 6 câu trả lời ngắn và 4 bài tự luận.',
      subject: 'physics', minutes: 45, addedAt: '2026-11-10T12:03:00+07:00',
      paperExam: true, pageCount: 4, paperBase: 'supplied/physics-tailieu-03',
      source: source('Đề minh họa của Bộ - Kiểm tra giữa kì I - Số 3', 'supplied/physics-tailieu-03.pdf'),
      mcUnit: 0.25, shortUnit: 0.25, essayPoints: 3,
      questions: makeMc(['B','D','C','A','A','B','A','C','A','C','A','B','D','A','C','D','B','D']),
      tf: makeTf([
        [false, true, false, true],
        [true, false, true, false],
        [false, true, true, true],
        [true, false, true, true]
      ]),
      short: makeShort(['2','60','4','0.33','0.75','0.3']),
      essay: [
        { title: 'Câu 1 (1 điểm)', points: 1, question: 'Xe A chạy về Tây 40 km/h, xe B chạy về Bắc 60 km/h. Tính vận tốc xe B đối với người ngồi trên xe A.', solution: 'Hai thành phần vuông góc nên vBA = √(40²+60²) ≈ 72,11 km/h, hướng Tây Bắc.' },
        { title: 'Câu 2 (1 điểm)', points: 1, question: 'Xác định phương trình chuyển động và độ lớn vận tốc của hai chuyển động trên đồ thị Hình 7.2 trong đề.', solution: 'Vật (1): d₁=60−10t (km), tốc độ 10 km/h. Vật (2): d₂=12t (km), tốc độ 12 km/h.' },
        { title: 'Câu 3 (0,5 điểm)', points: 0.5, question: 'Lúc 7 giờ 15, xe máy từ A chạy 36 km/h đuổi xe đạp 5 m/s đã đi trước 36 km. Hai người gặp nhau lúc mấy giờ?', solution: '5 m/s = 18 km/h. Giải 36t = 36 + 18t được t=2 h, nên gặp nhau lúc 9 giờ 15 phút.' },
        { title: 'Câu 4 (0,5 điểm)', points: 0.5, question: 'Tính quãng đường vật rơi tự do đi trong giây thứ tư và độ tăng vận tốc trong giây đó, với g=9,8 m/s².', solution: 'Δs₄=½g(4²−3²)=34,3 m. Độ tăng vận tốc Δv=g·1=9,8 m/s.' }
      ]
    },
    {
      id: 'vatli-10-tailieu-de-2',
      title: 'Vật lí 10 - Ôn tập kiểm tra giữa kì I - Số 2',
      description: 'Đề tương tác nguyên bản: 12 câu nhiều lựa chọn, 2 câu đúng/sai, 3 câu trả lời ngắn và 2 bài tự luận.',
      subject: 'physics', minutes: 45, addedAt: '2026-11-10T12:02:00+07:00',
      paperExam: true, pageCount: 4, paperBase: 'supplied/physics-tailieu-02',
      source: source('Ôn tập kiểm tra giữa kì I - Số 2', 'supplied/physics-tailieu-02.pdf'),
      mcUnit: 0.25, shortUnit: 0.5, essayPoints: 3.5,
      questions: makeMc(['C','A','C','B','A','B','B','A','B','B','A','B']),
      tf: makeTf([[false,true,true,true],[true,true,true,false]]),
      short: makeShort(['25','5','25']),
      essay: [
        { title: 'Bài 1 (1,5 điểm)', points: 1.5, question: 'Từ quan hệ hồi quy h=k·t² với k=(4,905±0,025) m/s²: a) xác định giá trị trung bình và sai số tuyệt đối của g; b) tính sai số tương đối và nhận xét.', solution: 'g=2k=9,81 m/s²; Δg=2Δk=0,05 m/s²; δg=0,05/9,81≈0,51%, phép đo có độ chính xác rất cao.' },
        { title: 'Bài 2 (2 điểm)', points: 2, question: 'Xe A chuyển động đều 20 m/s. Khi A vượt B, xe B khởi hành từ nghỉ nhanh dần đều a=2 m/s². Viết phương trình, tìm thời điểm/vị trí gặp lại và khoảng cách cực đại trước khi B đuổi kịp A.', solution: 'dA=20t; dB=t². Gặp lại khi 20t=t²: t=20 s, d=400 m. Khoảng cách Δd=20t−t² lớn nhất tại t=10 s, bằng 100 m.' }
      ]
    },
    {
      id: 'vatli-10-tailieu-de-1',
      title: 'Vật lí 10 - Ôn tập kiểm tra giữa kì I - Số 1',
      description: 'Đề tương tác nguyên bản: 12 câu nhiều lựa chọn, 2 câu đúng/sai, 3 câu trả lời ngắn và 2 bài tự luận.',
      subject: 'physics', minutes: 45, addedAt: '2026-11-10T12:01:00+07:00',
      paperExam: true, pageCount: 5, paperBase: 'supplied/physics-tailieu-01',
      source: source('Ôn tập kiểm tra giữa kì I - Số 1', 'supplied/physics-tailieu-01.pdf'),
      mcUnit: 0.25, shortUnit: 0.5, essayPoints: 3.5,
      questions: makeMc(['C','B','A','C','C','B','C','A','B','C','B','A']),
      tf: makeTf([[true,true,false,true],[true,true,true,false]]),
      short: makeShort(['18','12.5','3']),
      essay: [
        { title: 'Bài 1 (1,5 điểm)', points: 1.5, question: 'Đo chiều dài bàn bằng thước có độ chia nhỏ nhất 1 mm, năm kết quả: 120,1; 120,2; 119,9; 120,0; 119,8 cm. Tính giá trị trung bình, sai số ngẫu nhiên trung bình và viết kết quả phép đo.', solution: 'L̄=120,0 cm; sai số ngẫu nhiên trung bình 0,12 cm; sai số dụng cụ 0,1 cm; ΔL=0,22≈0,2 cm. Kết quả L=(120,0±0,2) cm.' },
        { title: 'Bài 2 (2 điểm)', points: 2, question: 'Đoàn tàu rời ga nhanh dần đều từ nghỉ với a=0,2 m/s². a) Tính vận tốc sau quãng đường 250 m. b) Tính thời gian đạt 54 km/h và quãng đường trong thời gian đó.', solution: 'a) v²=2as=100 nên v=10 m/s. b) 54 km/h=15 m/s; t=15/0,2=75 s; s=½·0,2·75²=562,5 m.' }
      ]
    }
  ];
})();
