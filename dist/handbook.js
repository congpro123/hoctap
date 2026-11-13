/**
 * Sổ tay Công thức & Lý thuyết Trọng tâm Giữa kì I (Lớp 10)
 * Bám sát ma trận 39 bộ đề thi chính thức:
 * - Toán 10 (13 bộ đề): Mệnh đề, Tập hợp, BPT bậc nhất 2 ẩn, Hệ thức lượng tam giác
 * - Vật lý 10 (10 bộ đề): An toàn, Sai số, Độ dịch chuyển, Vận tốc, Chuyển động biến đổi đều, Đồ thị, Rơi tự do (Bài 1 - 11)
 * - Hóa học 10 (16 bộ đề): Hạt nguyên tử, Đồng vị, Orbital AO, Cấu hình electron, Bảng tuần hoàn & Quy luật tuần hoàn
 */

const handbookData = {
  "math": {
    "id": "math",
    "name": "Toán 10",
    "icon": "📐",
    "color": "#4f46e5",
    "bg": "#eeeaff",
    "sections": [
      {
        "title": "Chương I: Mệnh đề & Tập hợp (Toán 10)",
        "badge": "Trọng tâm Đề 01 – Đề 13",
        "items": [
          {
            "name": "1. Mệnh đề toán học, Mệnh đề kéo theo & Mệnh đề đảo",
            "freq": "100% đề thi (Câu 1 Phần I hoặc Tự luận)",
            "forms": "Phần I (Trắc nghiệm), Phần IV (Tự luận)",
            "formula": "• Mệnh đề kéo theo: $P \\implies Q$ (\"Nếu $P$ thì $Q$\")<br>&nbsp;&nbsp;+ $P$ là giả thiết (điều kiện đủ) &nbsp;|&nbsp; $Q$ là kết luận (điều kiện cần)<br>&nbsp;&nbsp;+ $P \\implies Q$ chỉ SAI khi $P$ đúng mà $Q$ sai<br>• Mệnh đề đảo: $Q \\implies P$ (\"Nếu $Q$ thì $P$\")<br>• Mệnh đề tương đương: $P \\iff Q$ (\"$P$ khi và chỉ khi $Q$\", đúng khi cả $P$ và $Q$ cùng đúng hoặc cùng sai)",
            "desc": "Mệnh đề toán học là một câu khẳng định có tính đúng hoặc sai dứt khoát. Câu hỏi, câu cảm thán, câu cầu khiến/ra lệnh KHÔNG phải là mệnh đề.",
            "example": "• Đề bài: Cho \"Nếu hai tam giác bằng nhau thì diện tích hai tam giác đó bằng nhau\" ($P \\implies Q$).<br>&rArr; Mệnh đề đảo là: \"Nếu hai tam giác có diện tích bằng nhau thì hai tam giác đó bằng nhau\" ($Q \\implies P$).",
            "traps": "Mệnh đề đảo của một mệnh đề đúng KHÔNG nhất thiết phải đúng (ví dụ hai tam giác có diện tích bằng nhau thì chưa chắc đã bằng nhau)."
          },
          {
            "name": "2. Mệnh đề phủ định & Lượng từ Với mọi (∀), Tồn tại (∃)",
            "freq": "Xuất hiện ở tất cả 13 đề",
            "forms": "Phần I (Trắc nghiệm), Phần IV (Tự luận)",
            "formula": "★ QUY TẮC LẬP MỆNH ĐỀ PHỦ ĐỊNH:<br>• Phủ định của $(\\forall x \\in X, P(x))$ là: $$\\exists x \\in X, \\overline{P}(x)$$<br>• Phủ định của $(\\exists x \\in X, P(x))$ là: $$\\forall x \\in X, \\overline{P}(x)$$<br>• Đổi dấu quan hệ: $<$ thành $\\ge$ &nbsp;|&nbsp; $>$ thành $\\le$ &nbsp;|&nbsp; $=$ thành $\\ne$ &nbsp;|&nbsp; $\\le$ thành $>$ &nbsp;|&nbsp; $\\ge$ thành $<$",
            "desc": "Để phủ định một mệnh đề chứa lượng từ, ta vừa đổi lượng từ ($\\forall \\leftrightarrow \\exists$) vừa phủ định vị ngữ $P(x)$.",
            "example": "• Phủ định của \"$\\exists x \\in \\mathbb{R}, 2x - 1 < 0$\" là: \"$\\forall x \\in \\mathbb{R}, 2x - 1 \\ge 0$\".<br>• Mệnh đề $P$: \"$\\exists x \\in \\mathbb{R}, x^2 - 3x + 2 = 0$\" là mệnh đề ĐÚNG (vì có nghiệm $x=1, x=2$). Phủ định $\\overline{P}$ là: \"$\\forall x \\in \\mathbb{R}, x^2 - 3x + 2 \\ne 0$\".",
            "traps": "Rất nhiều học sinh quên dấu bằng khi phủ định: Phủ định của \"<\" là \"\\ge\" (phải có dấu bằng), không phải là \">\". Ngược lại, phủ định của \"\\le\" là \">\". Phủ định của dấu \"=\" là \"\\ne\"."
          },
          {
            "name": "3. Tập hợp, Các phép toán A ∩ B, A ∪ B, A \\ B & Số phần tử",
            "freq": "100% đề thi (Trắc nghiệm, Điền số, Tự luận)",
            "forms": "Phần I, Phần II, Phần III, Phần IV",
            "formula": "• Giao: $A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}$ (Lấy phần tử CHUNG)<br>• Hợp: $A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}$ (Gộp TẤT CẢ phần tử, không lặp lại)<br>• Hiệu: $A \\setminus B = \\{x \\mid x \\in A \\land x \\notin B\\}$ (Thuộc $A$ nhưng BỎ phần thuộc $B$)<br>• Phần bù trong $\\mathbb{R}$: $C_\\mathbb{R} B = \\mathbb{R} \\setminus B$<br><br>★ CÔNG THỨC ĐẾM SỐ PHẦN TỬ: $$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$<br>• Số tập con của tập có $n$ phần tử là: $2^n$ (tập rỗng $\\emptyset$ là tập con của mọi tập hợp)",
            "desc": "Bài toán thực tế học sinh tham gia các câu lạc bộ (CLB bóng đá, bóng rổ...) luôn dùng công thức cộng số phần tử để tìm số học sinh tham gia ít nhất 1 CLB hoặc không tham gia CLB nào.",
            "example": "• Cho $A = \\{x \\in \\mathbb{Z} \\mid -4 < x < 4\\} = \\{-3; -2; -1; 0; 1; 2; 3\\}$ (7 phần tử) và $B = \\{-2; 0; 2; 4; 6\\}$.<br>&rArr; $A \\cup B = \\{-3; -2; -1; 0; 1; 2; 3; 4; 6\\} \\implies n(A \\cup B) = 9$.<br>• Lớp 45 học sinh: 18 bóng đá, 15 bóng rổ, 10 cả hai &rArr; Không tham gia môn nào: $45 - (18 + 15 - 10) = 22$.",
            "traps": "Phân biệt tập số tự nhiên $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$ với tập số nguyên $\\mathbb{Z}$. Nếu phương trình có nghiệm âm $x = -6$ thì $-6 \\notin \\mathbb{N}$, không được đưa vào tập hợp con của $\\mathbb{N}$!"
          },
          {
            "name": "4. Các tập con của số thực ℝ & Trục số",
            "freq": "100% đề thi (Khoảng, Đoạn, Nửa khoảng)",
            "forms": "Phần I (Trắc nghiệm), Phần II (Đúng/Sai)",
            "formula": "• Khoảng: $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\} \\qquad (-\\infty; a) \\qquad (b; +\\infty)$<br>• Đoạn: $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$ (Lấy cả 2 đầu mút $a$ và $b$)<br>• Nửa khoảng: $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\} \\qquad (a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$<br>&nbsp;&nbsp;$$[a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x \\ge a\\} \\qquad (-\\infty; a] = \\{x \\in \\mathbb{R} \\mid x \\le a\\}$$",
            "desc": "Biểu diễn trên trục số: Gạch bỏ phần không thuộc tập hợp, rồi lấy giao (phần trắng chung) hoặc hợp (tất cả phần trắng nối liền nhau).",
            "example": "• Cho $A = [-2; 4)$ và $B = (0; +\\infty) \\implies A \\cap B = (0; 4)$.<br>• Cho $A = (-5; 4]$ và $B = (1; +\\infty) \\implies A \\cup B = (-5; +\\infty)$.",
            "traps": "Ngoặc tròn \"(\" nghĩa là KHÔNG lấy đầu mút ($<$ hoặc $>$). Ngoặc vuông \"[\" nghĩa là CÓ lấy đầu mút ($\\le$ hoặc $\\ge$). Viết tập hợp $\\{x \\in \\mathbb{R} \\mid -3 < x \\le 10\\}$ tương ứng với $(-3; 10]$."
          }
        ]
      },
      {
        "title": "Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn",
        "badge": "Trọng tâm Đề 01 – Đề 13",
        "items": [
          {
            "name": "1. Bất phương trình bậc nhất hai ẩn & Điểm thuộc miền nghiệm",
            "freq": "Xuất hiện 13/13 đề thi",
            "forms": "Phần I (Trắc nghiệm)",
            "formula": "• Dạng tổng quát: $$ax + by \\le c \\quad (\\text{hoặc } \\ge, <, > c)$$ với $a, b$ không đồng thời bằng 0 ($a^2 + b^2 \\ne 0$).<br>• Đặc điểm: Các ẩn $x$ và $y$ chỉ mang số mũ 1, không có tích $xy$, không có căn $\\sqrt{x}, \\sqrt{y}$.<br>• Cách kiểm tra nghiệm: Thay tọa độ điểm $M(x_0; y_0)$ vào vế trái:<br>&nbsp;&nbsp;+ Nếu thỏa mãn bất đẳng thức &rArr; Điểm $M$ thuộc miền nghiệm.<br>&nbsp;&nbsp;+ Nếu không thỏa mãn &rArr; Điểm $M$ KHÔNG thuộc miền nghiệm.",
            "desc": "Mỗi bất phương trình bậc nhất hai ẩn xác định một nửa mặt phẳng có bờ là đường thẳng $(d): ax + by = c$.",
            "example": "• $2x + y \\le 1$ là BPT bậc nhất hai ẩn. Các biểu thức $2x^2 + y \\le 1$ hay $2x + y^2 \\le 1$ không phải vì có bậc 2.<br>• Điểm $A(-1; 3)$ thuộc miền nghiệm của $-3x + 2y - 4 > 0$ vì $-3(-1) + 2(3) - 4 = 5 > 0$.",
            "traps": "Chú ý dấu âm của tọa độ: Thay $x = -1$ vào $-3x$ là $-3(-1) = +3$. Tính nhầm dấu là nguyên nhân sai phổ biến nhất."
          },
          {
            "name": "2. Biểu diễn miền nghiệm trên Oxy & Đọc đồ thị miền nghiệm",
            "freq": "100% đề thi có câu đồ thị hình vẽ",
            "forms": "Phần I (Nhìn đồ thị chọn BPT), Phần IV (Tự luận)",
            "formula": "★ QUY TRÌNH XÁC ĐỊNH MIỀN NGHIỆM:<br>1. Vẽ đường thẳng bờ $(d): ax + by = c$: Tìm 2 điểm cắt trục: $(c/a; 0)$ trên $Ox$ và $(0; c/b)$ trên $Oy$.<br>2. Chọn điểm thử $O(0; 0)$ (nếu đường thẳng không qua $O$):<br>&nbsp;&nbsp;• Nếu $a(0) + b(0) \\le c$ đúng &rArr; Nửa mặt phẳng CHỨA $O$ là miền nghiệm.<br>&nbsp;&nbsp;• Nếu sai &rArr; Nửa mặt phẳng KHÔNG CHỨA $O$ là miền nghiệm.<br>3. Bờ đường thẳng: Dấu $\\le, \\ge$ vẽ nét liền (kể cả bờ); dấu $<, >$ vẽ nét đứt (không kể bờ).",
            "desc": "Khi đọc đồ thị có phần gạch chéo: Xác định phương trình đường thẳng bờ $d$ đi qua 2 điểm trên trục, sau đó thử tọa độ gốc $O(0; 0)$ để chọn dấu bất đẳng thức phù hợp.",
            "example": "• Đường thẳng $d$ cắt $Ox$ tại $(2; 0)$ và $Oy$ tại $(0; -1)$: Phương trình đoạn chắn là $\\frac{x}{2} + \\frac{y}{-1} = 1 \\iff x - 2y = 2$. Phần không bị gạch chéo chứa gốc $O(0; 0)$, thay $0 - 0 = 0 \\le 2$ &rArr; Bất phương trình tương ứng là $x - 2y \\le 2$.",
            "traps": "Nếu đề bài yêu cầu miền nghiệm \"kể cả bờ\" thì bất đẳng thức bắt buộc phải có dấu bằng ($\\le$ hoặc $\\ge$)."
          },
          {
            "name": "3. Diện tích miền nghiệm & Bài toán tối ưu quy hoạch tuyến tính",
            "freq": "Xuất hiện ở Phần III (Điền số) và Tự luận (Phần IV)",
            "forms": "Phần III (Điền số), Phần IV (Tự luận)",
            "formula": "• Miền nghiệm của hệ BPT là miền đa giác (tam giác, tứ giác...) giao của các nửa mặt phẳng.<br>• Diện tích tam giác vuông có 2 cạnh góc vuông $a, b$: $$S = \\frac{1}{2} a \\cdot b$$<br>★ ĐỊNH LÍ TỐI ƯU TUYẾN TÍNH: Biểu thức mục tiêu $F(x, y) = ax + by$ trên miền đa giác lồi luôn đạt Giá trị lớn nhất (Max) và Giá trị nhỏ nhất (Min) tại một trong các ĐỈNH của đa giác đó.<br>• Các bước giải: Lập hệ BPT &rArr; Xác định tọa độ các đỉnh &rArr; Tính giá trị tại từng đỉnh &rArr; Kết luận.",
            "desc": "Bài toán tối ưu thực tế (lợi nhuận sản xuất xưởng thủ công, chi phí trả lương nhân viên nhà hàng ca I, ca II...) luôn được giải bằng cách xét giá trị tại các đỉnh miền nghiệm.",
            "example": "• Miền nghiệm hệ $\\{x + y \\le 8; x \\ge 0; y \\ge 1\\}$ là tam giác vuông tại $A(0; 1)$ có $B(0; 8), C(7; 1) \\implies AB = 7, AC = 7 \\implies S = \\frac{1}{2} \\cdot 7 \\cdot 7 = 24{,}5$.<br>• Chi phí $T = 160x + 176y$ với điều kiện $\\{x \\ge 3; y \\le 10; y \\ge 2x; x + y \\ge 12\\}$: Các đỉnh $A(3; 9), B(3; 10), C(5; 10), D(4; 8) \\implies T$ nhỏ nhất tại $D(4; 8)$ là 2.048.000 đồng.",
            "traps": "Đừng quên các điều kiện tự nhiên trong bài toán thực tế: Số người, số sản phẩm phải là số tự nhiên ($x, y \\in \\mathbb{N}$). Khi tính diện tích tam giác vuông, độ dài cạnh $AB = |y_B - y_A|$ (lấy hiệu tung độ)."
          }
        ]
      },
      {
        "title": "Chương III: Hệ thức lượng trong tam giác",
        "badge": "Trọng tâm Đề 01 – Đề 13",
        "items": [
          {
            "name": "1. Giá trị lượng giác của một góc (0° đến 180°)",
            "freq": "100% đề thi (Trắc nghiệm, Đúng/Sai, Điền số)",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "★ DẤU LƯỢNG GIÁC THEO GÓC:<br>• Với mọi góc trong tam giác ($0^\\circ < \\alpha < 180^\\circ$): Luôn có $$\\sin\\alpha > 0$$<br>• Góc nhọn ($0^\\circ < \\alpha < 90^\\circ$): $\\sin > 0, \\cos > 0, \\tan > 0, \\cot > 0$<br>• Góc tù ($90^\\circ < \\alpha < 180^\\circ$): $$\\sin > 0 \\quad \\cos < 0 \\quad \\tan < 0 \\quad \\cot < 0$$<br><br>★ CÔNG THỨC LƯỢNG GIÁC CƠ BẢN:<br>• $$\\sin^2\\alpha + \\cos^2\\alpha = 1 \\implies \\cos\\alpha = \\pm\\sqrt{1 - \\sin^2\\alpha}$$<br>• $$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} \\qquad \\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha} \\qquad \\tan\\alpha \\cdot \\cot\\alpha = 1$$<br>• Hai góc bù nhau: $$\\sin(180^\\circ - \\alpha) = \\sin\\alpha \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha$$",
            "desc": "Trong tam giác: Góc A nhọn &hArr; cos A > 0; góc A vuông &hArr; cos A = 0; góc A tù &hArr; cos A < 0.",
            "example": "• Cho $90^\\circ < \\alpha < 180^\\circ$ và $\\sin\\alpha = \\frac{5}{13}$. Vì $\\alpha$ tù nên $\\cos\\alpha = -\\sqrt{1 - (5/13)^2} = -\\frac{12}{13}$.<br>&rArr; $P = 3\\sin\\alpha + 2\\cos\\alpha = 3(5/13) + 2(-12/13) = -\\frac{9}{13}$.",
            "traps": "Bẫy góc tù: Góc tù có $\\cos$ mang dấu ÂM! Nếu quên dấu trừ $\\cos\\alpha = -12/13$, toàn bộ phép tính biểu thức $P$ hay định lí cosin sẽ bị sai hoàn toàn."
          },
          {
            "name": "2. Định lí Cosin, Định lí Sin & Bán kính ngoại tiếp R",
            "freq": "100% đề thi có định lí Sin và Cosin",
            "forms": "Phần I, Phần II, Phần III, Phần IV",
            "formula": "★ ĐỊNH LÍ COSIN (Tính cạnh thứ ba hoặc góc):<br>$$a^2 = b^2 + c^2 - 2bc \\cos A \\implies \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$<br>$$b^2 = a^2 + c^2 - 2ac \\cos B \\qquad c^2 = a^2 + b^2 - 2ab \\cos C$$<br><br>★ ĐỊNH LÍ SIN (Tính cạnh, góc và bán kính ngoại tiếp $R$):<br>$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\implies R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C}$$",
            "desc": "Áp dụng định lí Cosin khi biết 2 cạnh và góc xen giữa, hoặc biết cả 3 cạnh. Áp dụng định lí Sin khi biết 1 cạnh và 2 góc, hoặc biết 2 cạnh và 1 góc đối diện.",
            "example": "• Cho tam giác $ABC$ có $AB = 13, AC = 16, \\cos A = 12/13$.<br>&rArr; $BC^2 = 13^2 + 16^2 - 2 \\cdot 13 \\cdot 16 \\cdot (12/13) = 169 + 256 - 384 = 41 \\implies BC = \\sqrt{41} \\approx 6{,}4$.<br>• $R = \\frac{BC}{2\\sin A} = \\frac{\\sqrt{41}}{2 \\cdot (5/13)} = \\frac{13\\sqrt{41}}{10}$.",
            "traps": "Công thức bán kính ngoại tiếp $R = \\frac{a}{2\\sin A}$: Rất nhiều bạn quên số 2 ở mẫu số! Hãy luôn nhớ mẫu là $2\\sin A$."
          },
          {
            "name": "3. 5 Công thức tính diện tích tam giác & Bán kính nội tiếp r",
            "freq": "Xuất hiện trong tất cả 13 đề",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "1. Theo cạnh và đường cao tương ứng: $$S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$$<br>2. Theo 2 cạnh và sin góc xen giữa: $$S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B$$<br>3. Theo 3 cạnh và bán kính ngoại tiếp $R$: $$S = \\frac{abc}{4R} \\implies R = \\frac{abc}{4S}$$<br>4. Theo nửa chu vi $p = \\frac{a+b+c}{2}$ và bán kính nội tiếp $r$: $$S = p \\cdot r \\implies r = \\frac{S}{p}$$<br>5. Công thức Heron: S = $\\sqrt{p(p - a)(p - b)(p - c)}$ (khi biết cả 3 cạnh)",
            "desc": "Tùy theo giả thiết bài toán mà chọn công thức phù hợp. Thường gặp nhất là $S = \\frac{1}{2}bc\\sin A$ và tính $r = S/p$.",
            "example": "• Cho $AB = 13, AC = 16, \\cos A = 12/13 \\implies \\sin A = 5/13$.<br>&rArr; Diện tích $S = \\frac{1}{2} \\cdot 13 \\cdot 16 \\cdot \\frac{5}{13} = 40$.",
            "traps": "Nhớ $p$ trong công thức Heron và $S = pr$ là NỬA CHU VI ($p = \\frac{a+b+c}{2}$), không phải chu vi."
          },
          {
            "name": "4. Ứng dụng giải tam giác vào bài toán thực tế (Đo khoảng cách & Chiều cao)",
            "freq": "Dạng bài chốt điểm 9 – 10 (Đề 01, 04, 07, 10, 13)",
            "forms": "Phần III (Điền số), Phần IV (Tự luận)",
            "formula": "★ DẠNG 1: HAI TÀU THỦY RỜI CẢNG $O$ GÓC $\\alpha$<br>• Sau thời gian $t$: $OM = v_1 t, ON = v_2 t$.<br>• Khoảng cách giữa 2 tàu dùng định lí Cosin: $MN = \\sqrt{OM^2 + ON^2 - 2 \\cdot OM \\cdot ON \\cdot \\cos\\alpha}$.<br><br>★ DẠNG 2: ĐO KHOẢNG CÁCH RA CÙ LAO / HẢI ĐĂNG $C$ ĐẾN BỜ $AB$<br>• Đo đoạn bờ $AB$ và 2 góc $\\widehat{A}, \\widehat{B} \\implies \\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B})$.<br>• Dùng định lí Sin tìm cạnh $AC$: $AC = \\frac{AB \\cdot \\sin B}{\\sin C}$.<br>• Khoảng cách từ $C$ ra bờ $AB$ là đường cao $h = AC \\cdot \\sin A$.<br><br>★ DẠNG 3: ĐO CHIỀU CAO CÂY / THÁP $CD$ TRÊN SƯỜN ĐỒI NGHIÊNG GÓC $\\beta$<br>• Xác định các góc trong tam giác ngắm $\\triangle ABD$ và dùng định lí Sin tính đoạn nối $BD$, sau đó dùng định lí Sin trong $\\triangle BCD$ để tính chiều cao $CD$.",
            "desc": "Các bài toán thực tế luôn quy về việc tìm các góc của một tam giác rồi dùng định lí Sin hoặc Cosin.",
            "example": "• Hai tàu xuất phát từ $O$ góc $60^\\circ$, vận tốc $50$ và $60$ km/h. Sau thời gian $t$: $MN = 10\\sqrt{31}t$. Để giữ liên lạc ra-đa trong phạm vi $30\\sqrt{31}$ km thì $10\\sqrt{31}t \\le 30\\sqrt{31} \\iff t \\le 3$ giờ.",
            "traps": "Đọc kĩ yêu cầu làm tròn của đề bài (ví dụ làm tròn đến hàng phần mười hay hàng đơn vị)."
          }
        ]
      }
    ]
  },
  "physics": {
    "id": "physics",
    "name": "Vật lý 10",
    "icon": "⚛️",
    "color": "#4b9ad8",
    "bg": "#e7f4ff",
    "sections": [
      {
        "title": "Chương I: Mở đầu & Phép đo trong Vật lý (Bài 1 – Bài 3)",
        "badge": "Trọng tâm Đề 01 – Đề 10",
        "items": [
          {
            "name": "1. Quy tắc an toàn & Biển cảnh báo trong phòng thực hành",
            "freq": "100% đề thi Vật lý có câu an toàn",
            "forms": "Phần I (Trắc nghiệm), Phần II (Đúng/Sai)",
            "formula": "★ CÁC BIỂN CẢNH BÁO NGUY HIỂM THƯỜNG GẶP TRONG ĐỀ THI:<br>• Biển tia Laser: Hình tam giác vàng có tia phát sáng &rArr; Nguy hiểm cho mắt, không nhìn trực tiếp.<br>• Biển điện cao thế: Hình tam giác có tia sét &rArr; Nguy hiểm điện giật chết người.<br>• Biển chất ăn mòn: Axit đổ ăn mòn tay/bề mặt &rArr; Đeo găng tay bảo hộ, kính bảo hộ.<br>• Biển chất độc hại: Hình đầu lâu xương chéo &rArr; Không ngửi, nếm, tiếp xúc.<br>• Biển nhiệt độ cao / chất dễ cháy: Hình ngọn lửa &rArr; Cấm mang nguồn nhiệt, cấm lửa.<br><br>★ NGUYÊN TẮC AN TOÀN:<br>• Chỉ cắm điện vào nguồn sau khi giáo viên đã kiểm tra mạch điện.<br>• Ngắt nguồn điện ngay lập tức sau khi làm xong thí nghiệm hoặc khi có sự cố chập cháy.",
            "desc": "Kiểm tra kiến thức thực hành thực tế theo định hướng GDPT 2018.",
            "example": "Khi sử dụng nguồn điện và máy biến áp trong phòng thí nghiệm: Phải để công tắc ở vị trí TẮT (OFF) trước khi cắm điện; chọn đúng thang đo và giới hạn đo của đồng hồ đa năng.",
            "traps": "Đừng nhầm lẫn giữa biển cấm (hình tròn viền đỏ, gạch chéo đỏ) và biển cảnh báo nguy hiểm (hình tam giác đều viền đen/đỏ, nền vàng)."
          },
          {
            "name": "2. Phép đo & Xác định sai số thực nghiệm",
            "freq": "100% đề thi (Câu phân loại & tính sai số)",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• PHÉP ĐO TRỰC TIẾP: Đo trực tiếp bằng dụng cụ đo (dùng thước đo độ dài, đồng hồ đo thời gian, cân đo khối lượng, nhiệt kế).<br>• PHÉP ĐO GIÁN TIẾP: Đo thông qua công thức liên hệ với các đại lượng đo trực tiếp (ví dụ đo tốc độ $v = s/t$, gia tốc $a = 2s/t^2$, khối lượng riêng $\\rho = m/V$).<br><br>★ CÁC CÔNG THỨC SAI SỐ CỐT LÕI:<br>1. Giá trị trung bình của $n$ lần đo: $$\\bar{A} = \\frac{A_1 + A_2 + \\dots + A_n}{n}$$<br>2. Sai số tuyệt đối của từng lần đo: $$\\Delta A_i = |\\bar{A} - A_i|$$<br>3. Sai số ngẫu nhiên trung bình: $$\\overline{\\Delta A} = \\frac{\\Delta A_1 + \\dots + \\Delta A_n}{n}$$<br>4. Sai số tuyệt đối toàn phần: $$\\Delta A = \\overline{\\Delta A} + \\Delta A_{dc}$$ (trong đó $\\Delta A_{dc}$ là sai số dụng cụ, thường lấy bằng nửa ĐCNN hoặc 1 ĐCNN theo đề bài)<br>5. Cách viết kết quả đo chuẩn: $$A = \\bar{A} \\pm \\Delta A$$",
            "desc": "Kết quả đo luôn phải đi kèm đơn vị đo và được biểu diễn theo dạng chuẩn $A = \\bar{A} \\pm \\Delta A$.",
            "example": "Đo 5 lần thời gian rơi: $t_1 = 0,401\\text{ s}, t_2 = 0,405\\text{ s}, t_3 = 0,403\\text{ s}, t_4 = 0,404\\text{ s}, t_5 = 0,407\\text{ s}$.<br>&rArr; Giá trị trung bình: $\\bar{t} = 0,404\\text{ s}$.<br>&rArr; Sai số ngẫu nhiên trung bình: $\\overline{\\Delta t} = 0,0016\\text{ s}$. Nếu $\\Delta t_{dc} = 0,001\\text{ s} \\implies \\Delta t = 0,003\\text{ s} \\implies t = 0,404 \\pm 0,003\\text{ s}$.",
            "traps": "Sai số dụng cụ $\\Delta A_{dc}$: Nếu đề bài không nói gì thì lấy bằng nửa độ chia nhỏ nhất (ĐCNN). Dụng cụ hiện số thì lấy bằng 1 ĐCNN."
          },
          {
            "name": "3. Quy tắc lan truyền sai số trong tính toán",
            "freq": "100% đề thi có câu hỏi lan truyền sai số",
            "forms": "Phần I, Phần II, Phần III (Điền số)",
            "formula": "★ SAI SỐ TỈ ĐỐI (Sai số tương đối): $$\\delta A = \\frac{\\Delta A}{\\bar{A}} \\times 100\\%$$<br>★ QUY TẮC LAN TRUYỀN SAI SỐ:<br>1. Phép cộng hoặc phép trừ: Sai số TUYỆT ĐỐI bằng TỔNG các sai số tuyệt đối:<br>$$\\text{Nếu } F = X + Y - Z \\implies \\Delta F = \\Delta X + \\Delta Y + \\Delta Z$$<br>2. Phép nhân hoặc phép chia lũy thừa: Sai số TỈ ĐỐI bằng TỔNG các sai số tỉ đối nhân với số mũ:<br>$$\\text{Nếu } F = \\frac{X^m \\cdot Y^n}{Z^k} \\implies \\delta F = m \\cdot \\delta X + n \\cdot \\delta Y + k \\cdot \\delta Z$$<br>$$\\implies \\Delta F = \\bar{F} \\cdot \\delta F$$<br>★ QUY TẮC CHỮ SỐ CÓ NGHĨA:<br>• Sai số tuyệt đối $\\Delta A$ thường chỉ viết đến 1 hoặc 2 chữ số có nghĩa.<br>• Giá trị trung bình $\\bar{A}$ được làm tròn đến bậc thập phân tương ứng với sai số tuyệt đối $\\Delta A$.",
            "desc": "Sai số tỉ đối đặc trưng cho độ chính xác của phép đo. Phép đo có sai số tỉ đối càng nhỏ thì càng chính xác.",
            "example": "Đo quãng đường $s = 20{,}0 \\pm 0{,}2\\text{ m}$ và thời gian $t = 4{,}0 \\pm 0{,}1\\text{ s}$.<br>&rArr; Tốc độ trung bình: $\\bar{v} = 20{,}0 / 4{,}0 = 5{,}0\\text{ m/s}$.<br>&rArr; $\\delta s = \\frac{0{,}2}{20} = 1\\%$, $\\delta t = \\frac{0{,}1}{4} = 2{,}5\\% \\implies \\delta v = 1\\% + 2{,}5\\% = 3{,}5\\%$.<br>&rArr; $\\Delta v = 5{,}0 \\times 3{,}5\\% = 0{,}175 \\approx 0{,}2\\text{ m/s} \\implies v = 5{,}0 \\pm 0{,}2\\text{ m/s}$.",
            "traps": "Dù là phép chia như $v = s/t$ hay $a = 2s/t^2$, sai số tỉ đối vẫn là PHÉP CỘNG: $\\delta v = \\delta s + \\delta t$, KHÔNG BAO GIỜ được trừ sai số!"
          }
        ]
      },
      {
        "title": "Chương II: Động học chất điểm (Bài 4 – Bài 11 Rơi tự do)",
        "badge": "Trọng tâm Đề 01 – Đề 10",
        "items": [
          {
            "name": "1. Độ dịch chuyển (d) & Quãng đường đi được (s)",
            "freq": "100% đề thi Vật lý 10",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• Quãng đường ($s$): Độ dài đường đi thực tế của vật trong thời gian chuyển động. Đại lượng vô hướng luôn không âm ($s \\ge 0$).<br>• Độ dịch chuyển ($\\vec{d}$): Vectơ nối từ vị trí đầu đến vị trí cuối. Đại lượng vectơ có hướng, có thể mang dấu DƯƠNG, ÂM hoặc bằng 0.<br><br>★ CÁC MỐI QUAN HỆ ĐẶC BIỆT:<br>• Đi thẳng không đổi chiều: $$d = s$$<br>• Đi thẳng rồi quay ngược lại: $$s = s_1 + s_2 \\qquad d = s_1 - s_2 \\implies d < s$$<br>• Chuyển động quay về vị trí ban đầu: $$d = 0 \\qquad s > 0$$<br>• Chuyển động theo 2 phương vuông góc (Bắc - Đông): $$d = \\sqrt{d_1^2 + d_2^2} \\qquad s = d_1 + d_2$$",
            "desc": "Độ dịch chuyển cho biết sự thay đổi vị trí của vật, không phụ thuộc vào hình dạng đường đi.",
            "example": "Một người đi về phía Bắc 3 km rồi rẽ sang phía Đông 4 km.<br>&rArr; Quãng đường đi được: $s = 3 + 4 = 7\\text{ km}$.<br>&rArr; Độ dịch chuyển: $d = \\sqrt{3^2 + 4^2} = 5\\text{ km}$ theo hướng Đông - Bắc.",
            "traps": "Khi vật chạy quanh một sân vận động 1 vòng rồi về đúng vạch xuất phát: Quãng đường $s = 400\\text{ m}$ nhưng độ dịch chuyển $d = 0$!"
          },
          {
            "name": "2. Tốc độ, Vận tốc & Vận tốc tổng hợp (Tính tương đối)",
            "freq": "100% đề thi có câu phân biệt tốc độ & vận tốc",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• Tốc độ trung bình (đặc trưng cho mức độ nhanh chậm của chuyển động): $$v_{\\text{tb}} = \\frac{s}{t} \\quad (s \\ge 0 \\implies v_{\\text{tb}} > 0)$$<br>• Vận tốc trung bình (đặc trưng cho hướng và độ nhanh chậm của sự dịch chuyển): $$\\vec{v} = \\frac{\\vec{d}}{t} \\implies v = \\frac{d}{t}$$<br>• Đổi đơn vị chuẩn: $$1\\text{ m/s} = 3{,}6\\text{ km/h} \\qquad 1\\text{ km/h} = \\frac{1}{3{,}6}\\text{ m/s}$$<br><br>★ VẬN TỐC TỔNG HỢP (Tính tương đối của chuyển động):<br>$$\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}$$<br>• Thuyền xuôi dòng: $v_{1,3} = v_{1,2} + v_{2,3}$ (vận tốc thuyền + vận tốc dòng nước)<br>• Thuyền ngược dòng: $v_{1,3} = v_{1,2} - v_{2,3}$ (vận tốc thuyền - vận tốc dòng nước)",
            "desc": "Tốc độ tức thời là độ lớn của vận tốc tức thời, được đo bằng tốc kế trên xe máy, ô tô.",
            "example": "Tốc độ $72\\text{ km/h} = 72 / 3{,}6 = 20\\text{ m/s}$. Tốc độ $15\\text{ m/s} = 15 \\times 3{,}6 = 54\\text{ km/h}$.",
            "traps": "Tốc độ trung bình KHÔNG PHẢI là trung bình cộng của 2 vận tốc! $v_{\\text{tb}} = \\frac{s_1 + s_2}{t_1 + t_2}$, bắt buộc phải tính tổng quãng đường chia tổng thời gian."
          },
          {
            "name": "3. Chuyển động thẳng biến đổi đều (Gia tốc a & 3 Công thức vàng)",
            "freq": "100% đề thi Vật lý 10",
            "forms": "Phần I, Phần II, Phần III (Điền số)",
            "formula": "• Định nghĩa Gia tốc: $$a = \\frac{v - v_0}{t} = \\frac{\\Delta v}{\\Delta t} \\quad (\\text{m/s}^2)$$<br>&nbsp;&nbsp;+ Nhanh dần đều: $\\vec{a}$ cùng chiều $\\vec{v} \\iff a \\cdot v > 0$ ($a$ và $v$ CÙNG DẤU)<br>&nbsp;&nbsp;+ Chậm dần đều: $\\vec{a}$ ngược chiều $\\vec{v} \\iff a \\cdot v < 0$ ($a$ và $v$ TRÁI DẤU)<br><br>★ 3 CÔNG THỨC VÀNG CỐT LÕI:<br>1. Vận tốc theo thời gian: $$v = v_0 + at$$<br>2. Độ dịch chuyển / Quãng đường: $$d = s = v_0 t + \\frac{1}{2}at^2$$<br>3. Công thức độc lập thời gian: $$v^2 - v_0^2 = 2ad = 2as$$",
            "desc": "Khi xe bắt đầu khởi hành từ trạng thái đứng yên: $v_0 = 0$. Khi xe hãm phanh đến khi dừng lại hẳn: $v = 0$.",
            "example": "Xe đang chạy $v_0 = 20\\text{ m/s}$ hãm phanh chuyển động chậm dần đều với gia tốc $a = -2\\text{ m/s}^2$.<br>&rArr; Thời gian để xe dừng lại ($v = 0$): $t = \\frac{0 - 20}{-2} = 10\\text{ s}$.<br>&rArr; Quãng đường xe đi được đến khi dừng hẳn: $s = \\frac{v^2 - v_0^2}{2a} = \\frac{0 - 20^2}{2(-2)} = 100\\text{ m}$.",
            "traps": "Trong chuyển động chậm dần đều, gia tốc $a$ bắt buộc phải mang DẤU ÂM (nếu chọn chiều dương là chiều chuyển động). Rất nhiều học sinh quên dấu trừ làm sai cả bài."
          },
          {
            "name": "4. Khai thác Đồ thị chuyển động (d - t và v - t)",
            "freq": "100% đề thi có bài toán đồ thị",
            "forms": "Phần I (Trắc nghiệm), Phần II (Đúng/Sai)",
            "formula": "★ ĐỒ THỊ ĐỘ DỊCH CHUYỂN - THỜI GIAN ($d - t$):<br>• Độ dốc (hệ số góc): Vận tốc $$v = \\frac{\\Delta d}{\\Delta t}$$<br>&nbsp;&nbsp;+ Đường dốc lên: $v > 0$ (tiến theo chiều dương)<br>&nbsp;&nbsp;+ Đường nằm ngang: $v = 0$ (vật ĐỨNG YÊN)<br>&nbsp;&nbsp;+ Đường dốc xuống: $v < 0$ (chuyển động theo chiều âm)<br><br>★ ĐỒ THỊ VẬN TỐC - THỜI GIAN ($v - t$):<br>• Độ dốc (hệ số góc): Gia tốc $$a = \\frac{\\Delta v}{\\Delta t}$$<br>&nbsp;&nbsp;+ Đường dốc lên: $a > 0$ &nbsp;|&nbsp; Đường dốc xuống: $a < 0$<br>&nbsp;&nbsp;+ Đường nằm ngang: $a = 0$ (CHUYỂN ĐỘNG THẲNG ĐỀU)<br>• DIỆN TÍCH hình phẳng giới hạn dưới đồ thị $v - t$: Chính là quãng đường / độ dịch chuyển $d$ (hình tam giác, hình thang, hình chữ nhật).",
            "desc": "Đọc kĩ trục tung là $d$ hay $v$. Đường nằm ngang ở đồ thị $d - t$ nghĩa là đứng yên, nhưng ở đồ thị $v - t$ là đang chạy với vận tốc không đổi!",
            "example": "Trên đồ thị $v - t$, trong 4s đầu vận tốc tăng đều từ 0 lên 10 m/s: Quãng đường là diện tích tam giác $s = \\frac{1}{2} \\times 4 \\times 10 = 20\\text{ m}$.",
            "traps": "Đừng nhầm lẫn giữa đồ thị $d-t$ và đồ thị $v-t$. Độ dốc của $d-t$ là vận tốc $v$, còn độ dốc của $v-t$ là gia tốc $a$."
          },
          {
            "name": "5. Sự rơi tự do (v₀ = 0, gia tốc trọng trường g)",
            "freq": "100% đề thi Vật lý 10 (Bài chốt giới hạn ôn tập)",
            "forms": "Phần I, Phần II, Phần III (Điền số)",
            "formula": "• ĐẶC ĐIỂM: Chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới, chỉ chịu tác dụng của trọng lực.<br>• Tại cùng một nơi trên Trái Đất, mọi vật rơi tự do với cùng gia tốc trọng trường $g$ ($g \\approx 9{,}8\\text{ m/s}^2$ hoặc $10\\text{ m/s}^2$), không phụ thuộc khối lượng nặng nhẹ.<br><br>★ 3 CÔNG THỨC RƠI TỰ DO ($v_0 = 0$):<br>1. Vận tốc tại thời điểm $t$: $$v = gt$$<br>2. Quãng đường rơi / độ cao: $$h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}}$$ (thời gian chạm đất)<br>3. Liên hệ vận tốc và độ cao: $$v^2 = 2gh \\implies v = \\sqrt{2gh}$$ (vận tốc khi chạm đất)<br><br>★ QUÃNG ĐƯỜNG RƠI TRONG GIÂY THỨ $n$:<br>$$\\Delta h_n = h_n - h_{n-1} = \\frac{1}{2}g(2n - 1)$$<br>• Tỉ lệ quãng đường rơi trong các giây liên tiếp là: $$1 : 3 : 5 : 7 : 9 \\dots$$",
            "desc": "Nếu sức cản của không khí rất nhỏ so với trọng lực thì sự rơi của vật trong không khí có thể coi gần đúng là rơi tự do.",
            "example": "Thả một vật rơi tự do từ độ cao $h = 45\\text{ m}$, lấy $g = 10\\text{ m/s}^2$.<br>&rArr; Thời gian chạm đất: $t = \\sqrt{\\frac{2 \\times 45}{10}} = \\sqrt{9} = 3\\text{ s}$.<br>&rArr; Vận tốc chạm đất: $v = g \\cdot t = 10 \\times 3 = 30\\text{ m/s}$ (hoặc $v = \\sqrt{2 \\times 10 \\times 45} = 30\\text{ m/s}$).<br>&rArr; Quãng đường rơi trong giây thứ 3: $\\Delta h_3 = \\frac{1}{2}(10)(2 \\times 3 - 1) = 25\\text{ m}$.",
            "traps": "Phân biệt \"quãng đường đi được trong $n$ giây\" ($h = \\frac{1}{2}gt^2$) với \"quãng đường đi trong giây thứ $n$\" ($\\Delta h_n = h_n - h_{n-1}$). Nhiều bạn tính quãng đường giây thứ 3 bằng cách lấy $t = 3$ là sai!"
          }
        ]
      }
    ]
  },
  "chemistry": {
    "id": "chemistry",
    "name": "Hóa học 10",
    "icon": "🧪",
    "color": "#059669",
    "bg": "#ecfdf5",
    "sections": [
      {
        "title": "Chương 1: Cấu tạo nguyên tử & Các loại hạt cơ bản",
        "badge": "Trọng tâm Đề 01 – Đề 16",
        "items": [
          {
            "name": "1. Thành phần nguyên tử & Bài toán lập hệ phương trình hạt (p, n, e)",
            "freq": "100% đề thi Hóa học 10 có bài toán hạt",
            "forms": "Phần I, Phần II, Phần III (Điền số)",
            "formula": "• 3 LOẠI HẠT CƠ BẢN:<br>&nbsp;&nbsp;+ Proton ($p$): Ở hạt nhân, mang điện tích $+1$, khối lượng $m_p \\approx 1\\text{ amu}$<br>&nbsp;&nbsp;+ Electron ($e$): Ở lớp vỏ, mang điện tích $-1$, khối lượng rất nhỏ $m_e \\approx 0{,}00055\\text{ amu}$<br>&nbsp;&nbsp;+ Neutron ($n$): Ở hạt nhân, KHÔNG mang điện ($q = 0$), khối lượng $m_n \\approx 1\\text{ amu}$<br>• Nguyên tử trung hòa về điện: Số hạt mang điện dương = số hạt mang điện âm $$p = e = Z$$ (với $Z$ là số hiệu nguyên tử).<br><br>★ HỆ PHƯƠNG TRÌNH HẠT KINH ĐIỂN TRONG ĐỀ THI:<br>$$\\begin{cases} 2Z + N = \\text{Tổng số hạt} \\\\ 2Z - N = \\text{Hạt mang điện nhiều hơn không mang điện} \\end{cases}$$<br>• Khối lượng nguyên tử: Tập trung gần như 100% ở hạt nhân vì khối lượng electron ở vỏ không đáng kể: $$m_{\\text{nguyên tử}} \\approx m_{\\text{hạt nhân}} \\approx (p + n) \\text{ amu}$$",
            "desc": "Kích thước nguyên tử khoảng $10^{-10}\\text{ m} = 0{,}1\\text{ nm}$, kích thước hạt nhân khoảng $10^{-14}\\text{ m} \\implies$ Nguyên tử có cấu tạo rỗng.",
            "example": "Nguyên tử nguyên tố $X$ có tổng số hạt là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12.<br>&rArr; Hệ: $\\begin{cases} 2Z + N = 40 \\\\ 2Z - N = 12 \\end{cases} \\implies 4Z = 52 \\implies Z = 13$ (Al, Nhôm) và $N = 14$.",
            "traps": "Đọc kĩ đề: \"Hạt mang điện\" là gồm CẢ PROTON VÀ ELECTRON (bằng $2Z$). Rất nhiều bạn chỉ tính $Z$ dẫn đến giải sai."
          },
          {
            "name": "2. Số khối A, Kí hiệu nguyên tử & Đồng vị",
            "freq": "100% đề thi Hóa học 10",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• SỐ KHỐI ($A$): Tổng số proton và neutron trong hạt nhân: $$A = Z + N$$<br>• KÍ HIỆU NGUYÊN TỬ: $${}_Z^A X$$ (Số trên là số khối $A$, số dưới là số hiệu $Z$).<br>• ĐỒNG VỊ: Là các nguyên tử của cùng một nguyên tố hóa học, có CÙNG số proton ($Z$) nhưng KHÁC số neutron ($N$), do đó số khối $A$ khác nhau.<br><br>★ CÔNG THỨC NGUYÊN TỬ KHỐI TRUNG BÌNH:<br>$$\\bar{A} = \\frac{A_1 \\cdot x_1 + A_2 \\cdot x_2 + \\dots + A_n \\cdot x_n}{100}$$ (với $x_1, x_2$ là phần trăm số nguyên tử của từng đồng vị, $\\sum x_i = 100\\%$).<br><br>★ BÀI TOÁN TÍNH % KHỐI LƯỢNG ĐỒNG VỊ TRONG HỢP CHẤT:<br>$$\\% m_{^{A_1}X} = \\frac{A_1 \\cdot x_1 \\cdot n_X}{M_{\\text{hợp chất}}} \\times 100\\%$$",
            "desc": "Các đồng vị có tính chất hóa học giống nhau (do cùng số e lớp ngoài cùng) nhưng tính chất vật lí khác nhau.",
            "example": "Clo có 2 đồng vị: $^{35}\\text{Cl}$ (chiếm $75\\%$) và $^{37}\\text{Cl}$ (chiếm $25\\%$).<br>&rArr; Nguyên tử khối trung bình của Clo: $\\bar{A} = \\frac{35 \\times 75 + 37 \\times 25}{100} = 35{,}5$.",
            "traps": "Cùng số $Z$ mới là đồng vị. Nếu hai nguyên tử có cùng số khối $A$ nhưng khác $Z$ (ví dụ ${}_{18}^{40}\\text{Ar}$ và ${}_{20}^{40}\\text{Ca}$) thì KHÔNG PHẢI là đồng vị của nhau."
          }
        ]
      },
      {
        "title": "Chương 2: Lớp, phân lớp electron & Cấu hình electron",
        "badge": "Trọng tâm Đề 01 – Đề 16",
        "items": [
          {
            "name": "1. Orbital nguyên tử (AO), Lớp & Phân lớp electron",
            "freq": "100% đề thi Hóa học 10",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• KHÁI NIỆM AO: Vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng $90\\%$).<br>• HÌNH DẠNG AO:<br>&nbsp;&nbsp;+ AO $s$: Có dạng hình cầu, tâm là hạt nhân.<br>&nbsp;&nbsp;+ AO $p$: Có dạng hình số 8 nổi, gồm 3 orbital định hướng theo 3 trục tọa độ: $p_x, p_y, p_z$.<br><br>★ SỐ ORBITAL VÀ ELECTRON TỐI ĐA TRONG PHÂN LỚP:<br>• Phân lớp $s$: Có 1 AO &rArr; Tối đa $2e$ ($s^2$)<br>• Phân lớp $p$: Có 3 AO &rArr; Tối đa $6e$ ($p^6$)<br>• Phân lớp $d$: Có 5 AO &rArr; Tối đa $10e$ ($d^{10}$)<br>• Phân lớp $f$: Có 7 AO &rArr; Tối đa $14e$ ($f^{14}$)<br><br>★ SỐ ELECTRON TỐI ĐA TRONG LỚP THỨ $n$ ($n \\le 4$): $$N_{\\max} = 2n^2$$<br>&nbsp;&nbsp;+ Lớp 1 ($K, n=1$): tối đa $2e$ &nbsp;|&nbsp; Lớp 2 ($L, n=2$): tối đa $8e$<br>&nbsp;&nbsp;+ Lớp 3 ($M, n=3$): tối đa $18e$ &nbsp;|&nbsp; Lớp 4 ($N, n=4$): tối đa $32e$",
            "desc": "Mỗi orbital chứa tối đa 2 electron có chiều tự quay (spin) ngược nhau (Nguyên lý loại trừ Pauli).",
            "example": "Lớp $M$ ($n = 3$) có 3 phân lớp là $3s, 3p, 3d$. Tổng số orbital trong lớp $M$ là $1 + 3 + 5 = 9$ AO. Số electron tối đa là $2(3^2) = 18e$.",
            "traps": "Phân biệt số electron tối đa trong PHÂN LỚP $p$ (là 6e) với số electron tối đa trong 1 ORBITAL $p$ (chỉ là 2e). Bất kì 1 AO nào cũng chỉ chứa tối đa 2e!"
          },
          {
            "name": "2. Cấu hình electron nguyên tử, Ion & Dự đoán tính chất",
            "freq": "100% đề thi có viết cấu hình e",
            "forms": "Phần I, Phần II, Phần III, Tự luận",
            "formula": "★ THỨ TỰ MỨC NĂNG LƯỢNG (Trật tự Klechkowski):<br>$$1s \\ 2s \\ 2p \\ 3s \\ 3p \\ 4s \\ 3d \\ 4p \\ 5s \\dots$$<br>(Sau khi điền theo năng lượng, nhớ sắp xếp lại theo thứ tự từng lớp: $3d$ viết trước $4s$).<br><br>★ 2 TRƯỜNG HỢP NGOẠI LỆ ĐẶC BIỆT CỰC HAY THI:<br>• Chromium ($Z = 24$): Bán bão hòa phân lớp $d$ bền hơn: $$[\\text{Ar}] 3d^5 4s^1 \\quad (\\text{không phải } 3d^4 4s^2)$$<br>• Copper ($Z = 29$): Bão hòa phân lớp $d$ bền hơn: $$[\\text{Ar}] 3d^{10} 4s^1 \\quad (\\text{không phải } 3d^9 4s^2)$$<br><br>★ CẤU HÌNH ELECTRON CỦA ION:<br>• Cation (ion dương $M^{n+}$): Mất electron ở LỚP NGOÀI CÙNG $4s$ trước rồi mới đến $3d$.<br>&nbsp;&nbsp;Ví dụ: $\\text{Fe} (Z=26): [\\text{Ar}]3d^6 4s^2 \\implies \\text{Fe}^{2+}: [\\text{Ar}]3d^6 \\implies \\text{Fe}^{3+}: [\\text{Ar}]3d^5$.<br>• Anion (ion âm $X^{m-}$): Nhận thêm $m$ electron vào phân lớp ngoài cùng: $\\text{Cl}^- [\\text{Ne}]3s^2 3p^6$.<br><br>★ DỰ ĐOÁN TÍNH CHẤT QUA SỐ e LỚP NGOÀI CÙNG:<br>• 1, 2, 3 e ngoài cùng: Kim loại (trừ H, He, B)<br>• 5, 6, 7 e ngoài cùng: Phi kim<br>• 8 e ngoài cùng (hoặc 2e ở He): Khí hiếm bền vững",
            "desc": "Quy tắc Hund: Trong cùng phân lớp, các electron phân bố sao cho số electron độc thân là lớn nhất (các spin song song $\\uparrow$).",
            "example": "Nguyên tử Fe ($Z = 26$) có cấu hình $[\\text{Ar}]3d^6 4s^2$. Phân lớp $3d^6$ có 4 electron độc thân. Fe có 2e lớp ngoài cùng nên là kim loại.",
            "traps": "Khi viết cấu hình ion $\\text{Fe}^{2+}$, electron bị bứt ra từ phân lớp $4s$ trước (vì $4s$ ở ngoài cùng), không phải bứt từ $3d$! Cấu hình $\\text{Fe}^{2+}$ là $[\\text{Ar}]3d^6$ (không còn $4s$)."
          }
        ]
      },
      {
        "title": "Chương 3: Bảng tuần hoàn & Quy luật biến đổi tuần hoàn",
        "badge": "Trọng tâm Đề 01 – Đề 16",
        "items": [
          {
            "name": "1. Cấu tạo Bảng tuần hoàn & Cách xác định vị trí",
            "freq": "100% đề thi có xác định vị trí trong BTH",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• Ô NGUYÊN TỐ: Số thứ tự ô = Số hiệu nguyên tử $Z$ (số proton).<br>• CHU KÌ: Số thứ tự chu kì = Số LỚP electron (từ chu kì 1 đến 7).<br>• NHÓM:<br>&nbsp;&nbsp;+ Nhóm A (nguyên tố $s, p$): Số thứ tự nhóm = Số electron LỚP NGOÀI CÙNG.<br>&nbsp;&nbsp;+ Nhóm B (nguyên tố $d, f$): Có cấu hình $(n-1)d^a ns^b$. Đặt tổng $S = a + b$:<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S < 8 \\implies$ Nhóm $S\\text{B}$ (ví dụ $3d^3 4s^2 \\to$ nhóm VB)<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S \\in \\{8, 9, 10\\} \\implies$ Nhóm VIIIB<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S = 11 \\implies$ Nhóm IB &nbsp;|&nbsp; $S = 12 \\implies$ Nhóm IIB",
            "desc": "Bảng tuần hoàn gồm 118 nguyên tố, 7 chu kì (3 chu kì nhỏ 1, 2, 3; 4 chu kì lớn 4, 5, 6, 7) và 8 nhóm A, 8 nhóm B.",
            "example": "• Nguyên tố Al ($Z = 13$): $1s^2 2s^2 2p^6 3s^2 3p^1$. Ô 13, chu kì 3 (3 lớp e), nhóm IIIA (3e lớp ngoài cùng).<br>• Nguyên tố Cu ($Z = 29$): $[\\text{Ar}]3d^{10} 4s^1$. Ô 29, chu kì 4 (4 lớp e), nhóm IB (vì $S = 10 + 1 = 11$).",
            "traps": "Xác định nhóm B: Nếu phân lớp $d$ đã bão hòa $3d^{10}$ thì chỉ nhìn số e ở $4s^1$ (nhóm IB) hoặc $4s^2$ (nhóm IIB)."
          },
          {
            "name": "2. Quy luật biến đổi tuần hoàn tính chất các nguyên tố",
            "freq": "100% đề thi Hóa học 10 có câu so sánh tính chất",
            "forms": "Phần I, Phần II (Đúng/Sai)",
            "formula": "★ TRONG MỘT CHU KÌ (Đi từ TRÁI sang PHẢI, $Z$ tăng dần):<br>• Bán kính nguyên tử: GIẢM DẦN &nbsp;|&nbsp; Độ âm điện: TĂNG DẦN<br>• Tính kim loại: GIẢM DẦN &nbsp;|&nbsp; Tính phi kim: TĂNG DẦN<br>• Tính base của oxide/hydroxide: GIẢM DẦN &nbsp;|&nbsp; Tính acid: TĂNG DẦN<br><br>★ TRONG MỘT NHÓM A (Đi từ TRÊN xuống DƯỚI, $Z$ tăng dần):<br>• Bán kính nguyên tử: TĂNG DẦN &nbsp;|&nbsp; Độ âm điện: GIẢM DẦN<br>• Tính kim loại: TĂNG DẦN &nbsp;|&nbsp; Tính phi kim: GIẢM DẦN<br>• Tính base của oxide/hydroxide: TĂNG DẦN &nbsp;|&nbsp; Tính acid: GIẢM DẦN<br><br>★ NGUYÊN TẮC VÀNG:<br>• Bán kính và Tính kim loại luôn biến đổi CÙNG CHIỀU.<br>• Độ âm điện và Tính phi kim luôn biến đổi CÙNG CHIỀU.",
            "desc": "Phi kim mạnh nhất là Flo (F, độ âm điện lớn nhất = 3,98). Kim loại kiềm mạnh nhất là Franxi (Fr) hoặc Xesi (Cs).",
            "example": "So sánh tính kim loại của Na ($Z=11$), Mg ($Z=12$), Al ($Z=13$): Trong cùng chu kì 3, từ trái qua phải tính kim loại giảm dần $\\implies \\text{Na} > \\text{Mg} > \\text{Al}$.",
            "traps": "Tránh nhầm lẫn: Tính acid của oxide cao nhất tăng từ trái sang phải trong chu kì (ví dụ $\\text{SiO}_2 < \\text{P}_2\\text{O}_5 < \\text{SO}_3 < \\text{Cl}_2\\text{O}_7$)."
          },
          {
            "name": "3. Hóa trị cao nhất với Oxygen & Hợp chất khí với Hydrogen",
            "freq": "100% đề thi có câu hỏi hóa trị oxide/hydroxide",
            "forms": "Phần I, Phần II, Phần III",
            "formula": "• Hóa trị cao nhất với oxygen = Số thứ tự nhóm A ($n$ từ 1 đến 7)<br>&nbsp;&nbsp;+ Nhóm IA: $\\text{R}_2\\text{O}$ &nbsp;|&nbsp; Nhóm IIA: $\\text{RO}$ &nbsp;|&nbsp; Nhóm IIIA: $\\text{R}_2\\text{O}_3$<br>&nbsp;&nbsp;+ Nhóm IVA: $\\text{RO}_2$ &nbsp;|&nbsp; Nhóm VA: $\\text{R}_2\\text{O}_5$ &nbsp;|&nbsp; Nhóm VIA: $\\text{RO}_3$ &nbsp;|&nbsp; Nhóm VIIA: $\\text{R}_2\\text{O}_7$<br><br>• Hóa trị trong hợp chất khí với hydrogen (phi kim nhóm IVA đến VIIA): $$8 - n$$<br>&nbsp;&nbsp;+ Nhóm IVA: $\\text{RH}_4$ &nbsp;|&nbsp; Nhóm VA: $\\text{RH}_3$ &nbsp;|&nbsp; Nhóm VIA: $\\text{H}_2\\text{R}$ &nbsp;|&nbsp; Nhóm VIIA: $\\text{HR}$<br><br>★ HỆ THỨC: $$\\text{Hóa trị với O} + \\text{Hóa trị với H} = 8$$",
            "desc": "Dựa vào hóa trị cao nhất với O hoặc hợp chất khí với H để lập phương trình tính khối lượng mol nguyên tử của $R$.",
            "example": "Nguyên tố $R$ thuộc nhóm VIA &rArr; Hóa trị cao nhất với oxygen là 6 (công thức $\\text{RO}_3$), hóa trị với hydrogen là $8 - 6 = 2$ (công thức $\\text{H}_2\\text{R}$). Trong $\\text{RO}_3$, oxygen chiếm $60\\%$ khối lượng &rArr; $\\frac{48}{R + 48} = 0{,}6 \\implies R = 32$ (Lưu huỳnh, S).",
            "traps": "Kim loại nhóm IA, IIA, IIIA KHÔNG tạo hợp chất khí với hydrogen (chỉ có phi kim từ nhóm IVA đến VIIA mới có hợp chất khí với H)."
          }
        ]
      }
    ]
  }
};

function renderHandbook(selectedSubject, filterQuery) {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('handbook')) return;
  window.currentView = 'handbook';
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    const btn = sidebar.querySelector('[data-view="handbook"]');
    if (btn) btn.classList.add('active');
  }

  // Mỗi lần chỉ hiển thị một môn để sổ tay ngắn, dễ đọc và dễ học.
  const activeSubject = Object.prototype.hasOwnProperty.call(handbookData, selectedSubject) ? selectedSubject : 'agriculture';
  const query = (filterQuery || '').trim().toLowerCase();
  const safeQuery = query.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const subjectsToRender = [activeSubject];

  const contentHtml = subjectsToRender.map(subjKey => {
    const subj = handbookData[subjKey];
    if (!subj) return '';

    const matchingSections = subj.sections.map((sec, sectionIndex) => {
      const filteredItems = sec.items.filter(item => {
        if (!query) return true;
        return item.name.toLowerCase().includes(query) ||
               item.formula.toLowerCase().includes(query) ||
               item.desc.toLowerCase().includes(query) ||
               (item.example && item.example.toLowerCase().includes(query)) ||
               (item.traps && item.traps.toLowerCase().includes(query)) ||
               (item.freq && item.freq.toLowerCase().includes(query)) ||
               (item.forms && item.forms.toLowerCase().includes(query)) ||
               sec.title.toLowerCase().includes(query);
      });

      if (filteredItems.length === 0) return '';

      const itemsHtml = filteredItems.map((item, itemIndex) => `
        <details class="handbook-item-card${item.formula.includes('handbook-table') ? ' handbook-item-wide' : ''}" ${query || (sectionIndex === 0 && itemIndex === 0) ? 'open' : ''}>
          <summary class="handbook-item-summary">
            <span class="handbook-item-title">${item.name}</span>
            <span class="handbook-item-summary-meta">
              ${item.freq ? `<span class="handbook-freq-badge">${item.freq}</span>` : ''}
              <span class="handbook-item-chevron" aria-hidden="true"></span>
            </span>
          </summary>
          <div class="handbook-item-content">
            ${item.forms ? `<div class="handbook-forms-line"><b>Dạng đề thi:</b> ${item.forms}</div>` : ''}
            <div class="handbook-reading-grid">
              <div class="handbook-core-content">
                <div class="formula-box">${item.formula}</div>
                <div class="handbook-item-desc">${item.desc}</div>
              </div>
              ${(item.example || item.reference || item.traps) ? `
                <aside class="handbook-note-stack">
                  ${item.example ? `
                    <div class="example-box">
                      <span class="example-title">${subj.id === 'history' ? 'VÍ DỤ / CÁCH VẬN DỤNG' : 'VÍ DỤ TRONG TÀI LIỆU'}</span>
                      <p>${item.example}</p>
                    </div>
                  ` : ''}
                  ${item.reference ? `<div class="handbook-reference">Đối chiếu: ${item.reference}</div>` : ''}
                  ${item.traps ? `
                    <div class="trap-box">
                      <span class="trap-title">LƯU Ý KHI LÀM BÀI</span>
                      <p>${item.traps}</p>
                    </div>
                  ` : ''}
                </aside>
              ` : ''}
            </div>
          </div>
        </details>
      `).join('');

      return `
        <section class="handbook-chapter-card" id="hb-${subj.id}-section-${sectionIndex}">
          <div class="handbook-chapter-head">
            <h3>${sec.title}</h3>
            <span class="badge" style="background:${subj.bg};color:${subj.color};font-weight:600">${sec.badge}</span>
          </div>
          <div class="handbook-grid">
            ${itemsHtml}
          </div>
        </section>
      `;
    }).filter(Boolean).join('');

    if (!matchingSections) return '';

    return `
      <div class="handbook-subject-block" id="hb-${subj.id}">
        <div class="handbook-subject-header" style="border-left: 5px solid ${subj.color}">
          <div style="display:flex;align-items:center;gap:12px">
            <span class="handbook-subject-icon">${({math:'T',physics:'L',chemistry:'H',english:'EN',agriculture:'CN'})[subj.id] || subj.icon || '10'}</span>
            <div>
              <h2 style="font-size:20px;font-weight:700;margin:0;color:#1e293b">${subj.name}</h2>
              <small style="color:#64748b;font-size:12.5px">${subj.id === 'history' ? `${subj.sections.length} chủ đề lớn · ${subj.sections.reduce((total, section) => total + section.items.length, 0)} mục kiến thức, ví dụ và cách làm bài` : 'Công thức, cách dùng và các điểm cần chú ý khi làm bài'}</small>
              ${subj.source ? `<p class="handbook-source">${subj.source}${subj.sourceHref ? ` <a href="${subj.sourceHref}" target="_blank" rel="noopener noreferrer">${subj.sourceLabel || 'Mở tài liệu nguồn'} ↗</a>` : ''}</p>` : ''}
            </div>
          </div>
          <div class="handbook-subject-actions">
            <button class="btn btn-outline btn-sm" onclick="toggleHandbookDetails(true)">Mở tất cả</button>
            <button class="btn btn-outline btn-sm" onclick="toggleHandbookDetails(false)">Thu gọn</button>
          </div>
        </div>
        ${!query ? `
          <nav class="handbook-section-nav" aria-label="Mục lục nhanh ${subj.name}">
            <span>Mục lục:</span>
            ${subj.sections.map((sec, index) => `<button type="button" onclick="document.getElementById('hb-${subj.id}-section-${index}').scrollIntoView({behavior:'smooth',block:'start'})">${sec.title.replace(/^Bài\s+\d+\s*·\s*/i, '')}</button>`).join('')}
          </nav>
        ` : ''}
        ${matchingSections}
      </div>
    `;
  }).filter(Boolean).join('');

  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="content">
    <div class="handbook-container">
      <div class="handbook-hero">
        <div>
          <span class="eyebrow">LỚP 10 · KIẾN THỨC TRỌNG TÂM</span>
          <h1 style="font-size:clamp(22px, 2.5vw, 30px);font-weight:700;margin:10px 0 8px">Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)</h1>
          <p style="font-size:14px;color:#cbd5e1;line-height:1.6;margin:0">Mỗi môn là một trang riêng. Chọn môn cần học, tra cứu nhanh theo từ khóa và ghi nhớ những lỗi dễ gặp trong đề.</p>
        </div>
        <div style="text-align:right">
          <button class="btn btn-secondary" onclick="window.print()" style="white-space:nowrap;background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3)">
            In / Lưu PDF
          </button>
        </div>
      </div>

      <div class="handbook-toolbar">
        <div class="handbook-tabs">
          ${Object.values(handbookData).map(s => [s.id, s.id === 'english' ? 'Tiếng Anh 10' : s.name]).map(([id, label]) => `<button class="btn ${activeSubject === id ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="renderHandbook('${id}', '')">${label}</button>`).join('')}
        </div>

        <div class="handbook-search-wrap">
          <input
            type="text"
            class="handbook-search-input"
            id="handbookSearchInput"
            placeholder="Tìm kiến thức: Heron, sai số, bị động, passive, to-infinitive..."
            aria-label="Tìm kiến thức trong sổ tay"
            value="${safeQuery}"
            oninput="renderHandbook('${activeSubject}', this.value)"
          />
        </div>
      </div>

      <div class="handbook-content-area">
        ${contentHtml || `
          <div style="text-align:center;padding:60px 20px;background:#fff;border-radius:14px;border:1px solid var(--line)">
            <span style="font-size:42px">🔍</span>
            <h3 style="margin:16px 0 8px;font-size:18px">Không tìm thấy công thức phù hợp</h3>
            <p style="color:var(--muted);font-size:13px;max-width:400px;margin:auto">
              Không có kết quả nào khớp với từ khóa "<strong>${safeQuery}</strong>". Bạn hãy thử tìm bằng từ khóa khác hoặc xóa ô tìm kiếm.
            </p>
            <button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="renderHandbook('${activeSubject}', '')">
              Xóa tìm kiếm
            </button>
          </div>
        `}
      </div>

      <div class="handbook-footer-cta">
        <div>
          <strong style="display:block;font-size:16px;color:#166534">Đã nắm vững lý thuyết và các bẫy đề thi?</strong>
          <span style="font-size:13px;color:#15803d">Thực hành trong kho đề và xem lại đáp án, lời giải sau khi nộp bài.</span>
        </div>
        <a href="#subjects" class="btn btn-primary" style="white-space:nowrap;background:#16a34a;border-color:#16a34a">
          Vào phòng luyện thi ngay &rarr;
        </a>
      </div>
    </div>
    </div>
  `;

  // Tự động kích hoạt KaTeX nếu có sẵn trong trang
  try {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(app, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  } catch (err) {
    console.warn('KaTeX render error:', err);
  }

  if (query) {
    const input = document.getElementById('handbookSearchInput');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  const crumb = document.getElementById('crumb');
  if (crumb) {
    crumb.textContent = 'SỔ TAY CÔNG THỨC & LÝ THUYẾT';
  }
}

if (typeof window !== "undefined") {
  window.toggleHandbookDetails = function(open) {
    document.querySelectorAll('.handbook-content-area .handbook-item-card').forEach(item => {
      item.open = Boolean(open);
    });
  };
  window.renderHandbook = renderHandbook;
  window.handbookData = handbookData;
}
