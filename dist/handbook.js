/**
 * Sổ tay Công thức & Lý thuyết Trọng tâm Giữa kì I (Lớp 10)
 * Tích hợp công thức Toán học chuẩn KaTeX (phân số ngang, căn bậc hai, vectơ, chỉ số)
 * - Toán 10: Tới chương Hệ thức lượng trong tam giác (Chương I, II, III)
 * - Vật lý 10: Chương I & II (Mở đầu, Sai số & Động học chất điểm)
 * - Hóa học 10: Chương 1, 2, 3 (Nguyên tử, Cấu hình electron & Bảng tuần hoàn)
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
        "title": "Chương I: Mệnh đề & Tập hợp",
        "badge": "Đại số 10",
        "items": [
          {
            "name": "1. Mệnh đề toán học & Mệnh đề kéo theo",
            "formula": "• Mệnh đề kéo theo: $P \\implies Q$ (\"Nếu $P$ thì $Q$\")<br>&nbsp;&nbsp;+ $P$ là giả thiết (điều kiện đủ) &nbsp;|&nbsp; $Q$ là kết luận (điều kiện cần)<br>&nbsp;&nbsp;+ $P \\implies Q$ chỉ SAI khi $P$ đúng mà $Q$ sai<br>• Mệnh đề đảo: $Q \\implies P$ &nbsp;|&nbsp; Mệnh đề tương đương: $P \\iff Q$<br>• Mệnh đề phủ định: $\\overline{P}$ (\"Không phải $P$\")<br>&nbsp;&nbsp;+ Phủ định của $(\\forall x \\in X, P(x))$ là: $\\exists x \\in X, \\overline{P}(x)$<br>&nbsp;&nbsp;+ Phủ định của $(\\exists x \\in X, P(x))$ là: $\\forall x \\in X, \\overline{P}(x)$",
            "desc": "Mệnh đề toán học là khẳng định có tính đúng hoặc sai dứt khoát, không thể vừa đúng vừa sai.",
            "traps": "Phủ định của dấu \"=\" là \"&ne;\"; của \">\" là \"&le;\"; của \"<\" là \"&ge;\". Phủ định của \"với mọi (&forall;)\" là \"tồn tại (&exist;)\"."
          },
          {
            "name": "2. Tập hợp & Các phép toán tập hợp",
            "formula": "• Giao: $A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}$ (Lấy phần tử chung)<br>• Hợp: $A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}$ (Lấy tất cả phần tử)<br>&nbsp;&nbsp;+ Số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$<br>• Hiệu: $A \\setminus B = \\{x \\mid x \\in A, x \\notin B\\}$ (Thuộc $A$ nhưng bỏ $B$)<br>• Phần bù $C_E A$: là $E \\setminus A$ (khi $A \\subset E$)<br>• Số tập con của tập có $n$ phần tử: $2^n$ (tập rỗng $\\emptyset$ là tập con của mọi tập)",
            "desc": "Hai tập hợp bằng nhau $A = B$ khi và chỉ khi $A \\subset B$ và $B \\subset A$.",
            "traps": "Phân biệt phần tử thuộc tập ($a \\in A$) với tập con ($\\{a\\} \\subset A$). Tập rỗng $\\emptyset$ không có dấu ngoặc nhọn xung quanh."
          },
          {
            "name": "3. Các tập con của số thực ℝ & Trục số",
            "formula": "• Khoảng: $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\} \\quad (-\\infty; a) \\quad (b; +\\infty)$<br>• Đoạn: $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$ (Lấy cả 2 đầu mút $a$ và $b$)<br>• Nửa khoảng: $[a; b) \\quad (a; b] \\quad [a; +\\infty) \\quad (-\\infty; a]$",
            "desc": "Biểu diễn trên trục số: Gạch bỏ phần không thuộc tập hợp, rồi lấy giao (phần trắng chung) hoặc hợp (tất cả phần trắng).",
            "traps": "Ngoặc tròn \"(\" hoặc \")\" nghĩa là KHÔNG lấy đầu mút. Ngoặc vuông \"[\" hoặc \"]\" nghĩa là CÓ lấy đầu mút."
          }
        ]
      },
      {
        "title": "Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn",
        "badge": "Đại số 10",
        "items": [
          {
            "name": "1. Bất phương trình bậc nhất hai ẩn",
            "formula": "• Dạng tổng quát: $ax + by + c \\le 0$ (hoặc $<, \\ge, > 0$) với $a^2 + b^2 \\ne 0$<br>• Đường thẳng bờ $(d): ax + by + c = 0$<br>• Quy trình xác định miền nghiệm: Chọn điểm thử $M(0; 0)$ (nếu $c \\ne 0$):<br>&nbsp;&nbsp;+ Nếu $ax_0 + by_0 + c \\le 0$ đúng &rArr; Nửa mặt phẳng chứa $M$ là miền nghiệm<br>&nbsp;&nbsp;+ Nếu sai &rArr; Nửa mặt phẳng không chứa $M$ là miền nghiệm",
            "desc": "BPT có dấu &le;, &ge;: Miền nghiệm kể cả bờ (d) (vẽ nét liền). BPT có dấu <, >: Miền nghiệm KHÔNG kể bờ (d) (vẽ nét đứt).",
            "traps": "Nếu đường thẳng đi qua gốc tọa độ ($c = 0$), không được chọn $O(0,0)$ làm điểm thử mà phải chọn điểm khác như $(1; 0)$ hoặc $(0; 1)$."
          },
          {
            "name": "2. Hệ BPT & Bài toán tối ưu quy hoạch tuyến tính",
            "formula": "• Miền nghiệm của hệ BPT là phần giao của các miền nghiệm thành phần (thường là miền đa giác lồi: tam giác, tứ giác...)<br>• Định lí tối ưu: Biểu thức mục tiêu $F(x, y) = ax + by$ trên miền đa giác đạt Giá trị lớn nhất (GTLN) và nhỏ nhất (GTNN) tại một trong các ĐỈNH của đa giác đó",
            "desc": "Quy trình giải: Lập hệ BPT &rArr; Vẽ miền nghiệm đa giác &rArr; Tìm tọa độ các đỉnh &rArr; Tính $F(x, y)$ tại từng đỉnh &rArr; Kết luận Max/Min.",
            "traps": "Luôn chú ý điều kiện thực tế: $x \\ge 0, y \\ge 0$ (hoặc $x, y$ nguyên dương nếu là số sản phẩm/người/máy)."
          }
        ]
      },
      {
        "title": "Chương III: Hệ thức lượng trong tam giác",
        "badge": "Hình học 10",
        "items": [
          {
            "name": "1. Giá trị lượng giác của một góc (0° đến 180°)",
            "formula": "• Điểm biểu diễn $M(x_M; y_M)$ trên nửa đường tròn đơn vị:<br>&nbsp;&nbsp;$$\\sin\\alpha = y_M \\qquad \\cos\\alpha = x_M$$<br>&nbsp;&nbsp;$$\\tan\\alpha = \\frac{y_M}{x_M} \\ (\\alpha \\ne 90^\\circ) \\qquad \\cot\\alpha = \\frac{x_M}{y_M} \\ (\\alpha \\ne 0^\\circ, 180^\\circ)$$<br>• Dấu lượng giác: $\\sin\\alpha > 0$ với mọi góc $0^\\circ < \\alpha < 180^\\circ$ trong tam giác!<br>&nbsp;&nbsp;+ Góc nhọn ($0^\\circ < \\alpha < 90^\\circ$): $\\sin > 0, \\cos > 0, \\tan > 0, \\cot > 0$<br>&nbsp;&nbsp;+ Góc tù ($90^\\circ < \\alpha < 180^\\circ$): $\\sin > 0, \\cos < 0, \\tan < 0, \\cot < 0$<br>• Hai góc bù nhau: $\\sin(180^\\circ - \\alpha) = \\sin\\alpha \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha$<br>• Các hệ thức cơ bản:<br>&nbsp;&nbsp;$$\\sin^2\\alpha + \\cos^2\\alpha = 1 \\qquad \\tan\\alpha \\cdot \\cot\\alpha = 1$$<br>&nbsp;&nbsp;$$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha} \\qquad 1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}$$",
            "desc": "Trong tam giác: Góc A nhọn &hArr; cos A > 0; góc A vuông &hArr; cos A = 0; góc A tù &hArr; cos A < 0.",
            "traps": "Góc tù có cos âm (ví dụ $\\cos 120^\\circ = -\\frac{1}{2}$). Không bao giờ được quên dấu trừ khi tính cos của góc tù."
          },
          {
            "name": "2. Định lí Cosin, Định lí Sin & Công thức trung tuyến",
            "formula": "★ ĐỊNH LÍ COSIN: $$a^2 = b^2 + c^2 - 2bc \\cos A \\implies \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$<br>★ ĐỊNH LÍ SIN: $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\implies R = \\frac{a}{2\\sin A}$$<br>★ ĐỘ DÀI ĐƯỜNG TRUNG TUYẾN: $$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}$$",
            "desc": "Dùng định lí Cosin khi biết 2 cạnh và góc xen giữa, hoặc biết 3 cạnh. Dùng định lí Sin khi biết 1 cạnh và 2 góc, hoặc 2 cạnh và 1 góc đối.",
            "traps": "Bán kính đường tròn ngoại tiếp $R = \\frac{a}{2\\sin A}$, luôn nhớ có số 2 ở mẫu số."
          },
          {
            "name": "3. 5 Công thức tính diện tích tam giác",
            "formula": "1. $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$<br>2. $S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B$<br>3. $S = \\frac{abc}{4R} \\implies R = \\frac{abc}{4S}$<br>4. $S = p \\cdot r \\implies r = \\frac{S}{p}$ (với nửa chu vi $p = \\frac{a + b + c}{2}$)<br>5. Công thức Heron: S = $\\sqrt{p(p - a)(p - b)(p - c)}$",
            "desc": "Khi biết 3 cạnh: Tính nửa chu vi $p = \\frac{a+b+c}{2}$ &rArr; dùng Heron tính diện tích S &rArr; tính bán kính $R = \\frac{abc}{4S}$ và $r = \\frac{S}{p}$.",
            "traps": "$p$ trong công thức Heron và $S = pr$ là NỬA CHU VI $\\frac{a + b + c}{2}$, không phải chu vi cả tam giác."
          }
        ]
      }
    ]
  },
  "physics": {
    "id": "physics",
    "name": "Vật lý 10",
    "icon": "⚛️",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "sections": [
      {
        "title": "Chương I: Mở đầu & Sai số trong phép đo Vật lí",
        "badge": "Cơ bản & Thực hành",
        "items": [
          {
            "name": "1. Quy tắc an toàn trong phòng thực hành",
            "formula": "• Biển CẤM: Hình tròn viền đỏ, gạch chéo đỏ, nền trắng<br>• Biển CẢNH BÁO NGUY HIỂM: Hình tam giác viền đen, nền vàng<br>• Biển BẮT BUỘC: Hình tròn nền xanh dương, hình trắng<br>• Biển CHỈ DẪN: Hình chữ nhật / vuông nền xanh lá cây",
            "desc": "An toàn điện: Phân biệt điện AC (~) và DC (=). Khi có sự cố điện giật: NGẮT CẦU DAO TRƯỚC, dùng gậy khô gạt dây điện, không chạm trực tiếp vào nạn nhân.",
            "traps": "Cháy do chập điện: Cắt điện trước, dùng bình chữa cháy CO₂ hoặc bột chuyên dụng, TUYỆT ĐỐI KHÔNG dùng nước dập cháy điện."
          },
          {
            "name": "2. Phép đo & Xác định sai số thực nghiệm",
            "formula": "• Giá trị trung bình của $n$ lần đo: $$\\overline{A} = \\frac{A_1 + A_2 + \\dots + A_n}{n}$$<br>• Sai số tuyệt đối của phép đo: $$\\Delta A = \\overline{\\Delta A} + \\Delta A_{\\text{dc}}$$<br>&nbsp;&nbsp;(với $\\Delta A_{\\text{dc}}$ là sai số dụng cụ, thường lấy bằng nửa hoặc một độ chia nhỏ nhất ĐCNN)<br>• Kết quả đo ghi theo chuẩn: $$A = \\overline{A} \\pm \\Delta A$$<br>• Sai số tỉ đối: $$\\delta A = \\frac{\\Delta A}{\\overline{A}} \\times 100\\%$$",
            "desc": "Sai số hệ thống có nguyên nhân rõ ràng (dụng cụ lệch 0, thao tác sai) có thể hiệu chỉnh. Sai số ngẫu nhiên do tác động bất ngờ của môi trường, khắc phục bằng cách đo nhiều lần lấy trung bình.",
            "traps": "Ghi đúng chữ số có nghĩa: Sai số $\\Delta A$ thường chỉ lấy 1 hoặc tối đa 2 chữ số có nghĩa. Giá trị trung bình $\\overline{A}$ làm tròn đến cùng bậc thập phân với $\\Delta A$."
          },
          {
            "name": "3. Quy tắc lan truyền sai số trong tính toán",
            "formula": "• Sai số tuyệt đối của tổng hoặc hiệu:<br>&nbsp;&nbsp;Nếu $X = A + B$ hoặc $X = A - B \\implies \\Delta X = \\Delta A + \\Delta B$<br>• Sai số tỉ đối của tích hoặc thương:<br>&nbsp;&nbsp;Nếu $X = A \\cdot B$ hoặc $X = \\frac{A}{B} \\implies \\delta X = \\delta A + \\delta B$<br>• Sai số của lũy thừa:<br>&nbsp;&nbsp;Nếu $X = A^n \\implies \\delta X = n \\cdot \\delta A$",
            "desc": "Dù là phép trừ hay phép chia, sai số LUÔN CỘNG DỒN, không bao giờ trừ sai số cho nhau!",
            "traps": "Nhớ phân biệt: Phép cộng/trừ dùng cộng sai số TUYỆT ĐỐI ($\\Delta$). Phép nhân/chia/lũy thừa dùng cộng sai số TỈ ĐỐI ($\\delta$)."
          }
        ]
      },
      {
        "title": "Chương II: Động học chất điểm (Mô tả chuyển động thẳng)",
        "badge": "Cơ học chất điểm",
        "items": [
          {
            "name": "1. Quãng đường (s) & Độ dịch chuyển (d)",
            "formula": "• Vectơ độ dịch chuyển: $\\vec{d} = \\Delta \\vec{x} = \\vec{x}_2 - \\vec{x}_1$ (nối vị trí đầu đến vị trí cuối)<br>• Quãng đường $s$: Tổng chiều dài quỹ đạo thực tế vật đi qua ($s \\ge 0$)<br>• Mối quan hệ giữa $d$ và $s$:<br>&nbsp;&nbsp;+ Chuyển động thẳng không đổi chiều: $d = s$<br>&nbsp;&nbsp;+ Chuyển động có đổi chiều hoặc theo đường cong: $|d| < s$<br>&nbsp;&nbsp;+ Vật trở về vị trí xuất phát: $d = 0$ nhưng $s > 0$",
            "desc": "Độ dịch chuyển là đại lượng vectơ có hướng, có thể dương, âm hoặc bằng 0. Quãng đường là đại lượng vô hướng luôn không âm.",
            "traps": "Khi tính độ dịch chuyển trên trục tọa độ: $d = x - x_0$. Cần xác định đúng chiều dương để mang đúng dấu âm/dương."
          },
          {
            "name": "2. Tốc độ, Vận tốc & Vận tốc tổng hợp (Tính tương đối)",
            "formula": "• Tốc độ trung bình (đặc trưng cho độ nhanh chậm trên quãng đường): $$v_{\\text{tb}} = \\frac{s}{t} \\quad (s \\ge 0 \\implies v_{\\text{tb}} > 0)$$<br>• Vận tốc trung bình (đặc trưng cho độ nhanh chậm và hướng dịch chuyển): $$\\vec{v} = \\frac{\\vec{d}}{\\Delta t} \\implies v = \\frac{d}{\\Delta t}$$<br>• Đổi đơn vị chuẩn: $$1 \\text{ m/s} = 3{,}6 \\text{ km/h} \\qquad 1 \\text{ km/h} = \\frac{1}{3{,}6} \\text{ m/s}$$",
            "desc": "Vận tốc tức thời là vận tốc tại một thời điểm hoặc một vị trí nhất định, đo bằng tốc kế. Tính tương đối: $\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}$.",
            "traps": "Tốc độ trung bình KHÔNG PHẢI trung bình cộng các vận tốc! $v_{\\text{tb}} = \\frac{s_1 + s_2}{t_1 + t_2}$, phải tính tổng quãng đường chia tổng thời gian."
          },
          {
            "name": "3. Chuyển động thẳng biến đổi đều (3 công thức vàng & Gia tốc)",
            "formula": "• Định nghĩa Gia tốc: $$a = \\frac{v - v_0}{t} = \\frac{\\Delta v}{\\Delta t} \\quad (\\text{m/s}^2)$$<br>&nbsp;&nbsp;+ Nhanh dần đều: $\\vec{a}$ cùng chiều $\\vec{v} \\iff a \\cdot v > 0$ ($a$ và $v$ cùng dấu)<br>&nbsp;&nbsp;+ Chậm dần đều: $\\vec{a}$ ngược chiều $\\vec{v} \\iff a \\cdot v < 0$ ($a$ và $v$ trái dấu)<br><br>★ 3 CÔNG THỨC CỐT LÕI:<br>1. Công thức vận tốc: $$v = v_0 + at$$<br>2. Công thức độ dịch chuyển: $$d = v_0 t + \\frac{1}{2}at^2$$<br>3. Công thức độc lập thời gian: $$v^2 - v_0^2 = 2ad$$",
            "desc": "Nếu chọn chiều dương là chiều chuyển động: $v_0 > 0$. Nhanh dần đều thì $a > 0$; chậm dần đều thì $a < 0$. Khi dừng lại hẳn thì $v = 0$.",
            "traps": "Trong chuyển động chậm dần đều, gia tốc mang dấu âm ($a < 0$). Rất nhiều học sinh quên dấu trừ làm sai toàn bộ kết quả!"
          },
          {
            "name": "4. Khai thác Đồ thị chuyển động (d - t và v - t)",
            "formula": "• ĐỒ THỊ ĐỘ DỊCH CHUYỂN - THỜI GIAN ($d - t$):<br>&nbsp;&nbsp;+ Độ dốc (hệ số góc): Vận tốc $v = \\frac{\\Delta d}{\\Delta t}$<br>&nbsp;&nbsp;+ Đường dốc lên: $v > 0$ (tiến theo chiều dương)<br>&nbsp;&nbsp;+ Đường nằm ngang: $v = 0$ (vật đứng yên)<br>&nbsp;&nbsp;+ Đường dốc xuống: $v < 0$ (chuyển động theo chiều âm)<br><br>• ĐỒ THỊ VẬN TỐC - THỜI GIAN ($v - t$):<br>&nbsp;&nbsp;+ Độ dốc (hệ số góc): Gia tốc $a = \\frac{\\Delta v}{\\Delta t}$<br>&nbsp;&nbsp;+ Diện tích hình giới hạn dưới đồ thị $v - t$: Chính là độ dịch chuyển $d$",
            "desc": "Trong đồ thị $v - t$, đường song song trục hoành là chuyển động thẳng đều ($a = 0$); đường xiên là chuyển động thẳng biến đổi đều.",
            "traps": "Đừng nhầm lẫn giữa đồ thị $d - t$ và $v - t$. Đường nằm ngang ở $d - t$ là đứng yên, nhưng ở $v - t$ là chuyển động thẳng đều với vận tốc không đổi!"
          },
          {
            "name": "5. Sự rơi tự do (v₀ = 0, gia tốc g)",
            "formula": "★ 3 CÔNG THỨC RƠI TỰ DO (Thả rơi không vận tốc đầu $v_0 = 0$):<br>1. Vận tốc theo thời gian: $$v = gt$$<br>2. Quãng đường rơi: $$h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}}$$<br>3. Liên hệ vận tốc và độ cao: $$v^2 = 2gh \\implies v = \\sqrt{2gh}$$<br>• Quãng đường vật rơi trong giây thứ $n$: $$\\Delta h_n = h_n - h_{n-1} = \\frac{1}{2}g(2n - 1)$$ (với tỉ lệ các giây liên tiếp là $1 : 3 : 5 : 7 \\dots$)",
            "desc": "Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới, chỉ chịu tác dụng của trọng lực. Tại cùng một nơi, mọi vật rơi tự do như nhau không phụ thuộc khối lượng.",
            "traps": "Phân biệt \"quãng đường đi được trong $n$ giây\" ($h_n = \\frac{1}{2}gn^2$) với \"quãng đường đi trong giây thứ $n$\" ($\\Delta h_n = h_n - h_{n-1}$)."
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
        "title": "Chương 1: Cấu tạo nguyên tử & Bài toán hạt",
        "badge": "Cơ sở Hóa học",
        "items": [
          {
            "name": "1. Thành phần nguyên tử & Bài toán hạt cơ bản",
            "formula": "• Nguyên tử gồm hạt nhân ($p, n$) và vỏ electron ($e$):<br>&nbsp;&nbsp;+ Proton: $q = +1, m \\approx 1\\text{ amu}$ &nbsp;|&nbsp; Neutron: $q = 0, m \\approx 1\\text{ amu}$<br>&nbsp;&nbsp;+ Electron: $q = -1, m \\approx 0{,}00055\\text{ amu}$ (bỏ qua được khi tính khối lượng)<br>• Nguyên tử trung hòa điện: $p = e = Z$ &nbsp;|&nbsp; Số khối: $A = Z + N$<br>• Kí hiệu nguyên tử: $$^A_Z \\text{X}$$ (với $Z$ ở dưới là số hiệu nguyên tử, $A$ ở trên là số khối)<br>• BẤT ĐẲNG THỨC BỀN CỦA HẠT NHÂN ($1 \\le Z \\le 82$):<br>&nbsp;&nbsp;$$Z \\le N \\le 1{,}52Z \\implies \\frac{S}{3{,}52} \\le Z \\le \\frac{S}{3}$$ (với $S = 2Z + N$ là tổng số hạt cơ bản)",
            "desc": "Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân. Kích thước hạt nhân vô cùng nhỏ so với toàn bộ kích thước nguyên tử.",
            "traps": "Số hạt mang điện trong nguyên tử là $(p + e) = 2Z$. Số hạt không mang điện là $N$. Đọc kĩ đề: số hạt mang điện trong hạt nhân (chỉ có $p = Z$) hay trong nguyên tử ($2Z$)."
          },
          {
            "name": "2. Đồng vị & Nguyên tử khối trung bình",
            "formula": "• Đồng vị: Các nguyên tử cùng số $p$ ($Z$), khác số $n$ (khác số khối $A$)<br>• Công thức Nguyên tử khối trung bình: $$\\overline{A} = \\frac{A_1 x_1 + A_2 x_2 + \\dots + A_k x_k}{100}$$<br>&nbsp;&nbsp;(với $x_1, x_2, \\dots, x_k$ là phần trăm số nguyên tử tương ứng, $x_1 + x_2 + \\dots = 100\\%$)<br>• Ví dụ điển hình: Clo có 2 đồng vị $^{35}\\text{Cl}$ (chiếm $75\\%$) và $^{37}\\text{Cl}$ (chiếm $25\\%$):<br>&nbsp;&nbsp;$$\\overline{A} = \\frac{35 \\times 75 + 37 \\times 25}{100} = 35{,}5\\text{ amu}$$",
            "desc": "Các đồng vị của cùng một nguyên tố có tính chất hóa học giống nhau vì có cùng cấu hình electron.",
            "traps": "Khi tính phần trăm khối lượng của một đồng vị trong một hợp chất: %m(đồng vị) = [số nguyên tử đồng vị × A(đồng vị) / M(hợp chất)] × 100%."
          }
        ]
      },
      {
        "title": "Chương 2: Mô hình nguyên tử & Cấu hình electron",
        "badge": "Cấu trúc vỏ e",
        "items": [
          {
            "name": "1. Lớp, phân lớp & Orbital nguyên tử (AO)",
            "formula": "• Các lớp electron $n = 1, 2, 3, 4, 5, 6, 7$ (tên lớp: K, L, M, N, O, P, Q)<br>• Phân lớp: $s$ (chứa tối đa 2e, 1 AO), $p$ (tối đa 6e, 3 AO), $d$ (tối đa 10e, 5 AO), $f$ (tối đa 14e, 7 AO)<br>• Số electron tối đa trong lớp thứ $n$ ($n \\le 4$): $$N_{\\text{max}} = 2n^2$$<br>&nbsp;&nbsp;+ Lớp 1 (K): 2e &nbsp;|&nbsp; Lớp 2 (L): 8e &nbsp;|&nbsp; Lớp 3 (M): 18e &nbsp;|&nbsp; Lớp 4 (N): 32e",
            "desc": "Mỗi orbital nguyên tử chứa tối đa 2 electron có chiều tự quay ngược nhau (nguyên lí Pauli). Trải electron độc thân tối đa trước khi ghép đôi (quy tắc Hund).",
            "traps": "Phân lớp chứa tối đa bao nhiêu electron khác với lớp chứa tối đa bao nhiêu electron. Đọc kĩ đề hỏi phân lớp hay lớp."
          },
          {
            "name": "2. Quy tắc viết cấu hình electron & Ngoại lệ bán bão hòa Cr, Cu",
            "formula": "• Thứ tự mức năng lượng (Klechkowski):<br>&nbsp;&nbsp;$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d \\dots$$<br>• Viết cấu hình: Xếp theo thứ tự năng lượng &rArr; Sắp xếp lại theo từng lớp ($3d$ đứng trước $4s$).<br><br>★ 2 NGOẠI LỆ BẮT BUỘC PHẢI NHỚ KHI ĐI THI:<br>1. Crom ($Z = 24$): Cấu hình là $[\\text{Ar}]\\,3d^5 4s^1$ (bán bão hòa $3d^5$, KHÔNG PHẢI $3d^4 4s^2$)<br>2. Đồng ($Z = 29$): Cấu hình là $[\\text{Ar}]\\,3d^{10} 4s^1$ (bão hòa $3d^{10}$, KHÔNG PHẢI $3d^9 4s^2$)",
            "desc": "Khí hiếm làm lõi viết tắt: [He] (2), [Ne] (10), [Ar] (18). Dự đoán tính chất: 1, 2, 3e ngoài cùng là kim loại; 5, 6, 7e là phi kim; 8e là khí hiếm.",
            "traps": "Mức năng lượng: $4s$ thấp hơn $3d$. Nhưng khi viết CẤU HÌNH ELECTRON phải xếp lại theo số thứ tự lớp: $3s^2 3p^6 3d^{...} 4s^{...}$. Khi mất e tạo cation: mất ở $4s$ trước rồi mới đến $3d$ (ví dụ: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e$ thì cấu hình $\\text{Fe}^{2+}$ là $[\\text{Ar}]\\,3d^6$, không còn $4s$)."
          }
        ]
      },
      {
        "title": "Chương 3: Bảng tuần hoàn & Định luật tuần hoàn",
        "badge": "Quy luật tuần hoàn",
        "items": [
          {
            "name": "1. Cấu tạo Bảng tuần hoàn & Cách xác định vị trí",
            "formula": "• Ô NGUYÊN TỐ: Số thứ tự ô = Số hiệu nguyên tử $Z$<br>• CHU KÌ (hàng ngang): Số thứ tự chu kì = Số lớp electron (từ 1 đến 7)<br>• NHÓM (cột dọc):<br>&nbsp;&nbsp;+ Nhóm A (nguyên tố $s, p$): Số thứ tự nhóm = Số e lớp ngoài cùng<br>&nbsp;&nbsp;+ Nhóm B (nguyên tố $d, f$): Cấu hình dạng $(n-1)d^a ns^b$ (với $S = a + b$):<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S < 8 \\implies$ Nhóm $S\\text{B}$ (ví dụ $d^3 s^2 \\to$ nhóm VB)<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S \\in \\{8, 9, 10\\} \\implies$ Nhóm VIIIB<br>&nbsp;&nbsp;&nbsp;&nbsp;* $S = 11 \\implies$ Nhóm IB &nbsp;|&nbsp; $S = 12 \\implies$ Nhóm IIB",
            "desc": "Bảng tuần hoàn hiện tại gồm 118 nguyên tố, 7 chu kì (3 chu kì nhỏ 1, 2, 3; 4 chu kì lớn 4, 5, 6, 7) và 8 nhóm A, 8 nhóm B.",
            "traps": "Xác định nhóm B: Nếu phân lớp $d$ đã bão hòa ($d^{10}$) thì chỉ tính số e ở lớp $ns$ (ví dụ: Cu $3d^{10} 4s^1 \\to$ nhóm IB; Zn $3d^{10} 4s^2 \\to$ nhóm IIB)."
          },
          {
            "name": "2. Quy luật biến đổi tuần hoàn tính chất",
            "formula": "★ TRONG CÙNG MỘT CHU KÌ (Đi từ TRÁI sang PHẢI, $Z$ tăng):<br>&nbsp;&nbsp;• Bán kính nguyên tử: GIẢM DẦN &nbsp;|&nbsp; Độ âm điện: TĂNG DẦN<br>&nbsp;&nbsp;• Tính kim loại: GIẢM DẦN &nbsp;|&nbsp; Tính phi kim: TĂNG DẦN<br>&nbsp;&nbsp;• Tính base của oxide/hydroxide: GIẢM &nbsp;|&nbsp; Tính acid: TĂNG<br><br>★ TRONG CÙNG MỘT NHÓM A (Đi từ TRÊN xuống DƯỚI, $Z$ tăng):<br>&nbsp;&nbsp;• Bán kính nguyên tử: TĂNG DẦN &nbsp;|&nbsp; Độ âm điện: GIẢM DẦN<br>&nbsp;&nbsp;• Tính kim loại: TĂNG DẦN &nbsp;|&nbsp; Tính phi kim: GIẢM DẦN<br>&nbsp;&nbsp;• Tính base của oxide/hydroxide: TĂNG &nbsp;|&nbsp; Tính acid: GIẢM",
            "desc": "Phi kim mạnh nhất trong bảng tuần hoàn là Flo (F, độ âm điện lớn nhất = 3,98). Kim loại mạnh nhất là Franxi (Fr) hoặc Xesi (Cs).",
            "traps": "Quy luật ngược nhau cần nhớ kĩ: Bán kính và Tính kim loại luôn biến đổi CÙNG CHIỀU nhau. Độ âm điện và Tính phi kim luôn biến đổi CÙNG CHIỀU nhau."
          },
          {
            "name": "3. Hóa trị & Công thức Oxide / Hydroxide cao nhất",
            "formula": "• Hóa trị cao nhất với oxygen = Số thứ tự nhóm A ($n$ từ 1 đến 7)<br>&nbsp;&nbsp;+ Nhóm IA: $\\text{R}_2\\text{O}$ &nbsp;|&nbsp; Nhóm IIA: $\\text{RO}$ &nbsp;|&nbsp; Nhóm IIIA: $\\text{R}_2\\text{O}_3$<br>&nbsp;&nbsp;+ Nhóm IVA: $\\text{RO}_2$ &nbsp;|&nbsp; Nhóm VA: $\\text{R}_2\\text{O}_5$ &nbsp;|&nbsp; Nhóm VIA: $\\text{RO}_3$ &nbsp;|&nbsp; Nhóm VIIA: $\\text{R}_2\\text{O}_7$<br>• Hóa trị trong hợp chất khí với hydrogen = $8 - n$ (áp dụng từ nhóm IVA đến VIIA):<br>&nbsp;&nbsp;+ Nhóm IVA: $\\text{RH}_4$ &nbsp;|&nbsp; Nhóm VA: $\\text{RH}_3$ &nbsp;|&nbsp; Nhóm VIA: $\\text{H}_2\\text{R}$ &nbsp;|&nbsp; Nhóm VIIA: $\\text{HR}$",
            "desc": "Tổng hóa trị cao nhất với O và hóa trị với H luôn bằng 8 (với các phi kim nhóm IVA, VA, VIA, VIIA).",
            "traps": "Flo không có hóa trị cao nhất với oxygen bằng 7 vì Flo không tạo oxide $F_2O_7$ (chất $OF_2$ là oxygen difluoride)."
          }
        ]
      }
    ]
  }
};

function renderHandbook(selectedSubject, filterQuery) {
  if (typeof window !== 'undefined' && window.auth && !window.auth.requireAuth('handbook')) return;
  window.currentView = 'handbook';
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    const btn = sidebar.querySelector('[data-view="handbook"]');
    if (btn) btn.classList.add('active');
  }

  const activeSubject = selectedSubject || 'all';
  const query = (filterQuery || '').trim().toLowerCase();

  const subjectsToRender = activeSubject === 'all'
    ? Object.keys(handbookData)
    : [activeSubject];

  const contentHtml = subjectsToRender.map(subjKey => {
    const subj = handbookData[subjKey];
    if (!subj) return '';

    const matchingSections = subj.sections.map(sec => {
      const filteredItems = sec.items.filter(item => {
        if (!query) return true;
        return item.name.toLowerCase().includes(query) ||
               item.formula.toLowerCase().includes(query) ||
               item.desc.toLowerCase().includes(query) ||
               (item.traps && item.traps.toLowerCase().includes(query)) ||
               sec.title.toLowerCase().includes(query);
      });

      if (filteredItems.length === 0) return '';

      const itemsHtml = filteredItems.map(item => `
        <div class="handbook-item-card">
          <div class="handbook-item-title">${item.name}</div>
          <div class="formula-box">${item.formula}</div>
          <div class="handbook-item-desc">${item.desc}</div>
          ${item.traps ? `
            <div class="trap-box">
              <span class="trap-title">⚠️ BẪY ĐỀ THI & MẸO NHỚ NHANH</span>
              <p>${item.traps}</p>
            </div>
          ` : ''}
        </div>
      `).join('');

      return `
        <div class="handbook-chapter-card">
          <div class="handbook-chapter-head">
            <h3>${sec.title}</h3>
            <span class="badge" style="background:${subj.bg};color:${subj.color};font-weight:600">${sec.badge}</span>
          </div>
          <div class="handbook-grid">
            ${itemsHtml}
          </div>
        </div>
      `;
    }).filter(Boolean).join('');

    if (!matchingSections) return '';

    return `
      <div class="handbook-subject-block" id="hb-${subj.id}">
        <div class="handbook-subject-header" style="border-left: 5px solid ${subj.color}">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:26px">${subj.icon}</span>
            <div>
              <h2 style="margin:0;font-size:20px;font-weight:700;color:#0f172a">${subj.name}</h2>
              <span style="font-size:12.5px;color:#64748b">Trọng tâm kiến thức chuẩn tiến độ thi</span>
            </div>
          </div>
          <div class="handbook-actions">
            <button class="btn btn-outline btn-sm handbook-jump-btn" onclick="document.getElementById('hb-${subj.id}').scrollIntoView({behavior:'smooth'})">
              Lên đầu mục
            </button>
          </div>
        </div>
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
          <span class="eyebrow" style="background:rgba(255,255,255,0.15);color:#fff">HỌC TẬP SPACE · SỔ TAY THI GIỮA KÌ</span>
          <h1 style="font-size:clamp(22px, 2.5vw, 30px);font-weight:700;margin:10px 0 8px">Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)</h1>
          <p style="font-size:14px;color:#cbd5e1;line-height:1.6;margin:0">Hệ thống toàn bộ định nghĩa, công thức cốt lõi và mẹo phòng thi bám sát chuẩn kiến thức hiện tại.</p>
        </div>
        <div style="text-align:right">
          <button class="btn btn-secondary" onclick="window.print()" style="white-space:nowrap;background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3)">
            🖨️ In / Tải PDF
          </button>
        </div>
      </div>

      <div class="handbook-toolbar">
        <div class="handbook-tabs">
          <button class="btn ${activeSubject === 'all' ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="renderHandbook('all', '${query}')">
            Tất cả môn
          </button>
          <button class="btn ${activeSubject === 'math' ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="renderHandbook('math', '${query}')">
            📐 Toán 10
          </button>
          <button class="btn ${activeSubject === 'physics' ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="renderHandbook('physics', '${query}')">
            ⚛️ Vật lý 10
          </button>
          <button class="btn ${activeSubject === 'chemistry' ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="renderHandbook('chemistry', '${query}')">
            🧪 Hóa học 10
          </button>
        </div>

        <div class="handbook-search-wrap">
          <input
            type="text"
            class="handbook-search-input"
            id="handbookSearchInput"
            placeholder="🔍 Tìm nhanh công thức (Heron, cos, sai số, rơi tự do, orbital, chu kì...)"
            value="${query}"
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
              Không có kết quả nào khớp với từ khóa "<strong>${query}</strong>". Bạn hãy thử tìm bằng từ khóa khác hoặc xóa ô tìm kiếm.
            </p>
            <button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="renderHandbook('${activeSubject}', '')">
              Xóa tìm kiếm
            </button>
          </div>
        `}
      </div>

      <div class="handbook-footer-cta">
        <div>
          <strong style="display:block;font-size:16px;color:#166534">Đã nắm vững lý thuyết và công thức?</strong>
          <span style="font-size:13px;color:#15803d">Hãy thực hành ngay các bộ đề kiểm tra để làm quen với dạng đề và kiểm tra năng lực!</span>
        </div>
        <a href="#subjects" class="btn btn-primary" style="white-space:nowrap;background:#16a34a;border-color:#16a34a">
          Vào phòng thi thử ngay &rarr;
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
  window.renderHandbook = renderHandbook;
  window.handbookData = handbookData;
}
