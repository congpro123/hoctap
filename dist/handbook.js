/**
 * Sổ tay Công thức & Lý thuyết Trọng tâm Giữa kì I (Lớp 10)
 * Thiết kế thoáng mắt, trực quan, không dùng ký tự unicode lỗi.
 * - Toán 10: Tới chương Hệ thức lượng trong tam giác (Chương I, II, III)
 * - Vật lý 10: Chương I & II (Mở đầu, Sai số & Động học chất điểm)
 * - Hóa học 10: Chương 1, 2, 3 (Nguyên tử, Cấu hình electron & Bảng tuần hoàn)
 */

const handbookData = {
  math: {
    id: 'math',
    name: 'Toán 10',
    icon: '📐',
    color: '#4f46e5',
    bg: '#eeeaff',
    sections: [
      {
        title: 'Chương I: Mệnh đề & Tập hợp',
        badge: 'Đại số 10',
        items: [
          {
            name: '1. Mệnh đề toán học & Mệnh đề kéo theo',
            formula: '• Mệnh đề kéo theo: P &rArr; Q ("Nếu P thì Q")<br>&nbsp;&nbsp;+ P là giả thiết (điều kiện đủ) &nbsp;|&nbsp; Q là kết luận (điều kiện cần)<br>&nbsp;&nbsp;+ P &rArr; Q chỉ SAI khi P đúng mà Q sai<br>• Mệnh đề đảo: Q &rArr; P &nbsp;|&nbsp; Mệnh đề tương đương: P &hArr; Q<br>• Mệnh đề phủ định: <span style="text-decoration:overline">P</span> ("Không phải P")<br>&nbsp;&nbsp;+ Phủ định của (&forall;x &isin; X, P(x)) là: &exist;x &isin; X, <span style="text-decoration:overline">P</span>(x)<br>&nbsp;&nbsp;+ Phủ định của (&exist;x &isin; X, P(x)) là: &forall;x &isin; X, <span style="text-decoration:overline">P</span>(x)',
            desc: 'Mệnh đề toán học là khẳng định có tính đúng hoặc sai dứt khoát, không thể vừa đúng vừa sai.',
            traps: 'Phủ định của dấu "=" là "&ne;"; của ">" là "&le;"; của "<" là "&ge;". Phủ định của "với mọi (&forall;)" là "tồn tại (&exist;)".'
          },
          {
            name: '2. Tập hợp & Các phép toán tập hợp',
            formula: '• Giao (A &cap; B) = {x | x &isin; A và x &isin; B} (Lấy phần tử chung)<br>• Hợp (A &cup; B) = {x | x &isin; A hoặc x &isin; B} (Lấy tất cả phần tử)<br>&nbsp;&nbsp;&rArr; Công thức số phần tử: n(A &cup; B) = n(A) + n(B) - n(A &cap; B)<br>• Hiệu (A \\ B) = {x | x &isin; A và x &notin; B} (Thuộc A nhưng bỏ B)<br>• Phần bù C<sub>E</sub>A: là E \\ A khi A &sub; E<br>• Số tập con của tập có n phần tử: 2<sup>n</sup> (tập rỗng &empty; là con của mọi tập)',
            desc: 'Hai tập hợp bằng nhau A = B khi và chỉ khi A &sub; B và B &sub; A.',
            traps: 'Phân biệt phần tử thuộc tập (a &isin; A) với tập con ({a} &sub; A). Tập rỗng &empty; không có dấu ngoặc nhọn.'
          },
          {
            name: '3. Các tập con của số thực ℝ & Trục số',
            formula: '• Khoảng (a; b) = {x &isin; ℝ | a < x < b} &nbsp;|&nbsp; (-&infin;; a), (b; +&infin;)<br>• Đoạn [a; b] = {x &isin; ℝ | a &le; x &le; b} (Lấy cả 2 đầu mút a và b)<br>• Nửa khoảng: [a; b) = {x &isin; ℝ | a &le; x < b} &nbsp;|&nbsp; (a; b] = {x &isin; ℝ | a < x &le; b}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[a; +&infin;) = {x &isin; ℝ | x &ge; a} &nbsp;|&nbsp; (-&infin;; a] = {x &isin; ℝ | x &le; a}',
            desc: 'Biểu diễn trên trục số: Gạch bỏ phần không thuộc tập hợp, rồi lấy giao (phần trắng chung) hoặc hợp (tất cả phần trắng).',
            traps: 'Ngoặc tròn "(" hoặc ")" nghĩa là KHÔNG lấy đầu mút. Ngoặc vuông "[" hoặc "]" nghĩa là CÓ lấy đầu mút.'
          }
        ]
      },
      {
        title: 'Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn',
        badge: 'Đại số 10',
        items: [
          {
            name: '1. Bất phương trình bậc nhất hai ẩn',
            formula: '• Dạng chuẩn: ax + by + c &le; 0 (hoặc <, &ge;, > 0) với a² + b² &ne; 0<br>• Đường thẳng bờ (d): ax + by + c = 0<br>• Cách xác định miền nghiệm: Lấy điểm thử M(0; 0) (nếu c &ne; 0):<br>&nbsp;&nbsp;+ Nếu đúng &rArr; Nửa mặt phẳng chứa M là miền nghiệm<br>&nbsp;&nbsp;+ Nếu sai &rArr; Nửa mặt phẳng không chứa M là miền nghiệm',
            desc: 'BPT có dấu &le;, &ge;: Miền nghiệm kể cả bờ (d) (vẽ nét liền). BPT có dấu <, >: Miền nghiệm KHÔNG kể bờ (d) (vẽ nét đứt).',
            traps: 'Nếu đường thẳng đi qua gốc tọa độ (c = 0), không được chọn O(0,0) làm điểm thử mà phải chọn điểm khác như (1; 0) hoặc (0; 1).'
          },
          {
            name: '2. Hệ BPT & Bài toán tối ưu quy hoạch tuyến tính',
            formula: '• Miền nghiệm của hệ BPT là phần giao của các miền nghiệm thành phần (thường là đa giác lồi: tam giác, tứ giác...)<br>• Định lí tối ưu: Biểu thức mục tiêu F(x, y) = ax + by trên miền đa giác đạt Giá trị lớn nhất (GTLN) và nhỏ nhất (GTNN) tại một trong các ĐỈNH của đa giác đó',
            desc: 'Quy trình giải: Lập hệ BPT &rArr; Vẽ miền nghiệm đa giác &rArr; Tìm tọa độ các đỉnh &rArr; Tính F(x, y) tại từng đỉnh &rArr; Kết luận Max/Min.',
            traps: 'Luôn chú ý điều kiện thực tế: x &ge; 0, y &ge; 0 (hoặc x, y nguyên dương nếu là số sản phẩm/người).'
          }
        ]
      },
      {
        title: 'Chương III: Hệ thức lượng trong tam giác',
        badge: 'Hình học 10',
        items: [
          {
            name: '1. Giá trị lượng giác của một góc (0° đến 180°)',
            formula: '• sin&alpha; = y<sub>M</sub> &nbsp;|&nbsp; cos&alpha; = x<sub>M</sub> &nbsp;|&nbsp; tan&alpha; = y/x (&alpha; &ne; 90°) &nbsp;|&nbsp; cot&alpha; = x/y<br>• Dấu lượng giác: sin&alpha; LUÔN DƯƠNG (> 0) với mọi góc trong tam giác!<br>&nbsp;&nbsp;+ Góc nhọn (0° < &alpha; < 90°): sin > 0, cos > 0, tan > 0, cot > 0<br>&nbsp;&nbsp;+ Góc tù (90° < &alpha; < 180°): sin > 0, cos < 0, tan < 0, cot < 0<br>• Hai góc bù nhau: sin(180° - &alpha;) = sin&alpha; &nbsp;|&nbsp; cos(180° - &alpha;) = -cos&alpha;<br>• Hệ thức cơ bản: sin²&alpha; + cos²&alpha; = 1 &nbsp;|&nbsp; 1 + tan²&alpha; = 1/cos²&alpha;',
            desc: 'Trong tam giác: Góc A nhọn &hArr; cos A > 0; góc A vuông &hArr; cos A = 0; góc A tù &hArr; cos A < 0.',
            traps: 'Góc tù có cos âm (ví dụ cos 120° = -1/2). Không bao giờ được quên dấu trừ khi tính cos của góc tù.'
          },
          {
            name: '2. Định lí Cosin, Định lí Sin & Công thức trung tuyến',
            formula: '★ ĐỊNH LÍ COSIN: a² = b² + c² - 2bc . cos A<br>&nbsp;&nbsp;&rArr; cos A = (b² + c² - a²) / (2bc)<br>★ ĐỊNH LÍ SIN: a / sin A = b / sin B = c / sin C = 2R<br>&nbsp;&nbsp;&rArr; a = 2R . sin A &nbsp;|&nbsp; R = a / (2 . sin A)<br>★ ĐỘ DÀI ĐƯỜNG TRUNG TUYẾN:<br>&nbsp;&nbsp;m<sub>a</sub>² = [2(b² + c²) - a²] / 4',
            desc: 'Dùng định lí Cosin khi biết 2 cạnh và góc xen giữa, hoặc biết 3 cạnh. Dùng định lí Sin khi biết 1 cạnh và 2 góc, hoặc 2 cạnh và 1 góc đối.',
            traps: 'Bán kính đường tròn ngoại tiếp R = a / (2 sin A), luôn nhớ có số 2 ở mẫu số.'
          },
          {
            name: '3. 5 Công thức tính diện tích tam giác',
            formula: '1. S = 1/2 . a . h<sub>a</sub> = 1/2 . b . h<sub>b</sub> = 1/2 . c . h<sub>c</sub><br>2. S = 1/2 . ab . sin C = 1/2 . bc . sin A = 1/2 . ca . sin B<br>3. S = (a . b . c) / (4R) &rArr; R = (abc) / (4S)<br>4. S = p . r &rArr; r = S / p &nbsp;(với nửa chu vi p = (a + b + c) / 2)<br>5. Công thức Heron: S = &radic;[p(p - a)(p - b)(p - c)]',
            desc: 'Khi biết 3 cạnh: Tính nửa chu vi p &rArr; dùng Heron tính diện tích S &rArr; tính bán kính R = abc/(4S) và r = S/p.',
            traps: 'p trong công thức Heron và S = p.r là NỬA CHU VI (a + b + c)/2, không phải chu vi cả tam giác.'
          }
        ]
      }
    ]
  },
  physics: {
    id: 'physics',
    name: 'Vật lý 10',
    icon: '⚛️',
    color: '#0284c7',
    bg: '#e0f2fe',
    sections: [
      {
        title: 'Chương I: Mở đầu & Sai số trong phép đo Vật lí',
        badge: 'Cơ bản & Thực hành',
        items: [
          {
            name: '1. Quy tắc an toàn trong phòng thực hành',
            formula: '• Biển CẤM: Hình tròn viền đỏ, gạch chéo đỏ, nền trắng<br>• Biển CẢNH BÁO NGUY HIỂM: Hình tam giác viền đen, nền vàng<br>• Biển BẮT BUỘC: Hình tròn nền xanh dương, hình trắng<br>• Biển CHỈ DẪN: Hình chữ nhật / vuông nền xanh lá cây',
            desc: 'An toàn điện: Phân biệt điện AC (~) và DC (=). Khi có sự cố điện giật: NGẮT CẦU DAO TRƯỚC, dùng gậy khô gạt dây điện, không chạm trực tiếp vào nạn nhân.',
            traps: 'Cháy do chập điện: Cắt điện trước, dùng bình chữa cháy CO₂ hoặc bột chuyên dụng, TUYỆT ĐỐI KHÔNG dùng nước dập cháy điện.'
          },
          {
            name: '2. Phép đo & Xác định sai số thực nghiệm',
            formula: '• Giá trị trung bình: <span style="text-decoration:overline">A</span> = (A₁ + A₂ + ... + Aₙ) / n<br>• Sai số tuyệt đối lần đo i: &Delta;Aᵢ = |<span style="text-decoration:overline">A</span> - Aᵢ|<br>• Sai số dụng cụ &Delta;A<sub>dc</sub>: Thường bằng nửa ĐCNN hoặc 1 ĐCNN<br>• Sai số tuyệt đối toàn phần: &Delta;A = <span style="text-decoration:overline">&Delta;A</span> + &Delta;A<sub>dc</sub><br>• Sai số tỉ đối: &delta;A = (&Delta;A / <span style="text-decoration:overline">A</span>) &times; 100%<br>• Kết quả đo: A = <span style="text-decoration:overline">A</span> &plusmn; &Delta;A (hoặc A = <span style="text-decoration:overline">A</span> &plusmn; &delta;A%)',
            desc: 'Sai số hệ thống: Do dụng cụ (lệch điểm 0) &rArr; hiệu chỉnh lại dụng cụ. Sai số ngẫu nhiên: Do thao tác, môi trường &rArr; đo nhiều lần lấy trung bình.',
            traps: 'Giá trị trung bình <span style="text-decoration:overline">A</span> phải làm tròn đến cùng hàng thập phân với sai số &Delta;A (Ví dụ L = 120,0 &plusmn; 0,2 cm chứ không viết 120 &plusmn; 0,2 cm).'
          },
          {
            name: '3. Quy tắc lan truyền sai số trong tính toán',
            formula: '• Phép cộng / trừ: F = X &plusmn; Y &rArr; &Delta;F = &Delta;X + &Delta;Y (Cộng sai số tuyệt đối)<br>• Phép nhân / chia: F = X . Y hoặc X / Y &rArr; &delta;F = &delta;X + &delta;Y (Cộng sai số tỉ đối)<br>• Phép lũy thừa: F = X<sup>n</sup> &rArr; &delta;F = n . &delta;X<br>Ví dụ đo gia tốc rơi tự do: g = 2h / t² &rArr; &delta;g = &delta;h + 2.&delta;t',
            desc: 'Khi nhân hoặc chia, kết quả được làm tròn theo số chữ số có nghĩa của dữ liệu có ít chữ số có nghĩa nhất.',
            traps: 'Phép nhân / chia phải cộng SAI SỐ TỈ ĐỐI (&delta;%), tuyệt đối không được cộng trực tiếp sai số tuyệt đối (&Delta;).'
          }
        ]
      },
      {
        title: 'Chương II: Động học chất điểm (Mô tả chuyển động thẳng)',
        badge: 'Động học 10',
        items: [
          {
            name: '1. Quãng đường (s) & Độ dịch chuyển (d)',
            formula: '• Quãng đường (s &ge; 0): Chiều dài quỹ đạo đi được (vô hướng, không âm)<br>• Độ dịch chuyển (d): Vectơ nối điểm đầu đến điểm cuối (có hướng)<br>&nbsp;&nbsp;+ Giá trị đại số d: d = x - x₀ (có thể âm, dương hoặc bằng 0)<br>&nbsp;&nbsp;+ Chuyển động thẳng không đổi chiều: s = |d|<br>• Đổi đơn vị tốc độ: 1 m/s = 3,6 km/h &hArr; v(m/s) = v(km/h) / 3,6',
            desc: 'Khi vật chuyển động rồi quay về đúng điểm xuất phát (1 vòng khép kín): Vị trí cuối trùng vị trí đầu nên d = 0, dù quãng đường s > 0.',
            traps: 'Chạy 1 vòng sân vận động 400 m về lại vạch xuất phát: Quãng đường s = 400 m, nhưng độ dịch chuyển d = 0 m!'
          },
          {
            name: '2. Tốc độ, Vận tốc & Vận tốc tổng hợp (Tính tương đối)',
            formula: '• Tốc độ trung bình: v<sub>tb</sub> = s / t &ge; 0 (Đặc trưng cho mức độ nhanh chậm)<br>• Vận tốc trung bình: v<sub>tb</sub> = d / t (Đặc trưng cho hướng và độ nhanh chậm)<br>• Công thức cộng vận tốc: vectơ v₁₃ = vectơ v₁₂ + vectơ v₂₃<br>&nbsp;&nbsp;+ Xuôi dòng: v<sub>xuôi</sub> = v<sub>thuyền</sub> + v<sub>nước</sub><br>&nbsp;&nbsp;+ Ngược dòng: v<sub>ngược</sub> = |v<sub>thuyền</sub> - v<sub>nước</sub>|<br>&nbsp;&nbsp;+ Vuông góc bờ: v₁₃ = &radic;(v₁₂² + v₂₃²)',
            desc: 'Tốc độ tức thời đọc được trên tốc kế của phương tiện. Tính tương đối: Vận tốc phụ thuộc vào hệ quy chiếu được chọn.',
            traps: 'Khi vật chuyển động đổi chiều, vận tốc trung bình có thể bằng 0 hoặc âm, nhưng tốc độ trung bình luôn dương.'
          },
          {
            name: '3. Chuyển động thẳng biến đổi đều (3 công thức vàng)',
            formula: '• Gia tốc: a = (v - v₀) / t = &Delta;v / &Delta;t (m/s²)<br>• Nhanh dần đều: a cùng dấu v₀ (a . v > 0)<br>• Chậm dần đều: a trái dấu v₀ (a . v < 0), khi dừng lại thì v = 0<br>★ 3 CÔNG THỨC VÀNG:<br>&nbsp;&nbsp;1. Vận tốc theo thời gian: v = v₀ + at<br>&nbsp;&nbsp;2. Độ dịch chuyển: d = v₀t + 1/2 . at²<br>&nbsp;&nbsp;3. Hệ thức độc lập thời gian: v² - v₀² = 2ad',
            desc: 'Bài toán xe hãm phanh: Chiều dương là chiều chuyển động &rArr; v₀ > 0, vì xe chạy chậm dần nên gia tốc a < 0. Xe dừng lại khi v = 0.',
            traps: 'Xe hãm phanh với độ lớn gia tốc 2 m/s² nghĩa là a = -2 m/s². Quên dấu trừ sẽ tính sai hoàn toàn!'
          },
          {
            name: '4. Khai thác Đồ thị chuyển động (d - t và v - t)',
            formula: '★ ĐỒ THỊ ĐỘ DỊCH CHUYỂN – THỜI GIAN (d - t):<br>• Độ dốc = &Delta;d / &Delta;t = v (chính là VẬN TỐC)<br>&nbsp;&nbsp;+ Dốc lên: v > 0 &nbsp;|&nbsp; Dốc xuống: v < 0 &nbsp;|&nbsp; Nằm ngang: v = 0 (vật đứng yên)<br>★ ĐỒ THỊ VẬN TỐC – THỜI GIAN (v - t):<br>• Độ dốc = &Delta;v / &Delta;t = a (chính là GIA TỐC)<br>• Diện tích dưới đồ thị v - t: Diện tích hình giới hạn bởi đồ thị v-t với trục thời gian chính bằng độ dịch chuyển d (quãng đường s)',
            desc: 'Tính quãng đường từ đồ thị v - t: Chia hình thành tam giác, hình thang, hình chữ nhật rồi tính tổng diện tích.',
            traps: 'Trên đồ thị d - t, đường nằm ngang là đứng yên. Trên đồ thị v - t, đường nằm ngang là chuyển động thẳng đều!'
          },
          {
            name: '5. Sự rơi tự do (v₀ = 0, gia tốc g)',
            formula: '• Rơi tự do là sự rơi chỉ dưới tác dụng của trọng lực<br>• Đặc điểm: Thẳng nhanh dần đều, hướng thẳng đứng từ trên xuống, v₀ = 0, gia tốc g &asymp; 9,8 m/s² (hoặc 10 m/s²)<br>★ CÁC CÔNG THỨC RƠI TỰ DO:<br>&nbsp;&nbsp;1. Vận tốc: v = gt = &radic;(2gh)<br>&nbsp;&nbsp;2. Quãng đường rơi: h = 1/2 . gt² &rArr; Thời gian rơi: t = &radic;(2h / g)<br>&nbsp;&nbsp;3. Quãng đường trong giây thứ n: &Delta;h<sub>n</sub> = 1/2 . g(2n - 1) &nbsp;(tỉ lệ 1 : 3 : 5 : 7...)',
            desc: 'Tại cùng một vị trí gần mặt đất, mọi vật rơi tự do với cùng gia tốc g như nhau, hoàn toàn không phụ thuộc khối lượng nặng nhẹ.',
            traps: 'Vật nặng 2 kg và vật nhẹ 100 g thả rơi cùng lúc từ cùng độ cao sẽ chạm đất CÙNG MỘT LÚC và cùng vận tốc.'
          }
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Hóa học 10',
    icon: '🧪',
    color: '#059669',
    bg: '#d1fae5',
    sections: [
      {
        title: 'Chương 1: Cấu tạo nguyên tử & Bài toán hạt',
        badge: 'Nguyên tử 10',
        items: [
          {
            name: '1. Thành phần nguyên tử & Bài toán hạt cơ bản',
            formula: '• Hạt nhân: Proton (p, điện tích +1, ~1 amu) + Neutron (n, điện tích 0, ~1 amu)<br>• Vỏ nguyên tử: Electron (e, điện tích -1, ~0,00055 amu)<br>• Số hiệu nguyên tử: Z = p = e (số đơn vị điện tích hạt nhân)<br>• Số khối: A = Z + N &nbsp;|&nbsp; Kí hiệu: <sup>A</sup><sub>Z</sub>X<br>★ HỆ THỨC BÀI TOÁN HẠT:<br>&nbsp;&nbsp;+ Tổng số hạt = 2Z + N<br>&nbsp;&nbsp;+ Số hạt mang điện = 2Z &nbsp;|&nbsp; Số hạt không mang điện = N<br>&nbsp;&nbsp;+ Hiệu hạt mang điện và không mang điện = 2Z - N<br>&nbsp;&nbsp;+ Điều kiện bền (Z &le; 82): (Tổng hạt) / 3,52 &le; Z &le; (Tổng hạt) / 3',
            desc: 'Nguyên tử trung hòa về điện nên số proton bằng số electron. Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân.',
            traps: 'Đồng vị Protium <sup>1</sup><sub>1</sub>H là trường hợp duy nhất hạt nhân chỉ có 1 proton, hoàn toàn KHÔNG có neutron (N = 0).'
          },
          {
            name: '2. Đồng vị & Nguyên tử khối trung bình',
            formula: '• Đồng vị: Cùng số proton (Z), khác số neutron (N) &rArr; khác số khối (A)<br>★ CÔNG THỨC NGUYÊN TỬ KHỐI TRUNG BÌNH:<br>&nbsp;&nbsp;<span style="text-decoration:overline">A</span> = (A₁ . x₁ + A₂ . x₂ + ... + A<sub>k</sub> . x<sub>k</sub>) / 100<br>&nbsp;&nbsp;(x₁, x₂... là % số nguyên tử của các đồng vị; x₁ + x₂ + ... = 100%)<br>★ % KHỐI LƯỢNG ĐỒNG VỊ TRONG HỢP CHẤT:<br>&nbsp;&nbsp;%m(<sup>A₁</sup>X) = [A₁ &times; (x₁ / 100) &times; (số nguyên tử X)] / M<sub>hợp chất</sub> &times; 100%',
            desc: 'Ví dụ Chlorine có 2 đồng vị <sup>35</sup>Cl (75%) và <sup>37</sup>Cl (25%) &rArr; <span style="text-decoration:overline">A</span> = (35&times;75 + 37&times;25)/100 = 35,5 amu.',
            traps: 'Phân biệt số khối A của một đồng vị cụ thể với nguyên tử khối trung bình <span style="text-decoration:overline">A</span>. Tính phân tử khối luôn dùng <span style="text-decoration:overline">A</span>.'
          }
        ]
      },
      {
        title: 'Chương 2: Mô hình nguyên tử & Cấu hình electron',
        badge: 'Lượng tử 10',
        items: [
          {
            name: '1. Orbital nguyên tử (AO) & Lớp, phân lớp e',
            formula: '• Orbital nguyên tử (AO): Vùng không gian có xác suất tìm thấy e lớn nhất (~90%)<br>&nbsp;&nbsp;+ AO s: Dạng hình cầu<br>&nbsp;&nbsp;+ AO p: Dạng hình số 8 nổi định hướng theo 3 trục (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)<br>• Lớp n (K:1, L:2, M:3, N:4...): Có n phân lớp, n² AO và tối đa 2n² electron<br>• Phân lớp: s (1 AO, tối đa 2e), p (3 AO, tối đa 6e), d (5 AO, tối đa 10e), f (7 AO, tối đa 14e)',
            desc: 'Các electron thuộc cùng một phân lớp có mức năng lượng BẰNG NHAU. Các electron cùng lớp có mức năng lượng GẦN BẰNG NHAU.',
            traps: 'Lớp M (n = 3) có tối đa 2 &times; 3² = 18 electron và có 3² = 9 AO (gồm 1 AO s, 3 AO p, 5 AO d).'
          },
          {
            name: '2. Quy tắc viết cấu hình e & 2 Ngoại lệ kinh điển',
            formula: '• Thứ tự mức năng lượng: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p... (4s thấp hơn 3d!)<br>★ 2 NGOẠI LỆ KINH ĐIỂN CẦN THUỘC LÒNG:<br>&nbsp;&nbsp;+ Bán bão hòa d: <sub>24</sub>Cr: [Ar] 3d⁵ 4s¹ (không viết 3d⁴ 4s²)<br>&nbsp;&nbsp;+ Bão hòa d: <sub>29</sub>Cu: [Ar] 3d¹⁰ 4s¹ (không viết 3d⁹ 4s²)<br>★ CẤU HÌNH CỦA CATION KIM LOẠI:<br>&nbsp;&nbsp;Nhường e từ lớp ngoài cùng trước: Fe &rarr; Fe²⁺ + 2e<br>&nbsp;&nbsp;Fe: [Ar]3d⁶4s² &rArr; Fe²⁺: [Ar]3d⁶ (bớt 4s² trước!)',
            desc: 'Phân loại nguyên tố: 1, 2, 3 e ngoài cùng là kim loại (trừ H, He, B); 5, 6, 7 e là phi kim; 8 e là khí hiếm (He có 2e).',
            traps: 'Cấu hình Fe²⁺ là [Ar]3d⁶ chứ không phải [Ar]3d⁴4s² vì luôn bớt electron ở phân lớp ngoài cùng 4s trước.'
          }
        ]
      },
      {
        title: 'Chương 3: Bảng tuần hoàn & Định luật tuần hoàn',
        badge: 'Hệ thống tuần hoàn',
        items: [
          {
            name: '1. Cấu trúc Bảng tuần hoàn các nguyên tố',
            formula: '• Ô nguyên tố: Số thứ tự ô = Số hiệu nguyên tử Z = Số proton = Số electron<br>• Chu kì (7 chu kì): Số thứ tự chu kì = Số lớp electron<br>&nbsp;&nbsp;+ Chu kì 1, 2, 3: Chu kì nhỏ &nbsp;|&nbsp; Chu kì 4, 5, 6, 7: Chu kì lớn<br>• Nhóm A (8 nhóm): Số thứ tự nhóm A = Số electron hóa trị = Số electron lớp ngoài cùng<br>• Nhóm B (8 nhóm): Gồm các nguyên tố d và f (kim loại chuyển tiếp)',
            desc: 'Nguyên tắc sắp xếp: Theo chiều tăng dần của điện tích hạt nhân Z; cùng số lớp e xếp cùng chu kì; cùng số e hóa trị xếp cùng nhóm.',
            traps: 'Nguyên tố nhóm B có cấu hình (n-1)dᵃ nsᵇ: Nếu a + b = 8, 9, 10 thì thuộc nhóm VIIIB; a + b = 11 là nhóm IB; a + b = 12 là nhóm IIB.'
          },
          {
            name: '2. Quy luật biến đổi tuần hoàn các tính chất',
            formula: '★ TRONG 1 CHU KÌ (Từ trái &rarr; phải, Z tăng):<br>&nbsp;&nbsp;• Bán kính nguyên tử: GIẢM &nbsp;|&nbsp; Độ âm điện: TĂNG (F lớn nhất: 3,98)<br>&nbsp;&nbsp;• Tính kim loại: GIẢM &nbsp;|&nbsp; Tính phi kim: TĂNG<br>&nbsp;&nbsp;• Tính base: GIẢM &nbsp;|&nbsp; Tính acid: TĂNG<br>★ TRONG 1 NHÓM A (Từ trên &darr; dưới, Z tăng):<br>&nbsp;&nbsp;• Bán kính nguyên tử: TĂNG &nbsp;|&nbsp; Độ âm điện: GIẢM<br>&nbsp;&nbsp;• Tính kim loại: TĂNG (Cs mạnh nhất) &nbsp;|&nbsp; Tính phi kim: GIẢM<br>&nbsp;&nbsp;• Tính base: TĂNG &nbsp;|&nbsp; Tính acid: GIẢM',
            desc: 'Định luật tuần hoàn: Tính chất các nguyên tố và hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
            traps: 'Tính acid biến đổi cùng chiều với tính phi kim; tính base biến đổi cùng chiều với tính kim loại.'
          },
          {
            name: '3. Hóa trị cao nhất với O & Hợp chất khí với H',
            formula: '• Hóa trị cao nhất với O = Số thứ tự nhóm A (tạo oxide cao nhất R₂Oₙ)<br>• Hóa trị trong hợp chất khí với H = 8 - n (với phi kim nhóm IVA &rarr; VIIA, RH₈₋ₙ)<br>★ CÔNG THỨC VÀNG: Tổng hóa trị với O và với H của phi kim luôn bằng 8:<br>&nbsp;&nbsp;Hóa trị với O + Hóa trị với H = n + (8 - n) = 8',
            desc: 'Ví dụ: Phi kim nhóm VIA (Sulfur S) có oxide cao nhất là SO₃ (hóa trị VI) và hợp chất khí với H là H₂S (hóa trị 8 - 6 = II).',
            traps: 'Kim loại nhóm IA, IIA, IIIA không tạo hợp chất khí với hydrogen. Công thức 8 - n chỉ áp dụng cho phi kim từ nhóm IVA đến VIIA.'
          }
        ]
      }
    ]
  }
};

function renderHandbook(selectedSubject, filterQuery) {
  if (typeof setNav === 'function') setNav('handbook');
  if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo(0, 0);

  const activeSubject = (selectedSubject && handbookData[selectedSubject]) ? selectedSubject : 'all';
  const query = (filterQuery || '').trim().toLowerCase();

  const subjectsToRender = activeSubject === 'all'
    ? ['math', 'physics', 'chemistry']
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
