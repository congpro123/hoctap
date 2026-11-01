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
        title: 'Chương I: Mở đầu & Sai số thực nghiệm',
        badge: 'Phương pháp khoa học',
        items: [
          {
            name: 'Sai số tuyệt đối, Sai số dụng cụ & Cách viết kết quả đo',
            formula: '&Delta;A = &Delta;Ā + &Delta;A<sub>dc</sub><br>&delta;A = (&Delta;A / Ā) &times; 100%<br>Kết quả đo: A = Ā &plusmn; &Delta;A (hoặc A = Ā &plusmn; &delta;A%)',
            desc: 'Sai số dụng cụ &Delta;A<sub>dc</sub> thường được lấy bằng nửa độ chia nhỏ nhất (hoặc một độ chia nhỏ nhất tùy đề bài). Ā là giá trị trung bình qua n lần đo.',
            traps: 'Chữ số thập phân của sai số tuyệt đối &Delta;A và giá trị trung bình Ā phải tương ứng bằng nhau.'
          },
          {
            name: 'Quy tắc lan truyền sai số trong tính toán',
            formula: '• Phép cộng / trừ: F = X &plusmn; Y &rArr; &Delta;F = &Delta;X + &Delta;Y<br>• Phép nhân / chia: F = X . Y hoặc X / Y &rArr; &delta;F = &delta;X + &delta;Y<br>• Phép lũy thừa: F = X<sup>n</sup> &rArr; &delta;F = n . &delta;X',
            desc: 'Ví dụ: Diện tích hình chữ nhật S = a.b &rArr; &delta;S = &delta;a + &delta;b. Gia tốc rơi tự do g = 2h / t<sup>2</sup> &rArr; &delta;g = &delta;h + 2.&delta;t.',
            traps: 'Phép nhân chia cộng sai số TỈ ĐỐI (&delta;%), không được cộng trực tiếp sai số tuyệt đối (&Delta;).'
          }
        ]
      },
      {
        title: 'Chương II: Mô tả chuyển động & Đồ thị chuyển động',
        badge: 'Động học chất điểm',
        items: [
          {
            name: 'Phân biệt Quãng đường (s) và Độ dịch chuyển (d)',
            formula: '• Quãng đường s &ge; 0: đại lượng vô hướng đo chiều dài quỹ đạo<br>• Độ dịch chuyển d⃗: vectơ nối vị trí đầu và vị trí cuối<br>• Tốc độ trung bình: v<sub>tb</sub> = s / t &nbsp;·&nbsp; Vận tốc trung bình: v⃗<sub>tb</sub> = d⃗ / t<br>• Đổi đơn vị: 1 m/s = 3,6 km/h &hArr; v(m/s) = v(km/h) / 3,6',
            desc: 'Khi vật chuyển động rồi quay trở về đúng vị trí ban đầu: vị trí đầu trùng vị trí cuối nên d = 0, nhưng tổng quãng đường s > 0. Do đó vận tốc trung bình bằng 0, còn tốc độ trung bình khác 0.',
            traps: 'Không đồng nhất độ lớn độ dịch chuyển d với quãng đường s khi vật có đổi hướng chuyển động.'
          },
          {
            name: 'Chuyển động thẳng biến đổi đều (Gia tốc a = const)',
            formula: '• Gia tốc: a = (v - v<sub>0</sub>) / t = &Delta;v / &Delta;t (m/s<sup>2</sup>)<br>• Vận tốc: v = v<sub>0</sub> + at<br>• Độ dịch chuyển: d = v<sub>0</sub>t + 1/2.at<sup>2</sup><br>• Hệ thức độc lập thời gian: v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2ad<br>• Nhanh dần đều: a cùng dấu v<sub>0</sub> (a.v > 0)<br>• Chậm dần đều: a trái dấu v<sub>0</sub> (a.v < 0), khi dừng lại thì v = 0',
            desc: 'Gia tốc đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc theo thời gian. Trong hệ SI, đơn vị gia tốc là m/s<sup>2</sup>.',
            traps: 'Xe hãm phanh chuyển động chậm dần đều: nếu chọn chiều dương là chiều chuyển động thì v<sub>0</sub> > 0 và gia tốc a < 0.'
          },
          {
            name: 'Đồ thị độ dịch chuyển (d - t) và Đồ thị vận tốc (v - t)',
            formula: '• Đồ thị d - t: Độ dốc (hệ số góc) chính là vận tốc: v = &Delta;d / &Delta;t<br>• Đồ thị v - t: Độ dốc chính là gia tốc: a = &Delta;v / &Delta;t<br>• Diện tích dưới đồ thị v - t bằng độ dịch chuyển d (quãng đường s)',
            desc: 'Trên đồ thị d - t: đường nằm ngang nghĩa là vật đứng yên (v = 0); đường dốc lên là chuyển động thẳng đều theo chiều dương; đường dốc xuống là chuyển động theo chiều âm.',
            traps: 'Tính quãng đường bằng cách tính diện tích hình thang hoặc tam giác giới hạn bởi đồ thị v-t với trục thời gian.'
          },
          {
            name: 'Chuyển động rơi tự do (v<sub>0</sub> = 0, gia tốc g)',
            formula: 'v = gt = &radic;(2gh)<br>h = 1/2.gt<sup>2</sup> &hArr; t = &radic;(2h / g)<br>Quãng đường rơi trong giây thứ n: &Delta;h<sub>n</sub> = 1/2 . g(2n - 1)',
            desc: 'Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới dưới tác dụng duy nhất của trọng lực (bỏ qua sức cản không khí). Tại cùng một nơi, mọi vật rơi tự do với cùng gia tốc g.',
            traps: 'Rơi tự do có vận tốc đầu bằng 0 (v<sub>0</sub> = 0). Nếu ném vật xuống thì v<sub>0</sub> &ne; 0, không gọi là rơi tự do thuần túy.'
          }
        ]
      },
      {
        title: 'Chương III: Chuyển động ném ngang & Hai chiều',
        badge: 'Động học nâng cao',
        items: [
          {
            name: 'Chuyển động ném ngang từ độ cao h với tốc độ v₀',
            formula: '• Trục Ox (ngang): a<sub>x</sub> = 0, v<sub>x</sub> = v<sub>0</sub>, x = v<sub>0</sub>t (thẳng đều)<br>• Trục Oy (đứng): a<sub>y</sub> = g, v<sub>y</sub> = gt, y = 1/2.gt<sup>2</sup> (rơi tự do)<br>• Phương trình quỹ đạo: y = (g / (2v<sub>0</sub><sup>2</sup>)) . x<sup>2</sup> (nhánh parabol)<br>• Thời gian rơi: t = &radic;(2h / g) &nbsp;(không phụ thuộc vào v<sub>0</sub>!)<br>• Tầm xa: L = x<sub>max</sub> = v<sub>0</sub> . &radic;(2h / g)<br>• Tốc độ chạm đất: v = &radic;(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) = &radic;(v<sub>0</sub><sup>2</sup> + 2gh)',
            desc: 'Chuyển động ném ngang là sự tổng hợp của hai chuyển động thành phần vuông góc nhau: chuyển động thẳng đều theo phương ngang và chuyển động rơi tự do theo phương thẳng đứng.',
            traps: 'Thời gian rơi của vật ném ngang bằng thời gian rơi tự do của vật thả rơi từ cùng độ cao, hoàn toàn KHÔNG phụ thuộc vào vận tốc ném ban đầu v<sub>0</sub>.'
          }
        ]
      },
      {
        title: 'Chương IV: Động lực học & Các định luật Newton',
        badge: 'Động lực học chất điểm',
        items: [
          {
            name: 'Ba định luật Newton kinh điển',
            formula: '• Định luật I: F⃗<sub>hl</sub> = 0⃗ &rArr; vật đứng yên hoặc chuyển động thẳng đều mãi mãi<br>• Định luật II: F⃗ = m.a⃗ &hArr; a⃗ = F⃗ / m<br>• Định luật III: F⃗<sub>AB</sub> = -F⃗<sub>BA</sub> (Cùng phương, ngược chiều, cùng độ lớn, đặt vào 2 vật khác nhau)',
            desc: 'Quán tính là tính chất của mọi vật có xu hướng bảo toàn vận tốc cả về hướng và độ lớn. Khối lượng m là đại lượng đặc trưng cho mức quán tính của vật.',
            traps: 'Lực và phản lực trong Định luật III Newton KHÔNG cân bằng nhau vì chúng đặt vào hai vật tương tác khác nhau.'
          },
          {
            name: 'Tổng hợp lực & Điều kiện cân bằng chất điểm',
            formula: 'F⃗ = F⃗<sub>1</sub> + F⃗<sub>2</sub> &rArr; F = &radic;(F<sub>1</sub><sup>2</sup> + F<sub>2</sub><sup>2</sup> + 2F<sub>1</sub>F<sub>2</sub>.cos&alpha;)<br>• Cùng chiều (&alpha; = 0&deg;): F<sub>max</sub> = F<sub>1</sub> + F<sub>2</sub><br>• Ngược chiều (&alpha; = 180&deg;): F<sub>min</sub> = |F<sub>1</sub> - F<sub>2</sub>|<br>• Vuông góc (&alpha; = 90&deg;): F = &radic;(F<sub>1</sub><sup>2</sup> + F<sub>2</sub><sup>2</sup>)<br>• Bất đẳng thức hợp lực: |F<sub>1</sub> - F<sub>2</sub>| &le; F &le; F<sub>1</sub> + F<sub>2</sub>',
            desc: 'Hợp lực của hai lực đồng quy tuân theo quy tắc hình bình hành. Điều kiện cân bằng của chất điểm là tổng hợp lực tác dụng lên chất điểm bằng vectơ-không: &sum;F⃗ = 0⃗.',
            traps: 'Độ lớn hợp lực không bao giờ vượt quá F<sub>1</sub> + F<sub>2</sub> và không bao giờ nhỏ hơn |F<sub>1</sub> - F<sub>2</sub>|.'
          },
          {
            name: 'Các lực cơ học thường gặp (Trọng lực, Ma sát, Đàn hồi)',
            formula: '• Trọng lực: P = m.g (phương thẳng đứng, hướng xuống)<br>• Lực ma sát trượt: F<sub>mst</sub> = &mu; . N (ngược chiều chuyển động tương đối)<br>• Định luật Hooke (Lò xo): F<sub>đh</sub> = k . |&Delta;l| (&Delta;l là độ biến dạng)<br>• Lực cản chất lưu & Đẩy Archimedes: F<sub>A</sub> = &rho; . g . V',
            desc: 'Hệ số ma sát trượt &mu; phụ thuộc vào vật liệu và tình trạng bề mặt tiếp xúc, KHÔNG phụ thuộc vào diện tích tiếp xúc hay tốc độ của vật. Trên mặt phẳng nằm ngang không kéo xiên: N = P = mg &rArr; F<sub>mst</sub> = &mu;mg.',
            traps: 'Nếu vật bị kéo xiên một góc &alpha; so với phương ngang thì áp lực N = mg - F.sin&alpha;, không còn bằng mg nữa.'
          }
        ]
      },
      {
        title: 'Chương V: Cân bằng của vật rắn & Mômen lực',
        badge: 'Cơ học vật rắn',
        items: [
          {
            name: 'Mômen lực & Quy tắc mômen lực (Cân bằng quay)',
            formula: '• Mômen lực: M = F . d (N.m)<br>• Quy tắc mômen: &sum;M<sub>thuận</sub> = &sum;M<sub>ngược</sub><br>• Ngẫu lực: M = F . d (d là khoảng cách giữa 2 giá lực)',
            desc: 'Mômen lực đặc trưng cho tác dụng làm quay của lực đối với một trục quay. Cánh tay đòn d là khoảng cách VUÔNG GÓC từ trục quay đến giá của lực.',
            traps: 'Cánh tay đòn d không phải là khoảng cách từ trục quay đến điểm đặt của lực, mà là khoảng cách vuông góc từ trục quay đến đường thẳng chứa vectơ lực (giá của lực).'
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
