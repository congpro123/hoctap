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
        "title": "Câu 3 (1,0 điểm).",
        "question": "Cho tam giác ABC có BC = 14, AC = 13, AB = 15. Tính diện tích S, bán kính đường tròn ngoại tiếp R và bán kính đường tròn nội tiếp r của tam giác ABC.",
        "solution": "• Nửa chu vi p = (14 + 13 + 15)/2 = 21. Diện tích S = &radic;(21.(21-14).(21-13).(21-15)) = &radic;(21.7.8.6) = 84 (0,5 điểm).<br>• Bán kính đường tròn ngoại tiếp: R = abc / (4S) = (14.13.15) / (4.84) = 2730 / 336 = 65/8 = 8,125 (0,25 điểm).<br>• Bán kính đường tròn nội tiếp: r = S / p = 84 / 21 = 4 (0,25 điểm)."
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
        "stem": "Cho tam giác ABC có cạnh BC = 8, AB = 5 và góc B = 60&deg;.",
        "items": [
          [
            "a) Độ dài cạnh AC bằng 7.",
            true,
            "AC<sup>2</sup> = 8<sup>2</sup> + 5<sup>2</sup> - 2.8.5.cos60&deg; = 64 + 25 - 40 = 49 &rArr; AC = 7."
          ],
          [
            "b) Chu vi của tam giác ABC bằng 20.",
            true,
            "Chu vi tam giác ABC bằng tổng độ dài ba cạnh: 2p = AB + BC + CA = 8 + 5 + 7 = 20. Khẳng định này là ĐÚNG."
          ],
          [
            "c) Diện tích tam giác ABC bằng 10&radic;3.",
            true,
            "S = 1/2 . 8 . 5 . sin60&deg; = 10&radic;3."
          ],
          [
            "d) Bán kính đường tròn nội tiếp tam giác ABC bằng 2&radic;3.",
            false,
            "Nửa chu vi p = 10 &rArr; r = S / p = 10&radic;3 / 10 = &radic;3."
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
        "Trong tam giác ABC có AB = 9, AC = 12, BC = 15. Bán kính đường tròn ngoại tiếp R bằng:",
        [
          "A. 7,5.",
          "B. 6.",
          "C. 15.",
          "D. 4,5."
        ],
        0,
        "Tam giác vuông tại A (9<sup>2</sup> + 12<sup>2</sup> = 15<sup>2</sup>) nên R = BC / 2 = 7,5."
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
        "Cho tam giác ABC có ba cạnh a = 3, b = 4, c = 5. Độ dài đường cao h<sub>c</sub> kẻ từ đỉnh C xuống cạnh AB bằng:",
        [
          "A. 2,4.",
          "B. 2,5.",
          "C. 3.",
          "D. 4,8."
        ],
        0,
        "Tam giác vuông tại C có h<sub>c</sub> = a.b / c = (3.4) / 5 = 2,4."
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
        "Cho tam giác ABC có a = 6, b = 8, góc C = 60&deg;. Độ dài cạnh c bằng:",
        [
          "A. 2&radic;13.",
          "B. 10.",
          "C. 2&radic;37.",
          "D. 14."
        ],
        0,
        "c<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup> - 2.6.8.cos60&deg; = 36 + 64 - 48 = 52 &rArr; c = 2&radic;13."
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
        "stem": "Cho tam giác ABC có BC = 15, AC = 13, AB = 14.",
        "items": [
          [
            "a) Nửa chu vi của tam giác ABC bằng 21.",
            true,
            "Nửa chu vi tam giác ABC là: p = (a + b + c) / 2 = (15 + 13 + 14) / 2 = 42 / 2 = 21. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Diện tích của tam giác ABC bằng 84.",
            true,
            "Áp dụng công thức Heron tính diện tích tam giác trong Toán 10: S = &radic;(p(p - a)(p - b)(p - c)) = &radic;(21 . (21 - 15) . (21 - 13) . (21 - 14)) = &radic;(21 . 6 . 8 . 7) = &radic;7056 = 84. Khẳng định này là ĐÚNG."
          ],
          [
            "c) Độ dài đường cao AH kẻ từ A xuống BC bằng 12.",
            false,
            "Độ dài đường cao AH kẻ từ A xuống cạnh đáy BC = 15 là: AH = 2S / BC = (2 . 84) / 15 = 168 / 15 = 11,2 (khác 12). Khẳng định này là SAI."
          ],
          [
            "d) Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng 65/8.",
            true,
            "R = abc / (4S) = (15.13.14) / (4.84) = 65/8 = 8,125."
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
        "Thành tựu nghiên cứu nào sau đây của Vật lí được coi là có vai trò quan trọng trong việc mở đầu cho cuộc cách mạng công nghiệp lần thứ hai?",
        [
          "A. Nghiên cứu về nhiệt động lực học.",
          "B. Nghiên cứu về lực vạn vật hấp dẫn.",
          "C. Nghiên cứu về thuyết tương đối.",
          "D. Nghiên cứu về cảm ứng điện từ."
        ],
        3,
        "Hiện tượng cảm ứng điện từ (Faraday) là cơ sở chế tạo máy phát điện và động cơ điện, mở đầu cuộc cách mạng công nghiệp lần thứ hai."
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
        "Một vật rơi tự do tại nơi có g = 10 m/s<sup>2</sup>. Trong 2 giây đầu tiên, vật rơi được quãng đường là:",
        [
          "A. 10 m.",
          "B. 20 m.",
          "C. 40 m.",
          "D. 5 m."
        ],
        1,
        "s = 1/2 . g . t<sup>2</sup> = 0,5 . 10 . 2<sup>2</sup> = 20 m."
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
        "question": "Trích đề THPT Nguyễn Trãi – Đà Nẵng: Một vật chuyển động thẳng chậm dần đều trên đoạn đường AB. Vận tốc của vật khi qua A là 10 m/s và khi qua B chỉ còn 5 m/s. Vận tốc của vật khi đi qua trung điểm I của đoạn AB làm tròn đến hàng phần trăm là bao nhiêu m/s?",
        "answer": "7,91",
        "explanation": "Ta có v<sub>I</sub> = &radic;((v<sub>A</sub><sup>2</sup> + v<sub>B</sub><sup>2</sup>)/2) = &radic;((100 + 25)/2) = &radic;62,5 &approx; 7,91 m/s."
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
        "Trong chuyển động ném ngang từ độ cao h với vận tốc v<sub>0</sub>, thời gian bay của vật phụ thuộc vào:",
        [
          "A. Chỉ phụ thuộc vào v<sub>0</sub>.",
          "B. Chỉ phụ thuộc vào h (tại nơi có g xác định).",
          "C. Phụ thuộc vào cả v<sub>0</sub> và h.",
          "D. Phụ thuộc vào khối lượng m của vật."
        ],
        1,
        "t = &radic;(2h/g) chỉ phụ thuộc vào độ cao ban đầu h."
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
        "question": "Một vật rơi tự do tại nơi có g = 10 m/s<sup>2</sup>. Trong giây thứ 4 kể từ lúc thả, vật rơi được quãng đường bao nhiêu mét?",
        "answer": "35",
        "explanation": "&Delta;s<sub>4</sub> = s<sub>4</sub> - s<sub>3</sub> = 5.(4<sup>2</sup> - 3<sup>2</sup>) = 5 . 7 = 35 m."
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
        "question": "Một vật rơi tự do không vận tốc đầu tại nơi có g = 10 m/s<sup>2</sup>. Khi vật đạt tốc độ 30 m/s thì vật đã rơi được quãng đường bao nhiêu mét?",
        "answer": "45",
        "explanation": "s = v<sup>2</sup> / (2g) = 30<sup>2</sup> / 20 = 900 / 20 = 45 m."
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
        "stem": "Một chất điểm chuyển động thẳng có phương trình độ dịch chuyển theo thời gian là d = 12t - 1,5t<sup>2</sup> (d tính bằng m, t tính bằng s, với t &ge; 0).",
        "items": [
          [
            "a) Vận tốc ban đầu của chất điểm là v<sub>0</sub> = 12 m/s.",
            true,
            "Hệ số của t là v<sub>0</sub> = 12 m/s."
          ],
          [
            "b) Gia tốc của chất điểm là a = -1,5 m/s<sup>2</sup>.",
            false,
            "Ta có 1/2 . a = -1,5 &rArr; a = -3 m/s<sup>2</sup>."
          ],
          [
            "c) Chất điểm dừng lại (v = 0) tại thời điểm t = 4 giây.",
            true,
            "v = v<sub>0</sub> + at = 12 - 3t = 0 &rArr; t = 4 s."
          ],
          [
            "d) Quãng đường chất điểm đi được từ lúc t = 0 đến khi dừng lại là 24 m.",
            true,
            "Thay t = 4 s vào: d = 12(4) - 1,5(4<sup>2</sup>) = 48 - 24 = 24 m."
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
        "question": "Từ một máy bay bay ngang với tốc độ 72 m/s ở độ cao 500 m, người ta thả một vật rơi xuống đất (g = 10 m/s<sup>2</sup>). Tầm bay xa của vật theo phương ngang là bao nhiêu mét?",
        "answer": "720",
        "explanation": "t = &radic;(2.500/10) = 10 s &rArr; L = 72 . 10 = 720 m."
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
        "Một vật rơi tự do tại nơi có g = 10 m/s<sup>2</sup>. Hiệu quãng đường vật rơi được trong hai giây liên tiếp bất kỳ luôn bằng:",
        [
          "A. 5 m.",
          "B. 10 m.",
          "C. 15 m.",
          "D. 20 m."
        ],
        1,
        "&Delta;s<sub>n+1</sub> - &Delta;s<sub>n</sub> = g . (1 s)<sup>2</sup> = 10 m."
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
        "question": "Một học sinh đi xe đạp từ A về phía Đông 4 km, sau đó quay ngược lại đi về phía Tây 7 km đến B. Độ lớn độ dịch chuyển của học sinh so với điểm xuất phát A là bao nhiêu km?",
        "answer": "3",
        "explanation": "Chọn trục tọa độ Ox hướng sang phía Đông: đi phía Đông 4 km ứng với x₁ = +4 km, sau đó quay về phía Tây 7 km ứng với &Delta;x₂ = -7 km. Tọa độ cuối x₂ = 4 - 7 = -3 km. Độ lớn độ dịch chuyển là |d| = |-3| = 3 km.",
        "explain": "Chọn trục tọa độ Ox hướng sang phía Đông: đi phía Đông 4 km ứng với x₁ = +4 km, sau đó quay về phía Tây 7 km ứng với &Delta;x₂ = -7 km. Tọa độ cuối x₂ = 4 - 7 = -3 km. Độ lớn độ dịch chuyển là |d| = |-3| = 3 km."
      },
      {
        "question": "Một chất điểm chuyển động thẳng biến đổi đều có vận tốc tại t = 2 s là 8 m/s và tại t = 6 s là 20 m/s. Gia tốc của chất điểm là bao nhiêu m/s<sup>2</sup>?",
        "answer": "3",
        "explanation": "a = (20 - 8) / (6 - 2) = 12 / 4 = 3 m/s<sup>2</sup>."
      },
      {
        "question": "Một ô tô tăng tốc đều từ 10 m/s lên 20 m/s trên đoạn đường thẳng dài 150 m. Thời gian ô tô đi hết đoạn đường đó là bao nhiêu giây?",
        "answer": "10",
        "explanation": "s = (v<sub>0</sub> + v).t / 2 &rArr; t = 2s / (v<sub>0</sub> + v) = 300 / 30 = 10 s."
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
        "Các hạt cấu tạo nên hạt nhân của hầu hết các nguyên tử (trừ đồng vị <sup>1</sup><sub>1</sub>H) là:",
        [
          "A. electron và proton.",
          "B. proton và neutron.",
          "C. neutron và electron.",
          "D. electron, proton và neutron."
        ],
        1,
        "Hạt nhân nguyên tử được tạo nên bởi các hạt proton (mang điện dương) và neutron (không mang điện), trừ <sup>1</sup><sub>1</sub>H chỉ có 1 proton."
      ],
      [
        "Nguyên tử sodium (Na) có điện tích hạt nhân là +11. Số hạt proton và số hạt electron trong nguyên tử này lần lượt là:",
        [
          "A. 11 và 11.",
          "B. 11 và 12.",
          "C. 11 và 22.",
          "D. 11 và 23."
        ],
        0,
        "Nguyên tử trung hòa về điện nên số proton = số electron = số đơn vị điện tích hạt nhân Z = 11."
      ],
      [
        "Các nguyên tử thuộc cùng một nguyên tố hóa học luôn có cùng:",
        [
          "A. Số hạt neutron.",
          "B. Số khối A.",
          "C. Số hạt proton.",
          "D. Khối lượng nguyên tử."
        ],
        2,
        "Nguyên tố hóa học là tập hợp các nguyên tử có cùng điện tích hạt nhân (tức cùng số hạt proton)."
      ],
      [
        "Kí hiệu nguyên tử của nguyên tố aluminium (nhôm) biết nguyên tử đó có 13 proton và 14 neutron là:",
        [
          "A. <sup>13</sup><sub>27</sub>Al.",
          "B. <sup>27</sup><sub>13</sub>Al.",
          "C. <sup>14</sup><sub>13</sub>Al.",
          "D. <sup>27</sup><sub>14</sub>Al."
        ],
        1,
        "Số hiệu nguyên tử Z = 13 viết ở dưới bên trái; số khối A = Z + N = 13 + 14 = 27 viết ở trên bên trái: <sup>27</sup><sub>13</sub>Al."
      ],
      [
        "Các orbital nguyên tử (AO) thuộc phân lớp p có hình dạng gì và chứa tối đa bao nhiêu electron?",
        [
          "A. Hình cầu, tối đa 2 electron.",
          "B. Hình số tám nổi, tối đa 6 electron.",
          "C. Hình cầu, tối đa 6 electron.",
          "D. Hình số tám nổi, tối đa 10 electron."
        ],
        1,
        "AO s có hình cầu (tối đa 2e); phân lớp p gồm 3 AO p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> hình số tám nổi, chứa tối đa 6 electron."
      ],
      [
        "Cấu hình electron ở trạng thái cơ bản của nguyên tử nitrogen (Z = 7) là:",
        [
          "A. 1s<sup>2</sup>2s<sup>1</sup>2p<sup>4</sup>.",
          "B. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>.",
          "D. 1s<sup>2</sup>2s<sup>3</sup>2p<sup>2</sup>."
        ],
        2,
        "Với Z = 7, các electron phân bố vào các phân lớp theo thứ tự mức năng lượng: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>."
      ],
      [
        "Nguyên tử của nguyên tố X có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>. Nguyên tố X thuộc loại:",
        [
          "A. Kim loại.",
          "B. Phi kim.",
          "C. Khí hiếm.",
          "D. Nguyên tố d."
        ],
        1,
        "Lớp ngoài cùng (n = 3) có 2 + 5 = 7 electron nên X là nguyên tố phi kim (Chlorine, Z = 17)."
      ],
      [
        "Trong bảng tuần hoàn các nguyên tố hóa học hiện đại, các nguyên tố được sắp xếp theo nguyên tắc nào sau đây?",
        [
          "A. Theo chiều tăng dần khối lượng nguyên tử.",
          "B. Theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
          "C. Theo chiều tăng dần bán kính nguyên tử.",
          "D. Theo chiều tăng dần số hạt neutron."
        ],
        1,
        "Nguyên tắc đầu tiên: sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử."
      ],
      [
        "Nguyên tử của nguyên tố calcium (Ca) có Z = 20. Vị trí của Ca trong bảng tuần hoàn là:",
        [
          "A. Ô 20, chu kì 4, nhóm IIA.",
          "B. Ô 20, chu kì 3, nhóm IIA.",
          "C. Ô 20, chu kì 4, nhóm IIB.",
          "D. Ô 20, chu kì 2, nhóm IVA."
        ],
        0,
        "Cấu hình Ca (Z = 20): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup> &rArr; Ô 20, 4 lớp e (chu kì 4), 2e hóa trị nguyên tố s (nhóm IIA)."
      ],
      [
        "Trong một chu kì của bảng tuần hoàn, khi đi từ trái sang phải theo chiều tăng dần của điện tích hạt nhân, xu hướng biến đổi nào sau đây là đúng?",
        [
          "A. Bán kính nguyên tử tăng dần.",
          "B. Độ âm điện giảm dần.",
          "C. Tính kim loại giảm dần, tính phi kim tăng dần.",
          "D. Số lớp electron tăng dần."
        ],
        2,
        "Trong một chu kì từ trái sang phải: bán kính giảm, độ âm điện tăng, tính kim loại giảm và tính phi kim tăng."
      ],
      [
        "Cho các nguyên tố thuộc chu kì 3: <sub>11</sub>Na, <sub>12</sub>Mg, <sub>13</sub>Al, <sub>15</sub>P. Nguyên tố có bán kính nguyên tử lớn nhất là:",
        [
          "A. Na.",
          "B. Mg.",
          "C. Al.",
          "D. P."
        ],
        0,
        "Cùng chu kì 3, khi Z tăng từ 11 đến 15 thì bán kính nguyên tử giảm dần, nên <sub>11</sub>Na có bán kính lớn nhất."
      ],
      [
        "Nguyên tố R thuộc nhóm VIA trong bảng tuần hoàn. Công thức oxide cao nhất của R là RO<sub>3</sub>. Công thức hợp chất khí của R với hydrogen là:",
        [
          "A. RH<sub>4</sub>.",
          "B. RH<sub>3</sub>.",
          "C. H<sub>2</sub>R.",
          "D. HR."
        ],
        2,
        "Nhóm VIA có hóa trị cao nhất với O là 6, hóa trị với H là 8 - 6 = 2 &rArr; công thức hợp chất khí với H là H<sub>2</sub>R."
      ]
    ],
    "tf": [
      {
        "stem": "Xét cấu tạo của nguyên tử và lớp vỏ electron nguyên tử:",
        "items": [
          [
            "a) Nguyên tử được cấu tạo bởi hai phần gồm hạt nhân mang điện tích dương và lớp vỏ chứa các hạt electron mang điện tích âm.",
            true,
            "Cấu tạo nguyên tử gồm hạt nhân (mang điện dương) ở tâm và vỏ electron (mang điện âm) chuyển động xung quanh."
          ],
          [
            "b) Nguyên tử có cấu tạo rỗng, khối lượng của nguyên tử tập trung hầu hết ở hạt nhân.",
            true,
            "Vì khối lượng electron rất nhỏ (m<sub>e</sub> &approx; 0,00055 amu) so với proton và neutron (~ 1 amu)."
          ],
          [
            "c) Vì nguyên tử trung hòa về điện nên trong mọi nguyên tử, số hạt proton luôn bằng số hạt neutron.",
            false,
            "Nguyên tử trung hòa về điện nên số hạt proton bằng số hạt electron (P = E), không phải bằng số neutron."
          ],
          [
            "d) Lớp electron thứ 3 (lớp M, ứng với n = 3) có 3 phân lớp và chứa tối đa 18 electron.",
            true,
            "Lớp M (n = 3) có 3 phân lớp 3s, 3p, 3d chứa tối đa 2 + 6 + 10 = 18 electron."
          ]
        ]
      },
      {
        "stem": "Cho hai nguyên tố hóa học X (Z = 16, sulfur) và Y (Z = 19, potassium):",
        "items": [
          [
            "a) Cấu hình electron của nguyên tử X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>, X có 6 electron hóa trị.",
            true,
            "Lớp ngoài cùng của X là 3s<sup>2</sup>3p<sup>4</sup> có 6 electron hóa trị."
          ],
          [
            "b) Nguyên tố Y thuộc chu kì 4, nhóm IA và là một kim loại kiềm điển hình.",
            true,
            "Cấu hình Y (Z = 19): [Ar]4s<sup>1</sup> &rArr; chu kì 4, nhóm IA (kim loại kiềm)."
          ],
          [
            "c) Độ âm điện của nguyên tử Y lớn hơn độ âm điện của nguyên tử X.",
            false,
            "X là phi kim mạnh ở cuối chu kì 3, còn Y là kim loại kiềm mạnh ở đầu chu kì 4 nên độ âm điện của Y nhỏ hơn X rất nhiều."
          ],
          [
            "d) Hydroxide ứng với hóa trị cao nhất của X là H<sub>2</sub>SO<sub>4</sub> có tính acid mạnh.",
            true,
            "X (S) ở nhóm VIA có hydroxide cao nhất là H<sub>2</sub>SO<sub>4</sub>, là một acid mạnh."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Nguyên tử của nguyên tố X có 15 proton và 16 neutron. Số khối A của hạt nhân nguyên tử X bằng bao nhiêu?",
        "answer": "31",
        "explanation": "Theo kiến thức Hóa học 10 (Chương 1): Số khối A của hạt nhân nguyên tử bằng tổng số hạt proton (Z) và neutron (N): A = Z + N = 15 + 16 = 31 (nguyên tố Phosphorus, ³¹₁₅P).",
        "explain": "Theo kiến thức Hóa học 10 (Chương 1): Số khối A của hạt nhân nguyên tử bằng tổng số hạt proton (Z) và neutron (N): A = Z + N = 15 + 16 = 31 (nguyên tố Phosphorus, ³¹₁₅P)."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử phosphorus (Z = 15) có bao nhiêu electron độc thân?",
        "answer": "3",
        "explanation": "Cấu hình P (Z = 15): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>. Theo quy tắc Hund, phân lớp 3p<sup>3</sup> có 3 electron độc thân."
      },
      {
        "question": "Trong tự nhiên, nguyên tố chlorine có hai đồng vị bền là <sup>35</sup><sub>17</sub>Cl (chiếm 75,77% số nguyên tử) và <sup>37</sup><sub>17</sub>Cl (chiếm 24,23% số nguyên tử). Nguyên tử khối trung bình của chlorine bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "35,48",
        "explanation": "<span style=\"text-decoration:overline;\">A</span> = (35 . 75,77 + 37 . 24,23) / 100 = 35,4846 &approx; 35,48."
      },
      {
        "question": "Oxide cao nhất của một nguyên tố R thuộc nhóm VA có dạng R<sub>2</sub>O<sub>5</sub>. Biết trong R<sub>2</sub>O<sub>5</sub>, oxygen chiếm 56,34% về khối lượng. Nguyên tử khối của nguyên tố R bằng bao nhiêu?",
        "answer": "31",
        "explanation": "%O = 80 / (2M<sub>R</sub> + 80) . 100% = 56,34% &rArr; 2M<sub>R</sub> + 80 = 142 &rArr; M<sub>R</sub> = 31 (Phosphorus)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố X có tổng số hạt cơ bản (proton, neutron, electron) là 36, trong đó số hạt mang điện trong hạt nhân bằng với số hạt không mang điện.<br>a) Xác định số hạt proton, neutron, electron và viết kí hiệu nguyên tử của X.<br>b) Viết cấu hình electron của X, xác định vị trí của X trong bảng tuần hoàn và cho biết X là kim loại, phi kim hay khí hiếm.",
        "solution": "a) Ta có hệ phương trình: {2Z + N = 36 ; Z = N} &rArr; 3Z = 36 &rArr; Z = 12, N = 12, E = 12. Số khối A = 12 + 12 = 24. Kí hiệu nguyên tử: <sup>24</sup><sub>12</sub>Mg (0,75 điểm).<br>b) Cấu hình electron (Z = 12): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>. Vị trí: Ô số 12, chu kì 3, nhóm IIA. Vì có 2 electron ở lớp ngoài cùng nên X (Mg) là kim loại (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Cho ba nguyên tố: <sub>12</sub>Mg, <sub>13</sub>Al, <sub>19</sub>K.<br>a) Viết cấu hình electron của Mg, Al, K và sắp xếp các nguyên tố theo chiều tính kim loại tăng dần. Giải thích.<br>b) Viết công thức oxide cao nhất và hydroxide tương ứng của Mg và Al, đồng thời so sánh tính base giữa hai hydroxide đó.",
        "solution": "a) Cấu hình e: Mg (Z=12): [Ne]3s<sup>2</sup> (chu kì 3, nhóm IIA); Al (Z=13): [Ne]3s<sup>2</sup>3p<sup>1</sup> (chu kì 3, nhóm IIIA); K (Z=19): [Ar]4s<sup>1</sup> (chu kì 4, nhóm IA). Trong chu kì 3, tính kim loại Al &lt; Mg; K ở chu kì 4 nhóm IA có tính kim loại mạnh hơn Na và Mg &rArr; Chiều tăng dần tính kim loại: Al &lt; Mg &lt; K (1,0 điểm).<br>b) Oxide cao nhất: MgO, Al<sub>2</sub>O<sub>3</sub>; hydroxide tương ứng: Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub>. Tính base: Mg(OH)<sub>2</sub> &gt; Al(OH)<sub>3</sub> (0,5 điểm)."
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
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-gio-linh-qt-2024-2025.jsp",
    "questions": [
      [
        "Hạt mang điện tích âm trong nguyên tử là:",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân."
        ],
        2,
        "Electron mang điện tích âm (-1,602.10<sup>-19</sup> C hay 1-), proton mang điện dương (1+), neutron không mang điện."
      ],
      [
        "Trong kí hiệu nguyên tử <sup>39</sup><sub>19</sub>K, số hạt neutron trong hạt nhân nguyên tử potassium là:",
        [
          "A. 19.",
          "B. 20.",
          "C. 39.",
          "D. 58."
        ],
        1,
        "Số hạt neutron N = A - Z = 39 - 19 = 20."
      ],
      [
        "Đồng vị của cùng một nguyên tố hóa học là những nguyên tử có:",
        [
          "A. Cùng số proton nhưng khác nhau về số neutron.",
          "B. Cùng số neutron nhưng khác nhau về số proton.",
          "C. Cùng số khối A nhưng khác số hiệu nguyên tử Z.",
          "D. Cùng tổng số hạt trong nguyên tử."
        ],
        0,
        "Đồng vị là các nguyên tử có cùng số proton (Z) nhưng khác số neutron (N), do đó số khối A khác nhau."
      ],
      [
        "Phân lớp electron nào sau đây đã bão hòa (chứa tối đa số electron)?",
        [
          "A. s<sup>1</sup>.",
          "B. p<sup>4</sup>.",
          "C. d<sup>10</sup>.",
          "D. f<sup>10</sup>."
        ],
        2,
        "Số e tối đa trên các phân lớp s, p, d, f lần lượt là 2, 6, 10, 14. Do đó d<sup>10</sup> đã bão hòa."
      ],
      [
        "Ở trạng thái cơ bản, cấu hình electron của nguyên tử nguyên tố iron (Fe, Z = 26) là:",
        [
          "A. [Ar]4s<sup>2</sup>3d<sup>6</sup>.",
          "B. [Ar]3d<sup>6</sup>4s<sup>2</sup>.",
          "C. [Ar]3d<sup>8</sup>.",
          "D. [Ar]3d<sup>5</sup>4s<sup>3</sup>."
        ],
        1,
        "Thứ tự điền mức năng lượng là 4s<sup>2</sup> rồi đến 3d<sup>6</sup>, khi viết cấu hình theo thứ tự lớp từ trong ra ngoài là [Ar]3d<sup>6</sup>4s<sup>2</sup>."
      ],
      [
        "Nguyên tố hóa học nào sau đây là khí hiếm?",
        [
          "A. <sub>8</sub>O.",
          "B. <sub>10</sub>Ne.",
          "C. <sub>11</sub>Na.",
          "D. <sub>17</sub>Cl."
        ],
        1,
        "<sub>10</sub>Ne có cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup> (8e lớp ngoài cùng bền vững), là khí hiếm."
      ],
      [
        "Số nguyên tố hóa học trong chu kì 2 và chu kì 3 của bảng tuần hoàn lần lượt là:",
        [
          "A. 2 và 8.",
          "B. 8 và 8.",
          "C. 8 và 18.",
          "D. 18 và 18."
        ],
        1,
        "Chu kì 2 và chu kì 3 là hai chu kì nhỏ, mỗi chu kì đều có 8 nguyên tố."
      ],
      [
        "Nguyên tố X thuộc chu kì 3, nhóm VA. Cấu hình electron lớp ngoài cùng của nguyên tử X là:",
        [
          "A. 3s<sup>2</sup>3p<sup>3</sup>.",
          "B. 3s<sup>2</sup>3p<sup>5</sup>.",
          "C. 2s<sup>2</sup>2p<sup>3</sup>.",
          "D. 3d<sup>3</sup>4s<sup>2</sup>."
        ],
        0,
        "Chu kì 3 có 3 lớp e, nhóm VA có 5e lớp ngoài cùng (nguyên tố p) &rArr; 3s<sup>2</sup>3p<sup>3</sup>."
      ],
      [
        "Trong một nhóm A (trừ nhóm VIIIA), theo chiều tăng của điện tích hạt nhân từ trên xuống dưới:",
        [
          "A. Tính kim loại tăng dần, tính phi kim giảm dần.",
          "B. Tính kim loại giảm dần, tính phi kim tăng dần.",
          "C. Độ âm điện tăng dần.",
          "D. Bán kính nguyên tử giảm dần."
        ],
        0,
        "Trong một nhóm A từ trên xuống dưới: bán kính tăng, độ âm điện giảm, tính kim loại tăng và tính phi kim giảm."
      ],
      [
        "Nguyên tố có độ âm điện lớn nhất trong bảng tuần hoàn là:",
        [
          "A. Caesium (Cs).",
          "B. Fluorine (F).",
          "C. Oxygen (O).",
          "D. Chlorine (Cl)."
        ],
        1,
        "Fluorine (F, Z = 9) ở đầu nhóm VIIA có độ âm điện lớn nhất (&chi; = 3,98 theo thang Pauling)."
      ],
      [
        "Nguyên tố Silicon (Si) thuộc nhóm IVA. Công thức oxide cao nhất và hydroxide tương ứng của Si là:",
        [
          "A. SiO<sub>2</sub> và H<sub>2</sub>SiO<sub>3</sub>.",
          "B. SiO và Si(OH)<sub>2</sub>.",
          "C. Si<sub>2</sub>O<sub>3</sub> và H<sub>2</sub>SiO<sub>3</sub>.",
          "D. SiO<sub>3</sub> và H<sub>2</sub>SiO<sub>4</sub>."
        ],
        0,
        "Nhóm IVA có hóa trị cao nhất với O là 4 &rArr; oxide cao nhất là SiO<sub>2</sub> và hydroxide tương ứng là H<sub>2</sub>SiO<sub>3</sub>."
      ],
      [
        "Cho các hydroxide của các nguyên tố chu kì 3: NaOH, Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub>. Chiều giảm dần tính base là:",
        [
          "A. Al(OH)<sub>3</sub> &gt; Mg(OH)<sub>2</sub> &gt; NaOH.",
          "B. NaOH &gt; Mg(OH)<sub>2</sub> &gt; Al(OH)<sub>3</sub>.",
          "C. Mg(OH)<sub>2</sub> &gt; NaOH &gt; Al(OH)<sub>3</sub>.",
          "D. NaOH &gt; Al(OH)<sub>3</sub> &gt; Mg(OH)<sub>2</sub>."
        ],
        1,
        "Trong chu kì 3 từ Na đến Al, tính kim loại giảm dần nên tính base giảm dần: NaOH &gt; Mg(OH)<sub>2</sub> &gt; Al(OH)<sub>3</sub>."
      ]
    ],
    "tf": [
      {
        "stem": "Trích đề THPT Gio Linh – Quảng Trị: Cho các phát biểu về cấu tạo nguyên tử và đồng vị:",
        "items": [
          [
            "a) Tất cả mọi nguyên tử trong tự nhiên đều được cấu tạo bởi đủ 3 loại hạt cơ bản là proton, neutron và electron.",
            false,
            "Đồng vị protium <sup>1</sup><sub>1</sub>H chỉ có 1 proton và 1 electron, không có hạt neutron nào."
          ],
          [
            "b) Hai nguyên tử <sup>12</sup><sub>6</sub>C và <sup>13</sup><sub>6</sub>C là hai đồng vị của cùng nguyên tố carbon.",
            true,
            "Cả hai đều có Z = 6 proton nhưng số neutron lần lượt là 6 và 7."
          ],
          [
            "c) Các electron trên cùng một phân lớp có mức năng lượng bằng nhau.",
            true,
            "Các electron thuộc cùng một phân lớp có mức năng lượng bằng nhau (trên cùng một lớp thì gần bằng nhau)."
          ],
          [
            "d) Nguyên tử <sub>24</sub>Cr ở trạng thái cơ bản có cấu hình electron là [Ar]3d<sup>4</sup>4s<sup>2</sup>.",
            false,
            "Do hiệu ứng bán bão hòa phân lớp d, cấu hình bền của Cr (Z = 24) là [Ar]3d<sup>5</sup>4s<sup>1</sup>."
          ]
        ]
      },
      {
        "stem": "Cho ba nguyên tố X (Z = 9), Y (Z = 11) và T (Z = 17).",
        "items": [
          [
            "a) X và T thuộc cùng một nhóm VIIA trong bảng tuần hoàn.",
            true,
            "X (1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>) và T ([Ne]3s<sup>2</sup>3p<sup>5</sup>) đều có 7e lớp ngoài cùng, thuộc nhóm VIIA."
          ],
          [
            "b) Y và T thuộc cùng chu kì 3 trong bảng tuần hoàn.",
            true,
            "Y ([Ne]3s<sup>1</sup>) và T ([Ne]3s<sup>2</sup>3p<sup>5</sup>) đều có 3 lớp electron nên cùng thuộc chu kì 3."
          ],
          [
            "c) Bán kính nguyên tử tăng dần theo thứ tự: R<sub>X</sub> &lt; R<sub>T</sub> &lt; R<sub>Y</sub>.",
            true,
            "Trong nhóm VIIA: R<sub>F</sub> &lt; R<sub>Cl</sub>; trong chu kì 3: R<sub>Cl</sub> &lt; R<sub>Na</sub> &rArr; R<sub>X</sub> &lt; R<sub>T</sub> &lt; R<sub>Y</sub>."
          ],
          [
            "d) Tính phi kim của nguyên tố T mạnh hơn tính phi kim của nguyên tố X.",
            false,
            "Trong nhóm VIIA từ F (X) xuống Cl (T), tính phi kim giảm dần nên X mạnh hơn T."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Tổng số hạt proton, neutron và electron trong nguyên tử <sup>56</sup><sub>26</sub>Fe bằng bao nhiêu?",
        "answer": "82",
        "explanation": "Tổng số hạt = Z + E + N = Z + A = 26 + 56 = 82."
      },
      {
        "question": "Nguyên tử của nguyên tố Copper (Cu, Z = 29) ở trạng thái cơ bản có bao nhiêu electron ở lớp ngoài cùng (lớp N, n = 4)?",
        "answer": "1",
        "explanation": "Do bão hòa sớm phân lớp 3d, cấu hình của Cu (Z = 29) là [Ar]3d<sup>10</sup>4s<sup>1</sup>, có 1 electron ở lớp ngoài cùng."
      },
      {
        "question": "Trong tự nhiên, nguyên tố Boron (B) có hai đồng vị là <sup>10</sup>B và <sup>11</sup>B. Biết nguyên tử khối trung bình của B là 10,81. Phần trăm số nguyên tử của đồng vị <sup>11</sup>B là bao nhiêu phần trăm?",
        "answer": "81",
        "explanation": "Gọi x là % của <sup>11</sup>B: (11x + 10(100 - x))/100 = 10,81 &rArr; x = 81%."
      },
      {
        "question": "Hợp chất khí với hydrogen của nguyên tố R có dạng RH<sub>4</sub>. Trong oxide cao nhất của R, nguyên tố R chiếm 46,67% về khối lượng. Nguyên tử khối của R bằng bao nhiêu?",
        "answer": "28",
        "explanation": "Oxide cao nhất là RO<sub>2</sub>: M<sub>R</sub> / (M<sub>R</sub> + 32) = 46,67 / 100 &rArr; M<sub>R</sub> = 28 (Silicon, Si)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Trong tự nhiên, nguyên tố đồng (Copper, Cu) có hai đồng vị bền là <sup>63</sup><sub>29</sub>Cu và <sup>65</sup><sub>29</sub>Cu. Nguyên tử khối trung bình của đồng là 63,54.<br>a) Tính thành phần phần trăm số nguyên tử của mỗi đồng vị trong tự nhiên.<br>b) Tính phần trăm khối lượng của đồng vị <sup>63</sup><sub>29</sub>Cu trong hợp chất Copper(II) oxide (CuO, với M<sub>O</sub> = 16).",
        "solution": "a) Gọi x (%) là phần trăm số nguyên tử của <sup>63</sup>Cu, suy ra % của <sup>65</sup>Cu là (100 - x)%. Ta có: (63x + 65(100 - x))/100 = 63,54 &hArr; 2x = 146 &rArr; x = 73%. Vậy <sup>63</sup>Cu chiếm 73% và <sup>65</sup>Cu chiếm 27% (0,75 điểm).<br>b) Phân tử khối trung bình của CuO là M<sub>CuO</sub> = 63,54 + 16 = 79,54. Phần trăm khối lượng của <sup>63</sup>Cu trong CuO là: %m = (63 . 0,73) / 79,54 . 100% &approx; 57,82% (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một chu kì của bảng tuần hoàn và có tổng số đơn vị điện tích hạt nhân là 25.<br>a) Xác định số hiệu nguyên tử, viết cấu hình electron và xác định vị trí của A và B trong bảng tuần hoàn.<br>b) So sánh bán kính nguyên tử, độ âm điện và tính kim loại giữa A và B.",
        "solution": "a) Giả sử Z<sub>A</sub> &lt; Z<sub>B</sub>. Vì A, B kế tiếp nhau trong một chu kì nên: {Z<sub>A</sub> + Z<sub>B</sub> = 25 ; Z<sub>B</sub> - Z<sub>A</sub> = 1} &rArr; Z<sub>A</sub> = 12 (Magnesium, Mg) và Z<sub>B</sub> = 13 (Aluminium, Al) (0,5 điểm). Cấu hình e: Mg (Z=12): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup> (Ô 12, chu kì 3, nhóm IIA); Al (Z=13): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup> (Ô 13, chu kì 3, nhóm IIIA) (0,5 điểm).<br>b) Trong cùng chu kì 3 khi đi từ Mg (Z=12) sang Al (Z=13): bán kính nguyên tử giảm (R<sub>Mg</sub> &gt; R<sub>Al</sub>), độ âm điện tăng (&chi;<sub>Mg</sub> &lt; &chi;<sub>Al</sub>), tính kim loại giảm (Mg &gt; Al) (0,5 điểm)."
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
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-ly-tu-trong-dn-2025-2026.jsp",
    "questions": [
      [
        "Thí nghiệm khám phá tia âm cực của nhà vật lí J. J. Thomson năm 1897 đã tìm ra loại hạt nào trong nguyên tử?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt alpha."
        ],
        2,
        "Năm 1897, J. J. Thomson phát hiện ra tia âm cực chính là chùm hạt electron mang điện tích âm."
      ],
      [
        "Số hiệu nguyên tử Z của một nguyên tố hóa học cho biết:",
        [
          "A. Số hạt neutron trong hạt nhân.",
          "B. Số đơn vị điện tích hạt nhân và số electron trong nguyên tử.",
          "C. Nguyên tử khối trung bình.",
          "D. Số khối A của nguyên tử."
        ],
        1,
        "Số hiệu nguyên tử Z = số đơn vị điện tích hạt nhân = số proton = số electron."
      ],
      [
        "Trong tự nhiên, hydrogen có 3 đồng vị: <sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H và oxygen có 3 đồng vị: <sup>16</sup><sub>8</sub>O, <sup>17</sup><sub>8</sub>O, <sup>18</sup><sub>8</sub>O. Số loại phân tử nước (H<sub>2</sub>O) tối đa có thể tạo thành từ các đồng vị trên là:",
        [
          "A. 9.",
          "B. 12.",
          "C. 18.",
          "D. 6."
        ],
        2,
        "Có 6 cách chọn cặp 2 nguyên tử H (gồm 3 cặp giống nhau và 3 cặp khác nhau), nhân với 3 cách chọn nguyên tử O: 6 . 3 = 18 phân tử H<sub>2</sub>O."
      ],
      [
        "Số lượng orbital nguyên tử (AO) có trong các phân lớp s, p, d, f lần lượt là:",
        [
          "A. 1, 3, 5, 7.",
          "B. 2, 6, 10, 14.",
          "C. 1, 2, 3, 4.",
          "D. 2, 4, 6, 8."
        ],
        0,
        "Số AO trong các phân lớp s, p, d, f là các số lẻ liên tiếp: 1, 3, 5, 7 (mỗi AO chứa tối đa 2e)."
      ],
      [
        "Theo nguyên lí vững bền, ở trạng thái cơ bản các electron trong nguyên tử chiếm lần lượt những orbital có mức năng lượng:",
        [
          "A. Từ cao đến thấp.",
          "B. Từ thấp đến cao.",
          "C. Bằng nhau trước.",
          "D. Bất kì không theo thứ tự."
        ],
        1,
        "Nguyên lí vững bền: electron chiếm các AO có mức năng lượng từ thấp đến cao."
      ],
      [
        "Nguyên tử của nguyên tố X có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>3</sup>4s<sup>2</sup>. Nguyên tố X thuộc họ nguyên tố nào?",
        [
          "A. Nguyên tố s.",
          "B. Nguyên tố p.",
          "C. Nguyên tố d.",
          "D. Nguyên tố f."
        ],
        2,
        "Electron cuối cùng điền vào phân lớp 3d nên X là nguyên tố d (kim loại chuyển tiếp, Z = 23)."
      ],
      [
        "Số cột (bao gồm cả 8 nhóm A và 8 nhóm B) trong bảng tuần hoàn các nguyên tố hóa học là:",
        [
          "A. 16 cột.",
          "B. 18 cột.",
          "C. 8 cột.",
          "D. 20 cột."
        ],
        1,
        "Bảng tuần hoàn có 18 cột (nhóm VIIIB chiếm 3 cột)."
      ],
      [
        "Nguyên tử của nguyên tố sulfur (Z = 16) thuộc chu kì mấy và nhóm nào trong bảng tuần hoàn?",
        [
          "A. Chu kì 3, nhóm VIA.",
          "B. Chu kì 3, nhóm IVA.",
          "C. Chu kì 2, nhóm VIA.",
          "D. Chu kì 4, nhóm VIA."
        ],
        0,
        "Cấu hình S (Z = 16): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> &rArr; chu kì 3, nhóm VIA."
      ],
      [
        "Các nguyên tố nhóm IA (trừ H) trong bảng tuần hoàn được gọi là nhóm:",
        [
          "A. Kim loại kiềm thổ.",
          "B. Kim loại kiềm.",
          "C. Halogen.",
          "D. Khí hiếm."
        ],
        1,
        "Nhóm IA (Li, Na, K, Rb, Cs, Fr) là nhóm kim loại kiềm."
      ],
      [
        "Cho các nguyên tố thuộc nhóm VIIA: <sub>9</sub>F, <sub>17</sub>Cl, <sub>35</sub>Br, <sub>53</sub>I. Nguyên tố có tính phi kim mạnh nhất là:",
        [
          "A. I.",
          "B. Br.",
          "C. Cl.",
          "D. F."
        ],
        3,
        "Trong nhóm VIIA từ trên xuống dưới tính phi kim giảm dần, nên <sub>9</sub>F có tính phi kim mạnh nhất."
      ],
      [
        "Trong các acid có công thức H<sub>2</sub>SiO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, chất có tính acid mạnh nhất là:",
        [
          "A. H<sub>2</sub>SiO<sub>3</sub>.",
          "B. H<sub>3</sub>PO<sub>4</sub>.",
          "C. H<sub>2</sub>SO<sub>4</sub>.",
          "D. HClO<sub>4</sub>."
        ],
        3,
        "Từ Si đến Cl trong chu kì 3, tính phi kim tăng dần nên tính acid của hydroxide cao nhất tăng dần: HClO<sub>4</sub> mạnh nhất."
      ],
      [
        "Định luật tuần hoàn phát biểu rằng: Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi tuần hoàn theo chiều tăng của:",
        [
          "A. Số khối hạt nhân.",
          "B. Điện tích hạt nhân nguyên tử.",
          "C. Số hạt neutron.",
          "D. Bán kính nguyên tử."
        ],
        1,
        "Biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử của nguyên tố Aluminium (Al) có kí hiệu nguyên tử là <sup>27</sup><sub>13</sub>Al:",
        "items": [
          [
            "a) Hạt nhân nguyên tử Al có 13 proton và 14 neutron.",
            true,
            "Z = 13 proton; N = 27 - 13 = 14 neutron."
          ],
          [
            "b) Cấu hình electron của nguyên tử Al là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>.",
            true,
            "13 electron phân bố vào các phân lớp: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>."
          ],
          [
            "c) Nguyên tố Al là nguyên tố s vì có electron ở phân lớp 3s<sup>2</sup>.",
            false,
            "Electron cuối cùng điền vào phân lớp 3p<sup>1</sup> nên Al là nguyên tố p."
          ],
          [
            "d) Oxide cao nhất của Al là Al<sub>2</sub>O<sub>3</sub> vừa tác dụng được với dung dịch acid mạnh vừa tác dụng được với dung dịch kiềm mạnh (chất lưỡng tính).",
            true,
            "Al<sub>2</sub>O<sub>3</sub> và Al(OH)<sub>3</sub> là các hợp chất lưỡng tính điển hình."
          ]
        ]
      },
      {
        "stem": "Xét sự biến đổi tuần hoàn tính chất của các nguyên tố thuộc chu kì 3 (từ <sub>11</sub>Na đến <sub>17</sub>Cl):",
        "items": [
          [
            "a) Tất cả các nguyên tử của các nguyên tố trong chu kì 3 đều có 3 lớp electron.",
            true,
            "Số thứ tự chu kì bằng số lớp electron (n = 3)."
          ],
          [
            "b) Hóa trị cao nhất của các nguyên tố với oxygen tăng lần lượt từ 1 đến 7.",
            true,
            "Từ nhóm IA (Na<sub>2</sub>O, hóa trị 1) đến nhóm VIIA (Cl<sub>2</sub>O<sub>7</sub>, hóa trị 7)."
          ],
          [
            "c) Bán kính nguyên tử của Chlorine (<sub>17</sub>Cl) lớn hơn bán kính nguyên tử của Sodium (<sub>11</sub>Na).",
            false,
            "Đi từ trái sang phải trong chu kì 3, bán kính nguyên tử giảm dần nên R<sub>Cl</sub> &lt; R<sub>Na</sub>."
          ],
          [
            "d) Độ âm điện của nguyên tử tăng dần từ Na đến Cl.",
            true,
            "Theo chiều tăng điện tích hạt nhân trong một chu kì, độ âm điện tăng dần."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử X có tổng số hạt mang điện (proton và electron) nhiều hơn số hạt không mang điện (neutron) là 18 hạt, và số khối A = 39. Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "19",
        "explanation": "Hệ phương trình: {Z + N = 39 ; 2Z - N = 18} &rArr; 3Z = 57 &rArr; Z = 19 (Potassium, K)."
      },
      {
        "question": "Tổng số electron thuộc các phân lớp p trong nguyên tử Chlorine (Z = 17) ở trạng thái cơ bản là bao nhiêu?",
        "answer": "11",
        "explanation": "Cấu hình Cl (Z = 17): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>. Tổng số e trên các phân lớp p là 6 + 5 = 11."
      },
      {
        "question": "Nguyên tố X thuộc chu kì 3, nhóm VIA. Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "16",
        "explanation": "Cấu hình: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> &rArr; Z = 16."
      },
      {
        "question": "Cho 4,8 gam một kim loại R thuộc nhóm IIA tác dụng hoàn toàn với dung dịch HCl dư thu được 4,958 lít khí H<sub>2</sub> (ở điều kiện chuẩn 25&deg;C, 1 bar; 1 mol khí chiếm 24,79 lít). Nguyên tử khối của kim loại R bằng bao nhiêu?",
        "answer": "24",
        "explanation": "Số mol H<sub>2</sub> = 4,958 / 24,79 = 0,2 mol. Phương trình: R + 2HCl &rarr; RCl<sub>2</sub> + H<sub>2</sub> &rArr; n<sub>R</sub> = n<sub>H2</sub> = 0,2 mol &rArr; M<sub>R</sub> = 4,8 / 0,2 = 24 (Magnesium, Mg)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố R có cấu hình electron phân lớp ngoài cùng ở trạng thái cơ bản là 3p<sup>4</sup>.<br>a) Viết cấu hình electron đầy đủ của R, xác định số hiệu nguyên tử Z và vị trí của R trong bảng tuần hoàn.<br>b) Viết công thức oxide cao nhất, công thức hợp chất khí với hydrogen và công thức hydroxide cao nhất của R. Nêu tính chất acid – base của chúng.",
        "solution": "a) Cấu hình electron đầy đủ của R: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> &rArr; Z = 16 (Sulfur, S). Vị trí: Ô số 16, chu kì 3, nhóm VIA (0,75 điểm).<br>b) Oxide cao nhất: SO<sub>3</sub> (acidic oxide); hợp chất khí với hydrogen: H<sub>2</sub>S; hydroxide cao nhất: H<sub>2</sub>SO<sub>4</sub> (acid mạnh) (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hòa tan hoàn toàn 6,2 gam hỗn hợp hai kim loại kiềm A và B kế tiếp nhau trong nhóm IA vào nước dư, sau phản ứng thu được 2,479 lít khí H<sub>2</sub> (ở đkc: 25&deg;C, 1 bar).<br>a) Xác định tên hai kim loại kiềm A và B.<br>b) Tính thành phần phần trăm theo khối lượng của mỗi kim loại trong hỗn hợp ban đầu.",
        "solution": "a) Số mol H<sub>2</sub> = 2,479 / 24,79 = 0,1 mol. Gọi <span style=\"text-decoration:overline;\">M</span> là nguyên tử khối trung bình của hai kim loại kiềm: 2<span style=\"text-decoration:overline;\">M</span> + 2H<sub>2</sub>O &rarr; 2<span style=\"text-decoration:overline;\">M</span>OH + H<sub>2</sub> &rArr; n<sub>hh</sub> = 2.n<sub>H2</sub> = 0,2 mol. Suy ra <span style=\"text-decoration:overline;\">M</span> = 6,2 / 0,2 = 31 (g/mol). Vì A, B kế tiếp nhau trong nhóm IA nên A là Sodium (Na = 23) và B là Potassium (K = 39) (1,0 điểm).<br>b) Gọi x, y là số mol Na và K: {x + y = 0,2 ; 23x + 39y = 6,2} &rArr; x = 0,1 mol; y = 0,1 mol. Phần trăm khối lượng: %m<sub>Na</sub> = (0,1.23 / 6,2).100% &approx; 37,10%; %m<sub>K</sub> &approx; 62,90% (0,5 điểm)."
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
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-nguyen-trai-dn-2025-2026.jsp",
    "questions": [
      [
        "Khối lượng của 1 hạt proton xấp xỉ bằng bao nhiêu đơn vị khối lượng nguyên tử (amu)?",
        [
          "A. 0,00055 amu.",
          "B. 1 amu.",
          "C. 2 amu.",
          "D. 12 amu."
        ],
        1,
        "Khối lượng của 1 proton và 1 neutron đều xấp xỉ bằng 1 amu (1 u)."
      ],
      [
        "Nguyên tử <sup>31</sup><sub>15</sub>P có số hạt proton, neutron, electron lần lượt là:",
        [
          "A. 15, 16, 15.",
          "B. 15, 15, 16.",
          "C. 16, 15, 15.",
          "D. 15, 31, 15."
        ],
        0,
        "Z = P = E = 15; N = A - Z = 31 - 15 = 16."
      ],
      [
        "Theo nguyên lí Pauli, trên một orbital nguyên tử (AO) có thể chứa tối đa bao nhiêu electron và chiều tự quay của chúng như thế nào?",
        [
          "A. Tối đa 2 electron có chiều tự quay cùng chiều.",
          "B. Tối đa 2 electron có chiều tự quay ngược nhau.",
          "C. Tối đa 6 electron.",
          "D. Tối đa 1 electron."
        ],
        1,
        "Mỗi AO chứa tối đa 2 electron với chiều tự quay (spin) ngược nhau (1 ô lượng tử tối đa 2 mũi tên ngược chiều)."
      ],
      [
        "Số electron tối đa trong lớp thứ 2 (lớp L, ứng với n = 2) là:",
        [
          "A. 2.",
          "B. 8.",
          "C. 18.",
          "D. 32."
        ],
        1,
        "Số e tối đa trong lớp thứ n là 2n<sup>2</sup> = 2 . 2<sup>2</sup> = 8 electron."
      ],
      [
        "Cấu hình electron nào sau đây là của nguyên tử Fluorine (Z = 9)?",
        [
          "A. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>.",
          "B. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>.",
          "D. 1s<sup>2</sup>2s<sup>1</sup>2p<sup>6</sup>."
        ],
        0,
        "Với Z = 9, cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup>."
      ],
      [
        "Các nguyên tố thuộc nhóm IIA trong bảng tuần hoàn có số electron lớp ngoài cùng là:",
        [
          "A. 1.",
          "B. 2.",
          "C. 3.",
          "D. 4."
        ],
        1,
        "Nhóm IIA (kim loại kiềm thổ) có cấu hình lớp ngoài cùng dạng ns<sup>2</sup> (2 electron)."
      ],
      [
        "Số chu kì nhỏ và số chu kì lớn trong bảng tuần hoàn hiện đại lần lượt là:",
        [
          "A. 3 chu kì nhỏ và 4 chu kì lớn.",
          "B. 4 chu kì nhỏ và 3 chu kì lớn.",
          "C. 2 chu kì nhỏ và 5 chu kì lớn.",
          "D. 3 chu kì nhỏ và 3 chu kì lớn."
        ],
        0,
        "Chu kì 1, 2, 3 là 3 chu kì nhỏ; chu kì 4, 5, 6, 7 là 4 chu kì lớn."
      ],
      [
        "Nguyên tố X có Z = 15. Công thức hợp chất khí của X với hydrogen là:",
        [
          "A. XH<sub>5</sub>.",
          "B. XH<sub>3</sub>.",
          "C. XH<sub>4</sub>.",
          "D. H<sub>2</sub>X."
        ],
        1,
        "X (Z = 15, P) thuộc nhóm VA &rArr; hóa trị với H là 8 - 5 = 3 &rArr; công thức là XH<sub>3</sub> (PH<sub>3</sub>)."
      ],
      [
        "Cho các nguyên tố nhóm IA: <sub>3</sub>Li, <sub>11</sub>Na, <sub>19</sub>K, <sub>37</sub>Rb. Nguyên tố có tính kim loại mạnh nhất là:",
        [
          "A. Li.",
          "B. Na.",
          "C. K.",
          "D. Rb."
        ],
        3,
        "Trong nhóm IA từ trên xuống dưới, tính kim loại tăng dần nên <sub>37</sub>Rb mạnh nhất."
      ],
      [
        "Oxide cao nhất của một nguyên tố X có công thức XO<sub>2</sub>. Nguyên tố X thuộc nhóm nào?",
        [
          "A. Nhóm IIA.",
          "B. Nhóm IVA.",
          "C. Nhóm VIA.",
          "D. Nhóm VIIA."
        ],
        1,
        "Trong XO<sub>2</sub>, X có hóa trị cao nhất với O bằng 4 nên X thuộc nhóm IVA."
      ],
      [
        "Độ âm điện của một nguyên tử đặc trưng cho:",
        [
          "A. Khả năng nhường electron của nguyên tử đó.",
          "B. Khả năng hút cặp electron liên kết về phía mình khi tạo thành liên kết hóa học.",
          "C. Kích thước của hạt nhân nguyên tử.",
          "D. Khối lượng của nguyên tử."
        ],
        1,
        "Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học."
      ],
      [
        "Cấu hình electron của ion Na<sup>+</sup> (biết Na có Z = 11) giống với cấu hình electron của khí hiếm nào?",
        [
          "A. <sub>2</sub>He.",
          "B. <sub>10</sub>Ne.",
          "C. <sub>18</sub>Ar.",
          "D. <sub>36</sub>Kr."
        ],
        1,
        "Na (Z = 11) nhường 1e tạo Na<sup>+</sup> có 10e (1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>), giống cấu hình của <sub>10</sub>Ne."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tố X có số hiệu nguyên tử Z = 15 (Phosphorus):",
        "items": [
          [
            "a) Cấu hình electron của nguyên tử X là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>.",
            true,
            "15 electron điền vào các phân lớp đến 3p<sup>3</sup>."
          ],
          [
            "b) Nguyên tố X thuộc chu kì 3, nhóm VA trong bảng tuần hoàn.",
            true,
            "Có 3 lớp e (chu kì 3) và 5e lớp ngoài cùng (nhóm VA)."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử X có 1 electron độc thân.",
            false,
            "Phân lớp 3p<sup>3</sup> có 3 orbital, mỗi orbital có 1e độc thân theo quy tắc Hund &rArr; có 3e độc thân."
          ],
          [
            "d) Oxide cao nhất của X là P<sub>2</sub>O<sub>5</sub> và hydroxide cao nhất là H<sub>3</sub>PO<sub>4</sub>.",
            true,
            "Ở nhóm VA, P có oxide cao nhất là P<sub>2</sub>O<sub>5</sub> và hydroxide cao nhất là H<sub>3</sub>PO<sub>4</sub>."
          ]
        ]
      },
      {
        "stem": "Cho các nguyên tố: <sub>8</sub>O, <sub>9</sub>F, <sub>11</sub>Na, <sub>12</sub>Mg.",
        "items": [
          [
            "a) Hai nguyên tố O và F thuộc chu kì 2; hai nguyên tố Na và Mg thuộc chu kì 3.",
            true,
            "O (2s<sup>2</sup>2p<sup>4</sup>) và F (2s<sup>2</sup>2p<sup>5</sup>) ở chu kì 2; Na (3s<sup>1</sup>) và Mg (3s<sup>2</sup>) ở chu kì 3."
          ],
          [
            "b) Trong bốn nguyên tố trên, nguyên tố có độ âm điện lớn nhất là F.",
            true,
            "Fluorine có độ âm điện lớn nhất trong toàn bảng tuần hoàn."
          ],
          [
            "c) Bán kính nguyên tử của Mg lớn hơn bán kính nguyên tử của Na.",
            false,
            "Cùng chu kì 3, Na (Z = 11) đứng trước Mg (Z = 12) nên R<sub>Na</sub> &gt; R<sub>Mg</sub>."
          ],
          [
            "d) Tính base của NaOH mạnh hơn tính base của Mg(OH)<sub>2</sub>.",
            true,
            "Vì tính kim loại của Na mạnh hơn Mg nên tính base của NaOH &gt; Mg(OH)<sub>2</sub>."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Hạt nhân nguyên tử <sup>235</sup><sub>92</sub>U có số hạt neutron nhiều hơn số hạt proton là bao nhiêu hạt?",
        "answer": "51",
        "explanation": "Số proton Z = 92; số neutron N = 235 - 92 = 143. Hiệu N - Z = 143 - 92 = 51 hạt."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Chromium (Cr, Z = 24) có tổng cộng bao nhiêu electron độc thân?",
        "answer": "6",
        "explanation": "Cấu hình bền của Cr (Z = 24) là [Ar]3d<sup>5</sup>4s<sup>1</sup>: có 5e độc thân trên 3d và 1e độc thân trên 4s, tổng cộng là 6 electron độc thân."
      },
      {
        "question": "Một nguyên tố R thuộc nhóm VIIA. Trong công thức oxide cao nhất R<sub>2</sub>O<sub>7</sub>, nguyên tố oxygen chiếm 61,20% về khối lượng. Nguyên tử khối của R bằng bao nhiêu (làm tròn đến hàng phần mười)?",
        "answer": "35,5",
        "explanation": "%O = 112 / (2M<sub>R</sub> + 112) . 100% = 61,20% &rArr; 2M<sub>R</sub> + 112 &approx; 183 &rArr; M<sub>R</sub> = 35,5 (Chlorine)."
      },
      {
        "question": "Cho 7,8 gam kim loại Potassium (K = 39) tác dụng hết với nước dư thu được V lít khí H<sub>2</sub> (ở đkc: 24,79 lít/mol). Giá trị của V là bao nhiêu lít (làm tròn đến hàng phần trăm)?",
        "answer": "2,48",
        "explanation": "n<sub>K</sub> = 7,8 / 39 = 0,2 mol &rArr; n<sub>H2</sub> = 0,1 mol &rArr; V = 0,1 . 24,79 = 2,479 &approx; 2,48 lít."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố X có tổng số electron trên các phân lớp p là 11.<br>a) Viết cấu hình electron của nguyên tử X và xác định số hiệu nguyên tử Z.<br>b) Xác định vị trí của X trong bảng tuần hoàn, cho biết tính chất hóa học cơ bản (kim loại hay phi kim) và viết công thức oxide cao nhất, hydroxide cao nhất của X.",
        "solution": "a) Vì tổng số e trên các phân lớp p là 11 nên phân lớp 2p có 6e và phân lớp 3p có 5e. Cấu hình electron của X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup> &rArr; Z = 17 (Chlorine, Cl) (0,75 điểm).<br>b) Vị trí: Ô 17, chu kì 3, nhóm VIIA. X có 7e lớp ngoài cùng nên là phi kim mạnh. Oxide cao nhất: Cl<sub>2</sub>O<sub>7</sub>; hydroxide cao nhất: HClO<sub>4</sub> (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Oxide cao nhất của một nguyên tố R có dạng RO<sub>3</sub>. Trong hợp chất khí của R với hydrogen, nguyên tố hydrogen chiếm 5,88% về khối lượng.<br>a) Xác định nguyên tử khối và tên nguyên tố R.<br>b) So sánh tính phi kim của R với nguyên tố Oxygen (Z = 8) và Chlorine (Z = 17).",
        "solution": "a) Vì oxide cao nhất là RO<sub>3</sub> nên R thuộc nhóm VIA, công thức hợp chất khí với H là H<sub>2</sub>R. Ta có: %H = 2 / (M<sub>R</sub> + 2) . 100% = 5,88% &rArr; M<sub>R</sub> + 2 = 34 &rArr; M<sub>R</sub> = 32 (Sulfur, S, Z = 16) (1,0 điểm).<br>b) S (Z = 16) ở chu kì 3, nhóm VIA: đứng dưới O (Z = 8, nhóm VIA) nên tính phi kim S &lt; O; đứng trước Cl (Z = 17, chu kì 3) nên tính phi kim S &lt; Cl (0,5 điểm)."
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
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-hung-vuong-qn-2024-2025.jsp",
    "questions": [
      [
        "Đường kính của nguyên tử lớn gấp khoảng bao nhiêu lần đường kính của hạt nhân nguyên tử?",
        [
          "A. Khoảng 10 lần.",
          "B. Khoảng 100 lần.",
          "C. Khoảng 10 000 đến 100 000 lần (10<sup>4</sup> – 10<sup>5</sup> lần).",
          "D. Bằng nhau."
        ],
        2,
        "Đường kính nguyên tử (~10<sup>-10</sup> m) lớn gấp khoảng 10<sup>4</sup> đến 10<sup>5</sup> lần đường kính hạt nhân (~10<sup>-14</sup> đến 10<sup>-15</sup> m)."
      ],
      [
        "Kí hiệu nào sau đây chỉ một orbital nguyên tử có dạng hình cầu?",
        [
          "A. AO s.",
          "B. AO p<sub>x</sub>.",
          "C. AO p<sub>y</sub>.",
          "D. AO d."
        ],
        0,
        "Các orbital s (1s, 2s, 3s...) luôn có dạng hình cầu."
      ],
      [
        "Nguyên tử của nguyên tố X có 19 electron. Ở trạng thái cơ bản, số lớp electron của nguyên tử X là:",
        [
          "A. 2.",
          "B. 3.",
          "C. 4.",
          "D. 5."
        ],
        2,
        "Cấu hình Z = 19: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>, có 4 lớp electron."
      ],
      [
        "Quy tắc Hund phát biểu rằng: Trong cùng một phân lớp chưa bão hòa, các electron sẽ phân bố vào các orbital sao cho:",
        [
          "A. Số electron ghép đôi là tối đa.",
          "B. Số electron độc thân là tối đa và các electron này có chiều tự quay giống nhau.",
          "C. Chỉ điền vào 1 orbital duy nhất.",
          "D. Các electron có chiều tự quay ngược nhau."
        ],
        1,
        "Quy tắc Hund: electron phân bố sao cho số electron độc thân là tối đa và có spin cùng chiều."
      ],
      [
        "Nguyên tố X ở chu kì 4, nhóm VIIIA (khí hiếm Kr) hoặc xét nguyên tố Ca (chu kì 4, nhóm IIA) có số hiệu nguyên tử là 20. Số hiệu nguyên tử của nguyên tố ở chu kì 3, nhóm IIIA là:",
        [
          "A. 11.",
          "B. 12.",
          "C. 13.",
          "D. 14."
        ],
        2,
        "Chu kì 3, nhóm IIIA có cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup> &rArr; Z = 13 (Al)."
      ],
      [
        "Các nguyên tố nhóm B trong bảng tuần hoàn đều là:",
        [
          "A. Nguyên tố phi kim.",
          "B. Nguyên tố khí hiếm.",
          "C. Nguyên tố kim loại (các nguyên tố d và f).",
          "D. Nguyên tố s và p."
        ],
        2,
        "Tất cả các nguyên tố nhóm B (nguyên tố d và f) đều là kim loại chuyển tiếp."
      ],
      [
        "Cho các nguyên tố: <sub>6</sub>C, <sub>7</sub>N, <sub>8</sub>O, <sub>9</sub>F. Thứ tự tăng dần độ âm điện là:",
        [
          "A. C &lt; N &lt; O &lt; F.",
          "B. F &lt; O &lt; N &lt; C.",
          "C. C &lt; O &lt; N &lt; F.",
          "D. N &lt; C &lt; O &lt; F."
        ],
        0,
        "Cùng chu kì 2 từ trái sang phải (Z = 6 đến Z = 9), độ âm điện tăng dần: C &lt; N &lt; O &lt; F."
      ],
      [
        "Nguyên tố R có cấu hình electron lớp ngoài cùng là ns<sup>2</sup>np<sup>2</sup>. Công thức oxide cao nhất của R là:",
        [
          "A. R<sub>2</sub>O.",
          "B. RO.",
          "C. RO<sub>2</sub>.",
          "D. R<sub>2</sub>O<sub>3</sub>."
        ],
        2,
        "R có 4e lớp ngoài cùng (nhóm IVA), hóa trị cao nhất với O là 4 &rArr; công thức oxide cao nhất là RO<sub>2</sub>."
      ],
      [
        "Hydroxide nào sau đây có tính chất lưỡng tính?",
        [
          "A. NaOH.",
          "B. Mg(OH)<sub>2</sub>.",
          "C. Al(OH)<sub>3</sub>.",
          "D. H<sub>2</sub>SO<sub>4</sub>."
        ],
        2,
        "Al(OH)<sub>3</sub> là hydroxide lưỡng tính."
      ],
      [
        "Nguyên tử của nguyên tố nào sau đây có xu hướng nhường đi 1 electron để đạt cấu hình bền của khí hiếm khi tham gia phản ứng?",
        [
          "A. <sub>11</sub>Na.",
          "B. <sub>12</sub>Mg.",
          "C. <sub>17</sub>Cl.",
          "D. <sub>8</sub>O."
        ],
        0,
        "<sub>11</sub>Na ([Ne]3s<sup>1</sup>) có 1e lớp ngoài cùng nên dễ nhường 1e tạo ion Na<sup>+</sup>."
      ],
      [
        "Trong một nhóm A, khi đi từ trên xuống dưới theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử:",
        [
          "A. Tăng dần do số lớp electron tăng lên.",
          "B. Giảm dần do lực hút hạt nhân tăng.",
          "C. Không thay đổi.",
          "D. Tăng rồi giảm."
        ],
        0,
        "Đi từ trên xuống dưới trong một nhóm A, số lớp electron tăng lên nên bán kính nguyên tử tăng dần."
      ],
      [
        "Cặp nguyên tử nào sau đây thuộc cùng một nguyên tố hóa học?",
        [
          "A. <sup>14</sup><sub>6</sub>C và <sup>14</sup><sub>7</sub>N.",
          "B. <sup>16</sup><sub>8</sub>O và <sup>18</sup><sub>8</sub>O.",
          "C. <sup>40</sup><sub>18</sub>Ar và <sup>40</sup><sub>20</sub>Ca.",
          "D. <sup>23</sup><sub>11</sub>Na và <sup>24</sup><sub>12</sub>Mg."
        ],
        1,
        "<sup>16</sup><sub>8</sub>O và <sup>18</sup><sub>8</sub>O có cùng Z = 8 nên thuộc cùng nguyên tố oxygen."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tố Magnesium (Mg, Z = 12) và nguyên tố Chlorine (Cl, Z = 17):",
        "items": [
          [
            "a) Ở trạng thái cơ bản, nguyên tử Mg có 2 electron lớp ngoài cùng và nguyên tử Cl có 7 electron lớp ngoài cùng.",
            true,
            "Mg ([Ne]3s<sup>2</sup>) có 2e lớp ngoài cùng; Cl ([Ne]3s<sup>2</sup>3p<sup>5</sup>) có 7e lớp ngoài cùng."
          ],
          [
            "b) Mg và Cl đều thuộc chu kì 3 trong bảng tuần hoàn.",
            true,
            "Cả hai nguyên tử đều có 3 lớp electron."
          ],
          [
            "c) Bán kính nguyên tử của Mg nhỏ hơn bán kính nguyên tử của Cl.",
            false,
            "Trong cùng chu kì 3, Z<sub>Mg</sub> &lt; Z<sub>Cl</sub> nên R<sub>Mg</sub> &gt; R<sub>Cl</sub>."
          ],
          [
            "d) Oxide cao nhất của Mg là MgO (basic oxide) còn oxide cao nhất của Cl là Cl<sub>2</sub>O<sub>7</sub> (acidic oxide).",
            true,
            "MgO là oxide base, Cl<sub>2</sub>O<sub>7</sub> là oxide acid."
          ]
        ]
      },
      {
        "stem": "Trong tự nhiên, nguyên tố Bromine (Br, Z = 35) có hai đồng vị bền là <sup>79</sup><sub>35</sub>Br và <sup>81</sup><sub>35</sub>Br. Biết nguyên tử khối trung bình của Bromine là 79,91.",
        "items": [
          [
            "a) Số hạt neutron trong đồng vị <sup>79</sup><sub>35</sub>Br là 44 và trong đồng vị <sup>81</sup><sub>35</sub>Br là 46.",
            true,
            "N<sub>1</sub> = 79 - 35 = 44; N<sub>2</sub> = 81 - 35 = 46."
          ],
          [
            "b) Phần trăm số nguyên tử của đồng vị <sup>79</sup><sub>35</sub>Br là 54,5%.",
            true,
            "(79x + 81(100 - x))/100 = 79,91 &hArr; 2x = 109 &rArr; x = 54,5%."
          ],
          [
            "c) Phần trăm số nguyên tử của đồng vị <sup>81</sup><sub>35</sub>Br là 45,5%.",
            true,
            "Tổng phần trăm của tất cả các đồng vị trong tự nhiên bằng 100%. Vì Bromine chỉ có hai đồng vị bền là ⁷⁹Br (chiếm 54,5%) và ⁸¹Br nên phần trăm của ⁸¹Br là: 100% - 54,5% = 45,5%. Khẳng định này là ĐÚNG."
          ],
          [
            "d) Trong 1000 nguyên tử Bromine tự nhiên thì có khoảng 455 nguyên tử <sup>79</sup><sub>35</sub>Br.",
            false,
            "Trong 1000 nguyên tử có khoảng 545 nguyên tử <sup>79</sup><sub>35</sub>Br và 455 nguyên tử <sup>81</sup><sub>35</sub>Br."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử X có tổng số hạt cơ bản là 40, trong đó số hạt không mang điện nhiều hơn số hạt mang điện dương là 1 hạt. Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "13",
        "explanation": "Hệ phương trình: {2Z + N = 40 ; N - Z = 1} &rArr; 3Z = 39 &rArr; Z = 13 (Aluminium)."
      },
      {
        "question": "Nguyên tử Silicon (Z = 14) ở trạng thái cơ bản có bao nhiêu electron ở lớp ngoài cùng?",
        "answer": "4",
        "explanation": "Cấu hình Si (Z = 14): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup> &rArr; lớp ngoài cùng (n = 3) có 2 + 2 = 4 electron."
      },
      {
        "question": "Cho 6,0 gam một kim loại kiềm thổ M (nhóm IIA) tác dụng hoàn toàn với nước hoặc dung dịch acid HCl dư thu được 3,7185 lít khí H<sub>2</sub> (đkc: 24,79 lít/mol). Nguyên tử khối của M bằng bao nhiêu?",
        "answer": "40",
        "explanation": "n<sub>H2</sub> = 3,7185 / 24,79 = 0,15 mol &rArr; n<sub>M</sub> = 0,15 mol &rArr; M = 6,0 / 0,15 = 40 (Calcium, Ca)."
      },
      {
        "question": "Trong phân tử oxide cao nhất R<sub>2</sub>O<sub>7</sub> của nguyên tố R (nhóm VIIA), R chiếm 38,8% về khối lượng. Nguyên tử khối của R bằng bao nhiêu?",
        "answer": "35,5",
        "explanation": "2M<sub>R</sub> / (2M<sub>R</sub> + 112) = 0,388 &rArr; M<sub>R</sub> = 35,5 (Chlorine)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố X có cấu hình electron kết thúc ở phân lớp 3d<sup>6</sup>.<br>a) Viết cấu hình electron đầy đủ của nguyên tử X và xác định số hiệu nguyên tử Z.<br>b) Xác định vị trí (ô, chu kì, nhóm) của X trong bảng tuần hoàn và số electron độc thân của nguyên tử X ở trạng thái cơ bản.",
        "solution": "a) Để điền đến 3d<sup>6</sup> thì phân lớp 4s đã bão hòa (4s<sup>2</sup>). Cấu hình electron của X: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>6</sup>4s<sup>2</sup> &rArr; Z = 26 (Iron, Fe) (0,75 điểm).<br>b) Vị trí: Ô số 26, chu kì 4 (4 lớp e), nhóm VIIIB (vì tổng số e trên 3d<sup>6</sup>4s<sup>2</sup> là 8e). Phân lớp 3d<sup>6</sup> có 5 orbital với 6e nên có 1 cặp ghép đôi và 4 electron độc thân (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Cho ba nguyên tố: <sub>14</sub>Si, <sub>15</sub>P, <sub>16</sub>S.<br>a) Xác định vị trí của 3 nguyên tố trong bảng tuần hoàn và sắp xếp theo chiều tăng dần tính phi kim. Giải thích.<br>b) Viết công thức các hydroxide ứng với hóa trị cao nhất của 3 nguyên tố và sắp xếp theo chiều tăng dần tính acid.",
        "solution": "a) Cả 3 nguyên tố đều thuộc chu kì 3 (Si nhóm IVA, P nhóm VA, S nhóm VIA). Đi từ trái sang phải trong chu kì 3, điện tích hạt nhân tăng, bán kính giảm nên tính phi kim tăng dần: Si &lt; P &lt; S (0,75 điểm).<br>b) Hydroxide cao nhất: H<sub>2</sub>SiO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub>. Chiều tăng dần tính acid: H<sub>2</sub>SiO<sub>3</sub> &lt; H<sub>3</sub>PO<sub>4</sub> &lt; H<sub>2</sub>SO<sub>4</sub> (0,75 điểm)."
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
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-ho-nghinh-qn-2024-2025.jsp",
    "questions": [
      [
        "Hạt nhân của nguyên tử <sup>40</sup><sub>20</sub>Ca có bao nhiêu hạt mang điện?",
        [
          "A. 20.",
          "B. 40.",
          "C. 60.",
          "D. 0."
        ],
        0,
        "Trong hạt nhân chỉ có proton mang điện, nên số hạt mang điện trong hạt nhân là Z = 20."
      ],
      [
        "Số khối A của hạt nhân nguyên tử bằng:",
        [
          "A. Tổng số hạt proton và số hạt electron.",
          "B. Tổng số hạt proton và số hạt neutron (A = Z + N).",
          "C. Tổng số hạt proton, neutron và electron.",
          "D. Hiệu số giữa neutron và proton."
        ],
        1,
        "Theo định nghĩa số khối trong SGK Hóa học 10: Hạt nhân nguyên tử được tạo thành từ proton và neutron. Số khối kí hiệu là A, bằng tổng số hạt proton (Z) và số hạt neutron (N): A = Z + N. Do đó chọn đáp án B."
      ],
      [
        "Các electron thuộc lớp nào sau đây liên kết chặt chẽ nhất với hạt nhân nguyên tử?",
        [
          "A. Lớp K (n = 1).",
          "B. Lớp L (n = 2).",
          "C. Lớp M (n = 3).",
          "D. Lớp N (n = 4)."
        ],
        0,
        "Lớp K (n = 1) ở gần hạt nhân nhất, có mức năng lượng thấp nhất nên liên kết chặt chẽ nhất với hạt nhân."
      ],
      [
        "Phân lớp 3d chứa tối đa bao nhiêu electron?",
        [
          "A. 2.",
          "B. 6.",
          "C. 10.",
          "D. 14."
        ],
        2,
        "Mọi phân lớp d đều có 5 AO và chứa tối đa 10 electron."
      ],
      [
        "Nguyên tử có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup> là nguyên tử của nguyên tố nào?",
        [
          "A. <sub>11</sub>Na.",
          "B. <sub>12</sub>Mg.",
          "C. <sub>13</sub>Al.",
          "D. <sub>14</sub>Si."
        ],
        2,
        "Tổng số e = 2 + 2 + 6 + 2 + 1 = 13 &rArr; <sub>13</sub>Al."
      ],
      [
        "Số thứ tự của nhóm A trong bảng tuần hoàn bằng:",
        [
          "A. Số lớp electron.",
          "B. Số electron ở lớp ngoài cùng (số electron hóa trị).",
          "C. Số hạt neutron.",
          "D. Tổng số electron của nguyên tử."
        ],
        1,
        "Đối với nguyên tố nhóm A, số thứ tự nhóm A bằng số electron lớp ngoài cùng."
      ],
      [
        "Các nguyên tố thuộc cùng một chu kì trong bảng tuần hoàn có cùng:",
        [
          "A. Số electron hóa trị.",
          "B. Số lớp electron trong nguyên tử.",
          "C. Số hạt proton.",
          "D. Tính chất hóa học hoàn toàn giống nhau."
        ],
        1,
        "Các nguyên tố cùng chu kì có cùng số lớp electron."
      ],
      [
        "Nguyên tố R thuộc nhóm VA. Hóa trị cao nhất của R trong hợp chất với oxygen và hóa trị của R trong hợp chất khí với hydrogen lần lượt là:",
        [
          "A. 5 và 3.",
          "B. 3 và 5.",
          "C. 5 và 5.",
          "D. 3 và 3."
        ],
        0,
        "Nhóm VA có hóa trị cao nhất với O bằng 5, hóa trị với H bằng 8 - 5 = 3."
      ],
      [
        "Cho các nguyên tố: <sub>11</sub>Na, <sub>12</sub>Mg, <sub>19</sub>K. Thứ tự tăng dần bán kính nguyên tử là:",
        [
          "A. Mg &lt; Na &lt; K.",
          "B. K &lt; Na &lt; Mg.",
          "C. Na &lt; Mg &lt; K.",
          "D. Mg &lt; K &lt; Na."
        ],
        0,
        "Cùng chu kì 3: R<sub>Mg</sub> &lt; R<sub>Na</sub>; cùng nhóm IA: R<sub>Na</sub> &lt; R<sub>K</sub> &rArr; Mg &lt; Na &lt; K."
      ],
      [
        "Oxide nào sau đây là acidic oxide (oxide acid)?",
        [
          "A. Na<sub>2</sub>O.",
          "B. MgO.",
          "C. CaO.",
          "D. SO<sub>3</sub>."
        ],
        3,
        "SO<sub>3</sub> là oxide của phi kim ứng với hóa trị VI, là acidic oxide (tác dụng với nước tạo H<sub>2</sub>SO<sub>4</sub>)."
      ],
      [
        "Ở trạng thái cơ bản, cấu hình electron của nguyên tử Potassium (K, Z = 19) là:",
        [
          "A. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>1</sup>.",
          "B. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>7</sup>.",
          "D. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>4s<sup>2</sup>."
        ],
        1,
        "Vì mức năng lượng 4s thấp hơn 3d nên electron thứ 19 điền vào 4s<sup>1</sup>."
      ],
      [
        "Nhóm nguyên tố nào sau đây chỉ gồm các nguyên tố kim loại kiềm thổ (nhóm IIA)?",
        [
          "A. Li, Na, K.",
          "B. Be, Mg, Ca, Ba.",
          "C. F, Cl, Br, I.",
          "D. He, Ne, Ar."
        ],
        1,
        "Be, Mg, Ca, Sr, Ba, Ra là các kim loại kiềm thổ thuộc nhóm IIA."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử của nguyên tố X có tổng số hạt cơ bản (p, n, e) là 52, trong đó số hạt không mang điện nhiều hơn số hạt mang điện âm là 1 hạt:",
        "items": [
          [
            "a) Số hiệu nguyên tử của X là Z = 17.",
            true,
            "Giải hệ {2Z + N = 52 ; N - Z = 1} &rArr; 3Z = 51 &rArr; Z = 17, N = 18."
          ],
          [
            "b) Kí hiệu nguyên tử của X là <sup>35</sup><sub>17</sub>Cl.",
            true,
            "A = 17 + 18 = 35 &rArr; <sup>35</sup><sub>17</sub>Cl."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử X có 3 electron độc thân.",
            false,
            "Cấu hình Cl: [Ne]3s<sup>2</sup>3p<sup>5</sup>, chỉ có 1 electron độc thân ở phân lớp 3p."
          ],
          [
            "d) Hợp chất khí với hydrogen của X khi tan trong nước tạo thành dung dịch acid mạnh.",
            true,
            "Khí HCl tan trong nước tạo thành dung dịch hydrochloric acid (HCl) là một acid mạnh."
          ]
        ]
      },
      {
        "stem": "Xét các nguyên tố thuộc nhóm IA (Li, Na, K, Rb, Cs) trong bảng tuần hoàn:",
        "items": [
          [
            "a) Nguyên tử của các nguyên tố nhóm IA đều có 1 electron ở lớp ngoài cùng (cấu hình ns<sup>1</sup>).",
            true,
            "Tất cả kim loại kiềm nhóm IA đều có cấu hình ngoài cùng ns<sup>1</sup>."
          ],
          [
            "b) Khi đi từ Li đến Cs, bán kính nguyên tử giảm dần.",
            false,
            "Đi từ trên xuống dưới trong nhóm IA, số lớp e tăng nên bán kính nguyên tử tăng dần."
          ],
          [
            "c) Các kim loại nhóm IA đều tác dụng mạnh với nước ở điều kiện thường tạo dung dịch kiềm và giải phóng khí H<sub>2</sub>.",
            true,
            "2M + 2H<sub>2</sub>O &rarr; 2MOH + H<sub>2</sub>&uarr;."
          ],
          [
            "d) Độ âm điện giảm dần từ Li đến Cs.",
            true,
            "Trong một nhóm A từ trên xuống dưới, độ âm điện giảm dần."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Tổng số hạt mang điện trong ion Mg<sup>2+</sup> (biết Mg có Z = 12) bằng bao nhiêu?",
        "answer": "22",
        "explanation": "Nguyên tử Mg có 12p và 12e; khi nhường 2e tạo ion Mg<sup>2+</sup> thì còn 12p và 10e &rArr; tổng hạt mang điện = 12 + 10 = 22."
      },
      {
        "question": "Nguyên tử của nguyên tố X có cấu hình electron [Ar]3d<sup>10</sup>4s<sup>2</sup>. Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "30",
        "explanation": "Cấu hình electron đầy đủ của X là 1s²2s²2p⁶3s²3p⁶3d¹⁰4s². Tổng số electron là Z = 18 + 10 + 2 = 30. Đây là nguyên tố Zinc (Kẽm, Zn ở ô 30, chu kì 4, nhóm IIB).",
        "explain": "Cấu hình electron đầy đủ của X là 1s²2s²2p⁶3s²3p⁶3d¹⁰4s². Tổng số electron là Z = 18 + 10 + 2 = 30. Đây là nguyên tố Zinc (Kẽm, Zn ở ô 30, chu kì 4, nhóm IIB)."
      },
      {
        "question": "Trong tự nhiên, nguyên tố Neon (Ne) có 3 đồng vị: <sup>20</sup>Ne (90,9%), <sup>21</sup>Ne (0,3%) và <sup>22</sup>Ne (8,8%). Nguyên tử khối trung bình của Neon bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "20,18",
        "explanation": "<span style=\"text-decoration:overline;\">A</span> = (20.90,9 + 21.0,3 + 22.8,8)/100 = 20,179 &approx; 20,18."
      },
      {
        "question": "Cho 10,8 gam kim loại R thuộc nhóm IIIA tác dụng hoàn toàn với khí oxygen dư tạo thành 20,4 gam oxide R<sub>2</sub>O<sub>3</sub>. Nguyên tử khối của R bằng bao nhiêu?",
        "answer": "27",
        "explanation": "Theo bảo toàn khối lượng: m<sub>O2</sub> = 20,4 - 10,8 = 9,6 g &rArr; n<sub>O</sub> = 9,6 / 16 = 0,6 mol. Trong R<sub>2</sub>O<sub>3</sub>: n<sub>R</sub> = 2/3 . n<sub>O</sub> = 0,4 mol &rArr; M<sub>R</sub> = 10,8 / 0,4 = 27 (Aluminium, Al)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tố X thuộc chu kì 3, nhóm IIA; nguyên tố Y thuộc chu kì 2, nhóm VIA.<br>a) Viết cấu hình electron và xác định tên hai nguyên tố X, Y.<br>b) Giải thích sự khác biệt về tính chất kim loại – phi kim của X và Y dựa trên cấu hình electron lớp ngoài cùng.",
        "solution": "a) X (chu kì 3, nhóm IIA): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup> (Z = 12, Magnesium - Mg). Y (chu kì 2, nhóm VIA): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup> (Z = 8, Oxygen - O) (0,75 điểm).<br>b) Mg có 2e lớp ngoài cùng nên dễ nhường 2e, thể hiện tính kim loại điển hình; O có 6e lớp ngoài cùng và bán kính nhỏ nên dễ nhận thêm 2e, thể hiện tính phi kim mạnh (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hòa tan hoàn toàn 8,8 gam hỗn hợp hai kim loại kiềm thổ (nhóm IIA) thuộc hai chu kì liên tiếp vào dung dịch HCl dư, thu được 7,437 lít khí H<sub>2</sub> (ở đkc: 24,79 lít/mol).<br>a) Xác định tên hai kim loại kiềm thổ.<br>b) Tính số mol của mỗi kim loại trong hỗn hợp.",
        "solution": "a) Số mol H<sub>2</sub> = 7,437 / 24,79 = 0,3 mol. Phương trình chung: <span style=\"text-decoration:overline;\">M</span> + 2HCl &rarr; <span style=\"text-decoration:overline;\">M</span>Cl<sub>2</sub> + H<sub>2</sub> &rArr; n<sub>hh</sub> = n<sub>H2</sub> = 0,3 mol. Suy ra <span style=\"text-decoration:overline;\">M</span> = 8,8 / 0,3 &approx; 29,33 (g/mol). Hai kim loại nhóm IIA ở hai chu kì liên tiếp có M<sub>1</sub> &lt; 29,33 &lt; M<sub>2</sub> là Magnesium (Mg = 24) và Calcium (Ca = 40) (1,0 điểm).<br>b) Gọi x, y là số mol Mg và Ca: {x + y = 0,3 ; 24x + 40y = 8,8} &rArr; x = 0,2 mol (Mg) và y = 0,1 mol (Ca) (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-07",
    "title": "Hóa học 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Nguyễn Huệ – Quảng Nam (Đề chính thức Kết nối tri thức)",
    "province": "Quảng Nam",
    "year": "2024–2025",
    "sourceUrl": "https://khoahoc.vietjack.com/chi-tiet-de-thi/11325/de-thi-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
    "questions": [
      [
        "Trong nguyên tử, loại hạt nào có khối lượng không đáng kể so với hai loại hạt còn lại?",
        [
          "A. Proton.",
          "B. Neutron.",
          "C. Electron.",
          "D. Hạt nhân."
        ],
        2,
        "m<sub>e</sub> &approx; 0,00055 amu, chỉ bằng khoảng 1/1836 khối lượng của proton hoặc neutron."
      ],
      [
        "Kí hiệu nguyên tử <sup>A</sup><sub>Z</sub>X cho chúng ta biết những thông tin cơ bản nào?",
        [
          "A. Số hiệu nguyên tử Z và số khối A.",
          "B. Bán kính nguyên tử và độ âm điện.",
          "C. Số lớp electron và chu kì.",
          "D. Nhiệt độ nóng chảy của đơn chất."
        ],
        0,
        "Kí hiệu <sup>A</sup><sub>Z</sub>X cho biết số hiệu nguyên tử Z (số p = số e) và số khối A (A = Z + N)."
      ],
      [
        "Các orbital p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> trong cùng một phân lớp p có đặc điểm là:",
        [
          "A. Cùng mức năng lượng và định hướng theo 3 trục tọa độ không gian vuông góc với nhau.",
          "B. Có mức năng lượng khác nhau rất lớn.",
          "C. Đều có hình cầu.",
          "D. Đều định hướng dọc theo trục Ox."
        ],
        0,
        "Ba AO p có cùng mức năng lượng và định hướng theo 3 trục vuông góc Ox, Oy, Oz."
      ],
      [
        "Cấu hình electron nào sau đây vi phạm nguyên lí Pauli?",
        [
          "A. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>.",
          "B. 1s<sup>2</sup>2s<sup>3</sup>2p<sup>4</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>.",
          "D. 1s<sup>2</sup>2s<sup>1</sup>."
        ],
        1,
        "Phân lớp 2s chỉ có 1 AO nên chứa tối đa 2 electron; viết 2s<sup>3</sup> vi phạm nguyên lí Pauli."
      ],
      [
        "Nguyên tử của nguyên tố Argon (Z = 18) có cấu hình electron lớp ngoài cùng là:",
        [
          "A. 3s<sup>2</sup>3p<sup>4</sup>.",
          "B. 3s<sup>2</sup>3p<sup>5</sup>.",
          "C. 3s<sup>2</sup>3p<sup>6</sup>.",
          "D. 4s<sup>2</sup>."
        ],
        2,
        "Cấu hình Ar (Z = 18): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup> &rArr; lớp ngoài cùng là 3s<sup>2</sup>3p<sup>6</sup>."
      ],
      [
        "Chu kì 4 trong bảng tuần hoàn có tổng cộng bao nhiêu nguyên tố?",
        [
          "A. 8.",
          "B. 18.",
          "C. 32.",
          "D. 2."
        ],
        1,
        "Chu kì 4 và chu kì 5 là hai chu kì lớn, mỗi chu kì có 18 nguyên tố (gồm 8 nguyên tố nhóm A và 10 nguyên tố nhóm B)."
      ],
      [
        "Nguyên tố X có cấu hình electron [Ar]3d<sup>5</sup>4s<sup>2</sup>. Vị trí của X trong bảng tuần hoàn là:",
        [
          "A. Ô 25, chu kì 4, nhóm VIIB.",
          "B. Ô 25, chu kì 4, nhóm IIA.",
          "C. Ô 25, chu kì 4, nhóm VIIA.",
          "D. Ô 25, chu kì 3, nhóm VB."
        ],
        0,
        "Z = 25 (Manganese, Mn), có 4 lớp e (chu kì 4), electron cuối điền vào 3d với tổng e hóa trị 5 + 2 = 7 &rArr; nhóm VIIB."
      ],
      [
        "Trong một chu kì, đi từ trái sang phải, tính acid của các hydroxide ứng với hóa trị cao nhất:",
        [
          "A. Tăng dần, đồng thời tính base giảm dần.",
          "B. Giảm dần, đồng thời tính base tăng dần.",
          "C. Không đổi.",
          "D. Đều là các chất lưỡng tính."
        ],
        0,
        "Trong một chu kì từ trái sang phải, tính base của hydroxide giảm dần và tính acid tăng dần."
      ],
      [
        "Cho các nguyên tố: <sub>9</sub>F, <sub>15</sub>P, <sub>16</sub>S, <sub>17</sub>Cl. Nguyên tố có bán kính nguyên tử nhỏ nhất là:",
        [
          "A. P.",
          "B. S.",
          "C. Cl.",
          "D. F."
        ],
        3,
        "Trong chu kì 3: R<sub>P</sub> &gt; R<sub>S</sub> &gt; R<sub>Cl</sub>; trong nhóm VIIA: R<sub>Cl</sub> &gt; R<sub>F</sub> &rArr; F có bán kính nhỏ nhất."
      ],
      [
        "Công thức hợp chất khí với hydrogen của nguyên tố Nitrogen (nhóm VA) là:",
        [
          "A. NH<sub>3</sub>.",
          "B. NH<sub>4</sub>.",
          "C. H<sub>2</sub>N.",
          "D. HN."
        ],
        0,
        "Nitrogen thuộc nhóm VA, tạo hợp chất khí với hydrogen là ammonia (NH<sub>3</sub>)."
      ],
      [
        "Hóa trị cao nhất với oxygen của nguyên tố Sulfur (nhóm VIA) bằng:",
        [
          "A. 2.",
          "B. 4.",
          "C. 6.",
          "D. 8."
        ],
        2,
        "Sulfur thuộc nhóm VIA nên có hóa trị cao nhất với oxygen bằng 6 (trong SO<sub>3</sub>)."
      ],
      [
        "Ion X<sup>2-</sup> có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>. Số hiệu nguyên tử Z của nguyên tố X là:",
        [
          "A. 8.",
          "B. 10.",
          "C. 12.",
          "D. 6."
        ],
        0,
        "Nguyên tử X nhận thêm 2e để tạo X<sup>2-</sup> (10e), nên nguyên tử X ban đầu có Z = 10 - 2 = 8 (Oxygen)."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai nguyên tố A (Z = 11) và B (Z = 13):",
        "items": [
          [
            "a) Cả hai nguyên tố A và B đều là nguyên tố kim loại thuộc chu kì 3.",
            true,
            "A là Na ([Ne]3s<sup>1</sup>) và B là Al ([Ne]3s<sup>2</sup>3p<sup>1</sup>), đều là kim loại ở chu kì 3."
          ],
          [
            "b) Nguyên tố A là nguyên tố s, còn nguyên tố B là nguyên tố p.",
            true,
            "Electron cuối của Na điền vào 3s<sup>1</sup> (nguyên tố s); của Al điền vào 3p<sup>1</sup> (nguyên tố p)."
          ],
          [
            "c) Tính kim loại của B mạnh hơn tính kim loại của A.",
            false,
            "Trong chu kì 3 từ trái sang phải, tính kim loại giảm nên Na (A) mạnh hơn Al (B)."
          ],
          [
            "d) Dung dịch NaOH có thể hòa tan được kết tủa Al(OH)<sub>3</sub>.",
            true,
            "Vì Al(OH)<sub>3</sub> lưỡng tính nên tan trong dung dịch kiềm mạnh NaOH: Al(OH)<sub>3</sub> + NaOH &rarr; Na[Al(OH)<sub>4</sub>]."
          ]
        ]
      },
      {
        "stem": "Xét các đồng vị của nguyên tố Carbon trong tự nhiên gồm <sup>12</sup><sub>6</sub>C (98,89%) và <sup>13</sup><sub>6</sub>C (1,11%):",
        "items": [
          [
            "a) Hạt nhân <sup>12</sup><sub>6</sub>C có 6 neutron và hạt nhân <sup>13</sup><sub>6</sub>C có 7 neutron.",
            true,
            "N<sub>1</sub> = 12 - 6 = 6; N<sub>2</sub> = 13 - 6 = 7."
          ],
          [
            "b) Số electron ở lớp ngoài cùng của cả hai đồng vị đều bằng 4.",
            true,
            "Cả hai đều có Z = 6 (1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>) nên đều có 4 electron lớp ngoài cùng."
          ],
          [
            "c) Nguyên tử khối trung bình của Carbon xấp xỉ bằng 12,011.",
            true,
            "<span style=\"text-decoration:overline;\">A</span> = (12 . 98,89 + 13 . 1,11)/100 = 12,0111 &approx; 12,011."
          ],
          [
            "d) Hai đồng vị này nằm ở hai ô khác nhau trong bảng tuần hoàn.",
            false,
            "Các đồng vị của cùng một nguyên tố có cùng Z = 6 nên nằm chung ở ô số 6 trong bảng tuần hoàn."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử R có tổng số hạt cơ bản là 28, trong đó số hạt không mang điện là 10. Số hiệu nguyên tử Z của R bằng bao nhiêu?",
        "answer": "9",
        "explanation": "2Z + N = 28, với N = 10 &rArr; 2Z = 18 &rArr; Z = 9 (Fluorine)."
      },
      {
        "question": "Trong nguyên tử Iron (Fe, Z = 26) ở trạng thái cơ bản, lớp electron thứ 3 (lớp M) có tổng cộng bao nhiêu electron?",
        "answer": "14",
        "explanation": "Cấu hình Fe: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>6</sup>4s<sup>2</sup>. Lớp thứ 3 (3s<sup>2</sup>3p<sup>6</sup>3d<sup>6</sup>) có 2 + 6 + 6 = 14 electron."
      },
      {
        "question": "Nguyên tố R thuộc nhóm IVA. Phân tử khối của oxide cao nhất của R bằng 44. Nguyên tử khối của R bằng bao nhiêu?",
        "answer": "12",
        "explanation": "Oxide cao nhất nhóm IVA là RO<sub>2</sub>: M<sub>R</sub> + 32 = 44 &rArr; M<sub>R</sub> = 12 (Carbon)."
      },
      {
        "question": "Hòa tan hoàn toàn 4,6 gam kim loại Sodium (Na = 23) vào nước dư thu được dung dịch X. Để trung hòa hoàn toàn dung dịch X cần bao nhiêu ml dung dịch HCl 1M?",
        "answer": "200",
        "explanation": "n<sub>Na</sub> = 4,6 / 23 = 0,2 mol &rArr; n<sub>NaOH</sub> = 0,2 mol &rArr; n<sub>HCl</sub> = 0,2 mol &rArr; V<sub>dd HCl</sub> = 0,2 / 1 = 0,2 lít = 200 ml."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của hai nguyên tố X và Y có cấu hình electron lớp ngoài cùng ở trạng thái cơ bản lần lượt là 4s<sup>1</sup> (biết phân lớp 3d chưa có electron) và 3s<sup>2</sup>3p<sup>5</sup>.<br>a) Viết cấu hình electron đầy đủ của X và Y, xác định số hiệu nguyên tử và vị trí của chúng trong bảng tuần hoàn.<br>b) Viết phương trình hóa học khi cho đơn chất X tác dụng với đơn chất Y và khi cho X tác dụng với nước.",
        "solution": "a) Vì 3d chưa có e nên X có cấu hình: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup> (Z = 19, Potassium - K, ô 19, chu kì 4, nhóm IA). Y có cấu hình: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup> (Z = 17, Chlorine - Cl, ô 17, chu kì 3, nhóm VIIA) (0,75 điểm).<br>b) Phương trình hóa học: 2K + Cl<sub>2</sub> &rarr; 2KCl (t&deg;); và 2K + 2H<sub>2</sub>O &rarr; 2KOH + H<sub>2</sub>&uarr; (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hợp chất khí với hydrogen của một nguyên tố R có công thức RH<sub>3</sub>. Trong oxide cao nhất của R, phần trăm khối lượng của R là 43,66%.<br>a) Tìm nguyên tử khối và xác định tên nguyên tố R.<br>b) Viết công thức phân tử của hydroxide ứng với hóa trị cao nhất của R và tính phần trăm khối lượng của R trong hydroxide đó.",
        "solution": "a) Hợp chất khí với H là RH<sub>3</sub> nên R thuộc nhóm VA, công thức oxide cao nhất là R<sub>2</sub>O<sub>5</sub>. Ta có: 2M<sub>R</sub> / (2M<sub>R</sub> + 80) = 43,66 / 100 &rArr; 2M<sub>R</sub> = 62 &rArr; M<sub>R</sub> = 31 (Phosphorus, P) (0,75 điểm).<br>b) Hydroxide cao nhất của P là H<sub>3</sub>PO<sub>4</sub> (M = 98). Phần trăm khối lượng của P trong H<sub>3</sub>PO<sub>4</sub> là: %m<sub>P</sub> = (31 / 98) . 100% &approx; 31,63% (0,75 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-08",
    "title": "Hóa học 10 - Đề 08 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đắk Lắk",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-so1-ngo-gia-tu-dl-2025-2026.jsp",
    "questions": [
      [
        "Đơn vị khối lượng nguyên tử (kí hiệu là amu hoặc u) được định nghĩa bằng:",
        [
          "A. Khối lượng của 1 nguyên tử hydrogen.",
          "B. 1/12 khối lượng của 1 nguyên tử đồng vị carbon-12 (<sup>12</sup>C).",
          "C. Khối lượng của 1 electron.",
          "D. 1/16 khối lượng của 1 nguyên tử oxygen-16."
        ],
        1,
        "1 amu bằng 1/12 khối lượng của một nguyên tử đồng vị <sup>12</sup><sub>6</sub>C (xấp xỉ 1,6605.10<sup>-24</sup> g)."
      ],
      [
        "Nguyên tử <sup>65</sup><sub>30</sub>Zn có số hạt không mang điện là:",
        [
          "A. 30.",
          "B. 35.",
          "C. 65.",
          "D. 95."
        ],
        1,
        "Số hạt không mang điện (neutron) N = A - Z = 65 - 30 = 35."
      ],
      [
        "Số phân lớp electron có trong lớp thứ 4 (lớp N, n = 4) là:",
        [
          "A. 2.",
          "B. 3.",
          "C. 4.",
          "D. 5."
        ],
        2,
        "Lớp thứ n (với n &le; 4) có n phân lớp; lớp N (n = 4) có 4 phân lớp là 4s, 4p, 4d, 4f."
      ],
      [
        "Ở trạng thái cơ bản, nguyên tử Oxygen (Z = 8) có bao nhiêu electron độc thân?",
        [
          "A. 0.",
          "B. 1.",
          "C. 2.",
          "D. 4."
        ],
        2,
        "Cấu hình O (Z = 8): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>. Phân lớp 2p<sup>4</sup> có 3 AO, phân bố 4e nên có 1 AO ghép đôi và 2 AO chứa electron độc thân."
      ],
      [
        "Các nguyên tố mà nguyên tử có 1, 2 hoặc 3 electron ở lớp ngoài cùng (trừ H, He, B) thường là:",
        [
          "A. Nguyên tố kim loại.",
          "B. Nguyên tố phi kim.",
          "C. Nguyên tố khí hiếm.",
          "D. Chất bán dẫn."
        ],
        0,
        "Nguyên tử có 1, 2, 3e lớp ngoài cùng (trừ H, He, B) là các nguyên tố kim loại."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố nhóm VIIA (F, Cl, Br, I...) có tên gọi chung là nhóm:",
        [
          "A. Kim loại kiềm.",
          "B. Kim loại kiềm thổ.",
          "C. Halogen.",
          "D. Chalcogen."
        ],
        2,
        "Trong bảng hệ thống tuần hoàn các nguyên tố hóa học, các nguyên tố nhóm VIIA (gồm Fluorine F, Chlorine Cl, Bromine Br, Iodine I...) được gọi là nhóm Halogen (nghĩa là sinh ra muối)."
      ],
      [
        "Nguyên tố X thuộc chu kì 3, nhóm IVA. Số hiệu nguyên tử Z của X là:",
        [
          "A. 6.",
          "B. 12.",
          "C. 14.",
          "D. 16."
        ],
        2,
        "Cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup> &rArr; Z = 14 (Silicon, Si)."
      ],
      [
        "Cho các nguyên tố: <sub>4</sub>Be, <sub>12</sub>Mg, <sub>20</sub>Ca, <sub>38</sub>Sr. Nguyên tố có bán kính nguyên tử lớn nhất là:",
        [
          "A. Be.",
          "B. Mg.",
          "C. Ca.",
          "D. Sr."
        ],
        3,
        "Cùng nhóm IIA, từ trên xuống dưới số lớp e tăng nên <sub>38</sub>Sr (chu kì 5) có bán kính lớn nhất."
      ],
      [
        "Nguyên tố R có hợp chất khí với hydrogen là H<sub>2</sub>R. Công thức oxide cao nhất của R là:",
        [
          "A. RO.",
          "B. RO<sub>2</sub>.",
          "C. RO<sub>3</sub>.",
          "D. R<sub>2</sub>O<sub>5</sub>."
        ],
        2,
        "Hợp chất khí với H là H<sub>2</sub>R &rArr; R thuộc nhóm VIA &rArr; oxide cao nhất là RO<sub>3</sub>."
      ],
      [
        "Trong các chất sau: Na<sub>2</sub>O, MgO, Al<sub>2</sub>O<sub>3</sub>, P<sub>2</sub>O<sub>5</sub>, chất có tính base mạnh nhất là:",
        [
          "A. Na<sub>2</sub>O.",
          "B. MgO.",
          "C. Al<sub>2</sub>O<sub>3</sub>.",
          "D. P<sub>2</sub>O<sub>5</sub>."
        ],
        0,
        "Na là kim loại kiềm mạnh nhất trong chu kì 3 nên Na<sub>2</sub>O có tính base mạnh nhất."
      ],
      [
        "Ion Ca<sup>2+</sup> (biết Ca có Z = 20) có cấu hình electron là:",
        [
          "A. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>.",
          "B. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>.",
          "D. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>."
        ],
        1,
        "Ca (Z = 20) nhường 2e ở lớp 4s<sup>2</sup> tạo Ca<sup>2+</sup> có 18e: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>."
      ],
      [
        "Nguyên tố hóa học phổ biến nhất trong lớp vỏ Trái Đất (chiếm khoảng 46,6% khối lượng vỏ Trái Đất) là:",
        [
          "A. Silicon (Si).",
          "B. Aluminium (Al).",
          "C. Oxygen (O).",
          "D. Iron (Fe)."
        ],
        2,
        "Oxygen là nguyên tố phổ biến nhất trong vỏ Trái Đất, tiếp theo là Silicon và Aluminium."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tử của nguyên tố X có cấu hình electron ở trạng thái cơ bản là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>:",
        "items": [
          [
            "a) Nguyên tố X có số hiệu nguyên tử Z = 20 (Calcium) và là nguyên tố s.",
            true,
            "Tổng số e = 20, electron cuối cùng điền vào phân lớp 4s<sup>2</sup> nên là nguyên tố s."
          ],
          [
            "b) Trong bảng tuần hoàn, X nằm ở ô 20, chu kì 4, nhóm IIA.",
            true,
            "Z = 20 (ô 20), 4 lớp e (chu kì 4), 2e lớp ngoài cùng (nhóm IIA)."
          ],
          [
            "c) Ở trạng thái cơ bản, nguyên tử X có 2 electron độc thân.",
            false,
            "Phân lớp 4s<sup>2</sup> đã bão hòa nên nguyên tử Ca không có electron độc thân nào (0e độc thân)."
          ],
          [
            "d) Hydroxide của X là Ca(OH)<sub>2</sub> tan một phần trong nước tạo dung dịch nước vôi trong có tính kiềm mạnh.",
            true,
            "Ca(OH)<sub>2</sub> là một base mạnh."
          ]
        ]
      },
      {
        "stem": "Cho ba nguyên tố phi kim: <sub>7</sub>N, <sub>8</sub>O và <sub>15</sub>P:",
        "items": [
          [
            "a) N và O cùng thuộc chu kì 2; N và P cùng thuộc nhóm VA.",
            true,
            "N (2s<sup>2</sup>2p<sup>3</sup>), O (2s<sup>2</sup>2p<sup>4</sup>) ở chu kì 2; P (3s<sup>2</sup>3p<sup>3</sup>) cùng nhóm VA với N."
          ],
          [
            "b) Tính phi kim tăng dần theo thứ tự: P &lt; N &lt; O.",
            true,
            "Cùng nhóm VA: P &lt; N; cùng chu kì 2: N &lt; O &rArr; P &lt; N &lt; O."
          ],
          [
            "c) Bán kính nguyên tử giảm dần theo thứ tự: R<sub>P</sub> &gt; R<sub>N</sub> &gt; R<sub>O</sub>.",
            true,
            "R<sub>P</sub> &gt; R<sub>N</sub> (do P có 3 lớp e, N có 2 lớp e) và R<sub>N</sub> &gt; R<sub>O</sub> (cùng chu kì 2)."
          ],
          [
            "d) Tính acid của H<sub>3</sub>PO<sub>4</sub> mạnh hơn tính acid của HNO<sub>3</sub>.",
            false,
            "Vì tính phi kim của N mạnh hơn P nên HNO<sub>3</sub> là acid mạnh hơn H<sub>3</sub>PO<sub>4</sub>."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử X có tổng số hạt cơ bản là 34, trong đó số hạt không mang điện là 12. Số khối A của nguyên tử X bằng bao nhiêu?",
        "answer": "23",
        "explanation": "2Z + 12 = 34 &rArr; Z = 11 (Sodium). Số khối A = Z + N = 11 + 12 = 23."
      },
      {
        "question": "Tổng số electron trên các phân lớp s của nguyên tử Potassium (Z = 19) ở trạng thái cơ bản bằng bao nhiêu?",
        "answer": "7",
        "explanation": "Cấu hình K (Z = 19): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>. Tổng số e trên các phân lớp s là 2 + 2 + 2 + 1 = 7."
      },
      {
        "question": "Trong tự nhiên, nguyên tố Magnesium (Mg) có 3 đồng vị bền: <sup>24</sup>Mg (78,99%), <sup>25</sup>Mg (10,00%) và <sup>26</sup>Mg (11,01%). Nguyên tử khối trung bình của Mg bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "24,32",
        "explanation": "<span style=\"text-decoration:overline;\">A</span> = (24.78,99 + 25.10,00 + 26.11,01)/100 = 24,3202 &approx; 24,32."
      },
      {
        "question": "Hòa tan hoàn toàn 7,2 gam một kim loại M hóa trị II bằng dung dịch H<sub>2</sub>SO<sub>4</sub> loãng dư, thu được 7,437 lít khí H<sub>2</sub> (đkc: 24,79 lít/mol). Nguyên tử khối của M bằng bao nhiêu?",
        "answer": "24",
        "explanation": "n<sub>H2</sub> = 7,437 / 24,79 = 0,3 mol &rArr; n<sub>M</sub> = 0,3 mol &rArr; M = 7,2 / 0,3 = 24 (Mg)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố X có tổng số hạt cơ bản (p, n, e) là 58. Trong hạt nhân nguyên tử X, số hạt không mang điện nhiều hơn số hạt mang điện là 1 hạt.<br>a) Xác định số hạt p, n, e, số khối A và viết kí hiệu nguyên tử của X.<br>b) Viết cấu hình electron của nguyên tử X và xác định vị trí của X trong bảng tuần hoàn.",
        "solution": "a) Hệ phương trình: {2Z + N = 58 ; N - Z = 1} &rArr; 3Z = 57 &rArr; Z = 19, N = 20, E = 19. Số khối A = 19 + 20 = 39. Kí hiệu nguyên tử: <sup>39</sup><sub>19</sub>K (0,75 điểm).<br>b) Cấu hình e (Z = 19): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>. Vị trí: Ô 19, chu kì 4, nhóm IA (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Cho 11,5 gam một kim loại kiềm R (nhóm IA) tác dụng hết với nước dư thu được dung dịch kiềm X và V lít khí H<sub>2</sub> (ở đkc: 25&deg;C, 1 bar). Để trung hòa hoàn toàn dung dịch X cần vừa đủ 250 ml dung dịch H<sub>2</sub>SO<sub>4</sub> 1M.<br>a) Xác định nguyên tử khối và tên kim loại kiềm R.<br>b) Tính thể tích khí H<sub>2</sub> thoát ra (ở đkc: 24,79 lít/mol).",
        "solution": "a) Số mol H<sub>2</sub>SO<sub>4</sub> = 0,25 . 1 = 0,25 mol &rArr; n<sub>OH-</sub> = n<sub>ROH</sub> = 2.n<sub>H2SO4</sub> = 0,5 mol. Bảo toàn nguyên tố R: n<sub>R</sub> = 0,5 mol &rArr; M<sub>R</sub> = 11,5 / 0,5 = 23 (g/mol). Vậy R là Sodium (Na) (1,0 điểm).<br>b) Số mol H<sub>2</sub> = 1/2 . n<sub>Na</sub> = 0,25 mol. Thể tích khí H<sub>2</sub> (đkc): V = 0,25 . 24,79 = 6,1975 lít (0,5 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-09",
    "title": "Hóa học 10 - Đề 09 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chính thức Giữa kì I 2025–2026)",
    "province": "Đắk Lắk",
    "year": "2025–2026",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-so1-le-hong-phong-dl-2025-2026.jsp",
    "questions": [
      [
        "Năm 1911, nhà vật lí Ernest Rutherford đã thực hiện thí nghiệm bắn phá lá vàng mỏng bằng chùm hạt alpha (&alpha;) và phát hiện ra thành phần nào của nguyên tử?",
        [
          "A. Lớp vỏ electron.",
          "B. Hạt nhân nguyên tử kích thước rất nhỏ mang điện dương ở tâm.",
          "C. Hạt neutron.",
          "D. Các đồng vị."
        ],
        1,
        "Thí nghiệm bắn lá vàng bằng hạt alpha của Rutherford đã khám phá ra hạt nhân nguyên tử."
      ],
      [
        "Trong một nguyên tử trung hòa về điện, khẳng định nào sau đây luôn đúng?",
        [
          "A. Số proton = Số neutron.",
          "B. Số proton = Số electron = Số đơn vị điện tích hạt nhân.",
          "C. Số khối A = 2 lần số proton.",
          "D. Số electron = Số neutron."
        ],
        1,
        "Trong mọi nguyên tử trung hòa về điện: P = E = Z."
      ],
      [
        "Lớp electron thứ 3 (lớp M) gồm các phân lớp nào?",
        [
          "A. 3s, 3p.",
          "B. 3s, 3p, 3d.",
          "C. 3s, 3p, 3d, 3f.",
          "D. Chỉ có 3s."
        ],
        1,
        "Lớp M (n = 3) có 3 phân lớp: 3s, 3p, 3d."
      ],
      [
        "Ở trạng thái cơ bản, nguyên tử Sodium (Z = 11) có bao nhiêu electron độc thân?",
        [
          "A. 0.",
          "B. 1.",
          "C. 2.",
          "D. 3."
        ],
        1,
        "Cấu hình Na (Z = 11): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>, có 1 electron độc thân ở 3s<sup>1</sup>."
      ],
      [
        "Nguyên tố hóa học nào sau đây là nguyên tố d?",
        [
          "A. <sub>19</sub>K.",
          "B. <sub>20</sub>Ca.",
          "C. <sub>26</sub>Fe.",
          "D. <sub>17</sub>Cl."
        ],
        2,
        "<sub>26</sub>Fe ([Ar]3d<sup>6</sup>4s<sup>2</sup>) có electron cuối cùng điền vào phân lớp 3d nên là nguyên tố d."
      ],
      [
        "Số nguyên tố trong chu kì 1 của bảng tuần hoàn là:",
        [
          "A. 1.",
          "B. 2.",
          "C. 8.",
          "D. 18."
        ],
        1,
        "Chu kì 1 chỉ gồm 2 nguyên tố là Hydrogen (Z = 1) và Helium (Z = 2)."
      ],
      [
        "Nguyên tố X có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup>. Công thức oxide cao nhất của X là:",
        [
          "A. XO<sub>2</sub>.",
          "B. X<sub>2</sub>O<sub>3</sub>.",
          "C. X<sub>2</sub>O<sub>5</sub>.",
          "D. XO<sub>3</sub>."
        ],
        2,
        "X có 5e lớp ngoài cùng (nhóm VA) nên oxide cao nhất có dạng X<sub>2</sub>O<sub>5</sub>."
      ],
      [
        "Theo quy luật biến đổi tuần hoàn, nguyên tố có tính kim loại mạnh nhất trong chu kì 3 là:",
        [
          "A. <sub>11</sub>Na.",
          "B. <sub>12</sub>Mg.",
          "C. <sub>13</sub>Al.",
          "D. <sub>14</sub>Si."
        ],
        0,
        "Đầu chu kì 3 là kim loại kiềm <sub>11</sub>Na có tính kim loại mạnh nhất chu kì."
      ],
      [
        "Cho các acid: H<sub>2</sub>CO<sub>3</sub>, HNO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>. Thứ tự giảm dần tính acid là:",
        [
          "A. HNO<sub>3</sub> &gt; H<sub>3</sub>PO<sub>4</sub> &gt; H<sub>2</sub>CO<sub>3</sub>.",
          "B. H<sub>3</sub>PO<sub>4</sub> &gt; HNO<sub>3</sub> &gt; H<sub>2</sub>CO<sub>3</sub>.",
          "C. H<sub>2</sub>CO<sub>3</sub> &gt; H<sub>3</sub>PO<sub>4</sub> &gt; HNO<sub>3</sub>.",
          "D. HNO<sub>3</sub> &gt; H<sub>2</sub>CO<sub>3</sub> &gt; H<sub>3</sub>PO<sub>4</sub>."
        ],
        0,
        "Tính phi kim N &gt; P &gt; C nên tính acid giảm dần: HNO<sub>3</sub> &gt; H<sub>3</sub>PO<sub>4</sub> &gt; H<sub>2</sub>CO<sub>3</sub>."
      ],
      [
        "Hạt nhân nguyên tử <sup>23</sup><sub>11</sub>Na và <sup>24</sup><sub>12</sub>Mg có cùng:",
        [
          "A. Số hạt proton.",
          "B. Số hạt neutron.",
          "C. Số khối.",
          "D. Điện tích hạt nhân."
        ],
        1,
        "Số hạt neutron của <sup>23</sup><sub>11</sub>Na là 23 - 11 = 12; của <sup>24</sup><sub>12</sub>Mg là 24 - 12 = 12. Vậy hai hạt nhân có cùng số hạt neutron."
      ],
      [
        "Một nguyên tố R thuộc nhóm IIA. Công thức hydroxide của R là:",
        [
          "A. ROH.",
          "B. R(OH)<sub>2</sub>.",
          "C. R(OH)<sub>3</sub>.",
          "D. H<sub>2</sub>RO<sub>3</sub>."
        ],
        1,
        "Nhóm IIA có hóa trị II nên công thức hydroxide là R(OH)<sub>2</sub>."
      ],
      [
        "Số electron tối đa có thể phân bố trên lớp thứ n (với n &le; 4) là:",
        [
          "A. n<sup>2</sup>.",
          "B. 2n<sup>2</sup>.",
          "C. 2n.",
          "D. 2n + 2."
        ],
        1,
        "Lớp thứ n (n &le; 4) có n<sup>2</sup> orbital và chứa tối đa 2n<sup>2</sup> electron."
      ]
    ],
    "tf": [
      {
        "stem": "Cho hai nguyên tố X (Z = 14, Silicon) và Y (Z = 16, Sulfur):",
        "items": [
          [
            "a) Cả hai nguyên tố X và Y đều thuộc chu kì 3 và đều là nguyên tố p.",
            true,
            "X ([Ne]3s<sup>2</sup>3p<sup>2</sup>) và Y ([Ne]3s<sup>2</sup>3p<sup>4</sup>) đều ở chu kì 3 và là nguyên tố p."
          ],
          [
            "b) Ở trạng thái cơ bản, cả nguyên tử X và nguyên tử Y đều có 2 electron độc thân.",
            true,
            "Phân lớp 3p<sup>2</sup> của X có 2e độc thân; phân lớp 3p<sup>4</sup> của Y cũng có 2e độc thân."
          ],
          [
            "c) Tổng hệ số nguyên tối giản của các chất trong phương trình phản ứng giữa SO<sub>3</sub> và H<sub>2</sub>O là 3.",
            true,
            "SO<sub>3</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SO<sub>4</sub> (tổng hệ số 1 + 1 + 1 = 3)."
          ],
          [
            "d) Tính acid của H<sub>2</sub>SiO<sub>3</sub> mạnh hơn tính acid của H<sub>2</sub>SO<sub>4</sub>.",
            false,
            "Trong chu kì 3, S là phi kim mạnh hơn Si rất nhiều nên H<sub>2</sub>SO<sub>4</sub> là acid mạnh còn H<sub>2</sub>SiO<sub>3</sub> là acid rất yếu."
          ]
        ]
      },
      {
        "stem": "Một nguyên tử của nguyên tố R có tổng số electron trên các phân lớp s là 6 và tổng số electron lớp ngoài cùng là 6:",
        "items": [
          [
            "a) Cấu hình electron của nguyên tử R là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>.",
            true,
            "Tổng e trên s = 6 (gồm 1s<sup>2</sup>, 2s<sup>2</sup>, 3s<sup>2</sup>) và lớp ngoài cùng (n = 3) có 6e &rArr; 3s<sup>2</sup>3p<sup>4</sup>."
          ],
          [
            "b) Nguyên tố R có số hiệu nguyên tử Z = 16.",
            true,
            "Tổng số electron trên toàn bộ các phân lớp của nguyên tử trung hòa bằng số hiệu nguyên tử Z: Z = 2 (1s) + 2 (2s) + 6 (2p) + 2 (3s) + 4 (3p) = 16. Đây là nguyên tố Sulfur (Lưu huỳnh, S). Khẳng định này là ĐÚNG."
          ],
          [
            "c) Trong hợp chất khí với hydrogen (H<sub>2</sub>R), nguyên tố R chiếm 94,12% về khối lượng (biết M<sub>R</sub> = 32).",
            true,
            "Trong H<sub>2</sub>S: %S = (32 / 34) . 100% &approx; 94,12%."
          ],
          [
            "d) Bán kính nguyên tử của R lớn hơn bán kính nguyên tử của Phosphorus (Z = 15).",
            false,
            "Cùng chu kì 3, Z<sub>S</sub> (16) &gt; Z<sub>P</sub> (15) nên R<sub>S</sub> &lt; R<sub>P</sub>."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Tổng số hạt proton, neutron, electron trong nguyên tử <sup>35</sup><sub>17</sub>Cl bằng bao nhiêu?",
        "answer": "52",
        "explanation": "Tổng số hạt = Z + A = 17 + 35 = 52."
      },
      {
        "question": "Nguyên tố X ở chu kì 4, nhóm IB (có phân lớp 3d bão hòa). Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "29",
        "explanation": "Cấu hình [Ar]3d<sup>10</sup>4s<sup>1</sup> &rArr; Z = 29 (Copper, Cu)."
      },
      {
        "question": "Phần trăm khối lượng của nguyên tố Nitrogen (N = 14) trong phân tử oxide cao nhất N<sub>2</sub>O<sub>5</sub> (O = 16) bằng bao nhiêu phần trăm (làm tròn đến hàng phần mười)?",
        "answer": "25,9",
        "explanation": "M<sub>N2O5</sub> = 28 + 80 = 108 &rArr; %N = (28 / 108) . 100% &approx; 25,9%."
      },
      {
        "question": "Cho 9,2 gam một kim loại kiềm M (nhóm IA) tác dụng hoàn toàn với nước dư thu được 4,958 lít khí H<sub>2</sub> (đkc: 24,79 lít/mol). Nguyên tử khối của M bằng bao nhiêu?",
        "answer": "23",
        "explanation": "n<sub>H2</sub> = 4,958 / 24,79 = 0,2 mol &rArr; n<sub>M</sub> = 2.n<sub>H2</sub> = 0,4 mol &rArr; M = 9,2 / 0,4 = 23 (Sodium, Na)."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tố A có số hiệu nguyên tử Z = 8; nguyên tố B có số hiệu nguyên tử Z = 16; nguyên tố C có số hiệu nguyên tử Z = 17.<br>a) Viết cấu hình electron và xác định vị trí (ô, chu kì, nhóm) của A, B, C trong bảng tuần hoàn.<br>b) Sắp xếp A, B, C theo chiều tăng dần bán kính nguyên tử và giảm dần độ âm điện. Giải thích.",
        "solution": "a) A (Z = 8, O): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup> (ô 8, chu kì 2, nhóm VIA); B (Z = 16, S): [Ne]3s<sup>2</sup>3p<sup>4</sup> (ô 16, chu kì 3, nhóm VIA); C (Z = 17, Cl): [Ne]3s<sup>2</sup>3p<sup>5</sup> (ô 17, chu kì 3, nhóm VIIA) (0,75 điểm).<br>b) Bán kính nguyên tử: R<sub>O</sub> &lt; R<sub>Cl</sub> &lt; R<sub>S</sub> (vì O có 2 lớp e nhỏ nhất; trong chu kì 3 thì R<sub>Cl</sub> &lt; R<sub>S</sub>). Độ âm điện giảm dần: O (3,44) &gt; Cl (3,16) &gt; S (2,58) (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hai nguyên tố X và Y thuộc hai nhóm A liên tiếp trong cùng một chu kì của bảng tuần hoàn, có tổng số hạt proton trong hai hạt nhân nguyên tử là 31.<br>a) Xác định số hiệu nguyên tử và tên của hai nguyên tố X, Y.<br>b) Viết công thức oxide cao nhất và hydroxide cao nhất của X và Y, đồng thời so sánh tính acid của hai hydroxide đó.",
        "solution": "a) Giả sử Z<sub>X</sub> &lt; Z<sub>Y</sub>. Vì X, Y thuộc hai nhóm A liên tiếp trong cùng một chu kì và Z<sub>X</sub> + Z<sub>Y</sub> = 31 nên X, Y đứng kế tiếp nhau: {Z<sub>X</sub> + Z<sub>Y</sub> = 31 ; Z<sub>Y</sub> - Z<sub>X</sub> = 1} &rArr; Z<sub>X</sub> = 15 (Phosphorus, P) và Z<sub>Y</sub> = 16 (Sulfur, S) (0,75 điểm).<br>b) Oxide cao nhất: P<sub>2</sub>O<sub>5</sub> và SO<sub>3</sub>. Hydroxide cao nhất: H<sub>3</sub>PO<sub>4</sub> và H<sub>2</sub>SO<sub>4</sub>. Vì tính phi kim của S mạnh hơn P nên tính acid của H<sub>2</sub>SO<sub>4</sub> mạnh hơn H<sub>3</sub>PO<sub>4</sub> (0,75 điểm)."
      }
    ]
  },
  {
    "id": "hoahoc-10-de-10",
    "title": "Hóa học 10 - Đề 10 - Trường THPT Lê Hồng Phong – Đắk Lắk (Đề chính thức Kết nối tri thức)",
    "subject": "chemistry",
    "duration": 45,
    "school": "Trường THPT Lê Hồng Phong – Đắk Lắk (Đề chính thức Kết nối tri thức)",
    "province": "Đắk Lắk",
    "year": "2024–2025",
    "sourceUrl": "https://vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-le-hong-phong-dl-2024-2025.jsp",
    "questions": [
      [
        "Điện tích của hạt proton và hạt electron theo đơn vị điện tích nguyên tố (e<sub>0</sub>) lần lượt là:",
        [
          "A. +1 và -1.",
          "B. -1 và +1.",
          "C. +1 và 0.",
          "D. 0 và -1."
        ],
        0,
        "Điện tích tương đối của proton là +1 (hay 1+) và của electron là -1 (hay 1-)."
      ],
      [
        "Trong nguyên tử <sup>19</sup><sub>9</sub>F, số hạt electron là:",
        [
          "A. 9.",
          "B. 10.",
          "C. 19.",
          "D. 28."
        ],
        0,
        "Trong kí hiệu nguyên tử ¹⁹₉F, chỉ số dưới bên trái là số hiệu nguyên tử Z = 9. Đối với nguyên tử trung hòa về điện, số electron E = số proton Z = 9."
      ],
      [
        "Phân lớp nào sau đây có mức năng lượng cao hơn phân lớp 4s?",
        [
          "A. 1s.",
          "B. 2p.",
          "C. 3p.",
          "D. 3d."
        ],
        3,
        "Theo trật tự mức năng lượng: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d, nên 3d có mức năng lượng cao hơn 4s."
      ],
      [
        "Cấu hình electron của nguyên tử Calcium (Z = 20) được viết gọn theo khí hiếm là:",
        [
          "A. [Ne]4s<sup>2</sup>.",
          "B. [Ar]4s<sup>2</sup>.",
          "C. [Ar]3d<sup>2</sup>.",
          "D. [Kr]4s<sup>2</sup>."
        ],
        1,
        "Khí hiếm đứng ngay trước Ca (Z = 20) là Argon (Ar, Z = 18), nên cấu hình viết gọn là [Ar]4s<sup>2</sup>."
      ],
      [
        "Nguyên tố X ở chu kì 3, nhóm VIIA. Số electron ở lớp ngoài cùng của nguyên tử X là:",
        [
          "A. 3.",
          "B. 5.",
          "C. 7.",
          "D. 8."
        ],
        2,
        "Thuộc nhóm VIIA nên nguyên tử X có 7 electron ở lớp ngoài cùng."
      ],
      [
        "Trong bảng tuần hoàn, các nguyên tố khí hiếm thuộc nhóm nào?",
        [
          "A. Nhóm IA.",
          "B. Nhóm IIA.",
          "C. Nhóm VIIA.",
          "D. Nhóm VIIIA."
        ],
        3,
        "Khí hiếm (He, Ne, Ar, Kr, Xe, Rn, Og) thuộc nhóm VIIIA."
      ],
      [
        "Cho các nguyên tố chu kì 2: <sub>3</sub>Li, <sub>4</sub>Be, <sub>6</sub>C, <sub>7</sub>N. Nguyên tố có bán kính nguyên tử lớn nhất là:",
        [
          "A. Li.",
          "B. Be.",
          "C. C.",
          "D. N."
        ],
        0,
        "Trong chu kì 2 từ trái sang phải bán kính giảm dần, nên <sub>3</sub>Li đứng đầu chu kì có bán kính lớn nhất."
      ],
      [
        "Công thức oxide cao nhất của nguyên tố Chlorine (nhóm VIIA) là:",
        [
          "A. Cl<sub>2</sub>O.",
          "B. ClO<sub>2</sub>.",
          "C. Cl<sub>2</sub>O<sub>5</sub>.",
          "D. Cl<sub>2</sub>O<sub>7</sub>."
        ],
        3,
        "Chlorine thuộc nhóm VIIA có hóa trị cao nhất với O bằng 7 &rArr; Cl<sub>2</sub>O<sub>7</sub>."
      ],
      [
        "Trong một nhóm A (trừ nhóm VIIIA), theo chiều tăng của điện tích hạt nhân, tính base của các hydroxide tương ứng:",
        [
          "A. Tăng dần.",
          "B. Giảm dần.",
          "C. Không đổi.",
          "D. Vừa tăng vừa giảm."
        ],
        0,
        "Trong một nhóm A từ trên xuống dưới, tính kim loại tăng dần nên tính base của các hydroxide tăng dần."
      ],
      [
        "Cấu hình electron của ion Cl<sup>-</sup> (biết Cl có Z = 17) là:",
        [
          "A. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>.",
          "B. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>5</sup>.",
          "C. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>.",
          "D. 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup>."
        ],
        2,
        "Nguyên tử Cl (17e) nhận thêm 1e tạo ion Cl<sup>-</sup> (18e): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>."
      ],
      [
        "Nguyên tố R có công thức hợp chất khí với hydrogen là RH<sub>3</sub>. R thuộc nhóm nào trong bảng tuần hoàn?",
        [
          "A. Nhóm IIIA.",
          "B. Nhóm IVA.",
          "C. Nhóm VA.",
          "D. Nhóm VIA."
        ],
        2,
        "Hợp chất khí với H là RH<sub>3</sub> (hóa trị 3 với H) &rArr; thuộc nhóm (8 - 3) = VA."
      ],
      [
        "Phát biểu nào sau đây đúng khi nói về orbital nguyên tử (AO)?",
        [
          "A. AO là quỹ đạo tròn cố định của electron quanh hạt nhân.",
          "B. AO là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron khoảng 90%.",
          "C. Mỗi AO chứa tối đa 6 electron.",
          "D. Mọi AO đều có dạng hình số tám nổi."
        ],
        1,
        "Theo mô hình hiện đại, AO là vùng không gian quanh hạt nhân có xác suất có mặt electron lớn nhất (khoảng 90%)."
      ]
    ],
    "tf": [
      {
        "stem": "Cho nguyên tố X (Z = 12, Magnesium) và nguyên tố Y (Z = 20, Calcium):",
        "items": [
          [
            "a) X và Y thuộc cùng nhóm IIA và ở hai chu kì liên tiếp (chu kì 3 và chu kì 4).",
            true,
            "Mg ([Ne]3s<sup>2</sup>) ở chu kì 3, nhóm IIA; Ca ([Ar]4s<sup>2</sup>) ở chu kì 4, nhóm IIA."
          ],
          [
            "b) Bán kính nguyên tử của X lớn hơn bán kính nguyên tử của Y.",
            false,
            "Cùng nhóm IIA, Ca có 4 lớp e còn Mg có 3 lớp e nên R<sub>Ca</sub> &gt; R<sub>Mg</sub>."
          ],
          [
            "c) Tính kim loại của Y mạnh hơn tính kim loại của X.",
            true,
            "Trong nhóm IIA từ trên xuống dưới, tính kim loại tăng nên Ca mạnh hơn Mg."
          ],
          [
            "d) Tính base của Ca(OH)<sub>2</sub> mạnh hơn tính base của Mg(OH)<sub>2</sub>.",
            true,
            "Vì tính kim loại của Ca &gt; Mg nên tính base của Ca(OH)<sub>2</sub> &gt; Mg(OH)<sub>2</sub>."
          ]
        ]
      },
      {
        "stem": "Xét nguyên tố Iron (Fe) có số hiệu nguyên tử Z = 26 và đồng vị bền phổ biến nhất là <sup>56</sup><sub>26</sub>Fe:",
        "items": [
          [
            "a) Hạt nhân nguyên tử <sup>56</sup><sub>26</sub>Fe có 26 proton và 30 neutron.",
            true,
            "Kí hiệu nguyên tử ⁵⁶₂₆Fe cho biết: số hiệu nguyên tử Z = 26 (tức có 26 proton trong hạt nhân) và số khối A = 56. Số neutron trong hạt nhân là N = A - Z = 56 - 26 = 30 hạt. Khẳng định này là ĐÚNG."
          ],
          [
            "b) Cấu hình electron của nguyên tử Fe ở trạng thái cơ bản là [Ar]3d<sup>6</sup>4s<sup>2</sup>.",
            true,
            "18e của [Ar] + 6e trên 3d + 2e trên 4s = 26e."
          ],
          [
            "c) Khi tạo thành ion Fe<sup>2+</sup>, nguyên tử Fe nhường đi 2 electron ở phân lớp 3d.",
            false,
            "Khi tạo thành ion Fe<sup>2+</sup>, nguyên tử Fe nhường 2e ở lớp ngoài cùng 4s<sup>2</sup> trước, còn lại cấu hình [Ar]3d<sup>6</sup>."
          ],
          [
            "d) Nguyên tố Fe nằm ở ô 26, chu kì 4, nhóm VIIIB trong bảng tuần hoàn.",
            true,
            "Tổng số e hóa trị trên 3d<sup>6</sup>4s<sup>2</sup> là 8 nên Fe thuộc nhóm VIIIB, chu kì 4."
          ]
        ]
      }
    ],
    "short": [
      {
        "question": "Một nguyên tử X có tổng số hạt cơ bản (p, n, e) là 46, trong đó số hạt không mang điện bằng 8/15 tổng số hạt mang điện. Số hiệu nguyên tử Z của X bằng bao nhiêu?",
        "answer": "15",
        "explanation": "Hệ phương trình: {2Z + N = 46 ; N = 8/15 . (2Z)} &rArr; 2Z + 16/15 Z = 46 &rArr; 46/15 Z = 46 &rArr; Z = 15 (Phosphorus)."
      },
      {
        "question": "Ở trạng thái cơ bản, nguyên tử Sulfur (Z = 16) có bao nhiêu lớp electron đã bão hòa?",
        "answer": "2",
        "explanation": "Cấu hình S (Z = 16): 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup>. Lớp K (2e) và lớp L (8e) đã bão hòa, lớp M (6e/18e) chưa bão hòa &rArr; có 2 lớp đã bão hòa."
      },
      {
        "question": "Trong tự nhiên, nguyên tố Silver (Ag, bạc) có hai đồng vị bền là <sup>107</sup>Ag (chiếm 51,84%) và <sup>109</sup>Ag (chiếm 48,16%). Nguyên tử khối trung bình của Ag bằng bao nhiêu (làm tròn đến hàng phần trăm)?",
        "answer": "107,96",
        "explanation": "<span style=\"text-decoration:overline;\">A</span> = (107 . 51,84 + 109 . 48,16)/100 = 107,9632 &approx; 107,96."
      },
      {
        "question": "Hòa tan hoàn toàn 6,4 gam hỗn hợp gồm kim loại Mg và oxide MgO bằng dung dịch HCl dư thu được 2,479 lít khí H<sub>2</sub> (ở đkc: 24,79 lít/mol). Khối lượng của MgO trong hỗn hợp ban đầu bằng bao nhiêu gam?",
        "answer": "4",
        "explanation": "Chỉ có Mg tác dụng với HCl sinh ra H<sub>2</sub>: n<sub>Mg</sub> = n<sub>H2</sub> = 2,479 / 24,79 = 0,1 mol &rArr; m<sub>Mg</sub> = 0,1 . 24 = 2,4 gam. Vậy m<sub>MgO</sub> = 6,4 - 2,4 = 4,0 gam."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (1,5 điểm).",
        "question": "Nguyên tử của nguyên tố R có tổng số hạt cơ bản (proton, neutron, electron) là 48, trong đó số hạt mang điện gấp 2 lần số hạt không mang điện.<br>a) Xác định số hạt p, n, e, số khối A và viết kí hiệu nguyên tử của R.<br>b) Viết cấu hình electron của R, xác định vị trí trong bảng tuần hoàn và viết công thức oxide cao nhất, hydroxide cao nhất của R.",
        "solution": "a) Hệ phương trình: {2Z + N = 48 ; 2Z = 2N} &rArr; Z = N = 16. Số khối A = 16 + 16 = 32. Kí hiệu nguyên tử: <sup>32</sup><sub>16</sub>S (0,75 điểm).<br>b) Cấu hình e: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> (Ô 16, chu kì 3, nhóm VIA). Oxide cao nhất: SO<sub>3</sub>; hydroxide cao nhất: H<sub>2</sub>SO<sub>4</sub> (0,75 điểm)."
      },
      {
        "title": "Câu 2 (1,5 điểm).",
        "question": "Hòa tan hoàn toàn 10,4 gam một hỗn hợp gồm hai kim loại kiềm thổ A và B thuộc hai chu kì liên tiếp (nhóm IIA) vào dung dịch HCl dư, sau phản ứng thu được 7,437 lít khí H<sub>2</sub> (ở đkc: 24,79 lít/mol) và dung dịch muối X.<br>a) Xác định tên hai kim loại A và B.<br>b) Tính tổng khối lượng muối chloride khan thu được khi cô cạn dung dịch X.",
        "solution": "a) Số mol H<sub>2</sub> = 7,437 / 24,79 = 0,3 mol &rArr; n<sub>hh</sub> = n<sub>H2</sub> = 0,3 mol. Nguyên tử khối trung bình: <span style=\"text-decoration:overline;\">M</span> = 10,4 / 0,3 &approx; 34,67 (g/mol). Hai kim loại nhóm IIA ở hai chu kì liên tiếp là Magnesium (Mg = 24) và Calcium (Ca = 40) (1,0 điểm).<br>b) Theo định luật bảo toàn khối lượng (với n<sub>Cl-</sub> = 2.n<sub>H2</sub> = 0,6 mol): m<sub>muối</sub> = m<sub>kim loại</sub> + m<sub>Cl-</sub> = 10,4 + 0,6 . 35,5 = 10,4 + 21,3 = 31,7 gam (0,5 điểm)."
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
        "Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?",
        [
          "A. 7x - 5/y &lt; 0.",
          "B. x - y<sup>2</sup> &ge; y + 10.",
          "C. 5x + y &le; 0.",
          "D. 2x<sup>5</sup> + y<sup>3</sup> &ge; 6."
        ],
        2,
        "Theo định nghĩa trong SGK Toán 10: Bất phương trình bậc nhất hai ẩn x, y là bất phương trình có dạng ax + by &le; c (hoặc &lt;, &ge;, &gt;) trong đó a, b là các số thực không đồng thời bằng 0. Trong các phương án trên, chỉ có 5x + y &le; 0 là bất phương trình bậc nhất hai ẩn."
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
        "Trong các hệ sau, hệ nào không phải là hệ bất phương trình bậc nhất hai ẩn?",
        [
          "A. {x + y &gt; 1 ; 2x - y &gt; 0}.",
          "B. {4x + y &gt; 1 ; 2x - y &le; 0}.",
          "C. {x + y &gt; 1 ; 2024x &ge; 2025}.",
          "D. {x + y &gt; 1 ; 2&radic;x - y &gt; 0}."
        ],
        3,
        "Bất phương trình 2&radic;x - y &gt; 0 chứa căn bậc hai của ẩn x nên không phải là bất phương trình bậc nhất hai ẩn. Do đó hệ D không phải là hệ bất phương trình bậc nhất hai ẩn."
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
        "Bất phương trình nào sau đây là bất phương trình bậc nhất 2 ẩn?",
        [
          "A. 1/x + 2/y &gt; 3",
          "B. x - y/2 &ge; 3",
          "C. x - y &ge; xy",
          "D. x(1 + y) &gt; 0"
        ],
        1,
        "Bất phương trình x - y/2 &ge; 3 có dạng ax + by &ge; c với a = 1, b = -1/2, c = 3 là bất phương trình bậc nhất hai ẩn x và y."
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
    ]
  }
];

if (typeof window !== 'undefined') {
  window.suppliedExams = suppliedExams;
}
if (typeof module !== 'undefined') {
  module.exports = { suppliedExams };
}
