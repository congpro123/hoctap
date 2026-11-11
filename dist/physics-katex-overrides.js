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
})(window.physicsPaperExams);
