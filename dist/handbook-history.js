// Sổ tay tự học Lịch sử 10, biên soạn theo SGK người dùng cung cấp (trang in 6–37).
// Ma trận chuyên Sử là khung ôn tập; ghi chú lớp/Nho giáo không phải dự báo chắc chắn đề thi.
{
  const item = (name, reference, formula, desc, example, traps, forms = 'Trắc nghiệm · đúng/sai · tự luận', freq = 'Trọng tâm') =>
    ({name, reference, formula, desc, example, traps, forms, freq});

  handbookData.history = {
    id: 'history', name: 'Lịch sử 10', icon: 'S', color: '#8a4d0e', bg: '#fff2dd',
    source: 'Biên soạn từ Đề cương ôn tập Lịch sử giữa kì I bạn gửi (Bài 1–4), đối chiếu SGK Lịch sử 10 và ma trận chuyên Sử. Đây là tài liệu luyện tập, không phải nội dung đề thi đã được xác nhận.',
    sections: [
      {title: 'Lộ trình ôn tập và cách làm bài', badge: '90 phút · 10 điểm', items: [
        item('Ma trận: học đủ nội dung, đúng trọng số', 'Ma trận giữa kì chuyên Sử, mục phân bố câu và điểm',
          '12 câu nhiều lựa chọn × 0,25 = 3 điểm.<br>4 nhóm đúng/sai × 4 ý, tối đa 4 điểm.<br>2 câu tự luận: 1 + 2 = 3 điểm.<br>Trọng số: Bài 1 27,5%; Bài 2 15%; Bài 3 27,5%; Bài 4 10%; vận dụng mở rộng 20%.',
          'Bài 1 kiểm tra khái niệm và cách nhận thức quá khứ; Bài 2 kiểm tra việc học lịch sử gắn với cuộc sống; Bài 3 hỏi di sản, du lịch; Bài 4 hỏi văn minh phương Đông và ảnh hưởng ở Việt Nam. Khi vận dụng cần lập luận, không chỉ thuộc tên thành tựu.',
          'Tự kiểm tra: bạn có giải thích được vì sao một di vật là nguồn sử liệu nhưng lời diễn giải về di vật vẫn cần đối chiếu không? Nếu chưa, hãy ôn Bài 1 trước khi làm đề.',
          'Không học tủ một đoạn Nho giáo vì lời nhắc trong lớp chưa xác nhận đề chính thức.', 'Định hướng ôn', 'Theo ma trận'),
        item('Cách xử lí câu đúng/sai có tư liệu', 'Ma trận: 4 nhóm đúng/sai; SGK Bài 1–3, tr. 6–20',
          'Đọc nguồn → xác định điều nguồn nói trực tiếp → đối chiếu kiến thức SGK → xét từng ý độc lập → gạch từ tuyệt đối như “chỉ”, “mọi”, “hoàn toàn”.',
          'Một câu có thể chứa nhiều ý đúng và sai; không suy ra ý d đúng vì a, b, c đều đúng. Phân biệt nội dung nguồn với suy luận của người ra đề. Nếu nguồn chỉ cho một trường hợp, không được suy thành quy luật cho mọi thời kì.',
          'Một tư liệu nói di tích được trùng tu năm 2020: kết luận “di tích được xây năm 2020” là sai, vì năm trùng tu không phải năm hình thành.',
          'Đừng đánh giá cả nhóm bằng cảm giác. Viết ngắn lí do cho từng ý trước khi chọn.', 'Đúng/sai · đọc tư liệu', '4 nhóm'),
        item('Khung viết tự luận: trả lời đủ ý và có dẫn chứng', 'Ma trận: 2 câu tự luận; SGK Bài 2, Bài 4–5',
          'Mở: trả lời thẳng câu hỏi.<br>Thân: mỗi luận điểm = nhận định + bằng chứng cụ thể + giải thích.<br>Kết: nêu ý nghĩa, giới hạn hoặc liên hệ phù hợp.',
          'Với câu 1 điểm, ưu tiên 2–3 ý chính thật chính xác. Với câu 2 điểm, phân nhóm tiêu chí, so sánh trực tiếp, nêu ví dụ và tránh kết luận tuyệt đối. Nếu đề yêu cầu “đánh giá”, phải có mặt tích cực, hạn chế và quan điểm hiện nay.',
          'Câu hỏi “du lịch giúp gì cho di sản?”: nêu nguồn lực bảo tồn và cơ hội quảng bá; đồng thời giải thích điều kiện quản lí khách để di sản không bị xuống cấp.',
          'Liệt kê tên địa danh mà không giải thích cơ chế tác động sẽ thiếu ý vận dụng.', 'Tự luận · vận dụng', '3 điểm')
      ]},

      {title: 'Bài 1 · Hiện thực lịch sử và Sử học', badge: '27,5% theo ma trận', items: [
        item('Lịch sử có hai nghĩa: quá khứ và sự nhận thức', 'SGK Bài 1, tr. 7–8',
          '<b>Hiện thực lịch sử</b>: toàn bộ những gì đã diễn ra trong quá khứ, tồn tại khách quan.<br><b>Lịch sử được con người nhận thức</b>: hiểu biết, cách tái hiện và giải thích những gì đã diễn ra.',
          'Sự kiện đã xảy ra không đổi theo ý muốn người nghiên cứu. Nhưng nhận thức có thể thay đổi khi xuất hiện nguồn mới, cách đọc mới hoặc phương pháp nghiên cứu tốt hơn. Nhận thức không thể bao quát trọn vẹn mọi chi tiết quá khứ.',
          'Mũi tên đồng ở Cổ Loa từng được chế tạo và sử dụng thuộc hiện thực lịch sử; sách, phim hoặc bài thuyết minh diễn giải về chúng thuộc lịch sử được nhận thức.',
          '“Cách kể khác nhau” không đồng nghĩa “quá khứ có nhiều phiên bản”; điều cần kiểm tra là bằng chứng của từng cách kể.'),
        item('Vì sao nhận thức lịch sử có thể khác nhau?', 'SGK Bài 1, tr. 7–8',
          'Khác biệt có thể do nguồn tư liệu chưa đầy đủ; mục đích, năng lực, phương pháp và lập trường của người tìm hiểu khác nhau.',
          'Một nhân chứng chỉ nhìn thấy một phần sự kiện. Người viết sau đó có thể sử dụng thêm hiện vật hoặc ghi chép khác. Vì thế nhà sử học cần so sánh nguồn và nói rõ điều đã biết, điều còn chưa chắc.',
          'Hai bia tưởng niệm cùng nói về sự kiện năm 1521 nhưng nhấn mạnh hai nhân vật khác nhau: hãy hỏi ai làm bia, khi nào, nhằm tưởng niệm ai, rồi tìm thêm nguồn trước khi kết luận.',
          'Không vội kết luận một nguồn sai chỉ vì nó khác nguồn khác; cũng không mặc nhiên coi mọi cách giải thích ngang nhau.'),
        item('Sử học nghiên cứu điều gì?', 'SGK Bài 1, tr. 8–9',
          'Sử học là khoa học nghiên cứu về quá khứ của loài người; đối tượng là các hoạt động của con người trong quá khứ trên mọi lĩnh vực, từ cá nhân tới cộng đồng.',
          'Sử học tìm hiểu sự kiện và quá trình, nguyên nhân, diễn biến, kết quả, tác động trong bối cảnh. Cầu, đình, thư tịch, truyền thống đều có thể là nguồn để nghiên cứu hoạt động của con người, nhưng bản thân vật trưng bày không phải là toàn bộ lịch sử.',
          'Nghiên cứu cầu Long Biên có thể hỏi bối cảnh xây dựng, công nghệ, đời sống người lao động và những biến đổi của Hà Nội qua các thời kì.',
          'Đừng thu hẹp Sử học thành việc nhớ năm tháng hoặc chỉ nghiên cứu chiến tranh, vua chúa.'),
        item('Chức năng và nhiệm vụ của Sử học', 'SGK Bài 1, tr. 9',
          'Chức năng khoa học: nhận thức, khôi phục và giải thích quá khứ trên cơ sở chứng cứ.<br>Chức năng xã hội: góp phần giáo dục, bồi dưỡng ý thức cộng đồng và cung cấp kinh nghiệm cho hiện tại.<br>Nhiệm vụ: nhận thức, giáo dục, dự báo.',
          'Dự báo ở đây là rút xu hướng và kinh nghiệm từ quá khứ để tham khảo, không phải tiên tri một tương lai chắc chắn. Giáo dục lịch sử cần dựa vào hiểu biết có căn cứ, không bóp méo sự kiện để tạo cảm xúc.',
          'Nghiên cứu một đợt lũ lịch sử giúp giải thích điều đã xảy ra; rút bài học về ứng phó và bảo vệ tư liệu là ứng dụng cho hiện nay.',
          'Không đồng nhất chức năng khoa học với chức năng xã hội; cả hai liên hệ nhưng không thay thế nhau.'),
        item('Các loại sử liệu và cách khai thác', 'SGK Bài 1, tr. 7–9; Bài 2, tr. 14–15',
          'Nguồn có thể là hiện vật, chữ viết, hình ảnh, lời kể/truyền miệng và tư liệu số. Với mỗi nguồn, hỏi: ai tạo, tạo khi nào, ở đâu, nhằm mục đích gì, còn nguyên vẹn không?',
          'Hiện vật cho biết chất liệu, kĩ thuật, dấu vết sử dụng; văn bản cho biết cách người đương thời ghi chép nhưng chịu ảnh hưởng góc nhìn tác giả; lời kể lưu giữ kí ức nhưng có thể nhầm thời điểm. Đối chiếu nhiều nguồn là bước thiết yếu.',
          'Muốn xác định niên đại một ngôi đình: so sánh bia ký, hồ sơ bảo tồn, vật liệu và ảnh cũ; ghi rõ thời điểm xây dựng khác thời điểm tu sửa.',
          'Không đánh giá độ đáng tin chỉ bằng việc nguồn “cổ”, “đẹp” hay được chia sẻ nhiều.'),
        item('Phân biệt dữ kiện, suy luận và nhận định', 'SGK Bài 1, tr. 7–10',
          '<b>Dữ kiện</b>: thông tin có thể kiểm tra bằng nguồn.<br><b>Suy luận</b>: kết luận rút ra từ dữ kiện.<br><b>Nhận định</b>: đánh giá cần tiêu chí và lập luận.',
          'Một câu hỏi thông hiểu thường không hỏi lại nguyên văn sách mà đưa tình huống có tư liệu. Xác định phần nào nguồn khẳng định, phần nào người viết suy thêm. Nếu chứng cứ chưa đủ, chọn câu trả lời nêu mức độ chắc chắn phù hợp.',
          'Ảnh cho thấy một cổng thành còn tồn tại. Có thể kết luận “cổng thành hiện diện trong ảnh”; không thể chỉ từ ảnh ấy khẳng định toàn bộ thành được xây cùng năm.',
          'Tránh chuyển “có thể” thành “chắc chắn”, “một số” thành “tất cả”.')
      ]},

      {title: 'Bài 2 · Tri thức lịch sử và cuộc sống', badge: '15% theo ma trận', items: [
        item('Vì sao con người cần biết lịch sử?', 'SGK Bài 2, tr. 11–13',
          'Lịch sử giúp hiểu cội nguồn bản thân, gia đình, cộng đồng; hiểu sự hình thành của hiện tại; trân trọng khác biệt và rút kinh nghiệm cho lựa chọn hôm nay.',
          'Hiểu quá khứ tạo cơ sở để giải thích vì sao một phong tục, địa danh hoặc thiết chế hiện có. Nó cũng giúp nhận diện thành tựu, sai lầm và giới hạn của từng giai đoạn. Bài học lịch sử chỉ hữu ích khi cân nhắc điều kiện hiện tại.',
          'Tìm hiểu nguồn gốc một lễ hội giúp người tổ chức phân biệt nghi thức cổ được chứng thực với tiết mục mới thêm gần đây.',
          'Không hiểu “học sử để rút kinh nghiệm” thành lặp nguyên xi cách làm của người xưa.'),
        item('Vì sao phải học lịch sử suốt đời?', 'SGK Bài 2, tr. 12–14',
          'Quá khứ rộng và nhiều khoảng trống; nguồn tư liệu mới, phương pháp mới có thể bổ sung hoặc điều chỉnh nhận thức. Cuộc sống mới cũng đặt ra câu hỏi mới với lịch sử.',
          'Học suốt đời không chỉ là học trong lớp: đọc sách, tham quan bảo tàng, nghe nhân chứng, tra cứu thư viện, tham gia dự án địa phương. Mỗi cách đều cần kiểm tra xuất xứ và đối chiếu.',
          'Một hiện vật mới khai quật có thể khiến ta sửa lại niên đại hoặc cách giải thích về một di tích; điều đó cho thấy hiểu biết được cập nhật, không phải sự kiện quá khứ thay đổi.',
          'Không xem sách giáo khoa là nguồn duy nhất hoặc mạng xã hội là chứng cứ đủ dùng.'),
        item('Thu thập và xử lí sử liệu theo quy trình', 'SGK Bài 2, tr. 14–15',
          'Bước 1: xác định câu hỏi.<br>Bước 2: tìm nguồn phù hợp.<br>Bước 3: ghi xuất xứ, thời gian, tác giả.<br>Bước 4: đối chiếu và phân loại dữ kiện/ý kiến.<br>Bước 5: kết luận có căn cứ, nêu điều chưa rõ.',
          'Nên ưu tiên nguồn gốc rõ ràng, lưu bản chụp/trích dẫn và tránh tách câu khỏi ngữ cảnh. Khi các nguồn khác nhau, mô tả sự khác biệt rồi giải thích khả năng nguyên nhân thay vì chọn nguồn hợp ý mình.',
          'Làm bài giới thiệu di tích: hỏi hồ sơ bảo tồn, xem bia ký, phỏng vấn người trông coi; nếu hai tài liệu ghi năm khác nhau, nêu cả hai và nguyên nhân chưa thống nhất.',
          'Không bịa dữ kiện để lấp chỗ trống, không lấy hình minh họa trên mạng làm chứng cứ cho thời điểm lịch sử.'),
        item('Liên hệ quá khứ với vấn đề hiện tại', 'SGK Bài 2, tr. 12–15',
          'Nêu vấn đề hôm nay → chọn kinh nghiệm lịch sử liên quan → chỉ ra điểm giống/khác bối cảnh → rút bài học khả thi.',
          'Vận dụng là giải thích hoặc đề xuất dựa vào chứng cứ, không phải chỉ phát biểu “cần phát huy truyền thống”. Cần nói rõ phát huy cái gì, với ai, bằng cách nào và giới hạn ra sao.',
          'Với hiện tượng thông tin sai về di tích: đề xuất bảng thông tin có nguồn, mã tra cứu hồ sơ và hướng dẫn người xem phân biệt bản gốc với bản phục dựng.',
          'Nếu bối cảnh khác nhau, kết quả cũ không bảo đảm lặp lại; tránh suy luận nhân quả quá đơn giản.'),
        item('Mẫu trả lời tự luận 1 điểm: giá trị học sử', 'SGK Bài 2, tr. 11–15; ma trận tự luận',
          'Luận điểm 1: hiểu cội nguồn, quá trình hình thành hiện tại.<br>Luận điểm 2: rút kinh nghiệm và ý thức trách nhiệm.<br>Luận điểm 3: cần tiếp tục kiểm chứng, cập nhật tri thức.',
          'Nếu đề hỏi “vì sao học lịch sử suốt đời?”, đừng chỉ viết “vì lịch sử rất quan trọng”. Giải thích rằng nguồn mới làm nhận thức thêm đầy đủ, hiện tại cần bài học quá khứ và việc học diễn ra bằng nhiều hình thức.',
          'Một đoạn đạt yêu cầu: “Việc học lịch sử không dừng ở trường học vì quá khứ còn nhiều điều chưa rõ. Nguồn mới có thể bổ sung hiểu biết; nhờ đó ta hiểu cội nguồn và vận dụng kinh nghiệm phù hợp vào vấn đề hôm nay.”',
          'Ví dụ là đoạn mẫu luyện tập, không phải đáp án duy nhất hay nguyên văn SGK.', 'Tự luận · 1 điểm', 'Bài mẫu')
      ]},

      {title: 'Bài 3 · Vai trò của Sử học với di sản và du lịch', badge: '27,5% theo ma trận', items: [
        item('Di sản văn hóa và di sản thiên nhiên', 'SGK Bài 3, tr. 16–18',
          'Di sản văn hóa vật thể: công trình, hiện vật, địa điểm.<br>Di sản văn hóa phi vật thể: thực hành, tri thức, nghệ thuật trình diễn, lễ hội...<br>Di sản thiên nhiên: cảnh quan, địa chất, hệ sinh thái có giá trị.',
          'Các loại hình đều có giá trị nhưng cách bảo vệ khác nhau: công trình cần gìn giữ vật liệu và cấu trúc; thực hành văn hóa cần người truyền dạy và cộng đồng thực hành; thiên nhiên cần quản lí hệ sinh thái và lượng tác động.',
          'Hát Xoan được duy trì bằng truyền dạy; nền gạch cổ ở Huế cần tránh mài mòn; hang động cần giới hạn hành vi tác động đến nhũ đá.',
          'Không gọi một lễ hội chỉ là hiện vật, hay coi cảnh quan thiên nhiên chỉ có giá trị du lịch.'),
        item('Sử học giúp nhận diện và đánh giá giá trị di sản', 'SGK Bài 3, tr. 16–17',
          'Nghiên cứu nguồn gốc, niên đại, cấu trúc, chủ nhân, các lớp biến đổi → xác định giá trị lịch sử và tính xác thực → lập phương án bảo tồn phù hợp.',
          'Phương pháp sử học cung cấp cơ sở khoa học cho việc phân biệt phần gốc với phần sửa sau, nhận diện ý nghĩa của hiện vật, giải thích bối cảnh. Đánh giá phải liên ngành, kết hợp khảo cổ, kiến trúc, bảo tồn, môi trường khi cần.',
          'Trước khi phục dựng một cổng thành, khảo sát ảnh cũ, bản vẽ, dấu vết nền móng để tránh dựng chi tiết không có chứng cứ.',
          'Không thay thế nghiên cứu bằng truyền thuyết hoặc thuyết minh hấp dẫn mà thiếu nguồn.'),
        item('Bảo tồn và phát huy giá trị phải đi cùng nhau', 'SGK Bài 3, tr. 17–18',
          'Bảo tồn: gìn giữ giá trị, tính xác thực và tính toàn vẹn.<br>Phát huy: giúp cộng đồng hiểu, tiếp cận, sử dụng giá trị di sản một cách bền vững.',
          'Bảo tồn không nhất thiết là đóng cửa mọi di sản; phát huy không đồng nghĩa tùy tiện cải tạo. Giải pháp tốt tạo điều kiện học tập và tham quan nhưng giảm tác động có hại, có người địa phương tham gia.',
          'Cho khách xem hiện vật qua tủ bảo vệ và bản mô phỏng tương tác vừa hỗ trợ giáo dục vừa hạn chế chạm vào bản gốc.',
          '“Xây mới càng giống cổ càng tốt” có thể làm mất tính xác thực; cần phân biệt bản gốc với bản phục dựng.'),
        item('Vì sao lịch sử và văn hóa thúc đẩy du lịch?', 'SGK Bài 3, tr. 19–20',
          'Tri thức lịch sử tạo câu chuyện có căn cứ, giúp thiết kế tuyến tham quan, bảng thuyết minh, bảo tàng và hoạt động trải nghiệm. Di sản trở thành nguồn lực của du lịch văn hóa.',
          'Khách tham quan không chỉ nhìn một công trình mà muốn hiểu ai xây, dùng để làm gì, đã thay đổi ra sao. Thuyết minh có kiểm chứng làm trải nghiệm đáng tin, đồng thời thúc đẩy sự tôn trọng di sản.',
          'Tại di tích Cổ Loa, sơ đồ các vòng thành và thông tin khảo cổ giúp khách hiểu không gian lịch sử tốt hơn một câu chuyện truyền miệng đơn lẻ.',
          'Không biến chuyện kể chưa kiểm chứng thành sự kiện đã được chứng minh.'),
        item('Du lịch có thể hỗ trợ hoặc gây hại cho di sản', 'SGK Bài 3, tr. 19–20',
          'Mặt tích cực: tạo kinh phí, việc làm, động lực quảng bá và bảo tồn.<br>Rủi ro: quá tải, rác, mài mòn, thương mại hóa và làm sai lệch nghi lễ.',
          'Tác động phụ thuộc cách quản lí: giới hạn lượng khách theo sức chịu tải, bố trí lối đi, kiểm soát dịch vụ, tái đầu tư vào bảo tồn, để cộng đồng có tiếng nói. Doanh thu cao không tự động chứng minh bảo tồn tốt.',
          'Một hang động đông khách có thể cần tuyến tham quan cố định và hạn chế ánh sáng, âm thanh gây hại dù giảm số vé bán trong ngắn hạn.',
          'Đừng chọn đáp án “cứ tăng khách thì di sản càng được bảo vệ” hoặc “phải cấm mọi hoạt động du lịch”.'),
        item('Mẫu phân tích tình huống di sản địa phương', 'SGK Bài 3, tr. 16–20',
          '1. Xác định loại di sản và giá trị.<br>2. Nêu nguy cơ cụ thể.<br>3. Dùng tư liệu lịch sử để chọn giải pháp.<br>4. Cân bằng giáo dục, sinh kế và bảo tồn.',
          'Câu vận dụng cần nêu hành động có chủ thể và lý do. Có thể phân vai nhà quản lí, nhà nghiên cứu, người dân, du khách; mỗi bên có trách nhiệm khác nhau. Nếu chưa đủ dữ liệu, đề xuất khảo sát trước khi can thiệp.',
          'Tình huống đình cổ bong tróc: khoanh vùng nguy hiểm, lập hồ sơ hiện trạng, hỏi chuyên gia bảo tồn, công khai lịch sử sửa chữa; chưa sơn mới toàn bộ theo cảm tính.',
          'Giải pháp chung chung “nâng cao ý thức” chưa đủ nếu không nói cách làm và vấn đề cần giải quyết.', 'Tình huống · đúng/sai · tự luận', 'Vận dụng')
      ]},

      {title: 'Bài 4 · Văn minh phương Đông cổ–trung đại', badge: '10% theo ma trận', items: [
        item('Văn hóa khác văn minh như thế nào?', 'SGK Bài 4, tr. 21–22',
          'Văn hóa: tổng thể giá trị vật chất và tinh thần con người sáng tạo, hình thành bản sắc.<br>Văn minh: trình độ phát triển cao của văn hóa và xã hội; dấu hiệu thường có nhà nước, đô thị, chữ viết và tiến bộ tổ chức, kĩ thuật.',
          'Văn hóa có từ khi con người xuất hiện, không đợi tới đô thị hay chữ viết. Văn minh không thay thế toàn bộ văn hóa mà phản ánh một giai đoạn phát triển. Cần xét dấu hiệu trong bối cảnh, không lấy một dấu hiệu đơn lẻ để xếp hạng xã hội.',
          'Một cộng đồng chưa có chữ viết vẫn có văn hóa; khi hình thành nhà nước, đô thị, chữ viết và kĩ thuật mới, có thể nhận diện một nền văn minh.',
          'Không nói cộng đồng không có văn minh là “không có văn hóa” hoặc “kém giá trị”.'),
        item('Định vị các trung tâm cổ đại và điều kiện hình thành', 'SGK Bài 4, tr. 22–27',
          'Ai Cập: lưu vực sông Nin.<br>Lưỡng Hà: khu vực giữa Ti-grơ và Ơ-phơ-rát.<br>Ấn Độ: lưu vực sông Ấn và sông Hằng.<br>Trung Hoa: nhiều lưu vực, nổi bật Hoàng Hà và Trường Giang.',
          'Sông cung cấp nước, phù sa, giao thông và thúc đẩy tổ chức cộng đồng, nhưng không phải nguyên nhân duy nhất tạo nên văn minh. Điều kiện tự nhiên tương tác với lao động, sản xuất, trao đổi và tổ chức xã hội.',
          'Nếu hỏi nền văn minh gắn với sông Nin, chọn Ai Cập; nếu hỏi chữ giáp cốt hoặc Hoàng Hà, liên hệ Trung Hoa.',
          'Đừng xếp Hy Lạp–La Mã vào nhóm văn minh phương Đông hoặc cho rằng mọi trung tâm đều ở đúng một con sông.'),
        item('Ai Cập: chữ viết, toán, lịch và kiến trúc', 'SGK Bài 4, tr. 22–24',
          'Chữ tượng hình phục vụ ghi chép.<br>Toán học, hình học và đo đạc phục vụ đời sống.<br>Lịch gắn với quan sát thiên văn.<br>Kiến trúc tiêu biểu: kim tự tháp, đền và cung điện.',
          'Thành tựu gắn với nhu cầu tổ chức xã hội và điều kiện tự nhiên. Chữ viết lưu giữ tri thức; toán học hỗ trợ đo đạc; lịch giúp tính thời gian; kiến trúc thể hiện kĩ thuật và tư tưởng tôn giáo, quyền lực.',
          'Bia Rô-xét-ta giúp các nhà nghiên cứu giải mã chữ Ai Cập cổ; kim tự tháp là công trình của Ai Cập, không phải Lưỡng Hà.',
          'Đừng nói bảng chữ cái La-tinh do Ai Cập sáng tạo; nguồn gốc của bảng chữ cái hiện đại là quá trình lâu dài qua nhiều nền văn minh.'),
        item('Ấn Độ: tôn giáo và tư tưởng', 'SGK Bài 4, tr. 24–25',
          'Hin-đu giáo phát triển từ truyền thống Bà La Môn; Phật giáo ra đời ở Ấn Độ và lan rộng sang nhiều khu vực.',
          'Tôn giáo ảnh hưởng đời sống tinh thần, nghi lễ, nghệ thuật và kiến trúc. Khi lan sang nơi khác, tư tưởng và thực hành được tiếp nhận, điều chỉnh theo hoàn cảnh địa phương; không phải mọi nước chịu ảnh hưởng theo cùng một cách.',
          'Chùa, tượng Phật, tháp ở nhiều nước Đông Nam Á cho thấy ảnh hưởng của Phật giáo; nhưng mỗi nơi có kiểu kiến trúc và truyền thống riêng.',
          'Phật giáo bắt nguồn ở Ấn Độ, không phải Trung Hoa; không đồng nhất mọi nét văn hóa Đông Nam Á với Ấn Độ.'),
        item('Ấn Độ: chữ viết, văn học và nghệ thuật', 'SGK Bài 4, tr. 25–26',
          'Các hệ chữ cổ, chữ Kha-rốt-thi và Bra-mi; tiếng Phạn; kinh Vê-đa, hai sử thi Ma-ha-bha-ra-ta và Ra-ma-ya-na; đền, chùa hang và tượng.',
          'Chữ viết cho phép lưu trữ và truyền bá tri thức; văn học chứa những quan niệm đạo đức, tôn giáo và nghệ thuật. Từ giao lưu, chữ viết Ấn Độ ảnh hưởng quá trình hình thành chữ viết ở một số nước Đông Nam Á.',
          'Ra-ma-ya-na là sử thi Ấn Độ có nhiều phiên bản, chuyển thể trong khu vực; khi nêu ảnh hưởng phải chỉ ra tiếp biến địa phương.',
          'Không gán Đường thi của Trung Hoa cho Ấn Độ; phân biệt tên tác phẩm với tên tôn giáo.'),
        item('Ấn Độ: khoa học, kĩ thuật và ý nghĩa', 'SGK Bài 4, tr. 26–27',
          'Nổi bật có hệ chữ số thập phân 0–9, số 0, thành tựu toán học, thiên văn và y học.',
          'Hệ chữ số và cách ghi theo vị trí tạo thuận lợi cho tính toán, thương mại, nghiên cứu. Khi trình bày ý nghĩa, không chỉ liệt kê tên thành tựu mà giải thích công dụng và sự lan tỏa của nó.',
          'Các chữ số 0–9 thường gọi là chữ số Ả Rập do con đường truyền bá tới châu Âu, nhưng nguồn gốc hệ ghi số theo vị trí gắn với Ấn Độ.',
          'Không nhầm chữ số Ấn Độ với số La Mã I, V, X.'),
        item('Trung Hoa: tư tưởng, chữ viết và văn học', 'SGK Bài 4, tr. 27–29',
          'Tư tưởng: Nho gia, Đạo gia, Mặc gia, Pháp gia; Phật giáo được du nhập.<br>Chữ viết: từ chữ giáp cốt, kim văn qua nhiều lần phát triển đến chữ Hán.<br>Văn học: thơ Đường, tiểu thuyết chương hồi và các tác phẩm tiêu biểu.',
          'Những trường phái khác nhau đưa ra cách lý giải đạo đức, xã hội, quản trị. Chữ viết tạo nền cho ghi chép hành chính, sử học, văn học. Khi nêu ảnh hưởng tới Việt Nam, cần phân biệt tiếp nhận chữ Hán với sáng tạo riêng của người Việt.',
          'Chữ giáp cốt khắc trên mai rùa, xương thú; ở Việt Nam từng dùng chữ Hán và sáng tạo chữ Nôm để ghi tiếng Việt.',
          'Không nói Phật giáo do Trung Hoa sáng lập; không đồng nhất mọi trường phái tư tưởng Trung Hoa với Nho giáo.'),
        item('Trung Hoa: khoa học, kĩ thuật và kiến trúc', 'SGK Bài 4, tr. 28–30',
          'Các phát minh thường nêu: giấy, kĩ thuật in, thuốc súng, la bàn. Cùng với đó là thành tựu về sử học, toán học, y học, thiên văn, lịch pháp, kiến trúc.',
          'Giấy và in hỗ trợ truyền bá văn bản; la bàn hỗ trợ định hướng; thuốc súng về sau có nhiều ứng dụng và hệ quả. Ý nghĩa lịch sử phụ thuộc bối cảnh sử dụng, nên tránh coi mọi phát minh chỉ có tác động tích cực.',
          'Khi làm bảng thành tựu, ghi “la bàn — định hướng, góp phần hỗ trợ đi biển” đầy đủ hơn chỉ viết “la bàn”.',
          'Không nhầm kim tự tháp Ai Cập với kiến trúc Trung Hoa; đừng khẳng định bốn phát minh xuất hiện cùng một lúc.'),
        item('Lập bảng thành tựu: tên, lĩnh vực, ý nghĩa', 'SGK Bài 4, bài tập tr. 30',
          'Mỗi hàng gồm <b>nền văn minh → thành tựu tiêu biểu → lĩnh vực → công dụng/ý nghĩa → ảnh hưởng</b>.',
          'Bảng giúp tránh học vẹt danh sách. Đối chiếu ít nhất hai lĩnh vực cho mỗi nền văn minh: chữ viết, khoa học, tư tưởng/tôn giáo, nghệ thuật/kiến trúc. Nếu đề hỏi “ý nghĩa”, phải viết thành câu có tác dụng cụ thể.',
          'Ai Cập — chữ tượng hình — chữ viết — lưu giữ thông tin. Ấn Độ — hệ chữ số — toán học — thuận tiện tính toán. Trung Hoa — giấy — kĩ thuật — mở rộng khả năng ghi chép, truyền bá tri thức.',
          'Đừng dùng một thành tựu để kết luận nền văn minh này “cao hơn” nền văn minh khác.', 'Bảng so sánh · trắc nghiệm · tự luận', 'Thông hiểu')
      ]},

      {title: 'Bài 4 · Đối chiếu thành tựu và vận dụng', badge: 'Ai Cập · Ấn Độ · Trung Hoa', items: [
        item('Văn minh nông nghiệp: bốn trung tâm ven sông', 'Đề cương giữa kì I, Bài 4',
          'Ai Cập — sông Nin; Lưỡng Hà — Ti-grơ và Ơ-phơ-rát; Ấn Độ — sông Ấn và sông Hằng; Trung Hoa — Hoàng Hà và Trường Giang.',
          'Nguồn nước, phù sa và nhu cầu tổ chức thủy lợi góp phần làm nông nghiệp quan trọng. Nhưng cư dân còn phát triển đô thị, thủ công, chữ viết, toán học và giao lưu; đừng hiểu “nông nghiệp” là chỉ có trồng trọt.',
          'Ai Cập phát triển lịch và toán học gắn với nhu cầu sản xuất, đo đạc; Trung Hoa có chữ viết và nhiều kĩ thuật.',
          'Không ghép nhầm sông Hằng với Trung Hoa hay cho rằng mọi trung tâm chỉ gắn với một con sông.'),
        item('Đối chiếu thành tựu cùng lĩnh vực', 'Đề cương giữa kì I, Bài 4',
          'Chữ viết: Ai Cập — tượng hình; Ấn Độ — Kha-rốt-thi, Bra-mi; Trung Hoa — giáp cốt, chữ Hán.<br>Toán học: Ai Cập — tính diện tích, pi xấp xỉ 3,16; Ấn Độ — mười chữ số; Trung Hoa — bàn tính, tính pi chính xác hơn.',
          'So theo cùng lĩnh vực và nêu đúng nguồn gốc, công dụng. Một thành tựu truyền sang nơi khác vẫn có nguồn hình thành riêng; tên giống nhau không có nghĩa được tạo ra cùng lúc hay cùng địa điểm.',
          'Lịch mặt trời gắn với Ai Cập; bốn phát minh lớn giấy, in, thuốc súng, la bàn gắn với Trung Hoa.',
          'Không gộp chữ số 0–9, lịch mặt trời và kĩ thuật in vào một nền văn minh.'),
        item('Tôn giáo, văn học và kiến trúc phương Đông', 'Đề cương giữa kì I, Bài 4',
          'Ấn Độ: Phật giáo, Ấn Độ giáo; Kinh Vê-đa, Ma-ha-bha-ra-ta, Ra-ma-ya-na; chùa, tháp và đền.<br>Trung Hoa: Nho giáo, Đạo giáo; Đường thi, tiểu thuyết chương hồi; Vạn Lý Trường Thành, Tử Cấm Thành.<br>Ai Cập: kim tự tháp, tượng Nhân sư.',
          'Gắn mỗi thành tựu với nền văn minh và chức năng cụ thể. Tư tưởng, văn học và kiến trúc có thể lan tỏa, nhưng cộng đồng tiếp nhận sẽ chọn lọc và biến đổi.',
          'Kim tự tháp là kiến trúc gắn lăng mộ; chùa tháp Phật giáo có chức năng tôn giáo; Trường Thành có chức năng phòng thủ.',
          'Đừng xếp Nho giáo vào Ấn Độ hoặc cho rằng mọi công trình cổ đều là đền thờ.'),
        item('Dàn ý tự luận 2 điểm: ảnh hưởng và tiếp biến', 'Đề cương giữa kì I, Bài 4; ma trận vận dụng',
          '1. Xác định nguồn gốc thành tựu và con đường giao lưu.<br>2. Nêu biểu hiện ở Việt Nam/Đông Nam Á bằng ví dụ cụ thể.<br>3. Phân biệt tiếp nhận với sao chép nguyên xi.<br>4. Đánh giá tác động hoặc giới hạn trong bối cảnh.',
          'Nếu hỏi về Nho giáo, trình bày cả mặt tích cực (hiếu học, đạo đức, quản lí) và giới hạn (gia trưởng, bất bình đẳng giới); đề xuất kế thừa có chọn lọc. Nếu hỏi Phật giáo, chỉ ra nguồn gốc Ấn Độ và sự hòa nhập với văn hóa bản địa.',
          'Một văn bản chữ Hán ở Việt Nam không đủ chứng minh tác giả là người Trung Hoa; cần xét tác giả, thời điểm và nội dung.',
          'Không quy mọi biến đổi xã hội hoặc kinh tế cho một học thuyết; không khẳng định câu thi chính thức chỉ có một kiểu liên hệ.', 'Tự luận · 2 điểm', 'Bài mẫu')
      ]},

      {title: 'Liên hệ Việt Nam, Đông Nam Á và Nho giáo', badge: 'Ôn vận dụng nhiều dạng', items: [
        item('Ảnh hưởng của Ấn Độ đến Đông Nam Á', 'SGK Bài 4, tr. 25–27, 30',
          'Nêu nguồn gốc thành tựu → con đường giao lưu → biểu hiện tại một nơi cụ thể → sự tiếp biến địa phương.',
          'Tôn giáo, văn học, nghệ thuật và chữ viết Ấn Độ ảnh hưởng nhiều vùng Đông Nam Á qua giao lưu. Mỗi cộng đồng chọn lọc, biến đổi theo ngôn ngữ, tín ngưỡng và điều kiện của mình; vì thế “ảnh hưởng” không đồng nghĩa “sao chép”.',
          'Khi nói về một ngôi đền chịu ảnh hưởng Ấn Độ, hãy chỉ ra hình thức tôn giáo/kiến trúc và yếu tố địa phương thay vì chỉ gọi tên nền văn minh.',
          'Không gộp tất cả quốc gia Đông Nam Á thành một con đường tiếp nhận giống hệt nhau.'),
        item('Ảnh hưởng của Trung Hoa đến Việt Nam', 'SGK Bài 4, tr. 27–30',
          'Có thể xét chữ viết, tư tưởng, giáo dục, tổ chức nhà nước, kĩ thuật; mỗi lĩnh vực cần ví dụ và sự biến đổi ở Việt Nam.',
          'Tư tưởng Nho giáo và chữ Hán có ảnh hưởng rõ trong lịch sử, song người Việt tiếp nhận có chọn lọc, sáng tạo chữ Nôm và duy trì các truyền thống riêng. Tác động thay đổi theo thời kì và không bao trùm mọi mặt đời sống.',
          'Câu trả lời có chiều sâu: “Chữ Hán được sử dụng trong hành chính và học thuật; trên cơ sở tiếp xúc ấy, người Việt sáng tạo chữ Nôm để ghi tiếng Việt.”',
          'Không gọi văn hóa Việt Nam là bản sao Trung Hoa; tránh bỏ qua chủ thể sáng tạo của người Việt.'),
        item('Nho giáo: giá trị tích cực trong bối cảnh lịch sử', 'SGK Bài 4, tr. 27–28; ghi chú ôn tập của người dùng',
          'Chính trị: góp phần tạo tư tưởng quản lí và trật tự nhà nước phong kiến.<br>Giáo dục: khuyến học, thi cử, đào tạo nhân tài, tôn sư trọng đạo.<br>Đạo đức/xã hội: nhân ái, lễ nghĩa, hiếu kính, coi trọng gia đình và quan hệ cộng đồng.',
          'Tác động thực tế khác nhau theo triều đại và xã hội. Khi đánh giá, đặt trong bối cảnh lịch sử: có nguyên tắc giúp tổ chức xã hội, nhưng cách áp dụng có thể khác lý tưởng ban đầu. Giá trị hiếu học, tôn trọng thầy cô có thể được kế thừa.',
          'Một chính sách mở trường, tổ chức khoa cử cho thấy mặt giáo dục; cần giải thích nó tạo con đường đào tạo người làm việc cho nhà nước.',
          'Không nói một học thuyết tự nó quyết định mọi chính sách hoặc mọi hành vi xã hội.'),
        item('Nho giáo: giới hạn và cách đánh giá hiện nay', 'SGK Bài 4, tr. 27–28; ghi chú ôn tập của người dùng',
          'Những biểu hiện cần phê phán trong xã hội chịu ảnh hưởng Nho giáo: thứ bậc cứng nhắc, gia trưởng, trọng nam khinh nữ, hạn chế quyền tự do và cơ hội của phụ nữ.',
          'Tách tư tưởng, cách diễn giải và thực tiễn áp dụng trong các bối cảnh khác nhau. Ngày nay có thể giữ tinh thần hiếu học, nhân ái, kính trọng người lớn nhưng không chấp nhận áp đặt hôn nhân hoặc bất bình đẳng giới. Không quy toàn bộ sự trì trệ kinh tế cho riêng Nho giáo; kinh tế chịu nhiều nguyên nhân.',
          '“Cha mẹ đặt đâu con ngồi đó” là quan niệm gia trưởng cần phê phán; tôn trọng cha mẹ không tước quyền lựa chọn của con.',
          'Đừng viết cực đoan “Nho giáo hoàn toàn tích cực/tiêu cực”. Nhận định “chắc chắn ra” từ bạn học không phải xác nhận đề thi.'),
        item('Bài mẫu đánh giá hai mặt Nho giáo', 'SGK Bài 4, tr. 27–28; ghi chú ôn tập của người dùng',
          'Đoạn 1: nêu bối cảnh và các đóng góp chính trị, giáo dục, đạo đức.<br>Đoạn 2: nêu biểu hiện bất bình đẳng và thứ bậc, giải thích hệ quả.<br>Đoạn 3: đề xuất tiếp nhận chọn lọc theo giá trị bình đẳng hiện nay.',
          'Một bài tốt không chỉ liệt kê 4 mặt tích cực và 4 mặt tiêu cực. Mỗi mặt chọn một bằng chứng hoặc tình huống, giải thích tác động và tránh gán mọi hiện tượng lịch sử cho một nguyên nhân duy nhất.',
          'Ví dụ kết luận: “Có thể phát huy truyền thống hiếu học, tôn trọng người dạy, đồng thời bác bỏ phân biệt giới và áp đặt hôn nhân. Đánh giá Nho giáo cần đặt trong hoàn cảnh lịch sử cụ thể.”',
          'Đây là khung luyện tập từ gợi ý lớp, không phải lời giải cho một đề chính thức đã công bố.', 'Tự luận · đánh giá hai mặt', 'Bài mẫu'),
        item('Phân biệt ảnh hưởng, tiếp nhận và tiếp biến', 'SGK Bài 4, bài tập tr. 30',
          'Ảnh hưởng: một yếu tố từ nơi khác tác động.<br>Tiếp nhận: cộng đồng lựa chọn đưa yếu tố vào đời sống.<br>Tiếp biến: yếu tố ấy được điều chỉnh, kết hợp với truyền thống địa phương để tạo hình thức mới.',
          'Đây là khung phân tích, không phải ba giai đoạn bắt buộc tuần tự cho mọi trường hợp. Bài vận dụng cần nêu ví dụ thật cụ thể: tên thành tựu, nơi tiếp nhận, nét biến đổi và ý nghĩa.',
          'Chữ Hán ảnh hưởng đời sống học thuật Việt Nam; người Việt dùng chữ Hán đồng thời sáng tạo chữ Nôm. Câu trả lời vì vậy không dừng ở “chịu ảnh hưởng”.',
          'Tránh kết luận một dân tộc mất bản sắc chỉ vì dùng một chữ viết hay tôn giáo từ bên ngoài.'),
        item('Tự luyện: bốn kiểu câu vận dụng khác nhau', 'Đề cương giữa kì I, Bài 1–4; ma trận tự luận',
          'Kiểu 1 — đánh giá nguồn: nguồn nào đáng tin hơn, vì sao?<br>Kiểu 2 — tình huống di sản: giải pháp bảo tồn nào có căn cứ?<br>Kiểu 3 — đối chiếu: thành tựu Ai Cập, Ấn Độ, Trung Hoa theo cùng lĩnh vực.<br>Kiểu 4 — đánh giá ảnh hưởng: đóng góp, hạn chế, sự tiếp biến.',
          'Hãy tự viết 4 đoạn, mỗi đoạn 5–7 câu. Đánh dấu trong mỗi đoạn một nhận định, một chứng cứ, một câu giải thích và một giới hạn. Sau đó đối chiếu lại trang SGK tương ứng, không học thuộc một bài duy nhất cho mọi dạng.',
          'Câu hỏi luyện: “Một địa phương muốn dựng lại toàn bộ cổng thành theo tranh dân gian. Em cần kiểm tra những nguồn nào trước khi đồng ý?” Gợi ý: khảo cổ, ảnh cũ, bản vẽ, hồ sơ tu bổ.',
          'Các tình huống luyện do sổ tay biên soạn để rèn tư duy, không phải câu hỏi nguyên văn SGK.', 'Luyện tập · tự luận', 'Vận dụng')
      ]}
    ]
  };

  // Gộp 40 ý nguồn thành 8 bài học (mỗi chủ đề chỉ còn 2 hàng để mở).
  // Nội dung của từng ý vẫn nằm trong bài học tương ứng, không bị lược bỏ.
  const lesson = (name, summary, parts) => ({
    name, formula: summary, lesson: true, freq: `${parts.length} ý`, forms: '',
    sourceItems: parts.map(part => part.name),
    desc: `<div class="history-study-notes">${parts.map(part => `
      <section class="history-study-topic">
        <h4>${part.name}</h4>
        <div class="history-study-core">${part.formula}</div>
        <p>${part.desc}</p>
        <p class="history-study-example"><b>Ví dụ:</b> ${part.example}</p>
        <p class="history-study-trap"><b>Lưu ý:</b> ${part.traps}</p>
        <small>Đối chiếu: ${part.reference}</small>
      </section>`).join('')}</div>`
  });
  const [guide, foundation, learning, heritage, eastern, western, influence] = handbookData.history.sections;
  handbookData.history.sections = [
    {title: 'Nền tảng Sử học và cách ôn (Bài 1–2)', badge: 'Khái niệm · sử liệu · phương pháp',
      items: [
        lesson('Lịch sử, Sử học và cách đọc sử liệu', 'Nắm sự khác nhau giữa quá khứ khách quan và hiểu biết về quá khứ; dùng chứng cứ để giải thích.', foundation.items),
        lesson('Vì sao học sử và vận dụng vào cuộc sống?', 'Học cội nguồn, cập nhật tri thức, xử lí nguồn và liên hệ vấn đề hiện tại.', learning.items)
      ]},
    {title: 'Di sản và du lịch (Bài 3)', badge: 'Bảo tồn · phát huy · vận dụng',
      items: [
        lesson('Nhận diện, bảo tồn và phát huy di sản', 'Phân loại di sản; dùng Sử học xác định giá trị và chọn cách bảo tồn phù hợp.', heritage.items.slice(0, 3)),
        lesson('Du lịch bền vững và bài tập tình huống', 'Phân tích cả lợi ích, rủi ro của du lịch và đề xuất giải pháp có căn cứ.', heritage.items.slice(3))
      ]},
    {title: 'Văn minh phương Đông và ảnh hưởng (Bài 4)', badge: 'Ai Cập · Ấn Độ · Trung Hoa · Nho giáo',
      items: [
        lesson('Văn minh, Ai Cập và Ấn Độ', 'Phân biệt văn hóa–văn minh, định vị trung tâm và hiểu thành tựu của Ai Cập, Ấn Độ.', eastern.items.slice(0, 6)),
        lesson('Trung Hoa, Nho giáo và ảnh hưởng đến Việt Nam', 'Học thành tựu Trung Hoa, ảnh hưởng Ấn Độ–Trung Hoa và đánh giá hai mặt Nho giáo.', [...eastern.items.slice(6), ...influence.items.slice(0, -1)])
      ]},
    {title: 'Đối chiếu văn minh phương Đông và luyện tự luận (Bài 4)', badge: 'Đúng phạm vi đề cương giữa kì I',
      items: [
        lesson('Bốn trung tâm và các thành tựu phương Đông', 'Đối chiếu địa lí, chữ viết, khoa học, tôn giáo và kiến trúc theo đúng nền văn minh.', western.items.slice(0, 3)),
        lesson('Cách làm trắc nghiệm, đúng/sai và tự luận', 'Đọc chứng cứ, lập luận theo tiêu chí, dùng ví dụ và tự luyện nhiều dạng vận dụng.', [...guide.items, western.items[3], influence.items[influence.items.length - 1]])
      ]}
  ];
}
