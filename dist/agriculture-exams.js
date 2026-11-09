/**
 * 5 đề luyện giữa kì I Công nghệ nông nghiệp 10.
 * Ma trận mỗi đề: 20 MCQ (5đ) + 2 câu Đ/S, mỗi câu 4 ý (2đ) + 2 tự luận (3đ).
 * Nguồn kiến thức: 27 trang ảnh SGK do lớp cung cấp; cấu trúc: CNNN 10.pdf.
 */
const agricultureQuestionBanks = {
  lesson1: [
    ["Vai trò nào sau đây của trồng trọt góp phần trực tiếp bảo đảm an ninh lương thực?", ["Cung cấp lương thực cho con người", "Tạo nguyên liệu xây dựng", "Sản xuất thiết bị cơ khí", "Cung cấp khoáng sản"], 0, "Trồng trọt tạo ra lương thực, thực phẩm, qua đó góp phần trực tiếp bảo đảm an ninh lương thực."],
    ["Sản phẩm trồng trọt thúc đẩy chăn nuôi chủ yếu vì", ["cung cấp thức ăn cho vật nuôi", "làm tăng lượng khoáng sản", "thay thế hoàn toàn thuốc thú y", "làm giảm nhu cầu chế biến"], 0, "Nhiều nông sản và phụ phẩm trồng trọt là nguồn thức ăn quan trọng cho chăn nuôi."],
    ["Nhóm nào gồm toàn các nông sản xuất khẩu tiêu biểu được nêu trong bài học?", ["Gạo, cà phê, điều, hồ tiêu", "Than đá, dầu mỏ, khí đốt, sắt", "Thép, xi măng, gạch, kính", "Ô tô, máy tính, điện thoại, tàu thủy"], 0, "Bài học nêu gạo, cà phê, điều, hồ tiêu, chè, rau và quả là các nông sản xuất khẩu tiêu biểu."],
    ["Lợi ích nổi bật của tưới nhỏ giọt tự động là", ["đưa nước đến cây có kiểm soát, sử dụng nước hiệu quả", "làm cây không còn cần ánh sáng", "thay thế mọi chất dinh dưỡng", "loại bỏ hoàn toàn sâu bệnh"], 0, "Tưới nhỏ giọt là thành tựu công nghệ cao giúp cấp nước có kiểm soát và tiết kiệm tài nguyên."],
    ["Nội dung nào phù hợp với triển vọng của trồng trọt công nghệ cao?", ["Giảm phụ thuộc thời tiết và chủ động sản xuất", "Tăng hoàn toàn lao động thủ công", "Chỉ sản xuất được đúng một mùa", "Không cần theo dõi chất lượng sản phẩm"], 0, "Nhà kính, tự động hóa và các công nghệ điều khiển giúp chủ động điều kiện sản xuất, giảm phụ thuộc thời tiết."],
    ["Trong nông nghiệp 4.0, tổ hợp công nghệ nào được sử dụng?", ["IoT, trí tuệ nhân tạo và tự động hóa", "Chỉ sức kéo động vật", "Chỉ dụng cụ cầm tay", "Chỉ kinh nghiệm truyền miệng"], 0, "Nông nghiệp 4.0 sử dụng IoT, AI, tự động hóa cùng công nghệ nano, sinh học và chiếu sáng."],
    ["Ví dụ nào là thành tựu trồng trọt công nghệ cao ở Việt Nam?", ["Thủy canh, khí canh và nhà kính", "Khai thác than hầm lò", "Luyện gang trong lò cao", "Đóng tàu biển"], 0, "Thủy canh, khí canh, tưới tự động và nhà kính là các thành tựu tiêu biểu trong trồng trọt."],
    ["Yêu cầu nào đầy đủ nhất đối với người lao động trong trồng trọt?", ["Có sức khỏe, kiến thức – kĩ năng, trách nhiệm và ý thức an toàn", "Chỉ cần có sức khỏe", "Chỉ cần yêu thiên nhiên", "Không cần biết vận hành thiết bị"], 0, "Người lao động cần đồng thời có phẩm chất, sức khỏe, tri thức, kĩ năng thiết bị và tuân thủ an toàn – môi trường."],
    ["Việc cơ giới hóa khâu thu hoạch có ý nghĩa chủ yếu là", ["giảm sức lao động và tăng hiệu quả sản xuất", "làm nông sản không cần chế biến", "xóa bỏ hoàn toàn rủi ro", "làm đất tự tăng dinh dưỡng"], 0, "Cơ giới hóa giúp giảm lao động thủ công, rút ngắn thời gian và nâng hiệu quả."],
    ["Trang trại trong nhà ở Miyagi (Nhật Bản) là ví dụ về", ["trồng cây nhiều tầng dưới đèn LED", "trồng lúa hoàn toàn ngoài trời", "nuôi cá biển xa bờ", "khai thác lâm sản"], 0, "Bài học nêu mô hình trồng cây trong nhà, nhiều tầng, dùng đèn LED tại Miyagi."],
    ["Hành vi nào phù hợp nhất với yêu cầu bảo vệ môi trường trong trồng trọt?", ["Vận hành thiết bị đúng quy trình và xử lí chất thải phù hợp", "Tùy tiện xả bao bì thuốc xuống kênh", "Đốt mọi phụ phẩm trên đồng", "Dùng hóa chất không theo hướng dẫn"], 0, "Tuân thủ an toàn lao động và bảo vệ môi trường là yêu cầu bắt buộc đối với người lao động."],
    ["Công nghệ cao giúp khắc phục tính mùa vụ chủ yếu nhờ", ["điều khiển được một phần điều kiện sinh trưởng", "làm cây không cần nước", "loại bỏ hoàn toàn nhiệt độ", "biến mọi cây thành cây lâu năm"], 0, "Nhà kính, chiếu sáng và tưới tự động giúp điều khiển môi trường, chủ động sản xuất ngoài điều kiện mùa vụ tự nhiên."],
  ],
  lesson2: [
    ["Cây trồng là", ["cây đã được con người thuần hóa và chọn lọc để sản xuất nông nghiệp", "mọi cây mọc tự nhiên trong rừng", "chỉ những cây thân gỗ", "chỉ những cây dùng làm lương thực"], 0, "Cây trồng là những loài cây được thuần hóa, chọn lọc và đưa vào sản xuất để tạo sản phẩm."],
    ["Cây nào thuộc nhóm cây có nguồn gốc ôn đới theo ví dụ trong bài học?", ["Dâu tây", "Mít", "Xoài", "Ổi"], 0, "Dâu tây, mận, lê và đào là các ví dụ cây ôn đới trong tài liệu."],
    ["Đặc điểm nổi bật của cây nguồn gốc nhiệt đới là", ["khó thích nghi với rét và sương giá", "chỉ sống được nơi có tuyết", "luôn cần mùa đông lạnh để ra hoa", "không cần nhiệt"], 0, "Cây nhiệt đới thường không thích nghi với điều kiện lạnh và sương giá."],
    ["Cây cận nhiệt đới thường", ["cần một giai đoạn lạnh nhất định để ra hoa, kết quả", "không bao giờ chịu được mùa hè nóng ẩm", "chỉ sống ở vùng cực", "không chịu tác động của nhiệt độ"], 0, "Nhiều cây cận nhiệt đới sinh trưởng trong điều kiện gần nhiệt đới nhưng cần lạnh ở mức nhất định để ra hoa, quả."],
    ["Cặp phân loại nào dựa vào thời gian sống của cây?", ["Hằng năm và lâu năm", "Thân thảo và thân gỗ", "Một lá mầm và hai lá mầm", "Ôn đới và nhiệt đới"], 0, "Hằng năm – lâu năm là cách phân loại theo thời gian sống."],
    ["Phân loại cây thành một lá mầm và hai lá mầm dựa trên", ["số lá mầm", "chiều cao thân", "màu sắc hoa", "nơi trồng"], 0, "Đây là cách phân loại theo đặc tính sinh vật học: số lá mầm."],
    ["Vai trò trực tiếp của ánh sáng đối với cây là", ["cung cấp điều kiện cho quang hợp tạo chất hữu cơ", "thay thế toàn bộ nước", "cung cấp mọi nguyên tố khoáng", "làm rễ không cần hô hấp"], 0, "Ánh sáng là điều kiện cần cho quang hợp, tích lũy chất hữu cơ và sinh trưởng."],
    ["Quang chu kì là", ["độ dài thời gian chiếu sáng trong ngày", "độ ẩm của đất", "tỉ lệ hạt cát", "lượng phân bón mỗi vụ"], 0, "Quang chu kì là độ dài ngày và có thể ảnh hưởng đến sự ra hoa."],
    ["Khoảng nhiệt độ thích hợp đối với phần lớn cây trồng được nêu trong bài là", ["15–40°C", "0–5°C", "45–70°C", "trên 80°C"], 0, "Theo tài liệu lớp cung cấp, phần lớn cây trồng thích hợp ở khoảng 15–40°C."],
    ["Nước không có vai trò nào sau đây đối với cây?", ["Thay thế hoàn toàn ánh sáng trong quang hợp", "Tham gia trực tiếp vào quang hợp", "Hòa tan chất khoáng", "Điều hòa nhiệt qua thoát hơi nước"], 0, "Nước không thể thay thế ánh sáng. Ba phương án còn lại đều là vai trò của nước."],
    ["Khi đất bị ngập úng kéo dài, cây có thể chết vì", ["rễ thiếu ôxi và hoạt động sinh lí bị rối loạn", "rễ luôn nhận quá nhiều ôxi", "quang chu kì tăng vô hạn", "hạt cát biến thành hạt sét"], 0, "Thừa nước lâu làm khe hở đất bị nước chiếm, giảm ôxi cho rễ và gây úng."],
    ["Biện pháp nào vận dụng đúng hiểu biết về nhu cầu nhiệt?", ["Bố trí mùa vụ và vùng trồng phù hợp từng loài", "Trồng mọi giống cùng một thời điểm", "Không cần quan tâm giai đoạn sinh trưởng", "Luôn giữ nhiệt độ cao nhất có thể"], 0, "Nhu cầu nhiệt khác theo loài và giai đoạn, nên phải chọn mùa vụ và vùng trồng phù hợp."],
  ],
  lesson3: [
    ["Đất trồng được hiểu là", ["lớp bề mặt tơi xốp của vỏ Trái Đất, nơi cây sống và tạo sản phẩm", "toàn bộ lõi Trái Đất", "chỉ phần đá chưa phong hóa", "mọi loại vật liệu xây dựng"], 0, "Đây là khái niệm đất trồng trong bài học."],
    ["Nhân tố nào tham gia quá trình hình thành đất?", ["Đá mẹ, khí hậu, địa hình, sinh vật, thời gian và con người", "Chỉ ánh sáng", "Chỉ con người", "Chỉ nước tưới"], 0, "Đất hình thành từ đá mẹ dưới tác động tổng hợp của khí hậu, địa hình, sinh vật, thời gian và con người."],
    ["Thành phần nào chiếm tỉ lệ chủ yếu trong phần rắn của đất?", ["Chất vô cơ, khoảng 95%", "Chất hữu cơ, khoảng 95%", "Không khí, khoảng 95%", "Nước, khoảng 95%"], 0, "Phần rắn gồm chất vô cơ khoảng 95% và chất hữu cơ dưới 5%."],
    ["Vai trò quan trọng của phần khí trong đất là", ["cung cấp ôxi cho rễ và vi sinh vật hô hấp", "hòa tan toàn bộ đá mẹ", "thay thế phần lỏng", "làm cây không cần dinh dưỡng"], 0, "Không khí trong khe hở đất chứa O₂, N₂, CO₂ và hơi nước; O₂ cần cho hô hấp rễ và vi sinh vật."],
    ["Sinh vật đất góp phần nâng độ phì nhờ", ["phân giải tàn dư và chuyển hóa chất dinh dưỡng", "loại bỏ hoàn toàn phần hữu cơ", "làm đất không còn khe hở", "ngăn mọi trao đổi ion"], 0, "Sinh vật đất phân giải xác hữu cơ, chuyển hóa dinh dưỡng và góp phần cải thiện đất."],
    ["Keo đất là những hạt", ["rất nhỏ, khoảng 1 μm, không tan mà lơ lửng trong nước", "lớn hơn hạt cát và tan hoàn toàn", "chỉ gồm chất khí", "không có khả năng hấp phụ"], 0, "Keo đất có kích thước rất nhỏ, tồn tại lơ lửng và có khả năng hấp phụ, trao đổi ion."],
    ["Thứ tự kích thước hạt từ lớn đến nhỏ là", ["Cát → limon → sét", "Sét → limon → cát", "Limon → cát → sét", "Cát → sét → limon"], 0, "Cát: 0,02–2 mm; limon: 0,002–0,02 mm; sét: nhỏ hơn 0,002 mm."],
    ["Đất có tỉ lệ hạt nhỏ càng cao thường", ["giữ nước và dinh dưỡng càng tốt", "giữ nước càng kém", "không thể giữ ion", "luôn thoát nước nhanh hơn"], 0, "Hạt nhỏ giúp đất tăng khả năng giữ nước và chất dinh dưỡng."],
    ["Đất chua có đặc điểm", ["H⁺ lớn hơn OH⁻ và pH dưới 6,6", "H⁺ bằng OH⁻ và pH 7", "OH⁻ lớn hơn H⁺ và pH trên 7,5", "không chứa ion"], 0, "Theo tài liệu: đất chua có H⁺ > OH⁻, pH < 6,6."],
    ["Khoảng pH của đất trung tính theo bài học là", ["6,6–7,5", "dưới 4,0", "trên 9,0", "0–2,0"], 0, "Tài liệu quy ước đất trung tính có pH 6,6–7,5."],
    ["Đất kiềm thường có", ["OH⁻ lớn hơn H⁺ và pH trên 7,5", "H⁺ lớn hơn OH⁻ và pH dưới 6,6", "H⁺ bằng OH⁻ ở mọi pH", "không có nước"], 0, "Đất kiềm có OH⁻ > H⁺ và pH > 7,5."],
    ["Căn cứ chủ yếu để chia đất cát, đất thịt và đất sét là", ["tỉ lệ cát, limon và sét", "màu lá cây", "số giờ chiếu sáng", "loại máy làm đất"], 0, "Thành phần cơ giới được xác định theo tỉ lệ ba nhóm hạt cát, limon và sét."],
  ],
  lesson4: [
    ["Nguyên nhân tự nhiên quan trọng làm đất chua là", ["mưa rửa trôi các cation kiềm Ca²⁺, Mg²⁺, K⁺", "ánh sáng làm tăng pH vô hạn", "hạt cát chuyển thành phân bón", "rễ cây tạo thêm đá mẹ"], 0, "Mưa nhiều làm rửa trôi các cation bazơ, khiến đất dễ hóa chua."],
    ["Loại phân nào được nêu là có thể để lại gốc axit làm đất chua?", ["Amoni sunfat", "Phân hữu cơ hoai mục", "Phân xanh", "Chế phẩm vi sinh"], 0, "Amoni sunfat và kali clorua là ví dụ phân sinh lí chua trong bài."],
    ["Tác dụng quan trọng của bón vôi cho đất chua là", ["trung hòa độ chua và hạn chế độc Al³⁺, Fe³⁺", "làm đất chua hơn", "làm mọi vi sinh vật biến mất", "thay thế hoàn toàn nước tưới"], 0, "Vôi làm tăng pH, kết tủa Al³⁺/Fe³⁺ di động, hạn chế độc và cố định lân."],
    ["Biện pháp canh tác phù hợp để hạn chế đất bị chua, rửa trôi ở nơi dốc là", ["che phủ đất và hạn chế làm đất trong mùa mưa", "cày xới liên tục khi mưa lớn", "để đất trống quanh năm", "chỉ bón phân sinh lí chua"], 0, "Che phủ và giảm xáo trộn mùa mưa giúp hạn chế xói mòn, rửa trôi."],
    ["Đặc điểm nào đúng với đất xám bạc màu?", ["Tầng canh tác mỏng, cơ giới nhẹ, nghèo dinh dưỡng và chua", "Tầng canh tác dày, rất giàu mùn", "Luôn có pH trên 9", "Thành phần cơ giới rất nặng và giàu dinh dưỡng"], 0, "Đất xám bạc màu có tầng canh tác mỏng, cơ giới nhẹ, nghèo dinh dưỡng, chua và ít vi sinh vật có ích."],
    ["Nguyên nhân do canh tác làm đất xám bạc màu là", ["độc canh lâu năm và làm đất, bố trí mùa vụ không hợp lí", "luân canh với cây họ Đậu", "bổ sung phân hữu cơ", "che phủ đất"], 0, "Độc canh và canh tác không hợp lí làm mất cân đối, rửa trôi dinh dưỡng và suy giảm độ phì."],
    ["Biện pháp nào vừa tăng thu nhập vừa góp phần cải tạo đất xám bạc màu?", ["Xen canh, luân canh với cây họ Đậu", "Để đất trống mùa mưa", "Độc canh một giống nhiều năm", "Chỉ tăng lượng phân sinh lí chua"], 0, "Cây họ Đậu trong hệ thống luân canh/xen canh hỗ trợ cải thiện đất và đa dạng sản phẩm."],
    ["Độ phì của đất là khả năng", ["đáp ứng nhu cầu cây về dinh dưỡng, nước, khí, nhiệt và môi trường lí – hóa phù hợp", "chỉ giữ cây đứng thẳng", "chỉ cung cấp nước", "chỉ quyết định màu đất"], 0, "Độ phì là khái niệm tổng hợp, không chỉ nói về lượng phân hay lượng nước."],
    ["Bón phân hữu cơ cho đất xám bạc màu có tác dụng chủ yếu là", ["bổ sung chất hữu cơ, dinh dưỡng và nâng độ phì", "làm tầng canh tác mỏng hơn", "tăng rửa trôi", "làm đất mất hoàn toàn vi sinh vật"], 0, "Phân hữu cơ bổ sung mùn, dinh dưỡng và góp phần cải thiện tính chất đất."],
    ["Tưới, tiêu hợp lí trên đất xám bạc màu nhằm", ["cung cấp nước nhưng hạn chế rửa trôi dinh dưỡng", "rửa trôi toàn bộ phân bón", "giữ đất luôn ngập", "không cho rễ hô hấp"], 0, "Chế độ nước hợp lí vừa phục vụ cây vừa hạn chế thất thoát dinh dưỡng."],
  ],
  lesson5: [
    ["Giá thể trồng cây là", ["vật liệu tạo môi trường giữ nước, thoáng khí cho hạt và rễ", "chỉ là phân hóa học", "mọi loại đá xây dựng", "chỉ là nước tinh khiết"], 0, "Giá thể là vật liệu dùng để trồng cây, hỗ trợ giữ nước, thông khí, nảy mầm và phát triển rễ."],
    ["Nhóm nào gồm toàn giá thể hữu cơ tự nhiên?", ["Than bùn, xơ dừa, trấu hun", "Perlite, gốm, sắt", "Cát, thép, kính", "Perlite, nhựa, đồng"], 0, "Than bùn, mùn cưa, trấu hun và xơ dừa thuộc nhóm hữu cơ tự nhiên."],
    ["Than bùn được hình thành chủ yếu từ", ["xác thực vật phân hủy trong điều kiện yếm khí", "quặng nung ở 850°C", "đất sét nung ở 1300°C", "vỏ trấu cháy hoàn toàn thành tro"], 0, "Than bùn là sản phẩm phân hủy xác thực vật trong điều kiện thiếu ôxi."],
    ["Hạn chế chính của giá thể than bùn là", ["nghèo các chất dinh dưỡng thiết yếu nên cần bổ sung", "quá nặng và không giữ nước", "không có độ xốp", "không thể phối trộn"], 0, "Than bùn xốp, giữ ẩm và dinh dưỡng tốt nhưng bản thân thiếu dinh dưỡng thiết yếu."],
    ["Trấu hun được tạo ra bằng cách", ["đốt vỏ trấu trong điều kiện yếm khí", "ngâm quặng trong axit", "nung đất sét ở 1300°C", "phơi vỏ dừa rồi dùng ngay"], 0, "Hun yếm khí giúp giữ lại cấu trúc xốp của vỏ trấu."],
    ["Ưu điểm đặc trưng của trấu hun là", ["sạch, xốp, giữ nước – phân và có hàm lượng kali cao", "rất giàu mọi chất dinh dưỡng", "không hấp thụ nhiệt", "không cần xử lí"], 0, "Trấu hun sạch, tơi xốp, giữ nước/phân và có K; tuy nhiên vẫn nghèo dinh dưỡng tổng thể."],
    ["Xơ dừa cần được xử lí trước khi dùng chủ yếu để", ["loại tannin và lignin có thể gây cản trở rễ", "tăng lượng kim loại nặng", "làm mất hoàn toàn độ xốp", "biến thành perlite"], 0, "Tannin và lignin khó phân hủy có thể cản trở hấp thu nước, dinh dưỡng của rễ."],
    ["Trong quy trình xử lí xơ dừa, tỉ lệ nước vôi được nêu là", ["2 kg vôi/100 L nước", "20 kg vôi/1 L nước", "1 kg vôi/1 L nước", "không sử dụng vôi"], 0, "Sau khi ngâm nước 2–3 ngày, xơ dừa được ngâm nước vôi 5–7 ngày với tỉ lệ 2 kg vôi/100 L nước."],
    ["Perlite được sản xuất bằng cách", ["nghiền quặng perlite 0,2–1 mm rồi nung 800–850°C", "hun vỏ trấu yếm khí", "ngâm vỏ dừa trong nước vôi", "ủ xác thực vật yếm khí"], 0, "Perlite là vật liệu khoáng được nghiền và nung nở ở nhiệt độ 800–850°C."],
    ["Thành phần chính của perlite là", ["SiO₂", "NaCl", "đường glucose", "protein"], 0, "Perlite có thành phần chủ yếu là silicon dioxide (SiO₂)."],
    ["Hạn chế cần lưu ý của perlite là", ["có thể giải phóng nhôm làm giảm pH", "không tạo độ thoáng", "luôn mang nhiều mầm bệnh", "không thể giữ nước"], 0, "Một hạn chế của perlite trong tài liệu là khả năng giải phóng nhôm, làm pH giảm."],
    ["Điểm giống nhau phù hợp nhất giữa than bùn, xơ dừa và trấu hun là", ["đều có thể tạo độ xốp và hỗ trợ giữ ẩm cho vùng rễ", "đều là quặng khoáng", "đều giàu đủ mọi dinh dưỡng", "đều không cần xử lí"], 0, "Ba giá thể hữu cơ đều giúp tạo môi trường rễ tơi xốp; mỗi loại vẫn có hạn chế và quy trình xử lí riêng."],
    ["Thứ tự đúng trong sản xuất than bùn làm giá thể là", ["Thu gom → phơi, nghiền → phối vôi/phụ gia/vi sinh và ủ → kiểm tra, đóng gói", "Nung quặng → ngâm vôi → hun trấu", "Ngâm nước → nung 850°C → đóng gói", "Dùng trực tiếp → thu gom → nghiền"], 0, "Quy trình than bùn gồm xử lí cơ học, phối trộn – ủ, rồi kiểm tra và đóng gói."],
    ["Ưu điểm của xơ dừa đã xử lí là", ["nhẹ, xốp, thoáng, giữ ẩm và thoát nước nhanh", "không có khe hở khí", "luôn gây độc cho rễ", "không hỗ trợ vi sinh vật"], 0, "Xơ dừa xử lí đúng tạo môi trường nhẹ, thoáng, giữ ẩm và thoát nước tốt cho rễ."],
  ]
};

function agriculturePick(bankName, start, count) {
  const bank = agricultureQuestionBanks[bankName];
  return Array.from({ length: count }, (_, index) => bank[(start + index) % bank.length].map((value, part) => part === 1 ? [...value] : value));
}

// Phân bố đáp án đúng đều ở A/B/C/D để đề luyện không tạo thói quen đoán vị trí.
function agriculturePlaceCorrect(question, targetIndex) {
  const options = [...question[1]];
  const correctOption = options.splice(question[2], 1)[0];
  options.splice(targetIndex, 0, correctOption);
  return [question[0], options, targetIndex, question[3]];
}

const agricultureTfSets = [
  [
    { stem: "Một lớp theo dõi ảnh hưởng của ánh sáng đến cây trồng trong nhà kính.", items: [
      ["Ánh sáng là điều kiện cần cho quang hợp và tích lũy chất hữu cơ.", true, "Ánh sáng cung cấp năng lượng cho quang hợp."],
      ["Mọi loài cây đều cần cùng một cường độ ánh sáng.", false, "Nhu cầu cường độ ánh sáng khác nhau giữa các loài."],
      ["Độ dài chiếu sáng trong ngày có thể ảnh hưởng sự ra hoa.", true, "Đó là tác động của quang chu kì."],
      ["Chỉ rễ cây, không phải phần trên mặt đất, chịu ảnh hưởng của ánh sáng.", false, "Ánh sáng tác động trực tiếp đến bộ phận quang hợp và toàn bộ sinh trưởng của cây."]
    ]},
    { stem: "Một thửa đất có tỉ lệ hạt sét cao, thường được gọi là đất nặng.", items: [
      ["Hạt sét có kích thước nhỏ hơn 0,002 mm.", true, "Đây là ngưỡng kích thước hạt sét trong bài học."],
      ["Đất này thường giữ nước và chất dinh dưỡng tốt.", true, "Tỉ lệ hạt nhỏ cao làm tăng khả năng giữ nước, dinh dưỡng."],
      ["Đất nặng thường thoát nước và thoáng khí rất tốt.", false, "Khe hở nhỏ khiến đất thường thoát nước và thoáng khí kém."],
      ["Khi ướt đất dễ dính, còn khi khô có thể cứng.", true, "Đây là đặc điểm thường suy ra từ tỉ lệ sét cao." ]
    ]}
  ],
  [
    { stem: "Người trồng hoa điều chỉnh ánh sáng để tác động đến sinh trưởng và ra hoa.", items: [
      ["Cường độ ánh sáng có thể ảnh hưởng tốc độ quang hợp.", true, "Cường độ ánh sáng là một yếu tố ảnh hưởng quang hợp."],
      ["Quang chu kì là độ dài thời gian cây được chiếu sáng trong ngày.", true, "Đây là khái niệm quang chu kì."],
      ["Thay đổi quang chu kì không bao giờ làm thay đổi thời điểm ra hoa.", false, "Quang chu kì có thể điều khiển sự ra hoa ở nhiều loài."],
      ["Tăng ánh sáng vô hạn luôn làm mọi cây sinh trưởng tốt hơn.", false, "Mỗi loài có nhu cầu và giới hạn ánh sáng khác nhau." ]
    ]},
    { stem: "Sau mưa, một ruộng đất sét cao bị đọng nước lâu.", items: [
      ["Hiện tượng này phù hợp với khả năng thoát nước kém của đất nặng.", true, "Đất nhiều sét có khe hở nhỏ và thoát nước chậm."],
      ["Thành phần cơ giới của đất được xác định từ tỉ lệ cát, limon và sét.", true, "Đây là căn cứ phân loại đất theo thành phần cơ giới."],
      ["Tỉ lệ hạt sét càng cao thì đất luôn giữ dinh dưỡng kém hơn.", false, "Hạt nhỏ thường làm tăng khả năng giữ dinh dưỡng."],
      ["Vì giữ nước tốt nên đất nặng không thể gây úng.", false, "Giữ nước cao và thoát nước kém chính là điều kiện dễ gây úng." ]
    ]}
  ],
  [
    { stem: "Hai giống cây được trồng dưới các chế độ chiếu sáng khác nhau.", items: [
      ["Kết quả có thể khác nhau vì nhu cầu ánh sáng phụ thuộc giống, loài.", true, "Nhu cầu ánh sáng không giống nhau ở mọi cây."],
      ["Ánh sáng liên quan đến hình thành chất hữu cơ ở cây.", true, "Chất hữu cơ được tạo qua quang hợp."],
      ["Độ dài ngày và cường độ ánh sáng là hai khái niệm hoàn toàn giống nhau.", false, "Một đại lượng nói thời gian, đại lượng kia nói độ mạnh ánh sáng."],
      ["Bố trí mật độ cây không liên quan đến khả năng nhận ánh sáng.", false, "Mật độ ảnh hưởng sự che bóng và lượng ánh sáng mỗi cây nhận được." ]
    ]},
    { stem: "Mẫu đất A có nhiều hạt dưới 0,002 mm hơn mẫu đất B.", items: [
      ["Mẫu A có tỉ lệ hạt sét cao hơn.", true, "Hạt sét có kích thước dưới 0,002 mm."],
      ["Mẫu A có xu hướng giữ nước tốt hơn mẫu B.", true, "Tỉ lệ hạt nhỏ cao tăng khả năng giữ nước."],
      ["Có thể kết luận mẫu A chắc chắn giàu mọi chất dinh dưỡng.", false, "Khả năng giữ dinh dưỡng không đồng nghĩa đất chắc chắn đã giàu dinh dưỡng."],
      ["Nếu quá nhiều sét, rễ có thể gặp bất lợi do đất kém thoáng.", true, "Đất nặng thường có độ thoáng khí thấp." ]
    ]}
  ],
  [
    { stem: "Một nhà kính dùng đèn bổ sung vào buổi tối cho cây.", items: [
      ["Biện pháp có thể làm thay đổi quang chu kì của cây.", true, "Chiếu sáng bổ sung làm thay đổi độ dài ngày cảm nhận bởi cây."],
      ["Biện pháp có thể được dùng để điều chỉnh ra hoa ở cây mẫn cảm quang chu kì.", true, "Sự ra hoa của một số loài phụ thuộc độ dài ngày."],
      ["Ánh sáng không liên quan đến năng suất cây trồng.", false, "Ánh sáng ảnh hưởng quang hợp, sinh trưởng và năng suất."],
      ["Bất kể loài cây nào, chiếu sáng 24 giờ đều là phương án tối ưu.", false, "Nhu cầu ánh sáng khác nhau và cây cũng cần chế độ phù hợp." ]
    ]},
    { stem: "Nông dân cải tạo một chân ruộng nhiều sét để trồng rau.", items: [
      ["Đây là loại đất có thành phần cơ giới nặng.", true, "Nhiều sét là đặc trưng của đất nặng."],
      ["Đất thường dễ dính, dẻo khi ướt.", true, "Hàm lượng sét cao làm đất dính dẻo khi ẩm."],
      ["Đất luôn tơi xốp và thoát nước nhanh mà không cần cải tạo.", false, "Đất nhiều sét thường nặng, chặt và thoát nước kém."],
      ["Tăng độ thoáng và tiêu nước hợp lí có thể có lợi cho vùng rễ.", true, "Cải thiện thoáng khí, tiêu nước giúp hạn chế úng và thiếu ôxi." ]
    ]}
  ],
  [
    { stem: "Một giống cây ra hoa không đúng thời điểm khi chuyển sang vùng có độ dài ngày khác.", items: [
      ["Hiện tượng có thể liên quan đến phản ứng quang chu kì.", true, "Độ dài ngày có thể chi phối ra hoa."],
      ["Quang chu kì chỉ ảnh hưởng rễ, không ảnh hưởng ra hoa.", false, "Tác động nổi bật của quang chu kì là đến sự ra hoa."],
      ["Ánh sáng còn ảnh hưởng tích lũy chất hữu cơ của cây.", true, "Ánh sáng cần cho quang hợp."],
      ["Nhu cầu ánh sáng không thay đổi giữa các loài và giống.", false, "Nhu cầu ánh sáng phụ thuộc loài và giống." ]
    ]},
    { stem: "Khi khô hạn, một mẫu đất nhiều sét trở nên cứng và khó làm đất.", items: [
      ["Đây là biểu hiện thường gặp ở đất nặng.", true, "Đất nhiều sét có thể cứng khi khô."],
      ["Hạt chủ yếu quyết định tính nặng của đất là hạt sét.", true, "Tỉ lệ sét cao làm thành phần cơ giới nặng."],
      ["Hạt sét có kích thước lớn hơn hạt cát.", false, "Hạt sét nhỏ nhất, hạt cát lớn nhất."],
      ["Đất nặng thường có khả năng giữ nước thấp hơn đất cát.", false, "Đất nhiều sét thường giữ nước cao hơn đất cát." ]
    ]}
  ]
];

const agricultureEssaySets = [
  [
    { title: "Câu 1 (1,5 điểm)", points: 1.5, question: "So sánh giá thể than bùn, xơ dừa và trấu hun theo bốn tiêu chí: nguồn gốc, ưu điểm, hạn chế và quy trình sản xuất/xử lí.", solution: "Than bùn: xác thực vật phân hủy yếm khí; xốp, nhẹ, giữ ẩm/dinh dưỡng nhưng nghèo dinh dưỡng thiết yếu; thu gom → phơi, nghiền → phối vôi, phụ gia, vi sinh và ủ → kiểm tra, đóng gói. Xơ dừa: vỏ dừa nghiền; nhẹ, xốp, giữ ẩm, thoát nước; tannin/lignin gây cản rễ; ngâm nước 2–3 ngày, ngâm vôi 2 kg/100 L trong 5–7 ngày, trộn ủ vi sinh, kiểm tra đóng gói. Trấu hun: hun vỏ trấu yếm khí; sạch, xốp, giữ nước/phân, giàu K; nghèo dinh dưỡng và hấp thụ nhiệt; hun → trải nguội/phun nước/loại tạp → trộn vi sinh → đóng gói." },
    { title: "Câu 2 (1,5 điểm)", points: 1.5, question: "Trình bày đặc điểm, nguyên nhân và các nhóm biện pháp cải tạo đất xám bạc màu. Nêu tác dụng chính của từng nhóm biện pháp.", solution: "Đặc điểm: tầng canh tác mỏng, cơ giới nhẹ, nghèo dinh dưỡng, chua, ít vi sinh vật có ích. Nguyên nhân: địa hình dốc gây rửa trôi; độc canh, làm đất và mùa vụ không hợp lí. Biện pháp: bón hữu cơ/vô cơ/phân xanh, chú trọng hữu cơ; bón vôi nâng pH; tưới tiêu hợp lí chống rửa trôi; dùng giống ngắn ngày, luân canh, tăng vụ, xen canh cây họ Đậu để tăng thu nhập và cải tạo đất." }
  ],
  [
    { title: "Câu 1 (1,5 điểm)", points: 1.5, question: "Một vườn ươm có than bùn, xơ dừa và trấu hun. Hãy nêu ưu, nhược điểm của từng loại và giải thích vì sao cả ba thường cần xử lí hoặc phối trộn trước khi dùng.", solution: "Than bùn xốp, giữ ẩm/dinh dưỡng nhưng thiếu dinh dưỡng thiết yếu; xơ dừa nhẹ, thoáng, giữ ẩm và thoát nước nhưng tannin/lignin có thể cản rễ; trấu hun sạch, xốp, giữ nước/phân, có K nhưng nghèo dinh dưỡng và hấp thụ nhiệt. Cần xử lí/ phối trộn để khử chất bất lợi, bổ sung dinh dưỡng và tạo cân bằng giữ ẩm – thoáng khí." },
    { title: "Câu 2 (1,5 điểm)", points: 1.5, question: "Vì sao đất xám bạc màu có độ phì thấp? Đề xuất một hệ thống biện pháp cải tạo theo hướng bền vững.", solution: "Đất có tầng canh tác mỏng, cơ giới nhẹ, chua, nghèo dinh dưỡng và ít vi sinh vật có ích; địa hình dốc và canh tác không hợp lí gây rửa trôi. Cần phối hợp hữu cơ/phân xanh và phân vô cơ hợp lí, bón vôi, tưới tiêu hạn chế rửa trôi, che phủ, chọn giống ngắn ngày, luân canh – xen canh cây họ Đậu." }
  ],
  [
    { title: "Câu 1 (1,5 điểm)", points: 1.5, question: "Viết quy trình xử lí/sản xuất than bùn, xơ dừa và trấu hun làm giá thể. Ở mỗi quy trình, chỉ ra công đoạn có tính đặc trưng nhất.", solution: "Than bùn: thu gom → phơi khô, nghiền → trộn vôi, phụ gia, chế phẩm vi sinh rồi ủ → kiểm tra, đóng gói; đặc trưng là phối trộn và ủ. Xơ dừa: thu gom/phơi/nghiền → ngâm nước 2–3 ngày → ngâm vôi 2 kg/100 L trong 5–7 ngày → trộn ủ vi sinh → kiểm tra, đóng gói; đặc trưng là khử tannin/lignin. Trấu hun: thu gom → hun yếm khí → trải nguội, phun nước, loại tạp → trộn vi sinh → kiểm tra, đóng gói; đặc trưng là hun yếm khí." },
    { title: "Câu 2 (1,5 điểm)", points: 1.5, question: "Phân tích mối liên hệ giữa đặc điểm của đất xám bạc màu với biện pháp bón phân, bón vôi, tưới tiêu và bố trí cây trồng.", solution: "Nghèo dinh dưỡng, ít mùn → tăng phân hữu cơ, phân xanh và bổ sung vô cơ cân đối; đất chua → bón vôi nâng pH; cơ giới nhẹ, dễ rửa trôi → tưới tiêu hợp lí và che phủ; tầng canh tác mỏng, độ phì thấp → chọn giống ngắn ngày, luân canh, tăng vụ, xen canh cây họ Đậu." }
  ],
  [
    { title: "Câu 1 (1,5 điểm)", points: 1.5, question: "Lập bảng phân biệt than bùn, xơ dừa và trấu hun. Nếu phối trộn ba loại, em sẽ tận dụng ưu điểm và khắc phục hạn chế nào?", solution: "Nêu đúng nguồn gốc, ưu/nhược của ba loại. Phối trộn có thể tận dụng độ xốp, giữ ẩm của than bùn/xơ dừa, độ thoáng và K của trấu hun; cần xử lí xơ dừa, kiểm soát hấp nhiệt của trấu và bổ sung dinh dưỡng vì cả ba không cung cấp cân đối đủ chất." },
    { title: "Câu 2 (1,5 điểm)", points: 1.5, question: "Một khu đất xám bạc màu ở địa hình dốc đang bị canh tác độc canh. Hãy xác định nguy cơ và xây dựng kế hoạch cải tạo phù hợp.", solution: "Nguy cơ: rửa trôi, tầng canh tác tiếp tục mỏng, mất dinh dưỡng, tăng chua, giảm vi sinh vật và độ phì. Kế hoạch: bón hữu cơ/phân xanh, vô cơ cân đối và vôi; che phủ, tưới tiêu hợp lí; giảm làm đất mùa mưa; luân canh, xen canh cây họ Đậu, tăng vụ hợp lí và chọn giống ngắn ngày." }
  ],
  [
    { title: "Câu 1 (1,5 điểm)", points: 1.5, question: "Từ nhu cầu của vùng rễ về nước, không khí và dinh dưỡng, hãy giải thích cách sử dụng hợp lí than bùn, xơ dừa và trấu hun làm giá thể.", solution: "Than bùn và xơ dừa giúp giữ ẩm; xơ dừa và trấu hun tăng độ thoáng/thoát nước; trấu hun có K nhưng cả ba không giàu dinh dưỡng cân đối. Phải khử tannin/lignin của xơ dừa, kiểm soát nhiệt ở trấu hun, phối trộn vôi/phụ gia/vi sinh với than bùn và bổ sung dinh dưỡng theo cây." },
    { title: "Câu 2 (1,5 điểm)", points: 1.5, question: "Hãy viết một đoạn trả lời hoàn chỉnh về đất xám bạc màu gồm: khái quát phân bố, đặc điểm, nguyên nhân, độ phì và biện pháp cải tạo.", solution: "Đất phân bố rộng, có ở Đông Nam Bộ và Tây Nguyên; tầng canh tác mỏng, cơ giới nhẹ, chua, nghèo dinh dưỡng, ít vi sinh vật có ích nên độ phì thấp. Nguyên nhân gồm địa hình dốc gây rửa trôi và canh tác độc canh/làm đất/mùa vụ không hợp lí. Cải tạo bằng hữu cơ, vô cơ, phân xanh, vôi; tưới tiêu hợp lí; giống ngắn ngày; luân canh, tăng vụ, xen canh cây họ Đậu." }
  ]
];

const agricultureExamPlans = [
  [0, 0, 0, 0, 0],
  [3, 2, 2, 2, 3],
  [6, 4, 4, 4, 6],
  [8, 6, 6, 6, 9],
  [10, 8, 8, 8, 11]
];

const agricultureExams = agricultureExamPlans.map((starts, index) => ({
  id: `cong-nghe-nong-nghiep-10-de-${String(index + 1).padStart(2, '0')}`,
  title: `Công nghệ nông nghiệp 10 - Đề ${String(index + 1).padStart(2, '0')} - Ôn giữa kì I theo ma trận 2026–2027`,
  subject: 'agriculture',
  minutes: 45,
  duration: 45,
  year: '2026–2027',
  school: 'Đề luyện theo ma trận lớp cung cấp',
  province: '',
  description: 'Đề luyện gồm 20 câu nhiều lựa chọn, 2 câu đúng/sai và 2 câu tự luận; bám sát trọng tâm giáo viên dặn.',
  source: {
    school: 'Ma trận giữa kì I Công nghệ nông nghiệp 10',
    province: 'Tài liệu lớp cung cấp',
    year: '2026–2027',
    url: 'supplied/CNNN-10.pdf',
    note: 'Nội dung câu hỏi được biên soạn từ 27 trang ảnh SGK trong thư mục tailieu.'
  },
  mcUnit: 0.25,
  tfScoring: 'per-item',
  essayPoints: 3,
  questions: [
    ...agriculturePick('lesson1', starts[0], 4),
    ...agriculturePick('lesson2', starts[1], 4),
    ...agriculturePick('lesson3', starts[2], 4),
    ...agriculturePick('lesson4', starts[3], 3),
    ...agriculturePick('lesson5', starts[4], 5)
  ].map((question, questionIndex) => agriculturePlaceCorrect(question, (questionIndex * 3 + index) % 4)),
  tf: agricultureTfSets[index],
  short: [],
  essay: agricultureEssaySets[index]
}));

if (typeof window !== 'undefined') window.agricultureExams = agricultureExams;
