// Sổ tay kiến thức, công thức và lý thuyết trọng tâm toàn diện môn Toán 10, Vật lý 10, Hóa học 10 (Chuẩn GDPT 2018)

const handbookData = {
  math: {
    id: 'math',
    name: 'Toán 10',
    icon: '∑',
    color: '#6155e8',
    bg: '#e9e7ff',
    sections: [
      {
        title: 'Chương I: Mệnh đề & Tập hợp',
        badge: 'Đại số & Logic',
        items: [
          {
            name: 'Mệnh đề và Mệnh đề phủ định',
            formula: 'P̄: "Không phải P"<br>&forall;x &isin; X, P(x) &hArr; &exist;x &isin; X, P̄(x)<br>&exist;x &isin; X, P(x) &hArr; &forall;x &isin; X, P̄(x)',
            desc: 'Mệnh đề là một câu khẳng định có tính đúng hoặc sai (không thể vừa đúng vừa sai). Phủ định của lượng từ "với mọi (&forall;)" là "tồn tại (&exist;)" và ngược lại.',
            traps: 'Phủ định của dấu ">" là "&le;" (bắt buộc có dấu bằng); phủ định của "Tất cả... đều đạt" là "Có ít nhất một... không đạt".'
          },
          {
            name: 'Mệnh đề kéo theo & Mệnh đề tương đương',
            formula: 'P &rArr; Q &nbsp;(Chỉ sai khi P đúng và Q sai)<br>P &hArr; Q &nbsp;(Đúng khi P, Q cùng đúng hoặc cùng sai)',
            desc: 'Trong mệnh đề P &rArr; Q: P là giả thiết (điều kiện đủ để có Q), Q là kết luận (điều kiện cần để có P). Định lí đảo: Q &rArr; P.',
            traps: '"P là điều kiện cần để có Q" là mệnh đề đảo Q &rArr; P, không phải P &rArr; Q.'
          },
          {
            name: 'Tập hợp & Các phép toán tập hợp',
            formula: 'A &cap; B = {x | x &isin; A & x &isin; B}<br>A &cup; B = {x | x &isin; A hoặc x &isin; B}<br>A \ B = {x | x &isin; A & x &notin; B}<br>C<sub>E</sub>A = E \ A (khi A &sub; E)',
            desc: 'Tập có n phần tử có 2<sup>n</sup> tập con. Công thức số phần tử: n(A &cup; B) = n(A) + n(B) - n(A &cap; B).',
            traps: 'Khi lấy hiệu A \ B trên trục số: Nếu phần tử mút b &notin; B và b &isin; A thì b &isin; A \ B (ngoặc tròn đổi thành ngoặc vuông).'
          },
          {
            name: 'Các tập hợp số thực & Khoảng, Đoạn, Nửa khoảng',
            formula: '<b>N</b> &sub; <b>Z</b> &sub; <b>Q</b> &sub; <b>R</b><br>Đoạn: [a; b] = {x &isin; <b>R</b> | a &le; x &le; b}<br>Khoảng: (a; b) = {x &isin; <b>R</b> | a &lt; x &lt; b}<br>Nửa khoảng: [a; b), (a; b], (-&infin;; b], [a; +&infin;)',
            desc: 'Tập hợp các số thực giữa hai đầu mút a và b. Ngoặc vuông [ ] lấy cả đầu mút, ngoặc tròn ( ) không lấy đầu mút.',
            traps: 'Đoạn [-3; 1] có vô số số thực, không phải chỉ có 5 số nguyên.'
          }
        ]
      },
      {
        title: 'Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn',
        badge: 'Đại số & Tọa độ',
        items: [
          {
            name: 'Bất phương trình bậc nhất hai ẩn',
            formula: 'ax + by &le; c &nbsp;(hoặc &lt;, &ge;, &gt; c với a<sup>2</sup> + b<sup>2</sup> &ne; 0)',
            desc: 'Miền nghiệm là nửa mặt phẳng bờ d: ax + by = c. Cách xét: Chọn gốc O(0; 0) (nếu c &ne; 0) thay vào BPT, nếu thỏa mãn thì miền nghiệm chứa O, nếu không thì gạch bỏ phần chứa O.',
            traps: 'Nếu dấu bất phương trình là ngặt (< hoặc >) thì đường thẳng bờ d là nét đứt và không thuộc miền nghiệm.'
          },
          {
            name: 'Hệ BPT & Bài toán Quy hoạch tuyến tính (Tìm Max/Min)',
            formula: 'Max/Min của F(x; y) = ax + by trên miền đa giác đạt tại một trong các đỉnh',
            desc: 'Quy trình giải:<br>1) Biểu diễn miền nghiệm của hệ BPT (thường là miền đa giác lồi OABC).<br>2) Tìm tọa độ tất cả các đỉnh giao điểm của miền đa giác.<br>3) Tính giá trị F(x; y) tại từng đỉnh, so sánh tìm GTLN và GTNN.',
            traps: 'Phải tính giá trị F(x; y) tại TẤT CẢ các đỉnh của đa giác trước khi đưa ra kết luận lớn nhất hay nhỏ nhất.'
          }
        ]
      },
      {
        title: 'Chương III: Hệ thức lượng trong tam giác',
        badge: 'Lượng giác & Hình học',
        items: [
          {
            name: 'Giá trị lượng giác của hai góc bù nhau (0° &le; &alpha; &le; 180°)',
            formula: 'sin(180&deg; - &alpha;) = sin&alpha;<br>cos(180&deg; - &alpha;) = -cos&alpha;<br>tan(180&deg; - &alpha;) = -tan&alpha; &nbsp;(&alpha; &ne; 90&deg;)<br>cot(180&deg; - &alpha;) = -cot&alpha; &nbsp;(0&deg; &lt; &alpha; &lt; 180&deg;)',
            desc: 'Dấu lượng giác: Góc nhọn (0° < &alpha; < 90°) có sin, cos, tan, cot > 0. Góc tù (90° < &alpha; < 180°) có sin > 0, cos < 0, tan < 0, cot < 0.<br>Hệ thức cơ bản: sin<sup>2</sup>&alpha; + cos<sup>2</sup>&alpha; = 1; 1 + tan<sup>2</sup>&alpha; = 1/cos<sup>2</sup>&alpha;.',
            traps: 'Góc tù có cos < 0: ví dụ cos120° = -cos60° = -1/2, cos150° = -cos30° = -&radic;3/2.'
          },
          {
            name: 'Bảng giá trị lượng giác các góc đặc biệt',
            formula: '• 0&deg;: sin=0, cos=1, tan=0<br>• 30&deg;: sin=1/2, cos=&radic;3/2, tan=1/&radic;3<br>• 45&deg;: sin=&radic;2/2, cos=&radic;2/2, tan=1<br>• 60&deg;: sin=&radic;3/2, cos=1/2, tan=&radic;3<br>• 90&deg;: sin=1, cos=0, tan ko xđ<br>• 120&deg;: sin=&radic;3/2, cos=-1/2, tan=-&radic;3<br>• 135&deg;: sin=&radic;2/2, cos=-&radic;2/2, tan=-1<br>• 150&deg;: sin=1/2, cos=-&radic;3/2, tan=-1/&radic;3<br>• 180&deg;: sin=0, cos=-1, tan=0',
            desc: 'Học sinh nên ghi nhớ bảng giá trị này để tính toán cực nhanh trong các bài toán định lí sin, côsin và diện tích.',
            traps: 'tan90° và cot0°, cot180° không xác định.'
          },
          {
            name: 'Định lí côsin, Định lí sin & Đường trung tuyến',
            formula: '• Định lí côsin: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA &hArr; cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc)<br>• Định lí sin: a / sinA = b / sinB = c / sinC = 2R<br>• Trung tuyến: m<sub>a</sub><sup>2</sup> = (2(b<sup>2</sup> + c<sup>2</sup>) - a<sup>2</sup>) / 4',
            desc: 'Dùng định lí côsin khi biết 2 cạnh và góc xen giữa hoặc biết 3 cạnh. Dùng định lí sin khi biết 1 cạnh và 2 góc, hoặc liên quan đến bán kính đường tròn ngoại tiếp R.',
            traps: 'Nếu góc A tù (A > 90°) thì cosA mang dấu âm (-), khi đó -2bc.cosA đổi thành cộng (+).'
          },
          {
            name: 'Trọn bộ 5 công thức tính diện tích tam giác',
            formula: '1) S = 1/2 . a . h<sub>a</sub><br>2) S = 1/2 . ab . sinC = 1/2 . bc . sinA = 1/2 . ca . sinB<br>3) S = abc / (4R) &hArr; R = abc / (4S)<br>4) S = p . r &hArr; r = S / p &nbsp;(với nửa chu vi p = (a+b+c)/2)<br>5) Công thức Heron: S = &radic;[p(p - a)(p - b)(p - c)]',
            desc: 'Tùy vào dữ kiện bài toán (chiều cao, góc xen giữa, bán kính ngoại tiếp R, bán kính nội tiếp r hay 3 cạnh a, b, c) để chọn công thức tối ưu nhất.',
            traps: 'Công thức S = abc / (4R) có số 4 dưới mẫu, không nhầm thành số 2.'
          }
        ]
      },
      {
        title: 'Chương IV: Vectơ trong mặt phẳng & Tích vô hướng',
        badge: 'Hình học tọa độ',
        items: [
          {
            name: 'Khái niệm vectơ & Các quy tắc cộng, trừ',
            formula: '• Quy tắc 3 điểm (tam giác): AB⃗ + BC⃗ = AC⃗<br>• Quy tắc hiệu: OB⃗ - OA⃗ = AB⃗<br>• Quy tắc hình bình hành: AB⃗ + AD⃗ = AC⃗ (với ABCD là HBH)<br>• Trung điểm: M là TĐ của AB &hArr; MA⃗ + MB⃗ = 0⃗ &hArr; OA⃗ + OB⃗ = 2OM⃗<br>• Trọng tâm: G là trọng tâm &Delta;ABC &hArr; GA⃗ + GB⃗ + GC⃗ = 0⃗ &hArr; OA⃗ + OB⃗ + OC⃗ = 3OG⃗',
            desc: 'Vectơ là đoạn thẳng có hướng. Vectơ-không 0⃗ có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0, cùng phương cùng hướng với mọi vectơ.',
            traps: 'Phép trừ hai vectơ cùng gốc: OB⃗ - OA⃗ = AB⃗ (ngọn trừ gốc, chữ sau lên trước).'
          },
          {
            name: 'Tọa độ vectơ và Tọa độ điểm trong hệ Oxy',
            formula: '• u⃗ = x.i⃗ + y.j⃗ &hArr; u⃗ = (x; y)<br>• Cho A(x<sub>A</sub>; y<sub>A</sub>), B(x<sub>B</sub>; y<sub>B</sub>) &rArr; AB⃗ = (x<sub>B</sub> - x<sub>A</sub>; y<sub>B</sub> - y<sub>A</sub>)<br>• Độ dài: |u⃗| = &radic;(x<sup>2</sup> + y<sup>2</sup>) &nbsp;·&nbsp; AB = &radic;[(x<sub>B</sub> - x<sub>A</sub>)<sup>2</sup> + (y<sub>B</sub> - y<sub>A</sub>)<sup>2</sup>]<br>• Trung điểm M: x<sub>M</sub> = (x<sub>A</sub> + x<sub>B</sub>)/2, y<sub>M</sub> = (y<sub>A</sub> + y<sub>B</sub>)/2<br>• Trọng tâm G: x<sub>G</sub> = (x<sub>A</sub> + x<sub>B</sub> + x<sub>C</sub>)/3, y<sub>G</sub> = (y<sub>A</sub> + y<sub>B</sub> + y<sub>C</sub>)/3<br>• Cùng phương: u⃗ cùng phương v⃗ &hArr; x<sub>1</sub>y<sub>2</sub> - x<sub>2</sub>y<sub>1</sub> = 0',
            desc: 'Tọa độ vectơ được xác định thông qua hai vectơ đơn vị i⃗ = (1; 0) và j⃗ = (0; 1) trên hai trục tọa độ Ox, Oy.',
            traps: 'Tính tọa độ vectơ AB⃗ phải lấy tọa độ ngọn B trừ tọa độ gốc A: (x<sub>B</sub> - x<sub>A</sub>; y<sub>B</sub> - y<sub>A</sub>).'
          },
          {
            name: 'Tích vô hướng của hai vectơ & Ứng dụng',
            formula: '• Định nghĩa: a⃗ . b⃗ = |a⃗| . |b⃗| . cos(a⃗, b⃗)<br>• Biểu thức tọa độ: a⃗ . b⃗ = x<sub>1</sub>x<sub>2</sub> + y<sub>1</sub>y<sub>2</sub><br>• Bình phương vô hướng: a⃗<sup>2</sup> = |a⃗|<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>• Hai vectơ vuông góc: a⃗ &perp; b⃗ &hArr; a⃗ . b⃗ = 0 &hArr; x<sub>1</sub>x<sub>2</sub> + y<sub>1</sub>y<sub>2</sub> = 0<br>• Góc giữa hai vectơ: cos(a⃗, b⃗) = (x<sub>1</sub>x<sub>2</sub> + y<sub>1</sub>y<sub>2</sub>) / [&radic;(x<sub>1</sub><sup>2</sup> + y<sub>1</sub><sup>2</sup>) . &radic;(x<sub>2</sub><sup>2</sup> + y<sub>2</sub><sup>2</sup>)]',
            desc: 'Tích vô hướng của hai vectơ là một SỐ THỰC, không phải là vectơ. Nếu góc giữa hai vectơ là nhọn thì tích vô hướng dương; góc tù thì tích vô hướng âm; góc vuông thì bằng 0.',
            traps: 'Nhầm lẫn giữa tích vô hướng (kết quả là số) với phép nhân vectơ với một số (kết quả là vectơ).'
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
            name: 'Thành phần cấu tạo nguyên tử & Hệ thức hạt cơ bản',
            formula: 'Z = p = e (số proton = số electron)<br>Số khối: A = Z + N &nbsp;·&nbsp; Kí hiệu: <sup>A</sup><sub>Z</sub>X<br>Tổng số hạt cơ bản = 2Z + N<br>Số hạt mang điện = 2Z &nbsp;·&nbsp; Số hạt không mang điện = N<br>Hiệu số hạt mang điện và không mang điện = 2Z - N',
            desc: 'Hạt nhân mang điện tích dương +Ze gồm proton (+1, ~1 amu) và neutron (0, ~1 amu). Vỏ nguyên tử mang điện tích âm gồm electron (-1, ~0.00055 amu). Khối lượng nguyên tử tập trung hầu như hoàn toàn ở hạt nhân.',
            traps: 'Đồng vị protium <sup>1</sup><sub>1</sub>H chỉ có 1 proton và 1 electron, không có neutron (N = 0).'
          },
          {
            name: 'Đồng vị & Nguyên tử khối trung bình (Ā)',
            formula: 'Ā = (A<sub>1</sub>.x<sub>1</sub> + A<sub>2</sub>.x<sub>2</sub> + ... + A<sub>k</sub>.x<sub>k</sub>) / 100<br>Với x<sub>1</sub> + x<sub>2</sub> + ... + x<sub>k</sub> = 100%',
            desc: 'Đồng vị là các nguyên tử của cùng một nguyên tố hóa học, có cùng số proton (Z) nhưng khác số neutron (N), dẫn tới số khối (A) khác nhau.',
            traps: 'Với nguyên tố có 2 đồng vị thì x<sub>2</sub> = 100% - x<sub>1</sub>. Tính thành phần phần trăm khối lượng của đồng vị trong hợp chất: %m = (A<sub>1</sub> . x<sub>1</sub>% . số nguyên tử X) / M<sub>hợp chất</sub> &times; 100%.'
          }
        ]
      },
      {
        title: 'Chương 2: Mô hình nguyên tử, Orbital & Cấu hình electron',
        badge: 'Cơ học lượng tử hóa',
        items: [
          {
            name: 'Orbital nguyên tử (AO) & Lớp, phân lớp electron',
            formula: '• Lớp n: K(1), L(2), M(3), N(4)... Số AO trong lớp n là n<sup>2</sup>, số e tối đa là 2n<sup>2</sup><br>• Phân lớp s (1 AO, tối đa 2e), p (3 AO, tối đa 6e), d (5 AO, tối đa 10e), f (7 AO, tối đa 14e)<br>• Mỗi AO chứa tối đa 2 electron có spin ngược chiều: &uarr;&darr;',
            desc: 'Orbital nguyên tử (AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%). AO s có dạng hình cầu; AO p có dạng hình số 8 nổi định hướng theo 3 trục Ox, Oy, Oz (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>).',
            traps: 'Các electron trên cùng một phân lớp có mức năng lượng BẰNG NHAU; các electron trên cùng một lớp có mức năng lượng GẦN BẰNG NHAU.'
          },
          {
            name: 'Quy tắc viết cấu hình electron & 2 ngoại lệ kinh điển',
            formula: '• Thứ tự mức năng lượng: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s...<br>• Viết cấu hình: sắp xếp lại theo thứ tự lớp (3d trước 4s)<br>• Ngoại lệ bán bão hòa: <sub>24</sub>Cr: [Ar]3d<sup>5</sup>4s<sup>1</sup> (không viết 3d<sup>4</sup>4s<sup>2</sup>)<br>• Ngoại lệ bão hòa: <sub>29</sub>Cu: [Ar]3d<sup>10</sup>4s<sup>1</sup> (không viết 3d<sup>9</sup>4s<sup>2</sup>)<br>• Viết cấu hình ion: Cation bớt e từ ngoài vào (Fe &rarr; Fe<sup>2+</sup> bớt 4s<sup>2</sup> thành [Ar]3d<sup>6</sup>)',
            desc: 'Phân loại nguyên tố: Dựa vào số electron lớp ngoài cùng:<br>• 1, 2, 3 e: Kim loại (trừ H, He, B)<br>• 4 e: Có thể là kim loại (Sn, Pb) hoặc phi kim (C, Si)<br>• 5, 6, 7 e: Phi kim<br>• 8 e: Khí hiếm (He có 2 e).',
            traps: 'Khi tạo cation kim loại Fe &rarr; Fe<sup>2+</sup> + 2e: bớt 2 electron ở phân lớp 4s ngoài cùng trước, cấu hình Fe<sup>2+</sup> là [Ar]3d<sup>6</sup> chứ không phải [Ar]3d<sup>4</sup>4s<sup>2</sup>.'
          }
        ]
      },
      {
        title: 'Chương 3: Bảng tuần hoàn & Định luật tuần hoàn',
        badge: 'Hệ thống tuần hoàn',
        items: [
          {
            name: 'Nguyên tắc cấu tạo Bảng tuần hoàn',
            formula: '• Số thứ tự Ô nguyên tố = Số hiệu nguyên tử Z = Số proton = Số electron<br>• Số thứ tự Chu kì = Số lớp electron (7 chu kì: 1, 2, 3 chu kì nhỏ; 4, 5, 6, 7 chu kì lớn)<br>• Số thứ tự Nhóm A = Số electron hóa trị = Số electron lớp ngoài cùng (nguyên tố s và p)<br>• Nhóm B: Gồm các nguyên tố d và f (kim loại chuyển tiếp)',
            desc: 'Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử. Các nguyên tố có cùng số lớp electron xếp thành 1 chu kì (hàng ngang). Các nguyên tố có tính chất tương tự nhau xếp thành 1 nhóm (cột dọc).',
            traps: 'Nguyên tố nhóm B có số e hóa trị = (e lớp ngoài cùng) + (e phân lớp d chưa bão hòa).'
          },
          {
            name: 'Bảng biến đổi tuần hoàn các tính chất',
            formula: '• Bán kính nguyên tử (R): Trong chu kì GIẢM &nbsp;|&nbsp; Trong nhóm A TĂNG<br>• Độ âm điện (&chi;): Trong chu kì TĂNG &nbsp;|&nbsp; Trong nhóm A GIẢM (F có &chi; max = 3,98)<br>• Năng lượng ion hóa (I<sub>1</sub>): Trong chu kì TĂNG &nbsp;|&nbsp; Trong nhóm A GIẢM<br>• Tính kim loại: Trong chu kì GIẢM &nbsp;|&nbsp; Trong nhóm A TĂNG<br>• Tính phi kim: Trong chu kì TĂNG &nbsp;|&nbsp; Trong nhóm A GIẢM<br>• Tính base của oxide/hydroxide: Trong chu kì GIẢM &nbsp;|&nbsp; Trong nhóm A TĂNG<br>• Tính acid của oxide/hydroxide: Trong chu kì TĂNG &nbsp;|&nbsp; Trong nhóm A GIẢM',
            desc: 'Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học. Kim loại mạnh nhất là Cesium (Cs) hoặc Francium (Fr); phi kim mạnh nhất là Fluorine (F).',
            traps: 'Tính acid của oxide và hydroxide biến đổi CÙNG CHIỀU với tính phi kim; tính base biến đổi CÙNG CHIỀU với tính kim loại.'
          },
          {
            name: 'Hóa trị cao nhất với Oxygen và Hydrogen',
            formula: '• Hóa trị cao nhất với O = Số thứ tự nhóm A (hợp chất R<sub>2</sub>O<sub>n</sub>, n từ 1 &rarr; 7)<br>• Hóa trị trong hợp chất khí với H = 8 - n (với phi kim nhóm IVA &rarr; VIIA, RH<sub>8-n</sub>)<br>• Tổng hóa trị với O và với H của phi kim luôn bằng 8: n + (8 - n) = 8',
            desc: 'Ví dụ: Nguyên tố nhóm VIA (như Sulfur S) có oxide cao nhất là SO<sub>3</sub> (hóa trị VI) và hợp chất khí với hydrogen là H<sub>2</sub>S (hóa trị II = 8 - 6).',
            traps: 'Kim loại nhóm IA, IIA, IIIA không tạo hợp chất khí với hydrogen.'
          }
        ]
      },
      {
        title: 'Chương 4: Liên kết hóa học & Tương tác phân tử',
        badge: 'Cấu trúc phân tử',
        items: [
          {
            name: 'Quy tắc bát tử (Octet Rule)',
            formula: 'Nguyên tử có xu hướng đạt 8 electron lớp ngoài cùng bền vững (như khí hiếm, trừ He có 2e)',
            desc: 'Để đạt cấu hình octet, nguyên tử kim loại có xu hướng nhường e (tạo cation), nguyên tử phi kim có xu hướng nhận e (tạo anion) hoặc các nguyên tử phi kim góp chung e.',
            traps: 'Một số ngoại lệ của quy tắc octet: BF<sub>3</sub> (B chỉ có 6e xung quanh), PCl<sub>5</sub> (P có 10e), SF<sub>6</sub> (S có 12e).'
          },
          {
            name: 'Phân loại liên kết: Ion vs Cộng hóa trị theo Hiệu độ âm điện (&Delta;&chi;)',
            formula: '&Delta;&chi; = |&chi;<sub>A</sub> - &chi;<sub>B</sub>|<br>• 0 &le; &Delta;&chi; &lt; 0,4: Liên kết cộng hóa trị KHÔNG phân cực (H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, CH<sub>4</sub>)<br>• 0,4 &le; &Delta;&chi; &lt; 1,7: Liên kết cộng hóa trị CÓ phân cực (HCl, H<sub>2</sub>O, NH<sub>3</sub>)<br>• &Delta;&chi; &ge; 1,7: Liên kết ION (NaCl, KBr, CaO, BaCl<sub>2</sub>)',
            desc: 'Liên kết ion được hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu. Liên kết cộng hóa trị được hình thành do các cặp electron dùng chung.<br>Liên kết đơn: gồm 1 liên kết &sigma;. Liên kết đôi: gồm 1 liên kết &sigma; và 1 liên kết &pi;. Liên kết ba: gồm 1 liên kết &sigma; và 2 liên kết &pi;.',
            traps: 'Ngoại lệ: AlCl<sub>3</sub> có &Delta;&chi; = 1,55 &lt; 1,7 nhưng là liên kết cộng hóa trị có cực; HF có &Delta;&chi; = 1,78 &ge; 1,7 nhưng là liên kết cộng hóa trị phân cực mạnh.'
          },
          {
            name: 'Liên kết Hydrogen & Tương tác van der Waals',
            formula: 'Liên kết Hydrogen: ...X - H ... Y... &nbsp;(với X, Y là F, O, N có độ âm điện lớn)',
            desc: 'Liên kết hydrogen là liên kết tĩnh điện yếu giữa nguyên tử H linh động (gắn với F, O, N) với nguyên tử F, O, N khác có cặp electron tự do.<br>Hệ quả quan trọng: Làm tăng đáng kể nhiệt độ sôi, nhiệt độ nóng chảy và tính tan trong nước của các chất (ví dụ H<sub>2</sub>O sôi ở 100°C trong khi H<sub>2</sub>S sôi ở -60°C; ethanol C<sub>2</sub>H<sub>5</sub>OH tan vô hạn trong nước).',
            traps: 'Chỉ các nguyên tử F, O, N có độ âm điện rất lớn mới tạo được liên kết hydrogen liên phân tử rõ rệt.'
          }
        ]
      },
      {
        title: 'Chương 5: Phản ứng Oxi hóa - Khử & Cân bằng electron',
        badge: 'Phản ứng hóa học',
        items: [
          {
            name: 'Số oxi hóa & Khẩu quyết Oxi hóa - Khử',
            formula: 'Khẩu quyết: "KHỬ CHO - O NHẬN" &nbsp;·&nbsp; "KHỬ TĂNG - O GIẢM"<br>• Chất khử (chất bị oxi hóa): nhường electron, số oxi hóa TĂNG sau phản ứng<br>• Chất oxi hóa (chất bị khử): nhận electron, số oxi hóa GIẢM sau phản ứng',
            desc: 'Quy tắc xác định số oxi hóa:<br>1) Đơn chất bằng 0 (Cu, O<sub>2</sub>, Fe...).<br>2) Trong hợp chất: H thường là +1 (trừ hiđrua kim loại NaH là -1); O thường là -2 (trừ peoxit H<sub>2</sub>O<sub>2</sub> là -1, OF<sub>2</sub> là +2); Kim loại kiềm luôn là +1, kiềm thổ +2, Al +3.<br>3) Tổng số oxi hóa trong phân tử bằng 0; trong ion đa nguyên tử bằng điện tích của ion.',
            traps: 'Nhầm lẫn giữa "chất khử" với "quá trình khử": Quá trình khử là quá trình NHẬN electron của chất oxi hóa.'
          },
          {
            name: 'Phương pháp thăng bằng electron (4 bước chuẩn)',
            formula: 'Tổng số electron nhường = Tổng số electron nhận: &sum;e<sub>nhường</sub> = &sum;e<sub>nhận</sub>',
            desc: 'Bước 1: Xác định số oxi hóa của các nguyên tố có sự thay đổi.<br>Bước 2: Viết quá trình oxi hóa (nhường e) và quá trình khử (nhận e).<br>Bước 3: Tìm hệ số nhân sao cho tổng số e nhường bằng tổng số e nhận.<br>Bước 4: Đặt hệ số vào phương trình và kiểm tra theo thứ tự: Kim loại &rarr; Phi kim &rarr; Hydrogen &rarr; Oxygen.',
            traps: 'Sau khi cân bằng xong, luôn đếm lại số nguyên tử Oxygen ở hai vế để kiểm tra tính chính xác của phương trình.'
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

  let matchesCount = 0;

  const contentHtml = subjectsToRender.map(subjKey => {
    const subj = handbookData[subjKey];
    const filteredSections = subj.sections.map(sec => {
      const filteredItems = sec.items.filter(item => {
        if (!query) return true;
        return item.name.toLowerCase().includes(query) ||
          item.formula.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          (item.traps && item.traps.toLowerCase().includes(query));
      });
      return { ...sec, items: filteredItems };
    }).filter(sec => sec.items.length > 0);

    if (filteredSections.length === 0) return '';

    matchesCount += filteredSections.reduce((acc, s) => acc + s.items.length, 0);

    return `
      <section class="handbook-subject-block" id="sec-${subj.id}">
        <div class="handbook-subject-header" style="border-left: 5px solid ${subj.color};">
          <div style="display:flex;align-items:center;gap:12px;">
            <span class="subject-icon" style="background:${subj.bg};color:${subj.color};width:38px;height:38px;border-radius:10px;display:grid;place-items:center;font-size:20px;">${subj.icon}</span>
            <div>
              <h2 style="margin:0;font-size:20px;color:#0f172a;">${subj.name}</h2>
              <p style="margin:2px 0 0;font-size:12px;color:#64748b;">Tổng hợp toàn bộ công thức & lý thuyết trọng tâm Giữa kì I & Học kì I</p>
            </div>
          </div>
          <button class="secondary handbook-jump-btn" data-subjectto="${subj.id === 'math' ? 0 : subj.id === 'physics' ? 1 : 5}" style="font-size:12px;padding:7px 15px;white-space:nowrap;">Luyện đề môn này →</button>
        </div>

        ${filteredSections.map((sec, secIdx) => `
          <div class="handbook-chapter-card">
            <div class="handbook-chapter-head">
              <h3>${sec.title}</h3>
              <span class="review-part-tag">${sec.badge}</span>
            </div>

            <div class="handbook-grid">
              ${sec.items.map(item => `
                <div class="handbook-item-card">
                  <div class="handbook-item-title">${item.name}</div>
                  <div class="formula-box">
                    <code>${item.formula}</code>
                  </div>
                  <div class="handbook-item-desc">${item.desc}</div>
                  ${item.traps ? `
                    <div class="trap-box">
                      <span class="trap-title">⚠️ BẪY ĐỀ THI & LỖI SAI CẦN TRÁNH:</span>
                      <p>${item.traps}</p>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </section>
    `;
  }).join('');

  app.innerHTML = `
    <div class="content handbook-container">
      <div class="handbook-hero">
        <div class="handbook-hero-text">
          <span class="eyebrow">📖 TÀI LIỆU ÔN TẬP TOÀN DIỆN</span>
          <h1>Sổ tay Công thức & Lý thuyết Trọng tâm (Lớp 10)</h1>
          <p>Hệ thống hóa toàn bộ kiến thức cốt lõi, công thức định lượng, đồ thị và các bẫy đề thi hay gặp trong môn Toán 10, Vật lí 10 và Hóa học 10 (Chuẩn GDPT 2018 Kết nối tri thức · Cánh Diều · Chân trời sáng tạo).</p>
        </div>
        <div class="handbook-actions">
          <button class="primary" id="btn-print-handbook" style="display:flex;align-items:center;gap:8px;">
            <span>🖨️</span> In / Tải PDF
          </button>
        </div>
      </div>

      <div class="handbook-toolbar">
        <div class="handbook-tabs">
          <button class="filter ${activeSubject === 'all' ? 'active' : ''}" data-handbook-tab="all">Tất cả các môn</button>
          <button class="filter ${activeSubject === 'math' ? 'active' : ''}" data-handbook-tab="math">∑ Toán 10</button>
          <button class="filter ${activeSubject === 'physics' ? 'active' : ''}" data-handbook-tab="physics">⚛️ Vật lý 10</button>
          <button class="filter ${activeSubject === 'chemistry' ? 'active' : ''}" data-handbook-tab="chemistry">🧪 Hóa học 10</button>
        </div>
        <div class="handbook-search-wrap">
          <input type="text" id="handbook-search-input" class="handbook-search-input" placeholder="🔍 Tra nhanh công thức (ví dụ: Heron, Vectơ, Ném ngang, Newton, Octet, Oxi hóa)..." value="${esc(query)}">
        </div>
      </div>

      <div class="handbook-body">
        ${contentHtml ? contentHtml : `
          <div class="notice" style="margin-top:30px;">
            <b>Không tìm thấy công thức phù hợp</b>
            <p>Không có kết quả nào khớp với từ khóa "<b>${esc(query)}</b>". Hãy thử tìm bằng từ khóa khác hoặc bấm nút xóa ô tìm kiếm.</p>
          </div>
        `}
      </div>

      <div class="handbook-footer-cta">
        <div style="max-width:600px;">
          <h3 style="margin:0 0 6px;color:#0f172a;font-size:18px;">Bạn đã nắm vững lý thuyết và công thức?</h3>
          <p style="margin:0;font-size:13px;color:#64748b;">Hãy thử sức ngay với 32 bộ đề thi chuẩn có đồng hồ đếm giờ, chấm điểm tự động và lời giải chi tiết từng bước.</p>
        </div>
        <button class="primary" data-viewto="subjects" style="padding:12px 24px;">Bắt đầu luyện đề ngay →</button>
      </div>
    </div>
  `;

  setNav('handbook');
  window.scrollTo(0, 0);

  // Gắn sự kiện ô tìm kiếm
  const searchInput = document.getElementById('handbook-search-input');
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    searchInput.addEventListener('input', e => {
      renderHandbook(activeSubject, e.target.value);
    });
  }

  // Gắn sự kiện in sổ tay
  const printBtn = document.getElementById('btn-print-handbook');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// Lắng nghe sự kiện chuyển tab trong sổ tay
document.addEventListener('click', event => {
  const tabBtn = event.target.closest('[data-handbook-tab]');
  if (tabBtn) {
    const tabKey = tabBtn.dataset.handbookTab;
    location.hash = tabKey === 'all' ? '#handbook' : `#handbook-${tabKey}`;
    renderHandbook(tabKey);
  }
});
