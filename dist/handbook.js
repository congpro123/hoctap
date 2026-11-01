// Sổ tay kiến thức, công thức và lý thuyết trọng tâm ôn thi Giữa kì I - Lớp 10 (Chuẩn GDPT 2018)

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
        badge: 'Trọng tâm đại số',
        items: [
          {
            name: 'Mệnh đề và Mệnh đề phủ định',
            formula: 'P̄: "Không phải P" &nbsp;·&nbsp; &forall;x &isin; X, P(x) &hArr; &exist;x &isin; X, P̄(x)',
            desc: 'Mệnh đề là câu khẳng định có tính đúng hoặc sai. Phủ định của lượng từ "với mọi (&forall;)" là "tồn tại (&exist;)" và ngược lại.',
            traps: 'Phủ định của dấu ">" là "&le;" (phải có dấu bằng); phủ định của "tất cả đều đạt" là "có ít nhất một không đạt".'
          },
          {
            name: 'Mệnh đề kéo theo & Điều kiện cần, đủ',
            formula: 'P &rArr; Q &nbsp;(Chỉ sai khi P đúng mà Q sai)',
            desc: 'P là giả thiết (điều kiện đủ để có Q); Q là kết luận (điều kiện cần để có P). Khi P sai, mệnh đề P &rArr; Q luôn đúng.',
            traps: 'Không nhầm lẫn: "P là điều kiện cần để có Q" là mệnh đề đảo Q &rArr; P, không phải P &rArr; Q.'
          },
          {
            name: 'Các phép toán trên tập hợp',
            formula: 'A &cap; B = {x | x &isin; A & x &isin; B} &nbsp;·&nbsp; A &cup; B = {x | x &isin; A hoặc x &isin; B}<br>A \\ B = {x | x &isin; A & x &notin; B} &nbsp;·&nbsp; n(A &cup; B) = n(A) + n(B) - n(A &cap; B)',
            desc: 'Tập có n phần tử có 2<sup>n</sup> tập con. Kí hiệu khoảng (a; b), đoạn [a; b], nửa khoảng [a; b) trên trục số thực.',
            traps: 'Khi lấy hiệu A \\ B trên trục số: Nếu b &notin; B và b &isin; A thì điểm b vẫn thuộc A \\ B (ngoặc tròn đổi thành ngoặc vuông).'
          }
        ]
      },
      {
        title: 'Chương II: Bất phương trình & Hệ BPT bậc nhất hai ẩn',
        badge: 'Đại số & Tọa độ',
        items: [
          {
            name: 'Bất phương trình bậc nhất hai ẩn',
            formula: 'ax + by &le; c &nbsp;hoặc&nbsp; ax + by &lt; c, &ge; c, &gt; c &nbsp;(a<sup>2</sup> + b<sup>2</sup> &ne; 0)',
            desc: 'Miền nghiệm là nửa mặt phẳng bờ d: ax + by = c. Lấy điểm kiểm tra O(0; 0) (nếu c &ne; 0) thay vào để xác định miền chứa O hay không chứa O.',
            traps: 'Nếu dấu bất phương trình là ngặt (< hoặc >) thì đường thẳng bờ vẽ nét đứt và không thuộc miền nghiệm.'
          },
          {
            name: 'Hệ BPT & Bài toán Quy hoạch tuyến tính (Tìm Max/Min)',
            formula: 'Max/Min của F(x; y) = ax + by trên miền đa giác đạt tại một trong các đỉnh',
            desc: 'Bước 1: Biểu diễn miền nghiệm của hệ BPT (thường là miền đa giác lồi OABC).<br>Bước 2: Tìm tọa độ tất cả các đỉnh của đa giác.<br>Bước 3: Tính giá trị F(x; y) tại từng đỉnh và so sánh để tìm GTLN / GTNN.',
            traps: 'Bắt buộc phải tính giá trị F tại TẤT CẢ các đỉnh trước khi kết luận GTLN/GTNN.'
          }
        ]
      },
      {
        title: 'Chương IV: Hệ thức lượng trong tam giác',
        badge: 'Hình học phẳng',
        items: [
          {
            name: 'Giá trị lượng giác của hai góc bù nhau (0° &le; &alpha; &le; 180°)',
            formula: 'sin(180&deg; - &alpha;) = sin&alpha; &nbsp;·&nbsp; cos(180&deg; - &alpha;) = -cos&alpha;<br>tan(180&deg; - &alpha;) = -tan&alpha; &nbsp;·&nbsp; cot(180&deg; - &alpha;) = -cot&alpha;',
            desc: 'Góc nhọn (0° < &alpha; < 90°): sin, cos, tan, cot > 0.<br>Góc tù (90° < &alpha; < 180°): sin > 0, còn cos, tan, cot < 0.',
            traps: 'Học sinh rất hay quên dấu trừ của cos góc tù: cos120° = -cos60° = -1/2.'
          },
          {
            name: 'Định lí côsin & Định lí sin',
            formula: 'a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc.cosA &nbsp;&hArr;&nbsp; cosA = (b<sup>2</sup> + c<sup>2</sup> - a<sup>2</sup>) / (2bc)<br>a / sinA = b / sinB = c / sinC = 2R',
            desc: 'Định lí côsin dùng khi biết 2 cạnh + góc xen giữa (hoặc biết 3 cạnh). Định lí sin dùng khi biết 1 cạnh + 2 góc (hoặc tính bán kính R đường tròn ngoại tiếp).',
            traps: 'Nếu góc A là góc tù thì cosA < 0, do đó -2bc.cosA sẽ thành cộng dương.'
          },
          {
            name: '5 Công thức tính diện tích tam giác',
            formula: '1) S = 1/2.a.h<sub>a</sub><br>2) S = 1/2.ab.sinC = 1/2.bc.sinA = 1/2.ca.sinB<br>3) S = abc / (4R) &nbsp;&hArr;&nbsp; R = abc / (4S)<br>4) S = p.r &nbsp;&hArr;&nbsp; r = S / p &nbsp;(với p = (a+b+c)/2)<br>5) Heron: S = &radic;[p(p - a)(p - b)(p - c)]',
            desc: 'Tùy giả thiết cho bán kính R (ngoại tiếp) hay r (nội tiếp) hay độ dài 3 cạnh mà lựa chọn công thức phù hợp.',
            traps: 'R = abc / (4S) có số 4 ở mẫu số, không phải số 2.'
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
        title: 'Chương I: Mở đầu & Sai số phép đo',
        badge: 'Kỹ năng thực nghiệm',
        items: [
          {
            name: 'Sai số tuyệt đối và Sai số tỉ đối',
            formula: '&Delta;A = &Delta;Ā + &Delta;A<sub>dc</sub> &nbsp;·&nbsp; &delta;A = (&Delta;A / Ā) &times; 100%',
            desc: 'Sai số dụng cụ &Delta;A<sub>dc</sub> thường lấy bằng nửa hoặc một độ chia nhỏ nhất (ĐCNN).',
            traps: 'Kết quả đo biểu diễn dạng: A = Ā &plusmn; &Delta;A (phải cùng số chữ số thập phân).'
          },
          {
            name: 'Quy tắc lan truyền sai số',
            formula: 'Phép nhân/chia: A = B . C hoặc B / C &rArr; &delta;A = &delta;B + &delta;C<br>Phép lũy thừa: A = B<sup>n</sup> &rArr; &delta;A = n . &delta;B',
            desc: 'Khi tính sai số tỉ đối của diện tích S = a.b: &delta;S = &delta;a + &delta;b. Thể tích hình lập phương V = a<sup>3</sup>: &delta;V = 3.&delta;a.',
            traps: 'Nhân chia thì cộng sai số TỈ ĐỐI (&delta;), cộng trừ thì cộng sai số TUYỆT ĐỐI (&Delta;).'
          }
        ]
      },
      {
        title: 'Chương II: Mô tả chuyển động',
        badge: 'Động học chất điểm',
        items: [
          {
            name: 'Độ dịch chuyển (d) vs Quãng đường (s)',
            formula: 's: đại lượng vô hướng (s &ge; 0) &nbsp;·&nbsp; d⃗: vectơ từ vị trí đầu đến vị trí cuối<br>Tốc độ trung bình: v<sub>tb</sub> = s / t &nbsp;·&nbsp; Vận tốc trung bình: v⃗<sub>tb</sub> = d⃗ / t',
            desc: 'Nếu vật chuyển động rồi quay về vị trí xuất phát: d = 0, nhưng s = tổng quãng đường > 0. Do đó vận tốc trung bình = 0, còn tốc độ trung bình > 0.',
            traps: 'Đổi đơn vị: 1 m/s = 3,6 km/h. Từ km/h sang m/s ta chia cho 3,6.'
          },
          {
            name: 'Chuyển động thẳng biến đổi đều (a = const)',
            formula: 'a = (v - v<sub>0</sub>) / t<br>v = v<sub>0</sub> + at<br>d = v<sub>0</sub>t + 1/2.at<sup>2</sup><br>v<sup>2</sup> - v<sub>0</sub><sup>2</sup> = 2ad',
            desc: 'Nhanh dần đều: a cùng dấu với v<sub>0</sub> (a.v > 0).<br>Chậm dần đều: a trái dấu với v<sub>0</sub> (a.v < 0). Khi dừng hẳn thì v = 0.',
            traps: 'Trong chuyển động chậm dần đều, nếu chọn chiều dương là chiều chuyển động thì a mang dấu âm (-).'
          },
          {
            name: 'Chuyển động rơi tự do (v<sub>0</sub> = 0, gia tốc g)',
            formula: 'v = gt = &radic;(2gh)<br>h = 1/2.gt<sup>2</sup> &nbsp;&hArr;&nbsp; t = &radic;(2h / g)',
            desc: 'Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng, chiều từ trên xuống dưới dưới tác dụng duy nhất của trọng lực.',
            traps: 'Quãng đường đi trong giây thứ n: &Delta;s<sub>n</sub> = s<sub>n</sub> - s<sub>n-1</sub> = 1/2.g(2n - 1).'
          }
        ]
      },
      {
        title: 'Chương III: Các định luật Newton & Lực trong tự nhiên',
        badge: 'Động lực học',
        items: [
          {
            name: 'Ba định luật Newton',
            formula: 'ĐL I: F⃗<sub>hl</sub> = 0⃗ &rArr; đứng yên hoặc chuyển động thẳng đều<br>ĐL II: F⃗ = m.a⃗ &nbsp;&hArr;&nbsp; a = F / m<br>ĐL III: F⃗<sub>AB</sub> = -F⃗<sub>BA</sub> (Cùng độ lớn, ngược chiều, khác vật tác dụng)',
            desc: 'Khối lượng là đại lượng đặc trưng cho mức quán tính của vật. Lực và phản lực trong định luật III Newton không cân bằng nhau vì đặt vào hai vật khác nhau.',
            traps: 'Lực và phản lực xuất hiện và mất đi đồng thời, cùng loại lực.'
          },
          {
            name: 'Trọng lực và Lực ma sát trượt',
            formula: 'P = m.g (phương thẳng đứng, hướng xuống)<br>F<sub>mst</sub> = &mu; . N',
            desc: 'Lực ma sát trượt tỉ lệ với áp lực N, không phụ thuộc vào diện tích tiếp xúc hay tốc độ của vật. Trên mặt phẳng nằm ngang không có lực kéo xiên: N = P = mg &rArr; F<sub>mst</sub> = &mu;mg.',
            traps: 'Lực ma sát nghỉ cực đại lớn hơn lực ma sát trượt. Lực ma sát trượt luôn ngược chiều với chiều chuyển động tương đối.'
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
        title: 'Chương 1: Cấu tạo nguyên tử',
        badge: 'Nguyên tử & Orbital',
        items: [
          {
            name: 'Thành phần nguyên tử & Số khối',
            formula: 'Z = p = e &nbsp;·&nbsp; A = Z + N &nbsp;·&nbsp; Kí hiệu: <sup>A</sup><sub>Z</sub>X<br>Hệ hạt cơ bản: Tổng hạt = 2Z + N &nbsp;·&nbsp; Hạt mang điện = 2Z',
            desc: 'Proton (p, +1, ~1 amu), Neutron (n, 0, ~1 amu), Electron (e, -1, ~0.00055 amu). Hạt nhân mang điện tích dương +Ze. Đồng vị protium <sup>1</sup><sub>1</sub>H không có neutron (N = 0).',
            traps: 'Hạt mang điện gồm proton và electron (2Z); hạt không mang điện là neutron (N).'
          },
          {
            name: 'Đồng vị & Nguyên tử khối trung bình',
            formula: 'Ā = (A<sub>1</sub>.x<sub>1</sub> + A<sub>2</sub>.x<sub>2</sub> + ... + A<sub>k</sub>.x<sub>k</sub>) / 100',
            desc: 'Đồng vị là các nguyên tử có cùng số proton (Z) nhưng khác số neutron (N), dẫn tới số khối (A) khác nhau.',
            traps: 'Phần trăm x<sub>1</sub> + x<sub>2</sub> + ... = 100%. Nếu có 2 đồng vị thì x<sub>2</sub> = 100% - x<sub>1</sub>.'
          },
          {
            name: 'Cấu hình electron & Quy tắc Hund/Auf-bau',
            formula: 'Thứ tự năng lượng: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s<br>Số e tối đa: phân lớp s(2), p(6), d(10), f(14) &nbsp;·&nbsp; Lớp n có tối đa 2n<sup>2</sup> e',
            desc: 'Khi viết cấu hình e phải xếp lại theo thứ tự lớp: ví dụ 3d trước 4s.<br><b>Ngoại lệ bán bão hòa / bão hòa:</b><br>• <sub>24</sub>Cr: [Ar]3d<sup>5</sup>4s<sup>1</sup> (thay vì 3d<sup>4</sup>4s<sup>2</sup>)<br>• <sub>29</sub>Cu: [Ar]3d<sup>10</sup>4s<sup>1</sup> (thay vì 3d<sup>9</sup>4s<sup>2</sup>)',
            traps: 'Số e lớp ngoài cùng: 1, 2, 3e &rArr; kim loại (trừ H, He, B); 4e &rArr; kim loại/phi kim; 5, 6, 7e &rArr; phi kim; 8e &rArr; khí hiếm.'
          }
        ]
      },
      {
        title: 'Chương 2: Bảng tuần hoàn & Định luật tuần hoàn',
        badge: 'Hệ thống tuần hoàn',
        items: [
          {
            name: 'Cấu tạo Bảng tuần hoàn',
            formula: 'Số thứ tự Ô = Z &nbsp;·&nbsp; Số thứ tự Chu kì = Số lớp e<br>Số thứ tự Nhóm A = Số e hóa trị (lớp ngoài cùng)',
            desc: 'Bảng tuần hoàn gồm 7 chu kì và 18 cột (8 nhóm A và 8 nhóm B). Nguyên tố s, p thuộc nhóm A; nguyên tố d, f thuộc nhóm B.',
            traps: 'Chu kì 1, 2, 3 là chu kì nhỏ; chu kì 4, 5, 6, 7 là chu kì lớn.'
          },
          {
            name: 'Xu hướng biến đổi tuần hoàn tính chất',
            formula: 'Trong 1 chu kì (Trái &rarr; Phải): Bán kính GIẢM &nbsp;·&nbsp; Độ âm điện TĂNG &nbsp;·&nbsp; Tính phi kim TĂNG &nbsp;·&nbsp; Tính kim loại GIẢM<br>Trong nhóm A (Trên &rarr; Dưới): Bán kính TĂNG &nbsp;·&nbsp; Độ âm điện GIẢM &nbsp;·&nbsp; Tính kim loại TĂNG &nbsp;·&nbsp; Tính phi kim GIẢM',
            desc: 'Fluorine (F) có độ âm điện lớn nhất (~3,98), Cesium (Cs) có độ âm điện nhỏ nhất trong các kim loại kiềm.',
            traps: 'Tính acid của oxide và hydroxide biến đổi cùng chiều với tính phi kim (tăng từ trái sang phải trong chu kì). Tính base biến đổi cùng chiều với tính kim loại.'
          },
          {
            name: 'Hóa trị cao nhất với Oxygen và Hydrogen',
            formula: 'Hóa trị cao nhất với O = Số thứ tự nhóm A (hợp chất R<sub>2</sub>O<sub>n</sub>)<br>Hóa trị trong hợp chất khí với H = 8 - n (với phi kim nhóm IVA &rarr; VIIA, RH<sub>8-n</sub>)',
            desc: 'Ví dụ nhóm VIA (S): Oxide cao nhất là SO<sub>3</sub> (hóa trị VI), hợp chất khí với hydrogen là H<sub>2</sub>S (hóa trị II = 8 - 6).',
            traps: 'Các kim loại nhóm IA, IIA, IIIA không tạo hợp chất khí với hydrogen.'
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
            <span class="subject-icon" style="background:${subj.bg};color:${subj.color};width:36px;height:36px;border-radius:10px;display:grid;place-items:center;font-size:20px;">${subj.icon}</span>
            <div>
              <h2 style="margin:0;font-size:20px;color:#0f172a;">${subj.name}</h2>
              <p style="margin:2px 0 0;font-size:12px;color:#64748b;">Tổng hợp công thức trọng tâm ôn thi Giữa kì I</p>
            </div>
          </div>
          <button class="secondary handbook-jump-btn" data-subjectto="${subj.id === 'math' ? 0 : subj.id === 'physics' ? 1 : 5}" style="font-size:12px;padding:6px 14px;">Luyện đề môn này →</button>
        </div>

        ${filteredSections.map(sec => `
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
          <span class="eyebrow">📖 TÀI LIỆU ÔN TẬP ĐỘC QUYỀN</span>
          <h1>Sổ tay Công thức & Lý thuyết Giữa kì I</h1>
          <p>Hệ thống hóa toàn bộ công thức trọng tâm, định lí cốt lõi và các bẫy đề thi hay gặp trong đề thi Toán, Vật lí và Hóa học 10 (Chuẩn GDPT 2018).</p>
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
          <input type="text" id="handbook-search-input" class="handbook-search-input" placeholder="🔍 Tra nhanh công thức, định lí (ví dụ: Heron, Newton, e hóa trị, bán kính)..." value="${esc(query)}">
        </div>
      </div>

      <div class="handbook-body">
        ${contentHtml ? contentHtml : `
          <div class="notice" style="margin-top:30px;">
            <b>Không tìm thấy công thức phù hợp</b>
            <p>Không có kết quả nào khớp với từ khóa "<b>${esc(query)}</b>". Hãy thử tìm bằng từ khóa khác hoặc xóa ô tìm kiếm.</p>
          </div>
        `}
      </div>

      <div class="handbook-footer-cta">
        <div style="max-width:600px;">
          <h3 style="margin:0 0 6px;color:#0f172a;font-size:18px;">Bạn đã nắm vững lý thuyết và công thức?</h3>
          <p style="margin:0;font-size:13px;color:#64748b;">Hãy thử sức ngay với 32 bộ đề thi thử có chấm điểm tự động và lời giải chi tiết chuẩn Lớp 10.</p>
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
