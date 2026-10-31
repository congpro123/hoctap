// Bài luyện Toán 10 tự biên soạn theo chủ đề đề công khai ở miền Trung.
const mathSources=[
 ['THPT Quảng Trị','Quảng Trị','2025–2026','https://www.mathvn.com/2026/09/e-kiem-tra-giua-hoc-ky-1-mon-toan-lop_0716025804.html'],
 ['THPT Nguyễn Trãi – Hội An','Đà Nẵng','2025–2026','https://file.giaitoan.edu.vn/file-pdf/de-giua-ky-1-toan-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang.pdf'],
 ['THPT Huỳnh Thúc Kháng','Quảng Nam','2024–2025','https://file.giaitoan.edu.vn/file-pdf/de-giua-ky-1-toan-10-nam-2024-2025-truong-thpt-huynh-thuc-khang-quang-nam.pdf'],
 ['THPT Nguyễn Thái Bình','Đà Nẵng','2025–2026','https://metoan.com/post/de-thi-giua-ky-1-toan-10-nam-2025-2026-thpt-nguyen-thai-binh-da-nang-co-dap-an'],
 ['THPT Hùng Vương','Quảng Nam','2024–2025','https://www.scribd.com/document/864894087/de-giua-ky-1-toan-10-nam-2024-2025-truong-thpt-hung-vuong-quang-nam']
];
const mathBank=[
 ['Phủ định của mệnh đề “Mọi số tự nhiên đều không âm” là:',['Mọi số tự nhiên đều âm','Có số tự nhiên âm','Có số tự nhiên không âm','Không số tự nhiên nào âm'],1,'Phủ định của “mọi” là “tồn tại ít nhất một”.'],
 ['Mệnh đề nào sau đây đúng?',['2 là số nguyên tố','1 là số nguyên tố','4 là số nguyên tố','9 là số nguyên tố'],0,'2 chỉ có hai ước dương là 1 và 2.'],
 ['Phủ định của “x ≥ 3” là:',['x ≥ 3','x ≤ 3','x < 3','x > 3'],2,'Phủ định của ≥ là <.'],
 ['Tập A = {1,2,3}, B = {3,4}. Giao A ∩ B là:',['{1,2,3,4}','{3}','{1,2}','{4}'],1,'Phần tử chung là 3.'],
 ['Tập A = {1,2,3}, B = {3,4}. Hợp A ∪ B là:',['{3}','{1,2,3,4}','{1,2}','{4}'],1,'Hợp gồm mọi phần tử thuộc A hoặc B.'],
 ['Tập A = {1,2,3}, B = {2,3}. Hiệu A \\ B là:',['{1}','{2,3}','{1,2,3}','∅'],0,'Chỉ 1 thuộc A mà không thuộc B.'],
 ['Số phần tử của tập {a,b,c,d} là:',['2','3','4','5'],2,'Tập có bốn phần tử khác nhau.'],
 ['Tập nào là tập con của {1,2,3}?',['{1,3}','{0,1}','{2,4}','{1,4}'],0,'Cả 1 và 3 đều thuộc tập đã cho.'],
 ['Điểm (1,2) có thỏa mãn x + y ≤ 4 không?',['Có, vì 3 ≤ 4','Không, vì 3 > 4','Có, vì 1 ≤ 2','Không thể xác định'],0,'Thay x=1,y=2 được 3 ≤ 4.'],
 ['Cặp (2,1) có thỏa mãn 2x − y ≥ 3 không?',['Không','Có','Chỉ khi x = y','Không xác định'],1,'2×2−1=3.'],
 ['Bất phương trình nào là bậc nhất hai ẩn?',['x² + y ≥ 1','2x − 3y < 5','xy ≥ 2','x² + y² ≤ 4'],1,'Các ẩn chỉ có bậc một.'],
 ['Nghiệm của hệ x ≥ 0, y ≥ 0 nằm ở:',['Góc phần tư I và các trục dương','Góc phần tư II','Góc phần tư III','Chỉ gốc tọa độ'],0,'Cả hai tọa độ không âm.'],
 ['sin 30° bằng:',['1/2','√2/2','√3/2','1'],0,'Giá trị lượng giác cơ bản.'],
 ['cos 60° bằng:',['0','1/2','√2/2','1'],1,'cos 60° = 1/2.'],
 ['tan 45° bằng:',['0','1/2','1','√3'],2,'sin và cos 45° bằng nhau.'],
 ['sin²α + cos²α bằng:',['0','1','2','sin α'],1,'Đẳng thức lượng giác cơ bản.'],
 ['Trong tam giác ABC, tổng ba góc bằng:',['90°','180°','270°','360°'],1,'Tổng các góc trong tam giác là 180°.'],
 ['Tam giác có hai cạnh 3 và 4 vuông góc. Cạnh huyền bằng:',['5','6','7','12'],0,'Định lí Pythagore: √(3²+4²)=5.'],
 ['Định lí cosin cho cạnh a đối diện góc A là:',['a² = b² + c² − 2bc cos A','a² = b² + c² + 2bc cos A','a = b + c','a² = b² − c²'],0,'Hệ thức cosin chuẩn.'],
 ['Trong tam giác, diện tích theo hai cạnh b,c và góc xen giữa A là:',['bc sin A','½bc sin A','½bc cos A','2bc sin A'],1,'S = ½bc sin A.'],
 ['Với tam giác vuông có hai cạnh góc vuông 6 và 8, diện tích là:',['14','24','48','60'],1,'S = ½×6×8 = 24.'],
 ['Nếu A ∩ B = ∅ thì A và B:',['Bằng nhau','Không có phần tử chung','Đều rỗng','Có cùng số phần tử'],1,'Giao rỗng nghĩa là không có phần tử chung.'],
 ['Mệnh đề “Tồn tại số nguyên x sao cho x² = 4” là:',['Đúng','Sai','Không phải mệnh đề','Chỉ đúng khi x = 0'],0,'x=2 hoặc x=−2 thỏa mãn.'],
 ['Mệnh đề “Với mọi x thực, x² ≥ 0” là:',['Đúng','Sai','Không xác định','Chỉ đúng với x dương'],0,'Bình phương số thực không âm.'],
 ['Tập nghiệm của x ≥ 2 và x ≤ 5 là:',['[2;5]','(2;5)','[2;5)','(2;5]'],0,'Hai đầu mút đều được lấy.'],
 ['Tập nghiệm của x > 1 và x ≤ 4 là:',['[1;4]','(1;4]','(1;4)','[1;4)'],1,'1 không lấy, 4 được lấy.'],
 ['Nếu A có 2 phần tử thì số tập con của A là:',['2','3','4','8'],2,'Có 2² = 4 tập con.'],
 ['Nếu A có 3 phần tử thì số tập con của A là:',['3','6','8','9'],2,'Có 2³ = 8 tập con.'],
 ['Điểm (0,0) có thỏa mãn x + 2y ≤ 3 không?',['Có','Không','Chỉ khi y=3','Không xác định'],0,'0 ≤ 3.'],
 ['Điểm (2,2) có thỏa mãn x + y ≤ 3 không?',['Có','Không','Chỉ khi x=0','Không xác định'],1,'2+2=4 > 3.'],
 ['Trong tam giác, nếu a=5,b=5 và góc xen giữa bằng 60°, cạnh còn lại bằng:',['3','5','5√2','10'],1,'Định lí cosin: c²=25+25−50×½=25.'],
 ['Hai cạnh 4 và 6 tạo góc 30°. Diện tích tam giác bằng:',['3','6','12','24'],1,'½×4×6×sin30°=6.'],
 ['Tập nghiệm của x − y ≥ 0 gồm điểm nào?',['(1,2)','(2,1)','(0,1)','(−1,0)'],1,'2−1=1 ≥ 0.'],
 ['Một lớp có 18 bạn thích Toán, 15 bạn thích Lý và 5 bạn thích cả hai. Số bạn thích ít nhất một môn là:',['23','28','33','38'],1,'|A∪B|=18+15−5=28.'],
 ['Nếu sin α = 3/5 và α nhọn, cos α bằng:',['3/5','4/5','5/4','−4/5'],1,'cos α = √(1−9/25)=4/5.'],
 ['Trong tam giác có a=7,b=8,c=9. Nửa chu vi bằng:',['12','24','7','9'],0,'(7+8+9)/2=12.']
];
const mathTF=[
 {stem:'Cho A = {1,2,3}, B = {2,3,4}.',items:[['A ∩ B = {2,3}.',true],['A ∪ B có 4 phần tử.',true],['A \\ B = {1}.',true],['B là tập con của A.',false]]},
 {stem:'Xét mệnh đề và phủ định.',items:[['“2 là số chẵn” là mệnh đề đúng.',true],['Phủ định của x > 0 là x ≤ 0.',true],['Phủ định của “mọi” là “mọi”.',false],['“Có số thực x với x² = −1” là mệnh đề đúng.',false]]},
 {stem:'Xét bất phương trình x + y ≤ 5.',items:[['(2,3) là một nghiệm.',true],['(4,2) là một nghiệm.',false],['(0,0) là một nghiệm.',true],['Miền nghiệm chứa cả đường biên x+y=5.',true]]},
 {stem:'Cho tam giác vuông có hai cạnh góc vuông 3 và 4.',items:[['Cạnh huyền bằng 5.',true],['Diện tích bằng 6.',true],['Chu vi bằng 12.',true],['Cạnh huyền bằng 7.',false]]},
 {stem:'Xét các giá trị lượng giác cơ bản.',items:[['sin 30° = 1/2.',true],['cos 60° = 1/2.',true],['tan 45° = 1.',true],['sin²α + cos²α = 2.',false]]},
 {stem:'Cho A = [1;4], B = [3;6].',items:[['A ∩ B = [3;4].',true],['A ∪ B = [1;6].',true],['2 thuộc B.',false],['4 thuộc cả A và B.',true]]},
 {stem:'Xét hệ x ≥ 0 và y ≥ 0.',items:[['(1,2) là một nghiệm.',true],['(−1,2) là một nghiệm.',false],['(0,0) là một nghiệm.',true],['Mọi điểm trong góc phần tư III đều là nghiệm.',false]]},
 {stem:'Cho tam giác có hai cạnh 4 và 6 tạo góc 30°.',items:[['Diện tích bằng 6.',true],['Công thức diện tích dùng sin của góc xen giữa.',true],['Diện tích bằng 12.',false],['Góc 30° là góc nhọn.',true]]},
 {stem:'Xét tập hợp A = {0,1,2}.',items:[['A có 3 phần tử.',true],['∅ là tập con của A.',true],['A có 8 tập con.',true],['3 thuộc A.',false]]},
 {stem:'Xét định lí cosin trong tam giác ABC.',items:[['a² = b² + c² − 2bc cos A.',true],['Định lí dùng được với tam giác không vuông.',true],['Nếu A = 90° thì a² = b² + c².',true],['cos 90° = 1.',false]]}
];
const mathShort=[
 ['A có 3 phần tử. A có bao nhiêu tập con?',8,'','2³ = 8.'],
 ['Lớp có 18 bạn thích Toán, 15 bạn thích Lý và 5 bạn thích cả hai. Có bao nhiêu bạn thích ít nhất một môn?',28,'','18+15−5=28.'],
 ['Tam giác vuông có hai cạnh góc vuông 6 và 8. Diện tích bằng bao nhiêu?',24,'','½×6×8=24.'],
 ['Tam giác vuông có hai cạnh góc vuông 5 và 12. Cạnh huyền bằng bao nhiêu?',13,'','√(5²+12²)=13.'],
 ['Hai cạnh 4 và 6 tạo góc 30°. Diện tích tam giác bằng bao nhiêu?',6,'','½×4×6×½=6.'],
 ['Cho A={1,2,3,4}, B={3,4,5}. Giao A∩B có bao nhiêu phần tử?',2,'','Giao là {3,4}.'],
 ['Cho A={1,2,3,4}, B={3,4,5}. Hợp A∪B có bao nhiêu phần tử?',5,'','Hợp là {1,2,3,4,5}.'],
 ['Nếu sin α = 3/5 và α nhọn, hãy nhập 10 × cos α.',8,'','cos α=4/5 nên 10 cos α=8.'],
 ['Tập A có 4 phần tử. A có bao nhiêu tập con?',16,'','2⁴=16.'],
 ['Tam giác có cạnh dài 7, 8, 9. Nửa chu vi bằng bao nhiêu?',12,'','(7+8+9)/2=12.'],
 ['Có bao nhiêu cặp số trong {(0,0),(1,2),(2,2),(4,1)} thỏa x+y≤3?',2,'','Hai cặp đầu tiên thỏa mãn.'],
 ['Hai cạnh 5 và 5 tạo góc 60°. Cạnh đối diện góc 60° dài bao nhiêu?',5,'','Định lí cosin cho cạnh còn lại bằng 5.'],
 ['Cho A={1,2,3}, B={2,3,4}. Hiệu A\\B có bao nhiêu phần tử?',1,'','A\\B={1}.'],
 ['sin 30° + cos 60° bằng bao nhiêu?',1,'','½+½=1.'],
 ['Số nghiệm nguyên của 1≤x≤5 là bao nhiêu?',5,'','Các nghiệm là 1,2,3,4,5.']
];
const mathSelect=(pool,start,step,count)=>Array.from({length:count},(_,j)=>pool[(start+j*step)%pool.length]);
const mathExams=Array.from({length:10},(_,i)=>{const s=mathSources[i%mathSources.length];return {id:`TO10-GKI-${String(i+1).padStart(2,'0')}`,subject:'math',title:`Toán 10 · Giữa kì I — Đề ${String(i+1).padStart(2,'0')}`,description:`Mệnh đề, tập hợp, bất phương trình và hệ thức lượng · tham khảo ${s[1]}.`,minutes:90,source:{school:s[0],province:s[1],year:s[2],url:s[3],note:'Bài luyện tự biên soạn theo chủ đề nguồn; không phải bản sao nguyên đề hay đáp án chính thức.'},questions:mathSelect(mathBank,i*11,7,12),tf:mathSelect(mathTF,i*3,3,2),short:mathSelect(mathShort,i*7,4,3).map(([text,answer,unit,explain])=>({text,answer,unit,explain}))}});
