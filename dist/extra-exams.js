// Bài luyện tự biên soạn theo các chủ đề của đề công khai. Không sao chép nguyên đề.
const physicsSources=[
 ['THPT Hướng Hóa','Quảng Trị','2025–2026','https://www.vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-vat-li-10-thpt-huong-hoa-qt-2025-2026.jsp'],
 ['THPT Thị xã Quảng Trị','Quảng Trị','2024–2025','https://tailieu.vn/doc/de-thi-giua-ki-1-vat-ly-lop-10-thpt-quang-tri-2883834.html'],
 ['THPT Lê Lợi','Kon Tum','2024–2025','https://tailieu.vn/doc/de-thi-giua-ki-1-vat-ly-lop-10-le-loi-kon-tum-2841525.html'],
 ['THPT Lương Thế Vinh','Kon Tum','2024–2025','https://dev.tailieu.vn/doc/de-thi-giua-hoc-ki-1-mon-vat-ly-lop-10-nam-2024-2025-co-dap-an-truong-thpt-luong-the-vinh-kon-tum-2849370.html'],
 ['THPT Hùng Vương','Quảng Nam','2024–2025','https://thi247.com/de-giua-hoc-ky-1-vat-li-10-nam-2024-2025-truong-thpt-hung-vuong-quang-nam/'],
 ['THPT Lê Quý Đôn','Quảng Nam','2024–2025','https://cdn.tailieu.vn/files/samples/2024/20241121/gaupanda062/de_thi_giua_hoc_ki_1_mon_vat_ly_lop_10_nam_2024_2025_truong_thpt_le_quy_don_quang_nam_6264.pdf'],
 ['THPT Nguyễn Trãi','Đà Nẵng','2025–2026','https://vndethi.com/de-giua-hoc-ky-1-vat-li-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang/']
];
const chemistrySources=[
 ['THPT Hướng Hóa','Quảng Trị','2025–2026','https://2048.vn/quiz/de-thi-giua-ki-1-hoa-hoc-10-nam-2025-2026-thpt-huong-hoa-quang-tri-co-dap-an-157028'],
 ['THPT Nguyễn Trãi','Đà Nẵng','2025–2026','https://www.vietjack.com/de-kiem-tra-lop-10/de-thi-giua-ki-1-hoa-10-thpt-nguyen-trai-dn-2025-2026.jsp'],
 ['THPT Nguyễn Huệ','Quảng Nam','2024–2025','https://vndethi.com/de-giua-ki-1-hoa-hoc-10-nam-2024-2025-truong-thpt-nguyen-hue-quang-nam/'],
 ['THPT Hùng Vương','Quảng Nam','2024–2025','https://thi247.com/de-giua-hoc-ky-1-hoa-hoc-10-nam-2024-2025-truong-thpt-hung-vuong-quang-nam/'],
 ['THPT Tố Hữu','Quảng Nam','2024–2025','https://tailieu.vn/doc/de-thi-giua-ki-1-hoa-hoc-lop-10-to-huu-2866641.html']
];
const physicsBank=[
 ['Một xe đi 72 km trong 2 giờ. Tốc độ trung bình là:',['18 km/h','36 km/h','72 km/h','144 km/h'],1,'v = 72/2 = 36 km/h.'],
 ['Vật đi thẳng từ A đến B rồi quay lại A. Độ dịch chuyển cả hành trình là:',['0','AB','2AB','Không xác định'],0,'Vị trí đầu và cuối trùng nhau.'],
 ['Gia tốc trong chuyển động thẳng biến đổi đều có đặc điểm:',['Tăng liên tục','Không đổi','Luôn bằng 0','Đổi chiều sau mỗi giây'],1,'Chuyển động biến đổi đều có gia tốc không đổi.'],
 ['Đơn vị của gia tốc trong SI là:',['m/s','m/s²','km/h','m'],1,'Gia tốc có đơn vị m/s².'],
 ['Độ dốc của đồ thị vận tốc – thời gian cho biết:',['Quãng đường','Độ dịch chuyển','Gia tốc','Thời gian'],2,'a = Δv/Δt.'],
 ['Diện tích dưới đồ thị vận tốc – thời gian khi v dương cho biết:',['Độ dịch chuyển','Gia tốc','Vận tốc tức thời','Sai số'],0,'Diện tích đồ thị v–t cho độ dịch chuyển.'],
 ['Một vật từ nghỉ đạt 12 m/s sau 4 s. Gia tốc là:',['2 m/s²','3 m/s²','4 m/s²','48 m/s²'],1,'a = 12/4 = 3 m/s².'],
 ['Vật chuyển động đều với vận tốc 6 m/s trong 5 s. Độ dịch chuyển là:',['11 m','20 m','30 m','60 m'],2,'d = vt = 30 m.'],
 ['Tốc kế trên xe đang chạy cho biết:',['Vận tốc trung bình','Tốc độ tức thời','Gia tốc','Quãng đường'],1,'Tốc kế cho biết tốc độ tức thời.'],
 ['Quãng đường và độ lớn độ dịch chuyển bằng nhau khi vật:',['Đi theo đường tròn','Đi thẳng không đổi chiều','Quay về điểm đầu','Đổi chiều một lần'],1,'Đi thẳng một chiều thì hai đại lượng bằng nhau.'],
 ['Một phép đo ghi (50 ± 1) cm. Sai số tỉ đối là:',['0,5%','1%','2%','5%'],2,'1/50 × 100% = 2%.'],
 ['Khi phát hiện bạn bị điện giật trong phòng thí nghiệm, việc đầu tiên là:',['Chạm vào bạn','Ngắt nguồn điện','Đổ nước','Tiếp tục thí nghiệm'],1,'Phải ngắt nguồn điện trước khi hỗ trợ.'],
 ['Một vật rơi tự do gần mặt đất, bỏ qua cản không khí. Gia tốc có hướng:',['Lên trên','Nằm ngang','Xuống dưới','Thay đổi liên tục'],2,'Gia tốc trọng trường hướng xuống.'],
 ['Thả rơi vật từ nghỉ, lấy g = 10 m/s². Sau 2 s tốc độ là:',['5 m/s','10 m/s','20 m/s','40 m/s'],2,'v = gt = 20 m/s.'],
 ['Xe đang chạy 10 m/s, hãm đều với a = −2 m/s². Sau 3 s vận tốc là:',['4 m/s','6 m/s','8 m/s','16 m/s'],0,'v = 10 − 2×3 = 4 m/s.'],
 ['Một người đi 30 m Đông rồi 40 m Bắc. Độ lớn độ dịch chuyển là:',['10 m','50 m','70 m','120 m'],1,'√(30² + 40²) = 50 m.'],
 ['Vận tốc trung bình được tính bằng:',['Quãng đường / thời gian','Độ dịch chuyển / thời gian','Gia tốc × thời gian','Thời gian / quãng đường'],1,'Vận tốc trung bình dựa trên độ dịch chuyển.'],
 ['Một vật đi 100 m trong 20 s. Tốc độ trung bình là:',['2 m/s','4 m/s','5 m/s','20 m/s'],2,'100/20 = 5 m/s.'],
 ['Đồ thị độ dịch chuyển – thời gian nằm ngang thể hiện:',['Vật đứng yên','Nhanh dần','Chậm dần','Vật rơi tự do'],0,'Độ dịch chuyển không đổi theo thời gian.'],
 ['Vật tăng vận tốc từ 4 lên 10 m/s trong 3 s. Gia tốc là:',['1 m/s²','2 m/s²','3 m/s²','6 m/s²'],1,'(10−4)/3 = 2 m/s².'],
 ['Trong phương pháp thực nghiệm, bước nào dùng để kiểm chứng giả thuyết?',['Quan sát hoặc thí nghiệm','Chỉ suy đoán','Bỏ số liệu sai','Chép kết luận'],0,'Giả thuyết phải được kiểm tra bằng bằng chứng.'],
 ['Một vật chuyển động thẳng đều có gia tốc:',['Dương','Âm','Bằng 0','Không xác định'],2,'Vận tốc không đổi nên a = 0.'],
 ['Nếu vận tốc và gia tốc ngược chiều, tốc độ ban đầu của vật:',['Tăng','Giảm','Không đổi','Bằng 0'],1,'Gia tốc ngược chiều vận tốc làm vật chậm dần trong giai đoạn đầu.'],
 ['Một xe từ nghỉ, a = 2 m/s². Quãng đường sau 4 s là:',['8 m','12 m','16 m','32 m'],2,'s = ½at² = 16 m.']
];
physicsBank.push(
 ['Xe đang chạy 18 m/s và hãm đều đến khi dừng sau 27 m. Độ lớn gia tốc hãm là:',['3 m/s²','6 m/s²','9 m/s²','12 m/s²'],1,'0 = 18² + 2a×27 nên a = −6 m/s².'],
 ['Ca nô chạy 8 m/s so với nước, dòng chảy 2 m/s. Tốc độ xuôi dòng so với bờ là:',['6 m/s','8 m/s','10 m/s','16 m/s'],2,'Vận tốc xuôi dòng cộng: 8 + 2 = 10 m/s.'],
 ['Ca nô chạy 8 m/s so với nước, dòng chảy 2 m/s. Tốc độ ngược dòng so với bờ là:',['4 m/s','6 m/s','8 m/s','10 m/s'],1,'Vận tốc ngược dòng: 8 − 2 = 6 m/s.'],
 ['Vật từ nghỉ rơi tự do trong 4 s, g = 10 m/s². Quãng đường trong giây thứ tư là:',['20 m','25 m','30 m','35 m'],3,'s₄ − s₃ = ½g(4²−3²) = 35 m.'],
 ['Xe tăng vận tốc đều từ 2 m/s lên 10 m/s trong 4 s. Độ dịch chuyển là:',['16 m','20 m','24 m','40 m'],2,'Vận tốc trung bình 6 m/s, d = 6×4 = 24 m.'],
 ['Vận tốc thay đổi từ −4 m/s thành 2 m/s trong 3 s. Gia tốc theo chiều dương là:',['−2 m/s²','2 m/s²','−6 m/s²','6 m/s²'],1,'a = [2−(−4)]/3 = 2 m/s².'],
 ['Xe đi 30 km đầu với 30 km/h, 30 km sau với 60 km/h. Tốc độ trung bình cả chuyến là:',['40 km/h','45 km/h','50 km/h','60 km/h'],0,'Tổng 60 km trong 1,5 h nên vtb = 40 km/h.'],
 ['Một xe hãm đều từ 20 m/s với độ lớn gia tốc 4 m/s². Thời gian dừng là:',['4 s','5 s','6 s','8 s'],1,'t = (0−20)/(−4) = 5 s.'],
 ['Đồ thị v–t tăng tuyến tính từ 0 đến 12 m/s trong 6 s. Độ dịch chuyển là:',['18 m','24 m','36 m','72 m'],2,'Diện tích tam giác = ½×6×12 = 36 m.'],
 ['Vật đi 5 m Đông rồi 12 m Bắc trong 17 s. Độ lớn vận tốc trung bình là:',['1 m/s','13 m/s','17 m/s','0,76 m/s'],3,'Độ dịch chuyển 13 m; 13/17 ≈ 0,76 m/s.'],
 ['Phép đo có giá trị trung bình 80 cm và sai số tuyệt đối 2 cm. Sai số tỉ đối là:',['1,5%','2%','2,5%','4%'],2,'2/80×100% = 2,5%.'],
 ['Vật ném thẳng đứng lên với v₀ = 20 m/s, g = 10 m/s². Thời gian đến điểm cao nhất là:',['1 s','2 s','3 s','4 s'],1,'v = v₀ − gt = 0 nên t = 2 s.']
);
const physicsTF=[
 {stem:'Một xe đi 80 m trong 10 s theo đường thẳng, không đổi chiều.',items:[['Tốc độ trung bình là 8 m/s.',true],['Độ lớn độ dịch chuyển là 80 m.',true],['Vận tốc trung bình bằng 0.',false],['Thời gian chuyển động là 10 s.',true]]},
 {stem:'Một vật rơi tự do từ nghỉ, lấy g = 10 m/s².',items:[['Vật chuyển động nhanh dần.',true],['Gia tốc hướng lên.',false],['Sau 2 s vật rơi 20 m.',true],['Sau 2 s tốc độ là 40 m/s.',false]]},
 {stem:'Một xe giảm tốc đều từ 16 m/s xuống 8 m/s trong 4 s.',items:[['Gia tốc theo chiều chuyển động là −2 m/s².',true],['Tốc độ trung bình là 12 m/s.',true],['Quãng đường trong 4 s là 48 m.',true],['Xe đứng yên ở cuối khoảng thời gian.',false]]},
 {stem:'Một học sinh đi 50 m Đông rồi 20 m Tây.',items:[['Quãng đường là 70 m.',true],['Độ dịch chuyển là 30 m về Đông.',true],['Độ lớn độ dịch chuyển là 70 m.',false],['Học sinh quay về đúng vị trí ban đầu.',false]]},
 {stem:'Xét phép đo chiều dài (200 ± 4) cm.',items:[['Sai số tuyệt đối là 4 cm.',true],['Sai số tỉ đối là 2%.',true],['Giá trị đo là 204 cm.',false],['Sai số tuyệt đối không có đơn vị.',false]]},
 {stem:'Một xe đi thẳng đều với vận tốc 3 m/s theo chiều dương.',items:[['Mỗi giây xe đi được 3 m.',true],['Gia tốc bằng 3 m/s².',false],['Đồ thị d–t là đường thẳng dốc lên.',true],['Sau 5 s độ dịch chuyển là 15 m.',true]]},
 {stem:'Một vật tăng vận tốc đều từ 2 lên 8 m/s trong 3 s.',items:[['Gia tốc là 2 m/s².',true],['Vận tốc trung bình là 5 m/s.',true],['Độ dịch chuyển là 15 m.',true],['Vật chuyển động thẳng đều.',false]]},
 {stem:'Một xe có đồ thị vận tốc – thời gian là đường nằm ngang ở v = 5 m/s.',items:[['Vận tốc không đổi.',true],['Gia tốc bằng 0.',true],['Trong 4 s xe đi 20 m.',true],['Đồ thị d–t cũng nằm ngang.',false]]}
];
const physicsShort=[
 ['Một xe đi 150 m trong 30 s. Tốc độ trung bình bằng bao nhiêu m/s?',5,'m/s','150/30 = 5 m/s.'],
 ['Vật từ nghỉ, a = 3 m/s². Sau 4 s vận tốc bằng bao nhiêu m/s?',12,'m/s','v = at = 12 m/s.'],
 ['Thả rơi tự do từ nghỉ trong 2 s, g = 10 m/s². Quãng đường bằng bao nhiêu mét?',20,'m','s = ½gt² = 20 m.'],
 ['Một xe tăng vận tốc từ 5 lên 15 m/s trong 5 s. Gia tốc bằng bao nhiêu m/s²?',2,'m/s²','a = (15−5)/5 = 2 m/s².'],
 ['Một người đi 80 m Đông rồi 30 m Tây. Độ lớn độ dịch chuyển là bao nhiêu mét?',50,'m','80−30 = 50 m.'],
 ['Một phép đo ghi (100 ± 2) cm. Sai số tỉ đối bằng bao nhiêu phần trăm?',2,'%','2/100 × 100% = 2%.'],
 ['Xe đi đều 54 km trong 1,5 giờ. Tốc độ bằng bao nhiêu km/h?',36,'km/h','54/1,5 = 36 km/h.'],
 ['Vật đi đều với 4 m/s trong 7 s. Độ dịch chuyển bằng bao nhiêu mét?',28,'m','d = 4×7 = 28 m.'],
 ['Một vật giảm vận tốc từ 18 xuống 6 m/s trong 4 s. Độ lớn gia tốc là bao nhiêu m/s²?',3,'m/s²','|a| = |6−18|/4 = 3 m/s².'],
 ['Một người đi 6 m Đông rồi 8 m Bắc. Độ lớn độ dịch chuyển bằng bao nhiêu mét?',10,'m','√(6²+8²) = 10 m.'],
 ['Thả rơi vật từ nghỉ, g = 10 m/s². Sau 3 s tốc độ bằng bao nhiêu m/s?',30,'m/s','v = gt = 30 m/s.'],
 ['Xe từ nghỉ với a = 2 m/s². Sau 5 s quãng đường bằng bao nhiêu mét?',25,'m','s = ½×2×5² = 25 m.']
];
const chemistryBank=[
 ['Hạt mang điện tích dương trong hạt nhân là:',['Proton','Neutron','Electron','Photon'],0,'Proton mang điện tích +1.'],
 ['Hạt không mang điện trong hạt nhân là:',['Proton','Neutron','Electron','Ion'],1,'Neutron không mang điện.'],
 ['Ở nguyên tử trung hòa, số electron bằng:',['Số neutron','Số proton','Số khối','Số lớp electron'],1,'Tổng điện tích bằng 0 nên e = p.'],
 ['Số hiệu nguyên tử Z bằng:',['Số neutron','Số proton','Số khối','p + n'],1,'Z là số proton trong hạt nhân.'],
 ['Số khối A của nguyên tử bằng:',['p + n','p + e','n + e','p − n'],0,'A = p + n.'],
 ['Nguyên tử có Z = 8 có bao nhiêu electron khi trung hòa?',['6','8','10','16'],1,'e = Z = 8.'],
 ['Nguyên tử có 11 proton và 12 neutron có số khối:',['11','12','23','24'],2,'A = 11 + 12 = 23.'],
 ['Các đồng vị của cùng một nguyên tố có cùng:',['Số neutron','Số proton','Số khối','Khối lượng'],1,'Đồng vị cùng Z, khác số neutron.'],
 ['Hai đồng vị ³⁵Cl và ³⁷Cl khác nhau ở:',['Số proton','Số neutron','Số electron của nguyên tử trung hòa','Điện tích hạt nhân'],1,'Khác số khối do số neutron khác.'],
 ['Một orbital chứa tối đa bao nhiêu electron?',['1','2','6','8'],1,'Theo nguyên lí Pauli, một AO chứa tối đa 2 e.'],
 ['Phân lớp p có tối đa bao nhiêu electron?',['2','4','6','10'],2,'Ba AO p, mỗi AO tối đa 2 e.'],
 ['Phân lớp s có bao nhiêu orbital?',['1','2','3','5'],0,'Phân lớp s gồm 1 AO.'],
 ['Lớp electron thứ nhất chứa tối đa:',['2 e','8 e','18 e','32 e'],0,'n = 1 nên tối đa 2n² = 2 e.'],
 ['Lớp electron thứ hai chứa tối đa:',['2 e','6 e','8 e','18 e'],2,'n = 2 nên tối đa 8 e.'],
 ['Cấu hình electron của Na (Z = 11) là:',['1s²2s²2p⁶3s¹','1s²2s²2p⁵3s²','1s²2s²2p⁶3s²','1s²2s²2p⁷'],0,'Na có 11 e: 2 + 2 + 6 + 1.'],
 ['Cấu hình electron của Mg (Z = 12) kết thúc bằng:',['3s¹','3s²','3p¹','2p⁶'],1,'Mg: 1s²2s²2p⁶3s².'],
 ['Nguyên tố có Z = 17 thuộc chu kì:',['2','3','4','5'],1,'Cấu hình Cl có electron ở lớp 3.'],
 ['Nguyên tố có Z = 16 có bao nhiêu electron lớp ngoài cùng?',['2','4','6','8'],2,'S: 3s²3p⁴, tổng 6 e hóa trị.'],
 ['Nguyên tố có cấu hình ngoài cùng 3s¹ thuộc nhóm:',['IA','IIA','VIIA','VIIIA'],0,'Một electron s ngoài cùng thuộc nhóm IA.'],
 ['Nguyên tố có cấu hình ngoài cùng 3s²3p⁵ thuộc nhóm:',['VA','VIA','VIIA','VIIIA'],2,'Có 7 electron hóa trị, nhóm VIIA.'],
 ['Trong bảng tuần hoàn hiện đại, các nguyên tố được xếp theo chiều tăng của:',['Số neutron','Số khối','Điện tích hạt nhân','Nguyên tử khối'],2,'Thứ tự dựa trên số hiệu nguyên tử Z.'],
 ['Các nguyên tố trong cùng một chu kì có cùng:',['Số lớp electron','Số electron hóa trị','Số proton','Tính kim loại'],0,'Cùng chu kì có cùng số lớp e.'],
 ['Các nguyên tố nhóm A cùng nhóm thường có cùng:',['Số khối','Số lớp electron','Số electron hóa trị','Số neutron'],2,'Cùng nhóm A có số electron hóa trị giống nhau.'],
 ['Trong một chu kì từ trái sang phải, bán kính nguyên tử thường:',['Tăng','Giảm','Không đổi','Bằng 0'],1,'Điện tích hạt nhân tăng làm bán kính thường giảm.'],
 ['Trong một chu kì từ trái sang phải, tính kim loại thường:',['Tăng','Giảm','Không đổi','Không xác định'],1,'Khả năng nhường electron thường giảm.'],
 ['Trong nhóm IA từ trên xuống, bán kính nguyên tử thường:',['Giảm','Tăng','Không đổi','Bằng 0'],1,'Số lớp electron tăng nên bán kính tăng.'],
 ['Nguyên tử có 6 proton thuộc nguyên tố:',['Boron','Carbon','Nitrogen','Oxygen'],1,'Z = 6 là carbon.'],
 ['Nguyên tử có 13 proton và 14 neutron có số khối:',['13','14','27','28'],2,'A = 13 + 14 = 27.'],
 ['Ion Na⁺ có bao nhiêu electron?',['10','11','12','22'],0,'Na mất 1 e: 11 − 1 = 10.'],
 ['Ion Cl⁻ có bao nhiêu electron?',['16','17','18','35'],2,'Cl nhận 1 e: 17 + 1 = 18.'],
 ['Đồng vị ²⁴Mg có Z = 12. Số neutron là:',['10','12','24','36'],1,'n = A − Z = 12.'],
 ['Đồng vị ²⁷Al có Z = 13. Số neutron là:',['13','14','27','40'],1,'n = 27 − 13 = 14.'],
 ['Nguyên tử khối trung bình của hai đồng vị khối lượng 10 (20%) và 11 (80%) là:',['10,2','10,5','10,8','11,2'],2,'10×0,2 + 11×0,8 = 10,8.'],
 ['Nguyên tử khối trung bình của ³⁵Cl (75%) và ³⁷Cl (25%) là:',['35','35,5','36','37'],1,'35×0,75 + 37×0,25 = 35,5.'],
 ['Nguyên tố có Z = 9 thuộc nhóm:',['IA','IIA','VIA','VIIA'],3,'Fluorine có 7 e hóa trị, nhóm VIIA.'],
 ['Nguyên tố có Z = 10 thuộc nhóm:',['IA','IIA','VIIA','VIIIA'],3,'Neon có lớp ngoài cùng bão hòa, nhóm VIIIA.']
];
chemistryBank.push(
 ['Nguyên tử trung hòa có tổng p + n + e = 40 và n − p = 1. Số proton là:',['11','13','14','15'],1,'2p+n=40 và n=p+1 nên 3p+1=40, p=13.'],
 ['Hai đồng vị khối lượng 24 và 26 có tỉ lệ số nguyên tử 3:1. Nguyên tử khối trung bình là:',['24,2','24,5','25','25,5'],1,'(3×24+26)/4=24,5.'],
 ['Nguyên tử X có 3 lớp electron và 5 electron hóa trị. X thuộc:',['Chu kì 3, nhóm VA','Chu kì 5, nhóm IIIA','Chu kì 3, nhóm IIIA','Chu kì 5, nhóm VA'],0,'Số lớp là chu kì, số e hóa trị là nhóm A.'],
 ['Nguyên tử X có cấu hình 1s²2s²2p⁶3s²3p³. Số hiệu nguyên tử là:',['13','15','17','18'],1,'Tổng electron = 2+2+6+2+3 = 15.'],
 ['Một nguyên tử có 20 proton, 20 neutron và 20 electron. Tổng số hạt mang điện là:',['20','40','60','80'],1,'Hạt mang điện gồm proton và electron: 20+20=40.'],
 ['Ion X²⁺ có 10 electron. Nguyên tử X trung hòa có Z bằng:',['8','10','12','14'],2,'X mất 2 electron, nên nguyên tử có 12 e và Z = 12.'],
 ['Đồng vị ¹⁴C (Z = 6) có số neutron nhiều hơn đồng vị ¹²C bao nhiêu?',['1','2','6','14'],1,'¹⁴C có 8 n, ¹²C có 6 n; hơn 2.'],
 ['Nguyên tử khối trung bình là 10,2 từ đồng vị khối lượng 10 và 11. Tỉ lệ đồng vị khối lượng 11 là:',['10%','20%','50%','80%'],1,'10(1−x)+11x=10,2 nên x=0,2.'],
 ['Nguyên tố Z = 20 có cấu hình lớp ngoài cùng:',['3s²','3p⁶','4s¹','4s²'],3,'Ca: [Ar]4s².'],
 ['Nguyên tử X có tổng hạt mang điện là 34. Số hiệu nguyên tử là:',['16','17','18','34'],1,'Nguyên tử trung hòa có p=e, 2p=34 nên p=17.'],
 ['Hai nguyên tố liên tiếp trong cùng chu kì có Z = 11 và 12. Nguyên tố có bán kính lớn hơn thường là:',['Z = 11','Z = 12','Bằng nhau','Không thể so sánh'],0,'Trong chu kì, bán kính thường giảm khi Z tăng.'],
 ['Nguyên tử có 3 lớp electron, lớp ngoài cùng có 7 electron. Số hiệu nguyên tử là:',['7','9','15','17'],3,'Cấu hình lớp: 2,8,7 nên Z=17.']
);
const chemistryTF=[
 {stem:'Xét nguyên tử trung hòa của nguyên tố sodium (Z = 11).',items:[['Nguyên tử có 11 proton.',true],['Nguyên tử có 11 electron.',true],['Cấu hình ngoài cùng là 3s¹.',true],['Sodium thuộc nhóm VIIA.',false]]},
 {stem:'Xét đồng vị ²⁷Al với Z = 13.',items:[['Hạt nhân có 13 proton.',true],['Hạt nhân có 14 neutron.',true],['Nguyên tử trung hòa có 27 electron.',false],['Số khối bằng 27.',true]]},
 {stem:'Xét hai đồng vị ³⁵Cl và ³⁷Cl của chlorine.',items:[['Chúng có cùng số proton.',true],['Chúng có cùng số neutron.',false],['Nguyên tử trung hòa của cả hai có 17 electron.',true],['Số khối của chúng khác nhau.',true]]},
 {stem:'Xét nguyên tố sulfur (Z = 16).',items:[['Nguyên tử trung hòa có 16 electron.',true],['Lớp ngoài cùng có 6 electron.',true],['Sulfur ở chu kì 3.',true],['Sulfur thuộc nhóm IIA.',false]]},
 {stem:'Xét một orbital nguyên tử và phân lớp p.',items:[['Một AO chứa tối đa 2 electron.',true],['Phân lớp p có 3 orbital.',true],['Phân lớp p chứa tối đa 8 electron.',false],['Electron trong cùng AO có spin ngược nhau.',true]]},
 {stem:'Xét vị trí các nguyên tố trong bảng tuần hoàn.',items:[['Số thứ tự ô nguyên tố bằng Z.',true],['Các nguyên tố cùng chu kì có cùng số lớp electron.',true],['Các nguyên tố cùng nhóm A luôn có cùng số neutron.',false],['Các nguyên tố xếp theo chiều tăng Z.',true]]},
 {stem:'Xét nguyên tử magnesium (Z = 12).',items:[['Cấu hình electron kết thúc ở 3s².',true],['Magnesium có 2 electron hóa trị.',true],['Magnesium thuộc chu kì 2.',false],['Ion Mg²⁺ có 10 electron.',true]]},
 {stem:'Xét nguyên tử fluorine (Z = 9).',items:[['Fluorine có 9 proton.',true],['Fluorine có 7 electron lớp ngoài cùng.',true],['Fluorine thuộc nhóm VIIA.',true],['Ion F⁻ có 8 electron.',false]]},
 {stem:'Xét quy luật biến đổi trong bảng tuần hoàn.',items:[['Trong một chu kì, Z tăng từ trái sang phải.',true],['Bán kính nguyên tử thường giảm trong một chu kì.',true],['Tính kim loại thường tăng từ trái sang phải.',false],['Trong nhóm A từ trên xuống, số lớp electron tăng.',true]]},
 {stem:'Xét nguyên tử oxygen (Z = 8).',items:[['Nguyên tử trung hòa có 8 electron.',true],['Cấu hình electron là 1s²2s²2p⁴.',true],['Oxygen thuộc chu kì 3.',false],['Oxygen có 6 electron hóa trị.',true]]}
];
const chemistryShort=[
 ['Nguyên tử có 12 proton và 12 neutron. Số khối bằng bao nhiêu?',24,'','A = p + n = 24.'],
 ['Nguyên tử trung hòa có Z = 17. Số electron bằng bao nhiêu?',17,'','e = Z = 17.'],
 ['Đồng vị ²³Na có Z = 11. Số neutron bằng bao nhiêu?',12,'','n = 23 − 11 = 12.'],
 ['Ion Mg²⁺ được tạo từ Mg (Z = 12). Ion có bao nhiêu electron?',10,'','12 − 2 = 10 electron.'],
 ['Ion Cl⁻ được tạo từ Cl (Z = 17). Ion có bao nhiêu electron?',18,'','17 + 1 = 18 electron.'],
 ['Nguyên tử có 15 proton và 16 neutron. Số khối bằng bao nhiêu?',31,'','15 + 16 = 31.'],
 ['Nguyên tử khối trung bình của hai đồng vị khối lượng 10 (20%) và 11 (80%) là bao nhiêu?',10.8,'','10×0,2 + 11×0,8 = 10,8.'],
 ['Nguyên tử khối trung bình của ³⁵Cl (75%) và ³⁷Cl (25%) là bao nhiêu?',35.5,'','35×0,75 + 37×0,25 = 35,5.'],
 ['Phân lớp p chứa tối đa bao nhiêu electron?',6,'','3 orbital × 2 electron = 6.'],
 ['Lớp electron thứ hai chứa tối đa bao nhiêu electron?',8,'','2n² = 2×2² = 8.'],
 ['Nguyên tử có Z = 16 có bao nhiêu electron lớp ngoài cùng?',6,'','3s²3p⁴ gồm 6 electron.'],
 ['Một nguyên tử có 13 proton và 14 neutron. Số hạt mang điện trong nguyên tử trung hòa là bao nhiêu?',26,'','13 proton + 13 electron = 26.'],
 ['Nguyên tử có Z = 19 thuộc chu kì mấy?',4,'','Cấu hình kết thúc ở 4s¹ nên thuộc chu kì 4.'],
 ['Ion O²⁻ của oxygen (Z = 8) có bao nhiêu electron?',10,'','8 + 2 = 10 electron.'],
 ['Nguyên tử trung hòa có tổng số proton và electron bằng 20. Số hiệu nguyên tử là bao nhiêu?',10,'','p = e = 10, nên Z = 10.']
];
function selected(pool,start,step,count){return Array.from({length:count},(_,j)=>pool[(start+j*step)%pool.length])}
function shortObjects(rows){return rows.map(([text,answer,unit,explain])=>({text,answer,unit,explain}))}
const extraExams=[
 ...physicsSources.map((s,i)=>({id:`VL10-GKI-${String(i+4).padStart(2,'0')}`,subject:'physics',title:`Vật lý 10 · Giữa kì I — ${s[1]} · Đề ${i+4}`,description:`Bài luyện tham khảo chủ đề ${s[0]} (${s[2]}), mức độ từ cơ bản đến vận dụng.`,minutes:45,source:{school:s[0],province:s[1],year:s[2],url:s[3],note:'Bài luyện tự biên soạn theo chủ đề và mức độ nguồn; không phải bản sao nguyên đề hay đáp án chính thức.'},questions:selected(physicsBank,i*5,7,12),tf:selected(physicsTF,i*3,3,2),short:shortObjects(selected(physicsShort,i*4,5,3))})),
 ...Array.from({length:10},(_,i)=>{const s=chemistrySources[i%chemistrySources.length];return {id:`HH10-GKI-${String(i+1).padStart(2,'0')}`,subject:'chemistry',title:`Hóa học 10 · Giữa kì I — Đề ${String(i+1).padStart(2,'0')}`,description:`Cấu tạo nguyên tử, electron và bảng tuần hoàn · tham khảo ${s[1]}.`,minutes:45,source:{school:s[0],province:s[1],year:s[2],url:s[3],note:'Bài luyện tự biên soạn theo chủ đề nguồn; các phần đúng/sai và trả lời ngắn do trang bổ sung, không phải bản sao nguyên đề.'},questions:selected(chemistryBank,i*11,7,12),tf:selected(chemistryTF,i*3,3,2),short:shortObjects(selected(chemistryShort,i*7,4,3))}})
];
