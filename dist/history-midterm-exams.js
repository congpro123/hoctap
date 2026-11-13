// Đề LUYỆN TẬP biên soạn theo ma trận giữa kì I Lịch sử 10 chuyên Sử 2026–2027
// và SGK Lịch sử 10 người dùng cung cấp; không phải đề chính thức hay đề đã ra.
// Mỗi đề: 12 TN (3đ), 4 nhóm Đ/S (4đ), 2 tự luận (1đ + 2đ).
(() => {
  const q = (stem, options, key, why) => [stem, options, key, why];
  const banks = {
    b1n: [
      q('Hiện thực lịch sử được hiểu là gì?', ['Toàn bộ những gì đã xảy ra trong quá khứ, tồn tại khách quan.','Mọi câu chuyện được kể lại về quá khứ.','Nhận xét của nhà sử học về một sự kiện.','Những dự đoán có thể xảy ra trong tương lai.'],0,'Hiện thực lịch sử là các sự việc đã xảy ra, độc lập với cách con người kể hoặc nhận thức.'),
      q('Đối tượng nghiên cứu chủ yếu của Sử học là', ['các hiện tượng tự nhiên hiện nay.','quá khứ của xã hội loài người.','các quy luật chuyển động của vật chất.','những dự báo thời tiết dài hạn.'],1,'Sử học nghiên cứu quá khứ của con người và xã hội loài người.'),
      q('Đặc điểm nào thuộc về hiện thực lịch sử?', ['Có thể đổi thay nếu người kể đổi ý.','Luôn trùng khít với sách giáo khoa.','Đã diễn ra, không thể thay đổi.','Chỉ tồn tại khi có người chứng kiến.'],2,'Sự kiện đã xảy ra không đổi; nhận thức về nó có thể được bổ sung.'),
      q('Lịch sử được con người nhận thức là', ['toàn bộ quá khứ chưa từng được ghi lại.','sự hiểu biết, tái hiện và lí giải quá khứ của con người.','một tập hợp các dự đoán về tương lai.','chính bản thân mọi sự kiện đã xảy ra.'],1,'Nhận thức lịch sử là kết quả con người tìm hiểu và lí giải hiện thực lịch sử.'),
      q('Một nhiệm vụ của Sử học là', ['thay đổi kết quả của các sự kiện quá khứ.','loại bỏ mọi nguồn tư liệu có quan điểm khác nhau.','tìm hiểu và phục dựng quá khứ trên cơ sở tư liệu.','dự đoán chính xác tuyệt đối mọi sự kiện sắp tới.'],2,'Nhà sử học dùng chứng cứ để tìm hiểu, tái hiện và giải thích quá khứ.'),
      q('Chức năng xã hội của Sử học thể hiện rõ ở việc', ['giáo dục truyền thống và rút kinh nghiệm cho hiện tại.','bảo đảm mọi bản chép tay đều đúng.','thay thế hoàn toàn các ngành khoa học khác.','làm cho sự kiện quá khứ xảy ra lần nữa.'],0,'Tri thức lịch sử góp phần giáo dục, định hướng ứng xử và phát triển xã hội.'),
      q('Phát biểu nào đúng về tư liệu lịch sử?', ['Chỉ tư liệu chữ viết mới có giá trị.','Di vật và lời kể cũng có thể là nguồn tư liệu.','Mọi tư liệu đều phản ánh đầy đủ, chính xác toàn bộ quá khứ.','Tư liệu mới luôn làm mất giá trị của tư liệu cũ.'],1,'Tư liệu có nhiều dạng; cần thẩm định và đối chiếu trước khi sử dụng.'),
      q('Yếu tố nào có thể làm nhận thức lịch sử thay đổi?', ['Bản thân sự kiện quá khứ tự thay đổi.','Nguồn tư liệu mới và phương pháp nghiên cứu mới.','Việc xóa bỏ tất cả hiện vật.','Ý muốn của một người bất kì.'],1,'Tư liệu và phương pháp mới có thể giúp điều chỉnh cách hiểu về sự kiện.')
    ],
    b1h: [
      q('Hai sử gia đưa ra cách lí giải khác nhau về cùng một sự kiện. Kết luận phù hợp nhất là', ['sự kiện quá khứ đã xảy ra hai lần.','hiện thực không tồn tại khách quan.','nhận thức lịch sử có thể khác nhau, cần kiểm tra chứng cứ.','cả hai cách lí giải đều phải bị loại bỏ.'],2,'Cùng hiện thực có thể được lí giải khác nhau; đối chiếu nguồn là bước cần thiết.'),
      q('Một bức ảnh cũ không ghi ngày được chia sẻ với chú thích khẳng định năm chụp. Cách xử lí phù hợp là', ['tin ngay vì ảnh là tư liệu gốc.','so sánh đặc điểm ảnh và đối chiếu các nguồn có xuất xứ rõ.','bỏ qua hoàn toàn ảnh.','sửa ngày trong chú thích cho hợp ý kiến số đông.'],1,'Nguồn gốc và niên đại của tư liệu phải được xác minh.'),
      q('Bản đồ khảo cổ mới khiến giả thuyết về vị trí một di tích được điều chỉnh. Điều này chứng tỏ', ['quá khứ đã thay đổi.','nghiên cứu lịch sử không cần tư liệu.','nhận thức về quá khứ có thể được bổ sung bằng chứng cứ mới.','mọi nhận thức trước đây đều vô giá trị.'],2,'Tư liệu mới giúp làm rõ nhận thức, không làm thay đổi điều đã xảy ra.'),
      q('Một hồi kí và một hồ sơ hành chính ghi khác nhau về cùng biến cố. Nhà nghiên cứu nên', ['chọn hồi kí vì kể hấp dẫn hơn.','chọn hồ sơ vì văn bản luôn chính xác.','đối chiếu hoàn cảnh ra đời, mục đích và các tư liệu khác.','gộp hai con số rồi lấy trung bình.'],2,'Phê phán nguồn cần xét xuất xứ, mục đích và kiểm chứng chéo.'),
      q('Một hiện vật được phát hiện đúng nơi diễn ra biến cố nhưng chưa rõ niên đại. Nhà nghiên cứu có thể kết luận gì?', ['Đó chắc chắn là hiện vật của biến cố.','Cần xác định niên đại và lớp địa tầng trước khi liên hệ với biến cố.','Địa điểm là đủ để xác nhận mọi giả thuyết.','Không thể nghiên cứu hiện vật vì thiếu văn bản.'],1,'Vị trí phát hiện là một dữ kiện; niên đại và bối cảnh cần được kiểm tra.'),
      q('Hai trang web dùng cùng một tấm ảnh làm bằng chứng cho hai sự kiện khác thời kì. Cách đánh giá đúng nhất là', ['chọn trang có nhiều bình luận.','xem ảnh có đẹp không.','truy nguồn ảnh gốc, chú thích và thời điểm tạo ảnh.','tin cả hai vì đều có ảnh.'],2,'Phải xác minh xuất xứ hình ảnh trước khi gắn nó với sự kiện lịch sử.'),
      q('Một sách giáo khoa mới điều chỉnh niên đại một phát hiện khảo cổ. Điều nào không thay đổi?', ['Cách diễn giải của giới nghiên cứu.','Thông tin trình bày trong sách.','Bản thân sự kiện đã xảy ra trong quá khứ.','Số nguồn tư liệu được đối chiếu.'],2,'Hiện thực đã xảy ra không đổi; nhận thức và cách trình bày có thể đổi.'),
      q('Một nhân chứng nhớ sai thứ tự hai sự kiện sau nhiều thập kỉ. Điều này cho thấy', ['quá khứ đã đổi thứ tự.','lời kể cần được đối chiếu với tư liệu khác.','mọi nhân chứng đều không có giá trị.','lời kể luôn đáng tin hơn hiện vật.'],1,'Kí ức có thể sai lệch; lời kể vẫn hữu ích nếu được kiểm chứng.'),
      q('Khi một bia ký và truyền thuyết địa phương khác nhau về tên người lập làng, cách trình bày có trách nhiệm là', ['giữ riêng dữ kiện trên bia và nội dung truyền thuyết, nêu phần chưa rõ.','xóa truyền thuyết khỏi hồ sơ.','chọn tên trong truyền thuyết làm sự thật chắc chắn.','khẳng định bia ký vô giá trị.'],0,'Cần phân biệt chứng cứ và truyền thuyết, tránh khẳng định vượt quá nguồn.'),
      q('Một tác giả chép lại đoạn sử liệu nhưng bỏ phần nói về bối cảnh. Để đánh giá nhận định của tác giả, cần', ['đọc lại văn bản đầy đủ và xét bối cảnh ra đời.','chỉ đọc câu được trích.','bỏ mọi tư liệu chữ viết.','đổi bối cảnh cho phù hợp nhận định.'],0,'Trích dẫn thiếu bối cảnh dễ gây hiểu sai; cần kiểm tra nguồn gốc.')
    ],
    b2h: [
      q('Vì sao cần học tập lịch sử suốt đời?', ['Vì tri thức lịch sử được bổ sung và liên hệ với vấn đề hiện tại.','Vì chỉ người lớn mới hiểu được lịch sử.','Vì học một lần sẽ thay đổi quá khứ.','Vì nguồn tư liệu mới không bao giờ xuất hiện.'],0,'Tri thức lịch sử phát triển; học tiếp giúp hiểu sâu hơn và vận dụng vào cuộc sống.'),
      q('Khi tìm hiểu lịch sử một địa phương, bước nào có giá trị nhất?', ['Chỉ đọc bài viết có nhiều lượt chia sẻ.','Thu thập tư liệu, ghi nguồn, so sánh lời kể và hiện vật.','Sao chép một lời kể rồi coi là kết luận.','Loại bỏ tư liệu có thông tin trái ý mình.'],1,'Thu thập và thẩm định nhiều loại nguồn giúp kết luận đáng tin cậy hơn.'),
      q('Tri thức lịch sử giúp một cộng đồng ứng xử với di sản chủ yếu bằng cách nào?', ['Xem di sản chỉ là hàng hóa để bán.','Hiểu giá trị, rút kinh nghiệm bảo tồn và phát huy phù hợp.','Giữ nguyên mọi tập quán kể cả điều gây hại.','Không cần nghiên cứu vì di sản tự kể được mọi chuyện.'],1,'Hiểu bối cảnh và giá trị của di sản giúp bảo tồn có trách nhiệm.'),
      q('Một học sinh gặp hai bài đăng mâu thuẫn về nguồn gốc lễ hội. Cách học lịch sử đúng là', ['chọn bài đăng ngắn hơn.','kiểm tra tác giả, thời điểm, bằng chứng và đối chiếu tư liệu.','tin bài có nhiều hình đẹp.','kết luận cả hai đều đúng mà không cần kiểm tra.'],1,'Cần đánh giá độ tin cậy và đối chiếu nguồn, không dựa vào mức độ lan truyền.'),
      q('Ứng dụng nào thể hiện học lịch sử gắn với đời sống?', ['Phục dựng di tích theo trí tưởng tượng không tư liệu.','Thiết kế tham quan di sản dựa trên tư liệu đã kiểm chứng.','Xóa bỏ hiện vật cũ vì không còn dùng được.','Đồng nhất truyền thuyết với mọi sự kiện đã được xác nhận.'],1,'Tri thức lịch sử giúp giới thiệu di sản chính xác và có trách nhiệm.'),
      q('Để nhận biết một tư liệu có thể dùng cho đề tài lịch sử, điều cần làm trước tiên là', ['xác định xuất xứ, thời gian và nội dung của tư liệu.','đếm số người thích bài đăng.','đánh giá theo màu sắc của trang giấy.','chỉ hỏi một người quen.'],0,'Xuất xứ, niên đại và nội dung là cơ sở thẩm định tư liệu.'),
      q('Ý nghĩa của việc đối chiếu nhiều nguồn tư liệu là', ['làm cho các sự kiện xảy ra lại.','phát hiện điểm nhất quán, mâu thuẫn và hạn chế thiên lệch.','bảo đảm không cần đọc nguồn gốc.','chọn được lời kể dài nhất.'],1,'Kiểm chứng chéo làm tăng độ tin cậy của nhận thức lịch sử.'),
      q('Khi vận dụng bài học lịch sử vào hiện tại, cần tránh điều nào?', ['Xem xét bối cảnh từng thời kì.','Đối chiếu điểm giống và khác của hoàn cảnh.','Áp nguyên xi giải pháp cũ bất kể điều kiện thay đổi.','Dựa trên chứng cứ và mục tiêu thực tế.'],2,'Bối cảnh thay đổi nên bài học lịch sử phải được vận dụng linh hoạt.')
    ],
    b3n: [
      q('Sử học đóng vai trò gì đối với bảo tồn di sản?', ['Cung cấp căn cứ xác định nguồn gốc, giá trị và diễn biến của di sản.','Thay thế toàn bộ công việc bảo quản vật chất.','Bảo đảm mọi công trình phục dựng đều đúng.','Loại bỏ nhu cầu cộng đồng tham gia bảo tồn.'],0,'Nghiên cứu lịch sử cung cấp chứng cứ cho nhận diện và bảo tồn di sản.'),
      q('Mối quan hệ giữa nghiên cứu lịch sử và du lịch di sản là', ['không liên quan nhau.','hai chiều: hiểu biết lịch sử giúp du lịch có nội dung, du lịch có thể hỗ trợ bảo tồn.','du lịch luôn làm di sản hư hại nên phải cấm hoàn toàn.','chỉ du lịch mới tạo ra tư liệu lịch sử.'],1,'Hai lĩnh vực có thể hỗ trợ nhau nếu khai thác và bảo vệ hợp lí.'),
      q('Việc xác định niên đại một hiện vật trước khi trưng bày giúp', ['tăng tùy ý giá bán hiện vật.','giới thiệu hiện vật chính xác trong bối cảnh lịch sử.','bỏ qua các tư liệu liên quan.','biến hiện vật thành chứng cứ duy nhất.'],1,'Niên đại và bối cảnh là nền tảng diễn giải di sản.'),
      q('Hoạt động nào thuộc phát huy giá trị di sản dựa trên Sử học?', ['Thuyết minh di tích bằng thông tin có kiểm chứng.','Tự đặt thêm sự kiện cho hấp dẫn.','Chỉ chụp ảnh mà không tìm hiểu nguồn gốc.','Thay hiện vật gốc bằng đồ mới nhưng không ghi chú.'],0,'Thuyết minh chính xác dựa trên nghiên cứu là cách phát huy giá trị di sản.'),
      q('Sử học hỗ trợ ngành công nghiệp văn hóa bằng việc', ['cung cấp chất liệu lịch sử đã được kiểm chứng cho sản phẩm sáng tạo.','cho phép tùy ý làm sai lệch sự kiện.','xóa bỏ bản sắc của sản phẩm địa phương.','bảo đảm mọi bộ phim lịch sử là tài liệu gốc.'],0,'Nội dung văn hóa có thể dựa trên hiểu biết lịch sử được thẩm định.'),
      q('Bảo tồn di sản văn hóa có ý nghĩa nào?', ['Chỉ phục vụ việc bán vé.','Giữ gìn chứng tích và trao truyền giá trị cho các thế hệ.','Làm cho mọi hiện vật trở về nguyên trạng tuyệt đối.','Ngăn cản tất cả hoạt động nghiên cứu.'],1,'Di sản là nguồn chứng tích, tri thức và bản sắc cho hiện tại, tương lai.'),
      q('Khi khai thác di tích cho du lịch, nguyên tắc cần ưu tiên là', ['tăng lượng khách bằng mọi giá.','bảo vệ tính xác thực và giá trị của di tích.','thay chi tiết cũ bằng vật liệu mới tùy ý.','bỏ phần thuyết minh để tiết kiệm chi phí.'],1,'Phát huy giá trị phải gắn với bảo tồn tính xác thực.'),
      q('Một đóng góp của Sử học đối với giáo dục tại bảo tàng là', ['cung cấp bối cảnh, câu chuyện và chứng cứ cho hiện vật.','chỉ trang trí không gian trưng bày.','xóa bỏ nhu cầu tìm hiểu niên đại.','đồng nhất mọi di tích khác thời đại.'],0,'Sử học giúp công chúng hiểu ý nghĩa hiện vật trong bối cảnh.'),
      q('Nguồn tư liệu nào có thể giúp nghiên cứu lịch sử một di sản?', ['Di vật, văn bản và lời kể được thẩm định.','Chỉ ảnh quảng cáo du lịch.','Chỉ một bài viết không rõ tác giả.','Chỉ số lượt xem trên mạng xã hội.'],0,'Có thể kết hợp nguồn vật chất, chữ viết, truyền miệng và kiểm tra độ tin cậy.'),
      q('Khai thác du lịch bền vững ở di sản đòi hỏi', ['phối hợp bảo tồn, giới thiệu và quản lí tác động của du khách.','mở mọi khu vực nhạy cảm cho khách vào.','chỉ xem xét doanh thu ngắn hạn.','ngừng nghiên cứu lịch sử.'],0,'Du lịch bền vững phải đi cùng bảo vệ di sản và cộng đồng.')
    ],
    b4n: [
      q('Văn minh là', ['sự tiến bộ về vật chất và tinh thần của xã hội ở trình độ phát triển cao.','mọi tập quán của con người từ khi xuất hiện.','chỉ các công trình kiến trúc lớn.','chỉ những sản phẩm công nghiệp hiện đại.'],0,'SGK phân biệt văn minh là trình độ phát triển cao của văn hóa.'),
      q('Một dấu hiệu thường dùng nhận diện văn minh là', ['nhà nước, đô thị, chữ viết.','chỉ có các truyền thuyết.','không có tổ chức xã hội.','không có công cụ lao động.'],0,'Nhà nước, đô thị, chữ viết là các tiêu chí cơ bản nêu trong SGK.'),
      q('Bốn trung tâm văn minh phương Đông lớn thời cổ đại là', ['Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa.','Ai Cập, Hy Lạp, La Mã, Ấn Độ.','Hy Lạp, La Mã, Trung Hoa, Phục hưng.','Lưỡng Hà, La Mã, Hy Lạp, Ai Cập.'],0,'SGK liệt kê Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa.'),
      q('Một thành tựu toán học quan trọng của Ấn Độ cổ đại là', ['hệ mười chữ số ngày nay.','chữ số La Mã.','chữ tượng hình Ai Cập.','bảng chữ cái Hy Lạp.'],0,'SGK nhấn mạnh người Ấn Độ sáng tạo hệ 10 chữ số.'),
      q('Bốn phát minh kĩ thuật lớn của Trung Hoa cổ–trung đại gồm', ['giấy, in, thuốc súng, la bàn.','giấy, kính thiên văn, động cơ hơi nước, la bàn.','chữ số La Mã, giấy, bê tông, máy in.','thuốc súng, la bàn, điện thoại, máy ảnh.'],0,'Bốn phát minh được SGK nêu là giấy, kĩ thuật in, thuốc súng, la bàn.'),
      q('Tôn giáo nào có nguồn gốc từ Ấn Độ và lan rộng ở châu Á?', ['Phật giáo.','Nho giáo.','Đạo giáo.','Cơ Đốc giáo.'],0,'Phật giáo ra đời ở Ấn Độ rồi truyền bá rộng ra ngoài.'),
      q('Chữ viết Trung Hoa phát triển dần thành', ['chữ Hán.','chữ La-tinh.','chữ số La Mã.','chữ hình nêm.'],0,'Từ các dạng chữ cổ, chữ viết Trung Hoa được phát triển thành chữ Hán.'),
      q('Di sản kiến trúc nào thuộc văn minh Ai Cập cổ đại?', ['Kim tự tháp Ghi-da.','Đền Pác-tê-nông.','Đấu trường Cô-li-dê.','Vạn Lý Trường Thành.'],0,'Kim tự tháp Ghi-da là kiến trúc tiêu biểu của Ai Cập cổ đại.'),
      q('Thành tựu nào tiêu biểu cho nghệ thuật kiến trúc Ấn Độ cổ–trung đại?', ['Chùa hang A-gian-ta.','Kim tự tháp Ghi-da.','Đấu trường Cô-li-dê.','Khải hoàn môn Công-xtăng-ti-nút.'],0,'Chùa hang A-gian-ta thể hiện ảnh hưởng tôn giáo trong kiến trúc Ấn Độ.'),
      q('Một thành tựu văn học tiêu biểu của Trung Hoa thời cổ–trung đại là', ['Đường thi.','sử thi I-li-át.','thần thoại Hy Lạp.','chữ số La Mã.'],0,'Đường thi là thành tựu văn học tiêu biểu của Trung Hoa được nêu trong SGK Bài 4.')
    ],
    b4h: [
      q('Một di tích ở Đông Nam Á có kiến trúc tháp và tượng Phật. Nhận định thận trọng nhất là', ['có thể nghiên cứu ảnh hưởng Ấn Độ, đồng thời xét sự tiếp biến địa phương.','chắc chắn do người Ấn Độ trực tiếp xây.','không liên quan bất kì nền văn minh nào.','mọi chi tiết đều giống hệt nguyên mẫu Ấn Độ.'],0,'Ảnh hưởng văn hóa thường thông qua giao lưu và tiếp biến, không đồng nghĩa sao chép nguyên xi.'),
      q('Khi so sánh văn hóa và văn minh, nhận định nào phù hợp với SGK?', ['Văn hóa xuất hiện cùng con người; văn minh gắn với giai đoạn phát triển cao của xã hội.','Văn minh có trước văn hóa.','Văn hóa chỉ có ở xã hội có chữ viết.','Hai khái niệm hoàn toàn đồng nghĩa.'],0,'Văn hóa bao quát các giá trị con người tạo ra; văn minh chỉ trình độ phát triển cao.'),
      q('Một người cho rằng chữ Hán từng được sử dụng ở Việt Nam nên mọi văn bản cổ Việt Nam đều là của Trung Hoa. Phản biện đúng là', ['việc tiếp nhận chữ viết không xóa bỏ chủ thể sáng tạo và bối cảnh Việt Nam.','chữ viết không bao giờ truyền bá giữa các nước.','mọi văn bản cổ đều không có giá trị.','chữ Hán chỉ tồn tại ở Việt Nam.'],0,'Tiếp nhận và sử dụng chữ viết là một quá trình giao lưu, tiếp biến văn hóa.'),
      q('Một bài giới thiệu nói chữ số 0–9 là “phát minh của La Mã”. Điều cần điều chỉnh là', ['hệ mười chữ số gắn với đóng góp quan trọng của Ấn Độ, khác hệ chữ số La Mã.','chữ số 0–9 do Ai Cập sáng tạo.','chữ số La Mã và hệ mười chữ số là một.','không có xã hội cổ đại nào biết dùng số.'],0,'SGK ghi nhận người Ấn Độ sáng tạo hệ 10 chữ số được dùng rộng rãi.'),
      q('Một triển lãm xếp giấy, kĩ thuật in và la bàn vào nhóm thành tựu của Ấn Độ. Cách sửa phù hợp là', ['chuyển các thành tựu ấy sang mục Trung Hoa.','chuyển sang mục Ai Cập.','giữ nguyên vì thuộc Ấn Độ.','xóa vì không phải thành tựu cổ–trung đại.'],0,'Giấy, in, la bàn là các phát minh kĩ thuật lớn của Trung Hoa.'),
      q('Một học sinh cho rằng văn minh chỉ gồm kiến trúc, không có chữ viết hay tổ chức xã hội. Nhận xét đúng là', ['chữ viết và tổ chức xã hội cũng là dấu hiệu quan trọng của văn minh.','văn minh không bao giờ có kiến trúc.','chữ viết chỉ thuộc văn hóa hiện đại.','văn minh đồng nghĩa với một tòa nhà.'],0,'SGK nêu nhà nước, đô thị, chữ viết cùng các tiến bộ tổ chức/kĩ thuật.'),
      q('Một ngôi chùa ở Đông Nam Á có yếu tố kiến trúc Ấn Độ và trang trí địa phương. Điều này minh họa', ['giao lưu và tiếp biến văn hóa.','sao chép nguyên xi không thay đổi.','việc không có ảnh hưởng bên ngoài.','một công trình chắc chắn do người Ấn Độ xây.'],0,'Tiếp nhận yếu tố bên ngoài cùng sáng tạo bản địa là tiếp biến.'),
      q('Một bản thuyết minh ghi “Nho giáo, Đạo giáo, Mặc gia đều ra đời ở Ấn Độ”. Điều chỉnh phù hợp là', ['các học thuyết đó thuộc truyền thống tư tưởng Trung Hoa.','chỉ Nho giáo ra đời ở Ấn Độ.','cả ba đều ra đời ở Ai Cập.','không học thuyết nào thuộc thời cổ–trung đại.'],0,'SGK Bài 4 nêu các học thuyết này hình thành tại Trung Hoa.'),
      q('Khi giải thích ảnh hưởng của một thành tựu văn minh lên Việt Nam, cách lập luận nào hợp lí nhất?', ['Xác định nguồn gốc, con đường tiếp nhận và sự biến đổi trong bối cảnh Việt Nam.','Chỉ nêu tên thành tựu rồi kết luận Việt Nam sao chép.','Khẳng định mọi nước Đông Nam Á tiếp nhận giống nhau.','Bỏ qua chứng cứ vì ảnh hưởng là điều hiển nhiên.'],0,'Ảnh hưởng văn minh cần được chứng minh và đặt trong quá trình tiếp biến.'),
      q('Một bảo tàng giới thiệu chữ tượng hình Ai Cập là “nguồn gốc trực tiếp của chữ Hán”. Cách đánh giá thận trọng là', ['không thể khẳng định quan hệ trực tiếp đó nếu thiếu chứng cứ; hai hệ chữ thuộc bối cảnh khác nhau.','đúng vì đều là chữ cổ.','đúng vì đều có nét vẽ.','mọi hệ chữ đều bắt nguồn trực tiếp từ Ai Cập.'],0,'Tương đồng bề ngoài không chứng minh quan hệ nguồn gốc trực tiếp.')
    ]
  };
  // Bộ câu có phương án nhiễu cùng chủ đề; giữ vị trí đáp án để không đổi điểm bài cũ.
  if (window.historyMidtermHardBanks) Object.assign(banks, window.historyMidtermHardBanks);
  // Các cột ma trận: Bài 1 = 2 NB + 1 TH; Bài 2 = 2 TH;
  // Bài 3 = 3 NB; Bài 4 = 3 NB + 1 TH.
  const plan = ['b1n','b1n','b1h','b2h','b2h','b3n','b3n','b3n','b4n','b4n','b4n','b4h'];
  const pick = (arr, exam, slot) => arr[(exam * 3 + slot * 2 + Math.floor(exam / 3)) % arr.length];
  // Ma trận: hai nhóm Đ/S Bài 1 và hai nhóm Đ/S Bài 3.
  const contexts = [
    ['Một thư viện số đăng ảnh một sắc phong, chưa ghi nơi lưu giữ.', 'Ảnh là tư liệu có thể khảo cứu nhưng thông tin xuất xứ vẫn cần kiểm tra.', true, 'Vì sắc phong có chữ viết nên ngày đăng ảnh chính là niên đại văn bản.', false],
    ['Hai người kể khác nhau về ngày diễn ra một lễ hội làng.', 'Cả hai lời kể có thể được ghi lại như nguồn truyền miệng để đối chiếu.', true, 'Nếu một người kể tham gia lễ hội thì ngày người ấy nhớ mặc nhiên chính xác hơn hồ sơ lưu trữ.', false],
    ['Một đoàn khảo cổ tìm được lớp hiện vật mới dưới nền di tích.', 'Địa tầng và niên đại hiện vật có thể bổ sung cách hiểu về các giai đoạn di tích.', true, 'Lớp nằm sâu hơn chắc chắn cùng niên đại với mọi công trình còn thấy trên mặt đất.', false],
    ['Bảo tàng trưng bày hai bản đồ cổ có chú thích niên đại khác nhau.', 'Cần xem ngày lập bản đồ khác ngày được vẽ lại hay in lại hay không.', true, 'Hai bản đồ cùng vẽ một địa điểm thì phải được lập trong cùng một năm.', false],
    ['Một bài đăng mạng dùng phim truyện làm chứng cứ duy nhất về sự kiện.', 'Chi tiết trong phim có thể gợi câu hỏi để tìm nguồn độc lập kiểm chứng.', true, 'Cảnh phim ghi đúng tên nhân vật thì toàn bộ lời thoại trong cảnh là tư liệu gốc.', false],
    ['Nhà nghiên cứu đọc hồi kí của người tham gia một biến cố.', 'Hồi kí có thể cho biết trải nghiệm của người viết và cần đối chiếu mốc thời gian.', true, 'Hồi kí là tư liệu của người trong cuộc nên mọi số liệu trong đó không cần kiểm tra lại.', false],
    ['Một ngôi đình được phục dựng sau khi tìm thấy bản vẽ và di vật.', 'Bản vẽ và di vật có thể làm căn cứ xác định phần nào được dựng lại.', true, 'Công trình phục dựng theo bản vẽ có thể giới thiệu toàn bộ là di tích gốc.', false],
    ['Một tấm bia có văn tự cổ vừa được phát hiện ở di tích.', 'Tấm bia có thể là sử liệu về một giai đoạn của di tích khi xác định được bối cảnh.', true, 'Ngày khắc trên bia, nếu đọc được, tự động là ngày xây toàn bộ di tích.', false],
    ['Một hướng dẫn viên kể hai phiên bản về nguồn gốc tên làng.', 'Nên ghi rõ ai kể mỗi phiên bản và đối chiếu với nguồn khác.', true, 'Hai phiên bản khác nhau thì không thể cùng chứa chi tiết có giá trị lịch sử.', false],
    ['Trường học làm chuyên đề lịch sử địa phương từ hồ sơ và phỏng vấn.', 'Hồ sơ và lời kể có thể bổ sung cho nhau nếu được ghi nguồn, kiểm tra.', true, 'Phỏng vấn nhiều người cùng một nhóm là đủ thay thế mọi nguồn chữ viết khác.', false]
  ];
  const heritage = [
    ['Một di tích đón lượng khách tăng nhanh, nền gạch cổ bắt đầu mòn.', 'Giới hạn lối đi và lượng khách là biện pháp có thể giảm tác động lên nền gạch.', true, 'Thay hết nền gạch cũ bằng gạch mới giống màu vẫn giữ nguyên tính xác thực của di tích.', false],
    ['Bảo tàng chuẩn bị bảng giới thiệu một trống đồng.', 'Nên ghi xuất xứ, niên đại và đánh dấu phần thông tin còn là giả thuyết.', true, 'Hoa văn trống giống hiện vật khác là đủ khẳng định hai hiện vật có cùng niên đại.', false],
    ['Một làng nghề muốn mở tuyến du lịch gắn với lịch sử địa phương.', 'Lịch sử nghề và sản phẩm có thể là cơ sở cho nội dung thuyết minh.', true, 'Khi một sản phẩm được khách ưa chuộng thì có thể giới thiệu nó là sản phẩm cổ truyền mà không cần tìm nguồn.', false],
    ['Di tích được dựng lại một phần theo bản vẽ cũ.', 'Bảng giới thiệu cần cho biết đâu là phần nguyên gốc và đâu là phần dựng lại.', true, 'Bản vẽ cũ có mặt thì phần dựng lại trở thành hiện vật gốc về mặt lịch sử.', false],
    ['Một triển lãm dùng bản sao để bảo vệ hiện vật dễ hư hại.', 'Bản sao có ghi chú rõ vẫn có thể hỗ trợ giáo dục và bảo vệ hiện vật gốc.', true, 'Bản sao đặt cùng vị trí trưng bày với hiện vật gốc thì không cần ghi chú phân biệt.', false],
    ['Cộng đồng ghi âm lời kể về một lễ hội lâu đời.', 'Ghi người kể, thời điểm và hoàn cảnh kể giúp khai thác lời kể về sau.', true, 'Nhiều người cùng kể một chi tiết thì chi tiết ấy tự động thành sự kiện đã được kiểm chứng.', false],
    ['Một phim tài liệu giới thiệu thành cổ trước khi mở tour tham quan.', 'Thông tin về niên đại và các lần tu sửa cần có nguồn để đối chiếu.', true, 'Phim có phỏng vấn chuyên gia thì mọi cảnh dựng lại đều là tư liệu gốc.', false],
    ['Một di tích bị vẽ bậy khi mùa du lịch đông khách.', 'Tổ chức lối đi và giám sát hành vi khách là một phần bảo tồn.', true, 'Chỉ cần tăng ngân sách quảng bá thì tình trạng hư hại sẽ tự giảm.', false],
    ['Nhóm học sinh xây bản đồ số các địa chỉ đỏ địa phương.', 'Mỗi mốc địa điểm nên có nguồn cho tên gọi, thời gian và ý nghĩa.', true, 'Một địa điểm còn tên dân gian từ xưa thì mọi mốc thời gian do dân kể đều chính xác.', false],
    ['Một nhà trưng bày nhận hiện vật được hiến tặng nhưng thiếu hồ sơ.', 'Cần xác minh xuất xứ trước khi giới thiệu niên đại như thông tin đã chắc chắn.', true, 'Chất liệu của hiện vật, nếu nhìn bằng mắt thấy cũ, là đủ xác định nơi tạo tác.', false]
  ];
  function tfHistory(exam, variant) {
    const [stem, a, aKey, b, bKey] = pick(contexts, exam, variant);
    const flip = (exam + variant) % 2 === 1;
    return {stem, items:[
      flip ? ['Tư liệu do một cơ quan lưu trữ đăng lên mạng thì mọi chú thích kèm theo đều có thể dùng làm kết luận cuối cùng.',false,'Nguồn lưu trữ đáng tham khảo, nhưng từng chú thích vẫn cần xét căn cứ và bối cảnh.'] : [a,aKey,'Nguồn tư liệu cần được thẩm định trong bối cảnh.'],
      flip ? ['Nhận thức lịch sử có thể khác nhau do nguồn tư liệu và cách tiếp cận khác nhau.',true,'Cùng một hiện thực có thể được nhận thức khác nhau.'] : [b,bKey,'Không thể đồng nhất nhận thức hoặc lời kể với toàn bộ hiện thực lịch sử.'],
      exam % 3 === 0 ? ['Khi tìm được một nguồn mới khác nguồn cũ, sự kiện quá khứ phải được xem là đã diễn ra theo hai cách.',false,'Hai nguồn có thể chứa cách ghi hoặc góc nhìn khác nhau; sự kiện đã xảy ra không vì vậy tách thành hai.'] : ['Nếu có tư liệu mới đáng tin cậy, cách lí giải về sự kiện có thể được điều chỉnh.',true,'Tư liệu mới bổ sung nhận thức, không thay đổi quá khứ.'],
      flip ? ['Đối chiếu nguồn độc lập giúp phát hiện điểm mâu thuẫn và giới hạn của tư liệu.',true,'Kiểm chứng chéo giúp nâng độ tin cậy.'] : ['Một nguồn đương thời ghi rất chi tiết thì không cần xét ai tạo nguồn và nhằm mục đích gì.',false,'Ngay cả nguồn đương thời có thể mang góc nhìn và mục đích riêng.']
    ]};
  }
  function tfHeritage(exam, variant) {
    const [stem, a, aKey, b, bKey] = pick(heritage, exam, variant);
    const flip = (exam + variant) % 2 === 1;
    return {stem, items:[
      flip ? ['Khi di sản đã có hồ sơ xếp hạng thì việc nghiên cứu các lớp tu sửa sau đó không còn cần thiết.',false,'Hồ sơ xếp hạng không thay thế việc tìm hiểu lịch sử biến đổi và hiện trạng di sản.'] : [a,aKey,'Bảo tồn và giới thiệu phải dựa trên tư liệu và quản lí tác động.'],
      flip ? ['Bảo tồn cần dựa trên chứng cứ về phần gốc và phần phục dựng.',true,'Cần giữ và giới thiệu tính xác thực.'] : [b,bKey,'Không được hy sinh tính xác thực của di sản.'],
      exam % 3 === 1 ? ['Nếu doanh thu du lịch đủ trả chi phí tu bổ thì không cần theo dõi mức độ hư hại của hiện vật.',false,'Nguồn thu không thay thế việc theo dõi tác động và ngăn hư hại.'] : ['Tìm hiểu lịch sử giúp thiết kế cách phát huy giá trị di sản phù hợp với bối cảnh.',true,'Nghiên cứu lịch sử là cơ sở của bảo tồn và khai thác.'],
      flip ? ['Một cách giải thích hấp dẫn, dù mới là giả thuyết, có thể ghi như sự kiện đã chắc chắn trên bảng thuyết minh.',false,'Cần công khai mức độ chắc chắn của thông tin, phân biệt giả thuyết với sự kiện.'] : ['Khi có mâu thuẫn giữa truyền thuyết và hồ sơ, cần ghi rõ mức độ xác thực thay vì khẳng định tùy tiện.',true,'Phân biệt truyền thuyết, giả thuyết và kết luận đã kiểm chứng.']
    ]};
  }
  const understanding = [
    ['Vì sao khi tìm hiểu nguồn gốc một lễ hội, không nên chỉ dựa vào một lời kể? Nêu hai bước kiểm chứng.', 'Lời kể có thể thiếu hoặc thiên lệch; xác định người kể/bối cảnh, đối chiếu văn bản, hiện vật hoặc nhiều nhân chứng; ghi rõ điều chắc chắn và chưa chắc chắn.'],
    ['Giải thích vì sao cần học lịch sử suốt đời; nêu một tình huống vận dụng trong đời sống.', 'Tri thức được bổ sung khi có tư liệu và phương pháp mới; hiểu quá khứ giúp nhận diện bản sắc, rút kinh nghiệm; ví dụ tìm hiểu nguồn gốc di tích địa phương trước khi giới thiệu.'],
    ['Một học sinh thấy hai bài viết trái ngược về một di tích. Em sẽ kiểm tra thông tin theo những bước nào?', 'Xác định tác giả, thời điểm, nguồn trích; so sánh với tư liệu đáng tin cậy; phân biệt dữ kiện và nhận xét; chỉ kết luận trong phạm vi chứng cứ.'],
    ['Vì sao việc học lịch sử có thể góp phần bảo vệ di sản địa phương? Nêu một ví dụ cụ thể.', 'Hiểu nguồn gốc, giá trị giúp ứng xử phù hợp, không phá hoại; ví dụ ghi chú, thuyết minh đúng tư liệu và giữ gìn hiện vật ở đình/làng/bảo tàng.'],
    ['Nêu hai điều cần lưu ý khi dùng ảnh cũ đăng trên mạng làm tư liệu lịch sử. Giải thích.', 'Kiểm tra xuất xứ/niên đại/bối cảnh và đối chiếu tư liệu khác; chú thích mạng có thể sai hoặc ảnh bị cắt khỏi bối cảnh.'],
    ['Phân biệt một dữ kiện đã xảy ra với cách con người nhận thức về dữ kiện đó bằng ví dụ lịch sử địa phương.', 'Dữ kiện quá khứ khách quan, không đổi; lời kể, tài liệu, lí giải là nhận thức có thể bổ sung; ví dụ năm xây đình đối chiếu bia ký với truyền khẩu.'],
    ['Giải thích mối liên hệ giữa tri thức lịch sử và việc ra quyết định bảo tồn một di tích.', 'Nghiên cứu giúp xác định gốc tích, niên đại, giá trị, phần gốc/phần phục dựng; từ đó quyết định gìn giữ, sử dụng, giới thiệu có trách nhiệm.'],
    ['Một bảo tàng nhận được hiện vật không rõ nguồn gốc. Vì sao chưa nên giới thiệu niên đại như một sự thật chắc chắn?', 'Thiếu xuất xứ và đối chiếu nên chưa đủ chứng cứ; cần nghiên cứu vật liệu, bối cảnh, hồ sơ liên quan, diễn đạt mức độ chắc chắn.'],
    ['Tại sao việc đối chiếu nhiều nguồn tư liệu là điều kiện quan trọng khi học lịch sử?', 'Nguồn có góc nhìn và giới hạn khác nhau; kiểm chứng chéo giúp tìm điểm thống nhất, phát hiện sai lệch và rút kết luận vững hơn.'],
    ['Nêu một ví dụ cho thấy bài học lịch sử cần được vận dụng linh hoạt, không sao chép nguyên xi vào hiện tại.', 'Bối cảnh thời gian, điều kiện và mục tiêu thay đổi; có thể học kinh nghiệm cộng đồng bảo vệ di tích nhưng chọn cách quản lí khách và công nghệ phù hợp hiện nay.']
  ];
  const application = [
    ['Một nhóm làm triển lãm so sánh các nền văn minh ven sông phương Đông với Hy Lạp–La Mã ven Địa Trung Hải. Hãy chỉ ra hai khác biệt về điều kiện tự nhiên/hoạt động kinh tế, giải thích vì sao không thể từ đó kết luận nền nào “cao hơn”, rồi chọn một thành tựu tiêu biểu của mỗi bên để minh họa.', 'Phương Đông: lưu vực sông lớn, thủy lợi và nông nghiệp quan trọng; Hy Lạp–La Mã: ven biển, giao thương và thủ công phát triển. Điều kiện khác nhau tạo con đường phát triển khác nhau, không phải thước đo cao thấp. Ví dụ chữ viết Ai Cập/Ấn Độ và chữ La-tinh/kiến trúc Hy Lạp–La Mã.'],
    ['Một bài đăng viết: “Vì người Việt dùng chữ Hán và tiếp nhận Nho giáo nên văn hóa Việt Nam chỉ là bản sao Trung Hoa”. Hãy phản biện bằng cách phân biệt tiếp nhận với tiếp biến và nêu một đóng góp, một giới hạn lịch sử của Nho giáo.', 'Chữ Hán, Nho giáo ảnh hưởng đến học thuật/quản lí ở Việt Nam nhưng được tiếp nhận, vận dụng trong bối cảnh riêng; văn hóa Việt có chủ thể và bản sắc. Nho giáo khuyến học/tôn sư trọng đạo; các cách diễn giải gia trưởng, trọng nam khinh nữ hạn chế quyền bình đẳng. Không đồng nhất toàn bộ văn hóa Việt với một nguồn ảnh hưởng.'],
    ['Trường muốn giới thiệu một lễ hội có dấu ấn Phật giáo Ấn Độ và văn hóa bản địa. Em hãy đề xuất nội dung bảng giới thiệu sao cho thể hiện sự giao lưu văn minh phương Đông và cách kiểm chứng thông tin.', 'Nêu Phật giáo khởi nguồn Ấn Độ, lan truyền và hòa nhập với văn hóa địa phương; chỉ ra yếu tố bản địa cụ thể nếu có chứng cứ; kiểm tra niên đại, văn bản, hiện vật, lời kể và ghi rõ điều còn tranh luận.'],
    ['Một học sinh khẳng định: “Xã hội phương Đông cổ đại chỉ làm nông, còn Hy Lạp–La Mã chỉ buôn bán”. Hãy sửa nhận định, nêu vai trò của môi trường tự nhiên và một thành tựu của mỗi khu vực.', 'Cả hai đều có nhiều hoạt động kinh tế; phương Đông có nông nghiệp/thủy lợi nổi bật, phương Tây Địa Trung Hải có thương mại, thủ công nổi bật. Tránh tuyệt đối hóa. Ví dụ lịch Ai Cập hoặc hệ số Ấn Độ; chữ La-tinh, khoa học Hy Lạp.'],
    ['Một bảo tàng muốn đặt cạnh nhau bản sao kim tự tháp Ai Cập, chùa hang A-gian-ta và đền Pác-tê-nông. Hãy xây chú thích ngắn cho thấy mỗi công trình thuộc nền văn minh nào, rồi nêu vì sao các công trình phản ánh những nhu cầu và niềm tin khác nhau.', 'Ghi đúng Ai Cập, Ấn Độ, Hy Lạp; kim tự tháp gắn lăng mộ/nhà nước, chùa hang chịu ảnh hưởng Phật giáo, đền Pác-tê-nông gắn tín ngưỡng Hy Lạp. So sánh theo bối cảnh, không đồng nhất chức năng.'],
    ['Trong buổi tranh luận về Nho giáo, một nhóm chỉ nói tới hiếu học, nhóm khác chỉ nói tới bất bình đẳng giới. Hãy đưa ra đánh giá cân bằng theo bối cảnh lịch sử và đề xuất cách tiếp nhận giá trị phù hợp hiện nay.', 'Nho giáo góp phần coi trọng giáo dục, thi cử, đạo hiếu, trật tự xã hội; trong thực hành lịch sử có những quan niệm gia trưởng, trọng nam khinh nữ, thứ bậc. Giữ tinh thần học tập, nhân ái/tôn trọng; bác bỏ phân biệt giới, áp đặt hôn nhân, đề cao bình đẳng. Tránh kết luận mọi hệ quả kinh tế do riêng Nho giáo.'],
    ['Một bản đồ giao lưu văn hóa ghi Phật giáo, chữ viết Ấn Độ và chữ Hán từ Trung Hoa đều “được sao chép nguyên xi” ở Đông Nam Á. Hãy nhận xét và nêu hai ví dụ về tiếp biến văn hóa.', 'Các thành tựu lan tỏa qua giao lưu nhưng được chọn lọc/biến đổi; Phật giáo hòa nhập tín ngưỡng bản địa; chữ viết Ấn Độ là cơ sở cho một số chữ viết khu vực; chữ Hán được Việt Nam tiếp nhận và phát triển văn học/chữ Nôm. Không khẳng định mọi nước giống nhau.'],
    ['Hai nhóm thiết kế bảo tàng số: nhóm A chỉ trưng bày kĩ thuật thủy lợi phương Đông; nhóm B chỉ trưng bày chữ La-tinh và thương mại Địa Trung Hải. Hãy đề xuất cách kết hợp để người xem hiểu tính đa dạng của các nền văn minh cổ đại.', 'Bổ sung địa lí, kinh tế, tổ chức xã hội và thành tựu vật chất/tinh thần của cả hai; phương Đông có hệ thống sông, nông nghiệp và thủy lợi, phương Tây có biển, đô thị, giao thương; cả hai cùng sáng tạo và ảnh hưởng về sau.'],
    ['Một video cho rằng thành tựu số học của Ấn Độ “không liên quan gì” tới Việt Nam hiện nay. Hãy phản biện bằng một minh chứng và so sánh thêm với một thành tựu khoa học/kĩ thuật Trung Hoa có ảnh hưởng rộng.', 'Hệ 10 chữ số do Ấn Độ đóng góp được sử dụng trong học tập/giao dịch tại Việt Nam và thế giới; Trung Hoa có giấy, in, la bàn, thuốc súng lan tỏa rộng. Nêu con đường giao lưu, tiếp nhận, không gán mọi ứng dụng hiện đại trực tiếp/duy nhất cho một nền văn minh.'],
    ['Một kế hoạch du lịch ghi “Mọi giá trị ở Việt Nam đều bắt nguồn từ Ấn Độ hoặc Trung Hoa, còn phương Tây không để lại ảnh hưởng nào”. Hãy phản biện bằng ít nhất ba ví dụ thuộc các khu vực khác nhau và một nguyên tắc tôn trọng bản sắc địa phương.', 'Ấn Độ: Phật giáo/chữ viết/kiến trúc ở Đông Nam Á; Trung Hoa: chữ Hán/Nho giáo hoặc kĩ thuật; phương Tây: chữ La-tinh và nhiều tri thức khoa học (cần phân biệt thời kì du nhập). Việt Nam chủ động tiếp nhận, biến đổi; không xóa nguồn bản địa, không đồng nhất mọi địa phương.']
  ];
  const rotate = (question, exam, slot) => {
    // Xoay cả vị trí đáp án, không sửa câu chữ/ý nghĩa.
    const shift = (exam + slot * 3) % 4;
    const opts = question[1].map((_,i)=>question[1][(i+shift)%4]);
    return [question[0],opts,(question[2]-shift+4)%4,question[3]];
  };
  window.historyMidtermExams = Array.from({length:10}, (_,i)=>{
    const used = new Map();
    const questions = plan.map((tag,slot)=>{
      const count=used.get(tag)||0; used.set(tag,count+1);
      const arr=banks[tag];
      const step = tag === 'b1n' || tag === 'b2h' ? 2 : tag === 'b3n' || tag === 'b4n' ? 3 : 1;
      return rotate(arr[(i*step+count)%arr.length],i,slot);
    });
    return {
      id:`lich-su-10-giua-ki-luyen-tap-${String(i+1).padStart(2,'0')}`,
      title:`Lịch sử 10 · Đề luyện giữa kì I số ${String(i+1).padStart(2,'0')}`,
      subject:'history', duration:90, essayPoints:3,
      addedAt:`2026-11-13T${String(12+Math.floor(i/6)).padStart(2,'0')}:${String((i%6)*10).padStart(2,'0')}:00+07:00`,
      description:'Đề luyện tập theo ma trận chuyên Sử: 12 câu trắc nghiệm, 4 câu đúng/sai, 2 câu tự luận; không phải đề chính thức.',
      source:{school:'Đề luyện tập biên soạn',year:'2026–2027',note:'Dựa trên SGK Lịch sử 10 và khung ma trận giữa kì I chuyên Sử do người dùng cung cấp. Các gợi ý trên bảng lớp chỉ là trọng tâm tham khảo, không bảo đảm xuất hiện trong đề chính thức.'},
      matrixTags:plan,
      questions,
      tf:[tfHistory(i,0),tfHistory(i,1),tfHeritage(i,2),tfHeritage(i,3)],
      short:[],
      essay:[
        {title:'Câu 1 · Thông hiểu (1,0 điểm)',question:understanding[i][0],solution:understanding[i][1],points:1},
        {title:'Câu 2 · Vận dụng (2,0 điểm)',question:application[i][0],solution:application[i][1],points:2}
      ]
    };
  });
})();
