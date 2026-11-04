const newMathExams = [
  {
    "id": "toan-10-pho-thong-01",
    "title": "Toán 10 - Đề phổ thông 01 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {2; 4; 7}?",
        [
          "6",
          "4",
          "3",
          "5"
        ],
        1,
        "4 được liệt kê trong A."
      ],
      [
        "Cho A = [2; 7], B = [5; 10]. Tập A ∩ B là",
        [
          "[2; 5]",
          "[7; 10]",
          "[5; 7]",
          "[2; 10]"
        ],
        2,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “2 là số chẵn” là",
        [
          "2 là số lẻ và là số nguyên tố",
          "2 là số chẵn",
          "2 lớn hơn 0",
          "2 không là số chẵn"
        ],
        3,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 2 là",
        [
          "[2; +∞)",
          "(2; +∞)",
          "(-∞; 2]",
          "(-∞; 2)"
        ],
        0,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 7?",
        [
          "(7; 1)",
          "(2; 2)",
          "(5; 3)",
          "(6; 2)"
        ],
        1,
        "2+2 ≤ 7; các cặp còn lại có tổng lớn hơn 7."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3",
          "xy ≤ 3"
        ],
        2,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (2; 1) có thuộc miền nghiệm x + 2y < 5 không?",
        [
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0",
          "Có"
        ],
        3,
        "Thay vào được 2+2 < 5."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "1/2",
          "√3/2",
          "1",
          "0"
        ],
        0,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 4, 6 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "2",
          "√(53)",
          "√(52)",
          "10"
        ],
        2,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 4 cm và chiều cao 6 cm. Diện tích bằng",
        [
          "24 cm²",
          "10 cm²",
          "20 cm²",
          "12 cm²"
        ],
        3,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R",
          "a = 2R/cos A"
        ],
        0,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [2; 7], B = [5; 10].",
        "items": [
          [
            "6 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "3 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [5; 7]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [2; 10]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 4 cm và 6 cm.",
        "items": [
          [
            "Diện tích tam giác là 12 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 10 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 52 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 10 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {2; 4; 7} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 2, y = 2.",
        "answer": "10",
        "explanation": "2·2 + 3·2 = 10."
      },
      {
        "text": "Tam giác có đáy 4 cm và chiều cao 6 cm. Tính diện tích (cm²).",
        "answer": "12",
        "explanation": "S = 4·6/2 = 12 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 4 cm, 6 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "52",
        "explanation": "Theo định lí côsin hoặc Pythagore: 4² + 6² = 52."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 2 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 2 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [2; 7], B = [5; 10]. Tìm A ∩ B.",
        "solution": "A ∩ B = [5; 7]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(2; 2). Kiểm tra M có là nghiệm của x + y ≤ 5 không.",
        "solution": "Thay vào: 2 + 2 = 4 ≤ 5. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 5.",
        "solution": "F = x + y ≤ 5. Dấu bằng đạt được, chẳng hạn tại (5; 0). Vậy giá trị lớn nhất là 5."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 4 cm và 6 cm. Tính diện tích tam giác.",
        "solution": "S = 4·6/2 = 12 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-02",
    "title": "Toán 10 - Đề phổ thông 02 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {3; 5; 8}?",
        [
          "6",
          "7",
          "5",
          "4"
        ],
        2,
        "5 được liệt kê trong A."
      ],
      [
        "Cho A = [3; 8], B = [6; 11]. Tập A ∩ B là",
        [
          "[3; 11]",
          "[3; 6]",
          "[8; 11]",
          "[6; 8]"
        ],
        3,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “3 là số chẵn” là",
        [
          "3 không là số chẵn",
          "3 là số lẻ và là số nguyên tố",
          "3 là số chẵn",
          "3 lớn hơn 0"
        ],
        0,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 3 là",
        [
          "(-∞; 3)",
          "[3; +∞)",
          "(3; +∞)",
          "(-∞; 3]"
        ],
        1,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 8?",
        [
          "(7; 2)",
          "(8; 1)",
          "(3; 2)",
          "(6; 3)"
        ],
        2,
        "3+2 ≤ 8; các cặp còn lại có tổng lớn hơn 8."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "xy ≤ 3",
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3"
        ],
        3,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (3; 1) có thuộc miền nghiệm x + 2y < 6 không?",
        [
          "Có",
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0"
        ],
        0,
        "Thay vào được 3+2 < 6."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        2,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 5, 7 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "12",
          "2",
          "√(75)",
          "√(74)"
        ],
        3,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 5 cm và chiều cao 7 cm. Diện tích bằng",
        [
          "17.5 cm²",
          "35 cm²",
          "12 cm²",
          "24 cm²"
        ],
        0,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a = 2R/cos A",
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R"
        ],
        1,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [3; 8], B = [6; 11].",
        "items": [
          [
            "7 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "4 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [6; 8]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [3; 11]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 5 cm và 7 cm.",
        "items": [
          [
            "Diện tích tam giác là 17.5 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 12 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 74 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 12 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {3; 5; 8} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 3, y = 2.",
        "answer": "12",
        "explanation": "2·3 + 3·2 = 12."
      },
      {
        "text": "Tam giác có đáy 5 cm và chiều cao 7 cm. Tính diện tích (cm²).",
        "answer": "17.5",
        "explanation": "S = 5·7/2 = 17.5 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 5 cm, 7 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "74",
        "explanation": "Theo định lí côsin hoặc Pythagore: 5² + 7² = 74."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 3 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 3 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [3; 8], B = [6; 11]. Tìm A ∩ B.",
        "solution": "A ∩ B = [6; 8]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(3; 2). Kiểm tra M có là nghiệm của x + y ≤ 6 không.",
        "solution": "Thay vào: 3 + 2 = 5 ≤ 6. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 6.",
        "solution": "F = x + y ≤ 6. Dấu bằng đạt được, chẳng hạn tại (6; 0). Vậy giá trị lớn nhất là 6."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 5 cm và 7 cm. Tính diện tích tam giác.",
        "solution": "S = 5·7/2 = 17.5 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-03",
    "title": "Toán 10 - Đề phổ thông 03 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {4; 6; 9}?",
        [
          "5",
          "7",
          "8",
          "6"
        ],
        3,
        "6 được liệt kê trong A."
      ],
      [
        "Cho A = [4; 9], B = [7; 12]. Tập A ∩ B là",
        [
          "[7; 9]",
          "[4; 12]",
          "[4; 7]",
          "[9; 12]"
        ],
        0,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “4 là số chẵn” là",
        [
          "4 lớn hơn 0",
          "4 không là số chẵn",
          "4 là số lẻ và là số nguyên tố",
          "4 là số chẵn"
        ],
        1,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 4 là",
        [
          "(-∞; 4]",
          "(-∞; 4)",
          "[4; +∞)",
          "(4; +∞)"
        ],
        2,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 9?",
        [
          "(7; 3)",
          "(8; 2)",
          "(9; 1)",
          "(4; 2)"
        ],
        3,
        "4+2 ≤ 9; các cặp còn lại có tổng lớn hơn 9."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "2x - y ≤ 3",
          "xy ≤ 3",
          "x² + y ≤ 3",
          "x + y² ≤ 3"
        ],
        0,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (4; 1) có thuộc miền nghiệm x + 2y < 7 không?",
        [
          "Chỉ khi y = 0",
          "Có",
          "Không",
          "Chỉ khi x = 0"
        ],
        1,
        "Thay vào được 4+2 < 7."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        2,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "√3/2",
          "1",
          "0",
          "1/2"
        ],
        3,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 6, 8 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "√(100)",
          "14",
          "2",
          "√(101)"
        ],
        0,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 6 cm và chiều cao 8 cm. Diện tích bằng",
        [
          "28 cm²",
          "24 cm²",
          "48 cm²",
          "14 cm²"
        ],
        1,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a·sin A = 2R",
          "a = 2R/cos A",
          "a/sin A = 2R",
          "a/sin A = R"
        ],
        2,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [4; 9], B = [7; 12].",
        "items": [
          [
            "8 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "5 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [7; 9]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [4; 12]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm.",
        "items": [
          [
            "Diện tích tam giác là 24 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 14 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 100 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 14 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {4; 6; 9} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 4, y = 2.",
        "answer": "14",
        "explanation": "2·4 + 3·2 = 14."
      },
      {
        "text": "Tam giác có đáy 6 cm và chiều cao 8 cm. Tính diện tích (cm²).",
        "answer": "24",
        "explanation": "S = 6·8/2 = 24 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 6 cm, 8 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "100",
        "explanation": "Theo định lí côsin hoặc Pythagore: 6² + 8² = 100."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 4 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 4 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [4; 9], B = [7; 12]. Tìm A ∩ B.",
        "solution": "A ∩ B = [7; 9]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(4; 2). Kiểm tra M có là nghiệm của x + y ≤ 7 không.",
        "solution": "Thay vào: 4 + 2 = 6 ≤ 7. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 7.",
        "solution": "F = x + y ≤ 7. Dấu bằng đạt được, chẳng hạn tại (7; 0). Vậy giá trị lớn nhất là 7."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Tính diện tích tam giác.",
        "solution": "S = 6·8/2 = 24 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-04",
    "title": "Toán 10 - Đề phổ thông 04 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {5; 7; 10}?",
        [
          "7",
          "6",
          "8",
          "9"
        ],
        0,
        "7 được liệt kê trong A."
      ],
      [
        "Cho A = [5; 10], B = [8; 13]. Tập A ∩ B là",
        [
          "[10; 13]",
          "[8; 10]",
          "[5; 13]",
          "[5; 8]"
        ],
        1,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “5 là số chẵn” là",
        [
          "5 là số chẵn",
          "5 lớn hơn 0",
          "5 không là số chẵn",
          "5 là số lẻ và là số nguyên tố"
        ],
        2,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 5 là",
        [
          "(5; +∞)",
          "(-∞; 5]",
          "(-∞; 5)",
          "[5; +∞)"
        ],
        3,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 10?",
        [
          "(5; 2)",
          "(8; 3)",
          "(9; 2)",
          "(10; 1)"
        ],
        0,
        "5+2 ≤ 10; các cặp còn lại có tổng lớn hơn 10."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "x + y² ≤ 3",
          "2x - y ≤ 3",
          "xy ≤ 3",
          "x² + y ≤ 3"
        ],
        1,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (5; 1) có thuộc miền nghiệm x + 2y < 8 không?",
        [
          "Chỉ khi x = 0",
          "Chỉ khi y = 0",
          "Có",
          "Không"
        ],
        2,
        "Thay vào được 5+2 < 8."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "√3/2",
          "1",
          "0",
          "1/2"
        ],
        3,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "1/2",
          "√3/2",
          "1",
          "0"
        ],
        0,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 7, 9 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "√(131)",
          "√(130)",
          "16",
          "2"
        ],
        1,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 7 cm và chiều cao 9 cm. Diện tích bằng",
        [
          "16 cm²",
          "32 cm²",
          "31.5 cm²",
          "63 cm²"
        ],
        2,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a/sin A = R",
          "a·sin A = 2R",
          "a = 2R/cos A",
          "a/sin A = 2R"
        ],
        3,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [5; 10], B = [8; 13].",
        "items": [
          [
            "9 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "6 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [8; 10]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [5; 13]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 7 cm và 9 cm.",
        "items": [
          [
            "Diện tích tam giác là 31.5 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 16 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 130 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 16 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {5; 7; 10} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 5, y = 2.",
        "answer": "16",
        "explanation": "2·5 + 3·2 = 16."
      },
      {
        "text": "Tam giác có đáy 7 cm và chiều cao 9 cm. Tính diện tích (cm²).",
        "answer": "31.5",
        "explanation": "S = 7·9/2 = 31.5 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 7 cm, 9 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "130",
        "explanation": "Theo định lí côsin hoặc Pythagore: 7² + 9² = 130."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 5 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 5 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [5; 10], B = [8; 13]. Tìm A ∩ B.",
        "solution": "A ∩ B = [8; 10]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(5; 2). Kiểm tra M có là nghiệm của x + y ≤ 8 không.",
        "solution": "Thay vào: 5 + 2 = 7 ≤ 8. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 8.",
        "solution": "F = x + y ≤ 8. Dấu bằng đạt được, chẳng hạn tại (8; 0). Vậy giá trị lớn nhất là 8."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 7 cm và 9 cm. Tính diện tích tam giác.",
        "solution": "S = 7·9/2 = 31.5 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-05",
    "title": "Toán 10 - Đề phổ thông 05 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {6; 8; 11}?",
        [
          "10",
          "8",
          "7",
          "9"
        ],
        1,
        "8 được liệt kê trong A."
      ],
      [
        "Cho A = [6; 11], B = [9; 14]. Tập A ∩ B là",
        [
          "[6; 9]",
          "[11; 14]",
          "[9; 11]",
          "[6; 14]"
        ],
        2,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “6 là số chẵn” là",
        [
          "6 là số lẻ và là số nguyên tố",
          "6 là số chẵn",
          "6 lớn hơn 0",
          "6 không là số chẵn"
        ],
        3,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 6 là",
        [
          "[6; +∞)",
          "(6; +∞)",
          "(-∞; 6]",
          "(-∞; 6)"
        ],
        0,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 11?",
        [
          "(11; 1)",
          "(6; 2)",
          "(9; 3)",
          "(10; 2)"
        ],
        1,
        "6+2 ≤ 11; các cặp còn lại có tổng lớn hơn 11."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3",
          "xy ≤ 3"
        ],
        2,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (6; 1) có thuộc miền nghiệm x + 2y < 9 không?",
        [
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0",
          "Có"
        ],
        3,
        "Thay vào được 6+2 < 9."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "1/2",
          "√3/2",
          "1",
          "0"
        ],
        0,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 8, 10 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "2",
          "√(165)",
          "√(164)",
          "18"
        ],
        2,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 8 cm và chiều cao 10 cm. Diện tích bằng",
        [
          "80 cm²",
          "18 cm²",
          "36 cm²",
          "40 cm²"
        ],
        3,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R",
          "a = 2R/cos A"
        ],
        0,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [6; 11], B = [9; 14].",
        "items": [
          [
            "10 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "7 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [9; 11]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [6; 14]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 8 cm và 10 cm.",
        "items": [
          [
            "Diện tích tam giác là 40 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 18 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 164 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 18 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {6; 8; 11} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 6, y = 2.",
        "answer": "18",
        "explanation": "2·6 + 3·2 = 18."
      },
      {
        "text": "Tam giác có đáy 8 cm và chiều cao 10 cm. Tính diện tích (cm²).",
        "answer": "40",
        "explanation": "S = 8·10/2 = 40 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 8 cm, 10 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "164",
        "explanation": "Theo định lí côsin hoặc Pythagore: 8² + 10² = 164."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 6 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 6 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [6; 11], B = [9; 14]. Tìm A ∩ B.",
        "solution": "A ∩ B = [9; 11]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(6; 2). Kiểm tra M có là nghiệm của x + y ≤ 9 không.",
        "solution": "Thay vào: 6 + 2 = 8 ≤ 9. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 9.",
        "solution": "F = x + y ≤ 9. Dấu bằng đạt được, chẳng hạn tại (9; 0). Vậy giá trị lớn nhất là 9."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 8 cm và 10 cm. Tính diện tích tam giác.",
        "solution": "S = 8·10/2 = 40 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-06",
    "title": "Toán 10 - Đề phổ thông 06 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {7; 9; 12}?",
        [
          "10",
          "11",
          "9",
          "8"
        ],
        2,
        "9 được liệt kê trong A."
      ],
      [
        "Cho A = [7; 12], B = [10; 15]. Tập A ∩ B là",
        [
          "[7; 15]",
          "[7; 10]",
          "[12; 15]",
          "[10; 12]"
        ],
        3,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “7 là số chẵn” là",
        [
          "7 không là số chẵn",
          "7 là số lẻ và là số nguyên tố",
          "7 là số chẵn",
          "7 lớn hơn 0"
        ],
        0,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 7 là",
        [
          "(-∞; 7)",
          "[7; +∞)",
          "(7; +∞)",
          "(-∞; 7]"
        ],
        1,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 12?",
        [
          "(11; 2)",
          "(12; 1)",
          "(7; 2)",
          "(10; 3)"
        ],
        2,
        "7+2 ≤ 12; các cặp còn lại có tổng lớn hơn 12."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "xy ≤ 3",
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3"
        ],
        3,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (7; 1) có thuộc miền nghiệm x + 2y < 10 không?",
        [
          "Có",
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0"
        ],
        0,
        "Thay vào được 7+2 < 10."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        2,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 9, 11 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "20",
          "2",
          "√(203)",
          "√(202)"
        ],
        3,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 9 cm và chiều cao 11 cm. Diện tích bằng",
        [
          "49.5 cm²",
          "99 cm²",
          "20 cm²",
          "40 cm²"
        ],
        0,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a = 2R/cos A",
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R"
        ],
        1,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [7; 12], B = [10; 15].",
        "items": [
          [
            "11 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "8 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [10; 12]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [7; 15]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 9 cm và 11 cm.",
        "items": [
          [
            "Diện tích tam giác là 49.5 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 20 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 202 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 20 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {7; 9; 12} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 7, y = 2.",
        "answer": "20",
        "explanation": "2·7 + 3·2 = 20."
      },
      {
        "text": "Tam giác có đáy 9 cm và chiều cao 11 cm. Tính diện tích (cm²).",
        "answer": "49.5",
        "explanation": "S = 9·11/2 = 49.5 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 9 cm, 11 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "202",
        "explanation": "Theo định lí côsin hoặc Pythagore: 9² + 11² = 202."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 7 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 7 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [7; 12], B = [10; 15]. Tìm A ∩ B.",
        "solution": "A ∩ B = [10; 12]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(7; 2). Kiểm tra M có là nghiệm của x + y ≤ 10 không.",
        "solution": "Thay vào: 7 + 2 = 9 ≤ 10. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 10.",
        "solution": "F = x + y ≤ 10. Dấu bằng đạt được, chẳng hạn tại (10; 0). Vậy giá trị lớn nhất là 10."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 9 cm và 11 cm. Tính diện tích tam giác.",
        "solution": "S = 9·11/2 = 49.5 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-07",
    "title": "Toán 10 - Đề phổ thông 07 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {8; 10; 13}?",
        [
          "9",
          "11",
          "12",
          "10"
        ],
        3,
        "10 được liệt kê trong A."
      ],
      [
        "Cho A = [8; 13], B = [11; 16]. Tập A ∩ B là",
        [
          "[11; 13]",
          "[8; 16]",
          "[8; 11]",
          "[13; 16]"
        ],
        0,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “8 là số chẵn” là",
        [
          "8 lớn hơn 0",
          "8 không là số chẵn",
          "8 là số lẻ và là số nguyên tố",
          "8 là số chẵn"
        ],
        1,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 8 là",
        [
          "(-∞; 8]",
          "(-∞; 8)",
          "[8; +∞)",
          "(8; +∞)"
        ],
        2,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 13?",
        [
          "(11; 3)",
          "(12; 2)",
          "(13; 1)",
          "(8; 2)"
        ],
        3,
        "8+2 ≤ 13; các cặp còn lại có tổng lớn hơn 13."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "2x - y ≤ 3",
          "xy ≤ 3",
          "x² + y ≤ 3",
          "x + y² ≤ 3"
        ],
        0,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (8; 1) có thuộc miền nghiệm x + 2y < 11 không?",
        [
          "Chỉ khi y = 0",
          "Có",
          "Không",
          "Chỉ khi x = 0"
        ],
        1,
        "Thay vào được 8+2 < 11."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        2,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "√3/2",
          "1",
          "0",
          "1/2"
        ],
        3,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 10, 12 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "√(244)",
          "22",
          "2",
          "√(245)"
        ],
        0,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 10 cm và chiều cao 12 cm. Diện tích bằng",
        [
          "44 cm²",
          "60 cm²",
          "120 cm²",
          "22 cm²"
        ],
        1,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a·sin A = 2R",
          "a = 2R/cos A",
          "a/sin A = 2R",
          "a/sin A = R"
        ],
        2,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [8; 13], B = [11; 16].",
        "items": [
          [
            "12 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "9 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [11; 13]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [8; 16]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 10 cm và 12 cm.",
        "items": [
          [
            "Diện tích tam giác là 60 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 22 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 244 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 22 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {8; 10; 13} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 8, y = 2.",
        "answer": "22",
        "explanation": "2·8 + 3·2 = 22."
      },
      {
        "text": "Tam giác có đáy 10 cm và chiều cao 12 cm. Tính diện tích (cm²).",
        "answer": "60",
        "explanation": "S = 10·12/2 = 60 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 10 cm, 12 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "244",
        "explanation": "Theo định lí côsin hoặc Pythagore: 10² + 12² = 244."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 8 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 8 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [8; 13], B = [11; 16]. Tìm A ∩ B.",
        "solution": "A ∩ B = [11; 13]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(8; 2). Kiểm tra M có là nghiệm của x + y ≤ 11 không.",
        "solution": "Thay vào: 8 + 2 = 10 ≤ 11. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 11.",
        "solution": "F = x + y ≤ 11. Dấu bằng đạt được, chẳng hạn tại (11; 0). Vậy giá trị lớn nhất là 11."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 10 cm và 12 cm. Tính diện tích tam giác.",
        "solution": "S = 10·12/2 = 60 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-08",
    "title": "Toán 10 - Đề phổ thông 08 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {9; 11; 14}?",
        [
          "11",
          "10",
          "12",
          "13"
        ],
        0,
        "11 được liệt kê trong A."
      ],
      [
        "Cho A = [9; 14], B = [12; 17]. Tập A ∩ B là",
        [
          "[14; 17]",
          "[12; 14]",
          "[9; 17]",
          "[9; 12]"
        ],
        1,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “9 là số chẵn” là",
        [
          "9 là số chẵn",
          "9 lớn hơn 0",
          "9 không là số chẵn",
          "9 là số lẻ và là số nguyên tố"
        ],
        2,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 9 là",
        [
          "(9; +∞)",
          "(-∞; 9]",
          "(-∞; 9)",
          "[9; +∞)"
        ],
        3,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 14?",
        [
          "(9; 2)",
          "(12; 3)",
          "(13; 2)",
          "(14; 1)"
        ],
        0,
        "9+2 ≤ 14; các cặp còn lại có tổng lớn hơn 14."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "x + y² ≤ 3",
          "2x - y ≤ 3",
          "xy ≤ 3",
          "x² + y ≤ 3"
        ],
        1,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (9; 1) có thuộc miền nghiệm x + 2y < 12 không?",
        [
          "Chỉ khi x = 0",
          "Chỉ khi y = 0",
          "Có",
          "Không"
        ],
        2,
        "Thay vào được 9+2 < 12."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "√3/2",
          "1",
          "0",
          "1/2"
        ],
        3,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "1/2",
          "√3/2",
          "1",
          "0"
        ],
        0,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 11, 13 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "√(291)",
          "√(290)",
          "24",
          "2"
        ],
        1,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 11 cm và chiều cao 13 cm. Diện tích bằng",
        [
          "24 cm²",
          "48 cm²",
          "71.5 cm²",
          "143 cm²"
        ],
        2,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a/sin A = R",
          "a·sin A = 2R",
          "a = 2R/cos A",
          "a/sin A = 2R"
        ],
        3,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [9; 14], B = [12; 17].",
        "items": [
          [
            "13 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "10 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [12; 14]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [9; 17]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 11 cm và 13 cm.",
        "items": [
          [
            "Diện tích tam giác là 71.5 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 24 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 290 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 24 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {9; 11; 14} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 9, y = 2.",
        "answer": "24",
        "explanation": "2·9 + 3·2 = 24."
      },
      {
        "text": "Tam giác có đáy 11 cm và chiều cao 13 cm. Tính diện tích (cm²).",
        "answer": "71.5",
        "explanation": "S = 11·13/2 = 71.5 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 11 cm, 13 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "290",
        "explanation": "Theo định lí côsin hoặc Pythagore: 11² + 13² = 290."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 9 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 9 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [9; 14], B = [12; 17]. Tìm A ∩ B.",
        "solution": "A ∩ B = [12; 14]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(9; 2). Kiểm tra M có là nghiệm của x + y ≤ 12 không.",
        "solution": "Thay vào: 9 + 2 = 11 ≤ 12. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 12.",
        "solution": "F = x + y ≤ 12. Dấu bằng đạt được, chẳng hạn tại (12; 0). Vậy giá trị lớn nhất là 12."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 11 cm và 13 cm. Tính diện tích tam giác.",
        "solution": "S = 11·13/2 = 71.5 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-09",
    "title": "Toán 10 - Đề phổ thông 09 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {10; 12; 15}?",
        [
          "14",
          "12",
          "11",
          "13"
        ],
        1,
        "12 được liệt kê trong A."
      ],
      [
        "Cho A = [10; 15], B = [13; 18]. Tập A ∩ B là",
        [
          "[10; 13]",
          "[15; 18]",
          "[13; 15]",
          "[10; 18]"
        ],
        2,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “10 là số chẵn” là",
        [
          "10 là số lẻ và là số nguyên tố",
          "10 là số chẵn",
          "10 lớn hơn 0",
          "10 không là số chẵn"
        ],
        3,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 10 là",
        [
          "[10; +∞)",
          "(10; +∞)",
          "(-∞; 10]",
          "(-∞; 10)"
        ],
        0,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 15?",
        [
          "(15; 1)",
          "(10; 2)",
          "(13; 3)",
          "(14; 2)"
        ],
        1,
        "10+2 ≤ 15; các cặp còn lại có tổng lớn hơn 15."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3",
          "xy ≤ 3"
        ],
        2,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (10; 1) có thuộc miền nghiệm x + 2y < 13 không?",
        [
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0",
          "Có"
        ],
        3,
        "Thay vào được 10+2 < 13."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "1/2",
          "√3/2",
          "1",
          "0"
        ],
        0,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 12, 14 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "2",
          "√(341)",
          "√(340)",
          "26"
        ],
        2,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 12 cm và chiều cao 14 cm. Diện tích bằng",
        [
          "168 cm²",
          "26 cm²",
          "52 cm²",
          "84 cm²"
        ],
        3,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R",
          "a = 2R/cos A"
        ],
        0,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [10; 15], B = [13; 18].",
        "items": [
          [
            "14 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "11 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [13; 15]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [10; 18]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 12 cm và 14 cm.",
        "items": [
          [
            "Diện tích tam giác là 84 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 26 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 340 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 26 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {10; 12; 15} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 10, y = 2.",
        "answer": "26",
        "explanation": "2·10 + 3·2 = 26."
      },
      {
        "text": "Tam giác có đáy 12 cm và chiều cao 14 cm. Tính diện tích (cm²).",
        "answer": "84",
        "explanation": "S = 12·14/2 = 84 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 12 cm, 14 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "340",
        "explanation": "Theo định lí côsin hoặc Pythagore: 12² + 14² = 340."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 10 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 10 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [10; 15], B = [13; 18]. Tìm A ∩ B.",
        "solution": "A ∩ B = [13; 15]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(10; 2). Kiểm tra M có là nghiệm của x + y ≤ 13 không.",
        "solution": "Thay vào: 10 + 2 = 12 ≤ 13. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 13.",
        "solution": "F = x + y ≤ 13. Dấu bằng đạt được, chẳng hạn tại (13; 0). Vậy giá trị lớn nhất là 13."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 12 cm và 14 cm. Tính diện tích tam giác.",
        "solution": "S = 12·14/2 = 84 cm²."
      }
    ]
  },
  {
    "id": "toan-10-pho-thong-10",
    "title": "Toán 10 - Đề phổ thông 10 - Giữa học kì I",
    "subject": "math",
    "duration": 90,
    "tfScoring": "per-item",
    "school": "Bộ đề luyện tập",
    "province": "",
    "year": "2026–2027",
    "description": "Đề luyện tập phổ thông gồm 12 câu ABCD, 2 câu đúng sai, 4 câu trả lời ngắn và 6 câu tự luận.",
    "questions": [
      [
        "Số nào sau đây thuộc tập A = {11; 13; 16}?",
        [
          "14",
          "15",
          "13",
          "12"
        ],
        2,
        "13 được liệt kê trong A."
      ],
      [
        "Cho A = [11; 16], B = [14; 19]. Tập A ∩ B là",
        [
          "[11; 19]",
          "[11; 14]",
          "[16; 19]",
          "[14; 16]"
        ],
        3,
        "Giao gồm các số thuộc cả hai đoạn."
      ],
      [
        "Phủ định của mệnh đề “11 là số chẵn” là",
        [
          "11 không là số chẵn",
          "11 là số lẻ và là số nguyên tố",
          "11 là số chẵn",
          "11 lớn hơn 0"
        ],
        0,
        "Phủ định trực tiếp thêm từ “không”."
      ],
      [
        "Tập nghiệm của x ≥ 11 là",
        [
          "(-∞; 11)",
          "[11; +∞)",
          "(11; +∞)",
          "(-∞; 11]"
        ],
        1,
        "Dấu bằng cho biết đầu mút được lấy."
      ],
      [
        "Cặp số nào là nghiệm của x + y ≤ 16?",
        [
          "(15; 2)",
          "(16; 1)",
          "(11; 2)",
          "(14; 3)"
        ],
        2,
        "11+2 ≤ 16; các cặp còn lại có tổng lớn hơn 16."
      ],
      [
        "Bất phương trình nào là bậc nhất hai ẩn?",
        [
          "xy ≤ 3",
          "x² + y ≤ 3",
          "x + y² ≤ 3",
          "2x - y ≤ 3"
        ],
        3,
        "Hai ẩn chỉ có bậc nhất và không nhân với nhau."
      ],
      [
        "Điểm (11; 1) có thuộc miền nghiệm x + 2y < 14 không?",
        [
          "Có",
          "Không",
          "Chỉ khi x = 0",
          "Chỉ khi y = 0"
        ],
        0,
        "Thay vào được 11+2 < 14."
      ],
      [
        "Giá trị của sin 30° là",
        [
          "0",
          "1/2",
          "√3/2",
          "1"
        ],
        1,
        "sin 30° = 1/2."
      ],
      [
        "Giá trị của cos 60° là",
        [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        2,
        "cos 60° = 1/2."
      ],
      [
        "Tam giác có hai cạnh 13, 15 và góc xen giữa 90°. Cạnh đối diện góc ấy bằng",
        [
          "28",
          "2",
          "√(395)",
          "√(394)"
        ],
        3,
        "Áp dụng định lí Pythagore."
      ],
      [
        "Tam giác có đáy 13 cm và chiều cao 15 cm. Diện tích bằng",
        [
          "97.5 cm²",
          "195 cm²",
          "28 cm²",
          "56 cm²"
        ],
        0,
        "S = đáy × chiều cao / 2."
      ],
      [
        "Trong tam giác ABC, cạnh a đối diện góc A. Theo định lí sin, biểu thức nào đúng?",
        [
          "a = 2R/cos A",
          "a/sin A = 2R",
          "a/sin A = R",
          "a·sin A = 2R"
        ],
        1,
        "Theo định lí sin, a/sin A = 2R."
      ]
    ],
    "tf": [
      {
        "stem": "Cho A = [11; 16], B = [14; 19].",
        "items": [
          [
            "15 thuộc A ∩ B",
            true,
            "Thuộc cả A và B."
          ],
          [
            "12 thuộc B",
            false,
            "Nhỏ hơn đầu mút trái của B."
          ],
          [
            "A ∩ B = [14; 16]",
            true,
            "Hai đoạn giao nhau từ k+3 đến k+5."
          ],
          [
            "A ∪ B = [11; 19]",
            true,
            "Hai đoạn chồng nhau nên hợp là một đoạn."
          ]
        ]
      },
      {
        "stem": "Cho tam giác vuông có hai cạnh góc vuông 13 cm và 15 cm.",
        "items": [
          [
            "Diện tích tam giác là 97.5 cm²",
            true,
            "S = ab/2."
          ],
          [
            "Cạnh huyền bằng 28 cm",
            false,
            "Cạnh huyền bằng căn của tổng hai bình phương."
          ],
          [
            "Bình phương cạnh huyền là 394 cm²",
            true,
            "Theo định lí Pythagore."
          ],
          [
            "Chu vi tam giác bằng 28 cm",
            false,
            "Còn phải cộng độ dài cạnh huyền."
          ]
        ]
      }
    ],
    "short": [
      {
        "text": "Tập A = {11; 13; 16} có bao nhiêu phần tử?",
        "answer": "3",
        "explanation": "Có ba phần tử phân biệt."
      },
      {
        "text": "Tính giá trị 2x + 3y tại x = 11, y = 2.",
        "answer": "28",
        "explanation": "2·11 + 3·2 = 28."
      },
      {
        "text": "Tam giác có đáy 13 cm và chiều cao 15 cm. Tính diện tích (cm²).",
        "answer": "97.5",
        "explanation": "S = 13·15/2 = 97.5 cm²."
      },
      {
        "text": "Tam giác có hai cạnh 13 cm, 15 cm và góc xen giữa 90°. Bình phương cạnh đối diện góc đó bằng bao nhiêu?",
        "answer": "394",
        "explanation": "Theo định lí côsin hoặc Pythagore: 13² + 15² = 394."
      }
    ],
    "essay": [
      {
        "title": "Câu 1 (0,5 điểm)",
        "question": "Viết mệnh đề phủ định của “Mọi x thuộc R đều có x² + 11 > 0”.",
        "solution": "Tồn tại x thuộc R sao cho x² + 11 ≤ 0."
      },
      {
        "title": "Câu 2 (0,5 điểm)",
        "question": "Tính giá trị cos 120°.",
        "solution": "cos 120° = cos(180° - 60°) = -cos 60° = -1/2."
      },
      {
        "title": "Câu 3 (0,5 điểm)",
        "question": "Cho A = [11; 16], B = [14; 19]. Tìm A ∩ B.",
        "solution": "A ∩ B = [14; 16]."
      },
      {
        "title": "Câu 4 (0,5 điểm)",
        "question": "Xét điểm M(11; 2). Kiểm tra M có là nghiệm của x + y ≤ 14 không.",
        "solution": "Thay vào: 11 + 2 = 13 ≤ 14. Vậy M là nghiệm."
      },
      {
        "title": "Câu 5 (0,5 điểm)",
        "question": "Tìm giá trị lớn nhất của F = x + y trên miền x ≥ 0, y ≥ 0, x + y ≤ 14.",
        "solution": "F = x + y ≤ 14. Dấu bằng đạt được, chẳng hạn tại (14; 0). Vậy giá trị lớn nhất là 14."
      },
      {
        "title": "Câu 6 (0,5 điểm)",
        "question": "Tam giác vuông có hai cạnh góc vuông 13 cm và 15 cm. Tính diện tích tam giác.",
        "solution": "S = 13·15/2 = 97.5 cm²."
      }
    ]
  }
];
