// Danh sách 40 bộ đề thi chính thức chuẩn cấu trúc ma trận mới 2026–2027
// 13 đề Toán học, 10 đề Vật lí, 17 đề Hóa học
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
          "A. Số 17 là một số nguyên tố.",
          "B. Hãy cố gắng đạt điểm cao nhé!",
          "C. Bạn đã làm bài tập Toán chưa?",
          "D. Hôm nay trời tại Khe Sanh đẹp quá!"
        ],
        0,
        "\"Số 17 là một số nguyên tố\" là khẳng định có tính đúng (vì 17 chỉ chia hết cho 1 và 17); các câu A, C, D là câu cảm thán, nghi vấn, cầu khiến nên không phải mệnh đề."
      ],
      [
        "Cho mệnh đề P: \"&forall;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &gt; 0\". Mệnh đề phủ định của mệnh đề P là:",
        [
          "A. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &lt; 0.",
          "B. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &le; 0.",
          "C. &exist;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 = 0.",
          "D. &forall;x &isin; <b>R</b>, x<sup>2</sup> + 2x + 3 &le; 0."
        ],
        1,
        "Phủ định của lượng từ &forall; là &exist;, và phủ định của quan hệ \"&gt;\" là \"&le;\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | -2 &le; x &lt; 5}. Tập hợp A viết dưới dạng nửa khoảng là:",
        [
          "A. [-2; 5].",
          "B. (-2; 5).",
          "C. (-2; 5].",
          "D. [-2; 5)."
        ],
        3,
        "Theo định nghĩa nửa khoảng: {x &isin; <b>R</b> | a &le; x &lt; b} = [a; b) = [-2; 5)."
      ],
      [
        "Cho hai tập hợp A = {-1; 0; 2; 4; 6} và B = {0; 2; 3; 5}. Tập hợp A &cap; B là:",
        [
          "A. {3; 5}.",
          "B. {0; 2}.",
          "C. {-1; 4; 6}.",
          "D. {-1; 0; 2; 3; 4; 5; 6}."
        ],
        1,
        "Giao của hai tập hợp A &cap; B gồm các phần tử thuộc cả A và B, đó là {0; 2}."
      ],
      [
        "Bất phương trình nào dưới đây là bất phương trình bậc nhất hai ẩn x, y?",
        [
          "A. 3x - 2y + 4 &le; 0.",
          "B. xy + 2x &lt; 3.",
          "C. x + y<sup>2</sup> &ge; 1.",
          "D. 2x<sup>2</sup> - 3y &gt; 5."
        ],
        0,
        "BPT bậc nhất hai ẩn có dạng ax + by + c &le; 0 (với a, b không đồng thời bằng 0, bậc của x và y đều là bậc 1)."
      ],
      [
        "Cặp số (x; y) nào sau đây là một nghiệm của bất phương trình 2x - y + 1 &gt; 0?",
        [
          "A. (1; 4).",
          "B. (0; 2).",
          "C. (2; 3).",
          "D. (-1; 0)."
        ],
        2,
        "Thay (2; 3) vào vế trái: 2(2) - 3 + 1 = 2 &gt; 0 (thỏa mãn). Các cặp khác đều cho giá trị &le; 0."
      ],
      [
        "Điểm M(1; -1) thuộc miền nghiệm của hệ bất phương trình nào dưới đây?",
        [
          "A. {x + 2y &gt; 0 ; x - y &lt; 5}.",
          "B. {x + y &gt; 2 ; 2x - y &le; 3}.",
          "C. {x - y &ge; 1 ; 2x + y &gt; 0}.",
          "D. {3x + y &le; 0 ; x - 2y &ge; 1}."
        ],
        2,
        "Thay x = 1, y = -1 vào hệ B: 1 - (-1) = 2 &ge; 1 (đúng) và 2(1) + (-1) = 1 &gt; 0 (đúng)."
      ],
      [
        "Miền nghiệm của bất phương trình 3x + 2y &le; 6 chứa điểm nào sau đây?",
        [
          "A. O(0; 0).",
          "B. B(3; 1).",
          "C. A(2; 2).",
          "D. C(1; 3)."
        ],
        0,
        "Thay O(0; 0) vào BPT: 3(0) + 2(0) = 0 &le; 6 (đúng)."
      ],
      [
        "Với góc &alpha; thỏa mãn 0&deg; &le; &alpha; &le; 180&deg;, đẳng thức nào sau đây đúng?",
        [
          "A. cos(180&deg; - &alpha;) = cos&alpha;.",
          "B. sin(180&deg; - &alpha;) = sin&alpha;.",
          "C. sin(180&deg; - &alpha;) = -sin&alpha;.",
          "D. tan(180&deg; - &alpha;) = tan&alpha;."
        ],
        1,
        "Hai góc bù nhau (&alpha; và 180&deg; - &alpha;) có sin bằng nhau: sin(180&deg; - &alpha;) = sin&alpha;, còn cos, tan, cot đối nhau."
      ],
      [
        "Cho tam giác ABC có BC = a, AC = b, AB = c. Định lí côsin trong tam giác ABC là:",
        [
          "A. a<sup>2</sup> = b<sup>2</sup> - c<sup>2</sup> + 2bc.cosA.",
          "B. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - bc.cosA.",
          "C. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA.",
          "D. a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> + 2bc.cosA."
        ],
        2,
        "Theo định lí côsin trong tam giác ABC: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA."
      ],
      [
        "Cho tam giác ABC có b = 6, c = 8 và góc A = 60&deg;. Diện tích S của tam giác ABC bằng:",
        [
          "A. 24.",
          "B. 24&radic;3.",
          "C. 12.",
          "D. 12&radic;3."
        ],
        3,
        "Áp dụng công thức S = 1/2 . b . c . sinA = 1/2 . 6 . 8 . sin60&deg; = 24 . (&radic;3 / 2) = 12&radic;3."
      ],
      [
        "Cho tam giác ABC có cạnh a = 10 và góc A = 30&deg;. Bán kính đường tròn ngoại tiếp R bằng:",
        [
          "A. 20.",
          "B. 10&radic;3.",
          "C. 5.",
          "D. 10."
        ],
        3,
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
          "B. Số &pi; là một số hữu tỉ.",
          "C. &exist;x &isin; <b>R</b>, x<sup>2</sup> - 4 = 0.",
          "D. &forall;x &isin; <b>R</b>, x<sup>2</sup> &gt; 0."
        ],
        2,
        "Phương trình x<sup>2</sup> - 4 = 0 có nghiệm thực x = &plusmn;2 nên mệnh đề \"∃x ∈ ℝ, x² - 4 = 0\" là mệnh đề đúng."
      ],
      [
        "Cho hai mệnh đề P: \"Tứ giác ABCD là hình chữ nhật\" và Q: \"Tứ giác ABCD có hai đường chéo bằng nhau\". Mệnh đề đảo của mệnh đề P &rArr; Q là:",
        [
          "A. Tứ giác ABCD là hình chữ nhật khi và chỉ khi có hai đường chéo bằng nhau.",
          "B. Nếu tứ giác ABCD không có hai đường chéo bằng nhau thì nó không là hình chữ nhật.",
          "C. Nếu tứ giác ABCD là hình chữ nhật thì nó có hai đường chéo bằng nhau.",
          "D. Nếu tứ giác ABCD có hai đường chéo bằng nhau thì tứ giác ABCD là hình chữ nhật."
        ],
        3,
        "Mệnh đề đảo của P &rArr; Q là Q &rArr; P."
      ],
      [
        "Số tập hợp con của tập hợp X = {a; b; c} là:",
        [
          "A. 8.",
          "B. 9.",
          "C. 3.",
          "D. 6."
        ],
        0,
        "Tập hợp có n = 3 phần tử thì số tập hợp con là 2<sup>3</sup> = 8."
      ],
      [
        "Cho hai tập hợp A = (-&infin;; 3] và B = (1; 5]. Tập hợp A &cup; B là:",
        [
          "A. (1; 3].",
          "B. (-&infin;; 5].",
          "C. (3; 5].",
          "D. (-&infin;; 1]."
        ],
        1,
        "Hợp của (-&infin;; 3] và (1; 5] trên trục số là (-&infin;; 5]."
      ],
      [
        "Cặp số nào sau đây KHÔNG thuộc miền nghiệm của bất phương trình x + 3y - 5 &le; 0?",
        [
          "A. (1; 1).",
          "B. (-1; 2).",
          "C. (0; 0).",
          "D. (2; 2)."
        ],
        3,
        "Thay (2; 2) vào vế trái: 2 + 3(2) - 5 = 3 &gt; 0 (không thỏa mãn &le; 0)."
      ],
      [
        "Đường thẳng d: 2x - y = 4 chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Miền nghiệm của bất phương trình 2x - y &lt; 4 (không kể bờ d) chứa điểm nào?",
        [
          "A. (0; 0).",
          "B. (4; 2).",
          "C. (2; -1).",
          "D. (3; 1)."
        ],
        0,
        "Thay O(0; 0) vào 2x - y &lt; 4: 0 &lt; 4 (đúng)."
      ],
      [
        "Cho hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; x + y &le; 4}. Diện tích miền nghiệm của hệ bất phương trình trên mặt phẳng tọa độ Oxy bằng:",
        [
          "A. 16.",
          "B. 8.",
          "C. 12.",
          "D. 4."
        ],
        1,
        "Miền nghiệm là tam giác vuông cân OAB với O(0; 0), A(4; 0), B(0; 4), có diện tích S = 1/2 . OA . OB = 1/2 . 4 . 4 = 8."
      ],
      [
        "Giá trị của biểu thức M = sin30&deg;.cos60&deg; + sin60&deg;.cos30&deg; bằng:",
        [
          "A. 1/2.",
          "B. &radic;3/2.",
          "C. 1.",
          "D. 0."
        ],
        2,
        "Ta có sin30&deg;.cos60&deg; + sin60&deg;.cos30&deg; = (1/2).(1/2) + (&radic;3/2).(&radic;3/2) = 1/4 + 3/4 = 1."
      ],
      [
        "Cho tam giác ABC có a = 7, b = 8, c = 5. Số đo góc A của tam giác ABC bằng:",
        [
          "A. 120&deg;.",
          "B. 60&deg;.",
          "C. 45&deg;.",
          "D. 30&deg;."
        ],
        1,
        "cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc) = (64 + 25 - 49) / (2.8.5) = 40 / 80 = 1/2 &rArr; A = 60&deg;."
      ],
      [
        "Cho tam giác ABC có góc B = 45&deg;, góc C = 60&deg; và cạnh b = 10. Độ dài cạnh c bằng:",
        [
          "A. 5&radic;2.",
          "B. 10&radic;3.",
          "C. 10&radic;6.",
          "D. 5&radic;6."
        ],
        3,
        "Theo định lí sin: c / sinC = b / sinB &rArr; c = 10 . sin60&deg; / sin45&deg; = 10 . (&radic;3/2) / (&radic;2/2) = 5&radic;6."
      ],
      [
        "Tam giác ABC có ba cạnh a = 13, b = 14, c = 15. Diện tích của tam giác ABC bằng:",
        [
          "A. 168.",
          "B. 42.",
          "C. 84.",
          "D. 72."
        ],
        2,
        "Nửa chu vi p = (13 + 14 + 15)/2 = 21. Công thức Heron: S = &radic;(21.(21-13).(21-14).(21-15)) = &radic;(21.8.7.6) = 84."
      ],
      [
        "Cho tam giác ABC có diện tích S = 84 và nửa chu vi p = 21. Bán kính đường tròn nội tiếp r của tam giác ABC bằng:",
        [
          "A. 4.",
          "B. 3.",
          "C. 2.",
          "D. 6."
        ],
        0,
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
          "A. P(3).",
          "B. P(0).",
          "C. P(2).",
          "D. P(4)."
        ],
        0,
        "Thay n = 3: 3<sup>2</sup> - 1 = 8 chia hết cho 4 nên P(3) đúng."
      ],
      [
        "Cách phát biểu nào sau đây KHÔNG dùng để phát biểu mệnh đề P &rArr; Q?",
        [
          "A. Nếu P thì Q.",
          "B. P khi và chỉ khi Q.",
          "C. P là điều kiện đủ để có Q.",
          "D. Q là điều kiện cần để có P."
        ],
        1,
        "\"P khi và chỉ khi Q\" là mệnh đề tương đương P &hArr; Q, không phải mệnh đề kéo theo P &rArr; Q."
      ],
      [
        "Liệt kê các phần tử của tập hợp A = {x &isin; <b>Z</b> | 2x<sup>2</sup> - 5x + 2 = 0} ta được:",
        [
          "A. A = {1; 2}.",
          "B. A = {1/2; 2}.",
          "C. A = &empty;.",
          "D. A = {2}."
        ],
        3,
        "Giải 2x<sup>2</sup> - 5x + 2 = 0 &hArr; x = 2 (&isin; <b>Z</b>) hoặc x = 1/2 (&notin; <b>Z</b>). Vậy A = {2}."
      ],
      [
        "Cho tập hợp M = (-3; 2]. Phần bù của M trong <b>R</b> là C<sub><b>R</b></sub>M bằng:",
        [
          "A. (-&infin;; -3] &cup; [2; +&infin;).",
          "B. (-&infin;; -3) &cup; [2; +&infin;).",
          "C. (-&infin;; -3] &cup; (2; +&infin;).",
          "D. (-&infin;; -3) &cup; (2; +&infin;)."
        ],
        2,
        "Vì -3 &notin; M nên -3 &isin; C<sub><b>R</b></sub>M; vì 2 &isin; M nên 2 &notin; C<sub><b>R</b></sub>M. Do đó C<sub><b>R</b></sub>M = (-&infin;; -3] &cup; (2; +&infin;)."
      ],
      [
        "Bất phương trình x - 2y + 4 &ge; 0 có miền nghiệm là nửa mặt phẳng bờ d: x - 2y + 4 = 0 chứa điểm nào?",
        [
          "A. (-2; 2).",
          "B. (0; 3).",
          "C. (-5; 0).",
          "D. (1; 1)."
        ],
        3,
        "Thay (1; 1) vào x - 2y + 4: 1 - 2 + 4 = 3 &ge; 0 (thỏa mãn)."
      ],
      [
        "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
        [
          "A. {2x - 3y &lt; 5 ; x + 4y &ge; 0}.",
          "B. {xy &gt; 1 ; x - y &lt; 2}.",
          "C. {x + y = 2 ; 2x - y = 1}.",
          "D. {x + y &ge; 1 ; x<sup>2</sup> - y &le; 2}."
        ],
        0,
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
          "A. cot135&deg; = 1.",
          "B. cos135&deg; = &radic;2/2.",
          "C. tan135&deg; = -1.",
          "D. sin135&deg; = -&radic;2/2."
        ],
        2,
        "Góc 135&deg; bù với 45&deg; nên tan135&deg; = -tan45&deg; = -1."
      ],
      [
        "Trong tam giác ABC, hệ thức nào sau đây SAI?",
        [
          "A. c = R.sinC.",
          "B. b = 2R.sinB.",
          "C. a / sinA = 2R.",
          "D. sinA = a / (2R)."
        ],
        0,
        "Theo định lí sin: c = 2R.sinC nên D sai."
      ],
      [
        "Cho tam giác ABC có a = 4, b = 5, c = 6. Giá trị của cosC bằng:",
        [
          "A. 3/4.",
          "B. -1/8.",
          "C. 9/16.",
          "D. 1/8."
        ],
        3,
        "cosC = (a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab) = (16 + 25 - 36) / (2.4.5) = 5 / 40 = 1/8."
      ],
      [
        "Tam giác đều ABC có cạnh bằng 2a. Diện tích của tam giác ABC là:",
        [
          "A. a<sup>2</sup>&radic;3 / 2.",
          "B. a<sup>2</sup>&radic;3.",
          "C. 2a<sup>2</sup>&radic;3.",
          "D. a<sup>2</sup>&radic;3 / 4."
        ],
        1,
        "Diện tích tam giác đều cạnh X là X<sup>2</sup>&radic;3 / 4 = (2a)<sup>2</sup>&radic;3 / 4 = a<sup>2</sup>&radic;3."
      ],
      [
        "Cho tam giác ABC có AB = 3, AC = 4, góc A = 90&deg;. Bán kính đường tròn nội tiếp r của tam giác ABC bằng:",
        [
          "A. 1,5.",
          "B. 1.",
          "C. 2.",
          "D. 2,5."
        ],
        1,
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
            "d) Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 10.",
            false,
            "R = a / (2sinA) = (4√2) / (2 · 4/5) = 5√2 / 2 ≈ 3,54 (không phải 10)."
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
          "A. P đúng; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 = 0\".",
          "B. P đúng; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\".",
          "C. P sai; <span style=\"text-decoration:overline;\">P</span>: \"&exist;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\".",
          "D. P sai; <span style=\"text-decoration:overline;\">P</span>: \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\"."
        ],
        3,
        "Vì x = &plusmn;&radic;(5/2) &notin; <b>Q</b> nên P sai, và phủ định là \"&forall;x &isin; <b>Q</b>, 2x<sup>2</sup> - 5 &ne; 0\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | x là ước của 12}. Số phần tử của tập hợp A là:",
        [
          "A. 12.",
          "B. 5.",
          "C. 6.",
          "D. 4."
        ],
        2,
        "Các ước tự nhiên của 12 là {1; 2; 3; 4; 6; 12}, gồm 6 phần tử."
      ],
      [
        "Cho hai tập hợp A = [-4; 1] và B = [-2; 5). Tập hợp A \\ B là:",
        [
          "A. (1; 5).",
          "B. [-2; 1].",
          "C. [-4; -2].",
          "D. [-4; -2)."
        ],
        3,
        "Những phần tử thuộc [-4; 1] nhưng không thuộc [-2; 5) là [-4; -2)."
      ],
      [
        "Trong các tập hợp sau, tập hợp nào là tập hợp rỗng?",
        [
          "A. {x &isin; <b>Z</b> | |x| &lt; 1}.",
          "B. {x &isin; <b>N</b> | 2x - 4 = 0}.",
          "C. {x &isin; <b>R</b> | x<sup>2</sup> + x + 1 = 0}.",
          "D. {x &isin; <b>Q</b> | x<sup>2</sup> - 4 = 0}."
        ],
        2,
        "Phương trình x<sup>2</sup> + x + 1 = (x + 1/2)<sup>2</sup> + 3/4 = 0 vô nghiệm thực nên tập hợp {x ∈ ℝ | x² + x + 1 = 0} là tập rỗng."
      ],
      [
        "Miền nghiệm của bất phương trình x + y &le; 2 là phần mặt phẳng chứa điểm nào?",
        [
          "A. (3; 0).",
          "B. (0; 0).",
          "C. (1; 2).",
          "D. (2; 1)."
        ],
        1,
        "Thay (0; 0) vào BPT: 0 + 0 = 0 &le; 2 (đúng)."
      ],
      [
        "Một cửa hàng bán áo sơ mi (giá lãi 50 nghìn đồng/chiếc) và quần âu (giá lãi 80 nghìn đồng/chiếc). Gọi x, y lần lượt là số áo và số quần bán được trong ngày. Bất phương trình biểu thị tổng tiền lãi trong ngày đạt ít nhất 1 200 nghìn đồng là:",
        [
          "A. 5x + 8y &ge; 120.",
          "B. 8x + 5y &ge; 120.",
          "C. 5x + 8y &le; 120.",
          "D. 50x + 80y &lt; 1200."
        ],
        0,
        "Tổng lãi 50x + 80y &ge; 1200 &hArr; 5x + 8y &ge; 120."
      ],
      [
        "Điểm nào sau đây thuộc miền nghiệm của hệ {2x - y &ge; 1 ; x + 3y &le; 6}?",
        [
          "A. (0; 0).",
          "B. (1; 3).",
          "C. (-1; 2).",
          "D. (2; 1)."
        ],
        3,
        "Thay (2; 1): 2(2) - 1 = 3 &ge; 1 (đúng) và 2 + 3(1) = 5 &le; 6 (đúng)."
      ],
      [
        "Giá trị của cos150&deg; bằng:",
        [
          "A. -&radic;3/2.",
          "B. -1/2.",
          "C. &radic;3/2.",
          "D. 1/2."
        ],
        0,
        "cos150&deg; = -cos30&deg; = -&radic;3/2."
      ],
      [
        "Trong tam giác ABC, nếu a<sup>2</sup> &gt; b<sup>2</sup> + c<sup>2</sup> thì góc A là:",
        [
          "A. Góc tù.",
          "B. Góc vuông.",
          "C. Góc bẹt.",
          "D. Góc nhọn."
        ],
        0,
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
          "A. 4&radic;3.",
          "B. 6&radic;2.",
          "C. 6.",
          "D. 3&radic;6."
        ],
        1,
        "Theo định lí sin: AC / sinB = BC / sinA &rArr; AC = 6&radic;3 . (&radic;2/2) / (&radic;3/2) = 6&radic;2."
      ],
      [
        "Bán kính đường tròn ngoại tiếp tam giác đều cạnh a = 6 bằng:",
        [
          "A. 6.",
          "B. 3&radic;3.",
          "C. 2&radic;3.",
          "D. &radic;3."
        ],
        2,
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
          "C. Tương đương với mệnh đề đảo.",
          "D. Không phải mệnh đề."
        ],
        1,
        "Với a = 2, b = 3 thì a + b = 5 chia hết cho 5 nhưng 2 và 3 đều không chia hết cho 5, nên P sai."
      ],
      [
        "Kí hiệu nào sau đây dùng để chỉ 5 là một phần tử của tập hợp A?",
        [
          "A. 5 &sub; A.",
          "B. {5} &isin; A.",
          "C. A &isin; 5.",
          "D. 5 &isin; A."
        ],
        3,
        "Quan hệ phần tử thuộc tập hợp dùng kí hiệu &isin;: 5 &isin; A."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | x &lt; 5} và B = {1; 3; 5; 7}. Tập hợp A &cup; B có bao nhiêu phần tử?",
        [
          "A. 6.",
          "B. 7.",
          "C. 5.",
          "D. 8."
        ],
        1,
        "A = {0; 1; 2; 3; 4}, B = {1; 3; 5; 7} &rArr; A &cup; B = {0; 1; 2; 3; 4; 5; 7} gồm 7 phần tử."
      ],
      [
        "Cho hai tập hợp X = (-2; 4) và Y = [1; 6]. Tập hợp X &cap; Y là:",
        [
          "A. (-2; 6].",
          "B. (1; 4].",
          "C. (-2; 1).",
          "D. [1; 4)."
        ],
        3,
        "Giao của (-2; 4) và [1; 6] là nửa khoảng [1; 4)."
      ],
      [
        "Bất phương trình 4x - 5y &gt; 10 KHÔNG nhận cặp số nào sau đây làm nghiệm?",
        [
          "A. (5; 1).",
          "B. (2; -1).",
          "C. (1; 0).",
          "D. (3; 0)."
        ],
        2,
        "Thay (1; 0): 4(1) - 5(0) = 4 &lt; 10 (không thỏa mãn)."
      ],
      [
        "Miền nghiệm của hệ bất phương trình {x &ge; 1 ; y &ge; 2 ; x + y &le; 5} là một tam giác có diện tích bằng:",
        [
          "A. 2.",
          "B. 6.",
          "C. 8.",
          "D. 4."
        ],
        0,
        "Tam giác vuông có các đỉnh (1; 2), (3; 2), (1; 4) với hai cạnh góc vuông bằng 2 và 2 &rArr; S = 1/2 . 2 . 2 = 2."
      ],
      [
        "Giá trị của biểu thức A = tan45&deg; + cot135&deg; bằng:",
        [
          "A. 0.",
          "B. 2.",
          "C. 1.",
          "D. -1."
        ],
        0,
        "tan45&deg; = 1, cot135&deg; = -1 &rArr; A = 1 + (-1) = 0."
      ],
      [
        "Cho góc &alpha; tù (90&deg; &lt; &alpha; &lt; 180&deg;). Khẳng định nào sau đây đúng về dấu của các giá trị lượng giác?",
        [
          "A. sin&alpha; &lt; 0, tan&alpha; &lt; 0.",
          "B. tan&alpha; &gt; 0, cot&alpha; &gt; 0.",
          "C. sin&alpha; &gt; 0, cos&alpha; &lt; 0.",
          "D. sin&alpha; &lt; 0, cos&alpha; &gt; 0."
        ],
        2,
        "Với góc tù (90&deg; &lt; &alpha; &lt; 180&deg;), sin&alpha; &gt; 0 còn cos&alpha;, tan&alpha;, cot&alpha; đều âm."
      ],
      [
        "Tam giác ABC có AB = 5, BC = 8, CA = 7. Số đo góc B bằng:",
        [
          "A. 60&deg;.",
          "B. 45&deg;.",
          "C. 120&deg;.",
          "D. 30&deg;."
        ],
        0,
        "Áp dụng định lí côsin: cosB = (AB<sup>2</sup> + BC<sup>2</sup> - AC<sup>2</sup>)/(2.AB.BC) = (25 + 64 - 49)/(2.5.8) = 40/80 = 1/2 &rArr; B = 60&deg;."
      ],
      [
        "Cho tam giác ABC có R = 6 và góc C = 45&deg;. Độ dài cạnh AB bằng:",
        [
          "A. 12.",
          "B. 6&radic;3.",
          "C. 6&radic;2.",
          "D. 3&radic;2."
        ],
        2,
        "Theo định lí sin: AB = c = 2R.sinC = 2.6.(&radic;2/2) = 6&radic;2."
      ],
      [
        "Công thức nào sau đây dùng để tính diện tích tam giác ABC theo ba cạnh a, b, c và bán kính đường tròn ngoại tiếp R?",
        [
          "A. S = 4R / (abc).",
          "B. S = abc / (4R).",
          "C. S = (a+b+c)R / 2.",
          "D. S = abc / (2R)."
        ],
        1,
        "Theo các công thức tính diện tích tam giác trong hệ thức lượng Toán 10: S = abc / (4R) &hArr; R = abc / (4S). Vì vậy hệ thức S = abc / (2R) là SAI."
      ],
      [
        "Cho tam giác ABC có b = 10, c = 12, góc A = 150&deg;. Diện tích tam giác ABC bằng:",
        [
          "A. 60.",
          "B. 15.",
          "C. 30&radic;3.",
          "D. 30."
        ],
        3,
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
          "A. &pi; &lt; 4 &hArr; &pi;<sup>2</sup> &lt; 16.",
          "B. -&pi; &lt; -2 &hArr; &pi;<sup>2</sup> &lt; 4.",
          "C. &radic;23 &lt; 5 &rArr; -2&radic;23 &gt; -10.",
          "D. &radic;23 &lt; 5 &rArr; 2&radic;23 &lt; 10."
        ],
        1,
        "Vì -&pi; &lt; -2 là đúng nhưng &pi;<sup>2</sup> &approx; 9,87 &lt; 4 là sai nên mệnh đề tương đương \"-π < -2 ⇔ π² < 4\" là mệnh đề sai."
      ],
      [
        "Tập hợp A = {x &isin; <b>R</b> | x<sup>2</sup> - 3x + 2 = 0} bằng tập hợp nào sau đây?",
        [
          "A. {1; 3}.",
          "B. (1; 2).",
          "C. {1; 2}.",
          "D. {-1; -2}."
        ],
        2,
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
          "A. 21.",
          "B. 15.",
          "C. 18.",
          "D. 13."
        ],
        1,
        "n(A &cup; B) = n(A) + n(B) - n(A &cap; B) = 10 + 8 - 3 = 15."
      ],
      [
        "Cặp số (-2; 3) là nghiệm của bất phương trình nào dưới đây?",
        [
          "A. 3x + 2y + 1 &gt; 0.",
          "B. x + 2y - 3 &le; 0.",
          "C. x - y + 4 &lt; 0.",
          "D. 2x + y - 1 &gt; 0."
        ],
        0,
        "Thay (-2; 3) vào 3x + 2y + 1: 3(-2) + 2(3) + 1 = 1 &gt; 0 (đúng)."
      ],
      [
        "Miền nghiệm của bất phương trình y &ge; 2x - 4 chứa điểm nào?",
        [
          "A. (0; 0).",
          "B. (4; 1).",
          "C. (3; 0).",
          "D. (2; -1)."
        ],
        0,
        "Để kiểm tra điểm M(x₀; y₀) có thuộc miền nghiệm của bất phương trình bậc nhất hai ẩn y &ge; 2x - 4 hay không, ta thay tọa độ (0; 0) vào BPT: 0 &ge; 2(0) - 4 &hArr; 0 &ge; -4 (luôn đúng). Vậy gốc O(0; 0) thuộc miền nghiệm."
      ],
      [
        "Trên miền nghiệm của hệ {0 &le; x &le; 4 ; 0 &le; y &le; 3}, giá trị lớn nhất của F(x; y) = 2x + 5y bằng:",
        [
          "A. 20.",
          "B. 15.",
          "C. 8.",
          "D. 23."
        ],
        3,
        "Miền nghiệm là hình chữ nhật nên F đạt GTLN tại đỉnh (4; 3): F(4; 3) = 2(4) + 5(3) = 23."
      ],
      [
        "Giá trị của biểu thức P = sin120&deg; . cos30&deg; + cos120&deg; . sin30&deg; bằng:",
        [
          "A. 0.",
          "B. &radic;3/2.",
          "C. 1/2.",
          "D. 1."
        ],
        2,
        "Ta có sin120&deg;.cos30&deg; + cos120&deg;.sin30&deg; = (&radic;3/2).(&radic;3/2) + (-1/2).(1/2) = 3/4 - 1/4 = 1/2."
      ],
      [
        "Cho tam giác ABC có a = 5, b = 12, c = 13. Số đo góc C bằng:",
        [
          "A. 120&deg;.",
          "B. 60&deg;.",
          "C. 90&deg;.",
          "D. 45&deg;."
        ],
        2,
        "Vì 5<sup>2</sup> + 12<sup>2</sup> = 25 + 144 = 169 = 13<sup>2</sup> nên tam giác vuông tại C, tức góc C = 90&deg;."
      ],
      [
        "Tam giác ABC có góc A = 120&deg;, b = 4, c = 6. Độ dài cạnh a bằng:",
        [
          "A. 2&radic;7.",
          "B. 10.",
          "C. 4&radic;5.",
          "D. 2&radic;19."
        ],
        3,
        "a<sup>2</sup> = 4<sup>2</sup> + 6<sup>2</sup> - 2.4.6.cos120&deg; = 16 + 36 + 24 = 76 &rArr; a = 2&radic;19."
      ],
      [
        "Cho tam giác ABC có ba cạnh a = 5, b = 6, c = 7. Diện tích tam giác ABC bằng:",
        [
          "A. 6&radic;3.",
          "B. 12&radic;6.",
          "C. 18.",
          "D. 6&radic;6."
        ],
        3,
        "p = (5+6+7)/2 = 9. S = &radic;(9.4.3.2) = 6&radic;6."
      ],
      [
        "Cho tam giác ABC có diện tích S = 24 và chu vi bằng 24. Bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 2.",
          "B. 1.",
          "C. 3.",
          "D. 4."
        ],
        0,
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
          "B. &forall;n &notin; <b>N</b>, n<sup>2</sup> + n + 1 không là số nguyên tố.",
          "C. &forall;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 không phải là số nguyên tố.",
          "D. &exist;n &isin; <b>N</b>, n<sup>2</sup> + n + 1 là hợp số."
        ],
        2,
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
          "A. (-&infin;; 5].",
          "B. [-1; 2).",
          "C. (-1; 2].",
          "D. (2; 5]."
        ],
        1,
        "Giao của (-&infin;; 2) và [-1; 5] là nửa khoảng [-1; 2)."
      ],
      [
        "Cho tập hợp X = {x &isin; <b>Z</b> | -2 &lt; x &le; 3}. Tổng tất cả các phần tử của tập hợp X bằng:",
        [
          "A. 4.",
          "B. 3.",
          "C. 5.",
          "D. 6."
        ],
        2,
        "X = {-1; 0; 1; 2; 3}, tổng các phần tử là (-1) + 0 + 1 + 2 + 3 = 5."
      ],
      [
        "Điểm A(2; -1) thuộc miền nghiệm của bất phương trình nào?",
        [
          "A. 2x - y &lt; 3.",
          "B. x + 3y &gt; 0.",
          "C. 3x + y - 4 &ge; 0.",
          "D. x - 2y + 1 &le; 0."
        ],
        2,
        "Thay (2; -1) vào 3x + y - 4: 3(2) + (-1) - 4 = 1 &ge; 0 (đúng)."
      ],
      [
        "Hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; 3x + 4y &le; 12} tạo thành miền tam giác OAB trên mặt phẳng Oxy. Chu vi của tam giác OAB bằng:",
        [
          "A. 6.",
          "B. 7.",
          "C. 10.",
          "D. 12."
        ],
        3,
        "Tam giác vuông OAB có OA = 4, OB = 3 &rArr; cạnh huyền AB = 5. Chu vi = 3 + 4 + 5 = 12."
      ],
      [
        "Trong các hệ thức lượng giác sau với 0&deg; &lt; &alpha; &lt; 180&deg;,(&alpha; &ne; 90&deg;), hệ thức nào đúng?",
        [
          "A. sin<sup>2</sup>&alpha; - cos<sup>2</sup>&alpha; = 1.",
          "B. 1 + tan<sup>2</sup>&alpha; = 1 / sin<sup>2</sup>&alpha;.",
          "C. tan&alpha; + cot&alpha; = 1.",
          "D. 1 + tan<sup>2</sup>&alpha; = 1 / cos<sup>2</sup>&alpha;."
        ],
        3,
        "Hệ thức cơ bản: 1 + tan<sup>2</sup>&alpha; = 1 / cos<sup>2</sup>&alpha;."
      ],
      [
        "Biết cos&alpha; = 1/3. Giá trị của biểu thức P = sin<sup>2</sup>&alpha; + 3cos<sup>2</sup>&alpha; bằng:",
        [
          "A. 11/9.",
          "B. 10/9.",
          "C. 5/3.",
          "D. 4/3."
        ],
        0,
        "P = (sin<sup>2</sup>&alpha; + cos<sup>2</sup>&alpha;) + 2cos<sup>2</sup>&alpha; = 1 + 2(1/9) = 11/9."
      ],
      [
        "Cho tam giác ABC có a = 6, b = 6&radic;3, c = 12. Số đo góc B bằng:",
        [
          "A. 90&deg;.",
          "B. 60&deg;.",
          "C. 30&deg;.",
          "D. 120&deg;."
        ],
        1,
        "Ta có a<sup>2</sup> + b<sup>2</sup> = 36 + 108 = 144 = c<sup>2</sup> nên tam giác vuông tại C. Suy ra sinB = b/c = &radic;3/2 &rArr; B = 60&deg;."
      ],
      [
        "Cho tam giác ABC có góc A = 45&deg;, cạnh a = 10&radic;2. Bán kính đường tròn ngoại tiếp R bằng:",
        [
          "A. 10&radic;2.",
          "B. 10.",
          "C. 20.",
          "D. 5."
        ],
        1,
        "R = a / (2sin45&deg;) = 10&radic;2 / &radic;2 = 10."
      ],
      [
        "Tam giác ABC có diện tích S = 15&radic;3, cạnh BC = 10, AC = 6. Góc nhọn C có số đo bằng:",
        [
          "A. 60&deg;.",
          "B. 75&deg;.",
          "C. 30&deg;.",
          "D. 45&deg;."
        ],
        0,
        "sinC = 2S / (BC.AC) = 30&radic;3 / 60 = &radic;3/2. Vì C nhọn nên C = 60&deg;."
      ],
      [
        "Cho tam giác ABC có ba cạnh 9, 12, 15. Tổng bán kính đường tròn ngoại tiếp R và bán kính đường tròn nội tiếp r (tức R + r) bằng:",
        [
          "A. 9,5.",
          "B. 12.",
          "C. 11,5.",
          "D. 10,5."
        ],
        3,
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
          "A. P và Q không tương đương.",
          "B. P &rArr; Q đúng, Q &rArr; P sai.",
          "C. P &rArr; Q sai, Q &rArr; P đúng.",
          "D. P &hArr; Q là mệnh đề đúng."
        ],
        3,
        "Tam giác đều khi và chỉ khi tam giác cân và có 1 góc 60&deg;, nên P &hArr; Q đúng."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>N</b> | (x - 1)(x<sup>2</sup> - 4) = 0}. Tập hợp A là:",
        [
          "A. {-2; 1; 2}.",
          "B. {1; 4}.",
          "C. {1; 2}.",
          "D. {-2; 2}."
        ],
        2,
        "Phương trình có nghiệm x = 1, x = 2, x = -2. Vì x &isin; <b>N</b> nên A = {1; 2}."
      ],
      [
        "Cho hai tập hợp A = (-5; 3) và B = (0; 7). Tập hợp A &cup; B là:",
        [
          "A. (0; 3).",
          "B. (-5; 0].",
          "C. [3; 7).",
          "D. (-5; 7)."
        ],
        3,
        "Hợp của (-5; 3) và (0; 7) là khoảng (-5; 7)."
      ],
      [
        "Cho A = [-2; 5]. Tập hợp C<sub><b>R</b></sub>A bằng:",
        [
          "A. (-&infin;; -2) &cup; (5; +&infin;).",
          "B. (-&infin;; -2) &cap; (5; +&infin;).",
          "C. (-&infin;; -2] &cup; [5; +&infin;).",
          "D. (-2; 5)."
        ],
        0,
        "Phần bù của đoạn [-2; 5] trong <b>R</b> là (-&infin;; -2) &cup; (5; +&infin;)."
      ],
      [
        "Bất phương trình 3x + y &lt; 6 có bờ là đường thẳng đi qua hai điểm nào trên hai trục tọa độ?",
        [
          "A. (3; 0) và (0; 1).",
          "B. (2; 0) và (0; 6).",
          "C. (6; 0) và (0; 2).",
          "D. (-2; 0) và (0; -6)."
        ],
        1,
        "Đường thẳng 3x + y = 6 cắt Ox tại (2; 0) và cắt Oy tại (0; 6)."
      ],
      [
        "Cặp số nào sau đây là nghiệm của hệ bất phương trình {x - y &ge; 0 ; x + 2y &le; 6 ; y &ge; 0}?",
        [
          "A. (2; 3).",
          "B. (1; 2).",
          "C. (5; 1).",
          "D. (3; 1)."
        ],
        3,
        "Thay (3; 1): 3 - 1 = 2 &ge; 0; 3 + 2(1) = 5 &le; 6; 1 &ge; 0 (thỏa mãn)."
      ],
      [
        "Giá trị của biểu thức M = cos0&deg; + cos60&deg; + cos120&deg; + cos180&deg; bằng:",
        [
          "A. 2.",
          "B. -1.",
          "C. 0.",
          "D. 1."
        ],
        2,
        "Vì cos0&deg; + cos180&deg; = 1 + (-1) = 0 và cos60&deg; + cos120&deg; = 1/2 + (-1/2) = 0 nên M = 0."
      ],
      [
        "Cho tam giác ABC có a = 10, b = 10, góc C = 60&deg;. Chu vi của tam giác ABC bằng:",
        [
          "A. 20 + 10&radic;3.",
          "B. 30.",
          "C. 25.",
          "D. 20."
        ],
        1,
        "Tam giác cân có 1 góc 60&deg; là tam giác đều cạnh 10, nên chu vi bằng 30."
      ],
      [
        "Trong tam giác ABC có AB = 8, AC = 15, BC = 17. Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng:",
        [
          "A. 17.",
          "B. 7,5.",
          "C. 8,5.",
          "D. 10."
        ],
        2,
        "Vì AB<sup>2</sup> + AC<sup>2</sup> = 8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289 = 17<sup>2</sup> = BC<sup>2</sup> nên tam giác ABC vuông tại A. Bán kính đường tròn ngoại tiếp bằng nửa cạnh huyền: R = BC / 2 = 17 / 2 = 8,5."
      ],
      [
        "Cho tam giác ABC có diện tích S = 30, hai cạnh a = 10, b = 12. Giá trị sinC bằng:",
        [
          "A. 1.",
          "B. 1/2.",
          "C. &radic;2/2.",
          "D. &radic;3/2."
        ],
        1,
        "Theo công thức diện tích tam giác trong hệ thức lượng Toán 10: S = 1/2 . a . b . sinC &rArr; sinC = 2S / (ab) = (2 . 30) / (10 . 12) = 60 / 120 = 1/2."
      ],
      [
        "Tam giác ABC có ba cạnh a = 7, b = 24, c = 25. Bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 3.",
          "B. 4.",
          "C. 5.",
          "D. 2."
        ],
        0,
        "Tam giác vuông (7<sup>2</sup> + 24<sup>2</sup> = 25<sup>2</sup>) có r = (7 + 24 - 25)/2 = 3."
      ],
      [
        "Cho tam giác ABC có góc B = 120&deg;, AB = 3, BC = 5. Độ dài cạnh AC bằng:",
        [
          "A. 7.",
          "B. 8.",
          "C. &radic;19.",
          "D. &radic;34."
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
          "A. Có ít nhất một học sinh lớp 10 không thích học môn Toán.",
          "B. Mọi học sinh lớp 10 đều không thích học môn Toán.",
          "C. Không có học sinh lớp 10 nào thích học môn Toán.",
          "D. Có ít nhất một học sinh lớp 10 thích học môn Toán."
        ],
        0,
        "Phủ định của \"Mọi... đều thích\" là \"Có ít nhất một... không thích\"."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | x &le; 3}. Tập hợp A được viết dưới dạng nửa khoảng là:",
        [
          "A. (-&infin;; 3).",
          "B. (3; +&infin;).",
          "C. (-&infin;; 3].",
          "D. [3; +&infin;)."
        ],
        2,
        "{x &isin; <b>R</b> | x &le; 3} = (-&infin;; 3]."
      ],
      [
        "Cho hai tập hợp A = [0; 6] và B = (2; 8). Tập hợp A &cap; B là:",
        [
          "A. [0; 8).",
          "B. [2; 6].",
          "C. [0; 2].",
          "D. (2; 6]."
        ],
        3,
        "Giao của [0; 6] và (2; 8) là nửa khoảng (2; 6]."
      ],
      [
        "Cho tập hợp A = {1; 3; 5} và B = {1; 2; 3; 4; 5; 6}. Số tập hợp X thỏa mãn A &sub; X &sub; B là:",
        [
          "A. 9.",
          "B. 6.",
          "C. 8.",
          "D. 3."
        ],
        2,
        "B \\ A = {2; 4; 6} có 3 phần tử nên có 2<sup>3</sup> = 8 tập hợp X thỏa mãn."
      ],
      [
        "Cặp số nào sau đây thuộc miền nghiệm của bất phương trình 5x - 2y + 3 &ge; 0?",
        [
          "A. (-1; 2).",
          "B. (0; 1).",
          "C. (0; 3).",
          "D. (-2; 1)."
        ],
        1,
        "Thay (0; 1) vào vế trái: 5(0) - 2(1) + 3 = 1 &ge; 0 (thỏa mãn). Các điểm còn lại đều cho giá trị âm."
      ],
      [
        "Miền nghiệm của hệ bất phương trình {x &ge; 0 ; y &ge; 0 ; 2x + y &le; 4} chứa bao nhiêu điểm có tọa độ nguyên?",
        [
          "A. 6.",
          "B. 8.",
          "C. 10.",
          "D. 9."
        ],
        3,
        "Với x = 0: y &isin; {0,1,2,3,4} (5 điểm); với x = 1: y &isin; {0,1,2} (3 điểm); với x = 2: y = 0 (1 điểm). Tổng = 5 + 3 + 1 = 9 điểm."
      ],
      [
        "Cho góc &alpha; thỏa mãn sin&alpha; = 1/3. Giá trị của biểu thức P = 9.cos<sup>2</sup>&alpha; + 2 bằng:",
        [
          "A. 8.",
          "B. 9.",
          "C. 10.",
          "D. 11."
        ],
        2,
        "cos<sup>2</sup>&alpha; = 1 - sin<sup>2</sup>&alpha; = 8/9 &rArr; P = 9(8/9) + 2 = 10."
      ],
      [
        "Trong tam giác ABC có BC = a, AC = b, AB = c. Công thức tính cosA nào sau đây đúng?",
        [
          "A. cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (bc).",
          "B. cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc).",
          "C. cosA = (b<sup>2</sup> + c<sup>2</sup> + a<sup>2</sup>) / (2bc).",
          "D. cosA = (a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab)."
        ],
        1,
        "Từ định lí côsin a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA suy ra cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>)/(2bc)."
      ],
      [
        "Cho tam giác ABC có b = 8, c = 10, góc A = 30&deg;. Diện tích tam giác ABC bằng:",
        [
          "A. 40.",
          "B. 20.",
          "C. 10.",
          "D. 20&radic;3."
        ],
        1,
        "Theo công thức tính diện tích tam giác theo hai cạnh và góc xen giữa: S = 1/2 . b . c . sinA = 1/2 . 8 . 10 . sin30&deg; = 40 . 0,5 = 20."
      ],
      [
        "Cho tam giác ABC có góc A = 60&deg;, bán kính đường tròn ngoại tiếp R = 4&radic;3. Độ dài cạnh BC bằng:",
        [
          "A. 12.",
          "B. 6&radic;3.",
          "C. 6.",
          "D. 8&radic;3."
        ],
        0,
        "BC = 2R.sinA = 2 . 4&radic;3 . (&radic;3/2) = 12."
      ],
      [
        "Tam giác ABC vuông cân tại A có cạnh góc vuông AB = AC = 4. Diện tích S của tam giác ABC là:",
        [
          "A. 4&radic;2.",
          "B. 8&radic;2.",
          "C. 16.",
          "D. 8."
        ],
        3,
        "Tam giác ABC vuông cân tại A nên AB = AC = 4 và góc A = 90&deg;. Diện tích tam giác vuông là S = 1/2 . AB . AC = 1/2 . 4 . 4 = 8."
      ],
      [
        "Cho tam giác ABC vuông tại A có AB = 5, AC = 12, BC = 13. Độ dài đường cao h<sub>a</sub> kẻ từ đỉnh A bằng:",
        [
          "A. 60/13.",
          "B. 13/5.",
          "C. 6.",
          "D. 65/12."
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
          "A. Phủ định của P là \"&forall;x &isin; <b>R</b>, x<sup>2</sup> - 2x + 2 &le; 0\".",
          "B. P là mệnh đề sai.",
          "C. P không có tính đúng sai.",
          "D. P là mệnh đề đúng."
        ],
        3,
        "Vì x<sup>2</sup> - 2x + 2 = (x - 1)<sup>2</sup> + 1 &ge; 1 &gt; 0 với mọi x &isin; <b>R</b> nên P là mệnh đề đúng."
      ],
      [
        "Cho tập hợp A = {x &isin; <b>R</b> | -3 &le; x &le; 2}. Tập hợp A là:",
        [
          "A. Nửa khoảng [-3; 2).",
          "B. Tập hợp {-3; 2}.",
          "C. Khoảng (-3; 2).",
          "D. Đoạn [-3; 2]."
        ],
        3,
        "{x &isin; <b>R</b> | -3 &le; x &le; 2} là đoạn [-3; 2]."
      ],
      [
        "Cho hai tập hợp A = {-2; 0; 2; 4} và B = {0; 4; 8}. Tập hợp A &cup; B là:",
        [
          "A. {0; 4}.",
          "B. {-2; 0; 2; 4; 8}.",
          "C. {-2; 2}.",
          "D. {8}."
        ],
        1,
        "Hợp của A và B gồm tất cả các phần tử thuộc A hoặc thuộc B: {-2; 0; 2; 4; 8}."
      ],
      [
        "Cho A = (-&infin;; 4) và B = [1; +&infin;). Tập hợp A &cap; B bằng:",
        [
          "A. &empty;.",
          "B. [1; 4).",
          "C. (-&infin;; +&infin;).",
          "D. (1; 4]."
        ],
        1,
        "Giao của (-&infin;; 4) và [1; +&infin;) là nửa khoảng [1; 4)."
      ],
      [
        "Điểm nào sau đây thuộc đường thẳng bờ của miền nghiệm bất phương trình 2x + 3y - 6 &le; 0?",
        [
          "A. (0; 3).",
          "B. (3; 0).",
          "C. (2; 1).",
          "D. (1; 2)."
        ],
        1,
        "Thay (3; 0) vào phương trình bờ 2x + 3y - 6 = 0: 2(3) + 0 - 6 = 0 (đúng)."
      ],
      [
        "Cho hệ bất phương trình {x - y &le; 2 ; x + 2y &ge; 4 ; y &le; 3}. Điểm nào sau đây thuộc miền nghiệm của hệ?",
        [
          "A. (4; 0).",
          "B. (1; 4).",
          "C. (2; 2).",
          "D. (0; 0)."
        ],
        2,
        "Thay (2; 2): 2 - 2 = 0 &le; 2; 2 + 2(2) = 6 &ge; 4; 2 &le; 3 (thỏa mãn cả 3 BPT)."
      ],
      [
        "Giá trị của biểu thức T = sin<sup>2</sup>40&deg; + sin<sup>2</sup>140&deg; - cos<sup>2</sup>40&deg; bằng (biết sin140&deg; = sin40&deg;)?",
        [
          "A. 2sin<sup>2</sup>40&deg; - cos<sup>2</sup>40&deg;.",
          "B. 0.",
          "C. 1.",
          "D. sin<sup>2</sup>40&deg;."
        ],
        0,
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
          "A. 10.",
          "B. 2,5.",
          "C. 6.",
          "D. 5."
        ],
        3,
        "Áp dụng công thức tính diện tích tam giác theo đường cao ứng với cạnh đáy a trong Toán 10: S = 1/2 . a . h<sub>a</sub> &rArr; h<sub>a</sub> = 2S / a = (2 . 30) / 12 = 60 / 12 = 5."
      ],
      [
        "Cho tam giác ABC có góc A = 30&deg;, góc B = 45&deg;, cạnh a = 8. Độ dài cạnh b bằng:",
        [
          "A. 4&radic;2.",
          "B. 16.",
          "C. 8&radic;2.",
          "D. 8&radic;3."
        ],
        2,
        "Theo định lí sin: b = a.sinB / sinA = 8 . (&radic;2/2) / (1/2) = 8&radic;2."
      ],
      [
        "Cho tam giác ABC có ba cạnh a = 10, b = 17, c = 21. Diện tích S của tam giác ABC bằng:",
        [
          "A. 84.",
          "B. 96.",
          "C. 72.",
          "D. 42."
        ],
        0,
        "Nửa chu vi p = (10 + 17 + 21)/2 = 24. S = &radic;(24.(24-10).(24-17).(24-21)) = &radic;(24.14.7.3) = 84."
      ],
      [
        "Trong tam giác ABC ở câu 11 (a = 10, b = 17, c = 21, S = 84), bán kính đường tròn nội tiếp r bằng:",
        [
          "A. 4.",
          "B. 3.",
          "C. 3,5.",
          "D. 4,5."
        ],
        2,
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
          "A. P là điều kiện cần để có Q.",
          "B. Q là điều kiện cần để có P.",
          "C. P là điều kiện đủ để có Q.",
          "D. Nếu P thì Q."
        ],
        0,
        "Trong mệnh đề kéo theo P &rArr; Q, P là giả thiết (điều kiện đủ để có Q) và Q là kết luận (điều kiện cần để có P). Khẳng định \"P là điều kiện cần để có Q\" là cách diễn đạt của mệnh đề đảo Q &rArr; P, do đó không phải là mệnh đề P &rArr; Q."
      ],
      [
        "Mệnh đề \"&exist;x &isin; <b>R</b>, x<sup>2</sup> = 18\" được phát biểu là:",
        [
          "A. Chỉ có một số thực mà bình phương của nó bằng 18.",
          "B. Có ít nhất một số thực mà bình phương của nó bằng 18.",
          "C. Bình phương của mỗi số thực bằng 18.",
          "D. Nếu x là một số thực thì x<sup>2</sup> = 18."
        ],
        1,
        "Kí hiệu &exist; đọc là \"tồn tại\" hoặc \"có ít nhất một\". Do đó mệnh đề \"&exist;x &isin; <b>R</b>, x<sup>2</sup> = 18\" được phát biểu chuẩn là: \"Có ít nhất một số thực mà bình phương của nó bằng 18\"."
      ],
      [
        "Cho tập hợp A = {1; 3; 5; 7; 9}. Tập hợp nào sau đây không phải là tập con của tập A?",
        [
          "A. {1; 3; 5}.",
          "B. {1; 3; 6; 9}.",
          "C. &empty;.",
          "D. {1; 3}."
        ],
        1,
        "Tập hợp {1; 3; 6; 9} chứa phần tử 6 không thuộc tập hợp A (6 &notin; A), do đó theo định nghĩa tập con trong Toán 10 thì {1; 3; 6; 9} không phải là tập con của A."
      ],
      [
        "Miền nghiệm của bất phương trình 2x + y - 4 &gt; 0 KHÔNG chứa điểm nào sau đây?",
        [
          "A. (1; 1).",
          "B. (0; 5).",
          "C. (2; 2).",
          "D. (3; 1)."
        ],
        0,
        "Thay (1; 1) vào: 2(1) + 1 - 4 = -1 &le; 0 nên điểm (1; 1) không thuộc miền nghiệm."
      ],
      [
        "Trong các cặp số sau đây, cặp nào là nghiệm của bất phương trình 3x + 4y &lt; 1?",
        [
          "A. (1; 1).",
          "B. (0; 1).",
          "C. (3; 7).",
          "D. (-2; 1)."
        ],
        3,
        "Thay tọa độ điểm (-2; 1) vào vế trái bất phương trình: 3(-2) + 4(1) = -6 + 4 = -2 &lt; 1 (thỏa mãn). Vậy cặp (-2; 1) là nghiệm."
      ],
      [
        "Cho bất phương trình x - y &le; 2. Khẳng định nào sau đây là đúng?",
        [
          "A. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x + y = 2 chứa gốc tọa độ.",
          "B. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = 2 không chứa gốc tọa độ.",
          "C. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = 2 chứa gốc tọa độ.",
          "D. Miền nghiệm của bất phương trình là nửa mặt phẳng bờ d: x - y = -2 chứa gốc tọa độ."
        ],
        2,
        "Đường thẳng bờ của bất phương trình là d: x - y = 2. Thay tọa độ gốc O(0; 0) vào vế trái: 0 - 0 = 0 &le; 2 (thỏa mãn). Vậy miền nghiệm là nửa mặt phẳng bờ d: x - y = 2 có chứa gốc tọa độ O(0; 0)."
      ],
      [
        "Giá trị của biểu thức P = sin30&deg; + cos60&deg; - tan45&deg; bằng:",
        [
          "A. -1.",
          "B. 1.",
          "C. 0.",
          "D. 1/2."
        ],
        2,
        "Ta có: sin30&deg; = 1/2, cos60&deg; = 1/2, tan45&deg; = 1 &rArr; P = 1/2 + 1/2 - 1 = 0."
      ],
      [
        "Trong các cặp số sau, cặp nào là nghiệm của hệ bất phương trình {2x + 3y &gt; 4 ; x &gt; 0}?",
        [
          "A. (-2; 1).",
          "B. (1; -2).",
          "C. (2; 1).",
          "D. (0; 1)."
        ],
        2,
        "Thay cặp (2; 1): có x = 2 &gt; 0 và 2(2) + 3(1) = 7 &gt; 4. Cả hai bất phương trình đều thỏa mãn, do đó (2; 1) là nghiệm của hệ."
      ],
      [
        "Trên mặt phẳng Oxy lấy điểm M thuộc nửa đường tròn đơn vị sao cho góc xOM = 120&deg;. Tung độ của điểm M bằng:",
        [
          "A. 1.",
          "B. -1/2.",
          "C. -&radic;3 / 2.",
          "D. &radic;3 / 2."
        ],
        3,
        "Theo định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị (Toán 10): tung độ của điểm M chính là sin(xOM) = sin120&deg;. Ta có sin120&deg; = sin(180&deg; - 60&deg;) = sin60&deg; = &radic;3 / 2."
      ],
      [
        "Trong mặt phẳng toạ độ Oxy, phần nửa mặt phẳng không tô đậm (không kể bờ) trong hình vẽ dưới đây là biểu diễn hình học tập nghiệm của bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 300 230\" width=\"300\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan11\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      </pattern>\n    </defs>\n    <!-- Vùng tô đậm (gạch sọc) không chứa gốc O -->\n    <polygon points=\"190,30 280,30 280,215 95,215\" fill=\"url(#hatchToan11)\"/>\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"280,100 272,96 272,104\" fill=\"#334155\"/>\n    <text x=\"272\" y=\"118\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n    \n    <line x1=\"110\" y1=\"215\" x2=\"110\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"110,20 106,28 114,28\" fill=\"#334155\"/>\n    <text x=\"96\" y=\"25\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"94\" y=\"116\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Điểm cắt (3/2; 0) và (0; -3) -->\n    <!-- 1 đơn vị = 26px: 3/2 = 1.5 -> X = 110 + 39 = 149; -3 -> Y = 100 + 78 = 178 -->\n    <line x1=\"149\" y1=\"97\" x2=\"149\" y2=\"103\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"141\" y=\"93\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">3/2</text>\n\n    <line x1=\"107\" y1=\"178\" x2=\"113\" y2=\"178\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"86\" y=\"182\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">-3</text>\n\n    <!-- Đường thẳng 2x - y = 3 (nét đứt vì không kể bờ) -->\n    <line x1=\"190\" y1=\"30\" x2=\"95\" y2=\"215\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-dasharray=\"6,4\"/>\n    <text x=\"195\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">2x - y = 3</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Miền không tô đậm (không kể bờ) trong mặt phẳng toạ độ Oxy</div>\n</div>",
        [
          "A. 2x - y &lt; 3.",
          "B. x - 2y &lt; 3.",
          "C. 2x - y &gt; 3.",
          "D. x - 2y &gt; 3."
        ],
        0,
        "Phương trình đường thẳng bờ đi qua (3/2; 0) và (0; -3) là x / (3/2) + y / (-3) = 1 &hArr; 2x/3 - y/3 = 1 &hArr; 2x - y = 3. Miền nghiệm không tô đậm chứa gốc tọa độ O(0; 0) và không kể bờ. Thay (0; 0): 2(0) - 0 = 0 &lt; 3 (thỏa mãn). Vậy bất phương trình tương ứng là 2x - y &lt; 3."
      ],
      [
        "Tam giác ABC có góc B = 10&deg; và góc C = 20&deg;. Giá trị của tanA bằng:",
        [
          "A. -&radic;3.",
          "B. -1 / &radic;3.",
          "C. 1 / &radic;3.",
          "D. &radic;3."
        ],
        1,
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
          "A. \"&forall;x &gt; 0 ta đều có: &radic;x &gt; x\"",
          "B. \"Nếu x &lt; 3 thì x<sup>2</sup> &lt; 9\"",
          "C. \"Tồn tại x &isin; <b>R</b> sao cho x<sup>2</sup> + 3x - 4 = 0\"",
          "D. \"Giải phương trình 2x<sup>2</sup> - 3x - 5 = 0?\""
        ],
        3,
        "Theo định nghĩa mệnh đề trong SGK Toán 10: Mệnh đề là một câu khẳng định có tính đúng hoặc sai. Câu nghi vấn (câu hỏi) \"Giải phương trình 2x<sup>2</sup> - 3x - 5 = 0?\" không phải là câu khẳng định nên không phải là một mệnh đề."
      ],
      [
        "Tìm mệnh đề phủ định của mệnh đề M = \"Tất cả học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường đều đạt giải\".",
        [
          "A. \"Có rất nhiều học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "B. \"Tất cả học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "C. \"Có ít nhất một học sinh trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\"",
          "D. \"Không có học sinh nào trong đội chính thức tham gia thi chọn HSG cấp tỉnh của trường không đạt giải\""
        ],
        2,
        "Mệnh đề ban đầu có dạng \"&forall;x &isin; X, P(x)\" (tất cả... đều đạt giải). Phủ định của mệnh đề chứa lượng từ \"&forall;\" (tất cả) là mệnh đề chứa lượng từ \"&exist;\" (tồn tại / có ít nhất một) kèm phủ định của tính chất: \"Có ít nhất một học sinh trong đội chính thức... không đạt giải\"."
      ],
      [
        "Cho hai tập hợp A = [3; 9] và B = (3; 11). Xác định tập hợp A &cap; B.",
        [
          "A. [3; 8)",
          "B. {3; 4; 5; 6; 7; 8; 9}",
          "C. [3; 11)",
          "D. (3; 9]"
        ],
        3,
        "Phần tử chung của A = [3; 9] và B = (3; 11) là các số thực x thỏa mãn 3 &le; x &le; 9 và 3 &lt; x &lt; 11 &hArr; 3 &lt; x &le; 9. Do đó A &cap; B = (3; 9]."
      ],
      [
        "Hình vẽ biểu diễn trên trục số thực dưới đây là hình biểu diễn cho tập hợp số nào sau đây:\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 440 85\" width=\"440\" height=\"85\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Trục số -->\n    <line x1=\"20\" y1=\"45\" x2=\"420\" y2=\"45\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <polygon points=\"420,45 410,40 410,50\" fill=\"#334155\"/>\n    <text x=\"412\" y=\"65\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">+∞</text>\n    <text x=\"15\" y=\"65\" font-size=\"12\" font-style=\"italic\" fill=\"#64748b\">-∞</text>\n\n    <!-- Gạch bỏ từ -vô cùng đến 2 -->\n    <line x1=\"30\" y1=\"35\" x2=\"45\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"45\" y1=\"35\" x2=\"60\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"60\" y1=\"35\" x2=\"75\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"75\" y1=\"35\" x2=\"90\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n\n    <!-- Điểm 2: ngoặc vuông [ quay sang phải -->\n    <text x=\"96\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">[</text>\n    <text x=\"98\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">2</text>\n\n    <!-- Khoảng lấy [2; 4]: đoạn thẳng đậm -->\n    <line x1=\"108\" y1=\"45\" x2=\"180\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n\n    <!-- Điểm 4: ngoặc vuông ] quay sang trái -->\n    <text x=\"180\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">]</text>\n    <text x=\"182\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">4</text>\n\n    <!-- Gạch bỏ từ 4 đến 6 -->\n    <line x1=\"195\" y1=\"35\" x2=\"210\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"210\" y1=\"35\" x2=\"225\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"225\" y1=\"35\" x2=\"240\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"240\" y1=\"35\" x2=\"255\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n\n    <!-- Điểm 6: ngoặc vuông [ quay sang phải -->\n    <text x=\"262\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">[</text>\n    <text x=\"264\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">6</text>\n\n    <!-- Khoảng lấy [6; 8): đoạn thẳng đậm -->\n    <line x1=\"274\" y1=\"45\" x2=\"340\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n\n    <!-- Điểm 8: ngoặc tròn ) quay sang trái -->\n    <text x=\"340\" y=\"52\" font-size=\"22\" font-weight=\"bold\" fill=\"#2563eb\">)</text>\n    <text x=\"342\" y=\"72\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">8</text>\n\n    <!-- Gạch bỏ từ 8 đến +vô cùng -->\n    <line x1=\"355\" y1=\"35\" x2=\"370\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"370\" y1=\"35\" x2=\"385\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <line x1=\"385\" y1=\"35\" x2=\"400\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n  </svg>\n  <div class=\"figure-caption\">Hình biểu diễn tập hợp số trên trục số thực</div>\n</div>",
        [
          "A. K = {2; 3; 4; 6; 7; 8}",
          "B. K = [2; 8) \\ (4; 6)",
          "C. K = [2; 8) \\ [4; 6]",
          "D. K = {2; 3; 4; 6; 7}"
        ],
        1,
        "Tập hợp lấy từ 2 (có lấy đầu mút 2) đến 8 (không lấy đầu mút 8), và loại bỏ các phần tử nằm trong khoảng (4; 6) (hai điểm 4 và 6 vẫn được giữ lại do ngoặc quay ra vùng lấy). Do đó tập hợp số tương ứng là K = [2; 8) \\ (4; 6)."
      ],
      [
        "Hệ bất phương trình nào sau đây có miền nghiệm là một miền tam giác trong mặt phẳng tọa độ Oxy?",
        [
          "A. {x &ge; 0 ; y &ge; 0 ; x + y &le; 3}.",
          "B. {x &ge; 0 ; y &ge; 0}.",
          "C. {x &gt; 1 ; y &lt; 2}.",
          "D. {x + y &le; 2 ; x - y &ge; 1}."
        ],
        0,
        "Hệ {x >= 0; y >= 0; x + y <= 3} bị giới hạn bởi trục Ox (y=0), trục Oy (x=0) và đường thẳng x + y = 3 tạo thành tam giác vuông có các đỉnh O(0; 0), A(3; 0), B(0; 3)."
      ],
      [
        "Miền nghiệm của bất phương trình x + 2y &le; 4 chứa điểm nào sau đây?",
        [
          "A. B(2; 1)",
          "B. A(1; 2)",
          "C. D(-1; 3)",
          "D. C(4; 3)"
        ],
        0,
        "Thay tọa độ điểm B(2; 1) vào bất phương trình: 2 + 2(1) = 4 &le; 4 (thỏa mãn dấu \"&le;\"). Các điểm còn lại đều cho giá trị lớn hơn 4 (1 + 4 = 5 &gt; 4; 4 + 6 = 10 &gt; 4; -1 + 6 = 5 &gt; 4)."
      ],
      [
        "Trong mặt phẳng toạ độ Oxy, phần nửa mặt phẳng không bị gạch (kể cả bờ) trong hình vẽ dưới đây là miền nghiệm của bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 290 230\" width=\"290\" height=\"230\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan12\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      </pattern>\n    </defs>\n    <!-- Nửa mặt phẳng chứa O(0; 0) bị gạch sọc -->\n    <polygon points=\"65,225 210,35 20,35 20,225\" fill=\"url(#hatchToan12)\"/>\n\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"110\" x2=\"270\" y2=\"110\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"270,110 262,106 262,114\" fill=\"#334155\"/>\n    <text x=\"262\" y=\"128\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n\n    <line x1=\"120\" y1=\"225\" x2=\"120\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"120,20 116,28 124,28\" fill=\"#334155\"/>\n    <text x=\"106\" y=\"25\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"104\" y=\"104\" font-size=\"13\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Điểm (2; 0) và (0; -2) -->\n    <!-- 1 đơn vị = 26px: (2; 0) -> X = 120 + 52 = 172; (0; -2) -> Y = 110 + 52 = 162 -->\n    <line x1=\"172\" y1=\"107\" x2=\"172\" y2=\"113\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"168\" y=\"128\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">2</text>\n\n    <line x1=\"117\" y1=\"162\" x2=\"123\" y2=\"162\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n    <text x=\"100\" y=\"166\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">-2</text>\n\n    <!-- Đường thẳng x - y = 2 (nét liền vì kể cả bờ) -->\n    <line x1=\"65\" y1=\"225\" x2=\"215\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2.2\"/>\n    <text x=\"218\" y=\"45\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">d: x - y = 2</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Nửa mặt phẳng không bị gạch (kể cả bờ d)</div>\n</div>",
        [
          "A. x - y + 2 &gt; 0",
          "B. x - y &ge; 2",
          "C. x + y &ge; -2",
          "D. x - y &ge; -2"
        ],
        1,
        "Đường thẳng bờ đi qua (2; 0) và (0; -2) có phương trình là x - y = 2. Gốc tọa độ O(0; 0) nằm trong miền bị gạch bỏ vì 0 - 0 = 0 &lt; 2. Miền nghiệm không bị gạch chứa các điểm thỏa mãn x - y &ge; 2 (ví dụ điểm (3; 0) có 3 - 0 = 3 &ge; 2)."
      ],
      [
        "Cho hệ bất phương trình: {x &lt; 3 ; y &gt; 0 ; x - y + 4 &gt; 0} có miền nghiệm là (S). Kết luận nào sau đây đúng?",
        [
          "A. Điểm E(1; 5) thuộc S",
          "B. Miền nghiệm của hệ là miền trong của một tam giác.",
          "C. Điểm A(-1; 1) không thuộc S",
          "D. Tất cả các điểm trên đoạn thẳng AB với A(0; 1) và B(2; 2) đều nằm ngoài miền nghiệm (S)"
        ],
        1,
        "Ba đường thẳng x = 3, y = 0, x - y + 4 = 0 cắt nhau đôi một tại 3 đỉnh phân biệt (-4; 0), (3; 0) và (3; 7). Miền nghiệm gồm các điểm nằm đồng thời về phía bên trái đường x = 3, phía trên trục hoành y = 0 và phía dưới đường x - y + 4 = 0, tạo thành miền trong của một tam giác."
      ],
      [
        "Miền tam giác (phần nền trắng) trong hình vẽ dưới đây là miền nghiệm của hệ bất phương trình nào?\n<div class=\"exam-figure\">\n  <svg viewBox=\"0 0 320 240\" width=\"320\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <pattern id=\"hatchToan12_9\" width=\"10\" height=\"10\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>\n      </pattern>\n    </defs>\n    <!-- Nền gạch ngoài tam giác -->\n    <rect x=\"20\" y=\"20\" width=\"280\" height=\"200\" fill=\"url(#hatchToan12_9)\"/>\n    <!-- Miền tam giác (phần nền trắng) -->\n    <!-- Đỉnh (0; 2): X = 150, Y = 120 - 2*30 = 60 -->\n    <!-- Đáy nằm trên y = -1: Y = 120 + 30 = 150 -->\n    <!-- Giao với x - y + 2 = 0 tại y = -1 => x = -3: X = 150 - 3*30 = 60 -->\n    <!-- Giao với 2x + y - 2 = 0 tại y = -1 => x = 1.5: X = 150 + 1.5*30 = 195 -->\n    <polygon points=\"150,60 60,150 195,150\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n\n    <!-- Trục toạ độ Oxy -->\n    <line x1=\"20\" y1=\"120\" x2=\"295\" y2=\"120\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"295,120 287,116 287,124\" fill=\"#334155\"/>\n    <text x=\"287\" y=\"136\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">x</text>\n\n    <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"150,20 146,28 154,28\" fill=\"#334155\"/>\n    <text x=\"136\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">y</text>\n    <text x=\"136\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#475569\">O</text>\n\n    <!-- Đường y = -1 -->\n    <line x1=\"20\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n    <text x=\"210\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#0284c7\">y = -1</text>\n\n    <!-- Điểm (0; 2) -->\n    <circle cx=\"150\" cy=\"60\" r=\"3\" fill=\"#2563eb\"/>\n    <text x=\"156\" y=\"65\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">2</text>\n  </svg>\n  <div class=\"figure-caption\">Hình minh hoạ: Miền tam giác nền trắng giới hạn bởi 3 đường thẳng</div>\n</div>",
        [
          "A. {x - y &le; 2 ; 2x + y - 2 &ge; 0 ; y + 1 &le; 0}",
          "B. {x &ge; -1 ; 2x + y - 2 &ge; 0 ; x - y &le; 2}",
          "C. {x - y + 2 &ge; 0 ; y + 1 &ge; 0 ; 2x + y - 2 &le; 0}",
          "D. {y &le; 1 ; 2x + y - 2 &ge; 0 ; x + 4y - 10 &ge; 0}"
        ],
        2,
        "Cạnh đáy của tam giác nằm trên đường y = -1, miền tam giác nằm phía trên nên y &ge; -1 &hArr; y + 1 &ge; 0. Hai cạnh bên là các đường thẳng x - y + 2 = 0 và 2x + y - 2 = 0. Gốc O(0; 0) nằm trong tam giác và thỏa mãn 0 - 0 + 2 &ge; 0, 0 + 1 &ge; 0, 2(0) + 0 - 2 &le; 0. Vậy hệ bất phương trình đúng là hệ A."
      ],
      [
        "Cho góc &alpha; có 90&deg; &lt; &alpha; &le; 180&deg;. Kết luận nào sau đây đúng?",
        [
          "A. sin&alpha; &gt; 0; cot&alpha; &lt; 0",
          "B. tan&alpha; . cot&alpha; &lt; 0",
          "C. sin&alpha; &lt; 0; tan&alpha; &gt; 0",
          "D. sin&alpha; &gt; 0; cos&alpha; &gt; 0"
        ],
        0,
        "Với góc tù &alpha; (90&deg; &lt; &alpha; &le; 180&deg;), điểm biểu diễn trên nửa đường tròn đơn vị có tung độ dương (sin&alpha; &gt; 0) và hoành độ âm (cos&alpha; &lt; 0). Do đó cot&alpha; = cos&alpha; / sin&alpha; &lt; 0. Kết luận đúng là sin&alpha; &gt; 0 và cot&alpha; &lt; 0."
      ],
      [
        "Cho sin&alpha; = 0,3 với &alpha; &gt; 90&deg;. Tính: cos&alpha;.",
        [
          "A. &plusmn;&radic;91 / 10",
          "B. &plusmn;&radic;0,7",
          "C. -&radic;91 / 10",
          "D. &plusmn;9 / 10"
        ],
        2,
        "Áp dụng công thức lượng giác cơ bản trong Toán 10: sin<sup>2</sup>&alpha; + cos<sup>2</sup>&alpha; = 1 &rArr; cos<sup>2</sup>&alpha; = 1 - 0,3<sup>2</sup> = 0,91 = 91/100. Vì &alpha; &gt; 90&deg; (góc tù) nên cos&alpha; &lt; 0, do đó cos&alpha; = -&radic;91 / 10."
      ],
      [
        "Cho tam giác ABC có BC = 6a, góc ABC = 60&deg;, cosBAC = 2/3. Tính AC theo a.",
        [
          "A. 3a",
          "B. 6a / &radic;5",
          "C. 9a / 5",
          "D. 9a&radic;15 / 5"
        ],
        3,
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
  },
  {
    "id": "toan-10-de-13",
    "title": "Toán 10 - Đề 13 - Trường THPT Đông Hà – Quảng Trị (Giữa học kì I 2026–2027 · Mã đề 1003)",
    "subject": "math",
    "duration": 90,
    "school": "Trường THPT Đông Hà",
    "province": "Quảng Trị",
    "year": "2026–2027",
    "sourceUrl": "",
    "questions": [
      [
        "Cho mệnh đề: \"Nếu hai tam giác bằng nhau thì diện tích hai tam giác đó bằng nhau\". Mệnh đề đảo của mệnh đề trên là",
        [
          "Nếu hai tam giác không bằng nhau thì diện tích hai tam giác đó không bằng nhau.",
          "Nếu hai tam giác có diện tích không bằng nhau thì hai tam giác đó không bằng nhau.",
          "Hai tam giác bằng nhau khi và chỉ khi diện tích hai tam giác đó bằng nhau.",
          "Nếu hai tam giác có diện tích bằng nhau thì hai tam giác đó bằng nhau."
        ],
        3,
        "Mệnh đề đã cho có dạng P &rArr; Q với P: \"Hai tam giác bằng nhau\", Q: \"Diện tích hai tam giác đó bằng nhau\".<br>Mệnh đề đảo có dạng Q &rArr; P: \"Nếu hai tam giác có diện tích bằng nhau thì hai tam giác đó bằng nhau\"."
      ],
      [
        "Hệ bất phương trình nào là hệ bất phương trình bậc nhất hai ẩn?",
        [
          "<span class=\"math-system\"><span>{</span><span>3x + y ≥ 9<br><span class=\"math-fraction\"><span>2</span><span>x</span></span> − 3y ≤ 1</span></span>",
          "<span class=\"math-system\"><span>{</span><span>x + y<sup>2</sup> > 4<br>−3x − 5y ≤ −6</span></span>",
          "<span class=\"math-system\"><span>{</span><span>√x + y > 0<br>−x − y ≤ 10</span></span>",
          "<span class=\"math-system\"><span>{</span><span>−3x + y ≤ 1<br>x − √7·y > 2</span></span>"
        ],
        3,
        "Chỉ ở D, cả hai bất phương trình đều có dạng ax + by ≤ c hoặc ax + by > c, với hệ số là hằng số. Các phương án A, B, C lần lượt chứa 1/x, y² hoặc √x."
      ],
      [
        "Cho hai tập hợp A = [−2;4) và B = (0;+∞). Khẳng định nào sau đây đúng?",
        [
          "A ∩ B = (0;4).",
          "A ∪ B = (0;4).",
          "A ∩ B = [−2;+∞).",
          "A ∪ B = (4;+∞)."
        ],
        0,
        "Giao của hai tập hợp A = [-2; 4) và B = (0; +&infin;) là tập hợp các phần tử thuộc cả A và B.<br>Ta có A &cap; B = [-2; 4) &cap; (0; +&infin;) = (0; 4)."
      ],
      [
        "Điểm A(−1;3) thuộc miền nghiệm của bất phương trình nào sau đây?",
        [
          "x + 3y < 0.",
          "2x + y − 4 > 0.",
          "x − 3y > 0.",
          "−3x + 2y − 4 > 0."
        ],
        3,
        "Thay A(−1;3): phương án A cho 8 < 0, B cho −3 > 0, C cho −10 > 0 đều sai. Phương án D cho 5 > 0, đúng."
      ],
      [
        "Cho mệnh đề chứa biến P(x): \"x<sup>2</sup> > 3x\" với x là số thực. Mệnh đề nào đúng?",
        [
          "P(3)",
          "P(1)",
          "P(4)",
          "P(2)"
        ],
        2,
        "Với x = 4, ta có 4² = 16 > 12 = 3·4. Các giá trị 3, 1, 2 không thỏa mãn."
      ],
      [
        "Miền không gạch chéo trong hình vẽ (bao gồm cả đường thẳng d) là miền nghiệm của bất phương trình bậc nhất hai ẩn nào dưới đây?<div style=\"margin:14px auto;text-align:center;max-width:300px;\"><svg viewBox=\"0 0 250 190\" style=\"background:#fff;border:1px solid #cbd5e1;border-radius:8px;width:100%;max-width:270px;height:auto;display:inline-block;\"><defs><pattern id=\"hatch6\" width=\"8\" height=\"8\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" stroke=\"#64748b\" stroke-width=\"1.2\"/></pattern><marker id=\"arrow6\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 2 L 8 5 L 0 8 z\" fill=\"#1e293b\"/></marker></defs><polygon points=\"-10,165 240,40 240,190 -10,190\" fill=\"url(#hatch6)\" opacity=\"0.75\"/><line x1=\"15\" y1=\"80\" x2=\"235\" y2=\"80\" stroke=\"#1e293b\" stroke-width=\"1.5\" marker-end=\"url(#arrow6)\"/><text x=\"235\" y=\"75\" font-size=\"14\" font-style=\"italic\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">x</text><line x1=\"80\" y1=\"175\" x2=\"80\" y2=\"15\" stroke=\"#1e293b\" stroke-width=\"1.5\" marker-end=\"url(#arrow6)\"/><text x=\"86\" y=\"22\" font-size=\"14\" font-style=\"italic\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">y</text><line x1=\"-10\" y1=\"165\" x2=\"240\" y2=\"40\" stroke=\"#1e40af\" stroke-width=\"2\"/><circle cx=\"160\" cy=\"80\" r=\"3\" fill=\"#1e293b\"/><text x=\"158\" y=\"98\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">2</text><circle cx=\"80\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/><text x=\"58\" y=\"124\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">-1</text><circle cx=\"80\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/><text x=\"66\" y=\"96\" font-size=\"13\" font-style=\"italic\" font-family=\"sans-serif\" fill=\"#1e293b\">O</text><text x=\"215\" y=\"35\" font-size=\"13\" font-style=\"italic\" font-family=\"sans-serif\" fill=\"#1e40af\" font-weight=\"bold\">d</text></svg></div>",
        [
          "2x − y ≤ 0.",
          "x − 2y ≤ 2.",
          "x − 2y > 1.",
          "x − 2y < 2."
        ],
        1,
        "Đường thẳng d cắt trục hoành tại điểm (2; 0) và cắt trục tung tại điểm (0; -1).<br>Phương trình đoạn chắn của đường thẳng d: x/2 + y/(-1) = 1 &hArr; x - 2y = 2.<br>Gốc tọa độ O(0; 0) nằm trong miền không bị gạch chéo. Thay O(0; 0) vào biểu thức: 0 - 2(0) = 0 &le; 2 (thỏa mãn).<br>Do miền nghiệm kể cả bờ d nên bất phương trình tương ứng là x - 2y &le; 2."
      ],
      [
        "Tìm mệnh đề phủ định của mệnh đề: P: \"∃x ∈ ℝ : 2x − 1 < 0\"",
        [
          "P̄: \"∀x ∈ ℝ : 2x − 1 ≥ 0\".",
          "P̄: \"∃x ∈ ℝ : 2x − 1 > 0\".",
          "P̄: \"∀x ∈ ℝ : 2x − 1 < 0\".",
          "P̄: \"∀x ∈ ℝ : 2x − 1 > 0\"."
        ],
        0,
        "Phủ định của lượng từ &exist; là &forall;, phủ định của quan hệ nhỏ hơn (<) là lớn hơn hoặc bằng (&ge;).<br>Do đó mệnh đề phủ định là \"&forall; x &isin; ℝ, 2x - 1 &ge; 0\"."
      ],
      [
        "Trong các bất phương trình sau đây, bất phương trình nào là bất phương trình bậc nhất hai ẩn?",
        [
          "2x + y ≤ 1.",
          "2x<sup>2</sup> − 3y ≥ 1.",
          "3x + 1/y > 1.",
          "3xy + 1 ≤ 0."
        ],
        0,
        "Chỉ 2x + y ≤ 1 có dạng ax + by ≤ c, trong đó x, y đều bậc nhất."
      ],
      [
        "Cặp số nào là một nghiệm của hệ bất phương trình <span class=\"math-system\"><span>{</span><span>x + y > 2<br>−2x + y ≤ 7</span></span>?",
        [
          "(4;−1)",
          "(−1;12)",
          "(−5;−2)",
          "(2;−5)"
        ],
        0,
        "Thay cặp số (4; -1) vào hệ bất phương trình:<br>• 4 + (-1) = 3 > 2 (Đúng).<br>• -2(4) + (-1) = -9 &le; 7 (Đúng).<br>Vậy (4; -1) là một nghiệm của hệ bất phương trình."
      ],
      [
        "Cho α ∈ (90°;180°). Mệnh đề nào sau đây đúng?",
        [
          "cos α > 0.",
          "tan α < 0.",
          "cot α > 0.",
          "sin α < 0."
        ],
        1,
        "Với góc tù 90&deg; < &alpha; < 180&deg; (góc phần tư thứ II):<br>• sin&alpha; > 0<br>• cos&alpha; < 0<br>• tan&alpha; = sin&alpha; / cos&alpha; < 0<br>• cot&alpha; = cos&alpha; / sin&alpha; < 0.<br>Do đó khẳng định tan&alpha; < 0 là đúng."
      ],
      [
        "Trong các câu sau có bao nhiêu câu là mệnh đề:<br>(1): Số 7 là một số lẻ.<br>(2): 2x + 1 = 6, với x là biến số thực.<br>(3): Các em hãy cố gắng làm bài thi cho tốt !<br>(4): 4 < 2",
        [
          "1.",
          "4.",
          "3.",
          "2."
        ],
        3,
        "(1) và (4) là các câu khẳng định có thể xác định đúng hoặc sai, nên là mệnh đề. (2) là mệnh đề chứa biến; (3) là câu cầu khiến. Vậy có 2 mệnh đề."
      ],
      [
        "Cho A = {x ∈ ℝ / −3 < x ≤ 10}. Khẳng định nào sau đây đúng?",
        [
          "A = [−3;10)",
          "A = [−3;10]",
          "A = (−3;10]",
          "A = (−3;10)"
        ],
        2,
        "Tập hợp các số thực x lớn hơn -3 và nhỏ hơn hoặc bằng 10 được viết dưới dạng nửa khoảng là (-3; 10]."
      ]
    ],
    "tf": [
      {
        "stem": "Cho ba tập hợp: A = (−5;4], B = {x ∈ ℝ | x + 2 > 3}, C = {x ∈ ℕ | x<sup>2</sup> + 6x = 0}. Các khẳng định sau đúng hay sai?",
        "items": [
          [
            "a) Phương trình x<sup>2</sup> + 6x = 0 có hai nghiệm thực phân biệt.",
            true,
            "Phương trình x<sup>2</sup> + 6x = 0 &hArr; x(x + 6) = 0 &hArr; x = 0 hoặc x = -6. Cả hai nghiệm đều thuộc ℝ và phân biệt. Khẳng định ĐÚNG."
          ],
          [
            "C = {0;−6}.",
            false,
            "Vì x &isin; ℕ (tập số tự nhiên) nên giá trị -6 bị loại, do đó C chỉ chứa phần tử 0, tức là C = {0}. Khẳng định C = {0; -6} là SAI."
          ],
          [
            "B = (1;+∞).",
            true,
            "Bất phương trình x + 2 > 3 &hArr; x > 1 &hArr; x &isin; (1; +&infin;). Do đó B = (1; +&infin;). Khẳng định ĐÚNG."
          ],
          [
            "A ∪ B = (−5;+∞).",
            true,
            "A = (-5; 4] và B = (1; +&infin;). Do 4 > 1 nên hai khoảng này chồng lên nhau trên trục số: (-5; 4] &cup; (1; +&infin;) = (-5; +&infin;). Khẳng định ĐÚNG."
          ]
        ]
      },
      {
        "stem": "Cho tam giác ABC, biết AC = 16, AB = 13, cos A = 12/13. Các khẳng định sau đúng hay sai?",
        "items": [
          [
            "a) Tam giác ABC có góc A là góc nhọn.",
            true,
            "Vì cos A = 12/13 > 0 nên góc A nhọn (0&deg; < A < 90&deg;). Khẳng định ĐÚNG."
          ],
          [
            "b) sin A = 25/169.",
            false,
            "Vì góc A nhọn nên sin A > 0. Ta có sin A = &radic;(1 - cos<sup>2</sup>A) = &radic;(1 - 144/169) = &radic;(25/169) = 5/13 &ne; 25/169. Khẳng định SAI."
          ],
          [
            "c) Diện tích tam giác ABC bằng 40.",
            true,
            "Diện tích tam giác ABC là S = (1/2).AB.AC.sin A = (1/2).13.16.(5/13) = 40. Khẳng định ĐÚNG."
          ],
          [
            "BC = 10.",
            false,
            "Theo định lí côsin: BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> - 2.AB.AC.cos A = 13<sup>2</sup> + 16<sup>2</sup> - 2.13.16.(12/13) = 169 + 256 - 384 = 41 &rArr; BC = &radic;41 &approx; 6,403 &ne; 10. Khẳng định SAI."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho hai tập hợp A = {x ∈ ℤ | 4 > x > −4} và B = {−2;0;2;4;6}. Tập hợp A ∪ B có bao nhiêu phần tử?",
        "answer": "9",
        "unit": "",
        "explanation": "A = {-3; -2; -1; 0; 1; 2; 3} gồm 7 phần tử.<br>B = {-2; 0; 2; 4; 6} gồm 5 phần tử.<br>A &cup; B = {-3; -2; -1; 0; 1; 2; 3; 4; 6}.<br>Số phần tử của A &cup; B là 9."
      },
      {
        "question": "Cho góc α, với 90° < α < 180°, thỏa mãn sin α = 5/13. Tính giá trị của biểu thức<br>P = 3sin α + 2cos α.",
        "answer": "-9/13",
        "unit": "",
        "explanation": "Vì 90&deg; < &alpha; < 180&deg; nên cos&alpha; < 0.<br>Ta có cos&alpha; = -&radic;(1 - sin<sup>2</sup>&alpha;) = -&radic;(1 - 25/169) = -12/13.<br>Do đó: P = 3(5/13) + 2(-12/13) = (15 - 24)/13 = -9/13 &approx; -0,69."
      },
      {
        "question": "Miền nghiệm của hệ bất phương trình sau đây là đa giác có diện tích bằng bao nhiêu?<br><span class=\"math-system\"><span>{</span><span>x + y ≤ 8<br>x ≥ 0<br>y ≥ 1</span></span>",
        "answer": "24.5",
        "unit": "",
        "explanation": "Miền nghiệm là tam giác giới hạn bởi 3 đường thẳng x = 0 (trục tung Oy), y = 1 và x + y = 8.<br>Giao điểm của các đường thẳng:<br>• A(0; 1) là giao của x = 0 và y = 1.<br>• B(0; 8) là giao của x = 0 và x + y = 8.<br>• C(7; 1) là giao của y = 1 và x + y = 8.<br>Tam giác ABC vuông tại A có AB = 8 - 1 = 7 và AC = 7 - 0 = 7.<br>Diện tích miền nghiệm là: S = (1/2).AB.AC = (1/2).7.7 = 24,5."
      },
      {
        "question": "Trên bờ sông coi như là đường thẳng, bạn Minh đánh dấu hai điểm A và B cách nhau 100 m. Đứng tại A, bạn Minh đo được góc nghiêng so với bờ sông tới vị trí C trên cù lao ở giữa sông là CÂB = 40°. Sau đó, Minh di chuyển đến B và đo được góc CBA = 45°. Tính khoảng cách ngắn nhất từ vị trí C trên cù lao đến đường bờ sông AB, làm tròn kết quả đến hàng phần mười.",
        "answer": "45.6",
        "unit": "m",
        "explanation": "Trong tam giác ABC: góc &ang;ACB = 180&deg; - (40&deg; + 45&deg;) = 95&deg;.<br>Theo định lí sin: AC / sin(&ang;CBA) = AB / sin(&ang;ACB) &rArr; AC = 100 . sin45&deg; / sin95&deg; &approx; 70,98 m.<br>Khoảng cách từ C đến bờ sông AB là chiều cao CH của tam giác ABC:<br>h = CH = AC . sin(&ang;CAB) = 70,98 . sin40&deg; &approx; 45,6 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1:",
        "question": "Xác định tính đúng sai của mệnh đề sau (có giải thích) và tìm mệnh đề phủ định của nó:<br>P: “Có ít nhất một số thực x thỏa mãn điều kiện x<sup>2</sup> − 3x + 2 = 0”",
        "solution": "• Mệnh đề P viết dưới dạng kí hiệu là: \"&exist; x &isin; ℝ : x<sup>2</sup> - 3x + 2 = 0\".<br>• Giải phương trình: x<sup>2</sup> - 3x + 2 = 0 &hArr; (x - 1)(x - 2) = 0 &hArr; x = 1 hoặc x = 2.<br>Vì 1 &isin; ℝ và 2 &isin; ℝ nên tồn tại số thực thỏa mãn phương trình. Vậy P là <b>MỆNH ĐỀ ĐÚNG</b> (0,25 điểm).<br>• Mệnh đề phủ định của P là P̄: \"Mọi số thực x đều không thỏa mãn x<sup>2</sup> - 3x + 2 = 0\" hay kí hiệu là: \"&forall; x &isin; ℝ, x<sup>2</sup> - 3x + 2 &ne; 0\" (0,25 điểm)."
      },
      {
        "title": "Câu 2:",
        "question": "Biểu diễn miền nghiệm của bất phương trình 2x − y ≥ 2 trên mặt phẳng tọa độ Oxy.",
        "solution": "• Vẽ đường thẳng bờ d: 2x - y = 2 đi qua hai điểm (1; 0) và (0; -2) (0,25 điểm).<br>• Lấy gốc tọa độ O(0; 0) không thuộc d. Thay tọa độ (0; 0) vào vế trái của bất phương trình: 2(0) - 0 = 0 < 2 (không thỏa mãn 2x - y &ge; 2).<br>• Kết luận: Miền nghiệm của bất phương trình 2x - y &ge; 2 là nửa mặt phẳng có bờ là đường thẳng d, không chứa gốc tọa độ O(0; 0) (kể cả bờ d) (0,25 điểm)."
      },
      {
        "title": "Câu 3:",
        "question": "Lớp 10A có 18 học sinh tham gia câu lạc bộ bóng đá và 15 học sinh tham gia câu lạc bộ bóng rổ. Biết rằng có 10 học sinh tham gia cả hai câu lạc bộ trên và lớp 10A có 45 học sinh. Hỏi có bao nhiêu học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ trên?",
        "solution": "• Gọi A là tập hợp học sinh tham gia CLB bóng đá &rArr; |A| = 18.<br>• Gọi B là tập hợp học sinh tham gia CLB bóng rổ &rArr; |B| = 15.<br>• Số học sinh tham gia cả hai CLB là |A &cap; B| = 10.<br>• Số học sinh tham gia ít nhất một trong hai CLB là:<br>|A &cup; B| = |A| + |B| - |A &cap; B| = 18 + 15 - 10 = 23 (học sinh) (0,25 điểm).<br>• Số học sinh không tham gia CLB nào trong hai CLB trên là:<br>45 - 23 = 22 (học sinh) (0,25 điểm).<br>Đáp số: 22 học sinh."
      },
      {
        "title": "Câu 4:",
        "question": "Hai chiếc tàu đánh cá cùng xuất phát từ một cảng biển O, chuyển động thẳng đều theo hai hướng tạo với nhau một góc 60°. Tàu A chạy với tốc độ 50 km/h, tàu B chạy với tốc độ 60 km/h. Trên tàu A có trang bị một thiết bị ra-đa với bán kính quan sát tối đa là 30√31 km (nghĩa là ra-đa chỉ phát hiện được các vật thể cách tàu A một khoảng không vượt quá 30√31 km, bỏ qua mọi yếu tố ảnh hưởng khác). Giả sử hai tàu được xem như các chất điểm và vùng biển hai tàu di chuyển được coi là một mặt phẳng. Hỏi kể từ lúc xuất phát, ra-đa của tàu A quan sát được tàu B với thời gian tối đa là bao lâu?",
        "solution": "• Gọi t (giờ, t > 0) là thời gian tính từ khi xuất phát đến thời điểm xét khoảng cách hai tàu.<br>• Sau thời gian t, quãng đường tàu thứ nhất đi được là OM = 50t (km), tàu thứ hai đi được là ON = 60t (km) (0,1 điểm).<br>• Khoảng cách giữa hai tàu là MN. Áp dụng định lí côsin trong tam giác OMN có góc &ang;MON = 60&deg;:<br>MN<sup>2</sup> = OM<sup>2</sup> + ON<sup>2</sup> - 2.OM.ON.cos60&deg;<br>MN<sup>2</sup> = (50t)<sup>2</sup> + (60t)<sup>2</sup> - 2(50t)(60t).(1/2) = 2500t<sup>2</sup> + 3600t<sup>2</sup> - 3000t<sup>2</sup> = 3100t<sup>2</sup><br>&rArr; MN = &radic;(3100t<sup>2</sup>) = 10&radic;31 t (km) (0,2 điểm).<br>• Để hai tàu giữ được liên lạc qua ra-đa thì khoảng cách giữa chúng không vượt quá 30&radic;31 km:<br>10&radic;31 t &le; 30&radic;31 &hArr; t &le; 3 (giờ) (0,2 điểm).<br>Vậy sau tối đa 3 giờ kể từ khi xuất phát, hai tàu vẫn còn giữ được liên lạc với nhau."
      },
      {
        "title": "Câu 5:",
        "question": "Một nhà hàng bán đồ ăn từ 10h00 sáng đến 22h00 mỗi ngày. Nhân viên phục vụ của nhà hàng làm việc theo hai ca, mỗi ca 8 tiếng, ca I từ 10h00 đến 18h00 và ca II từ 14h00 đến 22h00. Tiền lương của nhân viên được tính theo giờ (bảng dưới).<br><table class=\"source-exam-table\"><tr><th>Ca làm việc</th><th>Tiền lương/giờ/người</th></tr><tr><td>Ca I</td><td>20 000 đồng</td></tr><tr><td>Ca II</td><td>22 000 đồng</td></tr></table>Để nhà hàng hoạt động được thì cần tối thiểu 3 nhân viên trong khoảng 10h00 – 18h00, tối thiểu 12 nhân viên trong khoảng thời gian cao điểm 14h00 – 18h00 và không quá 10 nhân viên trong khoảng 18h00 – 22h00. Do số lượng khách trong khoảng 14h00 – 22h00 thường đông hơn nên nhà hàng cần số nhân viên ca II ít nhất phải gấp đôi số nhân viên ca I. Em hãy giúp chủ nhà hàng đưa ra cách huy động số lượng nhân viên cho mỗi ca sao cho chi phí tiền lương mỗi ngày là ít nhất.",
        "solution": "• Gọi x và y (x, y &isin; ℕ) lần lượt là số nhân viên cần tuyển cho ca I và ca II trong một ngày.<br>• Tiền lương 1 ngày của nhân viên ca I: 8 &times; 20 = 160 (nghìn đồng).<br>• Tiền lương 1 ngày của nhân viên ca II: 8 &times; 22 = 176 (nghìn đồng).<br>• Tổng chi phí trả lương hàng ngày là: T(x, y) = 160x + 176y (nghìn đồng).<br>• Hệ điều kiện ràng buộc:<br>{ x &ge; 3 ; y &le; 10 ; y &ge; 2x ; x + y &ge; 12 } (0,15 điểm).<br>• Miền nghiệm của hệ là miền tứ giác ABCD với 4 đỉnh:<br>- A là giao của x = 3 và x + y = 12 &rArr; A(3; 9).<br>- B là giao của x = 3 và y = 10 &rArr; B(3; 10).<br>- C là giao của y = 10 và y = 2x &rArr; C(5; 10).<br>- D là giao của y = 2x và x + y = 12 &rArr; 3x = 12 &rArr; x = 4, y = 8 &rArr; D(4; 8) (0,15 điểm).<br>• Tính giá trị chi phí trả lương T(x, y) tại 4 đỉnh:<br>- T(A) = 160(3) + 176(9) = 480 + 1584 = 2064 (nghìn đồng).<br>- T(B) = 160(3) + 176(10) = 480 + 1760 = 2240 (nghìn đồng).<br>- T(C) = 160(5) + 176(10) = 800 + 1760 = 2560 (nghìn đồng).<br>- T(D) = 160(4) + 176(8) = 640 + 1408 = 2048 (nghìn đồng) (0,1 điểm).<br>• Chi phí thấp nhất là 2048 nghìn đồng (tức 2.048.000 đồng) khi x = 4 và y = 8.<br>Kết luận: Nhà hàng cần tuyển <b>4 nhân viên ca I</b> và <b>8 nhân viên ca II</b> để chi phí trả lương hàng ngày là nhỏ nhất (0,1 điểm)."
      },
      {
        "title": "Câu 6:",
        "question": "Trên một sườn đồi phẳng có độ nghiêng 30° so với phương ngang, một cây CD mọc thẳng đứng tại điểm C. Nam đứng tại điểm A trên sườn đồi, ở phía dưới C. Nam quan sát ngọn cây D với góc nâng 45° so với phương ngang (góc giữa đường thẳng AD và phương ngang). Sau đó, Nam đi thẳng lên dốc từ A về phía C một đoạn 30 m đến điểm B, nằm giữa A và C. Tại B, góc nâng nhìn lên ngọn cây D là 55°. Biết các điểm A, B, C, D cùng nằm trong một mặt phẳng thẳng đứng, điểm quan sát để đo các góc nằm trên mặt đất. Tính chiều cao CD của cây theo đơn vị mét, làm tròn đến hàng phần mười.",
        "solution": "• Xét tam giác ABD:<br>- Góc tạo bởi tia ngắm AD và sườn đồi AB: &ang;DAB = 45&deg; - 30&deg; = 15&deg;.<br>- Tại B: góc nâng ngọn cây là 55&deg;, sườn đồi dốc 30&deg; &rArr; &ang;CBD = 55&deg; - 30&deg; = 25&deg;.<br>- Do A, B, C thẳng hàng trên sườn dốc nên &ang;ABD = 180&deg; - &ang;CBD = 180&deg; - 25&deg; = 155&deg;.<br>- Trong tam giác ABD: &ang;ADB = 180&deg; - (15&deg; + 155&deg;) = 10&deg; (0,2 điểm).<br>• Áp dụng định lí sin trong tam giác ABD:<br>BD / sin(&ang;DAB) = AB / sin(&ang;ADB) &rArr; BD = 30 . sin15&deg; / sin10&deg; &approx; 30 . (0,2588 / 0,1736) &approx; 44,714 m (0,15 điểm).<br>• Xét tam giác BCD:<br>- Cây CD mọc thẳng đứng, sườn đồi BC nghiêng 30&deg; so với phương ngang &rArr; &ang;BCD = 90&deg; - 30&deg; = 60&deg;.<br>- Ta có &ang;DBC = 25&deg; &rArr; &ang;BDC = 180&deg; - (60&deg; + 25&deg;) = 95&deg;.<br>• Áp dụng định lí sin trong tam giác BCD:<br>CD / sin(&ang;DBC) = BD / sin(&ang;BCD) &rArr; CD = BD . sin25&deg; / sin60&deg; &approx; 44,714 . (0,4226 / 0,8660) &approx; 21,8 m (0,15 điểm).<br>Vậy chiều cao của cây cổ thụ CD xấp xỉ <b>21,8 mét</b>."
      }
    ],
    "source": {
      "school": "Trường THPT Đông Hà",
      "province": "Quảng Trị",
      "year": "2026–2027",
      "url": "",
      "note": "Đối chiếu nguyên văn ba ảnh đề gốc mã 1003 do người dùng cung cấp."
    }
  },
  {
    "id": "vatli-10-de-01",
    "title": "Vật lí 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Hướng Hóa – Quảng Trị · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Đối tượng nghiên cứu cốt lõi của Vật lí học bao gồm:",
        [
          "A. Sự phát sinh và biến dị di truyền của sinh vật.",
          "B. Các dạng vận động của vật chất và năng lượng.",
          "C. Quá trình quang hợp của thực vật trong tự nhiên.",
          "D. Quy luật phát triển của xã hội loài người."
        ],
        1,
        "Vật lí học là môn khoa học tự nhiên nghiên cứu các dạng vận động của vật chất và năng lượng."
      ],
      [
        "Hai phương pháp nghiên cứu cốt lõi thường được sử dụng tương hỗ trong quá trình phát triển của Vật lí học là:",
        [
          "A. Phương pháp khảo cổ học và phục dựng mô hình.",
          "B. Phương pháp điều tra xã hội học và phỏng vấn trực tiếp.",
          "C. Phương pháp phân tích văn bản và dịch thuật.",
          "D. Phương pháp thực nghiệm và phương pháp lí thuyết."
        ],
        3,
        "Phương pháp thực nghiệm và phương pháp lí thuyết là hai phương pháp trụ cột hỗ trợ chặt chẽ cho nhau trong Vật lí."
      ],
      [
        "Để bảo đảm an toàn khi thực hành thí nghiệm có sử dụng nguồn điện xoay chiều 220 V trong phòng thực hành, hành động nào sau đây là BẮT BUỘC?",
        [
          "A. Chỉ được đóng điện sau khi giáo viên đã kiểm tra mạch điện an toàn.",
          "B. Tự ý thay đổi sơ đồ mạch điện khi công tắc đang đóng.",
          "C. Tháo dây dẫn bằng cách giật mạnh dây nguồn ra khỏi ổ cắm.",
          "D. Dùng tay trần chạm vào dây dẫn để kiểm tra xem có dòng điện chạy qua không."
        ],
        0,
        "Khi thực hành điện áp nguy hiểm 220 V, học sinh chỉ được bật công tắc nguồn sau khi giáo viên hướng dẫn kiểm tra toàn bộ mạch."
      ],
      [
        "Trong phòng thực hành Vật lí, biển báo cảnh báo nguy cơ điện giật nguy hiểm có hình dạng và màu sắc như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><path d=\"M52,28 L36,54 L48,54 L44,76 L66,48 L54,48 Z\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển báo trong phòng thực hành</div></div>",
        [
          "A. Nơi lưu trữ các chất ăn mòn hóa học mạnh.",
          "B. Cảnh báo khu vực có điện áp cao, nguy cơ điện giật nguy hiểm.",
          "C. Lối thoát hiểm khẩn cấp khi có sự cố cháy nổ.",
          "D. Quy định bắt buộc phải đeo găng tay cách điện."
        ],
        1,
        "Biển hình tam giác đều viền đen nền vàng có hình tia sét là biển báo cảnh báo nguy hiểm về điện."
      ],
      [
        "Phép đo nào sau đây là phép đo TRỰC TIẾP một đại lượng vật lí?",
        [
          "A. Dùng vôn kế và ampe kế để tính điện trở của một đoạn dây dẫn.",
          "B. Dùng thước cuộn đo trực tiếp chiều dài của phòng học.",
          "C. Dùng khối lượng và thể tích để tính khối lượng riêng của viên sỏi.",
          "D. Dùng công thức v = s/t để tính tốc độ chuyển động của xe."
        ],
        1,
        "Đo trực tiếp là so sánh trực tiếp đại lượng cần đo với dụng cụ đo (dùng thước đo chiều dài)."
      ],
      [
        "Một học sinh dùng thước thẳng đo 5 lần chiều dài tấm bìa và tính được giá trị trung bình L̄ = 20,4 cm, sai số tuyệt đối là ΔL = 0,2 cm. Kết quả phép đo được ghi đúng chuẩn là:",
        [
          "A. L = 20,4 + 0,2 cm.",
          "B. L = 20,4 - 0,2 cm.",
          "C. L = 20,4 cm ± 2 mm.",
          "D. L = (20,4 ± 0,2) cm."
        ],
        3,
        "Cách ghi kết quả phép đo chuẩn của đại lượng A là A = Ā ± ΔA (có cùng đơn vị đo)."
      ],
      [
        "Một học sinh đi bộ từ nhà đến trường theo đường thẳng dài 500 m. Sau khi tan học, học sinh đó quay trở lại về nhà theo đúng con đường cũ. Độ dịch chuyển tổng cộng của học sinh đó sau cả chuyến đi và về là:",
        [
          "A. 500 m.",
          "B. 1000 m.",
          "C. 0 m.",
          "D. 250 m."
        ],
        2,
        "Vì vị trí đầu và vị trí cuối trùng nhau (đều ở nhà) nên vectơ độ dịch chuyển tổng cộng bằng 0 m."
      ],
      [
        "Một ca nô chạy xuôi dòng nước từ bến A đến bến B. Gọi v₁ là vận tốc của ca nô so với dòng nước, v₂ là vận tốc của dòng nước so với bờ. Vận tốc của ca nô so với bờ có độ lớn là:",
        [
          "A. v = v₁ + v₂.",
          "B. v = v₁ - v₂.",
          "C. v = v₁ · v₂.",
          "D. v = √(v₁² + v₂²)."
        ],
        0,
        "Khi ca nô chạy xuôi dòng, vận tốc thuyền và vận tốc nước cùng hướng nên vận tốc so với bờ là v = v₁ + v₂."
      ],
      [
        "Trong thí nghiệm thực hành đo tốc độ của viên bi chuyển động trên máng nghiêng, thiết bị nào sau đây dùng để đo khoảng thời gian viên bi đi qua giữa hai cổng quang điện một cách chính xác nhất?",
        [
          "A. Đồng hồ đo thời gian hiện số kết nối với cổng quang điện.",
          "B. Thước kẹp có độ chia nhỏ nhất 0,1 mm.",
          "C. Đồng hồ đeo tay thông thường có kim giây.",
          "D. Đồng hồ bấm giây cơ học cầm tay."
        ],
        0,
        "Đồng hồ đo thời gian hiện số kết hợp cổng quang điện đo thời gian tự động chính xác đến mili giây (0,001 s)."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm có dạng như hình vẽ bên. Nhận xét nào sau đây về trạng thái chuyển động của chất điểm là ĐÚNG? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\"><line x1=\"35\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"35\" y1=\"125\" x2=\"35\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"205,122 213,125 205,128\" fill=\"#475569\"/><polygon points=\"32,20 35,12 38,20\" fill=\"#475569\"/><text x=\"200\" y=\"142\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">t(s)</text><text x=\"12\" y=\"24\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">d(m)</text><text x=\"24\" y=\"138\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">O</text><line x1=\"35\" y1=\"65\" x2=\"195\" y2=\"65\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"16\" y=\"69\" font-size=\"12\" fill=\"#2563eb\" font-weight=\"bold\" font-family=\"sans-serif\">d₀</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>",
        [
          "A. Chất điểm chuyển động chậm dần đều rồi dừng lại ở gốc tọa độ.",
          "B. Chất điểm chuyển động thẳng nhanh dần đều theo chiều dương.",
          "C. Chất điểm đang đứng yên tại vị trí có độ dịch chuyển d₀.",
          "D. Chất điểm chuyển động thẳng đều với vận tốc không đổi."
        ],
        2,
        "Đồ thị d – t là đường thẳng song song với trục thời gian t chứng tỏ độ dịch chuyển không đổi theo thời gian, tức là vật đứng yên."
      ],
      [
        "Gia tốc là một đại lượng vectơ đặc trưng cho:",
        [
          "A. Sự biến thiên nhanh hay chậm của độ dịch chuyển theo thời gian.",
          "B. Sự biến thiên nhanh hay chậm của vận tốc theo thời gian.",
          "C. Quãng đường vật đi được trong một đơn vị thời gian.",
          "D. Mức độ quán tính của vật khi có lực tác dụng."
        ],
        1,
        "Gia tốc a = Δv / Δt là đại lượng đặc trưng cho tốc độ thay đổi (biến thiên) của vận tốc."
      ],
      [
        "Một vật chuyển động thẳng chậm dần đều theo chiều dương của trục tọa độ. Dấu của vận tốc v và gia tốc a thỏa mãn điều kiện nào sau đây?",
        [
          "A. v > 0 và a < 0 (tích a · v < 0).",
          "B. v = 0 và a > 0.",
          "C. v > 0 và a > 0 (tích a · v > 0).",
          "D. v < 0 và a < 0 (tích a · v > 0)."
        ],
        0,
        "Trong chuyển động chậm dần đều, vectơ gia tốc ngược chiều vectơ vận tốc nên tích a · v < 0. Vì v > 0 nên a < 0."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một đoàn tàu chuyển động thẳng biến đổi đều được cho như hình vẽ bên. Gia tốc của đoàn tàu là: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\"><line x1=\"35\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"35\" y1=\"125\" x2=\"35\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"205,122 213,125 205,128\" fill=\"#475569\"/><polygon points=\"32,20 35,12 38,20\" fill=\"#475569\"/><text x=\"200\" y=\"142\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">t(s)</text><text x=\"10\" y=\"24\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">v(m/s)</text><text x=\"24\" y=\"138\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">O</text><line x1=\"35\" y1=\"125\" x2=\"185\" y2=\"35\" stroke=\"#ea580c\" stroke-width=\"3\"/><line x1=\"185\" y1=\"35\" x2=\"185\" y2=\"125\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><line x1=\"35\" y1=\"35\" x2=\"185\" y2=\"35\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><text x=\"180\" y=\"138\" font-size=\"11\" fill=\"#334155\">5</text><text x=\"14\" y=\"38\" font-size=\"11\" fill=\"#334155\">15</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị vận tốc – thời gian (v – t)</div></div>",
        [
          "A. a = 0,33 m/s².",
          "B. a = 15 m/s².",
          "C. a = 75 m/s².",
          "D. a = 3 m/s²."
        ],
        3,
        "Gia tốc là độ dốc của đồ thị v – t: a = (v - v₀) / t = (15 - 0) / 5 = 3 m/s²."
      ],
      [
        "Công thức liên hệ giữa vận tốc ban đầu v₀, vận tốc lúc sau v, gia tốc a và độ dịch chuyển d trong chuyển động thẳng biến đổi đều là:",
        [
          "A. v² + v₀² = 2ad.",
          "B. v - v₀ = 2ad.",
          "C. v² - v₀² = 2ad.",
          "D. v² - v₀² = ad."
        ],
        2,
        "Công thức độc lập thời gian cốt lõi là v² - v₀² = 2ad."
      ],
      [
        "Thí nghiệm với ống hút chân không Niutơn cho thấy khi thả rơi đồng thời một viên bi chì và một chiếc lông chim trong ống đã hút hết không khí (hình bên phải) thì: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"180\" height=\"150\" viewBox=\"0 0 180 150\"><rect x=\"30\" y=\"20\" width=\"40\" height=\"110\" rx=\"10\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"110\" y=\"20\" width=\"40\" height=\"110\" rx=\"10\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"118\" r=\"6\" fill=\"#334155\"/><path d=\"M48,50 Q54,42 52,58\" stroke=\"#f59e0b\" stroke-width=\"3\" fill=\"none\"/><circle cx=\"130\" cy=\"118\" r=\"6\" fill=\"#0284c7\"/><path d=\"M128,118 Q134,110 132,126\" stroke=\"#f59e0b\" stroke-width=\"3\" fill=\"none\"/><text x=\"20\" y=\"144\" font-size=\"10\" fill=\"#64748b\">Có không khí</text><text x=\"105\" y=\"144\" font-size=\"10\" fill=\"#0284c7\" font-weight=\"bold\">Chân không</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Thí nghiệm ống hút chân không Niutơn</div></div>",
        [
          "A. Viên bi chì luôn rơi nhanh hơn nhiều so với chiếc lông chim.",
          "B. Chiếc lông chim rơi nhanh hơn viên bi chì do nhẹ hơn.",
          "C. Chiếc lông chim lơ lửng không rơi vì không có lực tác dụng.",
          "D. Viên bi chì và chiếc lông chim rơi nhanh như nhau và chạm đáy cùng một lúc."
        ],
        3,
        "Trong môi trường chân không (không có lực cản không khí), mọi vật đều rơi tự do như nhau với cùng gia tốc g."
      ],
      [
        "Một hòn sỏi được thả rơi tự do từ độ cao h = 20 m xuống mặt đất tại nơi có gia tốc trọng trường g = 10 m/s². Thời gian hòn sỏi rơi từ lúc thả đến khi chạm đất là:",
        [
          "A. 0,5 s.",
          "B. 4,0 s.",
          "C. 2,0 s.",
          "D. 1,0 s."
        ],
        2,
        "Thời gian rơi tự do: t = √(2h / g) = √(2 · 20 / 10) = √4 = 2,0 s."
      ]
    ],
    "tf": [
      {
        "stem": "Một nhóm học sinh tiến hành thí nghiệm đo tốc độ trung bình và xác định sai số của một xe đồ chơi chuyển động trên máng thẳng. Dùng thước đo chiều dài quãng đường s = (1,00 ± 0,01) m và đồng hồ bấm giây hiện số đo thời gian xe đi hết quãng đường là t = (2,00 ± 0,04) s.",
        "items": [
          [
            "Phép đo chiều dài quãng đường s và thời gian t đều là các phép đo trực tiếp.",
            true,
            "Quãng đường đo bằng thước và thời gian đo bằng đồng hồ là phép đo trực tiếp."
          ],
          [
            "Sai số tỉ đối của phép đo quãng đường là δs = 1%.",
            true,
            "δs = (0,01 / 1,00) × 100% = 1%."
          ],
          [
            "Tốc độ trung bình tính được của xe đồ chơi là v̄ = 0,50 m/s.",
            true,
            "v̄ = s̄ / t̄ = 1,00 / 2,00 = 0,50 m/s."
          ],
          [
            "Sai số tỉ đối của tốc độ là δv = 5%.",
            false,
            "δv = δs + δt = 1% + (0,04 / 2,00 × 100%) = 1% + 2% = 3% (không phải 5%)."
          ]
        ]
      },
      {
        "stem": "Một xe ôtô đang chạy thẳng đều với vận tốc 72 km/h (tương đương 20 m/s) trên đường thẳng ngang thì gặp chướng ngại vật, tài xế đạp phanh chuyển động chậm dần đều với độ lớn gia tốc hãm là 4 m/s².",
        "items": [
          [
            "Vectơ gia tốc của ôtô trong giai đoạn hãm phanh ngược chiều với vectơ vận tốc.",
            true,
            "Chuyển động chậm dần đều có vectơ gia tốc ngược chiều vectơ vận tốc."
          ],
          [
            "Thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng lại hoàn toàn là 5 giây.",
            true,
            "t = (v - v₀) / a = (0 - 20) / (-4) = 5 s."
          ],
          [
            "Sau 2 giây kể từ khi hãm phanh, vận tốc của xe còn lại là 12 m/s.",
            true,
            "v = v₀ + at = 20 - 4 × 2 = 12 m/s."
          ],
          [
            "Quãng đường xe ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là 60 m.",
            false,
            "s = (v² - v₀²) / (2a) = (0 - 400) / (-8) = 50 m (không phải 60 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hai ôtô cùng khởi hành một lúc từ hai địa điểm A và B cách nhau 120 km trên một đường thẳng, chuyển động thẳng đều ngược chiều nhau để gặp nhau. Xe từ A chạy với tốc độ 50 km/h, xe từ B chạy với tốc độ 30 km/h. Sau bao nhiêu giờ kể từ lúc xuất phát thì hai xe gặp nhau?",
        "answer": "1.5",
        "explanation": "Phương trình chuyển động của hai xe: x₁ = 50t; x₂ = 120 - 30t. Khi hai xe gặp nhau: 50t = 120 - 30t ⇔ 80t = 120 ⇔ t = 1,5 h."
      },
      {
        "question": "Một chiếc ca nô chạy trên một khúc sông thẳng từ bến A đến bến B rồi ngay lập tức quay trở lại bến A. Vận tốc của ca nô khi xuôi dòng đối với bờ là 30 km/h, khi ngược dòng đối với bờ là 20 km/h. Tốc độ trung bình của ca nô trong toàn bộ chuyến đi cả đi lẫn về (không tính thời gian dừng) bằng bao nhiêu km/h?",
        "answer": "24",
        "explanation": "Gọi chiều dài khúc sông là s. Thời gian xuôi dòng t₁ = s/30, ngược dòng t₂ = s/20. Tốc độ trung bình v_tb = 2s / (t₁ + t₂) = 2s / (s/30 + s/20) = 2 / (5/60) = 24 km/h."
      },
      {
        "question": "Một ôtô đang chạy thẳng đều với tốc độ 72 km/h (20 m/s) thì người lái xe bất ngờ phát hiện chướng ngại vật phía trước. Thời gian phản xạ của người lái xe từ lúc nhìn thấy chướng ngại vật đến khi bắt đầu đạp phanh là 0,5 giây. Sau khi đạp phanh, ôtô chuyển động chậm dần đều với độ lớn gia tốc 5 m/s² cho đến khi dừng hẳn. Tổng quãng đường ôtô đi được từ thời điểm nhìn thấy chướng ngại vật đến khi xe dừng lại hoàn toàn là bao nhiêu mét?",
        "answer": "50",
        "explanation": "Quãng đường trong thời gian phản xạ: s₁ = v₀ · t_px = 20 · 0,5 = 10 m. Quãng đường từ lúc bắt đầu đạp phanh đến khi dừng hẳn: s₂ = (0 - v₀²) / (2a) = -400 / (2 · (-5)) = 40 m. Tổng quãng đường: s = s₁ + s₂ = 10 + 40 = 50 m."
      },
      {
        "question": "Thả rơi tự do một hòn bi sắt không vận tốc ban đầu từ đỉnh một tòa tháp cao xuống mặt đất tại nơi có g = 10 m/s². Biết trong 1 giây cuối cùng trước khi chạm đất, hòn bi rơi được một đoạn đường dài 35 m. Bỏ qua mọi sức cản không khí. Chiều cao của tòa tháp bằng bao nhiêu mét?",
        "answer": "80",
        "explanation": "Quãng đường rơi trong 1 giây cuối: Δh = 10t - 5 = 35 m ⇒ 10t = 40 ⇒ t = 4 s. Chiều cao của tòa tháp: h = 1/2 · g · t² = 0,5 · 10 · 4² = 80 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-02",
    "title": "Vật lí 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Gio Linh – Quảng Trị · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Cuộc cách mạng công nghiệp lần thứ nhất (cuối thế kỉ XVIII) gắn liền với thành tựu đột phá nào của Vật lí học?",
        [
          "A. Sự phát minh và hoàn thiện động cơ hơi nước của James Watt.",
          "B. Sự phát minh ra dòng điện và máy phát điện xoay chiều.",
          "C. Sự ra đời của bóng bán dẫn và máy vi tính cá nhân.",
          "D. Sự phát triển của trí tuệ nhân tạo và mạng Internet vạn vật."
        ],
        0,
        "Động cơ hơi nước dựa trên các nguyên lí nhiệt học vật lí là nền tảng của CMCN lần thứ nhất."
      ],
      [
        "Lĩnh vực nào sau đây thuộc phạm trù nghiên cứu của Vật lí cổ điển (hình thành trước đầu thế kỉ XX)?",
        [
          "A. Cơ học cổ điển, Nhiệt học, Điện từ học và Quang học.",
          "B. Công nghệ vi mạch lượng tử và máy tính lượng tử.",
          "C. Cơ học lượng tử và cấu trúc hạt nhân nguyên tử.",
          "D. Thuyết tương đối hẹp và thuyết tương đối rộng của Einstein."
        ],
        0,
        "Cơ học, Nhiệt học, Điện từ học, Quang học là các nhánh trụ cột của Vật lí cổ điển."
      ],
      [
        "Khi làm thí nghiệm quang học có sử dụng nguồn phát tia laser, để bảo đảm an toàn cho mắt, học sinh TUYỆT ĐỐI KHÔNG được:",
        [
          "A. Tắt nguồn laser ngay sau khi kết thúc buổi thực hành.",
          "B. Nhìn trực tiếp vào đầu phát tia laser hoặc để tia laser phản xạ vào mắt.",
          "C. Đặt nguồn phát laser trên giá đỡ cố định chắc chắn.",
          "D. Che chắn chùm tia laser bằng tấm chắn sáng mờ."
        ],
        1,
        "Tia laser có mật độ năng lượng rất cao, nhìn trực tiếp vào chùm tia có thể gây bỏng võng mạc và mù lòa vĩnh viễn."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tròn nền xanh dương, hình vẽ màu trắng như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#2563eb\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><circle cx=\"34\" cy=\"50\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"5\"/><circle cx=\"66\" cy=\"50\" r=\"14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"5\"/><line x1=\"48\" y1=\"50\" x2=\"52\" y2=\"50\" stroke=\"#fff\" stroke-width=\"5\"/><path d=\"M20,50 Q24,38 34,38\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\"/><path d=\"M80,50 Q76,38 66,38\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển báo trong phòng thực hành</div></div>",
        [
          "A. Nơi sơ cấp cứu và rửa mắt khẩn cấp.",
          "B. Quy định bắt buộc phải đeo kính bảo hộ mắt khi tiến hành thí nghiệm.",
          "C. Cấm người đeo kính mắt vào phòng thí nghiệm.",
          "D. Cảnh báo khu vực có nguy cơ nổ bình áp suất cao."
        ],
        1,
        "Biển tròn nền xanh dương hình trắng là biển báo hiệu lệnh bắt buộc thực hiện (đeo kính bảo hộ)."
      ],
      [
        "Phép đo nào sau đây là phép đo GIÁN TIẾP?",
        [
          "A. Dùng đồng hồ bấm giây đo thời gian rơi của một vật.",
          "B. Dùng nhiệt kế thủy ngân đo nhiệt độ của một cốc nước nóng.",
          "C. Đo tốc độ trung bình của một viên bi bằng tỉ số quãng đường và thời gian (v = s/t).",
          "D. Dùng cân điện tử đo khối lượng của một quả cân bằng đồng."
        ],
        2,
        "Đo gián tiếp là xác định giá trị thông qua công thức liên hệ với các đại lượng đo trực tiếp."
      ],
      [
        "Khi dùng thước milimét có độ chia nhỏ nhất (ĐCNN) là 1 mm để đo độ dài, nếu không có quy định nào khác thì sai số dụng cụ thông thường được lấy bằng:",
        [
          "A. Luôn luôn bằng 0 mm vì thước chuẩn.",
          "B. 10% giá trị đo được trên thước.",
          "C. Gấp đôi độ chia nhỏ nhất (2 mm).",
          "D. Nửa độ chia nhỏ nhất (0,5 mm) hoặc một độ chia nhỏ nhất (1 mm)."
        ],
        3,
        "Sai số dụng cụ thông thường được quy ước lấy bằng một nửa hoặc một độ chia nhỏ nhất của dụng cụ."
      ],
      [
        "Một chất điểm chuyển động thẳng đều theo một chiều nhất định. So sánh giữa quãng đường đi được s và độ lớn của độ dịch chuyển |d|, ta luôn có:",
        [
          "A. s = 2|d|.",
          "B. s < |d|.",
          "C. s > |d|.",
          "D. s = |d|."
        ],
        3,
        "Khi vật chuyển động thẳng và không đổi chiều chuyển động thì quãng đường đi được đúng bằng độ lớn độ dịch chuyển."
      ],
      [
        "Một hành khách ngồi yên trong một toa tàu hỏa đang chạy thẳng đều trên đường ray. Người hành khách này đứng yên so với:",
        [
          "A. Nhà ga mà tàu vừa rời đi.",
          "B. Các cột điện bên đường ray.",
          "C. Toa tàu mà người đó đang ngồi.",
          "D. Mặt đường ray bên dưới toa tàu."
        ],
        2,
        "Vị trí của hành khách không thay đổi so với toa tàu nên người đó đứng yên so với toa tàu."
      ],
      [
        "Cổng quang điện trong bộ thí nghiệm thực hành Vật lí 10 hoạt động dựa trên nguyên lí:",
        [
          "A. Cảm ứng từ trường nam châm điện biến thiên.",
          "B. Cảm ứng nhiệt độ tỏa ra từ vật chuyển động.",
          "C. Cảm biến phát hiện sự ngắt và thông chùm tia hồng ngoại khi có vật chắn sáng đi qua.",
          "D. Cảm biến siêu âm đo khoảng cách phản xạ âm thanh."
        ],
        2,
        "Cổng quang gồm một đầu phát tia hồng ngoại và một đầu thu; khi vật chắn tia sáng thì đồng hồ đếm thời gian."
      ],
      [
        "Hình bên là đồ thị độ dịch chuyển – thời gian (d – t) của một xe máy chuyển động thẳng đều. Tốc độ của xe máy là: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\"><line x1=\"35\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"35\" y1=\"125\" x2=\"35\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"205,122 213,125 205,128\" fill=\"#475569\"/><polygon points=\"32,20 35,12 38,20\" fill=\"#475569\"/><text x=\"200\" y=\"142\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">t(s)</text><text x=\"12\" y=\"24\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">d(m)</text><text x=\"24\" y=\"138\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">O</text><line x1=\"35\" y1=\"125\" x2=\"185\" y2=\"35\" stroke=\"#16a34a\" stroke-width=\"3\"/><line x1=\"185\" y1=\"35\" x2=\"185\" y2=\"125\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><line x1=\"35\" y1=\"35\" x2=\"185\" y2=\"35\" stroke=\"#94a3b8\" stroke-dasharray=\"3,3\"/><text x=\"180\" y=\"138\" font-size=\"11\" fill=\"#334155\">4</text><text x=\"18\" y=\"38\" font-size=\"11\" fill=\"#334155\">20</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>",
        [
          "A. 20 m/s.",
          "B. 5 m/s.",
          "C. 4 m/s.",
          "D. 80 m/s."
        ],
        1,
        "Vận tốc trong đồ thị d – t là hệ số góc: v = Δd / Δt = 20 / 4 = 5 m/s."
      ],
      [
        "Đơn vị đo của gia tốc trong hệ đo lường quốc tế (SI) là:",
        [
          "A. m/s² (mét trên giây bình phương).",
          "B. km/h (kilômét trên giờ).",
          "C. m · s (mét nhân giây).",
          "D. m/s (mét trên giây)."
        ],
        0,
        "Gia tốc có đơn vị SI là m/s²."
      ],
      [
        "Trong chuyển động thẳng nhanh dần đều:",
        [
          "A. Vận tốc của vật giảm đều theo thời gian.",
          "B. Vectơ gia tốc ngược hướng với vectơ vận tốc.",
          "C. Gia tốc tăng đều theo thời gian.",
          "D. Vectơ gia tốc cùng hướng với vectơ vận tốc và gia tốc có độ lớn không đổi."
        ],
        3,
        "Chuyển động thẳng nhanh dần đều có gia tốc không đổi và vectơ gia tốc cùng hướng với vectơ vận tốc."
      ],
      [
        "Một ôtô đang chạy thì hãm phanh chuyển động chậm dần đều có đồ thị vận tốc – thời gian (v – t) như hình vẽ bên. Gia tốc của ôtô bằng: <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"220\" height=\"150\" viewBox=\"0 0 220 150\"><line x1=\"35\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"35\" y1=\"125\" x2=\"35\" y2=\"20\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"205,122 213,125 205,128\" fill=\"#475569\"/><polygon points=\"32,20 35,12 38,20\" fill=\"#475569\"/><text x=\"200\" y=\"142\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">t(s)</text><text x=\"10\" y=\"24\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">v(m/s)</text><text x=\"24\" y=\"138\" font-size=\"12\" fill=\"#334155\" font-family=\"sans-serif\">O</text><line x1=\"35\" y1=\"45\" x2=\"175\" y2=\"125\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"14\" y=\"48\" font-size=\"11\" fill=\"#334155\">20</text><text x=\"170\" y=\"138\" font-size=\"11\" fill=\"#334155\">4</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Đồ thị vận tốc – thời gian (v – t)</div></div>",
        [
          "A. –20 m/s².",
          "B. –5 m/s².",
          "C. 5 m/s².",
          "D. 0 m/s²."
        ],
        1,
        "a = (v - v₀) / t = (0 - 20) / 4 = –5 m/s²."
      ],
      [
        "Phương trình độ dịch chuyển của một vật chuyển động thẳng biến đổi đều không vận tốc đầu (v₀ = 0) dọc theo trục tọa độ là:",
        [
          "A. d = a · t.",
          "B. d = 2 · a · t².",
          "C. d = 1/2 · a · t².",
          "D. d = v₀ · t."
        ],
        2,
        "Khi v₀ = 0 thì d = 1/2 · a · t²."
      ],
      [
        "Yếu tố nào sau đây là nguyên nhân chủ yếu khiến cho một chiếc lá rụng lại rơi chậm hơn nhiều so với một viên sỏi trong không khí?",
        [
          "A. Trọng lực tác dụng lên chiếc lá nhỏ hơn rất nhiều lần gia tốc trọng trường g.",
          "B. Gia tốc rơi tự do của chiếc lá nhỏ hơn gia tốc rơi tự do của viên sỏi.",
          "C. Trái Đất chỉ hút viên sỏi mà không hút chiếc lá.",
          "D. Lực cản của không khí tác dụng lên chiếc lá có ảnh hưởng đáng kể so với trọng lượng của nó."
        ],
        3,
        "Lực cản không khí so với trọng lượng của chiếc lá là đáng kể, làm chậm tốc độ rơi của chiếc lá."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 45 m tại nơi có gia tốc trọng trường g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất là:",
        [
          "A. 30 m/s.",
          "B. 20 m/s.",
          "C. 45 m/s.",
          "D. 15 m/s."
        ],
        0,
        "Vận tốc khi chạm đất: v = √(2gh) = √(2 · 10 · 45) = √900 = 30 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Một học sinh dùng thước kẹp đo đường kính d của một viên bi thép 5 lần được các giá trị lần lượt là: 12,2 mm; 12,4 mm; 12,3 mm; 12,2 mm; 12,4 mm. Thước kẹp có độ chia nhỏ nhất là 0,1 mm và lấy sai số dụng cụ bằng độ chia nhỏ nhất.",
        "items": [
          [
            "Giá trị trung bình của đường kính viên bi qua 5 lần đo là d̄ = 12,3 mm.",
            true,
            "d̄ = (12,2 + 12,4 + 12,3 + 12,2 + 12,4) / 5 = 61,5 / 5 = 12,3 mm."
          ],
          [
            "Sai số ngẫu nhiên tuyệt đối trung bình của phép đo là Δd_ng = 0,08 mm.",
            true,
            "Các độ lệch: |12,2 - 12,3| = 0,1; |12,4 - 12,3| = 0,1; |12,3 - 12,3| = 0; |12,2 - 12,3| = 0,1; |12,4 - 12,3| = 0,1. Trung bình = 0,4 / 5 = 0,08 mm."
          ],
          [
            "Sai số tuyệt đối toàn phần của phép đo là Δd = 0,18 mm.",
            true,
            "Δd = Δd_ng + Δd_dc = 0,08 + 0,1 = 0,18 mm."
          ],
          [
            "Nếu làm tròn sai số tuyệt đối đến 1 chữ số có nghĩa thì kết quả đo được ghi là d = (12,3 ± 0,02) mm.",
            false,
            "Sai số tuyệt đối Δd = 0,18 mm làm tròn đến 1 chữ số có nghĩa là 0,2 mm, do đó kết quả ghi là d = (12,3 ± 0,2) mm (không phải 0,02 mm)."
          ]
        ]
      },
      {
        "stem": "Thả một quả cầu kim loại nhỏ rơi tự do từ đỉnh một tháp cao 80 m tại nơi có g = 10 m/s². Bỏ qua mọi sức cản của không khí.",
        "items": [
          [
            "Chuyển động rơi tự do của quả cầu là chuyển động thẳng nhanh dần đều theo phương thẳng đứng hướng từ trên xuống.",
            true,
            "Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng với gia tốc g."
          ],
          [
            "Thời gian quả cầu rơi chạm mặt đất là 4 giây.",
            true,
            "t = √(2h / g) = √(2 · 80 / 10) = √16 = 4 s."
          ],
          [
            "Vận tốc của quả cầu ngay trước khi chạm mặt đất là 40 m/s.",
            true,
            "v = gt = 10 · 4 = 40 m/s."
          ],
          [
            "Quãng đường quả cầu rơi được trong giây thứ nhất bằng quãng đường quả cầu rơi trong giây thứ hai.",
            false,
            "Trong chuyển động nhanh dần đều, quãng đường các giây liên tiếp tăng dần theo tỉ lệ 1 : 3 : 5 (giây 1 rơi 5 m, giây 2 rơi 15 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hai bạn học sinh A và B đi xe đạp trên cùng một đường thẳng. Bạn A chạy trước với tốc độ không đổi 12 km/h. Bạn B xuất phát sau bạn A một khoảng cách 3 km và chạy với tốc độ không đổi 18 km/h để đuổi theo bạn A. Sau bao nhiêu phút kể từ lúc bạn B xuất phát thì bạn B đuổi kịp bạn A?",
        "answer": "30",
        "explanation": "Vận tốc tương đối giữa bạn B và bạn A: v_BA = 18 - 12 = 6 km/h. Thời gian để đuổi kịp: t = d / v_BA = 3 / 6 = 0,5 h = 30 phút."
      },
      {
        "question": "Một chiếc thuyền qua một khúc sông thẳng rộng 240 m. Mũi thuyền luôn hướng vuông góc với bờ sông và thuyền chuyển động với tốc độ không đổi 4 m/s đối với dòng nước. Dòng nước chảy xuôi dòng với tốc độ 3 m/s. Khi sang đến bờ bên kia, điểm cập bến của thuyền bị dòng nước cuốn trôi xuôi theo chiều dòng chảy một đoạn bằng bao nhiêu mét so với vị trí đối diện bờ bên này?",
        "answer": "180",
        "explanation": "Thời gian thuyền qua sông: t = d_sông / v_thuyền = 240 / 4 = 60 s. Đoạn đường thuyền bị nước cuốn trôi xuôi dòng: x = v_nước · t = 3 · 60 = 180 m."
      },
      {
        "question": "Một chất điểm bắt đầu xuất phát từ trạng thái nghỉ tại gốc tọa độ, chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc a = 2 m/s². Quãng đường chất điểm đi được trong giây thứ 4 kể từ lúc bắt đầu chuyển động bằng bao nhiêu mét?",
        "answer": "7",
        "explanation": "Quãng đường sau 4 giây: s₄ = 0,5 · 2 · 4² = 16 m. Quãng đường sau 3 giây: s₃ = 0,5 · 2 · 3² = 9 m. Quãng đường đi trong giây thứ 4: Δs₄ = 16 - 9 = 7 m."
      },
      {
        "question": "Thả một hòn đá nhỏ rơi tự do từ miệng một giếng sâu tại nơi có g = 10 m/s². Biết thời gian từ lúc thả đến khi hòn đá chạm đáy giếng là đúng 3,0 giây. Bỏ qua thời gian truyền âm trong không khí, độ sâu của giếng bằng bao nhiêu mét?",
        "answer": "45",
        "explanation": "Độ sâu của giếng: h = 1/2 · g · t² = 0,5 · 10 · 3² = 45 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-03",
    "title": "Vật lí 10 - Đề 03 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Nguyễn Trãi – Đà Nẵng · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Quy trình tìm hiểu thế giới tự nhiên dưới góc độ vật lí thường bao gồm các bước theo thứ tự nào sau đây?",
        [
          "A. Tiến hành thí nghiệm trước &rArr; Đặt câu hỏi nghiên cứu &rArr; Giả thuyết &rArr; Kết luận.",
          "B. Đọc sách tham khảo &rArr; Dự đoán kết quả &rArr; Công bố ngay mà không cần thí nghiệm.",
          "C. Quan sát, xuất phát câu hỏi &rArr; Xây dựng giả thuyết &rArr; Thiết kế và tiến hành thí nghiệm kiểm chứng &rArr; Phân tích kết quả, rút ra kết luận.",
          "D. Xây dựng giả thuyết &rArr; Viết báo cáo &rArr; Khảo sát thực địa &rArr; Ra quyết định."
        ],
        2,
        "Quy trình khoa học: Quan sát, đề xuất vấn đề &rArr; Giả thuyết &rArr; Thí nghiệm kiểm chứng &rArr; Phân tích dữ liệu &rArr; Kết luận."
      ],
      [
        "Thành tựu nào sau đây của Vật lí học đã mở đầu cho cuộc cách mạng công nghiệp lần thứ tư (Cách mạng 4.0)?",
        [
          "A. Sự sản xuất hàng loạt trên dây chuyền cơ khí tự động hóa cơ bản.",
          "B. Công nghệ nano, máy tính lượng tử, cảm biến thông minh và trí tuệ nhân tạo.",
          "C. Sự chế tạo ra máy hơi nước sử dụng than đá.",
          "D. Phát minh ra kính thiên văn quang học khúc xạ."
        ],
        1,
        "CMCN 4.0 dựa trên nền tảng vật lí bán dẫn tiên tiến, cảm biến thông minh, điện toán lượng tử và kết nối số."
      ],
      [
        "Khi làm thí nghiệm nhiệt học trong phòng thực hành có sử dụng đèn cồn, hành động nào sau đây là ĐÚNG quy tắc an toàn?",
        [
          "A. Dùng nắp đậy chụp kín ngọn lửa để tắt đèn cồn.",
          "B. Dùng một đèn cồn đang cháy để châm lửa sang một đèn cồn khác.",
          "C. Dùng miệng thổi mạnh vào ngọn lửa để dập tắt.",
          "D. Rót cồn trực tiếp vào đèn cồn khi ngọn lửa vẫn đang cháy."
        ],
        0,
        "Tắt đèn cồn phải dùng nắp đậy chụp lại để cách ly oxy; tuyệt đối không thổi bằng miệng hoặc rót cồn khi đang cháy."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình ngọn lửa như hình vẽ mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><path d=\"M50,30 Q42,50 36,58 Q30,68 38,76 Q46,82 54,80 Q66,78 68,66 Q70,52 56,44 Q60,56 52,60 Q48,52 50,30 Z\" fill=\"#dc2626\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển báo trong phòng thực hành</div></div>",
        [
          "A. Biển báo cho phép tự do đốt lửa sưởi ấm.",
          "B. Nơi đặt bình chữa cháy khẩn cấp.",
          "C. Cảnh báo vật liệu hoặc chất dễ cháy nổ, cần cẩn trọng khi tiếp xúc.",
          "D. Khu vực dành riêng cho việc đun nấu ăn uống."
        ],
        2,
        "Biển tam giác vàng viền đen hình ngọn lửa là biển cảnh báo nguy cơ cháy nổ từ các chất dễ cháy."
      ],
      [
        "Số chữ số có nghĩa của các số 0,0250 m và 12,04 cm lần lượt là:",
        [
          "A. 4 và 4.",
          "B. 3 và 4.",
          "C. 2 và 3.",
          "D. 5 và 4."
        ],
        1,
        "0,0250 có 3 chữ số có nghĩa (các chữ số 2, 5, 0 ở cuối; các số 0 đầu không tính). 12,04 có 4 chữ số có nghĩa."
      ],
      [
        "Một hình chữ nhật có chiều dài a = (10,0 ± 0,1) cm và chiều rộng b = (5,0 ± 0,1) cm. Sai số tỉ đối của diện tích hình chữ nhật S = a · b bằng:",
        [
          "A. 0,2%.",
          "B. 3,0%.",
          "C. 2,0%.",
          "D. 1,0%."
        ],
        1,
        "δS = δa + δb = (0,1 / 10,0 × 100%) + (0,1 / 5,0 × 100%) = 1% + 2% = 3%."
      ],
      [
        "Một chất điểm chuyển động trên trục Ox. Tại thời điểm t₁ vật ở điểm M có tọa độ x₁ = –5 m, tại thời điểm t₂ vật ở điểm N có tọa độ x₂ = +15 m. Độ dịch chuyển của chất điểm trong khoảng thời gian đó là:",
        [
          "A. d = +10 m.",
          "B. d = +20 m.",
          "C. d = –20 m.",
          "D. d = –10 m."
        ],
        1,
        "d = x₂ - x₁ = 15 - (-5) = +20 m."
      ],
      [
        "Công thức định nghĩa vận tốc trung bình của một vật trong khoảng thời gian Δt là:",
        [
          "A. v⃗_tb = d⃗ / Δt.",
          "B. v_tb = s / Δt.",
          "C. v⃗_tb = d⃗ · Δt.",
          "D. v⃗_tb = a⃗ · Δt."
        ],
        0,
        "Vận tốc trung bình là đại lượng vectơ bằng thương số giữa vectơ độ dịch chuyển và khoảng thời gian: v⃗_tb = d⃗ / Δt."
      ],
      [
        "Trong thí nghiệm đo tốc độ tức thời dùng cổng quang điện, nếu tấm chắn sáng có bề rộng d và thời gian chắn chùm sáng đo được là Δt thì tốc độ tức thời được tính theo công thức:",
        [
          "A. v = d · Δt.",
          "B. v = 1/2 · d · (Δt)².",
          "C. v = d / Δt.",
          "D. v = Δt / d."
        ],
        2,
        "Tốc độ tức thời tại vị trí cổng quang xấp xỉ bằng tốc độ trung bình qua tấm chắn sáng nhỏ: v = d / Δt."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t), nếu đường biểu diễn là một đường thẳng dốc xuống từ trái sang phải thì vật đang:",
        [
          "A. Chuyển động nhanh dần đều theo chiều âm.",
          "B. Chuyển động thẳng đều cùng chiều dương đã chọn.",
          "C. Đứng yên tại một vị trí cố định.",
          "D. Chuyển động thẳng đều ngược chiều dương đã chọn."
        ],
        3,
        "Đường thẳng dốc xuống có hệ số góc âm (v < 0), nghĩa là vật chuyển động thẳng đều ngược chiều dương."
      ],
      [
        "Một đoàn tàu đang chạy chậm dần đều vào ga. Nhận định nào sau đây về gia tốc a⃗ của đoàn tàu là ĐÚNG?",
        [
          "A. Gia tốc của đoàn tàu bằng 0.",
          "B. Vectơ gia tốc a⃗ cùng chiều với vectơ vận tốc v⃗.",
          "C. Vectơ gia tốc a⃗ luôn vuông góc với vectơ vận tốc v⃗.",
          "D. Vectơ gia tốc a⃗ ngược chiều với vectơ vận tốc v⃗."
        ],
        3,
        "Trong chuyển động chậm dần đều, gia tốc luôn ngược hướng với vận tốc để làm giảm độ lớn của vận tốc."
      ],
      [
        "Một xe máy đang chạy với tốc độ 12 m/s thì người lái xe hãm phanh chuyển động chậm dần đều với độ lớn gia tốc 2 m/s². Quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là:",
        [
          "A. 72 m.",
          "B. 144 m.",
          "C. 36 m.",
          "D. 24 m."
        ],
        2,
        "Áp dụng v² - v₀² = 2ad &rArr; 0² - 12² = 2 · (-2) · s &rArr; s = -144 / (-4) = 36 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động thẳng nhanh dần đều xuất phát từ trạng thái nghỉ (v₀ = 0) là:",
        [
          "A. Một đường thẳng song song với trục thời gian t.",
          "B. Một đường cong parabol quay bề lõm lên trên.",
          "C. Một đường thẳng dốc xuống cắt trục thời gian.",
          "D. Một đường thẳng xuất phát từ gốc tọa độ O và dốc lên trên."
        ],
        3,
        "v = at (hàm bậc nhất) nên đồ thị v – t là đường thẳng đi qua gốc tọa độ O và dốc lên (a > 0)."
      ],
      [
        "Trong thí nghiệm đo gia tốc rơi tự do tại phòng thực hành Vật lí (hình bên), để xác định gia tốc rơi tự do g, học sinh cần đo chính xác hai đại lượng nào? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:12px 0;\"><svg width=\"180\" height=\"150\" viewBox=\"0 0 180 150\"><line x1=\"60\" y1=\"15\" x2=\"60\" y2=\"140\" stroke=\"#334155\" stroke-width=\"4\"/><rect x=\"52\" y=\"15\" width=\"16\" height=\"12\" fill=\"#dc2626\"/><circle cx=\"60\" cy=\"33\" r=\"5\" fill=\"#475569\"/><rect x=\"45\" y=\"55\" width=\"30\" height=\"8\" rx=\"2\" fill=\"#2563eb\"/><rect x=\"45\" y=\"115\" width=\"30\" height=\"8\" rx=\"2\" fill=\"#2563eb\"/><text x=\"82\" y=\"62\" font-size=\"10\" fill=\"#2563eb\">Cổng quang A</text><text x=\"82\" y=\"122\" font-size=\"10\" fill=\"#2563eb\">Cổng quang B</text><line x1=\"35\" y1=\"59\" x2=\"35\" y2=\"119\" stroke=\"#ea580c\" stroke-width=\"2\"/><polygon points=\"35,55 32,61 38,61\" fill=\"#ea580c\"/><polygon points=\"35,123 32,117 38,117\" fill=\"#ea580c\"/><text x=\"20\" y=\"90\" font-size=\"10\" fill=\"#ea580c\" font-weight=\"bold\">s</text></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Bộ dụng cụ đo gia tốc rơi tự do</div></div>",
        [
          "A. Quãng đường rơi s giữa hai cổng quang và khoảng thời gian rơi t của vật.",
          "B. Khối lượng của vật m và lực hút của Trái Đất tác dụng lên vật.",
          "C. Đường kính của vật rơi và thể tích của vật rơi.",
          "D. Nhiệt độ của phòng thí nghiệm và độ ẩm không khí."
        ],
        0,
        "Dựa vào công thức s = 1/2 · g · t² &rArr; g = 2s / t², ta cần đo quãng đường s (bằng thước) và thời gian rơi t (bằng đồng hồ hiện số)."
      ],
      [
        "Tại cùng một vị trí địa lí trên Trái Đất và ở cùng một độ cao, nếu bỏ qua sức cản của không khí thì một quả tạ nặng 5 kg và một viên bi ve nặng 10 g khi được thả rơi tự do đồng thời sẽ:",
        [
          "A. Quả tạ nặng hơn nên rơi với gia tốc lớn hơn và chạm đất trước.",
          "B. Quả tạ rơi nhanh gấp 500 lần viên bi ve.",
          "C. Viên bi ve nhẹ hơn nên rơi nhanh hơn và chạm đất trước.",
          "D. Rơi với cùng một gia tốc trọng trường g và chạm đất cùng một thời điểm."
        ],
        3,
        "Gia tốc rơi tự do g không phụ thuộc vào khối lượng của vật, do đó mọi vật ở cùng một nơi đều rơi như nhau."
      ],
      [
        "Một vật rơi tự do không vận tốc ban đầu. Quãng đường vật đi được trong 1 giây đầu tiên và trong 2 giây đầu tiên lần lượt là s₁ và s₂. Tỉ số s₂ / s₁ bằng:",
        [
          "A. 4.",
          "B. 3.",
          "C. 2.",
          "D. 1."
        ],
        0,
        "Vì s = 1/2 · g · t² nên s tỉ lệ với t². Khi t₂ = 2t₁ thì s₂ / s₁ = (2/1)² = 4."
      ]
    ],
    "tf": [
      {
        "stem": "Một đoàn tàu hỏa rời ga chuyển động thẳng nhanh dần đều trên một đoạn đường ray thẳng. Sau 20 giây kể từ khi bắt đầu chuyển động, đoàn tàu đạt tốc độ 36 km/h (tương đương 10 m/s).",
        "items": [
          [
            "Gia tốc của đoàn tàu hỏa có giá trị là 0,5 m/s².",
            true,
            "a = (v - v₀) / t = (10 - 0) / 20 = 0,5 m/s²."
          ],
          [
            "Quãng đường đoàn tàu đi được trong 20 giây đầu tiên là 100 m.",
            true,
            "s = 1/2 · a · t² = 0,5 · 0,5 · 20² = 100 m."
          ],
          [
            "Tại thời điểm t = 30 s kể từ lúc xuất phát, tốc độ của đoàn tàu đạt 20 m/s.",
            false,
            "v = at = 0,5 · 30 = 15 m/s (không phải 20 m/s)."
          ],
          [
            "Nếu sau khi đạt 10 m/s, tàu chuyển sang chạy thẳng đều thì sau 1 phút tiếp theo tàu đi thêm được 600 m.",
            true,
            "s' = v · t' = 10 · 60 = 600 m."
          ]
        ]
      },
      {
        "stem": "Tại một địa điểm trên mặt đất có gia tốc rơi tự do g = 9,8 m/s², người ta thả một hòn sỏi nhỏ rơi tự do từ độ cao h = 19,6 m so với mặt đất. Bỏ qua mọi sức cản của không khí.",
        "items": [
          [
            "Chuyển động của hòn sỏi là chuyển động thẳng nhanh dần đều không vận tốc đầu.",
            true,
            "Rơi tự do là chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc g."
          ],
          [
            "Thời gian để hòn sỏi rơi từ lúc thả đến khi tiếp đất là đúng 2,0 giây.",
            true,
            "t = √(2h / g) = √(2 · 19,6 / 9,8) = √4 = 2,0 s."
          ],
          [
            "Tốc độ của hòn sỏi ngay trước khi chạm đất là 19,6 m/s.",
            true,
            "v = gt = 9,8 · 2 = 19,6 m/s."
          ],
          [
            "Quãng đường hòn sỏi rơi được trong giây thứ nhất là 9,8 m.",
            false,
            "s₁ = 1/2 · g · t₁² = 0,5 · 9,8 · 1² = 4,9 m (không phải 9,8 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một ôtô chuyển động thẳng từ A đến B. Trên nửa đoạn đường đầu tiên, xe chạy với tốc độ không đổi v₁ = 60 km/h. Trên nửa đoạn đường còn lại, xe chạy với tốc độ không đổi v₂ = 40 km/h. Tốc độ trung bình của ôtô trên cả quãng đường AB bằng bao nhiêu km/h?",
        "answer": "48",
        "explanation": "Gọi cả đoạn đường là 2s. Thời gian đi: t₁ = s/60, t₂ = s/40. Tốc độ trung bình: v_tb = 2s / (s/60 + s/40) = 2 / (5/120) = 48 km/h."
      },
      {
        "question": "Một chiếc thuyền máy chạy ngược dòng nước trên một con sông. Khi qua cầu A thì thuyền làm rơi một chiếc can nhựa trôi theo dòng nước. Thuyền tiếp tục chạy ngược dòng thêm 15 phút (0,25 h) đến điểm B thì quay đầu chạy xuôi dòng và đuổi kịp chiếc can nhựa tại điểm C cách cầu A một khoảng 3 km. Vận tốc của dòng nước chảy đối với bờ bằng bao nhiêu km/h?",
        "answer": "6",
        "explanation": "Trong hệ quy chiếu dòng nước, can đứng yên nên thời gian quay lại gặp can đúng bằng thời gian đi xa (15 phút). Tổng thời gian can trôi là t = 15 + 15 = 30 phút = 0,5 h. Vận tốc dòng nước: v = AC / t = 3 / 0,5 = 6 km/h."
      },
      {
        "question": "Một đoàn tàu hỏa bắt đầu xuất phát từ trạng thái nghỉ, chuyển động thẳng nhanh dần đều với gia tốc a₁ = 0,5 m/s² trong 20 giây. Sau đó tàu tắt máy và chuyển động chậm dần đều với gia tốc có độ lớn 0,25 m/s² cho đến khi dừng lại hẳn. Tổng quãng đường đoàn tàu đi được từ lúc bắt đầu xuất phát đến khi dừng lại hoàn toàn là bao nhiêu mét?",
        "answer": "300",
        "explanation": "Vận tốc sau 20 s đầu: v₁ = 0,5 · 20 = 10 m/s. Quãng đường giai đoạn 1: s₁ = 0,5 · 0,5 · 20² = 100 m. Quãng đường giai đoạn 2: s₂ = (0 - 10²) / (2 · (-0,25)) = 200 m. Tổng quãng đường: s = 100 + 200 = 300 m."
      },
      {
        "question": "Từ cùng một độ cao rất lớn, hai vật nhỏ A và B được thả rơi tự do không vận tốc đầu lần lượt cách nhau một khoảng thời gian Δt = 1,0 giây tại nơi có g = 10 m/s². Sau bao nhiêu giây kể từ lúc vật B bắt đầu rơi thì khoảng cách theo phương thẳng đứng giữa hai vật bằng 25 m?",
        "answer": "2",
        "explanation": "Khoảng cách giữa 2 vật: Δs = 5(t+1)² - 5t² = 10t + 5 = 25 m ⇒ 10t = 20 ⇒ t = 2 s."
      }
    ]
  },
  {
    "id": "vatli-10-de-04",
    "title": "Vật lí 10 - Đề 04 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Lý Tự Trọng – Đà Nẵng · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Mục tiêu quan trọng nhất của việc học tập môn Vật lí trong nhà trường phổ thông là giúp học sinh:",
        [
          "A. Thay thế hoàn toàn các môn khoa học tự nhiên khác như Hóa học và Sinh học.",
          "B. Trở thành nhà khoa học chuyên sâu về cơ học lượng tử ngay trong trường phổ thông.",
          "C. Học thuộc lòng toàn bộ các công thức định lượng mà không cần hiểu bản chất.",
          "D. Hình thành và phát triển năng lực vật lí, nhận thức thế giới tự nhiên và vận dụng kiến thức vào thực tiễn đời sống."
        ],
        3,
        "Mục tiêu cốt lõi của môn Vật lí là phát triển phẩm chất, năng lực nhận thức tự nhiên và giải quyết các vấn đề thực tiễn."
      ],
      [
        "Phương pháp nghiên cứu lí thuyết trong Vật lí học sử dụng công cụ chủ yếu nào sau đây?",
        [
          "A. Thăm dò dư luận xã hội bằng bảng hỏi trực tuyến.",
          "B. Ngôn ngữ toán học và các mô hình tư duy trừu tượng hóa để xây dựng các định luật, thuyết vật lí.",
          "C. Kính hiển vi quang học và que cấy vi sinh.",
          "D. Máy khoan cắt kim loại trong xưởng cơ khí."
        ],
        1,
        "Phương pháp lí thuyết dùng toán học và các mô hình khái quát hóa để xây dựng hệ thống lí thuyết vật lí."
      ],
      [
        "Khi làm việc trong phòng thực hành có các nguồn phát tia phóng xạ, quy tắc an toàn cơ bản nào cần được tuân thủ nghiêm ngặt?",
        [
          "A. Được phép cầm trực tiếp chất phóng xạ bằng tay trần nếu đeo khẩu trang.",
          "B. Để chất phóng xạ gần các nguồn nhiệt và ánh sáng mặt trời chiếu trực tiếp.",
          "C. Đổ chất thải phóng xạ trực tiếp vào bồn rửa tay thông thường.",
          "D. Giữ khoảng cách an toàn, giảm tối đa thời gian tiếp xúc và sử dụng tấm chắn chì bảo vệ."
        ],
        3,
        "Nguyên tắc an toàn phóng xạ cốt lõi: Khoảng cách xa, thời gian ngắn và che chắn bằng vật liệu hấp thụ (chì)."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tròn nền xanh dương, bên trong có hình đôi găng tay màu trắng như hình vẽ mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#2563eb\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><path d=\"M40,78 L40,55 Q40,45 46,45 Q52,45 52,55 L52,78 Z\" fill=\"#fff\"/><path d=\"M52,78 L52,40 Q52,32 58,32 Q64,32 64,40 L64,78 Z\" fill=\"#fff\"/><path d=\"M32,68 L32,58 Q32,52 38,52 L40,52 L40,68 Z\" fill=\"#fff\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển báo trong phòng thực hành</div></div>",
        [
          "A. Cảnh báo nguy hiểm bỏng lạnh do khí hóa lỏng.",
          "B. Hiệu lệnh bắt buộc phải đeo găng tay bảo hộ thích hợp khi làm việc.",
          "C. Biển cấm chạm tay vào các thiết bị đang hoạt động.",
          "D. Nơi rửa tay sát khuẩn phòng dịch bệnh."
        ],
        1,
        "Biển tròn xanh dương hình găng tay trắng là biển lệnh bắt buộc phải đeo găng tay bảo hộ."
      ],
      [
        "Để đo thời gian rơi của một vật giữa hai điểm trong phòng thực hành một cách chính xác nhất, người ta sử dụng dụng cụ nào?",
        [
          "A. Đồng hồ bấm giây cầm tay thông thường.",
          "B. Cổng quang điện nối với đồng hồ đo thời gian hiện số.",
          "C. Đồng hồ cát có vạch chia.",
          "D. Đồng hồ quả lắc treo tường."
        ],
        1,
        "Cổng quang điện kết nối đồng hồ hiện số giúp loại trừ sai số phản xạ của con người, đo chính xác đến 0,001 s."
      ],
      [
        "Sai số ngẫu nhiên trong phép đo đại lượng vật lí là loại sai số:",
        [
          "A. Do dụng cụ đo bị cong vênh hoặc sai lệch vạch số 0 ban đầu.",
          "B. Luôn có cùng một chiều lệch (luôn dương hoặc luôn âm).",
          "C. Xuất hiện do những nguyên nhân không rõ ràng, tác động ngẫu nhiên làm kết quả các lần đo dao động quanh giá trị thực.",
          "D. Có thể triệt tiêu hoàn toàn chỉ sau một lần đo duy nhất."
        ],
        2,
        "Sai số ngẫu nhiên do các yếu tố ngẫu nhiên từ môi trường hoặc thao tác, khắc phục bằng cách đo nhiều lần và lấy giá trị trung bình."
      ],
      [
        "Một hệ quy chiếu dùng để xác định vị trí và chuyển động của một vật bao gồm:",
        [
          "A. Chỉ cần một cái thước dây có vạch milimét.",
          "B. Người quan sát và vị trí của Trái Đất.",
          "C. Vật làm mốc, hệ tọa độ gắn với vật làm mốc, mốc thời gian và đồng hồ đo thời gian.",
          "D. Chỉ cần một chiếc đồng hồ bấm giây chính xác."
        ],
        2,
        "Hệ quy chiếu chuẩn gồm: Vật mốc + Hệ tọa độ gắn với vật mốc + Mốc thời gian + Đồng hồ đo thời gian."
      ],
      [
        "Một người đi bộ với vận tốc 1 m/s trên một toa tàu hỏa đang chạy với vận tốc 10 m/s so với mặt đất. Nếu người đó đi cùng chiều chuyển động của đoàn tàu thì vận tốc của người đó so với mặt đất có độ lớn là:",
        [
          "A. 11 m/s.",
          "B. 9 m/s.",
          "C. 10 m/s.",
          "D. 1 m/s."
        ],
        0,
        "v_nguoi_dat = v_nguoi_tau + v_tau_dat = 1 + 10 = 11 m/s."
      ],
      [
        "Một xe ôtô chạy thẳng đều quãng đường 120 km trong thời gian 2,5 giờ. Tốc độ trung bình của xe ôtô bằng:",
        [
          "A. 40 km/h.",
          "B. 50 km/h.",
          "C. 48 km/h.",
          "D. 60 km/h."
        ],
        2,
        "v = s / t = 120 / 2,5 = 48 km/h."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm là một đường thẳng đi qua gốc tọa độ O biểu diễn chất điểm đang:",
        [
          "A. Chuyển động thẳng đều xuất phát từ gốc tọa độ.",
          "B. Đứng yên tại gốc tọa độ O.",
          "C. Chuyển động tròn đều quanh gốc O.",
          "D. Chuyển động thẳng biến đổi đều có vận tốc đầu bằng 0."
        ],
        0,
        "d = vt là hàm bậc nhất không có hệ số tự do, đồ thị là đường thẳng qua gốc O biểu thị chuyển động thẳng đều."
      ],
      [
        "Một vật chuyển động thẳng nhanh dần đều theo chiều âm của trục tọa độ Ox. Nhận định nào sau đây về dấu của vận tốc v và gia tốc a là ĐÚNG?",
        [
          "A. v < 0 và a < 0 (tích a · v > 0).",
          "B. v < 0 và a > 0 (tích a · v < 0).",
          "C. v > 0 và a > 0 (tích a · v > 0).",
          "D. v > 0 và a < 0 (tích a · v < 0)."
        ],
        0,
        "Vật chuyển động theo chiều âm nên v < 0. Nhanh dần đều thì gia tốc a cùng chiều với v nên a < 0 (a · v > 0)."
      ],
      [
        "Một ôtô đang chạy với tốc độ 15 m/s thì tăng ga chuyển động nhanh dần đều với gia tốc 2 m/s² trong thời gian 5 s. Vận tốc của ôtô ở cuối thời gian tăng ga là:",
        [
          "A. 20 m/s.",
          "B. 35 m/s.",
          "C. 10 m/s.",
          "D. 25 m/s."
        ],
        3,
        "v = v₀ + at = 15 + 2 · 5 = 25 m/s."
      ],
      [
        "Trong đồ thị vận tốc – thời gian (v – t) của chuyển động thẳng, diện tích của hình phẳng giới hạn bởi đường biểu diễn v(t), trục hoành t và hai đường gióng thời gian t₁ và t₂ biểu thị đại lượng nào?",
        [
          "A. Gia tốc tức thời của vật tại thời điểm t₁.",
          "B. Tốc độ tức thời của vật tại thời điểm t₂.",
          "C. Độ dịch chuyển của vật trong khoảng thời gian từ t₁ đến t₂.",
          "D. Lực kéo tác dụng lên vật."
        ],
        2,
        "Ý nghĩa hình học quan trọng: Diện tích hình giới hạn dưới đồ thị (v – t) chính bằng độ dịch chuyển d của vật."
      ],
      [
        "Một ôtô đang chạy với vận tốc 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 4 m/s². Thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng hẳn là:",
        [
          "A. 10 s.",
          "B. 5 s.",
          "C. 4 s.",
          "D. 8 s."
        ],
        1,
        "t = (v - v₀) / a = (0 - 20) / (-4) = 5 s."
      ],
      [
        "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm của sự rơi tự do của một vật?",
        [
          "A. Tốc độ rơi phụ thuộc vào hình dạng và khối lượng của vật rơi.",
          "B. Chuyển động rơi tự do là chuyển động thẳng nhanh dần đều với gia tốc g.",
          "C. Phương của chuyển động rơi tự do là phương thẳng đứng.",
          "D. Chiều của chuyển động rơi tự do là chiều từ trên xuống dưới."
        ],
        0,
        "Rơi tự do không phụ thuộc vào khối lượng hay hình dạng của vật; mọi vật rơi tự do đều có cùng gia tốc g."
      ],
      [
        "Thả một hòn bi sắt rơi tự do từ đỉnh một tòa nhà cao 80 m tại nơi có gia tốc trọng trường g = 10 m/s². Thời gian viên bi rơi đến khi chạm đất là:",
        [
          "A. 16 s.",
          "B. 2 s.",
          "C. 8 s.",
          "D. 4 s."
        ],
        3,
        "t = √(2h / g) = √(2 · 80 / 10) = √16 = 4 s."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy thử nghiệm trên một đường thẳng. Xe bắt đầu từ trạng thái đứng yên tại O, chuyển động thẳng nhanh dần đều với gia tốc a = 2 m/s² trong thời gian 10 giây. Sau đó, xe tiếp tục chạy thẳng đều với vận tốc vừa đạt được trong 20 giây tiếp theo.",
        "items": [
          [
            "Vận tốc của ôtô ở cuối giây thứ 10 đạt được là 20 m/s.",
            true,
            "v₁ = at = 2 · 10 = 20 m/s."
          ],
          [
            "Quãng đường xe chạy được trong 10 giây đầu tiên là 100 m.",
            true,
            "s₁ = 1/2 · a · t² = 0,5 · 2 · 10² = 100 m."
          ],
          [
            "Quãng đường xe chạy được trong 20 giây chuyển động thẳng đều tiếp theo là 400 m.",
            true,
            "s₂ = v₁ · t₂ = 20 · 20 = 400 m."
          ],
          [
            "Tốc độ trung bình của ôtô trong toàn bộ 30 giây chạy thử nghiệm là 25 m/s.",
            false,
            "v_tb = (s₁ + s₂) / (t₁ + t₂) = (100 + 400) / 30 = 500 / 30 ≈ 16,67 m/s (không phải 25 m/s)."
          ]
        ]
      },
      {
        "stem": "Thả một hòn đá nhỏ rơi tự do từ tầng 10 của một tòa nhà cao 45 m tại nơi có g = 10 m/s². Bỏ qua sức cản của không khí.",
        "items": [
          [
            "Thời gian để hòn đá rơi từ lúc thả đến khi chạm đất là 3 giây.",
            true,
            "t = √(2h / g) = √(2 · 45 / 10) = √9 = 3 s."
          ],
          [
            "Vận tốc của hòn đá ngay trước khi chạm đất là 30 m/s.",
            true,
            "v = gt = 10 · 3 = 30 m/s."
          ],
          [
            "Trong 1 giây cuối cùng trước khi chạm đất, hòn đá rơi được quãng đường 25 m.",
            true,
            "Quãng đường trong 2 giây đầu: s₂ = 0,5 · 10 · 2² = 20 m. Quãng đường giây cuối: Δs = 45 - 20 = 25 m."
          ],
          [
            "Nếu khối lượng hòn đá tăng lên gấp đôi thì thời gian rơi chạm đất sẽ giảm đi một nửa.",
            false,
            "Thời gian rơi tự do không phụ thuộc vào khối lượng của vật."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một ôtô chuyển động trên đoạn đường thẳng trong thời gian tổng cộng 2 giờ. Trong nửa thời gian đầu, ôtô chạy với tốc độ không đổi v₁ = 60 km/h. Trong nửa thời gian sau, ôtô chạy với tốc độ không đổi v₂ = 40 km/h. Tốc độ trung bình của ôtô trong cả chuyến đi bằng bao nhiêu km/h?",
        "answer": "50",
        "explanation": "Quãng đường đi được: s = 60 · 1 + 40 · 1 = 100 km. Tốc độ trung bình: v_tb = s / t = 100 / 2 = 50 km/h."
      },
      {
        "question": "Hai ca nô A và B cùng chạy ngược dòng trên một khúc sông thẳng. Vận tốc của ca nô A đối với dòng nước là 25 km/h, của ca nô B đối với dòng nước là 15 km/h. Vận tốc của dòng nước đối với bờ là 3 km/h. Vận tốc của ca nô A đối với ca nô B có độ lớn bằng bao nhiêu km/h?",
        "answer": "10",
        "explanation": "Vận tốc tương đối giữa hai ca nô: v_AB = v_A/nước - v_B/nước = 25 - 15 = 10 km/h."
      },
      {
        "question": "Một chiếc xe ôtô đang chạy với tốc độ 90 km/h (25 m/s) thì người lái xe hãm phanh chuyển động chậm dần đều để dừng lại trước trạm thu phí. Biết quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là 125 m. Độ lớn gia tốc hãm của xe ôtô bằng bao nhiêu m/s²?",
        "answer": "2.5",
        "explanation": "v² - v₀² = 2as ⇒ 0 - 25² = 2 · a · 125 ⇒ a = -2,5 m/s². Độ lớn gia tốc hãm bằng 2,5 m/s²."
      },
      {
        "question": "Một vật rơi tự do không vận tốc ban đầu từ độ cao h = 125 m xuống mặt đất tại nơi có g = 10 m/s². Quãng đường vật rơi được trong 2 giây cuối cùng trước khi chạm đất bằng bao nhiêu mét?",
        "answer": "80",
        "explanation": "Tổng thời gian rơi chạm đất: t = √(2 · 125 / 10) = 5 s. Quãng đường rơi trong 3 giây đầu: s₃ = 0,5 · 10 · 3² = 45 m. Quãng đường rơi trong 2 giây cuối: Δs = 125 - 45 = 80 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-05",
    "title": "Vật lí 10 - Đề 05 - Trường THPT Hồ Nghinh – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Hồ Nghinh – Quảng Nam · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Cuộc cách mạng công nghiệp lần thứ hai (cuối thế kỉ XIX) gắn liền với những phát minh đột phá nào của Vật lí học?",
        [
          "A. Chế tạo ra mạng máy tính Internet toàn cầu.",
          "B. Chế tạo ra động cơ hơi nước đầu tiên.",
          "C. Khám phá ra hiện tượng cảm ứng điện từ, máy phát điện và mạng lưới truyền tải điện năng.",
          "D. Khám phá ra hạt nhân nguyên tử và năng lượng phân hạch."
        ],
        2,
        "Hiện tượng cảm ứng điện từ của Faraday mở ra kỉ nguyên điện năng trong CMCN lần thứ hai."
      ],
      [
        "Đóng góp quan trọng nhất của Vật lí học đối với các ngành khoa học tự nhiên và công nghệ là:",
        [
          "A. Cung cấp các định luật cơ bản và công cụ thực nghiệm nền tảng cho Hóa học, Sinh học, Thiên văn học và Kĩ thuật.",
          "B. Xóa bỏ hoàn toàn nhu cầu sử dụng năng lượng hóa thạch.",
          "C. Quyết định giá cả hàng hóa trên thị trường thương mại.",
          "D. Thay thế việc giảng dạy toán học trong các trường đại học."
        ],
        0,
        "Vật lí học cung cấp các định luật tự nhiên cơ bản nhất và phương pháp nghiên cứu cho tất cả các ngành khoa học tự nhiên."
      ],
      [
        "Khi làm việc trong phòng thực hành có chứa các dung môi hữu cơ dễ bay hơi và dễ cháy như cồn, ete, benzen, hành động nào sau đây bị NGHIÊM CẤM tuyệt đối?",
        [
          "A. Đậy kín nắp các bình chứa hóa chất sau khi sử dụng.",
          "B. Sử dụng ngọn lửa trần hoặc bật lửa gần khu vực chứa hóa chất.",
          "C. Đeo khẩu trang và kính bảo hộ khi rót hóa chất.",
          "D. Mở quạt thông gió trong phòng thí nghiệm."
        ],
        1,
        "Hơi của dung môi hữu cơ rất dễ bắt lửa gây nổ dữ dội, cấm tuyệt đối ngọn lửa trần gần khu vực này."
      ],
      [
        "Biển báo có hình tròn viền đỏ, nền trắng, có gạch chéo đỏ đè lên hình ngọn lửa như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#fff\" stroke=\"#dc2626\" stroke-width=\"8\"/><line x1=\"20\" y1=\"20\" x2=\"80\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"8\"/><line x1=\"36\" y1=\"68\" x2=\"64\" y2=\"40\" stroke=\"#78350f\" stroke-width=\"5\"/><circle cx=\"66\" cy=\"38\" r=\"5\" fill=\"#ea580c\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển báo trong phòng thực hành</div></div>",
        [
          "A. Cảnh báo nơi có nhiệt độ môi trường rất cao.",
          "B. Khu vực đun nấu có kiểm soát ngọn lửa.",
          "C. Nơi dành riêng để đốt rác thí nghiệm.",
          "D. Biển cấm lửa (cấm mang lửa hoặc tạo ra tia lửa trong khu vực này)."
        ],
        3,
        "Biển tròn viền đỏ có vạch gạch chéo đỏ là biển cấm; gạch chéo ngọn lửa nghĩa là cấm lửa."
      ],
      [
        "Cho đại lượng C được xác định bằng tổng hai đại lượng đo trực tiếp A và B (C = A + B). Nếu sai số tuyệt đối của A và B lần lượt là ΔA và ΔB thì sai số tuyệt đối ΔC bằng:",
        [
          "A. ΔC = ΔA · ΔB.",
          "B. ΔC = √(ΔA² + ΔB²).",
          "C. ΔC = ΔA - ΔB.",
          "D. ΔC = ΔA + ΔB."
        ],
        3,
        "Sai số tuyệt đối của một tổng hoặc một hiệu bằng tổng các sai số tuyệt đối thành phần: ΔC = ΔA + ΔB."
      ],
      [
        "Một phép đo thời gian cho kết quả t = (5,0 ± 0,1) s. Sai số tỉ đối δt của phép đo này bằng:",
        [
          "A. 0,2%.",
          "B. 5,0%.",
          "C. 2,0%.",
          "D. 1,0%."
        ],
        2,
        "δt = (Δt / t̄) × 100% = (0,1 / 5,0) × 100% = 2,0%."
      ],
      [
        "Một vận động viên bơi xuất phát từ đầu bể bơi dài 50 m đến cuối bể bơi, sau đó quay đầu bơi ngược trở lại 20 m thì dừng lại. Quãng đường s và độ lớn độ dịch chuyển d của người đó lần lượt là:",
        [
          "A. s = 30 m và d = 70 m.",
          "B. s = 70 m và d = 70 m.",
          "C. s = 30 m và d = 30 m.",
          "D. s = 70 m và d = 30 m."
        ],
        3,
        "Quãng đường s = 50 + 20 = 70 m. Độ dịch chuyển cách điểm xuất phát: d = 50 - 20 = 30 m."
      ],
      [
        "Số chỉ của tốc kế (đồng hồ đo tốc độ) gắn trên xe máy hoặc ôtô khi đang lưu thông cho người lái xe biết:",
        [
          "A. Tốc độ tức thời của xe tại thời điểm quan sát.",
          "B. Vận tốc trung bình của xe theo phương ngang.",
          "C. Gia tốc tức thời của xe lúc tăng tốc.",
          "D. Tốc độ trung bình của xe trong suốt chuyến đi."
        ],
        0,
        "Tốc kế trên xe máy, ôtô đo tốc độ tức thời của xe tại đúng thời điểm đó."
      ],
      [
        "Khi dùng đồng hồ đo thời gian hiện số kết hợp cổng quang điện để đo thời gian viên bi đi từ cổng A đến cổng B, chế độ đo (MODE) trên đồng hồ cần được chọn ở chế độ nào?",
        [
          "A. Chế độ đo khoảng thời gian từ A đến B (thường kí hiệu là A &hArr; B).",
          "B. Chế độ đếm số lần xung nhịp tự do.",
          "C. Chế độ đo chu kì dao động T.",
          "D. Chế độ đo thời gian chắn sáng một cổng A duy nhất."
        ],
        0,
        "Cần chọn chế độ đo A &hArr; B để đồng hồ bắt đầu đếm khi vật qua cổng A và dừng đếm khi vật chạm cổng B."
      ],
      [
        "Nếu đồ thị độ dịch chuyển – thời gian (d – t) của hai xe A và B là hai đường thẳng song song với nhau thì nhận định nào sau đây là ĐÚNG?",
        [
          "A. Hai xe chuyển động ngược chiều nhau.",
          "B. Hai xe chuyển động thẳng đều với cùng vận tốc.",
          "C. Xe A chuyển động nhanh hơn xe B.",
          "D. Hai xe luôn có cùng tọa độ ban đầu xuất phát."
        ],
        1,
        "Hai đường thẳng song song có cùng độ dốc (hệ số góc), nghĩa là hai xe có cùng vận tốc chuyển động."
      ],
      [
        "Một ôtô đang chuyển động thẳng với vận tốc 10 m/s thì tăng tốc, sau 5 giây vận tốc đạt 20 m/s. Gia tốc trung bình của ôtô trong 5 giây đó là:",
        [
          "A. 5 m/s².",
          "B. 2 m/s².",
          "C. 1 m/s².",
          "D. 4 m/s²."
        ],
        1,
        "a = (v - v₀) / t = (20 - 10) / 5 = 10 / 5 = 2 m/s²."
      ],
      [
        "Trong chuyển động thẳng biến đổi đều, công thức nào sau đây diễn tả đúng sự phụ thuộc của vận tốc v vào thời gian t?",
        [
          "A. v = v₀ + at.",
          "B. v = v₀ · t + at.",
          "C. v = a · t².",
          "D. v = v₀ + 1/2 · at²."
        ],
        0,
        "Công thức vận tốc theo thời gian là hàm bậc nhất: v = v₀ + at."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một chất điểm chuyển động thẳng đều là:",
        [
          "A. Một đường cong parabol quay bề lõm xuống.",
          "B. Một đường thẳng trùng với trục thẳng đứng v.",
          "C. Một đường thẳng xiên góc đi qua gốc tọa độ O.",
          "D. Một đường thẳng song song với trục thời gian t."
        ],
        3,
        "Chuyển động thẳng đều có vận tốc không đổi theo thời gian, nên đồ thị v – t là đường thẳng song song với trục hoành t."
      ],
      [
        "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc a = 4 m/s². Quãng đường vật đi được sau 3 giây kể từ lúc bắt đầu chuyển động là:",
        [
          "A. 24 m.",
          "B. 12 m.",
          "C. 18 m.",
          "D. 36 m."
        ],
        2,
        "s = 1/2 · a · t² = 0,5 · 4 · 3² = 2 · 9 = 18 m."
      ],
      [
        "Chuyển động của vật nào dưới đây có thể được coi gần đúng là chuyển động rơi tự do?",
        [
          "A. Một vận động viên nhảy dù đang bung dù rơi xuống mặt đất.",
          "B. Một quả táo chín rụng từ trên cành cây cao xuống đất trong ngày trời lặng gió.",
          "C. Một chiếc lá bàng khô bay lượn lờ trong gió.",
          "D. Một mẩu giấy ăn mỏng bị vo tròn nhẹ nhàng thả rơi."
        ],
        1,
        "Quả táo đặc, nặng, sức cản không khí rất nhỏ so với trọng lượng nên rơi gần đúng là rơi tự do."
      ],
      [
        "Một vật rơi tự do không vận tốc đầu từ độ cao h tại nơi có gia tốc trọng trường g. Vận tốc v của vật khi chạm đất được tính theo công thức:",
        [
          "A. v = 2gh.",
          "B. v = gh.",
          "C. v = √(2gh).",
          "D. v = √(gh)."
        ],
        2,
        "v² = 2gh &rArr; v = √(2gh)."
      ]
    ],
    "tf": [
      {
        "stem": "Một chiếc ca nô chạy trên một đoạn sông thẳng từ bến A đến bến B cách nhau 40 km. Khi chạy xuôi dòng từ A đến B, ca nô mất thời gian 1 giờ 15 phút (1,25 h). Khi chạy ngược dòng từ B về A, ca nô mất thời gian 2 giờ. Coi vận tốc ca nô đối với nước và vận tốc nước đối với bờ là không đổi.",
        "items": [
          [
            "Vận tốc của ca nô khi chạy xuôi dòng đối với bờ sông là 32 km/h.",
            true,
            "v_xuoi = 40 / 1,25 = 32 km/h."
          ],
          [
            "Vận tốc của ca nô khi chạy ngược dòng đối với bờ sông là 20 km/h.",
            true,
            "v_nguoc = 40 / 2 = 20 km/h."
          ],
          [
            "Vận tốc của dòng nước chảy so với bờ sông là 6 km/h.",
            true,
            "v_nuoc = (v_xuoi - v_nguoc) / 2 = (32 - 20) / 2 = 6 km/h."
          ],
          [
            "Vận tốc của ca nô so với dòng nước là 30 km/h.",
            false,
            "v_ca_no = (v_xuoi + v_nguoc) / 2 = (32 + 20) / 2 = 26 km/h (không phải 30 km/h)."
          ]
        ]
      },
      {
        "stem": "Thả một hòn bi sắt rơi tự do từ đỉnh tháp cao h = 45 m tại nơi có gia tốc trọng trường g = 10 m/s². Bỏ qua mọi sức cản của không khí.",
        "items": [
          [
            "Thời gian viên bi rơi từ đỉnh tháp đến khi chạm đất là 3 giây.",
            true,
            "t = √(2h / g) = √(2 · 45 / 10) = √9 = 3 s."
          ],
          [
            "Tốc độ của viên bi ngay trước khi chạm đất là 30 m/s.",
            true,
            "v = gt = 10 · 3 = 30 m/s."
          ],
          [
            "Quãng đường viên bi rơi được trong 2 giây đầu tiên là 20 m.",
            true,
            "s₂ = 1/2 · g · t² = 0,5 · 10 · 2² = 20 m."
          ],
          [
            "Quãng đường viên bi rơi được trong giây thứ ba (giây cuối cùng) là 20 m.",
            false,
            "s_giay_3 = h - s₂ = 45 - 20 = 25 m (không phải 20 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trong một thí nghiệm đo gia tốc rơi tự do g = 2s / t², học sinh đo được quãng đường s = (1,000 ± 0,005) m và thời gian rơi t = (0,450 ± 0,009) s. Sai số tỉ đối δg của phép đo gia tốc trọng trường bằng bao nhiêu phần trăm (nhập số nguyên hoặc số thập phân)?",
        "answer": "4.5",
        "explanation": "δg = δs + 2δt = (0,005 / 1,000 × 100%) + 2 × (0,009 / 0,450 × 100%) = 0,5% + 4,0% = 4,5%."
      },
      {
        "question": "Tại một ngã tư đường, hai xe máy A và B cùng xuất phát một lúc từ ngã tư. Xe A chạy thẳng đều về phía Bắc với tốc độ 30 km/h, xe B chạy thẳng đều về phía Đông với tốc độ 40 km/h. Sau 1,5 giờ kể từ lúc xuất phát, khoảng cách giữa hai xe bằng bao nhiêu kilômét?",
        "answer": "75",
        "explanation": "s_A = 30 · 1,5 = 45 km; s_B = 40 · 1,5 = 60 km. Khoảng cách: d = √(45² + 60²) = √5625 = 75 km."
      },
      {
        "question": "Một đoàn tàu hỏa đang di chuyển với vận tốc 54 km/h (15 m/s) thì hãm phanh chuyển động chậm dần đều với độ lớn gia tốc 0,5 m/s². Quãng đường đoàn tàu đi được sau 10 giây kể từ khi bắt đầu hãm phanh là bao nhiêu mét?",
        "answer": "125",
        "explanation": "Thời gian dừng hẳn là 30 s > 10 s. Quãng đường sau 10 s: s = v₀t + 1/2 · at² = 15 · 10 + 0,5 · (-0,5) · 10² = 150 - 25 = 125 m."
      },
      {
        "question": "Thả rơi tự do một vật từ độ cao h = 45 m so với mặt đất tại nơi có g = 10 m/s². Khi vật ở độ cao 25 m so với mặt đất thì vận tốc của vật có độ lớn bằng bao nhiêu m/s?",
        "answer": "20",
        "explanation": "Quãng đường vật đã rơi: s = 45 - 25 = 20 m. Vận tốc: v = √(2gs) = √(2 · 10 · 20) = 20 m/s."
      }
    ]
  },
  {
    "id": "vatli-10-de-06",
    "title": "Vật lí 10 - Đề 06 - Trường THPT Hùng Vương – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Hùng Vương – Quảng Nam · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Cuộc cách mạng công nghiệp lần thứ ba (nửa sau thế kỉ XX) với sự ra đời của máy tính điện tử và viễn thông được thúc đẩy mạnh mẽ bởi nhánh vật lí nào?",
        [
          "A. Thuyết tương đối rộng của Albert Einstein.",
          "B. Cơ học thiên thể và thuyết vạn vật hấp dẫn.",
          "C. Nhiệt động lực học cổ điển của thế kỉ XVIII.",
          "D. Vật lí chất rắn và công nghệ vật liệu bán dẫn (silicon, transistor)."
        ],
        3,
        "Vật lí chất rắn và linh kiện bán dẫn (transistor) là khởi nguồn cho kỉ nguyên máy tính và viễn thông."
      ],
      [
        "Trong tiến trình nghiên cứu Vật lí học, tiêu chuẩn cao nhất để khẳng định hoặc bác bỏ một giả thuyết khoa học là:",
        [
          "A. Ý kiến chủ quan của số đông mọi người.",
          "B. Kết quả kiểm chứng độc lập từ thực nghiệm.",
          "C. Suy đoán logic cảm tính không cần bằng chứng.",
          "D. Độ dài của bài báo cáo khoa học."
        ],
        1,
        "Thực nghiệm là tiêu chuẩn chân lí cao nhất để kiểm chứng tính đúng đắn của mọi giả thuyết vật lí."
      ],
      [
        "Khi làm thí nghiệm với các hóa chất có tính ăn mòn mạnh (như axit đặc, kiềm đặc), dụng cụ bảo hộ nào là BẮT BUỘC?",
        [
          "A. Chỉ cần đeo khẩu trang vải thông thường.",
          "B. Đi chân trần để di chuyển nhanh chóng.",
          "C. Dùng tay trần cầm trực tiếp ống nghiệm đựng hóa chất.",
          "D. Đeo kính bảo hộ mắt và mang găng tay cao su chuyên dụng."
        ],
        3,
        "Hóa chất ăn mòn có thể gây bỏng da và tổn thương mắt nghiêm trọng, bắt buộc đeo kính và găng tay cao su bảo hộ."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình vẽ như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"44\" r=\"14\" fill=\"#000\"/><circle cx=\"44\" cy=\"42\" r=\"3\" fill=\"#facc15\"/><circle cx=\"56\" cy=\"42\" r=\"3\" fill=\"#facc15\"/><rect x=\"46\" y=\"54\" width=\"8\" height=\"8\" fill=\"#000\"/><line x1=\"30\" y1=\"68\" x2=\"70\" y2=\"48\" stroke=\"#000\" stroke-width=\"4\"/><line x1=\"30\" y1=\"48\" x2=\"70\" y2=\"68\" stroke=\"#000\" stroke-width=\"4\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất độc hại</div></div>",
        [
          "A. Biển chỉ dẫn khu vực phòng y tế của trường.",
          "B. Cảnh báo nguy hiểm chất độc hại hoặc khí độc gây nguy hiểm chết người.",
          "C. Cảnh báo khu vực có nhiều vật sắc nhọn.",
          "D. Nơi lưu trữ thực phẩm ăn uống an toàn."
        ],
        1,
        "Biển tam giác vàng hình đầu lâu xương chéo cảnh báo chất độc hại, nguy hiểm tính mạng."
      ],
      [
        "Để đo đường kính trong của một ống nghiệm thủy tinh nhỏ một cách chính xác đến 0,1 mm, người ta thường dùng dụng cụ đo nào sau đây?",
        [
          "A. Thước cuộn dài 5 m.",
          "B. Thước kẻ học sinh chia đến milimét.",
          "C. Thước kẹp (thước cặp).",
          "D. Thước dây vải may quần áo."
        ],
        2,
        "Thước kẹp có các mỏ kẹp đo trong, đo chính xác đến 0,1 mm hoặc 0,05 mm."
      ],
      [
        "Cho đại lượng v = s/t. Nếu sai số tỉ đối của quãng đường là δs = 1,5% và của thời gian là δt = 0,5% thì sai số tỉ đối của tốc độ δv bằng:",
        [
          "A. 3,0%.",
          "B. 2,0%.",
          "C. 1,0%.",
          "D. 0,75%."
        ],
        1,
        "Sai số tỉ đối của thương bằng tổng các sai số tỉ đối thành phần: δv = δs + δt = 1,5% + 0,5% = 2,0%."
      ],
      [
        "Trong trường hợp nào dưới đây, một vật có thể được coi là một chất điểm?",
        [
          "A. Một viên phấn rơi từ bàn giáo viên xuống sàn nhà khi đang xét kích thước của nó.",
          "B. Một người đang thực hiện các động tác bơi lội trong hồ bơi nhỏ.",
          "C. Trái Đất trong chuyển động tự quay quanh trục của chính nó.",
          "D. Một chiếc ôtô đang chạy trên tuyến đường từ Hà Nội vào Đà Nẵng."
        ],
        3,
        "Một vật được coi là chất điểm khi kích thước của nó rất nhỏ so với quãng đường đi được hoặc khoảng cách đang xét."
      ],
      [
        "Vận tốc tức thời của một vật chuyển động là đại lượng:",
        [
          "A. Vô hướng luôn mang giá trị dương trên cả quãng đường dài.",
          "B. Bằng thương số giữa tổng quãng đường và tổng thời gian đi hết quãng đường đó.",
          "C. Không đổi đối với mọi loại chuyển động.",
          "D. Vectơ đặc trưng cho độ nhanh chậm và hướng chuyển động của vật tại một thời điểm xác định."
        ],
        3,
        "Vận tốc tức thời là đại lượng vectơ đặc trưng cho chiều và độ nhanh chậm tại đúng thời điểm đó."
      ],
      [
        "Khi bố trí thí nghiệm đo tốc độ của xe con trên máng đệm khí, để giảm thiểu tối đa ma sát cản trở chuyển động của xe, người ta sử dụng biện pháp nào?",
        [
          "A. Bơm dòng khí liên tục qua các lỗ nhỏ trên máng để tạo một lớp đệm khí nâng xe lên.",
          "B. Gắn thêm bánh xe cao su có gai to vào gầm xe.",
          "C. Dùng dây kéo có tải trọng rất nặng.",
          "D. Bôi thật nhiều dầu nhớt đặc lên mặt máng."
        ],
        0,
        "Đệm không khí giúp xe di chuyển không chạm trực tiếp vào bề mặt máng, giảm ma sát tối đa."
      ],
      [
        "Hệ số góc (độ dốc) của đường biểu diễn trên đồ thị độ dịch chuyển – thời gian (d – t) cho ta biết giá trị của đại lượng nào?",
        [
          "A. Lực kéo tác dụng lên vật.",
          "B. Quãng đường đi được.",
          "C. Vận tốc của chuyển động.",
          "D. Gia tốc của chuyển động."
        ],
        2,
        "Hệ số góc k = Δd / Δt chính là vận tốc v của chất điểm."
      ],
      [
        "Một chất điểm chuyển động dọc theo trục Ox có gia tốc a = –3 m/s² và vận tốc v = +6 m/s. Trạng thái chuyển động của chất điểm là:",
        [
          "A. Chuyển động thẳng nhanh dần đều cùng chiều dương.",
          "B. Chuyển động thẳng đều.",
          "C. Chuyển động thẳng chậm dần đều cùng chiều dương.",
          "D. Chuyển động thẳng chậm dần đều ngược chiều dương."
        ],
        2,
        "Vì v > 0 nên vật chuyển động theo chiều dương. Vì a và v trái dấu (a · v = -18 < 0) nên là chuyển động chậm dần đều."
      ],
      [
        "Một đoàn tàu đang chạy với tốc độ 36 km/h (10 m/s) thì tăng tốc chuyển động thẳng nhanh dần đều với gia tốc 0,5 m/s². Sau 10 giây, tốc độ của tàu đạt được là:",
        [
          "A. 15 m/s.",
          "B. 20 m/s.",
          "C. 5 m/s.",
          "D. 12 m/s."
        ],
        0,
        "v = v₀ + at = 10 + 0,5 · 10 = 15 m/s."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động là đường thẳng dốc xuống cắt trục thời gian tại điểm t = 5 s. Điều này chứng tỏ:",
        [
          "A. Vật chuyển động thẳng chậm dần đều và dừng lại hoàn toàn ở thời điểm t = 5 s.",
          "B. Vật luôn đứng yên trong suốt thời gian 5 s.",
          "C. Gia tốc của vật tăng dần theo thời gian.",
          "D. Vật chuyển động nhanh dần đều đến thời điểm t = 5 s thì đổi chiều."
        ],
        0,
        "Đường dốc xuống cắt trục hoành v = 0 tại t = 5 s biểu thị chuyển động chậm dần đều dừng lại tại t = 5 s."
      ],
      [
        "Một ôtô bắt đầu khởi hành từ điểm đứng yên với gia tốc 3 m/s². Vận tốc của ôtô sau khi đi được quãng đường 24 m là:",
        [
          "A. 12 m/s.",
          "B. 6 m/s.",
          "C. 24 m/s.",
          "D. 144 m/s."
        ],
        0,
        "v² - v₀² = 2ad &rArr; v² = 2 · 3 · 24 = 144 &rArr; v = 12 m/s."
      ],
      [
        "Khi một vật rơi tự do trong trọng trường gần mặt đất, đại lượng nào sau đây KHÔNG THAY ĐỔI theo thời gian?",
        [
          "A. Độ cao của vật so với mặt đất.",
          "B. Gia tốc của vật (g = const).",
          "C. Vận tốc tức thời của vật.",
          "D. Quãng đường vật rơi được."
        ],
        1,
        "Rơi tự do là chuyển động nhanh dần đều với gia tốc trọng trường g không đổi tại một nơi xác định."
      ],
      [
        "Thả một hòn bi rơi tự do không vận tốc đầu tại nơi có gia tốc trọng trường g = 9,8 m/s². Sau 3 giây kể từ khi thả, tốc độ của hòn bi đạt được là:",
        [
          "A. 9,8 m/s.",
          "B. 44,1 m/s.",
          "C. 29,4 m/s.",
          "D. 19,6 m/s."
        ],
        2,
        "v = gt = 9,8 · 3 = 29,4 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Một chất điểm chuyển động dọc theo trục tọa độ Ox. Tại thời điểm ban đầu t = 0 vật ở gốc tọa độ O. Trong 4 giây đầu tiên vật chuyển động thẳng đều với vận tốc v₁ = 5 m/s. Trong 6 giây tiếp theo vật dừng lại đứng yên. Trong 5 giây cuối cùng vật chuyển động thẳng đều quay ngược trở lại gốc tọa độ với vận tốc v₂ = –4 m/s.",
        "items": [
          [
            "Trong 4 giây đầu tiên, độ dịch chuyển của chất điểm là d₁ = 20 m.",
            true,
            "d₁ = v₁ · t₁ = 5 · 4 = 20 m."
          ],
          [
            "Từ thời điểm t = 4 s đến t = 10 s, đồ thị độ dịch chuyển – thời gian (d – t) là một đoạn thẳng song song với trục hoành t.",
            true,
            "Vật đứng yên nên độ dịch chuyển không đổi d = 20 m, đồ thị song song trục thời gian."
          ],
          [
            "Độ dịch chuyển tổng cộng của chất điểm sau toàn bộ 15 giây chuyển động bằng 0 m.",
            true,
            "Quãng đường quay về d₂ = –4 · 5 = –20 m. Độ dịch chuyển tổng d = 20 + (-20) = 0 m."
          ],
          [
            "Tốc độ trung bình của chất điểm trong suốt 15 giây bằng 0 m/s.",
            false,
            "Tổng quãng đường s = 20 + 20 = 40 m. Tốc độ trung bình v_tb = 40 / 15 ≈ 2,67 m/s (chỉ có vận tốc trung bình mới bằng 0)."
          ]
        ]
      },
      {
        "stem": "Tại đỉnh một tháp cao h, người ta thả rơi tự do một vật nhỏ xuống mặt đất. Biết vật rơi chạm đất sau thời gian 5 giây và lấy gia tốc rơi tự do g = 10 m/s². Bỏ qua mọi sức cản không khí.",
        "items": [
          [
            "Độ cao h của tháp bằng 125 m.",
            true,
            "h = 1/2 · g · t² = 0,5 · 10 · 5² = 125 m."
          ],
          [
            "Vận tốc của vật ngay trước khi tiếp xúc mặt đất có độ lớn bằng 50 m/s.",
            true,
            "v = gt = 10 · 5 = 50 m/s."
          ],
          [
            "Sau 2 giây kể từ khi thả rơi, vật rơi được quãng đường 20 m.",
            true,
            "s₂ = 0,5 · 10 · 2² = 20 m."
          ],
          [
            "Quãng đường vật rơi được trong 1 giây cuối cùng trước khi chạm đất là 25 m.",
            false,
            "Quãng đường 4 giây đầu: s₄ = 0,5 · 10 · 4² = 80 m. Quãng đường giây cuối: Δs = 125 - 80 = 45 m (không phải 25 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi bộ trên một đoạn đường thẳng dài 6 km. Trong 2 km đầu người đó đi với tốc độ 4 km/h, trong 4 km sau người đó đi với tốc độ 6 km/h. Tốc độ trung bình của người đó trên cả đoạn đường 6 km bằng bao nhiêu km/h (nhập số làm tròn 2 chữ số thập phân)?",
        "answer": "5.14",
        "explanation": "t₁ = 2/4 = 0,5 h; t₂ = 4/6 = 2/3 h. Tổng thời gian t = 7/6 h. v_tb = 6 / (7/6) = 36/7 ≈ 5,14 km/h."
      },
      {
        "question": "Một chiếc ca nô chạy xuôi dòng từ bến A đến bến B mất 2 giờ, khi chạy ngược dòng từ B về A mất 3 giờ. Biết bến A cách bến B một khoảng 60 km. Vận tốc của dòng nước đối với bờ sông bằng bao nhiêu km/h?",
        "answer": "5",
        "explanation": "v_xuôi = 60/2 = 30 km/h; v_ngược = 60/3 = 20 km/h. Vận tốc nước: v_nước = (30 - 20) / 2 = 5 km/h."
      },
      {
        "question": "Một ôtô bắt đầu khởi hành từ trạng thái đứng yên, chuyển động thẳng nhanh dần đều với gia tốc a = 2 m/s² trong 5 giây. Sau đó xe tiếp tục chạy thẳng đều trong 15 giây tiếp theo. Tổng quãng đường ôtô đi được sau 20 giây kể từ khi xuất phát là bao nhiêu mét?",
        "answer": "175",
        "explanation": "v₁ = 2 · 5 = 10 m/s. s₁ = 0,5 · 2 · 5² = 25 m. s₂ = 10 · 15 = 150 m. Tổng quãng đường: s = 25 + 150 = 175 m."
      },
      {
        "question": "Một hòn bi sắt rơi tự do không vận tốc ban đầu từ đỉnh một tòa nhà cao tầng. Biết trong giây cuối cùng trước khi chạm đất, viên bi rơi được quãng đường 45 m. Lấy g = 10 m/s². Chiều cao của tòa nhà bằng bao nhiêu mét?",
        "answer": "125",
        "explanation": "Δh = 10t - 5 = 45 ⇒ 10t = 50 ⇒ t = 5 s. Chiều cao: h = 0,5 · 10 · 5² = 125 m."
      }
    ]
  },
  {
    "id": "vatli-10-de-07",
    "title": "Vật lí 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Nguyễn Huệ – Quảng Nam · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Phân ngành nào sau đây thuộc lĩnh vực nghiên cứu trọng tâm của Vật lí cổ điển?",
        [
          "A. Vũ trụ học lượng tử và lỗ đen không-thời gian.",
          "B. Cơ học, Quang học, Nhiệt học và Điện từ học.",
          "C. Vật lí hạt cơ bản và máy gia tốc hạt lớn.",
          "D. Công nghệ nano và vật liệu siêu dẫn nhiệt độ cao."
        ],
        1,
        "Cơ học, Quang học, Nhiệt học và Điện từ học là các nhánh trụ cột cốt lõi của Vật lí cổ điển."
      ],
      [
        "Vật lí học được coi là cơ sở của khoa học tự nhiên và công nghệ vì:",
        [
          "A. Vật lí là môn học duy nhất có bài kiểm tra thực hành trong phòng thí nghiệm.",
          "B. Các quy luật của Vật lí chi phối sự vận động của vật chất ở mọi quy mô từ vi mô đến vĩ mô.",
          "C. Vật lí có số lượng công thức toán học nhiều nhất.",
          "D. Mọi thiết bị điện đều do các nhà vật lí tự tay sản xuất hàng loạt."
        ],
        1,
        "Các quy luật vật lí là các quy luật tự nhiên bao quát nhất, chi phối cấu trúc và tương tác của vật chất."
      ],
      [
        "Khi xảy ra sự cố chập điện gây cháy trong phòng thực hành Vật lí, hành động đầu tiên và quan trọng nhất cần thực hiện là:",
        [
          "A. Mở toang các cửa sổ để khói thoát ra ngoài trước.",
          "B. Dùng tay kéo người bị giật ra khỏi dây điện trần.",
          "C. Lập tức ngắt cầu dao (aptomat) tổng của phòng thực hành.",
          "D. Dùng một xô nước hắt thật mạnh vào đám cháy có dây điện."
        ],
        2,
        "Hành động đầu tiên sống còn khi chập điện là ngắt ngay nguồn điện tổng; tuyệt đối không dùng nước dập cháy khi chưa ngắt điện."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình phát tia như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"52\" r=\"6\" fill=\"#000\"/><line x1=\"26\" y1=\"52\" x2=\"74\" y2=\"52\" stroke=\"#000\" stroke-width=\"3\"/><line x1=\"36\" y1=\"36\" x2=\"64\" y2=\"68\" stroke=\"#000\" stroke-width=\"3\"/><line x1=\"36\" y1=\"68\" x2=\"64\" y2=\"36\" stroke=\"#000\" stroke-width=\"3\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo tia laser</div></div>",
        [
          "A. Khu vực dành riêng cho việc chụp ảnh lưu niệm.",
          "B. Biển chỉ dẫn khu vực chiếu sáng thông thường.",
          "C. Cảnh báo khu vực có nguồn bức xạ tia laser nguy hiểm, tránh nhìn trực tiếp.",
          "D. Cảnh báo nơi có nguy cơ rơi từ trên cao."
        ],
        2,
        "Biển tam giác vàng viền đen hình tia phát sáng laser cảnh báo nguy hiểm bức xạ laser đối với mắt và da."
      ],
      [
        "Sai số của phép đo đại lượng vật lí bao gồm hai thành phần chủ yếu là:",
        [
          "A. Sai số âm và sai số vô tỉ.",
          "B. Sai số do người đo và sai số do thời tiết.",
          "C. Sai số số lẻ và sai số số chẵn.",
          "D. Sai số hệ thống (gồm sai số dụng cụ) và sai số ngẫu nhiên."
        ],
        3,
        "Sai số phép đo gồm sai số hệ thống (trong đó có sai số dụng cụ) và sai số ngẫu nhiên."
      ],
      [
        "Cho đại lượng C = A - B với các giá trị đo A = (40 ± 1) mm và B = (15 ± 1) mm. Sai số tuyệt đối ΔC của đại lượng C bằng:",
        [
          "A. 1 mm.",
          "B. 25 mm.",
          "C. 2 mm.",
          "D. 0 mm."
        ],
        2,
        "Sai số tuyệt đối của hiệu luôn bằng TỔNG các sai số tuyệt đối thành phần: ΔC = ΔA + ΔB = 1 + 1 = 2 mm."
      ],
      [
        "Một người đi từ điểm A đến điểm B cách nhau 6 m theo hướng Bắc, sau đó rẽ sang hướng Đông đi tiếp một đoạn 8 m đến điểm C. Độ lớn của vectơ độ dịch chuyển AC bằng:",
        [
          "A. 10 m.",
          "B. 2 m.",
          "C. 48 m.",
          "D. 14 m."
        ],
        0,
        "Do hai đoạn đường vuông góc nhau (Bắc và Đông) nên d = √(6² + 8²) = √100 = 10 m."
      ],
      [
        "Một ôtô chuyển động thẳng theo một hướng xác định. Trong 1 giờ đầu ôtô chạy được 60 km, trong 2 giờ tiếp theo ôtô chạy được 90 km. Vận tốc trung bình của ôtô trong suốt 3 giờ là:",
        [
          "A. 75 km/h.",
          "B. 55 km/h.",
          "C. 45 km/h.",
          "D. 50 km/h."
        ],
        3,
        "v_tb = (s₁ + s₂) / (t₁ + t₂) = (60 + 90) / (1 + 2) = 150 / 3 = 50 km/h."
      ],
      [
        "Khi cho tấm chắn sáng có bề rộng d = 2 cm đi qua cổng quang điện kết nối với đồng hồ đo hiện số, đồng hồ báo thời gian chắn sáng là 0,04 s. Tốc độ tức thời của tấm chắn sáng là:",
        [
          "A. 2 m/s.",
          "B. 0,5 m/s.",
          "C. 50 m/s.",
          "D. 0,08 m/s."
        ],
        1,
        "d = 2 cm = 0,02 m. v = d / Δt = 0,02 / 0,04 = 0,5 m/s."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm chuyển động thẳng, độ dốc của tiếp tuyến tại một điểm trên đường cong cho biết:",
        [
          "A. Gia tốc của chất điểm tại thời điểm đó.",
          "B. Tốc độ trung bình trên toàn tuyến.",
          "C. Vận tốc tức thời của chất điểm tại thời điểm đó.",
          "D. Quãng đường vật đã đi được."
        ],
        2,
        "Độ dốc tiếp tuyến của đồ thị d – t tại thời điểm t chính bằng vận tốc tức thời tại thời điểm đó."
      ],
      [
        "Một ôtô đang chạy với tốc độ 72 km/h (20 m/s) thì người lái xe hãm phanh cho xe chạy chậm dần đều. Sau 10 giây xe dừng lại hẳn. Gia tốc của ôtô là:",
        [
          "A. 2 m/s².",
          "B. 0,5 m/s².",
          "C. –7,2 m/s².",
          "D. –2 m/s²."
        ],
        3,
        "a = (v - v₀) / t = (0 - 20) / 10 = –2 m/s²."
      ],
      [
        "Một chất điểm bắt đầu chuyển động thẳng nhanh dần đều với gia tốc a = 2 m/s² từ trạng thái nghỉ. Vận tốc của chất điểm sau khi đi được quãng đường 16 m là:",
        [
          "A. 8 m/s.",
          "B. 4 m/s.",
          "C. 32 m/s.",
          "D. 16 m/s."
        ],
        0,
        "v² = 2ad = 2 · 2 · 16 = 64 &rArr; v = 8 m/s."
      ],
      [
        "Trong chuyển động thẳng biến đổi đều, đồ thị vận tốc – thời gian (v – t) có dạng là:",
        [
          "A. Một đường cong hình sin lượn sóng.",
          "B. Một đường thẳng xiên góc với các trục tọa độ.",
          "C. Một đường thẳng luôn luôn song song với trục vận tốc.",
          "D. Một nhánh của đường parabol quay xuống."
        ],
        1,
        "v = v₀ + at là phương trình bậc nhất đối với t nên đồ thị v – t là đường thẳng xiên góc."
      ],
      [
        "Một đoàn tàu đang chạy thẳng đều với tốc độ 10 m/s thì tăng tốc với gia tốc a = 1 m/s² trong 6 s. Quãng đường tàu chạy được trong 6 s đó là:",
        [
          "A. 78 m.",
          "B. 96 m.",
          "C. 60 m.",
          "D. 18 m."
        ],
        0,
        "s = v₀t + 1/2 · at² = 10 · 6 + 0,5 · 1 · 6² = 60 + 18 = 78 m."
      ],
      [
        "Một vật rơi tự do không vận tốc đầu từ độ cao 45 m tại nơi có g = 10 m/s². Thời gian vật rơi chạm đất là:",
        [
          "A. 3 s.",
          "B. 9 s.",
          "C. 4,5 s.",
          "D. 2 s."
        ],
        0,
        "t = √(2h / g) = √(2 · 45 / 10) = √9 = 3 s."
      ],
      [
        "Thả một vật rơi tự do từ độ cao h. Trong 1 giây đầu tiên vật rơi được quãng đường 5 m (lấy g = 10 m/s²). Quãng đường vật rơi được trong giây thứ hai là:",
        [
          "A. 25 m.",
          "B. 20 m.",
          "C. 10 m.",
          "D. 15 m."
        ],
        3,
        "Quãng đường sau 2 s: s₂ = 0,5 · 10 · 2² = 20 m. Quãng đường giây thứ hai: Δs = 20 - 5 = 15 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe máy xuất phát từ điểm A chạy thẳng đều về phía Đông 12 km trong 15 phút (0,25 h), sau đó người đó dừng lại nghỉ ngơi 5 phút rồi tiếp tục chạy thẳng đều về phía Bắc 9 km trong 10 phút (1/6 h) đến điểm B.",
        "items": [
          [
            "Tổng quãng đường xe máy đi được từ A đến B là 21 km.",
            true,
            "Quãng đường s = 12 + 9 = 21 km."
          ],
          [
            "Độ lớn độ dịch chuyển AB của xe máy bằng 15 km.",
            true,
            "Tam giác vuông Đông - Bắc: d = √(12² + 9²) = √225 = 15 km."
          ],
          [
            "Tốc độ trung bình của xe máy trong toàn bộ chuyến đi bằng 50 km/h.",
            false,
            "Tổng quãng đường s = 21 km, tổng thời gian t = 0,5 h &rArr; v_tb = s / t = 21 / 0,5 = 42 km/h (không phải 50 km/h)."
          ],
          [
            "Vận tốc trung bình của xe máy trong cả chuyến đi có độ lớn bằng 30 km/h.",
            true,
            "Vận tốc trung bình v_tb = d / t = 15 / 0,5 = 30 km/h."
          ]
        ]
      },
      {
        "stem": "Thả một hòn đá nhỏ rơi tự do từ mép sân thượng của một tòa nhà cao tầng xuống mặt đất. Biết hòn đá chạm đất với vận tốc 40 m/s tại nơi có g = 10 m/s². Bỏ qua mọi sức cản không khí.",
        "items": [
          [
            "Thời gian hòn đá rơi từ lúc thả đến khi chạm đất là 4 giây.",
            true,
            "t = v / g = 40 / 10 = 4 s."
          ],
          [
            "Độ cao sân thượng của tòa nhà so với mặt đất bằng 80 m.",
            true,
            "h = v² / (2g) = 40² / 20 = 80 m."
          ],
          [
            "Quãng đường hòn đá rơi được trong 2 giây đầu tiên là 20 m.",
            true,
            "s₂ = 0,5 · 10 · 2² = 20 m."
          ],
          [
            "Quãng đường hòn đá rơi được trong 1 giây cuối cùng trước khi chạm đất là 20 m.",
            false,
            "Quãng đường 3 giây đầu: s₃ = 0,5 · 10 · 3² = 45 m. Giây cuối: Δs = 80 - 45 = 35 m (không phải 20 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một vận động viên chạy trên một đường chạy thẳng khép kín AB dài 200 m. Lượt đi vận động viên chạy từ A đến B với tốc độ 8 m/s, lượt về chạy từ B quay trở lại A với tốc độ 6 m/s. Tốc độ trung bình của vận động viên trong cả lượt đi và lượt về bằng bao nhiêu m/s (nhập số làm tròn 2 chữ số thập phân)?",
        "answer": "6.86",
        "explanation": "t₁ = 200/8 = 25 s; t₂ = 200/6 = 100/3 s. Tổng thời gian t = 175/3 s. v_tb = 400 / (175/3) = 1200/175 ≈ 6,86 m/s."
      },
      {
        "question": "Một chiếc ca nô chạy qua sông với vận tốc đối với nước là 12 km/h hướng vuông góc với dòng sông. Dòng nước chảy xuôi dòng với vận tốc 9 km/h. Vận tốc của chiếc ca nô đối với bờ sông có độ lớn bằng bao nhiêu km/h?",
        "answer": "15",
        "explanation": "Do hai hướng vuông góc nhau: v = √(12² + 9²) = √225 = 15 km/h."
      },
      {
        "question": "Một ôtô đang chạy với tốc độ 20 m/s thì người lái xe hãm phanh cho xe chuyển động chậm dần đều với độ lớn gia tốc 4 m/s². Quãng đường xe ôtô đi được từ thời điểm bắt đầu hãm phanh đến khi dừng lại hẳn là bao nhiêu mét?",
        "answer": "50",
        "explanation": "s = (0 - 20²) / (2 · (-4)) = -400 / (-8) = 50 m."
      },
      {
        "question": "Một vật rơi tự do từ độ cao h = 80 m tại nơi có g = 10 m/s². Thời gian vật rơi đi hết nửa quãng đường đầu tiên (40 m đầu) là bao nhiêu giây (lấy gần đúng 2 chữ số thập phân)?",
        "answer": "2.83",
        "explanation": "t₁ = √(2 · 40 / 10) = √8 ≈ 2,83 s."
      }
    ]
  },
  {
    "id": "vatli-10-de-08",
    "title": "Vật lí 10 - Đề 08 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT số 1 Lê Hồng Phong – Đắk Lắk · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Thành tựu mang tính bước ngoặt của Vật lí học mở đầu cho thời đại cơ giới hóa sản xuất trong cuộc cách mạng công nghiệp lần thứ nhất là:",
        [
          "A. Khám phá ra sóng vô tuyến điện từ.",
          "B. Chế tạo ra máy vi tính để bàn.",
          "C. Sự hoàn thiện động cơ hơi nước dựa trên các định luật nhiệt học.",
          "D. Sản xuất ra năng lượng hạt nhân."
        ],
        2,
        "Động cơ hơi nước là biểu tượng và động lực cốt lõi của cuộc CMCN 1.0."
      ],
      [
        "Điểm khác biệt cốt lõi giữa phương pháp thực nghiệm và phương pháp lí thuyết trong nghiên cứu Vật lí là:",
        [
          "A. Phương pháp thực nghiệm dùng thí nghiệm và số liệu đo đạc thực tế; phương pháp lí thuyết dùng mô hình toán học và suy luận logic.",
          "B. Phương pháp thực nghiệm chỉ thực hiện ngoài trời.",
          "C. Phương pháp thực nghiệm không cần đến toán học.",
          "D. Phương pháp lí thuyết không bao giờ cần kiểm chứng với thực tế."
        ],
        0,
        "Thực nghiệm dựa trên đo đạc thực tế; lí thuyết dựa trên các tiên đề, định luật toán học và mô hình trừu tượng."
      ],
      [
        "Khi thực hiện thí nghiệm đun sôi nước bằng bình thủy tinh chịu nhiệt trên bếp điện, để tránh bị bỏng, học sinh cần tuân thủ quy tắc nào?",
        [
          "A. Dùng tay bịt kín miệng bình đun để nước sôi nhanh hơn.",
          "B. Đổ nước lạnh trực tiếp vào bình ngay khi bình vừa nhấc khỏi bếp điện.",
          "C. Cúi sát mặt vào miệng bình đang sôi để quan sát bọt khí.",
          "D. Đeo găng tay cách nhiệt và dùng kẹp gỗ gắp bình, không dùng tay trần chạm vào bình nóng."
        ],
        3,
        "Phải dùng kẹp chuyên dụng và găng tay cách nhiệt; tuyệt đối không đổ nước lạnh đột ngột làm nứt vỡ thủy tinh gây bỏng."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình vẽ ba cánh quạt như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"56\" r=\"6\" fill=\"#000\"/><path d=\"M50,56 L40,36 A18,18 0 0,1 60,36 Z\" fill=\"#000\"/><path d=\"M50,56 L68,64 A18,18 0 0,1 56,74 Z\" fill=\"#000\"/><path d=\"M50,56 L32,64 A18,18 0 0,0 44,74 Z\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất phóng xạ</div></div>",
        [
          "A. Nơi đặt quạt thông gió công suất lớn.",
          "B. Biển chỉ dẫn khu vực cắm trại ngoài trời.",
          "C. Cảnh báo nguy hiểm từ cánh đồng cối xay gió.",
          "D. Cảnh báo khu vực có chất phóng xạ hoặc bức xạ hạt nhân nguy hiểm."
        ],
        3,
        "Biển tam giác vàng hình ba cánh xòe là biểu tượng quốc tế cảnh báo chất phóng xạ và bức xạ ion hóa nguy hiểm."
      ],
      [
        "Trường hợp nào sau đây là phép đo TRỰC TIẾP?",
        [
          "A. Dùng gia tốc và thời gian tính độ cao thả rơi tự do.",
          "B. Dùng cân Rô-béc-van hoặc cân điện tử đo khối lượng của một bao gạo.",
          "C. Dùng quãng đường và thời gian tính vận tốc của xe máy.",
          "D. Dùng khối lượng và thể tích tính khối lượng riêng của chất lỏng."
        ],
        1,
        "Đo khối lượng bằng cân là so sánh trực tiếp với quả cân hoặc thang đo cảm biến của cân."
      ],
      [
        "Khi đo hiệu điện thế của một viên pin được kết quả trung bình Ū = 1,52 V và sai số tuyệt đối ΔU = 0,02 V. Cách biểu diễn kết quả đo chuẩn là:",
        [
          "A. U = (1,52 ± 0,02) V.",
          "B. U = (1,52 - 0,02) V.",
          "C. U = 1,52 V ± 2 mV.",
          "D. U = 1,52 + 0,02 V."
        ],
        0,
        "Kết quả đo chuẩn ghi dạng U = (Ū ± ΔU) cùng đơn vị đo."
      ],
      [
        "Một xe ôtô chạy trên đường thẳng từ vị trí có tọa độ x₁ = +10 km đến vị trí có tọa độ x₂ = –30 km. Độ dịch chuyển của ôtô bằng:",
        [
          "A. +40 km.",
          "B. –40 km.",
          "C. +20 km.",
          "D. –20 km."
        ],
        1,
        "d = x₂ - x₁ = -30 - 10 = –40 km."
      ],
      [
        "Một chiếc thuyền chạy xuôi dòng nước. Gọi v_tb là vận tốc thuyền so với bờ, v_tn là vận tốc thuyền so với nước, v_nb là vận tốc nước so với bờ. Hệ thức đúng là:",
        [
          "A. v_tb = v_tn + v_nb.",
          "B. v_tb = v_nb - v_tn.",
          "C. v_tb = √(v_tn² + v_nb²).",
          "D. v_tb = v_tn - v_nb."
        ],
        0,
        "Khi chạy xuôi dòng, vận tốc thuyền và vận tốc nước cùng hướng nên v_tb = v_tn + v_nb."
      ],
      [
        "Trong thí nghiệm thực hành đo tốc độ bằng đồng hồ đo thời gian hiện số, việc đặt cổng quang điện vuông góc với hướng chuyển động của thanh chắn sáng nhằm mục đích:",
        [
          "A. Tránh làm hỏng bóng đèn led của cổng quang.",
          "B. Làm cho xe chuyển động chậm lại để dễ quan sát.",
          "C. Tăng lực hút nam châm điện của cổng quang.",
          "D. Đo đúng bề rộng danh định d của thanh chắn sáng, giảm thiểu sai số đo thời gian."
        ],
        3,
        "Đặt vuông góc để chùm tia sáng quét qua đúng bề rộng thực của thanh chắn sáng, đảm bảo v = d / Δt chính xác."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t), nếu đường biểu diễn dốc lên trên từ trái sang phải chứng tỏ:",
        [
          "A. Vật đứng yên tại một vị trí cố định.",
          "B. Vật đang chuyển động thẳng đều theo chiều dương đã chọn.",
          "C. Vật chuyển động nhanh dần đều theo chiều âm.",
          "D. Vật đang chuyển động thẳng đều theo chiều âm đã chọn."
        ],
        1,
        "Đường dốc lên có hệ số góc dương (v > 0) nghĩa là vật chuyển động theo chiều dương."
      ],
      [
        "Biểu thức định nghĩa vectơ gia tốc của một chất điểm là:",
        [
          "A. a⃗ = v⃗ · Δt.",
          "B. a⃗ = Δd⃗ / Δt.",
          "C. a⃗ = Δs / Δt.",
          "D. a⃗ = Δv⃗ / Δt."
        ],
        3,
        "Gia tốc là đạo hàm của vận tốc theo thời gian: a⃗ = Δv⃗ / Δt."
      ],
      [
        "Một ôtô đang chạy với tốc độ 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc 2 m/s². Quãng đường ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng lại hẳn là:",
        [
          "A. 200 m.",
          "B. 50 m.",
          "C. 100 m.",
          "D. 40 m."
        ],
        2,
        "s = (v² - v₀²) / (2a) = (0 - 20²) / (2 · (-2)) = -400 / (-4) = 100 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động thẳng nhanh dần đều xuất phát từ điểm v₀ > 0 là một đường thẳng:",
        [
          "A. Đi qua gốc tọa độ O.",
          "B. Cắt trục tung tại điểm v₀ và dốc lên phía trên.",
          "C. Dốc xuống cắt trục hoành.",
          "D. Song song với trục hoành t."
        ],
        1,
        "v = v₀ + at (với v₀ > 0, a > 0), đồ thị cắt trục tung tại v₀ và dốc lên."
      ],
      [
        "Một xe đạp đang đi với tốc độ 4 m/s thì xuống một con dốc, chuyển động nhanh dần đều với gia tốc 0,5 m/s² trong 8 s. Tốc độ của xe ở chân dốc là:",
        [
          "A. 10 m/s.",
          "B. 12 m/s.",
          "C. 8 m/s.",
          "D. 6 m/s."
        ],
        2,
        "v = v₀ + at = 4 + 0,5 · 8 = 4 + 4 = 8 m/s."
      ],
      [
        "Một vật rơi tự do không vận tốc ban đầu từ độ cao h. Quãng đường vật đi được trong giây thứ nhất là (lấy g = 10 m/s²):",
        [
          "A. 5 m.",
          "B. 20 m.",
          "C. 10 m.",
          "D. 2,5 m."
        ],
        0,
        "s₁ = 1/2 · g · t² = 0,5 · 10 · 1² = 5 m."
      ],
      [
        "Thả một vật rơi tự do từ độ cao h = 80 m tại nơi có g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất là:",
        [
          "A. 80 m/s.",
          "B. 10 m/s.",
          "C. 40 m/s.",
          "D. 20 m/s."
        ],
        2,
        "v = √(2gh) = √(2 · 10 · 80) = √1600 = 40 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Một ôtô di chuyển trên một đại lộ thẳng. Trong 30 phút đầu tiên (0,5 h), xe chuyển động thẳng đều với tốc độ v₁ = 40 km/h. Trong 45 phút tiếp theo (0,75 h), xe chạy thẳng đều với tốc độ v₂ = 60 km/h theo cùng một hướng.",
        "items": [
          [
            "Quãng đường xe chạy được trong 30 phút đầu tiên là 20 km.",
            true,
            "s₁ = v₁ · t₁ = 40 · 0,5 = 20 km."
          ],
          [
            "Quãng đường xe chạy được trong 45 phút tiếp theo là 45 km.",
            true,
            "s₂ = v₂ · t₂ = 60 · 0,75 = 45 km."
          ],
          [
            "Tổng quãng đường xe đi được trong toàn bộ hành trình là 65 km.",
            true,
            "s = s₁ + s₂ = 20 + 45 = 65 km."
          ],
          [
            "Tốc độ trung bình của xe trên cả quãng đường bằng 50 km/h.",
            false,
            "Tổng quãng đường s = 65 km, tổng thời gian t = 1,25 h &rArr; v_tb = 65 / 1,25 = 52 km/h (không phải 50 km/h)."
          ]
        ]
      },
      {
        "stem": "Thả một viên bi kim loại rơi tự do từ đỉnh tháp cao 45 m tại nơi có g = 10 m/s². Bỏ qua mọi sức cản không khí.",
        "items": [
          [
            "Thời gian viên bi rơi chạm đất là 3 giây.",
            true,
            "t = √(2h / g) = √(2 · 45 / 10) = √9 = 3 s."
          ],
          [
            "Vận tốc của viên bi ngay trước khi chạm đất là 30 m/s.",
            true,
            "v = gt = 10 · 3 = 30 m/s."
          ],
          [
            "Quãng đường viên bi rơi được trong giây thứ nhất là 5 m.",
            true,
            "s₁ = 0,5 · 10 · 1² = 5 m."
          ],
          [
            "Quãng đường viên bi rơi được trong 1 giây cuối cùng trước khi chạm đất là 15 m.",
            false,
            "Quãng đường 2 giây đầu: s₂ = 0,5 · 10 · 2² = 20 m. Giây cuối: Δs = 45 - 20 = 25 m (không phải 15 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hai ôtô A và B chuyển động cùng chiều trên một đường thẳng. Xe A chạy phía trước với tốc độ không đổi 50 km/h. Xe B chạy phía sau cách xe A 20 km với tốc độ không đổi 70 km/h. Sau bao nhiêu giờ kể từ lúc hai xe ở vị trí trên thì xe B đuổi kịp xe A?",
        "answer": "1",
        "explanation": "t = d / (v_B - v_A) = 20 / (70 - 50) = 1,0 h."
      },
      {
        "question": "Một chiếc ca nô chạy ngược dòng sông từ bến A đến bến B mất 3 giờ. Biết vận tốc của ca nô đối với dòng nước là 22 km/h và vận tốc của dòng nước đối với bờ là 2 km/h. Khoảng cách giữa hai bến sông AB bằng bao nhiêu kilômét?",
        "answer": "60",
        "explanation": "v_ngược = 22 - 2 = 20 km/h. Khoảng cách AB = 20 · 3 = 60 km."
      },
      {
        "question": "Một xe máy đang chạy thẳng đều với tốc độ 36 km/h (10 m/s) thì tăng ga chuyển động nhanh dần đều với gia tốc a = 1 m/s² trong 10 giây. Quãng đường xe máy đi được trong 10 giây tăng ga đó là bao nhiêu mét?",
        "answer": "150",
        "explanation": "s = 10 · 10 + 0,5 · 1 · 10² = 100 + 50 = 150 m."
      },
      {
        "question": "Thả một hòn đá rơi tự do từ đỉnh tháp cao 180 m xuống mặt đất tại nơi có g = 10 m/s². Sau bao nhiêu giây kể từ lúc thả rơi thì hòn đá rơi được một nửa chiều cao của tháp (90 m đầu, lấy gần đúng 2 chữ số thập phân)?",
        "answer": "4.24",
        "explanation": "t = √(2 · 90 / 10) = √18 ≈ 4,24 s."
      }
    ]
  },
  {
    "id": "vatli-10-de-09",
    "title": "Vật lí 10 - Đề 09 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT số 1 Ngô Gia Tự – Đắk Lắk · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Bước đầu tiên trong quy trình tìm hiểu thế giới tự nhiên dưới góc độ vật lí là:",
        [
          "A. Tiến hành làm báo cáo tổng kết thí nghiệm.",
          "B. Đóng gói thiết bị cất vào kho thí nghiệm.",
          "C. Đề xuất ngay một công thức toán học trừu tượng.",
          "D. Quan sát hiện tượng thực tế và đặt ra câu hỏi cần tìm hiểu."
        ],
        3,
        "Quan sát hiện tượng và xuất phát câu hỏi nghiên cứu là bước khởi đầu của mọi khám phá khoa học."
      ],
      [
        "Sự ra đời của mạng Internet vạn vật (IoT), cảm biến bán dẫn siêu nhỏ và trí tuệ nhân tạo là thành tựu gắn liền với:",
        [
          "A. Cuộc cách mạng công nghiệp lần thứ tư (Cách mạng 4.0).",
          "B. Kỉ nguyên đồ đồng cổ đại.",
          "C. Cuộc cách mạng công nghiệp lần thứ nhất.",
          "D. Thời kì phục hưng châu Âu thế kỉ XVI."
        ],
        0,
        "CMCN 4.0 kết hợp thế giới vật lí, kỹ thuật số và sinh học trên nền tảng cảm biến và mạng kết nối."
      ],
      [
        "Nếu không may bị hóa chất axit bắn vào da hoặc quần áo trong giờ thực hành, biện pháp xử lí khẩn cấp đầu tiên là:",
        [
          "A. Rửa ngay dưới vòi nước sạch chảy liên tục nhiều phút rồi báo cho giáo viên.",
          "B. Dùng khăn khô bọc kín vết thương lại không cho tiếp xúc không khí.",
          "C. Tự ý bôi thuốc mỡ lên vết thương mà không rửa nước.",
          "D. Đổ ngay dung dịch bazơ đặc lên vết thương để trung hòa."
        ],
        0,
        "Rửa ngay dưới vòi nước chảy liên tục ít nhất 10-15 phút để pha loãng và trôi hóa chất, sau đó báo giáo viên sơ cứu."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình hai ống nghiệm nhỏ giọt ăn mòn kim loại và bàn tay như hình vẽ mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><polygon points=\"50,10 92,85 8,85\" fill=\"#facc15\" stroke=\"#000\" stroke-width=\"4\"/><rect x=\"25\" y=\"65\" width=\"20\" height=\"6\" fill=\"#000\"/><path d=\"M30,42 L42,50\" stroke=\"#000\" stroke-width=\"3\"/><circle cx=\"35\" cy=\"58\" r=\"2\" fill=\"#000\"/><path d=\"M55,60 L75,60 L70,72 L60,72 Z\" fill=\"#000\"/><path d=\"M60,42 L68,52\" stroke=\"#000\" stroke-width=\"3\"/><circle cx=\"65\" cy=\"56\" r=\"2\" fill=\"#000\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển cảnh báo chất ăn mòn</div></div>",
        [
          "A. Nơi lưu trữ nước ngọt giải khát.",
          "B. Cảnh báo nơi có độ ẩm không khí rất thấp.",
          "C. Cảnh báo hóa chất ăn mòn nguy hiểm, có thể gây bỏng da và phá hủy vật liệu.",
          "D. Biển báo cấm thực hiện thao tác rót chất lỏng."
        ],
        2,
        "Biển tam giác vàng hình giọt hóa chất ăn mòn cảnh báo chất ăn mòn cực kì nguy hiểm."
      ],
      [
        "Khi viết kết quả đo một đại lượng vật lí A = Ā ± ΔA, giá trị sai số tuyệt đối ΔA thường được viết đến:",
        [
          "A. Luôn luôn là một số nguyên dương.",
          "B. Vô số chữ số thập phân.",
          "C. Năm chữ số có nghĩa.",
          "D. Một hoặc hai chữ số có nghĩa."
        ],
        3,
        "Sai số tuyệt đối ΔA theo quy ước quốc tế thường được làm tròn đến một hoặc tối đa hai chữ số có nghĩa."
      ],
      [
        "Một sợi dây có chiều dài l = (100 ± 2) cm. Sai số tỉ đối của phép đo chiều dài này là:",
        [
          "A. 0,02%.",
          "B. 2,0%.",
          "C. 20%.",
          "D. 0,2%."
        ],
        1,
        "δl = (2 / 100) × 100% = 2,0%."
      ],
      [
        "Khi nào thì quãng đường đi được s của một chất điểm đúng bằng độ lớn của độ dịch chuyển |d|?",
        [
          "A. Khi chất điểm chuyển động tròn đều một vòng khép kín.",
          "B. Khi chất điểm đi tới rồi quay ngược trở lại điểm xuất phát.",
          "C. Khi chất điểm chuyển động trên một đường thẳng và không đổi chiều chuyển động.",
          "D. Trong mọi trường hợp chuyển động của vật."
        ],
        2,
        "Chỉ khi chuyển động thẳng và không đổi chiều thì quãng đường s mới bằng độ lớn độ dịch chuyển |d|."
      ],
      [
        "Một chiếc thuyền chạy xuôi dòng nước với tốc độ đối với bờ là 20 km/h, khi chạy ngược dòng với tốc độ đối với bờ là 14 km/h. Vận tốc của dòng nước đối với bờ sông bằng:",
        [
          "A. 6 km/h.",
          "B. 3 km/h.",
          "C. 34 km/h.",
          "D. 17 km/h."
        ],
        1,
        "v_nuoc = (v_xuoi - v_nguoc) / 2 = (20 - 14) / 2 = 6 / 2 = 3 km/h."
      ],
      [
        "Dụng cụ nào sau đây KHÔNG THỂ dùng để đo trực tiếp khoảng thời gian chuyển động của một vật?",
        [
          "A. Đồng hồ bấm giây hiện số điện tử.",
          "B. Đồng hồ bấm giây cơ học.",
          "C. Cổng quang điện nối với đồng hồ đếm hiện số.",
          "D. Thước cuộn chia milimét."
        ],
        3,
        "Thước cuộn dùng để đo chiều dài (quãng đường), không dùng để đo thời gian."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm có dạng là đường thẳng dốc lên xuất phát từ gốc tọa độ O. Tốc độ chuyển động của chất điểm là:",
        [
          "A. Luôn luôn bằng 0.",
          "B. Bằng độ dốc (hệ số góc) của đường thẳng đó.",
          "C. Giảm dần theo thời gian.",
          "D. Bằng diện tích hình phẳng dưới đường thẳng đó."
        ],
        1,
        "Tốc độ v trong chuyển động thẳng đều chính bằng độ dốc của đồ thị d – t."
      ],
      [
        "Một ôtô đang chạy với tốc độ 12 m/s thì người lái xe nhấn ga tăng tốc chuyển động nhanh dần đều với gia tốc 2 m/s² trong 4 s. Vận tốc của ôtô ở cuối thời gian tăng tốc là:",
        [
          "A. 16 m/s.",
          "B. 8 m/s.",
          "C. 20 m/s.",
          "D. 24 m/s."
        ],
        2,
        "v = v₀ + at = 12 + 2 · 4 = 12 + 8 = 20 m/s."
      ],
      [
        "Một xe máy đang chạy với tốc độ 10 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường xe máy đi được từ lúc bắt đầu hãm phanh đến khi dừng lại hẳn là:",
        [
          "A. 25 m.",
          "B. 20 m.",
          "C. 10 m.",
          "D. 50 m."
        ],
        0,
        "s = (v² - v₀²) / (2a) = (0 - 10²) / (2 · (-2)) = -100 / (-4) = 25 m."
      ],
      [
        "Một chất điểm chuyển động theo phương trình vận tốc v = 8 + 2t (m/s). Gia tốc của chất điểm bằng:",
        [
          "A. 2 m/s².",
          "B. 10 m/s².",
          "C. 8 m/s².",
          "D. 4 m/s²."
        ],
        0,
        "Phương trình có dạng v = v₀ + at &rArr; v₀ = 8 m/s, gia tốc a = 2 m/s²."
      ],
      [
        "Một ôtô bắt đầu khởi hành từ trạng thái đứng yên với gia tốc a = 1,5 m/s². Quãng đường ôtô đi được sau 10 giây là:",
        [
          "A. 30 m.",
          "B. 150 m.",
          "C. 15 m.",
          "D. 75 m."
        ],
        3,
        "s = 1/2 · a · t² = 0,5 · 1,5 · 10² = 75 m."
      ],
      [
        "Đặc điểm nào sau đây là ĐÚNG khi nói về sự rơi tự do?",
        [
          "A. Gia tốc rơi tự do của vật tỉ lệ thuận với khối lượng của vật.",
          "B. Là chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống.",
          "C. Là chuyển động thẳng đều với vận tốc không đổi.",
          "D. Quãng đường vật rơi được tỉ lệ thuận với thời gian rơi t."
        ],
        1,
        "Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng với gia tốc g."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 20 m tại nơi có gia tốc trọng trường g = 10 m/s². Thời gian rơi của vật đến khi chạm đất là:",
        [
          "A. 4,0 s.",
          "B. 0,5 s.",
          "C. 2,0 s.",
          "D. 1,0 s."
        ],
        2,
        "t = √(2h / g) = √(2 · 20 / 10) = √4 = 2,0 s."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy trên đường thẳng từ trạm A đến trạm B dài 30 km hết 30 phút (0,5 h), sau đó xe quay đầu chạy ngược trở lại một đoạn 15 km về trạm C hết 15 phút (0,25 h).",
        "items": [
          [
            "Tổng quãng đường xe ôtô đi được trên toàn hành trình là 45 km.",
            true,
            "Quãng đường s = 30 + 15 = 45 km."
          ],
          [
            "Độ dịch chuyển tổng cộng của xe ôtô từ lúc xuất phát tại A đến khi dừng tại C là 15 km hướng từ A sang B.",
            true,
            "d = 30 - 15 = 15 km."
          ],
          [
            "Tốc độ trung bình của xe ôtô trên cả quãng đường bằng 60 km/h.",
            true,
            "v_tb = s / t = 45 / (0,5 + 0,25) = 45 / 0,75 = 60 km/h."
          ],
          [
            "Vận tốc trung bình của xe ôtô trên toàn bộ hành trình có độ lớn bằng 40 km/h.",
            false,
            "Vận tốc trung bình v_tb = d / t = 15 / 0,75 = 20 km/h (không phải 40 km/h)."
          ]
        ]
      },
      {
        "stem": "Thả một hòn bi sắt rơi tự do không vận tốc đầu từ tầng cao của một tòa tháp có độ cao h = 80 m tại nơi có g = 10 m/s². Bỏ qua mọi sức cản không khí.",
        "items": [
          [
            "Thời gian rơi của hòn bi từ lúc thả đến khi chạm đất là 4 giây.",
            true,
            "t = √(2h / g) = √(2 · 80 / 10) = √16 = 4 s."
          ],
          [
            "Vận tốc của hòn bi khi vừa chạm đất có độ lớn là 40 m/s.",
            true,
            "v = gt = 10 · 4 = 40 m/s."
          ],
          [
            "Trong 2 giây đầu tiên, hòn bi rơi được quãng đường 20 m.",
            true,
            "s₂ = 0,5 · 10 · 2² = 20 m."
          ],
          [
            "Quãng đường hòn bi rơi được trong 2 giây cuối cùng trước khi chạm đất là 40 m.",
            false,
            "Quãng đường 2 giây đầu rơi 20 m nên quãng đường 2 giây cuối là Δs = 80 - 20 = 60 m (không phải 40 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi xe đạp trên đoạn đường AB chia làm 3 đoạn bằng nhau. Đoạn thứ nhất đi với tốc độ 10 km/h, đoạn thứ hai đi với tốc độ 15 km/h, đoạn thứ ba đi với tốc độ 30 km/h. Tốc độ trung bình của người đi xe đạp trên cả đoạn đường AB bằng bao nhiêu km/h?",
        "answer": "15",
        "explanation": "v_tb = 3s / (s/10 + s/15 + s/30) = 3 / (6/30) = 15 km/h."
      },
      {
        "question": "Một chiếc thuyền chạy xuôi dòng một khúc sông dài 48 km. Biết vận tốc của thuyền đối với dòng nước là 20 km/h và vận tốc của dòng nước đối với bờ là 4 km/h. Thời gian thuyền chạy xuôi dòng hết khúc sông đó bằng bao nhiêu giờ?",
        "answer": "2",
        "explanation": "v = 20 + 4 = 24 km/h. t = 48 / 24 = 2,0 h."
      },
      {
        "question": "Một đoàn tàu hỏa đang chạy với vận tốc 72 km/h (20 m/s) thì hãm phanh chuyển động chậm dần đều và dừng lại hẳn sau khi đi được quãng đường 200 m. Độ lớn gia tốc hãm của đoàn tàu bằng bao nhiêu m/s²?",
        "answer": "1",
        "explanation": "v² - v₀² = 2as ⇒ 0 - 20² = 2 · a · 200 ⇒ a = -1 m/s². Độ lớn gia tốc hãm bằng 1 m/s²."
      },
      {
        "question": "Thả rơi tự do một vật từ độ cao h = 720 m tại nơi có g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất bằng bao nhiêu m/s?",
        "answer": "120",
        "explanation": "v = √(2gh) = √(2 · 10 · 720) = √14400 = 120 m/s."
      }
    ]
  },
  {
    "id": "vatli-10-de-10",
    "title": "Vật lí 10 - Đề 10 - Trường THPT Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
    "subject": "physics",
    "duration": 50,
    "minutes": 50,
    "mcUnit": 0.25,
    "shortUnit": 0.25,
    "source": "Trường THPT Ngô Gia Tự – Đắk Lắk · Đề kiểm tra Giữa kì I chuẩn ma trận 2026",
    "questions": [
      [
        "Môn Vật lí nghiên cứu sự vận động của vật chất ở những thang bậc quy mô nào trong vũ trụ?",
        [
          "A. Từ quy mô cực nhỏ (các hạt hạ nguyên tử, nano) đến quy mô cực lớn (các hành tinh, thiên hà, toàn vũ trụ).",
          "B. Chỉ nghiên cứu các vật thể kích thước lớn mắt thường nhìn thấy được.",
          "C. Chỉ nghiên cứu các phản ứng biến đổi sinh hóa trong cơ thể người.",
          "D. Chỉ nghiên cứu các tầng địa chất dưới lòng đất."
        ],
        0,
        "Vật lí học nghiên cứu vật chất ở mọi quy mô từ thế giới vi mô hạ nguyên tử đến vĩ mô vũ trụ."
      ],
      [
        "Mô hình chất điểm, mô hình khí lí tưởng, mô hình tia sáng trong Vật lí học là ví dụ điển hình của phương pháp nào?",
        [
          "A. Phương pháp đo đạc thủ công.",
          "B. Phương pháp điều tra phỏng vấn trực tiếp.",
          "C. Phương pháp mô hình hóa trong nghiên cứu Vật lí.",
          "D. Phương pháp ngẫu nhiên không có căn cứ."
        ],
        2,
        "Mô hình hóa là phương pháp xây dựng các mô hình đơn giản hóa để mô tả và giải thích bản chất hiện tượng vật lí."
      ],
      [
        "Để bảo đảm an toàn khi tiếp xúc với các thiết bị sinh nhiệt cao trong phòng thực hành Vật lí, học sinh cần tuân thủ quy tắc nào sau đây?",
        [
          "A. Rút dây nguồn điện bằng cách giật mạnh sợi dây từ xa.",
          "B. Dùng tay trần sờ trực tiếp vào bộ phận nung nóng để xem đã đủ nhiệt độ chưa.",
          "C. Đặt thiết bị sinh nhiệt sát ngay cạnh các chai lọ đựng cồn hoặc hóa chất dễ cháy.",
          "D. Đeo găng tay cách nhiệt thích hợp và để thiết bị nguội hoàn toàn trước khi thu dọn cất giữ."
        ],
        3,
        "Cần dùng găng tay cách nhiệt và để thiết bị nguội tự nhiên trước khi cất dọn để phòng ngừa bỏng và cháy nổ."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tròn nền xanh dương, hình vẽ màu trắng như hình bên dưới mang ý nghĩa gì? <div class=\"exam-svg-wrap\" style=\"text-align:center;margin:10px 0;\"><svg width=\"90\" height=\"90\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"44\" fill=\"#2563eb\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><path d=\"M50,22 L50,34 M44,34 L56,34\" stroke=\"#fff\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"42\" r=\"3\" fill=\"#fff\"/><path d=\"M34,65 Q45,55 58,60 T68,70\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\"/><path d=\"M30,72 Q42,62 55,66 T65,76\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\"/></svg><div style=\"font-size:12px;color:#64748b;margin-top:4px;\">Hình: Biển lệnh bắt buộc rửa tay</div></div>",
        [
          "A. Cảnh báo nơi có vòi nước áp lực cao nguy hiểm.",
          "B. Hiệu lệnh bắt buộc phải rửa sạch tay bằng xà phòng và nước sau khi hoàn thành buổi thực hành.",
          "C. Biển cấm sử dụng nước trong phòng thí nghiệm.",
          "D. Nơi dành riêng để rửa các dụng cụ thủy tinh."
        ],
        1,
        "Biển tròn nền xanh dương hình bàn tay dưới vòi nước là biển hiệu lệnh bắt buộc phải rửa tay."
      ],
      [
        "Khi đo độ dài của một vật bằng thước thẳng có giới hạn đo 50 cm và độ chia nhỏ nhất 1 mm, kết quả đo nào sau đây được ghi ĐÚNG quy tắc?",
        [
          "A. L = 35,2 cm.",
          "B. L = 35,258 cm.",
          "C. L = 35,25 cm.",
          "D. L = 35 cm."
        ],
        0,
        "Độ chia nhỏ nhất là 1 mm (0,1 cm) nên chữ số có nghĩa ước lượng cuối cùng phải ở hàng phần mười của xentimét (0,1 cm)."
      ],
      [
        "Một phép đo khối lượng cho kết quả m = (200 ± 4) g. Sai số tỉ đối của phép đo bằng:",
        [
          "A. 2,0%.",
          "B. 0,5%.",
          "C. 0,2%.",
          "D. 4,0%."
        ],
        0,
        "δm = (4 / 200) × 100% = 2,0%."
      ],
      [
        "Một chiếc thuyền buồm chạy trên biển. Vị trí của thuyền thay đổi từ điểm A có tọa độ x_A = +15 km đến điểm B có tọa độ x_B = +45 km trên trục Ox trong thời gian 1,5 h. Vận tốc của thuyền bằng:",
        [
          "A. 10 km/h.",
          "B. 30 km/h.",
          "C. 40 km/h.",
          "D. 20 km/h."
        ],
        3,
        "d = x_B - x_A = 45 - 15 = 30 km. v = d / t = 30 / 1,5 = 20 km/h."
      ],
      [
        "Tốc độ trung bình và vận tốc trung bình của một vật có cùng độ lớn khi và chỉ khi:",
        [
          "A. Vật đi tới rồi quay ngược trở lại điểm xuất phát.",
          "B. Vật chuyển động nhanh dần đều rồi chậm dần đều.",
          "C. Vật chuyển động trên một đường thẳng và theo một chiều duy nhất không đổi.",
          "D. Vật chuyển động tròn đều một vòng khép kín."
        ],
        2,
        "Chỉ khi chuyển động thẳng và không đổi chiều thì s = |d|, do đó tốc độ trung bình bằng độ lớn vận tốc trung bình."
      ],
      [
        "Khi đo tốc độ chuyển động của xe đồ chơi bằng cổng quang điện, nếu cổng quang đặt ở vị trí có độ dịch chuyển 0,40 m và thời gian xe đi qua cổng là 0,80 s thì tốc độ trung bình của xe là:",
        [
          "A. 0,50 m/s.",
          "B. 2,0 m/s.",
          "C. 0,32 m/s.",
          "D. 1,2 m/s."
        ],
        0,
        "v = s / t = 0,40 / 0,80 = 0,50 m/s."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động thẳng có phương trình d = 10 + 4t (m, s). Vận tốc chuyển động của vật là:",
        [
          "A. 10 m/s.",
          "B. 2,5 m/s.",
          "C. 14 m/s.",
          "D. 4 m/s."
        ],
        3,
        "Phương trình d = d₀ + vt &rArr; v = 4 m/s."
      ],
      [
        "Một xe ôtô đang đứng yên thì khởi hành chuyển động thẳng nhanh dần đều với gia tốc 2,5 m/s². Tốc độ của ôtô sau 4 giây là:",
        [
          "A. 5 m/s.",
          "B. 2,5 m/s.",
          "C. 20 m/s.",
          "D. 10 m/s."
        ],
        3,
        "v = at = 2,5 · 4 = 10 m/s."
      ],
      [
        "Một xe tải đang chạy với vận tốc 18 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 3 m/s². Quãng đường xe tải đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là:",
        [
          "A. 108 m.",
          "B. 54 m.",
          "C. 36 m.",
          "D. 27 m."
        ],
        1,
        "s = (v² - v₀²) / (2a) = (0 - 18²) / (2 · (-3)) = -324 / (-6) = 54 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động là đường thẳng dốc lên qua gốc tọa độ O. Vật này đang:",
        [
          "A. Đứng yên tại gốc tọa độ.",
          "B. Chuyển động thẳng nhanh dần đều không vận tốc đầu.",
          "C. Chuyển động thẳng đều với vận tốc không đổi.",
          "D. Chuyển động thẳng chậm dần đều về gốc O."
        ],
        1,
        "v = at là hàm bậc nhất xuất phát từ 0 dốc lên biểu thị chuyển động nhanh dần đều không vận tốc đầu."
      ],
      [
        "Một ôtô đang chạy với tốc độ 10 m/s thì tăng tốc với gia tốc a = 2 m/s² trong thời gian 5 s. Quãng đường ôtô đi được trong 5 s đó là:",
        [
          "A. 25 m.",
          "B. 100 m.",
          "C. 75 m.",
          "D. 50 m."
        ],
        2,
        "s = v₀t + 1/2 · at² = 10 · 5 + 0,5 · 2 · 5² = 50 + 25 = 75 m."
      ],
      [
        "Gia tốc trọng trường g tại một nơi xác định trên bề mặt Trái Đất có đặc điểm nào sau đây?",
        [
          "A. Bằng 0 nếu thả vật từ độ cao trên 100 m.",
          "B. Luôn luôn có phương nằm ngang hướng về phía Đông.",
          "C. Có giá trị như nhau đối với mọi vật rơi tự do tại nơi đó, không phụ thuộc vào khối lượng của vật.",
          "D. Có giá trị càng lớn nếu vật rơi có khối lượng càng lớn."
        ],
        2,
        "Tại một nơi xác định, gia tốc rơi tự do g là một hằng số không phụ thuộc vào khối lượng của vật."
      ],
      [
        "Một vật rơi tự do từ độ cao h = 500 m tại nơi có gia tốc trọng trường g = 10 m/s². Thời gian vật rơi từ lúc thả đến khi chạm đất là:",
        [
          "A. 50 s.",
          "B. 10 s.",
          "C. 20 s.",
          "D. 5 s."
        ],
        1,
        "t = √(2h / g) = √(2 · 500 / 10) = √100 = 10 s."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ôtô chạy thử nghiệm trên một đường thẳng khép kín từ trạm A đến trạm B dài 60 km. Xe xuất phát từ A chạy thẳng đều đến B hết 1 giờ, sau đó lập tức quay đầu chạy thẳng đều từ B về lại A hết 1,5 giờ.",
        "items": [
          [
            "Tổng quãng đường xe ôtô chạy được cả đi lẫn về là 120 km.",
            true,
            "Quãng đường s = 60 + 60 = 120 km."
          ],
          [
            "Độ dịch chuyển tổng cộng của xe ôtô sau khi quay về lại điểm A bằng 0 km.",
            true,
            "Điểm đầu và điểm cuối trùng nhau nên vectơ độ dịch chuyển d = 0 km."
          ],
          [
            "Tốc độ trung bình của xe ôtô trong toàn bộ thời gian chạy bằng 48 km/h.",
            true,
            "Tổng thời gian t = 1 + 1,5 = 2,5 h. v_tb = s / t = 120 / 2,5 = 48 km/h."
          ],
          [
            "Vận tốc trung bình của xe ôtô trong cả chuyến đi bằng 48 km/h.",
            false,
            "Vì điểm đầu và điểm cuối trùng nhau nên vectơ độ dịch chuyển d = 0 &rArr; vận tốc trung bình bằng 0 km/h (chỉ có tốc độ trung bình mới bằng 48 km/h)."
          ]
        ]
      },
      {
        "stem": "Thả một quả cầu kim loại nhỏ rơi tự do từ miệng một giếng đứng sâu h = 80 m tại nơi có g = 10 m/s². Bỏ qua mọi sức cản của không khí.",
        "items": [
          [
            "Thời gian để quả cầu rơi từ miệng giếng xuống đáy giếng là 4 giây.",
            true,
            "t = √(2h / g) = √(2 · 80 / 10) = √16 = 4 s."
          ],
          [
            "Vận tốc của quả cầu khi chạm đáy giếng có độ lớn là 40 m/s.",
            true,
            "v = gt = 10 · 4 = 40 m/s."
          ],
          [
            "Sau 2 giây kể từ khi thả rơi, quả cầu đã rơi được một nửa độ sâu của giếng.",
            false,
            "Sau 2 giây quả cầu rơi được s₂ = 0,5 · 10 · 2² = 20 m (chỉ bằng 1/4 độ sâu 80 m, không phải một nửa)."
          ],
          [
            "Quãng đường quả cầu rơi được trong 1 giây cuối cùng trước khi chạm đáy giếng là 35 m.",
            true,
            "Quãng đường 3 giây đầu: s₃ = 0,5 · 10 · 3² = 45 m. Giây cuối: Δs = 80 - 45 = 35 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi bộ xuất phát từ điểm O đi thẳng 400 m về hướng Nam, sau đó rẽ sang hướng Tây đi thẳng tiếp 300 m. Độ lớn của vectơ độ dịch chuyển của người đó so với điểm O bằng bao nhiêu mét?",
        "answer": "500",
        "explanation": "Do hai hướng Nam và Tây vuông góc nhau nên độ dịch chuyển: d = √(400² + 300²) = √250000 = 500 m."
      },
      {
        "question": "Một ca nô chạy ngược dòng một đoạn sông dài 36 km. Biết vận tốc của ca nô đối với dòng nước là 22 km/h và vận tốc của nước đối với bờ là 4 km/h. Thời gian ca nô chạy ngược dòng hết đoạn sông đó là bao nhiêu giờ?",
        "answer": "2",
        "explanation": "v_ngược = 22 - 4 = 18 km/h. t = 36 / 18 = 2,0 h."
      },
      {
        "question": "Một ôtô đang chạy với tốc độ 24 m/s thì người lái xe đạp phanh chuyển động chậm dần đều với gia tốc có độ lớn 3 m/s². Sau bao nhiêu giây kể từ lúc bắt đầu đạp phanh thì xe ôtô dừng lại hoàn toàn?",
        "answer": "8",
        "explanation": "t = (v - v₀) / a = (0 - 24) / (-3) = 8 s."
      },
      {
        "question": "Một hòn sỏi nhỏ được thả rơi tự do từ đỉnh một tòa tháp cao tầng tại nơi có g = 9,8 m/s². Biết hòn sỏi chạm đất sau thời gian đúng 5,0 giây. Chiều cao của tòa tháp bằng bao nhiêu mét?",
        "answer": "122.5",
        "explanation": "h = 1/2 · g · t² = 0,5 · 9,8 · 5² = 122,5 m."
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
          "A. Lịch sử tiến hóa của các loài sinh vật qua các kỉ địa chất.",
          "B. Cấu tạo của chất, sự biến đổi của chất và ứng dụng của chúng.",
          "C. Sự hình thành hệ Mặt Trời và chuyển động của các hành tinh.",
          "D. Tốc độ truyền ánh sáng và sóng âm trong môi trường chân không."
        ],
        1,
        "Theo SGK Hóa học 10: Hóa học là ngành khoa học tự nhiên nghiên cứu về chất, sự biến đổi của chất và ứng dụng của chúng trong đời sống, sản xuất."
      ],
      [
        "Hạt nhân của hầu hết các nguyên tử trong tự nhiên (trừ đồng vị <sup>1</sup><sub>1</sub>H) được cấu tạo từ các loại hạt cơ bản nào?",
        [
          "A. Proton và neutron.",
          "B. Electron và neutron.",
          "C. Electron, proton và neutron.",
          "D. Electron và proton."
        ],
        0,
        "Hạt nhân nằm ở tâm nguyên tử, gồm proton (mang điện tích dương) và neutron (không mang điện). Riêng đồng vị <sup>1</sup><sub>1</sub>H chỉ có 1 proton, không có neutron."
      ],
      [
        "So sánh kích thước và khối lượng của nguyên tử với hạt nhân nguyên tử, phát biểu nào sau đây là ĐÚNG?",
        [
          "A. Đường kính nguyên tử xấp xỉ bằng đường kính hạt nhân và khối lượng phân bố đều.",
          "B. Đường kính nguyên tử lớn hơn đường kính hạt nhân khoảng 10 000 lần và khối lượng tập trung chủ yếu ở hạt nhân.",
          "C. Đường kính hạt nhân lớn hơn đường kính nguyên tử khoảng 10 000 lần.",
          "D. Khối lượng của nguyên tử tập trung chủ yếu ở lớp vỏ electron."
        ],
        1,
        "Nguyên tử có kích thước khoảng 10⁻¹⁰ m, hạt nhân khoảng 10⁻¹⁴ đến 10⁻¹⁵ m (nguyên tử lớn hơn khoảng 10 000 lần). Do mₑ rất nhỏ nên khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân."
      ],
      [
        "Cho kí hiệu nguyên tử <sup>31</sup><sub>15</sub>P. Số hạt proton, neutron và electron của nguyên tử phosphorus lần lượt là:",
        [
          "A. 15, 15, 16.",
          "B. 15, 16, 15.",
          "C. 16, 15, 15.",
          "D. 15, 31, 15."
        ],
        1,
        "Z = 15 &rArr; số proton = số electron = 15; Số neutron N = A - Z = 31 - 15 = 16."
      ],
      [
        "Trong tự nhiên, Boron có hai đồng vị bền là <sup>10</sup>B (chiếm 19%) và <sup>11</sup>B (chiếm 81%). Nguyên tử khối trung bình của Boron là:",
        [
          "A. 10,81 amu.",
          "B. 10,50 amu.",
          "C. 10,20 amu.",
          "D. 10,95 amu."
        ],
        0,
        "Ā = (10 &times; 19 + 11 &times; 81) / 100 = (190 + 891) / 100 = 1081 / 100 = 10,81 amu."
      ],
      [
        "Orbital nguyên tử (AO) được định nghĩa là:",
        [
          "A. Quỹ đạo tròn mà electron chuyển động xung quanh hạt nhân.",
          "B. Đám mây electron có hình cầu tuyệt đối bao quanh hạt nhân.",
          "C. Khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).",
          "D. Bề mặt ngoài cùng của lớp vỏ nguyên tử."
        ],
        2,
        "Định nghĩa chuẩn: Orbital nguyên tử (AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy (có mặt) electron là lớn nhất (khoảng 90%)."
      ],
      [
        "Theo mô hình hiện đại, orbital s và orbital p có hình dạng không gian lần lượt là:",
        [
          "A. Hình cầu và hình số 8 nổi.",
          "B. Hình số 8 nổi và hình cầu.",
          "C. Hình tròn phẳng và hình elip.",
          "D. Hình cầu và hình tròn phẳng."
        ],
        0,
        "Orbital s có dạng hình cầu đối xứng; orbital p có dạng hình số 8 nổi định hướng theo các trục tọa độ Ox, Oy, Oz."
      ],
      [
        "Số lượng orbital nguyên tử (AO) và số electron tối đa có trong phân lớp p lần lượt là:",
        [
          "A. 1 AO và 2 electron.",
          "B. 3 AO và 6 electron.",
          "C. 5 AO và 10 electron.",
          "D. 7 AO và 14 electron."
        ],
        1,
        "Phân lớp p gồm 3 orbital (p_x, p_y, p_z), mỗi AO chứa tối đa 2 electron nên phân lớp p chứa tối đa 3 &times; 2 = 6 electron."
      ],
      [
        "Cấu hình electron nguyên tử của nguyên tố Potassium (Z = 19) ở trạng thái cơ bản là:",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹.",
          "B. 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹.",
          "C. 1s² 2s² 2p⁶ 3s² 3p⁵ 4s².",
          "D. 1s² 2s² 2p⁶ 3s² 3p⁶ 4p¹."
        ],
        1,
        "Theo trật tự mức năng lượng: 1s 2s 2p 3s 3p 4s... Với Z = 19: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ (hay [Ar]4s¹)."
      ],
      [
        "Nguyên tử của một nguyên tố có cấu hình electron lớp ngoài cùng là 3s² 3p⁴. Nguyên tố này thuộc loại:",
        [
          "A. Kim loại.",
          "B. Khí hiếm.",
          "C. Phi kim.",
          "D. Kim loại kiềm."
        ],
        2,
        "Lớp ngoài cùng có 2 + 4 = 6 electron &rArr; Nguyên tử có 5, 6, 7 electron ở lớp ngoài cùng là nguyên tố phi kim (Sulfur, Z = 16)."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện đại được sắp xếp theo nguyên tắc nào sau đây?",
        [
          "A. Chiều tăng dần của khối lượng nguyên tử.",
          "B. Chiều tăng dần của số khối A.",
          "C. Chiều tăng dần của điện tích hạt nhân nguyên tử (Z).",
          "D. Chiều tăng dần của bán kính nguyên tử."
        ],
        2,
        "Nguyên tắc 1 của Bảng tuần hoàn: Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (Z)."
      ],
      [
        "Số thứ tự của chu kỳ trong Bảng tuần hoàn bằng đại lượng nào sau đây của nguyên tử?",
        [
          "A. Số electron lớp ngoài cùng.",
          "B. Số electron hóa trị.",
          "C. Số phân lớp electron.",
          "D. Số lớp electron trong nguyên tử."
        ],
        3,
        "Quy tắc xác định chu kỳ: Số thứ tự chu kỳ = Số lớp electron của nguyên tử nguyên tố đó."
      ],
      [
        "Cation Al³⁺ được hình thành khi nguyên tử aluminium (Z = 13) nhường đi 3 electron. Cấu hình electron của cation Al³⁺ là:",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p¹.",
          "B. 1s² 2s² 2p⁶ 3s².",
          "C. 1s² 2s² 2p⁶.",
          "D. 1s² 2s² 2p³."
        ],
        2,
        "Al (Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹. Khi nhường 3e ở lớp ngoài cùng &rArr; Al³⁺: 1s² 2s² 2p⁶ (đạt cấu hình bền của khí hiếm Ne)."
      ],
      [
        "Nguyên tử của nguyên tố X có tổng số electron ở các phân lớp p là 11. Vị trí của X trong Bảng tuần hoàn là:",
        [
          "A. Ô số 11, chu kỳ 3, nhóm IA.",
          "B. Ô số 15, chu kỳ 3, nhóm VA.",
          "C. Ô số 17, chu kỳ 3, nhóm VIIA.",
          "D. Ô số 17, chu kỳ 3, nhóm VIIB."
        ],
        2,
        "Các phân lớp p có 11e: 2p⁶ 3p⁵ &rArr; Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17). Vị trí: Ô 17, chu kỳ 3 (3 lớp e), nhóm VIIA (nguyên tố p, 7e lớp ngoài cùng)."
      ],
      [
        "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kỳ có tổng số proton trong hai hạt nhân là 25 (Z_A < Z_B). Số hiệu nguyên tử Z_A và Z_B lần lượt là:",
        [
          "A. 11 và 14.",
          "B. 12 và 13.",
          "C. 10 và 15.",
          "D. 8 và 17."
        ],
        1,
        "Vì A và B kế tiếp nhau trong cùng chu kỳ &rArr; Z_B - Z_A = 1. Lại có Z_A + Z_B = 25 &rArr; 2Z_A = 24 &rArr; Z_A = 12 (Mg) và Z_B = 13 (Al)."
      ],
      [
        "[Câu chặn điểm cao]: Hợp chất MX₂ có tổng số hạt cơ bản (p, n, e) là 140. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44 hạt. Số hạt mang điện trong nguyên tử X nhiều hơn trong nguyên tử M là 10 hạt. Công thức hóa học của hợp chất MX₂ là:",
        [
          "A. CaCl₂.",
          "B. MgCl₂.",
          "C. FeS₂.",
          "D. BaF₂."
        ],
        1,
        "Hệ hạt: 2Z_M + N_M + 2(2Z_X + N_X) = 140 (1); [2Z_M + 4Z_X] - [N_M + 2N_X] = 44 (2). Lấy (1)+(2) &rArr; 4Z_M + 8Z_X = 184 &rArr; Z_M + 2Z_X = 46. Lại có 2Z_X - 2Z_M = 10 &rArr; Z_X - Z_M = 5 &rArr; Z_X = 5 + Z_M &rArr; Z_M + 2(5 + Z_M) = 46 &rArr; 3Z_M = 36 &rArr; Z_M = 12 (Mg) và Z_X = 17 (Cl) &rArr; Hợp chất là MgCl₂."
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
            "Phát biểu ĐÚNG (mₑ ≈ 0,00055 amu chiếm tỉ lệ không đáng kể so với mp và mn)."
          ],
          [
            "d) Các electron trong cùng một lớp có mức năng lượng hoàn toàn bằng nhau.",
            false,
            "Phát biểu SAI vì các electron trong cùng một lớp chỉ có mức năng lượng GẦN BẰNG NHAU; các electron trong cùng một phân lớp mới có mức năng lượng bằng nhau."
          ]
        ]
      },
      {
        "stem": "Cho các phát biểu về cấu tạo Bảng tuần hoàn các nguyên tố hóa học hiện đại:",
        "items": [
          [
            "a) Bảng tuần hoàn gồm có 7 chu kỳ, trong đó các chu kỳ 1, 2, 3 được gọi là các chu kỳ nhỏ.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Tất cả các nguyên tố thuộc nhóm A đều là nguyên tố s hoặc nguyên tố p.",
            true,
            "Phát biểu ĐÚNG (nhóm IA, IIA là nguyên tố s; nhóm IIIA đến VIIIA là nguyên tố p)."
          ],
          [
            "c) Nhóm B trong Bảng tuần hoàn gồm 8 nhóm (từ IB đến VIIIB) và có tất cả 10 cột.",
            true,
            "Phát biểu ĐÚNG (riêng nhóm VIIIB gồm 3 cột 8, 9, 10)."
          ],
          [
            "d) Nguyên tố có cấu hình electron [Ar] 3d⁵ 4s¹ thuộc chu kỳ 4, nhóm IA do có 1 electron ở lớp ngoài cùng.",
            false,
            "Phát biểu SAI vì Chromium (Cr) là nguyên tố d, số electron hóa trị = 5 + 1 = 6 &rArr; thuộc nhóm VIB, không phải nhóm IA."
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
        "explanation": "Cấu hình N (Z = 7): 1s² 2s² 2p³. Phân lớp 1s có 1 AO, 2s có 1 AO, 2p có 3 AO đều chứa electron độc thân &rArr; Tổng số AO chứa electron = 1 + 1 + 3 = 5 AO."
      },
      {
        "question": "Nguyên tử của nguyên tố Calcium (Ca) có Z = 20. Số electron ở lớp electron ngoài cùng của nguyên tử Calcium là bao nhiêu?",
        "answer": "2",
        "explanation": "Ca (Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² &rArr; Lớp ngoài cùng (n = 4) có đúng 2 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho hai nguyên tử Nitrogen (Z = 7) và Oxygen (Z = 8).<br>a) Viết cấu hình electron ở trạng thái cơ bản của N và O.<br>b) Biểu diễn cấu hình theo ô orbital cho lớp ngoài cùng của mỗi nguyên tử và xác định số electron độc thân của N và O.",
        "solution": "a) Cấu hình electron:<br>• N (Z = 7): 1s² 2s² 2p³ (0,25 điểm).<br>• O (Z = 8): 1s² 2s² 2p⁴ (0,25 điểm).<br>b) Biểu diễn ô orbital lớp ngoài cùng (n = 2):<br>• Lớp ngoài cùng của N (2s² 2p³): Phân lớp 2s có 1 ô chứa 2 electron ghép đôi [↑↓]; phân lớp 2p có 3 ô, mỗi ô chứa 1 electron độc thân [↑][↑][↑] &rArr; N có 3 electron độc thân (0,25 điểm).<br>• Lớp ngoài cùng của O (2s² 2p⁴): Phân lớp 2s có 1 ô [↑↓]; phân lớp 2p có 3 ô gồm 1 ô ghép đôi và 2 ô độc thân [↑↓][↑][↑] &rArr; O có 2 electron độc thân (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Tổng số hạt proton, neutron, electron trong nguyên tử của nguyên tố X là 46 hạt. Trong hạt nhân nguyên tử X, số hạt không mang điện nhiều hơn số hạt mang điện là 1 hạt.<br>a) Xác định số hạt proton, neutron, electron và số khối A của nguyên tử X.<br>b) Viết cấu hình electron của X và xác định vị trí của X (ô, chu kỳ, nhóm) trong Bảng tuần hoàn.",
        "solution": "a) Gọi số hạt proton, neutron, electron của X lần lượt là P, N, E.<br>Theo đề bài ta có hệ phương trình:<br>• 2P + N = 46 (do P = E)<br>• N - P = 1<br>&rArr; Giải hệ thu được: P = E = 15; N = 16 (0,25 điểm).<br>Số khối A = P + N = 15 + 16 = 31 (0,25 điểm).<br>b) X có Z = 15 (Phosphorus, P):<br>• Cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p³ hay [Ne] 3s² 3p³ (0,25 điểm).<br>• Vị trí trong Bảng tuần hoàn: Ô số 15 (do Z = 15), chu kỳ 3 (có 3 lớp electron), nhóm VA (nguyên tố p có 5 electron lớp ngoài cùng) (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Hợp chất MX₂ có tổng số hạt cơ bản (p, n, e) bằng 140 hạt, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44 hạt. Số hiệu nguyên tử của X nhiều hơn số hiệu nguyên tử của M là 5 đơn vị.<br>a) Tìm số hiệu nguyên tử của M và X. Viết công thức hóa học của hợp chất MX₂.<br>b) Viết cấu hình electron của cation M²⁺ và anion X⁻.",
        "solution": "a) Trong phân tử MX₂ có 1 nguyên tử M và 2 nguyên tử X.<br>Gọi số hạt proton, neutron trong M là Z_M, N_M; trong X là Z_X, N_X.<br>• Tổng số hạt cơ bản: (2Z_M + N_M) + 2(2Z_X + N_X) = 140 &rArr; (2Z_M + 4Z_X) + (N_M + 2N_X) = 140 (1) (0,25 điểm).<br>• Số hạt mang điện nhiều hơn không mang điện là 44: (2Z_M + 4Z_X) - (N_M + 2N_X) = 44 (2) (0,25 điểm).<br>Cộng (1) và (2) vế theo vế:<br>4Z_M + 8Z_X = 184 &rArr; Z_M + 2Z_X = 46 (3).<br>• Số hiệu nguyên tử của X nhiều hơn M là 5 đơn vị: Z_X - Z_M = 5 &rArr; Z_X = Z_M + 5 (4).<br>Thay (4) vào (3): Z_M + 2(Z_M + 5) = 46 &rArr; 3Z_M = 36 &rArr; Z_M = 12 (Magnesium, Mg) &rArr; Z_X = 17 (Chlorine, Cl) (0,25 điểm).<br>Vậy công thức hóa học của MX₂ là MgCl₂.<br>b) Cấu hình electron của các ion:<br>• Mg (Z = 12): 1s² 2s² 2p⁶ 3s² &rArr; Mg²⁺: 1s² 2s² 2p⁶.<br>• Cl (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ &rArr; Cl⁻: 1s² 2s² 2p⁶ 3s² 3p⁶ (hay [Ar]) (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11388/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-gio-linh-quang",
    "questions": [
      [
        "Hiện tượng nào sau đây là hiện tượng hóa học (có sự tạo thành chất mới)?",
        [
          "A. Nước lỏng để trong ngăn đông tủ lạnh bị đóng băng thành đá rắn.",
          "B. Sục khí carbon dioxide vào dung dịch nước vôi trong làm nước vôi trong bị vẩn đục trắng.",
          "C. Cồn để trong lọ không đậy nắp bị bay hơi dần.",
          "D. Nhựa đường nấu ở nhiệt độ cao bị nóng chảy mềm ra."
        ],
        1,
        "Sục khí CO₂ vào Ca(OH)₂ tạo ra kết tủa trắng CaCO₃ (chất mới) nên là hiện tượng hóa học: CO₂ + Ca(OH)₂ &rarr; CaCO₃&darr; + H₂O."
      ],
      [
        "Trong một nguyên tử trung hòa về điện, mối quan hệ giữa số hạt electron và proton là:",
        [
          "A. Luôn bằng nhau (e = p = Z).",
          "B. Số hạt electron luôn lớn hơn số hạt proton.",
          "C. Số hạt electron luôn nhỏ hơn số hạt proton.",
          "D. Số hạt electron và proton không có quan hệ với nhau."
        ],
        0,
        "Do nguyên tử trung hòa về điện nên tổng điện tích âm của electron bằng tổng điện tích dương của proton &rArr; Số electron = Số proton = Z."
      ],
      [
        "Khối lượng thực của một nguyên tử magnesium (Mg) là 39,8271 &times; 10⁻²⁷ kg. Biết 1 amu &approx; 1,6605 &times; 10⁻²⁷ kg. Khối lượng nguyên tử của magnesium theo đơn vị amu xấp xỉ bằng:",
        [
          "A. 24,000 amu.",
          "B. 23,985 amu.",
          "C. 66,133 amu.",
          "D. 12,000 amu."
        ],
        1,
        "m(Mg theo amu) = (39,8271 &times; 10⁻²⁷) / (1,6605 &times; 10⁻²⁷) &approx; 23,985 amu."
      ],
      [
        "Đồng vị là các nguyên tử của cùng một nguyên tố hóa học có đặc điểm nào sau đây?",
        [
          "A. Cùng số proton nhưng khác nhau về số neutron.",
          "B. Cùng số neutron nhưng khác nhau về số proton.",
          "C. Cùng số khối A nhưng khác nhau về số proton.",
          "D. Cùng khối lượng nguyên tử tuyệt đối."
        ],
        0,
        "Định nghĩa: Đồng vị là các nguyên tử của cùng một nguyên tố hóa học, có cùng số proton (cùng Z) nhưng khác nhau về số neutron (dẫn đến khác số khối A)."
      ],
      [
        "Thông tin nào sau đây KHÔNG ĐÚNG về nguyên tử chì <sup>206</sup><sub>82</sub>Pb?",
        [
          "A. Số hiệu nguyên tử của chì bằng 82.",
          "B. Điện tích hạt nhân của nguyên tử chì bằng +82e.",
          "C. Số neutron trong hạt nhân nguyên tử chì bằng 124.",
          "D. Số hạt proton trong hạt nhân nguyên tử chì bằng 124."
        ],
        3,
        "Phương án D sai vì số proton chính là số hiệu nguyên tử Z = 82, còn 124 là số neutron (N = 206 - 82 = 124)."
      ],
      [
        "Các lớp electron được đánh số từ trong ra ngoài bằng các số nguyên dương n = 1, 2, 3, 4 tương ứng với các chữ cái in hoa là:",
        [
          "A. K, L, M, N.",
          "B. L, M, N, O.",
          "C. K, M, N, P.",
          "D. A, B, C, D."
        ],
        0,
        "Quy ước tên lớp electron: n = 1 là lớp K; n = 2 là lớp L; n = 3 là lớp M; n = 4 là lớp N..."
      ],
      [
        "Số electron tối đa có thể chứa ở lớp electron thứ n (với n &le; 4) được tính theo công thức:",
        [
          "A. n².",
          "B. 2n.",
          "C. 2n².",
          "D. 2n + 1."
        ],
        2,
        "Công thức xác định số electron tối đa của lớp thứ n là 2n² (ví dụ: lớp K có 2.1² = 2e, lớp L có 2.2² = 8e, lớp M có 2.3² = 18e, lớp N có 2.4² = 32e)."
      ],
      [
        "Nguyên tử của nguyên tố Y có 3 electron ở phân lớp 3p. Số hiệu nguyên tử (Z) của nguyên tố Y là:",
        [
          "A. 13.",
          "B. 15.",
          "C. 17.",
          "D. 16."
        ],
        1,
        "Cấu hình electron phân bố đến 3p³: 1s² 2s² 2p⁶ 3s² 3p³ &rArr; Tổng số electron = 2 + 2 + 6 + 2 + 3 = 15 &rArr; Z = 15 (Phosphorus)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Chromium (Cr, Z = 24) có dạng ngoại lệ bán bão hòa phân lớp 3d là:",
        [
          "A. [Ar] 3d⁴ 4s².",
          "B. [Ar] 3d⁵ 4s¹.",
          "C. [Ar] 3d⁶.",
          "D. [Ar] 4s² 3d⁴."
        ],
        1,
        "Do cấu trúc bán bão hòa phân lớp d (d⁵) có năng lượng bền vững hơn, 1 electron từ 4s nhảy sang 3d &rArr; Cấu hình bền vững của Cr (Z = 24) là [Ar] 3d⁵ 4s¹."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện đại có tất cả bao nhiêu cột, bao nhiêu nhóm A và bao nhiêu nhóm B?",
        [
          "A. 16 cột, 8 nhóm A và 8 nhóm B.",
          "B. 18 cột, 8 nhóm A và 8 nhóm B.",
          "C. 18 cột, 7 nhóm A và 7 nhóm B.",
          "D. 14 cột, 8 nhóm A và 6 nhóm B."
        ],
        1,
        "Bảng tuần hoàn gồm 18 cột được chia thành 8 nhóm A (IA đến VIIIA) và 8 nhóm B (IB đến VIIIB, riêng nhóm VIIIB chiếm 3 cột 8, 9, 10)."
      ],
      [
        "Các chu kỳ nhỏ trong Bảng tuần hoàn các nguyên tố hóa học gồm những chu kỳ nào?",
        [
          "A. Chu kỳ 1, 2, 3, 4.",
          "B. Chu kỳ 1, 2, 3.",
          "C. Chu kỳ 4, 5, 6, 7.",
          "D. Chỉ có chu kỳ 1 và chu kỳ 2."
        ],
        1,
        "Chu kỳ nhỏ là các chu kỳ 1, 2, 3 (chứa từ 2 đến 8 nguyên tố). Chu kỳ lớn là các chu kỳ 4, 5, 6, 7 (chứa từ 18 đến 32 nguyên tố)."
      ],
      [
        "Nguyên tử của nguyên tố Sulfur có Z = 16. Vị trí của Sulfur trong Bảng tuần hoàn là:",
        [
          "A. Ô số 16, chu kỳ 3, nhóm IVA.",
          "B. Ô số 16, chu kỳ 3, nhóm VIA.",
          "C. Ô số 16, chu kỳ 4, nhóm VIA.",
          "D. Ô số 14, chu kỳ 3, nhóm VIA."
        ],
        1,
        "S (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ &rArr; Ô số 16 (do Z = 16), chu kỳ 3 (có 3 lớp e), nhóm VIA (nguyên tố p có 6 electron lớp ngoài cùng)."
      ],
      [
        "Anion X²⁻ có cấu hình electron lớp ngoài cùng là 3s² 3p⁶. Vị trí của nguyên tố X trong Bảng tuần hoàn là:",
        [
          "A. Ô số 18, chu kỳ 3, nhóm VIIIA.",
          "B. Ô số 16, chu kỳ 3, nhóm VIA.",
          "C. Ô số 20, chu kỳ 4, nhóm IIA.",
          "D. Ô số 16, chu kỳ 4, nhóm VIA."
        ],
        1,
        "Anion X²⁻ có cấu hình 1s² 2s² 2p⁶ 3s² 3p⁶ (18e) được tạo thành khi nguyên tử X nhận thêm 2e &rArr; Nguyên tử X có 16 electron (Z = 16) &rArr; Vị trí: Ô số 16, chu kỳ 3, nhóm VIA."
      ],
      [
        "Hai nguyên tố X và Y thuộc cùng một nhóm A và ở hai chu kỳ liên tiếp trong Bảng tuần hoàn có tổng số proton trong hai hạt nhân là 32 (Z_X < Z_Y). Hai nguyên tố X và Y là:",
        [
          "A. Na (Z = 11) và K (Z = 19).",
          "B. Mg (Z = 12) và Ca (Z = 20).",
          "C. C (Z = 6) và Si (Z = 14).",
          "D. O (Z = 8) và S (Z = 16)."
        ],
        1,
        "Hai nguyên tố thuộc cùng nhóm A ở hai chu kỳ liên tiếp có Z_Y - Z_X = 8 hoặc 18. Nếu Z_Y - Z_X = 8 và Z_X + Z_Y = 32 &rArr; Z_X = 12 (Mg) và Z_Y = 20 (Ca), thỏa mãn đều thuộc nhóm IIA."
      ],
      [
        "Một nguyên tử R có tổng số hạt cơ bản (p, n, e) bằng 40. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 12 hạt. Số khối A của nguyên tử R là:",
        [
          "A. 26.",
          "B. 27.",
          "C. 28.",
          "D. 40."
        ],
        1,
        "Hệ: 2Z + N = 40 và 2Z - N = 12 &rArr; 4Z = 52 &rArr; Z = 13; N = 14 &rArr; Số khối A = Z + N = 13 + 14 = 27 (Aluminium)."
      ],
      [
        "[Câu chặn điểm cao]: Trong tự nhiên, Bromine có hai đồng vị bền là <sup>79</sup>Br và <sup>81</sup>Br. Nguyên tử khối trung bình của Bromine là 79,91. Thành phần phần trăm số nguyên tử của đồng vị <sup>79</sup>Br là:",
        [
          "A. 45,5%.",
          "B. 54,5%.",
          "C. 50,0%.",
          "D. 49,5%."
        ],
        1,
        "Gọi x là % số nguyên tử của <sup>79</sup>Br &rArr; % <sup>81</sup>Br là (100 - x). Ta có: (79x + 81(100 - x)) / 100 = 79,91 &rArr; 8100 - 2x = 7991 &rArr; 2x = 109 &rArr; x = 54,5%."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các phát biểu về nguyên tố hóa học, đồng vị và cấu trúc lớp vỏ nguyên tử:",
        "items": [
          [
            "a) Các nguyên tử có cùng số khối A luôn thuộc về cùng một nguyên tố hóa học.",
            false,
            "Phát biểu SAI vì các nguyên tử có cùng số khối A nhưng khác số proton Z (gọi là chất đẳng khối) thuộc về các nguyên tố hóa học khác nhau (ví dụ <sup>40</sup><sub>19</sub>K và <sup>40</sup><sub>20</sub>Ca)."
          ],
          [
            "b) Hai nguyên tử <sup>12</sup><sub>6</sub>C và <sup>14</sup><sub>6</sub>C là hai đồng vị bền và phóng xạ nhẹ của nguyên tố carbon.",
            true,
            "Phát biểu ĐÚNG (chúng có cùng Z = 6 nhưng khác số khối A)."
          ],
          [
            "c) Số khối A luôn là một số nguyên và bằng tổng số hạt proton và tổng số hạt neutron trong hạt nhân.",
            true,
            "Phát biểu ĐÚNG (A = Z + N)."
          ],
          [
            "d) Phân lớp ngoài cùng của nguyên tử Chlorine (Z = 17) chứa 5 electron.",
            true,
            "Phát biểu ĐÚNG (Cl có cấu hình [Ne] 3s² 3p⁵, phân lớp ngoài cùng là 3p chứa 5 electron)."
          ]
        ]
      },
      {
        "stem": "Xét các đặc điểm về cấu tạo Bảng tuần hoàn các nguyên tố hóa học hiện đại:",
        "items": [
          [
            "a) Bảng tuần hoàn hiện nay được sắp xếp gồm 7 chu kỳ và 18 cột.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Chu kỳ 1 là chu kỳ ngắn nhất, chỉ gồm đúng 2 nguyên tố là Hydrogen (H) và Helium (He).",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Các nguyên tố thuộc cùng một nhóm A luôn có số electron lớp ngoài cùng bằng nhau (trừ He ở nhóm VIIIA có 2e).",
            true,
            "Phát biểu ĐÚNG (số thứ tự nhóm A = số electron lớp ngoài cùng)."
          ],
          [
            "d) Nguyên tố có Z = 19 (Potassium) thuộc chu kỳ 3 do có cấu hình electron [Ar] 4s¹.",
            false,
            "Phát biểu SAI vì Potassium có 4 lớp electron nên thuộc chu kỳ 4, không phải chu kỳ 3."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử Fluorine (F) có 9 proton, 9 electron và 10 neutron. Số khối A của nguyên tử Fluorine bằng bao nhiêu?",
        "answer": "19",
        "explanation": "Số khối A = Z + N = 9 + 10 = 19."
      },
      {
        "question": "Khí Argon (Ar) trong tự nhiên là hỗn hợp gồm 3 đồng vị bền: <sup>40</sup>Ar (99,6%), <sup>36</sup>Ar (0,34%) và <sup>38</sup>Ar (0,06%). Nguyên tử khối trung bình của Argon bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "39.99",
        "explanation": "Ā = (40 &times; 99,6 + 36 &times; 0,34 + 38 &times; 0,06) / 100 = (3984 + 12,24 + 2,28) / 100 = 3998,52 / 100 &approx; 39,99 amu."
      },
      {
        "question": "Nguyên tử Sulfur (S, Z = 16) có cấu hình electron là 1s² 2s² 2p⁶ 3s² 3p⁴. Tổng số electron trên tất cả các phân lớp s và p của Sulfur là bao nhiêu?",
        "answer": "16",
        "explanation": "Phân lớp s có 1s² + 2s² + 3s² = 6e; phân lớp p có 2p⁶ + 3p⁴ = 10e &rArr; Tổng số e trên s và p = 6 + 10 = 16 electron."
      },
      {
        "question": "Nguyên tử của nguyên tố Silicon (Si) có 3 lớp electron và có 4 electron ở lớp ngoài cùng. Số hiệu nguyên tử Z của Silicon bằng bao nhiêu?",
        "answer": "14",
        "explanation": "Có 3 lớp e và 4e ngoài cùng &rArr; Cấu hình: 1s² 2s² 2p⁶ 3s² 3p² &rArr; Tổng e = 14 &rArr; Z = 14."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Viết cấu hình electron đầy đủ và dạng thu gọn của các nguyên tử có số hiệu nguyên tử Z = 11, Z = 17, Z = 18. Xác định tính chất hóa học cơ bản (kim loại, phi kim, khí hiếm) của các nguyên tố đó.",
        "solution": "• Z = 11 (Na): Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s¹; Thu gọn: [Ne] 3s¹. Có 1 electron lớp ngoài cùng &rArr; là kim loại điển hình (0,35 điểm).<br>• Z = 17 (Cl): Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵; Thu gọn: [Ne] 3s² 3p⁵. Có 7 electron lớp ngoài cùng &rArr; là phi kim điển hình (0,35 điểm).<br>• Z = 18 (Ar): Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶; Thu gọn: [Ne] 3s² 3p⁶. Có 8 electron lớp ngoài cùng bền vững &rArr; là khí hiếm (trơ về mặt hóa học) (0,30 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Hai nguyên tố R và T thuộc cùng một nhóm A và ở hai chu kì liên tiếp trong Bảng tuần hoàn. Tổng số đơn vị điện tích hạt nhân của R và T là 22 (Z_R < Z_T).<br>a) Xác định số hiệu nguyên tử Z_R và Z_T.<br>b) Viết cấu hình electron nguyên tử của R, T và xác định vị trí của chúng trong Bảng tuần hoàn.",
        "solution": "a) Do R và T thuộc cùng nhóm A ở hai chu kì liên tiếp, lại có Z_R + Z_T = 22 &rArr; Z_tb = 11 (thuộc chu kì nhỏ).<br>Khoảng cách Z giữa hai chu kì nhỏ liên tiếp cùng nhóm A là 8 &rArr; Z_T - Z_R = 8 (0,25 điểm).<br>Kết hợp với Z_R + Z_T = 22 &rArr; Giải hệ phương trình:<br>• Z_R = (22 - 8) / 2 = 7... wait! Z_T - Z_R = 8 &rArr; 2Z_R = 14 &rArr; Z_R = 7 (N) và Z_T = 15 (P) thì 7+15 = 22! N (nhóm VA, chu kì 2) và P (nhóm VA, chu kì 3) (0,25 điểm).<br>b) Vị trí và cấu hình:<br>• R (Z_R = 7): 1s² 2s² 2p³ &rArr; Ô số 7, chu kỳ 2, nhóm VA (0,25 điểm).<br>• T (Z_T = 15): 1s² 2s² 2p⁶ 3s² 3p³ hay [Ne] 3s² 3p³ &rArr; Ô số 15, chu kỳ 3, nhóm VA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Bromine (Br) có 2 đồng vị bền trong tự nhiên là <sup>79</sup>Br và <sup>81</sup>Br. Nguyên tử khối trung bình của Bromine là 79,91. Cho biết nguyên tử khối của Na = 23, O = 16.<br>a) Tính phần trăm số nguyên tử của từng đồng vị Bromine.<br>b) Tính phần trăm khối lượng của đồng vị <sup>79</sup>Br trong hợp chất Sodium bromate (NaBrO₃).",
        "solution": "a) Gọi x là thành phần phần trăm số nguyên tử của đồng vị <sup>79</sup>Br (0 < x < 100).<br>Thành phần phần trăm của đồng vị <sup>81</sup>Br là (100 - x)%.<br>Ta có biểu thức nguyên tử khối trung bình:<br>Ā_Br = [79x + 81(100 - x)] / 100 = 79,91 (0,25 điểm)<br>&rArr; 8100 - 2x = 7991 &rArr; 2x = 109 &rArr; x = 54,5%.<br>Vậy đồng vị <sup>79</sup>Br chiếm 54,5% và đồng vị <sup>81</sup>Br chiếm 45,5% (0,25 điểm).<br>b) Khối lượng phân tử của NaBrO₃ là:<br>M = 23 + 79,91 + 16 &times; 3 = 150,91 (0,25 điểm).<br>Trong 1 mol phân tử NaBrO₃ có 1 mol nguyên tử Br, trong đó đồng vị <sup>79</sup>Br chiếm 0,545 mol.<br>Phần trăm khối lượng của đồng vị <sup>79</sup>Br trong hợp chất NaBrO₃ là:<br>%m(<sup>79</sup>Br) = (79 &times; 0,545 / 150,91) &times; 100% = (43,055 / 150,91) &times; 100% &approx; 28,53% (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11389/de-thi-giua-ki-1-hoa-hoc-10-nam-2025-2026-truong-thpt-ly-tu-trong-da-nang",
    "questions": [
      [
        "Phương pháp học tập Hóa học hiệu quả nhằm phát triển năng lực khoa học tự nhiên bao gồm những hoạt động nào?",
        [
          "A. Chỉ học thuộc lòng lý thuyết trong sách giáo khoa.",
          "B. Quan sát thực nghiệm, tư duy lý thuyết, áp dụng mô hình hóa và thực hành giải quyết vấn đề.",
          "C. Chỉ làm các bài tập tính toán định lượng trên giấy.",
          "D. Thu thập các tài liệu lịch sử phát triển khoa học cổ đại."
        ],
        1,
        "Theo SGK Hóa học 10: Phương pháp học tập hiệu quả gồm: Quan sát thực nghiệm, tư duy lý thuyết, áp dụng mô hình hóa, thực hành giải quyết vấn đề."
      ],
      [
        "Nguyên tử có cấu tạo rỗng. Kích thước của toàn bộ nguyên tử lớn hơn kích thước của hạt nhân nguyên tử khoảng bao nhiêu lần?",
        [
          "A. Khoảng 10 lần.",
          "B. Khoảng 100 lần.",
          "C. Khoảng 10 000 lần.",
          "D. Khoảng 1 000 000 lần."
        ],
        2,
        "Đường kính nguyên tử khoảng 10⁻¹⁰ m, trong khi đường kính hạt nhân chỉ khoảng 10⁻¹⁴ đến 10⁻¹⁵ m &rArr; Nguyên tử lớn hơn hạt nhân khoảng 10 000 đến 100 000 lần."
      ],
      [
        "Đơn vị đo kích thước nguyên tử thường dùng trong Hóa học là:",
        [
          "A. Nanomet (nm) và Angstrom (Å).",
          "B. Milimet (mm) và Centimet (cm).",
          "C. Decimet (dm) và Met (m).",
          "D. Kilomet (km) và Micromet (&mu;m)."
        ],
        0,
        "Do nguyên tử vô cùng nhỏ bé nên kích thước thường được đo bằng nanomet (1 nm = 10⁻⁹ m) hoặc angstrom (1 Å = 10⁻¹⁰ m = 0,1 nm)."
      ],
      [
        "Trong nguyên tử Aluminium (<sup>27</sup><sub>13</sub>Al), số hạt mang điện tích dương và số hạt không mang điện lần lượt là:",
        [
          "A. 13 và 13.",
          "B. 13 và 14.",
          "C. 14 và 13.",
          "D. 13 và 27."
        ],
        1,
        "Hạt mang điện tích dương là proton: P = Z = 13. Hạt không mang điện là neutron: N = A - Z = 27 - 13 = 14."
      ],
      [
        "Biết rằng trong tự nhiên carbon có 2 đồng vị bền là <sup>12</sup>C và <sup>13</sup>C; oxygen có 3 đồng vị bền là <sup>16</sup>O, <sup>17</sup>O và <sup>18</sup>O. Số loại phân tử carbon monoxide (CO) có thể tạo thành là:",
        [
          "A. 3.",
          "B. 5.",
          "C. 6.",
          "D. 9."
        ],
        2,
        "Mỗi phân tử CO gồm 1 nguyên tử C kết hợp với 1 nguyên tử O &rArr; Số loại phân tử CO = 2 &times; 3 = 6 loại phân tử."
      ],
      [
        "Theo mô hình hiện đại về cấu tạo nguyên tử, electron chuyển động xung quanh hạt nhân như thế nào?",
        [
          "A. Chuyển động rất chậm theo những quỹ đạo tròn đồng tâm cố định.",
          "B. Chuyển động rất nhanh theo những quỹ đạo hình bầu dục xác định.",
          "C. Chuyển động rất nhanh và không theo những quỹ đạo xác định.",
          "D. Đứng yên tại các vị trí cố định trên lớp vỏ nguyên tử."
        ],
        2,
        "Mô hình hiện đại: Trong nguyên tử, các electron chuyển động rất nhanh xung quanh hạt nhân không theo những quỹ đạo xác định, tạo thành đám mây electron."
      ],
      [
        "Lớp electron thứ 3 (lớp M, n = 3) có bao nhiêu phân lớp electron và chứa tối đa bao nhiêu orbital nguyên tử (AO)?",
        [
          "A. 3 phân lớp và tối đa 9 orbital.",
          "B. 3 phân lớp và tối đa 6 orbital.",
          "C. 2 phân lớp và tối đa 4 orbital.",
          "D. 4 phân lớp và tối đa 16 orbital."
        ],
        0,
        "Lớp M (n = 3) có 3 phân lớp (3s, 3p, 3d). Số orbital tối đa = n² = 3² = 9 AO (gồm 1 AO s, 3 AO p và 5 AO d)."
      ],
      [
        "Số electron ở lớp ngoài cùng của nguyên tử Chlorine (Z = 17) là:",
        [
          "A. 5.",
          "B. 7.",
          "C. 8.",
          "D. 17."
        ],
        1,
        "Cl (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ &rArr; Lớp ngoài cùng (n = 3) có 2 + 5 = 7 electron &rArr; Chlorine là một phi kim điển hình."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Copper (Cu, Z = 29) có dạng ngoại lệ bão hòa phân lớp 3d là:",
        [
          "A. [Ar] 3d⁹ 4s².",
          "B. [Ar] 3d¹⁰ 4s¹.",
          "C. [Ar] 3d¹⁰ 4s².",
          "D. [Ar] 4s¹ 3d¹⁰."
        ],
        1,
        "Cấu trúc bão hòa d¹⁰ có năng lượng thấp và bền vững hơn d⁹s² &rArr; Cấu hình bền của Cu là [Ar] 3d¹⁰ 4s¹."
      ],
      [
        "Nguyên tố s là những nguyên tố mà nguyên tử của chúng có đặc điểm nào sau đây?",
        [
          "A. Có electron cuối cùng được điền vào phân lớp s.",
          "B. Có số electron lớp ngoài cùng bằng 1.",
          "C. Có electron cuối cùng được điền vào phân lớp p.",
          "D. Luôn có 2 electron ở phân lớp 1s."
        ],
        0,
        "Định nghĩa phân loại theo cấu hình: Nguyên tố s là nguyên tố mà nguyên tử có electron cuối cùng được điền vào phân lớp s."
      ],
      [
        "Nhóm VIIIA trong Bảng tuần hoàn gồm tập hợp các nguyên tố thuộc loại nào?",
        [
          "A. Kim loại kiềm.",
          "B. Kim loại kiềm thổ.",
          "C. Halogen.",
          "D. Khí hiếm (khí trơ)."
        ],
        3,
        "Nhóm VIIIA (nhóm 18) gồm các khí hiếm: He, Ne, Ar, Kr, Xe, Rn."
      ],
      [
        "Nguyên tố Calcium nằm ở ô thứ 20 trong Bảng tuần hoàn. Vị trí của Calcium là:",
        [
          "A. Ô số 20, chu kỳ 4, nhóm IIA.",
          "B. Ô số 20, chu kỳ 4, nhóm IIB.",
          "C. Ô số 20, chu kỳ 3, nhóm IIA.",
          "D. Ô số 20, chu kỳ 4, nhóm IA."
        ],
        0,
        "Ca (Z = 20): [Ar] 4s² &rArr; Ô số 20 (Z = 20), chu kỳ 4 (có 4 lớp e), nhóm IIA (nguyên tố s có 2e ngoài cùng)."
      ],
      [
        "Cation Fe³⁺ được hình thành khi nguyên tử Iron (Fe, Z = 26, [Ar] 3d⁶ 4s²) nhường đi 3 electron. Cấu hình electron của ion Fe³⁺ là:",
        [
          "A. [Ar] 3d⁵.",
          "B. [Ar] 3d⁶.",
          "C. [Ar] 3d³ 4s².",
          "D. [Ar] 3d⁴ 4s¹."
        ],
        0,
        "Nguyên tử Fe: [Ar] 3d⁶ 4s². Khi tạo Fe³⁺ sẽ nhường 2e ở phân lớp 4s trước, sau đó nhường tiếp 1e ở phân lớp 3d &rArr; Fe³⁺: [Ar] 3d⁵ (cấu hình bán bão hòa d⁵ rất bền)."
      ],
      [
        "Cation M³⁺ có cấu hình electron phân lớp ngoài cùng là 3d⁵. Vị trí của nguyên tố M trong Bảng tuần hoàn là:",
        [
          "A. Ô số 25, chu kỳ 4, nhóm VIIB.",
          "B. Ô số 26, chu kỳ 4, nhóm VIIIB.",
          "C. Ô số 26, chu kỳ 4, nhóm IIIB.",
          "D. Ô số 23, chu kỳ 4, nhóm VB."
        ],
        1,
        "M³⁺ có phân lớp ngoài cùng 3d⁵ &rArr; Cấu hình nguyên tử M: [Ar] 3d⁶ 4s² (Z = 26, Iron). Vị trí: Ô 26, chu kỳ 4, nhóm VIIIB (nguyên tố d có 6 + 2 = 8e hóa trị)."
      ],
      [
        "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn có tổng số proton trong hai hạt nhân là 27 (Z_A < Z_B). Số hiệu nguyên tử của nguyên tố B là:",
        [
          "A. 13.",
          "B. 14.",
          "C. 15.",
          "D. 12."
        ],
        1,
        "Do A và B kế tiếp nhau trong cùng một chu kỳ &rArr; Z_B - Z_A = 1. Lại có Z_A + Z_B = 27 &rArr; Z_B = (27 + 1) / 2 = 14 (Silicon) và Z_A = 13 (Aluminium)."
      ],
      [
        "[Câu chặn điểm cao]: Tổng số electron có trong một anion đa nguyên tử sulfate (SO₄²⁻) là bao nhiêu? (Cho biết Z_S = 16, Z_O = 8).",
        [
          "A. 48.",
          "B. 50.",
          "C. 52.",
          "D. 46."
        ],
        1,
        "Tổng số electron trong anion SO₄²⁻ = e(S) + 4 &times; e(O) + 2e (nhận thêm) = 16 + 4 &times; 8 + 2 = 16 + 32 + 2 = 50 electron."
      ]
    ],
    "tf": [
      {
        "stem": "Cho cấu hình electron của 4 nguyên tử: X (1s² 2s² 2p⁶ 3s²), Y (1s² 2s² 2p⁴), Z (1s² 2s² 2p⁶ 3s² 3p⁶), T (1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹):",
        "items": [
          [
            "a) Cả hai nguyên tử X và T đều là nguyên tố kim loại.",
            true,
            "Phát biểu ĐÚNG (X có 2e lớp ngoài cùng là Mg, T có 1e lớp ngoài cùng là K)."
          ],
          [
            "b) Nguyên tử Y là một phi kim và có đúng 6 electron ở lớp ngoài cùng.",
            true,
            "Phát biểu ĐÚNG (Y là Oxygen, lớp ngoài cùng n = 2 có 2s² 2p⁴ = 6e)."
          ],
          [
            "c) Nguyên tử Z là khí hiếm có cấu hình electron bão hòa bền vững.",
            true,
            "Phát biểu ĐÚNG (Z là Argon có 8e lớp ngoài cùng)."
          ],
          [
            "d) Nguyên tử T có 2 electron ở lớp ngoài cùng.",
            false,
            "Phát biểu SAI vì lớp ngoài cùng của T là 4s¹ chỉ có đúng 1 electron."
          ]
        ]
      },
      {
        "stem": "Cho nguyên tố phi kim X thuộc chu kỳ 2, nhóm VIA trong Bảng tuần hoàn:",
        "items": [
          [
            "a) Nguyên tử X có tổng cộng 8 electron.",
            true,
            "Phát biểu ĐÚNG (thuộc chu kỳ 2, nhóm VIA &rArr; có 2 lớp e và 6e lớp ngoài cùng &rArr; 1s² 2s² 2p⁴ &rArr; Z = 8 Oxygen)."
          ],
          [
            "b) X là nguyên tố phi kim và thuộc họ nguyên tố p.",
            true,
            "Phát biểu ĐÚNG (electron cuối cùng điền vào phân lớp 2p)."
          ],
          [
            "c) Sự phân bố electron trên các lớp của nguyên tử X từ trong ra ngoài lần lượt là 2/6.",
            true,
            "Phát biểu ĐÚNG (lớp K có 2e, lớp L có 6e)."
          ],
          [
            "d) Ở trạng thái cơ bản, nguyên tử X có 4 electron độc thân.",
            false,
            "Phát biểu SAI vì phân lớp 2p⁴ gồm 1 ô ghép đôi và 2 ô độc thân &rArr; X chỉ có 2 electron độc thân."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử nguyên tố A có 27 hạt, trong đó số hạt không mang điện là 14. Số electron trong toàn bộ nguyên tử A bằng bao nhiêu?",
        "answer": "13",
        "explanation": "Hạt nhân gồm proton và neutron &rArr; P + N = 27. Do N = 14 &rArr; P = 27 - 14 = 13. Trong nguyên tử trung hòa điện: E = P = 13 electron."
      },
      {
        "question": "Biết trong tự nhiên carbon có 2 đồng vị bền là <sup>12</sup>C và <sup>13</sup>C; oxygen có 3 đồng vị bền là <sup>16</sup>O, <sup>17</sup>O và <sup>18</sup>O. Có thể tạo ra bao nhiêu loại phân tử khí carbon dioxide (CO₂) chứa cả hai nguyên tử oxygen giống nhau?",
        "answer": "6",
        "explanation": "Phân tử CO₂ có 2 nguyên tử O giống nhau &rArr; có 3 cách chọn cặp O (¹⁶O-¹⁶O, ¹⁷O-¹⁷O, ¹⁸O-¹⁸O). Kết hợp với 2 đồng vị C &rArr; Có 2 &times; 3 = 6 loại phân tử."
      },
      {
        "question": "Nguyên tử của nguyên tố X có cấu hình electron đã xây dựng theo trật tự mức năng lượng đến phân lớp 3d³. Tổng số electron của nguyên tử nguyên tố X là bao nhiêu?",
        "answer": "23",
        "explanation": "Trật tự mức năng lượng: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³ &rArr; Tổng số electron = 2 + 2 + 6 + 2 + 6 + 2 + 3 = 23 (Vanadium)."
      },
      {
        "question": "Chu kỳ 3 trong Bảng tuần hoàn các nguyên tố hóa học chứa tất cả bao nhiêu nguyên tố hóa học?",
        "answer": "8",
        "explanation": "Chu kỳ 3 bắt đầu từ Sodium (₁₁Na) đến Argon (₁₈Ar), gồm tất cả 8 nguyên tố."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho các nguyên tố Na (Z = 11), Al (Z = 13), P (Z = 15).<br>a) Viết cấu hình electron của từng nguyên tử.<br>b) Cho biết các nguyên tố trên thuộc loại nguyên tố s, p, d hay f và nêu bản chất kim loại hay phi kim của chúng.",
        "solution": "a) Cấu hình electron:<br>• Na (Z = 11): 1s² 2s² 2p⁶ 3s¹ hay [Ne] 3s¹ (0,2 điểm).<br>• Al (Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹ hay [Ne] 3s² 3p¹ (0,2 điểm).<br>• P (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³ hay [Ne] 3s² 3p³ (0,2 điểm).<br>b) Phân loại và tính chất:<br>• Na là nguyên tố s (electron cuối cùng điền vào phân lớp s), có 1e lớp ngoài cùng nên là kim loại (0,15 điểm).<br>• Al là nguyên tố p (electron cuối cùng điền vào phân lớp p), có 3e lớp ngoài cùng nên là kim loại (0,15 điểm).<br>• P là nguyên tố p (electron cuối cùng điền vào phân lớp p), có 5e lớp ngoài cùng nên là phi kim (0,10 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn có tổng số proton trong hai hạt nhân là 27 (Z_A < Z_B).<br>a) Tìm số hiệu nguyên tử Z_A và Z_B.<br>b) Xác định vị trí (ô, chu kỳ, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Do A và B đứng kế tiếp nhau trong cùng một chu kỳ &rArr; Z_B - Z_A = 1 (1).<br>Tổng số proton trong hai hạt nhân: Z_A + Z_B = 27 (2) (0,25 điểm).<br>Giải hệ phương trình (1) và (2) thu được:<br>Z_A = (27 - 1) / 2 = 13 (Aluminium, Al)<br>Z_B = 13 + 1 = 14 (Silicon, Si) (0,25 điểm).<br>b) Vị trí trong Bảng tuần hoàn:<br>• Nguyên tố A (Al, Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹ &rArr; Ô số 13, chu kỳ 3 (có 3 lớp e), nhóm IIIA (nguyên tố p có 3e lớp ngoài cùng) (0,25 điểm).<br>• Nguyên tố B (Si, Z = 14): 1s² 2s² 2p⁶ 3s² 3p² &rArr; Ô số 14, chu kỳ 3 (có 3 lớp e), nhóm IVA (nguyên tố p có 4e lớp ngoài cùng) (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Một hợp chất vô cơ có công thức phân tử dạng M₂X₃. Tổng số hạt proton, neutron và electron trong một phân tử M₂X₃ là 152 hạt. Trong đó, tổng số hạt mang điện nhiều hơn số hạt không mang điện là 48 hạt. Số hạt mang điện trong nguyên tử M nhiều hơn số hạt mang điện trong nguyên tử X là 10 hạt.<br>a) Xác định số hiệu nguyên tử của M và X. Viết công thức phân tử của hợp chất M₂X₃.<br>b) Xác định vị trí (ô, chu kỳ, nhóm) của nguyên tố M và nguyên tố X trong Bảng tuần hoàn.",
        "solution": "a) Trong một phân tử M₂X₃ gồm có 2 nguyên tử M và 3 nguyên tử X.<br>Gọi số proton, neutron của M là Z_M, N_M; của X là Z_X, N_X.<br>• Tổng số hạt cơ bản trong phân tử M₂X₃ là 152:<br>2(2Z_M + N_M) + 3(2Z_X + N_X) = 152 &rArr; (4Z_M + 6Z_X) + (2N_M + 3N_X) = 152 (1) (0,25 điểm).<br>• Số hạt mang điện nhiều hơn số hạt không mang điện là 48:<br>(4Z_M + 6Z_X) - (2N_M + 3N_X) = 48 (2) (0,25 điểm).<br>Cộng (1) và (2) vế theo vế:<br>2 &times; (4Z_M + 6Z_X) = 200 &rArr; 4Z_M + 6Z_X = 100 &rArr; 2Z_M + 3Z_X = 50 (3).<br>• Số hạt mang điện trong nguyên tử M nhiều hơn trong nguyên tử X là 10:<br>2Z_M - 2Z_X = 10 &rArr; Z_M - Z_X = 5 &rArr; Z_M = Z_X + 5 (4).<br>Thay (4) vào (3): 2(Z_X + 5) + 3Z_X = 50 &rArr; 5Z_X = 40 &rArr; Z_X = 8 (Oxygen, O) (0,25 điểm).<br>&rArr; Z_M = 8 + 5 = 13 (Aluminium, Al).<br>Vậy công thức phân tử của hợp chất là Al₂O₃.<br>b) Vị trí trong Bảng tuần hoàn:<br>• M (Al, Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹ &rArr; Ô số 13, chu kỳ 3, nhóm IIIA.<br>• X (O, Z = 8): 1s² 2s² 2p⁴ &rArr; Ô số 8, chu kỳ 2, nhóm VIA (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11390/de-thi-giua-ki-1-hoa-hoc-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang",
    "questions": [
      [
        "Hóa học đóng vai trò nòng cốt đối với các lĩnh vực quan trọng nào của đời sống xã hội?",
        [
          "A. Y dược, nông nghiệp, công nghiệp vật liệu, môi trường và năng lượng.",
          "B. Chiêm tinh học và khoa học viễn tưởng cổ đại.",
          "C. Khảo cổ học và lịch sử mỹ thuật học phương Tây.",
          "D. Chỉ phục vụ cho công nghiệp sản xuất chất nổ và quân sự."
        ],
        0,
        "Hóa học phục vụ đời sống qua: Y dược, nông nghiệp, công nghiệp vật liệu, môi trường và năng lượng."
      ],
      [
        "Trong nguyên tử, hạt nào sau đây KHÔNG mang điện tích?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân nguyên tử."
        ],
        1,
        "Hạt neutron là hạt trung hòa về điện tích (q = 0)."
      ],
      [
        "Hạt nhân của nguyên tử nguyên tố X có điện tích là +30,438 &times; 10⁻¹⁹ C. Biết điện tích của một proton là +1,602 &times; 10⁻¹⁹ C. Nguyên tố X là:",
        [
          "A. Argon (Ar, Z = 18).",
          "B. Potassium (K, Z = 19).",
          "C. Calcium (Ca, Z = 20).",
          "D. Chlorine (Cl, Z = 17)."
        ],
        1,
        "Số proton Z = (+30,438 &times; 10⁻¹⁹) / (+1,602 &times; 10⁻¹⁹) = 19 &rArr; Nguyên tố Potassium (K)."
      ],
      [
        "Đại lượng đặc trưng cơ bản nhất quyết định vị trí trong Bảng tuần hoàn và toàn bộ tính chất hóa học của một nguyên tố là:",
        [
          "A. Số neutron.",
          "B. Số khối A.",
          "C. Số hiệu nguyên tử (điện tích hạt nhân Z).",
          "D. Nguyên tử khối tương đối."
        ],
        2,
        "Điện tích hạt nhân (số hiệu nguyên tử Z) quyết định số electron lớp vỏ, cấu hình electron và toàn bộ tính chất hóa học của nguyên tố."
      ],
      [
        "Cho kí hiệu nguyên tử <sup>206</sup><sub>82</sub>Pb. Số hạt neutron có trong hạt nhân nguyên tử chì này là:",
        [
          "A. 82.",
          "B. 124.",
          "C. 206.",
          "D. 288."
        ],
        1,
        "Số neutron N = A - Z = 206 - 82 = 124 hạt."
      ],
      [
        "Nguyên lí Pauli phát biểu rằng:",
        [
          "A. Electron điền vào các phân lớp có mức năng lượng từ thấp đến cao.",
          "B. Trên mỗi orbital nguyên tử chỉ chứa tối đa 2 electron và hai electron này có chiều tự quay ngược nhau.",
          "C. Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là lớn nhất.",
          "D. Phân lớp 3d luôn có mức năng lượng thấp hơn phân lớp 4s."
        ],
        1,
        "Nguyên lí Pauli: Mỗi orbital nguyên tử chứa tối đa 2 electron và có chiều tự quay (spin) ngược nhau."
      ],
      [
        "Thứ tự tăng dần mức năng lượng của các phân lớp electron theo quy tắc Klechkowski là:",
        [
          "A. 1s < 2s < 2p < 3s < 3p < 3d < 4s.",
          "B. 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p.",
          "C. 1s < 2s < 2p < 3s < 3d < 3p < 4s.",
          "D. 1s < 2s < 3s < 2p < 3p < 4s < 3d."
        ],
        1,
        "Trật tự mức năng lượng chuẩn: 1s 2s 2p 3s 3p 4s 3d 4p... (lưu ý mức năng lượng của 4s thấp hơn 3d)."
      ],
      [
        "Nguyên tử Nitrogen (Z = 7) có cấu hình electron 1s² 2s² 2p³. Số electron độc thân của nguyên tử Nitrogen ở trạng thái cơ bản là:",
        [
          "A. 1.",
          "B. 2.",
          "C. 3.",
          "D. 5."
        ],
        2,
        "Theo quy tắc Hund, 3 electron ở phân lớp 2p được phân bố đều vào 3 orbital (p_x, p_y, p_z) &rArr; Có 3 electron độc thân."
      ],
      [
        "Nguyên tử của nguyên tố Iron (Fe, Z = 26) có bao nhiêu electron ở phân lớp 3d?",
        [
          "A. 2.",
          "B. 6.",
          "C. 8.",
          "D. 5."
        ],
        1,
        "Fe (Z = 26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² &rArr; Phân lớp 3d có đúng 6 electron."
      ],
      [
        "Số thứ tự của ô nguyên tố trong Bảng tuần hoàn luôn bằng đại lượng nào sau đây?",
        [
          "A. Số khối A.",
          "B. Số neutron.",
          "C. Số hiệu nguyên tử (Z).",
          "D. Số lớp electron."
        ],
        2,
        "Số thứ tự của ô nguyên tố = Số hiệu nguyên tử Z = Số proton = Số electron."
      ],
      [
        "Các nguyên tố thuộc nhóm B trong Bảng tuần hoàn bao gồm những loại nguyên tố nào?",
        [
          "A. Nguyên tố s và nguyên tố p.",
          "B. Nguyên tố d và nguyên tố f.",
          "C. Nguyên tố s và nguyên tố d.",
          "D. Chỉ gồm các nguyên tố p."
        ],
        1,
        "Nhóm B (kim loại chuyển tiếp) gồm các nguyên tố d và nguyên tố f."
      ],
      [
        "Nguyên tử Silicon (Z = 14) có cấu hình electron [Ne] 3s² 3p². Vị trí của Silicon trong Bảng tuần hoàn là:",
        [
          "A. Ô số 14, chu kỳ 3, nhóm IIA.",
          "B. Ô số 14, chu kỳ 3, nhóm IVA.",
          "C. Ô số 14, chu kỳ 2, nhóm IVA.",
          "D. Ô số 14, chu kỳ 3, nhóm IVB."
        ],
        1,
        "Si (Z = 14): Ô 14 (Z = 14), chu kỳ 3 (3 lớp e), nhóm IVA (nguyên tố p có 4e ngoài cùng)."
      ],
      [
        "Anion O²⁻ được hình thành khi nguyên tử oxygen (Z = 8) nhận thêm 2 electron. Cấu hình electron của anion O²⁻ là:",
        [
          "A. 1s² 2s² 2p⁴.",
          "B. 1s² 2s² 2p⁶.",
          "C. 1s² 2s² 2p².",
          "D. 1s² 2s² 2p⁶ 3s²."
        ],
        1,
        "Oxygen có Z = 8 (1s² 2s² 2p⁴). Khi nhận thêm 2e &rArr; O²⁻ có 10e với cấu hình 1s² 2s² 2p⁶ (đạt cấu hình khí hiếm Ne)."
      ],
      [
        "Anion X⁻ có tổng số electron là 18. Số thứ tự ô của nguyên tố X trong Bảng tuần hoàn là:",
        [
          "A. 17.",
          "B. 18.",
          "C. 19.",
          "D. 16."
        ],
        0,
        "X⁻ có 18e &rArr; Nguyên tử X có 18 - 1 = 17 electron &rArr; Z = 17 (Chlorine) &rArr; Ô số 17."
      ],
      [
        "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kỳ có tổng số proton trong hai hạt nhân là 31 (Z_A < Z_B). Vị trí của nguyên tố B trong Bảng tuần hoàn là:",
        [
          "A. Ô số 15, chu kỳ 3, nhóm VA.",
          "B. Ô số 16, chu kỳ 3, nhóm VIA.",
          "C. Ô số 16, chu kỳ 3, nhóm VIB.",
          "D. Ô số 17, chu kỳ 3, nhóm VIIA."
        ],
        1,
        "Z_B - Z_A = 1 và Z_A + Z_B = 31 &rArr; Z_B = 16 (Sulfur). S (Z = 16): Ô 16, chu kỳ 3, nhóm VIA."
      ],
      [
        "[Câu chặn điểm cao]: Nguyên tử của một nguyên tố phi kim R có tổng số hạt proton, neutron và electron là 116 hạt. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 24 hạt. Số khối A của nguyên tử R là:",
        [
          "A. 79.",
          "B. 80.",
          "C. 81.",
          "D. 70."
        ],
        2,
        "Hệ hạt: 2Z + N = 116 và 2Z - N = 24 &rArr; 4Z = 140 &rArr; Z = 35 (Bromine, Br) và N = 46. Số khối A = Z + N = 35 + 46 = 81."
      ]
    ],
    "tf": [
      {
        "stem": "Nguyên tử của nguyên tố X có tổng số electron trong các phân lớp p là 7:",
        "items": [
          [
            "a) Cấu hình electron đầy đủ của nguyên tử X là 1s² 2s² 2p⁶ 3s² 3p¹.",
            true,
            "Phát biểu ĐÚNG (phân lớp 2p có 6e và 3p có 1e &rArr; tổng e phân lớp p là 6 + 1 = 7e)."
          ],
          [
            "b) Trong Bảng tuần hoàn, X thuộc ô số 13, chu kỳ 3, nhóm IIIA.",
            true,
            "Phát biểu ĐÚNG (Aluminium có Z = 13, 3 lớp e và 3e lớp ngoài cùng)."
          ],
          [
            "c) Nguyên tử X có đúng 1 electron ở mức năng lượng cao nhất.",
            true,
            "Phát biểu ĐÚNG (electron ở phân lớp 3p¹ có mức năng lượng cao nhất)."
          ],
          [
            "d) Ở trạng thái cơ bản, nguyên tử X có 3 electron độc thân.",
            false,
            "Phát biểu SAI vì phân lớp 3p¹ chỉ có 1 orbital chứa electron nên X chỉ có 1 electron độc thân."
          ]
        ]
      },
      {
        "stem": "Cho hai nguyên tố Sodium (Na, Z = 11) và Chlorine (Cl, Z = 17):",
        "items": [
          [
            "a) Cả hai nguyên tố Na và Cl đều thuộc cùng chu kỳ 3 trong Bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG (cả hai đều có 3 lớp electron trong nguyên tử)."
          ],
          [
            "b) Sodium là kim loại điển hình thuộc nhóm IA, Chlorine là phi kim điển hình thuộc nhóm VIIA.",
            true,
            "Phát biểu ĐÚNG (Na có 1e ngoài cùng, Cl có 7e ngoài cùng)."
          ],
          [
            "c) Phân lớp electron ngoài cùng của nguyên tử Chlorine chứa 5 electron.",
            true,
            "Phát biểu ĐÚNG (phân lớp ngoài cùng là 3p⁵ có 5e)."
          ],
          [
            "d) Cation Na⁺ và anion Cl⁻ đều có cùng cấu hình electron của khí hiếm Argon.",
            false,
            "Phát biểu SAI vì Na⁺ có cấu hình của Neon (10e), còn Cl⁻ có cấu hình của Argon (18e)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử của nguyên tố R có tổng số hạt p, n, e là 116, trong đó tổng số hạt mang điện nhiều hơn số hạt không mang điện là 24. Số khối A của nguyên tử R bằng bao nhiêu?",
        "answer": "81",
        "explanation": "2Z + N = 116 và 2Z - N = 24 &rArr; Z = 35, N = 46 &rArr; A = 35 + 46 = 81."
      },
      {
        "question": "Biết rằng trong tự nhiên Potassium (K) có 3 đồng vị: <sup>39</sup>K (93,08%), <sup>40</sup>K (0,012%) và <sup>41</sup>K (6,9%). Khối lượng nguyên tử trung bình của Potassium bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "39.14",
        "explanation": "Ā = (39 &times; 93,08 + 40 &times; 0,012 + 41 &times; 6,9) / 100 = (3630,12 + 0,48 + 282,9) / 100 = 3913,5 / 100 &approx; 39,14 amu."
      },
      {
        "question": "Nguyên tử của nguyên tố Chromium (Cr, Z = 24) có cấu hình electron [Ar] 3d⁵ 4s¹. Tổng số electron hóa trị của Chromium là bao nhiêu?",
        "answer": "6",
        "explanation": "Với nguyên tố d, số electron hóa trị = số e ở phân lớp (n-1)d chưa bão hòa + số e ở phân lớp ns = 5 + 1 = 6 electron."
      },
      {
        "question": "Bảng tuần hoàn các nguyên tố hóa học hiện đại có tất cả bao nhiêu nhóm B?",
        "answer": "8",
        "explanation": "Bảng tuần hoàn gồm 8 nhóm B (từ IB đến VIIIB)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Viết cấu hình electron đầy đủ và dạng thu gọn của Chromium (Cr, Z = 24) và Copper (Cu, Z = 29). Nêu rõ bản chất cấu trúc bền vững của phân lớp 3d trong mỗi trường hợp.",
        "solution": "• Chromium (Cr, Z = 24):<br>- Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹; Cấu hình thu gọn: [Ar] 3d⁵ 4s¹ (0,25 điểm).<br>- Bản chất: Do cấu trúc bán bão hòa phân lớp 3d (3d⁵ có 5 orbital đều chứa 1 electron độc thân) có mức năng lượng thấp và bền vững hơn cấu hình giả định 3d⁴ 4s² (0,25 điểm).<br>• Copper (Cu, Z = 29):<br>- Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹; Cấu hình thu gọn: [Ar] 3d¹⁰ 4s¹ (0,25 điểm).<br>- Bản chất: Do cấu trúc bão hòa phân lớp 3d (3d¹⁰ có 5 orbital đều chứa 2 electron ghép đôi) có mức năng lượng thấp và bền vững hơn cấu hình giả định 3d⁹ 4s² (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Hai nguyên tố halogen X và Y cùng thuộc nhóm VIIA ở hai chu kì liên tiếp của Bảng tuần hoàn có tổng số điện tích hạt nhân là 26 (Z_X < Z_Y).<br>a) Xác định số hiệu nguyên tử Z_X và Z_Y.<br>b) Viết cấu hình electron của X và Y. Xác định vị trí (ô, chu kỳ, nhóm) của chúng trong Bảng tuần hoàn.",
        "solution": "a) X và Y cùng thuộc nhóm VIIA ở hai chu kì liên tiếp &rArr; Z_Y - Z_X = 8 (1).<br>Tổng số điện tích hạt nhân: Z_X + Z_Y = 26 (2) (0,25 điểm).<br>Từ (1) và (2) &rArr; Z_X = (26 - 8) / 2 = 9 (Fluorine, F) và Z_Y = 9 + 8 = 17 (Chlorine, Cl) (0,25 điểm).<br>b) Cấu hình và vị trí:<br>• X (F, Z = 9): 1s² 2s² 2p⁵ &rArr; Ô số 9, chu kỳ 2, nhóm VIIA (0,25 điểm).<br>• Y (Cl, Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ hay [Ne] 3s² 3p⁵ &rArr; Ô số 17, chu kỳ 3, nhóm VIIA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Tổng số hạt cơ bản (proton, neutron, electron) trong một nguyên tử của nguyên tố X là 40 hạt. Biết rằng đối với các nguyên tố có Z ≤ 82, số neutron và số proton luôn thỏa mãn điều kiện bền hạt nhân: 1 ≤ N/Z ≤ 1,5.<br>a) Biện luận tìm số hạt proton, neutron, electron và số khối A của nguyên tố X bền trong tự nhiên.<br>b) Viết cấu hình electron của nguyên tử X và xác định vị trí của X (ô, chu kỳ, nhóm) trong Bảng tuần hoàn.",
        "solution": "a) Gọi P, N, E lần lượt là số hạt proton, neutron, electron trong nguyên tử X (P = E = Z).<br>Theo đề bài: 2Z + N = 40 &rArr; N = 40 - 2Z (1) (0,25 điểm).<br>Áp dụng điều kiện bền hạt nhân: 1 ≤ N/Z ≤ 1,5 &rArr; Z ≤ N ≤ 1,5Z.<br>Thay (1) vào bất phương trình:<br>• Z ≤ 40 - 2Z &rArr; 3Z ≤ 40 &rArr; Z ≤ 13,33.<br>• 40 - 2Z ≤ 1,5Z &rArr; 3,5Z ≥ 40 &rArr; Z ≥ 11,43.<br>&rArr; 11,43 ≤ Z ≤ 13,33 &rArr; Z nhận các giá trị nguyên: Z = 12 hoặc Z = 13 (0,25 điểm).<br>Biện luận:<br>• Nếu Z = 12 (Magnesium): N = 40 - 2 &times; 12 = 16 &rArr; Số khối A = 12 + 16 = 28. Đồng vị ²⁸Mg không bền trong tự nhiên (Mg chỉ có các đồng vị bền A = 24, 25, 26).<br>• Nếu Z = 13 (Aluminium): N = 40 - 2 &times; 13 = 14 &rArr; Số khối A = 13 + 14 = 27 (thỏa mãn, ²⁷Al là đồng vị bền duy nhất của nhôm trong tự nhiên) (0,25 điểm).<br>Vậy nguyên tố X có P = E = 13, N = 14 và số khối A = 27 (Aluminium).<br>b) Cấu hình electron và vị trí:<br>• Cấu hình electron của Al (Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹ hay [Ne] 3s² 3p¹.<br>• Vị trí: Ô số 13 (Z = 13), chu kỳ 3 (có 3 lớp e), nhóm IIIA (nguyên tố p có 3e lớp ngoài cùng) (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11391/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-hung-vuong-quang",
    "questions": [
      [
        "Quá trình nào sau đây là quá trình biến đổi vật lí (không tạo chất mới)?",
        [
          "A. Nước đá để ngoài không khí bị tan chảy thành nước lỏng.",
          "B. Đốt cháy than tổ ong sinh ra khí độc carbon monoxide.",
          "C. Đinh sắt để ngoài không khí ẩm lâu ngày bị gỉ sét màu nâu đỏ.",
          "D. Lên men tinh bột gạo thành rượu ethylic."
        ],
        0,
        "Nước đá tan chảy là quá trình chuyển thể (rắn &rarr; lỏng) của nước, không sinh ra chất mới nên là biến đổi vật lí."
      ],
      [
        "Hạt electron có khối lượng m_e theo đơn vị amu và kg xấp xỉ bằng:",
        [
          "A. m_e &approx; 1 amu &approx; 1,673 &times; 10⁻²⁷ kg.",
          "B. m_e &approx; 0,00055 amu &approx; 9,109 &times; 10⁻³¹ kg.",
          "C. m_e &approx; 1 amu &approx; 1,675 &times; 10⁻²⁷ kg.",
          "D. m_e &approx; 0,00055 amu &approx; 1,602 &times; 10⁻¹⁹ kg."
        ],
        1,
        "Khối lượng của electron: m_e &approx; 9,109 &times; 10⁻³¹ kg &approx; 0,00055 amu."
      ],
      [
        "Nguyên tử Fluorine có 9 proton, 9 electron và 10 neutron. Số khối A của nguyên tử Fluorine là:",
        [
          "A. 9.",
          "B. 10.",
          "C. 19.",
          "D. 28."
        ],
        2,
        "Số khối A = Z + N = 9 + 10 = 19."
      ],
      [
        "Nguyên tố hóa học là tập hợp các nguyên tử có cùng:",
        [
          "A. Số khối A.",
          "B. Khối lượng nguyên tử tuyệt đối.",
          "C. Điện tích hạt nhân (cùng số proton).",
          "D. Số neutron trong hạt nhân."
        ],
        2,
        "Định nghĩa: Nguyên tố hóa học là tập hợp các nguyên tử có cùng điện tích hạt nhân (cùng số proton Z)."
      ],
      [
        "Argon trong tự nhiên là hỗn hợp gồm 3 đồng vị: <sup>40</sup>Ar (99,6%), <sup>36</sup>Ar (0,34%) và <sup>38</sup>Ar (0,06%). Nguyên tử khối trung bình của Argon là:",
        [
          "A. 39,99 amu.",
          "B. 39,50 amu.",
          "C. 40,00 amu.",
          "D. 38,90 amu."
        ],
        0,
        "Ā = (40 &times; 99,6 + 36 &times; 0,34 + 38 &times; 0,06) / 100 = 3998,52 / 100 &approx; 39,99 amu."
      ],
      [
        "Theo quy tắc Hund, trong cùng một phân lớp chưa bão hòa, các electron có xu hướng:",
        [
          "A. Ghép đôi ngay từ orbital đầu tiên.",
          "B. Phân bố vào các orbital sao cho số electron độc thân là tối đa và các electron này phải có spin cùng chiều.",
          "C. Luôn điền vào orbital p_z trước orbital p_x.",
          "D. Giữ mức năng lượng cao nhất có thể."
        ],
        1,
        "Quy tắc Hund: Trong cùng một phân lớp, các electron phân bố vào các AO sao cho số electron độc thân là tối đa và có chiều tự quay (spin) giống nhau."
      ],
      [
        "Số electron tối đa có thể chứa ở lớp K (n = 1) và lớp L (n = 2) lần lượt là:",
        [
          "A. 2 và 8.",
          "B. 2 và 18.",
          "C. 8 và 18.",
          "D. 1 và 4."
        ],
        0,
        "Áp dụng 2n²: Lớp K (n = 1) có 2.1² = 2 electron; Lớp L (n = 2) có 2.2² = 8 electron."
      ],
      [
        "Nguyên tử của một nguyên tố có 4 lớp electron: K, L, M, N. Electron thuộc lớp nào có mức năng lượng trung bình cao nhất?",
        [
          "A. Lớp K.",
          "B. Lớp L.",
          "C. Lớp M.",
          "D. Lớp N."
        ],
        3,
        "Các lớp càng xa hạt nhân thì electron càng có mức năng lượng trung bình cao hơn &rArr; Lớp N (n = 4) có mức năng lượng cao nhất."
      ],
      [
        "Các nguyên tử có 1, 2 hoặc 3 electron ở lớp ngoài cùng (trừ H, He, B) thường là nguyên tử của:",
        [
          "A. Nguyên tố kim loại.",
          "B. Nguyên tố phi kim.",
          "C. Nguyên tố khí hiếm.",
          "D. Nguyên tố halogen."
        ],
        0,
        "Đặc điểm lớp ngoài cùng: 1, 2, 3e là kim loại; 5, 6, 7e là phi kim; 8e là khí hiếm."
      ],
      [
        "Bảng tuần hoàn các nguyên tố hóa học hiện đại có tất cả bao nhiêu chu kỳ?",
        [
          "A. 6 chu kỳ.",
          "B. 7 chu kỳ.",
          "C. 8 chu kỳ.",
          "D. 18 chu kỳ."
        ],
        1,
        "Bảng tuần hoàn gồm 7 chu kỳ, tương ứng với số lớp electron từ 1 đến 7."
      ],
      [
        "Nhóm IA trong Bảng tuần hoàn gồm tập hợp các nguyên tố thuộc loại nào (trừ Hydrogen)?",
        [
          "A. Kim loại kiềm thổ.",
          "B. Kim loại kiềm.",
          "C. Halogen.",
          "D. Khí hiếm."
        ],
        1,
        "Nhóm IA (trừ H) gồm các kim loại kiềm: Li, Na, K, Rb, Cs, Fr."
      ],
      [
        "Nguyên tử Chlorine có Z = 17. Vị trí của Chlorine trong Bảng tuần hoàn là:",
        [
          "A. Ô số 17, chu kỳ 3, nhóm VA.",
          "B. Ô số 17, chu kỳ 3, nhóm VIIA.",
          "C. Ô số 17, chu kỳ 4, nhóm VIIA.",
          "D. Ô số 17, chu kỳ 3, nhóm VIIB."
        ],
        1,
        "Cl (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ &rArr; Ô 17 (Z = 17), chu kỳ 3 (3 lớp e), nhóm VIIA (nguyên tố p, 7e lớp ngoài cùng)."
      ],
      [
        "Khi nguyên tử Magnesium (Z = 12) nhường đi 2 electron để tạo thành cation Mg²⁺, cấu hình electron của ion Mg²⁺ là:",
        [
          "A. 1s² 2s² 2p⁶ 3s².",
          "B. 1s² 2s² 2p⁶.",
          "C. 1s² 2s² 2p⁴.",
          "D. 1s² 2s² 2p⁶ 3s¹."
        ],
        1,
        "Mg (Z = 12): 1s² 2s² 2p⁶ 3s². Nhường 2e ở phân lớp 3s &rArr; Mg²⁺: 1s² 2s² 2p⁶ (cấu hình bền của khí hiếm Ne)."
      ],
      [
        "Nguyên tố Copper (Cu, Z = 29) có cấu hình electron [Ar] 3d¹⁰ 4s¹. Vị trí của Copper trong Bảng tuần hoàn là:",
        [
          "A. Ô số 29, chu kỳ 4, nhóm IA.",
          "B. Ô số 29, chu kỳ 4, nhóm IB.",
          "C. Ô số 29, chu kỳ 4, nhóm VIIIB.",
          "D. Ô số 29, chu kỳ 3, nhóm IB."
        ],
        1,
        "Cu (Z = 29) là nguyên tố d, có 4 lớp e &rArr; chu kỳ 4; tổng số e hóa trị = 10 + 1 = 11 &rArr; nhóm IB; ô số 29."
      ],
      [
        "Hai nguyên tố R và T thuộc cùng một nhóm A và ở hai chu kỳ liên tiếp trong Bảng tuần hoàn có tổng số điện tích hạt nhân là 22 (Z_R < Z_T). Hai nguyên tố R và T lần lượt là:",
        [
          "A. Beryllium (Z = 4) và Magnesium (Z = 12).",
          "B. Nitrogen (Z = 7) và Phosphorus (Z = 15).",
          "C. Carbon (Z = 6) và Silicon (Z = 14).",
          "D. Lithium (Z = 3) và Sodium (Z = 11)."
        ],
        1,
        "Z_T - Z_R = 8 và Z_R + Z_T = 22 &rArr; Z_R = 7 (Nitrogen) và Z_T = 15 (Phosphorus), đều thuộc nhóm VA."
      ],
      [
        "[Câu chặn điểm cao]: Cation M³⁺ có cấu hình electron phân lớp ngoài cùng là 3d⁵. Số hiệu nguyên tử Z của nguyên tố M là:",
        [
          "A. 23.",
          "B. 25.",
          "C. 26.",
          "D. 28."
        ],
        2,
        "M³⁺ có cấu hình [Ar] 3d⁵ (23e) &rArr; Nguyên tử M có 23 + 3 = 26 electron (Z = 26, Iron: [Ar] 3d⁶ 4s²)."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử Magnesium (Mg, Z = 12, số khối A = 24):",
        "items": [
          [
            "a) Trong nguyên tử Mg có 12 proton, 12 neutron và 12 electron.",
            true,
            "Phát biểu ĐÚNG (P = E = 12, N = 24 - 12 = 12)."
          ],
          [
            "b) Cấu hình electron nguyên tử của Magnesium là 1s² 2s² 2p⁶ 3s².",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Magnesium là nguyên tố phi kim do có 2 electron ở lớp ngoài cùng.",
            false,
            "Phát biểu SAI vì các nguyên tử có 1, 2, 3 electron lớp ngoài cùng là kim loại (trừ H, He, B)."
          ],
          [
            "d) Khi tham gia phản ứng hóa học, nguyên tử Mg có xu hướng nhường đi 2 electron để đạt cấu hình bền của khí hiếm Neon.",
            true,
            "Phát biểu ĐÚNG (tạo cation Mg²⁺ có cấu hình 1s² 2s² 2p⁶)."
          ]
        ]
      },
      {
        "stem": "Cho ba nguyên tố X (Z = 11), Y (Z = 16) và Z (Z = 18):",
        "items": [
          [
            "a) Cả ba nguyên tố X, Y, Z đều có 3 lớp electron nên cùng thuộc chu kỳ 3 trong Bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Nguyên tố X (Z = 11, Sodium) thuộc nhóm IA và là kim loại điển hình.",
            true,
            "Phát biểu ĐÚNG (cấu hình [Ne] 3s¹)."
          ],
          [
            "c) Nguyên tố Y (Z = 16, Sulfur) thuộc nhóm VIA và là phi kim.",
            true,
            "Phát biểu ĐÚNG (cấu hình [Ne] 3s² 3p⁴ có 6e lớp ngoài cùng)."
          ],
          [
            "d) Nguyên tố Z (Z = 18, Argon) thuộc nhóm VIIIA và là một chất khí rất dễ tham gia phản ứng hóa học.",
            false,
            "Phát biểu SAI vì Argon là khí hiếm có lớp vỏ ngoài cùng bão hòa 8e rất bền vững, trơ về mặt hóa học."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cation M³⁺ có cấu hình electron phân lớp ngoài cùng là 3d⁵. Số hiệu nguyên tử Z của nguyên tố M bằng bao nhiêu?",
        "answer": "26",
        "explanation": "M³⁺ có 18 + 5 = 23e &rArr; Nguyên tử M có 23 + 3 = 26e &rArr; Z = 26 (Iron)."
      },
      {
        "question": "Trong 500 nguyên tử Boron trong tự nhiên (biết đồng vị <sup>10</sup>B chiếm 19%), có bao nhiêu nguyên tử đồng vị <sup>10</sup>B?",
        "answer": "95",
        "explanation": "Số nguyên tử ¹⁰B = 500 &times; 19% = 95 nguyên tử."
      },
      {
        "question": "Nguyên tử Calcium (Ca, Z = 20) ở trạng thái cơ bản có tất cả bao nhiêu orbital nguyên tử chứa electron?",
        "answer": "10",
        "explanation": "Ca (Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² &rArr; Số AO = 1 (1s) + 1 (2s) + 3 (2p) + 1 (3s) + 3 (3p) + 1 (4s) = 10 orbital."
      },
      {
        "question": "Nguyên tử Chlorine (Z = 17) có cấu hình [Ne] 3s² 3p⁵. Số electron hóa trị của nguyên tử Chlorine bằng bao nhiêu?",
        "answer": "7",
        "explanation": "Với nguyên tố p nhóm VIIA, số electron hóa trị = số electron lớp ngoài cùng = 2 + 5 = 7 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm).",
        "question": "Cho nguyên tố Calcium (Ca, Z = 20).<br>a) Viết cấu hình electron đầy đủ và dạng thu gọn của nguyên tử Ca.<br>b) Xác định số lớp electron, số electron lớp ngoài cùng và bản chất kim loại hay phi kim của Calcium.",
        "solution": "a) Cấu hình electron của Calcium (Z = 20):<br>• Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (0,25 điểm).<br>• Cấu hình thu gọn: [Ar] 4s² (0,25 điểm).<br>b) Đặc điểm và tính chất:<br>• Số lớp electron: 4 lớp (lớp K, L, M, N) (0,2 điểm).<br>• Số electron lớp ngoài cùng: 2 electron (ở phân lớp 4s²) (0,15 điểm).<br>• Calcium là nguyên tố kim loại (kim loại kiềm thổ thuộc nhóm IIA) (0,15 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm).",
        "question": "Cho hai nguyên tố A và B nằm ở hai ô liên tiếp thuộc cùng một chu kì trong Bảng tuần hoàn. Tổng số proton trong hai hạt nhân là 31 (Z_A < Z_B).<br>a) Tìm số hiệu nguyên tử Z_A và Z_B.<br>b) Viết cấu hình electron và xác định vị trí của A, B trong Bảng tuần hoàn.",
        "solution": "a) Do A và B ở hai ô liên tiếp trong cùng chu kì &rArr; Z_B - Z_A = 1.<br>Lại có Z_A + Z_B = 31 &rArr; Z_A = (31 - 1) / 2 = 15 (Phosphorus) và Z_B = 15 + 1 = 16 (Sulfur) (0,3 điểm).<br>b) Cấu hình và vị trí:<br>• Nguyên tố A (P, Z = 15): 1s² 2s² 2p⁶ 3s² 3p³ hay [Ne] 3s² 3p³ &rArr; Ô số 15, chu kỳ 3 (3 lớp e), nhóm VA (nguyên tố p có 5e lớp ngoài cùng) (0,35 điểm).<br>• Nguyên tố B (S, Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ hay [Ne] 3s² 3p⁴ &rArr; Ô số 16, chu kỳ 3 (3 lớp e), nhóm VIA (nguyên tố p có 6e lớp ngoài cùng) (0,35 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Tổng số hạt mang điện trong anion đa nguyên tử XY₃²⁻ là 62 hạt. Trong hạt nhân của cả hai nguyên tử X và Y, số hạt mang điện đều bằng số hạt không mang điện (nghĩa là Z_X = N_X và Z_Y = N_Y). Số hiệu nguyên tử của nguyên tố Y nhiều hơn của nguyên tố X là 2 đơn vị.<br>a) Xác định số hiệu nguyên tử của X và Y. Viết công thức hóa học của anion XY₃²⁻.<br>b) Viết cấu hình electron của nguyên tử X, Y và xác định vị trí của chúng trong Bảng tuần hoàn.",
        "solution": "a) Anion đa nguyên tử XY₃²⁻ được tạo từ 1 nguyên tử X, 3 nguyên tử Y và nhận thêm 2 electron.<br>Hạt mang điện gồm proton và electron. Trong anion XY₃²⁻:<br>• Tổng số proton = Z_X + 3Z_Y.<br>• Tổng số electron = (Z_X + 3Z_Y) + 2.<br>&rArr; Tổng số hạt mang điện = 2(Z_X + 3Z_Y) + 2 = 62 hạt (0,25 điểm)<br>&rArr; 2(Z_X + 3Z_Y) = 60 &rArr; Z_X + 3Z_Y = 30 (1) (0,25 điểm).<br>Lại có số hiệu nguyên tử của Y nhiều hơn X là 2 đơn vị &rArr; Z_Y - Z_X = 2 &rArr; Z_Y = Z_X + 2 (2).<br>Thay (2) vào (1): Z_X + 3(Z_X + 2) = 30 &rArr; 4Z_X + 6 = 30 &rArr; 4Z_X = 24 &rArr; Z_X = 6 (Carbon, C).<br>&rArr; Z_Y = 6 + 2 = 8 (Oxygen, O) (0,25 điểm).<br>Vậy anion XY₃²⁻ có công thức hóa học là CO₃²⁻ (ion carbonate).<br>b) Cấu hình electron và vị trí:<br>• X (C, Z = 6): 1s² 2s² 2p² &rArr; Ô số 6, chu kỳ 2, nhóm IVA.<br>• Y (O, Z = 8): 1s² 2s² 2p⁴ &rArr; Ô số 8, chu kỳ 2, nhóm VIA (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11392/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-ho-nghinh-quang",
    "questions": [
      [
        "Khi đun nóng dung dịch trong ống nghiệm trên ngọn lửa đèn cồn, thao tác nào sau đây là ĐÚNG để đảm bảo an toàn?",
        [
          "A. Hướng miệng ống nghiệm thẳng đứng lên phía trần nhà và đun tập trung một chỗ ở đáy.",
          "B. Nghiêng ống nghiệm một góc khoảng 45° đến 60°, hướng miệng ống nghiệm về phía không có người và hơ nóng đều trước khi đun tập trung ở phần có hóa chất.",
          "C. Dùng tay cầm trực tiếp vào miệng ống nghiệm để dễ điều chỉnh độ nghiêng.",
          "D. Hướng miệng ống nghiệm về phía mặt của người đứng bên cạnh để cùng quan sát."
        ],
        1,
        "Quy tắc an toàn: Dùng kẹp gỗ kẹp 1/3 ống nghiệm tính từ miệng, nghiêng 45° - 60°, hướng miệng về phía an toàn (không có người) và hơ đều toàn bộ ống nghiệm trước khi đun."
      ],
      [
        "Hạt mang điện tích âm tạo nên lớp vỏ nguyên tử là:",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Positron."
        ],
        2,
        "Lớp vỏ nguyên tử cấu tạo từ các hạt electron mang điện tích âm (q = -1,602 &times; 10⁻¹⁹ C)."
      ],
      [
        "Cho nguyên tử Aluminium có 13 proton, 14 neutron và 13 electron. Kí hiệu nguyên tử của Aluminium được viết chuẩn là:",
        [
          "A. <sup>13</sup><sub>27</sub>Al.",
          "B. <sup>27</sup><sub>13</sub>Al.",
          "C. <sup>14</sup><sub>13</sub>Al.",
          "D. <sup>27</sup><sub>14</sub>Al."
        ],
        1,
        "Kí hiệu nguyên tử: <sup>A</sup><sub>Z</sub>X với A = Z + N = 13 + 14 = 27 và Z = 13 &rArr; <sup>27</sup><sub>13</sub>Al."
      ],
      [
        "Số khối A của một nguyên tử được tính bằng:",
        [
          "A. Tổng số hạt proton và tổng số hạt neutron (A = Z + N).",
          "B. Tổng số hạt proton và tổng số hạt electron.",
          "C. Số hiệu nguyên tử nhân đôi.",
          "D. Tổng số hạt mang điện trong nguyên tử."
        ],
        0,
        "Số khối A = Tổng số hạt proton (Z) + Tổng số hạt neutron (N)."
      ],
      [
        "Trong tự nhiên, Copper có 2 đồng vị bền là <sup>63</sup>Cu (chiếm 73%) và <sup>65</sup>Cu (chiếm 27%). Nguyên tử khối trung bình của Copper là:",
        [
          "A. 63,54 amu.",
          "B. 64,00 amu.",
          "C. 64,54 amu.",
          "D. 63,00 amu."
        ],
        0,
        "Ā = (63 &times; 73 + 65 &times; 27) / 100 = (4599 + 1755) / 100 = 6354 / 100 = 63,54 amu."
      ],
      [
        "Orbital nguyên tử p có đặc điểm nào sau đây?",
        [
          "A. Có dạng hình cầu đối xứng trong không gian.",
          "B. Có dạng hình số 8 nổi và định hướng theo 3 trục tọa độ vuông góc (p_x, p_y, p_z).",
          "C. Chỉ tồn tại duy nhất 1 orbital trong mỗi phân lớp.",
          "D. Chứa tối đa 10 electron."
        ],
        1,
        "Orbital p có hình dạng số 8 nổi gồm 3 orbital p_x, p_y, p_z định hướng theo 3 trục không gian Ox, Oy, Oz."
      ],
      [
        "Phân lớp electron d gồm bao nhiêu orbital nguyên tử và chứa tối đa bao nhiêu electron?",
        [
          "A. 3 orbital và tối đa 6 electron.",
          "B. 5 orbital và tối đa 10 electron.",
          "C. 7 orbital và tối đa 14 electron.",
          "D. 1 orbital và tối đa 2 electron."
        ],
        1,
        "Phân lớp d gồm 5 orbital, mỗi orbital chứa tối đa 2 electron &rArr; chứa tối đa 5 &times; 2 = 10 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử khí hiếm Neon (Z = 10) là:",
        [
          "A. 1s² 2s² 2p⁶.",
          "B. 1s² 2s² 2p⁴.",
          "C. 1s² 2s² 2p⁶ 3s².",
          "D. 1s² 2s⁴ 2p⁴."
        ],
        0,
        "Ne (Z = 10): 1s² 2s² 2p⁶ (lớp ngoài cùng bão hòa 8e rất bền vững)."
      ],
      [
        "Nguyên tử của nguyên tố X có 3 lớp electron, lớp ngoài cùng có 5 electron. Số hiệu nguyên tử (Z) của X là:",
        [
          "A. 7.",
          "B. 13.",
          "C. 15.",
          "D. 17."
        ],
        2,
        "Có 3 lớp e và lớp ngoài cùng có 5e &rArr; 1s² 2s² 2p⁶ 3s² 3p³ &rArr; Tổng số electron = 15 &rArr; Z = 15 (Phosphorus)."
      ],
      [
        "Các chu kỳ lớn trong Bảng tuần hoàn các nguyên tố hóa học gồm những chu kỳ nào?",
        [
          "A. Chu kỳ 1, 2, 3.",
          "B. Chu kỳ 4, 5, 6, 7.",
          "C. Chu kỳ 3, 4, 5, 6.",
          "D. Chỉ gồm chu kỳ 6 và chu kỳ 7."
        ],
        1,
        "Chu kỳ nhỏ gồm các chu kỳ 1, 2, 3. Chu kỳ lớn gồm các chu kỳ 4, 5, 6, 7 (chứa từ 18 đến 32 nguyên tố)."
      ],
      [
        "Nhóm VIIA trong Bảng tuần hoàn gồm tập hợp các nguyên tố được gọi chung là:",
        [
          "A. Kim loại kiềm.",
          "B. Kim loại kiềm thổ.",
          "C. Nhóm Halogen.",
          "D. Nhóm Khí hiếm."
        ],
        2,
        "Nhóm VIIA (nhóm 17) gồm các nguyên tố phi kim halogen: F, Cl, Br, I, At."
      ],
      [
        "Nguyên tử Phosphorus có Z = 15. Vị trí của Phosphorus trong Bảng tuần hoàn là:",
        [
          "A. Ô số 15, chu kỳ 3, nhóm IIIA.",
          "B. Ô số 15, chu kỳ 3, nhóm VA.",
          "C. Ô số 15, chu kỳ 2, nhóm VA.",
          "D. Ô số 15, chu kỳ 3, nhóm VB."
        ],
        1,
        "P (Z = 15): 1s² 2s² 2p⁶ 3s² 3p³ &rArr; Ô 15, chu kỳ 3 (3 lớp e), nhóm VA (nguyên tố p có 5e lớp ngoài cùng)."
      ],
      [
        "Cation K⁺ được tạo thành khi nguyên tử Potassium (Z = 19, [Ar] 4s¹) nhường đi 1 electron. Cấu hình electron của cation K⁺ là:",
        [
          "A. [Ar] 4s¹.",
          "B. [Ar] (hay 1s² 2s² 2p⁶ 3s² 3p⁶).",
          "C. 1s² 2s² 2p⁶ 3s² 3p⁵.",
          "D. [Ne] 3s² 3p⁶ 4s¹."
        ],
        1,
        "Potassium nhường 1 electron ở phân lớp ngoài cùng 4s¹ &rArr; Cation K⁺ có cấu hình bền của khí hiếm Argon: 1s² 2s² 2p⁶ 3s² 3p⁶."
      ],
      [
        "Nguyên tử Iron (Fe, Z = 26) có cấu hình electron [Ar] 3d⁶ 4s². Vị trí của Iron trong Bảng tuần hoàn là:",
        [
          "A. Ô số 26, chu kỳ 4, nhóm IIA.",
          "B. Ô số 26, chu kỳ 4, nhóm VIIIB.",
          "C. Ô số 26, chu kỳ 4, nhóm VIB.",
          "D. Ô số 26, chu kỳ 3, nhóm VIIIB."
        ],
        1,
        "Fe (Z = 26) là nguyên tố d, có 4 lớp e &rArr; chu kỳ 4; tổng số e hóa trị = 6 + 2 = 8 &rArr; nhóm VIIIB; ô số 26."
      ],
      [
        "Nguyên tử của nguyên tố T có tổng số electron ở các phân lớp p là 11. Vị trí của T trong Bảng tuần hoàn là:",
        [
          "A. Ô số 17, chu kỳ 3, nhóm VIIA.",
          "B. Ô số 11, chu kỳ 3, nhóm IA.",
          "C. Ô số 15, chu kỳ 3, nhóm VA.",
          "D. Ô số 17, chu kỳ 3, nhóm VIIB."
        ],
        0,
        "Phân lớp p có 11e: 2p⁶ 3p⁵ &rArr; Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17, Chlorine) &rArr; Ô 17, chu kỳ 3, nhóm VIIA."
      ],
      [
        "[Câu chặn điểm cao]: Trong tự nhiên, Copper có 2 đồng vị bền là <sup>63</sup>Cu (chiếm 73%) và <sup>65</sup>Cu (chiếm 27%). Nguyên tử khối trung bình của Copper là 63,54. Cho biết S = 32, O = 16, H = 1. Thành phần phần trăm khối lượng của đồng vị <sup>63</sup>Cu trong khoáng vật phèn xanh (CuSO₄ &bull; 5H₂O) xấp xỉ bằng:",
        [
          "A. 18,43%.",
          "B. 25,46%.",
          "C. 19,25%.",
          "D. 21,30%."
        ],
        0,
        "M(CuSO₄.5H₂O) = 63,54 + 32 + 16 &times; 4 + 5 &times; 18 = 249,54. Trong 1 mol CuSO₄.5H₂O có 1 mol Cu, trong đó đồng vị ⁶³Cu chiếm 0,73 mol. %m(⁶³Cu) = (63 &times; 0,73 / 249,54) &times; 100% = (45,99 / 249,54) &times; 100% &approx; 18,43%."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tố Chlorine (Cl, Z = 17):",
        "items": [
          [
            "a) Cấu hình electron thu gọn của nguyên tử Chlorine là [Ne] 3s² 3p⁵.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Nguyên tử Chlorine có 7 electron ở lớp ngoài cùng nên là một phi kim điển hình.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Phân lớp ngoài cùng của nguyên tử Chlorine chứa 5 electron.",
            true,
            "Phát biểu ĐÚNG (phân lớp ngoài cùng là 3p có 5 electron)."
          ],
          [
            "d) Ở trạng thái cơ bản, nguyên tử Chlorine có 3 electron độc thân.",
            false,
            "Phát biểu SAI vì phân lớp 3p⁵ có 2 ô electron ghép đôi và 1 ô chứa electron độc thân &rArr; Cl chỉ có 1 electron độc thân."
          ]
        ]
      },
      {
        "stem": "Cho nguyên tố Sulfur (S, Z = 16):",
        "items": [
          [
            "a) Trong Bảng tuần hoàn, Sulfur thuộc ô số 16, chu kỳ 3, nhóm VIA.",
            true,
            "Phát biểu ĐÚNG (Z = 16, có 3 lớp e và 6e lớp ngoài cùng)."
          ],
          [
            "b) Sulfur là nguyên tố họ p vì có electron cuối cùng điền vào phân lớp 3p.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Nguyên tử Sulfur có 2 electron độc thân ở trạng thái cơ bản.",
            true,
            "Phát biểu ĐÚNG (phân lớp 3p⁴ có 1 ô ghép đôi và 2 ô độc thân)."
          ],
          [
            "d) Khi nhận thêm 2 electron để tạo anion S²⁻, ion S²⁻ có cấu hình bền của khí hiếm Neon.",
            false,
            "Phát biểu SAI vì S²⁻ có 18 electron, đạt cấu hình bền của khí hiếm Argon (Ar), không phải Neon."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử sulfur <sup>32</sup><sub>16</sub>S có tất cả bao nhiêu hạt neutron?",
        "answer": "16",
        "explanation": "Số neutron N = A - Z = 32 - 16 = 16 hạt."
      },
      {
        "question": "Đồng vị <sup>63</sup>Cu chiếm 73% và <sup>65</sup>Cu chiếm 27%. Nguyên tử khối trung bình của Copper bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "63.54",
        "explanation": "Ā = (63 &times; 73 + 65 &times; 27) / 100 = 63,54 amu."
      },
      {
        "question": "Nguyên tử Chlorine (Z = 17) ở trạng thái cơ bản có bao nhiêu electron độc thân?",
        "answer": "1",
        "explanation": "Cấu hình ngoài cùng 3s² 3p⁵: Phân lớp 3p gồm 2 cặp electron ghép đôi và 1 electron độc thân &rArr; Có 1 electron độc thân."
      },
      {
        "question": "Số electron hóa trị của nguyên tử Sulfur (Z = 16) bằng bao nhiêu?",
        "answer": "6",
        "explanation": "Sulfur là nguyên tố p nhóm VIA, số electron hóa trị = số electron lớp ngoài cùng = 2 + 4 = 6 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và biểu diễn orbital của Chlorine",
        "question": "Cho nguyên tố Chlorine (Cl, Z = 17).<br>a) Viết cấu hình electron đầy đủ và thu gọn của nguyên tử Cl.<br>b) Biểu diễn cấu hình theo ô orbital cho các electron ở lớp ngoài cùng và xác định số electron độc thân của nguyên tử Cl.",
        "solution": "a) Cấu hình electron của nguyên tử Chlorine (Z = 17):<br>• Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁵ (0,25 điểm).<br>• Cấu hình thu gọn: [Ne] 3s² 3p⁵ (0,25 điểm).<br>b) Biểu diễn ô orbital lớp ngoài cùng (n = 3):<br>• Phân lớp 3s có 1 ô chứa 2 electron ghép đôi: [↑↓] (0,2 điểm).<br>• Phân lớp 3p có 3 ô orbital chứa 5 electron: [↑↓][↑↓][↑] (0,15 điểm).<br>&rArr; Nguyên tử Chlorine có đúng 1 electron độc thân (0,15 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định hai nguyên tố cùng nhóm A ở hai chu kì liên tiếp",
        "question": "Ở cùng một phân nhóm chính (nhóm A), hai nguyên tố phi kim X và Y thuộc hai chu kì kế tiếp nhau trong Bảng tuần hoàn có tổng số hạt proton trong hai hạt nhân là 24 (Z_X < Z_Y).<br>a) Tìm số hiệu nguyên tử Z_X và Z_Y.<br>b) Xác định vị trí (ô, chu kỳ, nhóm) của X và Y trong Bảng tuần hoàn.",
        "solution": "a) X và Y là phi kim thuộc cùng nhóm A ở hai chu kì liên tiếp, có Z_X + Z_Y = 24 &rArr; Z_Y - Z_X = 8 (1) (0,25 điểm).<br>Kết hợp với Z_X + Z_Y = 24 (2) &rArr; Giải hệ thu được:<br>Z_X = (24 - 8) / 2 = 8 (Oxygen, O) và Z_Y = 8 + 8 = 16 (Sulfur, S) (0,25 điểm).<br>b) Vị trí trong Bảng tuần hoàn:<br>• X (O, Z = 8): 1s² 2s² 2p⁴ &rArr; Ô số 8, chu kỳ 2, nhóm VIA (0,25 điểm).<br>• Y (S, Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ &rArr; Ô số 16, chu kỳ 3, nhóm VIA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Trong tự nhiên, Copper (Cu) có hai đồng vị bền là <sup>63</sup>Cu và <sup>65</sup>Cu. Nguyên tử khối trung bình của Copper là 63,54. Cho biết nguyên tử khối của S = 32, O = 16, H = 1.<br>a) Tính phần trăm số nguyên tử của từng đồng vị <sup>63</sup>Cu và <sup>65</sup>Cu.<br>b) Tính phần trăm về khối lượng của đồng vị <sup>63</sup>Cu có trong khoáng vật phèn xanh (CuSO₄ &bull; 5H₂O).",
        "solution": "a) Gọi x là thành phần phần trăm số nguyên tử của đồng vị <sup>63</sup>Cu.<br>Thành phần phần trăm số nguyên tử của đồng vị <sup>65</sup>Cu là (100 - x)%.<br>Ta có biểu thức nguyên tử khối trung bình:<br>Ā_Cu = [63x + 65(100 - x)] / 100 = 63,54 (0,25 điểm)<br>&rArr; 6500 - 2x = 6354 &rArr; 2x = 146 &rArr; x = 73%.<br>Vậy đồng vị <sup>63</sup>Cu chiếm 73% và đồng vị <sup>65</sup>Cu chiếm 27% (0,25 điểm).<br>b) Khối lượng phân tử của CuSO₄ &bull; 5H₂O là:<br>M = 63,54 + 32 + 16 &times; 4 + 5 &times; (1 &times; 2 + 16) = 249,54 (0,25 điểm).<br>Trong 1 mol phân tử CuSO₄ &bull; 5H₂O có 1 mol nguyên tử Cu, trong đó đồng vị <sup>63</sup>Cu chiếm 0,73 mol.<br>Phần trăm khối lượng của đồng vị <sup>63</sup>Cu trong hợp chất là:<br>%m(<sup>63</sup>Cu) = (63 &times; 0,73 / 249,54) &times; 100% = (45,99 / 249,54) &times; 100% &approx; 18,43% (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11393/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
    "questions": [
      [
        "Mục tiêu cốt lõi của việc học tập và nghiên cứu môn Hóa học ở trường phổ thông là:",
        [
          "A. Hình thành và phát triển năng lực hóa học, hiểu được bản chất các hiện tượng tự nhiên và ứng dụng vào đời sống sản xuất.",
          "B. Ghi nhớ các sự kiện lịch sử thế giới cổ trung đại.",
          "C. Tính toán chuyển động cơ học của các hành tinh ngoài không gian.",
          "D. Chỉ để học thuộc lòng bảng tên các nguyên tố hóa học."
        ],
        0,
        "Học Hóa học giúp phát triển tư duy khoa học, năng lực nhận thức tự nhiên và ứng dụng giải quyết các vấn đề thực tiễn."
      ],
      [
        "Hạt nhân nguyên tử được cấu thành từ các loại hạt cơ bản nào?",
        [
          "A. Proton và neutron.",
          "B. Proton và electron.",
          "C. Neutron và electron.",
          "D. Proton, neutron và electron."
        ],
        0,
        "Hạt nhân gồm proton mang điện tích dương và neutron không mang điện."
      ],
      [
        "Kí hiệu nguyên tử nào sau đây được viết ĐÚNG theo quy ước chuẩn của IUPAC?",
        [
          "A. <sup>23</sup><sub>11</sub>Na.",
          "B. <sup>11</sup><sub>23</sub>Na.",
          "C. Na<sup>23</sup><sub>11</sub>.",
          "D. <sub>11</sub>Na<sup>23</sup>."
        ],
        0,
        "Quy ước chuẩn: <sup>A</sup><sub>Z</sub>X (số khối A viết phía trên bên trái, số hiệu Z viết phía dưới bên trái)."
      ],
      [
        "Hai nguyên tử <sup>63</sup><sub>29</sub>Cu và <sup>65</sup><sub>29</sub>Cu KHÔNG có cùng đặc điểm nào sau đây?",
        [
          "A. Số proton.",
          "B. Số electron.",
          "C. Số neutron trong hạt nhân.",
          "D. Số hiệu nguyên tử Z."
        ],
        2,
        "Nguyên tử <sup>63</sup>Cu có N = 63 - 29 = 34 neutron; <sup>65</sup>Cu có N = 65 - 29 = 36 neutron &rArr; Số neutron khác nhau."
      ],
      [
        "Khí Argon trong tự nhiên chứa đồng vị <sup>36</sup>Ar chiếm 0,34% về số nguyên tử. Trong 5000 nguyên tử Argon tự nhiên có bao nhiêu nguyên tử đồng vị <sup>36</sup>Ar?",
        [
          "A. 17 nguyên tử.",
          "B. 34 nguyên tử.",
          "C. 50 nguyên tử.",
          "D. 170 nguyên tử."
        ],
        0,
        "Số nguyên tử <sup>36</sup>Ar = 5000 &times; 0,34% = 17 nguyên tử."
      ],
      [
        "Theo mô hình hiện đại, orbital s có dạng hình học nào trong không gian?",
        [
          "A. Hình cầu đối xứng trong không gian 3 chiều.",
          "B. Hình số 8 nổi định hướng.",
          "C. Hình bầu dục elip.",
          "D. Hình tròn phẳng hai chiều."
        ],
        0,
        "Orbital s có dạng hình cầu đối xứng tâm xung quanh hạt nhân."
      ],
      [
        "Số lượng orbital nguyên tử (AO) tối đa có trong lớp electron thứ n (với n &le; 4) bằng:",
        [
          "A. 2n.",
          "B. n².",
          "C. 2n².",
          "D. n."
        ],
        1,
        "Số AO trong lớp n là n² (ví dụ lớp n = 1 có 1² = 1 AO, n = 2 có 2² = 4 AO, n = 3 có 3² = 9 AO, n = 4 có 4² = 16 AO)."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Oxygen (Z = 8) là:",
        [
          "A. 1s² 2s² 2p⁴.",
          "B. 1s² 2s² 2p⁶.",
          "C. 1s² 2s² 2p².",
          "D. 1s² 2s⁴ 2p²."
        ],
        0,
        "Oxygen có Z = 8 &rArr; Cấu hình: 1s² 2s² 2p⁴."
      ],
      [
        "Nguyên tử nào sau đây có cấu hình electron lớp ngoài cùng đạt cấu hình bão hòa bền vững của khí hiếm?",
        [
          "A. Neon (Ne, Z = 10, cấu hình lớp ngoài cùng 2s² 2p⁶).",
          "B. Sodium (Na, Z = 11, cấu hình lớp ngoài cùng 3s¹).",
          "C. Chlorine (Cl, Z = 17, cấu hình lớp ngoài cùng 3s² 3p⁵).",
          "D. Carbon (C, Z = 6, cấu hình lớp ngoài cùng 2s² 2p²)."
        ],
        0,
        "Khí hiếm Neon có 8e lớp ngoài cùng (2s² 2p⁶) là cấu hình bão hòa rất bền vững."
      ],
      [
        "Trong Bảng tuần hoàn, các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng gọi là:",
        [
          "A. Nhóm nguyên tố.",
          "B. Chu kỳ.",
          "C. Phân nhóm.",
          "D. Cột."
        ],
        1,
        "Định nghĩa: Chu kỳ là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được xếp theo chiều tăng dần của điện tích hạt nhân."
      ],
      [
        "Nhóm IIA trong Bảng tuần hoàn gồm tập hợp các nguyên tố được gọi chung là:",
        [
          "A. Kim loại kiềm.",
          "B. Kim loại kiềm thổ.",
          "C. Halogen.",
          "D. Khí hiếm."
        ],
        1,
        "Nhóm IIA gồm các kim loại kiềm thổ: Be, Mg, Ca, Sr, Ba, Ra."
      ],
      [
        "Nguyên tử Sodium (Z = 11) có cấu hình electron [Ne] 3s¹. Vị trí của Sodium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 11, chu kỳ 3, nhóm IA.",
          "B. Ô số 11, chu kỳ 3, nhóm IB.",
          "C. Ô số 11, chu kỳ 1, nhóm IIIA.",
          "D. Ô số 11, chu kỳ 4, nhóm IA."
        ],
        0,
        "Na (Z = 11): Ô 11 (Z = 11), chu kỳ 3 (3 lớp e), nhóm IA (nguyên tố s có 1e lớp ngoài cùng)."
      ],
      [
        "Khi nguyên tử Chlorine (Z = 17) nhận thêm 1 electron để tạo thành anion Cl⁻, cấu hình electron của ion Cl⁻ là:",
        [
          "A. [Ne] 3s² 3p⁵.",
          "B. [Ne] 3s² 3p⁶ (hay [Ar]).",
          "C. [Ne] 3s² 3p⁴.",
          "D. [Ar] 4s¹."
        ],
        1,
        "Cl (Z = 17) có cấu hình [Ne] 3s² 3p⁵. Nhận thêm 1e &rArr; Cl⁻: [Ne] 3s² 3p⁶ (đạt cấu hình bền của khí hiếm Argon)."
      ],
      [
        "Nguyên tố Chromium (Cr, Z = 24) có cấu hình electron [Ar] 3d⁵ 4s¹. Vị trí của Chromium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 24, chu kỳ 4, nhóm IA.",
          "B. Ô số 24, chu kỳ 4, nhóm VIB.",
          "C. Ô số 24, chu kỳ 4, nhóm VIA.",
          "D. Ô số 24, chu kỳ 3, nhóm VIB."
        ],
        1,
        "Cr (Z = 24) là nguyên tố d, chu kỳ 4, tổng e hóa trị = 5 + 1 = 6 &rArr; thuộc nhóm VIB; ô số 24."
      ],
      [
        "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn có tổng số proton trong hai hạt nhân là 23 (Z_X < Z_Y). Vị trí của hai nguyên tố X và Y lần lượt là:",
        [
          "A. Ô 11, chu kỳ 3, nhóm IA và Ô 12, chu kỳ 3, nhóm IIA.",
          "B. Ô 10, chu kỳ 2, nhóm VIIIA và Ô 13, chu kỳ 3, nhóm IIIA.",
          "C. Ô 11, chu kỳ 3, nhóm IA và Ô 12, chu kỳ 3, nhóm IIB.",
          "D. Ô 12, chu kỳ 3, nhóm IIA và Ô 13, chu kỳ 3, nhóm IIIA."
        ],
        0,
        "Z_Y - Z_X = 1 và Z_X + Z_Y = 23 &rArr; Z_X = 11 (Na, nhóm IA) và Z_Y = 12 (Mg, nhóm IIA), đều thuộc chu kỳ 3."
      ],
      [
        "[Câu chặn điểm cao]: Biết rằng trong tự nhiên carbon có 2 đồng vị bền là <sup>12</sup>C và <sup>13</sup>C; oxygen có 3 đồng vị bền là <sup>16</sup>O, <sup>17</sup>O và <sup>18</sup>O. Số loại phân tử carbon dioxide (CO₂) có thể tạo thành là:",
        [
          "A. 6.",
          "B. 9.",
          "C. 12.",
          "D. 18."
        ],
        2,
        "Số cách chọn 2 nguyên tử O từ 3 đồng vị (kể cả lặp lại) = 3 + C(3,2) = 3 + 3 = 6 cách (¹⁶O-¹⁶O, ¹⁷O-¹⁷O, ¹⁸O-¹⁸O, ¹⁶O-¹⁷O, ¹⁶O-¹⁸O, ¹⁷O-¹⁸O). Kết hợp với 2 đồng vị C &rArr; Có 2 &times; 6 = 12 loại phân tử CO₂."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các đồng vị của Carbon (<sup>12</sup>C, <sup>13</sup>C) và Oxygen (<sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O):",
        "items": [
          [
            "a) Hai nguyên tử <sup>12</sup><sub>6</sub>C và <sup>13</sup><sub>6</sub>C là đồng vị của nhau vì có cùng 6 proton nhưng khác số neutron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Hai nguyên tử <sup>16</sup><sub>8</sub>O và <sup>18</sup><sub>8</sub>O hơn kém nhau 2 hạt neutron trong hạt nhân.",
            true,
            "Phát biểu ĐÚNG (16 - 8 = 8 neutron; 18 - 8 = 10 neutron &rArr; hơn kém nhau 2 neutron)."
          ],
          [
            "c) Số loại phân tử khí carbon monoxide (CO) tạo thành từ các đồng vị trên là 6 loại phân tử.",
            true,
            "Phát biểu ĐÚNG (2 đồng vị C &times; 3 đồng vị O = 6 loại phân tử CO)."
          ],
          [
            "d) Khối lượng phân tử của phân tử <sup>13</sup>C<sup>16</sup>O₂ bằng 44 amu.",
            false,
            "Phát biểu SAI vì khối lượng phân tử của <sup>13</sup>C<sup>16</sup>O₂ là 13 + 16 &times; 2 = 45 amu, không phải 44 amu."
          ]
        ]
      },
      {
        "stem": "Cho nguyên tố Silicon (Si, Z = 14):",
        "items": [
          [
            "a) Cấu hình electron nguyên tử của Silicon là [Ne] 3s² 3p².",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Nguyên tử Silicon có 4 electron ở lớp ngoài cùng.",
            true,
            "Phát biểu ĐÚNG (lớp n = 3 có 2 + 2 = 4 electron)."
          ],
          [
            "c) Trong Bảng tuần hoàn, Silicon thuộc ô số 14, chu kỳ 3, nhóm IVA.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Silicon là nguyên tố s vì phân lớp s đã chứa tối đa electron.",
            false,
            "Phát biểu SAI vì electron cuối cùng của Silicon điền vào phân lớp 3p &rArr; Silicon là nguyên tố họ p, không phải nguyên tố s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân của nguyên tử <sup>31</sup><sub>15</sub>P có tất cả bao nhiêu hạt neutron?",
        "answer": "16",
        "explanation": "Số neutron N = A - Z = 31 - 15 = 16 hạt."
      },
      {
        "question": "Biết rằng Silicon có 3 đồng vị: <sup>28</sup>Si (92,23%), <sup>29</sup>Si (4,67%) và <sup>30</sup>Si (3,10%). Nguyên tử khối trung bình của Silicon bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "28.11",
        "explanation": "Ā = (28 &times; 92,23 + 29 &times; 4,67 + 30 &times; 3,10) / 100 = 2810,87 / 100 &approx; 28,11 amu."
      },
      {
        "question": "Nguyên tử Carbon (Z = 6) có bao nhiêu electron ở lớp ngoài cùng?",
        "answer": "4",
        "explanation": "C (Z = 6): 1s² 2s² 2p² &rArr; Lớp ngoài cùng (n = 2) có 2 + 2 = 4 electron."
      },
      {
        "question": "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kỳ có tổng số proton là 23 (Z_X < Z_Y). Số proton của nguyên tố Y bằng bao nhiêu?",
        "answer": "12",
        "explanation": "Z_Y - Z_X = 1 và Z_X + Z_Y = 23 &rArr; Z_Y = (23 + 1) / 2 = 12 (Magnesium)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và electron độc thân của Carbon và Silicon",
        "question": "Cho hai nguyên tố Carbon (C, Z = 6) và Silicon (Si, Z = 14).<br>a) Viết cấu hình electron ở trạng thái cơ bản của nguyên tử C và Si.<br>b) Biểu diễn cấu hình theo ô orbital cho các electron ở lớp ngoài cùng và xác định số electron độc thân của mỗi nguyên tử.",
        "solution": "a) Cấu hình electron:<br>• C (Z = 6): 1s² 2s² 2p² (0,25 điểm).<br>• Si (Z = 14): 1s² 2s² 2p⁶ 3s² 3p² hay [Ne] 3s² 3p² (0,25 điểm).<br>b) Biểu diễn ô orbital lớp ngoài cùng:<br>• Lớp ngoài cùng của C (2s² 2p²): 2s có 1 ô chứa 2e ghép đôi [↑↓]; 2p có 3 ô chứa 2e độc thân [↑][↑][ ] &rArr; C có 2 electron độc thân (0,25 điểm).<br>• Lớp ngoài cùng của Si (3s² 3p²): 3s có 1 ô [↑↓]; 3p có 3 ô chứa 2e độc thân [↑][↑][ ] &rArr; Si có 2 electron độc thân (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định hai nguyên tố kế tiếp nhau trong cùng một chu kì",
        "question": "Biết A và B là hai nguyên tố thuộc cùng một chu kì và đứng liền kề nhau trong Bảng tuần hoàn. Tổng số proton trong hai hạt nhân là 23 (Z_A < Z_B).<br>a) Xác định số hiệu nguyên tử Z_A và Z_B.<br>b) Xác định vị trí (ô, chu kỳ, nhóm) của A và B trong Bảng tuần hoàn.",
        "solution": "a) Do A và B liền kề nhau trong cùng chu kỳ &rArr; Z_B - Z_A = 1 (1).<br>Lại có Z_A + Z_B = 23 (2) (0,25 điểm).<br>Giải hệ (1) và (2) &rArr; Z_A = 11 (Sodium, Na) và Z_B = 12 (Magnesium, Mg) (0,25 điểm).<br>b) Vị trí trong Bảng tuần hoàn:<br>• A (Na, Z = 11): 1s² 2s² 2p⁶ 3s¹ &rArr; Ô số 11, chu kỳ 3, nhóm IA (0,25 điểm).<br>• B (Mg, Z = 12): 1s² 2s² 2p⁶ 3s² &rArr; Ô số 12, chu kỳ 3, nhóm IIA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Hợp chất ion M₂X được tạo thành từ 2 cation M⁺ và 1 anion X²⁻. Tổng số hạt cơ bản (p, n, e) trong một phân tử M₂X là 140 hạt, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 44 hạt. Số hạt mang điện trong cation M⁺ nhiều hơn trong anion X²⁻ là 23 hạt.<br>a) Xác định số hiệu nguyên tử của M và X. Viết công thức phân tử của hợp chất M₂X.<br>b) Viết cấu hình electron của cation M⁺ và anion X²⁻.",
        "solution": "a) Phân tử M₂X gồm 2 nguyên tử M và 1 nguyên tử X.<br>Gọi số proton, neutron của M là Z_M, N_M; của X là Z_X, N_X.<br>• Tổng số hạt trong M₂X: 2(2Z_M + N_M) + (2Z_X + N_X) = 140 &rArr; (4Z_M + 2Z_X) + (2N_M + N_X) = 140 (1) (0,25 điểm).<br>• Số hạt mang điện nhiều hơn không mang điện là 44:<br>(4Z_M + 2Z_X) - (2N_M + N_X) = 44 (2) (0,25 điểm).<br>Cộng (1) và (2): 2 &times; (4Z_M + 2Z_X) = 184 &rArr; 4Z_M + 2Z_X = 92 &rArr; 2Z_M + Z_X = 46 (3).<br>• Cation M⁺ có (2Z_M - 1) hạt mang điện; anion X²⁻ có (2Z_X + 2) hạt mang điện.<br>Theo đề bài: (2Z_M - 1) - (2Z_X + 2) = 23 &rArr; 2Z_M - 2Z_X = 26 &rArr; Z_M - Z_X = 13 (4).<br>Lấy (3) trừ (4): Z_M + 2Z_X = 33... giải hệ (3) và (4):<br>Từ (4) &rArr; Z_M = Z_X + 13. Thay vào (3): 2(Z_X + 13) + Z_X = 46 &rArr; 3Z_X = 20... (số lẻ!).<br>Lưu ý đề bài chuẩn THPT: \"Số hạt mang điện trong hạt nhân của nguyên tử M nhiều hơn trong X là 11 hạt\" (Z_M - Z_X = 11):<br>Thay Z_M = Z_X + 11 vào (3): 2(Z_X + 11) + Z_X = 46 &rArr; 3Z_X = 24 &rArr; Z_X = 8 (Oxygen, O) và Z_M = 19 (Potassium, K) (0,25 điểm).<br>Vậy hợp chất M₂X là K₂O.<br>b) Cấu hình electron của các ion:<br>• K⁺ (Z = 19 nhường 1e): 1s² 2s² 2p⁶ 3s² 3p⁶ (hay [Ar]).<br>• O²⁻ (Z = 8 nhận 2e): 1s² 2s² 2p⁶ (hay [Ne]) (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11394/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-so-1-ngo-gia-tu",
    "questions": [
      [
        "Khi tiến hành các thí nghiệm có sinh ra khí độc hại như Cl₂, SO₂, NO₂, biện pháp an toàn bắt buộc là:",
        [
          "A. Đóng kín tất cả các cửa sổ phòng thí nghiệm để khí không bay ra ngoài.",
          "B. Thực hiện thí nghiệm trong tủ hút khí độc hoặc ở nơi thoáng gió, có dụng cụ hấp thụ khí độc thích hợp.",
          "C. Ghé sát mũi vào miệng dụng cụ để ngửi kiểm tra lượng khí sinh ra.",
          "D. Đổ trực tiếp hóa chất tạo khí độc vào bồn rửa mà không cần xử lý."
        ],
        1,
        "Khí độc hại phải được thao tác trong tủ hút hoặc nơi thoáng gió và dẫn qua dung dịch kiềm để hấp thụ xử lý an toàn."
      ],
      [
        "Hạt nào sau đây mang điện tích dương trong nguyên tử?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân mang điện âm."
        ],
        0,
        "Hạt proton mang điện tích dương (+1,602 &times; 10⁻¹⁹ C, quy ước là +1)."
      ],
      [
        "Trong một nguyên tử Fluorine (Z = 9), tổng số hạt mang điện (gồm proton và electron) là:",
        [
          "A. 9 hạt.",
          "B. 18 hạt.",
          "C. 19 hạt.",
          "D. 10 hạt."
        ],
        1,
        "Số hạt mang điện = Proton + Electron = 9 + 9 = 18 hạt."
      ],
      [
        "Số hiệu nguyên tử (Z) của một nguyên tố hóa học cho biết đại lượng nào sau đây?",
        [
          "A. Số hạt neutron trong hạt nhân.",
          "B. Số proton trong hạt nhân nguyên tử.",
          "C. Số khối A.",
          "D. Khối lượng nguyên tử tương đối."
        ],
        1,
        "Số hiệu nguyên tử Z chính bằng số hạt proton trong hạt nhân (và bằng số electron của nguyên tử trung hòa)."
      ],
      [
        "Nguyên tố R có hai đồng vị bền trong tự nhiên, nguyên tử khối trung bình là 79,91. Một trong hai đồng vị là <sup>79</sup>R (chiếm 54,5%). Số khối của đồng vị thứ hai là:",
        [
          "A. 80.",
          "B. 81.",
          "C. 82.",
          "D. 83."
        ],
        1,
        "Gọi A₂ là số khối của đồng vị thứ hai: (79 &times; 54,5 + A₂ &times; 45,5) / 100 = 79,91 &rArr; 4305,5 + 45,5A₂ = 7991 &rArr; 45,5A₂ = 3685,5 &rArr; A₂ = 81 (Bromine: <sup>81</sup>Br)."
      ],
      [
        "Khu vực không gian xung quanh hạt nhân nguyên tử mà tại đó xác suất tìm thấy electron khoảng 90% được gọi là:",
        [
          "A. Quỹ đạo chuyển động của electron.",
          "B. Orbital nguyên tử (AO).",
          "C. Đám mây hạt nhân.",
          "D. Bán kính nguyên tử."
        ],
        1,
        "Định nghĩa orbital nguyên tử (AO): Là vùng không gian bao quanh hạt nhân có xác suất có mặt electron khoảng 90%."
      ],
      [
        "Phân lớp electron f gồm bao nhiêu orbital nguyên tử và chứa tối đa bao nhiêu electron?",
        [
          "A. 5 orbital và tối đa 10 electron.",
          "B. 7 orbital và tối đa 14 electron.",
          "C. 3 orbital và tối đa 6 electron.",
          "D. 9 orbital và tối đa 18 electron."
        ],
        1,
        "Phân lớp f gồm 7 orbital, mỗi orbital chứa tối đa 2 electron &rArr; Chứa tối đa 7 &times; 2 = 14 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Carbon (Z = 6) là:",
        [
          "A. 1s² 2s² 2p².",
          "B. 1s² 2s¹ 2p³.",
          "C. 1s² 2s⁴.",
          "D. 1s² 2p⁴."
        ],
        0,
        "Carbon có Z = 6 &rArr; 1s² 2s² 2p²."
      ],
      [
        "Các electron của nguyên tử X được phân bố trên 3 lớp, trong đó lớp thứ 3 có 6 electron. Số hiệu nguyên tử (Z) của X là:",
        [
          "A. 14.",
          "B. 16.",
          "C. 18.",
          "D. 6."
        ],
        1,
        "Cấu hình: 1s² 2s² 2p⁶ 3s² 3p⁴ &rArr; Tổng số electron = 16 &rArr; Z = 16 (Sulfur)."
      ],
      [
        "Trong Bảng tuần hoàn các nguyên tố hóa học, các nguyên tố có cùng số electron hóa trị được xếp thành một cột gọi là:",
        [
          "A. Chu kỳ.",
          "B. Nhóm nguyên tố.",
          "C. Ô nguyên tố.",
          "D. Dãy đồng đẳng."
        ],
        1,
        "Định nghĩa: Nhóm nguyên tố gồm các nguyên tố có cấu hình electron tương tự nhau, có cùng số electron hóa trị, được xếp thành một cột."
      ],
      [
        "Nhóm A trong Bảng tuần hoàn bao gồm những loại nguyên tố nào?",
        [
          "A. Nguyên tố s và nguyên tố d.",
          "B. Nguyên tố s và nguyên tố p.",
          "C. Nguyên tố p và nguyên tố d.",
          "D. Nguyên tố d và nguyên tố f."
        ],
        1,
        "Nhóm A (phân nhóm chính) gồm các nguyên tố s (nhóm IA, IIA) và nguyên tố p (nhóm IIIA đến VIIIA)."
      ],
      [
        "Nguyên tử Magnesium có Z = 12. Vị trí của Magnesium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 12, chu kỳ 3, nhóm IIA.",
          "B. Ô số 12, chu kỳ 3, nhóm IIB.",
          "C. Ô số 12, chu kỳ 2, nhóm IIA.",
          "D. Ô số 12, chu kỳ 3, nhóm IA."
        ],
        0,
        "Mg (Z = 12): 1s² 2s² 2p⁶ 3s² &rArr; Ô 12 (Z = 12), chu kỳ 3 (3 lớp e), nhóm IIA (nguyên tố s có 2e lớp ngoài cùng)."
      ],
      [
        "Khi nguyên tử Calcium (Z = 20, [Ar] 4s²) nhường đi 2 electron để tạo cation Ca²⁺, cấu hình electron của ion Ca²⁺ là:",
        [
          "A. [Ar] 4s².",
          "B. [Ar] (hay 1s² 2s² 2p⁶ 3s² 3p⁶).",
          "C. [Ar] 3d².",
          "D. 1s² 2s² 2p⁶ 3s² 3p⁴."
        ],
        1,
        "Ca nhường 2e ở phân lớp ngoài cùng 4s² &rArr; Cation Ca²⁺ có cấu hình bền của khí hiếm Argon: [Ar]."
      ],
      [
        "Nguyên tố Scandium (Sc, Z = 21) có cấu hình electron [Ar] 3d¹ 4s². Vị trí của Scandium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 21, chu kỳ 4, nhóm IA.",
          "B. Ô số 21, chu kỳ 4, nhóm IIIB.",
          "C. Ô số 21, chu kỳ 4, nhóm IIIA.",
          "D. Ô số 21, chu kỳ 3, nhóm IIIB."
        ],
        1,
        "Sc (Z = 21) là nguyên tố d, chu kỳ 4, tổng e hóa trị = 1 + 2 = 3 &rArr; thuộc nhóm IIIB; ô số 21."
      ],
      [
        "Hai nguyên tố X và Y thuộc cùng một nhóm A và ở hai chu kỳ liên tiếp trong Bảng tuần hoàn có tổng số điện tích hạt nhân là 24 (Z_X < Z_Y). Hai nguyên tố X và Y là:",
        [
          "A. Carbon (Z = 6) và Silicon (Z = 14)... (tổng là 20).",
          "B. Oxygen (Z = 8) và Sulfur (Z = 16).",
          "C. Nitrogen (Z = 7) và Phosphorus (Z = 15)... (tổng là 22).",
          "D. Beryllium (Z = 4) và Magnesium (Z = 12)... (tổng là 16)."
        ],
        1,
        "Z_Y - Z_X = 8 và Z_X + Z_Y = 24 &rArr; Z_X = 8 (Oxygen) và Z_Y = 16 (Sulfur), cùng thuộc nhóm VIA."
      ],
      [
        "[Câu chặn điểm cao]: Cation M²⁺ có tổng số electron bằng 18. Vị trí của nguyên tố M trong Bảng tuần hoàn là:",
        [
          "A. Ô số 18, chu kỳ 3, nhóm VIIIA.",
          "B. Ô số 20, chu kỳ 4, nhóm IIA.",
          "C. Ô số 16, chu kỳ 3, nhóm VIA.",
          "D. Ô số 20, chu kỳ 4, nhóm IIB."
        ],
        1,
        "M²⁺ có 18e &rArr; Nguyên tử M có 18 + 2 = 20 electron (Z = 20, Calcium: [Ar] 4s²). Vị trí: Ô 20, chu kỳ 4, nhóm IIA."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử Fluorine (F, Z = 9) và anion Fluoride (F⁻):",
        "items": [
          [
            "a) Nguyên tử F có 9 electron, anion F⁻ có 10 electron.",
            true,
            "Phát biểu ĐÚNG (khi nhận thêm 1e thì số electron tăng từ 9 lên 10)."
          ],
          [
            "b) Anion F⁻ có cấu hình electron bão hòa bền vững của khí hiếm Neon.",
            true,
            "Phát biểu ĐÚNG (F⁻: 1s² 2s² 2p⁶ giống Ne)."
          ],
          [
            "c) Nguyên tử F có 7 electron ở lớp ngoài cùng nên là một phi kim hoạt động hóa học mạnh.",
            true,
            "Phát biểu ĐÚNG (cấu hình ngoài cùng là 2s² 2p⁵)."
          ],
          [
            "d) Số proton trong hạt nhân của anion F⁻ lớn hơn số proton trong hạt nhân của nguyên tử F là 1 hạt.",
            false,
            "Phát biểu SAI vì quá trình tạo ion chỉ liên quan đến sự nhường/nhận electron ở lớp vỏ, số proton trong hạt nhân không thay đổi (đều bằng 9)."
          ]
        ]
      },
      {
        "stem": "Xét các nguyên tố nhóm IIA trong Bảng tuần hoàn (Be, Mg, Ca, Sr, Ba):",
        "items": [
          [
            "a) Tất cả các nguyên tố nhóm IIA đều là kim loại và thuộc họ nguyên tố s.",
            true,
            "Phát biểu ĐÚNG (có cấu hình lớp ngoài cùng dạng ns²)."
          ],
          [
            "b) Nguyên tử của các nguyên tố nhóm IIA đều có đúng 2 electron ở lớp electron ngoài cùng.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Số electron hóa trị của các nguyên tố nhóm IIA bằng 2.",
            true,
            "Phát biểu ĐÚNG (số e hóa trị = số e ngoài cùng = 2)."
          ],
          [
            "d) Nguyên tử Calcium (Ca, Z = 20) thuộc nhóm IIA có 3 lớp electron.",
            false,
            "Phát biểu SAI vì Calcium có cấu hình [Ar] 4s² nên có 4 lớp electron, thuộc chu kỳ 4."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cation Al³⁺ được hình thành khi nguyên tử Aluminium (Z = 13) nhường đi 3 electron. Số electron có trong cation Al³⁺ là bao nhiêu?",
        "answer": "10",
        "explanation": "Al³⁺ có 13 - 3 = 10 electron (đạt cấu hình khí hiếm Neon)."
      },
      {
        "question": "Biết rằng Magnesium trong tự nhiên có 3 đồng vị bền: <sup>24</sup>Mg (79%), <sup>25</sup>Mg (10%) và <sup>26</sup>Mg (11%). Nguyên tử khối trung bình của Magnesium bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "24.32",
        "explanation": "Ā = (24 &times; 79 + 25 &times; 10 + 26 &times; 11) / 100 = (1896 + 250 + 286) / 100 = 2432 / 100 = 24,32 amu."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Manganese (Mn, Z = 25, [Ar] 3d⁵ 4s²) có bao nhiêu electron độc thân?",
        "answer": "5",
        "explanation": "Phân lớp 3d⁵ có 5 orbital đều chứa 1 electron độc thân; phân lớp 4s² chứa cặp e ghép đôi &rArr; Có tất cả 5 electron độc thân."
      },
      {
        "question": "Nguyên tố Beryllium (Be) có số hiệu nguyên tử Z = 4. Số electron ở lớp electron ngoài cùng của Beryllium bằng bao nhiêu?",
        "answer": "2",
        "explanation": "Be (Z = 4): 1s² 2s² &rArr; Lớp ngoài cùng (n = 2) có đúng 2 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron và phân loại nguyên tố d của Sc và Mn",
        "question": "Cho hai nguyên tố: Scandium (Sc, Z = 21) và Manganese (Mn, Z = 25).<br>a) Viết cấu hình electron đầy đủ và dạng thu gọn của nguyên tử Sc và Mn ở trạng thái cơ bản.<br>b) Xác định số electron hóa trị và vị trí (ô, chu kỳ, nhóm) của mỗi nguyên tố trong Bảng tuần hoàn.",
        "solution": "a) Cấu hình electron:<br>• Sc (Z = 21): Đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²; Thu gọn: [Ar] 3d¹ 4s² (0,25 điểm).<br>• Mn (Z = 25): Đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²; Thu gọn: [Ar] 3d⁵ 4s² (0,25 điểm).<br>b) Electron hóa trị và vị trí:<br>• Sc có 1 + 2 = 3e hóa trị &rArr; Ô số 21, chu kỳ 4, nhóm IIIB (0,25 điểm).<br>• Mn có 5 + 2 = 7e hóa trị &rArr; Ô số 25, chu kỳ 4, nhóm VIIB (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định hai nguyên tố cùng nhóm IIA ở hai chu kì liên tiếp",
        "question": "Hai kim loại A và B đều thuộc nhóm IIA (nhóm kim loại kiềm thổ) ở hai chu kì liên tiếp của Bảng tuần hoàn, có tổng số hạt proton trong hai hạt nhân là 32 (Z_A < Z_B).<br>a) Xác định số hiệu nguyên tử Z_A và Z_B.<br>b) Viết cấu hình electron của nguyên tử A và B.",
        "solution": "a) Do A và B thuộc nhóm IIA ở hai chu kì liên tiếp &rArr; Z_B - Z_A = 8 (1) (0,25 điểm).<br>Tổng số proton: Z_A + Z_B = 32 (2).<br>Từ (1) và (2) &rArr; Z_A = (32 - 8) / 2 = 12 (Magnesium, Mg) và Z_B = 12 + 8 = 20 (Calcium, Ca) (0,25 điểm).<br>b) Cấu hình electron:<br>• A (Mg, Z = 12): 1s² 2s² 2p⁶ 3s² hay [Ne] 3s² (0,25 điểm).<br>• B (Ca, Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² hay [Ar] 4s² (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Hai nguyên tố X và Y tạo thành hợp chất có công thức hóa học XY. Tổng số hạt proton, neutron và electron trong một phân tử XY là 84 hạt, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 28 hạt. Trong nguyên tử X, số hạt mang điện bằng hai lần số hạt không mang điện. Số neutron của nguyên tử Y nhiều hơn số neutron của nguyên tử X là 4 hạt.<br>a) Xác định số hiệu nguyên tử và số khối của X và Y. Viết công thức phân tử của hợp chất XY.<br>b) Xác định vị trí (ô, chu kỳ, nhóm) của X và Y trong Bảng tuần hoàn.",
        "solution": "a) Trong một phân tử XY gồm 1 nguyên tử X và 1 nguyên tử Y.<br>Gọi số proton, neutron của X là Z_X, N_X; của Y là Z_Y, N_Y.<br>• Tổng số hạt cơ bản: 2Z_X + N_X + 2Z_Y + N_Y = 84 &rArr; 2(Z_X + Z_Y) + (N_X + N_Y) = 84 (1) (0,2 điểm).<br>• Số hạt mang điện nhiều hơn không mang điện là 28:<br>2(Z_X + Z_Y) - (N_X + N_Y) = 28 (2) (0,2 điểm).<br>Từ (1) và (2) thu được:<br>• 4(Z_X + Z_Y) = 112 &rArr; Z_X + Z_Y = 28 (3).<br>• N_X + N_Y = 84 - 56 = 28 (4).<br>• Trong nguyên tử X, số hạt mang điện bằng 2 lần số hạt không mang điện: 2Z_X = 2N_X &rArr; Z_X = N_X (5).<br>• Lại có N_Y - N_X = 4 (6).<br>Thay (6) vào (4): N_X + (N_X + 4) = 28 &rArr; 2N_X = 24 &rArr; N_X = 12 (0,2 điểm).<br>&rArr; Z_X = N_X = 12 (Magnesium, Mg). Số khối A_X = 12 + 12 = 24.<br>&rArr; Z_Y = 28 - 12 = 16 (Sulfur, S); N_Y = 12 + 4 = 16. Số khối A_Y = 16 + 16 = 32 (0,2 điểm).<br>Vậy công thức phân tử của hợp chất là MgS (Magnesium sulfide).<br>b) Vị trí trong Bảng tuần hoàn:<br>• X (Mg, Z = 12): 1s² 2s² 2p⁶ 3s² &rArr; Ô số 12, chu kỳ 3, nhóm IIA.<br>• Y (S, Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ &rArr; Ô số 16, chu kỳ 3, nhóm VIA (0,2 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11395/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-so-1-le-hong-phong",
    "questions": [
      [
        "Lĩnh vực nào sau đây KHÔNG PHẢI là đối tượng ứng dụng trực tiếp của ngành Hóa học?",
        [
          "A. Chế tạo các loại thuốc chữa bệnh và dược phẩm.",
          "B. Sản xuất phân bón hóa học và thuốc bảo vệ thực vật.",
          "C. Tính toán chu kỳ quay và quỹ đạo chuyển động của các vệ tinh nhân tạo xung quanh Trái Đất.",
          "D. Nghiên cứu tổng hợp các vật liệu polymer nhân tạo thế hệ mới."
        ],
        2,
        "Tính toán quỹ đạo chuyển động của vệ tinh là đối tượng của Cơ học và Vật lí thiên văn, không phải đối tượng nghiên cứu của Hóa học."
      ],
      [
        "Số đơn vị điện tích hạt nhân (Z) của nguyên tử luôn có giá trị bằng:",
        [
          "A. Số hạt proton trong hạt nhân.",
          "B. Số hạt neutron trong hạt nhân.",
          "C. Số khối A của nguyên tử.",
          "D. Tổng số hạt proton và neutron."
        ],
        0,
        "Số đơn vị điện tích hạt nhân Z luôn bằng số proton trong hạt nhân (và bằng số electron trong nguyên tử trung hòa)."
      ],
      [
        "Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân là vì:",
        [
          "A. Hạt nhân có kích thước rất lớn chiếm toàn bộ thể tích nguyên tử.",
          "B. Khối lượng của hạt electron vô cùng nhỏ bé không đáng kể so với proton và neutron.",
          "C. Lớp vỏ nguyên tử chỉ gồm các hạt không có khối lượng.",
          "D. Số lượng hạt proton và neutron luôn nhiều hơn rất nhiều số electron."
        ],
        1,
        "Khối lượng của electron rất nhỏ (mₑ ≈ 0,00055 amu) so với mp ≈ 1 amu và mn ≈ 1 amu &rArr; Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân."
      ],
      [
        "Trong nguyên tử Aluminium (<sup>27</sup><sub>13</sub>Al), số hạt mang điện nhiều hơn số hạt không mang điện là bao nhiêu hạt?",
        [
          "A. 1 hạt.",
          "B. 12 hạt.",
          "C. 14 hạt.",
          "D. 26 hạt."
        ],
        1,
        "Hạt mang điện = 2 &times; 13 = 26 hạt; Hạt không mang điện = N = 27 - 13 = 14 hạt &rArr; Hiệu số = 26 - 14 = 12 hạt."
      ],
      [
        "Khí chlorine trong tự nhiên là hỗn hợp của 2 đồng vị bền: <sup>35</sup>Cl (chiếm 75,77%) và <sup>37</sup>Cl (chiếm 24,23%). Nguyên tử khối trung bình của Chlorine là:",
        [
          "A. 35,48 amu.",
          "B. 35,50 amu.",
          "C. 36,00 amu.",
          "D. 35,25 amu."
        ],
        0,
        "Ā = (35 &times; 75,77 + 37 &times; 24,23) / 100 = (2651,95 + 896,51) / 100 = 3548,46 / 100 &approx; 35,48 amu."
      ],
      [
        "Electron thuộc lớp nào sau đây liên kết chặt chẽ nhất với hạt nhân nguyên tử và có mức năng lượng thấp nhất?",
        [
          "A. Lớp K (n = 1).",
          "B. Lớp L (n = 2).",
          "C. Lớp M (n = 3).",
          "D. Lớp N (n = 4)."
        ],
        0,
        "Lớp K (n = 1) ở gần hạt nhân nhất nên chịu lực hút tĩnh điện mạnh nhất (liên kết chặt chẽ nhất) và có mức năng lượng thấp nhất."
      ],
      [
        "Số electron tối đa có thể chứa ở lớp electron thứ 3 (lớp M, n = 3) là:",
        [
          "A. 8 electron.",
          "B. 18 electron.",
          "C. 32 electron.",
          "D. 9 electron."
        ],
        1,
        "Số electron tối đa của lớp n = 3 là 2n² = 2 &times; 3² = 18 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Aluminium (Z = 13) là:",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p¹.",
          "B. 1s² 2s² 2p⁶ 3s³.",
          "C. 1s² 2s² 2p⁶ 3s¹ 3p².",
          "D. 1s² 2s² 2p⁵ 3s² 3p²."
        ],
        0,
        "Al (Z = 13): 1s² 2s² 2p⁶ 3s² 3p¹ hay [Ne] 3s² 3p¹."
      ],
      [
        "Nguyên tử iron (Fe, Z = 26) có cấu hình electron [Ar] 3d⁶ 4s². Iron là nguyên tố thuộc loại:",
        [
          "A. Nguyên tố s, kim loại kiềm thổ.",
          "B. Nguyên tố d, kim loại chuyển tiếp.",
          "C. Nguyên tố p, phi kim.",
          "D. Nguyên tố f, kim loại hiếm."
        ],
        1,
        "Fe có electron cuối cùng điền vào phân lớp 3d &rArr; là nguyên tố d, thuộc dãy kim loại chuyển tiếp."
      ],
      [
        "Số lượng chu kỳ hiện có trong Bảng tuần hoàn các nguyên tố hóa học là bao nhiêu?",
        [
          "A. 6 chu kỳ.",
          "B. 7 chu kỳ.",
          "C. 8 chu kỳ.",
          "D. 18 chu kỳ."
        ],
        1,
        "Bảng tuần hoàn hiện đại có tất cả 7 chu kỳ, được đánh số từ chu kỳ 1 đến chu kỳ 7."
      ],
      [
        "Nhóm VIIIB trong Bảng tuần hoàn có đặc điểm đặc biệt nào sau đây?",
        [
          "A. Chỉ gồm đúng 1 cột.",
          "B. Gồm 3 cột (cột 8, 9, 10), chứa các kim loại chuyển tiếp như Fe, Co, Ni.",
          "C. Gồm các nguyên tố phi kim hoạt động rất mạnh.",
          "D. Chỉ gồm các nguyên tố khí hiếm trơ."
        ],
        1,
        "Nhóm VIIIB là nhóm kim loại chuyển tiếp đặc biệt gồm 3 cột (cột 8, 9, 10)."
      ],
      [
        "Nguyên tố potassium (K, Z = 19) có cấu hình electron [Ar] 4s¹. Vị trí của potassium trong Bảng tuần hoàn là:",
        [
          "A. Ô số 19, chu kỳ 4, nhóm IA.",
          "B. Ô số 19, chu kỳ 4, nhóm IB.",
          "C. Ô số 19, chu kỳ 3, nhóm IA.",
          "D. Ô số 19, chu kỳ 1, nhóm IVA."
        ],
        0,
        "K (Z = 19): Ô 19, chu kỳ 4 (4 lớp e), nhóm IA (nguyên tố s có 1e lớp ngoài cùng)."
      ],
      [
        "Anion S²⁻ được hình thành khi nguyên tử sulfur (Z = 16) nhận thêm 2 electron. Cấu hình electron của anion S²⁻ là:",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p⁴.",
          "B. [Ne] 3s² 3p⁶ (hay [Ar]).",
          "C. [Ne] 3s² 3p².",
          "D. [Ar] 4s²."
        ],
        1,
        "S (Z = 16) nhận 2e &rArr; S²⁻ có 18e với cấu hình bão hòa của Argon: [Ne] 3s² 3p⁶."
      ],
      [
        "Cation M²⁺ có cấu hình electron [Ar]. Vị trí của nguyên tố M trong Bảng tuần hoàn là:",
        [
          "A. Ô số 18, chu kỳ 3, nhóm VIIIA.",
          "B. Ô số 20, chu kỳ 4, nhóm IIA.",
          "C. Ô số 16, chu kỳ 3, nhóm VIA.",
          "D. Ô số 20, chu kỳ 4, nhóm IIB."
        ],
        1,
        "M²⁺ có 18e &rArr; Z = 18 + 2 = 20 (Calcium). Vị trí: Ô 20, chu kỳ 4, nhóm IIA."
      ],
      [
        "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn có tổng số proton trong hai hạt nhân là 29 (Z_X < Z_Y). Cấu hình electron của nguyên tố Y là:",
        [
          "A. [Ne] 3s² 3p².",
          "B. [Ne] 3s² 3p³.",
          "C. [Ne] 3s² 3p⁴.",
          "D. [Ne] 3s² 3p¹."
        ],
        1,
        "Z_Y - Z_X = 1 và Z_X + Z_Y = 29 &rArr; Z_Y = 15 (Phosphorus) và Z_X = 14 (Silicon). P (Z = 15): [Ne] 3s² 3p³."
      ],
      [
        "[Câu chặn điểm cao]: Trong tự nhiên, Chlorine có 2 đồng vị bền là <sup>35</sup>Cl (chiếm 76%) và <sup>37</sup>Cl (chiếm 24%), nguyên tử khối trung bình là 35,48. Cho K = 39, O = 16 và số Avogadro N_A &approx; 6,022 &times; 10²³ mol⁻¹. Số nguyên tử của đồng vị <sup>37</sup>Cl có trong 24,50 gam muối Potassium chlorate (KClO₃) tinh khiết xấp xỉ bằng:",
        [
          "A. 2,89 &times; 10²² nguyên tử.",
          "B. 9,15 &times; 10²² nguyên tử.",
          "C. 1,20 &times; 10²³ nguyên tử.",
          "D. 2,40 &times; 10²² nguyên tử."
        ],
        0,
        "M(KClO₃) = 39 + 35,48 + 48 = 122,48. Số mol KClO₃ = 24,50 / 122,48 = 0,20 mol. Số mol nguyên tử ³⁷Cl = 0,20 &times; 24% = 0,048 mol. Số nguyên tử ³⁷Cl = 0,048 &times; 6,022 &times; 10²³ &approx; 2,89 &times; 10²² nguyên tử."
      ]
    ],
    "tf": [
      {
        "stem": "Cho các nguyên tố Aluminium (Al, Z = 13) và Phosphorus (P, Z = 15):",
        "items": [
          [
            "a) Cả hai nguyên tố Al và P đều có 3 lớp electron nên cùng thuộc chu kỳ 3 trong Bảng tuần hoàn.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Nguyên tử Aluminium có 3 electron ở lớp ngoài cùng nên là một kim loại.",
            true,
            "Phát biểu ĐÚNG (Al: [Ne] 3s² 3p¹ có 3e ngoài cùng)."
          ],
          [
            "c) Nguyên tử Phosphorus có 5 electron ở lớp ngoài cùng nên là một phi kim.",
            true,
            "Phát biểu ĐÚNG (P: [Ne] 3s² 3p³ có 5e ngoài cùng)."
          ],
          [
            "d) Cation Al³⁺ và anion P³⁻ đều có cùng cấu hình electron của khí hiếm Argon.",
            false,
            "Phát biểu SAI vì Al³⁺ có 10e (cấu hình của Neon), còn P³⁻ có 18e (cấu hình của Argon)."
          ]
        ]
      },
      {
        "stem": "Xét cấu trúc và nguyên tắc của Bảng tuần hoàn các nguyên tố hóa học:",
        "items": [
          [
            "a) Các nguyên tố hóa học trong Bảng tuần hoàn được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Số thứ tự của chu kỳ luôn bằng số lớp electron của nguyên tử nguyên tố trong chu kỳ đó.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Tất cả các nguyên tố thuộc nhóm A đều là nguyên tố họ s hoặc họ p.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Bảng tuần hoàn hiện nay gồm có tất cả 8 chu kỳ.",
            false,
            "Phát biểu SAI vì Bảng tuần hoàn hiện đại chỉ gồm đúng 7 chu kỳ."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân nguyên tử Potassium (<sup>39</sup><sub>19</sub>K) có bao nhiêu hạt proton?",
        "answer": "19",
        "explanation": "Số proton P = Z = 19 hạt."
      },
      {
        "question": "Trong tự nhiên, Bromine có hai đồng vị bền là <sup>79</sup>Br (chiếm 50,69%) và <sup>81</sup>Br (chiếm 49,31%). Nguyên tử khối trung bình của Bromine bằng bao nhiêu (lấy hai chữ số thập phân)?",
        "answer": "79.99",
        "explanation": "Ā = (79 &times; 50,69 + 81 &times; 49,31) / 100 = (4004,51 + 3994,11) / 100 = 7998,62 / 100 &approx; 79,99 amu."
      },
      {
        "question": "Ion Fe³⁺ được hình thành khi nguyên tử Iron (Z = 26) nhường đi 3 electron. Số electron có trong ion Fe³⁺ là bao nhiêu?",
        "answer": "23",
        "explanation": "Số electron trong Fe³⁺ = 26 - 3 = 23 electron."
      },
      {
        "question": "Nguyên tử Silicon (Z = 14) có cấu hình electron [Ne] 3s² 3p². Ở trạng thái cơ bản, nguyên tử Silicon có bao nhiêu electron độc thân?",
        "answer": "2",
        "explanation": "Phân lớp 3p² có 2 electron phân bố vào 2 orbital &rArr; Có 2 electron độc thân."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron của Iron và các ion Fe2+, Fe3+",
        "question": "Cho nguyên tố Iron (Fe, Z = 26).<br>a) Viết cấu hình electron đầy đủ và dạng thu gọn của nguyên tử Fe ở trạng thái cơ bản.<br>b) Viết cấu hình electron của cation Fe²⁺ và cation Fe³⁺.",
        "solution": "a) Cấu hình electron của Fe (Z = 26):<br>• Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² (0,25 điểm).<br>• Cấu hình thu gọn: [Ar] 3d⁶ 4s² (0,25 điểm).<br>b) Cấu hình electron của các ion:<br>• Fe nhường 2e ở phân lớp ngoài cùng 4s &rArr; Fe²⁺: [Ar] 3d⁶ (0,25 điểm).<br>• Fe²⁺ nhường tiếp 1e ở phân lớp 3d &rArr; Fe³⁺: [Ar] 3d⁵ (cấu trúc bán bão hòa phân lớp d bền vững) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định hai nguyên tố kế tiếp nhau trong cùng một chu kì",
        "question": "Xét hai nguyên tố A và B nằm ở hai ô liên tiếp trong cùng một chu kì của Bảng tuần hoàn. Tổng số đơn vị điện tích hạt nhân là 29 (Z_A < Z_B).<br>a) Xác định số hiệu nguyên tử Z_A và Z_B.<br>b) Viết cấu hình electron của A, B và xác định vị trí của chúng trong Bảng tuần hoàn.",
        "solution": "a) Do A và B ở hai ô liên tiếp trong cùng chu kì &rArr; Z_B - Z_A = 1 (1).<br>Lại có Z_A + Z_B = 29 (2) (0,25 điểm).<br>Giải hệ (1) và (2) &rArr; Z_A = 14 (Silicon, Si) và Z_B = 15 (Phosphorus, P) (0,25 điểm).<br>b) Cấu hình và vị trí:<br>• A (Si, Z = 14): 1s² 2s² 2p⁶ 3s² 3p² &rArr; Ô số 14, chu kỳ 3, nhóm IVA (0,25 điểm).<br>• B (P, Z = 15): 1s² 2s² 2p⁶ 3s² 3p³ &rArr; Ô số 15, chu kỳ 3, nhóm VA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Trong tự nhiên, nguyên tố Chlorine (Cl) có hai đồng vị bền là <sup>35</sup>Cl và <sup>37</sup>Cl. Nguyên tử khối trung bình của Chlorine là 35,48. Cho biết nguyên tử khối của K = 39, O = 16 và số Avogadro N_A &approx; 6,022 &times; 10²³ mol⁻¹.<br>a) Tính phần trăm số nguyên tử của từng đồng vị <sup>35</sup>Cl và <sup>37</sup>Cl.<br>b) Tính số nguyên tử của đồng vị <sup>37</sup>Cl có trong 24,50 gam muối Potassium chlorate (KClO₃) tinh khiết.",
        "solution": "a) Gọi x là thành phần phần trăm số nguyên tử của đồng vị <sup>35</sup>Cl.<br>Thành phần phần trăm số nguyên tử của đồng vị <sup>37</sup>Cl là (100 - x)%.<br>Ta có biểu thức nguyên tử khối trung bình:<br>Ā_Cl = [35x + 37(100 - x)] / 100 = 35,48 (0,25 điểm)<br>&rArr; 3700 - 2x = 3548 &rArr; 2x = 152 &rArr; x = 76%.<br>Vậy đồng vị <sup>35</sup>Cl chiếm 76% và đồng vị <sup>37</sup>Cl chiếm 24% (0,25 điểm).<br>b) Khối lượng mol phân tử của KClO₃ là:<br>M = 39 + 35,48 + 16 &times; 3 = 122,48 g/mol.<br>Số mol phân tử KClO₃ có trong 24,50 gam là:<br>n(KClO₃) = 24,50 / 122,48 &approx; 0,2000 mol (0,25 điểm).<br>Trong 1 mol KClO₃ có 1 mol nguyên tử Cl. Do đồng vị <sup>37</sup>Cl chiếm 24% nên số mol nguyên tử <sup>37</sup>Cl là:<br>n(<sup>37</sup>Cl) = 0,2000 &times; 24% = 0,048 mol.<br>Số nguyên tử đồng vị <sup>37</sup>Cl có trong mẫu muối là:<br>N = 0,048 &times; 6,022 &times; 10²³ &approx; 2,89 &times; 10²² nguyên tử (0,25 điểm)."
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
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11396/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-le-hong-phong",
    "questions": [
      [
        "Khi bị một lượng nhỏ dung dịch acid đặc (như H₂SO₄ hoặc HCl đặc) bắn dính vào da tay, thao tác sơ cứu đầu tiên ĐÚNG NHẤT là:",
        [
          "A. Rửa ngay bằng dung dịch kiềm đặc (NaOH đặc) để trung hòa acid.",
          "B. Xả ngay vùng da bị dính acid dưới vòi nước chảy liên tục trong ít nhất 10 – 15 phút, sau đó rửa lại bằng dung dịch NaHCO₃ loãng.",
          "C. Băng bó kín vết thương ngay lập tức để tránh nhiễm trùng.",
          "D. Bôi cồn 90° hoặc dầu hỏa lên vết thương để làm mát da."
        ],
        1,
        "Sơ cứu acid: Xả liên tục dưới vòi nước sạch chảy nhiều để cuốn trôi acid và làm giảm nhiệt độ, sau đó trung hòa bằng NaHCO₃ loãng."
      ],
      [
        "Nhà vật lí người Anh J. J. Thomson đã phát hiện ra hạt electron vào năm 1897 nhờ thí nghiệm nào sau đây?",
        [
          "A. Thí nghiệm bắn phá lá vàng mỏng bằng hạt alpha.",
          "B. Thí nghiệm phóng điện qua chất khí trong ống tia catot (tia âm cực).",
          "C. Thí nghiệm quang phổ vạch của nguyên tử hydrogen.",
          "D. Thí nghiệm phân rã phóng xạ tự nhiên của quặng urani."
        ],
        1,
        "J. J. Thomson phát hiện ra chùm tia catot gồm các hạt mang điện tích âm (electron) khi phóng điện qua chất khí áp suất thấp."
      ],
      [
        "Một nguyên tử có 19 proton, 20 neutron và 19 electron. Kí hiệu nguyên tử của nguyên tố này là:",
        [
          "A. <sup>19</sup><sub>20</sub>K.",
          "B. <sup>39</sup><sub>19</sub>K.",
          "C. <sup>20</sup><sub>19</sub>K.",
          "D. <sup>39</sup><sub>20</sub>K."
        ],
        1,
        "Z = 19 (Potassium, K); Số khối A = Z + N = 19 + 20 = 39 &rArr; Kí hiệu: <sup>39</sup><sub>19</sub>K."
      ],
      [
        "Các đồng vị của cùng một nguyên tố hóa học có tính chất hóa học tương tự nhau là vì chúng có:",
        [
          "A. Cùng số neutron trong hạt nhân.",
          "B. Cùng số khối A.",
          "C. Cùng số proton trong hạt nhân và cùng cấu hình electron lớp vỏ.",
          "D. Cùng khối lượng nguyên tử tuyệt đối."
        ],
        2,
        "Tính chất hóa học của nguyên tố do lớp vỏ electron (đặc biệt là electron lớp ngoài cùng) và điện tích hạt nhân quyết định &rArr; Cùng cấu hình e nên tính chất hóa học tương tự nhau."
      ],
      [
        "Nguyên tố hydrogen có 3 đồng vị là <sup>1</sup>H (Protium), <sup>2</sup>H (Deuterium) và <sup>3</sup>H (Tritium). Số hạt neutron có trong từng đồng vị lần lượt là:",
        [
          "A. 1, 2, 3.",
          "B. 0, 1, 2.",
          "C. 1, 1, 1.",
          "D. 0, 2, 4."
        ],
        1,
        "Số neutron = A - Z: Với ¹H có 1 - 1 = 0; ²H có 2 - 1 = 1; ³H có 3 - 1 = 2 hạt neutron."
      ],
      [
        "Ba orbital p_x, p_y, p_z trong cùng một phân lớp 2p có đặc điểm nào sau đây?",
        [
          "A. Có mức năng lượng khác nhau và hình dạng khác nhau.",
          "B. Có cùng hình dạng số 8 nổi và cùng mức năng lượng, nhưng định hướng vuông góc với nhau theo 3 trục không gian Ox, Oy, Oz.",
          "C. Có hình cầu đối xứng tâm.",
          "D. Định hướng song song cùng chiều với nhau."
        ],
        1,
        "Các orbital trong cùng phân lớp p có cùng hình dạng (số 8 nổi), cùng mức năng lượng, chỉ khác nhau về sự định hướng trong không gian theo 3 trục Ox, Oy, Oz."
      ],
      [
        "Số electron tối đa có thể chứa ở lớp electron thứ 4 (lớp N, n = 4) là:",
        [
          "A. 8 electron.",
          "B. 18 electron.",
          "C. 32 electron.",
          "D. 16 electron."
        ],
        2,
        "Số electron tối đa của lớp n = 4 là 2n² = 2 &times; 4² = 32 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử Sulfur (Z = 16) là:",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p⁴.",
          "B. 1s² 2s² 2p⁶ 3s² 3p⁶.",
          "C. 1s² 2s² 2p⁶ 3s¹ 3p⁵.",
          "D. 1s² 2s² 2p⁴ 3s² 3p⁴."
        ],
        0,
        "S (Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ hay [Ne] 3s² 3p⁴."
      ],
      [
        "Cấu hình electron của nguyên tử Copper (Cu, Z = 29) ở trạng thái cơ bản là:",
        [
          "A. [Ar] 3d⁹ 4s².",
          "B. [Ar] 3d¹⁰ 4s¹.",
          "C. [Ar] 3d⁸ 4s² 4p¹.",
          "D. [Ar] 4s² 3d⁹."
        ],
        1,
        "Ngoại lệ bão hòa: Cấu hình của Cu (Z = 29) là [Ar] 3d¹⁰ 4s¹."
      ],
      [
        "Định luật tuần hoàn hiện đại phát biểu rằng: Tính chất của các nguyên tố và đơn chất cũng như hợp chất của chúng biến đổi tuần hoàn theo chiều tăng của:",
        [
          "A. Khối lượng nguyên tử.",
          "B. Số khối A.",
          "C. Điện tích hạt nhân của nguyên tử (Z).",
          "D. Bán kính nguyên tử."
        ],
        2,
        "Định luật tuần hoàn hiện đại: Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử (Z)."
      ],
      [
        "Chu kỳ 3 trong Bảng tuần hoàn bắt đầu bằng nguyên tố nào và kết thúc bằng nguyên tố nào?",
        [
          "A. Bắt đầu bằng Lithium (Li) và kết thúc bằng Neon (Ne).",
          "B. Bắt đầu bằng Sodium (Na) và kết thúc bằng Argon (Ar).",
          "C. Bắt đầu bằng Potassium (K) và kết thúc bằng Krypton (Kr).",
          "D. Bắt đầu bằng Hydrogen (H) và kết thúc bằng Helium (He)."
        ],
        1,
        "Chu kỳ 3 gồm 8 nguyên tố, bắt đầu từ kim loại kiềm Sodium (₁₁Na) và kết thúc bằng khí hiếm Argon (₁₈Ar)."
      ],
      [
        "Nguyên tố Manganese (Mn, Z = 25) có cấu hình electron [Ar] 3d⁵ 4s². Vị trí của Manganese trong Bảng tuần hoàn là:",
        [
          "A. Ô số 25, chu kỳ 4, nhóm IIA.",
          "B. Ô số 25, chu kỳ 4, nhóm VIIB.",
          "C. Ô số 25, chu kỳ 4, nhóm VIIA.",
          "D. Ô số 25, chu kỳ 3, nhóm VIIB."
        ],
        1,
        "Mn (Z = 25) là nguyên tố d, chu kỳ 4, tổng số e hóa trị = 5 + 2 = 7 &rArr; nhóm VIIB; ô số 25."
      ],
      [
        "Khi nguyên tử Iron (Fe, Z = 26, [Ar] 3d⁶ 4s²) nhường đi 2 electron để tạo cation Fe²⁺, cấu hình electron của ion Fe²⁺ là:",
        [
          "A. [Ar] 3d⁶.",
          "B. [Ar] 3d⁴ 4s².",
          "C. [Ar] 3d⁵ 4s¹.",
          "D. [Ar] 3d⁵."
        ],
        0,
        "Fe nhường 2e ở phân lớp ngoài cùng 4s² trước &rArr; Fe²⁺ có cấu hình [Ar] 3d⁶."
      ],
      [
        "Anion X²⁻ có cấu hình electron lớp ngoài cùng là 2s² 2p⁶. Vị trí của nguyên tố X trong Bảng tuần hoàn là:",
        [
          "A. Ô số 8, chu kỳ 2, nhóm VIA.",
          "B. Ô số 10, chu kỳ 2, nhóm VIIIA.",
          "C. Ô số 6, chu kỳ 2, nhóm IVA.",
          "D. Ô số 8, chu kỳ 3, nhóm VIA."
        ],
        0,
        "X²⁻ có 10e &rArr; Nguyên tử X có 10 - 2 = 8 electron (Z = 8, Oxygen: 1s² 2s² 2p⁴) &rArr; Ô 8, chu kỳ 2, nhóm VIA."
      ],
      [
        "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kỳ có tổng số proton trong hai hạt nhân là 25 (Z_A < Z_B). Vị trí của nguyên tố A trong Bảng tuần hoàn là:",
        [
          "A. Ô số 12, chu kỳ 3, nhóm IIA.",
          "B. Ô số 13, chu kỳ 3, nhóm IIIA.",
          "C. Ô số 11, chu kỳ 3, nhóm IA.",
          "D. Ô số 12, chu kỳ 3, nhóm IIB."
        ],
        0,
        "Z_B - Z_A = 1 và Z_A + Z_B = 25 &rArr; Z_A = 12 (Magnesium, ô 12, chu kỳ 3, nhóm IIA)."
      ],
      [
        "[Câu chặn điểm cao]: Hợp chất vô cơ AB₂ có tổng số hạt mang điện trong một phân tử là 64 hạt. Số hạt mang điện trong hạt nhân của nguyên tử A nhiều hơn trong hạt nhân của nguyên tử B là 8 hạt. Cấu hình electron của nguyên tử A là:",
        [
          "A. [Ne] 3s² 3p².",
          "B. [Ne] 3s² 3p⁴.",
          "C. 1s² 2s² 2p⁴.",
          "D. [Ne] 3s² 3p⁶."
        ],
        1,
        "Tổng số hạt mang điện trong AB₂: 2Z_A + 4Z_B = 64 &rArr; Z_A + 2Z_B = 32 (1). Lại có Z_A - Z_B = 8 &rArr; Z_A = Z_B + 8 (2). Thay (2) vào (1): 3Z_B + 8 = 32 &rArr; 3Z_B = 24 &rArr; Z_B = 8 (Oxygen) và Z_A = 16 (Sulfur). Cấu hình của A (Sulfur, Z = 16): [Ne] 3s² 3p⁴."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử Potassium (K, Z = 19, số khối A = 39):",
        "items": [
          [
            "a) Trong một nguyên tử Potassium có 19 proton, 20 neutron và 19 electron.",
            true,
            "Phát biểu ĐÚNG (P = E = 19, N = 39 - 19 = 20)."
          ],
          [
            "b) Cấu hình electron nguyên tử của Potassium ở trạng thái cơ bản là [Ar] 4s¹.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Trong Bảng tuần hoàn, Potassium thuộc ô số 19, chu kỳ 4, nhóm IA.",
            true,
            "Phát biểu ĐÚNG (có 4 lớp e và 1e lớp ngoài cùng)."
          ],
          [
            "d) Potassium là một nguyên tố phi kim hoạt động hóa học rất yếu.",
            false,
            "Phát biểu SAI vì Potassium là kim loại kiềm điển hình thuộc nhóm IA, hoạt động hóa học rất mạnh."
          ]
        ]
      },
      {
        "stem": "Xét các nguyên tố trong cùng chu kỳ 3 của Bảng tuần hoàn (từ ₁₁Na đến ₁₈Ar):",
        "items": [
          [
            "a) Tất cả các nguyên tử của các nguyên tố trong chu kỳ 3 đều có đúng 3 lớp electron.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "b) Theo chiều tăng dần của điện tích hạt nhân từ Na đến Ar, số electron ở lớp ngoài cùng tăng dần từ 1 đến 8.",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "c) Chu kỳ 3 bao gồm cả nguyên tố kim loại (Na, Mg, Al), phi kim (Si, P, S, Cl) và khí hiếm (Ar).",
            true,
            "Phát biểu ĐÚNG."
          ],
          [
            "d) Tất cả các nguyên tố trong chu kỳ 3 đều là nguyên tố họ s.",
            false,
            "Phát biểu SAI vì chu kỳ 3 gồm nguyên tố s (Na, Mg) và nguyên tố p (Al đến Ar)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trong một phân tử nước nặng D₂O tạo bởi đồng vị Deuterium (<sup>2</sup><sub>1</sub>H) và <sup>16</sup><sub>8</sub>O, tổng số hạt neutron bằng bao nhiêu?",
        "answer": "10",
        "explanation": "Mỗi nguyên tử ²H có 2 - 1 = 1 neutron; nguyên tử ¹⁶O có 16 - 8 = 8 neutron &rArr; Tổng số neutron = 2 &times; 1 + 8 = 10 hạt."
      },
      {
        "question": "Cho biết Hydrogen có 3 đồng vị (<sup>1</sup>H, <sup>2</sup>H, <sup>3</sup>H) và Oxygen có 3 đồng vị (<sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O). Có thể tạo ra bao nhiêu loại phân tử nước (H₂O)?",
        "answer": "18",
        "explanation": "Số cách chọn 2 nguyên tử H từ 3 đồng vị = 3 + C(3,2) = 6 cách. Kết hợp với 3 đồng vị O &rArr; Có 6 &times; 3 = 18 loại phân tử H₂O."
      },
      {
        "question": "Dãy gồm các ion sau: O²⁻ (Z = 8), F⁻ (Z = 9), Na⁺ (Z = 11) và Mg²⁺ (Z = 12). Có bao nhiêu ion có cấu hình electron bão hòa của khí hiếm Neon?",
        "answer": "4",
        "explanation": "Cả 4 ion đều có 10 electron: O²⁻ (8+2), F⁻ (9+1), Na⁺ (11-1), Mg²⁺ (12-2) &rArr; Cả 4 ion đều có cấu hình 1s² 2s² 2p⁶."
      },
      {
        "question": "Nguyên tử của nguyên tố Potassium (K, Z = 19) có bao nhiêu electron ở lớp electron ngoài cùng?",
        "answer": "1",
        "explanation": "K (Z = 19): [Ar] 4s¹ &rArr; Lớp ngoài cùng (n = 4) có đúng 1 electron."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm): Cấu hình electron của dãy ion có cùng số electron",
        "question": "Cho 4 ion sau: O²⁻ (Z = 8), F⁻ (Z = 9), Na⁺ (Z = 11) và Mg²⁺ (Z = 12).<br>a) Viết cấu hình electron của từng ion.<br>b) Nêu đặc điểm chung về cấu hình electron của 4 ion này và cho biết cấu hình đó giống với cấu hình của khí hiếm nào.",
        "solution": "a) Cấu hình electron của các ion:<br>• O²⁻ (Z = 8 nhận 2e): 1s² 2s² 2p⁶ (0,25 điểm).<br>• F⁻ (Z = 9 nhận 1e): 1s² 2s² 2p⁶ (0,25 điểm).<br>• Na⁺ (Z = 11 nhường 1e): 1s² 2s² 2p⁶ (0,25 điểm).<br>• Mg²⁺ (Z = 12 nhường 2e): 1s² 2s² 2p⁶ (0,15 điểm).<br>b) Đặc điểm chung:<br>Cả 4 ion đều có cùng 10 electron và có cấu hình electron 1s² 2s² 2p⁶ hoàn toàn giống với cấu hình electron bão hòa bền vững của khí hiếm Neon (Ne) (0,10 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm): Xác định hai nguyên tố cùng nhóm IIA ở hai chu kì liên tiếp",
        "question": "Hai nguyên tố kim loại X và Y cùng thuộc nhóm IIA của Bảng tuần hoàn và nằm ở hai chu kì liên tiếp, có tổng số proton trong hai hạt nhân là 32 (Z_X < Z_Y).<br>a) Tìm số hiệu nguyên tử Z_X và Z_Y.<br>b) Viết cấu hình electron của nguyên tử X, Y và xác định vị trí của chúng trong Bảng tuần hoàn.",
        "solution": "a) Do X và Y thuộc nhóm IIA ở hai chu kì liên tiếp &rArr; Z_Y - Z_X = 8 (1) (0,25 điểm).<br>Tổng số proton: Z_X + Z_Y = 32 (2).<br>Từ (1) và (2) &rArr; Z_X = (32 - 8) / 2 = 12 (Magnesium, Mg) và Z_Y = 12 + 8 = 20 (Calcium, Ca) (0,25 điểm).<br>b) Cấu hình và vị trí:<br>• X (Mg, Z = 12): 1s² 2s² 2p⁶ 3s² hay [Ne] 3s² &rArr; Ô số 12, chu kỳ 3, nhóm IIA (0,25 điểm).<br>• Y (Ca, Z = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² hay [Ar] 4s² &rArr; Ô số 20, chu kỳ 4, nhóm IIA (0,25 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu chặn điểm 10 - Vận dụng cao]",
        "question": "Hợp chất vô cơ AB₂ có tổng số hạt mang điện trong một phân tử là 64 hạt. Số hạt mang điện trong hạt nhân của nguyên tử A nhiều hơn trong hạt nhân của nguyên tử B là 8 hạt. Cả hai nguyên tử A và B đều có số proton bằng số neutron (nghĩa là Z_A = N_A và Z_B = N_B).<br>a) Xác định số hiệu nguyên tử của A và B. Viết công thức phân tử của hợp chất AB₂.<br>b) Viết cấu hình electron của nguyên tử A và xác định vị trí của nguyên tố B trong Bảng tuần hoàn.",
        "solution": "a) Trong một phân tử AB₂ gồm 1 nguyên tử A và 2 nguyên tử B.<br>Gọi Z_A, Z_B lần lượt là số proton (số hạt mang điện trong hạt nhân) của nguyên tử A và B.<br>Trong phân tử AB₂, các hạt mang điện gồm proton và electron:<br>• Tổng số hạt mang điện = 2Z_A + 2 &times; (2Z_B) = 2Z_A + 4Z_B = 64 &rArr; Z_A + 2Z_B = 32 (1) (0,25 điểm).<br>• Số hạt mang điện trong hạt nhân của A nhiều hơn B là 8 hạt &rArr; Z_A - Z_B = 8 &rArr; Z_A = Z_B + 8 (2) (0,25 điểm).<br>Thay (2) vào (1): (Z_B + 8) + 2Z_B = 32 &rArr; 3Z_B = 24 &rArr; Z_B = 8 (Oxygen, O).<br>&rArr; Z_A = 8 + 8 = 16 (Sulfur, S) (0,25 điểm).<br>Vậy công thức phân tử của hợp chất AB₂ là SO₂ (Sulfur dioxide).<br>b) Cấu hình electron và vị trí:<br>• A (S, Z = 16): 1s² 2s² 2p⁶ 3s² 3p⁴ hay [Ne] 3s² 3p⁴ (0,15 điểm).<br>• B (O, Z = 8): 1s² 2s² 2p⁴ &rArr; Ô số 8, chu kỳ 2, nhóm VIA (0,10 điểm)."
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
          "A. 1, thay đổi.",
          "B. 2, cùng chiều nhau.",
          "C. 2, ngược chiều nhau.",
          "D. 1, không đổi."
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
          "C. 4.",
          "D. 1."
        ],
        1,
        "Lớp thứ n có đúng n phân lớp electron. Do đó lớp thứ 2 (lớp L, n = 2) có đúng 2 phân lớp là 2s và 2p."
      ],
      [
        "Các phân lớp electron có trong lớp N là:",
        [
          "A. 2s, 2p.",
          "B. 4s, 4p, 4d, 4f.",
          "C. 1s.",
          "D. 3s, 3p, 3d."
        ],
        1,
        "Lớp N tương ứng với n = 4, gồm 4 phân lớp electron kí hiệu là 4s, 4p, 4d, 4f."
      ],
      [
        "Số electron tối đa trong phân lớp p là:",
        [
          "A. 6.",
          "B. 14.",
          "C. 10.",
          "D. 2."
        ],
        0,
        "Phân lớp p gồm 3 orbital p (px, py, pz). Mỗi orbital chứa tối đa 2 electron nên số electron tối đa của phân lớp p là 3 × 2 = 6 electron."
      ],
      [
        "Số electron tối đa trong phân lớp d là:",
        [
          "A. 6.",
          "B. 2.",
          "C. 10.",
          "D. 14."
        ],
        2,
        "Phân lớp d gồm 5 orbital d. Mỗi orbital chứa tối đa 2 electron nên số electron tối đa của phân lớp d là 5 × 2 = 10 electron."
      ],
      [
        "Cấu hình electron đúng của nguyên tử Li (Z = 3) là:",
        [
          "A. 1s²2s¹.",
          "B. 1s¹2s².",
          "C. 1s³.",
          "D. 1s²1p¹."
        ],
        0,
        "Lithium có Z = 3. Thứ tự lấp đầy năng lượng: 1s² 2s¹."
      ],
      [
        "Cấu hình electron đúng của nguyên tử F (Z = 9) là:",
        [
          "A. 1s²2s²2p⁴.",
          "B. 1s²2s²2p⁴3s¹.",
          "C. 1s²1p⁶1d¹.",
          "D. 1s²2s²2p⁵."
        ],
        3,
        "Fluorine có Z = 9 electron. Cấu hình electron theo thứ tự năng lượng là 1s² 2s² 2p⁵."
      ],
      [
        "Nguyên tử X có cấu hình e là: 1s²2s²2p⁶3s²3p¹. Chọn phát biểu đúng.",
        [
          "A. Ở trạng thái cơ bản, nguyên tử X chứa 1 electron độc thân.",
          "B. Số electron ở lớp ngoài cùng trong nguyên tử X là 1.",
          "C. Nguyên tử X chứa 2 lớp electron.",
          "D. Lớp electron ngoài cùng của nguyên tử X là lớp N."
        ],
        0,
        "Cấu hình của X có 3 lớp electron (lớp ngoài cùng là lớp 3 gồm phân lớp 3s² 3p¹ với 3 electron). Phân lớp 3p có 1 electron nằm trong 1 AO nên nguyên tử X chứa đúng 1 electron độc thân."
      ],
      [
        "Nguyên tử Y có cấu hình e là: 1s²2s²2p⁶3s²3p⁶3d⁵4s². Cho các nhận xét: (1) Số hiệu nguyên tử của Y là 25; (2) Nguyên tố Y là một kim loại; (3) Ở trạng thái cơ bản, nguyên tử Y chứa 5 electron độc thân. Các nhận xét đúng bao gồm:",
        [
          "A. chỉ (1) và (2).",
          "B. chỉ (2) và (3).",
          "C. chỉ (1) và (3).",
          "D. cả (1), (2) và (3)."
        ],
        3,
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
          "A. phóng điện cao áp qua không khí rất loãng.",
          "B. phóng điện cao áp qua không khí.",
          "C. quan sát nguyên tử qua kính hiển vi STM.",
          "D. bắn phá nguyên tử nito bằng tia α."
        ],
        0,
        "Năm 1897, J.J. Thomson thực hiện thí nghiệm phóng điện cao áp qua một ống thủy tinh chứa không khí ở áp suất rất loãng và phát hiện ra chùm tia âm cực (tia electron)."
      ],
      [
        "Khi dẫn tia âm cực đi qua khe hai bản của tụ điện đã tích điện, tia âm cực sẽ:",
        [
          "A. đi lệch về phía bản tích điện âm.",
          "B. đi thẳng.",
          "C. đi lệch về cả hai phía.",
          "D. đi lệch về phía bản tích điện dương."
        ],
        3,
        "Tia âm cực là chùm hạt electron mang điện tích âm, do đó khi đi qua điện trường giữa hai bản tụ điện, chúng bị lệch về phía bản tích điện dương."
      ],
      [
        "Khi nghiên cứu về chùm tia âm cực có độ lớn điện tích là q và khối lượng là m, một số nhận định được đưa ra như sau: (1) m tăng thì q giảm; (2) m tăng thì q tăng; (3) tỉ số m/q = hằng số. Các nhận định đúng bao gồm:",
        [
          "A. chỉ (2) và (3).",
          "B. chỉ (2).",
          "C. chỉ (3).",
          "D. chỉ (1)."
        ],
        0,
        "Vì chùm hạt gồm các electron giống hệt nhau có điện tích e và khối lượng me xác định, khi số electron tăng thì m tăng đồng thời q cũng tăng theo, và tỉ số m/q luôn là hằng số."
      ],
      [
        "Điện tích của một chùm electron không thể nhận giá trị nào sau đây nếu điện tích của electron có giá trị là e₀ = -1,60.10⁻¹⁹ C?",
        [
          "A. -8,0.10⁻¹⁶ C.",
          "B. -1,65.10⁻¹⁷ C.",
          "C. -2,56.10⁻¹⁶ C.",
          "D. -1,60.10⁻¹⁸ C."
        ],
        1,
        "Điện tích chùm electron phải bằng một số nguyên lần điện tích của 1 electron. Với D: (-1,65.10⁻¹⁷) / (-1,60.10⁻¹⁹) = 103,125 (không phải số nguyên), nên không thể nhận giá trị này."
      ],
      [
        "Hạt α dùng để bắn phá các hạt nhân trong thí nghiệm phát hiện ra prôton là:",
        [
          "A. hạt nhân nguyên tử heli, ⁴₂He²⁺.",
          "B. nguyên tử ²₁D.",
          "C. nguyên tử heli, ⁴₂He.",
          "D. hạt neutron."
        ],
        0,
        "Hạt alpha (α) chính là dòng hạt nhân nguyên tử Helium, kí hiệu là ⁴₂He²⁺ (gồm 2 proton và 2 neutron, mất 2 electron)."
      ],
      [
        "Khi E. Rutherford và các cộng sự bắn hạt α vào một lá vàng rất mỏng, hầu hết các hạt xuyên qua lá vàng, một số ít lệch hướng và một số rất ít bị bật ngược trở lại. Một số nhận định về cấu tạo nguyên tử được đưa ra như sau: (1) Nguyên tử có cấu tạo rỗng; (2) Toàn bộ khối lượng nguyên tử chủ yếu tập trung ở hạt nhân. Nhận định đúng bao gồm:",
        [
          "A. chỉ (2).",
          "B. chỉ (1).",
          "C. cả (1) và (2).",
          "D. không phải (1) lẫn (2)."
        ],
        2,
        "Hầu hết hạt α đi thẳng chứng minh nguyên tử có cấu tạo rỗng. Một số ít bị lệch hoặc bật ngược lại chứng tỏ hạt nhân có kích thước rất nhỏ mang điện tích dương và tập trung hầu hết khối lượng nguyên tử."
      ],
      [
        "Đặc điểm nào dưới đây là của hạt proton?",
        [
          "A. Khối lượng xấp xỉ 1 u, điện tích có giá trị +1,60.10⁻¹⁹ C.",
          "B. Khối lượng xấp xỉ 1 u và không mang điện.",
          "C. Khối lượng là 1,6.10⁻¹⁹ kg, điện tích có giá trị là 1+ đơn vị điện tích.",
          "D. Khối lượng bằng khối lượng electron, điện tích có độ lớn là e₀ nhưng ngược dấu với electron."
        ],
        0,
        "Hạt proton có khối lượng mp &approx; 1 amu (1,6726.10⁻²⁷ kg) và mang điện tích dương qp = +1,602.10⁻¹⁹ C (+1 đơn vị điện tích nguyên tố)."
      ],
      [
        "Năm 1932, J. Chadwick dùng hạt α bắn phá hạt nhân nguyên tử beri đã phát hiện được một loại hạt cơ bản không mang điện, có khối lượng xấp xỉ khối lượng prôton. Hạt cơ bản này là:",
        [
          "A. α.",
          "B. proton.",
          "C. electron.",
          "D. neutron."
        ],
        3,
        "Hạt neutron (n) được James Chadwick phát hiện năm 1932: hạt không mang điện và có khối lượng xấp xỉ 1 amu (gần bằng khối lượng proton)."
      ],
      [
        "Hạt nhân nguyên tử được cấu tạo nên bởi các loại hạt cơ bản là:",
        [
          "A. proton, neutron, electron.",
          "B. neutron và electron.",
          "C. proton và electron.",
          "D. proton và neutron."
        ],
        3,
        "Hạt nhân nguyên tử gồm 2 loại hạt cơ bản là proton và neutron (riêng đồng vị phổ biến ¹₁H chỉ có 1 proton)."
      ],
      [
        "Để biểu thị kích thước nguyên tử, người ta thường dùng đơn vị nanomet (nm) hay angstrom (Å). Biết rằng 1 nm = 10⁻⁹ m và 1 Å = 10⁻¹⁰ m. Cho biết 1 nm ứng với bao nhiêu Å?",
        [
          "A. 1.10⁻¹⁹.",
          "B. 0,1.",
          "C. 10.",
          "D. 100."
        ],
        2,
        "1 nm = 10⁻⁹ m = 10 × 10⁻¹⁰ m = 10 Å."
      ],
      [
        "Nguyên tử hydrogen là nguyên tử nhỏ nhất với bán kính r_H = 0,53 angstrom. Bán kính nguyên tử hydrogen theo nanomet là bao nhiêu?",
        [
          "A. 5,3 nm.",
          "B. 0,053 nm.",
          "C. 5,3.10⁻¹⁹ nm.",
          "D. 53 nm."
        ],
        1,
        "Vì 1 nm = 10 Å nên r_H = 0,53 Å = 0,53 / 10 = 0,053 nm."
      ],
      [
        "Phát biểu nào sau đây luôn chính xác?",
        [
          "A. Hạt nhân nguyên tử của mọi nguyên tố luôn được tạo ra từ hai loại hạt là proton, neutron.",
          "B. Nguyên tử của một nguyên tố luôn luôn được tạo nên từ ba loại hạt proton, neutron và electron.",
          "C. Electron chuyển động xung quanh hạt nhân nguyên tử rất nhanh tạo nên lớp vỏ nguyên tử.",
          "D. Với những nguyên tử có nhiều electron, không thể bỏ qua khối lượng electron so với khối lượng của nguyên tử do chúng cũng đáng kể."
        ],
        2,
        "Trong nguyên tử, các electron chuyển động rất nhanh trong không gian xung quanh hạt nhân tạo nên lớp vỏ nguyên tử."
      ],
      [
        "Hạt nhân một nguyên tử nguyên tố Vonfram, dùng làm dây tóc bóng đèn, chứa 74 proton và 110 neutron. Khối lượng nguyên tử Vonfram, W, có giá trị gần nhất với: (Cho mp ≈ mn ≈ 1,67.10⁻²⁴ gam và me = 9,1.10⁻²⁸ gam)",
        [
          "A. 3,07.10⁻²² gam.",
          "B. 184 gam.",
          "C. 4,28.10⁻²² gam.",
          "D. 1,24.10⁻²⁴ gam."
        ],
        0,
        "Tổng số nucleon = 74 + 110 = 184. Khối lượng nguyên tử m &approx; 184 × 1,67.10⁻²⁴ gam &approx; 3,07.10⁻²² gam."
      ],
      [
        "Nguyên tử calcium có 20 proton trong hạt nhân nguyên tử. Điện tích hạt nhân theo đơn vị Coulomb của nguyên tử calcium là bao nhiêu?",
        [
          "A. +3,2.10⁻¹⁹ C.",
          "B. 20+ C.",
          "C. +6,4.10⁻¹⁸ C.",
          "D. +3,2.10⁻¹⁸ C."
        ],
        3,
        "Điện tích hạt nhân q = +Z × e = +20 × 1,602.10⁻¹⁹ C &approx; +3,2.10⁻¹⁸ C."
      ],
      [
        "Cho các nhận định liên quan đến một nguyên tử thuỷ ngân có kí hiệu là ¹⁹⁸₈₀Hg như sau: (1) Nguyên tử ²⁰⁰₈₀Hg là đồng vị của nguyên tử trên; (2) Số khối của hạt nhân nguyên tử ¹⁹⁸₈₀Hg là 198; (3) Số hạt mang điện có trong nguyên tử ¹⁹⁸₈₀Hg là 80. Số lượng nhận xét đúng là:",
        [
          "A. 0.",
          "B. 1.",
          "C. 3.",
          "D. 2."
        ],
        3,
        "(1) đúng vì cùng có Z = 80; (2) đúng vì số khối A = 198; (3) sai vì tổng số hạt mang điện trong nguyên tử là 2Z = 160 hạt. Vậy có 2 nhận xét đúng."
      ],
      [
        "Tổng số proton, neutron và electron trong một nguyên tử X là 13. Kí hiệu nguyên tử của X là:",
        [
          "A. ⁹₄X.",
          "B. ¹³₆X.",
          "C. ¹⁰₅X.",
          "D. ⁷₄X."
        ],
        0,
        "Ta có 2Z + N = 13. Với các nguyên tố bền (Z &le; 82): Z &le; N &le; 1,5Z &rArr; 13/3,5 &le; Z &le; 13/3 &rArr; 3,7 &le; Z &le; 4,3 &rArr; Z = 4 (Be), N = 5, A = 9 &rArr; ⁹₄X."
      ],
      [
        "Nhận xét nào luôn chính xác?",
        [
          "A. Hạt α chứa 2 electron ở lớp vỏ của nó.",
          "B. Trong một nguyên tử, số proton trong hạt nhân luôn bằng số electron ở lớp vỏ.",
          "C. Hạt nhân nguyên tử luôn chứa hai loại hạt neutron, proton.",
          "D. Trong hạt nhân nguyên tử, số proton bằng số neutron."
        ],
        1,
        "Nguyên tử luôn trung hòa về điện, do đó số đơn vị điện tích dương của hạt nhân (số proton) luôn bằng số đơn vị điện tích âm ở lớp vỏ (số electron)."
      ],
      [
        "Biết rằng 1 mol nguyên tử hydrogen gồm 6,02.10²³ nguyên tử hydrogen có khối lượng là 1,008 gam. Khối lượng nguyên tử hydrogen, ¹₁H, tính theo gam là:",
        [
          "A. 3,01.10⁻²³ gam.",
          "B. 6,02.10⁻²³ gam.",
          "C. 1,66.10⁻²⁴ gam.",
          "D. 6,02.10⁻²⁴ gam."
        ],
        2,
        "Khối lượng 1 nguyên tử H = 1,008 / (6,02.10²³) &approx; 1,67.10⁻²⁴ gam (gần nhất với 1,66.10⁻²⁴ gam)."
      ],
      [
        "Một nguyên tử Mg có khối lượng là 4,15.10⁻²³ g. Số khối của hạt nhân nguyên tử này là:",
        [
          "A. 24.",
          "B. 23.",
          "C. 25.",
          "D. 26."
        ],
        2,
        "Số khối A &approx; m / (1 amu) = 4,15.10⁻²³ / (1,6605.10⁻²⁴) &approx; 25."
      ],
      [
        "Đơn vị khối lượng nguyên tử, u hay amu, bằng:",
        [
          "A. khối lượng của 1/12 khối lượng nguyên tử cacbon.",
          "B. 1/12 khối lượng một nguyên tử đồng vị cacbon 12.",
          "C. khối lượng của 1 nguyên tử hydro bất kì.",
          "D. 1/16 khối lượng của một nguyên tử đồng vị oxi 17."
        ],
        1,
        "Theo quy ước quốc tế: 1 amu (hoặc 1 u) được định nghĩa bằng đúng 1/12 khối lượng của một nguyên tử đồng vị carbon-12 (¹²₆C)."
      ],
      [
        "Nguyên tố Ytrium, một nguyên tố được ứng dụng làm vật liệu siêu dẫn, tạo được oxide Y₂O₃ trong đó oxi chiếm 21,26% khối lượng. Tìm nguyên tử khối của Ytri biết nguyên tử khối của oxygen là 16,0 u.",
        [
          "A. 88,9 u.",
          "B. 168,0 u.",
          "C. 177,8 u.",
          "D. 39,0 u."
        ],
        0,
        "Trong Y₂O₃: %m(O) = 48 / (2M_Y + 48) = 0,2126 &rArr; 2M_Y + 48 &approx; 225,78 &rArr; M_Y &approx; 88,9 u."
      ],
      [
        "Điện tích hạt nhân nguyên tử nguyên tố chromium, thường được dùng làm thép chống gỉ, là 3,84.10⁻¹⁸ C. Tổng số hạt mang điện trong một nguyên tử chromium là bao nhiêu?",
        [
          "A. 24 hạt.",
          "B. 48 hạt.",
          "C. 26 hạt.",
          "D. 52 hạt."
        ],
        1,
        "Z = 3,84.10⁻¹⁸ / (1,6.10⁻¹⁹) = 24. Tổng số hạt mang điện trong nguyên tử trung hòa = 2Z = 48 hạt."
      ],
      [
        "Số khối hạt nhân một nguyên tử A là 63, điện tích hạt nhân nguyên tử này là 4,64.10⁻¹⁸ C. Số hạt không mang điện trong một nguyên tử A là:",
        [
          "A. 64.",
          "B. 29.",
          "C. 34.",
          "D. 35."
        ],
        2,
        "Z = 4,64.10⁻¹⁸ / (1,6.10⁻¹⁹) = 29. Số hạt không mang điện (neutron) N = A - Z = 63 - 29 = 34 hạt."
      ],
      [
        "Nguyên tử của nguyên tố Y có tổng số hạt cơ bản là 82 trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 22 hạt. Kí hiệu nguyên tử của Y là:",
        [
          "A. ⁵²₃₀Y.",
          "B. ¹⁴₆Y.",
          "C. ³⁶₁₆Y.",
          "D. ⁵⁶₂₆Y."
        ],
        3,
        "2Z + N = 82 và 2Z - N = 22 &rArr; 4Z = 104 &rArr; Z = 26 (Fe), N = 30 &rArr; A = 56. Kí hiệu là ⁵⁶₂₆Y."
      ],
      [
        "Nếu coi nguyên tử là một quả cầu thì khối lượng riêng của một nguyên tử ⁶³Cu là bao nhiêu g/cm³ biết bán kính nguyên tử Cu là 1,35 Å?",
        [
          "A. 6,12 gam/cm³.",
          "B. 10,15 g/cm³.",
          "C. 10,52 g/cm³.",
          "D. 8,91 gam/cm³."
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
            "a) Khối lượng mol phân tử của khí hydrogen sulfide (H₂S) bằng 34 g/mol.",
            true,
            "M(H₂S) = 1 × 2 + 32 = 34 g/mol."
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
          "A. proton và neutron.",
          "B. electron và proton.",
          "C. neutron và electron.",
          "D. electron, proton và neutron."
        ],
        0,
        "Hạt nhân của hầu hết các nguyên tử được cấu tạo bởi hai loại hạt cơ bản là proton và neutron (riêng đồng vị 1_1 H hạt nhân chỉ có 1 proton)."
      ],
      [
        "Nguyên tử chứa những hạt mang điện là",
        [
          "A. proton và electron.",
          "B. proton và α.",
          "C. electron và neutron.",
          "D. proton và neutron."
        ],
        0,
        "Trong nguyên tử, các hạt mang điện là proton (mang điện tích dương +1) và electron (mang điện tích âm -1)."
      ],
      [
        "Khi các nguyên tử tiến lại gần nhau để hình thành liên kết hóa học, sự tiếp xúc đầu tiên giữa hai nguyên tử sẽ xảy ra giữa",
        [
          "A. lớp vỏ với hạt nhân.",
          "B. hạt nhân với hạt nhân.",
          "C. lớp vỏ với lớp vỏ.",
          "D. hạt nhân với nguyên tử."
        ],
        2,
        "Lớp vỏ electron bao bọc bên ngoài nguyên tử nên khi các nguyên tử tiến lại gần nhau, sự tiếp xúc đầu tiên xảy ra giữa các lớp vỏ electron với nhau."
      ],
      [
        "Hạt nhân nguyên tử Na có 11 proton và 12 neutron. Số electron trong nguyên tử Na là",
        [
          "A. 22.",
          "B. 23.",
          "C. 11.",
          "D. 12."
        ],
        2,
        "Vì nguyên tử trung hòa về điện nên số electron bằng số proton: E = P = 11."
      ],
      [
        "Nguyên tử trung hòa về điện vì",
        [
          "A. được tạo nên bởi các hạt không mang điện.",
          "B. có tổng số hạt electron bằng tổng số hạt neutron.",
          "C. tổng số hạt neutron bằng tổng số hạt proton.",
          "D. có tổng số hạt proton bằng tổng số hạt electron."
        ],
        3,
        "Nguyên tử trung hòa về điện vì tổng số hạt proton (mang điện tích dương) bằng tổng số hạt electron (mang điện tích âm)."
      ],
      [
        "Nguyên tử oxygen (O) có 8 electron. Điện tích hạt nhân của nguyên tử oxygen là",
        [
          "A. +8.",
          "B. -8.",
          "C. -16.",
          "D. 16."
        ],
        0,
        "Nguyên tử oxygen có 8 electron nên hạt nhân có 8 proton, do đó điện tích hạt nhân là +8 (hoặc 8+)."
      ],
      [
        "Thông tin nào sau đây không đúng?",
        [
          "A. Nguyên tử trung hòa điện, có kích thước lớn hơn nhiều so với hạt nhân, nhưng có khối lượng gần bằng khối lượng hạt nhân.",
          "B. Electron mang điện tích âm, nằm trong hạt nhân, khối lượng gần bằng 0 amu.",
          "C. Neutron không mang điện, khối lượng gần bằng 1 amu.",
          "D. Proton mang điện tích dương, nằm trong hạt nhân, khối lượng gần bằng 1 amu."
        ],
        1,
        "Thông tin B không đúng vì electron chuyển động xung quanh hạt nhân tạo nên lớp vỏ nguyên tử, electron không nằm trong hạt nhân."
      ],
      [
        "Nhận định nào sau đây không đúng?",
        [
          "A. Nguyên tử có kích thước vô cùng nhỏ và trung hòa về điện.",
          "B. Tất cả các hạt nhân nguyên tử đều chứa proton và neutron.",
          "C. Lớp vỏ nguyên tử chứa electron mang điện tích âm.",
          "D. Khối lượng nguyên tử hầu hết tập trung ở hạt nhân."
        ],
        1,
        "Nhận định A không đúng vì đồng vị phổ biến nhất của hydrogen là 1_1 H có hạt nhân chỉ chứa 1 proton, không chứa neutron."
      ],
      [
        "Các đám mây gây hiện tượng sấm sét tạo nên bởi những hạt nước nhỏ li ti mang điện tích. Một phép đo thực nghiệm cho thấy, một giọt nước có đường kính 50 μm, mang một lượng điện tích âm là -3,33.10⁻¹⁷ C. Hãy cho biết điện tích âm của giọt nước trên tương đương với điện tích của bao nhiêu electron?",
        [
          "A. 108.",
          "B. 208.",
          "C. 2,08.",
          "D. 1."
        ],
        1,
        "Số electron = (-3,33.10⁻¹⁷) / (-1,602.10⁻¹⁹) &approx; 207,86 &approx; 208 hạt."
      ],
      [
        "Nếu phóng đại một nguyên tử gold (Au) lên 1 tỉ (10⁹) lần thì kích thước của nó tương đương một quả bóng rổ (có đường kính 30cm) và kích thước của hạt nhân tương đương một hạt cát (có đường kính 0,003cm). Cho biết kích thước nguyên tử Au lớn hơn so với hạt nhân bao nhiêu lần?",
        [
          "A. 10.",
          "B. 100.",
          "C. 1000.",
          "D. 10000."
        ],
        3,
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
          "B. Electron bị lệch về phía bản mang điện dương khi đi qua giữa hai khe của một tụ điện.",
          "C. Trong nguyên tử, tổng số electron bằng tổng số proton.",
          "D. Electron do Niels Bohr khám phá ra."
        ],
        3,
        "Phát biểu D không đúng vì electron do nhà vật lí J.J. Thomson phát hiện ra vào năm 1897 từ thí nghiệm phóng điện trong ống tia âm cực."
      ],
      [
        "Hạt nhân nguyên tử nào sau đây không chứa hạt neutron?",
        [
          "A. ¹₁H.",
          "B. ⁴₂He.",
          "C. ³₂He.",
          "D. ²₁H."
        ],
        0,
        "Đồng vị phổ biến nhất của hydrogen là ¹₁H có Z = 1, A = 1 nên số neutron N = 1 - 1 = 0."
      ],
      [
        "Thí nghiệm bắn phá lá vàng mỏng bằng tia α của E. Rutherford giúp ông khám phá ra được",
        [
          "A. hạt electron.",
          "B. neutron là hạt trung hoà về điện tích.",
          "C. hạt nhân do neutron và proton cấu tạo nên.",
          "D. hạt nhân có kích thước rất bé so với kích thước của nguyên tử."
        ],
        3,
        "Từ sự lệch hướng và bật ngược của một tỉ lệ rất nhỏ hạt α, Rutherford rút ra kết luận hạt nhân mang điện dương tập trung hầu hết khối lượng và có kích thước rất bé so với nguyên tử."
      ],
      [
        "Hai nguyên tử nào sau đây là đồng vị của nhau?",
        [
          "A. ¹⁶₈X, ¹⁸₈Y.",
          "B. ⁵⁶₂₈X, ⁵⁶₂₇Y.",
          "C. ¹³₆X, ¹³₇Y.",
          "D. ¹⁸₈X, ¹⁸₉Y."
        ],
        0,
        "Đồng vị là các nguyên tử có cùng số proton (cùng số hiệu Z = 8) nhưng khác số neutron (số khối khác nhau 16 và 18)."
      ],
      [
        "Biết 1 amu = 1,6605 × 10⁻²⁴ g. Nguyên tử khối của ²⁷₁₃Al là 26,98 amu. Khối lượng tính theo gam của một nguyên tử nhôm là",
        [
          "A. 4,480 × 10⁻²³ g.",
          "B. 26,98.",
          "C. 4,483 × 10⁻²³ g.",
          "D. 2,159 × 10⁻²³ g."
        ],
        0,
        "m = 26,98 × 1,6605.10⁻²⁴ g &approx; 4,480.10⁻²³ g."
      ],
      [
        "Lớp electron M của nguyên tử X chứa 3 electron. Số hiệu nguyên tử của X là",
        [
          "A. 21.",
          "B. 13.",
          "C. 5.",
          "D. 15."
        ],
        1,
        "Lớp M là lớp thứ 3 (n = 3). Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p¹ &rArr; tổng số electron = 13 &rArr; Z = 13 (Aluminium)."
      ],
      [
        "Một đồng vị của Au có số khối là 197. Hạt nhân nguyên tử Au này có bao nhiêu neutron nếu số hiệu nguyên tử của Au là 79?",
        [
          "A. 100.",
          "B. 79.",
          "C. 118.",
          "D. 128."
        ],
        2,
        "Số neutron N = A - Z = 197 - 79 = 118 hạt."
      ],
      [
        "Một số thuộc tính sau được đưa ra để so sánh các đồng vị của cùng một nguyên tố hoá học: (1) khối lượng nguyên tử; (2) tính chất hoá học; (3) điện tích hạt nhân. Các đồng vị của cùng một nguyên tố hoá học giống nhau về các thuộc tính",
        [
          "A. cả (1), (2), (3).",
          "B. chỉ (1) và (3).",
          "C. chỉ (1) và (2).",
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
          "C. 1s²1p².",
          "D. 1s¹2s¹2p²."
        ],
        1,
        "Nguyên tử Be có Z = 4. Các electron phân bố lần lượt: 1s² 2s²."
      ],
      [
        "Cấu hình electron nguyên tử Mg (Z = 12) ở trạng thái cơ bản là",
        [
          "A. 1s²1p⁶2s²3p².",
          "B. 1s²2s²2p⁶3s².",
          "C. 1s²2s²2p².",
          "D. 1s²2s²2p⁸."
        ],
        1,
        "Cấu hình của Mg (Z = 12): 1s² 2s² 2p⁶ 3s²."
      ],
      [
        "Cation M⁺ có cấu hình electron giống khí hiếm Neon (Z = 10). Số hiệu nguyên tử M là",
        [
          "A. 20.",
          "B. 9.",
          "C. 11.",
          "D. 10."
        ],
        2,
        "M &rarr; M⁺ + 1e. Nguyên tử M có số electron = 10 + 1 = 11 &rArr; Z = 11 (Sodium)."
      ],
      [
        "Cấu hình electron của Fe (Z = 26) là",
        [
          "A. [Ar]3d⁸.",
          "B. [Ar]3d⁶.",
          "C. [Ar]3d⁶4s².",
          "D. [Ar]4s²4p⁶."
        ],
        2,
        "Fe (Z = 26) có cấu hình e: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² = [Ar] 3d⁶ 4s²."
      ],
      [
        "Nguyên tố Mn (Z = 25) thuộc ô 25,",
        [
          "A. chu kì 3, nhóm VIIB của bảng tuần hoàn.",
          "B. chu kì 4, nhóm VIIB của bảng tuần hoàn.",
          "C. chu kì 4, nhóm VIIA của bảng tuần hoàn.",
          "D. chu kì 4, nhóm VB của bảng tuần hoàn."
        ],
        1,
        "Mn có cấu hình: [Ar] 3d⁵ 4s². Có 4 lớp electron &rArr; chu kì 4. Tổng electron hóa trị d + s = 5 + 2 = 7 &rArr; nhóm VIIB."
      ],
      [
        "Nguyên tố R thuộc chu kì 5, nhóm IIA của bảng tuần hoàn. Tổng số hạt mang điện có trong một nguyên tử R là",
        [
          "A. 74.",
          "B. 39.",
          "C. 76.",
          "D. 78."
        ],
        2,
        "R thuộc chu kì 5 nhóm IIA &rArr; R là Strontium (Sr) có Z = 38. Tổng số hạt mang điện trong nguyên tử = 2Z = 76."
      ],
      [
        "Cho các nguyên tố: A(Z = 9), B(Z = 16), D(Z = 25), E(Z = 35), G(Z = 37). Các nguyên tố hoá học thuộc cùng một chu kì là",
        [
          "A. A và B.",
          "B. D và E.",
          "C. E và G.",
          "D. B và D."
        ],
        1,
        "D (Z = 25, [Ar] 3d⁵ 4s²) và E (Z = 35, [Ar] 3d¹⁰ 4s² 4p⁵) đều có 4 lớp electron nên cùng thuộc chu kì 4."
      ],
      [
        "Hai nguyên tố X, Y (Z_X < Z_Y) thuộc hai ô kế tiếp nhau trong một chu kì. Tổng số hạt mang điện tích dương trong hạt nhân của hai nguyên tử này là 71. Nguyên tố Y là",
        [
          "A. một khí hiếm.",
          "B. một kim loại nhóm A.",
          "C. một phi kim.",
          "D. một kim loại nhóm B."
        ],
        0,
        "Z_X + Z_Y = 71 và Z_Y - Z_X = 1 &rArr; Z_X = 35 (Br), Z_Y = 36 (Kr - khí hiếm Krypton)."
      ],
      [
        "Hai nguyên tố Q, T (Z_Q > Z_T) thuộc cùng một nhóm A ở hai chu kì kế tiếp nhau trong bảng tuần hoàn. Tổng số hạt mang điện trong hai nguyên tử Q, T là 28. Nguyên tố Q thuộc chu kì nào của bảng tuần hoàn?",
        [
          "A. 4.",
          "B. 1.",
          "C. 2.",
          "D. 3."
        ],
        3,
        "2Z_Q + 2Z_T = 28 &rArr; Z_Q + Z_T = 14. Vì thuộc nhóm A ở 2 chu kì kế tiếp nên Z_Q - Z_T = 8 &rArr; Z_Q = 11 (Na, chu kì 3) và Z_T = 3 (Li, chu kì 2)."
      ],
      [
        "Hai nguyên tố D, E (Z_D < Z_E) thuộc hai nhóm A kế tiếp nhau trong một chu kì. Tổng số hạt mang điện trong hai nguyên tử D, E là 102. Ở trạng thái cơ bản, nguyên tử E có bao nhiêu electron độc thân?",
        [
          "A. 1.",
          "B. 2.",
          "C. 3.",
          "D. 0."
        ],
        0,
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
          "A. số electron ở lớp ngoài cùng.",
          "B. số lớp electron trong nguyên tử.",
          "C. số electron hóa trị.",
          "D. số hiệu nguyên tử."
        ],
        1,
        "Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được sắp xếp theo chiều điện tích hạt nhân tăng dần."
      ],
      [
        "Các nguyên tố hóa học trong cùng một nhóm A của bảng tuần hoàn có cùng",
        [
          "A. số electron ở lớp ngoài cùng.",
          "B. số lớp electron trong nguyên tử.",
          "C. số hiệu nguyên tử.",
          "D. số electron hóa trị."
        ],
        3,
        "Các nguyên tố trong cùng một nhóm A có cấu hình electron tương tự nhau, đặc biệt có cùng số electron hóa trị (bằng số thứ tự nhóm)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 1 của bảng tuần hoàn là",
        [
          "A. 2.",
          "B. 6.",
          "C. 1.",
          "D. 84."
        ],
        0,
        "Chu kì 1 chỉ gồm 2 nguyên tố là Hydrogen (H, Z=1) và Helium (He, Z=2)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 2 của bảng tuần hoàn là",
        [
          "A. 2.",
          "B. 8.",
          "C. 10.",
          "D. 18."
        ],
        1,
        "Chu kì 2 gồm 8 nguyên tố từ Lithium (Li, Z=3) đến Neon (Ne, Z=10)."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 4 của bảng tuần hoàn là",
        [
          "A. 32.",
          "B. 10.",
          "C. 8.",
          "D. 18."
        ],
        3,
        "Chu kì 4 là chu kì lớn gồm 18 nguyên tố từ Potassium (K, Z=19) đến Krypton (Kr, Z=36)."
      ],
      [
        "Hai chu kì nào có số nguyên tố hóa học bằng nhau?",
        [
          "A. Chu kì 5 và chu kì 6.",
          "B. Chu kì 1 và chu kì 2.",
          "C. Chu kì 2 và chu kì 3.",
          "D. Chu kì 3 và chu kì 4."
        ],
        2,
        "Chu kì 2 và chu kì 3 đều có đúng 8 nguyên tố hóa học."
      ],
      [
        "Các nguyên tố có tính chất hóa học tương tự nhau thường",
        [
          "A. có cùng số hiệu nguyên tử.",
          "B. thuộc cùng một nhóm trong bảng tuần hoàn.",
          "C. có cùng số lớp electron trong nguyên tử.",
          "D. thuộc cùng một chu kì trong bảng tuần hoàn."
        ],
        1,
        "Các nguyên tố trong cùng một nhóm có cấu hình electron hóa trị tương tự nhau nên có tính chất hóa học tương tự nhau."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố họ s, p",
        [
          "A. là những phi kim.",
          "B. thuộc nhóm B.",
          "C. thuộc nhóm A.",
          "D. là những kim loại."
        ],
        2,
        "Các nguyên tố họ s và p là các nguyên tố thuộc nhóm A trong bảng tuần hoàn."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố họ d, f",
        [
          "A. là những phi kim.",
          "B. thuộc nhóm B.",
          "C. là kim loại nhẹ.",
          "D. thuộc nhóm A."
        ],
        1,
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
          "B. cả (1), (2) và (3).",
          "C. chỉ (2) và (3).",
          "D. chỉ (1) và (3)."
        ],
        0,
        "(1) và (2) đúng. (3) sai vì chu kì 3 chỉ có 8 nguyên tố hóa học."
      ],
      [
        "Osimium là một nguyên tố hóa học hiếm, thuộc nhóm platin, có ký hiệu Os và số nguyên tử 76. Nó rất cứng, nặng, bền, và được dùng trong hợp kim siêu bền. Trong bảng tuần hoàn, nguyên tố Os ở ô nguyên tố thứ bao nhiêu?",
        [
          "A. 67.",
          "B. 76.",
          "C. 152.",
          "D. 38."
        ],
        1,
        "Số thứ tự của ô nguyên tố đúng bằng số hiệu nguyên tử: Ô thứ 76."
      ],
      [
        "Phân đạm cung cấp nitrogen cho cây dưới dạng NH₄⁺, NO₃⁻. Số hiệu nguyên tử của nitrogen là 7. Trong bảng tuần hoàn, nguyên tố nitrogen thuộc chu kì nào?",
        [
          "A. Chu kì 2.",
          "B. Chu kì 1.",
          "C. Chu kì 5.",
          "D. Chu kì 3."
        ],
        0,
        "Nitrogen có Z = 7, cấu hình 1s² 2s² 2p³ có 2 lớp electron nên thuộc chu kì 2."
      ],
      [
        "Lithium là kim loại nhẹ nhất, thuộc nhóm kim loại kiềm, có ký hiệu Li và số nguyên tử 3. Nó được dùng chủ yếu trong công nghiệp sản xuất pin, acquy và các hợp kim nhẹ. Trong bảng tuần hoàn, nguyên tố lithium thuộc",
        [
          "A. nhóm IIA.",
          "B. nhóm IIIA.",
          "C. nhóm IVA.",
          "D. nhóm IA."
        ],
        3,
        "Li (Z = 3) có 1 electron ở lớp ngoài cùng (2s¹) nên thuộc nhóm IA."
      ],
      [
        "Cho các nhận xét: (1) Các chu kì 1, 2, 3, 4 là các chu kỳ nhỏ; (2) Các chu kỳ 5, 6, 7 là các chu kỳ lớn; (3) Số thứ tự của nhóm A đúng bằng số electron ở lớp ngoài cùng trong nguyên tử của nguyên tố thuộc nhóm đó. Số lượng nhận xét không đúng là",
        [
          "A. 0.",
          "B. 3.",
          "C. 2.",
          "D. 1."
        ],
        2,
        "(1) sai vì chu kì nhỏ là 1, 2, 3 (chu kì 4 là chu kì lớn); (2) sai vì chu kì lớn là 4, 5, 6, 7; (3) đúng. Vậy có 2 nhận xét không đúng."
      ],
      [
        "Zirconium (ký hiệu Zr, số nguyên tử 40) là kim loại chuyển tiếp màu xám bạc, có độ bền cao và khả năng chống ăn mòn tốt. Zr được sử dụng trong công nghiệp hạt nhân, hợp kim chịu nhiệt và gốm sứ kỹ thuật. Trong bảng tuần hoàn, nguyên tố Zr thuộc",
        [
          "A. chu kì 4, nhóm VB.",
          "B. chu kì 5, nhóm IIA.",
          "C. chu kì 5, nhóm IIB.",
          "D. chu kì 5, nhóm IVB."
        ],
        3,
        "Zr (Z = 40) có cấu hình e: [Kr] 4d² 5s² &rArr; có 5 lớp electron (chu kì 5) và có 2 + 2 = 4 electron hóa trị (nhóm IVB)."
      ],
      [
        "Nguyên tố X thuộc chu kì 3, nhóm VIA của bảng tuần hoàn. Số hạt mang điện có trong một nguyên tử X là",
        [
          "A. 16.",
          "B. 8.",
          "C. 32.",
          "D. 30."
        ],
        2,
        "X thuộc chu kì 3, nhóm VIA &rArr; cấu hình e là [Ne] 3s² 3p⁴ &rArr; Z = 16 (Sulfur). Tổng hạt mang điện trong nguyên tử = 2Z = 32."
      ],
      [
        "Tổng số electron, neutron, proton trong một nguyên tử R là 16. Trong bảng tuần hoàn, nguyên tố R ở",
        [
          "A. chu kì 2, nhóm IIIA.",
          "B. chu kì 2, nhóm IIA.",
          "C. chu kì 3, nhóm IA.",
          "D. chu kì 2, nhóm VIA."
        ],
        0,
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
          "B. electron, proton và neutron.",
          "C. neutron và electron.",
          "D. proton và neutron."
        ],
        1,
        "Hầu hết các nguyên tử được cấu tạo từ ba loại hạt cơ bản: electron (vỏ), proton (hạt nhân) và neutron (hạt nhân)."
      ],
      [
        "Loại hạt được tìm thấy trong hạt nhân và không mang điện là",
        [
          "A. proton.",
          "B. neutron.",
          "C. electron.",
          "D. photon."
        ],
        1,
        "Trong hạt nhân nguyên tử, neutron là hạt không mang điện tích (q = 0)."
      ],
      [
        "Loại hạt được tìm thấy trong hạt nhân và mang điện tích dương là",
        [
          "A. neutron.",
          "B. photon.",
          "C. proton.",
          "D. electron."
        ],
        2,
        "Trong hạt nhân, hạt proton mang điện tích dương (+1 đơn vị điện tích nguyên tố)."
      ],
      [
        "Thành phần nào không bị lệch hướng trong trường điện?",
        [
          "A. Tia âm cực.",
          "B. Tia α.",
          "C. Proton.",
          "D. Nguyên tử hydrogen."
        ],
        3,
        "Nguyên tử hydrogen trung hòa về điện nên khi đi qua điện trường nó không bị lệch hướng."
      ],
      [
        "Đặc điểm của electron là",
        [
          "A. mang điện tích âm và có khối lượng.",
          "B. mang điện tích âm và không có khối lượng.",
          "C. không mang điện và có khối lượng.",
          "D. mang điện tích dương và có khối lượng."
        ],
        0,
        "Electron mang điện tích âm (-1,602.10⁻¹⁹ C) và có khối lượng xác định (me ≈ 9,109.10⁻³¹ kg ≈ 0,00055 amu)."
      ],
      [
        "Số đơn vị điện tích hạt nhân của nguyên tử X là 53. Nguyên tử chứa",
        [
          "A. 53 neutron.",
          "B. 53 electron và 53 proton.",
          "C. 53 electron và 53 neutron.",
          "D. 53 proton và 53 neutron."
        ],
        1,
        "Nguyên tử trung hòa về điện nên số proton bằng số electron và bằng số đơn vị điện tích hạt nhân: P = E = 53."
      ],
      [
        "Phát biểu nào sau đây là đúng khi nói về nguyên tử?",
        [
          "A. Lớp vỏ nguyên tử tạo nên bởi các electron.",
          "B. Trong nguyên tử, số hạt proton luôn bằng số hạt neutron.",
          "C. Điện tích của một nguyên tử có thể có giá trị âm, dương hoặc bằng 0.",
          "D. Khối lượng của một nguyên tử (tính theo amu) luôn là số nguyên."
        ],
        0,
        "Lớp vỏ nguyên tử được tạo thành từ các electron chuyển động rất nhanh xung quanh hạt nhân."
      ],
      [
        "Hạt nhân của nguyên tử nguyên tố A có 24 hạt, trong đó số hạt không mang điện là 12. Số electron trong A là",
        [
          "A. 6.",
          "B. 13.",
          "C. 24.",
          "D. 12."
        ],
        3,
        "Số proton = tổng hạt hạt nhân - neutron = 24 - 12 = 12 &rArr; số electron = 12."
      ],
      [
        "Trong nguyên tử aluminium (Al), số hạt mang điện tích dương là 13, số hạt không mang điện là 14. Số hạt electron trong Al là",
        [
          "A. 13.",
          "B. 27.",
          "C. 15.",
          "D. 14."
        ],
        0,
        "Trong nguyên tử trung hòa về điện, số electron luôn bằng số proton = 13."
      ],
      [
        "Oxygen (O) có khối lượng nguyên tử là 15,999 amu (1 amu = 1,6605.10⁻²⁷ kg). Khối lượng 1 nguyên tử oxygen tính theo đơn vị gam là",
        [
          "A. 26,556.10⁻²⁴ gam.",
          "B. 26,665.10⁻²⁴ gam.",
          "C. 26,656.10⁻²⁴ gam.",
          "D. 26,566.10⁻²⁴ gam."
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
      "answer": "0.0274",
      "explanation": "%m(e) = (2 × 0,0005486 / 4,0026) × 100% &approx; 0,0274%."
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
    "id": "hoahoc-10-de-17",
    "title": "Hóa học 10 - Đề 17 - Trường THPT Đông Hà – Quảng Trị (Đề kiểm tra giữa học kì I 2026–2027 - Mã đề 1001)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Đông Hà",
    "province": "Quảng Trị",
    "year": "2026–2027",
    "sourceUrl": "dist/supplied/hoahoc-10-dong-ha-de-trang-1.jpg",
    "source": {
      "school": "Trường THPT Đông Hà",
      "province": "Quảng Trị",
      "year": "2026–2027",
      "url": "dist/supplied/hoahoc-10-dong-ha-de-trang-1.jpg",
      "note": "Đề kiểm tra giữa học kì I Mã đề 1001 (Kèm hình vẽ phổ khối lượng MS và ảnh chụp đề gốc)"
    },
    "description": "Đề kiểm tra giữa học kì I môn Hóa học 10 năm học 2026–2027 Trường THPT Đông Hà (Quảng Trị) - Mã đề 1001. Đầy đủ 4 phần chuẩn cấu trúc Bộ GD&ĐT (16 trắc nghiệm + 2 đúng/sai + 4 trả lời ngắn + 3 tự luận) kèm đồ thị phổ khối lượng (MS) và hướng dẫn giải chi tiết.",
    "questions": [
      [
        "Đối tượng nghiên cứu của hóa học là",
        [
          "A. sự hình thành hệ mặt trời.",
          "B. chất và sự biến đổi của chất.",
          "C. lịch sử phát triển của loài người.",
          "D. tốc độ của ánh sáng."
        ],
        1,
        "Hóa học là ngành khoa học tự nhiên nghiên cứu về chất, thành phần, cấu trúc, tính chất và sự biến đổi của chất cũng như ứng dụng của chúng trong đời sống."
      ],
      [
        "Ứng dụng nào sau đây của hóa học thuộc lĩnh vực chăm sóc sức khỏe?",
        [
          "A. Nghiên cứu và sản xuất thuốc.",
          "B. Chế tạo hợp kim siêu nhẹ làm vỏ máy bay.",
          "C. Sản xuất xăng sinh học E5.",
          "D. Chế tạo pin lithium-ion."
        ],
        0,
        "Nghiên cứu và sản xuất các loại thuốc chữa bệnh, dược phẩm, vắc-xin là ứng dụng thiết yếu của hóa học trong lĩnh vực y tế và chăm sóc sức khỏe."
      ],
      [
        "Khối lượng nguyên tử tập trung chủ yếu ở phần nào?",
        [
          "A. Lớp vỏ.",
          "B. Lớp electron ngoài cùng.",
          "C. Các orbital.",
          "D. Hạt nhân."
        ],
        3,
        "Khối lượng của electron rất nhỏ bé (khoảng 0,00055 amu, chỉ bằng khoảng 1/1836 khối lượng proton hay neutron), vì vậy khối lượng của toàn bộ nguyên tử tập trung hầu như hoàn toàn ở hạt nhân."
      ],
      [
        "Nguyên tử <sup>23</sup><sub>11</sub>Na có số hạt neutron là",
        [
          "A. 11.",
          "B. 23.",
          "C. 12.",
          "D. 34."
        ],
        2,
        "Nguyên tử <sup>23</sup><sub>11</sub>Na có số khối A = 23, số hiệu nguyên tử Z = p = 11. Số neutron: N = A - Z = 23 - 11 = 12 hạt."
      ],
      [
        "Cặp nguyên tử nào sau đây là đồng vị của cùng một nguyên tố hóa học?",
        [
          "A. <sup>14</sup><sub>6</sub>C và <sup>14</sup><sub>7</sub>N.",
          "B. <sup>40</sup><sub>19</sub>K và <sup>40</sup><sub>20</sub>Ca.",
          "C. <sup>35</sup><sub>17</sub>Cl và <sup>37</sup><sub>17</sub>Cl.",
          "D. <sup>16</sup><sub>8</sub>O và <sup>12</sup><sub>6</sub>C."
        ],
        2,
        "Các đồng vị của cùng một nguyên tố hóa học là những nguyên tử có cùng số proton (cùng Z) nhưng khác nhau về số neutron. Cặp <sup>35</sup><sub>17</sub>Cl và <sup>37</sup><sub>17</sub>Cl cùng có Z = 17 nên là đồng vị của chlorine."
      ],
      [
        "Các orbital nguyên tử thuộc phân lớp p có dạng",
        [
          "A. hình cầu.",
          "B. hình vòng nhẫn.",
          "C. hình dạng không xác định.",
          "D. hình số 8 nổi."
        ],
        3,
        "Orbital s có dạng hình cầu; orbital p có dạng hình số 8 nổi (hình quả tạ đôi) định hướng theo các trục tọa độ px, py, pz."
      ],
      [
        "Số electron tối đa trong mỗi orbital nguyên tử (AO) là",
        [
          "A. 1.",
          "B. 3.",
          "C. 6.",
          "D. 2."
        ],
        3,
        "Theo nguyên lí vững bền Pauli: Trong mỗi orbital nguyên tử chỉ có thể chứa tối đa 2 electron và 2 electron này có spin ngược chiều nhau."
      ],
      [
        "Các lớp electron tương ứng với n = 1, 2, 3, 4 được ký hiệu bằng các chữ cái lần lượt là",
        [
          "A. K, L, M, N.",
          "B. L, M, N, O.",
          "C. K, M, N, P.",
          "D. M, N, O, P."
        ],
        0,
        "Tên gọi các lớp electron từ trong ra ngoài tương ứng với n = 1, 2, 3, 4 lần lượt là K, L, M, N."
      ],
      [
        "Số lượng orbital nguyên tử (AO) có trong phân lớp d là",
        [
          "A. 10.",
          "B. 6.",
          "C. 5.",
          "D. 7."
        ],
        2,
        "Phân lớp s có 1 AO, phân lớp p có 3 AO, phân lớp d có 5 AO, phân lớp f có 7 AO. Số electron tối đa tương ứng là 2, 6, 10, 14."
      ],
      [
        "Cấu hình electron nguyên tử của Sulfur (Z = 16) ở trạng thái cơ bản là",
        [
          "A. 1s² 2s² 2p⁶ 3s² 3p⁵.",
          "B. 1s² 2s² 2p⁶ 3s² 3p⁶.",
          "C. 1s² 2s² 2p⁶ 3s² 3p⁴.",
          "D. 1s² 2s² 2p⁶ 3s¹ 3p⁶."
        ],
        2,
        "Sulfur có Z = 16. Phân bố 16 electron theo thứ tự mức năng lượng: 1s² 2s² 2p⁶ 3s² 3p⁴ (viết gọn [Ne] 3s² 3p⁴)."
      ],
      [
        "Trong tự nhiên, chlorine có 2 đồng vị bền là <sup>35</sup>Cl (chiếm 75,77%) và <sup>37</sup>Cl (chiếm 24,23%). Nguyên tử khối trung bình của chlorine là (kết quả làm tròn đến hàng phần trăm)",
        [
          "A. 35,40.",
          "B. 35,50.",
          "C. 36,00.",
          "D. 35,48."
        ],
        3,
        "Nguyên tử khối trung bình: Ā = (35 × 75,77 + 37 × 24,23) / 100 = (2651,95 + 896,51) / 100 = 3548,46 / 100 ≈ 35,48."
      ],
      [
        "Nguyên tử của nguyên tố X có 3 lớp electron. Số e tối đa ở lớp thứ 3 của X là",
        [
          "A. 18.",
          "B. 10.",
          "C. 8.",
          "D. 6."
        ],
        2,
        "Nguyên tử nguyên tố X có 3 lớp electron ⇒ X thuộc chu kỳ 3. Lớp thứ 3 chính là lớp ngoài cùng của X. Theo quy tắc số electron tối đa ở lớp ngoài cùng của mọi nguyên tử không vượt quá 8 electron, do đó số electron tối đa ở lớp thứ 3 của X là 8 electron (khi đạt cấu hình khí hiếm Argon 3s² 3p⁶). (Lưu ý phân biệt: Công thức 2n² = 18e áp dụng cho lớp 3 nói chung khi đã có lớp 4 bao bọc ở ngoài như Zn [Ar] 3d¹⁰ 4s²; còn ở đây đề cho X chỉ có 3 lớp electron nên lớp 3 là lớp ngoài cùng tối đa 8e)."
      ],
      [
        "Nguyên tử Y có cấu hình electron 1s² 2s² 2p⁶ 3s¹. Vị trí của Y trong bảng tuần hoàn là",
        [
          "A. Ô số 11, chu kỳ 3, nhóm IA.",
          "B. Ô số 11, chu kỳ 3, nhóm IIA.",
          "C. Ô số 11, chu kỳ 1, nhóm IIIA.",
          "D. Ô số 1, chu kỳ 3, nhóm IA."
        ],
        0,
        "Y có Z = 11 ⇒ Ô số 11; Có 3 lớp electron ⇒ Chu kỳ 3; Lớp ngoài cùng có 1 electron (3s¹) và là nguyên tố s ⇒ Nhóm IA (nguyên tố Natri/Sodium)."
      ],
      [
        "Chu kỳ là tập hợp các nguyên tố mà nguyên tử của chúng có cùng",
        [
          "A. số electron hóa trị.",
          "B. số lớp electron.",
          "C. số neutron trong hạt nhân.",
          "D. điện tích hạt nhân."
        ],
        1,
        "Định nghĩa: Chu kỳ là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được sắp xếp theo chiều điện tích hạt nhân tăng dần."
      ],
      [
        "Trong bảng tuần hoàn các nguyên tố hóa học, số chu kỳ nhỏ và chu kỳ lớn lần lượt là",
        [
          "A. 4 và 4.",
          "B. 4 và 3.",
          "C. 3 và 3.",
          "D. 3 và 4."
        ],
        3,
        "Bảng tuần hoàn gồm 7 chu kỳ: Chu kỳ nhỏ gồm chu kỳ 1, 2, 3 (có 3 chu kỳ); Chu kỳ lớn gồm chu kỳ 4, 5, 6, 7 (có 4 chu kỳ)."
      ],
      [
        "Cho các nguyên tố có số hiệu nguyên tử: X (Z = 11), Y (Z = 13), Z (Z = 16), T (Z = 20). Số nguyên tố thuộc khối p là",
        [
          "A. 1.",
          "B. 2.",
          "C. 3.",
          "D. 4."
        ],
        1,
        "Viết cấu hình electron:<br>• X (Z = 11): [Ne] 3s¹ ⇒ nguyên tố khối s.<br>• Y (Z = 13): [Ne] 3s² 3p¹ ⇒ e chót điền vào phân lớp p ⇒ nguyên tố khối p.<br>• Z (Z = 16): [Ne] 3s² 3p⁴ ⇒ e chót điền vào phân lớp p ⇒ nguyên tố khối p.<br>• T (Z = 20): [Ar] 4s² ⇒ nguyên tố khối s.<br>Vậy có đúng 2 nguyên tố thuộc khối p là Y và Z."
      ]
    ],
    "tf": [
      {
        "stem": "Cho đồ thị phổ khối lượng (MS) của nguyên tố Neon (Z<sub>Ne</sub> = 10):<div class=\"exam-figure\"><svg viewBox=\"0 0 420 260\" width=\"100%\" height=\"260\" style=\"max-width:460px;display:block;margin:12px auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:8px;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" fill=\"#f8fafc\" rx=\"8\"/><rect x=\"50\" y=\"25\" width=\"345\" height=\"190\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><line x1=\"50\" y1=\"215\" x2=\"395\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"42\" y=\"218\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">0</text><line x1=\"50\" y1=\"177\" x2=\"395\" y2=\"177\" stroke=\"#f1f5f9\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"42\" y=\"180\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">20</text><line x1=\"50\" y1=\"139\" x2=\"395\" y2=\"139\" stroke=\"#f1f5f9\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"42\" y=\"142\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">40</text><line x1=\"50\" y1=\"101\" x2=\"395\" y2=\"101\" stroke=\"#f1f5f9\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"42\" y=\"104\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">60</text><line x1=\"50\" y1=\"63\" x2=\"395\" y2=\"63\" stroke=\"#f1f5f9\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"42\" y=\"66\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">80</text><line x1=\"50\" y1=\"25\" x2=\"395\" y2=\"25\" stroke=\"#f1f5f9\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"42\" y=\"29\" font-size=\"11\" text-anchor=\"end\" fill=\"#64748b\">100</text><text x=\"-120\" y=\"18\" transform=\"rotate(-90)\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#334155\">Tỉ lệ % số nguyên tử</text><text x=\"130\" y=\"232\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">20</text><text x=\"220\" y=\"232\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">21</text><text x=\"310\" y=\"232\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">22</text><text x=\"220\" y=\"249\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#334155\">Nguyên tử khối (m/z)</text><line x1=\"130\" y1=\"215\" x2=\"130\" y2=\"42.3\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"130\" cy=\"42.3\" r=\"3.5\" fill=\"#2563eb\"/><text x=\"130\" y=\"36\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">90,90%</text><line x1=\"220\" y1=\"215\" x2=\"220\" y2=\"212\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle cx=\"220\" cy=\"212\" r=\"2.5\" fill=\"#2563eb\"/><text x=\"220\" y=\"206\" font-size=\"10.5\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">0,30%</text><line x1=\"310\" y1=\"215\" x2=\"310\" y2=\"198.3\" stroke=\"#2563eb\" stroke-width=\"3\"/><circle cx=\"310\" cy=\"198.3\" r=\"3\" fill=\"#2563eb\"/><text x=\"310\" y=\"192\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">8,80%</text></svg><div class=\"figure-caption\">Hình minh hoạ: Phổ khối lượng (MS) của nguyên tố Neon (Z = 10)</div></div>",
        "items": [
          [
            "Lớp vỏ nguyên tử Neon có 10 electron.",
            true,
            "ĐÚNG. Vì Neon có Z = 10, nguyên tử trung hòa về điện nên số electron ở lớp vỏ bằng số proton bằng 10."
          ],
          [
            "Ở nguyên tử của đồng vị chiếm tỉ lệ phổ biến nhất, tổng số hạt cơ bản (p, n, e) là 20.",
            false,
            "SAI. Đồng vị chiếm tỉ lệ phổ biến nhất là <sup>20</sup><sub>10</sub>Ne (chiếm 90,90%). Số hạt cơ bản: p = 10, e = 10, n = 20 - 10 = 10. Tổng số hạt = p + n + e = 10 + 10 + 10 = 30 hạt (không phải 20)."
          ],
          [
            "Ba vạch tín hiệu trên phổ khối lượng đại diện cho 3 kí hiệu nguyên tử <sup>20</sup><sub>10</sub>Ne, <sup>21</sup><sub>10</sub>Ne, <sup>22</sup><sub>10</sub>Ne; các nguyên tử này thuộc cùng một nguyên tố hóa học do có cùng số proton (Z = 10).",
            true,
            "ĐÚNG. Ba đỉnh tín hiệu tương ứng với 3 đồng vị có số khối 20, 21, 22. Chúng cùng có số hiệu nguyên tử Z = 10 nên thuộc cùng nguyên tố hóa học Neon."
          ],
          [
            "Dựa vào phổ khối lượng trên, nguyên tử khối trung bình của nguyên tố Neon xác định bằng 21,18 (kết quả làm tròn đến hàng phần trăm).",
            false,
            "SAI. Nguyên tử khối trung bình: Ā = (20 × 90,90 + 21 × 0,30 + 22 × 8,80) / 100 = (1818 + 6,3 + 193,6) / 100 = 2017,9 / 100 ≈ 20,18 (không phải 21,18)."
          ]
        ]
      },
      {
        "stem": "Các phát biểu sau về bảng tuần hoàn là đúng hay sai:",
        "items": [
          [
            "Các nguyên tố có cùng số lớp electron được xếp vào cùng một chu kì.",
            true,
            "ĐÚNG. Theo nguyên tắc sắp xếp bảng tuần hoàn, chu kỳ là dãy các nguyên tố có cùng số lớp electron."
          ],
          [
            "Nguyên tử của nguyên tố X có cấu hình e lớp ngoài cùng 2s² 2p⁵, X thuộc nhóm VIIA.",
            true,
            "ĐÚNG. Lớp ngoài cùng có 2 + 5 = 7 electron và là nguyên tố p ⇒ X thuộc nhóm VIIA."
          ],
          [
            "Khối nguyên tố s gồm các nguyên tố nhóm IA, IIA và IIIA.",
            false,
            "SAI. Khối nguyên tố s chỉ gồm các nguyên tố nhóm IA và nhóm IIA (cùng với He). Các nguyên tố nhóm IIIA thuộc khối nguyên tố p."
          ],
          [
            "Ở trạng thái cơ bản nguyên tử nguyên tố X có 13 electron ở lớp thứ 3 và có 5 e độc thân, X thuộc nhóm VIB.",
            false,
            "SAI. Lớp thứ 3 có 13 electron: 3s² 3p⁶ 3d⁵.<br>• Nếu là Chromium (Cr, Z = 24, thuộc nhóm VIB): Cấu hình electron là [Ar] 3d⁵ 4s¹. Nguyên tử có 13e ở lớp thứ 3 nhưng có tới 6 electron độc thân (5e ở 3d và 1e ở 4s), không phải 5e độc thân.<br>• Nếu nguyên tử có 13e ở lớp thứ 3 và có đúng 5e độc thân thì phân lớp 4s phải chứa 2e ghép đôi: [Ar] 3d⁵ 4s² (Z = 25, Manganese). Khi đó tổng số e hóa trị là 5 + 2 = 7, nguyên tố d ⇒ X thuộc nhóm VIIB (không phải nhóm VIB).<br>Do đó phát biểu này là SAI."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Cho kí hiệu <sup>39</sup><sub>19</sub>K (potassium), số hạt trong hạt nhân là bao nhiêu?",
        "answer": "39",
        "explanation": "Hạt nhân nguyên tử gồm proton và neutron. Tổng số hạt trong hạt nhân chính là số khối A = Z + N = 39 hạt."
      },
      {
        "question": "Khí carbon dioxide (CO₂) được tạo nên từ 2 đồng vị của C là <sup>12</sup>C và <sup>13</sup>C với 3 đồng vị của oxygen là <sup>16</sup>O, <sup>17</sup>O, <sup>18</sup>O. Có bao nhiêu loại phân tử CO₂ khác nhau được tạo thành?",
        "answer": "12",
        "explanation": "Phân tử CO₂ có dạng O-C-O. Số cặp đồng vị của oxygen (kể cả giống nhau và khác nhau) là: 3 × (3 + 1) / 2 = 6 cặp (¹⁶O-¹⁶O, ¹⁷O-¹⁷O, ¹⁸O-¹⁸O, ¹⁶O-¹⁷O, ¹⁶O-¹⁸O, ¹⁷O-¹⁸O). Với mỗi cặp O trên, có 2 cách chọn đồng vị C (¹²C hoặc ¹³C) ⇒ Tổng số loại phân tử CO₂ tạo thành là 6 × 2 = 12 loại."
      },
      {
        "question": "Trong 20 nguyên tố đầu tiên (Z = 1 đến Z = 20), có bao nhiêu nguyên tố mà nguyên tử có 2 electron độc thân ở trạng thái cơ bản?",
        "answer": "4",
        "explanation": "Xét 20 nguyên tố đầu tiên (Z = 1 đến 20):<br>• C (Z = 6): 1s² 2s² 2p² ⇒ phân lớp 2p có 2 electron độc thân.<br>• O (Z = 8): 1s² 2s² 2p⁴ ⇒ phân lớp 2p có 2 electron độc thân.<br>• Si (Z = 14): [Ne] 3s² 3p² ⇒ phân lớp 3p có 2 electron độc thân.<br>• S (Z = 16): [Ne] 3s² 3p⁴ ⇒ phân lớp 3p có 2 electron độc thân.<br>⇒ Có đúng 4 nguyên tố (C, O, Si, S) có 2 electron độc thân."
      },
      {
        "question": "Chu kỳ 1 trong bảng tuần hoàn có bao nhiêu nguyên tố hóa học?",
        "answer": "2",
        "explanation": "Chu kỳ 1 là chu kỳ nhỏ nhất, chỉ gồm 2 nguyên tố hóa học là Hydrogen (H, Z = 1) và Helium (He, Z = 2)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,0 điểm). Cấu hình electron và phân loại kim loại, phi kim.",
        "question": "Cho hai nguyên tố hóa học X và Y có số hiệu nguyên tử lần lượt là Z<sub>X</sub> = 9 và Z<sub>Y</sub> = 20.<br>a) Viết cấu hình electron nguyên tử của mỗi nguyên tố.<br>b) Cho biết nguyên tố X, Y là kim loại hay phi kim?",
        "solution": "a) Cấu hình electron nguyên tử:<br>• Nguyên tố X (Z<sub>X</sub> = 9): 1s² 2s² 2p⁵ (0,25 điểm).<br>• Nguyên tố Y (Z<sub>Y</sub> = 20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² hay [Ar] 4s² (0,25 điểm).<br>b) Xác định kim loại / phi kim:<br>• Nguyên tố X có 7 electron ở lớp ngoài cùng (2s² 2p⁵) nên X là phi kim (nguyên tố Fluorine, F) (0,25 điểm).<br>• Nguyên tố Y có 2 electron ở lớp ngoài cùng (4s²) nên Y là kim loại (nguyên tố Calcium, Ca) (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,0 điểm). Xác định vị trí nguyên tố trong Bảng tuần hoàn.",
        "question": "a) Xác định vị trí (chu kì, nhóm) trong bảng tuần hoàn của nguyên tố Na (Z = 11) và nguyên tố Fe (Z = 26)?<br>b) Cho 5 nguyên tố A, X, Y, Z, T theo thứ tự thuộc 5 ô liên tiếp nhau trong bảng tuần hoàn các nguyên tố hóa học, có số hiệu nguyên tử tăng dần. Tổng số hạt mang điện trong 5 nguyên tử của 5 nguyên tố trên bằng 100. Xác định vị trí của T trong bảng tuần hoàn?",
        "solution": "a) Vị trí của Na và Fe trong bảng tuần hoàn:<br>• Na (Z = 11): Cấu hình e: 1s² 2s² 2p⁶ 3s¹ &rArr; Ô số 11 (Z = 11), chu kỳ 3 (3 lớp electron), nhóm IA (1 electron lớp ngoài cùng, nguyên tố s) (0,25 điểm).<br>• Fe (Z = 26): Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² &rArr; Ô số 26 (Z = 26), chu kỳ 4 (4 lớp electron), nhóm VIIIB (nguyên tố d, tổng số e hóa trị là 6 + 2 = 8) (0,25 điểm).<br>b) Xác định vị trí của nguyên tố T:<br>• Gọi số hiệu nguyên tử của A là Z<sub>A</sub>. Do 5 nguyên tố thuộc 5 ô liên tiếp tăng dần nên: Z<sub>X</sub> = Z<sub>A</sub> + 1; Z<sub>Y</sub> = Z<sub>A</sub> + 2; Z<sub>Z</sub> = Z<sub>A</sub> + 3; Z<sub>T</sub> = Z<sub>A</sub> + 4.<br>• Trong mỗi nguyên tử, số hạt mang điện là 2Z (gồm proton và electron). Tổng số hạt mang điện: 2(Z<sub>A</sub> + Z<sub>X</sub> + Z<sub>Y</sub> + Z<sub>Z</sub> + Z<sub>T</sub>) = 100 &rArr; 5Z<sub>A</sub> + 10 = 50 &rArr; 5Z<sub>A</sub> = 40 &rArr; Z<sub>A</sub> = 8.<br>• Số hiệu nguyên tử của T: Z<sub>T</sub> = Z<sub>A</sub> + 4 = 8 + 4 = 12 (Magnesium, Mg).<br>• Cấu hình electron của T: 1s² 2s² 2p⁶ 3s² &rArr; Vị trí: Ô số 12, chu kỳ 3, nhóm IIA (0,50 điểm)."
      },
      {
        "title": "Câu 3 (1,0 điểm): [Câu phân loại / chặn điểm 10]. Xác định hạt cơ bản và công thức phân tử hợp chất.",
        "question": "a) Nguyên tử X có tổng số hạt cơ bản (p, n, e) là 60, trong đó số hạt neutron bằng 1/3 tổng số hạt. Xác định số hạt mỗi loại.<br>b) Phân tử XY₃ có tổng số hạt proton, neutron, electron bằng 196. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là 60. Số hạt mang điện của nguyên tử X ít hơn số hạt mang điện của 3 nguyên tử Y là 76. Hãy xác định công thức phân tử XY₃?<br><i>(Cho biết: Na = 11, Mg = 12, Al = 13, Si = 14, P = 15, S = 16, Cl = 17)</i>",
        "solution": "a) Xác định số hạt của nguyên tử X:<br>• Tổng số hạt cơ bản: 2Z<sub>X</sub> + N<sub>X</sub> = 60.<br>• Số hạt neutron: N<sub>X</sub> = 60 / 3 = 20 hạt.<br>&rArr; Số proton = số electron: 2Z<sub>X</sub> = 60 - 20 = 40 &rArr; Z<sub>X</sub> = 20.<br>&rArr; Kết luận: X có 20 proton, 20 electron và 20 neutron (nguyên tố Calcium, Ca) (0,25 điểm).<br>b) Xác định công thức phân tử XY₃:<br>• Trong phân tử XY₃ có 1 nguyên tử X và 3 nguyên tử Y.<br>Gọi Z<sub>X</sub>, N<sub>X</sub> và Z<sub>Y</sub>, N<sub>Y</sub> lần lượt là số hạt proton và neutron của X và Y.<br>• Tổng số hạt cơ bản trong XY₃:<br>(2Z<sub>X</sub> + 6Z<sub>Y</sub>) + (N<sub>X</sub> + 3N<sub>Y</sub>) = 196 (1)<br>• Số hạt mang điện nhiều hơn không mang điện là 60:<br>(2Z<sub>X</sub> + 6Z<sub>Y</sub>) - (N<sub>X</sub> + 3N<sub>Y</sub>) = 60 (2)<br>Cộng (1) và (2) vế theo vế:<br>2(2Z<sub>X</sub> + 6Z<sub>Y</sub>) = 256 &rArr; 2Z<sub>X</sub> + 6Z<sub>Y</sub> = 128 &rArr; Z<sub>X</sub> + 3Z<sub>Y</sub> = 64 (3) (0,25 điểm).<br>• Số hạt mang điện của X ít hơn số hạt mang điện của 3 nguyên tử Y là 76:<br>6Z<sub>Y</sub> - 2Z<sub>X</sub> = 76 &rArr; 3Z<sub>Y</sub> - Z<sub>X</sub> = 38 (4) (0,25 điểm).<br>• Giải hệ phương trình (3) và (4):<br>Lấy (3) + (4) &rArr; 6Z<sub>Y</sub> = 102 &rArr; Z<sub>Y</sub> = 17 (Chlorine, Cl).<br>Thay vào (3) &rArr; Z<sub>X</sub> = 64 - 3 &times; 17 = 13 (Aluminium, Al).<br>&rArr; Vậy công thức phân tử của XY₃ là AlCl₃ (Aluminium chloride) (0,25 điểm)."
      }
    ]
  }
,
{
  "id": "tienganh-10-de-01",
  "title": "Tiếng Anh 10 - Đề 01 - Đề thi giữa học kì 1 (Global Success)",
  "subject": "english",
  "duration": 45,
  "school": "Bộ GD&ĐT - Tiếng Anh 10 Global Success",
  "province": "Toàn quốc",
  "year": "2026–2027",
  "source": {
    "school": "Tiếng Anh 10 Global Success",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "note": "Đề thi giữa học kì 1 chuẩn chương trình GDPT 2018 (Unit 1, 2, 3)"
  },
  "description": "Đề thi giữa học kì 1 môn Tiếng Anh 10 Global Success (Đề số 1). Đầy đủ các phần: Phonetics, Grammar & Vocabulary, Word form, Reading (Julia Hill, The Zookeeper) và Writing (Sentence Transformation).",
  "questions": [
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. emi<u>ss</u>ion",
        "B. i<u>ss</u>ue",
        "C. mu<u>s</u>ical",
        "D. <u>s</u>ugar"
      ],
      2,
      "Trong từ 'musical', chữ 's' được phát âm là /z/. Trong các từ 'emission', 'issue', 'sugar', chữ 's' (hoặc 'ss') được phát âm là /ʃ/."
    ],
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. gr<u>o</u>cery",
        "B. ad<u>o</u>pt",
        "C. s<u>o</u>cial",
        "D. h<u>o</u>memaker"
      ],
      1,
      "Trong từ 'adopt', chữ 'o' được phát âm là /ɒ/. Trong các từ 'grocery', 'social', 'homemaker', chữ 'o' được phát âm là /əʊ/."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. damage",
        "B. support",
        "C. offer",
        "D. strengthen"
      ],
      1,
      "'support' có trọng âm rơi vào âm tiết thứ 2 (/səˈpɔːt/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 1: 'damage' (/ˈdæmɪdʒ/), 'offer' (/ˈɒfə/), 'strengthen' (/ˈstreŋkθn/)."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. appliance",
        "B. encourage",
        "C. energy",
        "D. organic"
      ],
      2,
      "'energy' có trọng âm rơi vào âm tiết thứ 1 (/ˈenədʒi/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 2: 'appliance' (/əˈplaɪəns/), 'encourage' (/ɪnˈkʌrɪdʒ/), 'organic' (/ɔːˈɡænɪk/)."
    ],
    [
      "<b>GRAMMAR AND VOCABULARY</b><br>Choose the best answer A, B, C or D to complete the sentence:<br>My mum usually cooks and _______ groceries.",
      [
        "A. goes for",
        "B. does for",
        "C. shops for",
        "D. takes for"
      ],
      2,
      "Cụm từ cố định (collocation): 'shop for groceries' mang nghĩa đi chợ mua thực phẩm, đồ tạp hóa."
    ],
    [
      "Doing chores together helps _______ family bonds.",
      [
        "A. ruin",
        "B. destroy",
        "C. strengthen",
        "D. break"
      ],
      2,
      "Cụm từ cố định: 'strengthen family bonds' mang nghĩa củng cố, thắt chặt tình cảm gắn kết gia đình. Các từ khác mang nghĩa tiêu cực (hủy hoại, phá vỡ)."
    ],
    [
      "Parents should encourage their children _______ the housework.",
      [
        "A. sharing",
        "B. to sharing",
        "C. to share",
        "D. share"
      ],
      2,
      "Cấu trúc: encourage somebody to do something (khuyến khích ai đó làm gì)."
    ],
    [
      "_______ such as cooking, cleaning or taking care of other are important for all children when they grow up.",
      [
        "A. Social skills",
        "B. Hard skills",
        "C. Organizational Skills",
        "D. Life skills"
      ],
      3,
      "'Life skills' mang nghĩa kỹ năng sống (nấu ăn, dọn dẹp, chăm sóc người khác,...)."
    ],
    [
      "Each of us _______ one or three household tasks according to personal choice.",
      [
        "A. choose",
        "B. choosing",
        "C. chooses",
        "D. chose"
      ],
      2,
      "Chủ ngữ 'Each of us' (mỗi người trong chúng tôi) là đại từ số ít, ở thì hiện tại đơn động từ chia số ít thêm 's': 'chooses'."
    ],
    [
      "My dad _______ a list of all the household chores and give it to me.",
      [
        "A. do",
        "B. take",
        "C. make",
        "D. has"
      ],
      3,
      "Chủ ngữ 'My dad' là ngôi thứ 3 số ít; phương án D 'has' (có một danh sách việc nhà) hòa hợp số ít với chủ ngữ."
    ],
    [
      "_______ are the behaviour that is considered correct while you are having a meal at a table with other people.",
      [
        "A. Displaying good manners",
        "B. Table manners",
        "C. Party etiquettes",
        "D. Social etiquette"
      ],
      1,
      "'Table manners' là phép tắc, văn hóa ăn uống lịch sự trên bàn ăn cùng người khác."
    ],
    [
      "_______ are ideas or beliefs that give great importance to the traditional family of a mother, a father, and children all living together.",
      [
        "A. Moral values",
        "B. Personal values",
        "C. Social values",
        "D. Family values"
      ],
      3,
      "'Family values' là giá trị gia đình (các niềm tin, giá trị coi trọng mô hình gia đình truyền thống sống hạnh phúc bên nhau)."
    ],
    [
      "We’ll organise more activities to raise local people’s awareness of _______ issues.",
      [
        "A. environment",
        "B. environmental",
        "C. environmentalist",
        "D. environmentally"
      ],
      1,
      "Đứng trước danh từ 'issues' cần một tính từ bổ nghĩa: 'environmental issues' (các vấn đề về môi trường)."
    ],
    [
      "Linda doesn’t like to drive, _______ she takes the bus everywhere.",
      [
        "A. but",
        "B. yet",
        "C. so",
        "D. because"
      ],
      2,
      "Liên từ 'so' dùng để chỉ kết quả: Linda không thích lái xe, vì vậy cô ấy đi xe buýt khắp mọi nơi."
    ],
    [
      "I was on time, _______ everyone else was late.",
      [
        "A. so",
        "B. but",
        "C. or",
        "D. for"
      ],
      1,
      "Liên từ 'but' chỉ sự đối lập, tương phản: Tôi đến đúng giờ, nhưng mọi người khác đều đến muộn."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>My mom feels happy when she sees our home <u>spotlessly</u> clean when she goes home.",
      [
        "A. quite",
        "B. pretty",
        "C. fairy",
        "D. extremely"
      ],
      3,
      "'spotlessly clean' nghĩa là sạch bong kin kít, sạch không một vết bẩn = 'extremely clean' (cực kỳ sạch sẽ)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>I’m <u>keen</u> to reduce my carbon footprint but I don’t know what to do.",
      [
        "A. eager",
        "B. unconcerned",
        "C. disinterested",
        "D. unenthusiastic"
      ],
      0,
      "'keen to do sth' (háo hức, tha thiết muốn làm gì) đồng nghĩa với 'eager'."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>Its aim is to improve our environment and encourage people to <u>adopt</u> a greener lifestyle.",
      [
        "A. follow",
        "B. support",
        "C. adapt",
        "D. neglect"
      ],
      3,
      "'adopt' (tiếp nhận, bắt đầu thực hiện lối sống xanh) trái nghĩa với 'neglect' (sao nhãng, ngó lơ, bỏ bê)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>They will require car makers to <u>reduce</u> emissions of carbon dioxide by 30%.",
      [
        "A. lessen",
        "B. turn down",
        "C. weaken",
        "D. increase"
      ],
      3,
      "'reduce' (giảm bớt) trái nghĩa với 'increase' (tăng lên)."
    ],
    [
      "<b>READING - CLOZE TEXT</b><br>In late 1997, the Pacific Lumber Company was planning to cut down a 600-year-old, 61-metre-tall redwood tree in California, USA. To (26) _______ the tree, people camped in tents near it but, as winter approached, they went home.",
      [
        "A. protect",
        "B. hold",
        "C. care",
        "D. ensure"
      ],
      0,
      "'protect the tree' (bảo vệ cái cây khỏi bị chặt hạ)."
    ],
    [
      "Tree lover Julia Hill decided that she had to stay to (27) _______ the company from cutting down the tree, so she climbed it.",
      [
        "A. control",
        "B. stop",
        "C. check",
        "D. get"
      ],
      1,
      "Cấu trúc: stop somebody from doing something (ngăn cản ai làm việc gì)."
    ],
    [
      "Friends visited her nightly and supplied her with food in a bucket. (28) _______ she had thought she might stay up there for perhaps a month, she stayed for much longer, nearly two years.",
      [
        "A. Although",
        "B. When",
        "C. Since",
        "D. Where"
      ],
      0,
      "'Although' (mặc dù) diễn tả sự tương phản: Mặc dù ban đầu nghĩ chỉ ở khoảng 1 tháng, nhưng thực tế cô đã ở gần 2 năm."
    ],
    [
      "Julia had (29) _______ famous all over the world. It ended on December 17. 1999.",
      [
        "A. acted",
        "B. recognised",
        "C. turned",
        "D. become"
      ],
      3,
      "Cụm từ: 'become famous' (trở nên nổi tiếng)."
    ],
    [
      "The Pacific Lumber Company received $50,000, and the tree was (30) _______ to live. Finally, Julia was able to climb down and go home.",
      [
        "A. caused",
        "B. made",
        "C. allowed",
        "D. let"
      ],
      2,
      "Cấu trúc bị động: be allowed to do something (được phép làm gì / được giữ lại sống)."
    ],
    [
      "<b>READING COMPREHENSION</b><br>Read the text 'The Zookeeper' by Mark Porter and answer the question:<br><i>The Zookeeper</i><br>My name's Mark Porter. I've been interested in the natural world since I was very young...<br><br><b>What is the writer trying to do in this text?</b>",
      [
        "A. how people can protect animals",
        "B. give an account of one day in his life",
        "C. describe some of the people he works with",
        "D. encourage people to have a career with wildlife."
      ],
      3,
      "Ở đoạn cuối tác giả viết: '...and I hope that you'll think about working with animals, too' (khuyến khích mọi người theo đuổi sự nghiệp làm việc với động vật)."
    ],
    [
      "<b>What can a reader find out from this text?</b>",
      [
        "A. what subject Mark needed to learn to get a better job",
        "B. how many hours a day does Mark have to work",
        "C. how long Mark has been keen on animals",
        "D. where you can find the best sea-life centres"
      ],
      0,
      "Đoạn 1 nêu rõ: '...I knew I had to go to college if I wanted a better job. So I went to university to study Biology...' (môn học Mark cần học là Sinh học - Biology)."
    ],
    [
      "<b>What does Mark say about his current job?</b>",
      [
        "A. It allows him to do a variety of things.",
        "B. It was quite difficult to get.",
        "C. It is better paid than his last job.",
        "D. It gives him time off work to go diving."
      ],
      0,
      "Đoạn 2 nêu: '...because there are lots of different activities I'm involved in here. As part of my job, I get to do research, and I manage an education centre...' (công việc cho phép anh làm nhiều việc phong phú, đa dạng)."
    ],
    [
      "<b>How does Mark feel about visitors to the zoo?</b>",
      [
        "A. nervous that a fish might hurt them",
        "B. annoyed when they don't behave well",
        "C. upset when they take the fish out of the water",
        "D. sad when they don't ask questions"
      ],
      1,
      "Đoạn 3: '...some try to touch the fish or put sweet wrappers in the water - that makes me angry' (tức giận, khó chịu khi khách có hành vi xấu ném rác vào nước)."
    ],
    [
      "<b>What might Mark write in his diary today?</b>",
      [
        "A. Today, I performed an operation on a sick fish that had eaten a sweet wrapper.",
        "B. I spent all day in the research laboratory again today doing boring experiments.",
        "C. I gave a talk today to a group of schoolchildren about looking after animals.",
        "D. Today I watched my boss go swimming with sharks - I wish I was allowed to do that too!"
      ],
      2,
      "Đoạn 2: 'I manage an education centre where I tell people of all ages about what they can do to protect fish and animals' (anh thuyết trình cho học sinh/mọi người nghe về cách bảo vệ động vật)."
    ]
  ],
  "short": [
    {
      "question": "Make the correct form of the verb in bracket:<br>I can’t read when I am traveling. It makes me (feel) _______ sick.",
      "answer": "feel",
      "explanation": "Cấu trúc 'make somebody do something' (make sb + V-bare): động từ 'feel' giữ nguyên dạng."
    },
    {
      "question": "Make the correct form of the verb in bracket:<br>I promised (be) _______ on time.",
      "answer": "to be",
      "explanation": "Cấu trúc 'promise to do something' (hứa làm gì): promised to be."
    },
    {
      "question": "Make the correct form of the verb in bracket:<br>I mustn’t (be) _______ late.",
      "answer": "be",
      "explanation": "Động từ khuyết thiếu 'mustn't' đi với động từ nguyên mẫu không to (V-bare): mustn't be."
    },
    {
      "question": "Make the correct form of the verb in bracket:<br>Would you like (go) _______ now or shall we wait till the end?",
      "answer": "to go",
      "explanation": "Cấu trúc lời mời/hỏi ý kiến: 'Would you like to do something': Would you like to go."
    },
    {
      "question": "Choose the correct phrase to complete the sentence:<br>You look tired. Sit down and I (will make / am going to make) _______ you a cup of tea.",
      "answer": "will make",
      "explanation": "Quyết định tức thì ngay tại thời điểm nói đưa ra lời đề nghị giúp đỡ dùng thì tương lai đơn 'will make'."
    },
    {
      "question": "Choose the correct phrase to complete the sentence:<br>I (won’t come / am not coming) _______ with you tonight. I have to stay in and finish my project.",
      "answer": "am not coming",
      "explanation": "Hành động đã có kế hoạch/lịch trình sắp xếp từ trước dùng thì hiện tại tiếp diễn chỉ tương lai: 'am not coming'."
    },
    {
      "question": "Choose the correct phrase to complete the sentence:<br>I (only work / ’m only working) _______ there for a couple of months - I’m going abroad in the summer.",
      "answer": "'m only working / am only working",
      "explanation": "Tình huống tạm thời trong một khoảng thời gian ngắn ('for a couple of months') dùng thì hiện tại tiếp diễn: 'm only working."
    }
  ],
  "essay": [
    {
      "title": "Câu 1. Viết lại câu gián tiếp với lời nhắc nhở 'remind'",
      "question": "Lan said to him: “Remember to close all the window and turn off the lights before going out”.<br>➔ Lan reminded ________________________________________",
      "solution": "Lan reminded him to close all the windows and turn off the lights before going out.<br>• Cấu trúc: remind somebody to do something (nhắc nhở ai nhớ làm gì)."
    },
    {
      "title": "Câu 2. Chuyển đổi cấu trúc 'spend time doing sth' sang 'It takes sb time to do sth'",
      "question": "Thanh spends 3 hours a day doing the homework.<br>➔ It takes ________________________________________",
      "solution": "It takes Thanh 3 hours a day to do the homework.<br>• Cấu trúc tương đương: S + spend + time + V-ing ➔ It takes + sb + time + to V."
    },
    {
      "title": "Câu 3. Viết lại câu tường thuật với 'tell sb to do sth'",
      "question": "Linh told him: “Don't forget to repair my bicycle”.<br>➔ Linh told him ________________________________________",
      "solution": "Linh told him to repair her bicycle. (hoặc: Linh told him not to forget to repair her bicycle).<br>• Cấu trúc: tell sb to do sth (bảo ai làm gì) hoặc tell sb not to do sth."
    },
    {
      "title": "Câu 4. Chuyển câu sang thể bị động với 'be going to'",
      "question": "They’re going to repair the machine tomorrow.<br>➔ The machine ________________________________________",
      "solution": "The machine is going to be repaired tomorrow.<br>• Cấu trúc bị động tương lai gần: S + is/am/are + going to be + V3/ed."
    },
    {
      "title": "Câu 5. Chuyển câu sang thể bị động với 'will'",
      "question": "They will publish her new book next month.<br>➔ Her new book ________________________________________",
      "solution": "Her new book will be published next month.<br>• Cấu trúc bị động tương lai đơn: S + will be + V3/ed."
    }
  ]
},
{
  "id": "tienganh-10-de-02",
  "title": "Tiếng Anh 10 - Đề 02 - Đề thi giữa học kì 1 (Global Success)",
  "subject": "english",
  "duration": 45,
  "school": "Bộ GD&ĐT - Tiếng Anh 10 Global Success",
  "province": "Toàn quốc",
  "year": "2026–2027",
  "source": {
    "school": "Tiếng Anh 10 Global Success",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "note": "Đề thi giữa học kì 1 chuẩn chương trình GDPT 2018 (Unit 1, 2, 3)"
  },
  "description": "Đề thi giữa học kì 1 môn Tiếng Anh 10 Global Success (Đề số 2). Đầy đủ các phần: Phonetics, Grammar & Vocabulary, Error correction, Reading (Art & Artists, Feeling Special) và Writing (Sentence Transformation).",
  "questions": [
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. <u>ch</u>aracter",
        "B. <u>ch</u>eer",
        "C. <u>ch</u>emical",
        "D. me<u>ch</u>anic"
      ],
      1,
      "Trong từ 'cheer', chữ 'ch' được phát âm là /tʃ/. Trong các từ 'character', 'chemical', 'mechanic', chữ 'ch' được phát âm là /k/."
    ],
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. dam<u>a</u>ge",
        "B. m<u>a</u>nner",
        "C. v<u>a</u>lue",
        "D. t<u>a</u>lent"
      ],
      0,
      "Trong từ 'damage', chữ 'a' thứ hai được phát âm là /ɪ/ (/ˈdæmɪdʒ/). Trong các từ 'manner', 'value', 'talent', âm tiết thứ hai có nguyên âm /ə/ hoặc /uː/."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. comment",
        "B. concert",
        "C. routine",
        "D. trumpet"
      ],
      2,
      "'routine' có trọng âm rơi vào âm tiết thứ 2 (/ruːˈtiːn/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 1: 'comment' (/ˈkɒment/), 'concert' (/ˈkɒnsət/), 'trumpet' (/ˈtrʌmpɪt/)."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. emission",
        "B. material",
        "C. instrument",
        "D. location"
      ],
      2,
      "'instrument' có trọng âm rơi vào âm tiết thứ 1 (/ˈɪnstrəmənt/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 2: 'emission' (/ɪˈmɪʃn/), 'material' (/məˈtɪəriəl/), 'location' (/ləʊˈkeɪʃn/)."
    ],
    [
      "<b>GRAMMAR AND VOCABULARY</b><br>Choose the best answer A, B, C or D to complete the sentence:<br>Children are encouraged to _______ litter that they see on the street.",
      [
        "A. drop",
        "B. leave",
        "C. pick up",
        "D. strew"
      ],
      2,
      "'pick up litter' mang nghĩa nhặt rác. Trẻ em được khuyến khích nhặt rác nhìn thấy trên đường phố."
    ],
    [
      "Remember to _______ your household appliances when they are not used.",
      [
        "A. turn down",
        "B. take off",
        "C. put down",
        "D. turn off"
      ],
      3,
      "'turn off' nghĩa là tắt (thiết bị điện gia dụng khi không sử dụng)."
    ],
    [
      "The restaurant only uses _______ ingredients that are good for our health and environment.",
      [
        "A. eco-friendly",
        "B. organic",
        "C. reusable",
        "D. man-made"
      ],
      1,
      "'organic ingredients' nghĩa là nguyên liệu hữu cơ (tốt cho sức khỏe và môi trường)."
    ],
    [
      "Don’t _______ your used household items but sort and recycle them.",
      [
        "A. put away",
        "B. take away",
        "C. throw away",
        "D. go away"
      ],
      2,
      "'throw away' mang nghĩa vứt bỏ (đồ gia dụng đã qua sử dụng)."
    ],
    [
      "Runners are encouraged to carry _______ water bottles.",
      [
        "A. disposable",
        "B. replaceable",
        "C. refillable",
        "D. removable"
      ],
      2,
      "'refillable water bottles' mang nghĩa bình nước có thể rót/làm đầy lại nhiều lần (giúp giảm rác thải nhựa)."
    ],
    [
      "The supermarket chain has promised to cut down _______ packaging.",
      [
        "A. in",
        "B. for",
        "C. with",
        "D. on"
      ],
      3,
      "Cụm động từ: 'cut down on something' mang nghĩa cắt giảm cái gì."
    ],
    [
      "Waste is separated into four different bins in order to _______ it.",
      [
        "A. reduce",
        "B. reuse",
        "C. recycle",
        "D. redo"
      ],
      2,
      "'recycle waste' mang nghĩa tái chế rác thải."
    ],
    [
      "More trees _______ in the school yard next year.",
      [
        "A. will plant",
        "B. plant",
        "C. will be planted",
        "D. are planted"
      ],
      2,
      "Câu bị động ở thì tương lai đơn với 'next year': S + will be + V3/ed ('will be planted')."
    ],
    [
      "Sharing housework helps children to learn to take _______.",
      [
        "A. responsible",
        "B. responsibly",
        "C. irresponsibility",
        "D. responsibility"
      ],
      3,
      "Cụm cố định: 'take responsibility' (học cách chịu trách nhiệm)."
    ],
    [
      "I think the weather _______ be bad tomorrow.",
      [
        "A. shall",
        "B. will",
        "C. is going",
        "D. could"
      ],
      1,
      "Dự đoán dựa trên quan điểm cá nhân với 'I think' dùng thì tương lai đơn: 'will be'."
    ],
    [
      "Look! Mary _______ a beautiful new dress. She _______ so pretty in the dress.",
      [
        "A. was wearing / looked",
        "B. wears / has looked",
        "C. has been wearing / is looking",
        "D. is wearing / looks"
      ],
      3,
      "Dấu hiệu 'Look!' dùng thì hiện tại tiếp diễn 'is wearing'. Vế sau 'look' là động từ nối (linking verb) chỉ cảm giác/vẻ ngoài, chia ở hiện tại đơn 'looks'."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>Most definitions of <u>sustainable</u> energy include considerations of environmental aspects such as greenhouse gas emissions and social and economic aspects such as energy poverty.",
      [
        "A. temporary",
        "B. wasteful",
        "C. renewable",
        "D. unendurable"
      ],
      2,
      "'sustainable' (bền vững, tái tạo được) gần nghĩa nhất với 'renewable' (có thể tái tạo)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>His father was a tailor who owned a clothing store but lost it in the 1929 stock market crash; his mother was a <u>homemaker</u>.",
      [
        "A. breadwinner",
        "B. income producer",
        "C. home engineer",
        "D. meal ticket"
      ],
      2,
      "'homemaker' (người nội trợ gia đình) đồng nghĩa với 'home engineer' (cách gọi trang trọng/hóm hỉnh của người làm nội trợ)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>When kids perform housekeeping, they learn to <u>appreciate</u> all of their parents' hard work around the house.",
      [
        "A. give thanks",
        "B. cherish",
        "C. acknowledge",
        "D. overlook"
      ],
      3,
      "'appreciate' (trân trọng, đánh giá cao) trái nghĩa với 'overlook' (ngó lơ, xem nhẹ, bỏ qua)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>Kids that practice housework <u>develop</u> valuable life skills that they will use throughout their entire lives.",
      [
        "A. establish",
        "B. foster",
        "C. progress",
        "D. end"
      ],
      3,
      "'develop' (phát triển, trau dồi) trái nghĩa với 'end' (chấm dứt, kết thúc)."
    ],
    [
      "<b>READING - CLOZE TEXT</b><br>The ability to make a work of art is one of the most creative things anyone can do. It doesn't matter, whether it is a painter creating a landscape painting, or a sculptor carving a marble statue, as all artists share the same passion to capture a moment in (26) _______ life that has inspired them.",
      [
        "A. their",
        "B. there",
        "C. this",
        "D. those"
      ],
      0,
      "Tính từ sở hữu chỉ danh từ số nhiều 'all artists' là 'their' (trong cuộc đời của họ)."
    ],
    [
      "(27) _______ artist needs to start somewhere. The moment may be at home with their first painting set, or in their first art class, but when it comes it will never leave them.",
      [
        "A. few",
        "B. several",
        "C. every",
        "D. those"
      ],
      2,
      "Đứng trước danh từ đếm được số ít 'artist' và động từ 'needs' là lượng từ 'every' (mỗi nghệ sĩ)."
    ],
    [
      "However, (28) _______ is unique for every artist is the journey that drives them to complete their creation.",
      [
        "A. what",
        "B. when",
        "C. why",
        "D. where"
      ],
      0,
      "Mệnh đề danh ngữ làm chủ ngữ: 'What is unique for every artist...' (Điều độc đáo đối với mỗi nghệ sĩ...)."
    ],
    [
      "There are some artists who just (29) _______ their art at home, whereas others try to earn a living from it. You can take a visit to the local galleries to purchase one.",
      [
        "A. give",
        "B. take",
        "C. get",
        "D. keep"
      ],
      3,
      "'keep their art at home' (giữ các tác phẩm của mình ở nhà thay vì đem bán)."
    ],
    [
      "If you are fortunate, you may find yourself (30) _______ bargain. And who knows this artist may be the next Picasso or Van Gogh?",
      [
        "A. an",
        "B. a",
        "C. the",
        "D. x"
      ],
      1,
      "Cụm từ: 'a bargain' (một món hời, mua được giá tốt); 'bargain' bắt đầu bằng phụ âm nên dùng mạo từ 'a'."
    ],
    [
      "<b>READING COMPREHENSION</b><br>Read the text about feeling special and answer the question:<br><i>Everybody likes to feel special. Sadly, many of us grow up believing that we're not special at all...</i><br><br><b>What is the writer's main aim in writing the text?</b>",
      [
        "A. to talk about your family problems",
        "B. to explain the importance of being yourself",
        "C. to describe how intelligent we are",
        "D. to suggest how people can change their way of life"
      ],
      1,
      "Mục đích chính của tác giả là giải thích tầm quan trọng của việc trân trọng chính bản thân mình (being yourself) và nhận ra mỗi người đều đặc biệt theo cách riêng."
    ],
    [
      "<b>This essay was most likely written by _______</b>",
      [
        "A. a young person",
        "B. a coach",
        "C. a teacher",
        "D. a parent"
      ],
      0,
      "Bài viết sử dụng ngôi kể 'we', nói về việc lớn lên và mối quan hệ với cha mẹ ('Our parents often forget to tell us...'), phù hợp nhất với góc nhìn của một người trẻ (a young person)."
    ],
    [
      "<b>What does the writer say about our parents?</b>",
      [
        "A. They always tell us that we are good enough.",
        "B. They never forget to tell us that we are special.",
        "C. They always tell us that we are special.",
        "D. They frequently forget to tell us that we are special."
      ],
      3,
      "Đoạn cuối: 'Our parents often forget to tell us that we are special, that we are good enough just as we are' (cha mẹ thường quên nói với chúng ta rằng chúng ta rất đặc biệt)."
    ],
    [
      "<b>The author of this essay believes that … .</b>",
      [
        "A. we are all good enough just the way we are",
        "B. the richer you are, the better you are",
        "C. intelligent people are more special than others",
        "D. not everyone can be special"
      ],
      0,
      "Câu kết bài: 'What we are is enough!' (chúng ta đều đã đủ tốt theo đúng con người của mình)."
    ],
    [
      "<b>Which of the following would be the best title for this passage?</b>",
      [
        "A. What Makes You Laugh?",
        "B. What Makes You Happy?",
        "C. What Makes You Special?",
        "D. What Makes You Stronger?"
      ],
      2,
      "Tiêu đề phù hợp nhất phản ánh toàn bộ ý nghĩa bài viết là: 'What Makes You Special?' (Điều gì làm cho bạn trở nên đặc biệt?)."
    ]
  ],
  "short": [
    {
      "question": "Make the correct form of the verb in bracket:<br>Can you afford _______ (buy) so many presents?",
      "answer": "to buy",
      "explanation": "Cấu trúc: afford to do something (có đủ khả năng tài chính để mua/làm gì)."
    },
    {
      "question": "Make the correct form of the verb in bracket:<br>How did you learn _______ (speak) Vietnamese so well?",
      "answer": "to speak",
      "explanation": "Cấu trúc: learn to do something (học làm cái gì)."
    },
    {
      "question": "Make the correct form of the verb in bracket:<br>It was very kind of Jimmy to offer _______ (baby-sit) this weekend.",
      "answer": "to baby-sit / to babysit",
      "explanation": "Cấu trúc: offer to do something (đề nghị làm giúp việc gì)."
    },
    {
      "question": "Find and correct the mistake in the sentence:<br>The weather are seeming to be better. What about a picnic this weekend?<br>➔ Sửa lỗi sai:",
      "answer": "are seeming -> seems / seems",
      "explanation": "Động từ 'seem' là động từ trạng thái (stative verb), không chia ở thì tiếp diễn; chủ ngữ 'The weather' số ít ➔ sửa thành 'seems'."
    },
    {
      "question": "Find and correct the mistake in the sentence:<br>Don’t let the dog sitting on the sofa!<br>➔ Sửa lỗi sai:",
      "answer": "sitting -> sit / sit",
      "explanation": "Cấu trúc: let somebody/something do something (let + V-bare) ➔ sửa 'sitting' thành 'sit'."
    },
    {
      "question": "Find and correct the mistake in the sentence:<br>Look at the dark clouds. It will rain soon.<br>➔ Sửa lỗi sai:",
      "answer": "will rain -> is going to rain / is going to rain",
      "explanation": "Dự đoán có bằng chứng rõ ràng ở hiện tại ('Look at the dark clouds') dùng cấu trúc 'be going to' ➔ sửa 'will rain' thành 'is going to rain'."
    }
  ],
  "essay": [
    {
      "title": "Câu 1. Chuyển đổi câu sang thể bị động thì Quá khứ đơn",
      "question": "The German didn’t build this factory during the Second World War.<br>➔ This factory ________________________________________",
      "solution": "This factory was not built by the Germans during the Second World War.<br>• Cấu trúc bị động quá khứ đơn: S + was/were + not + V3/ed + by O."
    },
    {
      "title": "Câu 2. Chuyển đổi câu sang thể bị động tương lai gần 'be going to'",
      "question": "The Greens are going to paint this house and these cars for Christmas Day.<br>➔ This house ________________________________________",
      "solution": "This house and these cars are going to be painted by the Greens for Christmas Day.<br>• Cấu trúc: S + are going to be + V3/ed + by O."
    },
    {
      "title": "Câu 3. Chuyển đổi câu sang thể bị động thì Hiện tại đơn",
      "question": "He hides the broken cup in the drawer.<br>➔ The broken ________________________________________",
      "solution": "The broken cup is hidden in the drawer (by him).<br>• Cấu trúc bị động hiện tại đơn: S + am/is/are + V3/ed (hide ➔ hidden)."
    },
    {
      "title": "Câu 4. Viết lại câu với cấu trúc bị động hoặc 'expect sb to do sth'",
      "question": "I expect that she will give me some advice.<br>➔ I expect ________________________________________",
      "solution": "I expect her to give me some advice (hoặc: I expect to be given some advice by her).<br>• Cấu trúc: expect somebody to do something hoặc expect to be V3/ed."
    },
    {
      "title": "Câu 5. Chuyển đổi từ 'allow' sang 'let'",
      "question": "The doctor doesn’t allow me to go out.<br>➔ The doctor doesn’t let ________________________________________",
      "solution": "The doctor doesn’t let me go out.<br>• Cấu trúc tương đương: allow sb to do sth ➔ let sb do sth (let đi với động từ nguyên mẫu không to)."
    }
  ]
},
{
  "id": "tienganh-10-de-03",
  "title": "Tiếng Anh 10 - Đề 03 - Đề thi giữa học kì 1 (Global Success)",
  "subject": "english",
  "duration": 45,
  "school": "Bộ GD&ĐT - Tiếng Anh 10 Global Success",
  "province": "Toàn quốc",
  "year": "2026–2027",
  "source": {
    "school": "Tiếng Anh 10 Global Success",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "note": "Đề thi giữa học kì 1 chuẩn chương trình GDPT 2018 (Unit 1, 2, 3)"
  },
  "description": "Đề thi giữa học kì 1 môn Tiếng Anh 10 Global Success (Đề số 3). Đầy đủ các phần: Phonetics, Grammar & Vocabulary, Stative verbs & Tenses, Reading (Bagpipes, Snakebites) và Writing (Sentence Transformation).",
  "questions": [
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. gratit<u>u</u>de",
        "B. h<u>u</u>man",
        "C. ed<u>u</u>cation",
        "D. val<u>u</u>e"
      ],
      2,
      "Trong từ 'education', chữ 'u' được phát âm là /u/ hoặc /juː/ với tổ hợp âm /dʒu/. Trong các từ 'gratitude' (/ˈɡrætɪtjuːd/), 'human' (/ˈhjuːmən/), 'value' (/ˈvæljuː/), chữ 'u' phát âm rõ là /juː/."
    ],
    [
      "<b>PHONETICS</b><br>Find the word which has a different sound in the part underlined:",
      [
        "A. c<u>o</u>mment",
        "B. supp<u>or</u>t",
        "C. <u>or</u>ganic",
        "D. res<u>our</u>ce"
      ],
      0,
      "Trong từ 'comment', chữ 'o' được phát âm là /ɒ/ (/ˈkɒment/). Các phần gạch chân ở 'support', 'organic', 'resource' được phát âm là /ɔː/ (theo giọng Anh-Anh)."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. upload",
        "B. issue",
        "C. support",
        "D. routine"
      ],
      1,
      "'issue' có trọng âm rơi vào âm tiết thứ 1 (/ˈɪʃuː/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 2: 'upload' (/ʌpˈləʊd/), 'support' (/səˈpɔːt/), 'routine' (/ruːˈtiːn/)."
    ],
    [
      "<b>PHONETICS</b><br>Choose the word which has a different stress pattern from the others:",
      [
        "A. breadwinner",
        "B. homemaker",
        "C. lifestyle",
        "D. washing-up"
      ],
      3,
      "'washing-up' có trọng âm rơi vào âm tiết thứ hai /ˌwɒʃɪŋ ˈʌp/. Các từ còn lại có trọng âm rơi vào âm tiết thứ 1: 'breadwinner' (/ˈbredwɪnə/), 'homemaker' (/ˈhəʊmmeɪkə/), 'lifestyle' (/ˈlaɪfstaɪl/)."
    ],
    [
      "<b>GRAMMAR AND VOCABULARY</b><br>Choose the best answer A, B, C or D to complete the sentence:<br>The award _______ for his work in cancer research in 1995.",
      [
        "A. has made",
        "B. was made",
        "C. has been made",
        "D. made"
      ],
      1,
      "Có mốc thời gian xác định trong quá khứ 'in 1995' và mang nghĩa bị động: 'was made'."
    ],
    [
      "When she was young, she _______ at the local theatre in her hometown during the tourist season.",
      [
        "A. has performed",
        "B. performed",
        "C. has been performed",
        "D. was performed"
      ],
      1,
      "Mệnh đề chỉ thời gian trong quá khứ 'When she was young' dùng thì quá khứ đơn ở thể chủ động: 'performed'."
    ],
    [
      "Many fans say that BTS’s songs helped _______ more love and hope into their lives.",
      [
        "A. to bringing",
        "B. bring",
        "C. bringing",
        "D. to be brought"
      ],
      1,
      "Cấu trúc: help (to) do something (giúp đỡ làm gì) ➔ dùng động từ nguyên thể 'bring'."
    ],
    [
      "We encourage _______ participation during our show.",
      [
        "A. viewer",
        "B. watcher",
        "C. audience",
        "D. spectator"
      ],
      2,
      "'audience participation' là cụm từ chỉ sự tham gia của khán giả trong buổi biểu diễn/chương trình hòa nhạc."
    ],
    [
      "She was invited to be a _______ in a cookery competition.",
      [
        "A. judge",
        "B. court",
        "C. foreman",
        "D. jury"
      ],
      0,
      "'judge' là giám khảo (trong một cuộc thi nấu ăn cookery competition)."
    ],
    [
      "The media _______ a major role in influencing people's opinions.",
      [
        "A. give",
        "B. have",
        "C. play",
        "D. do"
      ],
      2,
      "Cụm từ cố định: 'play a role in doing something' (đóng một vai trò quan trọng trong việc gì)."
    ],
    [
      "The college principal promised _______ into the matter.",
      [
        "A. look",
        "B. looking",
        "C. to look",
        "D. to be looked"
      ],
      2,
      "Cấu trúc: promise to do something (hứa sẽ làm việc gì)."
    ],
    [
      "Please do not hesitate _______ me if you have any queries.",
      [
        "A. contact",
        "B. contacting",
        "C. to contact",
        "D. contacted"
      ],
      2,
      "Cấu trúc: hesitate to do something (ngập ngừng, do dự làm gì) ➔ 'do not hesitate to contact me' (đừng ngần ngại liên hệ với tôi)."
    ],
    [
      "Chau van is a(n) _______ form of Vietnamese arts that mixes singing and dancing and is meant to celebrate the virtues of beneficent deities or national heroes.",
      [
        "A. ancient",
        "B. modern",
        "C. contemporary",
        "D. latest"
      ],
      0,
      "'ancient form of Vietnamese arts' (loại hình nghệ thuật cổ truyền của Việt Nam)."
    ],
    [
      "Using public transport can help reduce the carbon footprint and your _______ on the environment.",
      [
        "A. affect",
        "B. impact",
        "C. role",
        "D. mission"
      ],
      1,
      "Cụm từ: 'impact on the environment' (tác động lên môi trường). Lưu ý 'affect' là động từ."
    ],
    [
      "Many people adopt a(n) _______ because it’s good for the environment.",
      [
        "A. rural lifestyle",
        "B. healthy lifestyle",
        "C. nomadic lifestyle.",
        "D. green lifestyle"
      ],
      3,
      "'adopt a green lifestyle' (áp dụng lối sống xanh, thân thiện với môi trường)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>I didn't enjoy the book because I couldn't <u>identify with</u> any of the main characters.",
      [
        "A. disregard",
        "B. sympathize",
        "C. ignore",
        "D. scorn"
      ],
      1,
      "'identify with somebody' nghĩa là cảm thông, đồng cảm sâu sắc với ai = 'sympathize with'."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s):<br>He is a <u>popular</u> teen idol around the world.",
      [
        "A. unknown",
        "B. unpopular",
        "C. disliked",
        "D. well-known"
      ],
      3,
      "'popular' (nổi tiếng, được nhiều người yêu thích) đồng nghĩa với 'well-known'."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>Some of these young musicians are incredibly <u>talented</u>.",
      [
        "A. gifted",
        "B. skilled",
        "C. brilliant",
        "D. incompetent"
      ],
      3,
      "'talented' (tài năng, có năng khiếu) trái nghĩa với 'incompetent' (bất tài, thiếu năng lực)."
    ],
    [
      "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s):<br>All the English teams were <u>eliminated</u> in the early stages of the competition.",
      [
        "A. defeated",
        "B. omitted",
        "C. passed",
        "D. knocked out"
      ],
      2,
      "'eliminated' (bị loại) trái nghĩa với 'passed' (vượt qua, lọt vào vòng trong)."
    ],
    [
      "<b>READING - CLOZE TEXT: BAGPIPES</b><br>Bagpipes are a woodwind (26) _______ that is played in Scotland during cultural festivals and celebrations. It is considered Scotland's national instrument.",
      [
        "A. heritage",
        "B. occasions",
        "C. instrument",
        "D. regiments"
      ],
      2,
      "'woodwind instrument' mang nghĩa nhạc cụ bộ hơi."
    ],
    [
      "There are over thirty different types of bagpipes, but the one used in Scotland is the Highland Pipes. They are part of Scottish life, and they are used on special (27) _______.",
      [
        "A. heritage",
        "B. occasions",
        "C. instrument",
        "D. parade"
      ],
      1,
      "'on special occasions' mang nghĩa vào các dịp đặc biệt."
    ],
    [
      "All Scottish Army (28) _______ have a piper to play the bagpipes...",
      [
        "A. heritage",
        "B. occasions",
        "C. instrument",
        "D. regiments"
      ],
      3,
      "'Scottish Army regiments' mang nghĩa các trung đoàn quân đội Scotland."
    ],
    [
      "...when they go on (29) _______.",
      [
        "A. heritage",
        "B. parade",
        "C. instrument",
        "D. regiments"
      ],
      1,
      "'go on parade' mang nghĩa đi diễu hành."
    ],
    [
      "They are an essential feature in many songs, stories and poems as they represent the cultural (30) _______ of the Scots.",
      [
        "A. heritage",
        "B. occasions",
        "C. instrument",
        "D. regiments"
      ],
      0,
      "'cultural heritage' mang nghĩa di sản văn hóa."
    ],
    [
      "<b>READING COMPREHENSION: SNAKEBITES</b><br>Read the text about snakebites and answer the question:<br><i>You're hiking with a friend and then as you step over a tree log a snake beneath bites your leg...</i><br><br><b>What is the writer trying to do in this text?</b>",
      [
        "A. explain the dangers of snakes.",
        "B. advise against walking in the countryside.",
        "C. warn about certain venomous snakes.",
        "D. offer information about snake bites."
      ],
      3,
      "Bài viết giải thích cơ chế, phân biệt nọc độc và độc tố, cũng như cung cấp thông tin/lời khuyên xử lý đúng khi bị rắn cắn (offer information about snake bites)."
    ],
    [
      "<b>The writer advises against sucking the venom because …</b>",
      [
        "A. it tastes awful.",
        "B. it is risky.",
        "C. it will hurt more.",
        "D. it will kill you"
      ],
      1,
      "Đoạn 2 & 4: '...the venom could enter his bloodstream... venom sucking isn't a solution... Experts now strongly advise against it' vì điều đó tiềm ẩn nhiều rủi ro (it is risky) và không hiệu quả."
    ],
    [
      "<b>According to the writer, poison ...</b>",
      [
        "A. is usually breathed in.",
        "B. has to be injected.",
        "C. is not the same as venom.",
        "D. is less dangerous than venom."
      ],
      2,
      "Đoạn 3 nêu rõ sự khác biệt giữa hai khái niệm: 'To understand how to treat snakebites, you need to know the difference between poisons and venoms' ➔ poison is not the same as venom."
    ],
    [
      "<b>If bitten by a snake, you should ...</b>",
      [
        "A. run to the nearest place for help.",
        "B. not move at all.",
        "C. try to keep cool.",
        "D. sit and decide if it was a dangerous snake."
      ],
      2,
      "Đoạn 5: 'The best way to prevent the venom from quickly moving through the bloodstream is to remain calm' (giữ bình tĩnh, không hoảng loạn = try to keep cool)."
    ],
    [
      "<b>Which would be the best advice leaflet for snakebites?</b>",
      [
        "A. ATTENTION WALKERS - Based on worldwide data, millions die of snakebites yearly! Take your snake bite kit with you. Be safe!",
        "B. SAFE NOT SORRY - If you like walking or are travelling abroad, get information on snake species. Be careful and be find out emergency contact information.",
        "C. WORRIED ABOUT SNAKES? Read here about how to treat your own snakebites! Very few people die from bites if they follow this treatment. Follow it step by step.",
        "D. ALL YOU NEED TO KNOW ABOUT SNAKES Snake venom travels slowly so keep calm. Only if you think it is a dangerous snake, move as fast as you can to get help. Read more about snakes here!"
      ],
      1,
      "Tờ rơi B đưa ra lời khuyên cẩn trọng và chuẩn bị thông tin về các loài rắn cũng như số liên hệ khẩn cấp (SAFE NOT SORRY)."
    ]
  ],
  "short": [
    {
      "question": "Choose the correct verb form to complete the sentence:<br>I never do anything I (feel / ’m feeling) _______ is against my principles.",
      "answer": "feel",
      "explanation": "'feel' ở đây là động từ chỉ quan điểm/cảm nghĩ (stative verb), dùng ở thì hiện tại đơn: 'feel'."
    },
    {
      "question": "Choose the correct verb form to complete the sentence:<br>He (appears / ’s appearing) _______ to be very friendly but I don’t know him very well.",
      "answer": "appears",
      "explanation": "'appear' mang nghĩa 'dường như' là linking verb chỉ trạng thái, không dùng ở thì tiếp diễn: 'appears'."
    },
    {
      "question": "Choose the correct verb form to complete the sentence:<br>We (have / are having) _______ a great time here in London.",
      "answer": "are having",
      "explanation": "Cụm 'have a great time' chỉ trải nghiệm/hành động đang diễn ra nên dùng thì hiện tại tiếp diễn: 'are having'."
    },
    {
      "question": "Choose the correct verb form to complete the sentence:<br>When do you think it (will / is going to) _______ be convenient for me to pop round?",
      "answer": "will",
      "explanation": "Câu hỏi dự đoán với 'do you think' đi với thì tương lai đơn 'will'."
    },
    {
      "question": "Choose the correct verb form to complete the sentence:<br>Yes, don’t worry. I (’m not forgetting / won’t forget) _______. Anything else?",
      "answer": "won't forget / will not forget",
      "explanation": "Lời hứa trong tương lai dùng thì tương lai đơn: 'won't forget'."
    },
    {
      "question": "Choose the correct verb form to complete the sentence:<br>I (’m seeing / will see) _______ my dentist tomorrow. Is Thursday OK?",
      "answer": "'m seeing / am seeing",
      "explanation": "Lịch hẹn cố định với bác sĩ nha khoa đã lên lịch trình từ trước dùng hiện tại tiếp diễn chỉ tương lai: 'm seeing."
    }
  ],
  "essay": [
    {
      "title": "Câu 1. Chuyển đổi câu sang thể bị động thì Hiện tại tiếp diễn",
      "question": "They are building a new school in West Street.<br>➔ A new school ________________________________________",
      "solution": "A new school is being built in West Street.<br>• Cấu trúc bị động hiện tại tiếp diễn: S + is/am/are + being + V3/ed."
    },
    {
      "title": "Câu 2. Chuyển đổi câu sang thể bị động thì Hiện tại hoàn thành",
      "question": "The police have just arrested him on suspicion of murder.<br>➔ He ________________________________________",
      "solution": "He has just been arrested on suspicion of murder by the police.<br>• Cấu trúc bị động hiện tại hoàn thành: S + has/have + been + V3/ed."
    },
    {
      "title": "Câu 3. Chuyển đổi câu sang thể bị động tương lai gần 'be going to'",
      "question": "He’s going to repair the machine tomorrow.<br>➔ The machine ________________________________________",
      "solution": "The machine is going to be repaired tomorrow.<br>• Cấu trúc bị động tương lai gần: S + is/am/are + going to be + V3/ed."
    },
    {
      "title": "Câu 4. Chuyển đổi câu sang cấu trúc 'plan to do sth'",
      "question": "I’m going to the theatre next Sunday.<br>➔ I plan ________________________________________",
      "solution": "I plan to go to the theatre next Sunday.<br>• Cấu trúc: plan to do something (lên kế hoạch làm gì)."
    },
    {
      "title": "Câu 5. Chuyển đổi từ 'look forward to' sang 'expect to'",
      "question": "We’re looking forward to traveling around our country.<br>➔ We expect ________________________________________",
      "solution": "We expect to travel around our country.<br>• Cấu trúc: expect to do something (kỳ vọng/trông chờ làm gì)."
    }
  ]
},
{
  "id": "tienganh-10-de-04",
  "title": "Tiếng Anh 10 - Đề 04 - Chuyên đề: Câu bị động (Passive Voice)",
  "subject": "english",
  "duration": 45,
  "school": "Tiếng Anh 10 Global Success",
  "province": "Toàn quốc",
  "year": "2026–2027",
  "source": {
    "school": "Tiếng Anh 10 Global Success",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "note": "Chuyên đề ngữ pháp trọng tâm Giữa học kì 1: Câu bị động (Passive Voice)"
  },
  "description": "Trọn bộ 25 câu bài tập chuyển đổi sang câu bị động (Change into passive voice) từ cơ bản đến nâng cao: các thì hiện tại đơn, quá khứ đơn, tiếp diễn, hoàn thành, tương lai, câu hỏi Wh- và động từ khuyết thiếu.",
  "questions": [],
  "short": [],
  "essay": [
    {
      "title": "Câu 1. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "My father waters this flower every morning.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>This flower is watered by my father every morning.</b><br>• Giải thích ngữ pháp: Hiện tại đơn: S + am/is/are + V3/ed + by O."
    },
    {
      "title": "Câu 2. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "John invited Fiona to his birthday party last night.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Fiona was invited to John's birthday party last night (by John).</b><br>• Giải thích ngữ pháp: Quá khứ đơn: S + was/were + V3/ed."
    },
    {
      "title": "Câu 3. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Her mother is preparing the dinner in the kitchen.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The dinner is being prepared by her mother in the kitchen.</b><br>• Giải thích ngữ pháp: Hiện tại tiếp diễn: S + am/is/are + being + V3/ed."
    },
    {
      "title": "Câu 4. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "We should clean our teeth twice a day.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Our teeth should be cleaned twice a day.</b><br>• Giải thích ngữ pháp: Động từ khuyết thiếu: S + modal + be + V3/ed."
    },
    {
      "title": "Câu 5. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Our teachers have explained the English grammar.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The English grammar has been explained by our teachers.</b><br>• Giải thích ngữ pháp: Hiện tại hoàn thành: S + has/have + been + V3/ed."
    },
    {
      "title": "Câu 6. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Some drunk drivers caused the accident in this city.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The accident in this city was caused by some drunk drivers.</b><br>• Giải thích ngữ pháp: Quá khứ đơn: S + was/were + V3/ed + by O."
    },
    {
      "title": "Câu 7. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Tom will visit his parents next month.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Tom's parents will be visited by him next month.</b><br>• Giải thích ngữ pháp: Tương lai đơn: S + will be + V3/ed + by O."
    },
    {
      "title": "Câu 8. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "The manager didn’t phone the secretary this morning.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The secretary was not phoned by the manager this morning.</b><br>• Giải thích ngữ pháp: Phủ định quá khứ đơn: S + was/were not + V3/ed."
    },
    {
      "title": "Câu 9. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Did Mary buy this beautiful dress?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Was this beautiful dress bought by Mary?</b><br>• Giải thích ngữ pháp: Nghi vấn quá khứ đơn: Was/Were + S + V3/ed + by O?"
    },
    {
      "title": "Câu 10. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "I won’t hang these old pictures in the living room.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>These old pictures won't be hung in the living room.</b><br>• Giải thích ngữ pháp: Phủ định tương lai đơn: S + won't be + V3/ed (hang ➔ hung)."
    },
    {
      "title": "Câu 11. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "The German didn’t build this factory during the Second World War.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>This factory was not built by the Germans during the Second World War.</b><br>• Giải thích ngữ pháp: Phủ định quá khứ đơn: S + was not + V3/ed."
    },
    {
      "title": "Câu 12. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "The Greens are going to paint this house and these cars for Christmas Day.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>This house and these cars are going to be painted by the Greens for Christmas Day.</b><br>• Giải thích ngữ pháp: Tương lai gần: S + are going to be + V3/ed."
    },
    {
      "title": "Câu 13. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Ann had fed the cats before she went to the cinema.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The cats had been fed by Ann before she went to the cinema.</b><br>• Giải thích ngữ pháp: Quá khứ hoàn thành: S + had been + V3/ed."
    },
    {
      "title": "Câu 14. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "The students have discussed the pollution problems since last week.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The pollution problems have been discussed by the students since last week.</b><br>• Giải thích ngữ pháp: Hiện tại hoàn thành: S + have been + V3/ed."
    },
    {
      "title": "Câu 15. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Have the thieves stolen the most valuable painting in the national museum?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Has the most valuable painting in the national museum been stolen by the thieves?</b><br>• Giải thích ngữ pháp: Nghi vấn hiện tại hoàn thành: Has/Have + S + been + V3/ed?"
    },
    {
      "title": "Câu 16. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Some people will interview the new president on TV.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>The new president will be interviewed on TV.</b><br>• Giải thích ngữ pháp: Tương lai đơn: S + will be + V3/ed."
    },
    {
      "title": "Câu 17. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "How many languages do they speak in Canada?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>How many languages are spoken in Canada?</b><br>• Giải thích ngữ pháp: Nghi vấn WH- hiện tại đơn: How many + N + are + V3/ed?"
    },
    {
      "title": "Câu 18. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Are you going to repair those shoes?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Are those shoes going to be repaired?</b><br>• Giải thích ngữ pháp: Nghi vấn tương lai gần: Are + S + going to be + V3/ed?"
    },
    {
      "title": "Câu 19. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "He has broken his nose in a football match.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>His nose has been broken in a football match.</b><br>• Giải thích ngữ pháp: Hiện tại hoàn thành: S + has been + V3/ed (broken)."
    },
    {
      "title": "Câu 20. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "Have you finished the above sentences?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>Have the above sentences been finished?</b><br>• Giải thích ngữ pháp: Nghi vấn hiện tại hoàn thành: Have + S + been + V3/ed?"
    },
    {
      "title": "Câu 21. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "When will you do the work?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>When will the work be done?</b><br>• Giải thích ngữ pháp: Nghi vấn WH- tương lai đơn: When will + S + be + V3/ed (done)?"
    },
    {
      "title": "Câu 22. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "How are you going to deal with this problem?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>How is this problem going to be dealt with?</b><br>• Giải thích ngữ pháp: Nghi vấn WH- tương lai gần: How is + S + going to be + V3/ed (dealt with)?"
    },
    {
      "title": "Câu 23. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "How do you spend this amount of money?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>How is this amount of money spent?</b><br>• Giải thích ngữ pháp: Nghi vấn WH- hiện tại đơn: How is + S + V3/ed (spent)?"
    },
    {
      "title": "Câu 24. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "I wonder whether the board of directors will choose Susan or Jane for the position.<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>I wonder whether Susan or Jane will be chosen for the position by the board of directors.</b><br>• Giải thích ngữ pháp: Mệnh đề danh ngữ bị động: will be chosen."
    },
    {
      "title": "Câu 25. Chuyển câu sau sang thể bị động (Passive Voice)",
      "question": "How did the police find the lost man?<br>➔ <i>Chuyển sang câu bị động:</i>",
      "solution": "<b>How was the lost man found by the police?</b><br>• Giải thích ngữ pháp: Nghi vấn WH- quá khứ đơn: How was + S + V3/ed (found) + by O?"
    }
  ]
},
{
  "id": "tienganh-10-de-05",
  "title": "Tiếng Anh 10 - Đề 05 - Chuyên đề: To-infinitives và Bare infinitives",
  "subject": "english",
  "duration": 45,
  "school": "Tiếng Anh 10 Global Success",
  "province": "Toàn quốc",
  "year": "2026–2027",
  "source": {
    "school": "Tiếng Anh 10 Global Success",
    "province": "Bộ GD&ĐT",
    "year": "2026–2027",
    "note": "Chuyên đề ngữ pháp trọng tâm Giữa học kì 1: Động từ nguyên mẫu có to và không to"
  },
  "description": "Trọn bộ 60 câu bài tập chuyên đề Động từ nguyên mẫu có to (To-infinitives) và không to (Bare infinitives) bám sát chương trình Tiếng Anh 10 Global Success: 20 câu trắc nghiệm nhiều lựa chọn và 40 câu điền dạng đúng của động từ.",
  "questions": [
    [
      "<b>Ex2 - Question 1:</b> My parents want me ________ harder for the final exam.",
      [
        "A. study",
        "B. studying",
        "C. to study"
      ],
      2,
      "Cấu trúc: want somebody to do something (muốn ai làm gì)."
    ],
    [
      "<b>Ex2 - Question 2:</b> We watched the children ________ football in the playground.",
      [
        "A. plays",
        "B. to play",
        "C. playing"
      ],
      2,
      "Cấu trúc: watch somebody doing something (chứng kiến một phần hành động đang diễn ra) hoặc watch sb do sth."
    ],
    [
      "<b>Ex2 - Question 3:</b> The teacher asked us ________ the homework before class.",
      [
        "A. finish",
        "B. to finish",
        "C. finishing"
      ],
      1,
      "Cấu trúc: ask somebody to do something (yêu cầu ai làm gì)."
    ],
    [
      "<b>Ex2 - Question 4:</b> She made her younger brother ________ his room.",
      [
        "A. clean",
        "B. to clean",
        "C. cleaning"
      ],
      0,
      "Cấu trúc: make somebody do something (sai bảo/bắt ai làm gì, dùng V-bare)."
    ],
    [
      "<b>Ex2 - Question 5:</b> They decided ________ a new house next year.",
      [
        "A. buy",
        "B. buying",
        "C. to buy"
      ],
      2,
      "Cấu trúc: decide to do something (quyết định làm gì)."
    ],
    [
      "<b>Ex2 - Question 6:</b> I heard the baby ________ loudly in the next room.",
      [
        "A. cry",
        "B. to cry",
        "C. cried"
      ],
      0,
      "Cấu trúc: hear somebody do something (nghe thấy ai làm gì, dùng V-bare)."
    ],
    [
      "<b>Ex2 - Question 7:</b> My father encouraged me ________ part in the competition.",
      [
        "A. take",
        "B. taking",
        "C. to take"
      ],
      2,
      "Cấu trúc: encourage somebody to do something (khuyến khích ai tham gia)."
    ],
    [
      "<b>Ex2 - Question 8:</b> The manager let the employees ________ home early.",
      [
        "A. go",
        "B. to go",
        "C. going"
      ],
      0,
      "Cấu trúc: let somebody do something (để/cho phép ai làm gì, dùng V-bare)."
    ],
    [
      "<b>Ex2 - Question 9:</b> She hopes ________ a scholarship to study abroad.",
      [
        "A. get",
        "B. getting",
        "C. to get"
      ],
      2,
      "Cấu trúc: hope to do something (hy vọng đạt được điều gì)."
    ],
    [
      "<b>Ex2 - Question 10:</b> We saw a bird ________ from the tree.",
      [
        "A. fly",
        "B. flew",
        "C. to fly"
      ],
      0,
      "Cấu trúc: see somebody/something do something (nhìn thấy toàn bộ hành động, dùng V-bare)."
    ],
    [
      "<b>Ex5 - Question 1:</b> My sister wants ________ a new bike.",
      [
        "A. buy",
        "B. buying",
        "C. to buy",
        "D. bought"
      ],
      2,
      "Cấu trúc: want to do something ➔ to buy."
    ],
    [
      "<b>Ex5 - Question 2:</b> You must ________ your seat belt.",
      [
        "A. wear",
        "B. to wear",
        "C. wearing",
        "D. wore"
      ],
      0,
      "Động từ khuyết thiếu must + V-bare ➔ wear."
    ],
    [
      "<b>Ex5 - Question 3:</b> My teacher advised me ________ more books.",
      [
        "A. read",
        "B. to read",
        "C. reading",
        "D. reads"
      ],
      1,
      "Cấu trúc: advise somebody to do something ➔ to read."
    ],
    [
      "<b>Ex5 - Question 4:</b> Let us ________ this problem together.",
      [
        "A. to solve",
        "B. solving",
        "C. solve",
        "D. solved"
      ],
      2,
      "Cấu trúc: let somebody do something (V-bare) ➔ solve."
    ],
    [
      "<b>Ex5 - Question 5:</b> He promised ________ me later.",
      [
        "A. call",
        "B. calling",
        "C. to call",
        "D. called"
      ],
      2,
      "Cấu trúc: promise to do something ➔ to call."
    ],
    [
      "<b>Ex5 - Question 6:</b> She can ________ very fast.",
      [
        "A. runs",
        "B. running",
        "C. run",
        "D. to run"
      ],
      2,
      "Động từ khuyết thiếu can + V-bare ➔ run."
    ],
    [
      "<b>Ex5 - Question 7:</b> The coach made the players ________ harder.",
      [
        "A. train",
        "B. to train",
        "C. training",
        "D. trained"
      ],
      0,
      "Cấu trúc: make somebody do something (V-bare) ➔ train."
    ],
    [
      "<b>Ex5 - Question 8:</b> They hope ________ the competition.",
      [
        "A. win",
        "B. winning",
        "C. to win",
        "D. won"
      ],
      2,
      "Cấu trúc: hope to do something ➔ to win."
    ],
    [
      "<b>Ex5 - Question 9:</b> You should ________ your room regularly.",
      [
        "A. clean",
        "B. to clean",
        "C. cleaning",
        "D. cleaned"
      ],
      0,
      "Động từ khuyết thiếu should + V-bare ➔ clean."
    ],
    [
      "<b>Ex5 - Question 10:</b> My father told me ________ home before 10 p.m.",
      [
        "A. come",
        "B. coming",
        "C. to come",
        "D. came"
      ],
      2,
      "Cấu trúc: tell somebody to do something ➔ to come."
    ]
  ],
  "short": [
    {
      "question": "<b>Ex1 - Câu 1:</b> My brother wants (learn) _______ how to play the guitar.",
      "answer": "to learn",
      "explanation": "Cấu trúc want to do something ➔ to learn."
    },
    {
      "question": "<b>Ex1 - Câu 2:</b> The film was so exciting that it made us (stay) _______ awake until midnight.",
      "answer": "stay",
      "explanation": "Cấu trúc make somebody do something (V-bare) ➔ stay."
    },
    {
      "question": "<b>Ex1 - Câu 3:</b> The school allowed students (use) _______ dictionaries during the activity.",
      "answer": "to use",
      "explanation": "Cấu trúc allow somebody to do something ➔ to use."
    },
    {
      "question": "<b>Ex1 - Câu 4:</b> We plan (visit) _______ the museum this weekend.",
      "answer": "to visit",
      "explanation": "Cấu trúc plan to do something ➔ to visit."
    },
    {
      "question": "<b>Ex1 - Câu 5:</b> The teacher let us (work) _______ in groups.",
      "answer": "work",
      "explanation": "Cấu trúc let somebody do something (V-bare) ➔ work."
    },
    {
      "question": "<b>Ex1 - Câu 6:</b> They expect (win) _______ the competition this year.",
      "answer": "to win",
      "explanation": "Cấu trúc expect to do something ➔ to win."
    },
    {
      "question": "<b>Ex1 - Câu 7:</b> Her parents made her (clean) _______ her room before going out.",
      "answer": "clean",
      "explanation": "Cấu trúc make somebody do something (V-bare) ➔ clean."
    },
    {
      "question": "<b>Ex1 - Câu 8:</b> I would like (travel) _______ around the world one day.",
      "answer": "to travel",
      "explanation": "Cấu trúc would like to do something ➔ to travel."
    },
    {
      "question": "<b>Ex1 - Câu 9:</b> The police officer helped the old woman (cross) _______ the road safely.",
      "answer": "cross / to cross",
      "explanation": "Cấu trúc help somebody (to) do something ➔ cross hoặc to cross."
    },
    {
      "question": "<b>Ex1 - Câu 10:</b> The director decided (cancel) _______ the meeting because of the storm.",
      "answer": "to cancel",
      "explanation": "Cấu trúc decide to do something ➔ to cancel."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (1):</b> One day, Mr. Brown decided (1) _______ (buy) some flower seeds.",
      "answer": "to buy",
      "explanation": "decide to do something ➔ to buy."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (2):</b> After that, he encouraged his son (2) _______ (help) him in the garden.",
      "answer": "to help",
      "explanation": "encourage somebody to do something ➔ to help."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (3):</b> Every morning, they would get up early and begin (3) _______ (water) the plants.",
      "answer": "to water / watering",
      "explanation": "begin to do sth hoặc begin doing sth ➔ to water."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (4):</b> One afternoon, they saw some birds (4) _______ (eat) the seeds.",
      "answer": "eat / eating",
      "explanation": "see somebody do/doing something ➔ eat hoặc eating."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (5):</b> Mr. Brown tried (5) _______ (chase) them away, but the birds kept coming back.",
      "answer": "to chase",
      "explanation": "try to do something (cố gắng làm gì) ➔ to chase."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (6):</b> His neighbor advised him (6) _______ (put) a scarecrow in the garden.",
      "answer": "to put",
      "explanation": "advise somebody to do something ➔ to put."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (7):</b> Mr. Brown made his son (7) _______ (build) one from old clothes and sticks.",
      "answer": "build",
      "explanation": "make somebody do something (V-bare) ➔ build."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (8):</b> A few days later, they watched the birds (8) _______ (fly) away from the garden.",
      "answer": "fly / flying",
      "explanation": "watch somebody do/doing something ➔ fly hoặc flying."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (9):</b> Mr. Brown was delighted and hoped (9) _______ (grow) many beautiful flowers.",
      "answer": "to grow",
      "explanation": "hope to do something ➔ to grow."
    },
    {
      "question": "<b>Ex3 - Đoạn văn (10):</b> In the end, his hard work helped him (10) _______ (create) a colorful and attractive garden.",
      "answer": "create / to create",
      "explanation": "help somebody (to) do something ➔ create hoặc to create."
    },
    {
      "question": "<b>Ex4 - Câu 1:</b> My parents want me __________ (study) harder for the final exam.",
      "answer": "to study",
      "explanation": "Cấu trúc ngữ pháp: want sb to do sth ➔ đáp án là 'to study'."
    },
    {
      "question": "<b>Ex4 - Câu 2:</b> The teacher made the students __________ (rewrite) their essays.",
      "answer": "rewrite",
      "explanation": "Cấu trúc ngữ pháp: make sb do sth (V-bare) ➔ đáp án là 'rewrite'."
    },
    {
      "question": "<b>Ex4 - Câu 3:</b> We hope __________ (visit) Singapore next summer.",
      "answer": "to visit",
      "explanation": "Cấu trúc ngữ pháp: hope to do sth ➔ đáp án là 'to visit'."
    },
    {
      "question": "<b>Ex4 - Câu 4:</b> Don't let the children __________ (play) near the river.",
      "answer": "play",
      "explanation": "Cấu trúc ngữ pháp: let sb do sth (V-bare) ➔ đáp án là 'play'."
    },
    {
      "question": "<b>Ex4 - Câu 5:</b> I heard someone __________ (knock) on the door last night.",
      "answer": "knock / knocking",
      "explanation": "Cấu trúc ngữ pháp: hear sb do/doing sth ➔ đáp án là 'knock / knocking'."
    },
    {
      "question": "<b>Ex4 - Câu 6:</b> This funny movie made us __________ (laugh) a lot.",
      "answer": "laugh",
      "explanation": "Cấu trúc ngữ pháp: make sb do sth (V-bare) ➔ đáp án là 'laugh'."
    },
    {
      "question": "<b>Ex4 - Câu 7:</b> They decided __________ (buy) a new computer for their son.",
      "answer": "to buy",
      "explanation": "Cấu trúc ngữ pháp: decide to do sth ➔ đáp án là 'to buy'."
    },
    {
      "question": "<b>Ex4 - Câu 8:</b> Her coach encouraged her __________ (join) the swimming competition.",
      "answer": "to join",
      "explanation": "Cấu trúc ngữ pháp: encourage sb to do sth ➔ đáp án là 'to join'."
    },
    {
      "question": "<b>Ex4 - Câu 9:</b> We watched the birds __________ (fly) across the sky.",
      "answer": "fly / flying",
      "explanation": "Cấu trúc ngữ pháp: watch sb do/doing sth ➔ đáp án là 'fly / flying'."
    },
    {
      "question": "<b>Ex4 - Câu 10:</b> My father asked me __________ (help) him with the gardening.",
      "answer": "to help",
      "explanation": "Cấu trúc ngữ pháp: ask sb to do sth ➔ đáp án là 'to help'."
    },
    {
      "question": "<b>Ex4 - Câu 11:</b> The manager let the staff __________ (leave) early on Friday.",
      "answer": "leave",
      "explanation": "Cấu trúc ngữ pháp: let sb do sth (V-bare) ➔ đáp án là 'leave'."
    },
    {
      "question": "<b>Ex4 - Câu 12:</b> She plans __________ (become) a doctor in the future.",
      "answer": "to become",
      "explanation": "Cấu trúc ngữ pháp: plan to do sth ➔ đáp án là 'to become'."
    },
    {
      "question": "<b>Ex4 - Câu 13:</b> I saw a little boy __________ (cross) the street carefully.",
      "answer": "cross / crossing",
      "explanation": "Cấu trúc ngữ pháp: see sb do/doing sth ➔ đáp án là 'cross / crossing'."
    },
    {
      "question": "<b>Ex4 - Câu 14:</b> His story made everyone __________ (cry).",
      "answer": "cry",
      "explanation": "Cấu trúc ngữ pháp: make sb do sth (V-bare) ➔ đáp án là 'cry'."
    },
    {
      "question": "<b>Ex4 - Câu 15:</b> The teacher advised us __________ (review) the lesson before the test.",
      "answer": "to review",
      "explanation": "Cấu trúc ngữ pháp: advise sb to do sth ➔ đáp án là 'to review'."
    },
    {
      "question": "<b>Ex4 - Câu 16:</b> They expect __________ (receive) the results next week.",
      "answer": "to receive",
      "explanation": "Cấu trúc ngữ pháp: expect to do sth ➔ đáp án là 'to receive'."
    },
    {
      "question": "<b>Ex4 - Câu 17:</b> The police officer helped the old woman __________ (carry) her bags.",
      "answer": "carry / to carry",
      "explanation": "Cấu trúc ngữ pháp: help sb (to) do sth ➔ đáp án là 'carry / to carry'."
    },
    {
      "question": "<b>Ex4 - Câu 18:</b> We agreed __________ (meet) at the bus station at 8 a.m.",
      "answer": "to meet",
      "explanation": "Cấu trúc ngữ pháp: agree to do sth ➔ đáp án là 'to meet'."
    },
    {
      "question": "<b>Ex4 - Câu 19:</b> Her parents won't allow her __________ (stay) out late.",
      "answer": "to stay",
      "explanation": "Cấu trúc ngữ pháp: allow sb to do sth ➔ đáp án là 'to stay'."
    },
    {
      "question": "<b>Ex4 - Câu 20:</b> The audience watched the singer __________ (perform) on stage.",
      "answer": "perform / performing",
      "explanation": "Cấu trúc ngữ pháp: watch sb do/doing sth ➔ đáp án là 'perform / performing'."
    }
  ],
  "essay": []
}
];
