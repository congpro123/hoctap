// Công thức của hai đề Word cũ được dựng lại bằng KaTeX từ bản gốc.
// Chỉ thay nội dung hiển thị; khóa đáp án và thang điểm trong physics-paper-exams.js được giữ nguyên.
(function applyPhysicsKatexOverrides(exams) {
  const R = String.raw;
  const byId = id => (exams || []).find(exam => exam.id === id);
  const setMc = (exam, index, stem, options) => {
    exam.questions[index][0] = stem;
    exam.questions[index][1] = options;
  };
  const setTf = (exam, group, stem, items) => {
    exam.tf[group].stem = stem;
    items.forEach((text, index) => { exam.tf[group].items[index][0] = text; });
  };

  const de1 = byId('vatli-10-tailieu-de-1');
  if (de1) {
    setMc(de1, 0, 'Đối tượng nghiên cứu nào sau đây KHÔNG thuộc lĩnh vực Vật lí học?', [
      'Chuyển động cơ học của các vật thể.', 'Các hiện tượng điện, từ và ánh sáng.',
      'Sự biến đổi của các chất tạo thành chất mới.', 'Cấu trúc của vật chất và các tương tác cơ bản.'
    ]);
    setMc(de1, 1, 'Để đo đường kính ngoài của một ống thép nhỏ với độ chính xác cao (độ chia nhỏ nhất $0{,}01\\,\\text{mm}$), dụng cụ đo phù hợp nhất là', [
      'thước dây vải.', 'thước kẹp (panme/thước kẹp cơ khí).', 'thước cuộn thép.', 'thước thẳng học sinh.'
    ]);
    setMc(de1, 2, R`Trong phép đo trực tiếp đại lượng $A$, giá trị trung bình là $\overline A$ và sai số tuyệt đối trung bình là $\Delta A$. Cách ghi kết quả đo đúng chuẩn là`, [
      R`$A=\overline A\pm\Delta A$.`, R`$A=\overline A\cdot\Delta A$.`, R`$A=\overline A/\Delta A$.`, R`$A=\Delta A\pm\overline A$.`
    ]);
    setMc(de1, 3, 'Đại lượng nào sau đây là đại lượng vectơ?', [R`Quãng đường $s$.`, R`Tốc độ $v$.`, R`Độ dịch chuyển $\vec d$.`, R`Thời gian $t$.`]);
    setMc(de1, 4, R`Một người đi bộ dọc theo đường thẳng từ nhà $(A)$ đến bưu điện $(B)$ cách nhà $3\,\text{km}$, rồi quay trở về nhà $(A)$. Độ dịch chuyển tổng cộng của người đó là`, [R`$6\,\text{km}$.`, R`$3\,\text{km}$.`, R`$0\,\text{km}$.`, R`$-3\,\text{km}$.`]);
    setMc(de1, 5, R`Đồ thị độ dịch chuyển – thời gian $(d-t)$ của một chuyển động thẳng đều là một`, ['đường parabol.', 'đường thẳng xiên góc.', 'đường tròn.', 'đường cong bất kỳ.']);
    setMc(de1, 6, R`Độ dốc (hệ số góc) của đồ thị độ dịch chuyển – thời gian $(d-t)$ cho biết đại lượng nào sau đây?`, ['Gia tốc.', 'Quãng đường.', 'Vận tốc.', 'Thời gian.']);
    setMc(de1, 7, 'Công thức tính gia tốc trung bình của một vật chuyển động là', [R`$a=\dfrac{v-v_0}{t-t_0}=\dfrac{\Delta v}{\Delta t}$.`, R`$a=\dfrac{s}{t}$.`, R`$a=v_0+vt$.`, R`$a=\dfrac{v+v_0}{2}$.`]);
    setMc(de1, 8, 'Đơn vị của gia tốc trong hệ đo lường SI là', [R`$\text{m/s}$.`, R`$\text{m/s}^2$.`, R`$\text{m}\cdot\text{s}$.`, R`$\text{km/h}$.`]);
    setMc(de1, 9, 'Chuyển động thẳng biến đổi đều là chuyển động thẳng có', ['vận tốc không đổi theo thời gian.', 'gia tốc biến đổi liên tục theo thời gian.', R`gia tốc không đổi theo thời gian $(a=\text{const}\ne0)$.`, 'quãng đường tăng đều theo thời gian.']);
    setMc(de1, 10, R`Trong chuyển động thẳng biến đổi đều, mối liên hệ giữa vận tốc $v$, gia tốc $a$, vận tốc đầu $v_0$ và độ dịch chuyển $d$ được xác định bởi công thức`, [R`$v^2-v_0^2=ad$.`, R`$v^2-v_0^2=2ad$.`, R`$v-v_0=2ad$.`, R`$v^2+v_0^2=2ad$.`]);
    setMc(de1, 11, R`Đồ thị vận tốc – thời gian $(v-t)$ của một vật chuyển động thẳng biến đổi đều có dạng là`, ['một đường thẳng xiên góc.', R`một đường thẳng song song với trục $v$.`, 'một đường cong elip.', 'một đường parabol.']);

    setTf(de1, 0, 'Một nhóm học sinh tiến hành thí nghiệm đo tốc độ của một viên bi nhỏ lăn trên thước nhôm nghiêng bằng dụng cụ thực hành gồm: cổng quang điện và đồng hồ đo thời gian hiện số.', [
      'Cổng quang điện dùng để phát hiện vật đi qua và phát ra tín hiệu điện kích hoạt đồng hồ hiện số.',
      'Đồng hồ đo thời gian hiện số giúp đo khoảng thời gian với độ chính xác cao hơn hẳn đồng hồ bấm giây thủ công.',
      'Ưu điểm lớn nhất của phương pháp đo tốc độ bằng cổng quang điện là thiết bị cực kỳ gọn nhẹ, có thể dễ dàng mang đi đo ngoài đường giao thông công cộng.',
      R`Khi đo đường kính một viên bi thép bằng thước kẹp thu được $d_1=10{,}1\,\text{mm}$, $d_2=10{,}2\,\text{mm}$, $d_3=10{,}0\,\text{mm}$. Giá trị trung bình là $\overline d=10{,}1\,\text{mm}$.`
    ]);
    setTf(de1, 1, R`Một xe máy chuyển động trên một đường thẳng. Đồ thị độ dịch chuyển – thời gian $(d-t)$ gồm ba giai đoạn: OA từ $(0;0)$ đến $(4\,\text{s};40\,\text{m})$; AB từ $t=4\,\text{s}$ đến $t=8\,\text{s}$ nằm ngang tại $d=40\,\text{m}$; BC từ $(8\,\text{s};40\,\text{m})$ đến $(10\,\text{s};0\,\text{m})$.`, [
      R`Đoạn OA thể hiện vật chuyển động thẳng đều theo chiều dương với vận tốc $v_{OA}=10\,\text{m/s}$.`,
      R`Đoạn AB thể hiện vật đứng yên trong khoảng thời gian $4\,\text{s}$ tại vị trí $d=40\,\text{m}$.`,
      R`Đoạn BC thể hiện vật đổi chiều chuyển động và quay về vị trí xuất phát với vận tốc $v_{BC}=-20\,\text{m/s}$.`,
      R`Tốc độ trung bình của vật trong toàn bộ thời gian $10\,\text{s}$ chuyển động là $4\,\text{m/s}$.`
    ]);
    de1.short[0].question = R`Một ca nô chạy ngược dòng sông từ bến $A$ đến bến $B$ mất $2$ giờ. Biết $AB=30\,\text{km}$ và tốc độ của dòng nước đối với bờ sông là $3\,\text{km/h}$. Tốc độ của ca nô đối với dòng nước là bao nhiêu km/h? (Viết kết quả đến hàng đơn vị.)`;
    de1.short[1].question = R`Một ô tô đang chuyển động với vận tốc $18\,\text{km/h}$ thì hãm phanh, chuyển động chậm dần đều với gia tốc $a=-1\,\text{m/s}^2$. Quãng đường ô tô đi được từ lúc hãm phanh đến khi dừng hẳn là bao nhiêu mét? (Viết kết quả đến hàng đơn vị.)`;
    de1.short[2].question = R`Một vật rơi tự do không vận tốc đầu từ độ cao $h=45\,\text{m}$ xuống đất tại nơi có gia tốc trọng trường $g=10\,\text{m/s}^2$. Thời gian rơi đến khi chạm đất là bao nhiêu giây? (Viết kết quả đến hàng phần mười.)`;
    de1.essay[0].question = R`Để đo chiều dài $L$ của một chiếc bàn học, một học sinh dùng thước dây có độ chia nhỏ nhất $1\,\text{mm}$ và đo 5 lần: $L_1=120{,}1\,\text{cm}$; $L_2=120{,}2\,\text{cm}$; $L_3=119{,}9\,\text{cm}$; $L_4=120{,}0\,\text{cm}$; $L_5=119{,}8\,\text{cm}$.<br>a) Tính $\overline L$ và sai số ngẫu nhiên trung bình $\overline{\Delta L}$.<br>b) Viết kết quả dưới dạng $L=\overline L\pm\Delta L$ (sai số dụng cụ bằng độ chia nhỏ nhất của thước).`;
    de1.essay[1].question = R`Hai ô tô $A$ và $B$ chuyển động cùng chiều trên một đường thẳng. Ô tô $A$ chuyển động đều với $v_A=20\,\text{m/s}$. Khi $A$ vừa vượt qua $B$ thì $B$ bắt đầu khởi hành từ nghỉ, nhanh dần đều với $a_B=2\,\text{m/s}^2$.<br>a) Viết $d_A(t)$ và $d_B(t)$, chọn gốc tọa độ tại vị trí $B$ bắt đầu khởi hành và $t=0$ lúc $B$ bắt đầu chạy.<br>b) Xác định thời điểm và vị trí hai xe gặp lại nhau.<br>c) Tìm khoảng cách cực đại giữa hai xe trước khi $B$ đuổi kịp và vượt $A$.`;
  }

  const de2 = byId('vatli-10-tailieu-de-2');
  if (de2) {
    setMc(de2, 0, 'Phương pháp nghiên cứu nào đóng vai trò quyết định và là đặc trưng quan trọng nhất của Vật lí học thực nghiệm?', ['Phương pháp quan sát tự nhiên.', 'Phương pháp mô hình hóa lý thuyết.', 'Phương pháp thực nghiệm kiểm chứng.', 'Phương pháp suy luận toán học thuần túy.']);
    setMc(de2, 1, R`Dùng thước kẹp có độ chia nhỏ nhất $0{,}02\,\text{mm}$ để đo đường kính trong của một vòng đệm. Cách biểu diễn sai số dụng cụ $\Delta A_{dc}$ chuẩn xác nhất thường được lấy bằng`, [R`một nửa độ chia nhỏ nhất $(0{,}01\,\text{mm})$.`, R`đúng độ chia nhỏ nhất $(0{,}02\,\text{mm})$.`, R`hai lần độ chia nhỏ nhất $(0{,}04\,\text{mm})$.`, R`$0{,}1\,\text{mm}$.`]);
    setMc(de2, 2, R`Một đại lượng $Y$ phụ thuộc vào đại lượng đo trực tiếp $X$ theo $Y=X^3$. Nếu sai số tương đối của $X$ là $\delta X=1{,}5\%$, thì sai số tương đối $\delta Y$ của $Y$ là`, [R`$1{,}5\%$.`, R`$3{,}0\%$.`, R`$4{,}5\%$.`, R`$0{,}5\%$.`]);
    setMc(de2, 3, R`Một vật chuyển động từ $M(1\,\text{m};2\,\text{m})$ đến $N(4\,\text{m};6\,\text{m})$ trong hệ tọa độ Cartesian $Oxy$. Độ lớn của vectơ độ dịch chuyển $\vec d$ là`, [R`$7\,\text{m}$.`, R`$5\,\text{m}$.`, R`$3\,\text{m}$.`, R`$4\,\text{m}$.`]);
    setMc(de2, 4, R`Một vật chuyển động tròn đều trên đường tròn bán kính $R=2\,\text{m}$. Khi vật đi hết đúng một nửa vòng tròn thì quãng đường $s$ và độ lớn độ dịch chuyển $d$ lần lượt là`, [R`$s=2\pi\,\text{m},\ d=4\,\text{m}$.`, R`$s=4\pi\,\text{m},\ d=2\,\text{m}$.`, R`$s=4\,\text{m},\ d=2\pi\,\text{m}$.`, R`$s=2\pi\,\text{m},\ d=0\,\text{m}$.`]);
    setMc(de2, 5, R`Hai xe $A$ và $B$ chuyển động cùng chiều trên một đường thẳng với $v_A=60\,\text{km/h}$ và $v_B=40\,\text{km/h}$. Vận tốc tương đối của xe $A$ đối với xe $B$ là`, [R`$100\,\text{km/h}$.`, R`$20\,\text{km/h}$.`, R`$-20\,\text{km/h}$.`, R`$50\,\text{km/h}$.`]);
    setMc(de2, 6, R`Đồ thị độ dịch chuyển – thời gian $(d-t)$ là một parabol có bề lõm hướng lên, $d=At^2+Bt+C$ với $A>0$. Điều này chứng tỏ vật chuyển động`, ['thẳng đều.', 'nhanh dần đều theo chiều dương.', 'chậm dần đều.', 'đứng yên.']);
    setMc(de2, 7, R`Một chiếc thuyền đi qua con sông rộng $w$ với vận tốc đối với nước $\vec v_{t/n}$ vuông góc dòng chảy. Nước chảy với vận tốc $\vec v_{n/b}$. Độ dịch chuyển theo phương dọc dòng sông là`, [R`$d_x=v_{n/b}\dfrac{w}{v_{t/n}}$.`, R`$d_x=v_{t/n}\dfrac{w}{v_{n/b}}$.`, R`$d_x=w$.`, R`$d_x=\sqrt{v_{t/n}^2+v_{n/b}^2}\,w$.`]);
    setMc(de2, 8, R`Một vật chuyển động thẳng có phương trình vận tốc $v=10-2t$ (m/s; s). Gia tốc và tính chất chuyển động tại $t=2\,\text{s}$ là`, [R`$a=2\,\text{m/s}^2$, nhanh dần đều.`, R`$a=-2\,\text{m/s}^2$, chậm dần đều.`, R`$a=-2\,\text{m/s}^2$, nhanh dần đều.`, R`$a=10\,\text{m/s}^2$, chậm dần đều.`]);
    setMc(de2, 9, R`Diện tích hình phẳng giới hạn bởi đồ thị vận tốc – thời gian $(v-t)$ và trục $Ot$ từ $t_1$ đến $t_2$ có giá trị bằng`, ['gia tốc của vật.', 'độ dịch chuyển của vật trong khoảng thời gian đó.', 'vận tốc trung bình.', 'quãng đường vật đi được trong mọi trường hợp.']);
    setMc(de2, 10, R`Một hòn đá được ném ngang từ độ cao $h$ với vận tốc đầu $v_0$, tại nơi có gia tốc trọng trường $g$. Tầm xa $L$ theo phương ngang là`, [R`$L=v_0\sqrt{\dfrac{2h}{g}}$.`, R`$L=v_0\dfrac{2h}{g}$.`, R`$L=\sqrt{\dfrac{2gh}{v_0}}$.`, R`$L=v_0\sqrt{\dfrac{h}{2g}}$.`]);
    setMc(de2, 11, R`Một chất điểm chuyển động tròn đều bán kính $R=0{,}5\,\text{m}$ với tốc độ góc $\omega=4\,\text{rad/s}$. Gia tốc hướng tâm có độ lớn là`, [R`$2\,\text{m/s}^2$.`, R`$8\,\text{m/s}^2$.`, R`$4\,\text{m/s}^2$.`, R`$16\,\text{m/s}^2$.`]);

    setTf(de2, 0, R`Một máy bay chuyển động theo hướng Bắc với vận tốc đối với không khí $v_{mb/kk}=200\,\text{m/s}$. Có luồng gió từ Tây sang Đông với $v_{g/đ}=50\,\text{m/s}$.`, [
      R`Vận tốc tổng hợp của máy bay đối với mặt đất có độ lớn $250\,\text{m/s}$.`,
      R`Hướng chuyển động thực tế lệch so với hướng Bắc một góc $\alpha$ sao cho $\tan\alpha=0{,}25$ (lệch về phía Đông).`,
      R`Độ dịch chuyển của máy bay theo phương Bắc sau $1$ giờ bay là $720\,\text{km}$.`,
      'Muốn bay đúng theo hướng Bắc địa lí, phi công phải điều khiển mũi máy bay hướng về phía Tây Bắc một góc nghiêng so với hướng Bắc.'
    ]);
    setTf(de2, 1, R`Một ô tô có đồ thị vận tốc – thời gian: OA từ $(0;0)$ đến $(10\,\text{s};15\,\text{m/s})$; AB nằm ngang từ $t=10\,\text{s}$ đến $t=15\,\text{s}$ tại $v=15\,\text{m/s}$; BC dốc xuống từ $(15\,\text{s};15\,\text{m/s})$ đến $(20\,\text{s};0\,\text{m/s})$.`, [
      R`Gia tốc trên OA là $a=1{,}5\,\text{m/s}^2$ và xe nhanh dần đều.`,
      R`Trên AB, gia tốc bằng $0$ và xe chuyển động thẳng đều với vận tốc $15\,\text{m/s}$.`,
      R`Gia tốc trên BC là $a=-3\,\text{m/s}^2$ và xe chậm dần đều.`,
      R`Quãng đường tổng cộng xe đi được trong toàn bộ $15\,\text{s}$ là $225\,\text{m}$.`
    ]);
    de2.short[0].question = R`Hai vật $A$ và $B$ được thả rơi tự do từ cùng độ cao, nhưng $B$ được thả sau $A$ một khoảng $\Delta t=1\,\text{s}$. Lấy $g=10\,\text{m/s}^2$. Khi $A$ rơi được $3\,\text{s}$ thì khoảng cách giữa hai vật là bao nhiêu mét? (Viết kết quả đến hàng đơn vị.)`;
    de2.short[1].question = R`Một xe máy đang chạy với vận tốc $v_0$ rồi nhanh dần đều. Trong giây thứ 5 kể từ lúc tăng tốc, xe đi được $14\,\text{m}$. Biết $a=2\,\text{m/s}^2$. Tính $v_0$ theo m/s (viết kết quả đến hàng đơn vị).`;
    de2.short[2].question = R`Một quả bóng được ném ngang từ đỉnh tháp cao $h=20\,\text{m}$ với $v_0=15\,\text{m/s}$. Lấy $g=10\,\text{m/s}^2$. Tốc độ ngay trước khi chạm đất là bao nhiêu m/s? (Viết kết quả đến hàng đơn vị.)`;
    de2.essay[0].question = R`Từ thí nghiệm rơi tự do thu được quan hệ $h=kt^2$ với $k=4{,}905\pm0{,}025\,\text{m/s}^2$.<br>a) Xác định giá trị trung bình $\overline g$ và sai số tuyệt đối $\Delta g$.<br>b) Tính sai số tương đối $\delta g$ và nhận xét độ chính xác.`;
    de2.essay[1].question = R`Hai ô tô $A$ và $B$ chuyển động cùng chiều. Xe $A$ chuyển động đều với $v_A=20\,\text{m/s}$. Khi $A$ vừa vượt $B$ thì $B$ khởi hành từ nghỉ, nhanh dần đều với $a_B=2\,\text{m/s}^2$.<br>a) Viết $d_A(t)$ và $d_B(t)$.<br>b) Xác định thời điểm và vị trí hai xe gặp lại.<br>c) Tìm khoảng cách cực đại giữa hai xe trước khi $B$ đuổi kịp và vượt $A$.`;
  }

  // Đề số 5 từng bị ghép nhầm các ảnh OCR liên tiếp vào cùng một câu.
  // Giữ ảnh đồ thị thật, còn công thức và bảng số liệu được dựng lại bằng HTML/KaTeX.
  const so5 = byId('vatli-10-tailieu-so-5');
  if (so5) {
    setMc(so5, 6, 'Công thức đúng để tính quãng đường trong chuyển động rơi tự do không vận tốc đầu là', [
      R`$s=\dfrac{1}{2}gt^2$.`, R`$s=gt^2$.`, R`$s=\dfrac{1}{2}g^2t$.`, R`$s=\dfrac{g}{2t^2}$.`
    ]);
    so5.questions[6][3] = R`Vật rơi tự do từ trạng thái nghỉ có $v_0=0$ và gia tốc $g$, nên $s=v_0t+\dfrac12gt^2=\dfrac12gt^2$.`;

    setMc(so5, 9,
      `Đồ thị vận tốc – thời gian nào sau đây mô tả chuyển động có độ lớn gia tốc lớn nhất?
       <img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-5/image011.png" alt="Bốn đồ thị vận tốc theo thời gian, lần lượt là hình a, b, c và d">`,
      ['Hình a.', 'Hình b.', 'Hình c.', 'Hình d.']
    );
    so5.questions[9][3] = 'Trên đồ thị vận tốc – thời gian, độ lớn gia tốc bằng độ lớn hệ số góc của đường biểu diễn. Hình d có đường thẳng dốc nhất nên có độ lớn gia tốc lớn nhất.';

    setMc(so5, 10,
      `Cho bảng số liệu kết quả 5 lần đo đường kính một viên bi thép bằng thước kẹp:
       <div class="stats-table-responsive"><table class="stats-table exam-data-table"><thead><tr><th>Lần đo</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody><tr><th>d (mm)</th><td>6,32</td><td>6,32</td><td>6,34</td><td>6,24</td><td>6,32</td></tr></tbody></table></div>
       Giá trị trung bình của phép đo là`,
      ['6,308 mm.', '6,304 mm.', '6,299 mm.', '6,302 mm.']
    );
    so5.questions[10][3] = R`Giá trị trung bình là $\overline d=\dfrac{6{,}32+6{,}32+6{,}34+6{,}24+6{,}32}{5}=6{,}308\,\text{mm}$.`;

    setMc(so5, 11,
      `Chuyển động của một xe máy có đồ thị vận tốc – thời gian như hình vẽ. Chuyển động của xe máy là
       <img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-5/image012.png" alt="Đồ thị vận tốc theo thời gian gồm các đoạn OA, AB và BC">`,
      so5.questions[11][1]
    );
    so5.questions[11][3] = 'Đoạn OA dốc lên nên xe nhanh dần đều; đoạn AB nằm ngang nên xe chuyển động đều; đoạn BC dốc xuống nên xe chậm dần đều. Vì vậy chọn D.';

    setMc(so5, 12,
      R`Đồ thị vận tốc – thời gian của một vật chuyển động thẳng được cho như hình dưới. Quãng đường vật đi được sau $30\,\text{s}$ là
       <img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-5/image013.jpg" alt="Đồ thị vận tốc tăng đều từ 0 đến 10 mét trên giây trong 10 giây rồi giữ không đổi đến 30 giây">`,
      so5.questions[12][1]
    );
    so5.questions[12][3] = R`Quãng đường bằng diện tích dưới đồ thị: $s=\dfrac12\cdot10\cdot10+10\cdot20=250\,\text{m}$.`;

    setMc(so5, 14, R`Kết quả đo gia tốc rơi tự do là $g=(9{,}78\pm0{,}44)\,\text{m/s}^2$. Sai số tỉ đối của phép đo là`, [
      R`$4{,}0\%$.`, R`$4{,}5\%$.`, R`$5{,}0\%$.`, R`$3{,}5\%$.`
    ]);
    so5.questions[14][3] = R`Sai số tỉ đối $\delta g=\dfrac{\Delta g}{\overline g}\cdot100\%=\dfrac{0{,}44}{9{,}78}\cdot100\%\approx4{,}5\%$.`;

    setTf(so5, 2,
      R`Trong bài đo tốc độ trung bình của xe đồ chơi chuyển động thẳng, bạn An đo được thời gian $t=(1{,}25\pm0{,}03)\,\text{s}$ trên quãng đường $s=(250{,}0\pm0{,}5)\,\text{cm}$.`,
      [
        'Phép đo tốc độ là phép đo gián tiếp.',
        R`Sai số tỉ đối của phép đo thời gian là $0{,}03\,\text{s}$.`,
        R`Sai số tuyệt đối của phép đo chiều dài là $0{,}5\,\text{cm}$.`,
        R`Sai số tỉ đối của phép đo tốc độ là $4{,}4\%$.`
      ]
    );
    so5.essay[0].question += `<img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-5/image032.jpg" alt="Sơ đồ lộ trình ABC từ nhà đến trường">`;
    so5.questions[16][0] += `<img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-5/image028.png" alt="Đồ thị độ dịch chuyển theo thời gian của hai vật A và B, các đường tạo góc 30 và 60 độ">`;
  }

  const so4 = byId('vatli-10-tailieu-so-4');
  if (so4) {
    const picture = (name, alt) => `<img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-4/${name}" alt="${alt}">`;
    setMc(so4, 2, 'Biển báo nào sau đây mang ý nghĩa là nơi chứa chất phóng xạ?', [
      picture('image003.png', 'Biển cảnh báo phóng xạ'),
      picture('image004.png', 'Biển trang phục bảo hộ'),
      picture('image005.jpg', 'Biển cảnh báo chất độc'),
      picture('image006.png', 'Biển cảnh báo chất ăn mòn')
    ]);
    setMc(so4, 4, R`[NB] Sai số tuyệt đối trung bình của $n$ lần đo đại lượng vật lí $A$ được tính theo công thức`, [
      R`$A=\overline A\pm\Delta A$.`,
      R`$\delta A=\dfrac{\Delta A}{\overline A}\cdot100\%$.`,
      R`$\overline A=\dfrac{A_1+A_2+\cdots+A_n}{n}$.`,
      R`$\overline{\Delta A}=\dfrac{\Delta A_1+\Delta A_2+\cdots+\Delta A_n}{n}$.`
    ]);
    setMc(so4, 5, R`[TH] Kết quả đo gia tốc rơi tự do được viết dưới dạng $g=(9{,}78\pm0{,}44)\,\text{m/s}^2$. Sai số tỉ đối của phép đo là`, [
      R`$4{,}0\%$.`, R`$4{,}5\%$.`, R`$5{,}0\%$.`, R`$3{,}5\%$.`
    ]);
    setMc(so4, 6, `[VD] Trong giờ thực hành, một học sinh đo chu kì dao động của con lắc đơn bằng đồng hồ bấm giây. Kết quả 5 lần đo được cho ở bảng sau:
      <div class="stats-table-responsive"><table class="stats-table exam-data-table"><thead><tr><th>Lần đo</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody><tr><th>Chu kì T (s)</th><td>2,01</td><td>2,11</td><td>2,05</td><td>2,03</td><td>2,00</td></tr></tbody></table></div>
      Cho biết thang chia nhỏ nhất của đồng hồ là 0,02 s. Sai số tuyệt đối của phép đo này có giá trị là`, so4.questions[6][1]);
    so4.questions[6][3] = R`$\overline T=2{,}04\,\text{s}$. Sai số ngẫu nhiên trung bình là $(0{,}03+0{,}07+0{,}01+0{,}01+0{,}04)/5=0{,}032\,\text{s}$. Cộng sai số dụng cụ $0{,}01\,\text{s}$ rồi làm tròn được $0{,}04\,\text{s}$.`;
    so4.questions[10][0] = `Hình vẽ bên là đồ thị độ dịch chuyển – thời gian của một người đi bộ trên một đường thẳng. Trong giai đoạn OA, người đó ${picture('image017.png', 'Đồ thị độ dịch chuyển theo thời gian gồm đoạn OA tăng và AB giảm')}`;
    setMc(so4, 12, 'Gọi vật 1 là thuyền, vật 2 là dòng nước, vật 3 là bờ sông. Vận tốc của thuyền so với bờ sông được tính bằng biểu thức nào?', [
      R`$\vec v_{13}=\vec v_{12}+\vec v_{23}$.`, R`$\vec v_{13}=\vec v_{12}-\vec v_{23}$.`,
      R`$\vec v_{12}=\vec v_{13}+\vec v_{23}$.`, R`$\vec v_{23}=\vec v_{12}+\vec v_{13}$.`
    ]);
    so4.questions[13][0] = `Trong cuộc đuổi bắt giữa mèo và chuột được mô tả như hình vẽ. Vận tốc của chuột so với mèo là bao nhiêu km/h? ${picture('image022.png', 'Mèo chạy cùng chiều với chuột với vận tốc 40 km/h, chuột 10 km/h')}`;
    so4.questions[17][0] = `Trong thí nghiệm đo vận tốc của bi thép (3) chuyển động thẳng, cổng quang điện là bộ phận số mấy trong sơ đồ? ${picture('image024.png', 'Sơ đồ thí nghiệm gồm bi thép, thước và hai cổng quang điện số 7')}`;
    so4.tf[2].stem = `Bạn A đi học từ nhà đến trường theo lộ trình ABC (hình vẽ). Biết AB = 600 m trong 6 phút và BC = 800 m trong 4 phút. ${picture('image025.jpg', 'Lộ trình vuông góc từ nhà A qua B đến trường C')}`;
    so4.tf[1].items[3][0] = so4.tf[1].items[3][0].replace(/<br><img[^>]+>/, '');
    so4.tf[1].stem = so4.tf[1].stem.replace(/<img[^>]+>/g, '');
    so4.short[0].question = R`Khi phép đo khối lượng có sai số trung bình của các lần đo là $2{,}3\,\text{g}$ và sai số dụng cụ của cân là $0{,}5\,\text{g}$, sai số tuyệt đối của phép đo bằng bao nhiêu gam?`;
    so4.short[1].question = R`Hai anh em bơi trong bể bơi dài $20\,\text{m}$. Cả hai bơi từ đầu đến cuối bể; người em dừng lại, còn người anh quay về đầu bể. Người anh đã bơi bao nhiêu mét?`;
    so4.short[2].question = `Hình dưới là đồ thị độ dịch chuyển – thời gian của hai vật chuyển động thẳng cùng hướng. Tỉ lệ vận tốc vA/vB bằng bao nhiêu? (Viết kết quả với 2 chữ số có nghĩa.) ${picture('image029.png', 'Hai đồ thị độ dịch chuyển theo thời gian, A nghiêng 30 độ và B nghiêng 60 độ')}`;
    so4.short[3].question = R`Một chất điểm chuyển động trên trục $Ox$ có phương trình tọa độ – thời gian $x=35-5t$ (m). Quãng đường vật đi được trong $2\,\text{s}$ là bao nhiêu mét?`;
    so4.short[4].question = `Đồ thị tọa độ – thời gian của hai xe 1 và 2 được biểu diễn như hình. Hai xe gặp nhau tại vị trí cách vị trí xuất phát của xe 2 bao nhiêu km? ${picture('image031.png', 'Hai đường tọa độ thời gian cắt nhau tại t bằng 2 giờ và x bằng 40 km')}`;
    so4.short[5].question = R`Một máy bay bay theo hướng Bắc với vận tốc $200\,\text{m/s}$, gió thổi từ Tây sang Đông với vận tốc $10\,\text{m/s}$. Tính độ lớn vận tốc tổng hợp của máy bay theo m/s (làm tròn đến hàng đơn vị).`;
    so4.essay[0].question = `Đồ thị độ dịch chuyển theo thời gian của một chuyển động như hình vẽ. a) Tính quãng đường và độ dịch chuyển từ 0 đến 5 s. b) Tính vận tốc trung bình từ 1 s đến 2,5 s. ${picture('image033.png', 'Đồ thị độ dịch chuyển d tính bằng cm theo thời gian t tính bằng giây')}`;
  }

  const so3 = byId('vatli-10-tailieu-so-3');
  if (so3) {
    const picture = (name, alt) => `<img class="exam-inline-media exam-figure-media" src="supplied/physics-native/vatli-10-tailieu-so-3/${name}" alt="${alt}">`;
    setMc(so3, 9, `Hình bên là đồ thị độ dịch chuyển – thời gian của ô tô chuyển động thẳng theo một hướng xác định. Tốc độ lớn nhất của ô tô tương ứng với đoạn nào trên đồ thị? ${picture('image004.png', 'Đồ thị độ dịch chuyển theo thời gian gồm bốn đoạn đánh số 1 đến 4')}`, ['1.', '2.', '3.', '4.']);
    setMc(so3, 11, `Một xe ô tô đồ chơi chuyển động trên đường thẳng có đồ thị độ dịch chuyển – thời gian như hình bên. Tốc độ của xe ô tô đồ chơi tại thời điểm 10 s là ${picture('image006.png', 'Đồ thị độ dịch chuyển theo thời gian của ô tô đồ chơi')}`, ['0,7 m/s.', '1,5 m/s.', '0 m/s.', '1 m/s.']);
    setTf(so3, 0, `Khi chơi gôn (golf), người chơi cần đánh quả bóng gôn từ điểm xuất phát (Tee) sao cho quả bóng đến được lỗ (Hole) trong vùng xanh (Green). Biết điểm gần nhất của vùng xanh cách điểm xuất phát 250 m. Lấy $g=10\\,\\text{m/s}^2$. ${picture('image008.png', 'Sơ đồ đường bay của bóng gôn đến vùng xanh')}`, so3.tf[0].items.map(item => item[0].replace(/<br><img[^>]+>/, '').replace(/\s*\/\s*$/, '')));
    setTf(so3, 1, `Một thiết bị tạo ra các chấm trên một băng giấy chuyển động với khoảng thời gian giữa hai chấm liên tiếp là 0,02 s. Hình 1, Hình 2 và Hình 3 biểu diễn kết quả ba chuyển động thẳng của băng giấy. Mốc thời gian được chọn tại chấm 0. ${picture('image009.png', 'Ba băng giấy Hình 1, Hình 2 và Hình 3')}`, so3.tf[1].items.map(item => item[0].replace(/<br><img[^>]+>/, '').replace(/\s*\/\s*$/, '')));
    setTf(so3, 2, `Trong một tình huống bóng đá, thủ môn xuất phát từ vạch ngang nối hai cột của khung thành chạy thẳng lên phía trước để bắt bóng. Hình bên là đồ thị độ dịch chuyển – thời gian của thủ môn. Điểm A tương ứng với điểm xuất phát, đoạn AB có dạng parabol, BC là đoạn thẳng. ${picture('image010.png', 'Đồ thị độ dịch chuyển theo thời gian của thủ môn')}`, [so3.tf[2].items[0][0], so3.tf[2].items[1][0].replace(/<br><img[^>]+>/, ''), so3.tf[2].items[2][0], 'Từ 4 giây đến 6 giây, vận tốc chuyển động của thủ môn có giá trị $-10\\,\\text{m/s}$.']);
    setTf(so3, 3, `Từ tầng cao của một tòa nhà tại nơi có gia tốc trọng trường $g=9{,}8\\,\\text{m/s}^2$, một vật rơi tự do chạm mặt đất hết thời gian 3,00 s (lúc $t=0$ vật bắt đầu rơi, chiều dương là chiều chuyển động). ${picture('image013.png', 'Hình 4 đồ thị vận tốc thời gian và Hình 5 đồ thị độ dịch chuyển thời gian')}`, so3.tf[3].items.map(item => item[0].replace(/<br><img[^>]+>/, '').replace(/\s*\/\s*$/, '')));
    so3.short[3].question = R`Một viên đạn chuyển động có các thành phần vận tốc theo hai trục vuông góc $Ox$ và $Oy$ với độ lớn lần lượt $v_x=10\,\text{m/s}$ và $v_y=30\,\text{m/s}$. Góc tạo bởi vận tốc của viên đạn và phương $Oy$ là $\alpha$ có $\tan\alpha$ là bao nhiêu? (Kết quả lấy đến 2 chữ số có nghĩa).`;
    so3.short[5].question = `Chuyển động của hai viên bi $B_1$ và $B_2$ có đồ thị vận tốc – thời gian như hình bên. Gọi $s_1$ và $s_2$ là quãng đường đi được tương ứng của $B_1$ và $B_2$ trong cùng thời gian. Tỉ số $s_1/s_2$ là bao nhiêu? (Kết quả lấy đến 1 chữ số có nghĩa). ${picture('image025.png', 'Đồ thị vận tốc thời gian của hai viên bi B1 và B2')}`;
    so3.questions[3][0] = R`Một học sinh đo tốc độ trung bình của viên bi được giá trị $v=(2{,}50\pm0{,}04)\,\text{m/s}$. Sai số tỉ đối của phép đo này là`;
  }

  // Bộ hiển thị đã tự đánh số câu; bỏ nhãn "Câu n/Bài n" nằm trong dữ liệu nguồn
  // để không còn hiện lặp kiểu "Câu 10. Câu 10." ở mọi đề Vật lí nhập từ Word/PDF.
  const stripEmbeddedNumber = value => {
    if (typeof value !== 'string') return value;
    return value
      .replace(/^(?:\s*<br\s*\/?>(?:\s|&nbsp;)*)*((?:\s*<img\b[^>]*>\s*)*)(?:Câu|Bài)\s*\d+(?:\s*\([^)]*\))?\s*[.:]\s*/i, '$1')
      .replace(/<br>\s*HƯỚNG DẪN GIẢI VÀ ĐÁP ÁN[\s\S]*$/i, '')
      .replace(/\s*-{5,}\s*HẾT\s*-{5,}[\s\S]*$/i, '')
      .replace(/(?:…|\.){12,}/g, ' ')
      .trim();
  };
  (exams || []).forEach(exam => {
    (exam.questions || []).forEach(question => { if (Array.isArray(question)) question[0] = stripEmbeddedNumber(question[0]); });
    (exam.tf || []).forEach(group => { if (group) group.stem = stripEmbeddedNumber(group.stem); });
    (exam.short || []).forEach(question => { if (question) question.question = stripEmbeddedNumber(question.question); });
    (exam.essay || []).forEach(question => { if (question) question.question = stripEmbeddedNumber(question.question); });
  });
})(window.physicsPaperExams);
