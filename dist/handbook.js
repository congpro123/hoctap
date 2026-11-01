/**
 * Sổ tay Công thức & Lý thuyết Trọng tâm Giữa kì I (Lớp 10)
 * Bám sát chuẩn tiến độ học tập:
 * - Toán 10: Học tới Chương Hệ thức lượng trong tam giác (Chương I, II, III - Không có Vectơ)
 * - Vật lý 10: Học đến Chương II Động học chất điểm (Chương I & II - Không có Ném ngang, Newton, Mômen lực)
 * - Hóa học 10: Học đến Chương Bảng tuần hoàn (Chương 1, 2, 3 - Không có Liên kết hóa học, Oxi hóa - Khử)
 */

const handbookData = {
  math: {
    id: 'math',
    name: 'Toán 10',
    icon: '📐',
    color: '#5548df',
    bg: '#eeeaff',
    sections: [
      {
        title: 'Chương I: Mệnh đề & Tập hợp',
        badge: 'Trọng tâm Đại số',
        items: [
          {
            name: 'Mệnh đề toán học, Phủ định & Mệnh đề kéo theo',
            formula: '• Mệnh đề: Khẳng định đúng hoặc sai, không thể vừa đúng vừa sai<br>• Phủ định P̄: "Không phải P". P̄ đúng khi P sai và ngược lại<br>• Phủ định chứa ∀ và ∃: (∀x ∈ X, P(x)) &hArr; ∃x ∈ X, P̄(x) &nbsp;|&nbsp; (∃x ∈ X, P(x)) &hArr; ∀x ∈ X, P̄(x)<br>• Mệnh đề kéo theo P &rArr; Q: "Nếu P thì Q" (P: điều kiện đủ; Q: điều kiện cần). P &rArr; Q chỉ SAI khi P ĐÚNG mà Q SAI<br>• Mệnh đề đảo Q &rArr; P &nbsp;·&nbsp; Mệnh đề tương đương P &hArr; Q (P là điều kiện cần và đủ để có Q)',
            desc: 'Mệnh đề toán học là nền tảng của tư duy logic. Chú ý mệnh đề chứa biến P(n) không phải là mệnh đề, chỉ trở thành mệnh đề khi gán một giá trị cụ thể cho biến n.',
            traps: 'Phủ định của "bằng" (=) là "khác" (&ne;); Phủ định của "lớn hơn" (>) là "nhỏ hơn hoặc bằng" (&le;); Phủ định của "với mọi" (∀) là "tồn tại" (∃).'
          },
          {
            name: 'Tập hợp & Các phép toán trên tập hợp',
            formula: '• Tập con: A &sub; B &hArr; (∀x &isin; A &rArr; x &isin; B). Số tập con của tập n phần tử là 2ⁿ (tập rỗng &empty; là con của mọi tập)<br>• Phép giao (A &cap; B): Gồm các phần tử VỪA thuộc A VỪA thuộc B: x &isin; A và x &isin; B<br>• Phép hợp (A &cup; B): Gồm các phần tử thuộc A HOẶC thuộc B: x &isin; A hoặc x &isin; B<br>  &rArr; Công thức số phần tử: n(A &cup; B) = n(A) + n(B) - n(A &cap; B)<br>• Hiệu (A \\ B): Gồm các phần tử thuộc A nhưng KHÔNG thuộc B<br>• Phần bù C<sub>E</sub>A: Hiệu E \\ A khi A &sub; E',
            desc: 'Hai tập hợp bằng nhau A = B khi và chỉ khi A &sub; B và B &sub; A. Chú ý tập hợp các ước, tập nghiệm của phương trình, và dạng liệt kê phần tử.',
            traps: 'Tránh nhầm lẫn giữa phần tử thuộc tập hợp (a &isin; A) với tập con ({a} &sub; A). Tập rỗng &empty; không có ngoặc nhọn xung quanh.'
          },
          {
            name: 'Các tập con của số thực ℝ & Kĩ năng trục số',
            formula: '• Khoảng (a; b) = {x &isin; ℝ | a < x < b} &nbsp;|&nbsp; (-&infin;; a), (b; +&infin;)<br>• Đoạn [a; b] = {x &isin; ℝ | a &le; x &le; b} (lấy cả hai đầu mút a và b)<br>• Nửa khoảng: [a; b) = {x &isin; ℝ | a &le; x < b} &nbsp;|&nbsp; (a; b] = {x &isin; ℝ | a < x &le; b}<br>  [a; +&infin;) = {x &isin; ℝ | x &ge; a} &nbsp;|&nbsp; (-&infin;; a] = {x &isin; ℝ | x &le; a}',
            desc: 'Kĩ năng giải toán tập con của ℝ: Luôn vẽ trục số biểu diễn các mút số, gạch bỏ các phần không thuộc tập hợp, từ đó suy ra chính xác kết quả Giao, Hợp, Hiệu.',
            traps: 'Bẫy đầu mút ngoặc tròn vs ngoặc vuông: Nếu A = [1; 5) và B = (3; 7] thì A &cap; B = (3; 5) (vì 5 không thuộc A nên không thể thuộc giao).'
          }
        ]
      },
      {
        title: 'Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn',
        badge: 'Đại số & Tọa độ',
        items: [
          {
            name: 'Bất phương trình bậc nhất hai ẩn & Nửa mặt phẳng nghiệm',
            formula: '• Dạng tổng quát: ax + by + c &le; 0 (hoặc <, &ge;, > 0) với a² + b² &ne; 0<br>• Đường thẳng bờ (d): ax + by + c = 0 chia mặt phẳng tọa độ Oxy thành 2 nửa mặt phẳng<br>• Cách xác định miền nghiệm: Chọn điểm thử M(x₀, y₀) &notin; (d) (thường chọn gốc O(0; 0) nếu c &ne; 0):<br>  + Nếu ax₀ + by₀ + c &le; 0 đúng: Nửa mặt phẳng chứa M là miền nghiệm<br>  + Nếu ax₀ + by₀ + c &le; 0 sai: Nửa mặt phẳng không chứa M là miền nghiệm',
            desc: 'Nếu BPT có dấu &le; hoặc &ge;: Miền nghiệm kể cả bờ (d) (vẽ nét liền). Nếu BPT có dấu < hoặc >: Miền nghiệm KHÔNG kể bờ (d) (vẽ nét đứt).',
            traps: 'Nếu c = 0, đường thẳng đi qua gốc tọa độ O(0,0), không được chọn O làm điểm thử mà phải chọn một điểm khác như (1; 0) hoặc (0; 1).'
          },
          {
            name: 'Hệ BPT bậc nhất hai ẩn & Bài toán tối ưu quy hoạch tuyến tính',
            formula: '• Hệ BPT bậc nhất hai ẩn gồm 2 hay nhiều BPT bậc nhất hai ẩn. Miền nghiệm là phần giao của các miền nghiệm thành phần (thường là miền đa giác lồi: tam giác, tứ giác...)<br>• Định lí tối ưu: Biểu thức mục tiêu F(x, y) = ax + by trên miền đa giác lồi A₁A₂...Aₙ đạt Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) tại một trong các đỉnh của miền đa giác đó',
            desc: 'Quy trình 4 bước giải bài toán thực tế (tối ưu lợi nhuận/chi phí):<br>Bước 1: Đặt ẩn số x &ge; 0, y &ge; 0.<br>Bước 2: Lập hệ BPT từ các điều kiện giới hạn nguồn lực.<br>Bước 3: Vẽ miền nghiệm và xác định tọa độ các đỉnh của miền đa giác.<br>Bước 4: Tính F(x, y) tại tất cả các đỉnh và kết luận Max/Min.',
            traps: 'Luôn kiểm tra điều kiện x &ge; 0, y &ge; 0 (hoặc x, y nguyên dương nếu là số sản phẩm/người).'
          }
        ]
      },
      {
        title: 'Chương III: Hệ thức lượng trong tam giác',
        badge: 'Hình học lượng giác',
        items: [
          {
            name: 'Giá trị lượng giác của một góc từ 0° đến 180°',
            formula: '• Trên nửa đường tròn đơn vị: Điểm M(x₀; y₀) ứng với góc &alpha;:<br>  sin&alpha; = y₀ &nbsp;|&nbsp; cos&alpha; = x₀ &nbsp;|&nbsp; tan&alpha; = y₀ / x₀ (&alpha; &ne; 90°) &nbsp;|&nbsp; cot&alpha; = x₀ / y₀ (&alpha; &ne; 0°, 180°)<br>• Dấu của các GTLG:<br>  + Góc nhọn (0° < &alpha; < 90°): sin&alpha; > 0, cos&alpha; > 0, tan&alpha; > 0, cot&alpha; > 0<br>  + Góc tù (90° < &alpha; < 180°): sin&alpha; > 0, cos&alpha; < 0, tan&alpha; < 0, cot&alpha; < 0 (sin LUÔN DƯƠNG!)<br>• Hai góc bù nhau (&alpha; và 180° - &alpha;):<br>  sin(180° - &alpha;) = sin&alpha; &nbsp;|&nbsp; cos(180° - &alpha;) = -cos&alpha; &nbsp;|&nbsp; tan(180° - &alpha;) = -tan&alpha; &nbsp;|&nbsp; cot(180° - &alpha;) = -cot&alpha;<br>• Các hệ thức cơ bản: sin²&alpha; + cos²&alpha; = 1 &nbsp;|&nbsp; 1 + tan²&alpha; = 1/cos²&alpha; &nbsp;|&nbsp; 1 + cot²&alpha; = 1/sin²&alpha; &nbsp;|&nbsp; tan&alpha; . cot&alpha; = 1',
            desc: 'Trong một tam giác, số đo các góc luôn nằm từ 0° đến 180°. Sin của các góc trong tam giác luôn dương. Góc A tù khi và chỉ khi cosA < 0.',
            traps: 'Góc tù có cos âm: cos 120° = -1/2, cos 150° = -&radic;3/2. Nhầm dấu cos là sai hoàn toàn định lí Cosin!'
          },
          {
            name: 'Định lí Cosin, Định lí Sin & Công thức đường trung tuyến',
            formula: '★ ĐỊNH LÍ COSIN: a² = b² + c² - 2bc.cosA &rArr; cosA = (b² + c² - a²) / (2bc)<br>  + a² = b² + c² &hArr; &Delta; vuông tại A &nbsp;|&nbsp; a² < b² + c² &hArr; góc A nhọn &nbsp;|&nbsp; a² > b² + c² &hArr; góc A tù<br>★ ĐỊNH LÍ SIN: a / sinA = b / sinB = c / sinC = 2R &rArr; a = 2R.sinA &nbsp;|&nbsp; R = a / (2.sinA)<br>★ CÔNG THỨC ĐƯỜNG TRUNG TUYẾN m<sub>a</sub>:<br>  m<sub>a</sub>² = [2(b² + c²) - a²] / 4 &nbsp;|&nbsp; m<sub>b</sub>² = [2(a² + c²) - b²] / 4 &nbsp;|&nbsp; m<sub>c</sub>² = [2(a² + b²) - c²] / 4',
            desc: 'Dùng định lí Cosin khi biết 2 cạnh và góc xen giữa, hoặc biết cả 3 cạnh (để tính góc). Dùng định lí Sin khi biết 1 cạnh và 2 góc, hoặc biết 2 cạnh và 1 góc đối diện.',
            traps: 'Bán kính đường tròn ngoại tiếp: R = a / (2sinA), rất nhiều bạn quên số 2 ở mẫu dẫn đến tính sai R gấp đôi.'
          },
          {
            name: '5 Công thức tính diện tích tam giác & Giải tam giác thực tế',
            formula: '1. S = 1/2 . a . h<sub>a</sub> = 1/2 . b . h<sub>b</sub> = 1/2 . c . h<sub>c</sub> (Cạnh đáy &times; Chiều cao tương ứng)<br>2. S = 1/2 . ab . sinC = 1/2 . bc . sinA = 1/2 . ca . sinB (Tích 2 cạnh &times; Sin góc xen giữa)<br>3. S = (abc) / (4R) &rArr; R = (abc) / (4S) (Bán kính đường tròn ngoại tiếp R)<br>4. S = p . r &rArr; r = S / p với nửa chu vi p = (a + b + c) / 2 (Bán kính đường tròn nội tiếp r)<br>5. Công thức Heron: S = &radic;[p(p - a)(p - b)(p - c)]',
            desc: 'Ứng dụng giải tam giác thực tế: Đo chiều cao của tháp, đỉnh núi mà không thể đến chân tháp (bằng cách đo góc ngắm từ 2 điểm A, B cách nhau khoảng d trên mặt đất, dùng định lí Sin để tìm khoảng cách rồi dùng tam giác vuông tính chiều cao).',
            traps: 'Trong công thức Heron và S = p.r: p là NỬA CHU VI (a + b + c)/2, không phải chu vi cả tam giác!'
          }
        ]
      }
    ]
  },
  physics: {
    id: 'physics',
    name: 'Vật lý 10',
    icon: '⚛️',
    color: '#4b9ad8',
    bg: '#e7f4ff',
    sections: [
      {
        title: 'Chương I: Mở đầu & Sai số trong phép đo Vật lí',
        badge: 'Trọng tâm Giữa kì I',
        items: [
          {
            name: 'Đối tượng nghiên cứu & Quy tắc an toàn phòng thực hành',
            formula: '• Biển CẤM: Hình tròn viền đỏ, gạch chéo đỏ, nền trắng<br>• Biển CẢNH BÁO NGUY HIỂM: Hình tam giác viền đen, nền vàng<br>• Biển BẮT BUỘC THỰC HIỆN: Hình tròn nền xanh dương, hình trắng<br>• Biển CHỈ DẪN AN TOÀN: Hình vuông / chữ nhật nền xanh lá cây',
            desc: '1. Đối tượng nghiên cứu của Vật lí: Các dạng vận động của vật chất và năng lượng trong tự nhiên.<br>2. Các cuộc cách mạng công nghiệp: CMCN 1.0 (Nhiệt động lực học, máy hơi nước James Watt) &rarr; CMCN 2.0 (Điện từ học, động cơ điện, đèn chiếu sáng) &rarr; CMCN 3.0 (Chất bán dẫn, bóng bán dẫn, vi mạch điện tử, máy tính) &rarr; CMCN 4.0 (Trí tuệ nhân tạo AI, IoT, điện toán lượng tử).<br>3. An toàn điện trong phòng thí nghiệm: Phân biệt điện xoay chiều AC (~) và điện một chiều DC (=, +, -). Khi gặp sự cố chập điện hoặc có người bị giật: NGẮT NGAY CẦU DAO / NGUỒN ĐIỆN trước tiên, dùng vật liệu cách điện (gậy gỗ khô, nhựa) gạt dây điện ra, tuyệt đối không chạm trực tiếp vào người nạn nhân.<br>4. Thí nghiệm quang học: Không nhìn trực tiếp vào chùm tia laser, không để tia laser phản xạ vào mắt.',
            traps: 'Xử lí khi có cháy do chập điện: Phải ngắt cầu dao điện trước, dùng bình chữa cháy khí CO₂ hoặc bình bột chuyên dụng, TUYỆT ĐỐI KHÔNG dùng nước dập đám cháy điện vì nước dẫn điện gây nguy hiểm chết người.'
          },
          {
            name: 'Phép đo đại lượng vật lí & Xác định sai số thực nghiệm',
            formula: '• Phép đo trực tiếp: Đọc trực tiếp trên dụng cụ đo (dùng thước đo chiều dài, đồng hồ đo thời gian, cân đo khối lượng, nhiệt kế đo nhiệt độ)<br>• Phép đo gián tiếp: Tính qua công thức từ các đại lượng đo trực tiếp (tính tốc độ v = s/t, tính khối lượng riêng &rho; = m/V, tính gia tốc rơi tự do g = 2h/t²)<br>• Giá trị trung bình: Ā = (A₁ + A₂ + ... + Aₙ) / n<br>• Sai số tuyệt đối của lần đo i: &Delta;Aᵢ = |Ā - Aᵢ|<br>• Sai số tuyệt đối trung bình: &Delta;Ā = (&Delta;A₁ + &Delta;A₂ + ... + &Delta;Aₙ) / n<br>• Sai số dụng cụ &Delta;A<sub>dc</sub>: Thường lấy bằng nửa độ chia nhỏ nhất (ĐCNN) hoặc 1 ĐCNN theo quy ước đề bài<br>• Sai số tuyệt đối toàn phần: &Delta;A = &Delta;Ā + &Delta;A<sub>dc</sub><br>• Sai số tỉ đối (&delta;): &delta;A = (&Delta;A / Ā) &times; 100%<br>• Kết quả đo: A = Ā &plusmn; &Delta;A (hoặc A = Ā &plusmn; &delta;A%)',
            desc: 'Sai số hệ thống: Là sai số có tính quy luật ổn định do dụng cụ (lệch điểm 0, vạch chia sai...) &rarr; khắc phục bằng cách hiệu chỉnh lại dụng cụ.<br>Sai số ngẫu nhiên: Do thao tác không đều, phản xạ giác quan, nhiệt độ môi trường thay đổi thất thường &rarr; khắc phục bằng cách đo lặp lại nhiều lần và lấy giá trị trung bình.',
            traps: 'Cách viết kết quả đo: Sai số tuyệt đối &Delta;A thường được viết đến 1 hoặc 2 chữ số có nghĩa. Giá trị trung bình Ā phải được làm tròn đến cùng hàng thập phân với sai số &Delta;A (Ví dụ: L = 120,0 &plusmn; 0,2 cm chứ không viết 120 &plusmn; 0,2 cm).'
          },
          {
            name: 'Số chữ số có nghĩa (CSCN) & Quy tắc lan truyền sai số',
            formula: '• Quy tắc CSCN: Các chữ số khác 0 đều có nghĩa; chữ số 0 nằm giữa các chữ số khác 0 hoặc ở tận cùng bên phải phần thập phân đều có nghĩa; chữ số 0 ở đầu bên trái số thập phân KHÔNG có nghĩa.<br>Ví dụ: 0,04050 m có 4 CSCN (4, 0, 5, 0); 120,00 có 5 CSCN; 0,003 có 1 CSCN.<br>• Phép cộng / trừ: F = X &plusmn; Y &rArr; &Delta;F = &Delta;X + &Delta;Y (Sai số tuyệt đối bằng tổng các sai số tuyệt đối)<br>• Phép nhân / chia: F = X &times; Y hoặc F = X / Y &rArr; &delta;F = &delta;X + &delta;Y (Sai số tỉ đối bằng tổng các sai số tỉ đối)<br>• Phép lũy thừa: F = Xⁿ &rArr; &delta;F = n &times; &delta;X<br>Ví dụ: Gia tốc rơi tự do g = 2h / t² &rArr; &delta;g = &delta;h + 2&delta;t &rArr; &Delta;g = ḡ &times; &delta;g',
            desc: 'Khi nhân hoặc chia các số liệu thực nghiệm, kết quả làm tròn sao cho số chữ số có nghĩa không nhiều hơn số chữ số có nghĩa của dữ liệu có ít chữ số có nghĩa nhất.',
            traps: 'Rất nhiều học sinh nhầm lẫn: Phép nhân/chia phải cộng sai số TỈ ĐỐI (&delta;%), TUYỆT ĐỐI KHÔNG cộng sai số tuyệt đối (&Delta;). Muốn tìm &Delta;F từ phép nhân chia, phải tính &delta;F trước, rồi suy ra &Delta;F = F̄ &times; &delta;F.'
          }
        ]
      },
      {
        title: 'Chương II: Động học chất điểm (Mô tả chuyển động thẳng)',
        badge: 'Trọng tâm Giữa kì I',
        items: [
          {
            name: 'Quãng đường (s), Độ dịch chuyển (d) & Hệ quy chiếu',
            formula: '• Hệ quy chiếu gồm: Vật mốc + Hệ tọa độ gắn với vật mốc + Mốc thời gian (t = 0) + Đồng hồ đo thời gian<br>• Quãng đường (s &ge; 0): Độ dài quỹ đạo mà vật đã đi qua, là đại lượng vô hướng luôn không âm<br>• Độ dịch chuyển (d⃗): Vectơ nối từ vị trí ban đầu đến vị trí cuối cùng<br>• Giá trị đại số d: d = x - x₀ (có thể d > 0, d < 0 hoặc d = 0)<br>• Độ lớn độ dịch chuyển |d|: Khoảng cách thẳng giữa điểm đầu và điểm cuối<br>• Khi vật chuyển động thẳng và KHÔNG đổi chiều: s = |d|',
            desc: 'Nếu vật chuyển động rồi quay trở lại đúng điểm xuất phát (đi 1 vòng khép kín): Vị trí cuối trùng vị trí đầu &rArr; Độ dịch chuyển d = 0, nhưng quãng đường s > 0.<br>Đổi đơn vị tốc độ: 1 m/s = 3,6 km/h &hArr; v(m/s) = v(km/h) / 3,6.',
            traps: 'Bẫy đề thi: Chạy 1 vòng sân vận động 400 m về đích xuất phát &rarr; Quãng đường s = 400 m, nhưng độ dịch chuyển d = 0 m!'
          },
          {
            name: 'Tốc độ, Vận tốc & Vận tốc tổng hợp (Tính tương đối)',
            formula: '• Tốc độ trung bình: v<sub>tb</sub> = s / t &ge; 0 (Đặc trưng cho mức độ nhanh chậm của chuyển động trên quãng đường s)<br>• Vận tốc trung bình: v⃗<sub>tb</sub> = d⃗ / t &hArr; v<sub>tb</sub> = d / t (Đặc trưng cho độ nhanh chậm và hướng chuyển động)<br>• Tốc độ tức thời: v = &Delta;s / &Delta;t (hiển thị trên tốc kế của phương tiện giao thông)<br>• Công thức cộng vận tốc: v⃗₁₃ = v⃗₁₂ + v⃗₂₃ (Vật 1 đối với vật 3 = 1 đối với 2 + 2 đối với 3)<br>  + Cùng chiều (xuôi dòng nước): v₁₃ = v₁₂ + v₂₃ (v<sub>xuôi</sub> = v<sub>thuyền</sub> + v<sub>nước</sub>)<br>  + Ngược chiều (ngược dòng nước): v₁₃ = |v₁₂ - v₂₃| (v<sub>ngược</sub> = v<sub>thuyền</sub> - v<sub>nước</sub>)<br>  + Vuông góc (thuyền chèo vuông góc bờ sông): v₁₃ = &radic;(v₁₂² + v₂₃²)<br>  + Tổng quát góc &alpha;: v₁₃ = &radic;(v₁₂² + v₂₃² + 2v₁₂v₂₃cos&alpha;)',
            desc: 'Tính tương đối của chuyển động: Vận tốc và quỹ đạo của cùng một vật phụ thuộc vào hệ quy chiếu được chọn.<br>Ví dụ: Hành khách ngồi yên trên toa tàu đang chạy: đứng yên so với toa tàu, nhưng đang chuyển động so với người đứng bên đường ray.',
            traps: 'Khi vật chuyển động đổi chiều, vận tốc trung bình v̄ = d/t có thể âm hoặc bằng 0, nhưng tốc độ trung bình v<sub>tb</sub> = s/t luôn dương (> 0).'
          },
          {
            name: 'Chuyển động thẳng biến đổi đều (Gia tốc & 3 phương trình vàng)',
            formula: '• Gia tốc: a⃗ = &Delta;v⃗ / &Delta;t &hArr; a = (v - v₀) / (t - t₀) (Đơn vị SI: m/s²)<br>• Tính chất: a = const không đổi theo thời gian<br>• Chuyển động NHANH DẦN ĐỀU: a cùng dấu với v₀ (a &times; v > 0), vận tốc tăng đều theo thời gian<br>• Chuyển động CHẬM DẦN ĐỀU: a trái dấu với v₀ (a &times; v < 0), vận tốc giảm đều, khi xe dừng lại hẳn thì v = 0<br>★ 3 CÔNG THỨC VÀNG:<br>  1. Vận tốc theo thời gian: v = v₀ + at<br>  2. Độ dịch chuyển theo thời gian: d = v₀t + 1/2.at²<br>  3. Hệ thức độc lập thời gian (liên hệ v, a, d): v² - v₀² = 2ad<br>• Phương trình tọa độ: x = x₀ + v₀t + 1/2.at²',
            desc: 'Gia tốc đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc theo thời gian cả về độ lớn và hướng.<br>Bài toán xe hãm phanh: Chọn chiều dương là chiều chuyển động ban đầu của xe &rArr; v₀ > 0, vì xe chạy chậm dần nên a < 0. Khi xe dừng lại: v = 0 &rArr; Thời gian hãm phanh t = -v₀ / a &rArr; Quãng đường hãm phanh d = -v₀² / (2a).',
            traps: 'Bẫy dấu gia tốc: "Xe hãm phanh với độ lớn gia tốc 2 m/s²" nghĩa là a = -2 m/s² (khi v₀ > 0). Nếu quên dấu trừ thì tính quãng đường ra âm hoặc kết quả sai hoàn toàn!'
          },
          {
            name: 'Khai thác Đồ thị chuyển động (Đồ thị d - t và Đồ thị v - t)',
            formula: '★ ĐỒ THỊ ĐỘ DỊCH CHUYỂN – THỜI GIAN (d - t):<br>• Độ dốc (hệ số góc): Độ dốc = &Delta;d / &Delta;t = v (chính là vận tốc)<br>  + Đường dốc lên: v > 0 (vật chuyển động thẳng đều theo chiều dương)<br>  + Đường dốc xuống: v < 0 (vật chuyển động theo chiều âm)<br>  + Đường nằm ngang song song trục Ot: v = 0 (vật đứng yên tại một vị trí)<br>  + Hai đường đồ thị d - t song song: Hai vật chuyển động cùng vận tốc<br>  + Giao điểm của 2 đồ thị d - t: Thời điểm và vị trí hai vật gặp nhau<br><br>★ ĐỒ THỊ VẬN TỐC – THỜI GIAN (v - t):<br>• Độ dốc (hệ số góc): Độ dốc = &Delta;v / &Delta;t = a (chính là gia tốc)<br>  + Đường dốc lên: a > 0<br>  + Đường dốc xuống: a < 0<br>  + Đường nằm ngang song song trục Ot: a = 0 (chuyển động thẳng đều)<br>• Diện tích dưới đồ thị v - t: Diện tích hình phẳng (tam giác, hình chữ nhật, hình thang) giới hạn bởi đồ thị v-t và trục Ot chính bằng độ lớn độ dịch chuyển d (quãng đường s)',
            desc: 'Để tính quãng đường đi được từ đồ thị v - t: Ta chia hình giới hạn bởi đồ thị và trục Ot thành các hình học cơ bản (tam giác vuông, hình thang vuông, hình chữ nhật) rồi cộng diện tích lại. Diện tích = d = s.',
            traps: 'Không nhầm lẫn đồ thị d - t với đồ thị v - t! Trên đồ thị d - t, đường nằm ngang là đứng yên. Nhưng trên đồ thị v - t, đường nằm ngang là chuyển động thẳng đều với vận tốc không đổi!'
          },
          {
            name: 'Sự rơi tự do (Gia tốc g & Bài toán quãng đường giây thứ n)',
            formula: '• Định nghĩa: Rơi tự do là sự rơi chỉ dưới tác dụng của trọng lực (trong chân không hoặc khi bỏ qua lực cản không khí)<br>• Đặc điểm: Chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới, vận tốc ban đầu v₀ = 0, gia tốc rơi tự do a = g &asymp; 9,8 m/s² (hoặc 10 m/s²)<br>★ CÁC CÔNG THỨC RƠI TỰ DO (thay v₀ = 0, a = g vào 3 công thức vàng):<br>  1. Vận tốc tại thời điểm t: v = gt = &radic;(2gh)<br>  2. Độ cao / Quãng đường rơi sau t giây: h = 1/2.gt² &rArr; Thời gian rơi chạm đất: t = &radic;(2h / g)<br>  3. Vận tốc chạm đất: v<sub>chạm đất</sub> = &radic;(2gh)<br>  4. Quãng đường vật rơi được trong giây thứ n:<br>     &Delta;h<sub>n</sub> = h<sub>n</sub> - h<sub>n-1</sub> = 1/2.g.n² - 1/2.g.(n - 1)² = 1/2.g.(2n - 1)<br>     (Ví dụ g = 10 m/s²: giây 1 rơi 5m, giây 2 rơi 15m, giây 3 rơi 25m, tỉ lệ 1 : 3 : 5 : 7...)<br>  5. Quãng đường rơi trong &Delta;t giây cuối cùng trước khi chạm đất:<br>     h<sub>cuối</sub> = h<sub>tổng</sub> - h<sub>(t - &Delta;t)</sub> = 1/2.gt² - 1/2.g(t - &Delta;t)²',
            desc: 'Tại cùng một vị trí địa lí xác định trên Trái Đất và ở gần mặt đất, mọi vật rơi tự do với cùng một gia tốc g như nhau, hoàn toàn không phụ thuộc vào khối lượng nặng hay nhẹ của vật (thí nghiệm kinh điển của Galileo Galilei ở tháp nghiêng Pisa và thí nghiệm ống Newton).',
            traps: 'Bẫy đề thi: "Vật nặng 2 kg và vật nhẹ 100 g thả rơi tự do cùng lúc từ cùng độ cao h" &rarr; Hai vật rơi chạm đất CÙNG MỘT LÚC và cùng vận tốc! Khối lượng m không ảnh hưởng đến thời gian rơi tự do.'
          }
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Hóa học 10',
    icon: '🧪',
    color: '#d76fab',
    bg: '#fceaf4',
    sections: [
      {
        title: 'Chương 1: Cấu tạo nguyên tử & Bài toán hạt',
        badge: 'Hạt nhân & Vỏ electron',
        items: [
          {
            name: 'Thành phần cấu tạo nguyên tử & Bài toán hạt cơ bản',
            formula: '• Hạt nhân: Proton (p, điện tích +1, khối lượng &asymp; 1 amu) + Neutron (n, điện tích 0, khối lượng &asymp; 1 amu)<br>• Vỏ nguyên tử: Electron (e, điện tích -1, khối lượng rất nhỏ &asymp; 0,00055 amu)<br>• Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân (m<sub>nguyên tử</sub> &asymp; m<sub>hạt nhân</sub>)<br>• Số hiệu nguyên tử: Z = p = e (số đơn vị điện tích hạt nhân)<br>• Số khối: A = Z + N &nbsp;·&nbsp; Kí hiệu nguyên tử: <sup>A</sup><sub>Z</sub>X<br>★ HỆ THỐNG BÀI TOÁN HẠT CƠ BẢN:<br>  + Tổng số hạt cơ bản = 2Z + N<br>  + Số hạt mang điện = 2Z (gồm proton và electron)<br>  + Số hạt không mang điện = N (chính là số neutron)<br>  + Hiệu số hạt mang điện và không mang điện = 2Z - N<br>  + Điều kiện bền hạt nhân (với Z &le; 82): 1 &le; N / Z &le; 1,52 &rArr; (Tổng hạt) / 3,52 &le; Z &le; (Tổng hạt) / 3',
            desc: 'Nguyên tử trung hòa về điện nên số proton luôn bằng số electron (p = e). Các nguyên tử thuộc cùng một nguyên tố hóa học thì luôn có cùng số hiệu nguyên tử Z (cùng số proton).',
            traps: 'Đồng vị Protium <sup>1</sup><sub>1</sub>H là trường hợp duy nhất hạt nhân chỉ có 1 proton, hoàn toàn KHÔNG có neutron (N = 0).'
          },
          {
            name: 'Đồng vị & Nguyên tử khối trung bình (Ā)',
            formula: '• Khái niệm: Các đồng vị là những nguyên tử của CÙNG một nguyên tố hóa học, có cùng số proton (Z) nhưng khác số neutron (N), dẫn tới số khối (A) khác nhau<br>★ CÔNG THỨC NGUYÊN TỬ KHỐI TRUNG BÌNH:<br>  Ā = (A₁ . x₁ + A₂ . x₂ + ... + A<sub>k</sub> . x<sub>k</sub>) / 100<br>  (với x₁, x₂... là phần trăm số nguyên tử tương ứng của các đồng vị; x₁ + x₂ + ... = 100%)<br>★ TÍNH % KHỐI LƯỢNG ĐỒNG VỊ TRONG HỢP CHẤT:<br>  %m(<sup>A₁</sup>X) = [A₁ &times; (x₁ / 100) &times; (số nguyên tử X trong phân tử)] / M<sub>hợp chất</sub> &times; 100%',
            desc: 'Ví dụ: Nguyên tố Chlorine có 2 đồng vị <sup>35</sup>Cl (chiếm 75%) và <sup>37</sup>Cl (chiếm 25%) &rArr; Ā = (35&times;75 + 37&times;25)/100 = 35,5 amu.',
            traps: 'Đừng nhầm lẫn giữa "nguyên tử khối trung bình" với "số khối A" của một đồng vị cụ thể. Khi tính toán khối lượng mol hợp chất, luôn dùng nguyên tử khối trung bình Ā.'
          }
        ]
      },
      {
        title: 'Chương 2: Mô hình nguyên tử, Orbital & Cấu hình electron',
        badge: 'Cơ học lượng tử hóa',
        items: [
          {
            name: 'Orbital nguyên tử (AO) & Lớp, phân lớp electron',
            formula: '• Orbital nguyên tử (AO): Vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%)<br>• Hình dạng AO: AO s có dạng hình cầu; AO p có dạng hình số 8 nổi định hướng theo 3 trục Ox, Oy, Oz (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)<br>• Lớp n (K: 1, L: 2, M: 3, N: 4...): Lớp thứ n có n phân lớp, n² orbital và chứa tối đa 2n² electron<br>• Phân lớp electron: s (1 AO, tối đa 2e), p (3 AO, tối đa 6e), d (5 AO, tối đa 10e), f (7 AO, tối đa 14e)<br>• Phân lớp bão hòa: Đã chứa đủ số electron tối đa (s², p⁶, d¹⁰, f¹⁴)',
            desc: 'Các electron thuộc cùng một phân lớp có mức năng lượng BẰNG NHAU. Các electron thuộc cùng một lớp có mức năng lượng GẦN BẰNG NHAU.',
            traps: 'Lớp M (n = 3) có tối đa 2&times;3² = 18 electron và có 3² = 9 AO (gồm 1 AO s, 3 AO p, 5 AO d).'
          },
          {
            name: '3 Nguyên lí, Quy tắc viết cấu hình e & Ngoại lệ kinh điển',
            formula: '• Nguyên lí vững bền: Điền electron theo thứ tự mức năng lượng tăng dần:<br>  1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d... (4s có mức năng lượng thấp hơn 3d!)<br>• Nguyên lí Pauli: Trên mỗi AO chỉ chứa tối đa 2 electron có spin đối song (ngược chiều: &uarr;&darr;)<br>• Quy tắc Hund: Trong cùng 1 phân lớp chưa bão hòa, electron phân bố sao cho số e độc thân là lớn nhất<br>★ 2 NGOẠI LỆ KINH ĐIỂN CẦN THUỘC LÒNG:<br>  + Bán bão hòa phân lớp d: <sub>24</sub>Cr: [Ar] 3d⁵ 4s¹ (không viết 3d⁴ 4s²)<br>  + Bão hòa phân lớp d: <sub>29</sub>Cu: [Ar] 3d¹⁰ 4s¹ (không viết 3d⁹ 4s²)<br>★ CẤU HÌNH ELECTRON CỦA ION:<br>  + Cation kim loại: Nhường e từ lớp ngoài cùng trước: Fe &rarr; Fe²⁺ + 2e (Fe: [Ar]3d⁶4s² &rArr; Fe²⁺: [Ar]3d⁶, bớt 4s² trước!)<br>  + Anion phi kim: Nhận thêm e vào phân lớp ngoài cùng: Cl + 1e &rarr; Cl⁻ ([Ne]3s²3p⁶)',
            desc: 'Xác định loại nguyên tố dựa vào số electron lớp ngoài cùng:<br>• 1, 2, 3 e: Kim loại (trừ H, He, B)<br>• 4 e: Kim loại (Sn, Pb) hoặc phi kim (C, Si)<br>• 5, 6, 7 e: Phi kim<br>• 8 e: Khí hiếm (He có 2 e).',
            traps: 'Bẫy viết cấu hình cation Fe²⁺: Cực kì nhiều bạn bớt 2e ở phân lớp 3d thành [Ar]3d⁴4s² là SAI! Phải bớt 2e ở phân lớp 4s ngoài cùng trước, cấu hình đúng là [Ar]3d⁶.'
          }
        ]
      },
      {
        title: 'Chương 3: Bảng tuần hoàn & Định luật tuần hoàn',
        badge: 'Hệ thống tuần hoàn',
        items: [
          {
            name: 'Nguyên tắc cấu tạo & Cấu trúc Bảng tuần hoàn',
            formula: '★ 3 NGUYÊN TẮC SẮP XẾP:<br>  1. Sắp xếp theo chiều tăng dần của điện tích hạt nhân (Z)<br>  2. Các nguyên tố có cùng số lớp electron xếp vào cùng 1 chu kì (hàng ngang)<br>  3. Các nguyên tố có cùng số electron hóa trị xếp vào cùng 1 nhóm (cột dọc)<br>★ CẤU TRÚC BẢNG TUẦN HOÀN:<br>  • Số thứ tự Ô nguyên tố = Số hiệu nguyên tử Z = Số proton = Số electron<br>  • Số thứ tự Chu kì = Số lớp electron (7 chu kì: 1, 2, 3 là chu kì nhỏ; 4, 5, 6, 7 là chu kì lớn)<br>  • Số thứ tự Nhóm A = Số electron hóa trị = Số electron lớp ngoài cùng (nguyên tố s và p)<br>  • Nhóm B: Gồm các nguyên tố d và f (kim loại chuyển tiếp). Số e hóa trị = (e ngoài cùng) + (e phân lớp d chưa bão hòa)',
            desc: 'Khối nguyên tố: Nguyên tố s (nhóm IA, IIA); nguyên tố p (nhóm IIIA đến VIIIA); nguyên tố d (nhóm B); nguyên tố f (họ Lanthanide và Actinide).',
            traps: 'Nguyên tố nhóm B có cấu hình kết thúc ở dạng (n-1)dᵃ nsᵇ: Nếu a + b = 8, 9, 10 thì thuộc nhóm VIIIB; nếu a + b = 11 thì thuộc nhóm IB; nếu a + b = 12 thì thuộc nhóm IIB.'
          },
          {
            name: 'Bảng biến đổi tuần hoàn các tính chất hóa học',
            formula: '★ TRONG 1 CHU KÌ (Từ trái &rarr; phải, Z tăng):<br>  • Bán kính nguyên tử (R): GIẢM (lực hút tĩnh điện hạt nhân tăng)<br>  • Độ âm điện (&chi;): TĂNG (Fluorine lớn nhất: &chi; = 3,98)<br>  • Năng lượng ion hóa thứ nhất (I₁): TĂNG<br>  • Tính kim loại: GIẢM &nbsp;|&nbsp; Tính phi kim: TĂNG<br>  • Tính base của oxide và hydroxide: GIẢM<br>  • Tính acid của oxide và hydroxide: TĂNG<br><br>★ TRONG 1 NHÓM A (Từ trên &darr; dưới, Z tăng):<br>  • Bán kính nguyên tử (R): TĂNG (số lớp electron tăng)<br>  • Độ âm điện (&chi;): GIẢM &nbsp;|&nbsp; Năng lượng ion hóa (I₁): GIẢM<br>  • Tính kim loại: TĂNG (Cs, Fr kim loại mạnh nhất) &nbsp;|&nbsp; Tính phi kim: GIẢM (F phi kim mạnh nhất)<br>  • Tính base của oxide và hydroxide: TĂNG &nbsp;|&nbsp; Tính acid: GIẢM',
            desc: 'Định luật tuần hoàn: Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
            traps: 'Tính acid biến đổi CÙNG CHIỀU với tính phi kim; tính base biến đổi CÙNG CHIỀU với tính kim loại. Nhớ chuỗi hydroxide chu kì 3: NaOH (base mạnh) &rarr; Mg(OH)₂ (base yếu) &rarr; Al(OH)₃ (lưỡng tính) &rarr; H₂SiO₃ (acid rất yếu) &rarr; H₃PO₄ (acid trung bình) &rarr; H₂SO₄ (acid mạnh) &rarr; HClO₄ (acid rất mạnh).'
          },
          {
            name: 'Hóa trị cao nhất với Oxygen & Hợp chất khí với Hydrogen',
            formula: '• Hóa trị cao nhất với Oxygen = Số thứ tự nhóm A (tạo oxide cao nhất R₂Oₙ, n từ 1 &rarr; 7)<br>• Hóa trị trong hợp chất khí với Hydrogen = 8 - n (đối với phi kim nhóm IVA &rarr; VIIA, tạo RH₈₋ₙ)<br>★ CÔNG THỨC VÀNG: Tổng hóa trị với O và với H của phi kim luôn bằng 8:<br>  Hóa trị với O + Hóa trị với H = n + (8 - n) = 8',
            desc: 'Ví dụ: Nguyên tố phi kim nhóm VIA (như Sulfur S) có hóa trị cao nhất với O là VI (tạo oxide cao nhất SO₃), và hóa trị trong hợp chất khí với H là 8 - 6 = II (tạo hợp chất khí H₂S). Khi biết tỉ lệ % khối lượng của R trong oxide cao nhất hoặc hợp chất khí, ta lập phương trình giải ra nguyên tử khối của R.',
            traps: 'Kim loại nhóm IA, IIA, IIIA KHÔNG tạo hợp chất khí với hydrogen. Công thức 8 - n chỉ áp dụng cho phi kim từ nhóm IVA đến VIIA.'
          }
        ]
      }
    ]
  }
};

function renderHandbook(selectedSubject, filterQuery) {
  const activeSubject = (selectedSubject && handbookData[selectedSubject]) ? selectedSubject : 'all';
  const query = (filterQuery || '').trim().toLowerCase();

  const subjectsToRender = activeSubject === 'all'
    ? ['math', 'physics', 'chemistry']
    : [activeSubject];

  let totalItemsCount = 0;
  let matchingItemsCount = 0;

  const contentHtml = subjectsToRender.map(subjKey => {
    const subj = handbookData[subjKey];
    if (!subj) return '';

    const matchingSections = subj.sections.map(sec => {
      const filteredItems = sec.items.filter(item => {
        totalItemsCount++;
        if (!query) {
          matchingItemsCount++;
          return true;
        }
        const match = item.name.toLowerCase().includes(query) ||
                      item.formula.toLowerCase().includes(query) ||
                      item.desc.toLowerCase().includes(query) ||
                      (item.traps && item.traps.toLowerCase().includes(query)) ||
                      sec.title.toLowerCase().includes(query);
        if (match) matchingItemsCount++;
        return match;
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
            <span class="badge" style="background:${subj.bg};color:${subj.color}">${sec.badge}</span>
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
              <h2 style="margin:0;font-size:20px;color:#0f172a">${subj.name}</h2>
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
    <div class="handbook-container">
      <div class="handbook-hero">
        <div>
          <span class="eyebrow" style="background:rgba(255,255,255,0.15);color:#fff">HỌC TẬP SPACE · SỔ TAY THI GIỮA KÌ</span>
          <h1 style="font-size:clamp(22px, 2.5vw, 32px)">Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)</h1>
          <p>Hệ thống toàn bộ định nghĩa, công thức cốt lõi, quy tắc giải nhanh và các bẫy đề thi hay gặp bám sát chuẩn kiến thức hiện tại.</p>
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
  `;

  // Giữ focus cho ô input nếu người dùng đang gõ tìm kiếm
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
