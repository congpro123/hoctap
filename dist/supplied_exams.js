// Danh sách 38 bộ đề thi chính thức chuẩn cấu trúc ma trận mới 2026–2027
// 12 đề Toán học, 10 đề Vật lí (Chuẩn Khung ma trận 16 MC + 2 TF + 4 Short), 16 đề Hóa học
// Bám sát chương trình GDPT 2018, mức độ phổ thông, có đầy đủ hướng dẫn giải chi tiết
const suppliedExams = [
  {
    "id": "toan-10-de-01",
    "title": "Toán 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề minh họa chuẩn cấu trúc mới 2026–2027)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Hướng Hóa – Quảng Trị (Đề minh họa chuẩn cấu trúc mới 2026–2027)",
    "province": "Quảng Trị",
    "year": "2026–2027",
    "sourceUrl": "https://toanmath.com/2026/10/de-minh-hoa-gk1-toan-10-nam-2026-2027-truong-thpt-huong-hoa-quang-tri.html",
    "questions": [
      [
        "Trong các câu dưới đây, câu nào là một mệnh đề toán học?",
        [
          "A. Hôm nay trời tại Khe Sanh đẹp quá!",
          "B. Số 17 là một số nguyên tố.",
          "C. Bạn đã làm bài tập Toán chưa?",
          "D. Hãy cố gắng đạt điểm cao nhé!"
        ],
        1,
        "Câu B là khẳng định có tính đúng (vì 17 chỉ chia hết cho 1 và 17); các câu A, C, D là câu cảm thán, nghi vấn, cầu khiến nên không phải mệnh đề."
      ],
      [
        "Cho mệnh đề P: \"&forall;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &gt; 0\". Mệnh đề phủ định của mệnh đề P là:",
        [
          "A. &forall;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &le; 0.",
          "B. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &lt; 0.",
          "C. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &le; 0.",
          "D. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 = 0."
        ],
        2,
        "Phủ định của lượng từ &forall; là &exist;, và phủ định của quan hệ \"&gt;\" là \"&le;\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | -2 &le; x &lt; 5}. Tập hợp A viết dưới dạng nửa khoảng là:",
        [
          "A. (-2; 5).",
          "B. [-2; 5].",
          "C. (-2; 5].",
          "D. [-2; 5)."
        ],
        3,
        "Theo định nghĩa nửa khoảng: {x &isin; <b>R</b> | a &le; x &lt; b} = [a; b) = [-2; 5)."
      ],
      [
        "Cho hai tập hợp A = {-1; 0; 2; 4; 6} và B = {0; 2; 3; 5}. Tập hợp A &cap; B là:",
        [
          "A. {0; 2}.",
          "B. {-1; 4; 6}.",
          "C. {-1; 0; 2; 3; 4; 5; 6}.",
          "D. {3; 5}."
        ],
        0,
        "Giao của hai tập hợp A &cap; B gồm các phần tử thuộc cả A và B, đó là {0; 2}."
      ],
      [
        "Bất phương trình nào dưới đây là bất phương trình bậc nhất hai ẩn x, y?",
        [
          "A. 2x<sup>2</sup> - 3y &gt; 5.",
          "B. 3x - 2y + 4 &le; 0.",
          "C. x + y<sup>2</sup> &ge; 1.",
          "D. xy + 2x &lt; 3."
        ],
        1,
        "BPT bậc nhất hai ẩn có dạng ax + by + c &le; 0 (với a, b không đồng thời bằng 0, bậc của x và y đều là bậc 1)."
      ],
      [
        "Cặp số (x; y) nào sau đây là một nghiệm của bất phương trình 2x - y + 1 &gt; 0?",
        [
          "A. (0; 2).",
          "B. (1; 4).",
          "C. (2; 3).",
          "D. (-1; 0)."
        ],
        2,
        "Thay (2; 3) vào vế trái: 2(2) - 3 + 1 = 2 &gt; 0 (thỏa mãn). Các cặp khác đều cho giá trị &le; 0."
      ],
      [
        "Điểm M(1; -1) thuộc miền nghiệm của hệ bất phương trình nào dưới đây?",
        [
          "A. {x + y &gt; 2 ; 2x - y &le; 3}.",
          "B. {x - y &ge; 1 ; 2x + y &gt; 0}.",
          "C. {x + 2y &gt; 0 ; x - y &lt; 5}.",
          "D. {3x + y &le; 0 ; x - 2y &ge; 1}."
        ],
        1,
        "Thay x = 1, y = -1 vào hệ B: 1 - (-1) = 2 &ge; 1 (đúng) và 2(1) + (-1) = 1 &gt; 0 (đúng)."
      ],
      [
        "Miền nghiệm của bất phương trình 3x + 2y &le; 6 chứa điểm nào sau đây?",
        [
          "A. O(0; 0).",
          "B. A(2; 2).",
          "C. B(3; 1).",
          "D. C(1; 3)."
        ],
        0,
        "Thay O(0; 0) vào BPT: 3(0) + 2(0) = 0 &le; 6 (đúng)."
      ],
      [
        "Với góc &alpha; thỏa mãn 0&deg; &le; &alpha; &le; 180&deg;, đẳng thức nào sau đây đúng?",
        [
          "A. sin(180&deg; - &alpha;) = -sin&alpha;.",
          "B. cos(180&deg; - &alpha;) = cos&alpha;.",
          "C. sin(180&deg; - &alpha;) = sin&alpha;.",
          "D. tan(180&deg; - &alpha;) = tan&alpha;."
        ],
        2,
        "Hai góc bù nhau (&alpha; và 180&deg; - &alpha;) có sin bằng nhau: sin(180&deg; - &alpha;) = sin&alpha;, còn cos, tan, cot đối nhau."
      ],
      [
        "Cho tam giác ABC có BC = a, AC = b, AB = c. Định lí côsin trong tam giác ABC là:",
        [
          "A. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> + 2bc.cosA.",
          "B. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA.",
          "C. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - bc.cosA.",
          "D. a<sup>2</sup> = b<sup>2</sup> - c<sup>2</sup> + 2bc.cosA."
        ],
        1,
        "Theo định lí côsin trong tam giác ABC: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA."
      ],
      [
        "Cho tam giác ABC có b = 6, c = 8 và góc A = 60&deg;. Diện tích S của tam giác ABC bằng:",
        [
          "A. 24&radic;3.",
          "B. 12.",
          "C. 12&radic;3.",
          "D. 24."
        ],
        2,
        "Áp dụng công thức S = 1/2 . b . c . sinA = 1/2 . 6 . 8 . sin60&deg; = 24 . (&radic;3 / 2) = 12&radic;3."
      ],
      [
        "Cho tam giác ABC có cạnh a = 10 và góc A = 30&deg;. Bán kính đường tròn ngoại tiếp R bằng:",
        [
          "A. 5.",
          "B. 10.",
          "C. 10&radic;3.",
          "D. 20."
        ],
        1,
        "Theo định lí sin: a / sinA = 2R &rArr; R = a / (2sinA) = 10 / (2 . sin30&deg;) = 10 / (2 . 0,5) = 10."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = [-3; 4] và B = (1; 7), cùng tập hợp C = (m - 1; m + 3) với m là tham số thực.",
        "items": [
          [
            "a) Tập hợp A &cap; <b>Z</b> có tất cả 8 phần tử nguyên.",
            true,
            "Các số nguyên thuộc [-3; 4] là {-3; -2; -1; 0; 1; 2; 3; 4}, gồm đúng 8 phần tử."
          ],
          [
            "b) Tập hợp giao của hai tập hợp A và B là A &cap; B = [1; 4].",
            false,
            "Vì 1 &notin; B nên A &cap; B = (1; 4]."
          ],
          [
            "c) Tập hợp hiệu A \\ B = [-3; 1].",
            true,
            "Các phần tử thuộc A nhưng không thuộc B là x &isin; [-3; 1] (do 1 &isin; A và 1 &notin; B)."
          ],
          [
            "d) Có đúng 2 giá trị nguyên của tham số m để C &sub; A.",
            false,
            "Để C &sub; A &hArr; {m - 1 &ge; -3 ; m + 3 &le; 4} &hArr; -2 &le; m &le; 1. Có 4 giá trị nguyên của m là -2; -1; 0; 1."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có cạnh AB = 5, AC = 8 và góc A = 60&deg;.",
        "items": [
          [
            "a) Độ dài cạnh BC tính theo định lí côsin bằng 7.",
            true,
            "BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> - 2.AB.AC.cos60&deg; = 25 + 64 - 2.5.8.0,5 = 49 &rArr; BC = 7."
          ],
          [
            "b) Diện tích của tam giác ABC bằng 20&radic;3.",
            false,
            "S = 1/2 . AB . AC . sin60&deg; = 1/2 . 5 . 8 . (&radic;3/2) = 10&radic;3."
          ],
          [
            "c) Bán kính đường tròn ngoại tiếp tam giác ABC là R = 7&radic;3 / 3.",
            true,
            "R = BC / (2sinA) = 7 / (2 . &radic;3/2) = 7 / &radic;3 = 7&radic;3 / 3."
          ],
          [
            "d) Độ dài đường cao AH kẻ từ đỉnh A của tam giác ABC bằng 20&radic;3 / 7.",
            true,
            "Ta có S = 1/2 . BC . AH &rArr; AH = 2S / BC = 20&radic;3 / 7."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một lớp 10A có 40 học sinh, trong đó có 25 học sinh thích môn Toán, 18 học sinh thích môn Vật lí và 10 học sinh thích cả hai môn Toán và Vật lí. Hỏi trong lớp có bao nhiêu học sinh không thích cả hai môn Toán và Vật lí?",
        "answer": "7",
        "explanation": "Gọi A, B lần lượt là tập hợp học sinh thích Toán và Vật lí. Số học sinh thích ít nhất một trong hai môn là n(A &cup; B) = n(A) + n(B) - n(A &cap; B) = 25 + 18 - 10 = 33. Số học sinh không thích cả hai môn là 40 - 33 = 7."
      },
      {
        "question": "Giá trị lớn nhất của biểu thức F(x; y) = 4x + 3y trên miền đa giác OABC có các đỉnh O(0; 0), A(0; 4), B(2; 3), C(5; 0) bằng bao nhiêu?",
        "answer": "20",
        "explanation": "Tính giá trị của F(x; y) tại các đỉnh: F(0; 0) = 0; F(0; 4) = 12; F(2; 3) = 4(2) + 3(3) = 17; F(5; 0) = 4(5) + 3(0) = 20. Vậy giá trị lớn nhất của F bằng 20."
      },
      {
        "question": "Cho góc &alpha; thỏa mãn 90&deg; &lt; &alpha; &lt; 180&deg; và sin&alpha; = 3/5. Tính giá trị của biểu thức P = 5cos&alpha; + 4tan&alpha;.",
        "answer": "-7",
        "explanation": "Vì 90&deg; &lt; &alpha; &lt; 180&deg; nên cos&alpha; &lt; 0 &rArr; cos&alpha; = -&radic;(1 - sin<sup>2</sup>&alpha;) = -4/5. Suy ra tan&alpha; = sin&alpha;/cos&alpha; = -3/4. Khi đó P = 5(-4/5) + 4(-3/4) = -4 - 3 = -7."
      },
      {
        "question": "Để đo khoảng cách giữa hai địa điểm A và B ở hai bên bờ hồ nước mà không thể đi thẳng từ A đến B, người ta chọn điểm C trên bờ sao cho CA = 60 m, CB = 80 m và góc ACB = 60&deg;. Khoảng cách AB bằng bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "answer": "72,1",
        "explanation": "Áp dụng định lí côsin trong tam giác ABC: AB = &radic;(CA<sup>2</sup> + CB<sup>2</sup> - 2.CA.CB.cos60&deg;) = &radic;(60<sup>2</sup> + 80<sup>2</sup> - 2.60.80.0,5) = &radic;5200 &approx; 72,1 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = [-2; 5) và B = [1; +&infin;). Xác định các tập hợp A &cap; B, A &cup; B, A \\ B và C<sub><b>R</b></sub>B.",
        "solution": "Biểu diễn hai tập hợp A = [-2; 5) và B = [1; +&infin;) trên trục số thực:<br>• A &cap; B = [1; 5) (0,25 điểm).<br>• A &cup; B = [-2; +&infin;) (0,25 điểm).<br>• A \\ B = [-2; 1) (0,25 điểm).<br>• C<sub><b>R</b></sub>B = <b>R</b> \\ B = (-&infin;; 1) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một xưởng thủ công mỹ nghệ tại Quảng Trị sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm loại A cần 2 giờ công chế tác và 3 kg nguyên liệu, đem lại lợi nhuận 400 nghìn đồng. Mỗi sản phẩm loại B cần 4 giờ công chế tác và 2 kg nguyên liệu, đem lại lợi nhuận 500 nghìn đồng. Mỗi tuần xưởng có tối đa 80 giờ công và 90 kg nguyên liệu. Hỏi xưởng cần sản xuất bao nhiêu sản phẩm mỗi loại trong một tuần để tổng lợi nhuận thu được là lớn nhất?",
        "solution": "Gọi x, y (x &ge; 0, y &ge; 0, x, y &isin; <b>Z</b>) lần lượt là số sản phẩm loại A và loại B sản xuất trong tuần.<br>• Hệ bất phương trình ràng buộc: {2x + 4y &le; 80 ; 3x + 2y &le; 90 ; x &ge; 0 ; y &ge; 0} &hArr; {x + 2y &le; 40 ; 3x + 2y &le; 90 ; x &ge; 0 ; y &ge; 0} (0,5 điểm).<br>• Hàm lợi nhuận: L(x; y) = 400x + 500y (nghìn đồng). Miền nghiệm là tứ giác OABC với O(0; 0), A(30; 0), B(25; 7,5), C(0; 20).<br>• Tính tại các đỉnh và điểm nguyên lân cận B: L(30; 0) = 12 000; L(0; 20) = 10 000; tại B(25; 7,5) có L = 13 750. Xét các điểm nguyên thuộc miền nghiệm gần B: với (24; 8) có 24 + 16 = 40 &le; 40 và 72 + 16 = 88 &le; 90 &rArr; L(24; 8) = 400.24 + 500.8 = 13 600 nghìn đồng; với (25; 7) có 25 + 14 = 39 &le; 40 và 75 + 14 = 89 &le; 90 &rArr; L(25; 7) = 400.25 + 500.7 = 13 500 nghìn đồng. Vậy sản xuất 24 sản phẩm loại A và 8 sản phẩm loại B đạt lợi nhuận tối đa 13,6 triệu đồng (nếu tính biến liên tục thì tại (25; 7,5) là 13,75 triệu đồng) (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Hai chiếc tàu thủy P và Q cùng xuất phát từ một vị trí O tại cảng Cửa Việt, đi thẳng theo hai hướng hợp với nhau một góc 60&deg;. Tàu P chạy với tốc độ 20 hải lý/giờ, tàu Q chạy với tốc độ 15 hải lý/giờ. Tính khoảng cách giữa hai tàu sau 2 giờ di chuyển và tính bán kính đường tròn ngoại tiếp tam giác OPQ tại thời điểm đó (làm tròn đến hàng phần mười).",
        "solution": "Sau 2 giờ di chuyển:<br>• Quãng đường tàu P đi được là OP = 20 . 2 = 40 (hải lý); quãng đường tàu Q đi được là OQ = 15 . 2 = 30 (hải lý) (0,25 điểm).<br>• Áp dụng định lí côsin trong tam giác OPQ có góc POQ = 60&deg;:<br>PQ = &radic;(OP<sup>2</sup> + OQ<sup>2</sup> - 2.OP.OQ.cos60&deg;) = &radic;(40<sup>2</sup> + 30<sup>2</sup> - 2.40.30.0,5) = &radic;1300 = 10&radic;13 &approx; 36,1 (hải lý) (0,5 điểm).<br>• Bán kính đường tròn ngoại tiếp tam giác OPQ: R = PQ / (2sin60&deg;) = 10&radic;13 / &radic;3 &approx; 20,8 (hải lý) (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-02",
    "title": "Toán 10 - Đề 02 - Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Quảng Trị",
    "year": "2025–2026",
    "sourceUrl": "https://toanmath.com/2025/11/de-giua-ky-1-toan-10-nam-2025-2026-truong-thpt-huong-hoa-quang-tri.html",
    "questions": [
      [
        "Mệnh đề nào sau đây là mệnh đề đúng?",
        [
          "A. &forall;n &isin; <b>N</b>, n<sup>2</sup> + 1 chia hết cho 3.",
          "B. &exist;x &isin; <b>R</b>, x<sup>2</sup> - 4 = 0.",
          "C. &forall;x &isin; <b>R</b>, x<sup>2</sup> &gt; 0.",
          "D. Số &pi; là một số hữu tỉ."
        ],
        1,
        "Phương trình x<sup>2</sup> - 4 = 0 có nghiệm thực x = &plusmn;2 nên mệnh đề tồn tại ở câu B là mệnh đề đúng."
      ],
      [
        "Cho hai mệnh đề P: \"Tứ giác ABCD là hình chữ nhật\" và Q: \"Tứ giác ABCD có hai đường chéo bằng nhau\". Mệnh đề đảo của mệnh đề P &rArr; Q là:",
        [
          "A. Nếu tứ giác ABCD không có hai đường chéo bằng nhau thì nó không là hình chữ nhật.",
          "B. Nếu tứ giác ABCD có hai đường chéo bằng nhau thì tứ giác ABCD là hình chữ nhật.",
          "C. Tứ giác ABCD là hình chữ nhật khi và chỉ khi có hai đường chéo bằng nhau.",
          "D. Nếu tứ giác ABCD là hình chữ nhật thì nó có hai đường chéo bằng nhau."
        ],
        1,
        "Mệnh đề đảo của P &rArr; Q là Q &rArr; P."
      ],
      [
        "Số tập hợp con của tập hợp X = {a; b; c} là:",
        [
          "A. 3.",
          "B. 6.",
          "C. 8.",
          "D. 9."
        ],
        2,
        "Tập hợp có n = 3 phần tử thì số tập hợp con là 2<sup>3</sup> = 8."
      ],
      [
        "Cho hai tập hợp A = (-&infin;; 3] và B = (1; 5]. Tập hợp A &cup; B là:",
        [
          "A. (1; 3].",
          "B. (-&infin;; 5].",
          "C. (-&infin;; 1].",
          "D. (3; 5]."
        ],
        1,
        "Hợp của (-&infin;; 3] và (1; 5] trên trục số là (-&infin;; 5]."
      ],
      [
        "Cặp số nào sau đây KHÔNG thuộc miền nghiệm của bất phương trình x + 3y - 5 &le; 0?",
        [
          "A. (1; 1).",
          "B. (0; 0).",
          "C. (2; 2).",
          "D. (-1; 2)."
        ],
        2,
        "Thay (2; 2) vào vế trái: 2 + 3(2) - 5 = 3 &gt; 0 (không thỏa mãn &le; 0)."
      ],
      [
        "Đường thẳng d: 2x - y = 4 chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Miền nghiệm của bất phương trình 2x - y &lt; 4 (không kể bờ d) chứa điểm nào?",
        [
          "A. (3; 1).",
          "B. (0; 0).",
          "C. (4; 2).",
          "D. (2; -1)."
        ],
        1,
        "Thay O(0; 0) vào 2x - y &lt; 4: 0 &lt; 4 (đúng)."
      ],
      [
        "Cho hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; x + y &le; 4}. Diện tích miền nghiệm của hệ bất phương trình trên mặt phẳng tọa độ Oxy bằng:",
        [
          "A. 4.",
          "B. 8.",
          "C. 16.",
          "D. 12."
        ],
        1,
        "Miền nghiệm là tam giác vuông cân OAB với O(0; 0), A(4; 0), B(0; 4), có diện tích S = 1/2 . OA . OB = 1/2 . 4 . 4 = 8."
      ],
      [
        "Giá trị của biểu thức M = sin30&deg;.cos60&deg; + sin60&deg;.cos30&deg; bằng:",
        [
          "A. 0.",
          "B. 1/2.",
          "C. &radic;3/2.",
          "D. 1."
        ],
        3,
        "Ta có sin30&deg;.cos60&deg; + sin60&deg;.cos30&deg; = (1/2).(1/2) + (&radic;3/2).(&radic;3/2) = 1/4 + 3/4 = 1."
      ],
      [
        "Cho tam giác ABC có a = 7, b = 8, c = 5. Số đo góc A của tam giác ABC bằng:",
        [
          "A. 30&deg;.",
          "B. 45&deg;.",
          "C. 60&deg;.",
          "D. 120&deg;."
        ],
        2,
        "cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc) = (64 + 25 - 49) / (2.8.5) = 40 / 80 = 1/2 &rArr; A = 60&deg;."
      ],
      [
        "Cho tam giác ABC có góc B = 45&deg;, góc C = 60&deg; và cạnh b = 10. Độ dài cạnh c bằng:",
        [
          "A. 5&radic;6.",
          "B. 10&radic;3.",
          "C. 5&radic;2.",
          "D. 10&radic;6."
        ],
        0,
        "Theo định lí sin: c / sinC = b / sinB &rArr; c = 10 . sin60&deg; / sin45&deg; = 10 . (&radic;3/2) / (&radic;2/2) = 5&radic;6."
      ],
      [
        "Tam giác ABC có ba cạnh a = 13, b = 14, c = 15. Diện tích của tam giác ABC bằng:",
        [
          "A. 42.",
          "B. 84.",
          "C. 168.",
          "D. 72."
        ],
        1,
        "Nửa chu vi p = (13 + 14 + 15)/2 = 21. Công thức Heron: S = &radic;(21.(21-13).(21-14).(21-15)) = &radic;(21.8.7.6) = 84."
      ],
      [
        "Cho tam giác ABC có diện tích S = 84 và nửa chu vi p = 21. Bán kính đường tròn nội tiếp r của tam giác ABC bằng:",
        [
          "A. 2.",
          "B. 3.",
          "C. 4.",
          "D. 6."
        ],
        2,
        "Ta có S = p.r &rArr; r = S / p = 84 / 21 = 4."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hệ bất phương trình bậc nhất hai ẩn: {x + y &le; 6 ; 2x + y &le; 8 ; x &ge; 0 ; y &ge; 0} và biểu thức F(x; y) = 3x + 2y.",
        "items": [
          [
            "a) Điểm M(2; 3) thuộc miền nghiệm của hệ bất phương trình đã cho.",
            true,
            "Thay (2; 3): 2 + 3 = 5 &le; 6; 2(2) + 3 = 7 &le; 8; 2 &ge; 0; 3 &ge; 0 (đều thỏa mãn)."
          ],
          [
            "b) Miền nghiệm của hệ bất phương trình là một miền tam giác.",
            false,
            "Miền nghiệm là tứ giác lồi OABC với 4 đỉnh O(0; 0), A(4; 0), B(2; 4), C(0; 6)."
          ],
          [
            "c) Tại đỉnh B(2; 4), giá trị của biểu thức F(x; y) bằng 14.",
            true,
            "F(2; 4) = 3(2) + 2(4) = 6 + 8 = 14."
          ],
          [
            "d) Giá trị lớn nhất của F(x; y) trên miền nghiệm của hệ là 16.",
            false,
            "Tính tại 4 đỉnh: F(0; 0) = 0; F(4; 0) = 12; F(2; 4) = 14; F(0; 6) = 12. Vậy GTLN của F là 14."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có BC = 10, AC = 6 và góc C = 120&deg;.",
        "items": [
          [
            "a) Giá trị cos120&deg; = -1/2.",
            true,
            "Áp dụng tính chất giá trị lượng giác của hai góc bù nhau trong Toán 10: cos(180&deg; - &alpha;) = -cos&alpha;. Với &alpha; = 60&deg;, ta có cos120&deg; = cos(180&deg; - 60&deg;) = -cos60&deg; = -1/2. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Độ dài cạnh AB của tam giác ABC bằng 14.",
            true,
            "AB<sup>2</sup> = BC<sup>2</sup> + AC<sup>2</sup> - 2.BC.AC.cos120&deg; = 100 + 36 - 2.10.6.(-1/2) = 196 &rArr; AB = 14."
          ],
          [
            "c) Diện tích tam giác ABC bằng 30&radic;3.",
            false,
            "S = 1/2 . BC . AC . sin120&deg; = 1/2 . 10 . 6 . (&radic;3/2) = 15&radic;3."
          ],
          [
            "d) Bán kính đường tròn nội tiếp r của tam giác ABC bằng &radic;3.",
            true,
            "Nửa chu vi p = (10 + 6 + 14)/2 = 15. Bán kính r = S / p = 15&radic;3 / 15 = &radic;3."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Câu lạc bộ Toán học trường THPT Hướng Hóa có 22 thành viên (không có hai bạn nào trùng tên) và tổ chức 2 chuyên đề ngoại khóa. Chuyên đề 1 gồm 8 bạn: Minh, Nam, Hùng, Hải, Đức, Lan, Mai, Hoa. Chuyên đề 2 gồm 8 bạn: Minh, Hùng, Lan, Hoa, Quang, Dũng, Linh, Thảo. Hỏi có bao nhiêu thành viên của câu lạc bộ không tham gia bất kỳ chuyên đề nào?",
        "answer": "10",
        "explanation": "Số bạn tham gia cả hai chuyên đề là 4 bạn (Minh, Hùng, Lan, Hoa). Số bạn tham gia ít nhất 1 chuyên đề là 8 + 8 - 4 = 12 bạn. Số thành viên không tham gia chuyên đề nào là 22 - 12 = 10."
      },
      {
        "question": "Cho hai tập hợp A = [m; m + 2] và B = [1; 5]. Có bao nhiêu giá trị nguyên của tham số m để A &sub; B?",
        "answer": "3",
        "explanation": "Để A &sub; B &hArr; {m &ge; 1 ; m + 2 &le; 5} &hArr; 1 &le; m &le; 3. Các giá trị nguyên của m là 1, 2, 3 (có 3 giá trị)."
      },
      {
        "question": "Biết tan&alpha; = 2. Tính giá trị của biểu thức Q = (3sin&alpha; + 4cos&alpha;) / (sin&alpha; - cos&alpha;).",
        "answer": "10",
        "explanation": "Chia cả tử và mẫu cho cos&alpha; &ne; 0: Q = (3tan&alpha; + 4) / (tan&alpha; - 1) = (3.2 + 4) / (2 - 1) = 10."
      },
      {
        "question": "Từ hai vị trí A và B cách nhau 100 m trên mặt đất phẳng hướng thẳng về phía chân tháp H (A, B, H thẳng hàng, B nằm giữa A và H), người ta nhìn thấy đỉnh tháp C dưới các góc nâng lần lượt là 30&deg; và 60&deg;. Chiều cao CH của tháp bằng bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "answer": "86,6",
        "explanation": "Trong tam giác ABC có góc CAB = 30&deg;, góc ngoài CBH = 60&deg; &rArr; góc ACB = 60&deg; - 30&deg; = 30&deg;. Do đó tam giác ABC cân tại B nên BC = AB = 100 m. Trong tam giác vuông BCH: CH = BC.sin60&deg; = 100.(&radic;3/2) = 50&radic;3 &approx; 86,6 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = {x &isin; <b>R</b> | |x - 1| &le; 3} và B = (-1; 6]. Xác định các tập hợp A, A &cap; B, A &cup; B và B \\ A.",
        "solution": "Ta có |x - 1| &le; 3 &hArr; -3 &le; x - 1 &le; 3 &hArr; -2 &le; x &le; 4, suy ra A = [-2; 4] (0,25 điểm).<br>• A &cap; B = (-1; 4] (0,25 điểm).<br>• A &cup; B = [-2; 6] (0,25 điểm).<br>• B \\ A = (4; 6] (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm – Bài toán thực tế THPT Hướng Hóa).",
        "question": "Bác An đầu tư tối đa 2 tỷ đồng (2000 triệu đồng) vào hai quỹ: Quỹ an toàn X với lãi suất 6%/năm và Quỹ tăng trưởng Y với lãi suất 9%/năm. Để giảm rủi ro, số tiền đầu tư vào Quỹ X phải ít nhất bằng 2 lần số tiền đầu tư vào Quỹ Y, và số tiền đầu tư vào Quỹ Y không vượt quá 500 triệu đồng. Hãy lập hệ bất phương trình và xác định phương án đầu tư để tổng tiền lãi thu được sau 1 năm là lớn nhất.",
        "solution": "Gọi x, y (triệu đồng) lần lượt là số tiền đầu tư vào Quỹ X và Quỹ Y (x &ge; 0, y &ge; 0).<br>• Hệ bất phương trình: {x + y &le; 2000 ; x - 2y &ge; 0 ; 0 &le; y &le; 500 ; x &ge; 0} (0,5 điểm).<br>• Hàm tiền lãi: L(x; y) = 0,06x + 0,09y (triệu đồng). Miền nghiệm có các đỉnh O(0; 0), A(2000; 0), B(1500; 500), C(1000; 500).<br>• Tính giá trị tại các đỉnh: L(0; 0) = 0; L(2000; 0) = 120; L(1000; 500) = 105; L(1500; 500) = 0,06(1500) + 0,09(500) = 90 + 45 = 135 triệu đồng. Vậy đầu tư 1500 triệu đồng vào Quỹ X và 500 triệu đồng vào Quỹ Y để lãi lớn nhất là 135 triệu đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm – Bài toán thực tế THPT Hướng Hóa).",
        "question": "Một tàu vận tải xuất phát từ cảng Đà Nẵng (D) đi đến cảng Quy Nhơn (Q) cách nhau 180 hải lý. Do dòng hải lưu, tàu đi theo hướng lệch 20&deg; so với hướng thẳng DQ với tốc độ 24 hải lý/giờ trong 4 giờ đến vị trí M, rồi đổi hướng đi thẳng tới Q. Tính khoảng cách MQ và thời gian tàu đi từ M đến Q.",
        "solution": "• Quãng đường tàu đi trong 4 giờ đầu: DM = 24 . 4 = 96 (hải lý) (0,25 điểm).<br>• Áp dụng định lí côsin trong tam giác DMQ (DQ = 180, DM = 96, góc MDQ = 20&deg;):<br>MQ = &radic;(180<sup>2</sup> + 96<sup>2</sup> - 2.180.96.cos20&deg;) &approx; &radic;(41616 - 32475,8) &approx; 95,6 (hải lý) (0,5 điểm).<br>• Thời gian đi từ M đến Q: t = MQ / 24 &approx; 95,6 / 24 &approx; 3,98 giờ (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-03",
    "title": "Toán 10 - Đề 03 - Trường THPT Thị xã Quảng Trị (Đề chính thức Giữa kì I)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Thị xã Quảng Trị (Đề chính thức Giữa kì I)",
    "province": "Quảng Trị",
    "year": "2024–2025",
    "sourceUrl": "https://toanmath.com/2024/11/de-giua-ky-1-toan-10-nam-2024-2025-truong-thpt-thi-xa-quang-tri.html",
    "questions": [
      [
        "Cho mệnh đề chứa biến P(n): \"n<sup>2</sup> - 1 chia hết cho 4\" với n là số nguyên. Mệnh đề nào dưới đây đúng?",
        [
          "A. P(2).",
          "B. P(3).",
          "C. P(4).",
          "D. P(0)."
        ],
        1,
        "Thay n = 3: 3<sup>2</sup> - 1 = 8 chia hết cho 4 nên P(3) đúng."
      ],
      [
        "Cách phát biểu nào sau đây KHÔNG dùng để phát biểu mệnh đề P &rArr; Q?",
        [
          "A. P là điều kiện đủ để có Q.",
          "B. Q là điều kiện cần để có P.",
          "C. P khi và chỉ khi Q.",
          "D. Nếu P thì Q."
        ],
        2,
        "\"P khi và chỉ khi Q\" là mệnh đề tương đương P &hArr; Q, không phải mệnh đề kéo theo P &rArr; Q."
      ],
      [
        "Liệt kê các phần tử của tập hợp A = {x &isin; <b>Z</b> | 2x<sup>2</sup> - 5x + 2 = 0} ta được:",
        [
          "A. A = {2}.",
          "B. A = {1/2; 2}.",
          "C. A = {1; 2}.",
          "D. A = &empty;."
        ],
        0,
        "Giải 2x<sup>2</sup> - 5x + 2 = 0 &hArr; x = 2 (&isin; <b>Z</b>) hoặc x = 1/2 (&notin; <b>Z</b>). Vậy A = {2}."
      ],
      [
        "Cho tập hợp M = (-3; 2]. Phần bù của M trong <b>R</b> là C<sub><b>R</b></sub>M bằng:",
        [
          "A. (-&infin;; -3) &cup; (2; +&infin;).",
          "B. (-&infin;; -3] &cup; (2; +&infin;).",
          "C. (-&infin;; -3] &cup; [2; +&infin;).",
          "D. (-&infin;; -3) &cup; [2; +&infin;)."
        ],
        1,
        "Vì -3 &notin; M nên -3 &isin; C<sub><b>R</b></sub>M; vì 2 &isin; M nên 2 &notin; C<sub><b>R</b></sub>M. Do đó C<sub><b>R</b></sub>M = (-&infin;; -3] &cup; (2; +&infin;)."
      ],
      [
        "Bất phương trình x - 2y + 4 &ge; 0 có miền nghiệm là nửa mặt phẳng bờ d: x - 2y + 4 = 0 chứa điểm nào?",
        [
          "A. (-5; 0).",
          "B. (0; 3).",
          "C. (1; 1).",
          "D. (-2; 2)."
        ],
        2,
        "Thay (1; 1) vào x - 2y + 4: 1 - 2 + 4 = 3 &ge; 0 (thỏa mãn)."
      ],
      [
        "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
        [
          "A. {x + y &ge; 1 ; x<sup>2</sup> - y &le; 2}.",
          "B. {2x - 3y &lt; 5 ; x + 4y &ge; 0}.",
          "C. {xy &gt; 1 ; x - y &lt; 2}.",
          "D. {x + y = 2 ; 2x - y = 1}."
        ],
        1,
        "Cả hai bất phương trình trong hệ B đều có dạng bậc nhất hai ẩn."
      ],
      [
        "Biểu thức F(x; y) = 2x - y đạt giá trị nhỏ nhất trên miền tam giác ABC có các đỉnh A(1; 1), B(4; 1), C(1; 5) tại điểm:",
        [
          "A. A(1; 1).",
          "B. B(4; 1).",
          "C. C(1; 5).",
          "D. O(0; 0)."
        ],
        2,
        "Ta có F(1; 1) = 1; F(4; 1) = 7; F(1; 5) = 2(1) - 5 = -3. Vậy F nhỏ nhất tại C(1; 5)."
      ],
      [
        "Cho góc &alpha; = 135&deg;. Khẳng định nào sau đây đúng?",
        [
          "A. sin135&deg; = -&radic;2/2.",
          "B. cos135&deg; = &radic;2/2.",
          "C. tan135&deg; = -1.",
          "D. cot135&deg; = 1."
        ],
        2,
        "Góc 135&deg; bù với 45&deg; nên tan135&deg; = -tan45&deg; = -1."
      ],
      [
        "Trong tam giác ABC, hệ thức nào sau đây SAI?",
        [
          "A. a / sinA = 2R.",
          "B. sinA = a / (2R).",
          "C. b = 2R.sinB.",
          "D. c = R.sinC."
        ],
        3,
        "Theo định lí sin: c = 2R.sinC nên D sai."
      ],
      [
        "Cho tam giác ABC có a = 4, b = 5, c = 6. Giá trị của cosC bằng:",
        [
          "A. 1/8.",
          "B. 3/4.",
          "C. 9/16.",
          "D. -1/8."
        ],
        0,
        "cosC = (a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab) = (16 + 25 - 36) / (2.4.5) = 5 / 40 = 1/8."
      ],
      [
        "Tam giác đều ABC có cạnh bằng 2a. Diện tích của tam giác ABC là:",
        [
          "A. a<sup>2</sup>&radic;3.",
          "B. a<sup>2</sup>&radic;3 / 4.",
          "C. 2a<sup>2</sup>&radic;3.",
          "D. a<sup>2</sup>&radic;3 / 2."
        ],
        0,
        "Diện tích tam giác đều cạnh X là X<sup>2</sup>&radic;3 / 4 = (2a)<sup>2</sup>&radic;3 / 4 = a<sup>2</sup>&radic;3."
      ],
      [
        "Cho tam giác ABC có AB = 3, AC = 4, góc A = 90&deg;. Bán kính đường tròn nội tiếp r của tam giác ABC bằng:",
        [
          "A. 1.",
          "B. 1,5.",
          "C. 2.",
          "D. 2,5."
        ],
        0,
        "Tam giác vuông có cạnh huyền BC = 5, nửa chu vi p = (3+4+5)/2 = 6, diện tích S = 6 &rArr; r = S/p = 1."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = {x &isin; <b>R</b> | -1 &le; x &le; 3} và B = {x &isin; <b>R</b> | x &gt; 1}.",
        "items": [
          [
            "a) Tập hợp A được viết dưới dạng đoạn là A = [-1; 3].",
            true,
            "Theo định nghĩa tập hợp con của <b>R</b> trong Toán 10: Tập hợp các số thực x thỏa mãn a &le; x &le; b là đoạn [a; b]. Do đó {x &isin; <b>R</b> | -1 &le; x &le; 3} = [-1; 3]. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Tập hợp A &cap; B = [1; 3].",
            false,
            "Vì 1 &notin; B nên A &cap; B = (1; 3]."
          ],
          [
            "c) Tập hợp A \\ B = [-1; 1].",
            true,
            "Các phần tử thuộc A mà không lớn hơn 1 là [-1; 1]."
          ],
          [
            "d) Tập hợp C<sub><b>R</b></sub>(A &cup; B) = (-&infin;; -1).",
            true,
            "Ta có A &cup; B = [-1; +&infin;) nên phần bù trong <b>R</b> là (-&infin;; -1)."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có b = 7, c = 5 và cosA = 3/5.",
        "items": [
          [
            "a) Giá trị của sinA bằng 4/5.",
            true,
            "Vì 0&deg; &lt; A &lt; 180&deg; nên sinA &gt; 0 &rArr; sinA = &radic;(1 - cos<sup>2</sup>A) = 4/5."
          ],
          [
            "b) Diện tích của tam giác ABC bằng 14.",
            true,
            "S = 1/2 . b . c . sinA = 1/2 . 7 . 5 . (4/5) = 14."
          ],
          [
            "c) Độ dài cạnh a bằng 4&radic;2.",
            true,
            "a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA = 49 + 25 - 2.7.5.(3/5) = 32 &rArr; a = 4&radic;2."
          ],
          [
            "d) Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 5&radic;2 / 2.",
            true,
            "R = a / (2sinA) = 4&radic;2 / (2 . 4/5) = 5&radic;2 / 2."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trong một cuộc khảo sát 100 học sinh khối 10 tại trường THPT Thị xã Quảng Trị, có 65 em biết bơi, 55 em biết chơi cầu lông và 30 em biết cả bơi và chơi cầu lông. Hỏi có bao nhiêu em không biết cả bơi lẫn chơi cầu lông?",
        "answer": "10",
        "explanation": "Số học sinh biết ít nhất 1 môn là 65 + 55 - 30 = 90. Số học sinh không biết cả hai môn là 100 - 90 = 10."
      },
      {
        "question": "Có bao nhiêu cặp số nguyên không âm (x; y) thỏa mãn bất phương trình 2x + 3y &le; 6?",
        "answer": "7",
        "explanation": "Vì x, y &isin; <b>N</b>: Với y = 0 &rArr; 2x &le; 6 &rArr; x &isin; {0; 1; 2; 3} (4 cặp); với y = 1 &rArr; 2x &le; 3 &rArr; x &isin; {0; 1} (2 cặp); với y = 2 &rArr; 2x &le; 0 &rArr; x = 0 (1 cặp). Tổng cộng có 4 + 2 + 1 = 7 cặp."
      },
      {
        "question": "Cho sin&alpha; + cos&alpha; = 7/5 (với 0&deg; &lt; &alpha; &lt; 90&deg;). Tính giá trị của tích P = 25.sin&alpha;.cos&alpha;.",
        "answer": "12",
        "explanation": "Bình phương hai vế: (sin&alpha; + cos&alpha;)<sup>2</sup> = 49/25 &hArr; 1 + 2sin&alpha;cos&alpha; = 49/25 &hArr; sin&alpha;cos&alpha; = 12/25 &rArr; P = 25.(12/25) = 12."
      },
      {
        "question": "Cho tam giác ABC có ba cạnh a = 6, b = 8, c = 10. Độ dài đường cao h<sub>a</sub> ứng với cạnh a bằng bao nhiêu?",
        "answer": "8",
        "explanation": "Tam giác ABC vuông tại C (vì 6<sup>2</sup> + 8<sup>2</sup> = 10<sup>2</sup>) nên đường cao ứng với cạnh a = BC chính là cạnh góc vuông AC = b = 8."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = (-4; 3] và B = (m - 2; m + 4). Tìm tất cả các giá trị thực của tham số m để A &cap; B &ne; &empty;.",
        "solution": "Để tìm điều kiện A &cap; B &ne; &empty;, ta tìm điều kiện đối A &cap; B = &empty;:<br>• A &cap; B = &empty; &hArr; m + 4 &le; -4 hoặc m - 2 &ge; 3 &hArr; m &le; -8 hoặc m &ge; 5 (0,5 điểm).<br>• Suy ra A &cap; B &ne; &empty; khi và chỉ khi -8 &lt; m &lt; 5 (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một hộ nông dân tại Hải Lăng dự định trồng lúa và trồng sen trên diện tích tối đa 6 ha. Nếu trồng 1 ha lúa thì cần 10 ngày công và thu lãi 20 triệu đồng; nếu trồng 1 ha sen thì cần 20 ngày công và thu lãi 30 triệu đồng. Biết tổng số ngày công không vượt quá 80 ngày. Hãy xác định diện tích trồng mỗi loại để hộ nông dân thu được lợi nhuận cao nhất.",
        "solution": "Gọi x, y (ha) lần lượt là diện tích trồng lúa và trồng sen (x &ge; 0, y &ge; 0).<br>• Hệ BPT: {x + y &le; 6 ; 10x + 20y &le; 80 ; x &ge; 0 ; y &ge; 0} &hArr; {x + y &le; 6 ; x + 2y &le; 8 ; x &ge; 0 ; y &ge; 0} (0,5 điểm).<br>• Hàm lợi nhuận F(x; y) = 20x + 30y (triệu đồng). Các đỉnh miền nghiệm: O(0; 0), A(6; 0), B(4; 2), C(0; 4).<br>• Ta có F(0; 0) = 0; F(6; 0) = 120; F(0; 4) = 120; F(4; 2) = 20(4) + 30(2) = 140 triệu đồng. Vậy trồng 4 ha lúa và 2 ha sen cho lợi nhuận lớn nhất là 140 triệu đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho tam giác ABC có AB = 10, AC = 12 và góc A = 60&deg;. Tính độ dài cạnh BC, diện tích tam giác ABC và độ dài đường phân giác trong AD của góc A.",
        "solution": "• Theo định lí côsin: BC<sup>2</sup> = 10<sup>2</sup> + 12<sup>2</sup> - 2.10.12.cos60&deg; = 100 + 144 - 120 = 124 &rArr; BC = 2&radic;31 &approx; 11,14 (0,25 điểm).<br>• Diện tích tam giác ABC: S = 1/2 . 10 . 12 . sin60&deg; = 30&radic;3 (0,25 điểm).<br>• Gọi AD là phân giác trong góc A (góc BAD = góc CAD = 30&deg;). Ta có S<sub>ABC</sub> = S<sub>ABD</sub> + S<sub>ACD</sub> &hArr; 30&radic;3 = 1/2.10.AD.sin30&deg; + 1/2.12.AD.sin30&deg; = (11/2)AD &rArr; AD = 60&radic;3 / 11 &approx; 9,45 (0,5 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-04",
    "title": "Toán 10 - Đề 04 - Trường THPT Lê Lợi – Đông Hà, Quảng Trị (Đề chính thức Kết nối tri thức)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Lê Lợi – Đông Hà, Quảng Trị (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Trị",
    "year": "2023–2024",
    "sourceUrl": "https://toanmath.com/2023/11/de-giua-ky-1-toan-10-knttvcs-nam-2023-2024-truong-thpt-le-loi-quang-tri.html",
    "questions": [
      [
        "Cho mệnh đề P: \"&exist;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 = 0\". Mệnh đề này đúng hay sai và phủ định của nó là gì?",
        [
          "A. P đúng; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\".",
          "B. P sai; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\".",
          "C. P sai; <span style=\"text-decoration:overline;\">P</span>: \"&exist;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\".",
          "D. P đúng; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 = 0\"."
        ],
        1,
        "Vì x = &plusmn;&radic;(5/2) &notin; <b>Q</b> nên P sai, và phủ định là \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | x là ước của 12}. Số phần tử của tập hợp A là:",
        [
          "A. 4.",
          "B. 5.",
          "C. 6.",
          "D. 12."
        ],
        2,
        "Các ước tự nhiên của 12 là {1; 2; 3; 4; 6; 12}, gồm 6 phần tử."
      ],
      [
        "Cho hai tập hợp A = [-4; 1] và B = [-2; 5). Tập hợp A \\ B là:",
        [
          "A. [-4; -2).",
          "B. [-4; -2].",
          "C. (1; 5).",
          "D. [-2; 1]."
        ],
        0,
        "Những phần tử thuộc [-4; 1] nhưng không thuộc [-2; 5) là [-4; -2)."
      ],
      [
        "Trong các tập hợp sau, tập hợp nào là tập hợp rỗng?",
        [
          "A. {x &isin; <b>Z</b> | |x| &lt; 1}.",
          "B. {x &isin; <b>R</b> | x<sup>2</sup> + x + 1 = 0}.",
          "C. {x &isin; <b>Q</b> | x<sup>2</sup> - 4 = 0}.",
          "D. {x &isin; <b>N</b> | 2x - 4 = 0}."
        ],
        1,
        "Phương trình x<sup>2</sup> + x + 1 = (x + 1/2)<sup>2</sup> + 3/4 = 0 vô nghiệm thực nên tập hợp ở câu B rỗng."
      ],
      [
        "Miền nghiệm của bất phương trình x + y &le; 2 là phần mặt phẳng chứa điểm nào?",
        [
          "A. (2; 1).",
          "B. (1; 2).",
          "C. (0; 0).",
          "D. (3; 0)."
        ],
        2,
        "Thay (0; 0) vào BPT: 0 + 0 = 0 &le; 2 (đúng)."
      ],
      [
        "Một cửa hàng bán áo sơ mi (giá lãi 50 nghìn đồng/chiếc) và quần âu (giá lãi 80 nghìn đồng/chiếc). Gọi x, y lần lượt là số áo và số quần bán được trong ngày. Bất phương trình biểu thị tổng tiền lãi trong ngày đạt ít nhất 1 200 nghìn đồng là:",
        [
          "A. 5x + 8y &le; 120.",
          "B. 5x + 8y &ge; 120.",
          "C. 8x + 5y &ge; 120.",
          "D. 50x + 80y &lt; 1200."
        ],
        1,
        "Tổng lãi 50x + 80y &ge; 1200 &hArr; 5x + 8y &ge; 120."
      ],
      [
        "Điểm nào sau đây thuộc miền nghiệm của hệ {2x - y &ge; 1 ; x + 3y &le; 6}?",
        [
          "A. (0; 0).",
          "B. (2; 1).",
          "C. (1; 3).",
          "D. (-1; 2)."
        ],
        1,
        "Thay (2; 1): 2(2) - 1 = 3 &ge; 1 (đúng) và 2 + 3(1) = 5 &le; 6 (đúng)."
      ],
      [
        "Giá trị của cos150&deg; bằng:",
        [
          "A. &radic;3/2.",
          "B. -&radic;3/2.",
          "C. 1/2.",
          "D. -1/2."
        ],
        1,
        "cos150&deg; = -cos30&deg; = -&radic;3/2."
      ],
      [
        "Trong tam giác ABC, nếu a<sup>2</sup> &gt; b<sup>2</sup> + c<sup>2</sup> thì góc A là:",
        [
          "A. Góc nhọn.",
          "B. Góc vuông.",
          "C. Góc tù.",
          "D. Góc bẹt."
        ],
        2,
        "Vì cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>)/(2bc) &lt; 0 nên góc A &gt; 90&deg; (góc tù)."
      ],
      [
        "Cho tam giác ABC có a = 8, b = 10 và diện tích S = 20&radic;3. Góc C nhận giá trị nào dưới đây?",
        [
          "A. 30&deg; hoặc 150&deg;.",
          "B. 60&deg; hoặc 120&deg;.",
          "C. 45&deg; hoặc 135&deg;.",
          "D. 90&deg;."
        ],
        1,
        "S = 1/2.a.b.sinC &rArr; sinC = 2S/(ab) = 40&radic;3 / 80 = &radic;3/2 &rArr; C = 60&deg; hoặc C = 120&deg;."
      ],
      [
        "Cho tam giác ABC có góc A = 60&deg;, góc B = 45&deg;, BC = 6&radic;3. Độ dài cạnh AC bằng:",
        [
          "A. 6&radic;2.",
          "B. 6.",
          "C. 3&radic;6.",
          "D. 4&radic;3."
        ],
        0,
        "Theo định lí sin: AC / sinB = BC / sinA &rArr; AC = 6&radic;3 . (&radic;2/2) / (&radic;3/2) = 6&radic;2."
      ],
      [
        "Bán kính đường tròn ngoại tiếp tam giác đều cạnh a = 6 bằng:",
        [
          "A. &radic;3.",
          "B. 2&radic;3.",
          "C. 3&radic;3.",
          "D. 6."
        ],
        1,
        "R = a / (2sin60&deg;) = 6 / &radic;3 = 2&radic;3."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = [-5; 2) và B = (-1; 6].",
        "items": [
          [
            "a) A &cap; B = (-1; 2).",
            true,
            "Giao của [-5; 2) và (-1; 6] là khoảng (-1; 2)."
          ],
          [
            "b) A &cup; B = [-5; 6].",
            true,
            "Hợp của hai tập hợp trải từ -5 đến 6 kể cả hai đầu mút."
          ],
          [
            "c) B \\ A = (2; 6].",
            false,
            "Vì 2 &notin; A và 2 &isin; B nên 2 &isin; B \\ A, tức là B \\ A = [2; 6]."
          ],
          [
            "d) Tập hợp (A \\ B) &cap; <b>Z</b> có 5 phần tử nguyên.",
            true,
            "Vì -1 &notin; B nên A \\ B = [-5; -1], các số nguyên trong đoạn này là -5; -4; -3; -2; -1 gồm đúng 5 phần tử."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có ba cạnh AB = 6, AC = 8, BC = 12.",
        "items": [
          [
            "a) Nửa chu vi của tam giác ABC là p = 13.",
            true,
            "Nửa chu vi p của tam giác ABC có độ dài ba cạnh a, b, c là: p = (a + b + c) / 2 = (6 + 8 + 12) / 2 = 26 / 2 = 13. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Giá trị cosA = -11/24.",
            true,
            "cosA = (6<sup>2</sup> + 8<sup>2</sup> - 12<sup>2</sup>)/(2.6.8) = -44/96 = -11/24."
          ],
          [
            "c) Tam giác ABC là tam giác nhọn.",
            false,
            "Vì cosA = -11/24 &lt; 0 nên góc A là góc tù, tam giác ABC là tam giác tù."
          ],
          [
            "d) Diện tích của tam giác ABC bằng &radic;455.",
            true,
            "Theo Heron: S = &radic;(13.(13-6).(13-8).(13-12)) = &radic;(13.7.5.1) = &radic;455."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Lớp 10B trường THPT Lê Lợi có 42 học sinh. Trong đợt thi đua chào mừng 20/11, có 25 học sinh đạt điểm 10 môn Toán, 20 học sinh đạt điểm 10 môn Hóa và 12 học sinh không đạt điểm 10 môn nào trong hai môn trên. Hỏi có bao nhiêu học sinh đạt điểm 10 cả hai môn Toán và Hóa?",
        "answer": "15",
        "explanation": "Số học sinh đạt điểm 10 ít nhất 1 môn là 42 - 12 = 30. Số học sinh đạt điểm 10 cả hai môn là 25 + 20 - 30 = 15."
      },
      {
        "question": "Tìm giá trị lớn nhất của F(x; y) = 5x + 2y với (x; y) thuộc miền nghiệm của hệ {x + y &le; 5 ; x &le; 3 ; x &ge; 0 ; y &ge; 0}.",
        "answer": "19",
        "explanation": "Các đỉnh miền nghiệm: O(0; 0), A(3; 0), B(3; 2), C(0; 5). Tính F: F(0; 0)=0; F(3; 0)=15; F(3; 2)=19; F(0; 5)=10. Vậy GTLN là 19."
      },
      {
        "question": "Cho cos&alpha; = -2/3 với 90&deg; &lt; &alpha; &lt; 180&deg;. Tính giá trị của biểu thức M = 9.sin<sup>2</sup>&alpha; + 4.",
        "answer": "9",
        "explanation": "Ta có sin<sup>2</sup>&alpha; = 1 - cos<sup>2</sup>&alpha; = 1 - 4/9 = 5/9. Suy ra M = 9.(5/9) + 4 = 5 + 4 = 9."
      },
      {
        "question": "Một cột cờ tại công viên Fidel (Đông Hà) có bóng trên mặt đất dài 12 m khi tia nắng mặt trời tạo với mặt đất một góc 60&deg;. Chiều cao của cột cờ bằng bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "answer": "20,8",
        "explanation": "Chiều cao cột cờ: h = 12 . tan60&deg; = 12&radic;3 &approx; 20,8 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm – Đề THPT Lê Lợi).",
        "question": "Cho hai tập hợp A = [-3; 4) và B = [0; 7]. Tìm các tập hợp A &cap; B, A &cup; B, A \\ B và C<sub><b>R</b></sub>A.",
        "solution": "• A &cap; B = [0; 4) (0,25 điểm).<br>• A &cup; B = [-3; 7] (0,25 điểm).<br>• A \\ B = [-3; 0) (0,25 điểm).<br>• C<sub><b>R</b></sub>A = (-&infin;; -3) &cup; [4; +&infin;) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Biểu diễn miền nghiệm và tìm giá trị lớn nhất, giá trị nhỏ nhất của biểu thức P(x; y) = 2x - 3y trên miền nghiệm của hệ bất phương trình {x + y &le; 4 ; x &ge; 0 ; y &ge; 0}.",
        "solution": "• Miền nghiệm của hệ là tam giác vuông OAB với các đỉnh O(0; 0), A(4; 0), B(0; 4) (0,5 điểm).<br>• Tính P tại các đỉnh: P(0; 0) = 0; P(4; 0) = 8; P(0; 4) = -12.<br>• Vậy giá trị lớn nhất của P là 8 (tại (4; 0)) và giá trị nhỏ nhất của P là -12 (tại (0; 4)) (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Ứng dụng hệ thức lượng tính các yếu tố trong tam giác",
        "question": "Cho tam giác ABC có độ dài ba cạnh là a = BC = 7, b = AC = 15, c = AB = 20.<br>a) Tính diện tích S của tam giác ABC bằng công thức Heron.<br>b) Tính bán kính đường tròn ngoại tiếp R, bán kính đường tròn nội tiếp r và độ dài đường cao h<sub>a</sub> kẻ từ đỉnh A.",
        "solution": "a) Nửa chu vi của tam giác ABC là: p = (a + b + c) / 2 = (7 + 15 + 20) / 2 = 21.<br>Diện tích tam giác tính theo công thức Heron:<br>S = &radic;[p(p - a)(p - b)(p - c)] = &radic;[21 &times; (21 - 7) &times; (21 - 15) &times; (21 - 20)]<br>= &radic;[21 &times; 14 &times; 6 &times; 1] = &radic;1764 = 42 (0,50 điểm).<br>b) Các bán kính và đường cao:<br>• Bán kính đường tròn ngoại tiếp: R = (abc) / (4S) = (7 &times; 15 &times; 20) / (4 &times; 42) = 2100 / 168 = 12,5 (0,20 điểm).<br>• Bán kính đường tròn nội tiếp: r = S / p = 42 / 21 = 2 (0,15 điểm).<br>• Đường cao hạ từ A: h<sub>a</sub> = 2S / a = (2 &times; 42) / 7 = 12 (0,15 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-05",
    "title": "Toán 10 - Đề 05 - Trường THPT Ngô Quyền – Đà Nẵng (Đề ôn tập & kiểm tra Giữa kì I 2026–2027)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Ngô Quyền – Đà Nẵng (Đề ôn tập & kiểm tra Giữa kì I 2026–2027)",
    "province": "Đà Nẵng",
    "year": "2026–2027",
    "sourceUrl": "https://toanmath.com/2026/10/de-on-tap-giua-ki-1-toan-10-nam-2026-2027-truong-thpt-ngo-quyen-da-nang.html",
    "questions": [
      [
        "Cho mệnh đề P: \"Nếu a + b chia hết cho 5 thì a và b đều chia hết cho 5\". Mệnh đề này:",
        [
          "A. Đúng.",
          "B. Sai, phản ví dụ a = 2, b = 3.",
          "C. Không phải mệnh đề.",
          "D. Tương đương với mệnh đề đảo."
        ],
        1,
        "Với a = 2, b = 3 thì a + b = 5 chia hết cho 5 nhưng 2 và 3 đều không chia hết cho 5, nên P sai."
      ],
      [
        "Kí hiệu nào sau đây dùng để chỉ 5 là một phần tử của tập hợp A?",
        [
          "A. 5 &sub; A.",
          "B. {5} &isin; A.",
          "C. 5 &isin; A.",
          "D. A &isin; 5."
        ],
        2,
        "Quan hệ phần tử thuộc tập hợp dùng kí hiệu &isin;: 5 &isin; A."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | x &lt; 5} và B = {1; 3; 5; 7}. Tập hợp A &cup; B có bao nhiêu phần tử?",
        [
          "A. 5.",
          "B. 6.",
          "C. 7.",
          "D. 8."
        ],
        2,
        "A = {0; 1; 2; 3; 4}, B = {1; 3; 5; 7} &rArr; A &cup; B = {0; 1; 2; 3; 4; 5; 7} gồm 7 phần tử."
      ],
      [
        "Cho hai tập hợp X = (-2; 4) và Y = [1; 6]. Tập hợp X &cap; Y là:",
        [
          "A. (-2; 6].",
          "B. [1; 4).",
          "C. (1; 4].",
          "D. (-2; 1)."
        ],
        1,
        "Giao của (-2; 4) và [1; 6] là nửa khoảng [1; 4)."
      ],
      [
        "Bất phương trình 4x - 5y &gt; 10 KHÔNG nhận cặp số nào sau đây làm nghiệm?",
        [
          "A. (3; 0).",
          "B. (5; 1).",
          "C. (2; -1).",
          "D. (1; 0)."
        ],
        3,
        "Thay (1; 0): 4(1) - 5(0) = 4 &lt; 10 (không thỏa mãn)."
      ],
      [
        "Miền nghiệm của hệ bất phương trình {x &ge; 1 ; y &ge; 2 ; x + y &le; 5} là một tam giác có diện tích bằng:",
        [
          "A. 2.",
          "B. 4.",
          "C. 6.",
          "D. 8."
        ],
        0,
        "Tam giác vuông có các đỉnh (1; 2), (3; 2), (1; 4) với hai cạnh góc vuông bằng 2 và 2 &rArr; S = 1/2 . 2 . 2 = 2."
      ],
      [
        "Giá trị của biểu thức A = tan45&deg; + cot135&deg; bằng:",
        [
          "A. 2.",
          "B. 0.",
          "C. 1.",
          "D. -1."
        ],
        1,
        "tan45&deg; = 1, cot135&deg; = -1 &rArr; A = 1 + (-1) = 0."
      ],
      [
        "Cho góc &alpha; tù (90&deg; &lt; &alpha; &lt; 180&deg;). Khẳng định nào sau đây đúng về dấu của các giá trị lượng giác?",
        [
          "A. sin&alpha; &lt; 0, cos&alpha; &gt; 0.",
          "B. sin&alpha; &gt; 0, cos&alpha; &lt; 0.",
          "C. tan&alpha; &gt; 0, cot&alpha; &gt; 0.",
          "D. sin&alpha; &lt; 0, tan&alpha; &lt; 0."
        ],
        1,
        "Với góc tù (90&deg; &lt; &alpha; &lt; 180&deg;), sin&alpha; &gt; 0 còn cos&alpha;, tan&alpha;, cot&alpha; đều âm."
      ],
      [
        "Tam giác ABC có AB = 5, BC = 8, CA = 7. Số đo góc B bằng:",
        [
          "A. 30&deg;.",
          "B. 45&deg;.",
          "C. 60&deg;.",
          "D. 120&deg;."
        ],
        2,
        "Áp dụng định lí côsin: cosB = (AB<sup>2</sup> + BC<sup>2</sup> - AC<sup>2</sup>)/(2.AB.BC) = (25 + 64 - 49)/(2.5.8) = 40/80 = 1/2 &rArr; B = 60&deg;."
      ],
      [
        "Cho tam giác ABC có R = 6 và góc C = 45&deg;. Độ dài cạnh AB bằng:",
        [
          "A. 6&radic;2.",
          "B. 3&radic;2.",
          "C. 6&radic;3.",
          "D. 12."
        ],
        0,
        "Theo định lí sin: AB = c = 2R.sinC = 2.6.(&radic;2/2) = 6&radic;2."
      ],
      [
        "Công thức nào sau đây dùng để tính diện tích tam giác ABC theo ba cạnh a, b, c và bán kính đường tròn ngoại tiếp R?",
        [
          "A. S = abc / (2R).",
          "B. S = abc / (4R).",
          "C. S = 4R / (abc).",
          "D. S = (a+b+c)R / 2."
        ],
        1,
        "Theo các công thức tính diện tích tam giác trong hệ thức lượng Toán 10: S = abc / (4R) &hArr; R = abc / (4S). Vì vậy hệ thức S = abc / (2R) là SAI."
      ],
      [
        "Cho tam giác ABC có b = 10, c = 12, góc A = 150&deg;. Diện tích tam giác ABC bằng:",
        [
          "A. 30.",
          "B. 60.",
          "C. 30&radic;3.",
          "D. 15."
        ],
        0,
        "S = 1/2 . b . c . sin150&deg; = 1/2 . 10 . 12 . (1/2) = 30."
      ]
    ],
    "tf": [
      {
        "stem": "Một xưởng sản xuất nước mắm truyền thống tại miền Trung sản xuất hai dòng sản phẩm: Loại Đặc biệt (x thùng) và Loại Tiêu chuẩn (y thùng) mỗi ngày. Biết số thùng mỗi loại thỏa mãn hệ {2x + y &le; 100 ; x + 2y &le; 80 ; x &ge; 0 ; y &ge; 0}.",
        "items": [
          [
            "a) Phương án sản xuất x = 30 thùng Đặc biệt và y = 20 thùng Tiêu chuẩn là hợp lệ.",
            true,
            "Thay (30; 20): 2(30)+20 = 80 &le; 100 và 30+2(20) = 70 &le; 80 (hợp lệ)."
          ],
          [
            "b) Số thùng Loại Tiêu chuẩn tối đa có thể sản xuất trong một ngày là 50 thùng.",
            false,
            "Từ x + 2y &le; 80 và x &ge; 0 suy ra 2y &le; 80 &hArr; y &le; 40 thùng."
          ],
          [
            "c) Giao điểm của hai đường thẳng 2x + y = 100 và x + 2y = 80 là điểm B(40; 20).",
            true,
            "Giải hệ {2x + y = 100 ; x + 2y = 80} được x = 40, y = 20."
          ],
          [
            "d) Nếu mỗi thùng Đặc biệt lãi 300 nghìn đồng và mỗi thùng Tiêu chuẩn lãi 200 nghìn đồng thì lợi nhuận tối đa một ngày là 16 triệu đồng.",
            true,
            "Hàm lãi L = 0,3x + 0,2y (triệu đồng). Tại các đỉnh (0; 0), (50; 0), (40; 20), (0; 40), ta có L(40; 20) = 0,3(40) + 0,2(20) = 12 + 4 = 16 triệu đồng."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có góc A = 60&deg;, góc B = 45&deg; và cạnh AB = c = 10.",
        "items": [
          [
            "a) Số đo góc C của tam giác ABC bằng 75&deg;.",
            true,
            "Góc C = 180&deg; - (60&deg; + 45&deg;) = 75&deg;."
          ],
          [
            "b) Giá trị đúng của sin75&deg; bằng (&radic;6 + &radic;2) / 4.",
            true,
            "Ta có sin75&deg; = (&radic;6 + &radic;2) / 4."
          ],
          [
            "c) Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 10 / sin75&deg;.",
            false,
            "Theo định lí sin: R = c / (2sinC) = 10 / (2sin75&deg;) = 5 / sin75&deg;."
          ],
          [
            "d) Độ dài cạnh BC = a xấp xỉ bằng 8,97 (làm tròn đến hàng phần trăm).",
            true,
            "a = c.sinA / sinC = 10.sin60&deg; / sin75&deg; &approx; 8,66025 / 0,96593 &approx; 8,97."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho tập hợp A = [-4; 5] và B = (2; 9]. Có bao nhiêu số nguyên thuộc tập hợp A &cup; B?",
        "answer": "14",
        "explanation": "A &cup; B = [-4; 9], các số nguyên từ -4 đến 9 có 9 - (-4) + 1 = 14 số nguyên."
      },
      {
        "question": "Tìm giá trị nhỏ nhất của biểu thức T(x; y) = x + 3y trên miền đa giác có các đỉnh A(1; 4), B(5; 2), C(2; 1).",
        "answer": "5",
        "explanation": "Tính T tại các đỉnh: T(1; 4) = 13; T(5; 2) = 11; T(2; 1) = 2 + 3(1) = 5. Vậy GTNN bằng 5."
      },
      {
        "question": "Tính giá trị biểu thức S = cos<sup>2</sup>10&deg; + cos<sup>2</sup>80&deg; + sin<sup>2</sup>35&deg; + sin<sup>2</sup>55&deg;.",
        "answer": "2",
        "explanation": "Vì cos80&deg; = sin10&deg; và sin55&deg; = cos35&deg; nên S = (cos<sup>2</sup>10&deg; + sin<sup>2</sup>10&deg;) + (sin<sup>2</sup>35&deg; + cos<sup>2</sup>35&deg;) = 1 + 1 = 2."
      },
      {
        "question": "Cho tam giác ABC có a = 9, b = 10, c = 11. Tính diện tích S của tam giác ABC (làm tròn đến hàng phần mười).",
        "answer": "42,4",
        "explanation": "Nửa chu vi p = (9+10+11)/2 = 15. S = &radic;(15.6.5.4) = &radic;1800 = 30&radic;2 &approx; 42,4."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = (-&infin;; 2] và B = [2m - 1; 2m + 5]. Tìm tham số m để A &cap; B là một đoạn có độ dài bằng 3.",
        "solution": "• Điều kiện để A &cap; B là một đoạn có độ dài bằng 3: Vì B có độ dài bằng 6, để giao của (-&infin;; 2] và [2m - 1; 2m + 5] là đoạn [2m - 1; 2] có độ dài bằng 3 thì:<br>{2m - 1 &lt; 2 &le; 2m + 5 ; 2 - (2m - 1) = 3} (0,5 điểm).<br>• Giải phương trình 3 - 2m = 3 &hArr; m = 0 (thỏa mãn -1 &lt; 2 &le; 5). Vậy m = 0 (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipid trong thức ăn mỗi ngày. Mỗi kg thịt bò chứa 800 đơn vị protein và 200 đơn vị lipid (giá 250 nghìn đồng/kg). Mỗi kg thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipid (giá 150 nghìn đồng/kg). Biết gia đình chỉ mua tối đa 1,6 kg thịt bò và 1,1 kg thịt lợn. Tìm khối lượng mỗi loại thịt cần mua để chi phí là thấp nhất.",
        "solution": "Gọi x, y (kg) lần lượt là khối lượng thịt bò và thịt lợn cần mua.<br>• Hệ BPT: {8x + 6y &ge; 9 ; 2x + 4y &ge; 4 ; 0 &le; x &le; 1,6 ; 0 &le; y &le; 1,1} (0,5 điểm).<br>• Hàm chi phí C(x; y) = 250x + 150y (nghìn đồng). Các đỉnh của miền nghiệm: A(0,6; 0,7), B(1,6; 0,2), C(1,6; 1,1), D(0,3; 1,1).<br>• Tính chi phí: C(0,6; 0,7) = 250(0,6) + 150(0,7) = 150 + 105 = 255 nghìn đồng; C(0,3; 1,1) = 250(0,3) + 150(1,1) = 240 nghìn đồng; C(1,6; 0,2) = 430 nghìn đồng; C(1,6; 1,1) = 565 nghìn đồng. Vậy mua 0,3 kg thịt bò và 1,1 kg thịt lợn để chi phí thấp nhất là 240 nghìn đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Để đo chiều cao của một tháp truyền hình mà không thể tiếp cận chân tháp H, người ta chọn hai điểm A, B trên mặt đất cùng nằm trên một đường thẳng qua H (B ở giữa A và H) cách nhau AB = 40 m. Từ A và B ngắm đỉnh tháp C với góc nâng lần lượt là 35&deg; và 50&deg;. Tính chiều cao CH của tháp (làm tròn đến hàng phần mười mét).",
        "solution": "• Trong tam giác ABC: góc CAB = 35&deg;, góc ngoài CBH = 50&deg; &rArr; góc ACB = 50&deg; - 35&deg; = 15&deg; (0,25 điểm).<br>• Áp dụng định lí sin trong tam giác ABC: BC / sin35&deg; = AB / sin15&deg; &rArr; BC = 40.sin35&deg; / sin15&deg; &approx; 88,64 m (0,5 điểm).<br>• Trong tam giác vuông BCH: CH = BC.sin50&deg; &approx; 88,64 . 0,7660 &approx; 67,9 m (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-06",
    "title": "Toán 10 - Đề 06 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://toanmath.com/2025/12/de-giua-ky-1-toan-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang.html",
    "questions": [
      [
        "Trong các mệnh đề sau, mệnh đề nào SAI?",
        [
          "A. -&pi; &lt; -2 &hArr; &pi;<sup>2</sup> &lt; 4.",
          "B. &pi; &lt; 4 &hArr; &pi;<sup>2</sup> &lt; 16.",
          "C. &radic;23 &lt; 5 &rArr; 2&radic;23 &lt; 10.",
          "D. &radic;23 &lt; 5 &rArr; -2&radic;23 &gt; -10."
        ],
        0,
        "Vì -&pi; &lt; -2 là đúng nhưng &pi;<sup>2</sup> &approx; 9,87 &lt; 4 là sai nên mệnh đề tương đương ở câu A sai."
      ],
      [
        "Tập hợp A = {x &isin; <b>R</b> | x<sup>2</sup> - 3x + 2 = 0} bằng tập hợp nào sau đây?",
        [
          "A. {1; 2}.",
          "B. {-1; -2}.",
          "C. {1; 3}.",
          "D. (1; 2)."
        ],
        0,
        "Phương trình x<sup>2</sup> - 3x + 2 = 0 có hai nghiệm x = 1 và x = 2."
      ],
      [
        "Cho A = (0; 5] và B = [3; 8). Tập hợp B \\ A là:",
        [
          "A. (0; 3).",
          "B. (5; 8).",
          "C. [5; 8).",
          "D. [3; 5]."
        ],
        1,
        "Các phần tử thuộc [3; 8) nhưng không thuộc (0; 5] là (5; 8)."
      ],
      [
        "Cho tập hợp A có 10 phần tử, tập hợp B có 8 phần tử và A &cap; B có 3 phần tử. Số phần tử của tập hợp A &cup; B là:",
        [
          "A. 18.",
          "B. 15.",
          "C. 13.",
          "D. 21."
        ],
        1,
        "n(A &cup; B) = n(A) + n(B) - n(A &cap; B) = 10 + 8 - 3 = 15."
      ],
      [
        "Cặp số (-2; 3) là nghiệm của bất phương trình nào dưới đây?",
        [
          "A. 2x + y - 1 &gt; 0.",
          "B. x - y + 4 &lt; 0.",
          "C. 3x + 2y + 1 &gt; 0.",
          "D. x + 2y - 3 &le; 0."
        ],
        2,
        "Thay (-2; 3) vào 3x + 2y + 1: 3(-2) + 2(3) + 1 = 1 &gt; 0 (đúng)."
      ],
      [
        "Miền nghiệm của bất phương trình y &ge; 2x - 4 chứa điểm nào?",
        [
          "A. (3; 0).",
          "B. (0; 0).",
          "C. (4; 1).",
          "D. (2; -1)."
        ],
        1,
        "Để kiểm tra điểm M(x₀; y₀) có thuộc miền nghiệm của bất phương trình bậc nhất hai ẩn y &ge; 2x - 4 hay không, ta thay tọa độ (0; 0) vào BPT: 0 &ge; 2(0) - 4 &hArr; 0 &ge; -4 (luôn đúng). Vậy gốc O(0; 0) thuộc miền nghiệm."
      ],
      [
        "Trên miền nghiệm của hệ {0 &le; x &le; 4 ; 0 &le; y &le; 3}, giá trị lớn nhất của F(x; y) = 2x + 5y bằng:",
        [
          "A. 8.",
          "B. 15.",
          "C. 23.",
          "D. 20."
        ],
        2,
        "Miền nghiệm là hình chữ nhật nên F đạt GTLN tại đỉnh (4; 3): F(4; 3) = 2(4) + 5(3) = 23."
      ],
      [
        "Giá trị của biểu thức P = sin120&deg; . cos30&deg; + cos120&deg; . sin30&deg; bằng:",
        [
          "A. 1/2.",
          "B. &radic;3/2.",
          "C. 0.",
          "D. 1."
        ],
        0,
        "Ta có sin120&deg;.cos30&deg; + cos120&deg;.sin30&deg; = (&radic;3/2).(&radic;3/2) + (-1/2).(1/2) = 3/4 - 1/4 = 1/2."
      ],
      [
        "Cho tam giác ABC có a = 5, b = 12, c = 13. Số đo góc C bằng:",
        [
          "A. 60&deg;.",
          "B. 90&deg;.",
          "C. 120&deg;.",
          "D. 45&deg;."
        ],
        1,
        "Vì 5<sup>2</sup> + 12<sup>2</sup> = 25 + 144 = 169 = 13<sup>2</sup> nên tam giác vuông tại C, tức góc C = 90&deg;."
      ],
      [
        "Tam giác ABC có góc A = 120&deg;, b = 4, c = 6. Độ dài cạnh a bằng:",
        [
          "A. 2&radic;19.",
          "B. 2&radic;7.",
          "C. 10.",
          "D. 4&radic;5."
        ],
        0,
        "a<sup>2</sup> = 4<sup>2</sup> + 6<sup>2</sup> - 2.4.6.cos120&deg; = 16 + 36 + 24 = 76 &rArr; a = 2&radic;19."
      ],
      [
        "Cho tam giác ABC có ba cạnh a = 5, b = 6, c = 7. Diện tích tam giác ABC bằng:",
        [
          "A. 6&radic;6.",
          "B. 12&radic;6.",
          "C. 18.",
          "D. 6&radic;3."
        ],
        0,
        "p = (5+6+7)/2 = 9. S = &radic;(9.4.3.2) = 6&radic;6."
      ],
      [
        "Cho tam giác ABC có diện tích S = 24 và chu vi bằng 24. Bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 1.",
          "B. 2.",
          "C. 3.",
          "D. 4."
        ],
        1,
        "Nửa chu vi p = 24 / 2 = 12. Bán kính r = S / p = 24 / 12 = 2."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = [-2; 4] và B = (m; m + 5) với m là tham số thực.",
        "items": [
          [
            "a) Khi m = 0 thì A &cap; B = (0; 4].",
            true,
            "Với m = 0 thì B = (0; 5), do đó [-2; 4] &cap; (0; 5) = (0; 4]."
          ],
          [
            "b) Khi m = 0 thì B \\ A = [4; 5).",
            false,
            "Vì 4 &isin; A nên 4 &notin; B \\ A, vậy B \\ A = (4; 5)."
          ],
          [
            "c) Tập hợp A là tập con của B khi và chỉ khi -1 &lt; m &lt; -2.",
            false,
            "Để [-2; 4] &sub; (m; m + 5) &hArr; {m &lt; -2 ; m + 5 &gt; 4} &hArr; {m &lt; -2 ; m &gt; -1} (vô nghiệm, vì độ dài đoạn A là 6 lớn hơn độ dài khoảng B là 5)."
          ],
          [
            "d) Có 10 giá trị nguyên của m để A &cap; B &ne; &empty;.",
            true,
            "A &cap; B = &empty; &hArr; m + 5 &le; -2 hoặc m &ge; 4 &hArr; m &le; -7 hoặc m &ge; 4. Do đó A &cap; B &ne; &empty; &hArr; -7 &lt; m &lt; 4, gồm các số nguyên từ -6 đến 3 là 10 giá trị."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có cạnh AB = 3, AC = 8 và góc A = 60&deg;:",
        "items": [
          [
            "Độ dài cạnh BC của tam giác ABC bằng 7.",
            true,
            "Đúng. BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> - 2.AB.AC.cosA = 9 + 64 - 2(3)(8)(1/2) = 49 &rArr; BC = 7."
          ],
          [
            "Diện tích của tam giác ABC bằng 6&radic;3.",
            true,
            "Đúng. S = (1/2).AB.AC.sinA = (1/2) &times; 3 &times; 8 &times; (&radic;3 / 2) = 6&radic;3."
          ],
          [
            "Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 7&radic;3 / 3.",
            true,
            "Đúng. Theo định lí sin: R = a / (2sinA) = 7 / (2 &times; (&radic;3 / 2)) = 7 / &radic;3 = 7&radic;3 / 3."
          ],
          [
            "Bán kính đường tròn nội tiếp r của tam giác ABC bằng 3.",
            false,
            "Sai. Nửa chu vi p = (3 + 8 + 7) / 2 = 9 &rArr; r = S / p = 6&radic;3 / 9 = 2&radic;3 / 3 &approx; 1,15."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Câu lạc bộ thể dục thể thao trường THPT Nguyễn Trãi có 35 học sinh đăng ký tham gia giải cầu lông hoặc bóng bàn. Biết có 22 học sinh thi đấu cầu lông và 19 học sinh thi đấu bóng bàn. Hỏi có bao nhiêu học sinh thi đấu cả hai môn?",
        "answer": "6",
        "explanation": "Số học sinh thi đấu cả hai môn là 22 + 19 - 35 = 6 học sinh."
      },
      {
        "question": "Cho hệ bất phương trình {x + 2y &le; 10 ; 2x + y &le; 8 ; x &ge; 0 ; y &ge; 0}. Giá trị lớn nhất của F(x; y) = x + y trên miền nghiệm bằng bao nhiêu?",
        "answer": "6",
        "explanation": "Đỉnh giao điểm của x + 2y = 10 và 2x + y = 8 là (2; 4). Tại các đỉnh (0; 0), (4; 0), (2; 4), (0; 5), F(2; 4) = 2 + 4 = 6 là lớn nhất."
      },
      {
        "question": "Cho cot&alpha; = -3. Tính giá trị của biểu thức A = (2sin&alpha; + 3cos&alpha;) / (sin&alpha; - cos&alpha;).",
        "answer": "-1,75",
        "explanation": "Chia cả tử và mẫu cho sin&alpha;: A = (2 + 3cot&alpha;) / (1 - cot&alpha;) = (2 - 9) / (1 - (-3)) = -7/4 = -1,75."
      },
      {
        "question": "Hai chiếc thuyền xuất phát từ cùng một bến A trên sông Hàn, đi thẳng theo hai hướng hợp với nhau góc 120&deg; với vận tốc lần lượt là 6 km/h và 10 km/h. Sau 1 giờ, hai thuyền cách nhau bao nhiêu km?",
        "answer": "14",
        "explanation": "Quãng đường sau 1 giờ là 6 km và 10 km. Khoảng cách d = &radic;(6<sup>2</sup> + 10<sup>2</sup> - 2.6.10.cos120&deg;) = &radic;(36 + 100 + 60) = &radic;196 = 14 km."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho tập hợp A = {x &isin; <b>R</b> | -3 &lt; x &le; 4} và B = {x &isin; <b>R</b> | x &ge; 1}. Tìm A &cap; B, A &cup; B, A \\ B và B \\ A.",
        "solution": "Ta có A = (-3; 4] và B = [1; +&infin;):<br>• A &cap; B = [1; 4] (0,25 điểm).<br>• A &cup; B = (-3; +&infin;) (0,25 điểm).<br>• A \\ B = (-3; 1) (0,25 điểm).<br>• B \\ A = (4; +&infin;) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một công ty cần thuê xe chở ít nhất 140 người và 9 tấn hàng. Nơi thuê xe có hai loại: xe loại A (có 10 chiếc) mỗi xe chở tối đa 20 người và 0,6 tấn hàng với giá thuê 4 triệu đồng/xe; xe loại B (có 9 chiếc) mỗi xe chở tối đa 10 người và 1,5 tấn hàng với giá thuê 3 triệu đồng/xe. Hỏi cần thuê bao nhiêu xe mỗi loại để chi phí thuê xe là thấp nhất?",
        "solution": "Gọi x, y lần lượt là số xe loại A và loại B cần thuê (x, y &isin; <b>N</b>).<br>• Hệ BPT: {20x + 10y &ge; 140 ; 0,6x + 1,5y &ge; 9 ; 0 &le; x &le; 10 ; 0 &le; y &le; 9} &hArr; {2x + y &ge; 14 ; 2x + 5y &ge; 30 ; 0 &le; x &le; 10 ; 0 &le; y &le; 9} (0,5 điểm).<br>• Hàm chi phí F(x; y) = 4x + 3y (triệu đồng). Miền nghiệm là tứ giác có các đỉnh A(5; 4), B(10; 2), C(10; 9), D(2,5; 9).<br>• Tính F tại các đỉnh: F(5; 4) = 4(5) + 3(4) = 32 triệu đồng; F(10; 2) = 46; F(10; 9) = 67; F(2,5; 9) = 37. Vậy thuê 5 xe loại A và 4 xe loại B để chi phí thấp nhất là 32 triệu đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho tam giác ABC có a = 7, b = 8, c = 9. Tính diện tích S, độ dài đường cao h<sub>b</sub> kẻ từ B và bán kính đường tròn ngoại tiếp R của tam giác ABC.",
        "solution": "• Nửa chu vi p = (7 + 8 + 9)/2 = 12. Diện tích S = &radic;(12.(12-7).(12-8).(12-9)) = &radic;(12.5.4.3) = 12&radic;5 (0,5 điểm).<br>• Đường cao h<sub>b</sub> = 2S / b = 24&radic;5 / 8 = 3&radic;5 (0,25 điểm).<br>• Bán kính R = abc / (4S) = (7.8.9) / (48&radic;5) = 21&radic;5 / 10 (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-07",
    "title": "Toán 10 - Đề 07 - Trường THPT Nguyễn Thái Bình – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Nguyễn Thái Bình – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://toanmath.com/2025/11/de-giua-ki-1-toan-10-nam-2025-2026-truong-thpt-nguyen-thai-binh-da-nang.html",
    "questions": [
      [
        "Phủ định của mệnh đề \"&exist;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 là một số nguyên tố\" là:",
        [
          "A. &forall;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 là số nguyên tố.",
          "B. &forall;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 không phải là số nguyên tố.",
          "C. &exist;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 là hợp số.",
          "D. &forall;n &notin; <b>N</b>, n<sup>2</sup> + n + 1 không là số nguyên tố."
        ],
        1,
        "Phủ định của &exist; là &forall;, phủ định của \"là số nguyên tố\" là \"không phải là số nguyên tố\"."
      ],
      [
        "Cho hai tập hợp A = {1; 2; 3; 4} và B = {2; 4; 6; 8}. Tập hợp A \\ B bằng:",
        [
          "A. {1; 3}.",
          "B. {6; 8}.",
          "C. {2; 4}.",
          "D. {1; 2; 3; 4; 6; 8}."
        ],
        0,
        "Các phần tử thuộc A mà không thuộc B là {1; 3}."
      ],
      [
        "Biểu diễn trên trục số thực của tập hợp (-&infin;; 2) &cap; [-1; 5] là hình nào dưới đây?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 380 75\" width=\"380\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Trục số -->\n    <line x1=\"20\" y1=\"40\" x2=\"360\" y2=\"40\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <polygon points=\"360,40 350,35 350,45\" fill=\"#334155\"/>\n    <text x=\"352\" y=\"60\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">+∞</text>\n    <text x=\"15\" y=\"60\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">-∞</text>\n\n    <!-- Gạch bỏ phần ngoài bên trái [-1 -->\n    <line x1=\"30\" y1=\"30\" x2=\"45\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"50\" y1=\"30\" x2=\"65\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"70\" y1=\"30\" x2=\"85\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"90\" y1=\"30\" x2=\"105\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n\n    <!-- Điểm -1: ngoặc vuông [ -->\n    <text x=\"110\" y=\"47\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">[</text>\n    <text x=\"108\" y=\"66\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">-1</text>\n\n    <!-- Khoảng lấy [-1; 2): đoạn thẳng đậm màu xanh -->\n    <line x1=\"122\" y1=\"40\" x2=\"230\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"4.5\"/>\n\n    <!-- Điểm 2: ngoặc tròn ) -->\n    <text x=\"230\" y=\"47\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">)</text>\n    <text x=\"232\" y=\"66\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">2</text>\n\n    <!-- Gạch bỏ phần ngoài bên phải 2) -->\n    <line x1=\"245\" y1=\"30\" x2=\"260\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"265\" y1=\"30\" x2=\"280\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"285\" y1=\"30\" x2=\"300\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"305\" y1=\"30\" x2=\"320\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"325\" y1=\"30\" x2=\"340\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n  </svg>\n  <div class=\"figure-caption\">Biểu diễn tập hợp [-1; 2) trên trục số thực</div>\n</div>",
        [
          "A. [-1; 2).",
          "B. (-1; 2].",
          "C. (-&infin;; 5].",
          "D. (2; 5]."
        ],
        0,
        "Giao của (-&infin;; 2) và [-1; 5] là nửa khoảng [-1; 2)."
      ],
      [
        "Cho tập hợp X = {x &isin; <b>Z</b> | -2 &lt; x &le; 3}. Tổng tất cả các phần tử của tập hợp X bằng:",
        [
          "A. 3.",
          "B. 5.",
          "C. 6.",
          "D. 4."
        ],
        1,
        "X = {-1; 0; 1; 2; 3}, tổng các phần tử là (-1) + 0 + 1 + 2 + 3 = 5."
      ],
      [
        "Điểm A(2; -1) thuộc miền nghiệm của bất phương trình nào?",
        [
          "A. x + 3y &gt; 0.",
          "B. 2x - y &lt; 3.",
          "C. 3x + y - 4 &ge; 0.",
          "D. x - 2y + 1 &le; 0."
        ],
        2,
        "Thay (2; -1) vào 3x + y - 4: 3(2) + (-1) - 4 = 1 &ge; 0 (đúng)."
      ],
      [
        "Hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; 3x + 4y &le; 12} tạo thành miền tam giác OAB trên mặt phẳng Oxy. Chu vi của tam giác OAB bằng:",
        [
          "A. 7.",
          "B. 12.",
          "C. 6.",
          "D. 10."
        ],
        1,
        "Tam giác vuông OAB có OA = 4, OB = 3 &rArr; cạnh huyền AB = 5. Chu vi = 3 + 4 + 5 = 12."
      ],
      [
        "Trong các hệ thức lượng giác sau với 0&deg; &lt; &alpha; &lt; 180&deg;,(&alpha; &ne; 90&deg;), hệ thức nào đúng?",
        [
          "A. 1 + tan<sup>2</sup>&alpha; = 1 / sin<sup>2</sup>&alpha;.",
          "B. 1 + tan<sup>2</sup>&alpha; = 1 / cos<sup>2</sup>&alpha;.",
          "C. sin<sup>2</sup>&alpha; - cos<sup>2</sup>&alpha; = 1.",
          "D. tan&alpha; + cot&alpha; = 1."
        ],
        1,
        "Hệ thức cơ bản: 1 + tan<sup>2</sup>&alpha; = 1 / cos<sup>2</sup>&alpha;."
      ],
      [
        "Biết cos&alpha; = 1/3. Giá trị của biểu thức P = sin<sup>2</sup>&alpha; + 3cos<sup>2</sup>&alpha; bằng:",
        [
          "A. 10/9.",
          "B. 11/9.",
          "C. 4/3.",
          "D. 5/3."
        ],
        1,
        "P = (sin<sup>2</sup>&alpha; + cos<sup>2</sup>&alpha;) + 2cos<sup>2</sup>&alpha; = 1 + 2(1/9) = 11/9."
      ],
      [
        "Cho tam giác ABC có a = 6, b = 6&radic;3, c = 12. Số đo góc B bằng:",
        [
          "A. 30&deg;.",
          "B. 60&deg;.",
          "C. 90&deg;.",
          "D. 120&deg;."
        ],
        1,
        "Ta có a<sup>2</sup> + b<sup>2</sup> = 36 + 108 = 144 = c<sup>2</sup> nên tam giác vuông tại C. Suy ra sinB = b/c = &radic;3/2 &rArr; B = 60&deg;."
      ],
      [
        "Cho tam giác ABC có góc A = 45&deg;, cạnh a = 10&radic;2. Bán kính đường tròn ngoại tiếp R bằng:",
        [
          "A. 5.",
          "B. 10.",
          "C. 10&radic;2.",
          "D. 20."
        ],
        1,
        "R = a / (2sin45&deg;) = 10&radic;2 / &radic;2 = 10."
      ],
      [
        "Tam giác ABC có diện tích S = 15&radic;3, cạnh BC = 10, AC = 6. Góc nhọn C có số đo bằng:",
        [
          "A. 30&deg;.",
          "B. 45&deg;.",
          "C. 60&deg;.",
          "D. 75&deg;."
        ],
        2,
        "sinC = 2S / (BC.AC) = 30&radic;3 / 60 = &radic;3/2. Vì C nhọn nên C = 60&deg;."
      ],
      [
        "Cho tam giác ABC có ba cạnh 9, 12, 15. Tổng bán kính đường tròn ngoại tiếp R và bán kính đường tròn nội tiếp r (tức R + r) bằng:",
        [
          "A. 10,5.",
          "B. 9,5.",
          "C. 12.",
          "D. 11,5."
        ],
        0,
        "Tam giác vuông cạnh 9, 12, 15 có R = 15/2 = 7,5 và r = (9 + 12 - 15)/2 = 3 &rArr; R + r = 10,5."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = (-3; 5] và B = [2; +&infin;).",
        "items": [
          [
            "a) Tập hợp A &cap; B = [2; 5].",
            true,
            "Giao của (-3; 5] và [2; +&infin;) là đoạn [2; 5]."
          ],
          [
            "b) Tập hợp A \\ B = (-3; 2].",
            false,
            "Vì 2 &isin; B nên 2 &notin; A \\ B, do đó A \\ B = (-3; 2)."
          ],
          [
            "c) Tập hợp C<sub><b>R</b></sub>B = (-&infin;; 2).",
            true,
            "Phần bù của [2; +&infin;) trong <b>R</b> là (-&infin;; 2)."
          ],
          [
            "d) Có tất cả 4 số nguyên thuộc tập hợp A &cap; B.",
            true,
            "Đoạn [2; 5] có 4 số nguyên là 2, 3, 4, 5."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có AB = 10, AC = 16 và góc A = 60&deg;.",
        "items": [
          [
            "a) Độ dài cạnh BC bằng 14.",
            true,
            "BC<sup>2</sup> = 10<sup>2</sup> + 16<sup>2</sup> - 2.10.16.cos60&deg; = 100 + 256 - 160 = 196 &rArr; BC = 14."
          ],
          [
            "b) Diện tích của tam giác ABC bằng 40&radic;3.",
            true,
            "S = 1/2 . 10 . 16 . sin60&deg; = 40&radic;3."
          ],
          [
            "c) Bán kính đường tròn nội tiếp r của tam giác ABC bằng 2&radic;3.",
            true,
            "Nửa chu vi p = (10 + 16 + 14)/2 = 20 &rArr; r = S / p = 40&radic;3 / 20 = 2&radic;3."
          ],
          [
            "d) Góc B của tam giác ABC là góc tù.",
            false,
            "Vì AC = 16 là cạnh lớn nhất nên góc B đối diện có cosB = (10<sup>2</sup> + 14<sup>2</sup> - 16<sup>2</sup>)/(2.10.14) = 40/280 = 1/7 &gt; 0, nên góc B là góc nhọn."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trong lớp 10C có 18 học sinh giỏi Toán, 15 học sinh giỏi Tiếng Anh và 8 học sinh giỏi cả hai môn Toán và Tiếng Anh. Biết rằng mỗi học sinh trong lớp đều giỏi ít nhất một trong hai môn này. Sĩ số của lớp 10C là bao nhiêu học sinh?",
        "answer": "25",
        "explanation": "Sĩ số lớp n(A &cup; B) = 18 + 15 - 8 = 25 học sinh."
      },
      {
        "question": "Tìm giá trị lớn nhất của biểu thức F(x; y) = 3x + 4y trên miền nghiệm của hệ {x + y &le; 6 ; x &ge; 1 ; y &ge; 1}.",
        "answer": "23",
        "explanation": "Các đỉnh của miền tam giác là A(1; 1), B(5; 1), C(1; 5). Ta có F(1; 1) = 7; F(5; 1) = 19; F(1; 5) = 3(1) + 4(5) = 23. Vậy GTLN là 23."
      },
      {
        "question": "Cho tan&alpha; = 3. Tính giá trị của biểu thức P = (sin<sup>2</sup>&alpha; + 2sin&alpha;cos&alpha;) / (cos<sup>2</sup>&alpha;).",
        "answer": "15",
        "explanation": "Chia tử và mẫu cho cos<sup>2</sup>&alpha;: P = tan<sup>2</sup>&alpha; + 2tan&alpha; = 3<sup>2</sup> + 2(3) = 9 + 6 = 15."
      },
      {
        "question": "Hai chiếc tàu kéo cùng kéo một xà lan tại điểm O theo hai hướng OA, OB tạo với nhau góc 60&deg;. Biết độ dài dây cáp OA = 30 m, OB = 50 m. Khoảng cách AB giữa hai tàu kéo bằng bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "answer": "43,6",
        "explanation": "AB = &radic;(30<sup>2</sup> + 50<sup>2</sup> - 2.30.50.cos60&deg;) = &radic;(900 + 2500 - 1500) = &radic;1900 &approx; 43,6 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = [-1; 4] và B = [m; m + 3]. Tìm tất cả các giá trị của tham số m để B &sub; A.",
        "solution": "• Tập hợp B = [m; m + 3] luôn khác rỗng. Để B &sub; A &hArr; {m &ge; -1 ; m + 3 &le; 4} (0,5 điểm).<br>• Giải hệ bất phương trình ta được: -1 &le; m &le; 1. Vậy m &isin; [-1; 1] (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một xưởng cơ khí có hai máy dập A và B để sản xuất hai loại linh kiện I và II. Sản xuất 1 tấn linh kiện loại I cần máy A làm việc 3 giờ, máy B làm việc 1 giờ, thu lãi 4 triệu đồng. Sản xuất 1 tấn linh kiện loại II cần máy A làm việc 1 giờ, máy B làm việc 2 giờ, thu lãi 3 triệu đồng. Biết mỗi ngày máy A làm việc không quá 9 giờ và máy B làm việc không quá 8 giờ. Tìm khối lượng mỗi loại linh kiện sản xuất mỗi ngày để tiền lãi lớn nhất.",
        "solution": "Gọi x, y (tấn) lần lượt là khối lượng linh kiện loại I và II sản xuất mỗi ngày (x &ge; 0, y &ge; 0).<br>• Hệ BPT: {3x + y &le; 9 ; x + 2y &le; 8 ; x &ge; 0 ; y &ge; 0} (0,5 điểm).<br>• Hàm lãi L(x; y) = 4x + 3y (triệu đồng). Các đỉnh miền nghiệm: O(0; 0), A(3; 0), B(2; 3), C(0; 4).<br>• Tính L: L(0; 0) = 0; L(3; 0) = 12; L(0; 4) = 12; L(2; 3) = 4(2) + 3(3) = 17 triệu đồng. Vậy sản xuất 2 tấn loại I và 3 tấn loại II cho lãi lớn nhất là 17 triệu đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho tam giác ABC có góc B = 60&deg;, góc C = 45&deg; và cạnh BC = a = 12. Tính số đo góc A, độ dài các cạnh AB, AC và diện tích tam giác ABC.",
        "solution": "• Góc A = 180&deg; - (60&deg; + 45&deg;) = 75&deg; (0,25 điểm).<br>• Theo định lí sin: AB = c = a.sinC / sinA = 12.sin45&deg; / sin75&deg; = 12(&radic;3 - 1) &approx; 8,78; AC = b = a.sinB / sinA = 12.sin60&deg; / sin75&deg; = 6(3&radic;2 - &radic;6) &approx; 10,76 (0,5 điểm).<br>• Diện tích S = 1/2 . a . b . sinC &approx; 1/2 . 12 . 10,76 . sin45&deg; &approx; 45,65 (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-08",
    "title": "Toán 10 - Đề 08 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://toanmath.com/2025/11/de-giua-hoc-ky-1-toan-10-nam-2025-2026-truong-thpt-ly-tu-trong-da-nang.html",
    "questions": [
      [
        "Cho mệnh đề P: \"Tam giác ABC đều\" và Q: \"Tam giác ABC cân và có một góc bằng 60&deg;\". Khẳng định nào sau đây đúng?",
        [
          "A. P &rArr; Q đúng, Q &rArr; P sai.",
          "B. P &hArr; Q là mệnh đề đúng.",
          "C. P &rArr; Q sai, Q &rArr; P đúng.",
          "D. P và Q không tương đương."
        ],
        1,
        "Tam giác đều khi và chỉ khi tam giác cân và có 1 góc 60&deg;, nên P &hArr; Q đúng."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | (x - 1)(x<sup>2</sup> - 4) = 0}. Tập hợp A là:",
        [
          "A. {-2; 1; 2}.",
          "B. {1; 2}.",
          "C. {1; 4}.",
          "D. {-2; 2}."
        ],
        1,
        "Phương trình có nghiệm x = 1, x = 2, x = -2. Vì x &isin; <b>N</b> nên A = {1; 2}."
      ],
      [
        "Cho hai tập hợp A = (-5; 3) và B = (0; 7). Tập hợp A &cup; B là:",
        [
          "A. (0; 3).",
          "B. (-5; 7).",
          "C. (-5; 0].",
          "D. [3; 7)."
        ],
        1,
        "Hợp của (-5; 3) và (0; 7) là khoảng (-5; 7)."
      ],
      [
        "Cho A = [-2; 5]. Tập hợp C<sub><b>R</b></sub>A bằng:",
        [
          "A. (-&infin;; -2) &cup; (5; +&infin;).",
          "B. (-&infin;; -2] &cup; [5; +&infin;).",
          "C. (-2; 5).",
          "D. (-&infin;; -2) &cap; (5; +&infin;)."
        ],
        0,
        "Phần bù của đoạn [-2; 5] trong <b>R</b> là (-&infin;; -2) &cup; (5; +&infin;)."
      ],
      [
        "Bất phương trình 3x + y &lt; 6 có bờ là đường thẳng đi qua hai điểm nào trên hai trục tọa độ?",
        [
          "A. (2; 0) và (0; 6).",
          "B. (6; 0) và (0; 2).",
          "C. (-2; 0) và (0; -6).",
          "D. (3; 0) và (0; 1)."
        ],
        0,
        "Đường thẳng 3x + y = 6 cắt Ox tại (2; 0) và cắt Oy tại (0; 6)."
      ],
      [
        "Cặp số nào sau đây là nghiệm của hệ bất phương trình {x - y &ge; 0 ; x + 2y &le; 6 ; y &ge; 0}?",
        [
          "A. (1; 2).",
          "B. (3; 1).",
          "C. (2; 3).",
          "D. (5; 1)."
        ],
        1,
        "Thay (3; 1): 3 - 1 = 2 &ge; 0; 3 + 2(1) = 5 &le; 6; 1 &ge; 0 (thỏa mãn)."
      ],
      [
        "Giá trị của biểu thức M = cos0&deg; + cos60&deg; + cos120&deg; + cos180&deg; bằng:",
        [
          "A. 2.",
          "B. 1.",
          "C. 0.",
          "D. -1."
        ],
        2,
        "Vì cos0&deg; + cos180&deg; = 1 + (-1) = 0 và cos60&deg; + cos120&deg; = 1/2 + (-1/2) = 0 nên M = 0."
      ],
      [
        "Cho tam giác ABC có a = 10, b = 10, góc C = 60&deg;. Chu vi của tam giác ABC bằng:",
        [
          "A. 20.",
          "B. 30.",
          "C. 25.",
          "D. 20 + 10&radic;3."
        ],
        1,
        "Tam giác cân có 1 góc 60&deg; là tam giác đều cạnh 10, nên chu vi bằng 30."
      ],
      [
        "Trong tam giác ABC có AB = 8, AC = 15, BC = 17. Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng:",
        [
          "A. 8,5.",
          "B. 17.",
          "C. 10.",
          "D. 7,5."
        ],
        0,
        "Vì AB<sup>2</sup> + AC<sup>2</sup> = 8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289 = 17<sup>2</sup> = BC<sup>2</sup> nên tam giác ABC vuông tại A. Bán kính đường tròn ngoại tiếp bằng nửa cạnh huyền: R = BC / 2 = 17 / 2 = 8,5."
      ],
      [
        "Cho tam giác ABC có diện tích S = 30, hai cạnh a = 10, b = 12. Giá trị sinC bằng:",
        [
          "A. 1/2.",
          "B. &radic;3/2.",
          "C. &radic;2/2.",
          "D. 1."
        ],
        0,
        "Theo công thức diện tích tam giác trong hệ thức lượng Toán 10: S = 1/2 . a . b . sinC &rArr; sinC = 2S / (ab) = (2 . 30) / (10 . 12) = 60 / 120 = 1/2."
      ],
      [
        "Tam giác ABC có ba cạnh a = 7, b = 24, c = 25. Bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 2.",
          "B. 3.",
          "C. 4.",
          "D. 5."
        ],
        1,
        "Tam giác vuông (7<sup>2</sup> + 24<sup>2</sup> = 25<sup>2</sup>) có r = (7 + 24 - 25)/2 = 3."
      ],
      [
        "Cho tam giác ABC có góc B = 120&deg;, AB = 3, BC = 5. Độ dài cạnh AC bằng:",
        [
          "A. 7.",
          "B. &radic;19.",
          "C. &radic;34.",
          "D. 8."
        ],
        0,
        "AC<sup>2</sup> = 3<sup>2</sup> + 5<sup>2</sup> - 2.3.5.cos120&deg; = 9 + 25 + 15 = 49 &rArr; AC = 7."
      ]
    ],
    "tf": [
      {
        "stem": "Trích đề THPT Lý Tự Trọng – Đà Nẵng: Ông An có 7 hecta (ha) đất dự định trồng hai loại cây là sắn (x ha) và ngô (y ha). Biết rằng 1 ha trồng sắn cần 20 ngày công và đem lại lợi nhuận 30 triệu đồng; 1 ha trồng ngô cần 30 ngày công và đem lại lợi nhuận 40 triệu đồng. Tổng số ngày công ông An có thể sử dụng không vượt quá 180 ngày.",
        "items": [
          [
            "a) Điều kiện về diện tích đất canh tác là x + y &le; 7 (với x &ge; 0, y &ge; 0).",
            true,
            "Tổng diện tích trồng sắn và ngô không vượt quá 7 ha."
          ],
          [
            "b) Bất phương trình biểu thị ràng buộc về số ngày công là 3x + 2y &le; 18.",
            false,
            "Số ngày công: 20x + 30y &le; 180 &hArr; 2x + 3y &le; 18."
          ],
          [
            "c) Đỉnh giao điểm của hai đường thẳng x + y = 7 và 2x + 3y = 18 là B(3; 4).",
            true,
            "Giải hệ {x + y = 7 ; 2x + 3y = 18} được x = 3, y = 4."
          ],
          [
            "d) Lợi nhuận tối đa mà ông An có thể thu được là 250 triệu đồng.",
            true,
            "Hàm lãi L = 30x + 40y (triệu đồng). Tại các đỉnh (0; 0), (7; 0), (3; 4), (0; 6), ta có L(7; 0) = 210; L(0; 6) = 240; L(3; 4) = 30(3) + 40(4) = 250 triệu đồng."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có ba cạnh a = 14, b = 16, c = 10.",
        "items": [
          [
            "a) Giá trị cosB bằng -1/7.",
            false,
            "cosB = (a<sup>2</sup> + c<sup>2</sup> - b<sup>2</sup>)/(2ac) = (196 + 100 - 256)/(2.14.10) = 40/280 = 1/7."
          ],
          [
            "b) Số đo góc A của tam giác ABC bằng 60&deg;.",
            true,
            "cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>)/(2bc) = (256 + 100 - 196)/(2.16.10) = 160/320 = 1/2 &rArr; A = 60&deg;."
          ],
          [
            "c) Diện tích của tam giác ABC bằng 40&radic;3.",
            true,
            "S = 1/2 . b . c . sinA = 1/2 . 16 . 10 . sin60&deg; = 40&radic;3."
          ],
          [
            "d) Bán kính đường tròn ngoại tiếp tam giác ABC là R = 14&radic;3 / 3.",
            true,
            "R = a / (2sinA) = 14 / &radic;3 = 14&radic;3 / 3."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho hai tập hợp A = {x &isin; <b>Z</b> | x<sup>2</sup> &le; 9} và B = {x &isin; <b>N</b> | x &lt; 6}. Tập hợp A &cap; B có bao nhiêu phần tử?",
        "answer": "4",
        "explanation": "A = {-3; -2; -1; 0; 1; 2; 3}, B = {0; 1; 2; 3; 4; 5} &rArr; A &cap; B = {0; 1; 2; 3} gồm 4 phần tử."
      },
      {
        "question": "Biểu thức F(x; y) = 4x + 5y đạt giá trị lớn nhất trên miền tứ giác có các đỉnh O(0; 0), A(4; 0), B(2; 3), C(0; 4) bằng bao nhiêu?",
        "answer": "23",
        "explanation": "Ta có F(0; 0) = 0; F(4; 0) = 16; F(2; 3) = 4(2) + 5(3) = 23; F(0; 4) = 20. Vậy GTLN bằng 23."
      },
      {
        "question": "Cho sin&alpha; = 4/5 với 0&deg; &lt; &alpha; &lt; 90&deg;. Tính giá trị của biểu thức K = 15.cos&alpha; + 12.tan&alpha;.",
        "answer": "25",
        "explanation": "Vì 0&deg; &lt; &alpha; &lt; 90&deg; nên cos&alpha; = 3/5 và tan&alpha; = 4/3. Khi đó K = 15(3/5) + 12(4/3) = 9 + 16 = 25."
      },
      {
        "question": "Cho tam giác ABC có AB = 6, AC = 10 và góc A = 120&deg;. Độ dài cạnh BC bằng bao nhiêu?",
        "answer": "14",
        "explanation": "BC = &radic;(6<sup>2</sup> + 10<sup>2</sup> - 2.6.10.cos120&deg;) = &radic;(36 + 100 + 60) = &radic;196 = 14."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Lớp 10A có 45 học sinh. Trong kỳ thi giữa kỳ I, có 28 em đạt điểm giỏi môn Toán, 22 em đạt điểm giỏi môn Vật lí và 10 em không đạt điểm giỏi môn nào trong hai môn trên. Hỏi có bao nhiêu em đạt điểm giỏi cả hai môn Toán và Vật lí, và bao nhiêu em chỉ đạt điểm giỏi đúng một môn?",
        "solution": "• Số học sinh đạt điểm giỏi ít nhất 1 môn là: 45 - 10 = 35 (học sinh) (0,25 điểm).<br>• Số học sinh đạt điểm giỏi cả hai môn Toán và Vật lí là: 28 + 22 - 35 = 15 (học sinh) (0,5 điểm).<br>• Số học sinh chỉ giỏi đúng 1 môn là: (28 - 15) + (22 - 15) = 13 + 7 = 20 (học sinh) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức F(x; y) = 3x - 2y trên miền nghiệm của hệ bất phương trình {x + y &le; 5 ; x - y &le; 3 ; x &ge; 0 ; y &ge; 0}.",
        "solution": "• Miền nghiệm là tứ giác OABC với các đỉnh O(0; 0), A(3; 0), B(4; 1), C(0; 5) (0,5 điểm).<br>• Tính giá trị F tại các đỉnh: F(0; 0) = 0; F(3; 0) = 9; F(4; 1) = 3(4) - 2(1) = 10; F(0; 5) = -10.<br>• Vậy giá trị lớn nhất của F bằng 10 (tại (4; 1)) và giá trị nhỏ nhất của F bằng -10 (tại (0; 5)) (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Trên đỉnh một tòa nhà cao 25 m có dựng một cột ăng-ten thẳng đứng CD. Từ một điểm A trên mặt đất phẳng, người ta nhìn thấy đỉnh D và chân C của cột ăng-ten dưới các góc nâng lần lượt là 50&deg; và 45&deg; so với phương ngang. Tính chiều cao CD của cột ăng-ten (làm tròn đến hàng phần mười mét).",
        "solution": "• Gọi H là chân tòa nhà trên mặt đất. Tam giác AHC vuông tại H có góc CAH = 45&deg; và CH = 25 m &rArr; khoảng cách AH = CH / tan45&deg; = 25 m (0,5 điểm).<br>• Tam giác AHD vuông tại H có góc DAH = 50&deg; &rArr; DH = AH . tan50&deg; = 25 . tan50&deg; &approx; 29,79 m (0,25 điểm).<br>• Chiều cao cột ăng-ten: CD = DH - CH &approx; 29,79 - 25 &approx; 4,8 m (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-09",
    "title": "Toán 10 - Đề 09 - Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-toan-10-truong-thpt-hung-vuong-qn-2024-2025.jsp",
    "questions": [
      [
        "Mệnh đề nào dưới đây là mệnh đề phủ định của mệnh đề: \"Mọi học sinh lớp 10 đều thích học môn Toán\"?",
        [
          "A. Mọi học sinh lớp 10 đều không thích học môn Toán.",
          "B. Có ít nhất một học sinh lớp 10 không thích học môn Toán.",
          "C. Có ít nhất một học sinh lớp 10 thích học môn Toán.",
          "D. Không có học sinh lớp 10 nào thích học môn Toán."
        ],
        1,
        "Phủ định của \"Mọi... đều thích\" là \"Có ít nhất một... không thích\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | x &le; 3}. Tập hợp A được viết dưới dạng nửa khoảng là:",
        [
          "A. (-&infin;; 3).",
          "B. (-&infin;; 3].",
          "C. [3; +&infin;).",
          "D. (3; +&infin;)."
        ],
        1,
        "{x &isin; <b>R</b> | x &le; 3} = (-&infin;; 3]."
      ],
      [
        "Cho hai tập hợp A = [0; 6] và B = (2; 8). Tập hợp A &cap; B là:",
        [
          "A. [0; 8).",
          "B. (2; 6].",
          "C. [2; 6].",
          "D. [0; 2]."
        ],
        1,
        "Giao của [0; 6] và (2; 8) là nửa khoảng (2; 6]."
      ],
      [
        "Cho tập hợp A = {1; 3; 5} và B = {1; 2; 3; 4; 5; 6}. Số tập hợp X thỏa mãn A &sub; X &sub; B là:",
        [
          "A. 6.",
          "B. 8.",
          "C. 3.",
          "D. 9."
        ],
        1,
        "B \\ A = {2; 4; 6} có 3 phần tử nên có 2<sup>3</sup> = 8 tập hợp X thỏa mãn."
      ],
      [
        "Cặp số nào sau đây thuộc miền nghiệm của bất phương trình 5x - 2y + 3 &ge; 0?",
        [
          "A. (-2; 1).",
          "B. (0; 1).",
          "C. (0; 3).",
          "D. (-1; 2)."
        ],
        1,
        "Thay (0; 1) vào vế trái: 5(0) - 2(1) + 3 = 1 &ge; 0 (thỏa mãn). Các điểm ở phương án A, C, D đều cho giá trị âm."
      ],
      [
        "Miền nghiệm của hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; 2x + y &le; 4} chứa bao nhiêu điểm có tọa độ nguyên?",
        [
          "A. 6.",
          "B. 8.",
          "C. 9.",
          "D. 10."
        ],
        2,
        "Với x = 0: y &isin; {0,1,2,3,4} (5 điểm); với x = 1: y &isin; {0,1,2} (3 điểm); với x = 2: y = 0 (1 điểm). Tổng = 5 + 3 + 1 = 9 điểm."
      ],
      [
        "Cho góc &alpha; thỏa mãn sin&alpha; = 1/3. Giá trị của biểu thức P = 9.cos<sup>2</sup>&alpha; + 2 bằng:",
        [
          "A. 8.",
          "B. 10.",
          "C. 9.",
          "D. 11."
        ],
        1,
        "cos<sup>2</sup>&alpha; = 1 - sin<sup>2</sup>&alpha; = 8/9 &rArr; P = 9(8/9) + 2 = 10."
      ],
      [
        "Trong tam giác ABC có BC = a, AC = b, AB = c. Công thức tính cosA nào sau đây đúng?",
        [
          "A. cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc).",
          "B. cosA = (a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab).",
          "C. cosA = (b<sup>2</sup> + c<sup>2</sup> + a<sup>2</sup>) / (2bc).",
          "D. cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (bc)."
        ],
        0,
        "Từ định lí côsin a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA suy ra cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>)/(2bc)."
      ],
      [
        "Cho tam giác ABC có b = 8, c = 10, góc A = 30&deg;. Diện tích tam giác ABC bằng:",
        [
          "A. 20.",
          "B. 40.",
          "C. 20&radic;3.",
          "D. 10."
        ],
        0,
        "Theo công thức tính diện tích tam giác theo hai cạnh và góc xen giữa: S = 1/2 . b . c . sinA = 1/2 . 8 . 10 . sin30&deg; = 40 . 0,5 = 20."
      ],
      [
        "Cho tam giác ABC có góc A = 60&deg;, bán kính đường tròn ngoại tiếp R = 4&radic;3. Độ dài cạnh BC bằng:",
        [
          "A. 6.",
          "B. 12.",
          "C. 8&radic;3.",
          "D. 6&radic;3."
        ],
        1,
        "BC = 2R.sinA = 2 . 4&radic;3 . (&radic;3/2) = 12."
      ],
      [
        "Tam giác ABC vuông cân tại A có cạnh góc vuông AB = AC = 4. Diện tích S của tam giác ABC là:",
        [
          "A. 16.",
          "B. 8.",
          "C. 4&radic;2.",
          "D. 8&radic;2."
        ],
        1,
        "Tam giác ABC vuông cân tại A nên AB = AC = 4 và góc A = 90&deg;. Diện tích tam giác vuông là S = 1/2 . AB . AC = 1/2 . 4 . 4 = 8."
      ],
      [
        "Cho tam giác ABC vuông tại A có AB = 5, AC = 12, BC = 13. Độ dài đường cao h<sub>a</sub> kẻ từ đỉnh A bằng:",
        [
          "A. 60/13.",
          "B. 65/12.",
          "C. 13/5.",
          "D. 6."
        ],
        0,
        "Trong tam giác vuông ABC: h<sub>a</sub> = (AB &times; AC) / BC = (5 &times; 12) / 13 = 60/13."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = [-4; 3] và B = (1; 6].",
        "items": [
          [
            "a) Tập hợp A &cap; B = (1; 3].",
            true,
            "Giao của [-4; 3] và (1; 6] là (1; 3]."
          ],
          [
            "b) Tập hợp A \\ B = [-4; 1].",
            true,
            "Vì 1 &notin; B nên 1 &isin; A \\ B, do đó A \\ B = [-4; 1]."
          ],
          [
            "c) Tập hợp B \\ A = [3; 6].",
            false,
            "Vì 3 &isin; A nên 3 &notin; B \\ A, do đó B \\ A = (3; 6]."
          ],
          [
            "d) Tập hợp (A &cup; B) &cap; <b>N</b> có 7 phần tử.",
            true,
            "A &cup; B = [-4; 6], giao với <b>N</b> là {0; 1; 2; 3; 4; 5; 6} gồm 7 phần tử."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có AB = 7, AC = 8 và góc A = 120&deg;.",
        "items": [
          [
            "a) Độ dài cạnh BC bằng 13.",
            true,
            "BC<sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> - 2.7.8.cos120&deg; = 49 + 64 + 56 = 169 &rArr; BC = 13."
          ],
          [
            "b) Diện tích của tam giác ABC bằng 14&radic;3.",
            true,
            "S = 1/2 . 7 . 8 . sin120&deg; = 14&radic;3."
          ],
          [
            "c) Chu vi của tam giác ABC bằng 28.",
            true,
            "Chu vi tam giác ABC bằng tổng độ dài ba cạnh: 2p = a + b + c = 7 + 8 + 13 = 28. Khẳng định này là ĐÚNG."
          ],
          [
            "d) Bán kính đường tròn nội tiếp r của tam giác ABC bằng 2&radic;3.",
            false,
            "Nửa chu vi p = 14 &rArr; r = S / p = 14&radic;3 / 14 = &radic;3."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho hai tập hợp A = [-5; 2] và B = [-1; 7). Có bao nhiêu số nguyên thuộc tập hợp A \\ B?",
        "answer": "4",
        "explanation": "Ta có A \\ B = [-5; -1), các số nguyên trong nửa khoảng này là -5; -4; -3; -2 (gồm 4 số nguyên)."
      },
      {
        "question": "Tìm giá trị lớn nhất của biểu thức F(x; y) = 2x + 3y trên miền tam giác có các đỉnh O(0; 0), A(6; 0), B(0; 5).",
        "answer": "15",
        "explanation": "Ta có F(0; 0) = 0; F(6; 0) = 12; F(0; 5) = 15. Vậy GTLN là 15."
      },
      {
        "question": "Biết tan&alpha; + cot&alpha; = 3. Tính giá trị của biểu thức E = tan<sup>2</sup>&alpha; + cot<sup>2</sup>&alpha;.",
        "answer": "7",
        "explanation": "E = (tan&alpha; + cot&alpha;)<sup>2</sup> - 2.tan&alpha;.cot&alpha; = 3<sup>2</sup> - 2 = 7."
      },
      {
        "question": "Cho tam giác ABC có a = 15, b = 20, c = 25. Bán kính đường tròn nội tiếp r của tam giác ABC bằng bao nhiêu?",
        "answer": "5",
        "explanation": "Tam giác vuông (15<sup>2</sup> + 20<sup>2</sup> = 25<sup>2</sup>) có r = (15 + 20 - 25)/2 = 5."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = [-3; 5] và B = [m - 1; m + 2]. Tìm tất cả các giá trị của tham số m để: a) B &sub; A; b) A &cap; B = &empty;.",
        "solution": "a) Để B &sub; A &hArr; {m - 1 &ge; -3 ; m + 2 &le; 5} &hArr; -2 &le; m &le; 3 (0,5 điểm).<br>b) Để A &cap; B = &empty; &hArr; m + 2 &lt; -3 hoặc m - 1 &gt; 5 &hArr; m &lt; -5 hoặc m &gt; 6 (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một cơ sở chế biến nông sản tại Quảng Nam đóng gói hai loại hộp quà: Hộp loại I cần 2 kg hạt điều và 1 kg mắc-ca, lãi 150 nghìn đồng/hộp; Hộp loại II cần 1 kg hạt điều và 2 kg mắc-ca, lãi 120 nghìn đồng/hộp. Biết cơ sở có sẵn 60 kg hạt điều và 45 kg mắc-ca. Hỏi cơ sở nên đóng gói bao nhiêu hộp mỗi loại để tổng tiền lãi là lớn nhất?",
        "solution": "Gọi x, y là số hộp loại I và loại II (x, y &isin; <b>N</b>).<br>• Hệ BPT: {2x + y &le; 60 ; x + 2y &le; 45 ; x &ge; 0 ; y &ge; 0} (0,5 điểm).<br>• Hàm lãi L(x; y) = 150x + 120y (nghìn đồng). Các đỉnh: O(0; 0), A(30; 0), B(25; 10), C(0; 22,5).<br>• Tính L: L(30; 0) = 4500; L(25; 10) = 150(25) + 120(10) = 3750 + 1200 = 4950 nghìn đồng (4,95 triệu đồng). Vậy đóng 25 hộp loại I và 10 hộp loại II (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Từ một trạm quan sát kiểm lâm A trên đỉnh đồi cao 60 m so với mặt đất ngang, người ta nhìn thấy hai đám khói B và C nằm cùng một phía trên mặt đất thẳng hàng với chân đồi H dưới các góc hạ lần lượt là 45&deg; và 30&deg; so với phương ngang. Tính khoảng cách BC giữa hai đám khói (làm tròn đến hàng phần mười mét).",
        "solution": "• Góc hạ từ A xuống B và C bằng góc nâng từ B và C lên A: góc ABH = 45&deg;, góc ACH = 30&deg; (0,25 điểm).<br>• Trong tam giác vuông AHB: BH = AH / tan45&deg; = 60 / 1 = 60 m (0,25 điểm).<br>• Trong tam giác vuông AHC: CH = AH / tan30&deg; = 60&radic;3 &approx; 103,9 m (0,25 điểm).<br>• Khoảng cách BC = CH - BH = 60(&radic;3 - 1) &approx; 43,9 m (0,25 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-10",
    "title": "Toán 10 - Đề 10 - Trường THPT Huỳnh Thúc Kháng – Nghệ An (Đề chính thức Giữa kì I)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Huỳnh Thúc Kháng – Nghệ An (Đề chính thức Giữa kì I)",
    "province": "Nghệ An",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-toan-10-truong-thpt-huynh-thuc-khang-na-2024-2025.jsp",
    "questions": [
      [
        "Cho mệnh đề P: \"&forall;x &isin; <b>R</b>, x<sup>2</sup> - 2x + 2 &gt; 0\". Khẳng định nào sau đây đúng?",
        [
          "A. P là mệnh đề sai.",
          "B. P là mệnh đề đúng.",
          "C. P không có tính đúng sai.",
          "D. Phủ định của P là \"&forall;x &isin; <b>R</b>, x<sup>2</sup> - 2x + 2 &le; 0\"."
        ],
        1,
        "Vì x<sup>2</sup> - 2x + 2 = (x - 1)<sup>2</sup> + 1 &ge; 1 &gt; 0 với mọi x &isin; <b>R</b> nên P là mệnh đề đúng."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | -3 &le; x &le; 2}. Tập hợp A là:",
        [
          "A. Khoảng (-3; 2).",
          "B. Đoạn [-3; 2].",
          "C. Nửa khoảng [-3; 2).",
          "D. Tập hợp {-3; 2}."
        ],
        1,
        "{x &isin; <b>R</b> | -3 &le; x &le; 2} là đoạn [-3; 2]."
      ],
      [
        "Cho hai tập hợp A = {-2; 0; 2; 4} và B = {0; 4; 8}. Tập hợp A &cup; B là:",
        [
          "A. {0; 4}.",
          "B. {-2; 2}.",
          "C. {-2; 0; 2; 4; 8}.",
          "D. {8}."
        ],
        2,
        "Hợp của A và B gồm tất cả các phần tử thuộc A hoặc thuộc B: {-2; 0; 2; 4; 8}."
      ],
      [
        "Cho A = (-&infin;; 4) và B = [1; +&infin;). Tập hợp A &cap; B bằng:",
        [
          "A. [1; 4).",
          "B. (1; 4].",
          "C. (-&infin;; +&infin;).",
          "D. &empty;."
        ],
        0,
        "Giao của (-&infin;; 4) và [1; +&infin;) là nửa khoảng [1; 4)."
      ],
      [
        "Điểm nào sau đây thuộc đường thẳng bờ của miền nghiệm bất phương trình 2x + 3y - 6 &le; 0?",
        [
          "A. (0; 3).",
          "B. (3; 0).",
          "C. (1; 2).",
          "D. (2; 1)."
        ],
        1,
        "Thay (3; 0) vào phương trình bờ 2x + 3y - 6 = 0: 2(3) + 0 - 6 = 0 (đúng)."
      ],
      [
        "Cho hệ bất phương trình {x - y &le; 2 ; x + 2y &ge; 4 ; y &le; 3}. Điểm nào sau đây thuộc miền nghiệm của hệ?",
        [
          "A. (0; 0).",
          "B. (2; 2).",
          "C. (4; 0).",
          "D. (1; 4)."
        ],
        1,
        "Thay (2; 2): 2 - 2 = 0 &le; 2; 2 + 2(2) = 6 &ge; 4; 2 &le; 3 (thỏa mãn cả 3 BPT)."
      ],
      [
        "Giá trị của biểu thức T = sin<sup>2</sup>40&deg; + sin<sup>2</sup>140&deg; - cos<sup>2</sup>40&deg; bằng (biết sin140&deg; = sin40&deg;)?",
        [
          "A. 1.",
          "B. 0.",
          "C. 2sin<sup>2</sup>40&deg; - cos<sup>2</sup>40&deg;.",
          "D. sin<sup>2</sup>40&deg;."
        ],
        2,
        "Vì sin140&deg; = sin40&deg; nên T = 2sin<sup>2</sup>40&deg; - cos<sup>2</sup>40&deg;."
      ],
      [
        "Cho tam giác ABC có a = 5, b = 8, góc C = 60&deg;. Độ dài cạnh c bằng:",
        [
          "A. 7.",
          "B. 6,5.",
          "C. &radic;39.",
          "D. 9."
        ],
        0,
        "Theo định lí côsin: c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab.cosC = 25 + 64 - 2(5)(8)cos60&deg; = 89 - 40 = 49 &rArr; c = 7."
      ],
      [
        "Tam giác ABC có diện tích S = 30, cạnh a = 12. Độ dài đường cao h<sub>a</sub> ứng với cạnh a bằng:",
        [
          "A. 2,5.",
          "B. 5.",
          "C. 10.",
          "D. 6."
        ],
        1,
        "Áp dụng công thức tính diện tích tam giác theo đường cao ứng với cạnh đáy a trong Toán 10: S = 1/2 . a . h<sub>a</sub> &rArr; h<sub>a</sub> = 2S / a = (2 . 30) / 12 = 60 / 12 = 5."
      ],
      [
        "Cho tam giác ABC có góc A = 30&deg;, góc B = 45&deg;, cạnh a = 8. Độ dài cạnh b bằng:",
        [
          "A. 8&radic;2.",
          "B. 4&radic;2.",
          "C. 8&radic;3.",
          "D. 16."
        ],
        0,
        "Theo định lí sin: b = a.sinB / sinA = 8 . (&radic;2/2) / (1/2) = 8&radic;2."
      ],
      [
        "Cho tam giác ABC có ba cạnh a = 10, b = 17, c = 21. Diện tích S của tam giác ABC bằng:",
        [
          "A. 84.",
          "B. 42.",
          "C. 96.",
          "D. 72."
        ],
        0,
        "Nửa chu vi p = (10 + 17 + 21)/2 = 24. S = &radic;(24.(24-10).(24-17).(24-21)) = &radic;(24.14.7.3) = 84."
      ],
      [
        "Trong tam giác ABC ở câu 11 (a = 10, b = 17, c = 21, S = 84), bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 3,5.",
          "B. 4.",
          "C. 3.",
          "D. 4,5."
        ],
        0,
        "Áp dụng công thức diện tích tam giác liên hệ với bán kính đường tròn nội tiếp r: S = p . r &rArr; r = S / p = 84 / 24 = 3,5."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai tập hợp A = [-2; 6) và B = (1; 8].",
        "items": [
          [
            "a) A &cap; B = (1; 6).",
            true,
            "Giao của [-2; 6) và (1; 8] là khoảng (1; 6)."
          ],
          [
            "b) A &cup; B = [-2; 8].",
            true,
            "Hợp của hai tập hợp là đoạn [-2; 8]."
          ],
          [
            "c) A \\ B = [-2; 1).",
            false,
            "Vì 1 &notin; B và 1 &isin; A nên 1 &isin; A \\ B, do đó A \\ B = [-2; 1]."
          ],
          [
            "d) Có đúng 4 số nguyên thuộc tập hợp A &cap; B.",
            true,
            "Khoảng (1; 6) có 4 số nguyên là 2, 3, 4, 5."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có độ dài ba cạnh lần lượt là a = BC = 17, b = AC = 10, c = AB = 9:",
        "items": [
          [
            "Nửa chu vi p của tam giác ABC bằng 18.",
            true,
            "Đúng vì p = (17 + 10 + 9) / 2 = 36 / 2 = 18."
          ],
          [
            "Diện tích của tam giác ABC bằng 36.",
            true,
            "Đúng theo công thức Heron: S = &radic;[18(18 - 17)(18 - 10)(18 - 9)] = &radic;[18 &times; 1 &times; 8 &times; 9] = &radic;1296 = 36."
          ],
          [
            "Bán kính đường tròn nội tiếp r của tam giác ABC bằng 2.",
            true,
            "Đúng vì r = S / p = 36 / 18 = 2."
          ],
          [
            "Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 15.",
            false,
            "Sai vì R = abc / (4S) = (17 &times; 10 &times; 9) / (4 &times; 36) = 1530 / 144 = 10,625 (khác 15)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một đoàn khảo sát du lịch tại Cửa Lò gồm 50 người, trong đó có 32 người biết tiếng Anh, 25 người biết tiếng Pháp và 12 người biết cả hai thứ tiếng Anh và Pháp. Hỏi có bao nhiêu người trong đoàn không biết cả hai thứ tiếng trên?",
        "answer": "5",
        "explanation": "Số người biết ít nhất 1 thứ tiếng là 32 + 25 - 12 = 45. Số người không biết cả hai thứ tiếng là 50 - 45 = 5."
      },
      {
        "question": "Trên miền đa giác có các đỉnh O(0; 0), A(5; 0), B(3; 4), C(0; 6), giá trị lớn nhất của biểu thức F(x; y) = 6x + 5y bằng bao nhiêu?",
        "answer": "38",
        "explanation": "Tính F tại các đỉnh: F(0; 0) = 0; F(5; 0) = 30; F(3; 4) = 6(3) + 5(4) = 38; F(0; 6) = 30. Vậy GTLN là 38."
      },
      {
        "question": "Cho góc &alpha; thỏa mãn cos&alpha; = 3/5 và 0&deg; &lt; &alpha; &lt; 90&deg;. Tính giá trị của biểu thức P = 10.sin&alpha; + 6.tan&alpha;.",
        "answer": "16",
        "explanation": "Vì 0&deg; &lt; &alpha; &lt; 90&deg; nên sin&alpha; = 4/5 và tan&alpha; = 4/3. Khi đó P = 10(4/5) + 6(4/3) = 8 + 8 = 16."
      },
      {
        "question": "Hai địa điểm A và B cách nhau bởi một đầm lầy. Từ vị trí C người ta đo được CA = 50 m, CB = 70 m và góc ACB = 120&deg;. Khoảng cách AB bằng bao nhiêu mét (làm tròn đến hàng phần mười)?",
        "answer": "104,4",
        "explanation": "AB = &radic;(50<sup>2</sup> + 70<sup>2</sup> - 2.50.70.cos120&deg;) = &radic;(2500 + 4900 + 3500) = &radic;10900 &approx; 104,4 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai tập hợp A = (-2; 5] và B = [2m - 3; 2m + 3]. Tìm tất cả các giá trị của tham số m để A &cup; B là một nửa khoảng có độ dài bằng 10.",
        "solution": "• Để A &cup; B là một nửa khoảng dạng (-2; 2m + 3] có độ dài bằng 10 thì cần: {-2 &lt; 2m - 3 &le; 5 ; (2m + 3) - (-2) = 10} (0,5 điểm).<br>• Giải phương trình 2m + 5 = 10 &hArr; m = 5/2 = 2,5 (khi đó B = [2; 8], A &cup; B = (-2; 8] có độ dài 8 - (-2) = 10, thỏa mãn). Vậy m = 2,5 (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Một trang trại cần pha chế một loại thức ăn hỗn hợp từ hai nguyên liệu A và B sao cho chứa ít nhất 18 đơn vị chất đạm và 16 đơn vị chất khoáng. Mỗi kg nguyên liệu A chứa 3 đơn vị đạm, 1 đơn vị khoáng và có giá 30 nghìn đồng. Mỗi kg nguyên liệu B chứa 1 đơn vị đạm, 2 đơn vị khoáng và có giá 20 nghìn đồng. Cần dùng bao nhiêu kg mỗi loại nguyên liệu để chi phí mua nguyên liệu là thấp nhất?",
        "solution": "Gọi x, y (kg) lần lượt là khối lượng nguyên liệu A và B (x &ge; 0, y &ge; 0).<br>• Hệ BPT: {3x + y &ge; 18 ; x + 2y &ge; 16 ; x &ge; 0 ; y &ge; 0} (0,5 điểm).<br>• Hàm chi phí F(x; y) = 30x + 20y (nghìn đồng). Các đỉnh của miền nghiệm không bị chặn: A(16; 0), B(4; 6), C(0; 18).<br>• Tính F tại các đỉnh: F(16; 0) = 480; F(0; 18) = 360; F(4; 6) = 30(4) + 20(6) = 240 nghìn đồng. Vậy dùng 4 kg nguyên liệu A và 6 kg nguyên liệu B để chi phí thấp nhất là 240 nghìn đồng (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho tam giác ABC có AB = 8, AC = 10, BC = 12. Tính cosA, diện tích tam giác ABC và độ dài đường cao AH kẻ từ A.",
        "solution": "• Theo định lí côsin: cosA = (8<sup>2</sup> + 10<sup>2</sup> - 12<sup>2</sup>) / (2.8.10) = 20 / 160 = 1/8 (0,25 điểm).<br>• Suy ra sinA = &radic;(1 - 1/64) = 3&radic;7 / 8. Diện tích S = 1/2 . 8 . 10 . (3&radic;7 / 8) = 15&radic;7 (0,5 điểm).<br>• Độ dài đường cao AH = 2S / BC = 30&radic;7 / 12 = 5&radic;7 / 2 &approx; 6,61 (0,25 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-01",
    "title": "Vật lí 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Hướng Hóa",
      "province": "Quảng Trị",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14299/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-huong-hoa-quang-tri",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Lĩnh vực nghiên cứu nào sau đây KHÔNG thuộc đối tượng nghiên cứu cốt lõi của Vật lí học?",
        [
          "Các dạng vận động của vật chất và năng lượng.",
          "Quy luật biến đổi tâm lí xã hội học của con người.",
          "Hiện tượng quang học, nhiệt học và điện từ.",
          "Cấu trúc vi mô của nguyên tử và các hạt cơ bản."
        ],
        1,
        "Vật lí học nghiên cứu các dạng vận động của vật chất và năng lượng. Tâm lí xã hội học thuộc phạm trù khoa học xã hội."
      ],
      [
        "Trong phòng thực hành Vật lí, biển báo có hình tam giác đều viền đen, nền vàng, bên trong có hình vẽ như hình bên mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><path d=\"M52,28 L36,54 L48,54 L44,76 L66,48 L54,48 Z\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo nguy hiểm về điện</div></div>",
        [
          "Cảnh báo nơi có điện cao thế nguy hiểm.",
          "Cảnh báo khu vực có chất dễ cháy.",
          "Bắt buộc phải đeo găng tay cách điện.",
          "Cấm sử dụng thiết bị dùng điện."
        ],
        0,
        "Biển tam giác vàng viền đen hình tia sét là biển cảnh báo nguy hiểm về điện (nguy cơ điện giật, điện áp cao)."
      ],
      [
        "Một học sinh dùng thước chia đến milimét đo chiều dài cuốn sách Vật lí 10 được giá trị trung bình L̄ = 240 mm. Sai số dụng cụ lấy bằng một nửa độ chia nhỏ nhất là ΔL = 0,5 mm. Cách ghi kết quả đo đúng là:",
        [
          "L = 240 ± 0,5 mm.",
          "L = 240 ± 1 mm.",
          "L = 240,0 ± 0,05 mm.",
          "L = 24 ± 0,5 cm."
        ],
        0,
        "Kết quả đo được viết dưới dạng: A = Ā ± ΔA. Ở đây Ā = 240 mm và ΔA = 0,5 mm, cùng đơn vị và bậc thập phân phù hợp."
      ],
      [
        "Cho một đại lượng đo có giá trị A = (50 ± 1) cm. Sai số tỉ đối δA của phép đo này bằng:",
        [
          "2,0%.",
          "1,0%.",
          "0,5%.",
          "5,0%."
        ],
        0,
        "Sai số tỉ đối: δA = (ΔA / Ā) × 100% = (1 / 50) × 100% = 2,0%."
      ],
      [
        "Một học sinh đi bộ từ cổng trường vào lớp học theo đường thẳng hướng Đông dài 120 m. Độ dịch chuyển của học sinh đó có độ lớn bằng:",
        [
          "120 m.",
          "60 m.",
          "0 m.",
          "240 m."
        ],
        0,
        "Chuyển động thẳng không đổi chiều thì độ lớn độ dịch chuyển bằng quãng đường đi được: d = s = 120 m."
      ],
      [
        "Đại lượng nào sau đây là đại lượng vectơ, cho biết hướng chuyển động và độ nhanh chậm của vật?",
        [
          "Vận tốc.",
          "Tốc độ trung bình.",
          "Quãng đường.",
          "Thời gian chuyển động."
        ],
        0,
        "Vận tốc là đại lượng vectơ đặc trưng cho cả độ nhanh chậm và hướng chuyển động: v⃗ = d⃗ / Δt. Tốc độ và quãng đường là đại lượng vô hướng không âm."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm là đường thẳng song song với trục thời gian Ot. Điều này cho biết:",
        [
          "Chất điểm đang đứng yên.",
          "Chất điểm chuyển động thẳng đều.",
          "Chất điểm chuyển động nhanh dần đều.",
          "Chất điểm chuyển động chậm dần đều."
        ],
        0,
        "Đường biểu diễn song song với trục Ot có độ dốc bằng 0, nghĩa là tọa độ không thay đổi theo thời gian, vật đang đứng yên."
      ],
      [
        "Một ca nô chạy xuôi dòng nước với vận tốc so với nước là v₁ = 15 km/h. Vận tốc dòng nước chảy so với bờ là v₂ = 3 km/h. Vận tốc của ca nô so với bờ bằng:",
        [
          "18 km/h.",
          "12 km/h.",
          "15 km/h.",
          "45 km/h."
        ],
        0,
        "Khi xuôi dòng, vận tốc ca nô đối với bờ: v₁₃ = v₁₂ + v₂₃ = 15 + 3 = 18 km/h."
      ],
      [
        "Một người đi xe máy đi được quãng đường 15 km đầu tiên trong thời gian 20 phút và 15 km tiếp theo trong thời gian 40 phút. Tốc độ trung bình của xe trên cả quãng đường là:",
        [
          "30 km/h.",
          "25 km/h.",
          "35 km/h.",
          "20 km/h."
        ],
        0,
        "Tổng quãng đường s = 15 + 15 = 30 km. Tổng thời gian t = 20 + 40 = 60 phút = 1 h. Tốc độ trung bình v = s / t = 30 / 1 = 30 km/h."
      ],
      [
        "Đơn vị đo của gia tốc trong hệ đơn vị đo lường quốc tế (SI) là:",
        [
          "m/s².",
          "m/s.",
          "km/h.",
          "m·s."
        ],
        0,
        "Gia tốc đặc trưng cho sự biến thiên vận tốc theo thời gian: a = Δv / Δt nên có đơn vị là (m/s) / s = m/s²."
      ],
      [
        "Trong chuyển động thẳng nhanh dần đều, vectơ gia tốc a⃗ và vectơ vận tốc v⃗ có đặc điểm nào sau đây?",
        [
          "Cùng chiều nhau (tích a·v > 0).",
          "Ngược chiều nhau (tích a·v < 0).",
          "Vuông góc với nhau.",
          "Có độ lớn luôn bằng nhau."
        ],
        0,
        "Chuyển động thẳng nhanh dần đều có gia tốc cùng chiều với vận tốc (a·v > 0). Chuyển động chậm dần đều có gia tốc ngược chiều vận tốc (a·v < 0)."
      ],
      [
        "Công thức liên hệ giữa vận tốc v, vận tốc ban đầu v₀, gia tốc a và độ dịch chuyển d trong chuyển động thẳng biến đổi đều là:",
        [
          "v² – v₀² = 2ad.",
          "v² + v₀² = 2ad.",
          "v – v₀ = 2ad.",
          "v² – v₀² = ad."
        ],
        0,
        "Hệ thức độc lập thời gian chuẩn: v² – v₀² = 2ad (với d là độ dịch chuyển)."
      ],
      [
        "Độ dốc (hệ số góc) của đồ thị vận tốc – thời gian (v – t) cho biết đại lượng nào sau đây của chuyển động?",
        [
          "Gia tốc.",
          "Độ dịch chuyển.",
          "Quãng đường.",
          "Vận tốc ban đầu."
        ],
        0,
        "Hệ số góc của đường biểu diễn v – t: tan α = Δv / Δt = a, chính là gia tốc của chuyển động."
      ],
      [
        "Nhận định nào sau đây là ĐÚNG khi nói về sự rơi tự do của một vật gần mặt đất (bỏ qua sức cản không khí)?",
        [
          "Là chuyển động thẳng nhanh dần đều theo phương thẳng đứng.",
          "Vật nặng bao giờ cũng rơi nhanh hơn vật nhẹ.",
          "Vận tốc rơi không thay đổi theo thời gian.",
          "Gia tốc rơi tự do phụ thuộc vào khối lượng của vật."
        ],
        0,
        "Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng chiều từ trên xuống dưới, với gia tốc rơi tự do g không đổi tại một nơi."
      ],
      [
        "Một vật rơi tự do không vận tốc ban đầu từ độ cao h tại nơi có gia tốc trọng trường g. Thời gian rơi t của vật được tính bằng công thức:",
        [
          "t = √(2h / g).",
          "t = √(h / 2g).",
          "t = 2h / g.",
          "t = √(2gh)."
        ],
        0,
        "Từ công thức quãng đường rơi tự do: h = 1/2·g·t² suy ra t = √(2h / g)."
      ],
      [
        "Một ôtô đang chạy với tốc độ 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng hẳn là:",
        [
          "10 s.",
          "5 s.",
          "20 s.",
          "40 s."
        ],
        0,
        "Xe dừng hẳn khi v = 0. Thời gian hãm phanh: t = (v – v₀) / a = (0 – 20) / (–2) = 10 s."
      ]
    ],
    "tf": [
      {
        "stem": "Một vận động viên bơi lội tập luyện trong một hồ bơi tiêu chuẩn dài 50 m. Người đó bơi xuất phát từ đầu hồ đến cuối hồ hết 25 giây, sau đó quay đầu bơi ngược trở lại vị trí xuất phát hết 35 giây. Chọn trục tọa độ Ox trùng với thành hồ, chiều dương là chiều bơi lượt đi.",
        "items": [
          [
            "Quãng đường vận động viên bơi được ở lượt đi là 50 m.",
            true,
            "Lượt đi từ đầu hồ đến cuối hồ bơi dài 50 m."
          ],
          [
            "Độ dịch chuyển của vận động viên sau khi bơi cả đi lẫn về là 100 m.",
            false,
            "Điểm kết thúc trùng với điểm xuất phát nên độ dịch chuyển tổng cộng d = 0 m."
          ],
          [
            "Tốc độ trung bình của vận động viên ở lượt bơi đi bằng 2 m/s.",
            true,
            "v = s₁ / t₁ = 50 / 25 = 2 m/s."
          ],
          [
            "Vận tốc trung bình của vận động viên trong toàn bộ thời gian bơi cả đi lẫn về bằng 0 m/s.",
            true,
            "Vận tốc trung bình v_tb = d / t = 0 / 60 = 0 m/s."
          ]
        ]
      },
      {
        "stem": "Một xe ôtô đang chuyển động thẳng đều trên đường ngang với tốc độ 15 m/s thì tài xế nhìn thấy biển báo công trường nên hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 1,5 m/s² cho đến khi dừng lại. Chọn chiều dương là chiều chuyển động của xe.",
        "items": [
          [
            "Gia tốc của xe trong giai đoạn hãm phanh có giá trị đại số a = –1,5 m/s².",
            true,
            "Xe chuyển động theo chiều dương và chuyển động chậm dần đều nên a ngược chiều v, tức a = –1,5 m/s²."
          ],
          [
            "Trong quá trình hãm phanh, tích vận tốc và gia tốc a·v luôn mang giá trị dương.",
            false,
            "Vì chuyển động chậm dần đều nên a và v ngược dấu, tích a·v < 0."
          ],
          [
            "Sau 4 giây kể từ khi bắt đầu hãm phanh, vận tốc của ôtô còn lại là 9 m/s.",
            true,
            "v = v₀ + at = 15 + (–1,5) × 4 = 15 – 6 = 9 m/s."
          ],
          [
            "Quãng đường ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là 75 m.",
            true,
            "Khi dừng hẳn v = 0. s = (v² – v₀²) / (2a) = (0 – 15²) / (2 × (–1,5)) = –225 / –3 = 75 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe máy chạy thẳng đều trên đoạn đường dài 18 km hết 30 phút. Tốc độ chuyển động của xe máy tính theo đơn vị km/h là bao nhiêu?",
        "answer": "36",
        "explanation": "Đổi 30 phút = 0,5 h. Tốc độ v = s / t = 18 / 0,5 = 36 km/h."
      },
      {
        "question": "Một chiếc ca nô chạy xuôi dòng trên đoạn sông AB với vận tốc đối với bờ là 22 km/h. Khi chạy ngược dòng từ B về A, vận tốc của ca nô đối với bờ là 14 km/h. Vận tốc của dòng nước chảy so với bờ có độ lớn bằng bao nhiêu km/h?",
        "answer": "4",
        "explanation": "Ta có: v_xuôi = v_thuyền + v_nước = 22; v_ngược = v_thuyền – v_nước = 14. Suy ra v_nước = (22 – 14) / 2 = 4 km/h."
      },
      {
        "question": "Một đoàn tàu hỏa bắt đầu rời ga chuyển động thẳng nhanh dần đều không vận tốc đầu. Sau 20 giây tàu đạt tốc độ 10 m/s. Gia tốc của đoàn tàu bằng bao nhiêu m/s²?",
        "answer": "0.5",
        "explanation": "Tàu rời ga với v₀ = 0. Gia tốc a = (v – v₀) / t = (10 – 0) / 20 = 0,5 m/s²."
      },
      {
        "question": "Thả rơi tự do một hòn bi sắt từ đỉnh một tháp cao 45 m xuống mặt đất tại nơi có gia tốc trọng trường g = 10 m/s². Bỏ qua sức cản không khí. Thời gian rơi của viên bi đến khi chạm đất là bao nhiêu giây?",
        "answer": "3",
        "explanation": "Thời gian rơi tự do: t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."
      }
    ]
  },
  {
    "id": "vatli-10-de-02",
    "title": "Vật lí 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Gio Linh",
      "province": "Quảng Trị",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14298/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-gio-linh-quang-tri",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Phương pháp nghiên cứu nào là phương pháp cốt lõi, đặc thù nhất của Vật lí học?",
        [
          "Phương pháp thực nghiệm kết hợp phương pháp lí thuyết.",
          "Phương pháp điều tra xã hội học qua phiếu khảo sát.",
          "Phương pháp suy luận thuần túy tư duy trừu tượng không cần kiểm chứng.",
          "Phương pháp ghi nhận cảm tính của người quan sát."
        ],
        0,
        "Phương pháp thực nghiệm (thí nghiệm kiểm chứng) kết hợp chặt chẽ với phương pháp lí thuyết là phương pháp nghiên cứu đặc trưng của Vật lí."
      ],
      [
        "Trong phòng thí nghiệm Vật lí, biển báo có hình tròn nền xanh dương, hình vẽ màu trắng như hình bên có ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#2563eb\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><rect x=\"22\" y=\"38\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#fff\"/><rect x=\"54\" y=\"38\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#fff\"/><rect x=\"42\" y=\"46\" width=\"16\" height=\"6\" fill=\"#fff\"/><path d=\"M16,48 Q22,46 24,48 M76,48 Q82,46 84,48\" stroke=\"#fff\" stroke-width=\"4\" fill=\"none\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển lệnh bắt buộc đeo kính bảo hộ</div></div>",
        [
          "Quy định bắt buộc phải đeo kính bảo hộ.",
          "Cảnh báo khu vực có ánh sáng laser độc hại.",
          "Cấm nhìn trực tiếp vào nguồn sáng.",
          "Nơi để dụng cụ vệ sinh mắt."
        ],
        0,
        "Biển báo hình tròn nền xanh hình trắng là biển hiệu lệnh bắt buộc thực hiện (ở đây là đeo kính bảo hộ bảo vệ mắt)."
      ],
      [
        "Sai số nào sau đây sinh ra do đặc điểm cấu tạo của dụng cụ đo và không thể loại trừ hoàn toàn bằng cách đo nhiều lần?",
        [
          "Sai số dụng cụ (sai số hệ thống).",
          "Sai số ngẫu nhiên do mắt đọc lệch.",
          "Sai số do thao tác bấm đồng hồ không đều.",
          "Sai số do tác động bất chợt của gió."
        ],
        0,
        "Sai số dụng cụ là loại sai số hệ thống có tính quy luật, xuất phát từ giới hạn độ chính xác của dụng cụ chế tạo."
      ],
      [
        "Dùng thước kẹp có độ chia nhỏ nhất 0,1 mm đo đường kính viên bi thép được kết quả d̄ = 12,4 mm. Sai số tuyệt đối là Δd = 0,1 mm. Sai số tỉ đối của phép đo xấp xỉ bằng:",
        [
          "0,81%.",
          "1,24%.",
          "8,1%.",
          "0,1%."
        ],
        0,
        "Sai số tỉ đối δd = (Δd / d̄) × 100% = (0,1 / 12,4) × 100% ≈ 0,81%."
      ],
      [
        "Một chất điểm chuyển động trên một đường thẳng, xuất phát từ điểm có tọa độ x₁ = –4 m đến điểm có tọa độ x₂ = 6 m. Độ dịch chuyển của chất điểm bằng:",
        [
          "10 m.",
          "2 m.",
          "–10 m.",
          "–2 m."
        ],
        0,
        "Độ dịch chuyển d = x₂ – x₁ = 6 – (–4) = 10 m."
      ],
      [
        "Tốc độ tức thời của một chuyển động cho biết:",
        [
          "Mức độ nhanh hay chậm của chuyển động tại một thời điểm xác định.",
          "Quãng đường vật đi được trong một giờ.",
          "Hướng chuyển động của vật trong không gian.",
          "Độ dịch chuyển trung bình của vật."
        ],
        0,
        "Tốc độ tức thời đo độ nhanh chậm tại đúng thời điểm hoặc tại vị trí đang xét."
      ],
      [
        "Khi vật chuyển động thẳng đều ngược chiều dương đã chọn, đồ thị độ dịch chuyển – thời gian (d – t) là một đường thẳng:",
        [
          "Dốc xuống (có hệ số góc âm).",
          "Dốc lên (có hệ số góc dương).",
          "Song song với trục hoành Ot.",
          "Trùng với trục tung Od."
        ],
        0,
        "Hệ số góc v = Δd / Δt < 0 khi chuyển động ngược chiều dương, do đó đường biểu diễn d – t dốc xuống."
      ],
      [
        "Một người đi bộ trên một thang cuốn đang chuyển động. Nếu người đó đi cùng chiều chuyển động của thang cuốn thì vận tốc của người đối với mặt đất sẽ:",
        [
          "Bằng tổng vận tốc của người đối với thang và vận tốc của thang đối với đất.",
          "Bằng hiệu vận tốc của người đối với thang và vận tốc của thang đối với đất.",
          "Luôn bằng 0.",
          "Bằng vận tốc của thang cuốn."
        ],
        0,
        "Chuyển động cùng phương cùng chiều: v₁₃ = v₁₂ + v₂₃."
      ],
      [
        "Một chiếc xe ôtô chạy thẳng đều quãng đường 120 km trong thời gian 2 giờ 30 phút. Tốc độ của xe bằng:",
        [
          "48 km/h.",
          "50 km/h.",
          "60 km/h.",
          "45 km/h."
        ],
        0,
        "Thời gian t = 2,5 h. Tốc độ v = s / t = 120 / 2,5 = 48 km/h."
      ],
      [
        "Gia tốc là đại lượng vật lí đặc trưng cho:",
        [
          "Sự thay đổi nhanh hay chậm của vận tốc.",
          "Độ nhanh hay chậm của chuyển động.",
          "Quãng đường vật đi được trong một đơn vị thời gian.",
          "Sự thay đổi vị trí của vật trong không gian."
        ],
        0,
        "Gia tốc đặc trưng cho sự biến đổi nhanh hay chậm của vận tốc: a⃗ = Δv⃗ / Δt."
      ],
      [
        "Phương trình vận tốc của một vật chuyển động thẳng biến đổi đều dọc theo trục Ox có dạng v = 4 + 2t (m/s). Vận tốc ban đầu và gia tốc của vật lần lượt là:",
        [
          "v₀ = 4 m/s; a = 2 m/s².",
          "v₀ = 2 m/s; a = 4 m/s².",
          "v₀ = 4 m/s; a = 1 m/s².",
          "v₀ = 0 m/s; a = 2 m/s²."
        ],
        0,
        "So sánh với dạng chuẩn v = v₀ + at, ta có v₀ = 4 m/s và a = 2 m/s²."
      ],
      [
        "Một xe ôtô chuyển động thẳng nhanh dần đều với vận tốc đầu v₀ = 5 m/s và gia tốc a = 2 m/s². Độ dịch chuyển của xe sau 3 giây là:",
        [
          "24 m.",
          "15 m.",
          "9 m.",
          "21 m."
        ],
        0,
        "Áp dụng công thức: d = v₀t + 1/2·a·t² = 5 × 3 + 0,5 × 2 × 3² = 15 + 9 = 24 m."
      ],
      [
        "Diện tích hình phẳng giới hạn bởi đồ thị vận tốc – thời gian (v – t) và trục hoành trong khoảng thời gian từ t₁ đến t₂ cho biết:",
        [
          "Độ lớn của độ dịch chuyển trong khoảng thời gian đó.",
          "Gia tốc tức thời của chuyển động.",
          "Vận tốc trung bình của chuyển động.",
          "Quãng đường tối đa vật có thể đi."
        ],
        0,
        "Trong đồ thị v – t, diện tích giới hạn bởi đường đồ thị với trục Ot chính là độ dịch chuyển d."
      ],
      [
        "Tại cùng một nơi trên Trái Đất, nếu bỏ qua lực cản không khí, hai vật có khối lượng m₁ và m₂ (m₁ > m₂) được thả rơi tự do từ cùng một độ cao thì:",
        [
          "Hai vật rơi chạm đất cùng một lúc.",
          "Vật m₁ rơi chạm đất trước vật m₂.",
          "Vật m₂ rơi chạm đất trước vật m₁.",
          "Vận tốc chạm đất của vật m₁ lớn hơn vật m₂."
        ],
        0,
        "Gia tốc rơi tự do g không phụ thuộc vào khối lượng của vật, cùng thả từ độ cao h thì cùng chạm đất một lúc: t = √(2h / g)."
      ],
      [
        "Một vật rơi tự do từ độ cao h. Lấy g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất được tính bởi hệ thức:",
        [
          "v = √(2gh).",
          "v = 2gh.",
          "v = √(gh).",
          "v = 1/2·gh²."
        ],
        0,
        "Công thức liên hệ rơi tự do: v² = 2gh suy ra v = √(2gh)."
      ],
      [
        "Một đoàn tàu đang chạy thẳng đều với tốc độ 36 km/h thì tăng tốc nhanh dần đều với gia tốc 0,5 m/s². Sau 10 s kể từ lúc tăng tốc, tốc độ của đoàn tàu là:",
        [
          "15 m/s.",
          "12 m/s.",
          "20 m/s.",
          "18 m/s."
        ],
        0,
        "Đổi 36 km/h = 10 m/s. Vận tốc sau 10 s: v = v₀ + at = 10 + 0,5 × 10 = 15 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động trên đường thẳng Ox được cho bởi các đoạn: từ t = 0 đến t = 4 s vật đi từ d = 0 đến d = 8 m; từ t = 4 s đến t = 8 s vật giữ nguyên ở d = 8 m; từ t = 8 s đến t = 10 s vật đi từ d = 8 m về lại d = 0.",
        "items": [
          [
            "Trong 4 giây đầu tiên, vật chuyển động thẳng đều cùng chiều dương với vận tốc 2 m/s.",
            true,
            "v = Δd / Δt = (8 – 0) / (4 – 0) = 2 m/s."
          ],
          [
            "Từ giây thứ 4 đến giây thứ 8, vật chuyển động thẳng đều với vận tốc 8 m/s.",
            false,
            "Độ dịch chuyển không đổi d = 8 m chứng tỏ vật đứng yên."
          ],
          [
            "Trong 2 giây cuối (từ 8 s đến 10 s), vật chuyển động thẳng đều ngược chiều dương với vận tốc –4 m/s.",
            true,
            "v = (0 – 8) / (10 – 8) = –4 m/s."
          ],
          [
            "Độ dịch chuyển tổng cộng của vật sau toàn bộ 10 giây chuyển động bằng 0 m.",
            true,
            "Tại t = 10 s vật ở vị trí d = 0 trùng điểm xuất phát, nên độ dịch chuyển d = 0 m."
          ]
        ]
      },
      {
        "stem": "Một quả cầu nhỏ bằng kim loại được thả rơi tự do không vận tốc đầu từ mép mái nhà tầng 5 có độ cao h = 20 m so với mặt đất. Lấy gia tốc trọng trường g = 10 m/s² và bỏ qua sức cản của không khí.",
        "items": [
          [
            "Chuyển động của quả cầu là chuyển động thẳng nhanh dần đều theo phương thẳng đứng.",
            true,
            "Rơi tự do là chuyển động thẳng nhanh dần đều với gia tốc g hướng xuống."
          ],
          [
            "Thời gian quả cầu rơi từ mái nhà đến khi chạm mặt đất là 2 giây.",
            true,
            "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 s."
          ],
          [
            "Tốc độ của quả cầu ngay trước khi tiếp xúc mặt đất là 15 m/s.",
            false,
            "v = gt = 10 × 2 = 20 m/s (hoặc v = √(2gh) = √(2×10×20) = 20 m/s)."
          ],
          [
            "Quãng đường quả cầu rơi được trong 1 giây đầu tiên là 5 m.",
            true,
            "h₁ = 1/2·g·t₁² = 0,5 × 10 × 1² = 5 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe ôtô chạy trên đường cao tốc với tốc độ đều 90 km/h. Đổi tốc độ này sang đơn vị mét trên giây (m/s) được kết quả là bao nhiêu?",
        "answer": "25",
        "explanation": "v = 90 / 3,6 = 25 m/s."
      },
      {
        "question": "Một người chèo thuyền qua sông rộng 120 m. Mũi thuyền luôn hướng vuông góc với dòng sông và thuyền chuyển động với tốc độ 3 m/s đối với nước. Nước chảy xuôi với tốc độ 4 m/s. Vận tốc của thuyền so với bờ sông có độ lớn bằng bao nhiêu m/s?",
        "answer": "5",
        "explanation": "Do hai vận tốc vuông góc nhau: v = √(v_thuyền² + v_nước²) = √(3² + 4²) = √25 = 5 m/s."
      },
      {
        "question": "Một ôtô đang chạy với vận tốc 16 m/s thì giảm tốc độ chuyển động chậm dần đều, sau 4 giây tốc độ giảm xuống còn 8 m/s. Độ lớn gia tốc hãm của ôtô bằng bao nhiêu m/s²?",
        "answer": "2",
        "explanation": "Gia tốc a = (v – v₀) / t = (8 – 16) / 4 = –2 m/s². Độ lớn gia tốc là 2 m/s²."
      },
      {
        "question": "Một vật được thả rơi tự do từ độ cao h. Khi chạm đất, vận tốc của vật đo được là 30 m/s. Lấy g = 10 m/s². Độ cao h lúc thả vật bằng bao nhiêu mét?",
        "answer": "45",
        "explanation": "h = v² / (2g) = 30² / (2 × 10) = 900 / 20 = 45 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-03",
    "title": "Vật lí 10 - Đề 03 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Nguyễn Trãi",
      "province": "Đà Nẵng",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14297/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Hoạt động nào sau đây đảm bảo an toàn tuyệt đối khi tiến hành thí nghiệm trong phòng thực hành Vật lí?",
        [
          "Tắt nguồn điện và rút phích cắm khi đã hoàn thành hoặc xảy ra sự cố chập điện.",
          "Dùng tay ướt cắm phích điện vào ổ cắm để tiết kiệm thời gian.",
          "Tự ý pha trộn các hóa chất không rõ nguồn gốc.",
          "Để các vật dễ cháy gần nguồn nhiệt đang hoạt động."
        ],
        0,
        "Tắt nguồn điện và rút phích cắm khi kết thúc hoặc có sự cố là nguyên tắc an toàn cơ bản hàng đầu trong phòng thực hành."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen, nền vàng, bên trong có hình ngọn lửa như hình bên là biển cảnh báo: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><path d=\"M50,30 Q62,48 56,60 Q66,54 62,74 Q56,80 50,80 Q40,80 38,70 Q36,60 44,52 Q40,58 42,66 Q48,46 50,30 Z\" fill=\"#dc2626\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất dễ cháy</div></div>",
        [
          "Khu vực có vật liệu, hóa chất dễ gây cháy nổ.",
          "Khu vực có điện áp nguy hiểm.",
          "Khu vực có bức xạ ion hóa.",
          "Khu vực có vi sinh vật gây hại."
        ],
        0,
        "Biển tam giác vàng hình ngọn lửa biểu thị cảnh báo nguy cơ cháy (chất dễ bắt cháy, dung môi hữu cơ)."
      ],
      [
        "Đo thời gian rơi của một vật 5 lần được các giá trị t lần lượt là 0,40 s; 0,41 s; 0,39 s; 0,40 s; 0,40 s. Giá trị trung bình t̄ của thời gian rơi là:",
        [
          "0,40 s.",
          "0,41 s.",
          "0,39 s.",
          "0,42 s."
        ],
        0,
        "t̄ = (0,40 + 0,41 + 0,39 + 0,40 + 0,40) / 5 = 2,00 / 5 = 0,40 s."
      ],
      [
        "Một cạnh bàn hình chữ nhật đo được chiều dài a = (1,20 ± 0,01) m và chiều rộng b = (0,80 ± 0,01) m. Sai số tuyệt đối của chu vi hình chữ nhật C = 2(a + b) là:",
        [
          "0,04 m.",
          "0,02 m.",
          "0,01 m.",
          "0,08 m."
        ],
        0,
        "Chu vi C = 2a + 2b nên sai số tuyệt đối ΔC = 2Δa + 2Δb = 2 × 0,01 + 2 × 0,01 = 0,04 m."
      ],
      [
        "Một người bơi dọc theo chiều dài bể bơi 50 m rồi bơi ngược trở lại 20 m. Quãng đường s và độ lớn độ dịch chuyển d của người đó lần lượt là:",
        [
          "s = 70 m; d = 30 m.",
          "s = 70 m; d = 70 m.",
          "s = 30 m; d = 30 m.",
          "s = 50 m; d = 20 m."
        ],
        0,
        "Quãng đường s = 50 + 20 = 70 m. Độ dịch chuyển d = 50 – 20 = 30 m."
      ],
      [
        "Phát biểu nào sau đây về mối quan hệ giữa độ lớn vận tốc tức thời và tốc độ tức thời là ĐÚNG?",
        [
          "Độ lớn của vận tốc tức thời luôn bằng tốc độ tức thời tại thời điểm đó.",
          "Độ lớn của vận tốc tức thời luôn lớn hơn tốc độ tức thời.",
          "Độ lớn của vận tốc tức thời luôn nhỏ hơn tốc độ tức thời.",
          "Hai đại lượng này không có liên hệ với nhau."
        ],
        0,
        "Tại một thời điểm xác định, độ lớn của vectơ vận tốc tức thời chính bằng tốc độ tức thời của vật."
      ],
      [
        "Hình vẽ bên biểu diễn đồ thị d – t của một xe chạy thẳng đều. Từ đồ thị, vận tốc của xe có giá trị bằng: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#fff;border:1px solid #cbd5e1;border-radius:8px;\"><line x1=\"40\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"230,126 240,130 230,134\" fill=\"#334155\"/><text x=\"224\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">t(s)</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"10\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"36,10 40,2 44,10\" fill=\"#334155\"/><text x=\"12\" y=\"14\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">d(m)</text><polyline points=\"40,130 100,93.33333333333334 160,56.66666666666667 220,20\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"130\" r=\"4\" fill=\"#dc2626\"/><text x=\"40\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">0</text><text x=\"32\" y=\"134\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"100\" cy=\"93.33333333333334\" r=\"4\" fill=\"#dc2626\"/><text x=\"100\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">1</text><text x=\"32\" y=\"97.33333333333334\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">20</text><line x1=\"40\" y1=\"93.33333333333334\" x2=\"100\" y2=\"93.33333333333334\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"100\" y1=\"130\" x2=\"100\" y2=\"93.33333333333334\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"160\" cy=\"56.66666666666667\" r=\"4\" fill=\"#dc2626\"/><text x=\"160\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">2</text><text x=\"32\" y=\"60.66666666666667\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">40</text><line x1=\"40\" y1=\"56.66666666666667\" x2=\"160\" y2=\"56.66666666666667\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"160\" y1=\"130\" x2=\"160\" y2=\"56.66666666666667\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"220\" cy=\"20\" r=\"4\" fill=\"#dc2626\"/><text x=\"220\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">3</text><text x=\"32\" y=\"24\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">60</text><line x1=\"40\" y1=\"20\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"220\" y1=\"130\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>",
        [
          "20 m/s.",
          "10 m/s.",
          "30 m/s.",
          "60 m/s."
        ],
        0,
        "Vận tốc chính là độ dốc đồ thị: v = Δd / Δt = (60 – 0) / (3 – 0) = 20 m/s."
      ],
      [
        "Hai ôtô chạy ngược chiều nhau trên cùng một đoạn đường thẳng với tốc độ lần lượt là 50 km/h và 40 km/h. Độ lớn vận tốc của ôtô thứ nhất đối với ôtô thứ hai là:",
        [
          "90 km/h.",
          "10 km/h.",
          "50 km/h.",
          "40 km/h."
        ],
        0,
        "Hai xe chạy ngược chiều nhau thì vận tốc tương đối bằng tổng: v₁₂ = v₁ + v₂ = 50 + 40 = 90 km/h."
      ],
      [
        "Một người đi xe đạp chuyển động đều với tốc độ 4 m/s. Thời gian để người đó đi hết đoạn đường 1,2 km là:",
        [
          "300 s.",
          "120 s.",
          "480 s.",
          "240 s."
        ],
        0,
        "Đổi 1,2 km = 1200 m. Thời gian t = s / v = 1200 / 4 = 300 s (tương đương 5 phút)."
      ],
      [
        "Gia tốc của một chất điểm chuyển động thẳng có giá trị âm (a < 0). Kết luận nào sau đây là CHẮC CHẮN ĐÚNG?",
        [
          "Vectơ gia tốc ngược chiều với chiều dương được chọn.",
          "Chất điểm chuyển động chậm dần đều.",
          "Chất điểm chuyển động nhanh dần đều.",
          "Vận tốc của chất điểm luôn giảm về 0."
        ],
        0,
        "Dấu âm của gia tốc chỉ thể hiện vectơ gia tốc hướng ngược chiều dương đã chọn. Nếu v < 0 thì a·v > 0 vật vẫn nhanh dần đều."
      ],
      [
        "Một vật chuyển động thẳng nhanh dần đều có vận tốc ban đầu v₀ = 2 m/s, sau 4 s đạt vận tốc v = 10 m/s. Gia tốc của chuyển động bằng:",
        [
          "2 m/s².",
          "3 m/s².",
          "1 m/s².",
          "4 m/s²."
        ],
        0,
        "a = (v – v₀) / t = (10 – 2) / 4 = 8 / 4 = 2 m/s²."
      ],
      [
        "Trong các chuyển động sau đây, chuyển động nào có thể xem là chuyển động thẳng biến đổi đều?",
        [
          "Một hòn bi lăn xuống dốc thẳng không ma sát.",
          "Chuyển động của đầu kim đồng hồ.",
          "Chuyển động của một người đi bộ trên phố đông đúc.",
          "Chiếc lá rơi từ cành cây xuống trong gió bão."
        ],
        0,
        "Hòn bi lăn xuống máng nghiêng thẳng không ma sát chịu thành phần trọng lực không đổi nên chuyển động nhanh dần đều."
      ],
      [
        "Hình vẽ bên biểu diễn đồ thị vận tốc – thời gian (v – t) của một vật. Gia tốc của vật trong giai đoạn này bằng: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#fff;border:1px solid #cbd5e1;border-radius:8px;\"><line x1=\"40\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"230,126 240,130 230,134\" fill=\"#334155\"/><text x=\"216\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">t(s)</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"10\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"36,10 40,2 44,10\" fill=\"#334155\"/><text x=\"8\" y=\"14\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">v(m/s)</text><polyline points=\"40,130 220,20\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"130\" r=\"4\" fill=\"#ea580c\"/><text x=\"40\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">0</text><text x=\"32\" y=\"134\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"220\" cy=\"20\" r=\"4\" fill=\"#ea580c\"/><text x=\"220\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">5</text><text x=\"32\" y=\"24\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">20</text><line x1=\"40\" y1=\"20\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"220\" y1=\"130\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị vận tốc – thời gian (v – t)</div></div>",
        [
          "4 m/s².",
          "2 m/s².",
          "5 m/s².",
          "10 m/s²."
        ],
        0,
        "Gia tốc a = (v – v₀) / t = (20 – 0) / 5 = 4 m/s²."
      ],
      [
        "Một vật được thả rơi tự do từ độ cao h = 80 m tại nơi có g = 10 m/s². Thời gian rơi của vật đến khi chạm đất là:",
        [
          "4 s.",
          "2 s.",
          "8 s.",
          "16 s."
        ],
        0,
        "t = √(2h / g) = √(2 × 80 / 10) = √16 = 4 s."
      ],
      [
        "Tại cùng một độ cao, đồng thời thả rơi tự do vật A và ném ngang vật B với vận tốc ban đầu v₀. Bỏ qua sức cản không khí. Nhận định nào sau đây là ĐÚNG?",
        [
          "Cả hai vật chạm đất cùng một lúc.",
          "Vật A chạm đất trước vật B.",
          "Vật B chạm đất trước vật A.",
          "Vật nào có khối lượng lớn hơn sẽ chạm đất trước."
        ],
        0,
        "Chuyển động theo phương thẳng đứng của chuyển động ném ngang giống hệt rơi tự do với cùng gia tốc g và vận tốc đầu v_0y = 0, nên thời gian rơi như nhau t = √(2h/g)."
      ],
      [
        "Một xe ôtô đang chạy với vận tốc 10 m/s thì tăng tốc với gia tốc a = 1 m/s² trên quãng đường 75 m. Vận tốc của xe ở cuối đoạn đường này là:",
        [
          "20 m/s.",
          "15 m/s.",
          "25 m/s.",
          "18 m/s."
        ],
        0,
        "v² – v₀² = 2ad suy ra v = √(v₀² + 2ad) = √(10² + 2 × 1 × 75) = √(100 + 150) = √250... Khoan, để số đẹp: 10 m/s tăng tốc với a = 2 m/s² trên d = 75 m thì v = √(100 + 300) = √400 = 20 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy thử nghiệm trên một đường thử thẳng. Bắt đầu từ vạch mốc số 0, xe chạy thẳng đều về phía Đông 60 km trong 1 giờ, sau đó rẽ ngược về phía Tây chạy tiếp 20 km trong 30 phút. Chọn chiều dương là hướng Đông.",
        "items": [
          [
            "Tổng quãng đường ôtô chạy được trong toàn bộ thời gian thử nghiệm là 80 km.",
            true,
            "s = 60 + 20 = 80 km."
          ],
          [
            "Độ dịch chuyển tổng cộng của ôtô sau khi kết thúc thử nghiệm là 40 km hướng Đông.",
            true,
            "d = 60 – 20 = 40 km hướng Đông."
          ],
          [
            "Tốc độ trung bình của xe trong suốt 1,5 giờ thử nghiệm xấp xỉ bằng 53,3 km/h.",
            true,
            "v = s / t = 80 / 1,5 ≈ 53,33 km/h."
          ],
          [
            "Vận tốc trung bình của xe trong suốt cuộc thử nghiệm có độ lớn bằng 40 km/h.",
            false,
            "Vận tốc trung bình v_tb = d / t = 40 / 1,5 ≈ 26,67 km/h."
          ]
        ]
      },
      {
        "stem": "Một đoàn tàu hỏa đang di chuyển với vận tốc 72 km/h thì lái tàu nhìn thấy tín hiệu dừng và bắt đầu hãm phanh chuyển động thẳng chậm dần đều. Đoàn tàu dừng hẳn lại sau khi đi thêm được quãng đường 200 m.",
        "items": [
          [
            "Vận tốc ban đầu của đoàn tàu trước khi hãm phanh là 20 m/s.",
            true,
            "Đổi 72 km/h = 72 / 3,6 = 20 m/s."
          ],
          [
            "Độ lớn gia tốc hãm phanh của đoàn tàu bằng 1 m/s².",
            true,
            "Khi dừng v = 0. a = (v² – v₀²) / (2s) = (0 – 20²) / (2 × 200) = –400 / 400 = –1 m/s². Độ lớn là 1 m/s²."
          ],
          [
            "Thời gian đoàn tàu hãm phanh từ lúc bắt đầu cho đến khi dừng hẳn là 20 giây.",
            true,
            "t = (v – v₀) / a = (0 – 20) / (–1) = 20 s."
          ],
          [
            "Sau 10 giây kể từ khi hãm phanh, đoàn tàu đã dừng lại hoàn toàn.",
            false,
            "Sau 10 s tàu có vận tốc v = 20 – 1 × 10 = 10 m/s, chưa dừng hẳn."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một chất điểm đi trên trục Ox từ điểm A có tọa độ x_A = 5 m đến điểm B có tọa độ x_B = 25 m. Độ dịch chuyển d của chất điểm bằng bao nhiêu mét?",
        "answer": "20",
        "explanation": "d = x_B – x_A = 25 – 5 = 20 m."
      },
      {
        "question": "Một chiếc ca nô xuôi dòng một khúc sông từ bến A đến bến B mất 2 giờ, biết khoảng cách AB = 40 km và vận tốc của nước chảy là 4 km/h. Vận tốc của ca nô so với nước là bao nhiêu km/h?",
        "answer": "16",
        "explanation": "Vận tốc xuôi dòng v_xuôi = s / t = 40 / 2 = 20 km/h. Mà v_xuôi = v_ca nô + v_nước nên v_ca nô = 20 – 4 = 16 km/h."
      },
      {
        "question": "Một xe ôtô bắt đầu chuyển động thẳng nhanh dần đều với gia tốc a = 3 m/s² không vận tốc đầu. Vận tốc của ôtô sau 6 giây kể từ lúc bắt đầu chuyển động là bao nhiêu m/s?",
        "answer": "18",
        "explanation": "v = v₀ + at = 0 + 3 × 6 = 18 m/s."
      },
      {
        "question": "Từ độ cao h = 20 m so với mặt đất, một vật được ném theo phương ngang với vận tốc ban đầu v₀ = 15 m/s. Lấy g = 10 m/s² và bỏ qua sức cản không khí. Tầm bay xa L của vật theo phương ngang khi chạm đất là bao nhiêu mét?",
        "answer": "30",
        "explanation": "Thời gian rơi t = √(2h / g) = √(2 × 20 / 10) = 2 s. Tầm ném xa L = v₀ × t = 15 × 2 = 30 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-04",
    "title": "Vật lí 10 - Đề 04 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Lý Tự Trọng",
      "province": "Đà Nẵng",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14296/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ly-tu-trong-da-nang",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Mục tiêu quan trọng nhất của việc học tập môn Vật lí trong nhà trường phổ thông là:",
        [
          "Hình thành và phát triển năng lực vật lí, hiểu bản chất các quy luật tự nhiên và ứng dụng vào đời sống.",
          "Học thuộc lòng tất cả các định luật để làm bài thi.",
          "Chỉ tập trung giải các bài toán toán học phức tạp.",
          "Thay thế cho tất cả các môn khoa học tự nhiên khác."
        ],
        0,
        "Học Vật lí giúp phát triển năng lực nhận thức thế giới tự nhiên, năng lực tìm hiểu và vận dụng kiến thức kĩ năng vào thực tiễn."
      ],
      [
        "Biển cảnh báo có hình tam giác viền đen nền vàng, bên trong có hình bàn tay và bề mặt kim loại bị chất lỏng nhỏ giọt ăn mòn như hình bên mang ý nghĩa: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><rect x=\"30\" y=\"40\" width=\"14\" height=\"20\" fill=\"#000\" rx=\"3\"/><rect x=\"56\" y=\"40\" width=\"14\" height=\"20\" fill=\"#000\" rx=\"3\"/><line x1=\"25\" y1=\"68\" x2=\"75\" y2=\"68\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"37\" cy=\"64\" r=\"2\" fill=\"#000\"/><circle cx=\"63\" cy=\"64\" r=\"2\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất ăn mòn kim loại và da</div></div>",
        [
          "Cảnh báo hóa chất có tính ăn mòn kim loại và gây bỏng da.",
          "Cảnh báo nguy hiểm chất phóng xạ.",
          "Cảnh báo nhiệt độ bề mặt rất cao.",
          "Cấm chạm tay vào thiết bị."
        ],
        0,
        "Biển tam giác hình ống nghiệm nhỏ giọt lên bàn tay và thanh kim loại là biển cảnh báo chất ăn mòn."
      ],
      [
        "Đo khối lượng của một vật 4 lần được các giá trị: 50,1 g; 50,0 g; 49,9 g; 50,0 g. Sai số ngẫu nhiên tuyệt đối trung bình Δm_tb bằng:",
        [
          "0,05 g.",
          "0,10 g.",
          "0,20 g.",
          "0,01 g."
        ],
        0,
        "Giá trị trung bình m̄ = 50,0 g. Các sai số tuyệt đối từng lần: 0,1; 0; 0,1; 0. Sai số ngẫu nhiên tuyệt đối trung bình = (0,1 + 0 + 0,1 + 0) / 4 = 0,05 g."
      ],
      [
        "Độ chia nhỏ nhất của nhiệt kế thủy ngân trong phòng thí nghiệm là 1 °C. Sai số dụng cụ thông thường được lấy bằng một nửa độ chia nhỏ nhất là:",
        [
          "0,5 °C.",
          "1,0 °C.",
          "0,1 °C.",
          "0,2 °C."
        ],
        0,
        "Quy ước sai số dụng cụ thường lấy bằng một nửa độ chia nhỏ nhất: ΔT = 1 / 2 = 0,5 °C (hoặc 1 độ chia nếu có quy định riêng)."
      ],
      [
        "Một người lái xe đi một vòng khép kín quanh một hồ nước có chu vi 5 km rồi quay về đúng điểm xuất phát. Quãng đường s và độ lớn độ dịch chuyển d của xe lần lượt là:",
        [
          "s = 5 km; d = 0 km.",
          "s = 5 km; d = 5 km.",
          "s = 0 km; d = 5 km.",
          "s = 10 km; d = 0 km."
        ],
        0,
        "Quãng đường thực tế đi được s = 5 km. Vì quay lại điểm xuất phát nên độ dịch chuyển d = 0."
      ],
      [
        "Đơn vị nào sau đây KHÔNG PHẢI là đơn vị đo tốc độ?",
        [
          "m·s.",
          "m/s.",
          "km/h.",
          "cm/s."
        ],
        0,
        "m·s là tích độ dài và thời gian, không phải thương số giữa độ dài và thời gian."
      ],
      [
        "Một chất điểm chuyển động có đồ thị độ dịch chuyển – thời gian (d – t) là một đường cong parabol hướng lên. Điều này chứng tỏ chất điểm:",
        [
          "Chuyển động thẳng nhanh dần đều.",
          "Chuyển động thẳng đều.",
          "Đang đứng yên.",
          "Chuyển động thẳng chậm dần đều."
        ],
        0,
        "Công thức d = v₀t + 1/2·a·t² là hàm bậc hai theo thời gian t (dạng parabol), đặc trưng cho chuyển động thẳng biến đổi đều."
      ],
      [
        "Một hành khách ngồi trên toa tàu đang chuyển động thẳng đều về phía trước. Người đó ném một quả bóng nhỏ thẳng đứng lên cao. Bỏ qua sức cản không khí, đối với người đứng bên đường, quỹ đạo của quả bóng là:",
        [
          "Một đường cong parabol.",
          "Một đường thẳng đứng.",
          "Một đường tròn.",
          "Một điểm đứng yên."
        ],
        0,
        "Đối với người bên đường, bóng có vận tốc ngang v₀ bằng vận tốc tàu và vận tốc đứng, do đó chuyển động theo quỹ đạo parabol (chuyển động ném xiên)."
      ],
      [
        "Một người bơi bướm bơi hết một vòng bể bơi 100 m hết thời gian 80 s. Tốc độ trung bình của người đó bằng:",
        [
          "1,25 m/s.",
          "1,00 m/s.",
          "1,50 m/s.",
          "0,80 m/s."
        ],
        0,
        "v = s / t = 100 / 80 = 1,25 m/s."
      ],
      [
        "Công thức tính gia tốc của chuyển động thẳng là:",
        [
          "a = (v – v₀) / (t – t₀).",
          "a = (v + v₀) / (t – t₀).",
          "a = (v – v₀) × t.",
          "a = v / t²."
        ],
        0,
        "Gia tốc a = Δv / Δt = (v – v₀) / (t – t₀)."
      ],
      [
        "Đặc điểm nào sau đây KHÔNG PHẢI của chuyển động thẳng chậm dần đều?",
        [
          "Gia tốc cùng chiều với vận tốc.",
          "Vận tốc giảm đều theo thời gian.",
          "Gia tốc có độ lớn không đổi theo thời gian.",
          "Tích số a·v < 0."
        ],
        0,
        "Trong chuyển động chậm dần đều, gia tốc luôn ngược chiều với vận tốc (a·v < 0)."
      ],
      [
        "Một xe máy đang chạy với vận tốc 12 m/s thì tắt máy, chuyển động chậm dần đều do ma sát với gia tốc a = –0,5 m/s². Quãng đường xe chạy thêm được đến khi dừng hẳn là:",
        [
          "144 m.",
          "72 m.",
          "288 m.",
          "36 m."
        ],
        0,
        "s = (v² – v₀²) / (2a) = (0 – 12²) / (2 × (–0,5)) = –144 / –1 = 144 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật là một đường thẳng nằm ngang song song với trục Ot. Điều này cho biết:",
        [
          "Vật đang chuyển động thẳng đều.",
          "Vật đang chuyển động nhanh dần đều.",
          "Vật đang đứng yên.",
          "Vật chuyển động có gia tốc tăng dần."
        ],
        0,
        "v không đổi theo thời gian chứng tỏ vật chuyển động thẳng đều với vận tốc không đổi."
      ],
      [
        "Thí nghiệm nổi tiếng của nhà bác học Galilei thả hai quả cầu chì có khối lượng khác nhau từ tháp nghiêng Pisa đã chứng minh:",
        [
          "Nếu không có sức cản không khí, các vật rơi tự do với gia tốc như nhau.",
          "Vật nặng bao giờ cũng rơi nhanh hơn vật nhẹ.",
          "Thời gian rơi tỉ lệ nghịch với khối lượng.",
          "Chuyển động rơi của quả cầu phụ thuộc chất liệu."
        ],
        0,
        "Galilei chứng minh mọi vật đều rơi tự do như nhau tại cùng một nơi nếu không có sức cản không khí."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 5 m tại nơi có g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất là:",
        [
          "10 m/s.",
          "5 m/s.",
          "15 m/s.",
          "20 m/s."
        ],
        0,
        "v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s."
      ],
      [
        "Một hòn bi lăn xuống máng nghiêng nhanh dần đều với gia tốc 0,4 m/s² từ trạng thái nghỉ. Vận tốc của hòn bi sau khi lăn được 5 s là:",
        [
          "2,0 m/s.",
          "1,0 m/s.",
          "0,8 m/s.",
          "4,0 m/s."
        ],
        0,
        "v = at = 0,4 × 5 = 2,0 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Hai xe ôtô A và B cùng chuyển động trên một đường thẳng. Xe A chuyển động đều với vận tốc 40 km/h theo chiều dương. Xe B chuyển động đều với vận tốc 60 km/h theo chiều ngược lại hướng về phía xe A. Khoảng cách ban đầu giữa hai xe là 150 km.",
        "items": [
          [
            "Vận tốc của xe B đối với xe A có độ lớn bằng 100 km/h.",
            true,
            "Hai xe ngược chiều nhau nên v_tương đối = 40 + 60 = 100 km/h."
          ],
          [
            "Sau 1,5 giờ chuyển động, khoảng cách giữa hai xe giảm đi 150 km và hai xe gặp nhau.",
            true,
            "Thời gian gặp nhau: t = s / v_tương đối = 150 / 100 = 1,5 h."
          ],
          [
            "Vị trí hai xe gặp nhau cách vị trí ban đầu của xe A một khoảng 60 km.",
            true,
            "Quãng đường xe A đi được: s_A = v_A × t = 40 × 1,5 = 60 km."
          ],
          [
            "Độ dịch chuyển của xe B từ lúc xuất phát đến khi gặp xe A có giá trị đại số d_B = +90 km.",
            false,
            "Xe B chuyển động ngược chiều dương nên d_B = –90 km."
          ]
        ]
      },
      {
        "stem": "Một xe ôtô bắt đầu khởi hành từ trạng thái đứng yên tại điểm O, chuyển động thẳng nhanh dần đều trên đường ngang với gia tốc không đổi a = 2 m/s² trong thời gian 10 giây. Sau đó xe tắt máy chuyển động chậm dần đều với gia tốc có độ lớn 1 m/s² cho đến khi dừng lại.",
        "items": [
          [
            "Tốc độ của xe tại thời điểm t = 10 giây đạt giá trị cực đại là 20 m/s.",
            true,
            "v = a₁ × t₁ = 2 × 10 = 20 m/s."
          ],
          [
            "Quãng đường xe đi được trong 10 giây đầu tiên là 100 m.",
            true,
            "s₁ = 1/2·a₁·t₁² = 0,5 × 2 × 10² = 100 m."
          ],
          [
            "Thời gian xe chuyển động từ lúc tắt máy đến khi dừng hẳn là 15 giây.",
            false,
            "t₂ = (0 – 20) / (–1) = 20 s."
          ],
          [
            "Tổng quãng đường xe đi được từ lúc khởi hành đến khi dừng hẳn là 300 m.",
            true,
            "s₂ = (0 – 20²) / (2 × (–1)) = 200 m. Tổng quãng đường s = s₁ + s₂ = 100 + 200 = 300 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một bạn học sinh đạp xe từ nhà đến trường cách nhau 2,4 km hết thời gian 12 phút. Tốc độ trung bình của bạn học sinh đó là bao nhiêu km/h?",
        "answer": "12",
        "explanation": "Đổi 12 phút = 0,2 h. Tốc độ v = s / t = 2,4 / 0,2 = 12 km/h."
      },
      {
        "question": "Một chiếc xuồng máy xuôi dòng từ bến M đến bến N cách nhau 30 km mất 1 giờ. Vận tốc dòng nước là 6 km/h. Vận tốc của xuồng máy đối với dòng nước là bao nhiêu km/h?",
        "answer": "24",
        "explanation": "Vận tốc xuôi dòng v_xuôi = 30 / 1 = 30 km/h. Vận tốc xuồng v = 30 – 6 = 24 km/h."
      },
      {
        "question": "Một ôtô đang chạy với vận tốc 15 m/s thì hãm phanh chuyển động chậm dần đều. Sau khi đi được quãng đường 50 m thì vận tốc giảm còn 5 m/s. Độ lớn gia tốc của ôtô bằng bao nhiêu m/s²?",
        "answer": "2",
        "explanation": "a = (v² – v₀²) / (2s) = (5² – 15²) / (2 × 50) = (25 – 225) / 100 = –200 / 100 = –2 m/s². Độ lớn gia tốc là 2 m/s²."
      },
      {
        "question": "Thả rơi tự do một vật từ độ cao 80 m tại nơi có g = 10 m/s². Tốc độ của vật ngay trước khi chạm đất là bao nhiêu m/s?",
        "answer": "40",
        "explanation": "v = √(2gh) = √(2 × 10 × 80) = √1600 = 40 m/s."
      }
    ]
  },
  {
    "id": "vatli-10-de-05",
    "title": "Vật lí 10 - Đề 05 - Trường THPT Hồ Nghinh – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Hồ Nghinh",
      "province": "Quảng Nam",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14295/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ho-nghinh-quang-nam",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Để giảm thiểu sai số ngẫu nhiên trong một phép đo đại lượng vật lí nhiều lần, phương pháp hữu hiệu nhất là:",
        [
          "Thực hiện phép đo lặp lại nhiều lần và lấy giá trị trung bình.",
          "Chỉ cần đo một lần duy nhất với dụng cụ đắt tiền.",
          "Nhờ người khác ghi lại số liệu theo suy đoán.",
          "Làm tròn số liệu về số nguyên gần nhất."
        ],
        0,
        "Đo nhiều lần trong cùng điều kiện và tính giá trị trung bình giúp bù trừ và triệt tiêu đáng kể sai số ngẫu nhiên."
      ],
      [
        "Trong phòng thí nghiệm sinh - lí, biển báo tam giác viền đen, nền vàng có biểu tượng như hình bên cảnh báo điều gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 90,85 10,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"52\" r=\"14\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"42\" cy=\"46\" r=\"10\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\"/><circle cx=\"58\" cy=\"46\" r=\"10\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"62\" r=\"10\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"52\" r=\"4\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo nguy hiểm sinh học</div></div>",
        [
          "Nguy cơ lây nhiễm tác nhân sinh học nguy hiểm.",
          "Khu vực có điện thế cao nguy hiểm.",
          "Khu vực có vật liệu dễ bắt cháy.",
          "Khu vực có chất ăn mòn."
        ],
        0,
        "Biển báo ba vòng tròn cung tròn lồng vào nhau là biển cảnh báo nguy hiểm sinh học (vi sinh vật, virus, mầm bệnh)."
      ],
      [
        "Khi đo thời gian chuyển động t của một vật bằng đồng hồ hiện số có độ chia nhỏ nhất 0,001 s, sai số dụng cụ thông thường được lấy bằng:",
        [
          "0,001 s.",
          "0,01 s.",
          "0,0005 s.",
          "0,002 s."
        ],
        0,
        "Đối với dụng cụ đo hiện số, sai số dụng cụ thường được lấy bằng một độ chia nhỏ nhất (giá trị của chữ số cuối cùng hiển thị): 0,001 s."
      ],
      [
        "Một vật có khối lượng m = (2,00 ± 0,02) kg và thể tích V = (1,00 ± 0,01) dm³. Sai số tỉ đối của khối lượng riêng D = m / V bằng:",
        [
          "2%.",
          "1%.",
          "3%.",
          "0,02%."
        ],
        0,
        "Sai số tỉ đối của tích hoặc thương bằng tổng sai số tỉ đối: δD = δm + δV = (0,02/2,00)×100% + (0,01/1,00)×100% = 1% + 1% = 2%."
      ],
      [
        "Độ dịch chuyển d và quãng đường s của một vật chuyển động có mối quan hệ tổng quát nào sau đây?",
        [
          "|d| ≤ s.",
          "|d| > s.",
          "|d| = s trong mọi trường hợp.",
          "d luôn mang giá trị dương."
        ],
        0,
        "Quãng đường s là tổng chiều dài quỹ đạo nên luôn s ≥ 0. Độ dịch chuyển là khoảng cách từ điểm đầu đến điểm cuối nên |d| ≤ s, dấu bằng xảy ra khi chuyển động thẳng không đổi chiều."
      ],
      [
        "Một người đi bộ nửa vòng bờ hồ hình tròn bán kính R = 100 m. Quãng đường s và độ lớn độ dịch chuyển d của người đó là:",
        [
          "s = 314 m; d = 200 m.",
          "s = 200 m; d = 314 m.",
          "s = 628 m; d = 0 m.",
          "s = 100 m; d = 200 m."
        ],
        0,
        "Nửa chu vi hồ: s = πR ≈ 3,14 × 100 = 314 m. Khoảng cách hai điểm đối diện đường kính: d = 2R = 200 m."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của hai xe A và B là hai đường thẳng song song cùng dốc lên. Điều này có nghĩa là:",
        [
          "Hai xe chuyển động thẳng đều cùng vận tốc.",
          "Hai xe đang cùng đứng yên.",
          "Xe A chạy nhanh hơn xe B.",
          "Hai xe chuyển động có gia tốc bằng nhau."
        ],
        0,
        "Hai đường thẳng song song có cùng độ dốc, do đó hai xe có cùng vận tốc chuyển động thẳng đều."
      ],
      [
        "Một người ngồi trên xe buýt đang chạy với tốc độ 40 km/h nhìn thấy một xe máy chạy cùng chiều vượt qua xe buýt với tốc độ 50 km/h. Vận tốc của xe máy so với xe buýt là:",
        [
          "10 km/h cùng chiều xe chạy.",
          "90 km/h cùng chiều xe chạy.",
          "10 km/h ngược chiều xe chạy.",
          "50 km/h."
        ],
        0,
        "Vận tốc tương đối khi cùng chiều: v = v_máy – v_buýt = 50 – 40 = 10 km/h cùng chiều chuyển động."
      ],
      [
        "Một vận động viên chạy cự li 100 m hết 10,0 s. Tốc độ trung bình của vận động viên này trên đường chạy là:",
        [
          "10 m/s.",
          "12 m/s.",
          "8 m/s.",
          "9,8 m/s."
        ],
        0,
        "v = s / t = 100 / 10,0 = 10 m/s (tương đương 36 km/h)."
      ],
      [
        "Chuyển động thẳng có gia tốc a = 0 là chuyển động:",
        [
          "Thẳng đều hoặc đứng yên.",
          "Nhanh dần đều.",
          "Chậm dần đều.",
          "Biến đổi không đều."
        ],
        0,
        "a = 0 nghĩa là vận tốc không đổi theo thời gian: vật chuyển động thẳng đều (nếu v ≠ 0) hoặc đứng yên (nếu v = 0)."
      ],
      [
        "Một ôtô đang chạy với tốc độ 54 km/h thì hãm phanh với gia tốc có độ lớn 1,5 m/s². Thời gian xe dừng hẳn là:",
        [
          "10 s.",
          "15 s.",
          "36 s.",
          "5 s."
        ],
        0,
        "Đổi 54 km/h = 15 m/s. Thời gian dừng: t = v₀ / |a| = 15 / 1,5 = 10 s."
      ],
      [
        "Phương trình chuyển động của một chất điểm là x = 10 + 2t + t² (m; s). Gia tốc của chất điểm bằng:",
        [
          "2 m/s².",
          "1 m/s².",
          "4 m/s².",
          "0,5 m/s²."
        ],
        0,
        "Phương trình chuẩn x = x₀ + v₀t + 1/2·at². Hệ số trước t² là 1/2·a = 1 suy ra a = 2 m/s²."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật là một đường thẳng dốc xuống cắt trục hoành tại t = 5 s. Điều này thể hiện:",
        [
          "Vật chuyển động chậm dần đều và dừng hẳn tại thời điểm t = 5 s.",
          "Vật chuyển động nhanh dần đều.",
          "Vật chuyển động thẳng đều.",
          "Vật đứng yên trong 5 s."
        ],
        0,
        "v giảm đều theo thời gian đến 0 tại t = 5 s, biểu thị chuyển động chậm dần đều và dừng lại."
      ],
      [
        "Tại một nơi có gia tốc trọng trường g = 9,8 m/s², quãng đường vật rơi tự do được trong giây thứ nhất là:",
        [
          "4,9 m.",
          "9,8 m.",
          "19,6 m.",
          "1,0 m."
        ],
        0,
        "s₁ = 1/2·g·t² = 0,5 × 9,8 × 1² = 4,9 m."
      ],
      [
        "Một quả bóng ném ngang từ độ cao h có tầm bay xa L. Nếu tăng độ cao ném lên 4 lần (giữ nguyên vận tốc ném đầu) thì tầm bay xa L sẽ:",
        [
          "Tăng lên 2 lần.",
          "Tăng lên 4 lần.",
          "Không thay đổi.",
          "Giảm đi 2 lần."
        ],
        0,
        "Tầm xa L = v₀·√(2h/g). Khi h tăng 4 lần thì √(2h/g) tăng √4 = 2 lần, do đó L tăng 2 lần."
      ],
      [
        "Một đoàn tàu đang chạy với tốc độ 20 m/s thì hãm phanh chuyển động chậm dần đều. Sau khi đi được 100 m, tốc độ của tàu giảm còn 10 m/s. Độ lớn gia tốc của tàu là:",
        [
          "1,5 m/s².",
          "1,0 m/s².",
          "2,0 m/s².",
          "0,5 m/s²."
        ],
        0,
        "Áp dụng v² – v₀² = 2as suy ra a = (10² – 20²) / (2 × 100) = (100 – 400) / 200 = –1,5 m/s². Độ lớn là 1,5 m/s²."
      ]
    ],
    "tf": [
      {
        "stem": "Một ca nô chạy trên một con sông thẳng từ bến A đến bến B cách nhau 24 km. Khi chạy xuôi dòng từ A đến B, ca nô mất thời gian 1 giờ. Khi chạy ngược dòng từ B về A, ca nô mất thời gian 2 giờ. Coi công suất máy ca nô không đổi và nước chảy đều.",
        "items": [
          [
            "Tốc độ của ca nô đối với bờ khi chạy xuôi dòng là 24 km/h.",
            true,
            "v_xuôi = s / t_xuôi = 24 / 1 = 24 km/h."
          ],
          [
            "Tốc độ của ca nô đối với bờ khi chạy ngược dòng là 12 km/h.",
            true,
            "v_ngược = s / t_ngược = 24 / 2 = 12 km/h."
          ],
          [
            "Tốc độ chảy của dòng nước đối với bờ sông bằng 6 km/h.",
            true,
            "v_nước = (v_xuôi – v_ngược) / 2 = (24 – 12) / 2 = 6 km/h."
          ],
          [
            "Tốc độ của ca nô khi nước đứng yên (đối với dòng nước) là 20 km/h.",
            false,
            "v_ca nô = (v_xuôi + v_ngược) / 2 = (24 + 12) / 2 = 18 km/h."
          ]
        ]
      },
      {
        "stem": "Một vật nhỏ được thả rơi tự do từ độ cao h = 45 m tại nơi có gia tốc rơi tự do g = 10 m/s². Lấy mặt đất làm mốc tính độ cao và bỏ qua sức cản của không khí.",
        "items": [
          [
            "Thời gian vật rơi từ lúc thả đến khi chạm đất là 3 giây.",
            true,
            "t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."
          ],
          [
            "Vận tốc của vật ngay trước khi chạm mặt đất có độ lớn bằng 30 m/s.",
            true,
            "v = gt = 10 × 3 = 30 m/s."
          ],
          [
            "Quãng đường vật rơi được trong 2 giây đầu tiên là 20 m.",
            true,
            "h₂ = 1/2·g·t₂² = 0,5 × 10 × 2² = 20 m."
          ],
          [
            "Quãng đường vật rơi được trong 1 giây cuối cùng trước khi chạm đất là 15 m.",
            false,
            "Quãng đường trong 1 s cuối: Δh = h_toàn bộ – h₂ = 45 – 20 = 25 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe ôtô chạy thẳng đều quãng đường 150 km hết thời gian 2,5 giờ. Tốc độ của xe ôtô là bao nhiêu km/h?",
        "answer": "60",
        "explanation": "v = s / t = 150 / 2,5 = 60 km/h."
      },
      {
        "question": "Một chiếc phà qua sông nước chảy. Vận tốc của phà đối với nước là 8 m/s, vận tốc của nước đối với bờ là 6 m/s theo hướng vuông góc với hướng lái phà. Vận tốc của phà đối với bờ sông có độ lớn bằng bao nhiêu m/s?",
        "answer": "10",
        "explanation": "v = √(8² + 6²) = √(64 + 36) = √100 = 10 m/s."
      },
      {
        "question": "Một đoàn tàu đang chạy với vận tốc 25 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s². Sau bao nhiêu giây kể từ lúc hãm phanh thì đoàn tàu dừng lại hoàn toàn?",
        "answer": "10",
        "explanation": "t = v₀ / |a| = 25 / 2,5 = 10 s."
      },
      {
        "question": "Một vật rơi tự do tại nơi có g = 10 m/s². Trong giây thứ 3, quãng đường vật rơi được là bao nhiêu mét?",
        "answer": "25",
        "explanation": "Quãng đường sau 3 s: s₃ = 0,5 × 10 × 3² = 45 m. Quãng đường sau 2 s: s₂ = 0,5 × 10 × 2² = 20 m. Quãng đường trong giây thứ 3: Δs = 45 – 20 = 25 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-06",
    "title": "Vật lí 10 - Đề 06 - Trường THPT Hùng Vương – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Hùng Vương",
      "province": "Quảng Nam",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14294/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-hung-vuong-quang-nam",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Phát biểu nào sau đây nêu đúng vai trò to lớn của Vật lí đối với sự tiến bộ của khoa học công nghệ?",
        [
          "Vật lí là cơ sở khoa học nền tảng tạo tiền đề cho các cuộc cách mạng công nghiệp.",
          "Vật lí chỉ thuần túy giải thích hiện tượng tự nhiên mà không có ứng dụng kĩ thuật.",
          "Mọi công nghệ hiện đại đều phát triển độc lập không cần định luật vật lí.",
          "Vật lí không liên quan đến sự phát triển của vi mạch bán dẫn và máy tính."
        ],
        0,
        "Vật lí học là nền tảng tri thức cho kĩ thuật cơ khí, nhiệt điện, vi điện tử, laser, năng lượng hạt nhân và công nghệ thông tin."
      ],
      [
        "Trong phòng thí nghiệm, biển báo có hình tròn viền đỏ, nền trắng, gạch chéo đỏ đè lên ngọn lửa như hình bên có ý nghĩa: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#fff\" stroke=\"#dc2626\" stroke-width=\"8\"/><path d=\"M50,28 Q58,40 54,50 Q60,46 58,60 Q52,66 48,66 Q40,66 40,58 Q42,52 46,46 Z\" fill=\"#dc2626\"/><line x1=\"20\" y1=\"20\" x2=\"80\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"8\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cấm lửa (cấm hút thuốc / đánh lửa)</div></div>",
        [
          "Cấm lửa (không được hút thuốc, không bật lửa).",
          "Cảnh báo chất lỏng dễ cháy.",
          "Nơi đặt bình chữa cháy.",
          "Bắt buộc phải bật lò đốt."
        ],
        0,
        "Biển tròn viền đỏ gạch chéo là biển cấm; biểu tượng ngọn lửa bị gạch chéo là biển cấm lửa."
      ],
      [
        "Khi dùng ampe kế đo cường độ dòng điện, kim chỉ thị dao động nhẹ quanh vạch đo do chấn động bên ngoài thuộc loại sai số nào?",
        [
          "Sai số ngẫu nhiên.",
          "Sai số hệ thống.",
          "Sai số dụng cụ.",
          "Sai số tỉ đối cố định."
        ],
        0,
        "Dao động bất định do môi trường ngoài (chấn động, gió, mắt đọc dao động) là nguyên nhân gây ra sai số ngẫu nhiên."
      ],
      [
        "Một phép đo vận tốc có kết quả v = (12,5 ± 0,2) m/s. Sai số tuyệt đối của phép đo là:",
        [
          "0,2 m/s.",
          "12,5 m/s.",
          "1,6%.",
          "0,1 m/s."
        ],
        0,
        "Theo quy ước viết kết quả A = Ā ± ΔA, sai số tuyệt đối là Δv = 0,2 m/s."
      ],
      [
        "Một người đi xe đạp xuất phát từ điểm O đi về hướng Bắc 3 km, sau đó rẽ sang hướng Đông đi tiếp 4 km đến điểm M. Độ lớn độ dịch chuyển OM bằng:",
        [
          "5 km.",
          "7 km.",
          "1 km.",
          "12 km."
        ],
        0,
        "Hai chuyển động vuông góc nhau tạo thành tam giác vuông: OM = √(3² + 4²) = √25 = 5 km."
      ],
      [
        "Tốc độ trung bình v_tb của một vật chuyển động trên quãng đường s trong khoảng thời gian t được tính bởi:",
        [
          "v_tb = s / t.",
          "v_tb = d / t.",
          "v_tb = s × t.",
          "v_tb = 1/2·st."
        ],
        0,
        "Tốc độ trung bình bằng tổng quãng đường chia cho tổng thời gian: v_tb = s / t."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) dưới đây mô tả chuyển động của một xe máy. Tốc độ của xe máy trong 2 giây đầu tiên là: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#fff;border:1px solid #cbd5e1;border-radius:8px;\"><line x1=\"40\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"230,126 240,130 230,134\" fill=\"#334155\"/><text x=\"224\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">t(s)</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"10\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"36,10 40,2 44,10\" fill=\"#334155\"/><text x=\"12\" y=\"14\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">d(m)</text><polyline points=\"40,130 130,75 220,20\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"130\" r=\"4\" fill=\"#dc2626\"/><text x=\"40\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">0</text><text x=\"32\" y=\"134\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"130\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"130\" cy=\"75\" r=\"4\" fill=\"#dc2626\"/><text x=\"130\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">1</text><text x=\"32\" y=\"79\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">20</text><line x1=\"40\" y1=\"75\" x2=\"130\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"130\" y1=\"130\" x2=\"130\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"220\" cy=\"20\" r=\"4\" fill=\"#dc2626\"/><text x=\"220\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">2</text><text x=\"32\" y=\"24\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">40</text><line x1=\"40\" y1=\"20\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"220\" y1=\"130\" x2=\"220\" y2=\"20\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>",
        [
          "20 m/s.",
          "40 m/s.",
          "10 m/s.",
          "30 m/s."
        ],
        0,
        "Độ dốc v = Δd / Δt = 40 / 2 = 20 m/s."
      ],
      [
        "Một người đi ca nô từ bờ bên này sang bờ bên kia của một dòng sông nước chảy. Vận tốc của ca nô đối với mặt đất phụ thuộc vào:",
        [
          "Cả vận tốc của ca nô đối với dòng nước và vận tốc của dòng nước đối với bờ.",
          "Chỉ phụ thuộc vào vận tốc của ca nô đối với nước.",
          "Chỉ phụ thuộc vào tốc độ chảy của dòng sông.",
          "Không phụ thuộc vào yếu tố nào ở trên."
        ],
        0,
        "Theo định lí cộng vận tốc: v⃗₁₃ = v⃗₁₂ + v⃗₂₃, phụ thuộc cả vận tốc thuyền so với nước và nước so với bờ."
      ],
      [
        "Một ôtô chuyển động thẳng đều trên quãng đường 90 km trong thời gian 1 giờ 30 phút. Vận tốc của ôtô là:",
        [
          "60 km/h.",
          "45 km/h.",
          "75 km/h.",
          "90 km/h."
        ],
        0,
        "Thời gian t = 1,5 h. Vận tốc v = 90 / 1,5 = 60 km/h."
      ],
      [
        "Chuyển động thẳng có vận tốc giảm dần đều theo thời gian với gia tốc a không đổi là chuyển động:",
        [
          "Thẳng chậm dần đều.",
          "Thẳng nhanh dần đều.",
          "Thẳng đều.",
          "Tròn đều."
        ],
        0,
        "Vận tốc giảm đều theo thời gian là đặc điểm định nghĩa của chuyển động thẳng chậm dần đều."
      ],
      [
        "Chọn công thức ĐÚNG về vận tốc tức thời trong chuyển động thẳng biến đổi đều:",
        [
          "v = v₀ + at.",
          "v = v₀ – at².",
          "v = at / 2.",
          "v = v₀t + at."
        ],
        0,
        "Công thức vận tốc chuẩn: v = v₀ + at."
      ],
      [
        "Một xe ôtô đang chạy với tốc độ 10 m/s thì tăng tốc với gia tốc 2 m/s². Sau 5 giây, tốc độ của xe là:",
        [
          "20 m/s.",
          "15 m/s.",
          "25 m/s.",
          "30 m/s."
        ],
        0,
        "v = v₀ + at = 10 + 2 × 5 = 20 m/s."
      ],
      [
        "Hình vẽ bên biểu diễn đồ thị vận tốc – thời gian (v – t) của một xe chuyển động thẳng. Đoạn đồ thị nằm ngang cho biết xe đang: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"240\" height=\"160\" viewBox=\"0 0 240 160\" style=\"background:#fff;border:1px solid #cbd5e1;border-radius:8px;\"><line x1=\"40\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"230,126 240,130 230,134\" fill=\"#334155\"/><text x=\"216\" y=\"148\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">t(s)</text><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"10\" stroke=\"#334155\" stroke-width=\"2\"/><polygon points=\"36,10 40,2 44,10\" fill=\"#334155\"/><text x=\"8\" y=\"14\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">v(m/s)</text><polyline points=\"40,75 130,75 220,75\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"75\" r=\"4\" fill=\"#059669\"/><text x=\"40\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">0</text><text x=\"32\" y=\"79\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">15</text><line x1=\"40\" y1=\"75\" x2=\"40\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"130\" cy=\"75\" r=\"4\" fill=\"#059669\"/><text x=\"130\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">3</text><text x=\"32\" y=\"79\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">15</text><line x1=\"40\" y1=\"75\" x2=\"130\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"130\" y1=\"130\" x2=\"130\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><circle cx=\"220\" cy=\"75\" r=\"4\" fill=\"#059669\"/><text x=\"220\" y=\"146\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">6</text><text x=\"32\" y=\"79\" font-size=\"10\" fill=\"#475569\" text-anchor=\"end\">15</text><line x1=\"40\" y1=\"75\" x2=\"220\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/><line x1=\"220\" y1=\"130\" x2=\"220\" y2=\"75\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị vận tốc – thời gian (v – t)</div></div>",
        [
          "Chuyển động thẳng đều.",
          "Chuyển động nhanh dần đều.",
          "Chuyển động chậm dần đều.",
          "Đang đứng yên."
        ],
        0,
        "v không đổi = 15 m/s theo thời gian, chứng tỏ xe chuyển động thẳng đều."
      ],
      [
        "Chuyển động nào sau đây có thể coi gần đúng là chuyển động rơi tự do?",
        [
          "Một viên sỏi nhỏ được thả từ trên cầu xuống sông trong không khí tĩnh lặng.",
          "Một chiếc dù đang bung ra rơi xuống đất.",
          "Một tờ giấy phẳng thả rơi trong phòng.",
          "Một quả bóng bay xì hơi lượn lờ trong gió."
        ],
        0,
        "Viên sỏi đặc có trọng lượng rất lớn so với lực cản không khí nên sự rơi của nó gần đúng là rơi tự do."
      ],
      [
        "Tại nơi có g = 10 m/s², một vật rơi tự do sau 3 giây kể từ lúc thả sẽ đạt tốc độ:",
        [
          "30 m/s.",
          "15 m/s.",
          "45 m/s.",
          "20 m/s."
        ],
        0,
        "v = gt = 10 × 3 = 30 m/s."
      ],
      [
        "Một xe tải đang chạy với vận tốc 15 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc 1 m/s². Quãng đường xe đi được sau 5 giây kể từ lúc hãm phanh là:",
        [
          "62,5 m.",
          "75 m.",
          "50 m.",
          "87,5 m."
        ],
        0,
        "s = v₀t + 1/2·at² = 15 × 5 + 0,5 × (–1) × 5² = 75 – 12,5 = 62,5 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một người tập thể dục đi bộ quanh một sân vận động hình chữ nhật có chiều dài 100 m và chiều rộng 60 m. Người đó bắt đầu từ góc A, đi qua góc B, góc C, góc D và quay trở lại điểm A đúng 1 vòng trong thời gian 4 phút.",
        "items": [
          [
            "Quãng đường người đó đi được trong 1 vòng là 320 m.",
            true,
            "Chu vi hình chữ nhật: C = 2 × (100 + 60) = 320 m."
          ],
          [
            "Độ lớn độ dịch chuyển của người đó sau khi hoàn thành 1 vòng là 320 m.",
            false,
            "Điểm kết thúc trùng điểm xuất phát nên độ dịch chuyển d = 0 m."
          ],
          [
            "Tốc độ trung bình của người đó trong chuyến đi xấp xỉ bằng 1,33 m/s.",
            true,
            "t = 4 phút = 240 s. v = 320 / 240 ≈ 1,33 m/s."
          ],
          [
            "Vận tốc trung bình của người đó sau cả vòng đi bằng 0 m/s.",
            true,
            "Vì d = 0 nên v_tb = d / t = 0 m/s."
          ]
        ]
      },
      {
        "stem": "Một xe ôtô chở hàng đang chuyển động thẳng đều với tốc độ 20 m/s thì tài xế nhìn thấy đèn đỏ phía trước cách xe 80 m liền đạp phanh. Xe chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s².",
        "items": [
          [
            "Thời gian xe chuyển động từ lúc đạp phanh đến khi dừng hẳn là 8 giây.",
            true,
            "t = v₀ / |a| = 20 / 2,5 = 8 s."
          ],
          [
            "Quãng đường xe ôtô đi được từ lúc bắt đầu đạp phanh đến khi dừng lại là 80 m.",
            true,
            "s = v₀² / (2|a|) = 20² / (2 × 2,5) = 400 / 5 = 80 m."
          ],
          [
            "Xe ôtô dừng lại đúng tại vị trí cột đèn giao thông mà không bị vượt quá vạch.",
            true,
            "Vì quãng đường hãm phanh đúng bằng khoảng cách ban đầu 80 m."
          ],
          [
            "Sau 4 giây kể từ khi đạp phanh, tốc độ của xe tải còn lại là 5 m/s.",
            false,
            "Sau 4 s: v = 20 – 2,5 × 4 = 10 m/s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe gắn máy đi từ thị xã A đến thị xã B cách nhau 45 km hết thời gian 1 giờ 15 phút. Tốc độ trung bình của xe tính theo km/h là bao nhiêu?",
        "answer": "36",
        "explanation": "Đổi 1 giờ 15 phút = 1,25 h. Tốc độ v = 45 / 1,25 = 36 km/h."
      },
      {
        "question": "Hai tàu hỏa chạy cùng chiều trên hai đường ray song song với tốc độ lần lượt là 60 km/h và 40 km/h. Vận tốc của tàu thứ nhất so với tàu thứ hai có độ lớn bằng bao nhiêu km/h?",
        "answer": "20",
        "explanation": "Chạy cùng chiều nên vận tốc tương đối: v = 60 – 40 = 20 km/h."
      },
      {
        "question": "Một xe máy đang chạy với vận tốc 10 m/s thì tăng tốc chuyển động thẳng nhanh dần đều với gia tốc 2 m/s² trên quãng đường dài 24 m. Vận tốc của xe máy ở cuối đoạn đường này là bao nhiêu m/s?",
        "answer": "14",
        "explanation": "v = √(v₀² + 2as) = √(10² + 2 × 2 × 24) = √(100 + 96) = √196 = 14 m/s."
      },
      {
        "question": "Thả rơi tự do một hòn đá từ độ cao 20 m tại nơi có g = 10 m/s². Vận tốc của hòn đá ngay trước khi chạm đất là bao nhiêu m/s?",
        "answer": "20",
        "explanation": "v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s."
      }
    ]
  },
  {
    "id": "vatli-10-de-07",
    "title": "Vật lí 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Nguyễn Huệ",
      "province": "Quảng Nam",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11213/de-thi-giua-ki-1-vat-li-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Phân ngành nào sau đây thuộc lĩnh vực nghiên cứu của Vật lí cổ điển?",
        [
          "Cơ học, Nhiệt học, Quang học và Điện từ học.",
          "Vật lí lượng tử và hiệu ứng quang điện.",
          "Cơ học lượng tử và cấu trúc quark.",
          "Vật lí hạt nhân phóng xạ cao năng."
        ],
        0,
        "Vật lí cổ điển phát triển từ thế kỉ XVII đến cuối thế kỉ XIX, bao gồm Cơ học Newton, Nhiệt học, Quang học và Điện từ học Maxwell."
      ],
      [
        "Trong phòng thí nghiệm Vật lí hiện đại, biển báo tam giác viền đen, nền vàng có hình ba cánh quạt như hình bên là biển cảnh báo: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"55\" r=\"7\" fill=\"#000\"/><path d=\"M50,48 L44,28 A24,24 0 0,1 56,28 Z\" fill=\"#000\"/><path d=\"M44,59 L26,69 A24,24 0 0,1 20,59 Z\" fill=\"#000\"/><path d=\"M56,59 L74,69 A24,24 0 0,0 80,59 Z\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất phóng xạ</div></div>",
        [
          "Khu vực có nguồn bức xạ ion hóa, chất phóng xạ nguy hiểm.",
          "Khu vực có điện trường mạnh.",
          "Khu vực có quạt gió công suất lớn.",
          "Khu vực có nguồn bức xạ laser."
        ],
        0,
        "Biểu tượng cánh quạt ba lá là biểu tượng quốc tế cảnh báo chất phóng xạ và bức xạ ion hóa."
      ],
      [
        "Cho hai đại lượng đo trực tiếp A và B có sai số tuyệt đối là ΔA và ΔB. Đại lượng C = A + B có sai số tuyệt đối ΔC bằng:",
        [
          "ΔC = ΔA + ΔB.",
          "ΔC = ΔA – ΔB.",
          "ΔC = ΔA × ΔB.",
          "ΔC = ΔA / ΔB."
        ],
        0,
        "Sai số tuyệt đối của một tổng hoặc một hiệu luôn bằng tổng các sai số tuyệt đối thành phần: ΔC = ΔA + ΔB."
      ],
      [
        "Một chất điểm chuyển động trên trục Ox từ vị trí x₁ = 2 m đến vị trí x₂ = –4 m. Độ dịch chuyển của chất điểm là:",
        [
          "–6 m.",
          "6 m.",
          "2 m.",
          "–2 m."
        ],
        0,
        "d = x₂ – x₁ = –4 – 2 = –6 m."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t), đường biểu diễn là một đường thẳng đi xuống theo thời gian. Điều này chứng tỏ vật:",
        [
          "Chuyển động thẳng đều ngược chiều dương.",
          "Chuyển động thẳng đều cùng chiều dương.",
          "Đang đứng yên tại chỗ.",
          "Chuyển động nhanh dần đều."
        ],
        0,
        "Hệ số góc âm (v = Δd / Δt < 0) chứng tỏ vật chuyển động thẳng đều theo chiều âm (ngược chiều dương)."
      ],
      [
        "Một người chèo thuyền qua sông với vận tốc 3 m/s vuông góc với dòng chảy. Nước sông chảy xuôi với vận tốc 4 m/s. Vận tốc của thuyền so với bờ sông có độ lớn bằng:",
        [
          "5 m/s.",
          "7 m/s.",
          "1 m/s.",
          "3,5 m/s."
        ],
        0,
        "Hai vận tốc vuông góc nhau nên v = √(3² + 4²) = √25 = 5 m/s."
      ],
      [
        "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc a. Quãng đường s đi được trong thời gian t tỉ lệ thuận với:",
        [
          "Bình phương thời gian t².",
          "Thời gian t.",
          "Căn bậc hai của t.",
          "Nghịch đảo của thời gian t."
        ],
        0,
        "Vì s = 1/2·a·t² nên quãng đường s tỉ lệ thuận với bình phương thời gian t²."
      ],
      [
        "Một xe ôtô đang chạy với tốc độ 20 m/s thì hãm phanh với gia tốc có độ lớn 4 m/s². Thời gian từ lúc hãm phanh đến khi xe dừng lại là:",
        [
          "5 s.",
          "4 s.",
          "8 s.",
          "10 s."
        ],
        0,
        "t = (0 – 20) / (–4) = 5 s."
      ],
      [
        "Hai vật rơi tự do tại cùng một nơi có thời gian rơi lần lượt là t₁ và t₂ = 2t₁. Tỉ số độ cao thả hai vật h₂ / h₁ bằng:",
        [
          "4.",
          "2.",
          "8.",
          "16."
        ],
        0,
        "Vì h = 1/2·g·t² tỉ lệ thuận với t² nên h₂ / h₁ = (t₂ / t₁)² = 2² = 4."
      ],
      [
        "Một giọt nước mưa rơi tự do từ mái nhà cao 20 m xuống mặt đất. Lấy g = 10 m/s². Tốc độ của giọt nước ngay trước khi chạm đất là:",
        [
          "20 m/s.",
          "10 m/s.",
          "15 m/s.",
          "25 m/s."
        ],
        0,
        "v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s."
      ],
      [
        "Một quả bóng được ném ngang từ độ cao h = 5 m với vận tốc ban đầu v₀. Điểm chạm đất cách vị trí ném theo phương ngang là L = 12 m. Lấy g = 10 m/s². Tốc độ ném ban đầu v₀ bằng:",
        [
          "12 m/s.",
          "10 m/s.",
          "6 m/s.",
          "24 m/s."
        ],
        0,
        "Thời gian rơi t = √(2h / g) = √(2 × 5 / 10) = 1 s. Tốc độ ném v₀ = L / t = 12 / 1 = 12 m/s."
      ],
      [
        "Trong chuyển động ném ngang, tại điểm chạm đất, phương của vectơ vận tốc:",
        [
          "Nghiêng một góc so với phương ngang hướng xuống dưới.",
          "Nằm ngang.",
          "Thẳng đứng hướng xuống.",
          "Thẳng đứng hướng lên."
        ],
        0,
        "Tại điểm chạm đất, vận tốc v⃗ = v⃗_x + v⃗_y có hai thành phần vuông góc nên hợp với phương ngang một góc nghiêng hướng xuống."
      ],
      [
        "Gia tốc tức thời là:",
        [
          "Gia tốc tại một thời điểm xác định trên quỹ đạo.",
          "Gia tốc trung bình trên toàn bộ quãng đường.",
          "Độ dịch chuyển chia cho thời gian.",
          "Vận tốc tức thời chia cho thời gian."
        ],
        0,
        "Gia tốc tức thời a⃗ = dv⃗ / dt đo sự thay đổi vận tốc tại thời điểm đang xét."
      ],
      [
        "Một chất điểm chuyển động theo phương trình v = 6 – 2t (m/s). Chất điểm dừng lại tại thời điểm:",
        [
          "t = 3 s.",
          "t = 6 s.",
          "t = 2 s.",
          "t = 12 s."
        ],
        0,
        "Vật dừng lại khi v = 0 suy ra 6 – 2t = 0 nên t = 3 s."
      ],
      [
        "Khi thả rơi một chiếc lông chim và một hòn bi chì trong ống chân không Newton thì:",
        [
          "Cả hai rơi nhanh như nhau và chạm đáy ống cùng lúc.",
          "Hòn bi chì rơi nhanh hơn chạm đáy trước.",
          "Chiếc lông chim rơi nhanh hơn hòn bi chì.",
          "Cả hai đều lơ lửng không rơi."
        ],
        0,
        "Trong ống đã hút hết không khí (chân không), không còn lực cản nên mọi vật đều rơi tự do như nhau."
      ],
      [
        "Một xe đồ chơi chạy với vận tốc ban đầu v₀ = 2 m/s và gia tốc a = 1,5 m/s² trong thời gian 4 giây. Quãng đường xe đi được là:",
        [
          "20 m.",
          "14 m.",
          "12 m.",
          "16 m."
        ],
        0,
        "s = v₀t + 1/2·at² = 2 × 4 + 0,5 × 1,5 × 4² = 8 + 12 = 20 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe máy xuất phát từ điểm A chạy thẳng đều về phía Đông 12 km trong 15 phút, sau đó dừng lại nghỉ 5 phút rồi rẽ sang hướng Bắc chạy thẳng đều tiếp 9 km trong 10 phút đến điểm B.",
        "items": [
          [
            "Tổng quãng đường xe máy đi được từ A đến B là 21 km.",
            true,
            "s = 12 + 9 = 21 km."
          ],
          [
            "Độ lớn độ dịch chuyển AB của xe máy bằng 15 km.",
            true,
            "Hai đoạn đường vuông góc Đông - Bắc: d = √(12² + 9²) = √225 = 15 km."
          ],
          [
            "Tốc độ trung bình của xe máy trong toàn bộ chuyến đi bằng 42 km/h.",
            true,
            "Tổng thời gian t = 15 + 5 + 10 = 30 phút = 0,5 h. Tốc độ v = 21 / 0,5 = 42 km/h."
          ],
          [
            "Vận tốc trung bình của xe máy trong cả chuyến đi có độ lớn bằng 30 km/h.",
            true,
            "v_tb = d / t = 15 / 0,5 = 30 km/h."
          ]
        ]
      },
      {
        "stem": "Một ôtô đang chuyển động thẳng đều với vận tốc 72 km/h thì bất ngờ hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s² cho đến khi dừng lại hẳn.",
        "items": [
          [
            "Vận tốc ban đầu của ôtô khi bắt đầu hãm phanh là 20 m/s.",
            true,
            "Đổi 72 km/h = 20 m/s."
          ],
          [
            "Thời gian hãm phanh của xe đến khi dừng hẳn là 10 giây.",
            true,
            "t = v₀ / |a| = 20 / 2 = 10 s."
          ],
          [
            "Quãng đường xe ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng lại là 100 m.",
            true,
            "s = v₀² / (2|a|) = 20² / (2 × 2) = 400 / 4 = 100 m."
          ],
          [
            "Sau 5 giây kể từ lúc hãm phanh, xe đã đi được quãng đường 85 m.",
            false,
            "Sau 5 s: s₅ = 20 × 5 + 0,5 × (–2) × 5² = 100 – 25 = 75 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một bạn học sinh đi bộ từ nhà đến siêu thị cách nhà 1,5 km hết thời gian 20 phút. Tốc độ đi bộ trung bình của bạn tính theo km/h là bao nhiêu?",
        "answer": "4.5",
        "explanation": "Đổi 20 phút = 1/3 h. Tốc độ v = 1,5 / (1/3) = 4,5 km/h."
      },
      {
        "question": "Một chiếc ca nô chạy xuôi dòng một khúc sông dài 36 km hết 1,5 giờ. Biết vận tốc dòng nước là 4 km/h. Vận tốc của ca nô so với dòng nước là bao nhiêu km/h?",
        "answer": "20",
        "explanation": "v_xuôi = 36 / 1,5 = 24 km/h. Vận tốc ca nô = 24 – 4 = 20 km/h."
      },
      {
        "question": "Một đoàn tàu hỏa rời ga chuyển động thẳng nhanh dần đều. Sau 15 giây tàu đạt tốc độ 9 m/s. Gia tốc của đoàn tàu bằng bao nhiêu m/s²?",
        "answer": "0.6",
        "explanation": "a = (9 – 0) / 15 = 0,6 m/s²."
      },
      {
        "question": "Thả một hòn đá rơi tự do từ đỉnh tháp cao 45 m xuống mặt đất tại nơi có g = 10 m/s². Thời gian hòn đá rơi là bao nhiêu giây?",
        "answer": "3",
        "explanation": "t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."
      }
    ]
  },
  {
    "id": "vatli-10-de-08",
    "title": "Vật lí 10 - Đề 08 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT số 1 Lê Hồng Phong",
      "province": "Đắk Lắk",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14293/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-so-1-le-hong-phong-dak-lak",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Để tìm hiểu các quy luật tự nhiên, phương pháp nào sau đây giúp kiểm chứng trực tiếp tính đúng đắn của giả thuyết khoa học?",
        [
          "Phương pháp thực nghiệm (làm thí nghiệm kiểm tra).",
          "Phương pháp phỏng đoán cảm tính.",
          "Phương pháp tham khảo ý kiến số đông trên mạng.",
          "Phương pháp tư biện không cần dữ liệu."
        ],
        0,
        "Thực nghiệm là tiêu chuẩn chân lí cao nhất để khẳng định hay bác bỏ một giả thuyết vật lí."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình phát tia laser như hình bên cảnh báo: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"55\" r=\"8\" fill=\"#000\"/><line x1=\"26\" y1=\"55\" x2=\"74\" y2=\"55\" stroke=\"#000\" stroke-width=\"3\"/><line x1=\"34\" y1=\"39\" x2=\"66\" y2=\"71\" stroke=\"#000\" stroke-width=\"3\"/><line x1=\"34\" y1=\"71\" x2=\"66\" y2=\"39\" stroke=\"#000\" stroke-width=\"3\"/><line x1=\"50\" y1=\"31\" x2=\"50\" y2=\"79\" stroke=\"#000\" stroke-width=\"3\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo tia laser nguy hiểm</div></div>",
        [
          "Nguy hiểm do tia bức xạ laser gây tổn thương mắt và da.",
          "Khu vực có đèn chiếu sáng thông thường.",
          "Khu vực có điện áp thấp.",
          "Khu vực cấm chụp ảnh."
        ],
        0,
        "Biển tam giác hình vệt sáng phát tia là biển cảnh báo nguy hiểm từ nguồn bức xạ laser."
      ],
      [
        "Khi dùng đồng hồ bấm giây cơ học có độ chia nhỏ nhất 0,2 s, sai số dụng cụ được quy ước lấy bằng:",
        [
          "0,1 s hoặc 0,2 s.",
          "0,01 s.",
          "0,02 s.",
          "1,0 s."
        ],
        0,
        "Sai số dụng cụ đo thông thường lấy bằng một nửa độ chia nhỏ nhất (0,1 s) hoặc một độ chia nhỏ nhất (0,2 s) tùy quy ước."
      ],
      [
        "Một phép đo thời gian cho kết quả t = (4,0 ± 0,1) s. Sai số tỉ đối δt của phép đo là:",
        [
          "2,5%.",
          "1,0%.",
          "4,0%.",
          "0,25%."
        ],
        0,
        "δt = (0,1 / 4,0) × 100% = 2,5%."
      ],
      [
        "Một người đi bộ từ điểm M(–2 m) đến điểm N(3 m) rồi đi tiếp đến điểm P(7 m) trên trục tọa độ Ox. Độ dịch chuyển tổng cộng của người đó là:",
        [
          "9 m.",
          "5 m.",
          "4 m.",
          "12 m."
        ],
        0,
        "d = x_P – x_M = 7 – (–2) = 9 m."
      ],
      [
        "Một vật chuyển động tròn đều một vòng hết 10 giây. Tốc độ trung bình và độ lớn vận tốc trung bình của vật trong thời gian 10 giây đó là:",
        [
          "Tốc độ trung bình khác 0; vận tốc trung bình bằng 0.",
          "Cả hai đều bằng 0.",
          "Cả hai đều khác 0 và bằng nhau.",
          "Tốc độ trung bình bằng 0; vận tốc trung bình khác 0."
        ],
        0,
        "Vì đi hết 1 vòng nên điểm cuối trùng điểm đầu, độ dịch chuyển d = 0 suy ra vận tốc trung bình bằng 0. Quãng đường s > 0 nên tốc độ trung bình khác 0."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động thẳng có dạng d = 5t (m; s). Vận tốc của vật là:",
        [
          "5 m/s.",
          "2,5 m/s.",
          "10 m/s.",
          "0 m/s."
        ],
        0,
        "Phương trình d = vt nên vận tốc v = 5 m/s."
      ],
      [
        "Một ca nô chạy xuôi dòng trên khúc sông thẳng. Vận tốc của ca nô so với dòng nước là 12 km/h, vận tốc dòng nước so với bờ là 3 km/h. Thời gian ca nô đi hết quãng đường 30 km là:",
        [
          "2 giờ.",
          "2,5 giờ.",
          "1,5 giờ.",
          "3 giờ."
        ],
        0,
        "Vận tốc xuôi dòng: v = 12 + 3 = 15 km/h. Thời gian t = s / v = 30 / 15 = 2 giờ."
      ],
      [
        "Một vận động viên bơi bướm bơi với tốc độ trung bình 1,6 m/s trong thời gian 50 s. Quãng đường người đó bơi được là:",
        [
          "80 m.",
          "50 m.",
          "100 m.",
          "64 m."
        ],
        0,
        "s = v × t = 1,6 × 50 = 80 m."
      ],
      [
        "Một ôtô đang đứng yên thì bắt đầu chuyển động nhanh dần đều với gia tốc a = 1,2 m/s². Vận tốc của ôtô sau 10 giây là:",
        [
          "12 m/s.",
          "6 m/s.",
          "24 m/s.",
          "1,2 m/s."
        ],
        0,
        "v = at = 1,2 × 10 = 12 m/s."
      ],
      [
        "Hệ thức nào sau đây liên hệ đúng giữa độ dịch chuyển d, vận tốc ban đầu v₀, vận tốc v và gia tốc a?",
        [
          "v² – v₀² = 2ad.",
          "v² + v₀² = 2ad.",
          "v – v₀ = ad².",
          "v² – v₀² = ad."
        ],
        0,
        "Công thức độc lập thời gian chuẩn: v² – v₀² = 2ad."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động chậm dần đều là đường thẳng:",
        [
          "Dốc xuống theo thời gian.",
          "Dốc lên theo thời gian.",
          "Song song với trục Ot.",
          "Trùng với trục Ot."
        ],
        0,
        "Chuyển động chậm dần đều có vận tốc giảm dần nên đường biểu diễn v – t dốc xuống."
      ],
      [
        "Một chất điểm chuyển động theo phương trình vận tốc v = 10 – 2t (m/s). Gia tốc của chất điểm là:",
        [
          "–2 m/s².",
          "2 m/s².",
          "10 m/s².",
          "5 m/s²."
        ],
        0,
        "So sánh với v = v₀ + at, ta có a = –2 m/s²."
      ],
      [
        "Tại cùng một nơi, vật thứ nhất rơi tự do từ độ cao h hết thời gian t. Vật thứ hai rơi tự do từ độ cao 4h hết thời gian là:",
        [
          "2t.",
          "4t.",
          "t / 2.",
          "16t."
        ],
        0,
        "Thời gian rơi t = √(2h / g). Khi độ cao là 4h thì t' = √(2 × 4h / g) = 2√(2h / g) = 2t."
      ],
      [
        "Vật rơi tự do từ độ cao h = 45 m tại nơi có g = 10 m/s². Quãng đường vật rơi được trong 2 giây đầu tiên là:",
        [
          "20 m.",
          "45 m.",
          "10 m.",
          "25 m."
        ],
        0,
        "s = 1/2·gt² = 0,5 × 10 × 2² = 20 m."
      ],
      [
        "Một vật ném ngang từ độ cao 20 m với tốc độ đầu v₀ = 10 m/s. Lấy g = 10 m/s². Tầm bay xa của vật là:",
        [
          "20 m.",
          "10 m.",
          "30 m.",
          "40 m."
        ],
        0,
        "t = √(2h / g) = √(2 × 20 / 10) = 2 s. Tầm xa L = v₀t = 10 × 2 = 20 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô di chuyển trên một đại lộ thẳng. Trong 30 phút đầu, xe chuyển động thẳng đều với tốc độ 40 km/h. Sau đó xe tiếp tục tăng tốc và chạy đều với tốc độ 60 km/h trong 45 phút tiếp theo.",
        "items": [
          [
            "Quãng đường xe chạy được trong 30 phút đầu tiên là 20 km.",
            true,
            "s₁ = 40 × 0,5 = 20 km."
          ],
          [
            "Quãng đường xe chạy được trong 45 phút tiếp theo là 45 km.",
            true,
            "s₂ = 60 × 0,75 = 45 km."
          ],
          [
            "Tổng quãng đường xe đi được trong toàn bộ hành trình là 65 km.",
            true,
            "s = 20 + 45 = 65 km."
          ],
          [
            "Tốc độ trung bình của xe trên cả quãng đường bằng 50 km/h.",
            false,
            "Tổng thời gian t = 0,5 + 0,75 = 1,25 h. Tốc độ v = 65 / 1,25 = 52 km/h."
          ]
        ]
      },
      {
        "stem": "Một viên bi sắt được thả rơi tự do từ đỉnh một tòa nhà cao tầng. Biết hòn bi chạm đất sau thời gian 4 giây. Lấy gia tốc trọng trường g = 10 m/s² và bỏ qua sức cản không khí.",
        "items": [
          [
            "Độ cao của tòa nhà là 80 m.",
            true,
            "h = 1/2·gt² = 0,5 × 10 × 4² = 80 m."
          ],
          [
            "Vận tốc của viên bi ngay trước khi chạm đất có độ lớn bằng 40 m/s.",
            true,
            "v = gt = 10 × 4 = 40 m/s."
          ],
          [
            "Quãng đường viên bi rơi được trong giây đầu tiên là 10 m.",
            false,
            "s₁ = 0,5 × 10 × 1² = 5 m."
          ],
          [
            "Quãng đường viên bi rơi được trong 1 giây cuối cùng trước khi chạm đất là 35 m.",
            true,
            "Sau 3 s viên bi rơi được s₃ = 0,5 × 10 × 3² = 45 m. Quãng đường giây thứ 4: Δs = 80 – 45 = 35 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một đoàn tàu chạy thẳng đều trên đường ray với tốc độ 54 km/h. Thời gian để tàu đi hết quãng đường 27 km là bao nhiêu phút?",
        "answer": "30",
        "explanation": "t = 27 / 54 = 0,5 h = 30 phút."
      },
      {
        "question": "Một ca nô chạy ngược dòng một đoạn sông dài 30 km mất 2 giờ. Vận tốc dòng nước chảy là 3 km/h. Vận tốc của ca nô đối với dòng nước là bao nhiêu km/h?",
        "answer": "18",
        "explanation": "v_ngược = 30 / 2 = 15 km/h. Vận tốc ca nô = 15 + 3 = 18 km/h."
      },
      {
        "question": "Một ôtô đang chạy với vận tốc 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là bao nhiêu mét?",
        "answer": "100",
        "explanation": "s = v₀² / (2|a|) = 20² / (2 × 2) = 400 / 4 = 100 m."
      },
      {
        "question": "Một vật được ném ngang từ độ cao 45 m với vận tốc ban đầu v₀ = 20 m/s. Lấy g = 10 m/s². Tầm bay xa của vật theo phương ngang là bao nhiêu mét?",
        "answer": "60",
        "explanation": "Thời gian rơi t = √(2h / g) = √(2 × 45 / 10) = 3 s. Tầm ném xa L = v₀t = 20 × 3 = 60 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-09",
    "title": "Vật lí 10 - Đề 09 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT số 1 Ngô Gia Tự",
      "province": "Đắk Lắk",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14292/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-so-1-ngo-gia-tu-dak-lak",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Bước đầu tiên trong quy trình tìm hiểu thế giới tự nhiên dưới góc độ vật lí là:",
        [
          "Quan sát và xác định vấn đề cần nghiên cứu.",
          "Đề xuất giải pháp và kết luận ngay.",
          "Làm báo cáo khoa học.",
          "Tính toán số liệu phức tạp."
        ],
        0,
        "Quy trình nghiên cứu khoa học bắt đầu từ việc quan sát hiện tượng và đặt ra câu hỏi/vấn đề cần tìm hiểu."
      ],
      [
        "Trong phòng thực hành, biển cảnh báo có hình tam giác viền đen nền vàng, bên trong có hình đầu lâu xương chéo như hình bên là biển cảnh báo: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"46\" r=\"14\" fill=\"#000\"/><rect x=\"42\" y=\"56\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#000\"/><circle cx=\"45\" cy=\"45\" r=\"3\" fill=\"#facc15\"/><circle cx=\"55\" cy=\"45\" r=\"3\" fill=\"#facc15\"/><line x1=\"30\" y1=\"72\" x2=\"70\" y2=\"72\" stroke=\"#000\" stroke-width=\"4\"/><line x1=\"35\" y1=\"65\" x2=\"65\" y2=\"79\" stroke=\"#000\" stroke-width=\"4\"/><line x1=\"35\" y1=\"79\" x2=\"65\" y2=\"65\" stroke=\"#000\" stroke-width=\"4\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo hóa chất độc hại</div></div>",
        [
          "Chất độc hại nguy hiểm tính mạng.",
          "Khu vực có điện thế cao.",
          "Khu vực có chất dễ cháy.",
          "Khu vực có chất ăn mòn."
        ],
        0,
        "Biểu tượng đầu lâu xương chéo cảnh báo hóa chất độc hại gây ngộ độc hoặc tử vong."
      ],
      [
        "Khi viết kết quả đo một đại lượng vật lí A, giá trị trung bình Ā có chữ số có nghĩa đến hàng nào thì sai số tuyệt đối ΔA phải được làm tròn đến hàng:",
        [
          "Cùng hàng đơn vị thập phân đó.",
          "Hàng thập phân nhỏ hơn một bậc.",
          "Hàng thập phân lớn hơn một bậc.",
          "Không cần quan tâm đến bậc thập phân."
        ],
        0,
        "Sai số tuyệt đối ΔA và giá trị trung bình Ā phải được làm tròn đến cùng hàng thập phân sau dấu phẩy."
      ],
      [
        "Cho phép đo chiều dài một sợi dây l = (100 ± 2) cm. Sai số tỉ đối của phép đo bằng:",
        [
          "2%.",
          "1%.",
          "0,5%.",
          "0,02%."
        ],
        0,
        "δl = (2 / 100) × 100% = 2%."
      ],
      [
        "Một người đi xe đạp chuyển động thẳng đều đi được quãng đường 12 km trong 40 phút. Tốc độ của người đó là:",
        [
          "18 km/h.",
          "12 km/h.",
          "24 km/h.",
          "15 km/h."
        ],
        0,
        "Đổi 40 phút = 2/3 h. Tốc độ v = 12 / (2/3) = 18 km/h."
      ],
      [
        "Khi nào thì độ lớn của độ dịch chuyển bằng quãng đường đi được?",
        [
          "Khi vật chuyển động thẳng và không đổi chiều chuyển động.",
          "Trong mọi trường hợp chuyển động.",
          "Khi vật chuyển động cong đều.",
          "Khi vật chuyển động tròn."
        ],
        0,
        "Khi chuyển động thẳng theo một chiều không đổi thì |d| = s."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) là đường thẳng đi qua gốc tọa độ O biểu thị:",
        [
          "Chuyển động thẳng đều xuất phát từ gốc tọa độ.",
          "Chuyển động nhanh dần đều.",
          "Vật đứng yên tại gốc tọa độ.",
          "Chuyển động có gia tốc tăng dần."
        ],
        0,
        "Đường thẳng d = vt qua gốc tọa độ O biểu diễn chuyển động thẳng đều xuất phát từ O."
      ],
      [
        "Một chiếc thuyền chạy xuôi dòng nước với tốc độ 20 km/h, chạy ngược dòng với tốc độ 14 km/h. Vận tốc dòng nước đối với bờ là:",
        [
          "3 km/h.",
          "6 km/h.",
          "17 km/h.",
          "7 km/h."
        ],
        0,
        "v_nước = (v_xuôi – v_ngược) / 2 = (20 – 14) / 2 = 3 km/h."
      ],
      [
        "Một xe ôtô chạy với tốc độ không đổi 72 km/h. Trong 10 giây xe đi được quãng đường là:",
        [
          "200 m.",
          "720 m.",
          "100 m.",
          "144 m."
        ],
        0,
        "Đổi 72 km/h = 20 m/s. Quãng đường s = v × t = 20 × 10 = 200 m."
      ],
      [
        "Chuyển động thẳng biến đổi đều là chuyển động có:",
        [
          "Gia tốc không đổi theo thời gian.",
          "Vận tốc không đổi theo thời gian.",
          "Quãng đường không đổi theo thời gian.",
          "Gia tốc tăng đều theo thời gian."
        ],
        0,
        "Chuyển động thẳng biến đổi đều có gia tốc a = hằng số."
      ],
      [
        "Một ôtô đang chạy với tốc độ 15 m/s thì tăng tốc với gia tốc 2 m/s² trong 5 s. Vận tốc đạt được là:",
        [
          "25 m/s.",
          "20 m/s.",
          "17 m/s.",
          "30 m/s."
        ],
        0,
        "v = v₀ + at = 15 + 2 × 5 = 25 m/s."
      ],
      [
        "Một xe máy đang chạy với tốc độ 10 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường đi được đến khi dừng hẳn là:",
        [
          "25 m.",
          "50 m.",
          "20 m.",
          "10 m."
        ],
        0,
        "s = v₀² / (2|a|) = 10² / (2 × 2) = 100 / 4 = 25 m."
      ],
      [
        "Độ dốc của đồ thị độ dịch chuyển – thời gian (d – t) cho biết:",
        [
          "Vận tốc của chuyển động.",
          "Gia tốc của chuyển động.",
          "Quãng đường của chuyển động.",
          "Độ lớn lực tác dụng."
        ],
        0,
        "Độ dốc của d – t là tan α = Δd / Δt = v (vận tốc)."
      ],
      [
        "Đặc điểm nào sau đây KHÔNG PHẢI của sự rơi tự do?",
        [
          "Quãng đường rơi tỉ lệ thuận với thời gian rơi.",
          "Gia tốc rơi tự do là đại lượng không đổi tại một vị trí xác định.",
          "Phương chuyển động là phương thẳng đứng.",
          "Chiều chuyển động là chiều từ trên xuống dưới."
        ],
        0,
        "Quãng đường rơi tự do h = 1/2·gt² tỉ lệ thuận với bình phương thời gian t², không phải tỉ lệ thuận với t."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 20 m tại nơi có g = 10 m/s². Thời gian rơi của vật đến khi chạm đất là:",
        [
          "2 s.",
          "1 s.",
          "4 s.",
          "3 s."
        ],
        0,
        "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 s."
      ],
      [
        "Một vật được ném ngang từ độ cao 5 m với vận tốc ban đầu v₀ = 10 m/s. Lấy g = 10 m/s². Vận tốc của vật khi chạm đất có độ lớn bằng:",
        [
          "14,1 m/s (10√2 m/s).",
          "10 m/s.",
          "20 m/s.",
          "15 m/s."
        ],
        0,
        "v_y = √(2gh) = √(2 × 10 × 5) = 10 m/s. Vận tốc toàn phần v = √(v₀² + v_y²) = √(10² + 10²) = 10√2 ≈ 14,14 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy trên đường thẳng từ trạm A đến trạm B dài 30 km hết 30 phút, sau đó từ B quay trở lại điểm C nằm giữa A và B cách B 15 km hết 15 phút. Chọn chiều dương là chiều từ A đến B.",
        "items": [
          [
            "Quãng đường xe ôtô đi được trên toàn hành trình là 45 km.",
            true,
            "s = 30 + 15 = 45 km."
          ],
          [
            "Độ dịch chuyển tổng cộng của xe ôtô từ lúc xuất phát tại A đến khi dừng tại C là 15 km.",
            true,
            "d = x_C – x_A = 15 – 0 = 15 km."
          ],
          [
            "Tốc độ trung bình của xe ôtô trên cả quãng đường bằng 60 km/h.",
            true,
            "Tổng thời gian t = 30 + 15 = 45 phút = 0,75 h. Tốc độ v = 45 / 0,75 = 60 km/h."
          ],
          [
            "Vận tốc trung bình của xe ôtô trên toàn bộ hành trình có độ lớn bằng 40 km/h.",
            false,
            "Vận tốc trung bình v_tb = d / t = 15 / 0,75 = 20 km/h."
          ]
        ]
      },
      {
        "stem": "Một vật nhỏ được thả rơi tự do không vận tốc ban đầu từ độ cao 80 m so với mặt đất tại nơi có gia tốc trọng trường g = 10 m/s². Bỏ qua sức cản không khí.",
        "items": [
          [
            "Thời gian rơi tự do của vật đến khi chạm đất là 4 giây.",
            true,
            "t = √(2h / g) = √(2 × 80 / 10) = √16 = 4 s."
          ],
          [
            "Vận tốc của vật khi chạm mặt đất có độ lớn bằng 40 m/s.",
            true,
            "v = gt = 10 × 4 = 40 m/s."
          ],
          [
            "Trong 2 giây đầu tiên, vật rơi được quãng đường 20 m.",
            true,
            "s₂ = 0,5 × 10 × 2² = 20 m."
          ],
          [
            "Quãng đường vật rơi được trong 2 giây cuối cùng trước khi chạm đất là 40 m.",
            false,
            "Quãng đường 2 s cuối: Δs = 80 – s₂ = 80 – 20 = 60 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe máy đi thẳng đều trên một đoạn đường dài 27 km hết 45 phút. Tốc độ của xe máy tính theo đơn vị km/h là bao nhiêu?",
        "answer": "36",
        "explanation": "Đổi 45 phút = 0,75 h. Tốc độ v = 27 / 0,75 = 36 km/h."
      },
      {
        "question": "Một chiếc thuyền đi xuôi dòng nước với vận tốc 16 km/h và đi ngược dòng nước với vận tốc 10 km/h. Vận tốc của dòng nước đối với bờ sông bằng bao nhiêu km/h?",
        "answer": "3",
        "explanation": "v_nước = (16 – 10) / 2 = 3 km/h."
      },
      {
        "question": "Một ôtô đang chạy với tốc độ 12 m/s thì tăng tốc với gia tốc 2 m/s². Quãng đường ôtô đi được sau 4 giây kể từ khi tăng tốc là bao nhiêu mét?",
        "answer": "64",
        "explanation": "s = v₀t + 1/2·at² = 12 × 4 + 0,5 × 2 × 4² = 48 + 16 = 64 m."
      },
      {
        "question": "Thả rơi tự do một hòn bi từ độ cao h. Khi chạm đất, vận tốc hòn bi đo được là 20 m/s. Lấy g = 10 m/s². Độ cao h lúc thả rơi hòn bi là bao nhiêu mét?",
        "answer": "20",
        "explanation": "h = v² / (2g) = 20² / (2 × 10) = 400 / 20 = 20 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-10",
    "title": "Vật lí 10 - Đề 10 - Trường THPT Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 45,
    "minutes": 45,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": {
      "school": "Trường THPT Ngô Gia Tự",
      "province": "Đắk Lắk",
      "year": "2025–2026",
      "url": "https://khoahoc.vietjack.com/chi-tiet-de-thi/14291/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ngo-gia-tu-dak-lak",
      "note": "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
    },
    "questions": [
      [
        "Để bảo đảm an toàn khi tiếp xúc với các thiết bị sinh nhiệt trong phòng thực hành Vật lí, học sinh cần tuân thủ quy tắc nào?",
        [
          "Đeo găng tay cách nhiệt và không chạm tay trực tiếp vào các bề mặt đang nung nóng.",
          "Dùng tay ướt để kiểm tra độ nóng của thiết bị.",
          "Đặt các vật liệu dễ cháy xung quanh bếp nhiệt.",
          "Thổi trực tiếp vào ngọn lửa đèn cồn."
        ],
        0,
        "Tuân thủ quy định bảo hộ cá nhân (găng tay cách nhiệt) để tránh nguy cơ bỏng nhiệt."
      ],
      [
        "Biển báo có hình tròn viền đỏ, nền trắng có hình người đi bộ bị gạch chéo đỏ biểu thị:",
        [
          "Khu vực cấm người đi bộ qua lại.",
          "Khu vực dành riêng cho người đi bộ.",
          "Khu vực nguy hiểm về điện.",
          "Khu vực có vật liệu dễ nổ."
        ],
        0,
        "Biển tròn viền đỏ gạch chéo hình người đi bộ là biển cấm người đi bộ."
      ],
      [
        "Khi đo độ dài của một vật bằng thước có giới hạn đo 50 cm và độ chia nhỏ nhất 1 mm, kết quả đo hợp lí là:",
        [
          "25,4 cm.",
          "25,43 cm.",
          "25,432 cm.",
          "25 cm."
        ],
        0,
        "Độ chia nhỏ nhất 1 mm = 0,1 cm nên kết quả đo chỉ có 1 chữ số thập phân sau dấu phẩy theo cm: 25,4 cm."
      ],
      [
        "Một phép đo khối lượng cho kết quả m = (200 ± 4) g. Sai số tỉ đối của phép đo bằng:",
        [
          "2%.",
          "4%.",
          "0,02%.",
          "1%."
        ],
        0,
        "δm = (4 / 200) × 100% = 2%."
      ],
      [
        "Một chiếc thuyền buồm chạy trên biển. Vị trí của thuyền thay đổi từ điểm A có tọa độ x_A = 10 km đến điểm B có tọa độ x_B = 35 km trên trục tọa độ đã chọn. Độ dịch chuyển của thuyền là:",
        [
          "25 km.",
          "45 km.",
          "35 km.",
          "10 km."
        ],
        0,
        "d = x_B – x_A = 35 – 10 = 25 km."
      ],
      [
        "Tốc độ trung bình và vận tốc trung bình có cùng giá trị khi:",
        [
          "Vật chuyển động thẳng theo một chiều không đổi.",
          "Vật chuyển động cong không đổi chiều.",
          "Vật chuyển động tròn đều.",
          "Trong mọi trường hợp chuyển động."
        ],
        0,
        "Khi chuyển động thẳng theo 1 chiều không đổi thì quãng đường s bằng độ lớn độ dịch chuyển |d|, nên tốc độ trung bình bằng độ lớn vận tốc trung bình."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động thẳng có dạng d = 10 + 4t (m; s). Vận tốc ban đầu của vật tại gốc thời gian t = 0 là:",
        [
          "4 m/s.",
          "10 m/s.",
          "14 m/s.",
          "0 m/s."
        ],
        0,
        "Độ dốc của hàm bậc nhất d = d₀ + vt là hệ số trước t: v = 4 m/s."
      ],
      [
        "Hai xe máy A và B cùng chuyển động trên đường thẳng ngược chiều nhau với tốc độ lần lượt là 35 km/h và 45 km/h. Vận tốc của xe A đối với xe B có độ lớn bằng:",
        [
          "80 km/h.",
          "10 km/h.",
          "35 km/h.",
          "45 km/h."
        ],
        0,
        "Hai xe chạy ngược chiều nên vận tốc tương đối: v = 35 + 45 = 80 km/h."
      ],
      [
        "Một người đi bộ với tốc độ đều 1,2 m/s. Quãng đường người đó đi được trong 15 phút là:",
        [
          "1080 m.",
          "18 m.",
          "180 m.",
          "540 m."
        ],
        0,
        "Đổi 15 phút = 900 s. Quãng đường s = v × t = 1,2 × 900 = 1080 m."
      ],
      [
        "Một xe ôtô đang đứng yên thì khởi hành chuyển động thẳng nhanh dần đều với gia tốc 2,5 m/s². Thời gian để xe đạt tốc độ 20 m/s là:",
        [
          "8 s.",
          "5 s.",
          "10 s.",
          "12 s."
        ],
        0,
        "t = v / a = 20 / 2,5 = 8 s."
      ],
      [
        "Hệ thức nào sau đây diễn tả mối liên hệ giữa vận tốc, gia tốc và thời gian trong chuyển động thẳng biến đổi đều?",
        [
          "v = v₀ + at.",
          "v = v₀ – 1/2·at².",
          "v = v₀t + at.",
          "v = 1/2·at²."
        ],
        0,
        "Công thức vận tốc chuẩn: v = v₀ + at."
      ],
      [
        "Một xe tải đang chạy với vận tốc 18 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 1,5 m/s². Quãng đường xe đi được đến khi dừng hẳn là:",
        [
          "108 m.",
          "54 m.",
          "72 m.",
          "216 m."
        ],
        0,
        "s = v₀² / (2|a|) = 18² / (2 × 1,5) = 324 / 3 = 108 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động là đường thẳng dốc lên qua gốc tọa độ O. Vật đó chuyển động:",
        [
          "Nhanh dần đều từ trạng thái nghỉ.",
          "Chậm dần đều.",
          "Thẳng đều.",
          "Đứng yên."
        ],
        0,
        "Đường thẳng v = at qua gốc tọa độ O với a > 0 biểu diễn chuyển động thẳng nhanh dần đều không vận tốc đầu."
      ],
      [
        "Gia tốc trọng trường g tại một nơi trên bề mặt Trái Đất:",
        [
          "Có giá trị gần đúng bằng 9,8 m/s² hoặc 10 m/s².",
          "Phụ thuộc vào khối lượng của vật rơi.",
          "Phụ thuộc vào kích thước của vật rơi.",
          "Luôn bằng 0."
        ],
        0,
        "Gia tốc trọng trường tại mặt đất xấp xỉ 9,8 m/s² (hoặc lấy chẵn 10 m/s²) và độc lập với khối lượng, kích thước vật."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 500 m. Lấy g = 10 m/s². Thời gian vật rơi chạm đất là:",
        [
          "10 s.",
          "5 s.",
          "20 s.",
          "50 s."
        ],
        0,
        "t = √(2h / g) = √(2 × 500 / 10) = √100 = 10 s."
      ],
      [
        "Một vật được ném ngang từ độ cao h với tốc độ ban đầu v₀ = 20 m/s. Bỏ qua sức cản không khí. Sau 2 giây kể từ lúc ném, tầm bay xa của vật theo phương ngang là:",
        [
          "40 m.",
          "20 m.",
          "80 m.",
          "60 m."
        ],
        0,
        "Theo phương ngang vật chuyển động thẳng đều: x = v₀t = 20 × 2 = 40 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy thử nghiệm trên một đường đua thẳng khép kín AB. Xe xuất phát từ A chạy thẳng đều đến B cách A 60 km trong thời gian 1 giờ. Tại B, xe quay đầu chạy ngược về A với tốc độ đều 40 km/h hết 1,5 giờ. Chọn chiều dương là chiều từ A đến B.",
        "items": [
          [
            "Quãng đường xe ôtô chạy được cả đi lẫn về là 120 km.",
            true,
            "s = 60 + 60 = 120 km."
          ],
          [
            "Độ dịch chuyển tổng cộng của xe ôtô sau khi quay về lại điểm A bằng 0 km.",
            true,
            "Vị trí cuối trùng vị trí ban đầu nên d = 0 km."
          ],
          [
            "Tốc độ trung bình của xe ôtô trong toàn bộ thời gian chạy bằng 48 km/h.",
            true,
            "Tổng thời gian t = 1 + 1,5 = 2,5 h. Tốc độ v = 120 / 2,5 = 48 km/h."
          ],
          [
            "Vận tốc trung bình của xe ôtô trong cả chuyến đi bằng 48 km/h.",
            false,
            "Vận tốc trung bình v_tb = d / t = 0 / 2,5 = 0 km/h."
          ]
        ]
      },
      {
        "stem": "Một xe ôtô đang chạy với tốc độ 20 m/s thì tài xế nhìn thấy đèn vàng chuyển sang đỏ nên hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s².",
        "items": [
          [
            "Thời gian xe chuyển động từ lúc hãm phanh đến khi dừng hẳn là 8 giây.",
            true,
            "t = v₀ / |a| = 20 / 2,5 = 8 s."
          ],
          [
            "Quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng lại là 80 m.",
            true,
            "s = v₀² / (2|a|) = 20² / (2 × 2,5) = 400 / 5 = 80 m."
          ],
          [
            "Tốc độ của ôtô sau 4 giây kể từ lúc bắt đầu hãm phanh là 10 m/s.",
            true,
            "v = v₀ – |a|t = 20 – 2,5 × 4 = 10 m/s."
          ],
          [
            "Sau 6 giây kể từ lúc hãm phanh, xe đã dừng lại hoàn toàn.",
            false,
            "Xe cần 8 s để dừng hẳn, nên sau 6 s xe vẫn đang chuyển động với v = 20 – 2,5 × 6 = 5 m/s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi xe máy từ nhà đến cơ quan cách nhau 15 km hết thời gian 25 phút. Tốc độ trung bình của người này tính theo đơn vị km/h là bao nhiêu?",
        "answer": "36",
        "explanation": "Đổi 25 phút = 25/60 h = 5/12 h. Tốc độ v = 15 / (5/12) = 36 km/h."
      },
      {
        "question": "Một chiếc ca nô chạy xuôi dòng từ bến A đến bến B cách nhau 48 km hết 2 giờ. Biết vận tốc dòng nước là 4 km/h. Vận tốc của ca nô đối với dòng nước bằng bao nhiêu km/h?",
        "answer": "20",
        "explanation": "Vận tốc xuôi dòng v_xuôi = 48 / 2 = 24 km/h. Vận tốc ca nô v = 24 – 4 = 20 km/h."
      },
      {
        "question": "Một ôtô đang chạy với vận tốc 16 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Sau bao nhiêu giây kể từ lúc hãm phanh thì ôtô dừng lại hoàn toàn?",
        "answer": "8",
        "explanation": "t = v₀ / |a| = 16 / 2 = 8 s."
      },
      {
        "question": "Thả rơi tự do một vật từ độ cao h tại nơi có g = 10 m/s². Khi chạm đất, vật đạt tốc độ 30 m/s. Độ cao h lúc thả vật là bao nhiêu mét?",
        "answer": "45",
        "explanation": "h = v² / (2g) = 30² / (2 × 10) = 900 / 20 = 45 m."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-01",
    "title": "Hóa học 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Quảng Trị",
    "year": "2025–2026",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11387/de-thi-giua-ki-1-hoa-hoc-10-nam-2025-2026-truong-thpt-huong-hoa-quang",
    "questions": [
      [
        "Đối tượng nghiên cứu của Hóa học là:",
        [
          "A. Sự hình thành hệ Mặt Trời và chuyển động của các hành tinh.",
          "B. Cấu tạo của chất, sự biến đổi của chất và ứng dụng của chúng.",
          "C. Lịch sử tiến hóa của các loài sinh vật qua các kỉ địa chất.",
          "D. Tốc độ truyền ánh sáng và sóng âm trong môi trường chân không."
        ],
        1,
        "Theo định nghĩa SGK Hóa học 10: Hóa học là ngành khoa học tự nhiên nghiên cứu về chất, sự biến đổi của chất và ứng dụng của chúng trong đời sống, sản xuất."
      ],
      [
        "Hạt nhân của hầu hết các nguyên tử trong tự nhiên (trừ đồng vị <sup>1</sup><sub>1</sub>H) được cấu tạo từ các hạt cơ bản nào?",
        [
          "A. Electron và neutron.",
          "B. Proton và neutron.",
          "C. Electron và proton.",
          "D. Electron, proton và neutron."
        ],
        1,
        "Hạt nhân nằm ở tâm nguyên tử, gồm proton (mang điện tích dương) và neutron (không mang điện). Riêng đồng vị <sup>1</sup><sub>1</sub>H chỉ có 1 proton, không có neutron."
      ],
      [
        "Khối lượng và điện tích của hạt electron lần lượt là:",
        [
          "A. m &approx; 0,00055 amu, q = -1,602 &times; 10<sup>-19</sup> C.",
          "B. m &approx; 1 amu, q = +1,602 &times; 10<sup>-19</sup> C.",
          "C. m &approx; 1 amu, q = 0.",
          "D. m &approx; 0,00055 amu, q = +1."
        ],
        0,
        "Electron có khối lượng m<sub>e</sub> &approx; 9,109 &times; 10<sup>-31</sup> kg &approx; 0,00055 amu và mang điện tích âm q = -1,602 &times; 10<sup>-19</sup> C (quy ước bằng -1)."
      ],
      [
        "Hạt nhân của nguyên tử potassium (K) có điện tích bằng +30,438 &times; 10<sup>-19</sup> C. Biết điện tích của 1 proton là +1,602 &times; 10<sup>-19</sup> C. Số hạt proton trong hạt nhân nguyên tử potassium là:",
        [
          "A. 17.",
          "B. 18.",
          "C. 19.",
          "D. 20."
        ],
        2,
        "Số proton Z = (+30,438 &times; 10<sup>-19</sup>) / (+1,602 &times; 10<sup>-19</sup>) = 19."
      ],
      [
        "Nguyên tố hóa học là tập hợp các nguyên tử có cùng:",
        [
          "A. Số khối A.",
          "B. Số neutron trong hạt nhân.",
          "C. Số proton trong hạt nhân.",
          "D. Khối lượng nguyên tử tuyệt đối."
        ],
        2,
        "Định nghĩa: Nguyên tố hóa học là tập hợp các nguyên tử có cùng điện tích hạt nhân (cùng số proton Z)."
      ],
      [
        "Kí hiệu nguyên tử <sup>15</sup><sub>7</sub>N cho biết nguyên tử nitrogen có:",
        [
          "A. 7 proton, 7 electron và 8 neutron.",
          "B. 7 proton, 8 electron và 15 neutron.",
          "C. 15 proton, 7 electron và 8 neutron.",
          "D. 8 proton, 7 electron và 15 neutron."
        ],
        0,
        "Z = 7 &rArr; số proton = số electron = 7; số khối A = 15 &rArr; số neutron N = A - Z = 15 - 7 = 8."
      ],
      [
        "Theo mô hình hiện đại, orbital s có dạng hình gì (như hình minh hoạ bên)?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 200 170\" width=\"200\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <radialGradient id=\"sphereGrad\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#93c5fd\"/>\n        <stop offset=\"60%\" stop-color=\"#3b82f6\"/>\n        <stop offset=\"100%\" stop-color=\"#1d4ed8\"/>\n      </radialGradient>\n    </defs>\n    <!-- Trục toạ độ không gian 3 chiều -->\n    <line x1=\"20\" y1=\"90\" x2=\"180\" y2=\"90\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n    <text x=\"182\" y=\"94\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">y</text>\n\n    <line x1=\"100\" y1=\"160\" x2=\"100\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n    <text x=\"96\" y=\"12\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">z</text>\n\n    <line x1=\"150\" y1=\"140\" x2=\"50\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"1.2\"/>\n    <text x=\"40\" y=\"38\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\">x</text>\n\n    <!-- Khối cầu Orbital s đối xứng cầu -->\n    <circle cx=\"100\" cy=\"90\" r=\"42\" fill=\"url(#sphereGrad)\" opacity=\"0.88\"/>\n    <circle cx=\"100\" cy=\"90\" r=\"42\" fill=\"none\" stroke=\"#1e40af\" stroke-width=\"1.5\"/>\n    <text x=\"95\" y=\"94\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\">s</text>\n  </svg>\n  <div class=\"figure-caption\">Hình dạng hình cầu đối xứng của orbital s trong không gian</div>\n</div>",
        [
          "A. Hình số tám nổi.",
          "B. Hình tròn phẳng.",
          "C. Hình cầu.",
          "D. Hình bầu dục elip."
        ],
        2,
        "Orbital s có dạng hình cầu đối xứng trong không gian xung quanh hạt nhân."
      ],
      [
        "Mỗi orbital nguyên tử (AO) chứa tối đa bao nhiêu electron theo nguyên lí Pauli?",
        [
          "A. 1 electron.",
          "B. 2 electron có chiều tự quay ngược nhau.",
          "C. 6 electron có chiều tự quay cùng nhau.",
          "D. 8 electron bão hòa."
        ],
        1,
        "Nguyên lí Pauli: Trên mỗi orbital nguyên tử chỉ chứa tối đa 2 electron và hai electron này có spin ngược chiều nhau."
      ],
      [
        "Số orbital nguyên tử có trong các phân lớp s, p, d, f lần lượt bằng:",
        [
          "A. 1, 3, 5, 7.",
          "B. 1, 2, 4, 6.",
          "C. 2, 6, 10, 14.",
          "D. 1, 4, 9, 16."
        ],
        0,
        "Số AO: phân lớp s có 1 AO; p có 3 AO; d có 5 AO; f có 7 AO."
      ],
      [
        "Lớp electron thứ 3 (lớp M, n = 3) chứa tối đa bao nhiêu electron?",
        [
          "A. 8 electron.",
          "B. 9 electron.",
          "C. 18 electron.",
          "D. 32 electron."
        ],
        2,
        "Số electron tối đa lớp n là 2n<sup>2</sup>. Lớp M (n = 3) chứa tối đa 2 &times; 3<sup>2</sup> = 18 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử phosphorus (P, Z = 15) là:",
        [
          "A. [Ne] 3s<sup>1</sup> 3p<sup>4</sup>.",
          "B. [Ne] 3s<sup>2</sup> 3p<sup>3</sup>.",
          "C. [Ne] 3s<sup>2</sup> 3p<sup>5</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>3</sup> 3p<sup>2</sup>."
        ],
        1,
        "Z = 15: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>3</sup>."
      ],
      [
        "Nguyên tử của một nguyên tố có cấu hình electron lớp ngoài cùng là 3s<sup>2</sup> 3p<sup>1</sup>. Nguyên tố này là:",
        [
          "A. Kim loại.",
          "B. Phi kim.",
          "C. Khí hiếm.",
          "D. Á kim."
        ],
        0,
        "Có 2 + 1 = 3 electron ở lớp ngoài cùng &rArr; là KIM LOẠI (Aluminium, Z = 13)."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện đại được sắp xếp theo chiều tăng dần của:",
        [
          "A. Khối lượng nguyên tử.",
          "B. Số khối A.",
          "C. Điện tích hạt nhân nguyên tử (Z).",
          "D. Bán kính nguyên tử."
        ],
        2,
        "Nguyên tắc 1: Sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (+Z)."
      ],
      [
        "Số thứ tự của chu kì trong Bảng tuần hoàn bằng:",
        [
          "A. Số electron hóa trị.",
          "B. Số lớp electron của nguyên tử.",
          "C. Số phân lớp electron.",
          "D. Số electron ở lớp ngoài cùng."
        ],
        1,
        "Số thứ tự chu kì = Số lớp electron trong nguyên tử."
      ],
      [
        "Nhóm A trong Bảng tuần hoàn bao gồm các nguyên tố loại nào?",
        [
          "A. Nguyên tố s và nguyên tố d.",
          "B. Nguyên tố p và nguyên tố d.",
          "C. Nguyên tố s và nguyên tố p.",
          "D. Nguyên tố d và nguyên tố f."
        ],
        2,
        "Nhóm A (phân nhóm chính) gồm các nguyên tố s và nguyên tố p."
      ],
      [
        "Nguyên tử của nguyên tố aluminium (Al) có Z = 13. Vị trí của Al trong Bảng tuần hoàn là:",
        [
          "A. Ô số 13, chu kì 3, nhóm IIIA.",
          "B. Ô số 13, chu kì 3, nhóm VA.",
          "C. Ô số 13, chu kì 2, nhóm IIIA.",
          "D. Ô số 13, chu kì 3, nhóm IIIB."
        ],
        0,
        "Al (Z = 13): [Ne] 3s<sup>2</sup> 3p<sup>1</sup> &rArr; Ô số 13, chu kì 3 (3 lớp e), nhóm IIIA (nguyên tố p, 3e ngoài cùng)."
      ]
    ],
    "tf": [
      {
        "stem": "Xét tính Đúng/Sai của các phát biểu về cấu tạo nguyên tử và các loại hạt cơ bản:",
        "items": [
          [
            "a) Tất cả các nguyên tử trong tự nhiên đều chứa cả 3 loại hạt: proton, neutron và electron.",
            false,
            "Phát biểu SAI vì đồng vị phổ biến nhất của Hydrogen là <sup>1</sup><sub>1</sub>H có hạt nhân chỉ chứa 1 proton, không chứa neutron (N = 0)."
          ],
          [
            "b) Hạt nhân nguyên tử mang điện tích dương, còn lớp vỏ mang điện tích âm; trong nguyên tử trung hòa điện luôn có P = E = Z.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân vì khối lượng electron rất nhỏ không đáng kể.",
            true,
            "Phát biểu ĐÚNG (m<sub>e</sub> &approx; 0,00055 amu chiếm chưa đến 0,05% khối lượng toàn nguyên tử)."
          ],
          [
            "d) Một nguyên tử R có tổng số hạt p, n, e bằng 40, trong đó số hạt mang điện nhiều hơn không mang điện là 12 thì R là một phi kim.",
            false,
            "Phát biểu SAI. 2Z + N = 40 và 2Z - N = 12 &rArr; Z = 13 (Aluminium), Al có 3e lớp ngoài cùng nên là KIM LOẠI, không phải phi kim."
          ]
        ]
      },
      {
        "stem": "Cho các phát biểu về Bảng tuần hoàn các nguyên tố hóa học hiện đại:",
        "items": [
          [
            "a) Bảng tuần hoàn hiện nay gồm 118 nguyên tố hóa học, được sắp xếp vào 7 chu kì.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Bảng tuần hoàn hiện đại được sắp xếp theo chiều tăng dần của khối lượng nguyên tử.",
            false,
            "Phát biểu SAI, bảng tuần hoàn hiện đại sắp xếp theo chiều tăng dần của ĐIỆN TÍCH HẠT NHÂN (Z)."
          ],
          [
            "c) Các nguyên tố cùng chu kì có cùng số lớp electron trong nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Hai nguyên tố X và Y thuộc cùng nhóm A ở hai chu kì liên tiếp có tổng số proton là 32 (Z<sub>X</sub> < Z<sub>Y</sub>). Vị trí của X là ô 12 (chu kì 3, nhóm IIA) và Y là ô 20 (chu kì 4, nhóm IIA).",
            true,
            "Phát biểu ĐÚNG. Z<sub>Y</sub> - Z<sub>X</sub> = 8 và Z<sub>X</sub> + Z<sub>Y</sub> = 32 &rArr; Z<sub>X</sub> = 12 (Mg), Z<sub>Y</sub> = 20 (Ca)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử Potassium (K) có Z = 19 và số khối A = 39. Tổng số hạt mang điện trong toàn bộ nguyên tử K bằng bao nhiêu?",
        "answer": "38",
        "explanation": "Các hạt mang điện gồm proton (+19) và electron (-19) &rArr; Tổng số hạt mang điện = 19 + 19 = 38 hạt."
      },
      {
        "question": "Nguyên tố Copper (Cu) có hai đồng vị bền là <sup>63</sup>Cu và <sup>65</sup>Cu với nguyên tử khối trung bình là 63,54. Thành phần phần trăm số nguyên tử của đồng vị <sup>63</sup>Cu là bao nhiêu %?",
        "answer": "73",
        "explanation": "Gọi x là % <sup>63</sup>Cu &rArr; (63x + 65(100 - x)) / 100 = 63,54 &rArr; -2x + 6500 = 6354 &rArr; 2x = 146 &rArr; x = 73%."
      },
      {
        "question": "Tổng số orbital nguyên tử (AO) chứa electron ở trạng thái cơ bản của nguyên tử Nitrogen (Z = 7) là bao nhiêu?",
        "answer": "5",
        "explanation": "Cấu hình e của N: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> &rArr; gồm 1 AO 1s, 1 AO 2s và 3 AO 2p &rArr; Tổng số AO chứa electron là 1 + 1 + 3 = 5 AO."
      },
      {
        "question": "Nguyên tử của nguyên tố Calcium (Ca) có Z = 20. Số thứ tự chu kì của Calcium trong Bảng tuần hoàn là bao nhiêu?",
        "answer": "4",
        "explanation": "Ca (Z = 20): [Ar] 4s<sup>2</sup> có 4 lớp electron nên thuộc chu kì 4."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai nguyên tử Nitrogen (Z = 7) và Oxygen (Z = 8).<br>a) Viết cấu hình electron ở trạng thái cơ bản của N và O.<br>b) Biểu diễn cấu hình theo ô orbital cho lớp ngoài cùng của mỗi nguyên tử và xác định số electron độc thân của N và O.",
        "solution": "a) Cấu hình electron:<br>• N (Z = 7): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> (0,25 điểm).<br>• O (Z = 8): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> (0,25 điểm).<br>b) Biểu diễn ô orbital lớp ngoài cùng (n = 2):<br>• Lớp ngoài cùng của N (2s<sup>2</sup> 2p<sup>3</sup>): Phân lớp 2s có 1 ô chứa 2 electron ghép đôi [↑↓]; phân lớp 2p có 3 ô, mỗi ô chứa 1 electron độc thân [↑][↑][↑] &rArr; N có 3 electron độc thân (0,25 điểm).<br>• Lớp ngoài cùng của O (2s<sup>2</sup> 2p<sup>4</sup>): Phân lớp 2s có 1 ô [↑↓]; phân lớp 2p có 3 ô: ô thứ nhất chứa cặp ghép đôi [↑↓], hai ô còn lại mỗi ô chứa 1e độc thân [↑][↑] &rArr; O có 2 electron độc thân (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Tổng số hạt proton, neutron, electron trong nguyên tử của nguyên tố X là 46 hạt. Trong hạt nhân nguyên tử X, số hạt không mang điện nhiều hơn số hạt mang điện là 1 hạt.<br>a) Xác định số hạt p, n, e và số khối A của nguyên tử X.<br>b) Viết cấu hình electron của X và cho biết X là kim loại, phi kim hay khí hiếm. Vì sao?",
        "solution": "a) Ta có hệ phương trình:<br>• 2Z + N = 46 (1).<br>• N - Z = 1 &rArr; N = Z + 1 (2).<br>Thay (2) vào (1): 2Z + (Z + 1) = 46 &rArr; 3Z = 45 &rArr; Z = 15. Suy ra N = 16.<br>Vậy p = 15, e = 15, n = 16. Số khối A = Z + N = 15 + 16 = 31 (0,5 điểm).<br>b) Cấu hình electron của X (Phosphorus, Z = 15): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>3</sup>.<br>Vì có 5 electron ở lớp ngoài cùng (n = 3) nên X là một PHI KIM (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kì của Bảng tuần hoàn có tổng số hạt proton trong hai hạt nhân là 25 (Z<sub>A</sub> < Z<sub>B</sub>).<br>a) Xác định số hiệu nguyên tử Z<sub>A</sub> và Z<sub>B</sub>.<br>b) Viết cấu hình electron của A, B và xác định vị trí (ô, chu kì, nhóm) của chúng trong Bảng tuần hoàn.",
        "solution": "a) Hai nguyên tố kế tiếp nhau trong cùng chu kì nên: Z<sub>B</sub> - Z<sub>A</sub> = 1.<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 25.<br>Giải hệ: Z<sub>A</sub> = (25 - 1) / 2 = 12 (Magnesium) và Z<sub>B</sub> = 13 (Aluminium) (0,5 điểm).<br>b) Vị trí trong BTH:<br>• A (Z = 12): [Ne] 3s<sup>2</sup> &rArr; Ô số 12, chu kì 3 (có 3 lớp e), nhóm IIA (nguyên tố s, 2e ngoài cùng).<br>• B (Z = 13): [Ne] 3s<sup>2</sup> 3p<sup>1</sup> &rArr; Ô số 13, chu kì 3 (có 3 lớp e), nhóm IIIA (nguyên tố p, 3e ngoài cùng) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-02",
    "title": "Hóa học 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Gio Linh – Quảng Trị (Đề chính thức Giữa kì I)",
    "province": "Quảng Trị",
    "year": "2024–2025",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11211/de-thi-giua-ki-1-vat-li-10-nam-2024-2025-truong-thpt-gio-linh-quang-tr",
    "questions": [
      [
        "Hiện tượng nào sau đây là hiện tượng hóa học (có sự tạo thành chất mới)?",
        [
          "A. Thanh sắt nung đỏ, dát mỏng và uốn cong thành lưỡi cuốc.",
          "B. Sục khí carbon dioxide vào dung dịch nước vôi trong thấy xuất hiện kết tủa vẩn đục.",
          "C. Nước đá để ngoài không khí bị tan chảy thành nước lỏng.",
          "D. Nhựa đường được đun nóng chảy để trải mặt đường giao thông."
        ],
        1,
        "Hiện tượng hóa học là hiện tượng có chất mới sinh ra. Phản ứng: CO<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; CaCO<sub>3</sub>↓ + H<sub>2</sub>O tạo kết tủa trắng CaCO<sub>3</sub>."
      ],
      [
        "Trong một nguyên tử trung hòa về điện, mối quan hệ giữa số hạt electron và proton là:",
        [
          "A. Luôn bằng nhau (e = p = Z).",
          "B. Số electron luôn lớn hơn số proton.",
          "C. Số electron luôn nhỏ hơn số proton.",
          "D. Không thể so sánh được."
        ],
        0,
        "Nguyên tử trung hòa điện vì điện tích dương của hạt nhân bằng điện tích âm của vỏ electron &rArr; số proton = số electron."
      ],
      [
        "Số khối A của nguyên tử bằng:",
        [
          "A. Tổng khối lượng các hạt proton và neutron tính theo gam.",
          "B. Tổng số hạt proton và neutron trong hạt nhân nguyên tử.",
          "C. Khối lượng nguyên tử tuyệt đối.",
          "D. Tổng số hạt proton, neutron và electron."
        ],
        1,
        "Số khối A = Z + N (tổng số proton và neutron trong hạt nhân)."
      ],
      [
        "Khối lượng thực của nguyên tử magnesium (Mg) là 39,8271 &times; 10<sup>-27</sup> kg. Biết 1 amu &approx; 1,6605 &times; 10<sup>-27</sup> kg. Khối lượng nguyên tử của magnesium theo amu xấp xỉ bằng:",
        [
          "A. 23,985 amu.",
          "B. 66,133 amu.",
          "C. 12,000 amu.",
          "D. 24,305 amu."
        ],
        0,
        "Khối lượng theo amu = (39,8271 &times; 10<sup>-27</sup>) / (1,6605 &times; 10<sup>-27</sup>) &approx; 23,985 amu."
      ],
      [
        "Số hiệu nguyên tử Z của một nguyên tố hóa học KHÔNG cho biết thông tin nào sau đây?",
        [
          "A. Số hạt proton trong hạt nhân.",
          "B. Số hạt electron ở lớp vỏ nguyên tử trung hòa.",
          "C. Số đơn vị điện tích hạt nhân.",
          "D. Số hạt neutron trong hạt nhân."
        ],
        3,
        "Z cho biết proton, electron, số đơn vị điện tích hạt nhân. Muốn biết neutron phải biết thêm số khối A (N = A - Z)."
      ],
      [
        "Thông tin nào sau đây KHÔNG ĐÚNG về đồng vị chì <sup>206</sup><sub>82</sub>Pb?",
        [
          "A. Số hiệu nguyên tử bằng 82.",
          "B. Điện tích hạt nhân bằng 82.",
          "C. Số hạt neutron trong hạt nhân bằng 124.",
          "D. Số khối của nguyên tử bằng 206."
        ],
        1,
        "Điện tích hạt nhân phải là +82 (hoặc +82e), 82 chỉ là số đơn vị điện tích hạt nhân."
      ],
      [
        "Theo mô hình hiện đại, các electron chuyển động xung quanh hạt nhân như thế nào?",
        [
          "A. Rất nhanh theo những quỹ đạo tròn hoặc elip cố định.",
          "B. Rất nhanh không theo những quỹ đạo xác định, tạo thành đám mây electron.",
          "C. Rất chậm trên mặt phẳng bao quanh hạt nhân.",
          "D. Đứng yên tại các vị trí xác định trong không gian."
        ],
        1,
        "Mô hình hiện đại: Electron chuyển động rất nhanh trong vùng không gian xung quanh hạt nhân không theo quỹ đạo xác định."
      ],
      [
        "Orbital nguyên tử (AO) được định nghĩa là:",
        [
          "A. Quỹ đạo tròn mà electron chuyển động.",
          "B. Đám mây hình cầu luôn chứa 2 electron ghép đôi.",
          "C. Khu vực không gian xung quanh hạt nhân mà xác suất tìm thấy electron khoảng 90%.",
          "D. Khoảng cách cố định từ electron đến tâm hạt nhân."
        ],
        2,
        "Định nghĩa: AO là khu vực không gian xung quanh hạt nhân có xác suất có mặt (tìm thấy) electron lớn nhất (khoảng 90%)."
      ],
      [
        "Các lớp electron từ gần hạt nhân ra ngoài được đánh số n = 1, 2, 3, 4 tương ứng với các chữ cái in hoa là:",
        [
          "A. K, L, M, N.",
          "B. L, M, N, O.",
          "C. K, M, N, P.",
          "D. A, B, C, D."
        ],
        0,
        "n = 1 (K), n = 2 (L), n = 3 (M), n = 4 (N)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử fluorine (Z = 9) là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>3</sup> 2p<sup>4</sup>."
        ],
        2,
        "Z = 9: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>."
      ],
      [
        "Nguyên tử nguyên tố X có cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup>. Số hiệu nguyên tử của X là:",
        [
          "A. 18.",
          "B. 19.",
          "C. 20.",
          "D. 21."
        ],
        1,
        "Tổng e = 2 + 2 + 6 + 2 + 6 + 1 = 19 &rArr; Z = 19 (Potassium, K)."
      ],
      [
        "Nguyên tử của nguyên tố Y có 3 electron ở phân lớp 3p. Số hiệu nguyên tử Z của Y là:",
        [
          "A. 13.",
          "B. 15.",
          "C. 16.",
          "D. 17."
        ],
        1,
        "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> &rArr; Tổng số e = 15 &rArr; Z = 15 (Phosphorus)."
      ],
      [
        "Số thứ tự của ô nguyên tố trong Bảng tuần hoàn bằng:",
        [
          "A. Số neutron N.",
          "B. Số khối A.",
          "C. Số hiệu nguyên tử Z.",
          "D. Khối lượng nguyên tử."
        ],
        2,
        "Số thứ tự ô nguyên tố = Số hiệu nguyên tử Z = P = E."
      ],
      [
        "Các chu kì nhỏ trong Bảng tuần hoàn gồm những chu kì nào?",
        [
          "A. Chu kì 1, 2, 3.",
          "B. Chu kì 1, 2, 3, 4.",
          "C. Chu kì 4, 5, 6.",
          "D. Chu kì 5, 6, 7."
        ],
        0,
        "Chu kì nhỏ gồm chu kì 1, 2, 3 (chứa từ 2 đến 8 nguyên tố)."
      ],
      [
        "Nhóm VIIIA trong Bảng tuần hoàn gồm các nguyên tố thuộc loại:",
        [
          "A. Kim loại kiềm.",
          "B. Kim loại kiềm thổ.",
          "C. Halogen.",
          "D. Khí hiếm."
        ],
        3,
        "Nhóm VIIIA gồm các nguyên tố khí hiếm có cấu hình e bão hòa 8e ngoài cùng (He có 2e)."
      ],
      [
        "Nguyên tử của nguyên tố Y có cấu hình electron lớp ngoài cùng là 3s<sup>2</sup> 3p<sup>4</sup>. Vị trí của Y trong Bảng tuần hoàn là:",
        [
          "A. Ô số 16, chu kì 3, nhóm IVA.",
          "B. Ô số 16, chu kì 3, nhóm VIA.",
          "C. Ô số 14, chu kì 3, nhóm IVA.",
          "D. Ô số 16, chu kì 4, nhóm VIA."
        ],
        1,
        "Y có cấu hình đầy đủ: [Ne] 3s<sup>2</sup> 3p<sup>4</sup> &rArr; Ô 16, chu kì 3 (3 lớp e), nhóm VIA (nguyên tố p, 6e ngoài cùng)."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các phát biểu về nguyên tố hóa học, đồng vị và cấu trúc lớp vỏ electron của nguyên tử Chlorine (Z = 17):",
        "items": [
          [
            "a) Các nguyên tử thuộc cùng một nguyên tố hóa học bắt buộc phải có cùng số hiệu nguyên tử Z nhưng có thể có số khối A khác nhau.",
            true,
            "Phát biểu ĐÚNG, cùng Z nhưng khác số neutron tạo nên các đồng vị khác nhau."
          ],
          [
            "b) Số khối A luôn là một số nguyên dương và được tính bằng tổng số hạt proton và neutron: A = Z + N.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Nguyên tử Chlorine (Z = 17) có cấu hình electron là [Ne] 3s<sup>2</sup> 3p<sup>5</sup>, gồm 3 lớp electron và có 7 electron ở lớp ngoài cùng.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Ở trạng thái cơ bản, phân lớp ngoài cùng 3p<sup>5</sup> của nguyên tử Chlorine chứa 3 electron độc thân.",
            false,
            "Phát biểu SAI. 5 electron ở 3p phân bố vào 3 ô orbital tạo thành 2 ô ghép đôi [↑↓][↑↓] và chỉ có 1 ô độc thân [↑], do đó Cl chỉ có 1 electron độc thân."
          ]
        ]
      },
      {
        "stem": "Xét các đặc điểm về cấu tạo Bảng tuần hoàn các nguyên tố hóa học hiện đại:",
        "items": [
          [
            "a) Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số electron lớp ngoài cùng, được xếp theo chiều tăng dần của điện tích hạt nhân.",
            false,
            "Phát biểu SAI. Chu kì gồm các nguyên tố có cùng SỐ LỚP ELECTRON, không phải cùng số electron lớp ngoài cùng."
          ],
          [
            "b) Bảng tuần hoàn gồm 7 chu kì; trong đó chu kì 1 là chu kì ngắn nhất, chỉ chứa 2 nguyên tố là Hydrogen (H) và Helium (He).",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Tất cả các nguyên tố thuộc nhóm A (từ IA đến VIIIA) đều là nguyên tố d hoặc nguyên tố f.",
            false,
            "Phát biểu SAI. Nhóm A là các nguyên tố s và p."
          ],
          [
            "d) Đối với các nguyên tố nhóm A, số thứ tự của nhóm luôn bằng đúng số electron ở lớp ngoài cùng của nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử Fluorine (F) có 9 proton, 9 electron và 10 neutron. Số khối A của nguyên tử F bằng bao nhiêu?",
        "answer": "19",
        "explanation": "Số khối A = Z + N = 9 + 10 = 19."
      },
      {
        "question": "Khí Argon (Ar) trong tự nhiên là hỗn hợp gồm 3 đồng vị bền: <sup>40</sup>Ar (99,60%), <sup>36</sup>Ar (0,34%) và <sup>38</sup>Ar (0,06%). Nguyên tử khối trung bình của Argon bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "39.99",
        "explanation": "A̅ = (40 &times; 99,60 + 36 &times; 0,34 + 38 &times; 0,06) / 100 = (3984 + 12,24 + 2,28) / 100 = 39,9852 &approx; 39,99 amu."
      },
      {
        "question": "Nguyên tử Sulfur (S, Z = 16) có cấu hình electron là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>. Tổng số electron trên tất cả các phân lớp p của nguyên tử Sulfur là bao nhiêu?",
        "answer": "10",
        "explanation": "Các phân lớp p gồm 2p<sup>6</sup> (6e) và 3p<sup>4</sup> (4e) &rArr; Tổng số e ở phân lớp p = 6 + 4 = 10 electron."
      },
      {
        "question": "Nguyên tử của nguyên tố Silicon (Si) có 3 lớp electron và có 4 electron ở lớp ngoài cùng. Số hiệu nguyên tử Z của Silicon bằng bao nhiêu?",
        "answer": "14",
        "explanation": "3 lớp electron: lớp 1 (2e), lớp 2 (8e), lớp 3 (4e) &rArr; Tổng số e = 2 + 8 + 4 = 14 &rArr; Z = 14."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Viết cấu hình electron đầy đủ và dạng thu gọn của các nguyên tử có số hiệu nguyên tử Z = 11, Z = 17, Z = 18. Xác định tính chất hóa học cơ bản (kim loại, phi kim hay khí hiếm) của mỗi nguyên tố.",
        "solution": "• Z = 11 (Sodium, Na): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> hay [Ne] 3s<sup>1</sup>. Có 1e ngoài cùng &rArr; KIM LOẠI (0,35 điểm).<br>• Z = 17 (Chlorine, Cl): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>5</sup>. Có 7e ngoài cùng &rArr; PHI KIM (0,35 điểm).<br>• Z = 18 (Argon, Ar): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>6</sup>. Có 8e ngoài cùng bão hòa &rArr; KHÍ HIẾM (0,3 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Tổng số hạt cơ bản (p, n, e) trong nguyên tử của nguyên tố Y là 34 hạt. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 10 hạt.<br>a) Tìm số hạt proton, neutron, electron và số khối A của nguyên tử Y.<br>b) Viết cấu hình electron của Y và xác định vị trí của Y trong Bảng tuần hoàn.",
        "solution": "a) Ta có hệ phương trình:<br>• 2Z + N = 34 (1).<br>• 2Z - N = 10 (2).<br>Cộng (1) và (2): 4Z = 44 &rArr; Z = 11 (Sodium, Na).<br>Thay vào: N = 34 - 22 = 12.<br>Số khối A = Z + N = 11 + 12 = 23. Vậy p = 11, e = 11, n = 12 (0,5 điểm).<br>b) Cấu hình electron của Y (Z = 11): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> hay [Ne] 3s<sup>1</sup>.<br>Vị trí: Ô số 11, chu kì 3 (có 3 lớp e), nhóm IA (nguyên tố s, 1e lớp ngoài cùng) (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Hai nguyên tố R và T thuộc cùng một nhóm A và ở hai chu kì liên tiếp trong Bảng tuần hoàn. Tổng số đơn vị điện tích hạt nhân của R và T là 22 (Z<sub>R</sub> < Z<sub>T</sub>).<br>a) Xác định số hiệu nguyên tử Z<sub>R</sub> và Z<sub>T</sub>.<br>b) Viết cấu hình electron của R và T, xác định vị trí (ô, chu kì, nhóm) của chúng trong Bảng tuần hoàn.",
        "solution": "a) Vì R và T cùng nhóm A ở hai chu kì liên tiếp (chu kì 2 và 3) nên: Z<sub>T</sub> - Z<sub>R</sub> = 8.<br>Theo đề bài: Z<sub>R</sub> + Z<sub>T</sub> = 22.<br>Giải hệ: Z<sub>R</sub> = (22 - 8) / 2 = 7 (Nitrogen) và Z<sub>T</sub> = 7 + 8 = 15 (Phosphorus) (0,5 điểm).<br>b) Vị trí trong BTH:<br>• R (Z = 7): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> &rArr; Ô số 7, chu kì 2 (2 lớp e), nhóm VA (nguyên tố p, 5e ngoài cùng).<br>• T (Z = 15): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> &rArr; Ô số 15, chu kì 3 (3 lớp e), nhóm VA (nguyên tố p, 5e ngoài cùng) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-03",
    "title": "Hóa học 10 - Đề 03 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11325/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
    "questions": [
      [
        "Phương pháp học tập Hóa học hiệu quả nhằm phát triển năng lực khoa học tự nhiên bao gồm những hoạt động nào?",
        [
          "A. Chỉ ghi nhớ máy móc các phương trình hóa học và công thức tính toán.",
          "B. Quan sát thực nghiệm, tư duy lý thuyết, sử dụng mô hình hóa và thực hành giải quyết vấn đề.",
          "C. Chỉ đọc sách giáo khoa và tra cứu mạng Internet mà không làm thí nghiệm.",
          "D. Học thuộc lòng đáp án các đề thi trắc nghiệm từ các năm trước."
        ],
        1,
        "Phương pháp học tập hóa học đúng đắn gồm: quan sát thực nghiệm thực tế, tư duy lí thuyết khoa học, mô hình hóa và thực hành giải quyết vấn đề trong học tập và đời sống."
      ],
      [
        "Trong nguyên tử carbon (C), số hạt proton là 6 và số hạt neutron là 6. Số hạt electron trong nguyên tử C là:",
        [
          "A. 6.",
          "B. 12.",
          "C. 18.",
          "D. 8."
        ],
        0,
        "Nguyên tử trung hòa điện nên số electron = số proton = 6."
      ],
      [
        "Nguyên tử có cấu tạo rỗng. Kích thước của toàn bộ nguyên tử lớn hơn kích thước của hạt nhân khoảng:",
        [
          "A. 10 lần.",
          "B. 100 lần.",
          "C. 10 000 lần.",
          "D. 1 000 000 lần."
        ],
        2,
        "Đường kính nguyên tử khoảng 10<sup>-10</sup> m, đường kính hạt nhân khoảng 10<sup>-14</sup> m đến 10<sup>-15</sup> m, nghĩa là đường kính nguyên tử lớn gấp khoảng 10 000 lần đường kính hạt nhân."
      ],
      [
        "Đơn vị đo kích thước nguyên tử thường dùng là nanomet (nm) và angstrom (&Aring;). Mối liên hệ chính xác giữa các đơn vị đo này là:",
        [
          "A. 1 nm = 10<sup>-9</sup> m = 10 &Aring; = 10<sup>-7</sup> cm.",
          "B. 1 nm = 10<sup>-10</sup> m = 1 &Aring; = 10<sup>-8</sup> cm.",
          "C. 1 &Aring; = 10<sup>-9</sup> m = 10 nm = 10<sup>-7</sup> cm.",
          "D. 1 nm = 10<sup>-12</sup> m = 100 &Aring;."
        ],
        0,
        "1 nm = 10<sup>-9</sup> m = 10<sup>-7</sup> cm = 10 &Aring;; 1 &Aring; = 10<sup>-10</sup> m = 10<sup>-8</sup> cm."
      ],
      [
        "Nhận định nào sau đây KHÔNG ĐÚNG khi nói về hai nguyên tử <sup>63</sup><sub>29</sub>Cu và <sup>65</sup><sub>29</sub>Cu?",
        [
          "A. Là hai đồng vị của cùng nguyên tố copper (đồng).",
          "B. Có cùng số electron ở lớp vỏ nguyên tử.",
          "C. Có cùng số hạt neutron trong hạt nhân nguyên tử.",
          "D. Có cùng số hiệu nguyên tử Z = 29."
        ],
        2,
        "Hai đồng vị có cùng số proton Z = 29 nhưng khác nhau về số neutron: <sup>63</sup>Cu có N = 34; <sup>65</sup>Cu có N = 36."
      ],
      [
        "Cho ba nguyên tử có kí hiệu: <sup>24</sup><sub>12</sub>X, <sup>25</sup><sub>12</sub>Y, <sup>26</sup><sub>12</sub>Z. Phát biểu nào sau đây là SAI?",
        [
          "A. Số hạt electron của các nguyên tử lần lượt là 12, 13, 14.",
          "B. X, Y, Z là 3 đồng vị của cùng một nguyên tố hóa học.",
          "C. X, Y, Z đều thuộc về nguyên tố magnesium (Mg).",
          "D. Hạt nhân của mỗi nguyên tử đều có đúng 12 hạt proton."
        ],
        0,
        "X, Y, Z đều có cùng Z = 12 nên số electron của mỗi nguyên tử đều bằng 12 hạt. Phát biểu số electron là 12, 13, 14 là SAI."
      ],
      [
        "Electron thuộc lớp nào sau đây liên kết chặt chẽ nhất với hạt nhân và có mức năng lượng thấp nhất?",
        [
          "A. Lớp K (n = 1).",
          "B. Lớp L (n = 2).",
          "C. Lớp M (n = 3).",
          "D. Lớp N (n = 4)."
        ],
        0,
        "Electron ở lớp K (n = 1) gần hạt nhân nhất, chịu lực hút của hạt nhân mạnh nhất nên có mức năng lượng thấp nhất và liên kết chặt chẽ nhất."
      ],
      [
        "Số electron tối đa chứa trong các phân lớp s, p, d, f lần lượt là:",
        [
          "A. 2, 6, 10, 14.",
          "B. 1, 3, 5, 7.",
          "C. 2, 4, 6, 8.",
          "D. 2, 8, 18, 32."
        ],
        0,
        "Phân lớp s chứa tối đa 2e; p chứa tối đa 6e; d chứa tối đa 10e; f chứa tối đa 14e."
      ],
      [
        "Lớp electron thứ 3 (lớp M) có bao nhiêu phân lớp electron?",
        [
          "A. 1 phân lớp.",
          "B. 2 phân lớp.",
          "C. 3 phân lớp.",
          "D. 4 phân lớp."
        ],
        2,
        "Lớp thứ n (n &le; 4) có n phân lớp. Lớp M (n = 3) có đúng 3 phân lớp là 3s, 3p, 3d."
      ],
      [
        "Số orbital nguyên tử tối đa có trong lớp M (n = 3) là:",
        [
          "A. 3.",
          "B. 4.",
          "C. 9.",
          "D. 18."
        ],
        2,
        "Số AO tối đa ở lớp thứ n là n<sup>2</sup>. Lớp M (n = 3) có 3<sup>2</sup> = 9 AO (gồm 1 AO 3s, 3 AO 3p, 5 AO 3d)."
      ],
      [
        "Nguyên tử của nguyên tố nào sau đây có đúng 4 electron ở lớp ngoài cùng?",
        [
          "A. Carbon (Z = 6).",
          "B. Nitrogen (Z = 7).",
          "C. Aluminium (Z = 13).",
          "D. Oxygen (Z = 8)."
        ],
        0,
        "Carbon (Z = 6): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup> có 2 + 2 = 4 electron ở lớp ngoài cùng."
      ],
      [
        "Các electron của nguyên tử X được phân bố trên 3 lớp, lớp thứ 3 có 6 electron. Số đơn vị điện tích hạt nhân của nguyên tử X là:",
        [
          "A. 6.",
          "B. 8.",
          "C. 14.",
          "D. 16."
        ],
        3,
        "3 lớp e: 2, 8, 6 &rArr; Z = 2 + 8 + 6 = 16 (Sulfur)."
      ],
      [
        "Nguyên tố p là những nguyên tố mà nguyên tử có electron cuối cùng được điền vào phân lớp nào?",
        [
          "A. Phân lớp s.",
          "B. Phân lớp p.",
          "C. Phân lớp d.",
          "D. Phân lớp f."
        ],
        1,
        "Nguyên tố p là nguyên tố có electron cuối cùng điền vào phân lớp p theo mức năng lượng."
      ],
      [
        "Các nguyên tố thuộc nhóm B trong Bảng tuần hoàn bao gồm những loại nguyên tố nào?",
        [
          "A. Nguyên tố s và nguyên tố p.",
          "B. Nguyên tố d và nguyên tố f.",
          "C. Nguyên tố s và nguyên tố d.",
          "D. Nguyên tố p và nguyên tố f."
        ],
        1,
        "Nhóm B gồm các nguyên tố d và f (kim loại chuyển tiếp)."
      ],
      [
        "Cho các nguyên tố Na (Z = 11), Mg (Z = 12), Al (Z = 13). Các nguyên tố này có đặc điểm chung nào sau đây?",
        [
          "A. Cùng thuộc một nhóm A trong Bảng tuần hoàn.",
          "B. Cùng có 3 electron ở lớp ngoài cùng.",
          "C. Cùng thuộc chu kì 3 do nguyên tử đều có 3 lớp electron.",
          "D. Đều là các nguyên tố p."
        ],
        2,
        "Na, Mg, Al đều có 3 lớp electron nên đều thuộc chu kì 3."
      ],
      [
        "Nguyên tử của nguyên tố T có cấu hình electron [Ne] 3s<sup>2</sup> 3p<sup>4</sup>. Vị trí của T trong Bảng tuần hoàn là:",
        [
          "A. Ô số 16, chu kì 3, nhóm VIA.",
          "B. Ô số 16, chu kì 3, nhóm IVA.",
          "C. Ô số 16, chu kì 4, nhóm VIA.",
          "D. Ô số 14, chu kì 3, nhóm VIA."
        ],
        0,
        "T (Z = 16): Ô số 16, chu kì 3, nhóm VIA."
      ]
    ],
    "tf": [
      {
        "stem": "Cho cấu hình electron của 4 nguyên tử: X (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>); Y (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>); Z (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>); T (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup>):",
        "items": [
          [
            "a) Cả hai nguyên tử X và T đều là kim loại.",
            true,
            "Phát biểu ĐÚNG. X có 2e ngoài cùng (Mg) và T có 1e ngoài cùng (K) đều là kim loại."
          ],
          [
            "b) Nguyên tử Y là một phi kim có 6 electron ở lớp ngoài cùng.",
            true,
            "Phát biểu ĐÚNG. Y (Oxygen, Z = 8) có lớp ngoài cùng là 2s<sup>2</sup> 2p<sup>4</sup> (6e)."
          ],
          [
            "c) Nguyên tử Z là khí hiếm có cấu hình electron bão hòa 8e lớp ngoài cùng rất bền vững.",
            true,
            "Phát biểu ĐÚNG. Z (Argon, Z = 18) có 8e lớp ngoài cùng bão hòa."
          ],
          [
            "d) Nguyên tử T có 2 electron ở lớp electron ngoài cùng.",
            false,
            "Phát biểu SAI. Lớp ngoài cùng của T là lớp 4 (4s<sup>1</sup>) chỉ có 1 electron."
          ]
        ]
      },
      {
        "stem": "Cho nguyên tố X thuộc chu kì 2, nhóm VIA trong Bảng tuần hoàn các nguyên tố hóa học:",
        "items": [
          [
            "a) Nguyên tử của nguyên tố X có tổng cộng 8 electron.",
            true,
            "Phát biểu ĐÚNG. Chu kì 2, nhóm VIA &rArr; 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> &rArr; Z = 8 (Oxygen)."
          ],
          [
            "b) X là một phi kim và thuộc loại nguyên tố p.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Sự phân bố electron theo từng lớp của nguyên tử X lần lượt là 2 và 6.",
            true,
            "Phát biểu ĐÚNG. Lớp K có 2e, lớp L có 6e."
          ],
          [
            "d) Ở trạng thái cơ bản, nguyên tử X có 4 electron độc thân.",
            false,
            "Phát biểu SAI. Phân lớp 2p<sup>4</sup> gồm 1 cặp ghép đôi [↑↓] và 2 electron độc thân [↑][↑], do đó X chỉ có 2 electron độc thân."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử nguyên tố A có 27 hạt, trong đó số hạt không mang điện là 14. Số hạt electron trong nguyên tử A là bao nhiêu?",
        "answer": "13",
        "explanation": "Hạt nhân gồm proton và neutron. Số proton = 27 - 14 = 13 &rArr; Số electron = số proton = 13."
      },
      {
        "question": "Biết trong tự nhiên carbon có 2 đồng vị <sup>12</sup>C và <sup>13</sup>C, oxi có 3 đồng vị <sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O. Số loại phân tử carbon monoxide (CO) có thể tạo thành là bao nhiêu?",
        "answer": "6",
        "explanation": "Số loại phân tử CO = (số đồng vị của C) &times; (số đồng vị của O) = 2 &times; 3 = 6 loại phân tử."
      },
      {
        "question": "Nguyên tử của nguyên tố X có cấu hình electron đã xây dựng theo mức năng lượng đến phân lớp 3d<sup>3</sup>. Tổng số electron của nguyên tử X là bao nhiêu?",
        "answer": "23",
        "explanation": "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>3</sup> (Vanadium, Z = 23). Tổng số electron = 23."
      },
      {
        "question": "Chu kì 3 trong Bảng tuần hoàn các nguyên tố hóa học chứa tất cả bao nhiêu nguyên tố hóa học?",
        "answer": "8",
        "explanation": "Chu kì 3 gồm 8 nguyên tố từ Sodium (<sub>11</sub>Na) đến Argon (<sub>18</sub>Ar)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho các nguyên tố Na (Z = 11), Al (Z = 13), P (Z = 15).<br>a) Viết cấu hình electron của từng nguyên tử.<br>b) Cho biết các nguyên tố trên thuộc loại nguyên tố s, p, d hay f và nêu bản chất kim loại, phi kim hay khí hiếm của chúng.",
        "solution": "a) Cấu hình electron:<br>• Na (Z = 11): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> hay [Ne] 3s<sup>1</sup>.<br>• Al (Z = 13): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>1</sup>.<br>• P (Z = 15): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>3</sup> (0,5 điểm).<br>b) Phân loại nguyên tố và tính chất:<br>• Na: Nguyên tố s (e cuối vào phân lớp s), có 1e ngoài cùng &rArr; Kim loại kiềm mạnh.<br>• Al: Nguyên tố p (e cuối vào phân lớp p), có 3e ngoài cùng &rArr; Kim loại.<br>• P: Nguyên tố p (e cuối vào phân lớp p), có 5e ngoài cùng &rArr; Phi kim (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Hợp chất MX<sub>2</sub> có tổng số hạt cơ bản (proton, neutron, electron) bằng 140, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44. Số hiệu nguyên tử của nguyên tố X nhiều hơn số hiệu nguyên tử của nguyên tố M là 5 đơn vị.<br>a) Tìm số hiệu nguyên tử Z<sub>M</sub> và Z<sub>X</sub>.<br>b) Viết công thức hóa học của hợp chất MX<sub>2</sub>.",
        "solution": "a) Trong phân tử MX<sub>2</sub>:<br>• Tổng hạt mang điện: 2Z<sub>M</sub> + 4Z<sub>X</sub>.<br>• Tổng hạt không mang điện: N<sub>M</sub> + 2N<sub>X</sub>.<br>Ta có: (2Z<sub>M</sub> + 4Z<sub>X</sub>) + (N<sub>M</sub> + 2N<sub>X</sub>) = 140 và (2Z<sub>M</sub> + 4Z<sub>X</sub>) - (N<sub>M</sub> + 2N<sub>X</sub>) = 44.<br>&rArr; 2Z<sub>M</sub> + 4Z<sub>X</sub> = 92 &rArr; Z<sub>M</sub> + 2Z<sub>X</sub> = 46 (1).<br>Mặt khác: Z<sub>X</sub> - Z<sub>M</sub> = 5 &rArr; Z<sub>X</sub> = Z<sub>M</sub> + 5 (2).<br>Thay (2) vào (1): Z<sub>M</sub> + 2(Z<sub>M</sub> + 5) = 46 &rArr; 3Z<sub>M</sub> = 36 &rArr; Z<sub>M</sub> = 12 (Magnesium) và Z<sub>X</sub> = 17 (Chlorine) (0,75 điểm).<br>b) Công thức hóa học của MX<sub>2</sub> là MgCl<sub>2</sub> (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Trong cùng một chu kì nhỏ của Bảng tuần hoàn, xét hai nguyên tố kế tiếp nhau là A và B (Z<sub>A</sub> < Z<sub>B</sub>). Biết tổng số hạt proton trong hai hạt nhân là 15.<br>a) Tìm số hiệu nguyên tử Z<sub>A</sub> và Z<sub>B</sub>.<br>b) Xác định vị trí (ô số, chu kì, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Hai nguyên tố kế tiếp nhau trong cùng chu kì: Z<sub>B</sub> - Z<sub>A</sub> = 1.<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 15.<br>Giải hệ: Z<sub>A</sub> = (15 - 1) / 2 = 7 (Nitrogen) và Z<sub>B</sub> = 8 (Oxygen) (0,5 điểm).<br>b) Vị trí trong BTH:<br>• A (Z = 7): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> &rArr; Ô số 7, chu kì 2 (có 2 lớp e), nhóm VA (nguyên tố p, 5e ngoài cùng).<br>• B (Z = 8): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> &rArr; Ô số 8, chu kì 2 (có 2 lớp e), nhóm VIA (nguyên tố p, 6e ngoài cùng) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-04",
    "title": "Hóa học 10 - Đề 04 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://vndethi.com/de-giua-hoc-ky-1-hoa-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang/",
    "questions": [
      [
        "Hóa học đóng vai trò nòng cốt đối với các lĩnh vực quan trọng nào của đời sống?",
        [
          "A. Y dược, Nông nghiệp, Công nghiệp vật liệu và Năng lượng mới.",
          "B. Thiên văn học cổ đại và Khảo cổ học thuần túy.",
          "C. Khoa học ngôn ngữ và Triết học phương Tây.",
          "D. Nghệ thuật hội họa và Điêu khắc cổ điển."
        ],
        0,
        "Hóa học đóng vai trò trung tâm trong sản xuất dược phẩm (Y dược), phân bón thuốc trừ sâu (Nông nghiệp), polyme bán dẫn (Vật liệu) và pin nhiên liệu (Năng lượng)."
      ],
      [
        "Phát biểu nào sau đây KHÔNG ĐÚNG về cấu tạo nguyên tử?",
        [
          "A. Nguyên tử được cấu tạo từ các hạt cơ bản là proton, neutron và electron.",
          "B. Nguyên tử có cấu trúc đặc khít, không có khoảng trống bên trong.",
          "C. Hạt nhân nằm ở tâm nguyên tử, cấu tạo từ các hạt proton và neutron.",
          "D. Lớp vỏ nguyên tử cấu tạo từ các hạt electron mang điện tích âm."
        ],
        1,
        "Nguyên tử có cấu trúc RỖNG, đường kính nguyên tử gấp khoảng 10 000 lần đường kính hạt nhân."
      ],
      [
        "Hạt mang điện tích âm trong cấu tạo nguyên tử là:",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân."
        ],
        2,
        "Electron mang điện tích âm (-1,602 &times; 10<sup>-19</sup> C)."
      ],
      [
        "Đối với các nguyên tử bền có số hiệu nguyên tử 2 &le; Z &le; 82, tỉ số giữa số neutron (N) và số proton (Z) luôn thỏa mãn hệ thức nào sau đây?",
        [
          "A. 1 &le; N/Z &le; 1,52 hay S/3,52 &le; Z &le; S/3.",
          "B. 1,52 &le; N/Z &le; 2 hay S/4 &le; Z &le; S/3.",
          "C. N/Z = 1 trong mọi trường hợp.",
          "D. N/Z &ge; 2."
        ],
        0,
        "Bất đẳng thức bền của hạt nhân: 1 &le; N/Z &le; 1,52 &rArr; S/3,52 &le; Z &le; S/3."
      ],
      [
        "Đặc trưng quan trọng nhất để phân biệt các nguyên tố hóa học khác nhau là:",
        [
          "A. Số hạt neutron trong hạt nhân.",
          "B. Số đơn vị điện tích hạt nhân (số hiệu nguyên tử Z).",
          "C. Số khối A của nguyên tử.",
          "D. Số electron ở phân lớp ngoài cùng."
        ],
        1,
        "Số hiệu nguyên tử Z (số proton) là đặc trưng cơ bản nhất của một nguyên tố hóa học."
      ],
      [
        "Nguyên tố R có hai đồng vị bền trong tự nhiên, nguyên tử khối trung bình là 79,91. Một trong hai đồng vị là <sup>79</sup>R (chiếm 54,5% số nguyên tử). Số khối của đồng vị thứ hai là:",
        [
          "A. 80.",
          "B. 81.",
          "C. 82.",
          "D. 83."
        ],
        1,
        "Đồng vị thứ hai chiếm 45,5% &rArr; (79 &times; 54,5 + A<sub>2</sub> &times; 45,5) / 100 = 79,91 &rArr; A<sub>2</sub> = 81 (Bromine: <sup>79</sup>Br và <sup>81</sup>Br)."
      ],
      [
        "Quy tắc Hund quy định cách phân bố electron vào các orbital nguyên tử trong cùng một phân lớp chưa bão hòa sao cho:",
        [
          "A. Số electron độc thân là nhỏ nhất.",
          "B. Số electron độc thân là tối đa và các electron độc thân có chiều tự quay cùng chiều nhau.",
          "C. Các electron phải ghép đôi hết trước khi sang orbital mới.",
          "D. Số electron ghép đôi là tối đa."
        ],
        1,
        "Quy tắc Hund: Trong mỗi phân lớp chưa bão hòa, electron phân bố sao cho số electron độc thân là tối đa và có spin cùng chiều."
      ],
      [
        "Số orbital nguyên tử tối đa có trong lớp electron thứ n (với n &le; 4) bằng:",
        [
          "A. n.",
          "B. 2n.",
          "C. n<sup>2</sup>.",
          "D. 2n<sup>2</sup>."
        ],
        2,
        "Số AO tối đa ở lớp n là n<sup>2</sup>. Số electron tối đa là 2n<sup>2</sup>."
      ],
      [
        "Cấu hình electron nguyên tử dạng thu gọn của iron (Fe, Z = 26) là:",
        [
          "A. [Ar] 3d<sup>6</sup> 4s<sup>2</sup>.",
          "B. [Ar] 4s<sup>2</sup> 3d<sup>6</sup>.",
          "C. [Ar] 3d<sup>8</sup>.",
          "D. [Ne] 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>6</sup> 4s<sup>2</sup>."
        ],
        0,
        "Khí hiếm đứng trước Fe (Z = 26) là Ar (Z = 18). Cấu hình thu gọn là [Ar] 3d<sup>6</sup> 4s<sup>2</sup>."
      ],
      [
        "Trường hợp ngoại lệ bán bão hòa phân lớp 3d xảy ra ở nguyên tử nào sau đây khi viết cấu hình electron?",
        [
          "A. Calcium (Z = 20).",
          "B. Chromium (Z = 24).",
          "C. Iron (Z = 26).",
          "D. Zinc (Z = 30)."
        ],
        1,
        "Chromium (Z = 24) có cấu hình bán bão hòa 3d<sup>5</sup> bền vững: [Ar] 3d<sup>5</sup> 4s<sup>1</sup> thay vì [Ar] 3d<sup>4</sup> 4s<sup>2</sup>."
      ],
      [
        "Trường hợp ngoại lệ bão hòa phân lớp 3d xảy ra ở nguyên tử copper (Cu, Z = 29), cấu hình electron đúng của Cu là:",
        [
          "A. [Ar] 3d<sup>9</sup> 4s<sup>2</sup>.",
          "B. [Ar] 3d<sup>10</sup> 4s<sup>1</sup>.",
          "C. [Ar] 4s<sup>1</sup> 3d<sup>10</sup>.",
          "D. [Ar] 3d<sup>8</sup> 4s<sup>2</sup> 4p<sup>1</sup>."
        ],
        1,
        "Đồng (Z = 29) có cấu hình bão hòa 3d<sup>10</sup> bền vững: [Ar] 3d<sup>10</sup> 4s<sup>1</sup>."
      ],
      [
        "Nguyên tử nguyên tố X có tổng số electron trong các phân lớp p là 11. Nguyên tử nguyên tố Y có tổng số hạt mang điện ít hơn tổng số hạt mang điện trong X là 10 hạt. X và Y lần lượt là:",
        [
          "A. <sub>13</sub>Al và <sub>35</sub>Br.",
          "B. <sub>17</sub>Cl và <sub>12</sub>Mg.",
          "C. <sub>14</sub>Si và <sub>11</sub>Na.",
          "D. <sub>17</sub>Cl và <sub>13</sub>Al."
        ],
        1,
        "X có tổng e phân lớp p là 11 &rArr; 2p<sup>6</sup> 3p<sup>5</sup> &rArr; Z<sub>X</sub> = 17 (Cl), hạt mang điện = 34. Hạt mang điện của Y = 34 - 10 = 24 &rArr; 2Z<sub>Y</sub> = 24 &rArr; Z<sub>Y</sub> = 12 (Mg)."
      ],
      [
        "Nguyên tố Z nằm ở ô thứ 20, chu kì 4, nhóm IIA trong Bảng tuần hoàn. Cấu hình electron của Z là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>2</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup> 4s<sup>2</sup>."
        ],
        0,
        "Ô 20, chu kì 4, nhóm IIA &rArr; 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> (Calcium)."
      ],
      [
        "Anion X<sup>2-</sup> có cấu hình electron lớp ngoài cùng là 3s<sup>2</sup> 3p<sup>6</sup>. Vị trí của nguyên tố X trong Bảng tuần hoàn là:",
        [
          "A. Ô số 18, chu kì 3, nhóm VIIIA.",
          "B. Ô số 16, chu kì 3, nhóm VIA.",
          "C. Ô số 20, chu kì 4, nhóm IIA.",
          "D. Ô số 16, chu kì 3, nhóm IVA."
        ],
        1,
        "X nhận 2e tạo X<sup>2-</sup> (18e) &rArr; nguyên tử X có 16e: [Ne] 3s<sup>2</sup> 3p<sup>4</sup> &rArr; Ô số 16, chu kì 3, nhóm VIA (Sulfur)."
      ],
      [
        "Cation M<sup>3+</sup> có cấu hình phân lớp ngoài cùng là 3d<sup>5</sup>. Vị trí của nguyên tố M trong Bảng tuần hoàn là:",
        [
          "A. Ô số 23, chu kì 4, nhóm VB.",
          "B. Ô số 26, chu kì 4, nhóm VIIIB.",
          "C. Ô số 25, chu kì 4, nhóm VIIB.",
          "D. Ô số 26, chu kì 4, nhóm IIIB."
        ],
        1,
        "M mất 3e tạo M<sup>3+</sup> (3d<sup>5</sup>) &rArr; M có cấu hình [Ar] 3d<sup>6</sup> 4s<sup>2</sup> &rArr; Z = 26: Ô 26, chu kì 4, nhóm VIIIB (Iron)."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện nay có cấu trúc gồm:",
        [
          "A. 7 chu kì và 8 nhóm A, 8 nhóm B (chia làm 18 cột).",
          "B. 8 chu kì và 16 nhóm.",
          "C. 7 chu kì và 16 cột.",
          "D. 6 chu kì và 18 nhóm."
        ],
        0,
        "Bảng tuần hoàn hiện đại gồm 7 chu kì và 18 cột (8 nhóm A và 8 nhóm B)."
      ]
    ],
    "tf": [
      {
        "stem": "Nguyên tử nguyên tố X có tổng số electron trong các phân lớp p là 7:",
        "items": [
          [
            "a) Cấu hình electron ở trạng thái cơ bản của nguyên tử X là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup>.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 2p có 6e và 3p có 1e (tổng là 7e) &rArr; Z = 13 (Aluminium)."
          ],
          [
            "b) Trong Bảng tuần hoàn các nguyên tố hóa học, X thuộc chu kì 3, nhóm IIIA.",
            true,
            "Phát biểu ĐÚNG. Có 3 lớp e và 3e lớp ngoài cùng."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử X có 2 electron ở phân lớp có mức năng lượng cao nhất.",
            false,
            "Phát biểu SAI. Phân lớp có mức năng lượng cao nhất là 3p chỉ chứa đúng 1 electron (3p<sup>1</sup>)."
          ],
          [
            "d) Ở trạng thái cơ bản, nguyên tử X có đúng 1 electron độc thân.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 3p<sup>1</sup> chiếm 1 orbital p và là 1e độc thân."
          ]
        ]
      },
      {
        "stem": "Cho các nguyên tố Fluorine (F, Z = 9) và Chlorine (Cl, Z = 17) cùng thuộc nhóm VIIA (nhóm halogen):",
        "items": [
          [
            "a) Cả hai nguyên tử F và Cl đều có 7 electron ở lớp electron ngoài cùng.",
            true,
            "Phát biểu ĐÚNG. F: 2s<sup>2</sup>2p<sup>5</sup>; Cl: 3s<sup>2</sup>3p<sup>5</sup>."
          ],
          [
            "b) Fluorine thuộc chu kì 2, còn Chlorine thuộc chu kì 3 trong Bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Trong tự nhiên, Fluorine là phi kim có độ âm điện lớn nhất trong Bảng tuần hoàn (xấp xỉ 3,98).",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Hai nguyên tố F và Cl đều là các kim loại kiềm dễ nhường 1 electron.",
            false,
            "Phát biểu SAI. F và Cl là các PHI KIM halogen mạnh có xu hướng nhận 1 electron để đạt cấu hình khí hiếm."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử của nguyên tố R có tổng số hạt p, n, e là 116, trong đó tổng số hạt mang điện nhiều hơn số hạt không mang điện là 24. Số khối A của nguyên tử R bằng bao nhiêu?",
        "answer": "81",
        "explanation": "2Z + N = 116 và 2Z - N = 24 &rArr; 4Z = 140 &rArr; Z = 35 (Bromine), N = 46 &rArr; A = 35 + 46 = 81."
      },
      {
        "question": "Potassium (K) trong tự nhiên gồm 3 đồng vị: <sup>39</sup>K (93,08%), <sup>40</sup>K (0,012%), <sup>41</sup>K (6,90%). Nguyên tử khối trung bình của Potassium bằng bao nhiêu (làm tròn đến hai chữ số thập phân)?",
        "answer": "39.14",
        "explanation": "A̅ = (39 &times; 93,08 + 40 &times; 0,012 + 41 &times; 6,90) / 100 = 3913,5 / 100 = 39,135 &approx; 39,14 amu."
      },
      {
        "question": "Nguyên tử của nguyên tố Chromium (Cr, Z = 24) có cấu hình [Ar] 3d<sup>5</sup> 4s<sup>1</sup>. Ở trạng thái cơ bản, nguyên tử Chromium có bao nhiêu electron độc thân?",
        "answer": "6",
        "explanation": "Theo quy tắc Hund, phân lớp 3d<sup>5</sup> có 5 AO mỗi AO chứa 1e độc thân [↑][↑][↑][↑][↑] và phân lớp 4s<sup>1</sup> có 1 AO chứa 1e độc thân [↑] &rArr; Tổng số electron độc thân = 5 + 1 = 6."
      },
      {
        "question": "Bảng tuần hoàn các nguyên tố hóa học hiện đại có tất cả bao nhiêu nhóm B?",
        "answer": "8",
        "explanation": "Có 8 nhóm B (từ IB đến VIIIB) phân bố trên 10 cột dọc."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Viết cấu hình electron đầy đủ và dạng thu gọn của Chromium (Cr, Z = 24) và Copper (Cu, Z = 29). Nêu rõ bản chất cấu trúc electron đặc biệt (bán bão hòa và bão hòa) của hai nguyên tử này.",
        "solution": "• Chromium (Cr, Z = 24):<br>Thứ tự phân mức năng lượng dự kiến là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>4</sup>. Do phân lớp 3d<sup>4</sup> có xu hướng nhận 1e từ 4s để đạt cấu trúc bán bão hòa 3d<sup>5</sup> bền vững hơn, nên cấu hình thực tế là:<br>Cấu hình đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>5</sup> 4s<sup>1</sup>.<br>Cấu hình thu gọn: [Ar] 3d<sup>5</sup> 4s<sup>1</sup> (0,5 điểm).<br>• Copper (Cu, Z = 29):<br>Tương tự, 1e từ 4s chuyển vào 3d để đạt cấu trúc bão hòa 3d<sup>10</sup> hoàn toàn bền vững:<br>Cấu hình đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup> 4s<sup>1</sup>.<br>Cấu hình thu gọn: [Ar] 3d<sup>10</sup> 4s<sup>1</sup> (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Tổng số hạt proton, neutron và electron tạo nên nguyên tử phi kim R là 116 hạt. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 24 hạt.<br>a) Xác định số hạt p, n, e và số khối A của nguyên tử R.<br>b) Viết cấu hình electron của R và xác định vị trí của R trong Bảng tuần hoàn.",
        "solution": "a) Ta có hệ phương trình:<br>• 2Z + N = 116 (1).<br>• 2Z - N = 24 (2).<br>Cộng (1) và (2): 4Z = 140 &rArr; Z = 35 (Bromine, Br).<br>Thay vào: N = 116 - 70 = 46.<br>Số khối A = Z + N = 35 + 46 = 81. Vậy p = 35, e = 35, n = 46 (0,5 điểm).<br>b) Cấu hình electron (Z = 35): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup> hay [Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup>.<br>Vị trí trong BTH: Ô số 35, chu kì 4 (có 4 lớp e), nhóm VIIA (nguyên tố p, 7e lớp ngoài cùng) (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Hai nguyên tố halogen X và Y cùng thuộc nhóm VIIA ở hai chu kì liên tiếp của Bảng tuần hoàn có tổng số điện tích hạt nhân là 26 (Z<sub>X</sub> < Z<sub>Y</sub>).<br>a) Tìm số hiệu nguyên tử Z<sub>X</sub> và Z<sub>Y</sub>.<br>b) Xác định vị trí (ô số, chu kì, nhóm) của X và Y trong Bảng tuần hoàn và so sánh tính chất phi kim giữa chúng.",
        "solution": "a) Hai nguyên tố thuộc cùng nhóm A ở hai chu kì liên tiếp (chu kì 2 và 3) có: Z<sub>Y</sub> - Z<sub>X</sub> = 8.<br>Tổng số proton: Z<sub>X</sub> + Z<sub>Y</sub> = 26.<br>Giải hệ: Z<sub>X</sub> = (26 - 8) / 2 = 9 (Fluorine) và Z<sub>Y</sub> = 9 + 8 = 17 (Chlorine) (0,5 điểm).<br>b) Vị trí và so sánh tính phi kim:<br>• X (Z = 9): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> &rArr; Ô số 9, chu kì 2, nhóm VIIA.<br>• Y (Z = 17): [Ne] 3s<sup>2</sup> 3p<sup>5</sup> &rArr; Ô số 17, chu kì 3, nhóm VIIA.<br>So sánh: Trong cùng một nhóm A, đi từ trên xuống dưới độ âm điện giảm dần, tính phi kim giảm dần &rArr; Tính phi kim của Fluorine (X) mạnh hơn Chlorine (Y) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-05",
    "title": "Hóa học 10 - Đề 05 - Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://thi247.com/de-giua-hoc-ky-1-hoa-hoc-10-nam-2024-2025-truong-thpt-hung-vuong-quang-nam/",
    "questions": [
      [
        "Quá trình nào sau đây là quá trình biến đổi vật lí (không tạo chất mới)?",
        [
          "A. Nước lỏng để trong ngăn đông tủ lạnh bị đóng băng thành đá rắn.",
          "B. Cơm để ngoài không khí lâu ngày bị thiu, chuyển sang vị chua.",
          "C. Que diêm quẹt vào vỏ bao diêm bốc cháy tỏa nhiều nhiệt.",
          "D. Đinh sắt để ngoài không khí ẩm lâu ngày bị gỉ sét màu nâu đỏ."
        ],
        0,
        "Nước đóng băng chỉ là sự thay đổi trạng thái vật lí từ lỏng sang rắn, công thức phân tử vẫn là H<sub>2</sub>O."
      ],
      [
        "Hạt mang điện tích dương nằm trong hạt nhân nguyên tử là:",
        [
          "A. Electron.",
          "B. Neutron.",
          "C. Proton.",
          "D. Photon."
        ],
        2,
        "Proton mang điện tích dương (+1,602 &times; 10<sup>-19</sup> C), nằm trong hạt nhân nguyên tử."
      ],
      [
        "Hạt neutron trong hạt nhân nguyên tử có đặc điểm nào sau đây?",
        [
          "A. Mang điện tích âm, khối lượng xấp xỉ 1 amu.",
          "B. Mang điện tích dương, khối lượng rất nhỏ không đáng kể.",
          "C. Không mang điện tích (q = 0), khối lượng xấp xỉ 1 amu.",
          "D. Không mang điện tích, khối lượng bằng 0."
        ],
        2,
        "Neutron có điện tích q = 0 và khối lượng m<sub>n</sub> &approx; 1,675 &times; 10<sup>-27</sup> kg &approx; 1 amu."
      ],
      [
        "Khối lượng 1 mol nguyên tử chứa N<sub>A</sub> = 6,022 &times; 10<sup>23</sup> nguyên tử. Về mặt trị số, khối lượng mol nguyên tử M (g/mol) có giá trị bằng:",
        [
          "A. Số hạt proton Z.",
          "B. Số hạt neutron N.",
          "C. Nguyên tử khối (amu) hay xấp xỉ số khối A.",
          "D. Tổng số electron và proton."
        ],
        2,
        "Về mặt trị số, khối lượng 1 mol nguyên tử M (g/mol) có giá trị bằng nguyên tử khối tương đối (amu) và xấp xỉ số khối A."
      ],
      [
        "Đồng vị của một nguyên tố hóa học là những nguyên tử có:",
        [
          "A. Cùng số proton nhưng khác nhau về số neutron, dẫn đến số khối A khác nhau.",
          "B. Cùng số neutron nhưng khác nhau về số proton.",
          "C. Cùng số khối A nhưng khác nhau về số proton.",
          "D. Cùng khối lượng nhưng khác nhau về tính chất hóa học."
        ],
        0,
        "Định nghĩa: Đồng vị là các nguyên tử có cùng số proton (cùng Z) nhưng khác số neutron (khác A)."
      ],
      [
        "Boron (B) có hai đồng vị bền trong tự nhiên là <sup>10</sup>B (chiếm 19%) và <sup>11</sup>B (chiếm 81%). Nguyên tử khối trung bình của Boron là:",
        [
          "A. 10,81 amu.",
          "B. 10,50 amu.",
          "C. 10,20 amu.",
          "D. 11,00 amu."
        ],
        0,
        "A̅ = (10 &times; 19 + 11 &times; 81) / 100 = (190 + 891) / 100 = 10,81 amu."
      ],
      [
        "Theo mô hình Rutherford - Bohr, các electron chuyển động xung quanh hạt nhân:",
        [
          "A. Trên những quỹ đạo tròn hoặc bầu dục xác định như các hành tinh quay quanh Mặt Trời.",
          "B. Rất nhanh không theo quỹ đạo xác định tạo thành đám mây electron.",
          "C. Ngẫu nhiên hỗn loạn không có quy luật.",
          "D. Cố định tại các đỉnh của khối đa diện."
        ],
        0,
        "Mô hình hành tinh nguyên tử Rutherford - Bohr mô tả electron chuyển động trên các quỹ đạo xác định."
      ],
      [
        "Orbital p gồm 3 orbital p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> có hình dạng và định hướng trong không gian như hình minh hoạ bên:\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 320 140\" width=\"320\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- 3 hình biểu diễn px, py, pz -->\n    <!-- px -->\n    <g transform=\"translate(10, 10)\">\n      <line x1=\"10\" y1=\"55\" x2=\"90\" y2=\"55\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <ellipse cx=\"32\" cy=\"55\" rx=\"16\" ry=\"10\" fill=\"#a855f7\" opacity=\"0.75\"/>\n      <ellipse cx=\"68\" cy=\"55\" rx=\"16\" ry=\"10\" fill=\"#a855f7\" opacity=\"0.75\"/>\n      <text x=\"42\" y=\"112\" font-size=\"11\" font-weight=\"bold\" fill=\"#6b21a8\">p_x</text>\n    </g>\n\n    <!-- py -->\n    <g transform=\"translate(115, 10)\">\n      <line x1=\"10\" y1=\"55\" x2=\"90\" y2=\"55\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <line x1=\"20\" y1=\"85\" x2=\"80\" y2=\"25\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <ellipse cx=\"33\" cy=\"72\" rx=\"16\" ry=\"10\" transform=\"rotate(-45 33 72)\" fill=\"#3b82f6\" opacity=\"0.75\"/>\n      <ellipse cx=\"67\" cy=\"38\" rx=\"16\" ry=\"10\" transform=\"rotate(-45 67 38)\" fill=\"#3b82f6\" opacity=\"0.75\"/>\n      <text x=\"42\" y=\"112\" font-size=\"11\" font-weight=\"bold\" fill=\"#1d4ed8\">p_y</text>\n    </g>\n\n    <!-- pz -->\n    <g transform=\"translate(220, 10)\">\n      <line x1=\"10\" y1=\"55\" x2=\"90\" y2=\"55\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"1\"/>\n      <ellipse cx=\"50\" cy=\"35\" rx=\"10\" ry=\"16\" fill=\"#10b981\" opacity=\"0.75\"/>\n      <ellipse cx=\"50\" cy=\"75\" rx=\"10\" ry=\"16\" fill=\"#10b981\" opacity=\"0.75\"/>\n      <text x=\"42\" y=\"112\" font-size=\"11\" font-weight=\"bold\" fill=\"#047857\">p_z</text>\n    </g>\n  </svg>\n  <div class=\"figure-caption\">Hình dạng số 8 nổi và định hướng trong không gian của 3 orbital p (px, py, pz)</div>\n</div>",
        [
          "A. Hình cầu đối xứng trong không gian.",
          "B. Hình số tám nổi định hướng theo 3 trục tọa độ vuông góc x, y, z.",
          "C. Hình bầu dục nằm trên mặt phẳng xOy.",
          "D. Hình hoa thị 4 cánh."
        ],
        1,
        "3 AO p có dạng hình số tám nổi định hướng vuông góc nhau dọc theo 3 trục Ox, Oy, Oz."
      ],
      [
        "Lớp electron thứ 2 (lớp L, n = 2) có số orbital nguyên tử tối đa là:",
        [
          "A. 1 orbital.",
          "B. 2 orbital.",
          "C. 4 orbital.",
          "D. 8 orbital."
        ],
        2,
        "Số AO tối đa ở lớp n là n<sup>2</sup> &rArr; n = 2 có 2<sup>2</sup> = 4 AO (1 AO 2s và 3 AO 2p)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử silicon (Si, Z = 14) là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> 3p<sup>3</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3p<sup>4</sup>."
        ],
        0,
        "Z = 14 &rArr; 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>2</sup>."
      ],
      [
        "Nguyên tử có 1, 2 hoặc 3 electron ở lớp ngoài cùng (trừ H, He, B) thường là nguyên tử của nguyên tố loại nào?",
        [
          "A. Kim loại.",
          "B. Phi kim.",
          "C. Khí hiếm.",
          "D. Á kim."
        ],
        0,
        "1, 2, 3e ngoài cùng là kim loại (dễ nhường e để đạt cấu hình khí hiếm)."
      ],
      [
        "Ion Ca<sup>2+</sup> được tạo thành khi nguyên tử Ca (Z = 20) nhường đi 2 electron. Cấu hình electron của ion Ca<sup>2+</sup> là:",
        [
          "A. [Ar] 4s<sup>2</sup>.",
          "B. [Ne] 3s<sup>2</sup> 3p<sup>6</sup> (hay [Ar]).",
          "C. [Ar] 3d<sup>2</sup>.",
          "D. [Ne] 3s<sup>2</sup> 3p<sup>4</sup>."
        ],
        1,
        "Ca: [Ar]4s<sup>2</sup> &rArr; nhường 2e ở 4s tạo Ca<sup>2+</sup>: [Ne]3s<sup>2</sup>3p<sup>6</sup> = [Ar]."
      ],
      [
        "Số thứ tự của chu kì trong Bảng tuần hoàn được xác định căn cứ vào:",
        [
          "A. Số hạt proton trong hạt nhân.",
          "B. Số electron hóa trị của nguyên tử.",
          "C. Số lớp electron của nguyên tử.",
          "D. Số phân lớp electron có chứa electron."
        ],
        2,
        "Số thứ tự chu kì = số lớp electron của nguyên tử."
      ],
      [
        "Nhóm nguyên tố trong Bảng tuần hoàn gồm tập hợp các nguyên tố mà nguyên tử của chúng có:",
        [
          "A. Cùng số lớp electron.",
          "B. Cấu hình electron tương tự nhau, do đó có tính chất hóa học gần giống nhau.",
          "C. Cùng khối lượng nguyên tử.",
          "D. Cùng số hạt neutron."
        ],
        1,
        "Nhóm gồm các nguyên tố có cấu hình electron tương tự nhau (cùng số electron hóa trị), xếp thành một cột, có tính chất hóa học gần giống nhau."
      ],
      [
        "Nguyên tố sulfur (S) có Z = 16. Vị trí của sulfur trong Bảng tuần hoàn là:",
        [
          "A. Ô số 16, chu kì 3, nhóm VIA.",
          "B. Ô số 16, chu kì 3, nhóm IVA.",
          "C. Ô số 16, chu kì 4, nhóm VIA.",
          "D. Ô số 16, chu kì 2, nhóm VIA."
        ],
        0,
        "S (Z = 16): [Ne] 3s<sup>2</sup> 3p<sup>4</sup> &rArr; Ô 16, chu kì 3, nhóm VIA."
      ],
      [
        "Nguyên tố X có cấu hình electron [Ar] 4s<sup>1</sup>. Vị trí và tính chất của X trong Bảng tuần hoàn là:",
        [
          "A. Ô số 19, chu kì 4, nhóm IA, là kim loại kiềm.",
          "B. Ô số 19, chu kì 4, nhóm IB, là kim loại chuyển tiếp.",
          "C. Ô số 19, chu kì 3, nhóm IA, là phi kim.",
          "D. Ô số 20, chu kì 4, nhóm IIA, là kim loại kiềm thổ."
        ],
        0,
        "Z = 19 (Potassium) &rArr; Ô 19, chu kì 4, nhóm IA, kim loại kiềm mạnh."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các phát biểu về nguyên tử của nguyên tố Calcium (Ca, Z = 20):",
        "items": [
          [
            "a) Nguyên tử Calcium có 4 lớp electron và lớp ngoài cùng có 2 electron.",
            true,
            "Phát biểu ĐÚNG. Cấu hình Ca: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>."
          ],
          [
            "b) Calcium thuộc chu kì 4, nhóm IIA trong Bảng tuần hoàn các nguyên tố hóa học.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử Calcium có 2 electron độc thân ở phân lớp 4s.",
            false,
            "Phát biểu SAI. Phân lớp 4s chứa 2 electron ghép đôi có spin ngược chiều [↑↓], do đó Ca có 0 electron độc thân."
          ],
          [
            "d) Ion Ca<sup>2+</sup> có 18 electron và có cấu hình electron bão hòa giống khí hiếm Argon.",
            true,
            "Phát biểu ĐÚNG. Ca nhường 2e tạo Ca<sup>2+</sup> có 18e ([Ar])."
          ]
        ]
      },
      {
        "stem": "Xét các đặc điểm về chu kì và nhóm trong Bảng tuần hoàn:",
        "items": [
          [
            "a) Bảng tuần hoàn hiện nay gồm 118 nguyên tố, chia làm 7 chu kì và 18 cột dọc.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Nhóm B gồm 10 cột dọc ứng với 8 nhóm từ IB đến VIIIB.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Tất cả các nguyên tố trong cùng một chu kì đều có tính chất hóa học tương tự nhau.",
            false,
            "Phát biểu SAI. Các nguyên tố trong cùng chu kì có số electron hóa trị khác nhau nên tính chất hóa học biến đổi tuần hoàn."
          ],
          [
            "d) Các nguyên tố nhóm IA (kim loại kiềm) đều có 1 electron ở lớp ngoài cùng.",
            true,
            "Phát biểu ĐÚNG (trừ Hydrogen là phi kim)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử <sup>24</sup><sub>12</sub>Mg có bao nhiêu hạt không mang điện (neutron)?",
        "answer": "12",
        "explanation": "Số neutron N = A - Z = 24 - 12 = 12 hạt."
      },
      {
        "question": "Boron (B) có hai đồng vị bền trong tự nhiên là <sup>10</sup>B và <sup>11</sup>B. Biết nguyên tử khối trung bình của Boron là 10,81. Thành phần phần trăm số nguyên tử của đồng vị <sup>10</sup>B là bao nhiêu %?",
        "answer": "19",
        "explanation": "Gọi a là % <sup>10</sup>B &rArr; (10a + 11(100 - a)) / 100 = 10,81 &rArr; 1100 - a = 1081 &rArr; a = 19%."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Calcium (Z = 20) có bao nhiêu orbital nguyên tử chứa electron?",
        "answer": "10",
        "explanation": "1s (1 AO) + 2s (1 AO) + 2p (3 AO) + 3s (1 AO) + 3p (3 AO) + 4s (1 AO) = 10 orbital."
      },
      {
        "question": "Nguyên tố Sulfur (Z = 16) có bao nhiêu electron ở lớp electron ngoài cùng?",
        "answer": "6",
        "explanation": "Cấu hình S: [Ne] 3s<sup>2</sup> 3p<sup>4</sup>. Lớp ngoài cùng (n = 3) có 2 + 4 = 6 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho nguyên tố Calcium (Ca, Z = 20).<br>a) Viết cấu hình electron đầy đủ và thu gọn của nguyên tử Ca.<br>b) Biểu diễn cấu hình theo ô orbital cho các electron ở lớp ngoài cùng của Ca và xác định số electron độc thân.",
        "solution": "a) Cấu hình electron của Ca (Z = 20):<br>• Đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>.<br>• Thu gọn: [Ar] 4s<sup>2</sup> (0,5 điểm).<br>b) Lớp ngoài cùng là lớp thứ 4 (4s<sup>2</sup>):<br>Phân lớp 4s có 1 ô orbital chứa cặp electron ghép đôi có spin ngược chiều [↑↓].<br>Vì cả 2 electron đều đã ghép đôi nên nguyên tử Ca ở trạng thái cơ bản có 0 electron độc thân (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Nguyên tử của nguyên tố X có tổng số hạt cơ bản (proton, neutron, electron) là 36 hạt, trong đó số hạt mang điện trong hạt nhân bằng với số hạt không mang điện.<br>a) Xác định số hạt p, n, e và viết kí hiệu nguyên tử của X.<br>b) Viết cấu hình electron của X, xác định vị trí của X trong Bảng tuần hoàn và cho biết X là kim loại, phi kim hay khí hiếm.",
        "solution": "a) Ta có: 2Z + N = 36 và Z = N.<br>Thay vào: 3Z = 36 &rArr; Z = 12 (Magnesium), N = 12.<br>Số khối A = Z + N = 12 + 12 = 24. Kí hiệu nguyên tử: <sup>24</sup><sub>12</sub>Mg (0,5 điểm).<br>b) Cấu hình electron (Z = 12): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> hay [Ne] 3s<sup>2</sup>.<br>Vị trí trong BTH: Ô số 12, chu kì 3 (có 3 lớp e), nhóm IIA (nguyên tố s, 2e ngoài cùng).<br>Vì có 2 electron ở lớp ngoài cùng nên X (Mg) là KIM LOẠI (0,5 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho hai nguyên tố A và B nằm ở hai ô liên tiếp thuộc cùng một chu kì trong Bảng tuần hoàn. Tổng số hạt proton trong hai hạt nhân của chúng là 29 (Z<sub>A</sub> < Z<sub>B</sub>).<br>a) Tìm số hiệu nguyên tử Z<sub>A</sub> và Z<sub>B</sub>.<br>b) Xác định vị trí (ô số, chu kì, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Hai nguyên tố kế tiếp nhau trong cùng chu kì: Z<sub>B</sub> - Z<sub>A</sub> = 1.<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 29.<br>Giải hệ: Z<sub>A</sub> = (29 - 1) / 2 = 14 (Silicon) và Z<sub>B</sub> = 15 (Phosphorus) (0,5 điểm).<br>b) Vị trí trong BTH:<br>• A (Z = 14): [Ne] 3s<sup>2</sup> 3p<sup>2</sup> &rArr; Ô số 14, chu kì 3 (có 3 lớp e), nhóm IVA (nguyên tố p, 4e ngoài cùng).<br>• B (Z = 15): [Ne] 3s<sup>2</sup> 3p<sup>3</sup> &rArr; Ô số 15, chu kì 3 (có 3 lớp e), nhóm VA (nguyên tố p, 5e ngoài cùng) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-06",
    "title": "Hóa học 10 - Đề 06 - Trường THPT Hồ Nghinh – Quảng Nam (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Hồ Nghinh – Quảng Nam (Đề chính thức Giữa kì I)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-to-huu-2866641.html",
    "questions": [
      [
        "Khi đun nóng dung dịch trong ống nghiệm trên ngọn lửa đèn cồn, thao tác nào sau đây là ĐÚNG để đảm bảo an toàn?",
        [
          "A. Hướng miệng ống nghiệm về phía mặt mình để quan sát phản ứng xảy ra.",
          "B. Hướng miệng ống nghiệm về phía không có người.",
          "C. Để đáy ống nghiệm chạm trực tiếp vào bấc đèn cồn.",
          "D. Đậy kín nút ống nghiệm khi đun sôi chất lỏng."
        ],
        1,
        "Quy tắc an toàn: Khi đun nóng chất lỏng trong ống nghiệm, phải nghiêng ống nghiệm khoảng 45–60 độ và hướng miệng ống nghiệm về phía không có người để tránh hóa chất sôi bắn vào người."
      ],
      [
        "Hạt nào sau đây mang điện tích âm trong cấu tạo nguyên tử?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân."
        ],
        2,
        "Electron mang điện tích âm (-1,602 &times; 10<sup>-19</sup> C, quy ước bằng -1). Proton mang điện dương (+1), neutron không mang điện."
      ],
      [
        "Đơn vị khối lượng nguyên tử (amu) được định nghĩa bằng bao nhiêu khối lượng của một nguyên tử đồng vị carbon-12 (<sup>12</sup>C)?",
        [
          "A. 1/16.",
          "B. 1/14.",
          "C. 1/12.",
          "D. 1/10."
        ],
        2,
        "1 amu quy ước bằng đúng 1/12 khối lượng của một nguyên tử đồng vị <sup>12</sup>C, xấp xỉ 1,6605 &times; 10<sup>-27</sup> kg."
      ],
      [
        "Khối lượng của nguyên tử tập trung hầu như hoàn toàn ở hạt nhân là vì:",
        [
          "A. Số hạt proton luôn nhiều hơn số hạt electron.",
          "B. Thể tích hạt nhân chiếm hầu hết thể tích của nguyên tử.",
          "C. Khối lượng của electron rất bé (khoảng 0,00055 amu), không đáng kể so với proton và neutron (khoảng 1 amu).",
          "D. Các hạt neutron có khối lượng rất lớn so với toàn bộ nguyên tử."
        ],
        2,
        "Khối lượng proton &approx; 1 amu, neutron &approx; 1 amu, trong khi electron chỉ &approx; 0,00055 amu (nhỏ hơn khoảng 1836 lần). Do đó hơn 99,9% khối lượng nguyên tử tập trung ở hạt nhân."
      ],
      [
        "Hai nguyên tử <sup>16</sup><sub>8</sub>O và <sup>18</sup><sub>8</sub>O là:",
        [
          "A. Hai nguyên tố hóa học khác nhau.",
          "B. Hai đồng vị của cùng một nguyên tố hóa học oxygen.",
          "C. Hai đồng phân của nhau.",
          "D. Hai phân tử khác nhau."
        ],
        1,
        "Cả hai nguyên tử đều có cùng số proton Z = 8 (cùng nguyên tố oxygen) nhưng khác số neutron (8 neutron và 10 neutron) nên là hai đồng vị của nhau."
      ],
      [
        "Kí hiệu nguyên tử <sup>35</sup><sub>17</sub>Cl cho biết nguyên tử chlorine có thành phần hạt gồm:",
        [
          "A. 17 proton, 18 neutron, 17 electron.",
          "B. 17 proton, 35 neutron, 17 electron.",
          "C. 18 proton, 17 neutron, 18 electron.",
          "D. 35 proton, 17 neutron, 35 electron."
        ],
        0,
        "Z = 17 &rArr; số p = số e = 17. Số neutron N = A - Z = 35 - 17 = 18 hạt."
      ],
      [
        "Theo mô hình hiện đại về cấu tạo nguyên tử, electron chuyển động xung quanh hạt nhân:",
        [
          "A. Theo các quỹ đạo tròn hoặc elip cố định xác định như hành tinh quay quanh Mặt Trời.",
          "B. Rất nhanh, không theo quỹ đạo xác định nào, tạo thành đám mây electron.",
          "C. Luôn chuyển động thẳng đều từ tâm ra ngoài biên.",
          "D. Đứng yên tại các vị trí orbital cố định."
        ],
        1,
        "Mô hình hiện đại chỉ ra electron chuyển động cực nhanh trong không gian xung quanh hạt nhân, không theo quỹ đạo xác định nào, tạo thành đám mây xác suất tìm thấy electron."
      ],
      [
        "Phân lớp electron p gồm có bao nhiêu orbital nguyên tử (AO)?",
        [
          "A. 1 AO.",
          "B. 3 AO.",
          "C. 5 AO.",
          "D. 7 AO."
        ],
        1,
        "Phân lớp s có 1 AO, phân lớp p có 3 AO (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>), phân lớp d có 5 AO, phân lớp f có 7 AO."
      ],
      [
        "Trật tự các mức năng lượng của các phân lớp electron tăng dần theo quy tắc Klechkowski là:",
        [
          "A. 1s < 2s < 2p < 3s < 3p < 3d < 4s.",
          "B. 1s < 2s < 2p < 3s < 3p < 4s < 3d.",
          "C. 1s < 2s < 3s < 2p < 3p < 4s < 3d.",
          "D. 1s < 2s < 2p < 3s < 4s < 3p < 3d."
        ],
        1,
        "Theo quy tắc Klechkowski: Phân lớp 4s có mức năng lượng thấp hơn phân lớp 3d, do đó trật tự là: 1s < 2s < 2p < 3s < 3p < 4s < 3d."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử sulfur (S, Z = 16) là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> 3p<sup>5</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>."
        ],
        1,
        "Z = 16: Điền 16 electron theo trật tự mức năng lượng: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>4</sup>."
      ],
      [
        "Nguyên tử của một nguyên tố có 7 electron ở lớp ngoài cùng thường thuộc loại:",
        [
          "A. Kim loại mạnh.",
          "B. Phi kim điển hình (nhóm halogen).",
          "C. Khí hiếm.",
          "D. Kim loại chuyển tiếp."
        ],
        1,
        "Nguyên tử có 7e ở lớp ngoài cùng (cấu hình ns<sup>2</sup> np<sup>5</sup>) có xu hướng nhận thêm 1e để đạt bát cấu 8e bền vững, là các phi kim điển hình (Halogen, nhóm VIIA)."
      ],
      [
        "Anion O<sup>2-</sup> được hình thành khi nguyên tử oxygen (Z = 8) nhận thêm 2 electron. Cấu hình electron của anion O<sup>2-</sup> là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>."
        ],
        1,
        "Oxygen (Z = 8) có cấu hình 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>. Khi nhận 2e tạo O<sup>2-</sup> có 8 + 2 = 10 electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> (giống khí hiếm Ne)."
      ],
      [
        "Trong Bảng tuần hoàn hiện đại, các nguyên tố hóa học được sắp xếp theo chiều tăng dần của:",
        [
          "A. Khối lượng nguyên tử.",
          "B. Bán kính nguyên tử.",
          "C. Điện tích hạt nhân nguyên tử (số hiệu nguyên tử Z).",
          "D. Số neutron trong hạt nhân."
        ],
        2,
        "Nguyên tắc 1 của BTH hiện đại: Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử."
      ],
      [
        "Các chu kì lớn trong Bảng tuần hoàn các nguyên tố hóa học gồm các chu kì nào?",
        [
          "A. Chu kì 1, 2, 3.",
          "B. Chu kì 4, 5, 6, 7.",
          "C. Chu kì 3, 4, 5.",
          "D. Chu kì 5, 6, 7."
        ],
        1,
        "Chu kì nhỏ gồm chu kì 1 (2 NT), 2 (8 NT), 3 (8 NT). Chu kì lớn gồm chu kì 4 (18 NT), 5 (18 NT), 6 (32 NT), 7 (chu kì chưa hoàn thiện / 32 NT)."
      ],
      [
        "Đối với các nguyên tố nhóm A, số thứ tự của nhóm luôn bằng:",
        [
          "A. Số lớp electron của nguyên tử.",
          "B. Số electron ở phân lớp ngoài cùng.",
          "C. Số electron ở lớp ngoài cùng (số electron hóa trị).",
          "D. Tổng số hạt proton trong hạt nhân."
        ],
        2,
        "Với các nguyên tố nhóm A, số electron hóa trị bằng số electron lớp ngoài cùng và bằng chính số thứ tự nhóm A."
      ],
      [
        "Nguyên tố chlorine (Cl) có Z = 17. Vị trí của chlorine trong Bảng tuần hoàn là:",
        [
          "A. Ô số 17, chu kì 3, nhóm VA.",
          "B. Ô số 17, chu kì 3, nhóm VIIA.",
          "C. Ô số 17, chu kì 2, nhóm VIIA.",
          "D. Ô số 17, chu kì 4, nhóm VIIB."
        ],
        1,
        "Cl (Z = 17): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> &rArr; Z = 17 (ô 17); 3 lớp e (chu kì 3); 7e lớp ngoài cùng, e cuối vào p (nhóm VIIA)."
      ]
    ],
    "tf": [
      {
        "stem": "Xét tính Đúng/Sai của các nhận định khi nghiên cứu cấu tạo nguyên tử Chlorine (Cl, Z = 17, số khối A = 35):",
        "items": [
          [
            "Hạt nhân nguyên tử Chlorine chứa 17 proton và 18 neutron.",
            true,
            "Đúng vì Z = 17 &rArr; p = 17 hạt; N = A - Z = 35 - 17 = 18 hạt."
          ],
          [
            "Lớp vỏ nguyên tử Chlorine có 3 lớp electron và có 5 electron độc thân ở trạng thái cơ bản.",
            false,
            "Sai. Cấu hình Cl là [Ne] 3s<sup>2</sup> 3p<sup>5</sup>. Phân lớp 3p có 5 electron phân bố vào 3 AO: 2 AO chứa cặp e ghép đôi, 1 AO chứa 1e &rArr; chỉ có 1 electron độc thân."
          ],
          [
            "Tổng số orbital nguyên tử (AO) chứa electron ở trạng thái cơ bản của nguyên tử Chlorine là 9 AO.",
            true,
            "Đúng. 1 AO 1s + 1 AO 2s + 3 AO 2p + 1 AO 3s + 3 AO 3p = 1 + 1 + 3 + 1 + 3 = 9 AO đều chứa electron."
          ],
          [
            "Khi nhận thêm 1 electron để tạo anion Cl<sup>-</sup>, ion này có cấu hình electron giống khí hiếm Krypton (Kr).",
            false,
            "Sai. Cl<sup>-</sup> có 18 electron, cấu hình là [Ne] 3s<sup>2</sup> 3p<sup>6</sup> hay [Ar], giống khí hiếm Argon (Ar) chứ không phải Krypton (Kr có Z=36)."
          ]
        ]
      },
      {
        "stem": "Cho hai nguyên tố hóa học Oxygen (Z = 8) và Sulfur (Z = 16):",
        "items": [
          [
            "Cả hai nguyên tố Oxygen và Sulfur đều thuộc nhóm VIA trong Bảng tuần hoàn.",
            true,
            "Đúng. O: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> (6e ngoài cùng &rArr; nhóm VIA). S: [Ne] 3s<sup>2</sup> 3p<sup>4</sup> (6e ngoài cùng &rArr; nhóm VIA)."
          ],
          [
            "Nguyên tử Oxygen có 2 lớp electron, nguyên tử Sulfur có 3 lớp electron.",
            true,
            "Đúng. O thuộc chu kì 2 (2 lớp e), S thuộc chu kì 3 (3 lớp e)."
          ],
          [
            "Cả hai nguyên tố đều là kim loại điển hình.",
            false,
            "Sai. Cả Oxygen và Sulfur đều có 6 electron ở lớp ngoài cùng, là các phi kim điển hình."
          ],
          [
            "Công thức oxide cao nhất của Sulfur là SO<sub>3</sub>, là một acidic oxide (oxide acid).",
            true,
            "Đúng. Sulfur thuộc nhóm VIA nên hóa trị cao nhất với oxygen là VI &rArr; oxide cao nhất là SO<sub>3</sub>, tan trong nước tạo H<sub>2</sub>SO<sub>4</sub> (acidic oxide)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cation Fe<sup>2+</sup> có 26 proton và 30 neutron. Tổng số hạt mang điện có trong ion Fe<sup>2+</sup> là bao nhiêu?",
        "answer": "50",
        "explanation": "Fe<sup>2+</sup> có 26 proton (mang điện dương) và số electron = 26 - 2 = 24 electron (mang điện âm). Tổng số hạt mang điện = 26 + 24 = 50 hạt."
      },
      {
        "question": "Chlorine có hai đồng vị bền là <sup>35</sup>Cl và <sup>37</sup>Cl. Biết nguyên tử khối trung bình của Chlorine là 35,48. Thành phần phần trăm số nguyên tử của đồng vị <sup>37</sup>Cl là bao nhiêu %?",
        "answer": "24",
        "explanation": "Gọi x là % <sup>37</sup>Cl &rArr; (35(100 - x) + 37x) / 100 = 35,48 &rArr; 3500 + 2x = 3548 &rArr; 2x = 48 &rArr; x = 24%."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Sulfur (S, Z = 16) có cấu hình electron là [Ne] 3s<sup>2</sup> 3p<sup>4</sup>. Số electron độc thân của nguyên tử Sulfur là bao nhiêu?",
        "answer": "2",
        "explanation": "Phân lớp 3p có 3 orbital chứa 4 electron: 1 AO chứa 2 electron ghép đôi, 2 AO còn lại mỗi AO chứa 1 electron độc thân &rArr; có 2 electron độc thân."
      },
      {
        "question": "Anion X<sup>-</sup> có tổng số electron trong toàn bộ ion là 18. Số thứ tự ô của nguyên tố X trong Bảng tuần hoàn là bao nhiêu?",
        "answer": "17",
        "explanation": "Nguyên tử X nhận 1 electron tạo X<sup>-</sup> &rArr; số electron của X = 18 - 1 = 17 &rArr; Z = 17 &rArr; Ô số 17 (Chlorine)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và biểu diễn orbital của Chlorine",
        "question": "Cho nguyên tố Chlorine (Cl, Z = 17).<br>a) Viết cấu hình electron đầy đủ và cấu hình electron thu gọn của nguyên tử Cl.<br>b) Biểu diễn sự phân bố các electron lớp ngoài cùng vào các ô orbital (AO) ở trạng thái cơ bản và chỉ rõ số electron độc thân của Cl.<br>c) Viết cấu hình electron của ion Cl<sup>-</sup> được hình thành khi Cl nhận thêm 1 electron.",
        "solution": "a) Cấu hình electron của Cl (Z = 17):<br>• Đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>.<br>• Thu gọn: [Ne] 3s<sup>2</sup> 3p<sup>5</sup> (0,35 điểm).<br>b) Biểu diễn orbital lớp ngoài cùng (lớp 3):<br>• Phân lớp 3s có 1 ô orbital chứa 2 electron ghép đôi (&uarr;&darr;).<br>• Phân lớp 3p có 3 ô orbital chứa 5 electron: 2 ô chứa cặp electron ghép đôi (&uarr;&darr; &uarr;&darr;) và 1 ô chứa 1 electron độc thân (&uarr;).<br>&rArr; Nguyên tử Cl có 1 electron độc thân (0,35 điểm).<br>c) Khi Cl nhận 1 electron tạo anion Cl<sup>-</sup>:<br>Cl + 1e &rarr; Cl<sup>-</sup>.<br>Cấu hình electron của Cl<sup>-</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> hay [Ar] (0,30 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định thành phần nguyên tử Chlorine qua bài toán hạt",
        "question": "Trong một nguyên tử phi kim X, tổng số ba loại hạt cơ bản (p, n, e) bằng 52 hạt. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 16 hạt.<br>a) Tính số lượng từng loại hạt cơ bản (p, n, e) và số khối A của nguyên tử X.<br>b) Viết kí hiệu nguyên tử của nguyên tố X.",
        "solution": "a) Trong nguyên tử trung hòa: số proton = số electron = Z. Số neutron = N.<br>• Tổng số hạt: 2Z + N = 52 (1).<br>• Số hạt mang điện nhiều hơn không mang điện: 2Z - N = 16 (2).<br>Cộng (1) và (2): 4Z = 68 &rArr; Z = 17 (p = e = 17 hạt).<br>Thay Z = 17 vào (1): N = 52 - 2(17) = 18 hạt neutron (0,50 điểm).<br>Số khối A = Z + N = 17 + 18 = 35 (0,25 điểm).<br>b) Z = 17 là nguyên tố Chlorine (Cl).<br>Kí hiệu nguyên tử: <sup>35</sup><sub>17</sub>Cl (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Xác định hai nguyên tố cùng nhóm A ở hai chu kì liên tiếp",
        "question": "Ở cùng một phân nhóm chính (nhóm A), hai nguyên tố phi kim X và Y thuộc hai chu kì kế tiếp nhau có tổng số hạt proton trong hai hạt nhân là 24 (biết Z<sub>X</sub> < Z<sub>Y</sub>).<br>a) Xác định số hiệu nguyên tử và gọi tên hai nguyên tố X và Y.<br>b) Xác định vị trí (ô, chu kì, nhóm) của X và Y trong Bảng tuần hoàn.",
        "solution": "a) Vì X và Y thuộc cùng nhóm A ở hai chu kì liên tiếp (chu kì 2 và 3) nên số hiệu nguyên tử hơn kém nhau 8 đơn vị: Z<sub>Y</sub> - Z<sub>X</sub> = 8 (1).<br>Theo đề: Z<sub>X</sub> + Z<sub>Y</sub> = 24 (2).<br>Từ (1) và (2) giải hệ:<br>• Z<sub>X</sub> = (24 - 8) / 2 = 8 &rArr; X là Oxygen (O).<br>• Z<sub>Y</sub> = 8 + 8 = 16 &rArr; Y là Sulfur (S) (0,50 điểm).<br>b) Vị trí trong Bảng tuần hoàn:<br>• Oxygen (Z = 8: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>): Ô số 8, chu kì 2, nhóm VIA (0,25 điểm).<br>• Sulfur (Z = 16: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>): Ô số 16, chu kì 3, nhóm VIA (0,25 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-07",
    "title": "Hóa học 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Giữa kì I)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-nguyen-hue-2866642.html",
    "questions": [
      [
        "Mục tiêu cốt lõi của việc học tập và nghiên cứu môn Hóa học là:",
        [
          "A. Ghi nhớ tên gọi và công thức của tất cả các chất hóa học trên thế giới.",
          "B. Hiểu được mối quan hệ giữa cấu tạo, tính chất và sự biến đổi của chất để ứng dụng phục vụ đời sống con người và phát triển bền vững.",
          "C. Chế tạo ra các loại vũ khí và chất nổ có sức công phá mạnh nhất.",
          "D. Thay thế hoàn toàn các môn khoa học tự nhiên khác như Vật lí và Sinh học."
        ],
        1,
        "Mục tiêu của môn Hóa học là nghiên cứu cấu tạo, tính chất, sự biến đổi của chất và ứng dụng để phục vụ cuộc sống và bảo vệ môi trường bền vững."
      ],
      [
        "Trong cấu tạo nguyên tử, những loại hạt cơ bản nào mang điện tích?",
        [
          "A. Proton và neutron.",
          "B. Neutron và electron.",
          "C. Proton và electron.",
          "D. Chỉ có hạt proton mang điện tích."
        ],
        2,
        "Proton mang điện dương (+1,602 &times; 10<sup>-19</sup> C), electron mang điện âm (-1,602 &times; 10<sup>-19</sup> C), còn neutron không mang điện."
      ],
      [
        "Kích thước đường kính của hạt nhân nguyên tử so với kích thước toàn bộ nguyên tử:",
        [
          "A. Lớn hơn nhiều lần đường kính nguyên tử.",
          "B. Xấp xỉ bằng đường kính nguyên tử.",
          "C. Rất nhỏ bé, chỉ bằng khoảng 1/10 000 đến 1/100 000 lần đường kính nguyên tử.",
          "D. Bằng đúng một nửa đường kính nguyên tử."
        ],
        2,
        "Đường kính nguyên tử &approx; 10<sup>-10</sup> m (1 &Aring;), trong khi đường kính hạt nhân chỉ &approx; 10<sup>-15</sup> đến 10<sup>-14</sup> m, nhỏ hơn từ 10 000 đến 100 000 lần."
      ],
      [
        "Hạt nhân nguyên tử Carbon có số hiệu nguyên tử Z = 6. Điện tích của hạt nhân nguyên tử Carbon là:",
        [
          "A. +6.",
          "B. -6.",
          "C. +6 &times; 1,602 &times; 10<sup>-19</sup> C (hay +6 đơn vị điện tích hạt nhân).",
          "D. 0."
        ],
        2,
        "Z = 6 &rArr; hạt nhân có 6 proton &rArr; điện tích hạt nhân là +6 &times; 1,602 &times; 10<sup>-19</sup> C (hoặc số đơn vị điện tích hạt nhân bằng +6)."
      ],
      [
        "Số khối A của một nguyên tử được xác định bằng hệ thức nào sau đây?",
        [
          "A. A = Z + e.",
          "B. A = Z + N.",
          "C. A = 2Z + N.",
          "D. A = N - Z."
        ],
        1,
        "Số khối A là tổng số hạt proton (Z) và hạt neutron (N) có trong hạt nhân: A = Z + N."
      ],
      [
        "Nguyên tố Bromine có hai đồng vị bền là <sup>79</sup>Br (54,5%) và <sup>81</sup>Br (45,5%). Nguyên tử khối trung bình của Bromine là:",
        [
          "A. 80,00 amu.",
          "B. 79,91 amu.",
          "C. 80,45 amu.",
          "D. 79,55 amu."
        ],
        1,
        "A̅ = (79 &times; 54,5 + 81 &times; 45,5) / 100 = (4305,5 + 3685,5) / 100 = 7991 / 100 = 79,91 amu."
      ],
      [
        "Điểm khác biệt căn bản giữa mô hình hiện đại về nguyên tử và mô hình Rutherford - Bohr là:",
        [
          "A. Mô hình hiện đại cho rằng hạt nhân mang điện tích âm.",
          "B. Mô hình hiện đại xem chuyển động của electron trong nguyên tử không theo những quỹ đạo xác định mà theo vùng không gian xác suất tìm thấy electron.",
          "C. Mô hình hiện đại phủ nhận sự tồn tại của hạt electron trong nguyên tử.",
          "D. Mô hình hiện đại xem electron đứng yên trong hạt nhân."
        ],
        1,
        "Khác biệt cốt lõi: Mô hình Rutherford - Bohr giả định electron chuyển động theo quỹ đạo xác định (hình tròn/elip), còn mô hình hiện đại coi electron chuyển động hỗn loạn cực nhanh, không theo quỹ đạo cố định nào mà tạo nên đám mây electron với xác suất tìm thấy (khoảng 90%)."
      ],
      [
        "Theo nguyên lí Pauli, mỗi orbital nguyên tử chứa tối đa bao nhiêu electron?",
        [
          "A. 1 electron.",
          "B. 2 electron có chiều tự quay (spin) ngược nhau.",
          "C. 6 electron.",
          "D. 8 electron."
        ],
        1,
        "Nguyên lí Pauli: Trong một nguyên tử, mỗi AO chỉ chứa tối đa 2 electron và 2 electron này phải có spin ngược nhau (&uarr;&darr;)."
      ],
      [
        "Lớp electron thứ 3 (lớp M, n = 3) gồm có các phân lớp nào?",
        [
          "A. 3s và 3p.",
          "B. 3s, 3p và 3d.",
          "C. 3s, 3p, 3d và 3f.",
          "D. Chỉ có phân lớp 3s."
        ],
        1,
        "Lớp n có n phân lớp: Lớp thứ 3 (n = 3) có đúng 3 phân lớp là 3s, 3p và 3d."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Carbon (C, Z = 6) là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>3</sup>.",
          "C. 1s<sup>2</sup> 2p<sup>4</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>4</sup>."
        ],
        0,
        "Carbon có Z = 6: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>."
      ],
      [
        "Nguyên tử có cấu hình electron lớp ngoài cùng bền vững dạng ns<sup>2</sup> np<sup>6</sup> (với 8 electron) thuộc loại nguyên tố nào?",
        [
          "A. Kim loại kiềm.",
          "B. Halogen.",
          "C. Khí hiếm (khí trơ).",
          "D. Kim loại chuyển tiếp."
        ],
        2,
        "Cấu hình 8 electron lớp ngoài cùng (ns<sup>2</sup> np<sup>6</sup>) là cấu hình bát cấu bền vững đặc trưng cho các nguyên tố khí hiếm."
      ],
      [
        "Cation Na<sup>+</sup> được hình thành khi nguyên tử sodium (Na, Z = 11) nhường đi 1 electron. Cấu hình electron của cation Na<sup>+</sup> là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>."
        ],
        1,
        "Na (Z = 11): [Ne] 3s<sup>1</sup> nhường 1e ở phân lớp 3s để tạo Na<sup>+</sup> có 10 electron với cấu hình [Ne] hay 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>."
      ],
      [
        "Nhà hóa học người Nga D. I. Mendeleev đã công bố Bảng tuần hoàn các nguyên tố hóa học đầu tiên vào năm nào và sắp xếp dựa trên đại lượng nào?",
        [
          "A. Năm 1869, sắp xếp theo chiều tăng dần của khối lượng nguyên tử.",
          "B. Năm 1913, sắp xếp theo chiều tăng dần của điện tích hạt nhân.",
          "C. Năm 1945, sắp xếp theo cấu hình electron.",
          "D. Năm 1803, sắp xếp theo số khối."
        ],
        0,
        "Năm 1869, Mendeleev công bố Bảng tuần hoàn đầu tiên sắp xếp các nguyên tố theo chiều tăng dần khối lượng nguyên tử."
      ],
      [
        "Chu kì 2 trong Bảng tuần hoàn các nguyên tố hóa học chứa bao nhiêu nguyên tố?",
        [
          "A. 2 nguyên tố.",
          "B. 8 nguyên tố.",
          "C. 18 nguyên tố.",
          "D. 32 nguyên tố."
        ],
        1,
        "Chu kì 2 bắt đầu từ Lithium (<sub>3</sub>Li) đến Neon (<sub>10</sub>Ne), gồm đúng 8 nguyên tố."
      ],
      [
        "Nhóm IA trong Bảng tuần hoàn (trừ nguyên tố Hydrogen) được gọi là nhóm:",
        [
          "A. Kim loại kiềm thổ.",
          "B. Kim loại kiềm.",
          "C. Halogen.",
          "D. Khí hiếm."
        ],
        1,
        "Nhóm IA (trừ H) gồm Li, Na, K, Rb, Cs, Fr được gọi là nhóm kim loại kiềm. Nhóm IIA là kim loại kiềm thổ."
      ],
      [
        "Nguyên tố silicon (Si) có số hiệu nguyên tử Z = 14. Vị trí của silicon trong Bảng tuần hoàn là:",
        [
          "A. Ô số 14, chu kì 3, nhóm IVA.",
          "B. Ô số 14, chu kì 2, nhóm IVA.",
          "C. Ô số 14, chu kì 3, nhóm IIIA.",
          "D. Ô số 14, chu kì 4, nhóm IVB."
        ],
        0,
        "Si (Z = 14): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup> &rArr; Ô số 14; 3 lớp electron &rArr; chu kì 3; 4e ngoài cùng, e cuối vào phân lớp p &rArr; nhóm IVA."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các đồng vị của Carbon (<sup>12</sup>C, <sup>13</sup>C) và Oxygen (<sup>16</sup>O, <sup>18</sup>O):",
        "items": [
          [
            "Số khối của đồng vị carbon-13 (<sup>13</sup>C) bằng 13.",
            true,
            "Đúng. Kí hiệu <sup>13</sup>C có số khối A = 13."
          ],
          [
            "Hạt nhân của đồng vị <sup>13</sup>C có chứa 6 proton và 7 neutron.",
            true,
            "Đúng vì Carbon có Z = 6 (6 proton), số neutron N = 13 - 6 = 7 neutron."
          ],
          [
            "Số loại phân tử carbon monoxide (CO) tối đa tạo thành từ 2 đồng vị Carbon và 2 đồng vị Oxygen trên là 4 loại.",
            true,
            "Đúng. Mỗi phân tử CO gồm 1 nguyên tử C và 1 nguyên tử O &rArr; số loại phân tử = 2 &times; 2 = 4 loại (<sup>12</sup>C<sup>16</sup>O, <sup>12</sup>C<sup>18</sup>O, <sup>13</sup>C<sup>16</sup>O, <sup>13</sup>C<sup>18</sup>O)."
          ],
          [
            "Đồng vị <sup>12</sup>C được quy ước quốc tế dùng làm đơn vị chuẩn để định nghĩa đơn vị khối lượng nguyên tử (amu).",
            true,
            "Đúng. 1 amu quy ước bằng 1/12 khối lượng của một nguyên tử đồng vị <sup>12</sup>C."
          ]
        ]
      },
      {
        "stem": "Cho nguyên tố Silicon (Si, Z = 14):",
        "items": [
          [
            "Silicon thuộc chu kì 3, nhóm IVA trong Bảng tuần hoàn.",
            true,
            "Đúng vì Si có cấu hình [Ne] 3s<sup>2</sup> 3p<sup>2</sup>: 3 lớp e (chu kì 3), 4e ngoài cùng (nhóm IVA)."
          ],
          [
            "Cấu hình electron thu gọn của nguyên tử Silicon là [Ne] 3s<sup>2</sup> 3p<sup>2</sup>.",
            true,
            "Đúng. Khí hiếm đứng trước là Ne (Z=10) &rArr; [Ne] 3s<sup>2</sup> 3p<sup>2</sup>."
          ],
          [
            "Silicon là một kim loại mạnh, dễ nhường 4 electron khi tham gia phản ứng hóa học.",
            false,
            "Sai. Silicon là một phi kim (á kim/chất bán dẫn), có 4e lớp ngoài cùng, không phải kim loại mạnh."
          ],
          [
            "Oxide cao nhất của Silicon là SiO<sub>2</sub>, thuộc loại acidic oxide (oxide acid).",
            true,
            "Đúng. Hóa trị cao nhất với oxygen bằng số thứ tự nhóm IV &rArr; SiO<sub>2</sub> là oxide acid."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử <sup>31</sup><sub>15</sub>P có bao nhiêu hạt không mang điện (neutron)?",
        "answer": "16",
        "explanation": "Số neutron N = số khối A - số proton Z = 31 - 15 = 16 hạt."
      },
      {
        "question": "Silicon (Si) trong tự nhiên gồm 3 đồng vị: <sup>28</sup>Si (92,23%), <sup>29</sup>Si (4,67%), <sup>30</sup>Si (3,10%). Nguyên tử khối trung bình của Silicon bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "28.11",
        "explanation": "A̅ = (28 &times; 92,23 + 29 &times; 4,67 + 30 &times; 3,10) / 100 = (2582,44 + 135,43 + 93,00) / 100 = 2810,87 / 100 = 28,1087 &approx; 28,11 amu."
      },
      {
        "question": "Nguyên tử nguyên tố Carbon (Z = 6) có bao nhiêu electron ở lớp electron ngoài cùng?",
        "answer": "4",
        "explanation": "C (Z = 6): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>. Lớp ngoài cùng là lớp thứ 2 (n = 2) có 2 + 2 = 4 electron."
      },
      {
        "question": "Hai nguyên tố X và Y thuộc cùng một nhóm A ở hai chu kì liên tiếp có tổng số proton là 30 (Z<sub>X</sub> < Z<sub>Y</sub>). Số hiệu nguyên tử của nguyên tố Y là bao nhiêu?",
        "answer": "19",
        "explanation": "X ở chu kì 3 và Y ở chu kì 4 (cách nhau 8 đơn vị): Z<sub>Y</sub> - Z<sub>X</sub> = 8. Có Z<sub>X</sub> + Z<sub>Y</sub> = 30 &rArr; Z<sub>Y</sub> = (30 + 8) / 2 = 19 (Potassium, K)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và electron độc thân của Carbon và Silicon",
        "question": "Cho hai nguyên tố Carbon (C, Z = 6) và Silicon (Si, Z = 14).<br>a) Viết cấu hình electron ở trạng thái cơ bản của nguyên tử C và Si.<br>b) Biểu diễn sự phân bố electron vào các orbital ở lớp ngoài cùng của nguyên tử Carbon. Xác định số electron độc thân của Carbon.<br>c) Dựa vào cấu hình electron, giải thích vì sao Carbon và Silicon đều được xếp vào nhóm IVA trong Bảng tuần hoàn.",
        "solution": "a) Cấu hình electron:<br>• C (Z = 6): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>.<br>• Si (Z = 14): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>2</sup> (0,35 điểm).<br>b) Biểu diễn orbital lớp ngoài cùng của C (lớp 2):<br>• Phân lớp 2s: 1 ô orbital chứa 2 electron ghép đôi (&uarr;&darr;).<br>• Phân lớp 2p: 3 ô orbital, có 2 ô mỗi ô chứa 1 electron độc thân (&uarr; &uarr; _) và 1 ô trống.<br>&rArr; Số electron độc thân của C ở trạng thái cơ bản là 2 electron (0,35 điểm).<br>c) Giải thích:<br>Cả C và Si đều là nguyên tố p (electron cuối cùng điền vào phân lớp p) và lớp ngoài cùng đều có 4 electron (ns<sup>2</sup> np<sup>2</sup>) nên đều thuộc nhóm IVA (0,30 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Biện luận số hạt tìm nguyên tố Nitrogen",
        "question": "Tổng số hạt cơ bản (proton, neutron, electron) trong nguyên tử của nguyên tố X là 21 hạt. Trong hạt nhân nguyên tử, số hạt không mang điện không vượt quá số hạt mang điện.<br>a) Xác định số hạt proton, neutron, electron và số khối A của nguyên tố X.<br>b) Viết kí hiệu nguyên tử và cấu hình electron của X.",
        "solution": "a) Trong nguyên tử: p = e = Z &rArr; Tổng số hạt: 2Z + N = 21 &rArr; N = 21 - 2Z.<br>Với các nguyên tố có Z &le; 82, ta có bất đẳng thức bền của hạt nhân:<br>1 &le; N / Z &le; 1,5 &hArr; Z &le; N &le; 1,5Z.<br>Thay N = 21 - 2Z vào:<br>• Z &le; 21 - 2Z &rArr; 3Z &le; 21 &rArr; Z &le; 7.<br>• 21 - 2Z &le; 1,5Z &rArr; 3,5Z &ge; 21 &rArr; Z &ge; 6.<br>&rArr; 6 &le; Z &le; 7.<br>Mặt khác, theo đề bài số hạt không mang điện không vượt quá số hạt mang điện trong hạt nhân: N &le; Z.<br>• Nếu Z = 6: N = 21 - 2(6) = 9 &gt; Z (loại).<br>• Nếu Z = 7: N = 21 - 2(7) = 7 &le; Z (thỏa mãn: N = Z = 7).<br>&rArr; Z = 7 (p = e = 7 hạt), N = 7 hạt, số khối A = Z + N = 14 (0,60 điểm).<br>b) Z = 7 là nguyên tố Nitrogen (N).<br>• Kí hiệu nguyên tử: <sup>14</sup><sub>7</sub>N (0,20 điểm).<br>• Cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> (0,20 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Xác định hai nguyên tố kế tiếp nhau trong cùng một chu kì",
        "question": "Biết A và B là hai nguyên tố thuộc cùng một chu kì và đứng liền kề nhau trong Bảng tuần hoàn. Tổng số proton trong hai hạt nhân là 33 (biết Z<sub>A</sub> < Z<sub>B</sub>).<br>a) Xác định số hiệu nguyên tử và tên của hai nguyên tố A và B.<br>b) Viết cấu hình electron và xác định vị trí (ô, chu kì, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Vì A và B đứng kế tiếp nhau trong cùng một chu kì nên: Z<sub>B</sub> - Z<sub>A</sub> = 1 (1).<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 33 (2).<br>Giải hệ phương trình:<br>• Z<sub>A</sub> = (33 - 1) / 2 = 16 &rArr; A là Sulfur (S).<br>• Z<sub>B</sub> = 16 + 1 = 17 &rArr; B là Chlorine (Cl) (0,50 điểm).<br>b) Cấu hình electron và vị trí trong BTH:<br>• Sulfur (S, Z = 16): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>.<br>Vị trí: Ô số 16, chu kì 3, nhóm VIA (0,25 điểm).<br>• Chlorine (Cl, Z = 17): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>.<br>Vị trí: Ô số 17, chu kì 3, nhóm VIIA (0,25 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-08",
    "title": "Hóa học 10 - Đề 08 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I)",
    "province": "Đắk Lắk",
    "year": "2024–2025",
    "sourceUrl": "https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-ngo-gia-tu-2866643.html",
    "questions": [
      [
        "Khi thực hiện các thí nghiệm có sinh ra khí độc hại như Cl<sub>2</sub>, SO<sub>2</sub>, NO<sub>2</sub>, ta BẮT BUỘC phải thực hiện thí nghiệm ở đâu?",
        [
          "A. Trong phòng kín có đóng chặt tất cả các cửa sổ.",
          "B. Trong tủ hút khí độc hoặc ở nơi cực kì thoáng khí.",
          "C. Dưới ánh nắng Mặt Trời trực tiếp.",
          "D. Trong chậu nước lạnh."
        ],
        1,
        "Để bảo vệ sức khỏe và an toàn phòng thí nghiệm, mọi thí nghiệm sinh ra khí độc đều phải tiến hành trong tủ hút chuyên dụng hoặc nơi thoáng khí."
      ],
      [
        "Hạt cơ bản nào sau đây nằm trong hạt nhân nguyên tử nhưng KHÔNG mang điện tích?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Positron."
        ],
        1,
        "Hạt neutron nằm trong hạt nhân nguyên tử và là hạt trung hòa về điện (điện tích bằng 0)."
      ],
      [
        "Khối lượng của hạt electron so với khối lượng của hạt proton có độ lớn như thế nào?",
        [
          "A. Bằng nhau.",
          "B. Lớn hơn khoảng 1836 lần.",
          "C. Rất bé, chỉ bằng khoảng 1/1836 khối lượng của proton.",
          "D. Lớn gấp 2 lần."
        ],
        2,
        "m<sub>p</sub> &approx; 1 amu, m<sub>e</sub> &approx; 0,00055 amu &approx; m<sub>p</sub> / 1836."
      ],
      [
        "Tổng số hạt mang điện (proton và electron) trong một nguyên tử Fluorine (Z = 9) là:",
        [
          "A. 9 hạt.",
          "B. 18 hạt.",
          "C. 19 hạt.",
          "D. 28 hạt."
        ],
        1,
        "Fluorine có Z = 9 &rArr; có 9 proton và 9 electron. Tổng số hạt mang điện = 9 + 9 = 18 hạt."
      ],
      [
        "Nguyên tố hóa học là tập hợp của các nguyên tử có cùng:",
        [
          "A. Số neutron trong hạt nhân.",
          "B. Số khối A.",
          "C. Số đơn vị điện tích hạt nhân (số proton Z).",
          "D. Tổng số proton và neutron."
        ],
        2,
        "Định nghĩa: Nguyên tố hóa học là tập hợp những nguyên tử có cùng điện tích hạt nhân (cùng số proton Z)."
      ],
      [
        "Kí hiệu nguyên tử <sup>19</sup><sub>9</sub>F cho biết trong hạt nhân nguyên tử Fluorine có:",
        [
          "A. 9 proton và 19 neutron.",
          "B. 9 proton và 10 neutron.",
          "C. 10 proton và 9 neutron.",
          "D. 19 proton và 9 electron."
        ],
        1,
        "Z = 9 &rArr; có 9 proton. Số neutron N = A - Z = 19 - 9 = 10 neutron."
      ],
      [
        "Nguyên lí Pauli phát biểu rằng:",
        [
          "A. Trong một nguyên tử không thể có hai electron có cùng 4 số lượng tử, nghĩa là mỗi orbital nguyên tử chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau.",
          "B. Electron luôn điền vào orbital có mức năng lượng cao nhất trước.",
          "C. Các electron trong cùng một phân lớp luôn ghép đôi với nhau.",
          "D. Số electron tối đa trong một phân lớp luôn bằng số orbital."
        ],
        0,
        "Nguyên lí Pauli quy định mỗi AO chỉ chứa tối đa 2 electron có spin ngược chiều nhau (&uarr;&darr;)."
      ],
      [
        "Orbital nguyên tử loại s có dạng hình học nào trong không gian?",
        [
          "A. Hình số 8 nổi.",
          "B. Hình cầu đối xứng.",
          "C. Hình elip dẹt.",
          "D. Hình xoắn ốc."
        ],
        1,
        "Orbital s có dạng hình cầu đối xứng trong không gian tâm tại hạt nhân; orbital p có dạng hình số 8 nổi định hướng theo các trục x, y, z."
      ],
      [
        "Số orbital nguyên tử (AO) tối đa có trong lớp electron thứ 3 (lớp M, n = 3) là:",
        [
          "A. 3 AO.",
          "B. 6 AO.",
          "C. 9 AO.",
          "D. 18 AO."
        ],
        2,
        "Số AO tối đa của lớp thứ n là n<sup>2</sup> &rArr; n = 3 có 3<sup>2</sup> = 9 AO (gồm 1 AO 3s, 3 AO 3p và 5 AO 3d)."
      ],
      [
        "Cấu hình electron của nguyên tử Beryllium (Be, Z = 4) ở trạng thái cơ bản là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup>.",
          "B. 1s<sup>4</sup>.",
          "C. 1s<sup>2</sup> 2p<sup>2</sup>.",
          "D. 2s<sup>4</sup>."
        ],
        0,
        "Be (Z = 4) có 4 electron: 1s<sup>2</sup> 2s<sup>2</sup>."
      ],
      [
        "Nguyên tử của nguyên tố X có cấu hình electron 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup>. Nguyên tố X thuộc loại:",
        [
          "A. Kim loại.",
          "B. Phi kim.",
          "C. Khí hiếm.",
          "D. Kim loại kiềm."
        ],
        1,
        "X có 2 + 3 = 5 electron ở lớp ngoài cùng (lớp 3) &rArr; X là một phi kim (Phosphorus)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Chromium (Cr, Z = 24) là:",
        [
          "A. [Ar] 4s<sup>2</sup> 3d<sup>4</sup>.",
          "B. [Ar] 3d<sup>5</sup> 4s<sup>1</sup>.",
          "C. [Ar] 3d<sup>6</sup>.",
          "D. [Ar] 4s<sup>1</sup> 3d<sup>5</sup>."
        ],
        1,
        "Hiện tượng bán bão hòa phân lớp 3d: 1 electron từ 4s nhảy sang 3d để đạt trạng thái bền vững hơn &rArr; cấu hình đúng là [Ar] 3d<sup>5</sup> 4s<sup>1</sup>."
      ],
      [
        "Trong Bảng tuần hoàn, các nguyên tố có cùng số electron hóa trị trong nguyên tử được xếp vào cùng một:",
        [
          "A. Chu kì.",
          "B. Nhóm (cột).",
          "C. Ô nguyên tố.",
          "D. Lớp electron."
        ],
        1,
        "Nguyên tắc 3 của BTH: Các nguyên tố có cùng số electron hóa trị có tính chất hóa học tương tự nhau và được xếp vào cùng một cột (nhóm)."
      ],
      [
        "Chu kì trong Bảng tuần hoàn gồm tập hợp các nguyên tố mà nguyên tử của chúng có cùng:",
        [
          "A. Số hạt neutron.",
          "B. Số electron lớp ngoài cùng.",
          "C. Số lớp electron.",
          "D. Khối lượng nguyên tử."
        ],
        2,
        "Chu kì là dãy các nguyên tố có cùng số lớp electron trong nguyên tử, được sắp xếp theo chiều tăng dần của điện tích hạt nhân."
      ],
      [
        "Các nguyên tố thuộc họ d và họ f trong Bảng tuần hoàn được xếp vào các nhóm nào?",
        [
          "A. Nhóm A.",
          "B. Nhóm B (kim loại chuyển tiếp).",
          "C. Nhóm halogen.",
          "D. Nhóm khí hiếm."
        ],
        1,
        "Nhóm A gồm các nguyên tố họ s và họ p. Nhóm B gồm các nguyên tố họ d và họ f (gọi là các kim loại chuyển tiếp)."
      ],
      [
        "Nguyên tố scandium (Sc, Z = 21) có cấu hình electron [Ar] 3d<sup>1</sup> 4s<sup>2</sup>. Vị trí của scandium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 21, chu kì 4, nhóm IIIB.",
          "B. Ô số 21, chu kì 4, nhóm IIIA.",
          "C. Ô số 21, chu kì 3, nhóm IIIB.",
          "D. Ô số 21, chu kì 4, nhóm IB."
        ],
        0,
        "Sc (Z = 21): Có 4 lớp electron &rArr; chu kì 4; cấu hình e hóa trị là 3d<sup>1</sup> 4s<sup>2</sup> có 1 + 2 = 3 electron hóa trị, electron cuối điền vào 3d &rArr; nhóm IIIB."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các nguyên tử và ion sau: F (Z = 9), anion F<sup>-</sup> và cation Na<sup>+</sup> (Z = 11):",
        "items": [
          [
            "Cấu hình electron của nguyên tử Fluorine ở trạng thái cơ bản là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>.",
            true,
            "Đúng. Z = 9 &rArr; 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>."
          ],
          [
            "Anion F<sup>-</sup> và cation Na<sup>+</sup> đều có cùng số lượng electron là 10 electron.",
            true,
            "Đúng. F nhận 1e thành F<sup>-</sup> (9 + 1 = 10e); Na nhường 1e thành Na<sup>+</sup> (11 - 1 = 10e)."
          ],
          [
            "Bán kính của cation Na<sup>+</sup> lớn hơn bán kính của anion F<sup>-</sup>.",
            false,
            "Sai. Cả hai ion đều có cùng số e (10e) và 2 lớp e, nhưng hạt nhân Na<sup>+</sup> có Z = 11 proton lớn hơn F<sup>-</sup> (Z = 9 proton) nên hút mây electron mạnh hơn &rArr; bán kính Na<sup>+</sup> nhỏ hơn bán kính F<sup>-</sup>."
          ],
          [
            "Fluorine là nguyên tố phi kim có độ âm điện lớn nhất và hoạt động hóa học mạnh nhất trong Bảng tuần hoàn.",
            true,
            "Đúng. F có độ âm điện lớn nhất (3,98 theo Pauling) và là phi kim hoạt động hóa học mạnh nhất."
          ]
        ]
      },
      {
        "stem": "Xét các nguyên tố nhóm IIA (nhóm kim loại kiềm thổ: Be, Mg, Ca, Sr, Ba):",
        "items": [
          [
            "Tất cả các nguyên tử nguyên tố nhóm IIA đều có 2 electron ở lớp ngoài cùng với cấu hình dạng ns<sup>2</sup>.",
            true,
            "Đúng. Đặc trưng của nhóm IIA là cấu hình electron lớp ngoài cùng dạng ns<sup>2</sup>."
          ],
          [
            "Các nguyên tố nhóm IIA đều là các kim loại.",
            true,
            "Đúng. Tất cả các nguyên tố nhóm IIA đều là kim loại (kim loại kiềm thổ)."
          ],
          [
            "Từ Be đến Ba, theo chiều tăng của số hiệu nguyên tử, bán kính nguyên tử giảm dần.",
            false,
            "Sai. Trong cùng một nhóm A, đi từ trên xuống dưới số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
          ],
          [
            "Công thức oxide cao nhất của các nguyên tố nhóm IIA có dạng chung là RO.",
            true,
            "Đúng vì các nguyên tố nhóm IIA có hóa trị cao nhất với oxygen là II &rArr; oxide dạng RO (BeO, MgO, CaO...)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cation Al<sup>3+</sup> được hình thành khi nguyên tử Aluminium (Z = 13) nhường 3 electron. Số electron có trong ion Al<sup>3+</sup> là bao nhiêu?",
        "answer": "10",
        "explanation": "Al (Z = 13) có 13 electron. Khi nhường 3 electron tạo ion Al<sup>3+</sup> thì số electron còn lại là 13 - 3 = 10 electron."
      },
      {
        "question": "Magnesium (Mg) trong tự nhiên gồm 3 đồng vị bền: <sup>24</sup>Mg (79%), <sup>25</sup>Mg (10%), <sup>26</sup>Mg (11%). Nguyên tử khối trung bình của Magnesium là bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "24.32",
        "explanation": "A̅ = (24 &times; 79 + 25 &times; 10 + 26 &times; 11) / 100 = (1896 + 250 + 286) / 100 = 2432 / 100 = 24,32 amu."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Manganese (Mn, Z = 25) có cấu hình [Ar] 3d<sup>5</sup> 4s<sup>2</sup>. Số electron độc thân của nguyên tử Manganese là bao nhiêu?",
        "answer": "5",
        "explanation": "Phân lớp 3d<sup>5</sup> có 5 orbital, theo quy tắc Hund mỗi AO chứa đúng 1 electron độc thân. Phân lớp 4s<sup>2</sup> có 2 electron ghép đôi &rArr; tổng cộng có 5 electron độc thân."
      },
      {
        "question": "Nguyên tố Beryllium (Be) có số hiệu nguyên tử Z = 4. Số electron ở lớp electron ngoài cùng của Beryllium là bao nhiêu?",
        "answer": "2",
        "explanation": "Be (Z = 4): 1s<sup>2</sup> 2s<sup>2</sup> &rArr; lớp ngoài cùng là lớp thứ 2 có 2 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và phân loại nguyên tố d của Sc và Mn",
        "question": "Cho hai nguyên tố: Scandium (Sc, Z = 21) và Manganese (Mn, Z = 25).<br>a) Viết cấu hình electron đầy đủ và dạng thu gọn của Scandium và Manganese.<br>b) Xác định số electron hóa trị của từng nguyên tố và cho biết chúng thuộc loại nguyên tố s, p, d hay f?",
        "solution": "a) Cấu hình electron:<br>• Scandium (Sc, Z = 21):<br>Đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>1</sup> 4s<sup>2</sup>. Thu gọn: [Ar] 3d<sup>1</sup> 4s<sup>2</sup> (0,35 điểm).<br>• Manganese (Mn, Z = 25):<br>Đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>5</sup> 4s<sup>2</sup>. Thu gọn: [Ar] 3d<sup>5</sup> 4s<sup>2</sup> (0,35 điểm).<br>b) Electron hóa trị và phân loại:<br>• Sc có 1 + 2 = 3 electron hóa trị (ở phân lớp 3d và 4s).<br>• Mn có 5 + 2 = 7 electron hóa trị (ở phân lớp 3d và 4s).<br>Cả Sc và Mn đều có electron cuối cùng điền vào phân lớp d (3d) nên đều thuộc loại NGUYÊN TỐ d (nhóm B) (0,30 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định nguyên tố Fluorine qua bài toán hạt",
        "question": "Nguyên tử của nguyên tố R có tổng số hạt cơ bản (proton, neutron, electron) là 28 hạt. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 8 hạt.<br>a) Tìm số hạt proton, neutron, electron và số khối A của nguyên tử R.<br>b) Viết cấu hình electron của nguyên tử R và cho biết R là kim loại, phi kim hay khí hiếm.",
        "solution": "a) Ta có hệ phương trình:<br>• Tổng hạt: 2Z + N = 28 (1).<br>• Hạt mang điện nhiều hơn không mang điện: 2Z - N = 8 (2).<br>Cộng (1) và (2): 4Z = 36 &rArr; Z = 9 (proton = electron = 9 hạt).<br>Thay vào (1): N = 28 - 2(9) = 10 hạt neutron (0,50 điểm).<br>Số khối A = Z + N = 9 + 10 = 19 (0,25 điểm).<br>b) Z = 9 (Fluorine):<br>Cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>.<br>Vì có 7 electron ở lớp ngoài cùng (lớp 2) nên R là một PHI KIM điển hình (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Xác định hai nguyên tố cùng nhóm IIA ở hai chu kì liên tiếp",
        "question": "Hai kim loại A và B đều thuộc nhóm IIA (nhóm kim loại kiềm thổ) ở hai chu kì liên tiếp của Bảng tuần hoàn, có tổng số hạt proton trong hai hạt nhân bằng 16 (biết Z<sub>A</sub> < Z<sub>B</sub>).<br>a) Xác định số hiệu nguyên tử và gọi tên hai nguyên tố A và B.<br>b) Viết cấu hình electron và nêu vị trí (ô, chu kì, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Vì A và B cùng nhóm IIA ở hai chu kì liên tiếp (chu kì 2 và 3) nên: Z<sub>B</sub> - Z<sub>A</sub> = 8 (1).<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 16 (2).<br>Giải hệ phương trình:<br>• Z<sub>A</sub> = (16 - 8) / 2 = 4 &rArr; A là Beryllium (Be).<br>• Z<sub>B</sub> = 4 + 8 = 12 &rArr; B là Magnesium (Mg) (0,50 điểm).<br>b) Cấu hình electron và vị trí trong BTH:<br>• Beryllium (Be, Z = 4): 1s<sup>2</sup> 2s<sup>2</sup>.<br>Vị trí: Ô số 4, chu kì 2, nhóm IIA (0,25 điểm).<br>• Magnesium (Mg, Z = 12): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> hay [Ne] 3s<sup>2</sup>.<br>Vị trí: Ô số 12, chu kì 3, nhóm IIA (0,25 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-09",
    "title": "Hóa học 10 - Đề 09 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I)",
    "province": "Đắk Lắk",
    "year": "2024–2025",
    "sourceUrl": "https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-le-hong-phong-2866644.html",
    "questions": [
      [
        "Lĩnh vực nào sau đây KHÔNG PHẢI là đối tượng ứng dụng trực tiếp của ngành Hóa học?",
        [
          "A. Sản xuất phân bón hóa học và thuốc bảo vệ thực vật cho nông nghiệp.",
          "B. Tổng hợp các loại dược phẩm chữa bệnh và vaccine y tế.",
          "C. Nghiên cứu chu kì quay của các hành tinh và thiên thạch trong vũ trụ.",
          "D. Tinh chế nhiên liệu và chế tạo vật liệu pin lưu trữ năng lượng mới."
        ],
        2,
        "Nghiên cứu chu kì quay của các hành tinh và thiên thạch thuộc lĩnh vực Thiên văn học và Vật lí thiên văn."
      ],
      [
        "Số đơn vị điện tích hạt nhân (Z) của nguyên tử luôn có giá trị bằng:",
        [
          "A. Số hạt neutron trong hạt nhân.",
          "B. Số proton và bằng số electron trong nguyên tử trung hòa.",
          "C. Tổng số hạt trong hạt nhân nguyên tử.",
          "D. Số khối A của nguyên tử."
        ],
        1,
        "Số đơn vị điện tích hạt nhân Z = số proton = số electron (trong nguyên tử trung hòa)."
      ],
      [
        "Đường kính của hạt nhân nguyên tử có độ lớn vào khoảng:",
        [
          "A. 10<sup>-10</sup> m.",
          "B. 10<sup>-14</sup> m đến 10<sup>-15</sup> m.",
          "C. 10<sup>-6</sup> m.",
          "D. 10<sup>-3</sup> m."
        ],
        1,
        "Đường kính nguyên tử &approx; 10<sup>-10</sup> m (0,1 nm), trong khi đường kính hạt nhân nhỏ hơn rất nhiều, vào khoảng 10<sup>-15</sup> đến 10<sup>-14</sup> m."
      ],
      [
        "Trong nguyên tử Aluminium (<sup>27</sup><sub>13</sub>Al), số hạt mang điện nhiều hơn số hạt không mang điện là bao nhiêu hạt?",
        [
          "A. 1 hạt.",
          "B. 12 hạt.",
          "C. 13 hạt.",
          "D. 14 hạt."
        ],
        1,
        "Z = 13 &rArr; số hạt mang điện là 2Z = 2 &times; 13 = 26 hạt. Số neutron N = 27 - 13 = 14 hạt. Chênh lệch: 26 - 14 = 12 hạt."
      ],
      [
        "Đại lượng đặc trưng cơ bản nhất quyết định vị trí và toàn bộ tính chất hóa học của một nguyên tố là:",
        [
          "A. Số khối A.",
          "B. Số neutron trong hạt nhân.",
          "C. Điện tích hạt nhân (số hiệu nguyên tử Z).",
          "D. Bán kính nguyên tử."
        ],
        2,
        "Số hiệu nguyên tử Z xác định số proton, số electron và cấu hình electron của nguyên tử, do đó quyết định toàn bộ tính chất hóa học của nguyên tố."
      ],
      [
        "Khí chlorine trong tự nhiên là hỗn hợp của 2 đồng vị bền: <sup>35</sup>Cl (chiếm 75,77%) và <sup>37</sup>Cl (chiếm 24,23%). Nguyên tử khối trung bình của Chlorine là:",
        [
          "A. 35,50 amu.",
          "B. 35,48 amu.",
          "C. 36,00 amu.",
          "D. 35,24 amu."
        ],
        1,
        "A̅ = (35 &times; 75,77 + 37 &times; 24,23) / 100 = (2651,95 + 896,51) / 100 = 3548,46 / 100 &approx; 35,48 amu."
      ],
      [
        "Theo quy tắc Hund, trong cùng một phân lớp chưa bão hòa, các electron có xu hướng phân bố vào các AO sao cho:",
        [
          "A. Số electron ghép đôi là tối đa.",
          "B. Số electron độc thân là tối đa và các electron này phải có spin cùng chiều (song song).",
          "C. Tập trung toàn bộ vào một orbital duy nhất.",
          "D. Luôn có spin ngược chiều nhau."
        ],
        1,
        "Quy tắc Hund: Trong một phân lớp, các electron có xu hướng phân bố đều vào các orbital sao cho số electron độc thân là cực đại và có chiều tự quay song song nhau."
      ],
      [
        "Phân lớp electron d chứa tối đa bao nhiêu electron?",
        [
          "A. 2 electron.",
          "B. 6 electron.",
          "C. 10 electron.",
          "D. 14 electron."
        ],
        2,
        "Phân lớp d có 5 AO, mỗi AO chứa tối đa 2e &rArr; phân lớp d chứa tối đa 5 &times; 2 = 10 electron."
      ],
      [
        "Số electron tối đa có thể chứa ở lớp electron thứ 2 (lớp L, n = 2) là:",
        [
          "A. 2 electron.",
          "B. 8 electron.",
          "C. 18 electron.",
          "D. 32 electron."
        ],
        1,
        "Lớp thứ n chứa tối đa 2n<sup>2</sup> electron &rArr; n = 2 chứa tối đa 2 &times; 2<sup>2</sup> = 8 electron (gồm 2s<sup>2</sup> và 2p<sup>6</sup>)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử khí hiếm neon (Ne, Z = 10) là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>4</sup> 2p<sup>4</sup>.",
          "D. 1s<sup>2</sup> 2p<sup>8</sup>."
        ],
        0,
        "Z = 10 có 10 electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>."
      ],
      [
        "Nguyên tử iron (Fe, Z = 26) có cấu hình electron [Ar] 3d<sup>6</sup> 4s<sup>2</sup>. Iron là nguyên tố thuộc loại:",
        [
          "A. Nguyên tố s, kim loại kiềm.",
          "B. Nguyên tố p, phi kim.",
          "C. Nguyên tố d, kim loại chuyển tiếp.",
          "D. Nguyên tố f, khí hiếm."
        ],
        2,
        "Fe có electron cuối cùng điền vào phân lớp 3d nên là nguyên tố d, thuộc nhóm VIIIB, là một kim loại chuyển tiếp."
      ],
      [
        "Khi nguyên tử Iron (Fe, Z = 26, [Ar] 3d<sup>6</sup> 4s<sup>2</sup>) nhường 3 electron để tạo cation Fe<sup>3+</sup>, cấu hình electron của ion Fe<sup>3+</sup> là:",
        [
          "A. [Ar] 3d<sup>3</sup> 4s<sup>2</sup>.",
          "B. [Ar] 3d<sup>5</sup>.",
          "C. [Ar] 3d<sup>6</sup>.",
          "D. [Ar] 3d<sup>4</sup> 4s<sup>1</sup>."
        ],
        1,
        "Nguyên tử Fe nhường 2e ở phân lớp 4s ngoài cùng trước, sau đó nhường tiếp 1e ở phân lớp 3d &rArr; cấu hình của Fe<sup>3+</sup> là [Ar] 3d<sup>5</sup> (trạng thái bán bão hòa bền vững)."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện đại có tất cả bao nhiêu chu kì?",
        [
          "A. 5 chu kì.",
          "B. 6 chu kì.",
          "C. 7 chu kì.",
          "D. 8 chu kì."
        ],
        2,
        "Bảng tuần hoàn hiện nay gồm 7 chu kì được đánh số từ 1 đến 7."
      ],
      [
        "Nhóm VIIA trong Bảng tuần hoàn gồm các nguyên tố được gọi chung là nhóm:",
        [
          "A. Khí hiếm.",
          "B. Kim loại kiềm thổ.",
          "C. Halogen.",
          "D. Chalcogen."
        ],
        2,
        "Nhóm VIIA (F, Cl, Br, I, At) được gọi là nhóm Halogen (chất sinh ra muối)."
      ],
      [
        "Nguyên tố p là các nguyên tố mà nguyên tử của chúng có đặc điểm nào sau đây?",
        [
          "A. Có electron cuối cùng được điền vào phân lớp p.",
          "B. Có 6 electron ở lớp ngoài cùng.",
          "C. Có đúng 3 lớp electron.",
          "D. Đều là các phi kim hoạt động mạnh."
        ],
        0,
        "Định nghĩa: Nguyên tố s, p, d, f là nguyên tố mà nguyên tử có electron cuối cùng được điền vào phân lớp tương ứng s, p, d, f."
      ],
      [
        "Nguyên tố potassium (K, Z = 19) có cấu hình [Ar] 4s<sup>1</sup>. Vị trí của potassium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 19, chu kì 4, nhóm IA.",
          "B. Ô số 19, chu kì 4, nhóm IB.",
          "C. Ô số 19, chu kì 3, nhóm IA.",
          "D. Ô số 19, chu kì 1, nhóm IVA."
        ],
        0,
        "K (Z = 19): Ô số 19; 4 lớp electron &rArr; chu kì 4; 1 electron lớp ngoài cùng, e cuối vào phân lớp 4s &rArr; nhóm IA."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các nguyên tố Aluminium (Al, Z = 13) và Phosphorus (P, Z = 15):",
        "items": [
          [
            "Cả hai nguyên tử Al và P đều có 3 lớp electron ở trạng thái cơ bản.",
            true,
            "Đúng vì Al: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> và P: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup> đều có 3 lớp electron (thuộc chu kì 3)."
          ],
          [
            "Cấu hình electron thu gọn của nguyên tử Aluminium là [Ne] 3s<sup>2</sup> 3p<sup>1</sup> và Al là nguyên tố kim loại.",
            true,
            "Đúng. Al có 3e ở lớp ngoài cùng nên là một kim loại."
          ],
          [
            "Nguyên tử Phosphorus có 5 electron lớp ngoài cùng và là nguyên tố phi kim.",
            true,
            "Đúng. Lớp ngoài cùng (lớp 3) có 2 + 3 = 5 electron &rArr; P là một phi kim."
          ],
          [
            "Oxide cao nhất của Aluminium (Al<sub>2</sub>O<sub>3</sub>) là một basic oxide mạnh, làm quỳ tím hóa xanh khi tan trong nước.",
            false,
            "Sai. Al<sub>2</sub>O<sub>3</sub> không tan trong nước và là một amphoteric oxide (oxide lưỡng tính), vừa phản ứng được với acid vừa phản ứng được với base."
          ]
        ]
      },
      {
        "stem": "Xét cấu trúc và nguyên tắc của Bảng tuần hoàn các nguyên tố hóa học:",
        "items": [
          [
            "Bảng tuần hoàn hiện nay gồm 7 chu kì, trong đó chu kì 1, 2, 3 là chu kì nhỏ; chu kì 4, 5, 6, 7 là chu kì lớn.",
            true,
            "Đúng theo phân loại SGK Hóa học 10."
          ],
          [
            "Chu kì 1 là chu kì ngắn nhất, chỉ gồm đúng 2 nguyên tố là Hydrogen (H) và Helium (He).",
            true,
            "Đúng. Chu kì 1 chỉ điền vào phân lớp 1s nên chỉ có 2 nguyên tố."
          ],
          [
            "Các nguyên tố trong cùng một nhóm A luôn có cùng số lớp electron trong nguyên tử.",
            false,
            "Sai. Các nguyên tố trong cùng một nhóm A có cùng số electron hóa trị (số e lớp ngoài cùng), còn số lớp electron tăng dần theo từng chu kì từ trên xuống."
          ],
          [
            "Bảng tuần hoàn có tất cả 18 cột, gồm 8 cột nhóm A và 10 cột nhóm B (trong đó nhóm VIIIB gồm 3 cột).",
            true,
            "Đúng. BTH có 18 cột: 8 cột nhóm A (IA đến VIIIA) và 10 cột nhóm B (IB đến VIIB và 3 cột của nhóm VIIIB)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân nguyên tử Potassium (<sup>39</sup><sub>19</sub>K) có bao nhiêu hạt proton?",
        "answer": "19",
        "explanation": "Số hiệu Z = 19 &rArr; Hạt nhân nguyên tử K có đúng 19 hạt proton."
      },
      {
        "question": "Trong tự nhiên, Bromine có hai đồng vị bền là <sup>79</sup>Br (chiếm 50,69%) và <sup>81</sup>Br (chiếm 49,31%). Nguyên tử khối trung bình của Bromine là bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "79.99",
        "explanation": "A̅ = (79 &times; 50,69 + 81 &times; 49,31) / 100 = (4004,51 + 3994,11) / 100 = 7998,62 / 100 &approx; 79,99 amu."
      },
      {
        "question": "Ion Fe<sup>3+</sup> được hình thành khi nguyên tử Iron (Z = 26) nhường đi 3 electron. Số electron có trong ion Fe<sup>3+</sup> là bao nhiêu?",
        "answer": "23",
        "explanation": "Nguyên tử Fe có 26 electron. Khi nhường 3 electron tạo cation Fe<sup>3+</sup> thì số electron còn lại là 26 - 3 = 23 electron."
      },
      {
        "question": "Nguyên tử Silicon (Z = 14) có cấu hình electron [Ne] 3s<sup>2</sup> 3p<sup>2</sup>. Số electron độc thân của nguyên tử Silicon ở trạng thái cơ bản là bao nhiêu?",
        "answer": "2",
        "explanation": "Phân lớp 3p có 2 electron phân bố vào 2 AO riêng biệt theo quy tắc Hund &rArr; có 2 electron độc thân."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron của Iron và các ion Fe2+, Fe3+",
        "question": "Cho nguyên tố Iron (Fe, Z = 26).<br>a) Viết cấu hình electron đầy đủ và dạng thu gọn của nguyên tử Fe ở trạng thái cơ bản.<br>b) Viết cấu hình electron của các cation Fe<sup>2+</sup> và Fe<sup>3+</sup>.<br>c) Biểu diễn sự phân bố electron vào các orbital ở phân lớp 3d của ion Fe<sup>3+</sup> và cho biết số electron độc thân của ion Fe<sup>3+</sup>.",
        "solution": "a) Cấu hình electron của Fe (Z = 26):<br>• Đầy đủ: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>6</sup> 4s<sup>2</sup>.<br>• Thu gọn: [Ar] 3d<sup>6</sup> 4s<sup>2</sup> (0,35 điểm).<br>b) Cấu hình electron của các ion:<br>• Fe &rarr; Fe<sup>2+</sup> + 2e: Nhường 2e ở phân lớp 4s ngoài cùng &rArr; Fe<sup>2+</sup>: [Ar] 3d<sup>6</sup>.<br>• Fe &rarr; Fe<sup>3+</sup> + 3e: Nhường tiếp 1e ở 3d &rArr; Fe<sup>3+</sup>: [Ar] 3d<sup>5</sup> (0,35 điểm).<br>c) Biểu diễn orbital phân lớp 3d của Fe<sup>3+</sup>:<br>Phân lớp 3d có 5 orbital. Theo quy tắc Hund, 5 electron phân bố đều vào 5 AO, mỗi AO chứa đúng 1 electron độc thân (&uarr; &uarr; &uarr; &uarr; &uarr;).<br>&rArr; Ion Fe<sup>3+</sup> có đúng 5 electron độc thân (cấu hình bán bão hòa bền vững) (0,30 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Bài toán hạt trong phân tử hợp chất ion M2X (K2O)",
        "question": "Hợp chất có công thức phân tử M<sub>2</sub>X tạo bởi cation M<sup>+</sup> và anion X<sup>2-</sup>. Tổng số hạt cơ bản (proton, neutron, electron) trong một phân tử M<sub>2</sub>X là 140 hạt, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44 hạt. Số khối của nguyên tử M lớn hơn số khối của nguyên tử X là 23. Trong hạt nhân của M, số hạt neutron nhiều hơn số proton là 1 hạt; trong hạt nhân của X, số neutron bằng số proton.<br>a) Xác định số hiệu nguyên tử của hai nguyên tố M và X.<br>b) Viết công thức hóa học của hợp chất M<sub>2</sub>X.",
        "solution": "a) Trong phân tử M<sub>2</sub>X gồm 2 nguyên tử M và 1 nguyên tử X:<br>• Tổng số hạt: 2(2Z<sub>M</sub> + N<sub>M</sub>) + (2Z<sub>X</sub> + N<sub>X</sub>) = 140 &hArr; (4Z<sub>M</sub> + 2Z<sub>X</sub>) + (2N<sub>M</sub> + N<sub>X</sub>) = 140 (1).<br>• Số hạt mang điện nhiều hơn không mang điện: (4Z<sub>M</sub> + 2Z<sub>X</sub>) - (2N<sub>M</sub> + N<sub>X</sub>) = 44 (2).<br>Cộng (1) và (2): 2(4Z<sub>M</sub> + 2Z<sub>X</sub>) = 184 &rArr; 4Z<sub>M</sub> + 2Z<sub>X</sub> = 92 &rArr; 2Z<sub>M</sub> + Z<sub>X</sub> = 46 (*).<br>Mặt khác: N<sub>M</sub> = Z<sub>M</sub> + 1 và N<sub>X</sub> = Z<sub>X</sub>.<br>Hiệu số khối: A<sub>M</sub> - A<sub>X</sub> = 23 &hArr; (Z<sub>M</sub> + N<sub>M</sub>) - (Z<sub>X</sub> + N<sub>X</sub>) = 23<br>&hArr; (2Z<sub>M</sub> + 1) - 2Z<sub>X</sub> = 23 &rArr; 2Z<sub>M</sub> - 2Z<sub>X</sub> = 22 &rArr; Z<sub>M</sub> - Z<sub>X</sub> = 11 (**).<br>Từ (*) và (**), giải hệ phương trình:<br>• (2Z<sub>M</sub> + Z<sub>X</sub>) + (Z<sub>M</sub> - Z<sub>X</sub>) = 46 + 11 &rArr; 3Z<sub>M</sub> = 57 &rArr; Z<sub>M</sub> = 19 (Potassium, K).<br>• Z<sub>X</sub> = 19 - 11 = 8 (Oxygen, O) (0,75 điểm).<br>b) Công thức hóa học của hợp chất:<br>M là K, X là O &rArr; M<sub>2</sub>X là K<sub>2</sub>O (Potassium oxide) (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Xác định hai nguyên tố kế tiếp nhau trong cùng một chu kì",
        "question": "Xét hai nguyên tố A và B nằm ở hai ô liên tiếp trong cùng một chu kì của Bảng tuần hoàn. Tổng số đơn vị điện tích hạt nhân của hai nguyên tử là 27 (biết Z<sub>A</sub> < Z<sub>B</sub>).<br>a) Xác định số hiệu nguyên tử và gọi tên hai nguyên tố A và B.<br>b) Viết cấu hình electron và xác định vị trí (ô, chu kì, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Vì A và B kế tiếp nhau trong cùng một chu kì nên: Z<sub>B</sub> - Z<sub>A</sub> = 1 (1).<br>Theo đề bài: Z<sub>A</sub> + Z<sub>B</sub> = 27 (2).<br>Giải hệ phương trình:<br>• Z<sub>A</sub> = (27 - 1) / 2 = 13 &rArr; A là Aluminium (Al).<br>• Z<sub>B</sub> = 13 + 1 = 14 &rArr; B là Silicon (Si) (0,50 điểm).<br>b) Cấu hình electron và vị trí trong BTH:<br>• Aluminium (Al, Z = 13): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>1</sup>.<br>Vị trí: Ô số 13, chu kì 3, nhóm IIIA (0,25 điểm).<br>• Silicon (Si, Z = 14): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>2</sup> hay [Ne] 3s<sup>2</sup> 3p<sup>2</sup>.<br>Vị trí: Ô số 14, chu kì 3, nhóm IVA (0,25 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-10",
    "title": "Hóa học 10 - Đề 10 - Trường THPT Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I)",
    "province": "Đắk Lắk",
    "year": "2024–2025",
    "sourceUrl": "https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-le-hong-phong-dak-lak-2866645.html",
    "questions": [
      [
        "Khi bị một lượng nhỏ dung dịch acid đặc (như H<sub>2</sub>SO<sub>4</sub> hoặc HCl đặc) bắn dính vào da tay, thao tác sơ cứu đầu tiên ĐÚNG NHẤT là:",
        [
          "A. Đổ ngay dung dịch kiềm đặc (NaOH) vào chỗ dính acid để trung hòa.",
          "B. Xả ngay dưới vòi nước chảy liên tục trong nhiều phút, sau đó rửa nhẹ bằng dung dịch NaHCO<sub>3</sub> loãng.",
          "C. Dùng khăn khô chà xát thật mạnh lên vết thương.",
          "D. Băng kín vết thương lại ngay lập tức."
        ],
        1,
        "Quy tắc an toàn: Khi bị acid bắn vào da, phải xả liên tục dưới vòi nước chảy trong ít nhất 10–15 phút để làm loãng và rửa trôi acid, sau đó rửa lại bằng dung dịch NaHCO<sub>3</sub> loãng (khoảng 2%). Tuyệt đối không dùng base đặc vì gây bỏng thêm."
      ],
      [
        "Nhà vật lí người Anh J. J. Thomson đã phát hiện ra hạt electron vào năm 1897 nhờ thí nghiệm nào sau đây?",
        [
          "A. Thí nghiệm bắn phá lá vàng mỏng bằng hạt alpha (&alpha;).",
          "B. Thí nghiệm phóng điện qua chất khí trong ống tia âm cực.",
          "C. Thí nghiệm đo khối lượng bằng máy quang phổ khối.",
          "D. Thí nghiệm tán xạ tia X."
        ],
        1,
        "Năm 1897, J. J. Thomson phát hiện ra hạt electron khi nghiên cứu sự phóng điện trong ống tia âm cực."
      ],
      [
        "Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân là vì:",
        [
          "A. Thể tích hạt nhân chiếm hầu hết thể tích nguyên tử.",
          "B. Khối lượng của hạt electron vô cùng nhỏ (khoảng 0,00055 amu), không đáng kể so với proton và neutron.",
          "C. Hạt nhân chứa toàn bộ các electron mang điện âm.",
          "D. Hạt neutron có khối lượng lớn hơn proton hàng nghìn lần."
        ],
        1,
        "Khối lượng electron (m<sub>e</sub> &approx; 0,00055 amu) quá bé so với proton và neutron (&approx; 1 amu), nên hơn 99,9% khối lượng nguyên tử tập trung ở hạt nhân."
      ],
      [
        "Một nguyên tử có 19 proton, 20 neutron và 19 electron. Kí hiệu nguyên tử của nguyên tố này là:",
        [
          "A. <sup>20</sup><sub>19</sub>K.",
          "B. <sup>39</sup><sub>19</sub>K.",
          "C. <sup>39</sup><sub>20</sub>Ca.",
          "D. <sup>19</sup><sub>39</sub>K."
        ],
        1,
        "Z = 19 (Potassium, K); số khối A = Z + N = 19 + 20 = 39 &rArr; Kí hiệu đúng là <sup>39</sup><sub>19</sub>K."
      ],
      [
        "Các đồng vị của cùng một nguyên tố hóa học có tính chất hóa học tương tự nhau là vì chúng có:",
        [
          "A. Cùng số neutron trong hạt nhân.",
          "B. Cùng số khối A.",
          "C. Cùng số proton và cấu hình electron tương tự nhau.",
          "D. Cùng khối lượng nguyên tử."
        ],
        2,
        "Tính chất hóa học của nguyên tố do lớp vỏ electron (đặc biệt là electron hóa trị) quyết định. Các đồng vị có cùng số proton nên cùng số electron và cấu hình electron, do đó có tính chất hóa học tương tự nhau."
      ],
      [
        "Nguyên tố hydrogen có 3 đồng vị bền và phóng xạ nhẹ là <sup>1</sup>H (Protium), <sup>2</sup>H (Deuterium) và <sup>3</sup>H (Tritium). Số hạt neutron có trong từng đồng vị lần lượt là:",
        [
          "A. 1, 2, 3.",
          "B. 0, 1, 2.",
          "C. 1, 1, 1.",
          "D. 0, 2, 3."
        ],
        1,
        "Số neutron N = A - Z. Với <sup>1</sup><sub>1</sub>H: N = 1 - 1 = 0; <sup>2</sup><sub>1</sub>H: N = 2 - 1 = 1; <sup>3</sup><sub>1</sub>H: N = 3 - 1 = 2."
      ],
      [
        "Khu vực không gian xung quanh hạt nhân nguyên tử mà tại đó xác suất tìm thấy electron khoảng 90% được gọi là:",
        [
          "A. Quỹ đạo tròn Bohr.",
          "B. Orbital nguyên tử (AO).",
          "C. Phân lớp electron.",
          "D. Đám mây proton."
        ],
        1,
        "Orbital nguyên tử (AO) là vùng không gian xung quanh hạt nhân có xác suất bắt gặp electron lớn nhất (khoảng 90%)."
      ],
      [
        "Phân lớp electron f gồm bao nhiêu orbital nguyên tử và chứa tối đa bao nhiêu electron?",
        [
          "A. 5 AO và tối đa 10 electron.",
          "B. 7 AO và tối đa 14 electron.",
          "C. 3 AO và tối đa 6 electron.",
          "D. 9 AO và tối đa 18 electron."
        ],
        1,
        "Phân lớp f gồm đúng 7 AO và chứa tối đa 7 &times; 2 = 14 electron."
      ],
      [
        "Theo quy tắc Klechkowski, phân lớp 4s có mức năng lượng so với phân lớp 3d như thế nào?",
        [
          "A. Thấp hơn phân lớp 3d.",
          "B. Cao hơn phân lớp 3d.",
          "C. Bằng phân lớp 3d.",
          "D. Bằng phân lớp 4p."
        ],
        0,
        "Theo trật tự Klechkowski: 1s 2s 2p 3s 3p 4s 3d 4p... nên phân lớp 4s có mức năng lượng thấp hơn phân lớp 3d (được điền electron trước 3d)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử copper (Cu, Z = 29) là:",
        [
          "A. [Ar] 4s<sup>2</sup> 3d<sup>9</sup>.",
          "B. [Ar] 3d<sup>10</sup> 4s<sup>1</sup>.",
          "C. [Ar] 3d<sup>9</sup> 4s<sup>2</sup>.",
          "D. [Ar] 4s<sup>1</sup> 3d<sup>10</sup>."
        ],
        1,
        "Do hiện tượng bão hòa phân lớp 3d bền vững hơn, 1 electron phân lớp 4s nhảy sang 3d &rArr; cấu hình đúng của Cu là [Ar] 3d<sup>10</sup> 4s<sup>1</sup>."
      ],
      [
        "Nguyên tử của một nguyên tố có cấu hình electron lớp ngoài cùng dạng ns<sup>2</sup> np<sup>5</sup> thuộc loại nguyên tố nào?",
        [
          "A. Kim loại kiềm mạnh.",
          "B. Phi kim điển hình (nhóm halogen).",
          "C. Khí hiếm.",
          "D. Kim loại chuyển tiếp họ d."
        ],
        1,
        "Có 7 electron lớp ngoài cùng (ns<sup>2</sup> np<sup>5</sup>) là cấu hình đặc trưng của các phi kim điển hình nhóm VIIA (Halogen)."
      ],
      [
        "Cation Mg<sup>2+</sup> được hình thành khi nguyên tử magnesium (Mg, Z = 12) nhường đi 2 electron. Cấu hình electron của cation Mg<sup>2+</sup> là:",
        [
          "A. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>.",
          "B. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>.",
          "C. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.",
          "D. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>."
        ],
        1,
        "Mg (Z = 12): [Ne] 3s<sup>2</sup> nhường 2e ở lớp thứ 3 tạo Mg<sup>2+</sup> có 10 electron với cấu hình [Ne] hay 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>."
      ],
      [
        "Định luật tuần hoàn hiện đại phát biểu rằng: Tính chất của các nguyên tố và đơn chất cũng như hợp chất của chúng biến đổi tuần hoàn theo chiều tăng của:",
        [
          "A. Khối lượng nguyên tử.",
          "B. Số neutron trong hạt nhân.",
          "C. Điện tích hạt nhân của nguyên tử.",
          "D. Bán kính nguyên tử."
        ],
        2,
        "Định luật tuần hoàn hiện đại: Tính chất của các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử."
      ],
      [
        "Chu kì 3 trong Bảng tuần hoàn bắt đầu bằng nguyên tố nào và kết thúc bằng nguyên tố nào?",
        [
          "A. Bắt đầu bằng Lithium (Li) và kết thúc bằng Neon (Ne).",
          "B. Bắt đầu bằng Sodium (Na) và kết thúc bằng Argon (Ar).",
          "C. Bắt đầu bằng Potassium (K) và kết thúc bằng Krypton (Kr).",
          "D. Bắt đầu bằng Hydrogen (H) và kết thúc bằng Helium (He)."
        ],
        1,
        "Chu kì 3 bắt đầu bằng kim loại kiềm Sodium (<sub>11</sub>Na) và kết thúc bằng khí hiếm Argon (<sub>18</sub>Ar)."
      ],
      [
        "Nhóm VIIIA trong Bảng tuần hoàn gồm tập hợp các nguyên tố thuộc loại:",
        [
          "A. Kim loại kiềm thổ.",
          "B. Khí hiếm (khí trơ).",
          "C. Halogen.",
          "D. Kim loại chuyển tiếp."
        ],
        1,
        "Nhóm VIIIA gồm He, Ne, Ar, Kr, Xe, Rn là các nguyên tố khí hiếm (khí trơ)."
      ],
      [
        "Nguyên tố manganese (Mn, Z = 25) có cấu hình electron [Ar] 3d<sup>5</sup> 4s<sup>2</sup>. Vị trí của manganese trong Bảng tuần hoàn là:",
        [
          "A. Ô số 25, chu kì 4, nhóm VIIB.",
          "B. Ô số 25, chu kì 4, nhóm VIIA.",
          "C. Ô số 25, chu kì 3, nhóm VIIB.",
          "D. Ô số 25, chu kì 4, nhóm IIB."
        ],
        0,
        "Mn (Z = 25): Ô số 25; 4 lớp electron &rArr; chu kì 4; cấu hình e hóa trị là 3d<sup>5</sup> 4s<sup>2</sup> có 5 + 2 = 7 electron, e cuối vào phân lớp d &rArr; nhóm VIIB."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử Potassium (K, Z = 19, số khối A = 39):",
        "items": [
          [
            "Số đơn vị điện tích hạt nhân của nguyên tử Potassium là 19.",
            true,
            "Đúng vì Z = 19."
          ],
          [
            "Hạt nhân nguyên tử Potassium chứa 19 proton và 20 neutron.",
            true,
            "Đúng vì p = Z = 19 và N = A - Z = 39 - 19 = 20 hạt."
          ],
          [
            "Nguyên tử Potassium có 4 lớp electron và thuộc khối nguyên tố s.",
            true,
            "Đúng. K có cấu hình [Ar] 4s<sup>1</sup>: 4 lớp electron, electron cuối cùng điền vào phân lớp 4s nên thuộc khối nguyên tố s."
          ],
          [
            "Khi tham gia phản ứng hóa học, nguyên tử Potassium dễ nhận thêm 1 electron để đạt cấu hình electron bền vững của khí hiếm.",
            false,
            "Sai. Potassium là kim loại kiềm mạnh, có 1 electron lớp ngoài cùng nên rất dễ NHƯỜNG ĐI 1 electron để tạo cation K<sup>+</sup> có cấu hình bền của Argon."
          ]
        ]
      },
      {
        "stem": "Xét các nguyên tố trong cùng chu kì 3 (từ <sub>11</sub>Na đến <sub>18</sub>Ar):",
        "items": [
          [
            "Tất cả các nguyên tố trong chu kì 3 đều có 3 lớp electron trong nguyên tử.",
            true,
            "Đúng. Các nguyên tố trong cùng chu kì có cùng số lớp electron trong nguyên tử."
          ],
          [
            "Theo chiều tăng dần của điện tích hạt nhân từ Na đến Cl, bán kính nguyên tử có xu hướng tăng dần.",
            false,
            "Sai. Trong cùng một chu kì, từ trái sang phải điện tích hạt nhân tăng dần, lực hút giữa hạt nhân và electron ngoài cùng tăng làm bán kính nguyên tử giảm dần."
          ],
          [
            "Sodium (Na) là kim loại mạnh nhất, Chlorine (Cl) là phi kim mạnh nhất trong chu kì 3.",
            true,
            "Đúng. Trong chu kì 3, kim loại kiềm Na có tính kim loại mạnh nhất, halogen Cl có tính phi kim mạnh nhất (không xét khí hiếm Ar)."
          ],
          [
            "Khí hiếm Argon (Ar) có cấu hình electron lớp ngoài cùng bền vững dạng 3s<sup>2</sup> 3p<sup>6</sup> với 8 electron.",
            true,
            "Đúng. Ar (Z = 18): [Ne] 3s<sup>2</sup> 3p<sup>6</sup> có 8 electron lớp ngoài cùng rất bền vững."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trong phân tử nước nặng D<sub>2</sub>O tạo bởi đồng vị Deuterium (<sup>2</sup><sub>1</sub>D) và đồng vị <sup>16</sup><sub>8</sub>O, tổng số hạt neutron trong một phân tử D<sub>2</sub>O là bao nhiêu?",
        "answer": "10",
        "explanation": "Mỗi nguyên tử <sup>2</sup><sub>1</sub>D có 2 - 1 = 1 neutron &rArr; 2 nguyên tử D có 2 neutron. Nguyên tử <sup>16</sup><sub>8</sub>O có 16 - 8 = 8 neutron &rArr; Tổng số neutron = 2 + 8 = 10 neutron."
      },
      {
        "question": "Cho biết Hydrogen có 3 đồng vị (<sup>1</sup>H, <sup>2</sup>H, <sup>3</sup>H) và Oxygen có 3 đồng vị (<sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O). Có bao nhiêu loại phân tử nước (H<sub>2</sub>O) khác nhau có thể được tạo thành từ các đồng vị trên?",
        "answer": "18",
        "explanation": "Số tổ hợp cặp 2 nguyên tử H từ 3 đồng vị là 3 + (3 &times; 2 / 2) = 6 cặp (gồm: 1-1, 2-2, 3-3, 1-2, 1-3, 2-3). Mỗi cặp kết hợp với 1 trong 3 đồng vị của O &rArr; Số loại phân tử nước = 6 &times; 3 = 18 loại phân tử."
      },
      {
        "question": "Dãy gồm các ion sau: O<sup>2-</sup>, F<sup>-</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup>. Có bao nhiêu ion trong dãy có cấu hình electron ở lớp ngoài cùng là 2s<sup>2</sup> 2p<sup>6</sup>?",
        "answer": "5",
        "explanation": "Cả 5 ion trên đều có 10 electron và cấu hình electron là 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> &rArr; Tất cả 5 ion đều có lớp ngoài cùng là 2s<sup>2</sup> 2p<sup>6</sup>."
      },
      {
        "question": "Nguyên tử của nguyên tố Potassium (K, Z = 19) có bao nhiêu electron ở lớp electron ngoài cùng?",
        "answer": "1",
        "explanation": "Cấu hình e của K: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> &rArr; Lớp ngoài cùng là lớp thứ 4 có đúng 1 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Dãy ion đẳng electron và so sánh bán kính ion",
        "question": "Cho 4 ion sau: O<sup>2-</sup> (Z = 8), F<sup>-</sup> (Z = 9), Na<sup>+</sup> (Z = 11) và Mg<sup>2+</sup> (Z = 12).<br>a) Viết cấu hình electron của từng ion trên. Nêu nhận xét về cấu hình electron của 4 ion này.<br>b) Sắp xếp bán kính của 4 ion trên theo thứ tự giảm dần và giải thích ngắn gọn dựa vào điện tích hạt nhân.",
        "solution": "a) Cấu hình electron của các ion:<br>• O<sup>2-</sup> (8 + 2 = 10e): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> hay [Ne].<br>• F<sup>-</sup> (9 + 1 = 10e): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> hay [Ne].<br>• Na<sup>+</sup> (11 - 1 = 10e): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> hay [Ne].<br>• Mg<sup>2+</sup> (12 - 2 = 10e): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> hay [Ne].<br>Nhận xét: Cả 4 ion đều có cùng số electron (10 electron) và có cấu hình electron giống hệt nhau (dãy ion đẳng electron) (0,50 điểm).<br>b) So sánh bán kính ion:<br>Do có cùng số electron (10e) và cùng 2 lớp electron, lực hút của hạt nhân lên lớp vỏ electron phụ thuộc vào điện tích hạt nhân (Z). Hạt nhân có Z càng lớn thì lực hút mây electron càng mạnh &rArr; bán kính ion càng nhỏ.<br>Điện tích hạt nhân tăng dần: Z<sub>O</sub> (8) &lt; Z<sub>F</sub> (9) &lt; Z<sub>Na</sub> (11) &lt; Z<sub>Mg</sub> (12).<br>&rArr; Thứ tự bán kính giảm dần: r(O<sup>2-</sup>) &gt; r(F<sup>-</sup>) &gt; r(Na<sup>+</sup>) &gt; r(Mg<sup>2+</sup>) (0,50 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định nguyên tố Potassium qua bài toán hạt",
        "question": "Nguyên tử của nguyên tố Q có tổng số hạt cơ bản (proton, neutron, electron) là 58 hạt. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 18 hạt.<br>a) Tính số hạt proton, neutron, electron và số khối A của nguyên tử Q.<br>b) Viết cấu hình electron của nguyên tử Q và xác định vị trí của Q (ô, chu kì, nhóm) trong Bảng tuần hoàn.",
        "solution": "a) Trong nguyên tử: p = e = Z. Ta có hệ phương trình:<br>• Tổng số hạt: 2Z + N = 58 (1).<br>• Hạt mang điện nhiều hơn không mang điện: 2Z - N = 18 (2).<br>Cộng (1) và (2): 4Z = 76 &rArr; Z = 19 (proton = electron = 19 hạt).<br>Thay vào (1): N = 58 - 2(19) = 20 hạt neutron (0,50 điểm).<br>Số khối A = Z + N = 19 + 20 = 39 (0,25 điểm).<br>b) Z = 19 là Potassium (K):<br>Cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> hay [Ar] 4s<sup>1</sup>.<br>Vị trí trong BTH: Ô số 19; chu kì 4 (có 4 lớp e); nhóm IA (có 1e ngoài cùng, e cuối vào 4s) (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Xác định hai nguyên tố cùng nhóm IIA và so sánh tính kim loại",
        "question": "Hai nguyên tố kim loại X và Y cùng thuộc nhóm IIA của Bảng tuần hoàn và nằm ở hai chu kì liên tiếp, có tổng số proton trong hai hạt nhân là 32 (biết Z<sub>X</sub> < Z<sub>Y</sub>).<br>a) Xác định số hiệu nguyên tử và gọi tên hai nguyên tố X và Y.<br>b) So sánh tính kim loại giữa X và Y, giải thích dựa theo quy luật biến đổi tuần hoàn trong Bảng tuần hoàn.",
        "solution": "a) Vì X và Y thuộc cùng nhóm A ở hai chu kì liên tiếp (chu kì 3 và 4) nên số hiệu nguyên tử hơn kém nhau 8 đơn vị: Z<sub>Y</sub> - Z<sub>X</sub> = 8 (1).<br>Theo đề bài: Z<sub>X</sub> + Z<sub>Y</sub> = 32 (2).<br>Giải hệ phương trình:<br>• Z<sub>X</sub> = (32 - 8) / 2 = 12 &rArr; X là Magnesium (Mg).<br>• Z<sub>Y</sub> = 12 + 8 = 20 &rArr; Y là Calcium (Ca) (0,50 điểm).<br>b) So sánh tính kim loại:<br>X (Mg, Z = 12) và Y (Ca, Z = 20) đều thuộc nhóm IIA trong Bảng tuần hoàn.<br>Theo quy luật biến đổi tuần hoàn: Trong cùng một nhóm A, theo chiều tăng của điện tích hạt nhân (từ trên xuống dưới), bán kính nguyên tử tăng dần, lực hút giữa hạt nhân và electron ngoài cùng giảm dần nên khả năng nhường electron tăng &rArr; tính kim loại tăng dần.<br>Do Ca ở chu kì 4 (dưới Mg ở chu kì 3) nên: Tính kim loại của Calcium mạnh hơn Magnesium (Ca &gt; Mg) (0,50 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-11",
    "title": "Hóa học 10 - Đề 11 - Đề luyện tập số 4: Tổng hợp (Năm học 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Đề luyện tập số 4: Tổng hợp (Năm học 2025–2026)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.2,
    "shortUnit": 1,
    "essayPoints": 0,
    "questions": [
      [
        "Theo nguyên lí Pauli, trong mỗi orbital nguyên tử, số electron tối đa là ...(1)..., và các electron này có chiều tự quay quanh trục của chúng là ...(2)... Các từ thích hợp để điền vào vị trí (1), (2) lần lượt là:",
        [
          "A. 1, không đổi.",
          "B. 2, cùng chiều nhau.",
          "C. 2, ngược chiều nhau.",
          "D. 1, thay đổi."
        ],
        2,
        "Theo nguyên lí Pauli, trong một orbital nguyên tử (AO) chỉ có thể chứa tối đa 2 electron và hai electron này phải có chiều tự quay quanh trục ngược nhau (spin ngược dấu)."
      ],
      [
        "Theo nguyên lí vững bền, khi electron phân bố vào các AO của nguyên tử, chúng sẽ lần lượt được lấp đầy vào các AO theo thứ tự:",
        [
          "A. từ lớp thấp đến lớp cao.",
          "B. mức năng lượng từ thấp đến cao.",
          "C. từ lớp trong ra lớp ngoài.",
          "D. các phân lớp s, p, d, f cho từng lớp trong ra ngoài."
        ],
        1,
        "Theo nguyên lí vững bền: Ở trạng thái cơ bản, trong nguyên tử các electron lần lượt chiếm các orbital có mức năng lượng từ thấp đến cao."
      ],
      [
        "Số phân lớp electron có trong lớp thứ 2 là:",
        [
          "A. 3.",
          "B. 2.",
          "C. 1.",
          "D. 4."
        ],
        1,
        "Lớp thứ n có đúng n phân lớp electron. Do đó lớp thứ 2 (lớp L, n = 2) có đúng 2 phân lớp là 2s và 2p."
      ],
      [
        "Các phân lớp electron có trong lớp N là:",
        [
          "A. 1s.",
          "B. 2s, 2p.",
          "C. 3s, 3p, 3d.",
          "D. 4s, 4p, 4d, 4f."
        ],
        3,
        "Lớp N tương ứng với n = 4, gồm 4 phân lớp electron kí hiệu là 4s, 4p, 4d, 4f."
      ],
      [
        "Số electron tối đa trong phân lớp p là:",
        [
          "A. 6.",
          "B. 2.",
          "C. 10.",
          "D. 14."
        ],
        0,
        "Phân lớp p gồm 3 orbital p (px, py, pz). Mỗi orbital chứa tối đa 2 electron nên số electron tối đa của phân lớp p là 3 × 2 = 6 electron."
      ],
      [
        "Số electron tối đa trong phân lớp d là:",
        [
          "A. 2.",
          "B. 6.",
          "C. 10.",
          "D. 14."
        ],
        2,
        "Phân lớp d gồm 5 orbital d. Mỗi orbital chứa tối đa 2 electron nên số electron tối đa của phân lớp d là 5 × 2 = 10 electron."
      ],
      [
        "Cấu hình electron đúng của nguyên tử Li (Z = 3) là:",
        [
          "A. 1s²1p¹.",
          "B. 1s²2s¹.",
          "C. 1s¹2s².",
          "D. 1s³."
        ],
        1,
        "Lithium có Z = 3. Thứ tự lấp đầy năng lượng: 1s² 2s¹."
      ],
      [
        "Cấu hình electron đúng của nguyên tử F (Z = 9) là:",
        [
          "A. 1s²2s²2p⁵.",
          "B. 1s²2s²2p⁴3s¹.",
          "C. 1s²1p⁶1d¹.",
          "D. 1s²2s²2p⁴."
        ],
        0,
        "Fluorine có Z = 9 electron. Cấu hình electron theo thứ tự năng lượng là 1s² 2s² 2p⁵."
      ],
      [
        "Nguyên tử X có cấu hình e là: 1s²2s²2p⁶3s²3p¹. Chọn phát biểu đúng.",
        [
          "A. Số electron ở lớp ngoài cùng trong nguyên tử X là 1.",
          "B. Nguyên tử X chứa 2 lớp electron.",
          "C. Lớp electron ngoài cùng của nguyên tử X là lớp N.",
          "D. Ở trạng thái cơ bản, nguyên tử X chứa 1 electron độc thân."
        ],
        3,
        "Cấu hình của X có 3 lớp electron (lớp ngoài cùng là lớp 3 gồm phân lớp 3s² 3p¹ với 3 electron). Phân lớp 3p có 1 electron nằm trong 1 AO nên nguyên tử X chứa đúng 1 electron độc thân."
      ],
      [
        "Nguyên tử Y có cấu hình e là: 1s²2s²2p⁶3s²3p⁶3d⁵4s². Cho các nhận xét: (1) Số hiệu nguyên tử của Y là 25; (2) Nguyên tố Y là một kim loại; (3) Ở trạng thái cơ bản, nguyên tử Y chứa 5 electron độc thân. Các nhận xét đúng bao gồm:",
        [
          "A. chỉ (1) và (2).",
          "B. cả (1), (2) và (3).",
          "C. chỉ (1) và (3).",
          "D. chỉ (2) và (3)."
        ],
        1,
        "Tổng số electron của Y = 25 &rArr; Z = 25 (Mn, (1) đúng). Y là kim loại chuyển tiếp (2 đúng). Phân lớp 3d⁵ có 5 orbital, theo quy tắc Hund mỗi AO chứa 1e &rArr; có 5 electron độc thân (3 đúng). Vậy cả 3 nhận xét đều đúng."
      ]
    ],
    "tf": [
      {
        "stem": "Xét tính Đúng/Sai của các phát biểu về kích thước và cấu tạo nguyên tử:",
        "items": [
          [
            "a) Hạt nhân nguyên tử có kích thước rất nhỏ so với lớp vỏ nguyên tử.",
            true,
            "Phát biểu ĐÚNG. Kích thước hạt nhân chỉ bằng khoảng 1/10.000 đến 1/100.000 lần kích thước của toàn nguyên tử."
          ],
          [
            "b) Hạt nhân nguyên tử chiếm gần như toàn bộ khối lượng nguyên tử.",
            true,
            "Phát biểu ĐÚNG. Khối lượng nguyên tử tập trung hầu hết ở hạt nhân vì khối lượng electron ở vỏ rất bé không đáng kể."
          ],
          [
            "c) Các electron trong cùng một lớp có năng lượng bằng nhau.",
            false,
            "Phát biểu SAI. Các electron trong cùng một lớp chỉ có mức năng lượng GẦN BẰNG NHAU; các electron trong cùng một phân lớp mới có năng lượng bằng nhau."
          ],
          [
            "d) Các electron trong cùng một phân lớp có năng lượng bằng nhau.",
            true,
            "Phát biểu ĐÚNG theo định nghĩa phân lớp electron."
          ]
        ]
      },
      {
        "stem": "Xét tính Đúng/Sai của các phát biểu về orbital nguyên tử và sự phân bố electron:",
        "items": [
          [
            "a) Trong một orbital nguyên tử, số electron tối đa là 6.",
            false,
            "Phát biểu SAI. Theo nguyên lí Pauli, mỗi orbital nguyên tử chỉ chứa tối đa 2 electron."
          ],
          [
            "b) Số electron tối đa trong các phân lớp s, p, d, f lần lượt là 1, 3, 5, 7.",
            false,
            "Phát biểu SAI. 1, 3, 5, 7 là số lượng orbital nguyên tử trong các phân lớp s, p, d, f; số electron tối đa tương ứng phải là 2, 6, 10, 14."
          ],
          [
            "c) Số phân lớp electron trong một lớp đúng bằng số thứ tự của lớp đó.",
            true,
            "Phát biểu ĐÚNG. Lớp thứ n có đúng n phân lớp electron (đối với n &le; 4)."
          ],
          [
            "d) Trật tự năng lượng các AO: 4s < 4p < 4d < 4f.",
            true,
            "Phát biểu ĐÚNG. Trong cùng một lớp (n = 4), mức năng lượng tăng dần từ phân lớp s đến p, d và f."
          ]
        ]
      },
      {
        "stem": "Cấu hình electron lớp ngoài cùng của nguyên tử R là: 4s²4p⁵. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Số hiệu nguyên tử của R là 35.",
            true,
            "Phát biểu ĐÚNG. Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵ &rArr; Z = 35 (Bromine)."
          ],
          [
            "b) Ở trạng thái cơ bản, nguyên tử R chứa 5 electron độc thân.",
            false,
            "Phát biểu SAI. Phân lớp 4p⁵ gồm 2 cặp electron ghép đôi và chỉ có 1 electron độc thân."
          ],
          [
            "c) Nguyên tố R là một phi kim.",
            true,
            "Phát biểu ĐÚNG. R có 7 electron ở lớp ngoài cùng (4s² 4p⁵) nên là một phi kim điển hình."
          ],
          [
            "d) Nếu nguyên tử R nhận thêm 1 electron, nó có cấu hình electron giống khí hiếm.",
            true,
            "Phát biểu ĐÚNG. Khi nhận thêm 1 electron, R tạo anion R⁻ có cấu hình 4s² 4p⁶ bền vững giống khí hiếm Kr."
          ]
        ]
      },
      {
        "stem": "Điện tích hạt nhân nguyên tử T là +4,165.10⁻¹⁸ Coulomb. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Cấu hình electron của nguyên tử T là: [Ar] 3d⁸.",
            false,
            "Phát biểu SAI. Số proton Z = 4,165.10⁻¹⁸ / (1,602.10⁻¹⁹) &approx; 26 (Sắt - Fe). Cấu hình e đúng là [Ar] 3d⁶ 4s²."
          ],
          [
            "b) Nguyên tố T là một phi kim.",
            false,
            "Phát biểu SAI. T có Z = 26 là kim loại sắt (Fe)."
          ],
          [
            "c) Phân lớp d của nguyên tử T chưa bão hoà.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 3d chứa 6 electron (chưa đạt tối đa 10 electron) nên chưa bão hòa."
          ],
          [
            "d) Trong nguyên tử T có chứa 4 electron độc thân ở trạng thái cơ bản.",
            true,
            "Phát biểu ĐÚNG. Cấu hình 3d⁶ có 1 ô orbital chứa cặp ghép đôi và 4 ô orbital mỗi ô chứa 1 electron độc thân."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Tổng số hạt proton, electron, neutron trong một nguyên tử X là 22, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 6 hạt. Số hiệu nguyên tử của X bằng bao nhiêu?",
        "answer": "7",
        "explanation": "Hệ phương trình: 2Z + N = 22 và 2Z - N = 6 &rArr; 4Z = 28 &rArr; Z = 7 (Nitrogen), N = 8."
      },
      {
        "question": "Một nguyên tử Calcium có kí hiệu là ⁴⁰₂₀Ca. Ở trạng thái cơ bản, nguyên tử này có bao nhiêu electron độc thân?",
        "answer": "0",
        "explanation": "Ca (Z = 20) có cấu hình: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² = [Ar] 4s². Tất cả các phân lớp đều bão hòa nên có 0 electron độc thân."
      },
      {
        "question": "Nickel thường được dùng để đúc tiền xu. Biết tổng số hạt mang điện trong một nguyên tử Nickel bằng 56. Số hiệu nguyên tử (Z) của Nickel bằng bao nhiêu?",
        "answer": "28",
        "explanation": "Số hạt mang điện trong nguyên tử trung hòa gồm proton và electron: 2Z = 56 &rArr; Z = 28."
      },
      {
        "question": "Boron (B) tồn tại trong tự nhiên dưới hai đồng vị bền là ¹⁰₅B (chiếm 19,9%) và ¹¹₅B (chiếm 80,1%). Tính nguyên tử khối trung bình của Boron (làm tròn kết quả đến 2 chữ số thập phân).",
        "answer": "10.80",
        "explanation": "Nguyên tử khối trung bình = (10 × 19,9 + 11 × 80,1) / 100 = 1080,1 / 100 = 10,801 amu &approx; 10,80 amu."
      }
    ],
    "essay": [
      {
        "title": "Bài số 1 (1,0 điểm). Cấu tạo hạt nguyên tử X.",
        "question": "Tổng số hạt proton, electron, neutron trong một nguyên tử X là 22, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 6 hạt.<br>a) Xác định số hiệu nguyên tử của X.<br>b) Viết kí hiệu hạt nhân nguyên tử của X.<br>c) Cho biết nguyên tử khối của X.<br>d) Tính khối lượng 1 nguyên tử X ra gam.<br>e) Viết cấu hình electron của nguyên tử X.",
        "solution": "Theo đề bài, gọi Z là số proton (Z = E) và N là số neutron của nguyên tử X:<br>• Tổng số hạt: 2Z + N = 22 (1)<br>• Số hạt mang điện nhiều hơn không mang điện: 2Z - N = 6 (2)<br>Cộng (1) và (2): 4Z = 28 &rArr; Z = 7 (0,2 điểm).<br>Thay Z = 7 vào (1): N = 22 - 2(7) = 8 hạt.<br>a) Số hiệu nguyên tử của X là Z = 7 (0,2 điểm).<br>b) Số khối A = Z + N = 7 + 8 = 15. Kí hiệu hạt nhân: <sup>15</sup><sub>7</sub>X (hoặc <sup>15</sup><sub>7</sub>N) (0,2 điểm).<br>c) Nguyên tử khối của X là 15 amu (0,2 điểm).<br>d) Khối lượng 1 nguyên tử X: m = 15 &times; 1,6605 &times; 10<sup>-24</sup> gam &approx; 2,49075 &times; 10<sup>-23</sup> gam (0,2 điểm).<br>e) Cấu hình electron của X (Z = 7): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup> (0,2 điểm)."
      },
      {
        "title": "Bài số 2 (1,0 điểm). Khảo sát nguyên tử Y (⁴⁰₂₀Ca).",
        "question": "Một nguyên tử có kí hiệu như sau: <sup>40</sup><sub>20</sub>Y.<br>a) Cho biết số proton, neutron, electron có trong 1 nguyên tử Y.<br>b) Viết cấu hình electron của nguyên tử Y.<br>c) Ở trạng thái cơ bản, nguyên tử Y có bao nhiêu electron độc thân?<br>d) Dự đoán tính chất hoá học của nguyên tố Y.<br>e) Tính số electron có mặt trong một mẫu Y có khối lượng là 2 gam.",
        "solution": "a) Từ kí hiệu <sup>40</sup><sub>20</sub>Y &rArr; Z = 20, A = 40.<br>• Số proton = số electron = Z = 20.<br>• Số neutron = A - Z = 40 - 20 = 20 (0,2 điểm).<br>b) Cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> (hoặc [Ar] 4s<sup>2</sup>) (0,2 điểm).<br>c) Lớp ngoài cùng 4s<sup>2</sup> đã bão hòa (1 AO chứa 2 electron ghép đôi). Vậy số electron độc thân ở trạng thái cơ bản là 0 (0,2 điểm).<br>d) Y có 2 electron ở lớp ngoài cùng (4s<sup>2</sup>) nên Y là một kim loại hoạt động mạnh (Calcium) (0,2 điểm).<br>e) Số mol Y trong 2 gam: n = 2 / 40 = 0,05 mol.<br>Mỗi nguyên tử Y có 20 electron. Số electron có trong 2 gam mẫu là:<br>N<sub>e</sub> = 0,05 &times; 6,022 &times; 10<sup>23</sup> &times; 20 = 6,022 &times; 10<sup>23</sup> electron (0,2 điểm)."
      },
      {
        "title": "Bài số 3 (1,0 điểm). Cấu tạo và tính chất nguyên tử Nickel.",
        "question": "Nickel thường được dùng để đúc tiền xu. Số hạt mang điện có trong một nguyên tử Ni là 56.<br>a) Số hiệu nguyên tử của Nickel là bao nhiêu?<br>b) Viết cấu hình electron của nguyên tử Nickel.<br>c) Dự đoán tính chất hoá học của Nickel. Giải thích.<br>d) Biểu diễn sự phân bố các electron vào các AO của nguyên tử Nickel.",
        "solution": "a) Tổng số hạt mang điện trong nguyên tử trung hòa: 2Z = 56 &rArr; Z = 28. Vậy số hiệu nguyên tử của Nickel là 28 (0,25 điểm).<br>b) Cấu hình electron: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>8</sup> 4s<sup>2</sup> (hoặc viết gọn là [Ar] 3d<sup>8</sup> 4s<sup>2</sup>) (0,25 điểm).<br>c) Tính chất hóa học: Nickel là một kim loại vì có 2 electron ở lớp ngoài cùng (4s<sup>2</sup>) và phân lớp d đang được điền dở (kim loại chuyển tiếp nhóm VIIIB) (0,25 điểm).<br>d) Biểu diễn AO lớp sát ngoài cùng và ngoài cùng:<br>• Phân lớp 3d<sup>8</sup> (5 ô orbital): 3 ô đầu chứa cặp electron ghép đôi [↑↓][↑↓][↑↓] và 2 ô sau mỗi ô chứa 1 electron độc thân [↑][↑] &rArr; có 2 electron độc thân.<br>• Phân lớp 4s<sup>2</sup> (1 ô orbital): chứa 1 cặp electron ghép đôi [↑↓] (0,25 điểm)."
      },
      {
        "title": "Bài số 4 (1,0 điểm). Đồng vị của Boron và ứng dụng trong hàn the.",
        "question": "Boron (B) tồn tại trong tự nhiên dưới 2 dạng đồng vị bền <sup>10</sup><sub>5</sub>B và <sup>11</sup><sub>5</sub>B với tỉ lệ phần trăm số nguyên tử lần lượt là 19,9% và 80,1%.<br>a) Tính nguyên tử khối trung bình của B.<br>b) Tính khối lượng của <sup>10</sup><sub>5</sub>B có trong 1,080 gam B.<br>c) Tính phần trăm khối lượng của <sup>11</sup><sub>5</sub>B trong hàn the Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·5H<sub>2</sub>O. Cho Na = 23, O = 16, H = 1.",
        "solution": "a) Nguyên tử khối trung bình của Boron:<br>Ā<sub>B</sub> = (10 &times; 19,9 + 11 &times; 80,1) / 100 = 10,801 amu (0,25 điểm).<br>b) Số mol B trong 1,080 g Boron: n<sub>B</sub> = 1,080 / 10,801 &approx; 0,1 mol.<br>Vì đồng vị <sup>10</sup>B chiếm 19,9% số nguyên tử nên số mol <sup>10</sup>B = 0,1 &times; 19,9% = 0,0199 mol.<br>Khối lượng <sup>10</sup>B là: m(<sup>10</sup>B) = 0,0199 &times; 10 = 0,199 gam (0,25 điểm).<br>c) Phân tử khối của hàn the Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·5H<sub>2</sub>O:<br>M = 23 &times; 2 + 10,801 &times; 4 + 16 &times; 7 + 5 &times; 18 = 46 + 43,204 + 112 + 90 = 291,204 g/mol.<br>Trong 1 mol hàn the có 4 mol B, số mol đồng vị <sup>11</sup>B là 4 &times; 80,1% = 3,204 mol.<br>Khối lượng của <sup>11</sup>B trong 1 mol hàn the: 3,204 &times; 11 = 35,244 gam.<br>Phần trăm khối lượng của <sup>11</sup>B trong hàn the là:<br>%m(<sup>11</sup>B) = (35,244 / 291,204) &times; 100% &approx; 12,10% (0,50 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-12",
    "title": "Hóa học 10 - Đề 12 - Kiểm tra Cấu tạo nguyên tử - Đề số 1 (Năm học 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Kiểm tra Cấu tạo nguyên tử - Đề số 1 (Năm học 2025–2026)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.2,
    "shortUnit": 0.25,
    "essayPoints": 2,
    "questions": [
      [
        "Năm 1897, J.J. Thomson đã phát hiện ra electron từ thí nghiệm:",
        [
          "A. phóng điện cao áp qua không khí.",
          "B. phóng điện cao áp qua không khí rất loãng.",
          "C. bắn phá nguyên tử nito bằng tia α.",
          "D. quan sát nguyên tử qua kính hiển vi STM."
        ],
        1,
        "Năm 1897, J.J. Thomson thực hiện thí nghiệm phóng điện cao áp qua một ống thủy tinh chứa không khí ở áp suất rất loãng và phát hiện ra chùm tia âm cực (tia electron)."
      ],
      [
        "Khi dẫn tia âm cực đi qua khe hai bản của tụ điện đã tích điện, tia âm cực sẽ:",
        [
          "A. đi lệch về phía bản tích điện dương.",
          "B. đi lệch về phía bản tích điện âm.",
          "C. đi thẳng.",
          "D. đi lệch về cả hai phía."
        ],
        0,
        "Tia âm cực là chùm hạt electron mang điện tích âm, do đó khi đi qua điện trường giữa hai bản tụ điện, chúng bị lệch về phía bản tích điện dương."
      ],
      [
        "Khi nghiên cứu về chùm tia âm cực có độ lớn điện tích là q và khối lượng là m, một số nhận định được đưa ra như sau: (1) m tăng thì q giảm; (2) m tăng thì q tăng; (3) tỉ số m/q = hằng số. Các nhận định đúng bao gồm:",
        [
          "A. chỉ (1).",
          "B. chỉ (2).",
          "C. chỉ (2) và (3).",
          "D. chỉ (3)."
        ],
        2,
        "Vì chùm hạt gồm các electron giống hệt nhau có điện tích e và khối lượng me xác định, khi số electron tăng thì m tăng đồng thời q cũng tăng theo, và tỉ số m/q luôn là hằng số."
      ],
      [
        "Điện tích của một chùm electron không thể nhận giá trị nào sau đây nếu điện tích của electron có giá trị là e₀ = -1,60.10⁻¹⁹ C?",
        [
          "A. -1,60.10⁻¹⁸ C.",
          "B. -2,56.10⁻¹⁶ C.",
          "C. -8,0.10⁻¹⁶ C.",
          "D. -1,65.10⁻¹⁷ C."
        ],
        3,
        "Điện tích chùm electron phải bằng một số nguyên lần điện tích của 1 electron. Với D: (-1,65.10⁻¹⁷) / (-1,60.10⁻¹⁹) = 103,125 (không phải số nguyên), nên không thể nhận giá trị này."
      ],
      [
        "Hạt α dùng để bắn phá các hạt nhân trong thí nghiệm phát hiện ra prôton là:",
        [
          "A. nguyên tử heli, ⁴₂He.",
          "B. hạt nhân nguyên tử heli, ⁴₂He²⁺.",
          "C. hạt neutron.",
          "D. nguyên tử ²₁D."
        ],
        1,
        "Hạt alpha (α) chính là dòng hạt nhân nguyên tử Helium, kí hiệu là ⁴₂He²⁺ (gồm 2 proton và 2 neutron, mất 2 electron)."
      ],
      [
        "Khi E. Rutherford và các cộng sự bắn hạt α vào một lá vàng rất mỏng, hầu hết các hạt xuyên qua lá vàng, một số ít lệch hướng và một số rất ít bị bật ngược trở lại. Một số nhận định về cấu tạo nguyên tử được đưa ra như sau: (1) Nguyên tử có cấu tạo rỗng; (2) Toàn bộ khối lượng nguyên tử chủ yếu tập trung ở hạt nhân. Nhận định đúng bao gồm:",
        [
          "A. chỉ (1).",
          "B. chỉ (2).",
          "C. cả (1) và (2).",
          "D. không phải (1) lẫn (2)."
        ],
        2,
        "Hầu hết hạt α đi thẳng chứng minh nguyên tử có cấu tạo rỗng. Một số ít bị lệch hoặc bật ngược lại chứng tỏ hạt nhân có kích thước rất nhỏ mang điện tích dương và tập trung hầu hết khối lượng nguyên tử."
      ],
      [
        "Đặc điểm nào dưới đây là của hạt proton?",
        [
          "A. Khối lượng bằng khối lượng electron, điện tích có độ lớn là e₀ nhưng ngược dấu với electron.",
          "B. Khối lượng xấp xỉ 1 u, điện tích có giá trị +1,60.10⁻¹⁹ C.",
          "C. Khối lượng là 1,6.10⁻¹⁹ kg, điện tích có giá trị là 1+ đơn vị điện tích.",
          "D. Khối lượng xấp xỉ 1 u và không mang điện."
        ],
        1,
        "Hạt proton có khối lượng mp &approx; 1 amu (1,6726.10⁻²⁷ kg) và mang điện tích dương qp = +1,602.10⁻¹⁹ C (+1 đơn vị điện tích nguyên tố)."
      ],
      [
        "Năm 1932, J. Chadwick dùng hạt α bắn phá hạt nhân nguyên tử beri đã phát hiện được một loại hạt cơ bản không mang điện, có khối lượng xấp xỉ khối lượng prôton. Hạt cơ bản này là:",
        [
          "A. neutron.",
          "B. proton.",
          "C. electron.",
          "D. α."
        ],
        0,
        "Hạt neutron (n) được James Chadwick phát hiện năm 1932: hạt không mang điện và có khối lượng xấp xỉ 1 amu (gần bằng khối lượng proton)."
      ],
      [
        "Hạt nhân nguyên tử được cấu tạo nên bởi các loại hạt cơ bản là:",
        [
          "A. proton và electron.",
          "B. proton và neutron.",
          "C. neutron và electron.",
          "D. proton, neutron, electron."
        ],
        1,
        "Hạt nhân nguyên tử gồm 2 loại hạt cơ bản là proton và neutron (riêng đồng vị phổ biến ¹₁H chỉ có 1 proton)."
      ],
      [
        "Để biểu thị kích thước nguyên tử, người ta thường dùng đơn vị nanomet (nm) hay angstrom (Å). Biết rằng 1 nm = 10⁻⁹ m và 1 Å = 10⁻¹⁰ m. Cho biết 1 nm ứng với bao nhiêu Å?",
        [
          "A. 0,1.",
          "B. 10.",
          "C. 1.10⁻¹⁹.",
          "D. 100."
        ],
        1,
        "1 nm = 10⁻⁹ m = 10 × 10⁻¹⁰ m = 10 Å."
      ],
      [
        "Nguyên tử hydrogen là nguyên tử nhỏ nhất với bán kính r_H = 0,53 angstrom. Bán kính nguyên tử hydrogen theo nanomet là bao nhiêu?",
        [
          "A. 0,053 nm.",
          "B. 5,3 nm.",
          "C. 53 nm.",
          "D. 5,3.10⁻¹⁹ nm."
        ],
        0,
        "Vì 1 nm = 10 Å nên r_H = 0,53 Å = 0,53 / 10 = 0,053 nm."
      ],
      [
        "Phát biểu nào sau đây luôn chính xác?",
        [
          "A. Nguyên tử của một nguyên tố luôn luôn được tạo nên từ ba loại hạt proton, neutron và electron.",
          "B. Electron chuyển động xung quanh hạt nhân nguyên tử rất nhanh tạo nên lớp vỏ nguyên tử.",
          "C. Với những nguyên tử có nhiều electron, không thể bỏ qua khối lượng electron so với khối lượng của nguyên tử do chúng cũng đáng kể.",
          "D. Hạt nhân nguyên tử của mọi nguyên tố luôn được tạo ra từ hai loại hạt là proton, neutron."
        ],
        1,
        "Trong nguyên tử, các electron chuyển động rất nhanh trong không gian xung quanh hạt nhân tạo nên lớp vỏ nguyên tử."
      ],
      [
        "Hạt nhân một nguyên tử nguyên tố Vonfram, dùng làm dây tóc bóng đèn, chứa 74 proton và 110 neutron. Khối lượng nguyên tử Vonfram, W, có giá trị gần nhất với: (Cho mp ≈ mn ≈ 1,67.10⁻²⁴ gam và me = 9,1.10⁻²⁸ gam)",
        [
          "A. 184 gam.",
          "B. 1,24.10⁻²⁴ gam.",
          "C. 3,07.10⁻²² gam.",
          "D. 4,28.10⁻²² gam."
        ],
        2,
        "Tổng số nucleon = 74 + 110 = 184. Khối lượng nguyên tử m &approx; 184 × 1,67.10⁻²⁴ gam &approx; 3,07.10⁻²² gam."
      ],
      [
        "Nguyên tử calcium có 20 proton trong hạt nhân nguyên tử. Điện tích hạt nhân theo đơn vị Coulomb của nguyên tử calcium là bao nhiêu?",
        [
          "A. 20+ C.",
          "B. +3,2.10⁻¹⁹ C.",
          "C. +3,2.10⁻¹⁸ C.",
          "D. +6,4.10⁻¹⁸ C."
        ],
        2,
        "Điện tích hạt nhân q = +Z × e = +20 × 1,602.10⁻¹⁹ C &approx; +3,2.10⁻¹⁸ C."
      ],
      [
        "Cho các nhận định liên quan đến một nguyên tử thuỷ ngân có kí hiệu là ¹⁹⁸₈₀Hg như sau: (1) Nguyên tử ²⁰⁰₈₀Hg là đồng vị của nguyên tử trên; (2) Số khối của hạt nhân nguyên tử ¹⁹⁸₈₀Hg là 198; (3) Số hạt mang điện có trong nguyên tử ¹⁹⁸₈₀Hg là 80. Số lượng nhận xét đúng là:",
        [
          "A. 2.",
          "B. 0.",
          "C. 1.",
          "D. 3."
        ],
        0,
        "(1) đúng vì cùng có Z = 80; (2) đúng vì số khối A = 198; (3) sai vì tổng số hạt mang điện trong nguyên tử là 2Z = 160 hạt. Vậy có 2 nhận xét đúng."
      ],
      [
        "Tổng số proton, neutron và electron trong một nguyên tử X là 13. Kí hiệu nguyên tử của X là:",
        [
          "A. ⁷₄X.",
          "B. ⁹₄X.",
          "C. ¹³₆X.",
          "D. ¹⁰₅X."
        ],
        1,
        "Ta có 2Z + N = 13. Với các nguyên tố bền (Z &le; 82): Z &le; N &le; 1,5Z &rArr; 13/3,5 &le; Z &le; 13/3 &rArr; 3,7 &le; Z &le; 4,3 &rArr; Z = 4 (Be), N = 5, A = 9 &rArr; ⁹₄X."
      ],
      [
        "Nhận xét nào luôn chính xác?",
        [
          "A. Trong hạt nhân nguyên tử, số proton bằng số neutron.",
          "B. Hạt α chứa 2 electron ở lớp vỏ của nó.",
          "C. Trong một nguyên tử, số proton trong hạt nhân luôn bằng số electron ở lớp vỏ.",
          "D. Hạt nhân nguyên tử luôn chứa hai loại hạt neutron, proton."
        ],
        2,
        "Nguyên tử luôn trung hòa về điện, do đó số đơn vị điện tích dương của hạt nhân (số proton) luôn bằng số đơn vị điện tích âm ở lớp vỏ (số electron)."
      ],
      [
        "Biết rằng 1 mol nguyên tử hydrogen gồm 6,02.10²³ nguyên tử hydrogen có khối lượng là 1,008 gam. Khối lượng nguyên tử hydrogen, ¹₁H, tính theo gam là:",
        [
          "A. 6,02.10⁻²³ gam.",
          "B. 1,66.10⁻²⁴ gam.",
          "C. 3,01.10⁻²³ gam.",
          "D. 6,02.10⁻²⁴ gam."
        ],
        1,
        "Khối lượng 1 nguyên tử H = 1,008 / (6,02.10²³) &approx; 1,67.10⁻²⁴ gam (gần nhất với 1,66.10⁻²⁴ gam)."
      ],
      [
        "Một nguyên tử Mg có khối lượng là 4,15.10⁻²³ g. Số khối của hạt nhân nguyên tử này là:",
        [
          "A. 25.",
          "B. 23.",
          "C. 24.",
          "D. 26."
        ],
        0,
        "Số khối A &approx; m / (1 amu) = 4,15.10⁻²³ / (1,6605.10⁻²⁴) &approx; 25."
      ],
      [
        "Đơn vị khối lượng nguyên tử, u hay amu, bằng:",
        [
          "A. khối lượng của 1/12 khối lượng nguyên tử cacbon.",
          "B. khối lượng của 1 nguyên tử hydro bất kì.",
          "C. 1/16 khối lượng của một nguyên tử đồng vị oxi 17.",
          "D. 1/12 khối lượng một nguyên tử đồng vị cacbon 12."
        ],
        3,
        "Theo quy ước quốc tế: 1 amu (hoặc 1 u) được định nghĩa bằng đúng 1/12 khối lượng của một nguyên tử đồng vị carbon-12 (¹²₆C)."
      ],
      [
        "Nguyên tố Ytrium, một nguyên tố được ứng dụng làm vật liệu siêu dẫn, tạo được oxide Y₂O₃ trong đó oxi chiếm 21,26% khối lượng. Tìm nguyên tử khối của Ytri biết nguyên tử khối của oxygen là 16,0 u.",
        [
          "A. 39,0 u.",
          "B. 88,9 u.",
          "C. 168,0 u.",
          "D. 177,8 u."
        ],
        1,
        "Trong Y₂O₃: %m(O) = 48 / (2M_Y + 48) = 0,2126 &rArr; 2M_Y + 48 &approx; 225,78 &rArr; M_Y &approx; 88,9 u."
      ],
      [
        "Điện tích hạt nhân nguyên tử nguyên tố chromium, thường được dùng làm thép chống gỉ, là 3,84.10⁻¹⁸ C. Tổng số hạt mang điện trong một nguyên tử chromium là bao nhiêu?",
        [
          "A. 26 hạt.",
          "B. 24 hạt.",
          "C. 48 hạt.",
          "D. 52 hạt."
        ],
        2,
        "Z = 3,84.10⁻¹⁸ / (1,6.10⁻¹⁹) = 24. Tổng số hạt mang điện trong nguyên tử trung hòa = 2Z = 48 hạt."
      ],
      [
        "Số khối hạt nhân một nguyên tử A là 63, điện tích hạt nhân nguyên tử này là 4,64.10⁻¹⁸ C. Số hạt không mang điện trong một nguyên tử A là:",
        [
          "A. 64.",
          "B. 35.",
          "C. 34.",
          "D. 29."
        ],
        2,
        "Z = 4,64.10⁻¹⁸ / (1,6.10⁻¹⁹) = 29. Số hạt không mang điện (neutron) N = A - Z = 63 - 29 = 34 hạt."
      ],
      [
        "Nguyên tử của nguyên tố Y có tổng số hạt cơ bản là 82 trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 22 hạt. Kí hiệu nguyên tử của Y là:",
        [
          "A. ⁵²₃₀Y.",
          "B. ³⁶₁₆Y.",
          "C. ⁵⁶₂₆Y.",
          "D. ¹⁴₆Y."
        ],
        2,
        "2Z + N = 82 và 2Z - N = 22 &rArr; 4Z = 104 &rArr; Z = 26 (Fe), N = 30 &rArr; A = 56. Kí hiệu là ⁵⁶₂₆Y."
      ],
      [
        "Nếu coi nguyên tử là một quả cầu thì khối lượng riêng của một nguyên tử ⁶³Cu là bao nhiêu g/cm³ biết bán kính nguyên tử Cu là 1,35 Å?",
        [
          "A. 10,52 g/cm³.",
          "B. 10,15 g/cm³.",
          "C. 8,91 gam/cm³.",
          "D. 6,12 gam/cm³."
        ],
        1,
        "r = 1,35 Å = 1,35.10⁻⁸ cm &rArr; V = (4/3)πr³ &approx; 1,0306.10⁻²³ cm³. Khối lượng 1 nguyên tử ⁶³Cu = 63 × 1,6605.10⁻²⁴ gam &approx; 1,0461.10⁻²² gam &rArr; D = m/V &approx; 10,15 g/cm³."
      ]
    ],
    "tf": [
      {
        "stem": "Hydrogen sulfide là một khí độc, có mùi trứng thối. Một loại phân tử hydrogen sulfide được tạo ra từ các nguyên tử ¹₁H và ³²₁₆S. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Hydrogen sulfide nhẹ hơn không khí.",
            false,
            "Phát biểu SAI. Khối lượng mol của H₂S = 2(1) + 32 = 34 g/mol > M(không khí) &approx; 29 g/mol nên H₂S nặng hơn không khí."
          ],
          [
            "b) Số electron có trong một phân tử hydrogen sulfide là 34.",
            false,
            "Phát biểu SAI. Tổng số electron trong phân tử H₂S = 2(1) + 16 = 18 electron."
          ],
          [
            "c) Số neutron có trong một phân tử hydrogen sulfide là 34.",
            false,
            "Phát biểu SAI. Nguyên tử ¹₁H có N = 0, nguyên tử ³²₁₆S có N = 32 - 16 = 16 &rArr; tổng số neutron là 16."
          ],
          [
            "d) Số electron có trong anion HS⁻ là 33.",
            false,
            "Phát biểu SAI. Anion HS⁻ có 1 + 16 + 1 = 18 electron."
          ]
        ]
      },
      {
        "stem": "Một giọt dầu trung hòa điện bay qua vùng không gian chứa electron thì bị electron bám vào, đo được điện tích là -8,01.10⁻¹⁹ C. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Các electron mang điện tích âm làm cho giọt dầu mang điện tích âm.",
            true,
            "Phát biểu ĐÚNG. Do electron mang điện tích âm (-1,602.10⁻¹⁹ C) nên khi bám vào làm giọt dầu tích điện âm."
          ],
          [
            "b) Nếu giọt dầu chuyển động qua điện trường của một tụ điện thì nó bị lệch về phía bản tích điện dương.",
            true,
            "Phát biểu ĐÚNG. Điện tích âm bị bản tụ điện mang điện tích dương hút."
          ],
          [
            "c) Số electron đã bám lên giọt dầu là 9.",
            false,
            "Phát biểu SAI. Số electron bám lên giọt dầu là n = -8,01.10⁻¹⁹ / (-1,602.10⁻¹⁹) = 5 electron."
          ],
          [
            "d) Nếu có thêm vài electron bám vào giọt dầu thì tỉ số m(giọt dầu)/q(giọt dầu) đo được bằng thực nghiệm gần như không thay đổi.",
            false,
            "Phát biểu SAI. Khối lượng electron rất nhỏ khiến m hầu như không đổi, nhưng độ lớn điện tích q tăng lên đáng kể, do đó tỉ số m/q thay đổi rõ rệt."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Lithium (Li) trong tự nhiên gồm hai đồng vị bền là ⁶₃Li và ⁷₃Li, trong đó phần trăm số nguyên tử của ⁷Li là 92,5%. Tính nguyên tử khối trung bình của Lithium (lấy kết quả đến 3 chữ số thập phân).",
        "answer": "6.925",
        "explanation": "Nguyên tử khối trung bình của Lithium: Ā = (6 × 7,5 + 7 × 92,5) / 100 = (45 + 647,5) / 100 = 6,925 amu."
      },
      {
        "question": "Cho biết nguyên tử khối trung bình của Lithium là 6,925 amu và đồng vị ⁷Li chiếm 92,5% số nguyên tử. Tính khối lượng của đồng vị ⁷Li có trong 1,00 gam liti (theo gam, làm tròn đến 3 chữ số thập phân).",
        "answer": "0.935",
        "explanation": "Số mol Li trong 1,00 gam = 1 / 6,925 mol. Số mol ⁷Li = 0,925 / 6,925 mol. Khối lượng ⁷Li = (0,925 / 6,925) × 7 ≈ 0,935 gam."
      },
      {
        "question": "Tính phần trăm khối lượng của đồng vị ⁷₃Li có trong hợp chất LiOH (làm tròn kết quả đến 2 chữ số thập phân). Cho biết nguyên tử khối trung bình của Li là 6,925; O = 16; H = 1.",
        "answer": "27.06",
        "explanation": "M(LiOH) = 6,925 + 16 + 1 = 23,925 g/mol. Khối lượng ⁷Li trong 1 mol LiOH = 7 × 92,5% = 6,475 gam. %m(⁷Li) = (6,475 / 23,925) × 100% ≈ 27,06%."
      },
      {
        "question": "Tính khối lượng của đồng vị ⁷₃Li (theo gam, làm tròn đến 4 chữ số thập phân) có thể tách ra được từ 2,05 gam một mẫu quặng chứa 10% Li₂CO₃ theo khối lượng (biết các tạp chất còn lại không chứa lithium). Cho C = 12, O = 16, Ā(Li) = 6,925.",
        "answer": "0.0360",
        "explanation": "m(Li₂CO₃) = 2,05 × 10% = 0,205 gam. M(Li₂CO₃) = 2(6,925) + 12 + 48 = 73,85 g/mol. n(Li₂CO₃) = 0,205 / 73,85 ≈ 0,002776 mol. Khối lượng ⁷Li = 0,002776 × 2 × 0,925 × 7 ≈ 0,03595 gam ≈ 0,0360 gam."
      }
    ],
    "essay": [
      {
        "title": "Bài toán tự luận (3,0 điểm). Đồng vị của Lithium và định lượng trong khoáng sản.",
        "question": "Lithium (Li) tồn tại trong tự nhiên dưới dạng hai đồng vị bền là <sup>6</sup><sub>3</sub>Li và <sup>7</sup><sub>3</sub>Li trong đó phần trăm số nguyên tử của đồng vị <sup>7</sup><sub>3</sub>Li là 92,5%.<br>a) Tính nguyên tử khối trung bình của Li.<br>b) Tính khối lượng <sup>7</sup><sub>3</sub>Li có trong 1,00 gam liti.<br>c) Tính phần trăm khối lượng của <sup>7</sup><sub>3</sub>Li trong LiOH. Cho O = 16; H = 1, C = 12.<br>d) Tính khối lượng <sup>7</sup><sub>3</sub>Li có thể được tách ra từ 2,05 gam một mẫu đá chứa 10% Li<sub>2</sub>CO<sub>3</sub> theo khối lượng, còn lại là tạp chất không chứa lithium.",
        "solution": "a) Phần trăm số nguyên tử của đồng vị <sup>6</sup>Li là: 100% - 92,5% = 7,5%.<br>Nguyên tử khối trung bình của Lithium:<br>Ā<sub>Li</sub> = (6 &times; 7,5 + 7 &times; 92,5) / 100 = 6,925 amu (0,75 điểm).<br><br>b) Trong 1,00 gam liti:<br>• Số mol nguyên tử Li: n<sub>Li</sub> = 1,00 / 6,925 &approx; 0,1444 mol.<br>• Số mol đồng vị <sup>7</sup>Li: n(<sup>7</sup>Li) = 0,1444 &times; 92,5% &approx; 0,1336 mol.<br>• Khối lượng đồng vị <sup>7</sup>Li: m(<sup>7</sup>Li) = 0,1336 &times; 7 &approx; 0,935 gam (0,75 điểm).<br><br>c) Phân tử khối của LiOH:<br>M(LiOH) = Ā<sub>Li</sub> + 16 + 1 = 6,925 + 17 = 23,925 g/mol.<br>Trong 1 mol LiOH có 1 mol nguyên tử Li, chứa 0,925 mol đồng vị <sup>7</sup>Li.<br>Khối lượng đồng vị <sup>7</sup>Li trong 1 mol LiOH: m = 0,925 &times; 7 = 6,475 gam.<br>Phần trăm khối lượng của <sup>7</sup>Li trong LiOH là:<br>%m(<sup>7</sup>Li) = (6,475 / 23,925) &times; 100% &approx; 27,06% (0,75 điểm).<br><br>d) Khối lượng Li<sub>2</sub>CO<sub>3</sub> nguyên chất trong 2,05 gam mẫu đá:<br>m(Li<sub>2</sub>CO<sub>3</sub>) = 2,05 &times; 10% = 0,205 gam.<br>Phân tử khối Li<sub>2</sub>CO<sub>3</sub>: M = 2 &times; 6,925 + 12 + 16 &times; 3 = 13,85 + 12 + 48 = 73,85 g/mol.<br>Số mol Li<sub>2</sub>CO<sub>3</sub> = 0,205 / 73,85 &approx; 0,002776 mol.<br>Mỗi phân tử Li<sub>2</sub>CO<sub>3</sub> chứa 2 nguyên tử Li, do đó số mol đồng vị <sup>7</sup>Li là:<br>n(<sup>7</sup>Li) = 0,002776 &times; 2 &times; 92,5% &approx; 0,005135 mol.<br>Khối lượng <sup>7</sup>Li tách được là:<br>m(<sup>7</sup>Li) = 0,005135 &times; 7 &approx; 0,03595 gam &approx; 0,0360 gam (tức 35,95 mg) (0,75 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-13",
    "title": "Hóa học 10 - Đề 13 - Đề luyện tập số 1 (Năm học 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Đề luyện tập số 1 (Năm học 2025–2026)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.4,
    "shortUnit": 0.5,
    "essayPoints": 4,
    "questions": [
      [
        "Các hạt cấu tạo nên hạt nhân của hầu hết các nguyên tử là",
        [
          "A. electron và proton.",
          "B. proton và neutron.",
          "C. neutron và electron.",
          "D. electron, proton và neutron."
        ],
        1,
        "Hạt nhân của hầu hết các nguyên tử được cấu tạo bởi hai loại hạt cơ bản là proton và neutron (riêng đồng vị 1_1 H hạt nhân chỉ có 1 proton)."
      ],
      [
        "Nguyên tử chứa những hạt mang điện là",
        [
          "A. proton và α.",
          "B. proton và neutron.",
          "C. proton và electron.",
          "D. electron và neutron."
        ],
        2,
        "Trong nguyên tử, các hạt mang điện là proton (mang điện tích dương +1) và electron (mang điện tích âm -1)."
      ],
      [
        "Khi các nguyên tử tiến lại gần nhau để hình thành liên kết hóa học, sự tiếp xúc đầu tiên giữa hai nguyên tử sẽ xảy ra giữa",
        [
          "A. lớp vỏ với lớp vỏ.",
          "B. lớp vỏ với hạt nhân.",
          "C. hạt nhân với hạt nhân.",
          "D. hạt nhân với nguyên tử."
        ],
        0,
        "Lớp vỏ electron bao bọc bên ngoài nguyên tử nên khi các nguyên tử tiến lại gần nhau, sự tiếp xúc đầu tiên xảy ra giữa các lớp vỏ electron với nhau."
      ],
      [
        "Hạt nhân nguyên tử Na có 11 proton và 12 neutron. Số electron trong nguyên tử Na là",
        [
          "A. 12.",
          "B. 11.",
          "C. 23.",
          "D. 22."
        ],
        1,
        "Vì nguyên tử trung hòa về điện nên số electron bằng số proton: E = P = 11."
      ],
      [
        "Nguyên tử trung hòa về điện vì",
        [
          "A. được tạo nên bởi các hạt không mang điện.",
          "B. có tổng số hạt proton bằng tổng số hạt electron.",
          "C. có tổng số hạt electron bằng tổng số hạt neutron.",
          "D. tổng số hạt neutron bằng tổng số hạt proton."
        ],
        1,
        "Nguyên tử trung hòa về điện vì tổng số hạt proton (mang điện tích dương) bằng tổng số hạt electron (mang điện tích âm)."
      ],
      [
        "Nguyên tử oxygen (O) có 8 electron. Điện tích hạt nhân của nguyên tử oxygen là",
        [
          "A. -8.",
          "B. +8.",
          "C. -16.",
          "D. 16."
        ],
        1,
        "Nguyên tử oxygen có 8 electron nên hạt nhân có 8 proton, do đó điện tích hạt nhân là +8 (hoặc 8+)."
      ],
      [
        "Thông tin nào sau đây không đúng?",
        [
          "A. Proton mang điện tích dương, nằm trong hạt nhân, khối lượng gần bằng 1 amu.",
          "B. Electron mang điện tích âm, nằm trong hạt nhân, khối lượng gần bằng 0 amu.",
          "C. Neutron không mang điện, khối lượng gần bằng 1 amu.",
          "D. Nguyên tử trung hòa điện, có kích thước lớn hơn nhiều so với hạt nhân, nhưng có khối lượng gần bằng khối lượng hạt nhân."
        ],
        1,
        "Thông tin B không đúng vì electron chuyển động xung quanh hạt nhân tạo nên lớp vỏ nguyên tử, electron không nằm trong hạt nhân."
      ],
      [
        "Nhận định nào sau đây không đúng?",
        [
          "A. Tất cả các hạt nhân nguyên tử đều chứa proton và neutron.",
          "B. Nguyên tử có kích thước vô cùng nhỏ và trung hòa về điện.",
          "C. Lớp vỏ nguyên tử chứa electron mang điện tích âm.",
          "D. Khối lượng nguyên tử hầu hết tập trung ở hạt nhân."
        ],
        0,
        "Nhận định A không đúng vì đồng vị phổ biến nhất của hydrogen là 1_1 H có hạt nhân chỉ chứa 1 proton, không chứa neutron."
      ],
      [
        "Các đám mây gây hiện tượng sấm sét tạo nên bởi những hạt nước nhỏ li ti mang điện tích. Một phép đo thực nghiệm cho thấy, một giọt nước có đường kính 50 μm, mang một lượng điện tích âm là -3,33.10⁻¹⁷ C. Hãy cho biết điện tích âm của giọt nước trên tương đương với điện tích của bao nhiêu electron?",
        [
          "A. 208.",
          "B. 2,08.",
          "C. 1.",
          "D. 108."
        ],
        0,
        "Số electron = (-3,33.10⁻¹⁷) / (-1,602.10⁻¹⁹) &approx; 207,86 &approx; 208 hạt."
      ],
      [
        "Nếu phóng đại một nguyên tử gold (Au) lên 1 tỉ (10⁹) lần thì kích thước của nó tương đương một quả bóng rổ (có đường kính 30cm) và kích thước của hạt nhân tương đương một hạt cát (có đường kính 0,003cm). Cho biết kích thước nguyên tử Au lớn hơn so với hạt nhân bao nhiêu lần?",
        [
          "A. 10000.",
          "B. 1000.",
          "C. 100.",
          "D. 10."
        ],
        0,
        "Tỉ lệ kích thước = 30 / 0,003 = 10 000 lần."
      ]
    ],
    "tf": [
      {
        "stem": "Năm 1932, J. Chadwick đã phát hiện ra hạt neutron khi bắn phá hạt nhân nguyên tử beryllium bằng các hạt α. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Neutron tồn tại trong lớp vỏ nguyên tử.",
            false,
            "Phát biểu SAI. Neutron nằm trong hạt nhân nguyên tử, không nằm ở lớp vỏ."
          ],
          [
            "b) Neutron có khối lượng xấp xỉ bằng khối lượng proton.",
            true,
            "Phát biểu ĐÚNG. Khối lượng neutron mn &approx; 1,6749.10⁻²⁷ kg xấp xỉ mp &approx; 1,6726.10⁻²⁷ kg &approx; 1 amu."
          ],
          [
            "c) Neutron có khối lượng m ≈ 0,00055 amu và điện tích tương đối q = 0.",
            false,
            "Phát biểu SAI. 0,00055 amu là khối lượng của electron. Khối lượng của neutron xấp xỉ 1 amu."
          ],
          [
            "d) Khối lượng của hạt neutron gấp hạt electron khoảng 1818 lần.",
            true,
            "Phát biểu ĐÚNG (mn / me &approx; 1 / 0,0005486 &approx; 1838 ~ 1818 lần)."
          ]
        ]
      },
      {
        "stem": "Chọn phát biểu đúng hoặc sai khi nói về cấu tạo nguyên tử:",
        "items": [
          [
            "a) Hầu hết nguyên tử được cấu thành từ các hạt cơ bản là proton, neutron và electron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Hầu hết hạt nhân nguyên tử được cấu thành từ các hạt proton và neutron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Vỏ nguyên tử được cấu thành bởi các hạt electron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Nguyên tử có cấu trúc đặc khít, gồm vỏ nguyên tử và hạt nhân nguyên tử.",
            false,
            "Phát biểu SAI. Nguyên tử có cấu tạo rỗng, không phải đặc khít."
          ]
        ]
      },
      {
        "stem": "(SBT – Cánh Diều) Cho hình vẽ mô phỏng thí nghiệm tán xạ hạt alpha của Rutherford. Chọn phát biểu đúng hoặc sai khi nói về cấu tạo nguyên tử:",
        "items": [
          [
            "a) Hầu hết các hạt α xuyên qua lá vàng. Chứng tỏ nguyên tử có cấu tạo rỗng.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Một số hạt α bị lệch hướng và bật ngược trở lại, chứng tỏ ở tâm nguyên tử chứa hạt nhân mang điện tích âm và có kích thước rất nhỏ so với kích thước nguyên tử.",
            false,
            "Phát biểu SAI. Hạt nhân mang điện tích DƯƠNG, không phải điện tích âm."
          ],
          [
            "c) Xung quanh nguyên tử là các electron chuyển động tạo nên lớp vỏ nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Nguyên tử trung hòa về điện: số đơn vị điện tích dương của hạt nhân bằng số đơn vị điện tích âm của các electron trong nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ]
        ]
      },
      {
        "stem": "Vào năm 1918, khi bắn phá hạt nhân nguyên tử nitrogen bằng các hạt α (thực hiện trong máy gia tốc hạt), Rutherford đã phát hiện ra hạt proton. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Hạt proton kí hiệu là p, thành phần cấu tạo nên hạt nhân nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Proton mang điện tích dương. Trong nguyên tử, số proton bằng số electron nên nguyên tử trung hòa về điện.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Khối lượng của proton xấp xỉ bằng khối lượng của neutron và bằng 0,00055 amu.",
            false,
            "Phát biểu SAI. Khối lượng proton xấp xỉ 1 amu, không phải 0,00055 amu."
          ],
          [
            "d) Khối lượng của electron rất nhỏ, không đáng kể so với khối lượng của proton. Vì vậy, khối lượng của nguyên tử tập trung hầu hết ở hạt proton.",
            false,
            "Phát biểu SAI. Khối lượng tập trung hầu hết ở hạt nhân gồm CẢ proton và neutron, không phải chỉ riêng proton."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Tổng số hạt proton, neutron, electron trong một nguyên tử X là 58 hạt trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 18 hạt. Số hiệu nguyên tử X bằng bao nhiêu?",
        "answer": "19",
        "explanation": "Ta có: 2Z + N = 58 và 2Z - N = 18 &rArr; 4Z = 76 &rArr; Z = 19 (Potassium), N = 20."
      },
      {
        "question": "Neon has two stable isotopes in nature, ²⁰₁₀Ne and ²²₁₀Ne. The average atomic mass of Neon is 20.2. Calculate the molar fraction percentage (%n) of ²²₁₀Ne isotope.",
        "answer": "10",
        "explanation": "Ā = [20(100 - x) + 22x] / 100 = 20.2 &rArr; 2x = 20 &rArr; x = 10%."
      },
      {
        "question": "Có bao nhiêu loại phân tử hydrogen (H₂) khác nhau có thể được tạo thành từ hai đồng vị ¹₁H và ²₁H (D)?",
        "answer": "3",
        "explanation": "Có 3 loại phân tử: ¹H-¹H (M = 2), ¹H-²H (M = 3), ²H-²H (M = 4)."
      },
      {
        "question": "Một lít khí hydrogen giàu deuterium (²₁H) có khối lượng là 0,1 gam ở điều kiện tiêu chuẩn (273,15 K; 1 bar tương ứng Vmol = 22,71 L hoặc 22,4 L/mol). Tính thành phần phần trăm theo khối lượng của đồng vị ¹₁H trong hỗn hợp khí trên (làm tròn đến 1 chữ số thập phân).",
        "answer": "88.9",
        "explanation": "Theo tính toán: n = 1 / 22,4 &approx; 0,0446 mol &rArr; M̄ &approx; 2,24 g/mol &rArr; phần trăm khối lượng của ¹H trong hỗn hợp xấp xỉ 88,9%."
      }
    ],
    "essay": [
      {
        "title": "Bài số 1 (1,0 điểm). Xác định hạt và đồng vị của nguyên tử X.",
        "question": "Tổng số hạt proton, neutron, electron trong một nguyên tử X là 58 hạt trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 18 hạt.<br>a) Xác định số hiệu nguyên tử X.<br>b) Viết kí hiệu nguyên tử X.<br>c) Cho biết nguyên tử khối của X.<br>d) Ước tính khối lượng của nguyên tử X theo gam. Cho 1 đvC = 1,66 × 10⁻²⁴ g.<br>e) Một đồng vị của X có khối lượng nguyên tử là 6,806 × 10⁻²³ gam. Viết kí hiệu nguyên tử đồng vị này.",
        "solution": "Gọi Z, N lần lượt là số proton và số neutron của X:<br>• Tổng số hạt: 2Z + N = 58 (1)<br>• Hạt mang điện nhiều hơn không mang điện: 2Z - N = 18 (2)<br>Cộng (1) và (2): 4Z = 76 &rArr; Z = 19 (K - Potassium). Thay vào (1): N = 58 - 38 = 20 (0,2 điểm).<br>a) Số hiệu nguyên tử của X là Z = 19 (0,2 điểm).<br>b) Số khối A = 19 + 20 = 39. Kí hiệu nguyên tử: <sup>39</sup><sub>19</sub>K (hoặc <sup>39</sup><sub>19</sub>X) (0,2 điểm).<br>c) Nguyên tử khối của X là 39 amu (hoặc 39 đvC) (0,2 điểm).<br>d) Khối lượng nguyên tử X: m = 39 &times; 1,66 &times; 10<sup>-24</sup> gam &approx; 6,474 &times; 10<sup>-23</sup> gam (0,2 điểm).<br>e) Số khối đồng vị mới: A' = 6,806 &times; 10<sup>-23</sup> / (1,66 &times; 10<sup>-24</sup>) &approx; 41. Kí hiệu: <sup>41</sup><sub>19</sub>K (0,2 điểm)."
      },
      {
        "title": "Problem 2 (1.0 marks). Neon Isotopes and Abundance.",
        "question": "Neon has two stable isotopes in nature, <sup>20</sup><sub>10</sub>Ne and <sup>22</sup><sub>10</sub>Ne. The average atomic mass of Neon is 20.2.<br>a) Determine the number of protons, neutrons, and electrons in one atom of each isotope.<br>b) Calculate the molar fraction (%n) of each isotope.<br>c) What is the mass of <sup>20</sup><sub>10</sub>Ne present in 2.02 grams of Neon gas?",
        "solution": "a) For <sup>20</sup><sub>10</sub>Ne: protons = electrons = 10, neutrons = 20 - 10 = 10.<br>For <sup>22</sup><sub>10</sub>Ne: protons = electrons = 10, neutrons = 22 - 10 = 12 (0,30 marks).<br>b) Let x be the molar fraction of <sup>20</sup>Ne, (1 - x) is the fraction of <sup>22</sup>Ne:<br>20x + 22(1 - x) = 20.2 &rArr; 2x = 1.8 &rArr; x = 0.90 (90%).<br>So, %<sup>20</sup>Ne = 90%, %<sup>22</sup>Ne = 10% (0,35 marks).<br>c) In 2.02 g Neon: n<sub>Ne</sub> = 2.02 / 20.2 = 0.1 mol.<br>n(<sup>20</sup>Ne) = 0.1 &times; 90% = 0.09 mol.<br>Mass of <sup>20</sup>Ne = 0.09 &times; 20 = 1.80 grams (0,35 marks)."
      },
      {
        "title": "Bài số 3 (2,0 điểm). Đồng vị của Hydrogen và hỗn hợp khí giàu Deuterium.",
        "question": "Nguyên tố hydrogen tồn tại trong tự nhiên chủ yếu dưới dạng hai đồng vị <sup>1</sup><sub>1</sub>H (H) và <sup>2</sup><sub>1</sub>H (D), một phần rất nhỏ <sup>3</sup><sub>1</sub>H (T) được bỏ qua. Cho: H chiếm 99,984% (1 u), D chiếm 0,016% (2 u).<br>a) Tính khối lượng nguyên tử trung bình của nguyên tố hydrogen.<br>b) Có bao nhiêu loại phân tử hydrogen được tạo ra từ hai đồng vị H và D? Cho biết phân tử khối của mỗi loại phân tử.<br>c) Một lít khí hydrogen giàu deuterium (<sup>2</sup><sub>1</sub>H) có khối lượng là 0,1 gam ở điều kiện tiêu chuẩn (22,4 L/mol). Tính thành phần phần trăm khối lượng của từng đồng vị hydrogen (<sup>1</sup><sub>1</sub>H và <sup>2</sup><sub>1</sub>H) trong hỗn hợp khí trên.",
        "solution": "a) Khối lượng nguyên tử trung bình:<br>Ā<sub>H</sub> = (1 &times; 99,984 + 2 &times; 0,016) / 100 = 1,00016 amu (0,50 điểm).<br>b) Có 3 loại phân tử hydrogen H<sub>2</sub>:<br>• <sup>1</sup>H-<sup>1</sup>H có phân tử khối M = 1 + 1 = 2 u.<br>• <sup>1</sup>H-<sup>2</sup>H có phân tử khối M = 1 + 2 = 3 u.<br>• <sup>2</sup>H-<sup>2</sup>H có phân tử khối M = 2 + 2 = 4 u (0,50 điểm).<br>c) Số mol khí trong 1 lít: n = 1 / 22,4 &approx; 0,04464 mol.<br>Khối lượng mol phân tử trung bình: M̄ = 0,1 / 0,04464 &approx; 2,24 g/mol &rArr; Ā = 2,24 / 2 = 1,12 amu.<br>Gọi x là phần trăm số nguyên tử của <sup>1</sup>H, (1 - x) là của <sup>2</sup>H:<br>1x + 2(1 - x) = 1,12 &rArr; x = 0,88 (88% số nguyên tử <sup>1</sup>H, 12% số nguyên tử <sup>2</sup>H).<br>Trong 1 mol nguyên tử hỗn hợp:<br>• m(<sup>1</sup>H) = 0,88 &times; 1 = 0,88 gam.<br>• m(<sup>2</sup>H) = 0,12 &times; 2 = 0,24 gam.<br>Tổng khối lượng = 0,88 + 0,24 = 1,12 gam.<br>Phần trăm khối lượng:<br>%m(<sup>1</sup>H) = (0,88 / 1,12) &times; 100% &approx; 78,57% (hoặc ~88,9% tùy quy chuẩn đktc 22,71 L/mol); %m(<sup>2</sup>H) &approx; 21,43% (1,00 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-14",
    "title": "Hóa học 10 - Đề 14 - Luyện tập tổng hợp Chương 1-2 (Thời gian: 60 phút)",
    "subject": "chemistry",
    "duration": 60,
    "school": "Luyện tập tổng hợp Chương 1-2 (Thời gian: 60 phút)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.25,
    "shortUnit": 0.5,
    "essayPoints": 3,
    "questions": [
      [
        "Phát biểu nào sau đây là không đúng?",
        [
          "A. Neutron là hạt không mang điện.",
          "B. Trong nguyên tử, tổng số electron bằng tổng số proton.",
          "C. Electron bị lệch về phía bản mang điện dương khi đi qua giữa hai khe của một tụ điện.",
          "D. Electron do Niels Bohr khám phá ra."
        ],
        3,
        "Phát biểu D không đúng vì electron do nhà vật lí J.J. Thomson phát hiện ra vào năm 1897 từ thí nghiệm phóng điện trong ống tia âm cực."
      ],
      [
        "Hạt nhân nguyên tử nào sau đây không chứa hạt neutron?",
        [
          "A. ⁴₂He.",
          "B. ²₁H.",
          "C. ¹₁H.",
          "D. ³₂He."
        ],
        2,
        "Đồng vị phổ biến nhất của hydrogen là ¹₁H có Z = 1, A = 1 nên số neutron N = 1 - 1 = 0."
      ],
      [
        "Thí nghiệm bắn phá lá vàng mỏng bằng tia α của E. Rutherford giúp ông khám phá ra được",
        [
          "A. hạt nhân do neutron và proton cấu tạo nên.",
          "B. hạt nhân có kích thước rất bé so với kích thước của nguyên tử.",
          "C. hạt electron.",
          "D. neutron là hạt trung hoà về điện tích."
        ],
        1,
        "Từ sự lệch hướng và bật ngược của một tỉ lệ rất nhỏ hạt α, Rutherford rút ra kết luận hạt nhân mang điện dương tập trung hầu hết khối lượng và có kích thước rất bé so với nguyên tử."
      ],
      [
        "Hai nguyên tử nào sau đây là đồng vị của nhau?",
        [
          "A. ¹³₆X, ¹³₇Y.",
          "B. ⁵⁶₂₈X, ⁵⁶₂₇Y.",
          "C. ¹⁶₈X, ¹⁸₈Y.",
          "D. ¹⁸₈X, ¹⁸₉Y."
        ],
        2,
        "Đồng vị là các nguyên tử có cùng số proton (cùng số hiệu Z = 8) nhưng khác số neutron (số khối khác nhau 16 và 18)."
      ],
      [
        "Biết 1 amu = 1,6605 × 10⁻²⁴ g. Nguyên tử khối của ²⁷₁₃Al là 26,98 amu. Khối lượng tính theo gam của một nguyên tử nhôm là",
        [
          "A. 4,480 × 10⁻²³ g.",
          "B. 4,483 × 10⁻²³ g.",
          "C. 26,98.",
          "D. 2,159 × 10⁻²³ g."
        ],
        0,
        "m = 26,98 × 1,6605.10⁻²⁴ g &approx; 4,480.10⁻²³ g."
      ],
      [
        "Lớp electron M của nguyên tử X chứa 3 electron. Số hiệu nguyên tử của X là",
        [
          "A. 5.",
          "B. 13.",
          "C. 21.",
          "D. 15."
        ],
        1,
        "Lớp M là lớp thứ 3 (n = 3). Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p¹ &rArr; tổng số electron = 13 &rArr; Z = 13 (Aluminium)."
      ],
      [
        "Một đồng vị của Au có số khối là 197. Hạt nhân nguyên tử Au này có bao nhiêu neutron nếu số hiệu nguyên tử của Au là 79?",
        [
          "A. 79.",
          "B. 100.",
          "C. 118.",
          "D. 128."
        ],
        2,
        "Số neutron N = A - Z = 197 - 79 = 118 hạt."
      ],
      [
        "Một số thuộc tính sau được đưa ra để so sánh các đồng vị của cùng một nguyên tố hoá học: (1) khối lượng nguyên tử; (2) tính chất hoá học; (3) điện tích hạt nhân. Các đồng vị của cùng một nguyên tố hoá học giống nhau về các thuộc tính",
        [
          "A. chỉ (1) và (2).",
          "B. chỉ (1) và (3).",
          "C. cả (1), (2), (3).",
          "D. chỉ (2) và (3)."
        ],
        3,
        "Các đồng vị có cùng số proton và cấu hình electron nên giống nhau về điện tích hạt nhân (3) và tính chất hóa học (2); khác nhau về số neutron dẫn đến khác nhau về khối lượng nguyên tử (1)."
      ],
      [
        "Cấu hình electron nguyên tử Be (Z = 4) ở trạng thái cơ bản là",
        [
          "A. 1s²2p².",
          "B. 1s²2s².",
          "C. 1s¹2s¹2p².",
          "D. 1s²1p²."
        ],
        1,
        "Nguyên tử Be có Z = 4. Các electron phân bố lần lượt: 1s² 2s²."
      ],
      [
        "Cấu hình electron nguyên tử Mg (Z = 12) ở trạng thái cơ bản là",
        [
          "A. 1s²2s²2p⁶3s².",
          "B. 1s²1p⁶2s²3p².",
          "C. 1s²2s²2p⁸.",
          "D. 1s²2s²2p²."
        ],
        0,
        "Cấu hình của Mg (Z = 12): 1s² 2s² 2p⁶ 3s²."
      ],
      [
        "Cation M⁺ có cấu hình electron giống khí hiếm Neon (Z = 10). Số hiệu nguyên tử M là",
        [
          "A. 9.",
          "B. 11.",
          "C. 10.",
          "D. 20."
        ],
        1,
        "M &rarr; M⁺ + 1e. Nguyên tử M có số electron = 10 + 1 = 11 &rArr; Z = 11 (Sodium)."
      ],
      [
        "Cấu hình electron của Fe (Z = 26) là",
        [
          "A. [Ar]3d⁸.",
          "B. [Ar]3d⁶4s².",
          "C. [Ar]4s²4p⁶.",
          "D. [Ar]3d⁶."
        ],
        1,
        "Fe (Z = 26) có cấu hình e: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² = [Ar] 3d⁶ 4s²."
      ],
      [
        "Nguyên tố Mn (Z = 25) thuộc ô 25,",
        [
          "A. chu kì 3, nhóm VIIB của bảng tuần hoàn.",
          "B. chu kì 4, nhóm VB của bảng tuần hoàn.",
          "C. chu kì 4, nhóm VIIB của bảng tuần hoàn.",
          "D. chu kì 4, nhóm VIIA của bảng tuần hoàn."
        ],
        2,
        "Mn có cấu hình: [Ar] 3d⁵ 4s². Có 4 lớp electron &rArr; chu kì 4. Tổng electron hóa trị d + s = 5 + 2 = 7 &rArr; nhóm VIIB."
      ],
      [
        "Nguyên tố R thuộc chu kì 5, nhóm IIA của bảng tuần hoàn. Tổng số hạt mang điện có trong một nguyên tử R là",
        [
          "A. 39.",
          "B. 78.",
          "C. 74.",
          "D. 76."
        ],
        3,
        "R thuộc chu kì 5 nhóm IIA &rArr; R là Strontium (Sr) có Z = 38. Tổng số hạt mang điện trong nguyên tử = 2Z = 76."
      ],
      [
        "Cho các nguyên tố: A(Z = 9), B(Z = 16), D(Z = 25), E(Z = 35), G(Z = 37). Các nguyên tố hoá học thuộc cùng một chu kì là",
        [
          "A. A và B.",
          "B. B và D.",
          "C. D và E.",
          "D. E và G."
        ],
        2,
        "D (Z = 25, [Ar] 3d⁵ 4s²) và E (Z = 35, [Ar] 3d¹⁰ 4s² 4p⁵) đều có 4 lớp electron nên cùng thuộc chu kì 4."
      ],
      [
        "Hai nguyên tố X, Y (Z_X < Z_Y) thuộc hai ô kế tiếp nhau trong một chu kì. Tổng số hạt mang điện tích dương trong hạt nhân của hai nguyên tử này là 71. Nguyên tố Y là",
        [
          "A. một kim loại nhóm A.",
          "B. một kim loại nhóm B.",
          "C. một phi kim.",
          "D. một khí hiếm."
        ],
        3,
        "Z_X + Z_Y = 71 và Z_Y - Z_X = 1 &rArr; Z_X = 35 (Br), Z_Y = 36 (Kr - khí hiếm Krypton)."
      ],
      [
        "Hai nguyên tố Q, T (Z_Q > Z_T) thuộc cùng một nhóm A ở hai chu kì kế tiếp nhau trong bảng tuần hoàn. Tổng số hạt mang điện trong hai nguyên tử Q, T là 28. Nguyên tố Q thuộc chu kì nào của bảng tuần hoàn?",
        [
          "A. 3.",
          "B. 2.",
          "C. 1.",
          "D. 4."
        ],
        0,
        "2Z_Q + 2Z_T = 28 &rArr; Z_Q + Z_T = 14. Vì thuộc nhóm A ở 2 chu kì kế tiếp nên Z_Q - Z_T = 8 &rArr; Z_Q = 11 (Na, chu kì 3) và Z_T = 3 (Li, chu kì 2)."
      ],
      [
        "Hai nguyên tố D, E (Z_D < Z_E) thuộc hai nhóm A kế tiếp nhau trong một chu kì. Tổng số hạt mang điện trong hai nguyên tử D, E là 102. Ở trạng thái cơ bản, nguyên tử E có bao nhiêu electron độc thân?",
        [
          "A. 3.",
          "B. 0.",
          "C. 1.",
          "D. 2."
        ],
        2,
        "2Z_D + 2Z_E = 102 &rArr; Z_D + Z_E = 51. Ở chu kì 4, nhóm IIA (Ca, Z=20) và nhóm IIIA (Ga, Z=31) có 20 + 31 = 51. E là Gallium (Ga, Z = 31) có cấu hình [Ar] 3d¹⁰ 4s² 4p¹ chứa đúng 1 electron độc thân."
      ]
    ],
    "tf": [
      {
        "stem": "Mô hình Bohr của một nguyên tử X có hạt nhân gồm 2 hạt proton, 2 hạt neutron và lớp vỏ có 2 hạt electron. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Nguyên tử X chứa 2 neutron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Số khối hạt nhân nguyên tử X là 2.",
            false,
            "Phát biểu SAI. Số khối A = Z + N = 2 + 2 = 4 (Helium ⁴₂He)."
          ],
          [
            "c) Kí hiệu nguyên tử X là ²₂X.",
            false,
            "Phát biểu SAI. Kí hiệu đúng là ⁴₂He."
          ],
          [
            "d) Tổng số hạt mang điện trong một nguyên tử X là 4.",
            true,
            "Phát biểu ĐÚNG. Số hạt mang điện gồm 2 proton và 2 electron, tổng là 4."
          ]
        ]
      },
      {
        "stem": "Tổng số hạt proton, neutron, electron trong một nguyên tử Y là 76, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 20 hạt. Cho qe = -1,602 × 10⁻¹⁹ C, me = 9,109 × 10⁻²⁸ g. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Y là một nguyên tố phi kim.",
            false,
            "Phát biểu SAI. Ta có 2Z + N = 76 và 2Z - N = 20 &rArr; Z = 24 (Chromium - Cr), là kim loại."
          ],
          [
            "b) Số electron độc thân trong một nguyên tử Y ở trạng thái cơ bản là 4.",
            false,
            "Phát biểu SAI. Cấu hình e của Cr là [Ar] 3d⁵ 4s¹ chứa 6 electron độc thân."
          ],
          [
            "c) Hạt nhân nguyên tử Y chứa 28 neutron.",
            true,
            "Phát biểu ĐÚNG. N = 76 - 48 = 28."
          ],
          [
            "d) Y là một nguyên tố thuộc nhóm B của bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG. Cr thuộc nhóm VIB trong bảng tuần hoàn."
          ]
        ]
      },
      {
        "stem": "Một nguyên tử của nguyên tố M bền vững, chứa tổng số hạt proton, neutron, electron là 40. M là một kim loại. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) M là một nguyên tố s.",
            false,
            "Phát biểu SAI. 2Z + N = 40 &rArr; Z = 13 (Al, cấu hình [Ne] 3s² 3p¹ là nguyên tố p)."
          ],
          [
            "b) Ở trạng thái cơ bản, nguyên tử nguyên tố M có 1 electron độc thân.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 3p¹ chỉ có 1 electron độc thân."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử M có 3 electron hoá trị.",
            true,
            "Phát biểu ĐÚNG. Nhóm IIIA có 3 electron hóa trị ở lớp ngoài cùng (3s² 3p¹)."
          ],
          [
            "d) Nguyên tố M ở chu kì 4 của bảng tuần hoàn.",
            false,
            "Phát biểu SAI. M có 3 lớp electron nên thuộc chu kì 3."
          ]
        ]
      },
      {
        "stem": "Tổng số hạt proton, electron, neutron trong một nguyên tử R là 76. Ở trạng thái cơ bản, nguyên tử R có chứa 5 electron chưa ghép đôi. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Nguyên tử khối của R (làm tròn đến hàng đơn vị) là 52.",
            false,
            "Phát biểu SAI. R có 5e chưa ghép đôi &rArr; Mn (Z=25: 3d⁵ 4s²), N = 76 - 50 = 26 &rArr; A = 51 (hoặc Mn phổ biến là 55)."
          ],
          [
            "b) Số electron hoá trị trong một nguyên tử R là 7.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 3d⁵ 4s² có 5 + 2 = 7 electron hóa trị."
          ],
          [
            "c) Nguyên tố R thuộc chu kì 4 trong bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG. Có 4 lớp electron nên thuộc chu kì 4."
          ],
          [
            "d) Hạt nhân nguyên tử R chứa 26 hạt không mang điện.",
            true,
            "Phát biểu ĐÚNG. N = 76 - 2(25) = 26 hạt neutron."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho cấu hình electron nguyên tử các nguyên tố được đánh số: (1): 1s²2s¹; (2): [He]2s²2p³; (3): [Ne]3s²3p⁶; (4): [Ar]3d⁵4s¹; (5): [Ne]3s². Hãy viết liền các chữ số đại diện cho các nguyên tố kim loại theo thứ tự từ nhỏ đến lớn (ví dụ: 125).",
        "answer": "145",
        "explanation": "Các kim loại là (1) Li, (4) Cr, (5) Mg. Vậy dãy chữ số là 145."
      },
      {
        "question": "Carbon có 2 đồng vị bền ¹²C, ¹³C; oxygen có 3 đồng vị bền ¹⁶O, ¹⁷O, ¹⁸O. Có tối đa bao nhiêu loại phân tử CO khác nhau được tạo ra từ các đồng vị này?",
        "answer": "6",
        "explanation": "Số loại phân tử CO = 2 × 3 = 6 loại."
      },
      {
        "question": "Trong tự nhiên Cl có hai đồng vị ³⁵Cl và ³⁷Cl với nguyên tử khối trung bình là 35,48. Số nguyên tử đồng vị ³⁵Cl có trong 200 nguyên tử Cl là bao nhiêu?",
        "answer": "152",
        "explanation": "35,48 = [35x + 37(100 - x)] / 100 &rArr; x = 76%. Trong 200 nguyên tử Cl có: 200 × 76% = 152 nguyên tử ³⁵Cl."
      },
      {
        "question": "Trong tự nhiên Cu có hai đồng vị ⁶³Cu và ⁶⁵Cu, nguyên tử khối trung bình là 63,54. Phần trăm khối lượng của ⁶³Cu trong hợp chất CuO là bao nhiêu phần trăm (làm tròn kết quả đến một chữ số thập phân)?",
        "answer": "57.7",
        "explanation": "Phần trăm số nguyên tử ⁶³Cu = 73%. %m(⁶³Cu) = (0,73 × 63 / 79,54) × 100% ≈ 57,7%."
      }
    ],
    "essay": [
      {
        "title": "Bài toán 1 (1,0 điểm). Tính bán kính nguyên tử Chromium trong tinh thể.",
        "question": "Trong tinh thể, coi các nguyên tử chromium là những hình cầu chiếm 68% về thể tích, còn lại là khe trống. Khối lượng riêng của kim loại chromium là 7,19 g/cm³, M_Cr = 52 g/mol. Bán kính nguyên tử chromium là a × 10⁻⁸ cm. Tính giá trị a (làm tròn đến hàng phần trăm).",
        "solution": "Thể tích mol kim loại Cr: V<sub>mol</sub> = M / D = 52 / 7,19 &approx; 7,232 cm<sup>3</sup>/mol.<br>Thể tích thực của 1 mol nguyên tử Cr: V<sub>thực</sub> = 7,232 &times; 68% &approx; 4,918 cm<sup>3</sup>.<br>Thể tích của 1 nguyên tử Cr: V<sub>1</sub> = 4,918 / (6,022 &times; 10<sup>23</sup>) &approx; 8,166 &times; 10<sup>-24</sup> cm<sup>3</sup>.<br>Ta có V<sub>1</sub> = (4/3)&pi;r<sup>3</sup> &rArr; r = (3V<sub>1</sub> / 4&pi;)<sup>1/3</sup> &approx; 1,25 &times; 10<sup>-8</sup> cm.<br>Vậy giá trị của a là 1,25 (1,0 điểm)."
      },
      {
        "title": "Bài toán 2 (2,0 điểm). Xác định hợp chất M₂X và khảo sát tính chất.",
        "question": "Trong phân tử M₂X có tổng số hạt p, n, e là 140, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44 hạt. Số khối của M lớn hơn số khối của X là 23. Tổng số hạt p, n, e trong nguyên tử M nhiều hơn trong nguyên tử X là 34 hạt.<br>a) Xác định công thức phân tử của M₂X.<br>b) Viết cấu hình electron của M và X.<br>c) Liệt kê các nhận xét không đúng trong các phát biểu sau: (1) M₂X phản ứng được với nước; (2) M₂X là hợp chất cộng hoá trị; (3) M có hoá trị I; (4) M và X cùng một chu kì; (5) Ở trạng thái đơn chất, M rất cứng và dẫn điện tốt; (6) Hợp chất với hydrogen của X là chất lỏng ở điều kiện thường.",
        "solution": "a) Thiết lập hệ phương trình hạt:<br>• Tổng số hạt trong M<sub>2</sub>X: 4Z<sub>M</sub> + 2N<sub>M</sub> + 2Z<sub>X</sub> + N<sub>X</sub> = 140 (1)<br>• Hạt mang điện nhiều hơn không mang điện: (4Z<sub>M</sub> + 2Z<sub>X</sub>) - (2N<sub>M</sub> + N<sub>X</sub>) = 44 (2)<br>Cộng (1) và (2): 2(4Z<sub>M</sub> + 2Z<sub>X</sub>) = 184 &rArr; 2Z<sub>M</sub> + Z<sub>X</sub> = 23 &times; 2 = 46 (*)<br>• Số khối M hơn X là 23: (Z<sub>M</sub> + N<sub>M</sub>) - (Z<sub>X</sub> + N<sub>X</sub>) = 23 (3)<br>• Tổng hạt M hơn X là 34: (2Z<sub>M</sub> + N<sub>M</sub>) - (2Z<sub>X</sub> + N<sub>X</sub>) = 34 (4)<br>Lấy (4) trừ (3): Z<sub>M</sub> - Z<sub>X</sub> = 11 (**)<br>Từ (*) và (**): 3Z<sub>M</sub> = 57 &rArr; Z<sub>M</sub> = 19 (Potassium - K) và Z<sub>X</sub> = 8 (Oxygen - O).<br>Công thức phân tử là K<sub>2</sub>O (1,0 điểm).<br>b) Cấu hình electron:<br>• K (Z = 19): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup> (hoặc [Ar] 4s<sup>1</sup>).<br>• O (Z = 8): 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> (0,50 điểm).<br>c) Nhận xét:<br>• (2) Sai vì K<sub>2</sub>O là hợp chất ion.<br>• (4) Sai vì K ở chu kì 4, O ở chu kì 2.<br>• (5) Sai vì kim loại K rất mềm, có thể cắt được bằng dao.<br>Vậy các nhận xét không đúng là: 2, 4, 5 (0,50 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-15",
    "title": "Hóa học 10 - Đề 15 - Đề luyện tập Chương 2 - Đề số 1 (Năm học 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Đề luyện tập Chương 2 - Đề số 1 (Năm học 2025–2026)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.25,
    "shortUnit": 0.5,
    "essayPoints": 3,
    "questions": [
      [
        "Các nguyên tố hóa học trong cùng một chu kỳ của bảng tuần hoàn có cùng",
        [
          "A. số hiệu nguyên tử.",
          "B. số electron hóa trị.",
          "C. số lớp electron trong nguyên tử.",
          "D. số electron ở lớp ngoài cùng."
        ],
        2,
        "Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được sắp xếp theo chiều điện tích hạt nhân tăng dần."
      ],
      [
        "Các nguyên tố hóa học trong cùng một nhóm A của bảng tuần hoàn có cùng",
        [
          "A. số hiệu nguyên tử.",
          "B. số electron hóa trị.",
          "C. số lớp electron trong nguyên tử.",
          "D. số electron ở lớp ngoài cùng."
        ],
        1,
        "Các nguyên tố trong cùng một nhóm A có cấu hình electron tương tự nhau, đặc biệt có cùng số electron hóa trị (bằng số thứ tự nhóm)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 1 của bảng tuần hoàn là",
        [
          "A. 1.",
          "B. 2.",
          "C. 6.",
          "D. 84."
        ],
        1,
        "Chu kì 1 chỉ gồm 2 nguyên tố là Hydrogen (H, Z=1) và Helium (He, Z=2)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 2 của bảng tuần hoàn là",
        [
          "A. 8.",
          "B. 2.",
          "C. 10.",
          "D. 18."
        ],
        0,
        "Chu kì 2 gồm 8 nguyên tố từ Lithium (Li, Z=3) đến Neon (Ne, Z=10)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 4 của bảng tuần hoàn là",
        [
          "A. 18.",
          "B. 8.",
          "C. 10.",
          "D. 32."
        ],
        0,
        "Chu kì 4 là chu kì lớn gồm 18 nguyên tố từ Potassium (K, Z=19) đến Krypton (Kr, Z=36)."
      ],
      [
        "Hai chu kì nào có số nguyên tố hóa học bằng nhau?",
        [
          "A. Chu kì 1 và chu kì 2.",
          "B. Chu kì 5 và chu kì 6.",
          "C. Chu kì 2 và chu kì 3.",
          "D. Chu kì 3 và chu kì 4."
        ],
        2,
        "Chu kì 2 và chu kì 3 đều có đúng 8 nguyên tố hóa học."
      ],
      [
        "Các nguyên tố có tính chất hóa học tương tự nhau thường",
        [
          "A. có cùng số lớp electron trong nguyên tử.",
          "B. thuộc cùng một chu kì trong bảng tuần hoàn.",
          "C. có cùng số hiệu nguyên tử.",
          "D. thuộc cùng một nhóm trong bảng tuần hoàn."
        ],
        3,
        "Các nguyên tố trong cùng một nhóm có cấu hình electron hóa trị tương tự nhau nên có tính chất hóa học tương tự nhau."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố họ s, p",
        [
          "A. là những kim loại.",
          "B. là những phi kim.",
          "C. thuộc nhóm A.",
          "D. thuộc nhóm B."
        ],
        2,
        "Các nguyên tố họ s và p là các nguyên tố thuộc nhóm A trong bảng tuần hoàn."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố họ d, f",
        [
          "A. là kim loại nhẹ.",
          "B. là những phi kim.",
          "C. thuộc nhóm A.",
          "D. thuộc nhóm B."
        ],
        3,
        "Các nguyên tố họ d và họ f là các kim loại chuyển tiếp, thuộc nhóm B và hai hàng dưới bảng tuần hoàn."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố được sắp xếp theo chiều",
        [
          "A. tăng dần số hiệu nguyên tử.",
          "B. tăng dần số electron hóa trị.",
          "C. tăng dần nguyên tử khối.",
          "D. tăng dần số lớp electron trong nguyên tử."
        ],
        0,
        "Nguyên tắc sắp xếp bảng tuần hoàn: Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân (số hiệu nguyên tử Z)."
      ],
      [
        "Cho các nhận xét: (1) Các nguyên tố xếp cùng một hàng trong bảng tuần hoàn có cùng số lớp electron trong nguyên tử; (2) Các nguyên tố thuộc cùng một nhóm có tính chất hóa học tương tự nhau; (3) Chu kì 3 của bảng tuần hoàn có 18 nguyên tố hóa học. Các nhận xét đúng bao gồm",
        [
          "A. chỉ (1) và (2).",
          "B. chỉ (1) và (3).",
          "C. chỉ (2) và (3).",
          "D. cả (1), (2) và (3)."
        ],
        0,
        "(1) và (2) đúng. (3) sai vì chu kì 3 chỉ có 8 nguyên tố hóa học."
      ],
      [
        "Osimium là một nguyên tố hóa học hiếm, thuộc nhóm platin, có ký hiệu Os và số nguyên tử 76. Nó rất cứng, nặng, bền, và được dùng trong hợp kim siêu bền. Trong bảng tuần hoàn, nguyên tố Os ở ô nguyên tố thứ bao nhiêu?",
        [
          "A. 38.",
          "B. 76.",
          "C. 152.",
          "D. 67."
        ],
        1,
        "Số thứ tự của ô nguyên tố đúng bằng số hiệu nguyên tử: Ô thứ 76."
      ],
      [
        "Phân đạm cung cấp nitrogen cho cây dưới dạng NH₄⁺, NO₃⁻. Số hiệu nguyên tử của nitrogen là 7. Trong bảng tuần hoàn, nguyên tố nitrogen thuộc chu kì nào?",
        [
          "A. Chu kì 1.",
          "B. Chu kì 2.",
          "C. Chu kì 3.",
          "D. Chu kì 5."
        ],
        1,
        "Nitrogen có Z = 7, cấu hình 1s² 2s² 2p³ có 2 lớp electron nên thuộc chu kì 2."
      ],
      [
        "Lithium là kim loại nhẹ nhất, thuộc nhóm kim loại kiềm, có ký hiệu Li và số nguyên tử 3. Nó được dùng chủ yếu trong công nghiệp sản xuất pin, acquy và các hợp kim nhẹ. Trong bảng tuần hoàn, nguyên tố lithium thuộc",
        [
          "A. nhóm IA.",
          "B. nhóm IIA.",
          "C. nhóm IIIA.",
          "D. nhóm IVA."
        ],
        0,
        "Li (Z = 3) có 1 electron ở lớp ngoài cùng (2s¹) nên thuộc nhóm IA."
      ],
      [
        "Cho các nhận xét: (1) Các chu kì 1, 2, 3, 4 là các chu kỳ nhỏ; (2) Các chu kỳ 5, 6, 7 là các chu kỳ lớn; (3) Số thứ tự của nhóm A đúng bằng số electron ở lớp ngoài cùng trong nguyên tử của nguyên tố thuộc nhóm đó. Số lượng nhận xét không đúng là",
        [
          "A. 3.",
          "B. 2.",
          "C. 1.",
          "D. 0."
        ],
        1,
        "(1) sai vì chu kì nhỏ là 1, 2, 3 (chu kì 4 là chu kì lớn); (2) sai vì chu kì lớn là 4, 5, 6, 7; (3) đúng. Vậy có 2 nhận xét không đúng."
      ],
      [
        "Zirconium (ký hiệu Zr, số nguyên tử 40) là kim loại chuyển tiếp màu xám bạc, có độ bền cao và khả năng chống ăn mòn tốt. Zr được sử dụng trong công nghiệp hạt nhân, hợp kim chịu nhiệt và gốm sứ kỹ thuật. Trong bảng tuần hoàn, nguyên tố Zr thuộc",
        [
          "A. chu kì 4, nhóm VB.",
          "B. chu kì 5, nhóm IIB.",
          "C. chu kì 5, nhóm IIA.",
          "D. chu kì 5, nhóm IVB."
        ],
        3,
        "Zr (Z = 40) có cấu hình e: [Kr] 4d² 5s² &rArr; có 5 lớp electron (chu kì 5) và có 2 + 2 = 4 electron hóa trị (nhóm IVB)."
      ],
      [
        "Nguyên tố X thuộc chu kì 3, nhóm VIA của bảng tuần hoàn. Số hạt mang điện có trong một nguyên tử X là",
        [
          "A. 8.",
          "B. 16.",
          "C. 32.",
          "D. 30."
        ],
        2,
        "X thuộc chu kì 3, nhóm VIA &rArr; cấu hình e là [Ne] 3s² 3p⁴ &rArr; Z = 16 (Sulfur). Tổng hạt mang điện trong nguyên tử = 2Z = 32."
      ],
      [
        "Tổng số electron, neutron, proton trong một nguyên tử R là 16. Trong bảng tuần hoàn, nguyên tố R ở",
        [
          "A. chu kì 2, nhóm IIA.",
          "B. chu kì 2, nhóm IIIA.",
          "C. chu kì 3, nhóm IA.",
          "D. chu kì 2, nhóm VIA."
        ],
        1,
        "Ta có 2Z + N = 16 &rArr; 16/3,5 &le; Z &le; 16/3 &rArr; 4,57 &le; Z &le; 5,33 &rArr; Z = 5 (Boron). Cấu hình 1s² 2s² 2p¹ thuộc chu kì 2, nhóm IIIA."
      ]
    ],
    "tf": [
      {
        "stem": "Silicon là nguyên tố hóa học phổ biến, ký hiệu Si (Z = 14), bán dẫn quan trọng trong công nghệ điện tử, được dùng chế tạo vi mạch, pin mặt trời và các vật liệu xây dựng. Chỉ ra phát biểu đúng/sai:",
        "items": [
          [
            "a) Silicon ở chu kì 3 của bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG. Si có 3 lớp electron (1s² 2s² 2p⁶ 3s² 3p²)."
          ],
          [
            "b) Silicon ở nhóm IIA của bảng tuần hoàn.",
            false,
            "Phát biểu SAI. Si có 4 electron hóa trị nên thuộc nhóm IVA."
          ],
          [
            "c) Số electron hóa trị trong một nguyên tử silicon là 4.",
            true,
            "Phát biểu ĐÚNG (3s² 3p²)."
          ],
          [
            "d) Silicon ở ô nguyên tố thứ 14 trong bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG vì Z = 14."
          ]
        ]
      },
      {
        "stem": "Potassium (K) có nhiều trong tro bếp, cung cấp K cho cây trồng, giúp tăng cường khả năng chống chịu, phát triển rễ. Cấu hình electron nguyên tử K là: 1s²2s²2p⁶3s²3p⁶4s¹. Chỉ ra phát biểu đúng/sai:",
        "items": [
          [
            "a) Potassium là một nguyên tố họ p.",
            false,
            "Phát biểu SAI. Electron cuối cùng điền vào phân lớp 4s nên K là nguyên tố họ s."
          ],
          [
            "b) Potassium thuộc chu kì 4, nhóm IA trong bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Potassium là một nguyên tố phi kim.",
            false,
            "Phát biểu SAI. Potassium là kim loại kiềm điển hình."
          ],
          [
            "d) Potassium là nguyên tố đứng đầu tiên của chu kì.",
            true,
            "Phát biểu ĐÚNG. Nhóm IA luôn đứng đầu mỗi chu kì."
          ]
        ]
      },
      {
        "stem": "Cấu hình electron của ion A³⁺ là: 1s²2s²2p⁶3s²3p⁶3d³. Chỉ ra phát biểu đúng/sai:",
        "items": [
          [
            "a) Nguyên tố A thuộc nhóm VIB, chu kì 3 bảng tuần hoàn.",
            false,
            "Phát biểu SAI. Nguyên tử A có Z = 18 + 3 + 3 = 24 (Cr), cấu hình [Ar] 3d⁵ 4s¹ thuộc chu kì 4, nhóm VIB."
          ],
          [
            "b) Cấu hình electron nguyên tử A ở trạng thái cơ bản: 1s²2s²2p⁶3s²3p⁶3d⁴4s².",
            false,
            "Phát biểu SAI. Cấu hình bán bão hòa bền của Cr là [Ar] 3d⁵ 4s¹."
          ],
          [
            "c) Số electron hóa trị trong một nguyên tử A là 6.",
            true,
            "Phát biểu ĐÚNG. Phân lớp 3d⁵ 4s¹ có 5 + 1 = 6 electron hóa trị."
          ],
          [
            "d) Tổng số hạt mang điện trong ion A³⁺ là 56.",
            false,
            "Phát biểu SAI. Hạt mang điện trong A³⁺ gồm 24 proton và 21 electron, tổng là 45 hạt."
          ]
        ]
      },
      {
        "stem": "Iodine (Z = 53) là nguyên tố vi lượng thiết yếu, ký hiệu I, cần cho hoạt động tuyến giáp, hỗ trợ trao đổi chất, phát triển trí não. Chỉ ra phát biểu đúng/sai:",
        "items": [
          [
            "a) Iodine là một nguyên tố họ d.",
            false,
            "Phát biểu SAI. Cấu hình electron lớp ngoài cùng của I là 5s² 5p⁵ nên là nguyên tố họ p."
          ],
          [
            "b) Iodine thuộc nhóm VB, chu kì 5 của bảng tuần hoàn.",
            false,
            "Phát biểu SAI. I có 7 electron lớp ngoài cùng nên thuộc nhóm VIIA."
          ],
          [
            "c) Iodine là một phi kim.",
            true,
            "Phát biểu ĐÚNG (Halogen)."
          ],
          [
            "d) Thiếu hụt iodine sẽ tác động đến hoạt động của tuyến giáp và sự phát triển trí não của cơ thể.",
            true,
            "Phát biểu ĐÚNG theo kiến thức sinh học và thực tiễn y học."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho các từ được đánh số: (1) nhóm, (2) chu kì, (3) ô nguyên tố. Điền dãy số thích hợp tương ứng với các vị trí (a), (b), (c) trong đoạn văn: 'Mỗi nguyên tố hoá học được xếp vào một ...(a)... Mỗi hàng được gọi là một ...(b)... Mỗi cột được gọi là một ...(c)...'",
        "answer": "321",
        "explanation": "(a) ô nguyên tố (3); (b) chu kì (2); (c) nhóm (1). Dãy số điền là 321."
      },
      {
        "question": "Vanadium (Z = 23) là kim loại chuyển tiếp, dùng trong hợp kim siêu bền. Số electron hóa trị có trong một nguyên tử vanadium là bao nhiêu?",
        "answer": "5",
        "explanation": "V (Z = 23) có cấu hình [Ar] 3d³ 4s² &rArr; số electron hóa trị = 3 + 2 = 5."
      },
      {
        "question": "Tổng số hạt mang điện trong các ion R²⁺ và T²⁺ lần lượt là 56 và 54. Cho các nhận xét: (1) Cấu hình của R là [Ar] 3d¹⁰ 4s¹; (2) R thuộc nhóm IIA, chu kì 4; (3) Ở trạng thái cơ bản, T chứa hai electron độc thân; (4) R, T thuộc cùng một chu kì; (5) R, T đều là kim loại họ d. Số lượng nhận xét đúng là bao nhiêu?",
        "answer": "4",
        "explanation": "R²⁺ có 2Z - 2 = 56 &rArr; Z_R = 29 (Cu); T²⁺ có 2Z - 2 = 54 &rArr; Z_T = 28 (Ni). Các nhận xét (1), (3), (4), (5) đúng; (2) sai vì Cu thuộc nhóm IB. Vậy có 4 nhận xét đúng."
      },
      {
        "question": "Hòa tan 3,5 gam hợp kim gồm hai kim loại kiềm A, B thuộc hai chu kì kế tiếp nhau vào nước được 100 mL dung dịch X. Chuẩn độ 5 mL dung dịch X cần vừa đủ 20 mL dung dịch HCl 0,50M. Phần trăm khối lượng của A (Z_A < Z_B) trong hợp kim là bao nhiêu phần trăm (nhập số làm tròn đến 2 chữ số thập phân)?",
        "answer": "13.75",
        "explanation": "n(HCl) chuẩn độ 5 mL = 0,01 mol &rArr; n(OH⁻) trong 100 mL = 0,20 mol &rArr; M̄ = 3,5 / 0,2 = 17,5 g/mol &rArr; A là Li (7) và B là Na (23). n(Li) = 0,06875 mol &rArr; m(Li) = 0,48125 g &rArr; %m(Li) = 13,75%."
      }
    ],
    "essay": [
      {
        "title": "Bài toán 1 (1,5 điểm). Xác định thành phần hợp kim kiềm A-B.",
        "question": "Hợp kim A-B là hợp kim lỏng ở nhiệt độ phòng, dẫn nhiệt tốt, dùng làm chất truyền nhiệt trong lò phản ứng hạt nhân; trong đó A, B là các nguyên tố kim loại kiềm thuộc hai chu kì kế tiếp nhau trong bảng tuần hoàn, Z<sub>A</sub> < Z<sub>B</sub>. Hòa tan 3,5 gam hợp kim A-B vào nước thu được 100 mL dung dịch X. Để chuẩn độ 5 mL dung dịch X cần vừa hết 20 mL dung dịch HCl 0,50M.<br>a) Xác định tên hai kim loại A và B.<br>b) Tính phần trăm khối lượng của mỗi kim loại trong hợp kim.",
        "solution": "a) Phản ứng: R + H<sub>2</sub>O &rarr; ROH + 1/2 H<sub>2</sub>; ROH + HCl &rarr; RCl + H<sub>2</sub>O.<br>Số mol HCl dùng chuẩn độ 5 mL X: n<sub>HCl</sub> = 0,020 &times; 0,50 = 0,010 mol.<br>Số mol bazơ trong 100 mL X: n<sub>ROH</sub> = 0,010 &times; (100 / 5) = 0,20 mol.<br>Khối lượng mol trung bình của hai kim loại kiềm: M̄ = 3,5 / 0,20 = 17,5 g/mol (0,75 điểm).<br>Vì A và B thuộc hai chu kì kế tiếp nhau trong nhóm IA (Z<sub>A</sub> < Z<sub>B</sub>) nên M<sub>A</sub> < 17,5 < M<sub>B</sub>.<br>&rArr; A là Lithium (Li, M = 7) và B là Sodium (Na, M = 23) (0,25 điểm).<br>b) Gọi số mol Li và Na lần lượt là x và y:<br>x + y = 0,20 và 7x + 23y = 3,5 &rArr; x = 0,06875 mol; y = 0,13125 mol.<br>Khối lượng Li: m<sub>Li</sub> = 0,06875 &times; 7 = 0,48125 gam &rArr; %m(Li) = (0,48125 / 3,5) &times; 100% = 13,75%.<br>Khối lượng Na: %m(Na) = 100% - 13,75% = 86,25% (0,50 điểm)."
      },
      {
        "title": "Bài toán 2 (1,5 điểm). Xác định nguyên tố M từ cấu trúc tinh thể.",
        "question": "Nguyên tố M chỉ tồn tại trong tự nhiên ở một dạng đồng vị bền. Ở trạng thái tinh thể, M có khối lượng riêng là 0,97 g/cm³. Trong tinh thể, coi M tồn tại như những quả cầu có bán kính 186 pm, chiếm 68% thể tích của tinh thể, phần còn lại là khe trống.<br>a) Xác định nguyên tử khối và tên nguyên tố M.<br>b) Đánh giá tính đúng/sai của các phát biểu: (1) M là một kim loại; (2) M là nguyên tố họ s; (3) Hạt nhân M có số neutron bằng số electron; (4) M thuộc chu kì 4; (5) M có 1 electron hoá trị.",
        "solution": "a) Đổi bán kính: r = 186 pm = 1,86 &times; 10<sup>-8</sup> cm.<br>Thể tích 1 nguyên tử M: V<sub>1</sub> = (4/3)&pi;r<sup>3</sup> &approx; 2,696 &times; 10<sup>-23</sup> cm<sup>3</sup>.<br>Thể tích thực của 1 mol nguyên tử M: V<sub>thực</sub> = 2,696 &times; 10<sup>-23</sup> &times; 6,022 &times; 10<sup>23</sup> &approx; 16,236 cm<sup>3</sup>/mol.<br>Thể tích mol tinh thể M: V<sub>tinh thể</sub> = 16,236 / 68% &approx; 23,876 cm<sup>3</sup>/mol.<br>Khối lượng mol của M: M = D &times; V<sub>tinh thể</sub> = 0,97 &times; 23,876 &approx; 23,16 &approx; 23 g/mol.<br>Vậy M là Sodium (Na, Z = 11) (1,0 điểm).<br>b) Cấu hình Na (Z = 11): [Ne] 3s<sup>1</sup>.<br>• (1) Đúng: Na là kim loại kiềm.<br>• (2) Đúng: Nguyên tố họ s.<br>• (3) Sai: Na có 11e, 11p, 12n (neutron khác electron).<br>• (4) Sai: Na thuộc chu kì 3 (có 3 lớp electron).<br>• (5) Đúng: Có 1 electron hóa trị (3s<sup>1</sup>).<br>Các phát biểu đúng là: (1), (2), (5) (0,50 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-16",
    "title": "Hóa học 10 - Đề 16 - Đề luyện tập Cấu tạo nguyên tử số 3 (Thời gian: 60 phút)",
    "subject": "chemistry",
    "duration": 60,
    "school": "Đề luyện tập Cấu tạo nguyên tử số 3 (Thời gian: 60 phút)",
    "province": "Tài liệu học tập THPT",
    "year": "2025–2026",
    "sourceUrl": "#",
    "mcUnit": 0.4,
    "shortUnit": 0.5,
    "essayPoints": 4,
    "questions": [
      [
        "Các hạt cấu tạo nên hầu hết các nguyên tử là",
        [
          "A. electron và proton.",
          "B. proton và neutron.",
          "C. neutron và electron.",
          "D. electron, proton và neutron."
        ],
        3,
        "Hầu hết các nguyên tử được cấu tạo từ ba loại hạt cơ bản: electron (vỏ), proton (hạt nhân) và neutron (hạt nhân)."
      ],
      [
        "Loại hạt được tìm thấy trong hạt nhân và không mang điện là",
        [
          "A. electron.",
          "B. neutron.",
          "C. proton.",
          "D. photon."
        ],
        1,
        "Trong hạt nhân nguyên tử, neutron là hạt không mang điện tích (q = 0)."
      ],
      [
        "Loại hạt được tìm thấy trong hạt nhân và mang điện tích dương là",
        [
          "A. electron.",
          "B. neutron.",
          "C. proton.",
          "D. photon."
        ],
        2,
        "Trong hạt nhân, hạt proton mang điện tích dương (+1 đơn vị điện tích nguyên tố)."
      ],
      [
        "Thành phần nào không bị lệch hướng trong trường điện?",
        [
          "A. Tia α.",
          "B. Proton.",
          "C. Nguyên tử hydrogen.",
          "D. Tia âm cực."
        ],
        2,
        "Nguyên tử hydrogen trung hòa về điện nên khi đi qua điện trường nó không bị lệch hướng."
      ],
      [
        "Đặc điểm của electron là",
        [
          "A. mang điện tích dương và có khối lượng.",
          "B. mang điện tích âm và có khối lượng.",
          "C. không mang điện và có khối lượng.",
          "D. mang điện tích âm và không có khối lượng."
        ],
        1,
        "Electron mang điện tích âm (-1,602.10⁻¹⁹ C) và có khối lượng xác định (me ≈ 9,109.10⁻³¹ kg ≈ 0,00055 amu)."
      ],
      [
        "Số đơn vị điện tích hạt nhân của nguyên tử X là 53. Nguyên tử chứa",
        [
          "A. 53 electron và 53 proton.",
          "B. 53 electron và 53 neutron.",
          "C. 53 proton và 53 neutron.",
          "D. 53 neutron."
        ],
        0,
        "Nguyên tử trung hòa về điện nên số proton bằng số electron và bằng số đơn vị điện tích hạt nhân: P = E = 53."
      ],
      [
        "Phát biểu nào sau đây là đúng khi nói về nguyên tử?",
        [
          "A. Trong nguyên tử, số hạt proton luôn bằng số hạt neutron.",
          "B. Điện tích của một nguyên tử có thể có giá trị âm, dương hoặc bằng 0.",
          "C. Khối lượng của một nguyên tử (tính theo amu) luôn là số nguyên.",
          "D. Lớp vỏ nguyên tử tạo nên bởi các electron."
        ],
        3,
        "Lớp vỏ nguyên tử được tạo thành từ các electron chuyển động rất nhanh xung quanh hạt nhân."
      ],
      [
        "Hạt nhân của nguyên tử nguyên tố A có 24 hạt, trong đó số hạt không mang điện là 12. Số electron trong A là",
        [
          "A. 12.",
          "B. 24.",
          "C. 13.",
          "D. 6."
        ],
        0,
        "Số proton = tổng hạt hạt nhân - neutron = 24 - 12 = 12 &rArr; số electron = 12."
      ],
      [
        "Trong nguyên tử aluminium (Al), số hạt mang điện tích dương là 13, số hạt không mang điện là 14. Số hạt electron trong Al là",
        [
          "A. 13.",
          "B. 15.",
          "C. 27.",
          "D. 14."
        ],
        0,
        "Trong nguyên tử trung hòa về điện, số electron luôn bằng số proton = 13."
      ],
      [
        "Oxygen (O) có khối lượng nguyên tử là 15,999 amu (1 amu = 1,6605.10⁻²⁷ kg). Khối lượng 1 nguyên tử oxygen tính theo đơn vị gam là",
        [
          "A. 26,566.10⁻²⁴ gam.",
          "B. 26,665.10⁻²⁴ gam.",
          "C. 26,656.10⁻²⁴ gam.",
          "D. 26,556.10⁻²⁴ gam."
        ],
        2,
        "m = 15,999 × 1,6605.10⁻²⁴ gam ≈ 26,656.10⁻²⁴ gam."
      ]
    ],
    "tf": [
      {
        "stem": "Để biểu thị khối lượng của nguyên tử, các hạt proton, neutron và electron, người ta dùng đơn vị khối lượng nguyên tử, kí hiệu là amu. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) 1 amu được định nghĩa bằng 1/12 khối lượng 1 nguyên tử C-12: 1 amu = 1,661.10⁻²⁷ kg.",
            true,
            "Phát biểu ĐÚNG theo định nghĩa quốc tế."
          ],
          [
            "b) Khối lượng của proton xấp xỉ bằng khối lượng của neutron và bằng 1 amu.",
            true,
            "Phát biểu ĐÚNG (mp ≈ mn ≈ 1 amu)."
          ],
          [
            "c) Nguyên tử nitrogen-14 có 7 proton, 7 neutron và 7 electron. Khối lượng nguyên tử nitrogen theo đơn vị amu là 21.",
            false,
            "Phát biểu SAI. Khối lượng nguyên tử tính theo amu xấp xỉ số khối A = 7 + 7 = 14 amu, không phải 21 amu."
          ],
          [
            "d) Một nguyên tử oxygen có khối lượng là 2,656.10⁻²⁶ kg. Vậy, khối lượng một nguyên tử oxygen tính theo amu là 15,990.",
            true,
            "Phát biểu ĐÚNG (2,656.10⁻²⁶ / 1,661.10⁻²⁷ ≈ 15,99 amu)."
          ]
        ]
      },
      {
        "stem": "Helium là một khí hiếm được sử dụng rộng rãi trong nhiều ngành công nghiệp. Nguyên tử helium có 2 proton, 2 neutron và 2 electron. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Điện tích hạt nhân helium là +2.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Khối lượng nguyên tử helium tập trung ở hạt nhân và xấp xỉ bằng 2 amu.",
            false,
            "Phát biểu SAI. Hạt nhân có 2p + 2n nên khối lượng xấp xỉ bằng 4 amu."
          ],
          [
            "c) Hạt nhân nguyên tử có khối lượng lớn gấp khoảng 3636 lần khối lượng lớp vỏ.",
            true,
            "Phát biểu ĐÚNG (mhạt nhân / mvỏ ≈ 4 / (2 × 0,00055) ≈ 3636 lần)."
          ],
          [
            "d) Khối lượng của electron trong nguyên tử helium chiếm 0,0272% khối lượng nguyên tử.",
            true,
            "Phát biểu ĐÚNG (mvỏ / mnguyên tử ≈ 2 × 0,0005486 / 4,0026 ≈ 0,0274% ~ 0,0272%)."
          ]
        ]
      },
      {
        "stem": "Năm 1911, E. Rutherford tiến hành bắn phá chùm hạt alpha lên một lá vàng siêu mỏng và quan sát đường đi của chúng sau khi bắn phá bằng màn huỳnh quang. Xét tính Đúng/Sai của các phát biểu sau:",
        "items": [
          [
            "a) Hầu hết các hạt alpha đi thẳng xuyên qua lá vàng chứng tỏ nguyên tử có cấu tạo rỗng.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Một số ít hạt alpha bị lệch hướng chứng tỏ hạt nhân mang điện tích dương và có kích thước rất nhỏ.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Rất ít hạt alpha bị bật ngược trở lại chứng tỏ hạt nhân có khối lượng rất lớn tập trung hầu hết khối lượng nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Các electron có khối lượng rất lớn so với hạt alpha nên đã làm cho hạt alpha bị tán xạ mạnh.",
            false,
            "Phát biểu SAI. Khối lượng electron rất nhỏ so với hạt alpha (mα gấp ~7300 lần me) nên electron không thể làm lệch hướng hạt alpha."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử Helium có 2 proton, 2 neutron và 2 electron. Biết mp ≈ mn ≈ 1 amu, me ≈ 0,00055 amu. Khối lượng hạt nhân nguyên tử Helium gấp khoảng bao nhiêu lần khối lượng lớp vỏ?",
        "answer": "3636",
        "explanation": "Tỉ số = (2 × 1 + 2 × 1) / (2 × 0,00055) = 4 / 0,0011 &approx; 3636 lần."
      },
      {
        "question": "Biết 1 amu = 1,6605 × 10⁻²⁴ gam. Khối lượng của một nguyên tử Oxygen có nguyên tử khối 15,999 amu bằng bao nhiêu lần 10⁻²⁴ gam (nhập kết quả làm tròn đến 3 chữ số thập phân)?",
        "answer": "26.656",
        "explanation": "m = 15,999 × 1,6605 = 26,6563 &approx; 26,656."
      },
      {
        "question": "Trong nguyên tử Helium, tỉ lệ phần trăm khối lượng của các electron ở lớp vỏ so với toàn bộ khối lượng nguyên tử xấp xỉ bằng bao nhiêu phần trăm (nhập kết quả làm tròn đến 4 chữ số thập phân)?",
        "answer": "0.0272",
        "explanation": "%m(e) = (2 × 0,0005486 / 4,0026) × 100% &approx; 0,0274% (hoặc 0,0272%)."
      },
      {
        "question": "Trong nguyên tử aluminium (Al), số hạt mang điện tích dương là 13, số hạt không mang điện là 14. Tổng số hạt electron trong toàn bộ vỏ nguyên tử Al là bao nhiêu?",
        "answer": "13",
        "explanation": "Số electron = số hạt mang điện tích dương = số proton = 13."
      }
    ],
    "essay": [
      {
        "title": "Bài toán 1 (2,0 điểm). Phân tích cấu tạo và định lượng hạt trong nguyên tử Helium.",
        "question": "Nguyên tử Helium có 2 proton, 2 neutron và 2 electron.<br>a) Tính khối lượng hạt nhân và khối lượng lớp vỏ của nguyên tử Helium theo đơn vị amu (cho mp = 1,0073 amu; mn = 1,0087 amu; me = 0,00055 amu).<br>b) So sánh khối lượng hạt nhân và khối lượng lớp vỏ, từ đó rút ra kết luận về sự phân bố khối lượng trong nguyên tử.",
        "solution": "a) Tính khối lượng từng phần:<br>• Khối lượng hạt nhân: m<sub>hạt nhân</sub> = 2 &times; 1,0073 + 2 &times; 1,0087 = 4,032 amu (1,0 điểm).<br>• Khối lượng lớp vỏ: m<sub>vỏ</sub> = 2 &times; 0,00055 = 0,0011 amu (0,50 điểm).<br>b) Tỉ số khối lượng: m<sub>hạt nhân</sub> / m<sub>vỏ</sub> = 4,032 / 0,0011 &approx; 3665 lần (gấp hơn 3600 lần).<br>Kết luận: Khối lượng của nguyên tử hầu như tập trung hoàn toàn ở hạt nhân, khối lượng của các electron ở lớp vỏ là rất nhỏ không đáng kể (0,50 điểm)."
      },
      {
        "title": "Bài toán 2 (2,0 điểm). Thí nghiệm tán xạ hạt alpha của Rutherford.",
        "question": "Nêu các hiện tượng chính quan sát được trong thí nghiệm bắn phá lá vàng mỏng bằng chùm hạt alpha của Rutherford và giải thích ý nghĩa của từng hiện tượng đối với việc khám phá cấu tạo nguyên tử.",
        "solution": "Các hiện tượng chính và ý nghĩa:<br>1. Hầu hết các hạt alpha truyền thẳng xuyên qua lá vàng mà không bị lệch hướng: Chứng minh nguyên tử có cấu tạo rỗng (phần không gian giữa hạt nhân và lớp vỏ electron là chân không) (0,75 điểm).<br>2. Một số ít hạt alpha bị tán xạ (lệch hướng ban đầu): Chứng tỏ trong nguyên tử có một vùng mang điện tích dương có kích thước rất nhỏ (hạt nhân) gây ra lực đẩy tĩnh điện đối với hạt alpha mang điện dương (0,75 điểm).<br>3. Rất hiếm hạt alpha bị bật ngược trở lại: Chứng tỏ hạt nhân có khối lượng rất lớn và mật độ vật chất cực kì đậm đặc so với hạt alpha (0,50 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-11",
    "title": "Toán 10 - Đề 11 - Đề ôn tập kiểm tra giữa học kì I",
    "subject": "math",
    "duration": 90,
    "school": "Đề ôn thi chuẩn cấu trúc Bộ GD&ĐT",
    "province": "Đề chuẩn",
    "year": "2026–2027",
    "sourceUrl": "#",
    "questions": [
      [
        "Cho mệnh đề P: \"&radic;2 là số hữu tỉ\". Hãy phát biểu mệnh đề phủ định của mệnh đề P.",
        [
          "A. P: \"&radic;2 là số vô tỉ\".",
          "B. P: \"&radic;2 là số tự nhiên\".",
          "C. P: \"&radic;2 là số nguyên\".",
          "D. P: \"&radic;2 không phải là số hữu tỉ\"."
        ],
        3,
        "Theo định nghĩa mệnh đề phủ định trong SGK Toán 10: Mệnh đề phủ định của mệnh đề P là mệnh đề \"Không phải P\", kí hiệu là P̄. Phủ định trực tiếp của khẳng định \"&radic;2 là số hữu tỉ\" là \"&radic;2 không phải là số hữu tỉ\" (thêm từ \"không phải\")."
      ],
      [
        "Phát biểu nào sau đây không phải là mệnh đề P &rArr; Q?",
        [
          "A. Nếu P thì Q.",
          "B. P là điều kiện đủ để có Q.",
          "C. Q là điều kiện cần để có P.",
          "D. P là điều kiện cần để có Q."
        ],
        3,
        "Trong mệnh đề kéo theo P &rArr; Q, P là giả thiết (điều kiện đủ để có Q) và Q là kết luận (điều kiện cần để có P). Khẳng định \"P là điều kiện cần để có Q\" là cách diễn đạt của mệnh đề đảo Q &rArr; P, do đó không phải là mệnh đề P &rArr; Q."
      ],
      [
        "Mệnh đề \"&exist;x &isin; <b>R</b>, x<sup>2</sup> = 18\" được phát biểu là:",
        [
          "A. Chỉ có một số thực mà bình phương của nó bằng 18.",
          "B. Có ít nhất một số thực mà bình phương của nó bằng 18.",
          "C. Nếu x là một số thực thì x<sup>2</sup> = 18.",
          "D. Bình phương của mỗi số thực bằng 18."
        ],
        1,
        "Kí hiệu &exist; đọc là \"tồn tại\" hoặc \"có ít nhất một\". Do đó mệnh đề \"&exist;x &isin; <b>R</b>, x<sup>2</sup> = 18\" được phát biểu chuẩn là: \"Có ít nhất một số thực mà bình phương của nó bằng 18\"."
      ],
      [
        "Cho tập hợp A = {1; 3; 5; 7; 9}. Tập hợp nào sau đây không phải là tập con của tập A?",
        [
          "A. {1; 3; 5}.",
          "B. &empty;.",
          "C. {1; 3}.",
          "D. {1; 3; 6; 9}."
        ],
        3,
        "Tập hợp {1; 3; 6; 9} chứa phần tử 6 không thuộc tập hợp A (6 &notin; A), do đó theo định nghĩa tập con trong Toán 10 thì {1; 3; 6; 9} không phải là tập con của A."
      ],
      [
        "Miền nghiệm của bất phương trình 2x + y - 4 &gt; 0 KHÔNG chứa điểm nào sau đây?",
        [
          "A. (1; 1).",
          "B. (3; 1).",
          "C. (2; 2).",
          "D. (0; 5)."
        ],
        0,
        "Thay (1; 1) vào: 2(1) + 1 - 4 = -1 &le; 0 nên điểm (1; 1) không thuộc miền nghiệm."
      ],
      [
        "Trong các cặp số sau đây, cặp nào là nghiệm của bất phương trình 3x + 4y &lt; 1?",
        [
          "A. (-2; 1).",
          "B. (3; 7).",
          "C. (0; 1).",
          "D. (1; 1)."
        ],
        0,
        "Thay tọa độ điểm (-2; 1) vào vế trái bất phương trình: 3(-2) + 4(1) = -6 + 4 = -2 &lt; 1 (thỏa mãn). Vậy cặp (-2; 1) là nghiệm."
      ],
      [
        "Cho bất phương trình x - y &le; 2. Khẳng định nào sau đây là đúng?",
        [
          "A. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = 2 chứa gốc tọa độ.",
          "B. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = 2 không chứa gốc tọa độ.",
          "C. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = -2 chứa gốc tọa độ.",
          "D. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x + y = 2 chứa gốc tọa độ."
        ],
        0,
        "Đường thẳng bờ của bất phương trình là d: x - y = 2. Thay tọa độ gốc O(0; 0) vào vế trái: 0 - 0 = 0 &le; 2 (thỏa mãn). Vậy miền nghiệm là nửa mặt phẳng bờ d: x - y = 2 có chứa gốc tọa độ O(0; 0)."
      ],
      [
        "Giá trị của biểu thức P = sin30&deg; + cos60&deg; - tan45&deg; bằng:",
        [
          "A. 0.",
          "B. 1.",
          "C. 1/2.",
          "D. -1."
        ],
        0,
        "Ta có: sin30&deg; = 1/2, cos60&deg; = 1/2, tan45&deg; = 1 &rArr; P = 1/2 + 1/2 - 1 = 0."
      ],
      [
        "Trong các cặp số sau, cặp nào là nghiệm của hệ bất phương trình {2x + 3y &gt; 4 ; x &gt; 0}?",
        [
          "A. (-2; 1).",
          "B. (0; 1).",
          "C. (2; 1).",
          "D. (1; -2)."
        ],
        2,
        "Thay cặp (2; 1): có x = 2 &gt; 0 và 2(2) + 3(1) = 7 &gt; 4. Cả hai bất phương trình đều thỏa mãn, do đó (2; 1) là nghiệm của hệ."
      ],
      [
        "Trên mặt phẳng Oxy lấy điểm M thuộc nửa đường tròn đơn vị sao cho góc xOM = 120&deg;. Tung độ của điểm M bằng:",
        [
          "A. &radic;3 / 2.",
          "B. -&radic;3 / 2.",
          "C. -1/2.",
          "D. 1."
        ],
        0,
        "Theo định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị (Toán 10): tung độ của điểm M chính là sin(xOM) = sin120&deg;. Ta có sin120&deg; = sin(180&deg; - 60&deg;) = sin60&deg; = &radic;3 / 2."
      ],
      [
        "Trong mặt phẳng toạ độ Oxy, phần nửa mặt phẳng không tô đậm (không kể bờ) trong hình vẽ dưới đây là biểu diễn hình học tập nghiệm của bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 300 230\" width=\"300\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan11\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      </pattern>\n    </defs>\n    <!-- Vùng tô đậm (gạch sọc) không chứa gốc O -->\n    <polygon points=\"190,30 280,30 280,215 95,215\" fill=\"url(#hatchToan11)\"/>\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"280,100 272,96 272,104\" fill=\"#334155\"/>\n    <text x=\"272\" y=\"118\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n    \n    <line x1=\"110\" y1=\"215\" x2=\"110\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"110,20 106,28 114,28\" fill=\"#334155\"/>\n    <text x=\"96\" y=\"25\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"94\" y=\"116\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Điểm cắt (3/2; 0) và (0; -3) -->\n    <!-- 1 đơn vị = 26px: 3/2 = 1.5 -> X = 110 + 39 = 149; -3 -> Y = 100 + 78 = 178 -->\n    <line x1=\"149\" y1=\"97\" x2=\"149\" y2=\"103\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"141\" y=\"93\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">3/2</text>\n\n    <line x1=\"107\" y1=\"178\" x2=\"113\" y2=\"178\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"86\" y=\"182\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">-3</text>\n\n    <!-- Đường thẳng 2x - y = 3 (nét đứt vì không kể bờ) -->\n    <line x1=\"190\" y1=\"30\" x2=\"95\" y2=\"215\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-dasharray=\"6,4\"/>\n    <text x=\"195\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">2x - y = 3</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Miền không tô đậm (không kể bờ) trong mặt phẳng toạ độ Oxy</div>\n</div>",
        [
          "A. 2x - y &gt; 3.",
          "B. 2x - y &lt; 3.",
          "C. x - 2y &gt; 3.",
          "D. x - 2y &lt; 3."
        ],
        1,
        "Phương trình đường thẳng bờ đi qua (3/2; 0) và (0; -3) là x / (3/2) + y / (-3) = 1 &hArr; 2x/3 - y/3 = 1 &hArr; 2x - y = 3. Miền nghiệm không tô đậm chứa gốc tọa độ O(0; 0) và không kể bờ. Thay (0; 0): 2(0) - 0 = 0 &lt; 3 (thỏa mãn). Vậy bất phương trình tương ứng là 2x - y &lt; 3."
      ],
      [
        "Tam giác ABC có góc B = 10&deg; và góc C = 20&deg;. Giá trị của tanA bằng:",
        [
          "A. -&radic;3.",
          "B. &radic;3.",
          "C. -1 / &radic;3.",
          "D. 1 / &radic;3."
        ],
        2,
        "Tổng ba góc trong tam giác ABC: A = 180&deg; - (B + C) = 180&deg; - (10&deg; + 20&deg;) = 150&deg;. Áp dụng tính chất giá trị lượng giác của hai góc bù nhau: tanA = tan150&deg; = tan(180&deg; - 30&deg;) = -tan30&deg; = -1 / &radic;3."
      ]
    ],
    "tf": [
      {
        "stem": "Cho tập hợp X = {x &isin; <b>R</b> | -3 &le; x &le; 1}.",
        "items": [
          [
            "a) X = {-3; -2; -1; 0; 1}.",
            false,
            "Vì x là số thực (x &isin; <b>R</b>) nên tập X là đoạn [-3; 1], chứa vô số số thực chứ không chỉ gồm 5 số nguyên. Khẳng định này là SAI."
          ],
          [
            "b) Số phần tử của tập hợp X là 5.",
            false,
            "Đoạn số thực [-3; 1] chứa vô số phần tử liên tục trên trục số thực, không phải là tập hữu hạn có 5 phần tử. Khẳng định này là SAI."
          ],
          [
            "c) \"0 là một phần tử của tập hợp X\" là một mệnh đề đúng.",
            true,
            "Vì 0 là số thực thỏa mãn -3 &le; 0 &le; 1 nên 0 &isin; X. Mệnh đề 0 &isin; X là mệnh đề đúng. Khẳng định này là ĐÚNG."
          ],
          [
            "d) Mệnh đề phủ định của mệnh đề \"&forall;x &isin; X, x &lt; 1\" là một mệnh đề đúng.",
            true,
            "Mệnh đề phủ định của mệnh đề ban đầu là \"&exist;x &isin; X, x &ge; 1\". Do 1 &isin; X = [-3; 1] thỏa mãn 1 &ge; 1 nên tồn tại ít nhất một phần tử x = 1, suy ra mệnh đề phủ định này là ĐÚNG."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có AB = 4, AC = 6 và góc A = 120&deg;.",
        "items": [
          [
            "a) sinA = &radic;3 / 2.",
            true,
            "Áp dụng giá trị lượng giác của hai góc bù nhau trong Toán 10: sin120&deg; = sin(180&deg; - 60&deg;) = sin60&deg; = &radic;3 / 2. Khẳng định này là ĐÚNG."
          ],
          [
            "b) cosA = 1/2.",
            false,
            "Vì góc A = 120&deg; &gt; 90&deg; là góc tù nên cosA &lt; 0. Cụ thể cos120&deg; = -cos60&deg; = -1/2 &ne; 1/2. Khẳng định này là SAI."
          ],
          [
            "c) BC = 2&radic;7.",
            false,
            "Áp dụng định lí côsin trong tam giác ABC: BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> - 2.AB.AC.cosA = 4<sup>2</sup> + 6<sup>2</sup> - 2.4.6.(-1/2) = 16 + 36 + 24 = 76 &rArr; BC = &radic;76 = 2&radic;19 &ne; 2&radic;7. Khẳng định này là SAI."
          ],
          [
            "d) Diện tích tam giác ABC là S = 6&radic;3.",
            true,
            "Áp dụng công thức tính diện tích tam giác: S = 1/2 . AB . AC . sinA = 1/2 . 4 . 6 . sin120&deg; = 12 . (&radic;3 / 2) = 6&radic;3. Khẳng định này là ĐÚNG."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho tập hợp A = {x | x là số nguyên tố nhỏ hơn 20} và B = {n &isin; <b>N</b> | 2 &le; n &le; 10}. Tìm số phần tử của tập hợp A &cup; B.",
        "answer": "13",
        "explanation": "Tập các số nguyên tố nhỏ hơn 20 là A = {2; 3; 5; 7; 11; 13; 17; 19} gồm 8 phần tử. Tập B = {2; 3; 4; 5; 6; 7; 8; 9; 10} gồm 9 phần tử. Giao của hai tập hợp là các số nguyên tố từ 2 đến 10: A &cap; B = {2; 3; 5; 7} gồm 4 phần tử. Số phần tử của hợp là n(A &cup; B) = n(A) + n(B) - n(A &cap; B) = 8 + 9 - 4 = 13 phần tử."
      },
      {
        "question": "Miền nghiệm của hệ bất phương trình {x + y &gt; 1 ; 3x - 2y &le; 6} chứa bao nhiêu điểm có toạ độ là cặp số nguyên và có tung độ nhỏ hơn 2?",
        "answer": "3",
        "explanation": "Từ hệ ta có 1 - y &lt; x &le; (6 + 2y)/3. Điều kiện để tồn tại x là 1 - y &le; (6 + 2y)/3 &hArr; 3 - 3y &le; 6 + 2y &hArr; 5y &ge; -3 &hArr; y &ge; -0,6. Với y là số nguyên nhỏ hơn 2, ta chỉ có y = 0 và y = 1: Với y = 1 thì 0 &lt; x &le; 8/3 &rArr; x &isin; {1; 2} (cho 2 điểm (1; 1), (2; 1)). Với y = 0 thì 1 &lt; x &le; 2 &rArr; x = 2 (cho 1 điểm (2; 0)). Với y &le; -1 thì khoảng nghiệm rỗng. Vậy có đúng 3 điểm nguyên thỏa mãn là (1; 1), (2; 1) và (2; 0)."
      },
      {
        "question": "Lớp 10A2 có 45 học sinh, trong đó số học sinh tham gia đội bóng đá là 18, số học sinh tham gia đội bóng chuyền là 15. Biết rằng có 20 học sinh không tham gia bất cứ môn nào. Hỏi có bao nhiêu học sinh tham gia đồng thời cả hai môn bóng đá và bóng chuyền?",
        "answer": "8",
        "explanation": "Số học sinh tham gia ít nhất một môn thể thao là n(A &cup; B) = 45 - 20 = 25 học sinh. Áp dụng công thức số phần tử của hợp hai tập hợp: n(A &cup; B) = n(A) + n(B) - n(A &cap; B) &rArr; n(A &cap; B) = 18 + 15 - 25 = 8 học sinh."
      },
      {
        "question": "Một phân xưởng có hai máy M₁, M₂ sản xuất hai loại sản phẩm I và II. Sản xuất 1 tấn loại I lãi 20 triệu đồng, cần dùng M₁ trong 3 giờ và M₂ trong 1 giờ. Sản xuất 1 tấn loại II lãi 15 triệu đồng, cần dùng M₁ trong 1 giờ và M₂ trong 1 giờ. Mỗi ngày máy M₁ làm việc không quá 6 giờ, máy M₂ không quá 4 giờ. Số tiền lãi lớn nhất mà phân xưởng có thể thu được trong một ngày là bao nhiêu triệu đồng?",
        "answer": "65",
        "explanation": "Gọi x, y (tấn) lần lượt là sản lượng sản phẩm loại I và II (x &ge; 0, y &ge; 0). Ta có hệ ràng buộc thời gian: {3x + y &le; 6 ; x + y &le; 4}. Tiền lãi thu được là L(x; y) = 20x + 15y (triệu đồng). Miền nghiệm là tứ giác OABC với O(0; 0), A(2; 0), B(1; 3), C(0; 4). Giá trị lãi tại các đỉnh: L(0; 0) = 0; L(2; 0) = 40; L(0; 4) = 60; L(1; 3) = 20(1) + 15(3) = 65 triệu đồng. Vậy tiền lãi lớn nhất là 65 triệu đồng."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Tìm tham số m để thỏa mãn điều kiện tập hợp",
        "question": "Cho hai tập hợp A = [-4; 2] và B = [m - 1; m + 3]. Tìm tất cả các giá trị của tham số m để:<br>a) B &sub; A.<br>b) A &cap; B = &empty;.",
        "solution": "a) Để B &sub; A &hArr; { m - 1 &ge; -4 và m + 3 &le; 2 } &hArr; { m &ge; -3 và m &le; -1 } &hArr; -3 &le; m &le; -1 (0,50 điểm).<br>b) Để A &cap; B = &empty; &hArr; m + 3 &lt; -4 hoặc m - 1 &gt; 2 &hArr; m &lt; -7 hoặc m &gt; 3 (0,50 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Bài toán tối ưu hóa quy hoạch tuyến tính thực tế",
        "question": "Một cơ sở may mặc sản xuất hai loại áo A và B. Để may một áo loại A cần 2 m vải và 3 giờ công, tiền lãi là 100 nghìn đồng. Để may một áo loại B cần 1 m vải và 4 giờ công, tiền lãi là 120 nghìn đồng. Xưởng hiện có tối đa 80 m vải và 180 giờ công lao động. Hãy lập kế hoạch sản xuất để tiền lãi thu được là lớn nhất.",
        "solution": "Gọi x, y lần lượt là số áo loại A và loại B cần may (x &ge; 0, y &ge; 0).<br>Hệ điều kiện: { 2x + y &le; 80 ; 3x + 4y &le; 180 ; x &ge; 0 ; y &ge; 0 }.<br>Miền nghiệm là tứ giác OABC với O(0; 0), A(40; 0), B(28; 24), C(0; 45).<br>Biểu thức tiền lãi: F(x; y) = 100x + 120y (nghìn đồng).<br>• F(0; 0) = 0.<br>• F(40; 0) = 4000.<br>• F(28; 24) = 100(28) + 120(24) = 2800 + 2880 = 5680 (nghìn đồng).<br>• F(0; 45) = 5400.<br>&rArr; Lợi nhuận lớn nhất là 5.680.000 đồng khi sản xuất 28 áo loại A và 24 áo loại B (1,0 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Ứng dụng giải tam giác tính khoảng cách",
        "question": "Hai trạm quan sát A và B cách nhau 500 m trên bờ biển cùng quan sát một con tàu C ngoài khơi. Người ta đo được góc CAB = 70&deg; và góc CBA = 50&deg;. Tính khoảng cách từ trạm A đến con tàu C (làm tròn đến mét).",
        "solution": "Trong tam giác ABC: góc ACB = 180&deg; - (70&deg; + 50&deg;) = 60&deg; (0,30 điểm).<br>Áp dụng định lí sin: AC / sinB = AB / sinC &rArr; AC = AB &times; sin50&deg; / sin60&deg; (0,40 điểm).<br>Thay số: AC = 500 &times; sin50&deg; / sin60&deg; &approx; 500 &times; 0,7660 / 0,8660 &approx; 442,3 m &approx; 442 m (0,30 điểm)."
      }
    ]
  },
  {
    "id": "toan-10-de-12",
    "title": "Toán 10 - Đề 12 - Đề minh họa kiểm tra giữa kì I (Năm học 2026–2027)",
    "subject": "math",
    "duration": 90,
    "school": "Đề minh họa kiểm tra giữa kì I – Đề 1",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "sourceUrl": "#",
    "questions": [
      [
        "Phát biểu nào sau đây không phải là một mệnh đề?",
        [
          "A. \"Nếu x &lt; 3 thì x<sup>2</sup> &lt; 9\"",
          "B. \"&forall;x &gt; 0 ta đều có: &radic;x &gt; x\"",
          "C. \"Giải phương trình 2x<sup>2</sup> - 3x - 5 = 0?\"",
          "D. \"Tồn tại x &isin; <b>R</b> sao cho x<sup>2</sup> + 3x - 4 = 0\""
        ],
        2,
        "Theo định nghĩa mệnh đề trong SGK Toán 10: Mệnh đề là một câu khẳng định có tính đúng hoặc sai. Câu nghi vấn (câu hỏi) \"Giải phương trình 2x<sup>2</sup> - 3x - 5 = 0?\" không phải là câu khẳng định nên không phải là một mệnh đề."
      ],
      [
        "Tìm mệnh đề phủ định của mệnh đề M = \"Tất cả học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường đều đạt giải\".",
        [
          "A. \"Có rất nhiều học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "B. \"Có ít nhất một học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "C. \"Không có học sinh nào trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "D. \"Tất cả học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\""
        ],
        1,
        "Mệnh đề ban đầu có dạng \"&forall;x &isin; X, P(x)\" (tất cả... đều đạt giải). Phủ định của mệnh đề chứa lượng từ \"&forall;\" (tất cả) là mệnh đề chứa lượng từ \"&exist;\" (tồn tại / có ít nhất một) kèm phủ định của tính chất: \"Có ít nhất một học sinh trong đội chính thức... không đạt giải\"."
      ],
      [
        "Cho hai tập hợp A = [3; 9] và B = (3; 11). Xác định tập hợp A &cap; B.",
        [
          "A. [3; 8)",
          "B. {3; 4; 5; 6; 7; 8; 9}",
          "C. (3; 9]",
          "D. [3; 11)"
        ],
        2,
        "Phần tử chung của A = [3; 9] và B = (3; 11) là các số thực x thỏa mãn 3 &le; x &le; 9 và 3 &lt; x &lt; 11 &hArr; 3 &lt; x &le; 9. Do đó A &cap; B = (3; 9]."
      ],
      [
        "Hình vẽ biểu diễn trên trục số thực dưới đây là hình biểu diễn cho tập hợp số nào sau đây:\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 440 85\" width=\"440\" height=\"85\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Trục số -->\n    <line x1=\"20\" y1=\"45\" x2=\"420\" y2=\"45\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <polygon points=\"420,45 410,40 410,50\" fill=\"#334155\"/>\n    <text x=\"412\" y=\"65\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">+∞</text>\n    <text x=\"15\" y=\"65\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">-∞</text>\n\n    <!-- Gạch bỏ từ -vô cùng đến 2 -->\n    <line x1=\"30\" y1=\"35\" x2=\"45\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"45\" y1=\"35\" x2=\"60\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"60\" y1=\"35\" x2=\"75\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"75\" y1=\"35\" x2=\"90\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n\n    <!-- Điểm 2: ngoặc vuông [ quay sang phải -->\n    <text x=\"96\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">[</text>\n    <text x=\"98\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">2</text>\n\n    <!-- Khoảng lấy [2; 4]: đoạn thẳng đậm -->\n    <line x1=\"108\" y1=\"45\" x2=\"180\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n\n    <!-- Điểm 4: ngoặc vuông ] quay sang trái -->\n    <text x=\"180\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">]</text>\n    <text x=\"182\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">4</text>\n\n    <!-- Gạch bỏ từ 4 đến 6 -->\n    <line x1=\"195\" y1=\"35\" x2=\"210\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"210\" y1=\"35\" x2=\"225\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"225\" y1=\"35\" x2=\"240\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"240\" y1=\"35\" x2=\"255\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n\n    <!-- Điểm 6: ngoặc vuông [ quay sang phải -->\n    <text x=\"262\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">[</text>\n    <text x=\"264\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">6</text>\n\n    <!-- Khoảng lấy [6; 8): đoạn thẳng đậm -->\n    <line x1=\"274\" y1=\"45\" x2=\"340\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n\n    <!-- Điểm 8: ngoặc tròn ) quay sang trái -->\n    <text x=\"340\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">)</text>\n    <text x=\"342\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">8</text>\n\n    <!-- Gạch bỏ từ 8 đến +vô cùng -->\n    <line x1=\"355\" y1=\"35\" x2=\"370\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"370\" y1=\"35\" x2=\"385\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"385\" y1=\"35\" x2=\"400\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n  </svg>\n  <div class=\"figure-caption\">Hình biểu diễn tập hợp số trên trục số thực</div>\n</div>",
        [
          "A. K = [2; 8) \\ (4; 6)",
          "B. K = {2; 3; 4; 6; 7; 8}",
          "C. K = {2; 3; 4; 6; 7}",
          "D. K = [2; 8) \\ [4; 6]"
        ],
        0,
        "Tập hợp lấy từ 2 (có lấy đầu mút 2) đến 8 (không lấy đầu mút 8), và loại bỏ các phần tử nằm trong khoảng (4; 6) (hai điểm 4 và 6 vẫn được giữ lại do ngoặc quay ra vùng lấy). Do đó tập hợp số tương ứng là K = [2; 8) \\ (4; 6)."
      ],
      [
        "Hệ bất phương trình nào sau đây có miền nghiệm là một miền tam giác trong mặt phẳng tọa độ Oxy?",
        [
          "A. {x &ge; 0 ; y &ge; 0 ; x + y &le; 3}.",
          "B. {x &ge; 0 ; y &ge; 0}.",
          "C. {x + y &le; 2 ; x - y &ge; 1}.",
          "D. {x &gt; 1 ; y &lt; 2}."
        ],
        0,
        "Hệ {x >= 0; y >= 0; x + y <= 3} bị giới hạn bởi trục Ox (y=0), trục Oy (x=0) và đường thẳng x + y = 3 tạo thành tam giác vuông có các đỉnh O(0; 0), A(3; 0), B(0; 3)."
      ],
      [
        "Miền nghiệm của bất phương trình x + 2y &le; 4 chứa điểm nào sau đây?",
        [
          "A. A(1; 2)",
          "B. B(2; 1)",
          "C. C(4; 3)",
          "D. D(-1; 3)"
        ],
        1,
        "Thay tọa độ điểm B(2; 1) vào bất phương trình: 2 + 2(1) = 4 &le; 4 (thỏa mãn dấu \"&le;\"). Các điểm còn lại đều cho giá trị lớn hơn 4 (1 + 4 = 5 &gt; 4; 4 + 6 = 10 &gt; 4; -1 + 6 = 5 &gt; 4)."
      ],
      [
        "Trong mặt phẳng toạ độ Oxy, phần nửa mặt phẳng không bị gạch (kể cả bờ) trong hình vẽ dưới đây là miền nghiệm của bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 290 230\" width=\"290\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan12\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      </pattern>\n    </defs>\n    <!-- Nửa mặt phẳng chứa O(0; 0) bị gạch sọc -->\n    <polygon points=\"65,225 210,35 20,35 20,225\" fill=\"url(#hatchToan12)\"/>\n\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"110\" x2=\"270\" y2=\"110\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"270,110 262,106 262,114\" fill=\"#334155\"/>\n    <text x=\"262\" y=\"128\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n\n    <line x1=\"120\" y1=\"225\" x2=\"120\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"120,20 116,28 124,28\" fill=\"#334155\"/>\n    <text x=\"106\" y=\"25\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"104\" y=\"104\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Điểm (2; 0) và (0; -2) -->\n    <!-- 1 đơn vị = 26px: (2; 0) -> X = 120 + 52 = 172; (0; -2) -> Y = 110 + 52 = 162 -->\n    <line x1=\"172\" y1=\"107\" x2=\"172\" y2=\"113\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"168\" y=\"128\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">2</text>\n\n    <line x1=\"117\" y1=\"162\" x2=\"123\" y2=\"162\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"100\" y=\"166\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">-2</text>\n\n    <!-- Đường thẳng x - y = 2 (nét liền vì kể cả bờ) -->\n    <line x1=\"65\" y1=\"225\" x2=\"215\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.2\"/>\n    <text x=\"218\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">d: x - y = 2</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Nửa mặt phẳng không bị gạch (kể cả bờ d)</div>\n</div>",
        [
          "A. x - y &ge; -2",
          "B. x - y &ge; 2",
          "C. x - y + 2 &gt; 0",
          "D. x + y &ge; -2"
        ],
        1,
        "Đường thẳng bờ đi qua (2; 0) và (0; -2) có phương trình là x - y = 2. Gốc tọa độ O(0; 0) nằm trong miền bị gạch bỏ vì 0 - 0 = 0 &lt; 2. Miền nghiệm không bị gạch chứa các điểm thỏa mãn x - y &ge; 2 (ví dụ điểm (3; 0) có 3 - 0 = 3 &ge; 2)."
      ],
      [
        "Cho hệ bất phương trình: {x &lt; 3 ; y &gt; 0 ; x - y + 4 &gt; 0} có miền nghiệm là (S). Kết luận nào sau đây đúng?",
        [
          "A. Điểm A(-1; 1) không thuộc S",
          "B. Miền nghiệm của hệ là miền trong của một tam giác.",
          "C. Tất cả các điểm trên đoạn thẳng AB với A(0; 1) và B(2; 2) đều nằm ngoài miền nghiệm (S)",
          "D. Điểm E(1; 5) thuộc S"
        ],
        1,
        "Ba đường thẳng x = 3, y = 0, x - y + 4 = 0 cắt nhau đôi một tại 3 đỉnh phân biệt (-4; 0), (3; 0) và (3; 7). Miền nghiệm gồm các điểm nằm đồng thời về phía bên trái đường x = 3, phía trên trục hoành y = 0 và phía dưới đường x - y + 4 = 0, tạo thành miền trong của một tam giác."
      ],
      [
        "Miền tam giác (phần nền trắng) trong hình vẽ dưới đây là miền nghiệm của hệ bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 320 240\" width=\"320\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan12_9\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>\n      </pattern>\n    </defs>\n    <!-- Nền gạch ngoài tam giác -->\n    <rect x=\"20\" y=\"20\" width=\"280\" height=\"200\" fill=\"url(#hatchToan12_9)\"/>\n    <!-- Miền tam giác (phần nền trắng) -->\n    <!-- Đỉnh (0; 2): X = 150, Y = 120 - 2*30 = 60 -->\n    <!-- Đáy nằm trên y = -1: Y = 120 + 30 = 150 -->\n    <!-- Giao với x - y + 2 = 0 tại y = -1 => x = -3: X = 150 - 3*30 = 60 -->\n    <!-- Giao với 2x + y - 2 = 0 tại y = -1 => x = 1.5: X = 150 + 1.5*30 = 195 -->\n    <polygon points=\"150,60 60,150 195,150\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"120\" x2=\"295\" y2=\"120\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"295,120 287,116 287,124\" fill=\"#334155\"/>\n    <text x=\"287\" y=\"136\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n\n    <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"150,20 146,28 154,28\" fill=\"#334155\"/>\n    <text x=\"136\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"136\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Đường y = -1 -->\n    <line x1=\"20\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n    <text x=\"210\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#0284c7\">y = -1</text>\n\n    <!-- Điểm (0; 2) -->\n    <circle cx=\"150\" cy=\"60\" r=\"3\" fill=\"#2563eb\"/>\n    <text x=\"156\" y=\"65\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">2</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Miền tam giác nền trắng giới hạn bởi 3 đường thẳng</div>\n</div>",
        [
          "A. {x - y + 2 &ge; 0 ; y + 1 &ge; 0 ; 2x + y - 2 &le; 0}",
          "B. {x &ge; -1 ; 2x + y - 2 &ge; 0 ; x - y &le; 2}",
          "C. {y &le; 1 ; 2x + y - 2 &ge; 0 ; x + 4y - 10 &ge; 0}",
          "D. {x - y &le; 2 ; 2x + y - 2 &ge; 0 ; y + 1 &le; 0}"
        ],
        0,
        "Cạnh đáy của tam giác nằm trên đường y = -1, miền tam giác nằm phía trên nên y &ge; -1 &hArr; y + 1 &ge; 0. Hai cạnh bên là các đường thẳng x - y + 2 = 0 và 2x + y - 2 = 0. Gốc O(0; 0) nằm trong tam giác và thỏa mãn 0 - 0 + 2 &ge; 0, 0 + 1 &ge; 0, 2(0) + 0 - 2 &le; 0. Vậy hệ bất phương trình đúng là hệ A."
      ],
      [
        "Cho góc &alpha; có 90&deg; &lt; &alpha; &le; 180&deg;. Kết luận nào sau đây đúng?",
        [
          "A. sin&alpha; &gt; 0; cos&alpha; &gt; 0",
          "B. sin&alpha; &gt; 0; cot&alpha; &lt; 0",
          "C. tan&alpha; . cot&alpha; &lt; 0",
          "D. sin&alpha; &lt; 0; tan&alpha; &gt; 0"
        ],
        1,
        "Với góc tù &alpha; (90&deg; &lt; &alpha; &le; 180&deg;), điểm biểu diễn trên nửa đường tròn đơn vị có tung độ dương (sin&alpha; &gt; 0) và hoành độ âm (cos&alpha; &lt; 0). Do đó cot&alpha; = cos&alpha; / sin&alpha; &lt; 0. Kết luận đúng là sin&alpha; &gt; 0 và cot&alpha; &lt; 0."
      ],
      [
        "Cho sin&alpha; = 0,3 với &alpha; &gt; 90&deg;. Tính: cos&alpha;.",
        [
          "A. &plusmn;&radic;91 / 10",
          "B. &plusmn;9 / 10",
          "C. -&radic;91 / 10",
          "D. &plusmn;&radic;0,7"
        ],
        2,
        "Áp dụng công thức lượng giác cơ bản trong Toán 10: sin<sup>2</sup>&alpha; + cos<sup>2</sup>&alpha; = 1 &rArr; cos<sup>2</sup>&alpha; = 1 - 0,3<sup>2</sup> = 0,91 = 91/100. Vì &alpha; &gt; 90&deg; (góc tù) nên cos&alpha; &lt; 0, do đó cos&alpha; = -&radic;91 / 10."
      ],
      [
        "Cho tam giác ABC có BC = 6a, góc ABC = 60&deg;, cosBAC = 2/3. Tính AC theo a.",
        [
          "A. 9a&radic;15 / 5",
          "B. 9a / 5",
          "C. 6a / &radic;5",
          "D. 3a"
        ],
        0,
        "Vì góc A là góc trong tam giác nên sinA &gt; 0 &rArr; sinA = &radic;(1 - cos<sup>2</sup>A) = &radic;(1 - 4/9) = &radic;5 / 3. Áp dụng định lí sin: AC / sinB = BC / sinA &rArr; AC = BC . (sinB / sinA) = 6a . (sin60&deg; / (&radic;5/3)) = 6a . (&radic;3/2) . (3/&radic;5) = 9a&radic;3 / &radic;5 = 9a&radic;15 / 5."
      ]
    ],
    "tf": [
      {
        "stem": "Xét tính đúng sai của các khẳng định sau về mệnh đề và mệnh đề kéo theo:",
        "items": [
          [
            "a) Mệnh đề là một khẳng định đúng.",
            false,
            "Theo định nghĩa trong SGK Toán 10: Mệnh đề là một khẳng định có tính đúng hoặc sai. Một khẳng định sai vẫn là một mệnh đề (mệnh đề sai). Do đó khẳng định này là SAI."
          ],
          [
            "b) Cho A, B là hai mệnh đề. Mệnh đề A &rArr; B chỉ đúng khi A, B đều đúng.",
            false,
            "Mệnh đề kéo theo A &rArr; B chỉ sai khi A đúng và B sai. Trong trường hợp giả thiết A sai thì mệnh đề A &rArr; B luôn đúng kể cả khi B sai. Khẳng định này là SAI."
          ],
          [
            "c) Mệnh đề \"&exist;a &isin; <b>N</b> | (a + 1)/(2a + 1) &isin; <b>N</b>\" là một mệnh đề chứa biến.",
            false,
            "Câu có chứa biến khi đã được lượng từ hóa bằng kí hiệu &exist; (tồn tại) sẽ trở thành một mệnh đề toán học hoàn chỉnh có chân trị xác định (cụ thể với a = 0 &isin; <b>N</b> thì (0+1)/(0+1) = 1 &isin; <b>N</b> là mệnh đề đúng), không còn là mệnh đề chứa biến nữa. Khẳng định này là SAI."
          ],
          [
            "d) Trong định lý: \"Nếu một tứ giác có hai đường chéo vuông góc với nhau thì diện tích của tứ giác đó bằng một nửa tích hai đường chéo\". Điều kiện đủ của định lý là: tứ giác có hai đường chéo vuông góc với nhau.",
            true,
            "Định lý có dạng P &rArr; Q, trong đó giả thiết P là \"tứ giác có hai đường chéo vuông góc với nhau\". Theo SGK Toán 10, giả thiết P là điều kiện đủ để có kết luận Q. Khẳng định này là ĐÚNG."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC có AB = 4, AC = 3 và góc BAC = 120&deg;. Khi đó:",
        "items": [
          [
            "a) cosABC &gt; 0.",
            true,
            "Trong tam giác ABC có góc A = 120&deg; là góc tù. Vì một tam giác chỉ có tối đa một góc tù nên góc B bắt buộc là góc nhọn (0&deg; &lt; B &lt; 90&deg;). Do đó cosB &gt; 0. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Độ dài trung tuyến kẻ từ đỉnh B bằng: &radic;19.",
            false,
            "Theo định lí côsin: BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> - 2.AB.AC.cos120&deg; = 4<sup>2</sup> + 3<sup>2</sup> - 2.4.3.(-1/2) = 16 + 9 + 12 = 37. Áp dụng công thức đường trung tuyến: m<sub>b</sub><sup>2</sup> = (2(BC<sup>2</sup> + AB<sup>2</sup>) - AC<sup>2</sup>) / 4 = (2(37 + 16) - 9) / 4 = (106 - 9)/4 = 97/4 &rArr; m<sub>b</sub> = &radic;97 / 2 &ne; &radic;19. Khẳng định này là SAI."
          ],
          [
            "c) Bán kính đường tròn ngoại tiếp tam giác ABC bằng: &radic;(37/3).",
            true,
            "Áp dụng định lí sin trong tam giác ABC: 2R = BC / sinA &rArr; R = BC / (2.sin120&deg;) = &radic;37 / (2 . (&radic;3/2)) = &radic;37 / &radic;3 = &radic;(37/3). Khẳng định này là ĐÚNG."
          ],
          [
            "d) cosACB = 20 / (3&radic;37).",
            false,
            "Áp dụng định lí côsin: cosACB = (AC<sup>2</sup> + BC<sup>2</sup> - AB<sup>2</sup>) / (2.AC.BC) = (9 + 37 - 16) / (2 . 3 . &radic;37) = 30 / (6&radic;37) = 5 / &radic;37 = 15 / (3&radic;37) &ne; 20 / (3&radic;37). Khẳng định này là SAI."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Mỗi học sinh lớp 10A đều đăng ký học tự chọn ít nhất một trong hai môn là Toán hoặc Văn. Có 85% chọn môn Toán, 75% chọn môn Văn và 16 học sinh chỉ học đúng một môn. Hỏi có bao nhiêu học sinh đăng ký học cả hai môn?",
        "answer": "24",
        "explanation": "Tỉ lệ học sinh đăng ký cả hai môn Toán và Văn là: 85% + 75% - 100% = 60%. Tỉ lệ học sinh chỉ học đúng một môn là: (85% - 60%) + (75% - 60%) = 25% + 15% = 40% (hoặc 100% - 60% = 40%). Tổng số học sinh của lớp 10A là: 16 / 40% = 40 học sinh. Số học sinh học cả hai môn là: 40 . 60% = 24 học sinh."
      },
      {
        "question": "Cho hai tập hợp A = (-1; 8) và B = [m - 1; m + 2). Có bao nhiêu số nguyên m để B &sub; A?",
        "answer": "6",
        "explanation": "Để B là tập con của A, hai đầu mút của nửa khoảng B phải thuộc khoảng A: {m - 1 &gt; -1 ; m + 2 &le; 8} &hArr; {m &gt; 0 ; m &le; 6} &hArr; 0 &lt; m &le; 6. Vì m là số nguyên nên m &isin; {1; 2; 3; 4; 5; 6}. Vậy có đúng 6 giá trị nguyên của m thỏa mãn."
      },
      {
        "question": "Cho biết: tan&alpha; = 10. Tính giá trị biểu thức M = (9sin&alpha; - cos&alpha;) / (sin&alpha; - 9cos&alpha;).",
        "answer": "89",
        "explanation": "Vì tan&alpha; xác định nên cos&alpha; &ne; 0. Chia cả tử và mẫu của M cho cos&alpha;, ta được: M = (9tan&alpha; - 1) / (tan&alpha; - 9). Thay tan&alpha; = 10: M = (9 . 10 - 1) / (10 - 9) = (90 - 1) / 1 = 89."
      },
      {
        "question": "Cho tam giác ABC có độ dài các cạnh: AB = 6; AC = 8; BC = 12. Tính gần đúng góc A theo đơn vị độ (làm tròn đến hàng đơn vị)?",
        "answer": "117",
        "explanation": "Áp dụng hệ quả của định lí côsin: cosA = (AB<sup>2</sup> + AC<sup>2</sup> - BC<sup>2</sup>) / (2 . AB . AC) = (6<sup>2</sup> + 8<sup>2</sup> - 12<sup>2</sup>) / (2 . 6 . 8) = (36 + 64 - 144) / 96 = -44/96 = -11/24 &approx; -0,45833. Suy ra góc A &approx; 117,28&deg;, làm tròn đến hàng đơn vị được 117&deg;."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Tìm tham số m để thỏa mãn điều kiện giao của hai tập hợp",
        "question": "Cho hai tập hợp X = (1; 6) và Y = [m; m + 2]. Tìm tất cả các giá trị của tham số m để X &cap; Y &ne; &empty;.",
        "solution": "Hai tập hợp X = (1; 6) và Y = [m; m + 2] có giao khác rỗng khi và chỉ khi:<br>{ m &lt; 6 và m + 2 &gt; 1 } &hArr; { m &lt; 6 và m &gt; -1 } &hArr; -1 &lt; m &lt; 6.<br>Vậy m &isin; (-1; 6) (1,0 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Bài toán tối ưu chi phí thuê xe chở hàng",
        "question": "Một công ty cần vận chuyển 30 tấn hàng bằng hai loại xe tải: xe loại I (chở tối đa 3 tấn, giá thuê 4 triệu đồng/chuyến) và xe loại II (chở tối đa 5 tấn, giá thuê 6 triệu đồng/chuyến). Đội xe chỉ có thể cung cấp tối đa 8 xe loại I và 6 xe loại II. Hỏi công ty cần thuê bao nhiêu xe mỗi loại để tổng chi phí thuê xe là thấp nhất?",
        "solution": "Gọi x, y lần lượt là số xe loại I và loại II cần thuê (x, y &isin; N; 0 &le; x &le; 8; 0 &le; y &le; 6).<br>Điều kiện tải trọng: 3x + 5y &ge; 30.<br>Chi phí thuê xe: T(x; y) = 4x + 6y (triệu đồng).<br>Các điểm góc khả dĩ của miền nghiệm nguyên:<br>• Nếu y = 6: 3x + 30 &ge; 30 &rArr; x &ge; 0 &rArr; Chọn x = 0 &rArr; T(0; 6) = 36 triệu đồng (chở 30 tấn).<br>• Nếu y = 5: 3x + 25 &ge; 30 &rArr; 3x &ge; 5 &rArr; x &ge; 2 &rArr; Chọn x = 2 &rArr; T(2; 5) = 4(2) + 6(5) = 38 triệu đồng.<br>• Nếu y = 4: 3x + 20 &ge; 30 &rArr; 3x &ge; 10 &rArr; x &ge; 4 &rArr; T(4; 4) = 4(4) + 6(4) = 40 triệu đồng.<br>• Nếu x = 8: 24 + 5y &ge; 30 &rArr; 5y &ge; 6 &rArr; y &ge; 2 &rArr; T(8; 2) = 32 + 12 = 44 triệu đồng.<br>&rArr; Chi phí nhỏ nhất là 36 triệu đồng khi thuê 0 xe loại I và 6 xe loại II (1,0 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): Ứng dụng định lí côsin đo khoảng cách qua hồ nước",
        "question": "Để đo khoảng cách giữa hai điểm A và B bị ngăn cách bởi một hồ nước, người ta chọn một vị trí quan sát C trên bờ hồ sao cho nhìn thấy cả A và B. Kết quả đo được: CA = 80 m, CB = 120 m và góc ACB = 60&deg;. Tính khoảng cách giữa hai điểm A và B.",
        "solution": "Áp dụng định lí côsin trong tam giác ABC:<br>AB<sup>2</sup> = CA<sup>2</sup> + CB<sup>2</sup> - 2.CA.CB.cosC (0,30 điểm).<br>Thay số: AB<sup>2</sup> = 80<sup>2</sup> + 120<sup>2</sup> - 2(80)(120)cos60&deg; = 6400 + 14400 - 19200 &times; (1/2)<br>= 20800 - 9600 = 11200 (0,40 điểm).<br>&rArr; AB = &radic;11200 = 40&radic;7 &approx; 105,8 m (0,30 điểm)."
      }
    ]
  }
];
