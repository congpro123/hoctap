// Danh sách 32 bộ đề thi chính thức chuẩn cấu trúc ma trận mới 2026–2027
// 12 đề Toán học, 10 đề Vật lí, 10 đề Hóa học
// Hoàn toàn không trùng lặp câu hỏi, số liệu hay mô hình giữa các đề
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
        "answer": "1,75",
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
        "Biểu diễn trên trục số của tập hợp (-&infin;; 2) &cap; [-1; 5] là:",
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
    "title": "Vật lí 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Hướng Hóa – Quảng Trị (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Quảng Trị",
    "year": "2025–2026",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11203/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-huong-hoa-quang-t",
    "questions": [
      [
        "Thành tựu nghiên cứu nào sau đây của Vật lí được coi là có vai trò quan trọng trong việc mở đầu cho cuộc cách mạng công nghiệp lần thứ nhất?",
        [
          "A. Nghiên cứu về lực vạn vật hấp dẫn.",
          "B. Nghiên cứu về nhiệt động lực học.",
          "C. Nghiên cứu về cảm ứng điện từ.",
          "D. Nghiên cứu về thuyết tương đối."
        ],
        1,
        "Nghiên cứu về nhiệt động lực học dẫn đến sự ra đời của máy hơi nước (James Watt), mở đầu cuộc cách mạng công nghiệp lần thứ nhất."
      ],
      [
        "Để đảm bảo an toàn trong phòng thực hành Vật lí, cần thực hiện nguyên tắc nào dưới đây?",
        [
          "A. Làm thí nghiệm tự do theo ý thích cá nhân.",
          "B. Nhận biết hóa chất bằng cách ngửi trực tiếp.",
          "C. Đọc kĩ nội quy và thực hiện theo hướng dẫn an toàn.",
          "D. Mang đồ ăn và nước uống vào bàn thí nghiệm điện."
        ],
        2,
        "Nguyên tắc bắt buộc là đọc kĩ nội quy và làm theo hướng dẫn của giáo viên."
      ],
      [
        "Gọi <span style=\"text-decoration:overline;\">A</span> là giá trị trung bình và &Delta;A là sai số tuyệt đối của phép đo đại lượng A. Sai số tỉ đối &delta;A được xác định bởi công thức:",
        [
          "A. &delta;A = (&Delta;A / <span style=\"text-decoration:overline;\">A</span>) . 100%.",
          "B. &delta;A = (<span style=\"text-decoration:overline;\">A</span> / &Delta;A) . 100%.",
          "C. &delta;A = <span style=\"text-decoration:overline;\">A</span> &plusmn; &Delta;A.",
          "D. &delta;A = &Delta;A . <span style=\"text-decoration:overline;\">A</span>."
        ],
        0,
        "Sai số tỉ đối là tỉ số phần trăm giữa sai số tuyệt đối và giá trị trung bình: &delta;A = (&Delta;A / <span style=\"text-decoration:overline;\">A</span>).100%."
      ],
      [
        "Đại lượng nào sau đây là đại lượng vectơ có hướng xác định từ vị trí đầu đến vị trí cuối của vật chuyển động?",
        [
          "A. Quãng đường đi được.",
          "B. Tốc độ trung bình.",
          "C. Độ dịch chuyển.",
          "D. Thời gian chuyển động."
        ],
        2,
        "Độ dịch chuyển là đại lượng vectơ nối vị trí đầu và vị trí cuối của vật."
      ],
      [
        "Trong trường hợp nào dưới đây, độ lớn độ dịch chuyển và quãng đường đi được của vật có giá trị bằng nhau?",
        [
          "A. Vật chuyển động tròn đều.",
          "B. Vật chuyển động thẳng và không đổi chiều.",
          "C. Vật chuyển động thẳng và đổi chiều 1 lần.",
          "D. Vật dao động qua lại quanh một vị trí."
        ],
        1,
        "Khi vật chuyển động thẳng và không đổi chiều thì s = |d|."
      ],
      [
        "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm chuyển động thẳng đều có dạng là:",
        [
          "A. Một đường thẳng song song với trục vận tốc.",
          "B. Một đường parabol.",
          "C. Một đường thẳng xiên góc.",
          "D. Một đường hypebol."
        ],
        2,
        "Phương trình d = d<sub>0</sub> + v.t có đồ thị là đường thẳng xiên góc trong hệ trục (d – t)."
      ],
      [
        "Gọi v<sub>12</sub> là vận tốc của vật (1) so với hệ quy chiếu chuyển động (2), v<sub>23</sub> là vận tốc của hệ quy chiếu (2) so với hệ quy chiếu đứng yên (3). Công thức cộng vận tốc đúng (dạng vectơ) là:",
        [
          "A. <strong>v<sub>13</sub></strong> = <strong>v<sub>12</sub></strong> + <strong>v<sub>23</sub></strong>.",
          "B. <strong>v<sub>12</sub></strong> = <strong>v<sub>13</sub></strong> + <strong>v<sub>23</sub></strong>.",
          "C. <strong>v<sub>13</sub></strong> = <strong>v<sub>12</sub></strong> - <strong>v<sub>23</sub></strong>.",
          "D. v<sub>13</sub> = v<sub>12</sub> . v<sub>23</sub>."
        ],
        0,
        "Theo công thức cộng vận tốc: vectơ v<sub>13</sub> = vectơ v<sub>12</sub> + vectơ v<sub>23</sub>."
      ],
      [
        "Đại lượng vật lí đặc trưng cho sự thay đổi nhanh hay chậm của vận tốc được gọi là:",
        [
          "A. Quãng đường.",
          "B. Tốc độ tức thời.",
          "C. Độ dịch chuyển.",
          "D. Gia tốc."
        ],
        3,
        "Gia tốc a = &Delta;v / &Delta;t đặc trưng cho độ biến thiên nhanh hay chậm của vận tốc."
      ],
      [
        "Đơn vị của gia tốc trong hệ đo lường quốc tế SI là:",
        [
          "A. m/s.",
          "B. km/h.",
          "C. m/s<sup>2</sup>.",
          "D. m.s<sup>2</sup>."
        ],
        2,
        "Trong hệ SI, vận tốc đo bằng m/s, thời gian đo bằng s nên gia tốc có đơn vị m/s<sup>2</sup>."
      ],
      [
        "Một vật chuyển động thẳng biến đổi đều với vận tốc ban đầu v<sub>0</sub>, gia tốc a và sau thời gian t đạt vận tốc v trên độ dịch chuyển d. Hệ thức độc lập với thời gian là:",
        [
          "A. v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2ad.",
          "B. v<sup>2</sup> + v<sub>0</sub><sup>2</sup> = 2ad.",
          "C. v - v<sub>0</sub> = 2ad.",
          "D. v<sub>0</sub><sup>2</sup> - v<sup>2</sup> = 2ad."
        ],
        0,
        "Công thức liên hệ giữa vận tốc, gia tốc và độ dịch chuyển là v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2ad."
      ],
      [
        "Chuyển động rơi của vật nào sau đây trong không khí có thể coi là sự rơi tự do?",
        [
          "A. Một chiếc lá khô đang rụng.",
          "B. Một viên bi sắt nhỏ được thả rơi.",
          "C. Một hạt bụi lơ lửng.",
          "D. Một chiếc lông chim đang bay."
        ],
        1,
        "Viên bi sắt nhỏ chịu lực cản không khí rất nhỏ so với trọng lực nên coi là rơi tự do."
      ],
      [
        "Một vật được ném ngang từ độ cao h = 20 m với vận tốc ban đầu v<sub>0</sub> = 15 m/s. Lấy g = 10 m/s<sup>2</sup>. Tầm bay xa L của vật trên mặt đất bằng:",
        [
          "A. 15 m.",
          "B. 20 m.",
          "C. 30 m.",
          "D. 45 m."
        ],
        2,
        "L = v<sub>0</sub>.&radic;(2h/g) = 15 . &radic;(2.20/10) = 15 . 2 = 30 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một vận động viên bơi dọc theo chiều dài 100 m của bể bơi từ đầu bể A đến cuối bể B hết 50 s, sau đó quay trở lại chỗ xuất phát A hết 60 s.",
        "items": [
          [
            "a) Trong 50 s đầu tiên bơi từ A đến B, quãng đường và độ lớn độ dịch chuyển của người đó đều bằng 100 m.",
            true,
            "Bơi thẳng một chiều từ A đến B nên s<sub>1</sub> = d<sub>1</sub> = 100 m."
          ],
          [
            "b) Trong cả quá trình bơi đi và về (tổng thời gian 110 s), tổng quãng đường người đó bơi được là 0 m.",
            false,
            "Tổng quãng đường bơi đi và về là s = 100 + 100 = 200 m."
          ],
          [
            "c) Độ dịch chuyển của vận động viên sau khi quay trở về đúng vị trí xuất phát A bằng 0 m.",
            true,
            "Điểm cuối trùng với điểm đầu A nên độ dịch chuyển d = 0 m."
          ],
          [
            "d) Tốc độ trung bình của vận động viên trong toàn bộ quá trình bơi đi và về xấp xỉ bằng 1,82 m/s.",
            true,
            "v<sub>tb</sub> = s / t = 200 / (50 + 60) = 200 / 110 &approx; 1,82 m/s."
          ]
        ]
      },
      {
        "stem": "Một vật được thả rơi tự do không vận tốc đầu từ độ cao h = 180 m so với mặt đất. Bỏ qua lực cản không khí, lấy g = 10 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Chuyển động rơi tự do của vật là chuyển động thẳng nhanh dần đều với gia tốc bằng 10 m/s<sup>2</sup>.",
            true,
            "Rơi tự do có phương thẳng đứng, chiều từ trên xuống, gia tốc g = 10 m/s<sup>2</sup> không đổi."
          ],
          [
            "b) Quãng đường vật rơi được sau 3 giây đầu tiên kể từ lúc thả là 30 m.",
            false,
            "s = 1/2 . g . t<sup>2</sup> = 0,5 . 10 . 3<sup>2</sup> = 45 m."
          ],
          [
            "c) Thời gian từ lúc thả vật cho đến khi vật chạm đất là 6 giây.",
            true,
            "t = &radic;(2h / g) = &radic;(360 / 10) = 6 s."
          ],
          [
            "d) Tốc độ của vật ngay trước khi chạm đất bằng 60 m/s.",
            true,
            "Áp dụng công thức vận tốc trong chuyển động rơi tự do (Vật lí 10): v = g . t. Với g = 10 m/s<sup>2</sup> và thời gian rơi chạm đất t = 6 s, tốc độ của vật ngay trước khi chạm đất là v = 10 . 6 = 60 m/s. Khẳng định này là ĐÚNG."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một học sinh dùng thước đo chiều dài của chiếc bút chì 4 lần và thu được các giá trị: 15,8 cm; 16,0 cm; 15,9 cm; 15,9 cm. Giá trị trung bình chiều dài chiếc bút chì là bao nhiêu cm?",
        "answer": "15,9",
        "explanation": "Giá trị trung bình <span style=\"text-decoration:overline;\">L</span> = (15,8 + 16,0 + 15,9 + 15,9) / 4 = 15,9 cm."
      },
      {
        "question": "Một ô tô đi từ A về phía Đông 6 km đến B, sau đó rẽ vuông góc đi thẳng về phía Bắc 8 km đến C. Độ lớn độ dịch chuyển tổng hợp của ô tô từ A đến C bằng bao nhiêu km?",
        "answer": "10",
        "explanation": "Hai độ dịch chuyển vuông góc nhau nên d = &radic;(6<sup>2</sup> + 8<sup>2</sup>) = 10 km."
      },
      {
        "question": "Một vật chuyển động thẳng chậm dần đều qua hai điểm A và B. Biết tốc độ của vật khi đi qua A là 10 m/s và khi đi qua B chỉ còn 5 m/s. Tốc độ của vật khi đi qua trung điểm I của đoạn thẳng AB bằng bao nhiêu m/s (làm tròn đến hàng phần trăm)?",
        "answer": "7,91",
        "explanation": "Ta có v<sub>I</sub><sup>2</sup> - v<sub>A</sub><sup>2</sup> = v<sub>B</sub><sup>2</sup> - v<sub>I</sub><sup>2</sup> &rArr; v<sub>I</sub> = &radic;((10<sup>2</sup> + 5<sup>2</sup>)/2) = &radic;62,5 &approx; 7,91 m/s."
      },
      {
        "question": "Một ô tô đang chạy với tốc độ 54 km/h (15 m/s) trên đường thẳng thì người lái xe hãm phanh, xe chuyển động thẳng chậm dần đều với gia tốc có độ lớn 3 m/s<sup>2</sup> cho đến khi dừng hẳn. Quãng đường ô tô đi thêm được kể từ lúc hãm phanh đến khi dừng hẳn là bao nhiêu mét?",
        "answer": "37,5",
        "explanation": "s = (v<sup>2</sup> - v<sub>0</sub><sup>2</sup>) / (2a) = (0 - 15<sup>2</sup>) / (2 . (-3)) = 225 / 6 = 37,5 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một xe máy xuất phát từ Đông Hà đi về phía Gio Linh với tốc độ không đổi 36 km/h trong 30 phút đầu, sau đó dừng lại nghỉ 15 phút, rồi tiếp tục đi thẳng theo hướng cũ thêm 15 km nữa trong 15 phút cuối.<br>a) Tính tổng quãng đường xe máy đã đi được.<br>b) Tính tốc độ trung bình của xe máy trên toàn bộ hành trình theo đơn vị km/h.",
        "solution": "a) Quãng đường đi trong 30 phút (0,5 giờ) đầu: s<sub>1</sub> = v<sub>1</sub>.t<sub>1</sub> = 36 . 0,5 = 18 km. Trong 15 phút nghỉ: s<sub>2</sub> = 0 km. Trong 15 phút cuối: s<sub>3</sub> = 15 km. Tổng quãng đường: s = 18 + 0 + 15 = 33 km (0,75 điểm).<br>b) Tổng thời gian: t = 0,5 + 0,25 + 0,25 = 1,0 giờ. Tốc độ trung bình: v<sub>tb</sub> = s / t = 33 / 1,0 = 33 km/h (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một đoàn tàu đang chạy trên đường thẳng ngang với tốc độ 36 km/h thì tăng tốc chuyển động thẳng nhanh dần đều. Sau khi đi được quãng đường 300 m kể từ lúc tăng tốc, đoàn tàu đạt tốc độ 72 km/h.<br>a) Tính gia tốc của đoàn tàu và thời gian tàu tăng tốc trên đoạn đường đó.<br>b) Tính quãng đường đoàn tàu đi được trong giây thứ 5 kể từ lúc bắt đầu tăng tốc.",
        "solution": "Đổi đơn vị: v<sub>0</sub> = 36 km/h = 10 m/s; v = 72 km/h = 20 m/s.<br>a) Gia tốc: a = (v<sup>2</sup> - v<sub>0</sub><sup>2</sup>)/(2s) = (20<sup>2</sup> - 10<sup>2</sup>)/(2.300) = 0,5 m/s<sup>2</sup> (0,5 điểm). Thời gian tăng tốc: t = (v - v<sub>0</sub>)/a = (20 - 10)/0,5 = 20 s (0,5 điểm).<br>b) Quãng đường đi trong 5 s đầu: s<sub>5</sub> = 10.5 + 0,5.0,5.5<sup>2</sup> = 56,25 m. Quãng đường đi trong 4 s đầu: s<sub>4</sub> = 10.4 + 0,5.0,5.4<sup>2</sup> = 44 m. Quãng đường trong giây thứ 5: &Delta;s = 56,25 - 44 = 12,25 m (0,5 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-02",
    "title": "Vật lí 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị (Đề chính thức Giữa kì I)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Gio Linh – Quảng Trị (Đề chính thức Giữa kì I)",
    "province": "Quảng Trị",
    "year": "2024–2025",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11211/de-thi-giua-ki-1-vat-li-10-nam-2024-2025-truong-thpt-gio-linh-quang-tr",
    "questions": [
      [
        "Đối tượng nghiên cứu chính của Vật lí học là:",
        [
          "A. Các dạng vận động của vật chất và năng lượng.",
          "B. Sự biến đổi hóa học của các chất.",
          "C. Sự sinh trưởng và phát triển của sinh vật.",
          "D. Cấu trúc địa chất của vỏ Trái Đất."
        ],
        0,
        "Vật lí nghiên cứu các dạng vận động của vật chất (chất, trường) và năng lượng."
      ],
      [
        "Phép đo trực tiếp là phép đo:",
        [
          "A. Giá trị của đại lượng cần đo được đọc trực tiếp trên dụng cụ đo.",
          "B. Giá trị của đại lượng cần đo được tính thông qua công thức toán học.",
          "C. Phép đo không bao giờ có sai số.",
          "D. Phép đo chỉ dùng thước kẻ."
        ],
        0,
        "Phép đo trực tiếp đọc kết quả trực tiếp trên dụng cụ đo (như dùng cân đo khối lượng, dùng đồng hồ đo thời gian)."
      ],
      [
        "Khi đo chiều dài của chiếc bàn học, kết quả được ghi là L = 120,0 &plusmn; 0,2 (cm). Sai số tuyệt đối của phép đo này là:",
        [
          "A. 120,0 cm.",
          "B. 0,2 cm.",
          "C. 120,2 cm.",
          "D. 0,17%."
        ],
        1,
        "Trong cách ghi A = <span style=\"text-decoration:overline;\">A</span> &plusmn; &Delta;A, giá trị &Delta;A = 0,2 cm là sai số tuyệt đối."
      ],
      [
        "Hệ quy chiếu bao gồm các yếu tố nào sau đây?",
        [
          "A. Hệ tọa độ gắn với vật làm mốc và đồng hồ đo thời gian.",
          "B. Chỉ cần vật làm mốc.",
          "C. Chỉ cần đồng hồ bấm giây.",
          "D. Quỹ đạo và vận tốc của vật."
        ],
        0,
        "Hệ quy chiếu = Hệ tọa độ gắn với vật làm mốc + Mốc thời gian và đồng hồ đo thời gian."
      ],
      [
        "Tốc độ tức thời của ô tô đang chạy trên đường được hiển thị trên thiết bị nào của xe?",
        [
          "A. Đồng hồ đo quãng đường (công-tơ-mét).",
          "B. Tốc kế (đồng hồ đo tốc độ).",
          "C. Kim báo nhiên liệu.",
          "D. La bàn trên xe."
        ],
        1,
        "Tốc kế trên xe máy, ô tô chỉ tốc độ tức thời tại thời điểm quan sát."
      ],
      [
        "Một thuyền máy chạy xuôi dòng sông với vận tốc 15 km/h so với mặt nước. Biết nước sông chảy với vận tốc 3 km/h so với bờ. Vận tốc của thuyền so với bờ sông là:",
        [
          "A. 12 km/h.",
          "B. 18 km/h.",
          "C. 15 km/h.",
          "D. 5 km/h."
        ],
        1,
        "Chuyển động xuôi dòng (cùng chiều): v<sub>13</sub> = v<sub>12</sub> + v<sub>23</sub> = 15 + 3 = 18 km/h."
      ],
      [
        "Trong chuyển động thẳng chậm dần đều, tích số giữa vận tốc v và gia tốc a luôn thỏa mãn:",
        [
          "A. a . v &gt; 0.",
          "B. a . v &lt; 0.",
          "C. a . v = 0.",
          "D. a = v."
        ],
        1,
        "Chuyển động thẳng chậm dần đều có vectơ gia tốc ngược chiều vectơ vận tốc nên a.v &lt; 0."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của chuyển động thẳng biến đổi đều có dạng là:",
        [
          "A. Đường thẳng song song với trục thời gian.",
          "B. Đường thẳng xiên góc.",
          "C. Đường tròn.",
          "D. Đường parabol."
        ],
        1,
        "Vì v = v<sub>0</sub> + a.t là hàm bậc nhất theo t nên đồ thị (v – t) là đường thẳng xiên góc."
      ],
      [
        "Công thức tính độ dịch chuyển trong chuyển động thẳng biến đổi đều theo thời gian t là:",
        [
          "A. d = v<sub>0</sub>t + 1/2 . at<sup>2</sup>.",
          "B. d = v<sub>0</sub> + at.",
          "C. d = 1/2 . at.",
          "D. d = v<sub>0</sub>t - at<sup>2</sup>."
        ],
        0,
        "Phương trình độ dịch chuyển: d = v<sub>0</sub>t + 1/2 . a . t<sup>2</sup>."
      ],
      [
        "Tại cùng một nơi trên Trái Đất và trong chân không (hoặc bỏ qua sức cản không khí), các vật rơi tự do:",
        [
          "A. Vật nặng rơi nhanh hơn vật nhẹ.",
          "B. Vật nhẹ rơi nhanh hơn vật nặng.",
          "C. Đều rơi với cùng một gia tốc g.",
          "D. Rơi với vận tốc không đổi."
        ],
        2,
        "Mọi vật rơi tự do tại cùng một nơi đều có cùng gia tốc rơi tự do g."
      ],
      [
        "Một vật rơi tự do từ độ cao h xuống đất. Vận tốc của vật ngay trước khi chạm đất được tính theo công thức:",
        [
          "A. v = &radic;(2gh).",
          "B. v = 2gh.",
          "C. v = &radic;(gh).",
          "D. v = gh / 2."
        ],
        0,
        "Từ v<sup>2</sup> = 2gh suy ra v = &radic;(2gh)."
      ],
      [
        "Trong chuyển động ném ngang (bỏ qua sức cản không khí), chuyển động thành phần theo phương nằm ngang Ox là:",
        [
          "A. Chuyển động rơi tự do.",
          "B. Chuyển động thẳng đều.",
          "C. Chuyển động thẳng nhanh dần đều.",
          "D. Chuyển động thẳng chậm dần đều."
        ],
        1,
        "Theo phương ngang không có lực tác dụng nên a<sub>x</sub> = 0, vật chuyển động thẳng đều với v<sub>x</sub> = v<sub>0</sub>."
      ]
    ],
    "tf": [
      {
        "stem": "Một chất điểm chuyển động thẳng dọc theo trục Ox có phương trình tọa độ theo thời gian là x = 10 + 4t (trong đó x tính bằng mét, t tính bằng giây).",
        "items": [
          [
            "a) Vị trí ban đầu của chất điểm lúc t = 0 s cách gốc tọa độ O một đoạn 10 m.",
            true,
            "Thay t = 0 vào phương trình: x<sub>0</sub> = 10 m."
          ],
          [
            "b) Chất điểm chuyển động thẳng nhanh dần đều với gia tốc 4 m/s<sup>2</sup>.",
            false,
            "Phương trình bậc nhất x = x<sub>0</sub> + v.t biểu thị chuyển động thẳng đều với vận tốc v = 4 m/s (gia tốc a = 0)."
          ],
          [
            "c) Độ dịch chuyển của chất điểm sau 5 giây chuyển động là 20 m.",
            true,
            "Theo định nghĩa độ dịch chuyển của chuyển động thẳng đều trong Vật lí 10: d = v . t. Với v = 4 m/s và t = 5 s, ta có d = 4 . 5 = 20 m. Khẳng định này là ĐÚNG."
          ],
          [
            "d) Tọa độ của chất điểm tại thời điểm t = 5 s là x = 20 m.",
            false,
            "Phương trình tọa độ chuyển động thẳng đều là x = x₀ + vt = 10 + 4t. Tại thời điểm t = 5 s: x = 10 + 4 . 5 = 30 m (chứ không phải 20 m; 20 m là độ dịch chuyển d). Khẳng định này là SAI."
          ]
        ]
      },
      {
        "stem": "Một máy bay cứu hộ bay ngang ở độ cao h = 80 m với tốc độ không đổi v<sub>0</sub> = 50 m/s thì thả một gói hàng cứu trợ xuống một điểm trên mặt đất (bỏ qua sức cản không khí, lấy g = 10 m/s<sup>2</sup>).",
        "items": [
          [
            "a) Quỹ đạo chuyển động của gói hàng đối với mặt đất là một nhánh parabol.",
            true,
            "Gói hàng chuyển động ném ngang với vận tốc đầu v<sub>0</sub> = 50 m/s nên quỹ đạo là nhánh parabol."
          ],
          [
            "b) Thời gian từ lúc thả gói hàng đến khi chạm đất là 4 giây.",
            true,
            "t = &radic;(2h / g) = &radic;(2.80 / 10) = &radic;16 = 4 s."
          ],
          [
            "c) Khoảng cách theo phương ngang từ vị trí thả đến điểm chạm đất (tầm xa) là 200 m.",
            true,
            "L = v<sub>0</sub> . t = 50 . 4 = 200 m."
          ],
          [
            "d) Tốc độ của gói hàng ngay khi chạm đất bằng 90 m/s.",
            false,
            "Khi chạm đất: v<sub>x</sub> = 50 m/s, v<sub>y</sub> = g.t = 40 m/s &rArr; v = &radic;(50<sup>2</sup> + 40<sup>2</sup>) = 10&radic;41 &approx; 64,03 m/s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Kết quả đo đường kính của một viên bi thép được ghi là d = 2,50 &plusmn; 0,05 (cm). Sai số tỉ đối của phép đo này bằng bao nhiêu phần trăm?",
        "answer": "2",
        "explanation": "&delta;d = (0,05 / 2,50) . 100% = 2%."
      },
      {
        "question": "Một người đi xe đạp trên đoạn đường thẳng từ A đến B dài 12 km với tốc độ 12 km/h, sau đó đi tiếp từ B đến C theo hướng cũ dài 8 km trong 1 giờ. Tốc độ trung bình trên cả quãng đường AC là bao nhiêu km/h?",
        "answer": "10",
        "explanation": "Thời gian đi AB: t<sub>1</sub> = 12/12 = 1 h; thời gian đi BC: t<sub>2</sub> = 1 h. Tốc độ trung bình: v<sub>tb</sub> = (12 + 8) / (1 + 1) = 10 km/h."
      },
      {
        "question": "Một xe máy đang đứng yên thì bắt đầu tăng tốc chuyển động thẳng nhanh dần đều với gia tốc 2 m/s<sup>2</sup>. Sau bao nhiêu giây thì xe đạt tốc độ 14 m/s?",
        "answer": "7",
        "explanation": "t = (v - v<sub>0</sub>) / a = (14 - 0) / 2 = 7 s."
      },
      {
        "question": "Một hòn đá được thả rơi tự do từ miệng một giếng sâu xuống đáy giếng mất 3 giây. Lấy g = 10 m/s<sup>2</sup>. Độ sâu của giếng là bao nhiêu mét?",
        "answer": "45",
        "explanation": "h = 1/2 . g . t<sup>2</sup> = 0,5 . 10 . 3<sup>2</sup> = 45 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một ca nô chạy qua sông hoặc dọc bờ sông Cửa Việt. Biết vận tốc của ca nô khi nước yên lặng là 12 km/h và vận tốc dòng nước chảy là 4 km/h. Hai bến sông A và B cách nhau 16 km dọc theo bờ sông.<br>a) Tính thời gian ca nô đi xuôi dòng từ A đến B và thời gian đi ngược dòng từ B về A.<br>b) Tính tốc độ trung bình của ca nô trên cả lượt đi và về.",
        "solution": "a) Khi xuôi dòng: v<sub>xuôi</sub> = 12 + 4 = 16 km/h &rArr; thời gian đi t<sub>1</sub> = 16 / 16 = 1 giờ (0,5 điểm). Khi ngược dòng: v<sub>ngược</sub> = 12 - 4 = 8 km/h &rArr; thời gian về t<sub>2</sub> = 16 / 8 = 2 giờ (0,5 điểm).<br>b) Tốc độ trung bình cả đi và về: v<sub>tb</sub> = (16 + 16) / (1 + 2) = 32 / 3 &approx; 10,67 km/h (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một ô tô đang chuyển động thẳng đều với tốc độ 72 km/h (20 m/s) thì hãm phanh chuyển động thẳng chậm dần đều. Sau 5 giây kể từ lúc hãm phanh, tốc độ của ô tô giảm xuống còn 36 km/h (10 m/s).<br>a) Tính gia tốc của ô tô.<br>b) Tính thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng hẳn và tổng quãng đường xe đi được trong thời gian đó.",
        "solution": "a) Gia tốc của ô tô: a = (v<sub>1</sub> - v<sub>0</sub>) / t<sub>1</sub> = (10 - 20) / 5 = -2 m/s<sup>2</sup> (0,5 điểm).<br>b) Thời gian từ lúc hãm phanh đến khi dừng hẳn (v = 0): t = (0 - 20) / (-2) = 10 s (0,5 điểm). Quãng đường đi được đến khi dừng hẳn: s = (0<sup>2</sup> - 20<sup>2</sup>) / (2 . (-2)) = 400 / 4 = 100 m (0,5 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-03",
    "title": "Vật lí 10 - Đề 03 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-nguyen-trai-dn-2025-2026.jsp",
    "questions": [
      [
        "Quy tắc an toàn nào sau đây là BẮT BUỘC khi sử dụng các thiết bị đo điện (vôn kế, ampe kế, đồng hồ vạn năng) trong phòng thực hành Vật lí?",
        [
          "A. Luôn mắc ampe kế song song và vôn kế nối tiếp vào đoạn mạch cần đo.",
          "B. Chọn đúng thang đo thích hợp, mắc vôn kế song song và ampe kế nối tiếp với đoạn mạch cần đo.",
          "C. Dùng tay ướt để cắm hoặc rút các giắc cắm dẫn điện của đồng hồ đo.",
          "D. Để thang đo ở mức nhỏ nhất trước khi đo đại lượng chưa biết giá trị."
        ],
        1,
        "Quy tắc an toàn điện: Phải chọn đúng thang đo phù hợp và mắc vôn kế song song, ampe kế nối tiếp với đoạn mạch cần đo để không làm cháy dụng cụ và đảm bảo an toàn."
      ],
      [
        "Biển báo an toàn có hình tam giác viền đen, nền vàng trong phòng thí nghiệm có ý nghĩa gì?",
        [
          "A. Biển báo cấm.",
          "B. Biển báo cảnh báo nguy hiểm.",
          "C. Biển báo bắt buộc thực hiện.",
          "D. Biển chỉ dẫn thoát hiểm."
        ],
        1,
        "Biển hình tam giác nền vàng, viền đen là biển cảnh báo nguy hiểm (điện áp cao, chất dễ cháy, tia laser...)."
      ],
      [
        "Sai số hệ thống trong phép đo vật lí là loại sai số:",
        [
          "A. Do thao tác không chuẩn của người đo ở mỗi lần đo.",
          "B. Có tính quy luật ổn định do dụng cụ đo hoặc độ chia nhỏ nhất gây ra.",
          "C. Không thể khắc phục hay hiệu chỉnh được.",
          "D. Thay đổi ngẫu nhiên qua từng lần đo."
        ],
        1,
        "Sai số hệ thống lặp lại như nhau ở mọi lần đo (do dụng cụ chưa hiệu chỉnh điểm 0 hoặc giới hạn ĐCNN)."
      ],
      [
        "Một người đi bộ từ nhà đến siêu thị cách nhà 500 m, rồi quay lại đi về phía nhà 200 m để vào tiệm sách. Quãng đường s và độ lớn độ dịch chuyển d của người đó là:",
        [
          "A. s = 700 m, d = 300 m.",
          "B. s = 300 m, d = 700 m.",
          "C. s = 700 m, d = 700 m.",
          "D. s = 500 m, d = 200 m."
        ],
        0,
        "Quãng đường s = 500 + 200 = 700 m; độ dịch chuyển cách nhà d = 500 - 200 = 300 m."
      ],
      [
        "Độ dốc (hệ số góc) của đường thẳng trên đồ thị độ dịch chuyển – thời gian (d – t) có giá trị bằng:",
        [
          "A. Gia tốc của vật.",
          "B. Vận tốc của vật.",
          "C. Quãng đường đi được.",
          "D. Thời gian chuyển động."
        ],
        1,
        "Hệ số góc k = &Delta;d / &Delta;t = v chính là vận tốc của vật."
      ],
      [
        "Một hành khách ngồi yên trên toa tàu đang chạy với tốc độ 50 km/h. Vận tốc của hành khách đó so với toa tàu bằng:",
        [
          "A. 50 km/h.",
          "B. 100 km/h.",
          "C. 0 km/h.",
          "D. 25 km/h."
        ],
        2,
        "Hành khách ngồi yên đối với toa tàu nên vận tốc so với toa tàu bằng 0 km/h."
      ],
      [
        "Một xe đạp đang đi với tốc độ 2 m/s thì xuống dốc chuyển động nhanh dần đều với gia tốc 0,5 m/s<sup>2</sup>. Tốc độ của xe sau 6 giây là:",
        [
          "A. 3 m/s.",
          "B. 5 m/s.",
          "C. 8 m/s.",
          "D. 11 m/s."
        ],
        1,
        "v = v<sub>0</sub> + a.t = 2 + 0,5 . 6 = 5 m/s."
      ],
      [
        "Diện tích phần hình phẳng giới hạn bởi đồ thị vận tốc – thời gian (v – t) và trục thời gian từ t<sub>1</sub> đến t<sub>2</sub> biểu thị đại lượng nào?",
        [
          "A. Gia tốc trung bình.",
          "B. Độ dịch chuyển (hoặc quãng đường khi đi một chiều).",
          "C. Tốc độ tức thời.",
          "D. Lực tác dụng lên vật."
        ],
        1,
        "Diện tích dưới đồ thị (v – t) bằng độ dịch chuyển của vật trong khoảng thời gian đó."
      ],
      [
        "Gia tốc rơi tự do g phụ thuộc vào yếu tố nào sau đây?",
        [
          "A. Khối lượng của vật rơi.",
          "B. Vĩ độ địa lí và độ cao so với mặt đất.",
          "C. Thể tích của vật rơi.",
          "D. Nhiệt độ của vật rơi."
        ],
        1,
        "Gia tốc rơi tự do g phụ thuộc vào vĩ độ địa lí và độ cao nơi vật rơi."
      ],
      [
        "Một hòn sỏi được thả rơi tự do không vận tốc ban đầu tại nơi có gia tốc trọng trường g = 9,8 m/s<sup>2</sup>. Vận tốc của hòn sỏi sau 2,5 giây kể từ thời điểm thả là:",
        [
          "A. 24,5 m/s.",
          "B. 19,6 m/s.",
          "C. 25,0 m/s.",
          "D. 30,0 m/s."
        ],
        0,
        "Vận tốc trong rơi tự do: v = gt = 9,8 * 2,5 = 24,5 m/s."
      ],
      [
        "Khi ném một vật theo phương ngang từ cùng một độ cao h, nếu tăng tốc độ ném ban đầu v<sub>0</sub> lên gấp 2 lần thì thời gian rơi đến khi chạm đất sẽ:",
        [
          "A. Tăng lên 2 lần.",
          "B. Giảm đi 2 lần.",
          "C. Không thay đổi.",
          "D. Tăng lên 4 lần."
        ],
        2,
        "Thời gian rơi t = &radic;(2h/g) chỉ phụ thuộc vào độ cao h, không phụ thuộc vào vận tốc ném ngang v<sub>0</sub>."
      ],
      [
        "Một viên đạn được bắn theo phương ngang từ độ cao 45 m rơi xuống đất cách chỗ bắn theo phương ngang 180 m. Lấy g = 10 m/s<sup>2</sup>. Tốc độ bắn ban đầu v<sub>0</sub> là:",
        [
          "A. 30 m/s.",
          "B. 45 m/s.",
          "C. 60 m/s.",
          "D. 90 m/s."
        ],
        2,
        "Thời gian rơi t = &radic;(2.45/10) = 3 s. Vận tốc đầu v<sub>0</sub> = L / t = 180 / 3 = 60 m/s."
      ]
    ],
    "tf": [
      {
        "stem": "Trích đề THPT Nguyễn Trãi – Đà Nẵng: Hai người đi xe đạp cùng lúc xuất phát từ A đi về B. Người thứ nhất đi thẳng từ A đến B dài 6 km. Người thứ hai đi theo hai đoạn đường vuông góc từ A đến C (dài 5 km) rồi từ C về B (dài 8 km). Cả hai người đều về đích B cùng một lúc.",
        "items": [
          [
            "a) Độ dịch chuyển của cả hai người từ A đến B là bằng nhau và có độ lớn bằng 6 km.",
            true,
            "Cả hai người có cùng vị trí đầu A và vị trí cuối B nên có cùng độ dịch chuyển d = AB = 6 km."
          ],
          [
            "b) Quãng đường đi được của người thứ hai là 13 km.",
            true,
            "Người thứ hai đi quãng đường s<sub>2</sub> = AC + CB = 5 + 8 = 13 km."
          ],
          [
            "c) Tốc độ trung bình của hai người là bằng nhau.",
            false,
            "Cùng thời gian t nhưng s<sub>2</sub> = 13 km &gt; s<sub>1</sub> = 6 km nên tốc độ trung bình của người thứ hai lớn hơn."
          ],
          [
            "d) Vận tốc trung bình của hai người là bằng nhau.",
            true,
            "Vì cả hai có cùng độ dịch chuyển vectơ AB và cùng thời gian chuyển động t nên vận tốc trung bình v = d / t bằng nhau."
          ]
        ]
      },
      {
        "stem": "Một ô tô bắt đầu chuyển động thẳng nhanh dần đều từ trạng thái nghỉ (v<sub>0</sub> = 0) và đạt tốc độ 20 m/s sau 10 giây.",
        "items": [
          [
            "a) Gia tốc của ô tô là 2 m/s<sup>2</sup>.",
            true,
            "a = (20 - 0) / 10 = 2 m/s<sup>2</sup>."
          ],
          [
            "b) Tốc độ của ô tô tại thời điểm t = 4 s là 10 m/s.",
            false,
            "Tại t = 4 s: v = a.t = 2 . 4 = 8 m/s."
          ],
          [
            "c) Quãng đường ô tô đi được trong 10 giây đó là 100 m.",
            true,
            "s = 1/2 . a . t<sup>2</sup> = 0,5 . 2 . 10<sup>2</sup> = 100 m."
          ],
          [
            "d) Quãng đường ô tô đi được trong giây thứ 10 là 19 m.",
            true,
            "&Delta;s<sub>10</sub> = s<sub>10</sub> - s<sub>9</sub> = 100 - 0,5.2.9<sup>2</sup> = 100 - 81 = 19 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một ô tô đang chuyển động với tốc độ 72 km/h (20 m/s) trên đường thẳng thì người lái xe hãm phanh chuyển động thẳng chậm dần đều với gia tốc có độ lớn 2,5 m/s<sup>2</sup>. Thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng lại hẳn là bao nhiêu giây?",
        "answer": "8",
        "explanation": "Khi xe dừng lại: v = 0. Ta có: v = v<sub>0</sub> + at &rArr; 0 = 20 - 2,5t &rArr; t = 20 / 2,5 = 8 giây."
      },
      {
        "question": "Một thuyền đi ngang vuông góc với bờ sông với vận tốc 3 m/s so với nước. Nước sông chảy với vận tốc 4 m/s so với bờ. Độ lớn vận tốc của thuyền so với bờ sông là bao nhiêu m/s?",
        "answer": "5",
        "explanation": "Hai vận tốc vuông góc: v<sub>13</sub> = &radic;(3<sup>2</sup> + 4<sup>2</sup>) = 5 m/s."
      },
      {
        "question": "Một vật rơi tự do từ độ cao 80 m xuống đất tại nơi có g = 10 m/s<sup>2</sup>. Quãng đường vật rơi được trong giây cuối cùng trước khi chạm đất là bao nhiêu mét?",
        "answer": "35",
        "explanation": "Tổng thời gian rơi t = &radic;(2.80/10) = 4 s. Quãng đường rơi trong 3 s đầu: s<sub>3</sub> = 0,5.10.3<sup>2</sup> = 45 m. Quãng đường trong giây cuối: 80 - 45 = 35 m."
      },
      {
        "question": "Một quả bóng được ném ngang với tốc độ đầu v<sub>0</sub> = 10 m/s từ độ cao h = 5 m. Lấy g = 10 m/s<sup>2</sup>. Tầm xa của quả bóng là bao nhiêu mét?",
        "answer": "10",
        "explanation": "Thời gian rơi t = &radic;(2.5/10) = 1 s &rArr; L = v<sub>0</sub>.t = 10 . 1 = 10 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm – Trích đề THPT Nguyễn Trãi – Đà Nẵng).",
        "question": "Số liệu về độ dịch chuyển d (m) và thời gian t (s) trong chuyển động thẳng theo một chiều của một xe ô tô đồ chơi như sau: tại t = 0 s (d = 0 m); t = 1 s (d = 5 m); t = 2 s (d = 10 m); t = 3 s (d = 15 m); t = 4 s (d = 15 m); t = 5 s (d = 15 m).<br>a) Cho biết độ dịch chuyển của ô tô sau 2 giây và mô tả chuyển động của xe trong 5 giây.<br>b) Tính vận tốc trung bình của xe trong 3 giây đầu và trong cả 5 giây.",
        "solution": "a) Sau 2 s, độ dịch chuyển của xe là d = 10 m (0,25 điểm). Từ t = 0 đến t = 3 s: xe chuyển động thẳng đều với vận tốc 5 m/s; từ t = 3 s đến t = 5 s: xe đứng yên tại vị trí d = 15 m (0,5 điểm).<br>b) Trong 3 s đầu: v<sub>tb1</sub> = 15 / 3 = 5 m/s (0,5 điểm). Trong cả 5 s: v<sub>tb2</sub> = 15 / 5 = 3 m/s (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Từ độ cao 20 m so với mặt đất, một vật nhỏ được thả rơi tự do. Cùng lúc đó, từ mặt đất ngay phía dưới đường thẳng đứng rơi của vật thứ nhất, người ta ném thẳng đứng lên cao một vật thứ hai với vận tốc ban đầu v<sub>0</sub> = 20 m/s. Lấy g = 10 m/s<sup>2</sup>.<br>a) Viết phương trình tọa độ của hai vật theo thời gian và tìm thời điểm hai vật gặp nhau.<br>b) Xác định độ cao nơi hai vật gặp nhau so với mặt đất.",
        "solution": "Chọn trục Oy thẳng đứng hướng lên, gốc O tại mặt đất, mốc thời gian lúc bắt đầu thả/ném.<br>a) Phương trình tọa độ vật 1: y<sub>1</sub> = 20 - 5t<sup>2</sup> (m); vật 2: y<sub>2</sub> = 20t - 5t<sup>2</sup> (m) (0,75 điểm). Khi hai vật gặp nhau: y<sub>1</sub> = y<sub>2</sub> &hArr; 20 - 5t<sup>2</sup> = 20t - 5t<sup>2</sup> &hArr; 20t = 20 &rArr; t = 1 s (0,25 điểm).<br>b) Độ cao nơi hai vật gặp nhau: y = 20 - 5.(1)<sup>2</sup> = 15 m so với mặt đất (0,5 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-04",
    "title": "Vật lí 10 - Đề 04 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đà Nẵng",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-ly-tu-trong-dn-2025-2026.jsp",
    "questions": [
      [
        "Hành động nào sau đây vi phạm quy tắc an toàn khi sử dụng điện trong phòng thực hành?",
        [
          "A. Ngắt nguồn điện trước khi lắp ráp hoặc tháo mạch điện.",
          "B. Dùng tay ướt cắm trực tiếp phích điện vào ổ điện xoay chiều 220V.",
          "C. Kiểm tra cách điện của dây dẫn trước khi thí nghiệm.",
          "D. Sử dụng nguồn điện áp thấp (6V - 12V) cho thí nghiệm học sinh."
        ],
        1,
        "Dùng tay ướt chạm vào ổ điện 220V gây nguy cơ điện giật nguy hiểm đến tính mạng."
      ],
      [
        "Số chữ số có nghĩa (CSCN) của số 0,04050 là:",
        [
          "A. 3.",
          "B. 4.",
          "C. 5.",
          "D. 6."
        ],
        1,
        "Các chữ số 0 ở đầu không tính; tính từ chữ số khác 0 đầu tiên từ trái sang là 4, 0, 5, 0 (gồm 4 CSCN)."
      ],
      [
        "Một học sinh đi từ nhà đến trường theo lộ trình gấp khúc ABC hết 15 phút. Để tính tốc độ trung bình của học sinh đó, ta lấy:",
        [
          "A. Độ dịch chuyển AC chia cho thời gian.",
          "B. Tổng quãng đường (AB + BC) chia cho thời gian.",
          "C. Hiệu quãng đường (AB - BC) chia cho thời gian.",
          "D. Tích quãng đường và thời gian."
        ],
        1,
        "Tốc độ trung bình bằng tổng quãng đường đi được chia cho tổng thời gian."
      ],
      [
        "Một chất điểm chuyển động trên đường tròn bán kính R = 5 m. Khi đi hết 1 vòng tròn, quãng đường s và độ dịch chuyển d của chất điểm là:",
        [
          "A. s = 10&pi; m, d = 0 m.",
          "B. s = 0 m, d = 10&pi; m.",
          "C. s = 10&pi; m, d = 10 m.",
          "D. s = 5&pi; m, d = 0 m."
        ],
        0,
        "Sau 1 vòng tròn, vật về lại điểm xuất phát nên d = 0 m, còn quãng đường bằng chu vi đường tròn s = 2&pi;R = 10&pi; m."
      ],
      [
        "Đơn vị nào sau đây KHÔNG phải là đơn vị đo tốc độ?",
        [
          "A. m/s.",
          "B. km/h.",
          "C. hải lý/giờ (knot).",
          "D. m/s<sup>2</sup>."
        ],
        3,
        "Theo định nghĩa các đại lượng trong Vật lí 10: m/s, km/h, cm/s là đơn vị của tốc độ và vận tốc; còn m/s<sup>2</sup> là đơn vị của gia tốc (a = &Delta;v / &Delta;t). Do đó m/s<sup>2</sup> không phải đơn vị đo tốc độ."
      ],
      [
        "Hai ô tô chạy ngược chiều nhau trên cùng một đoạn đường thẳng với tốc độ lần lượt là 40 km/h và 50 km/h so với mặt đường. Tốc độ của xe thứ nhất so với xe thứ hai là:",
        [
          "A. 10 km/h.",
          "B. 90 km/h.",
          "C. 45 km/h.",
          "D. 0 km/h."
        ],
        1,
        "Khi hai xe chuyển động ngược chiều nhau, tốc độ tương đối bằng tổng hai tốc độ: 40 + 50 = 90 km/h."
      ],
      [
        "Một vật có vận tốc ban đầu v<sub>0</sub> = 12 m/s, chuyển động thẳng chậm dần đều với gia tốc có độ lớn 2 m/s<sup>2</sup>. Phương trình vận tốc của vật (chọn chiều dương là chiều chuyển động) là:",
        [
          "A. v = 12 + 2t (m/s).",
          "B. v = 12 - 2t (m/s).",
          "C. v = -12 + 2t (m/s).",
          "D. v = 2 - 12t (m/s)."
        ],
        1,
        "Chuyển động chậm dần đều theo chiều dương có v<sub>0</sub> = 12 m/s và a = -2 m/s<sup>2</sup> &rArr; v = 12 - 2t."
      ],
      [
        "Một viên bi lăn nhanh dần đều từ đỉnh dốc không vận tốc đầu, sau 4 giây đi được 16 m. Gia tốc của viên bi là:",
        [
          "A. 1 m/s<sup>2</sup>.",
          "B. 2 m/s<sup>2</sup>.",
          "C. 4 m/s<sup>2</sup>.",
          "D. 0,5 m/s<sup>2</sup>."
        ],
        1,
        "Từ s = 1/2.a.t<sup>2</sup> &rArr; a = 2s / t<sup>2</sup> = 32 / 16 = 2 m/s<sup>2</sup>."
      ],
      [
        "Hai vật có khối lượng m<sub>1</sub> = 2m<sub>2</sub> rơi tự do tại cùng một địa điểm từ cùng một độ cao h. Tỉ số thời gian rơi t<sub>1</sub> / t<sub>2</sub> của hai vật là:",
        [
          "A. 2.",
          "B. 1/2.",
          "C. 1.",
          "D. &radic;2."
        ],
        2,
        "Thời gian rơi tự do không phụ thuộc vào khối lượng nên t<sub>1</sub> = t<sub>2</sub> &rArr; t<sub>1</sub>/t<sub>2</sub> = 1."
      ],
      [
        "Một vật rơi tự do không vận tốc đầu tại nơi có g = 9,8 m/s<sup>2</sup>. Tốc độ của vật sau 5 giây là:",
        [
          "A. 49 m/s.",
          "B. 24,5 m/s.",
          "C. 98 m/s.",
          "D. 19,6 m/s."
        ],
        0,
        "Vật rơi tự do không vận tốc đầu thì vận tốc tức thời tại thời điểm t tính theo công thức: v = g . t = 9,8 . 5 = 49 m/s."
      ],
      [
        "Một viên bi thép được ném theo phương ngang từ mép bàn cao 1,25 m với tốc độ đầu v<sub>0</sub> = 4 m/s. Lấy g = 10 m/s<sup>2</sup>. Thời gian chuyển động trong không khí của viên bi cho đến khi chạm sàn nhà là:",
        [
          "A. 0,25 giây.",
          "B. 0,50 giây.",
          "C. 1,00 giây.",
          "D. 0,75 giây."
        ],
        1,
        "Thời gian chuyển động của vật ném ngang: t = &radic;(2h / g) = &radic;(2 &times; 1,25 / 10) = &radic;0,25 = 0,50 s."
      ],
      [
        "Một cầu thủ đá bóng từ mặt đất xiên góc &alpha; = 45&deg; so với phương ngang với tốc độ đầu v<sub>0</sub> = 20 m/s. Lấy g = 10 m/s<sup>2</sup>. Tầm bay xa L của quả bóng trên sân là:",
        [
          "A. 20 m.",
          "B. 40 m.",
          "C. 30 m.",
          "D. 10 m."
        ],
        1,
        "L = (v<sub>0</sub><sup>2</sup> . sin2&alpha;) / g = (20<sup>2</sup> . sin90&deg;) / 10 = 400 / 10 = 40 m."
      ]
    ],
    "tf": [
      {
        "stem": "Một ô tô chuyển động trên đường thẳng có đồ thị vận tốc – thời gian (v – t) gồm hai giai đoạn: Giai đoạn 1 (từ t = 0 đến t = 4 s) vận tốc tăng bậc nhất từ 0 m/s lên 12 m/s; Giai đoạn 2 (từ t = 4 s đến t = 10 s) vận tốc giữ không đổi ở 12 m/s.",
        "items": [
          [
            "a) Trong giai đoạn 1 (0 đến 4 s), ô tô chuyển động thẳng nhanh dần đều với gia tốc 3 m/s<sup>2</sup>.",
            true,
            "a<sub>1</sub> = (12 - 0) / 4 = 3 m/s<sup>2</sup>."
          ],
          [
            "b) Trong giai đoạn 2 (4 s đến 10 s), ô tô đứng yên.",
            false,
            "Vận tốc giữ nguyên ở 12 m/s nghĩa là ô tô chuyển động thẳng đều với v = 12 m/s."
          ],
          [
            "c) Quãng đường ô tô đi được trong 4 giây đầu tiên là 24 m.",
            true,
            "s<sub>1</sub> = 1/2 . 4 . 12 = 24 m."
          ],
          [
            "d) Tổng quãng đường ô tô đi được trong cả 10 giây là 96 m.",
            true,
            "Quãng đường giai đoạn 2: s<sub>2</sub> = 12 . (10 - 4) = 72 m. Tổng quãng đường: s = 24 + 72 = 96 m."
          ]
        ]
      },
      {
        "stem": "Một viên bi được ném ngang từ mặt bàn cao h = 1,25 m so với sàn nhà với vận tốc ban đầu v<sub>0</sub> = 4 m/s. Lấy g = 10 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Thời gian viên bi chuyển động trong không khí đến khi chạm sàn là 0,5 giây.",
            true,
            "t = &radic;(2h / g) = &radic;(2.1,25 / 10) = &radic;0,25 = 0,5 s."
          ],
          [
            "b) Tầm bay xa của viên bi trên sàn nhà tính từ chân bàn là 2 m.",
            true,
            "L = v<sub>0</sub> . t = 4 . 0,5 = 2 m."
          ],
          [
            "c) Thành phần vận tốc theo phương thẳng đứng ngay khi chạm sàn là v<sub>y</sub> = 4 m/s.",
            false,
            "v<sub>y</sub> = g . t = 10 . 0,5 = 5 m/s."
          ],
          [
            "d) Độ lớn vận tốc của viên bi ngay trước khi chạm sàn là &radic;41 m/s.",
            true,
            "v = &radic;(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) = &radic;(4<sup>2</sup> + 5<sup>2</sup>) = &radic;41 m/s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một học sinh thực hiện phép đo thời gian rơi của viên bi 3 lần được kết quả: 0,40 s; 0,42 s; 0,41 s. Sai số tuyệt đối trung bình của 3 lần đo này là bao nhiêu giây (làm tròn đến hàng phần nghìn)?",
        "answer": "0,007",
        "explanation": "Giá trị trung bình <span style=\"text-decoration:overline;\">t</span> = 0,41 s. Các sai số tuyệt đối: |0,41-0,40|=0,01; |0,41-0,42|=0,01; |0,41-0,41|=0. Trung bình: (0,01+0,01+0)/3 &approx; 0,007 s."
      },
      {
        "question": "Một người bơi ngang sông rộng 60 m với vận tốc 1,5 m/s so với nước (vuông góc với bờ). Nước chảy với vận tốc 1 m/s. Khi sang đến bờ bên kia, người đó bị nước đẩy trôi xuôi theo dòng một đoạn bao nhiêu mét?",
        "answer": "40",
        "explanation": "Thời gian qua sông t = 60 / 1,5 = 40 s. Đoạn trôi xuôi dòng L = v<sub>nước</sub> . t = 1 . 40 = 40 m."
      },
      {
        "question": "Một xe lửa bắt đầu rời ga chuyển động thẳng nhanh dần đều. Sau 1 phút (60 s) xe đạt tốc độ 54 km/h (15 m/s). Quãng đường xe lửa đi được trong 1 phút đó là bao nhiêu mét?",
        "answer": "450",
        "explanation": "Gia tốc a = 15 / 60 = 0,25 m/s<sup>2</sup>. Quãng đường s = 1/2 . a . t<sup>2</sup> = 0,5 . 0,25 . 60<sup>2</sup> = 450 m."
      },
      {
        "question": "Một vật được thả rơi tự do từ độ cao 125 m xuống đất tại nơi có g = 10 m/s<sup>2</sup>. Thời gian từ lúc thả vật đến khi vật chạm đất là bao nhiêu giây?",
        "answer": "5",
        "explanation": "Thời gian rơi: t = &radic;(2h / g) = &radic;(2 &times; 125 / 10) = &radic;25 = 5 giây."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Hai bến xe A và B cách nhau 90 km. Lúc 7 giờ sáng, xe thứ nhất khởi hành từ A đi về B với tốc độ không đổi 50 km/h. Cùng lúc đó, xe thứ hai khởi hành từ B đi ngược chiều về A với tốc độ không đổi 40 km/h.<br>a) Lập phương trình chuyển động của hai xe trên cùng một hệ quy chiếu.<br>b) Xác định thời điểm và vị trí hai xe gặp nhau.",
        "solution": "Chọn gốc tọa độ tại A, chiều dương từ A đến B, gốc thời gian lúc 7 giờ sáng.<br>a) Phương trình chuyển động xe 1: x<sub>1</sub> = 50t (km); xe 2: x<sub>2</sub> = 90 - 40t (km) (0,75 điểm).<br>b) Khi hai xe gặp nhau: x<sub>1</sub> = x<sub>2</sub> &hArr; 50t = 90 - 40t &hArr; 90t = 90 &rArr; t = 1 giờ. Vậy hai xe gặp nhau lúc 8 giờ sáng tại vị trí cách A một đoạn 50 km (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một quả cầu được ném ngang từ đỉnh một vách đá cao 45 m so với mặt biển với vận tốc đầu v<sub>0</sub> = 40 m/s. Lấy g = 10 m/s<sup>2</sup>.<br>a) Tính thời gian quả cầu bay trong không khí và tầm xa của nó trên mặt biển.<br>b) Tính độ lớn vận tốc và góc hợp bởi vectơ vận tốc của quả cầu với phương ngang ngay khi chạm mặt biển.",
        "solution": "a) Thời gian bay: t = &radic;(2h / g) = &radic;(90 / 10) = 3 s (0,5 điểm). Tầm xa: L = v<sub>0</sub>.t = 40 . 3 = 120 m (0,25 điểm).<br>b) Khi chạm mặt biển: v<sub>x</sub> = 40 m/s, v<sub>y</sub> = g.t = 30 m/s &rArr; độ lớn vận tốc v = &radic;(40<sup>2</sup> + 30<sup>2</sup>) = 50 m/s (0,5 điểm). Góc hợp với phương ngang: tan&alpha; = v<sub>y</sub> / v<sub>x</sub> = 30 / 40 = 0,75 &rArr; &alpha; &approx; 36,9&deg; (0,25 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-05",
    "title": "Vật lí 10 - Đề 05 - Trường THPT Hồ Nghinh – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Hồ Nghinh – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-ho-nghinh-qn-2024-2025.jsp",
    "questions": [
      [
        "Phương pháp nghiên cứu chính của Vật lí học gồm:",
        [
          "A. Phương pháp thực nghiệm và phương pháp mô hình (lí thuyết).",
          "B. Chỉ dùng phương pháp suy luận triết học.",
          "C. Chỉ dùng phương pháp quan sát tự nhiên không làm thí nghiệm.",
          "D. Phương pháp giải phẫu sinh học."
        ],
        0,
        "Vật lí hiện đại kết hợp chặt chẽ phương pháp thực nghiệm và phương pháp mô hình."
      ],
      [
        "Một thước thẳng có độ chia nhỏ nhất (ĐCNN) là 1 mm. Sai số dụng cụ của thước này thường được lấy bằng:",
        [
          "A. 1 cm.",
          "B. 0,5 mm (hoặc 1 mm).",
          "C. 0,1 mm.",
          "D. 2 mm."
        ],
        1,
        "Sai số dụng cụ thường lấy bằng một nửa hoặc một độ chia nhỏ nhất (0,5 mm hoặc 1 mm)."
      ],
      [
        "Khi nói \"Một ô tô chạy từ Đà Nẵng ra Đông Hà với tốc độ 60 km/h\", con số 60 km/h là:",
        [
          "A. Tốc độ tức thời.",
          "B. Tốc độ trung bình.",
          "C. Gia tốc trung bình.",
          "D. Độ dịch chuyển."
        ],
        1,
        "60 km/h đặc trưng cho độ nhanh chậm trên cả quãng đường dài nên là tốc độ trung bình."
      ],
      [
        "Biểu thức tính vận tốc trung bình của vật chuyển động là:",
        [
          "A. <strong>v<sub>tb</sub></strong> = <strong>d</strong> / &Delta;t.",
          "B. v<sub>tb</sub> = s . &Delta;t.",
          "C. v<sub>tb</sub> = &Delta;t / s.",
          "D. v<sub>tb</sub> = a . &Delta;t."
        ],
        0,
        "Vận tốc trung bình bằng thương số giữa độ dịch chuyển và khoảng thời gian thực hiện độ dịch chuyển đó."
      ],
      [
        "Một vận động viên chạy cự li 400 m (1 vòng sân vận động) và về lại đúng vạch xuất phát hết 50 s. Vận tốc trung bình và tốc độ trung bình của vận động viên lần lượt là:",
        [
          "A. 8 m/s và 8 m/s.",
          "B. 0 m/s và 8 m/s.",
          "C. 8 m/s và 0 m/s.",
          "D. 0 m/s và 0 m/s."
        ],
        1,
        "Về đúng vạch xuất phát nên d = 0 &rArr; vận tốc trung bình = 0 m/s; tốc độ trung bình = 400 / 50 = 8 m/s."
      ],
      [
        "Gia tốc của chuyển động thẳng đều có giá trị:",
        [
          "A. a &gt; 0.",
          "B. a &lt; 0.",
          "C. a = 0.",
          "D. Tăng đều theo thời gian."
        ],
        2,
        "Chuyển động thẳng đều có vận tốc không đổi nên gia tốc a = 0."
      ],
      [
        "Một xe máy đang chạy với tốc độ 10 m/s thì tăng tốc với gia tốc 1 m/s<sup>2</sup>. Quãng đường xe đi được sau 6 giây tăng tốc là:",
        [
          "A. 60 m.",
          "B. 78 m.",
          "C. 18 m.",
          "D. 42 m."
        ],
        1,
        "s = v<sub>0</sub>t + 1/2.a.t<sup>2</sup> = 10.6 + 0,5.1.6<sup>2</sup> = 60 + 18 = 78 m."
      ],
      [
        "Đồ thị vận tốc – thời gian (v – t) của một vật rơi tự do (chọn chiều dương hướng xuống) là:",
        [
          "A. Đường thẳng đi qua gốc tọa độ có hệ số góc dương.",
          "B. Đường thẳng song song trục hoành.",
          "C. Đường parabol đi qua gốc tọa độ.",
          "D. Đường thẳng cắt trục tung tại v<sub>0</sub> &gt; 0."
        ],
        0,
        "Vì v = g.t nên đồ thị (v – t) là đường thẳng đi qua gốc tọa độ O(0; 0)."
      ],
      [
        "Một vật rơi tự do từ độ cao 45 m xuống đất tại nơi có g = 10 m/s<sup>2</sup>. Thời gian rơi của vật là:",
        [
          "A. 2 s.",
          "B. 3 s.",
          "C. 4,5 s.",
          "D. 9 s."
        ],
        1,
        "Áp dụng công thức liên hệ giữa quãng đường rơi tự do và thời gian trong Vật lí 10: h = 1/2 . g . t<sup>2</sup> &rArr; t = &radic;(2h / g) = &radic;(2 . 45 / 10) = &radic;9 = 3 s."
      ],
      [
        "Hai viên bi sắt được ném ngang cùng lúc từ cùng một độ cao h với vận tốc đầu v<sub>01</sub> = 10 m/s và v<sub>02</sub> = 20 m/s. Kết luận nào sau đây đúng?",
        [
          "A. Viên bi 1 chạm đất trước viên bi 2.",
          "B. Viên bi 2 chạm đất trước viên bi 1.",
          "C. Hai viên bi chạm đất cùng một lúc.",
          "D. Tầm xa của hai viên bi bằng nhau."
        ],
        2,
        "Cùng độ cao h nên thời gian rơi t = &radic;(2h/g) của hai viên bi hoàn toàn bằng nhau."
      ],
      [
        "Trong chuyển động ném xiên từ mặt đất với vận tốc đầu v<sub>0</sub> hợp với phương ngang góc &alpha;, tầm bay cao cực đại H của vật là:",
        [
          "A. H = (v<sub>0</sub><sup>2</sup> . sin<sup>2</sup>&alpha;) / (2g).",
          "B. H = (v<sub>0</sub><sup>2</sup> . sin2&alpha;) / g.",
          "C. H = v<sub>0</sub><sup>2</sup> / (2g).",
          "D. H = (v<sub>0</sub> . sin&alpha;) / g."
        ],
        0,
        "Tại đỉnh cao nhất v<sub>y</sub> = 0 &rArr; H = v<sub>0y</sub><sup>2</sup> / (2g) = (v<sub>0</sub><sup>2</sup> . sin<sup>2</sup>&alpha;) / (2g)."
      ],
      [
        "Khi đo nhiều lần một đại lượng A, để giảm thiểu sai số ngẫu nhiên người ta cần:",
        [
          "A. Chỉ đo 1 lần duy nhất.",
          "B. Thực hiện phép đo nhiều lần và lấy giá trị trung bình.",
          "C. Thay đổi người đo liên tục không theo quy tắc.",
          "D. Bỏ qua sai số dụng cụ."
        ],
        1,
        "Đo nhiều lần và tính giá trị trung bình giúp giảm sai số ngẫu nhiên."
      ]
    ],
    "tf": [
      {
        "stem": "Một ca nô chuyển động trên một dòng sông thẳng. Biết tốc độ của ca nô so với nước là 10 m/s và tốc độ của dòng nước chảy so với bờ là 2 m/s.",
        "items": [
          [
            "a) Khi ca nô chạy xuôi dòng, tốc độ của ca nô so với bờ là 12 m/s.",
            true,
            "v<sub>xuôi</sub> = 10 + 2 = 12 m/s."
          ],
          [
            "b) Khi ca nô chạy ngược dòng, tốc độ của ca nô so với bờ là 8 m/s.",
            true,
            "v<sub>ngược</sub> = 10 - 2 = 8 m/s."
          ],
          [
            "c) Thời gian ca nô đi xuôi dòng quãng đường 240 m là 24 giây.",
            false,
            "t<sub>xuôi</sub> = 240 / 12 = 20 s."
          ],
          [
            "d) Thời gian ca nô đi ngược dòng quãng đường 240 m là 30 giây.",
            true,
            "t<sub>ngược</sub> = 240 / 8 = 30 s."
          ]
        ]
      },
      {
        "stem": "Một xe ô tô đang chạy với tốc độ 18 m/s thì tắt máy, chuyển động thẳng chậm dần đều trên mặt đường ngang với gia tốc có độ lớn 2 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Sau 4 giây kể từ lúc tắt máy, tốc độ của xe còn lại là 10 m/s.",
            true,
            "Áp dụng công thức vận tốc chuyển động thẳng biến đổi đều trong Vật lí 10: v = v₀ + at. Khi tắt máy xe chuyển động chậm dần đều với gia tốc a = -2 m/s<sup>2</sup> và v₀ = 18 m/s. Sau t = 4 s, tốc độ của xe là: v = 18 - 2 . 4 = 10 m/s. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Thời gian từ lúc tắt máy đến khi xe dừng hẳn là 9 giây.",
            true,
            "Khi xe dừng hẳn thì vận tốc tức thời v = 0 m/s. Từ công thức v = v₀ + at &rArr; thời gian từ lúc tắt máy đến khi dừng hẳn là t = (0 - v₀) / a = -18 / (-2) = 9 s. Khẳng định này là ĐÚNG."
          ],
          [
            "c) Quãng đường xe đi được từ lúc tắt máy đến khi dừng hẳn là 81 m.",
            true,
            "s = 18<sup>2</sup> / (2 . 2) = 324 / 4 = 81 m."
          ],
          [
            "d) Quãng đường xe đi được trong 10 giây kể từ lúc tắt máy là 80 m.",
            false,
            "Vì xe đã dừng hẳn ở t = 9 s nên sau 10 s quãng đường đi được vẫn là 81 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một tấm bìa hình chữ nhật có chiều dài a = 20,0 cm và chiều rộng b = 10,0 cm. Sai số tỉ đối của phép đo chiều dài là 1% và của chiều rộng là 2%. Sai số tỉ đối của diện tích tấm bìa S = a.b là bao nhiêu phần trăm?",
        "answer": "3",
        "explanation": "&delta;S = &delta;a + &delta;b = 1% + 2% = 3%."
      },
      {
        "question": "Một chất điểm chuyển động thẳng đều đi được 45 m trong 3 giây. Quãng đường chất điểm đi được trong 8 giây là bao nhiêu mét?",
        "answer": "120",
        "explanation": "Tốc độ v = 45 / 3 = 15 m/s. Quãng đường trong 8 s: s = 15 . 8 = 120 m."
      },
      {
        "question": "Một vật rơi tự do không vận tốc đầu tại nơi có g = 10 m/s<sup>2</sup>. Khi vật đạt vận tốc 40 m/s thì quãng đường vật đã rơi được là bao nhiêu mét?",
        "answer": "80",
        "explanation": "Áp dụng hệ thức độc lập thời gian: v<sup>2</sup> - 0 = 2gs &rArr; s = v<sup>2</sup> / (2g) = 40<sup>2</sup> / (2 &times; 10) = 1600 / 20 = 80 m."
      },
      {
        "question": "Từ độ cao h = 80 m, người ta ném ngang một vật với vận tốc đầu v<sub>0</sub> = 25 m/s. Lấy g = 10 m/s<sup>2</sup>. Tầm xa của vật trên mặt đất là bao nhiêu mét?",
        "answer": "100",
        "explanation": "t = &radic;(2.80/10) = 4 s &rArr; L = 25 . 4 = 100 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một học sinh dùng đồng hồ bấm giây đo thời gian rơi của một vật trên cùng một quãng đường 5 lần và thu được bảng số liệu: t<sub>1</sub> = 0,50 s; t<sub>2</sub> = 0,52 s; t<sub>3</sub> = 0,49 s; t<sub>4</sub> = 0,51 s; t<sub>5</sub> = 0,48 s. Biết sai số dụng cụ là &Delta;t<sub>dc</sub> = 0,01 s.<br>a) Tính giá trị trung bình <span style=\"text-decoration:overline;\">t</span> và sai số tuyệt đối trung bình của 5 lần đo.<br>b) Tính sai số tuyệt đối &Delta;t, sai số tỉ đối &delta;t và viết kết quả phép đo.",
        "solution": "a) Giá trị trung bình: <span style=\"text-decoration:overline;\">t</span> = (0,50 + 0,52 + 0,49 + 0,51 + 0,48)/5 = 0,50 s (0,5 điểm). Sai số tuyệt đối trung bình: <span style=\"text-decoration:overline;\">&Delta;t</span> = (0 + 0,02 + 0,01 + 0,01 + 0,02)/5 = 0,012 s (0,5 điểm).<br>b) Sai số tuyệt đối: &Delta;t = <span style=\"text-decoration:overline;\">&Delta;t</span> + &Delta;t<sub>dc</sub> = 0,012 + 0,01 = 0,022 s &approx; 0,02 s. Sai số tỉ đối: &delta;t = (0,02 / 0,50).100% = 4%. Kết quả đo: t = 0,50 &plusmn; 0,02 (s) (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một ô tô bắt đầu khởi hành từ A chuyển động thẳng nhanh dần đều với gia tốc a<sub>1</sub> = 1 m/s<sup>2</sup> trong 10 giây, sau đó chuyển động thẳng đều trong 20 giây tiếp theo, rồi hãm phanh chuyển động thẳng chậm dần đều với gia tốc có độ lớn a<sub>3</sub> = 2 m/s<sup>2</sup> cho đến khi dừng hẳn tại B.<br>a) Tính tốc độ lớn nhất mà ô tô đạt được.<br>b) Tính tổng thời gian chuyển động và tổng quãng đường AB.",
        "solution": "a) Tốc độ lớn nhất đạt được ở cuối giai đoạn 1: v<sub>max</sub> = a<sub>1</sub>.t<sub>1</sub> = 1 . 10 = 10 m/s (0,5 điểm).<br>b) Thời gian hãm phanh ở giai đoạn 3: t<sub>3</sub> = v<sub>max</sub> / a<sub>3</sub> = 10 / 2 = 5 s. Tổng thời gian: t = 10 + 20 + 5 = 35 s (0,5 điểm). Tổng quãng đường: s<sub>1</sub> = 0,5.1.10<sup>2</sup> = 50 m; s<sub>2</sub> = 10.20 = 200 m; s<sub>3</sub> = 10<sup>2</sup>/(2.2) = 25 m &rArr; AB = 50 + 200 + 25 = 275 m (0,5 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-06",
    "title": "Vật lí 10 - Đề 06 - Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Giữa kì I)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Hùng Vương – Quảng Nam (Đề chính thức Giữa kì I)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-hung-vuong-qn-2024-2025.jsp",
    "questions": [
      [
        "Khi gặp sự cố chập điện hoặc có người bị điện giật trong phòng thực hành, việc đầu tiên cần làm là:",
        [
          "A. Lao vào kéo trực tiếp người bị nạn ra.",
          "B. Tạt nước vào chỗ chập điện.",
          "C. Ngắt ngay cầu dao (nguồn điện) và dùng vật cách điện tách nạn nhân ra.",
          "D. Bỏ chạy khỏi trường học."
        ],
        2,
        "Phải ngắt ngay nguồn điện và dùng dụng cụ cách điện khô ráo để cứu nạn nhân."
      ],
      [
        "Cho phép tính diện tích hình tròn S = &pi;.R<sup>2</sup>. Nếu sai số tỉ đối khi đo bán kính R là &delta;R = 1,5% thì sai số tỉ đối khi tính diện tích S (bỏ qua sai số của số &pi;) là:",
        [
          "A. 1,5%.",
          "B. 3,0%.",
          "C. 2,25%.",
          "D. 0,75%."
        ],
        1,
        "Vì S tỉ lệ với R<sup>2</sup> = R . R nên &delta;S = 2 . &delta;R = 2 . 1,5% = 3,0%."
      ],
      [
        "Độ dịch chuyển của một vật chuyển động chỉ phụ thuộc vào:",
        [
          "A. Hình dạng quỹ đạo chuyển động.",
          "B. Vị trí điểm đầu và vị trí điểm cuối của chuyển động.",
          "C. Thời gian vật dừng nghỉ trên đường.",
          "D. Tốc độ tức thời tại mỗi điểm."
        ],
        1,
        "Độ dịch chuyển chỉ phụ thuộc vào vị trí đầu và vị trí cuối, không phụ thuộc hình dạng đường đi."
      ],
      [
        "Đổi đơn vị tốc độ: 72 km/h tương ứng với bao nhiêu m/s?",
        [
          "A. 15 m/s.",
          "B. 20 m/s.",
          "C. 25 m/s.",
          "D. 30 m/s."
        ],
        1,
        "Áp dụng quy tắc đổi đơn vị trong Vật lí 10: 1 km/h = 1000 m / 3600 s = 1/3,6 m/s. Khi đổi từ km/h sang m/s ta chia cho 3,6: 72 km/h = 72 / 3,6 = 20 m/s."
      ],
      [
        "Một chất điểm chuyển động thẳng biến đổi đều có vận tốc thay đổi từ 4 m/s đến 16 m/s trong 3 giây. Gia tốc của chất điểm là:",
        [
          "A. 3 m/s<sup>2</sup>.",
          "B. 4 m/s<sup>2</sup>.",
          "C. 5 m/s<sup>2</sup>.",
          "D. 6 m/s<sup>2</sup>."
        ],
        1,
        "a = (16 - 4) / 3 = 12 / 3 = 4 m/s<sup>2</sup>."
      ],
      [
        "Một vật chuyển động thẳng có phương trình tọa độ x = 5 + 10t - 2t<sup>2</sup> (x tính bằng m, t tính bằng s). Gia tốc của vật là:",
        [
          "A. -2 m/s<sup>2</sup>.",
          "B. -4 m/s<sup>2</sup>.",
          "C. 10 m/s<sup>2</sup>.",
          "D. 2 m/s<sup>2</sup>."
        ],
        1,
        "So sánh với x = x<sub>0</sub> + v<sub>0</sub>t + 1/2.a.t<sup>2</sup> &rArr; 1/2.a = -2 &rArr; a = -4 m/s<sup>2</sup>."
      ],
      [
        "Sự rơi tự do là sự rơi của vật dưới tác dụng của:",
        [
          "A. Lực đẩy Archimedes.",
          "B. Lực cản của không khí.",
          "C. Chỉ dưới tác dụng của trọng lực.",
          "D. Lực đàn hồi."
        ],
        2,
        "Sự rơi tự do là sự rơi chỉ dưới tác dụng của trọng lực."
      ],
      [
        "Tại nơi có g = 10 m/s<sup>2</sup>, một vật rơi tự do từ độ cao 125 m xuống đất. Tốc độ của vật khi chạm đất là:",
        [
          "A. 25 m/s.",
          "B. 50 m/s.",
          "C. 40 m/s.",
          "D. 100 m/s."
        ],
        1,
        "v = &radic;(2gh) = &radic;(2.10.125) = &radic;2500 = 50 m/s."
      ],
      [
        "Trong chuyển động ném ngang, gia tốc của vật tại mọi điểm trên quỹ đạo luôn có:",
        [
          "A. Phương nằm ngang, chiều cùng chiều ném.",
          "B. Phương thẳng đứng, chiều hướng xuống dưới và độ lớn bằng g.",
          "C. Phương tiếp tuyến với quỹ đạo.",
          "D. Độ lớn bằng 0."
        ],
        1,
        "Bỏ qua sức cản không khí, vật ném ngang chỉ chịu trọng lực nên gia tốc luôn là vectơ g hướng thẳng đứng xuống dưới."
      ],
      [
        "Một vật được ném xiên từ mặt đất với góc ném &alpha; (0&deg; &lt; &alpha; &lt; 90&deg;) và cùng tốc độ đầu v<sub>0</sub>. Tầm bay xa L đạt giá trị cực đại khi góc ném &alpha; bằng:",
        [
          "A. 30&deg;.",
          "B. 45&deg;.",
          "C. 60&deg;.",
          "D. 75&deg;."
        ],
        1,
        "L = v<sub>0</sub><sup>2</sup>.sin2&alpha; / g đạt cực đại khi sin2&alpha; = 1 &hArr; 2&alpha; = 90&deg; &hArr; &alpha; = 45&deg;."
      ],
      [
        "Một người đi bộ trên thang cuốn đang chuyển động. Người đi với vận tốc 1 m/s so với thang cuốn, thang cuốn chuyển động cùng chiều với vận tốc 1,5 m/s so với mặt đất. Vận tốc của người so với mặt đất là:",
        [
          "A. 0,5 m/s.",
          "B. 2,5 m/s.",
          "C. 1,5 m/s.",
          "D. 1,0 m/s."
        ],
        1,
        "Theo công thức cộng vận tốc trong Vật lí 10: Khi người đi cùng chiều với thang cuốn thì vận tốc của người so với sàn đất là v = v<sub>người/thang</sub> + v<sub>thang/sàn</sub> = 1 + 1,5 = 2,5 m/s."
      ],
      [
        "Khi một ô tô đang chạy thẳng về phía Bắc và hãm phanh giảm tốc độ thì vectơ gia tốc của ô tô có hướng:",
        [
          "A. Hướng về phía Bắc.",
          "B. Hướng về phía Nam.",
          "C. Hướng về phía Đông.",
          "D. Hướng về phía Tây."
        ],
        1,
        "Chuyển động chậm dần có vectơ gia tốc ngược chiều vectơ vận tốc, nên hướng về phía Nam."
      ]
    ],
    "tf": [
      {
        "stem": "Một xe ô tô chuyển động thẳng trên đường ngang có đồ thị vận tốc – thời gian (v – t) là một đoạn thẳng đi từ điểm (0 s; 5 m/s) đến điểm (6 s; 17 m/s):",
        "items": [
          [
            "Gia tốc của ô tô trong 6 giây chuyển động bằng 2 m/s<sup>2</sup>.",
            true,
            "Đúng vì a = (v - v0)/t = (17 - 5)/6 = 2 m/s2."
          ],
          [
            "Chuyển động của ô tô là chuyển động thẳng nhanh dần đều.",
            true,
            "Đúng vì a và v cùng dấu dương, vận tốc tăng đều theo thời gian."
          ],
          [
            "Độ dịch chuyển của ô tô sau 6 giây chuyển động bằng 66 m.",
            true,
            "Đúng: d bằng diện tích hình thang dưới đồ thị v-t = ((5 + 17)/2) * 6 = 66 m."
          ],
          [
            "Tại thời điểm t = 4 s, tốc độ tức thời của ô tô bằng 15 m/s.",
            false,
            "Sai vì v(4) = 5 + 2 * 4 = 13 m/s (khác 15 m/s)."
          ]
        ]
      },
      {
        "stem": "Hai vật A và B được thả rơi tự do không vận tốc đầu tại cùng một nơi có g = 10 m/s<sup>2</sup>. Vật A được thả từ độ cao h<sub>A</sub> = 20 m, vật B được thả từ độ cao h<sub>B</sub> = 80 m.",
        "items": [
          [
            "a) Thời gian rơi chạm đất của vật A là 2 giây.",
            true,
            "t<sub>A</sub> = &radic;(2.20 / 10) = 2 s."
          ],
          [
            "b) Thời gian rơi chạm đất của vật B gấp 4 lần thời gian rơi của vật A.",
            false,
            "t<sub>B</sub> = &radic;(2.80 / 10) = 4 s = 2.t<sub>A</sub> (gấp 2 lần, không phải 4 lần)."
          ],
          [
            "c) Tốc độ chạm đất của vật A là 20 m/s và của vật B là 40 m/s.",
            true,
            "v<sub>A</sub> = 10.2 = 20 m/s; v<sub>B</sub> = 10.4 = 40 m/s."
          ],
          [
            "d) Trong giây đầu tiên kể từ lúc thả, cả hai vật đều rơi được quãng đường bằng nhau là 5 m.",
            true,
            "Trong 1 s đầu: s<sub>1</sub> = 0,5.10.1<sup>2</sup> = 5 m cho cả hai vật."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một xe đạp đi nửa quãng đường đầu với tốc độ v<sub>1</sub> = 12 km/h và nửa quãng đường sau với tốc độ v<sub>2</sub> = 20 km/h. Tốc độ trung bình trên cả quãng đường là bao nhiêu km/h?",
        "answer": "15",
        "explanation": "v<sub>tb</sub> = 2v<sub>1</sub>v<sub>2</sub> / (v<sub>1</sub> + v<sub>2</sub>) = (2.12.20) / (12 + 20) = 480 / 32 = 15 km/h."
      },
      {
        "question": "Một đoàn tàu đang chạy với tốc độ 15 m/s thì tăng tốc với gia tốc 0,4 m/s<sup>2</sup>. Quãng đường tàu đi được để tốc độ tăng lên đến 25 m/s là bao nhiêu mét?",
        "answer": "500",
        "explanation": "s = (25<sup>2</sup> - 15<sup>2</sup>) / (2 . 0,4) = 400 / 0,8 = 500 m."
      },
      {
        "question": "Một vật rơi tự do tại nơi có g = 10 m/s<sup>2</sup> mất thời gian 5 giây để chạm đất. Độ cao nơi thả vật là bao nhiêu mét?",
        "answer": "125",
        "explanation": "h = 1/2 . 10 . 5<sup>2</sup> = 125 m."
      },
      {
        "question": "Từ độ cao h = 45 m so với mặt đất, một quả cầu được ném theo phương ngang với tốc độ đầu v<sub>0</sub> = 20 m/s. Lấy g = 10 m/s<sup>2</sup>. Tầm bay xa theo phương ngang của quả cầu khi chạm đất là bao nhiêu mét?",
        "answer": "60",
        "explanation": "Thời gian rơi: t = &radic;(2h / g) = &radic;(2 &times; 45 / 10) = 3 s. Tầm bay xa: L = v<sub>0</sub> &times; t = 20 &times; 3 = 60 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một người đi bộ khởi hành từ A đi thẳng đến B cách A 6 km với tốc độ 4 km/h. Sau khi đến B, người đó nghỉ lại 30 phút rồi đi bộ quay trở lại về phía A với tốc độ 6 km/h trong 30 phút thì dừng lại tại C.<br>a) Tính tổng quãng đường người đó đã đi và độ dịch chuyển tổng hợp AC.<br>b) Tính tốc độ trung bình và độ lớn vận tốc trung bình của người đó trên toàn bộ hành trình từ A đến C.",
        "solution": "a) Thời gian đi từ A đến B: t<sub>1</sub> = 6 / 4 = 1,5 giờ. Quãng đường đi từ B về C trong t<sub>3</sub> = 0,5 giờ: BC = 6 . 0,5 = 3 km. Tổng quãng đường: s = AB + BC = 6 + 3 = 9 km (0,5 điểm). Độ dịch chuyển tổng hợp: d = AC = AB - BC = 6 - 3 = 3 km (0,25 điểm).<br>b) Tổng thời gian (kể cả nghỉ 0,5 giờ): t = 1,5 + 0,5 + 0,5 = 2,5 giờ. Tốc độ trung bình: v<sub>tb</sub> = s / t = 9 / 2,5 = 3,6 km/h (0,5 điểm). Độ lớn vận tốc trung bình: |v| = d / t = 3 / 2,5 = 1,2 km/h (0,25 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một viên bi được ném thẳng đứng từ mặt đất lên cao với vận tốc ban đầu v<sub>0</sub> = 30 m/s. Bỏ qua sức cản không khí, lấy g = 10 m/s<sup>2</sup>.<br>a) Tính thời gian viên bi lên tới điểm cao nhất và độ cao cực đại mà viên bi đạt được.<br>b) Tính thời điểm và vận tốc của viên bi khi nó ở độ cao 40 m so với mặt đất.",
        "solution": "a) Tại điểm cao nhất v = 0 &rArr; thời gian đi lên: t<sub>max</sub> = v<sub>0</sub> / g = 30 / 10 = 3 s (0,5 điểm). Độ cao cực đại: H = v<sub>0</sub><sup>2</sup> / (2g) = 900 / 20 = 45 m (0,25 điểm).<br>b) Phương trình độ cao: y = 30t - 5t<sup>2</sup>. Khi y = 40 m &hArr; 5t<sup>2</sup> - 30t + 40 = 0 &hArr; t = 2 s (lúc đang bay lên với vận tốc v = 30 - 10.2 = 10 m/s) hoặc t = 4 s (lúc đang rơi xuống với vận tốc v = 30 - 10.4 = -10 m/s) (0,75 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-07",
    "title": "Vật lí 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11213/de-thi-giua-ki-1-vat-li-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
    "questions": [
      [
        "Lĩnh vực nào sau đây thuộc đối tượng nghiên cứu của Vật lí cổ điển?",
        [
          "A. Quang học, Cơ học, Nhiệt học, Điện từ học.",
          "B. Lịch sử cổ đại thế giới.",
          "C. Di truyền học phân tử.",
          "D. Phản ứng tổng hợp hữu cơ."
        ],
        0,
        "Cơ học, Nhiệt học, Điện từ học, Quang học là các phân ngành trụ cột của Vật lí cổ điển."
      ],
      [
        "Trong phòng thực hành, biển báo có hình tròn nền xanh dương, hình vẽ màu trắng mang ý nghĩa:",
        [
          "A. Cấm thực hiện.",
          "B. Cảnh báo nguy hiểm.",
          "C. Quy định bắt buộc phải thực hiện (như đeo kính bảo hộ, găng tay).",
          "D. Nơi chứa chất phóng xạ."
        ],
        2,
        "Biển tròn nền xanh hình trắng là biển báo quy định bắt buộc thực hiện để bảo đảm an toàn."
      ],
      [
        "Cho hai đại lượng đo trực tiếp A và B có sai số tuyệt đối là &Delta;A và &Delta;B. Nếu đại lượng C = A + B thì sai số tuyệt đối &Delta;C bằng:",
        [
          "A. &Delta;A + &Delta;B.",
          "B. &Delta;A - &Delta;B.",
          "C. &Delta;A . &Delta;B.",
          "D. &Delta;A / &Delta;B."
        ],
        0,
        "Sai số tuyệt đối của một tổng hoặc hiệu bằng tổng các sai số tuyệt đối thành phần: &Delta;C = &Delta;A + &Delta;B."
      ],
      [
        "Một chất điểm đi từ điểm M(2 m) đến điểm N(-4 m) trên trục tọa độ Ox. Độ dịch chuyển của chất điểm là:",
        [
          "A. 6 m.",
          "B. -6 m.",
          "C. 2 m.",
          "D. -2 m."
        ],
        1,
        "d = x<sub>N</sub> - x<sub>M</sub> = -4 - 2 = -6 m."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t), nếu đường biểu diễn là đường thẳng đi xuống (hệ số góc âm) thì vật:",
        [
          "A. Đang đứng yên.",
          "B. Chuyển động thẳng đều theo chiều dương.",
          "C. Chuyển động thẳng đều ngược chiều dương.",
          "D. Chuyển động nhanh dần đều."
        ],
        2,
        "Hệ số góc âm (v &lt; 0) nghĩa là vật chuyển động thẳng đều theo chiều âm."
      ],
      [
        "Một người chèo thuyền qua sông với vận tốc 2 m/s vuông góc với bờ. Nước chảy với vận tốc 1,5 m/s. Độ lớn vận tốc của thuyền so với bờ là:",
        [
          "A. 3,5 m/s.",
          "B. 0,5 m/s.",
          "C. 2,5 m/s.",
          "D. 3,0 m/s."
        ],
        2,
        "v = &radic;(2<sup>2</sup> + 1,5<sup>2</sup>) = &radic;(4 + 2,25) = &radic;6,25 = 2,5 m/s."
      ],
      [
        "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc a. Quãng đường vật đi được trong thời gian t tỉ lệ thuận với:",
        [
          "A. Thời gian t.",
          "B. Bình phương thời gian t<sup>2</sup>.",
          "C. Căn bậc hai của t.",
          "D. Nghịch đảo của t."
        ],
        1,
        "Vì s = 1/2 . a . t<sup>2</sup> nên quãng đường tỉ lệ thuận với t<sup>2</sup>."
      ],
      [
        "Một xe ô tô đang chạy với tốc độ 20 m/s thì hãm phanh với gia tốc có độ lớn 4 m/s<sup>2</sup>. Thời gian từ lúc hãm phanh đến khi xe dừng hẳn là:",
        [
          "A. 4 s.",
          "B. 5 s.",
          "C. 8 s.",
          "D. 10 s."
        ],
        1,
        "Ô tô chuyển động chậm dần đều hãm phanh với v₀ = 20 m/s, gia tốc a = -4 m/s<sup>2</sup>. Thời gian từ lúc hãm đến khi dừng hẳn (v = 0) là: t = (v - v₀) / a = (0 - 20) / (-4) = 5 s."
      ],
      [
        "Ở cùng một nơi trên Trái Đất, hai vật rơi tự do có thời gian rơi lần lượt là t<sub>1</sub> và t<sub>2</sub> = 3t<sub>1</sub>. Tỉ số độ cao thả hai vật h<sub>2</sub> / h<sub>1</sub> bằng:",
        [
          "A. 3.",
          "B. 6.",
          "C. 9.",
          "D. &radic;3."
        ],
        2,
        "Vì h = 1/2.g.t<sup>2</sup> tỉ lệ với t<sup>2</sup> nên h<sub>2</sub> / h<sub>1</sub> = (t<sub>2</sub> / t<sub>1</sub>)<sup>2</sup> = 3<sup>2</sup> = 9."
      ],
      [
        "Một giọt nước mưa rơi tự do từ mép mái nhà cao 20 m xuống mặt đất. Lấy g = 10 m/s<sup>2</sup>. Tốc độ của giọt nước ngay trước khi tiếp đất là:",
        [
          "A. 10 m/s.",
          "B. 15 m/s.",
          "C. 20 m/s.",
          "D. 25 m/s."
        ],
        2,
        "Vận tốc khi chạm đất trong rơi tự do: v = &radic;(2gh) = &radic;(2 &times; 10 &times; 20) = &radic;400 = 20 m/s."
      ],
      [
        "Một quả bóng được ném ngang từ độ cao h = 5 m, điểm chạm đất cách vị trí ném theo phương ngang L = 12 m. Lấy g = 10 m/s<sup>2</sup>. Tốc độ ném ban đầu v<sub>0</sub> là:",
        [
          "A. 6 m/s.",
          "B. 10 m/s.",
          "C. 12 m/s.",
          "D. 24 m/s."
        ],
        2,
        "t = &radic;(2.5/10) = 1 s &rArr; v<sub>0</sub> = L / t = 12 / 1 = 12 m/s."
      ],
      [
        "Trong chuyển động ném xiên (bỏ qua sức cản không khí), tại điểm cao nhất của quỹ đạo, vận tốc của vật:",
        [
          "A. Bằng 0.",
          "B. Có phương nằm ngang và độ lớn bằng v<sub>0</sub>.cos&alpha;.",
          "C. Có phương thẳng đứng hướng xuống.",
          "D. Đạt giá trị cực đại."
        ],
        1,
        "Tại đỉnh cao nhất, v<sub>y</sub> = 0 nhưng v<sub>x</sub> = v<sub>0</sub>.cos&alpha; &ne; 0 và nằm ngang."
      ]
    ],
    "tf": [
      {
        "stem": "Một người đi xe máy từ thị trấn Ái Tử đến biển Cửa Việt. Nửa thời gian đầu người đó đi với tốc độ v<sub>1</sub> = 30 km/h, nửa thời gian sau đi với tốc độ v<sub>2</sub> = 50 km/h trên cùng một đường thẳng.",
        "items": [
          [
            "a) Chuyển động của xe máy trên cả quãng đường là chuyển động thẳng đều.",
            false,
            "Tốc độ thay đổi từ 30 km/h lên 50 km/h nên không phải chuyển động đều trên cả quãng đường."
          ],
          [
            "b) Tốc độ trung bình của xe máy trên cả quãng đường bằng 40 km/h.",
            true,
            "Chia theo hai nửa thời gian bằng nhau: v<sub>tb</sub> = (v<sub>1</sub> + v<sub>2</sub>)/2 = (30 + 50)/2 = 40 km/h."
          ],
          [
            "c) Nếu tổng thời gian đi là 30 phút (0,5 giờ) thì quãng đường người đó đã đi là 20 km.",
            true,
            "s = v<sub>tb</sub> . t = 40 . 0,5 = 20 km."
          ],
          [
            "d) Quãng đường đi được trong nửa thời gian đầu bằng quãng đường đi được trong nửa thời gian sau.",
            false,
            "Trong cùng thời gian t/2, vì v<sub>2</sub> &gt; v<sub>1</sub> nên s<sub>2</sub> &gt; s<sub>1</sub>."
          ]
        ]
      },
      {
        "stem": "Một viên bi sắt được thả rơi tự do không vận tốc đầu từ đỉnh tháp cao 80 m xuống đất. Lấy g = 10 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Thời gian rơi của viên bi đến khi chạm đất là 4 giây.",
            true,
            "Áp dụng công thức thời gian rơi tự do trong Vật lí 10: t = &radic;(2h / g) = &radic;(2 . 80 / 10) = &radic;16 = 4 s. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Vận tốc của viên bi ngay khi chạm đất là 40 m/s.",
            true,
            "Vận tốc của vật rơi tự do ngay khi chạm đất là: v = g . t = 10 . 4 = 40 m/s (hoặc v = &radic;(2gh) = &radic;(2 . 10 . 80) = 40 m/s). Khẳng định này là ĐÚNG."
          ],
          [
            "c) Quãng đường viên bi rơi được trong 2 giây đầu tiên bằng 40 m.",
            false,
            "Trong 2 s đầu: s<sub>2</sub> = 0,5.10.2<sup>2</sup> = 20 m."
          ],
          [
            "d) Thời gian để viên bi rơi hết 45 m đầu tiên là 3 giây.",
            true,
            "t<sub>1</sub> = &radic;(2.45 / 10) = 3 s."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi xe máy khởi hành từ A đi thẳng về phía Đông 12 km đến B, sau đó rẽ vuông góc đi thẳng về phía Bắc 5 km đến C. Độ lớn độ dịch chuyển tổng hợp của người đó từ A đến C là bao nhiêu km?",
        "answer": "13",
        "explanation": "Do hai đoạn đường vuông góc nhau nên độ lớn độ dịch chuyển d = &radic;(12<sup>2</sup> + 5<sup>2</sup>) = &radic;(144 + 25) = &radic;169 = 13 km."
      },
      {
        "question": "Một chất điểm chuyển động thẳng biến đổi đều có vận tốc tại t = 2 s là 8 m/s và tại t = 6 s là 20 m/s. Gia tốc của chất điểm là bao nhiêu m/s<sup>2</sup>?",
        "answer": "3",
        "explanation": "a = (20 - 8) / (6 - 2) = 12 / 4 = 3 m/s<sup>2</sup>."
      },
      {
        "question": "Một ô tô tăng tốc thẳng nhanh dần đều từ 10 m/s lên 26 m/s trên đoạn đường thẳng dài 144 m. Thời gian ô tô thực hiện quá trình tăng tốc này là bao nhiêu giây?",
        "answer": "8",
        "explanation": "Ta có: s = ((v<sub>0</sub> + v) / 2) &times; t &rArr; 144 = ((10 + 26) / 2) &times; t = 18 &times; t &rArr; t = 144 / 18 = 8 giây."
      },
      {
        "question": "Một vật được ném ngang từ độ cao 45 m với vận tốc đầu v<sub>0</sub>. Biết khi chạm đất, độ lớn vận tốc của vật là 50 m/s (lấy g = 10 m/s<sup>2</sup>). Tốc độ ném ban đầu v<sub>0</sub> bằng bao nhiêu m/s?",
        "answer": "40",
        "explanation": "Khi chạm đất v<sub>y</sub> = &radic;(2gh) = &radic;(2.10.45) = 30 m/s. Suy ra v<sub>0</sub> = &radic;(v<sup>2</sup> - v<sub>y</sub><sup>2</sup>) = &radic;(50<sup>2</sup> - 30<sup>2</sup>) = 40 m/s."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một thang cuốn trong siêu thị đưa khách từ tầng 1 lên tầng 2. Nếu khách đứng yên trên thang cuốn đang chạy thì mất 60 giây để lên tới tầng 2. Nếu thang cuốn ngừng hoạt động và khách tự đi bộ trên thang thì mất 90 giây. Hỏi nếu khách vừa đi bộ vừa để thang cuốn chạy cùng chiều thì mất bao nhiêu giây để lên tới tầng 2?",
        "solution": "Gọi L là chiều dài thang cuốn:<br>• Vận tốc của thang cuốn so với đất: v<sub>thang</sub> = L / 60; vận tốc đi bộ của khách so với thang: v<sub>khách</sub> = L / 90 (0,75 điểm).<br>• Khi khách đi bộ trên thang đang chạy: v<sub>tổng</sub> = v<sub>thang</sub> + v<sub>khách</sub> = L/60 + L/90 = 5L / 180 = L / 36. Thời gian cần thiết: t = L / v<sub>tổng</sub> = 36 giây (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một vật được thả rơi tự do không vận tốc đầu từ độ cao h xuống đất tại nơi có g = 10 m/s<sup>2</sup>. Biết trong giây cuối cùng trước khi chạm đất, vật rơi được quãng đường 45 m.<br>a) Tính tổng thời gian rơi của vật.<br>b) Tính độ cao h nơi thả vật và tốc độ của vật khi chạm đất.",
        "solution": "a) Gọi t (s) là tổng thời gian rơi (t &ge; 1). Quãng đường rơi trong giây cuối cùng: &Delta;s = 1/2.g.t<sup>2</sup> - 1/2.g.(t - 1)<sup>2</sup> = 5(2t - 1) = 45 &hArr; 2t - 1 = 9 &rArr; t = 5 giây (0,75 điểm).<br>b) Độ cao nơi thả vật: h = 1/2 . 10 . 5<sup>2</sup> = 125 m. Tốc độ khi chạm đất: v = g.t = 10 . 5 = 50 m/s (0,75 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-08",
    "title": "Vật lí 10 - Đề 08 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đắk Lắk",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-so1-le-hong-phong-2025-2026.jsp",
    "questions": [
      [
        "Kí hiệu \"AC\" hoặc dấu ngã (~) trên nguồn điện trong phòng thí nghiệm cho biết đó là:",
        [
          "A. Nguồn điện một chiều.",
          "B. Nguồn điện xoay chiều.",
          "C. Cực dương của pin.",
          "D. Dây nối đất."
        ],
        1,
        "AC (Alternating Current) hoặc dấu (~) là kí hiệu nguồn điện xoay chiều; DC hoặc dấu (-) là điện một chiều."
      ],
      [
        "Cho công thức tính tốc độ v = s / t. Nếu sai số tỉ đối của phép đo quãng đường s là 1,2% và của phép đo thời gian t là 0,8% thì sai số tỉ đối của tốc độ v là:",
        [
          "A. 0,4%.",
          "B. 2,0%.",
          "C. 0,96%.",
          "D. 1,5%."
        ],
        1,
        "Sai số tỉ đối của một thương bằng tổng các sai số tỉ đối: &delta;v = &delta;s + &delta;t = 1,2% + 0,8% = 2,0%."
      ],
      [
        "Khi một vật chuyển động thẳng và đổi chiều chuyển động 1 lần thì:",
        [
          "A. Quãng đường đi được lớn hơn độ lớn độ dịch chuyển (s &gt; |d|).",
          "B. Quãng đường đi được nhỏ hơn độ lớn độ dịch chuyển (s &lt; |d|).",
          "C. Quãng đường đi được bằng độ lớn độ dịch chuyển (s = |d|).",
          "D. Quãng đường đi được bằng 0."
        ],
        0,
        "Khi vật đổi chiều chuyển động thì quãng đường s luôn lớn hơn độ lớn độ dịch chuyển |d|."
      ],
      [
        "Một người đi xe đạp đi được 3 km trong 15 phút đầu và 5 km trong 25 phút tiếp theo. Tốc độ trung bình của người đó trong cả quãng đường là:",
        [
          "A. 10 km/h.",
          "B. 12 km/h.",
          "C. 15 km/h.",
          "D. 8 km/h."
        ],
        1,
        "Tổng quãng đường s = 8 km; tổng thời gian t = 40 phút = 2/3 giờ &rArr; v<sub>tb</sub> = 8 / (2/3) = 12 km/h."
      ],
      [
        "Một chất điểm chuyển động thẳng có đồ thị vận tốc – thời gian là đường thẳng đi qua điểm (0; 10) và (5; 0). Gia tốc của chất điểm là:",
        [
          "A. 2 m/s<sup>2</sup>.",
          "B. -2 m/s<sup>2</sup>.",
          "C. 5 m/s<sup>2</sup>.",
          "D. -5 m/s<sup>2</sup>."
        ],
        1,
        "a = (0 - 10) / (5 - 0) = -2 m/s<sup>2</sup>."
      ],
      [
        "Một viên bi lăn nhanh dần đều từ trạng thái nghỉ với gia tốc 2 m/s<sup>2</sup>. Tỉ số quãng đường viên bi đi được trong giây thứ nhất và trong giây thứ hai là:",
        [
          "A. 1 : 2.",
          "B. 1 : 3.",
          "C. 1 : 4.",
          "D. 1 : 1."
        ],
        1,
        "Trong giây 1: s<sub>1</sub> = 1 m; trong 2 s đầu: s<sub>2</sub> = 4 m &rArr; trong giây thứ 2 đi được 4 - 1 = 3 m. Tỉ số là 1 : 3."
      ],
      [
        "Ở nơi có gia tốc rơi tự do g = 9,8 m/s<sup>2</sup>, một vật rơi tự do sau 2 giây sẽ có tốc độ và quãng đường rơi lần lượt là:",
        [
          "A. 19,6 m/s và 19,6 m.",
          "B. 9,8 m/s và 19,6 m.",
          "C. 19,6 m/s và 39,2 m.",
          "D. 19,6 m/s và 9,8 m."
        ],
        0,
        "v = 9,8.2 = 19,6 m/s; s = 0,5.9,8.2<sup>2</sup> = 19,6 m."
      ],
      [
        "Một vật được ném ngang từ độ cao h = 80 m với v<sub>0</sub> = 30 m/s (lấy g = 10 m/s<sup>2</sup>). Khoảng cách thẳng từ vị trí ném O đến vị trí chạm đất M (tức độ lớn độ dịch chuyển OM) là:",
        [
          "A. 120 m.",
          "B. 200 m.",
          "C. 80&radic;13 / 2 &approx; 144,2 m.",
          "D. 160 m."
        ],
        2,
        "Thời gian rơi t = 4 s &rArr; L = 30.4 = 120 m. Độ dịch chuyển OM = &radic;(h<sup>2</sup> + L<sup>2</sup>) = &radic;(80<sup>2</sup> + 120<sup>2</sup>) = 40&radic;13 &approx; 144,2 m."
      ],
      [
        "Hai đoàn tàu chạy song song cùng chiều với tốc độ lần lượt là 54 km/h và 36 km/h. Tốc độ của tàu thứ nhất so với tàu thứ hai là:",
        [
          "A. 90 km/h.",
          "B. 18 km/h.",
          "C. 45 km/h.",
          "D. 0 km/h."
        ],
        1,
        "Cùng chiều: v<sub>12</sub> = 54 - 36 = 18 km/h."
      ],
      [
        "Nếu một vật đang chuyển động theo chiều âm (v &lt; 0) và có tốc độ đang tăng dần (nhanh dần) thì gia tốc a của vật có dấu:",
        [
          "A. a &gt; 0.",
          "B. a &lt; 0.",
          "C. a = 0.",
          "D. Chưa xác định được."
        ],
        1,
        "Chuyển động nhanh dần có a và v cùng dấu, vì v &lt; 0 nên a &lt; 0."
      ],
      [
        "Công thức tính tầm bay xa L của vật ném xiên từ mặt đất với vận tốc đầu v<sub>0</sub> và góc ném &alpha; là:",
        [
          "A. L = v<sub>0</sub><sup>2</sup> . sin2&alpha; / g.",
          "B. L = v<sub>0</sub><sup>2</sup> . sin&alpha; / (2g).",
          "C. L = 2v<sub>0</sub><sup>2</sup> . cos&alpha; / g.",
          "D. L = v<sub>0</sub> . sin2&alpha; / g."
        ],
        0,
        "Công thức tầm xa ném xiên: L = (v<sub>0</sub><sup>2</sup> . sin2&alpha;) / g."
      ],
      [
        "Một quả bóng được ném thẳng đứng lên cao với vận tốc đầu 15 m/s tại nơi có g = 10 m/s<sup>2</sup>. Thời gian kể từ lúc ném đến khi quả bóng rơi trở lại đúng vị trí ném là:",
        [
          "A. 1,5 s.",
          "B. 3,0 s.",
          "C. 2,0 s.",
          "D. 4,5 s."
        ],
        1,
        "Thời gian đi lên t<sub>1</sub> = 15/10 = 1,5 s; thời gian rơi xuống bằng thời gian đi lên nên tổng thời gian là 3,0 s."
      ]
    ],
    "tf": [
      {
        "stem": "Hai xe ô tô A và B chuyển động thẳng đều trên cùng một đường thẳng. Đồ thị độ dịch chuyển – thời gian (d – t) cho biết: tại t = 0, xe A xuất phát từ gốc tọa độ O (d<sub>A0</sub> = 0) và đạt d = 60 km tại t = 1 h; xe B xuất phát từ vị trí cách O là 20 km (d<sub>B0</sub> = 20 km) cùng chiều xe A và đạt d = 60 km tại t = 1 h.",
        "items": [
          [
            "a) Vận tốc của xe A là 60 km/h.",
            true,
            "v<sub>A</sub> = (60 - 0) / 1 = 60 km/h."
          ],
          [
            "b) Vận tốc của xe B là 60 km/h.",
            false,
            "v<sub>B</sub> = (60 - 20) / 1 = 40 km/h."
          ],
          [
            "c) Hai xe gặp nhau tại thời điểm t = 1 h ở vị trí cách gốc O là 60 km.",
            true,
            "Đồ thị hai xe cắt nhau tại điểm (1 h; 60 km)."
          ],
          [
            "d) Sau thời điểm t = 1 h, xe A vượt lên dẫn trước xe B.",
            true,
            "Vì v<sub>A</sub> &gt; v<sub>B</sub> nên sau khi gặp nhau ở t = 1 h, xe A vượt lên trước."
          ]
        ]
      },
      {
        "stem": "Một vật được ném ngang từ độ cao h = 45 m với vận tốc ban đầu v<sub>0</sub> = 30 m/s. Lấy g = 10 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Thời gian chuyển động của vật đến khi chạm đất là 3 giây.",
            true,
            "Trong chuyển động ném ngang, chuyển động theo phương thẳng đứng là chuyển động rơi tự do không vận tốc đầu với gia tốc g. Thời gian rơi đến khi chạm đất là t = &radic;(2h / g) = &radic;(2 . 45 / 10) = 3 s. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Tại thời điểm t = 2 s, thành phần vận tốc theo phương thẳng đứng của vật là v<sub>y</sub> = 20 m/s.",
            true,
            "v<sub>y</sub>(2) = g.t = 10 . 2 = 20 m/s."
          ],
          [
            "c) Tầm bay xa của vật trên mặt đất là 90 m.",
            true,
            "L = v<sub>0</sub> . t = 30 . 3 = 90 m."
          ],
          [
            "d) Khi chạm đất, vectơ vận tốc của vật hợp với phương ngang một góc 60&deg;.",
            false,
            "Khi chạm đất v<sub>x</sub> = 30 m/s và v<sub>y</sub> = g.t = 30 m/s &rArr; tan&alpha; = v<sub>y</sub>/v<sub>x</sub> = 1 &rArr; góc &alpha; = 45&deg;."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một người đi bộ từ A về phía Bắc 300 m, rồi đi về phía Đông 400 m. Tỉ số giữa quãng đường đi được và độ lớn độ dịch chuyển của người đó bằng bao nhiêu?",
        "answer": "1,4",
        "explanation": "Quãng đường s = 300 + 400 = 700 m; độ dịch chuyển d = &radic;(300<sup>2</sup> + 400<sup>2</sup>) = 500 m. Tỉ số s / d = 700 / 500 = 1,4."
      },
      {
        "question": "Một xe máy đang chạy với tốc độ 12 m/s thì hãm phanh chuyển động chậm dần đều và dừng lại sau khi đi thêm được 36 m. Độ lớn gia tốc của xe máy là bao nhiêu m/s<sup>2</sup>?",
        "answer": "2",
        "explanation": "|a| = v<sub>0</sub><sup>2</sup> / (2s) = 144 / 72 = 2 m/s<sup>2</sup>."
      },
      {
        "question": "Một hòn đá rơi tự do từ độ cao h xuống đất tại nơi có g = 10 m/s<sup>2</sup>. Biết tốc độ khi chạm đất là 40 m/s. Độ cao h bằng bao nhiêu mét?",
        "answer": "80",
        "explanation": "h = v<sup>2</sup> / (2g) = 1600 / 20 = 80 m."
      },
      {
        "question": "Một cầu thủ sút bóng từ mặt đất với tốc độ đầu v<sub>0</sub> = 20 m/s theo góc ném &alpha; = 30&deg; so với phương ngang (g = 10 m/s<sup>2</sup>). Độ cao cực đại H mà quả bóng đạt được là bao nhiêu mét?",
        "answer": "5",
        "explanation": "H = (v<sub>0</sub>.sin30&deg;)<sup>2</sup> / (2g) = 10<sup>2</sup> / 20 = 5 m."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một ô tô đi trên quãng đường AB. Trên 1/3 quãng đường đầu xe đi với tốc độ v<sub>1</sub> = 30 km/h; trên 1/3 quãng đường tiếp theo xe đi với tốc độ v<sub>2</sub> = 40 km/h; và trên 1/3 quãng đường cuối xe đi với tốc độ v<sub>3</sub> = 60 km/h. Tính tốc độ trung bình của ô tô trên cả quãng đường AB.",
        "solution": "• Gọi S là độ dài quãng đường AB. Thời gian đi trên mỗi đoạn đường 1/3 S lần lượt là:<br>t<sub>1</sub> = S / (3.30) = S / 90; t<sub>2</sub> = S / (3.40) = S / 120; t<sub>3</sub> = S / (3.60) = S / 180 (0,75 điểm).<br>• Tổng thời gian: t = t<sub>1</sub> + t<sub>2</sub> + t<sub>3</sub> = S(1/90 + 1/120 + 1/180) = S . (4 + 3 + 2)/360 = S / 40. Vậy tốc độ trung bình: v<sub>tb</sub> = S / t = 40 km/h (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Cùng một lúc tại hai điểm A và B cách nhau 120 m trên một đường thẳng, xe thứ nhất khởi hành từ A không vận tốc đầu đi về B với gia tốc a<sub>1</sub> = 2 m/s<sup>2</sup>; xe thứ hai đi qua B với vận tốc đầu v<sub>02</sub> = 10 m/s chuyển động thẳng chậm dần đều về phía A với gia tốc có độ lớn a<sub>2</sub> = 1 m/s<sup>2</sup> (hai xe đi ngược chiều nhau).<br>a) Lập phương trình tọa độ của hai xe.<br>b) Xác định thời điểm hai xe gặp nhau và quãng đường mỗi xe đi được khi đó.",
        "solution": "Chọn gốc O tại A, chiều dương từ A đến B, gốc thời gian lúc hai xe xuất phát.<br>a) Xe 1: x<sub>1</sub> = t<sup>2</sup> (m). Xe 2 (đi theo chiều âm và chậm dần nên gia tốc hướng theo chiều dương a<sub>2</sub> = +1 m/s<sup>2</sup>): x<sub>2</sub> = 120 - 10t + 0,5t<sup>2</sup> (m) (0,75 điểm).<br>b) Khi hai xe gặp nhau: x<sub>1</sub> = x<sub>2</sub> &hArr; t<sup>2</sup> = 120 - 10t + 0,5t<sup>2</sup> &hArr; 0,5t<sup>2</sup> + 10t - 120 = 0 &hArr; t<sup>2</sup> + 20t - 240 = 0 &rArr; t = -10 + 2&radic;85 &approx; 8,44 s (0,5 điểm). Quãng đường xe 1 đi được: s<sub>1</sub> = t<sup>2</sup> &approx; 71,2 m; xe 2 đi được: s<sub>2</sub> = 120 - 71,2 = 48,8 m (0,25 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-09",
    "title": "Vật lí 10 - Đề 09 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đắk Lắk",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-so1-ngo-gia-tu-2025-2026.jsp",
    "questions": [
      [
        "Trích đề THPT số 1 Ngô Gia Tự: Sai số tỉ đối của đại lượng A được tính bởi công thức:",
        [
          "A. &delta;A = (&Delta;A / <span style=\"text-decoration:overline;\">A</span>) . 100%.",
          "B. A = <span style=\"text-decoration:overline;\">A</span> &plusmn; &Delta;A.",
          "C. &delta;A = <span style=\"text-decoration:overline;\">A</span> - &Delta;A.",
          "D. <span style=\"text-decoration:overline;\">&Delta;A</span> = (&Delta;A<sub>1</sub> + ... + &Delta;A<sub>n</sub>)/n."
        ],
        0,
        "Công thức sai số tỉ đối: &delta;A = (&Delta;A / <span style=\"text-decoration:overline;\">A</span>) . 100%."
      ],
      [
        "Trong phòng thí nghiệm, kí hiệu cảnh báo có hình ngọn lửa trên nền vàng viền đen có ý nghĩa:",
        [
          "A. Cảnh báo chất độc hóa học.",
          "B. Cảnh báo chất dễ cháy.",
          "C. Cảnh báo tia phóng xạ.",
          "D. Cảnh báo từ trường mạnh."
        ],
        1,
        "Hình ngọn lửa trên biển tam giác nền vàng là cảnh báo chất hoặc nơi dễ cháy."
      ],
      [
        "Một chất điểm chuyển động từ A đến B rồi đến C. Độ dịch chuyển tổng hợp của chất điểm là vectơ:",
        [
          "A. <strong>AB</strong>.",
          "B. <strong>BC</strong>.",
          "C. <strong>AC</strong>.",
          "D. <strong>CA</strong>."
        ],
        2,
        "Vectơ độ dịch chuyển tổng hợp nối điểm đầu A tới điểm cuối C là vectơ AC."
      ],
      [
        "Một vận động viên chạy thẳng đều 100 m hết 10 giây. Tốc độ của vận động viên đó tính theo km/h là:",
        [
          "A. 10 km/h.",
          "B. 36 km/h.",
          "C. 28 km/h.",
          "D. 3,6 km/h."
        ],
        1,
        "v = 100 / 10 = 10 m/s = 10 . 3,6 = 36 km/h."
      ],
      [
        "Hai xe chạy cùng chiều trên một đường thẳng với tốc độ v<sub>1</sub> = 60 km/h và v<sub>2</sub> = 40 km/h. Người ngồi trên xe 2 sẽ thấy xe 1 chuyển động về phía trước với tốc độ:",
        [
          "A. 100 km/h.",
          "B. 20 km/h.",
          "C. 50 km/h.",
          "D. 0 km/h."
        ],
        1,
        "Cùng chiều: v<sub>12</sub> = 60 - 40 = 20 km/h."
      ],
      [
        "Một vật chuyển động thẳng có vận tốc biến thiên theo quy luật v = 4 + 3t (m/s). Quãng đường vật đi được sau 2 giây đầu tiên là:",
        [
          "A. 10 m.",
          "B. 14 m.",
          "C. 8 m.",
          "D. 20 m."
        ],
        1,
        "Ta có v<sub>0</sub> = 4 m/s, a = 3 m/s<sup>2</sup> &rArr; s = 4.2 + 0,5.3.2<sup>2</sup> = 8 + 6 = 14 m."
      ],
      [
        "Nếu đồ thị vận tốc – thời gian (v – t) của một vật là đường thẳng nằm ngang ở phía trên trục thời gian thì vật:",
        [
          "A. Đang đứng yên.",
          "B. Chuyển động thẳng đều theo chiều dương.",
          "C. Chuyển động thẳng nhanh dần đều.",
          "D. Rơi tự do."
        ],
        1,
        "Đường thẳng nằm ngang ứng với v = hằng số &gt; 0, tức chuyển động thẳng đều theo chiều dương."
      ],
      [
        "Trích đề THPT số 1 Ngô Gia Tự: Một viên bi chì rơi tự do từ độ cao 80 m so với mặt đất, bỏ qua sức cản không khí, lấy g = 10 m/s<sup>2</sup>. Thời gian viên bi chì chạm đất là:",
        [
          "A. 2 s.",
          "B. 4 s.",
          "C. 8 s.",
          "D. 16 s."
        ],
        1,
        "t = &radic;(2h / g) = &radic;(160 / 10) = 4 s."
      ],
      [
        "Một vật rơi tự do tại nơi có g = 10 m/s<sup>2</sup>. Quãng đường vật rơi được trong giây thứ 3 là:",
        [
          "A. 15 m.",
          "B. 25 m.",
          "C. 45 m.",
          "D. 30 m."
        ],
        1,
        "&Delta;s<sub>3</sub> = s<sub>3</sub> - s<sub>2</sub> = 5.(3<sup>2</sup> - 2<sup>2</sup>) = 25 m."
      ],
      [
        "Một hòn bi được ném ngang với vận tốc v<sub>0</sub> = 12 m/s từ độ cao h = 20 m (g = 10 m/s<sup>2</sup>). Tầm xa của hòn bi là:",
        [
          "A. 12 m.",
          "B. 24 m.",
          "C. 36 m.",
          "D. 48 m."
        ],
        1,
        "t = &radic;(2.20/10) = 2 s &rArr; L = 12 . 2 = 24 m."
      ],
      [
        "Một ô tô hãm phanh chuyển động thẳng chậm dần đều, trong giây cuối cùng trước khi dừng hẳn xe đi được 2 m. Độ lớn gia tốc của ô tô là:",
        [
          "A. 2 m/s<sup>2</sup>.",
          "B. 4 m/s<sup>2</sup>.",
          "C. 1 m/s<sup>2</sup>.",
          "D. 8 m/s<sup>2</sup>."
        ],
        1,
        "Tính ngược từ lúc dừng: trong 1 s cuối s = 1/2.|a|.1<sup>2</sup> = 2 &rArr; |a| = 4 m/s<sup>2</sup>."
      ],
      [
        "Để đo gia tốc rơi tự do g trong phòng thí nghiệm Vật lí 10, người ta thường dùng bộ dụng cụ nào?",
        [
          "A. Cổng quang điện, đồng hồ đo thời gian hiện số và nam châm điện giữ bi sắt.",
          "B. Nhiệt kế thủy ngân và cốc nước.",
          "C. Vôn kế và ampe kế.",
          "D. Lực kế lò xo."
        ],
        0,
        "Thí nghiệm đo gia tốc rơi tự do dùng nam châm điện thả bi sắt qua cổng quang điện nối với đồng hồ đo thời gian hiện số."
      ]
    ],
    "tf": [
      {
        "stem": "Trích đề THPT số 1 Ngô Gia Tự: Bạn An chuyển động thẳng đều trên một đường thẳng từ nhà (N) qua trạm xăng (X) cách nhà 400 m, tới siêu thị (S) cách nhà 1200 m và tới trường (T) cách nhà 2000 m. Chọn hệ tọa độ có gốc O tại nhà bạn An (N), chiều dương từ nhà tới trường. Biết cứ 200 m bạn An đi mất 40 giây.",
        "items": [
          [
            "a) Tốc độ trung bình của bạn An là 5 m/s.",
            true,
            "Theo định nghĩa tốc độ trung bình trong Vật lí 10: v<sub>tb</sub> = s / t. Bạn An đi quãng đường s = 200 m trong thời gian t = 40 s, vậy v<sub>tb</sub> = 200 / 40 = 5 m/s. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Thời gian bạn An đi từ nhà (N) đến trường (T) là 400 giây.",
            true,
            "Do An chuyển động thẳng đều với tốc độ không đổi v = 5 m/s, thời gian đi hết quãng đường từ nhà đến trường dài s = 2000 m là: t = s / v = 2000 / 5 = 400 s. Khẳng định này là ĐÚNG."
          ],
          [
            "c) Nếu bạn An đi từ trạm xăng (X) quay trở về nhà (N) thì độ dịch chuyển của bạn là +400 m.",
            false,
            "Đi từ X (x = 400 m) về N (x = 0 m) ngược chiều dương nên độ dịch chuyển d = 0 - 400 = -400 m."
          ],
          [
            "d) Thời gian bạn An đi từ nhà đến siêu thị (S) gấp 3 lần thời gian bạn đi từ nhà đến trạm xăng (X).",
            true,
            "Vì chuyển động đều và NS = 1200 m = 3 . NX (400 m) nên thời gian đi NS gấp 3 lần thời gian đi NX."
          ]
        ]
      },
      {
        "stem": "Một viên đạn pháo được bắn lên từ mặt đất với vận tốc đầu v<sub>0</sub> = 40 m/s theo phương hợp với mặt đất ngang một góc &alpha; = 30&deg;. Bỏ qua sức cản không khí, lấy g = 10 m/s<sup>2</sup>.",
        "items": [
          [
            "a) Thành phần vận tốc ban đầu theo phương ngang là v<sub>0x</sub> = 20&radic;3 m/s và theo phương thẳng đứng là v<sub>0y</sub> = 20 m/s.",
            true,
            "v<sub>0x</sub> = 40.cos30&deg; = 20&radic;3 m/s; v<sub>0y</sub> = 40.sin30&deg; = 20 m/s."
          ],
          [
            "b) Thời gian từ lúc bắn đến khi viên đạn đạt độ cao cực đại là 2 giây.",
            true,
            "t<sub>lên</sub> = v<sub>0y</sub> / g = 20 / 10 = 2 s."
          ],
          [
            "c) Độ cao cực đại mà viên đạn đạt được là 40 m.",
            false,
            "H = v<sub>0y</sub><sup>2</sup> / (2g) = 400 / 20 = 20 m."
          ],
          [
            "d) Tầm bay xa của viên đạn trên mặt đất là 80&radic;3 m.",
            true,
            "Tổng thời gian bay t = 2.t<sub>lên</sub> = 4 s &rArr; L = v<sub>0x</sub> . t = 20&radic;3 . 4 = 80&radic;3 m."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Trích đề THPT số 1 Ngô Gia Tự: Trong hoạt động trải nghiệm tìm kho báu, nội dung mật thư như sau: Từ vị trí xuất phát O, đi về phía Bắc 100 m, sau đó đi về phía Tây 40 m, rồi cuối cùng đi về phía Nam 130 m là tới chỗ giấu kho báu. Độ lớn độ dịch chuyển kể từ vị trí xuất phát đến chỗ giấu kho báu là bao nhiêu mét?",
        "answer": "50",
        "explanation": "Theo phương Bắc – Nam: đi Bắc 100 m rồi Nam 130 m tức lệch về phía Nam 30 m; theo phương Tây: lệch 40 m. Độ dịch chuyển d = &radic;(30<sup>2</sup> + 40<sup>2</sup>) = 50 m."
      },
      {
        "question": "Một chất điểm chuyển động thẳng nhanh dần đều với vận tốc đầu 5 m/s và gia tốc 2 m/s<sup>2</sup>. Quãng đường đi được sau 4 giây là bao nhiêu mét?",
        "answer": "36",
        "explanation": "s = 5.4 + 0,5.2.4<sup>2</sup> = 20 + 16 = 36 m."
      },
      {
        "question": "Một vật rơi tự do từ độ cao 45 m xuống đất (g = 10 m/s<sup>2</sup>). Tốc độ của vật ngay khi chạm đất là bao nhiêu m/s?",
        "answer": "30",
        "explanation": "Áp dụng công thức liên hệ rơi tự do trong Vật lí 10: v = &radic;(2gh) = &radic;(2 . 10 . 45) = &radic;900 = 30 m/s.",
        "explain": "Áp dụng công thức liên hệ rơi tự do trong Vật lí 10: v = &radic;(2gh) = &radic;(2 . 10 . 45) = &radic;900 = 30 m/s."
      },
      {
        "question": "Một thuyền máy chạy ngược dòng sông từ B về A cách nhau 18 km mất 2 giờ. Biết nước sông chảy với vận tốc 3 km/h. Vận tốc của thuyền so với nước là bao nhiêu km/h?",
        "answer": "12",
        "explanation": "v<sub>ngược</sub> = v<sub>thuyền/nước</sub> - v<sub>nước</sub> = 18 / 2 = 9 km/h &rArr; v<sub>thuyền/nước</sub> = 9 + 3 = 12 km/h."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một người tập thể dục chạy bộ trên một đường thẳng: trong 4 phút đầu chạy với tốc độ 4 m/s, sau đó đi bộ tiếp 6 phút theo hướng cũ với tốc độ 1,5 m/s.<br>a) Tính tổng quãng đường người đó đã di chuyển.<br>b) Tính tốc độ trung bình của người đó trong cả 10 phút tập thể dục.",
        "solution": "a) Đổi 4 phút = 240 s; 6 phút = 360 s. Quãng đường chạy bộ: s<sub>1</sub> = 4 . 240 = 960 m. Quãng đường đi bộ: s<sub>2</sub> = 1,5 . 360 = 540 m. Tổng quãng đường: s = 960 + 540 = 1500 m (0,75 điểm).<br>b) Tổng thời gian t = 240 + 360 = 600 s. Tốc độ trung bình: v<sub>tb</sub> = 1500 / 600 = 2,5 m/s (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Một xe tải đang chạy trên đường thẳng ngang với tốc độ 54 km/h (15 m/s) thì người lái xe nhìn thấy chướng ngại vật cách xe 50 m. Người lái xe mất 0,6 giây phản xạ trước khi đạp phanh; kể từ lúc đạp phanh, xe chuyển động chậm dần đều với gia tốc có độ lớn 3 m/s<sup>2</sup>.<br>a) Tính quãng đường xe đi được trong thời gian phản xạ và quãng đường đi được từ lúc đạp phanh đến khi dừng hẳn.<br>b) Xe tải có đâm vào chướng ngại vật hay không? Khi dừng lại xe cách chướng ngại vật bao nhiêu mét?",
        "solution": "a) Trong 0,6 s phản xạ, xe vẫn chạy đều: s<sub>1</sub> = 15 . 0,6 = 9 m (0,5 điểm). Quãng đường từ lúc đạp phanh đến khi dừng hẳn: s<sub>2</sub> = 15<sup>2</sup> / (2 . 3) = 225 / 6 = 37,5 m (0,5 điểm).<br>b) Tổng quãng đường xe đi được đến khi dừng: s = s<sub>1</sub> + s<sub>2</sub> = 9 + 37,5 = 46,5 m &lt; 50 m. Vậy xe không đâm vào chướng ngại vật và dừng lại cách chướng ngại vật 50 - 46,5 = 3,5 m (0,5 điểm)."
      }
    ]
  },
  {
    "id": "vatli-10-de-10",
    "title": "Vật lí 10 - Đề 10 - Trường THPT Ngô Gia Tự – Đắk Lắk (Đề chính thức Kết nối tri thức)",
    "subject": "physics",
    "duration": 45,
    "school": "Trường THPT Ngô Gia Tự – Đắk Lắk (Đề chính thức Kết nối tri thức)",
    "province": "Đắk Lắk",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-ngo-gia-tu-dl-2024-2025.jsp",
    "questions": [
      [
        "Khi thực hiện phép tính nhân hoặc chia các số liệu thực nghiệm, số chữ số có nghĩa (CSCN) của kết quả phải:",
        [
          "A. Bằng số CSCN của thừa số có nhiều CSCN nhất.",
          "B. Bằng số CSCN của thừa số có ít CSCN nhất.",
          "C. Luôn lấy 5 chữ số thập phân.",
          "D. Luôn làm tròn thành số nguyên."
        ],
        1,
        "Quy tắc làm tròn: kết quả phép nhân/chia lấy số CSCN bằng số CSCN của thừa số có ít CSCN nhất."
      ],
      [
        "Đại lượng nào sau đây luôn nhận giá trị không âm (&ge; 0) trong mọi chuyển động?",
        [
          "A. Độ dịch chuyển d.",
          "B. Vận tốc v.",
          "C. Gia tốc a.",
          "D. Quãng đường đi được s."
        ],
        3,
        "Quãng đường đi được s và tốc độ luôn không âm, còn d, v, a là các đại lượng đại số/vectơ có thể âm."
      ],
      [
        "Trên đồ thị độ dịch chuyển – thời gian (d – t), hai đường thẳng biểu diễn chuyển động của hai xe cắt nhau tại điểm M. Điểm giao nhau M cho biết:",
        [
          "A. Hai xe có cùng vận tốc tại thời điểm đó.",
          "B. Hai xe gặp nhau tại vị trí và thời điểm ứng với tọa độ điểm M.",
          "C. Hai xe đều dừng lại.",
          "D. Hai xe có cùng gia tốc."
        ],
        1,
        "Giao điểm của hai đồ thị (d – t) biểu thị hai vật có cùng vị trí tại cùng một thời điểm (gặp nhau)."
      ],
      [
        "Một chiếc thuyền buồm chạy ngược gió. Gió thổi về phía Nam, thuyền đi về phía Bắc. Nhận xét nào sau đây đúng?",
        [
          "A. Vận tốc của thuyền so với bờ cùng hướng với vận tốc gió.",
          "B. Vận tốc của thuyền so với bờ ngược hướng với vận tốc gió.",
          "C. Vận tốc của thuyền bằng 0.",
          "D. Độ dịch chuyển của thuyền hướng về phía Nam."
        ],
        1,
        "Thuyền đi về phía Bắc nên vận tốc thuyền so với bờ hướng Bắc, ngược hướng gió (hướng Nam)."
      ],
      [
        "Một chất điểm chuyển động thẳng biến đổi đều có vận tốc đầu v<sub>0</sub> = 2 m/s, sau 4 giây đạt vận tốc 10 m/s. Quãng đường chất điểm đi được trong 4 giây đó là:",
        [
          "A. 16 m.",
          "B. 24 m.",
          "C. 32 m.",
          "D. 48 m."
        ],
        1,
        "s = (v<sub>0</sub> + v).t / 2 = (2 + 10).4 / 2 = 24 m."
      ],
      [
        "Khi một vật rơi tự do không vận tốc đầu, vận tốc tức thời của vật tại thời điểm t là:",
        [
          "A. v = g.t.",
          "B. v = 1/2.g.t<sup>2</sup>.",
          "C. v = g / t.",
          "D. v = &radic;(gt)."
        ],
        0,
        "Chuyển động rơi tự do là chuyển động thẳng nhanh dần đều với gia tốc g và không có vận tốc đầu (v₀ = 0). Do đó công thức vận tốc tức thời tại thời điểm t là: v = g . t."
      ],
      [
        "Tại nơi có g = 10 m/s<sup>2</sup>, một giọt mưa rơi tự do từ độ cao 20 m xuống mái hiên cao 15 m so với mặt đất. Thời gian giọt mưa rơi đến mái hiên là:",
        [
          "A. 1 s.",
          "B. 2 s.",
          "C. &radic;3 s.",
          "D. 0,5 s."
        ],
        0,
        "Quãng đường rơi xuống mái hiên là &Delta;h = 20 - 15 = 5 m &rArr; t = &radic;(2.5 / 10) = 1 s."
      ],
      [
        "Trong chuyển động ném ngang từ độ cao h với vận tốc v<sub>0</sub>, phương trình quỹ đạo của vật (chọn gốc O tại vị trí ném, Ox ngang, Oy thẳng đứng hướng xuống) là:",
        [
          "A. y = (g / (2v<sub>0</sub><sup>2</sup>)) . x<sup>2</sup>.",
          "B. y = (2v<sub>0</sub><sup>2</sup> / g) . x<sup>2</sup>.",
          "C. y = v<sub>0</sub>.x + 1/2.g.x<sup>2</sup>.",
          "D. y = (g / v<sub>0</sub>) . x."
        ],
        0,
        "Từ x = v<sub>0</sub>t &rArr; t = x/v<sub>0</sub>, thay vào y = 1/2.g.t<sup>2</sup> được y = (g / (2v<sub>0</sub><sup>2</sup>)).x<sup>2</sup>."
      ],
      [
        "Một vật chuyển động thẳng chậm dần đều với vận tốc đầu 20 m/s và gia tốc có độ lớn 5 m/s<sup>2</sup>. Quãng đường vật đi được cho đến khi dừng lại là:",
        [
          "A. 20 m.",
          "B. 40 m.",
          "C. 80 m.",
          "D. 100 m."
        ],
        1,
        "s = v<sub>0</sub><sup>2</sup> / (2|a|) = 400 / 10 = 40 m."
      ],
      [
        "Nếu tăng đồng thời cả độ cao ném ngang h lên 4 lần và vận tốc ném ngang v<sub>0</sub> lên 2 lần thì tầm bay xa L của vật sẽ:",
        [
          "A. Tăng 2 lần.",
          "B. Tăng 4 lần.",
          "C. Tăng 8 lần.",
          "D. Không đổi."
        ],
        1,
        "L = v<sub>0</sub>.&radic;(2h/g). Khi h tăng 4 lần thì &radic;h tăng 2 lần; v<sub>0</sub> tăng 2 lần &rArr; L tăng 2 . 2 = 4 lần."
      ],
      [
        "Trong hệ SI, đơn vị cơ bản dùng để đo chiều dài, khối lượng và thời gian lần lượt là:",
        [
          "A. cm, g, s.",
          "B. km, kg, h.",
          "C. m, kg, s.",
          "D. m, g, phút."
        ],
        2,
        "Ba đơn vị cơ bản hệ SI của cơ học là mét (m), kilôgam (kg) và giây (s)."
      ],
      [
        "Một vật được ném xiên từ mặt đất với góc ném 60&deg; so với phương ngang và tốc độ đầu v<sub>0</sub>. Để đạt cùng tầm bay xa L với cùng tốc độ đầu v<sub>0</sub>, có thể ném vật dưới góc ném thứ hai bằng:",
        [
          "A. 30&deg;.",
          "B. 45&deg;.",
          "C. 15&deg;.",
          "D. 75&deg;."
        ],
        0,
        "Hai góc phụ nhau (&alpha;<sub>1</sub> + &alpha;<sub>2</sub> = 90&deg;) có sin2&alpha;<sub>1</sub> = sin2&alpha;<sub>2</sub> nên cho cùng tầm bay xa: 90&deg; - 60&deg; = 30&deg;."
      ]
    ],
    "tf": [
      {
        "stem": "Một viên bi lăn trên mặt phẳng nghiêng dài 9 m từ đỉnh dốc A không vận tốc đầu, chuyển động thẳng nhanh dần đều và đến chân dốc B sau 3 giây.",
        "items": [
          [
            "a) Gia tốc của viên bi trên mặt phẳng nghiêng là 2 m/s<sup>2</sup>.",
            true,
            "Từ s = 1/2.a.t<sup>2</sup> &rArr; a = 2s / t<sup>2</sup> = 18 / 9 = 2 m/s<sup>2</sup>."
          ],
          [
            "b) Tốc độ của viên bi khi đến chân dốc B là 6 m/s.",
            true,
            "v<sub>B</sub> = a.t = 2 . 3 = 6 m/s."
          ],
          [
            "c) Tốc độ trung bình của viên bi trên cả dốc AB là 3 m/s.",
            true,
            "v<sub>tb</sub> = s / t = 9 / 3 = 3 m/s (hoặc (0 + 6)/2 = 3 m/s)."
          ],
          [
            "d) Thời gian để viên bi đi hết 4 m đầu tiên kể từ đỉnh dốc A là 1,5 giây.",
            false,
            "t<sub>1</sub> = &radic;(2s<sub>1</sub> / a) = &radic;(8 / 2) = 2 s."
          ]
        ]
      },
      {
        "stem": "Một chiếc thuyền chạy qua một con sông rộng 120 m. Mũi thuyền luôn hướng vuông góc với bờ sông với vận tốc của thuyền so với nước là 4 m/s. Nước sông chảy với vận tốc 3 m/s so với bờ.",
        "items": [
          [
            "a) Thời gian để thuyền sang đến bờ bên kia là 30 giây.",
            true,
            "t = d<sub>rộng</sub> / v<sub>thuyền/nước</sub> = 120 / 4 = 30 s."
          ],
          [
            "b) Độ lớn vận tốc của thuyền so với bờ sông là 7 m/s.",
            false,
            "Hai vận tốc vuông góc: v<sub>thuyền/bờ</sub> = &radic;(4<sup>2</sup> + 3<sup>2</sup>) = 5 m/s."
          ],
          [
            "c) Khi sang tới bờ bên kia, thuyền bị trôi xuôi dòng một đoạn 90 m so với điểm đối diện trực tiếp.",
            true,
            "L = v<sub>nước</sub> . t = 3 . 30 = 90 m."
          ],
          [
            "d) Quãng đường thực tế mà thuyền đã đi được so với bờ sông là 150 m.",
            true,
            "s = v<sub>thuyền/bờ</sub> . t = 5 . 30 = 150 m (hoặc &radic;(120<sup>2</sup> + 90<sup>2</sup>) = 150 m)."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một chiếc lá rụng từ cành cây cao 4 m xuống đất. Một cơn gió thổi ngang làm chiếc lá chạm đất ở vị trí cách gốc cây 3 m. Độ lớn độ dịch chuyển của chiếc lá bằng bao nhiêu mét?",
        "answer": "5",
        "explanation": "d = &radic;(4<sup>2</sup> + 3<sup>2</sup>) = 5 m."
      },
      {
        "question": "Một chất điểm chuyển động thẳng biến đổi đều đi được 24 m trong 2 giây đầu (từ trạng thái nghỉ). Gia tốc của chất điểm bằng bao nhiêu m/s<sup>2</sup>?",
        "answer": "12",
        "explanation": "a = 2s / t<sup>2</sup> = 48 / 4 = 12 m/s<sup>2</sup>."
      },
      {
        "question": "Tại nơi có g = 10 m/s<sup>2</sup>, từ độ cao h người ta thả rơi tự do vật 1. Sau đó 1 giây, từ độ cao nhỏ hơn cũng tại nơi đó người ta thả rơi tự do vật 2 thì hai vật chạm đất cùng lúc. Biết vật 1 rơi mất 3 giây. Độ cao thả vật 2 là bao nhiêu mét?",
        "answer": "20",
        "explanation": "Thời gian rơi của vật 2 là t<sub>2</sub> = 3 - 1 = 2 s &rArr; h<sub>2</sub> = 0,5.10.2<sup>2</sup> = 20 m."
      },
      {
        "question": "Một quả bóng được ném ngang từ độ cao 20 m đạt tầm xa 36 m trên mặt đất (g = 10 m/s<sup>2</sup>). Tốc độ ném ban đầu v<sub>0</sub> bằng bao nhiêu m/s?",
        "answer": "18",
        "explanation": "t = &radic;(2.20/10) = 2 s &rArr; v<sub>0</sub> = 36 / 2 = 18 m/s."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Một vận động viên đua xe đạp leo một con dốc dài 3 km với tốc độ 15 km/h, sau đó lập tức đổ dốc trở lại đúng con dốc đó (dài 3 km) với tốc độ 30 km/h.<br>a) Tính thời gian leo dốc, thời gian đổ dốc và tốc độ trung bình của vận động viên trên cả lượt lên và xuống dốc.<br>b) Tính vận tốc trung bình của vận động viên sau khi quay trở lại chân dốc.",
        "solution": "a) Thời gian leo dốc: t<sub>1</sub> = 3 / 15 = 0,2 giờ. Thời gian đổ dốc: t<sub>2</sub> = 3 / 30 = 0,1 giờ (0,5 điểm). Tốc độ trung bình cả lên và xuống: v<sub>tb</sub> = (3 + 3) / (0,2 + 0,1) = 6 / 0,3 = 20 km/h (0,5 điểm).<br>b) Vì vận động viên quay trở lại đúng vị trí xuất phát ở chân dốc nên độ dịch chuyển d = 0 km &rArr; vận tốc trung bình bằng 0 km/h (0,5 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Từ một đỉnh tháp cao 80 m so với mặt đất, một vật được ném ngang với vận tốc ban đầu v<sub>0</sub> = 30 m/s. Bỏ qua sức cản của không khí, lấy g = 10 m/s<sup>2</sup>.<br>a) Viết phương trình tọa độ (x, y) và phương trình quỹ đạo của vật.<br>b) Tính thời gian vật rơi chạm đất, tầm xa của vật và tốc độ của vật ngay khi chạm đất.",
        "solution": "Chọn gốc O tại vị trí ném, trục Ox nằm ngang theo hướng ném, trục Oy thẳng đứng hướng xuống.<br>a) Phương trình tọa độ: x = 30t (m); y = 5t<sup>2</sup> (m). Phương trình quỹ đạo: y = (5 / 900)x<sup>2</sup> = x<sup>2</sup> / 180 (m) (0,75 điểm).<br>b) Khi chạm đất y = 80 m &rArr; t = &radic;(80 / 5) = 4 s. Tầm xa L = 30 . 4 = 120 m. Tốc độ khi chạm đất: v = &radic;(v<sub>0</sub><sup>2</sup> + (gt)<sup>2</sup>) = &radic;(30<sup>2</sup> + 40<sup>2</sup>) = 50 m/s (0,75 điểm)."
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
        "Theo mô hình hiện đại, orbital s có dạng hình gì?",
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
        "Orbital p gồm 3 orbital p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> có hình dạng gì và định hướng trong không gian như thế nào?",
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
        "Trong mặt phẳng Oxy, phần nửa mặt phẳng không tô đậm (không kể bờ) trong hình vẽ là biểu diễn hình học tập nghiệm của bất phương trình nào dưới đây? (Hình vẽ đường thẳng cắt trục hoành tại (3/2; 0) và cắt trục tung tại (0; -3), phần không tô đậm chứa gốc O).",
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
        "Hình vẽ biểu diễn trục số thực (gạch bỏ đoạn ngoài từ -&infin; đến 2 ngoặc vuông [, gạch bỏ khoảng giữa 4 ngoặc ] và 6 ngoặc [, gạch bỏ phần lớn hơn 8 ngoặc tròn )) là hình biểu diễn cho tập hợp số nào sau đây:",
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
        "Hình vẽ minh họa đường thẳng đi qua (2; 0) và (0; -2), phần nửa mặt phẳng phía trên-trái chứa gốc O bị gạch bỏ, phần nửa mặt phẳng phía dưới-phải không bị gạch bỏ. Đây là miền nghiệm của bất phương trình nào?",
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
        "Miền tam giác (phần nền trắng) giới hạn bởi đường nằm ngang y = -1 và hai đường chéo đi qua (0; 2) là miền nghiệm của hệ bất phương trình nào dưới đây?",
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
