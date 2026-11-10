/**
 * Sổ tay ôn giữa kì I Công nghệ trồng trọt 10.
 * Nội dung chỉ dựa trên 27 trang ảnh SGK trong tailieu và ma trận lớp cung cấp.
 */
handbookData.agriculture = {
  id: 'agriculture',
  name: 'Công nghệ nông nghiệp 10',
  icon: 'CN',
  color: '#4f8a2f',
  bg: '#eef7e7',
  source: 'Biên soạn từ 27 trang SGK lớp cung cấp và ma trận giữa kì I năm học 2026–2027.',
  sourceHref: 'supplied/CNNN-10.pdf',
  sourceLabel: 'Mở ma trận kiểm tra',
  sections: [
    {
      title: 'Ma trận và chiến lược làm bài',
      badge: '10 điểm · 45 phút',
      items: [
        {
          name: '1. Cấu trúc đề giữa kì I',
          freq: 'Học đúng trọng tâm cô dặn',
          forms: '20 nhiều lựa chọn · 2 đúng/sai · 2 tự luận',
          formula: '<div class="agri-matrix-grid"><span><b>Phần I</b><strong>20 câu</strong><small>5,0 điểm · 0,25 điểm/câu</small></span><span><b>Phần II</b><strong>2 câu × 4 ý</strong><small>2,0 điểm · 0,25 điểm/ý</small></span><span><b>Phần III</b><strong>2 câu</strong><small>3,0 điểm</small></span></div>',
          desc: 'Tỉ lệ mức độ theo ma trận: <b>40% nhận biết – 30% thông hiểu – 30% vận dụng</b>. Phần nhiều lựa chọn phủ từ Bài 1 đến Bài 5; phần đúng/sai tập trung vào ánh sáng và đất mặn; phần tự luận tập trung vào giá thể và đất xám bạc màu.',
          traps: 'Gợi ý của giáo viên là trọng tâm ôn tập, không phải giới hạn tuyệt đối. Khi học một ý, luôn nhớ đủ ba vế: đặc điểm – tác động/ý nghĩa – biện pháp hoặc quy trình.'
        },
        {
          name: '2. Bản đồ ưu tiên trước giờ thi',
          freq: 'Dùng để ôn nhanh',
          forms: 'Mọi phần của đề',
          formula: '<ol class="agri-steps"><li><b>Ưu tiên 1:</b> đất xám bạc màu và ba giá thể than bùn, xơ dừa, trấu hun.</li><li><b>Ưu tiên 2:</b> ánh sáng và đất mặn để xử lí đúng/sai.</li><li><b>Ưu tiên 3:</b> học trọn Bài 1, Bài 3; đất chua ở Bài 4.</li><li><b>Ưu tiên 4:</b> phân loại cây trồng và các yếu tố nhiệt độ, nước, độ ẩm, ánh sáng ở Bài 2; nhớ thêm perlite.</li></ol>',
          desc: 'Cách học hiệu quả: tự che cột đáp án, nói lại bằng từ khóa; sau đó làm một đề 45 phút và đối chiếu lời giải. Với tự luận, viết theo gạch đầu dòng, mỗi ý có từ khóa khoa học rõ ràng.',
          traps: 'Không học lẫn <b>nguyên nhân</b> với <b>biện pháp</b>; không viết “bón phân” chung chung khi đề yêu cầu nêu loại phân và tác dụng.'
        }
      ]
    },
    {
      title: 'Bài 1 · Giới thiệu chung về trồng trọt',
      badge: 'Học toàn bộ',
      items: [
        {
          name: '1. Vai trò của trồng trọt',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Thông hiểu',
          formula: '<ul class="agri-key-list"><li><b>Bảo đảm an ninh lương thực.</b></li><li>Cung cấp thức ăn cho chăn nuôi và nguyên liệu cho công nghiệp chế biến.</li><li>Cung cấp nông sản xuất khẩu: gạo, cà phê, điều, hồ tiêu, chè, rau quả…</li><li>Tạo việc làm, cảnh quan xanh – sạch – đẹp và nguồn dược liệu.</li></ul>',
          desc: 'Trồng trọt không chỉ tạo ra lương thực. Sản phẩm trồng trọt còn thúc đẩy chăn nuôi, công nghiệp chế biến, nâng giá trị và khả năng cạnh tranh của nông sản.',
          example: 'Lúa vừa bảo đảm lương thực, vừa tạo gạo xuất khẩu; ngô có thể dùng làm thức ăn chăn nuôi và nguyên liệu chế biến.',
          traps: 'Phương án nói trồng trọt “chỉ cung cấp lương thực cho con người” là sai vì đã bỏ qua nhiều vai trò khác.'
        },
        {
          name: '2. Triển vọng và trồng trọt công nghệ cao',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Thông hiểu',
          formula: '<b>Công nghệ thường gặp:</b> công nghệ sinh học, nhà kính, tưới tự động, tự động hóa, thủy canh, khí canh, IoT, trí tuệ nhân tạo, nano và công nghệ chiếu sáng.',
          desc: 'Ứng dụng công nghệ cao giúp tiết kiệm chi phí, tăng năng suất và chất lượng, giảm giá thành; ít phụ thuộc thời tiết, chủ động sản xuất, khắc phục tính thời vụ, giảm lao động và rủi ro, đồng thời bảo vệ môi trường.',
          example: 'Nông nghiệp 4.0 kết nối dữ liệu từ sản xuất – chế biến – tiêu thụ để kiểm soát chi phí và chất lượng tốt hơn.',
          traps: 'Công nghệ cao không có nghĩa là loại bỏ hoàn toàn con người; người lao động vẫn phải giám sát, vận hành và xử lí thiết bị.'
        },
        {
          name: '3. Thành tựu ở Việt Nam và thế giới',
          freq: 'Có thể hỏi bằng ví dụ',
          forms: 'Nhận biết',
          formula: '<b>Việt Nam:</b> cơ giới hóa các khâu làm đất, gieo cấy, chăm sóc, bảo vệ và thu hoạch; thủy canh, khí canh; tưới nhỏ giọt, phun sương, phun mưa; nhà kính.<br><b>Thế giới:</b> trang trại trong nhà dùng đèn LED nhiều tầng ở Miyagi (Nhật Bản), vườn Keukenhof (Hà Lan), trang trại táo California, vườn hoa Dubai.',
          desc: 'Điểm chung của các thành tựu là điều khiển tốt điều kiện canh tác, nâng hiệu quả sử dụng tài nguyên và tạo sản phẩm đồng đều.',
          traps: 'Không nhầm <b>thủy canh</b> (rễ trong dung dịch dinh dưỡng) với <b>khí canh</b> (rễ được phun sương dinh dưỡng trong không khí).'
        },
        {
          name: '4. Yêu cầu với người lao động trồng trọt',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Liên hệ nghề nghiệp',
          formula: '<ul class="agri-key-list"><li>Sức khỏe tốt; chăm chỉ, bền bỉ, có trách nhiệm.</li><li>Có kiến thức, kĩ năng và biết vận hành thiết bị.</li><li>Tuân thủ an toàn lao động, bảo vệ môi trường.</li><li>Yêu cây và thiên nhiên; biết quan sát sinh trưởng, phân loại và chăm sóc cây.</li><li>Hứng thú với công nghệ, sinh học, hóa học, địa lí và hoạt động ngoài trời.</li></ul>',
          desc: 'Năng lực nghề nghiệp gồm cả phẩm chất, kiến thức, kĩ năng thực hành và thái độ với an toàn – môi trường.',
          traps: 'Đáp án chỉ nêu sức khỏe hoặc chỉ nêu kiến thức đều chưa đầy đủ.'
        }
      ]
    },
    {
      title: 'Bài 2 · Cây trồng và các yếu tố chính trong trồng trọt',
      badge: 'Phân loại · Ánh sáng · Nhiệt độ · Nước/độ ẩm',
      items: [
        {
          name: '1. Khái niệm và phân loại cây trồng theo nguồn gốc',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Phân loại ví dụ',
          formula: '<div class="handbook-table-wrap"><table class="handbook-table"><thead><tr><th>Nhóm</th><th>Điều kiện điển hình</th><th>Ví dụ trong SGK</th></tr></thead><tbody><tr><td><b>Ôn đới</b></td><td>Đông lạnh, hè mát; ở Việt Nam thường tại vùng núi phía Bắc</td><td>Dâu tây, mận, lê, đào</td></tr><tr><td><b>Nhiệt đới</b></td><td>Nguồn gốc nhiệt đới; khó thích nghi với rét và sương giá</td><td>Vải, xoài, ổi, mít</td></tr><tr><td><b>Cận nhiệt đới</b></td><td>Thường sinh trưởng như cây nhiệt đới nhưng cần một thời gian lạnh để ra hoa, kết quả</td><td>Bơ, anh đào</td></tr></tbody></table></div>',
          desc: 'Cây trồng là cây đã được con người thuần hóa, chọn lọc để sản xuất nông nghiệp, tạo sản phẩm dùng làm lương thực, thức ăn chăn nuôi, nguyên liệu chế biến hoặc xuất khẩu.',
          traps: 'Cây cận nhiệt đới không đồng nghĩa hoàn toàn với cây nhiệt đới: nhiều loài cần một giai đoạn lạnh nhất định để ra hoa, kết quả.'
        },
        {
          name: '2. Phân loại theo đặc tính sinh vật học',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · So sánh',
          formula: '<ul class="agri-key-list"><li>Theo thời gian sống: <b>cây hằng năm</b> và <b>cây lâu năm</b>.</li><li>Theo đặc điểm thân: <b>cây thân thảo</b> và <b>cây thân gỗ</b>.</li><li>Theo số lá mầm: <b>cây một lá mầm</b> và <b>cây hai lá mầm</b>.</li></ul>',
          desc: 'Một cây có thể đồng thời thuộc nhiều cách phân loại khác nhau; ví dụ “lâu năm” nói về thời gian sống, còn “thân gỗ” nói về đặc điểm thân.',
          traps: 'Không xem các cặp phân loại là cùng một tiêu chí; “hằng năm – lâu năm” khác với “thân thảo – thân gỗ”.'
        },
        {
          name: '3. Ánh sáng',
          freq: 'Chắc chắn ôn cho đúng/sai',
          forms: 'Nhiều lựa chọn · Đúng/sai tình huống',
          formula: '<b>Hai ý bắt buộc nhớ:</b><br>① Cường độ ánh sáng ảnh hưởng đến quang hợp, tích lũy chất hữu cơ, sinh trưởng và phát triển.<br>② <b>Quang chu kì</b> là độ dài chiếu sáng trong ngày và có thể ảnh hưởng đến sự ra hoa.',
          desc: 'Mỗi loài cây có nhu cầu cường độ ánh sáng khác nhau. Thiếu hoặc thừa ánh sáng đều có thể làm cây sinh trưởng kém; lựa chọn mật độ, mùa vụ và biện pháp che/chiếu bổ sung phải phù hợp.',
          example: 'Nếu một giống chỉ ra hoa khi độ dài ngày phù hợp, thay đổi thời gian chiếu sáng có thể làm thời điểm ra hoa thay đổi.',
          traps: 'Câu “mọi cây đều cần cùng một cường độ và thời gian chiếu sáng” là sai. Đừng nhầm <b>cường độ ánh sáng</b> với <b>quang chu kì</b>.'
        },
        {
          name: '4. Nhiệt độ',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Thông hiểu · Vận dụng mùa vụ',
          formula: 'Nhiệt độ tác động đến <b>hô hấp, quang hợp, thoát hơi nước, hấp thu nước và dinh dưỡng</b>, từ đó ảnh hưởng sinh trưởng, năng suất và chất lượng. Phần lớn cây trồng thích hợp trong khoảng <b>15–40°C</b>.',
          desc: 'Nhu cầu nhiệt khác nhau giữa loài và giữa các giai đoạn sinh trưởng. Vì vậy phải bố trí cây trồng, vùng trồng và mùa vụ phù hợp.',
          traps: '15–40°C là khoảng thích hợp của <b>phần lớn</b> cây trồng, không phải nhiệt độ tối ưu giống nhau cho mọi cây và mọi giai đoạn.'
        },
        {
          name: '5. Nước và độ ẩm',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Thông hiểu · Tình huống ngập/khô hạn',
          formula: '<ul class="agri-key-list"><li>Nước trực tiếp tham gia quang hợp.</li><li>Hòa tan chất khoáng để rễ hấp thu.</li><li>Điều hòa nhiệt độ cây thông qua thoát hơi nước.</li><li>Độ ẩm đất quá thấp hoặc quá cao đều ức chế vi sinh vật, phân giải hữu cơ và chuyển hóa dinh dưỡng.</li></ul>',
          desc: 'Thiếu nước kéo dài gây héo, khô; thừa nước kéo dài gây úng, thiếu ôxi ở rễ. Cả hai trạng thái đều có thể làm cây chết.',
          example: 'Ruộng ngập lâu không phải lúc nào cũng “đủ nước”; rễ có thể thiếu ôxi, hô hấp kém và bị thối.',
          traps: 'Không chọn phương án “càng nhiều nước cây càng tốt”. Cần độ ẩm phù hợp với loài cây và giai đoạn sinh trưởng.'
        }
      ]
    },
    {
      title: 'Bài 3 · Đất trồng',
      badge: 'Học toàn bộ',
      items: [
        {
          name: '1. Khái niệm, sự hình thành và các thành phần của đất',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Thông hiểu',
          formula: '<b>Đất trồng</b> là lớp bề mặt tơi xốp của vỏ Trái Đất, nơi cây trồng sống, phát triển và tạo sản phẩm. Đất hình thành từ đá mẹ dưới tác động của khí hậu, địa hình, sinh vật, thời gian và con người.<br><br><b>Bốn thành phần:</b> phần lỏng – phần rắn – phần khí – sinh vật đất.',
          desc: '<b>Phần lỏng</b> cung cấp nước, giữ ẩm và hòa tan dinh dưỡng; <b>phần rắn</b> gồm chất vô cơ khoảng 95% và hữu cơ dưới 5%, vừa cung cấp dinh dưỡng vừa giữ cây; <b>phần khí</b> phục vụ hô hấp rễ và vi sinh vật; <b>sinh vật đất</b> phân giải tàn dư, chuyển hóa dinh dưỡng và cải thiện đất.',
          traps: 'Phần rắn là thành phần chủ yếu của đất, nhưng không vì thế mà phần khí, phần lỏng và sinh vật đất kém quan trọng.'
        },
        {
          name: '2. Keo đất và khả năng trao đổi dinh dưỡng',
          freq: 'Có thể hỏi khái niệm',
          forms: 'Nhận biết · Thông hiểu',
          formula: 'Keo đất là những hạt rất nhỏ, kích thước khoảng <b>1 μm</b>, không tan mà lơ lửng trong nước. Keo gồm nhân và lớp điện kép; ion ở lớp khuếch tán có thể trao đổi với dung dịch đất.',
          desc: 'Nhờ khả năng hấp phụ và trao đổi ion, keo đất ảnh hưởng lớn đến khả năng giữ chất dinh dưỡng và nhiều tính chất của đất.',
          traps: 'Không nhầm keo đất với dung dịch đất. Keo không hòa tan hoàn toàn trong nước.'
        },
        {
          name: '3. Thành phần cơ giới của đất',
          freq: 'Học toàn bộ Bài 3',
          forms: 'Nhận biết · Thông hiểu',
          formula: '<div class="handbook-table-wrap"><table class="handbook-table"><thead><tr><th>Hạt</th><th>Kích thước</th><th>Ghi nhớ</th></tr></thead><tbody><tr><td>Cát</td><td>0,02–2 mm</td><td>Lớn nhất</td></tr><tr><td>Limon</td><td>0,002–0,02 mm</td><td>Trung gian</td></tr><tr><td>Sét</td><td>&lt; 0,002 mm</td><td>Nhỏ nhất</td></tr></tbody></table></div><p><b>Quy luật:</b> tỉ lệ hạt nhỏ càng cao thì khả năng giữ nước và dinh dưỡng càng lớn. Căn cứ tỉ lệ cát–limon–sét, chia thành đất cát, đất thịt, đất sét và các loại trung gian.</p>',
          desc: 'Thành phần cơ giới cho biết tỉ lệ các cấp hạt cát, limon và sét trong đất. Đất cát có nhiều hạt lớn nên thoát nước nhanh; đất sét có nhiều hạt nhỏ nên giữ nước và dinh dưỡng tốt hơn nhưng thường thoát nước, thoáng khí kém; đất thịt có tính chất trung gian.',
          traps: 'Không nhầm <b>thành phần cơ giới</b> của Bài 3 với chuyên đề <b>đất mặn</b> ở Bài 4. “Mặn” nói đến lượng muối tan cao, không phải tên gọi theo tỉ lệ hạt sét.'
        },
        {
          name: '4. Phản ứng của dung dịch đất',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · So sánh pH',
          formula: '<div class="handbook-table-wrap"><table class="handbook-table"><thead><tr><th>Phản ứng</th><th>Quan hệ ion</th><th>pH</th></tr></thead><tbody><tr><td><b>Chua</b></td><td>H<sup>+</sup> &gt; OH<sup>−</sup></td><td>&lt; 6,6</td></tr><tr><td><b>Trung tính</b></td><td>H<sup>+</sup> = OH<sup>−</sup></td><td>6,6–7,5</td></tr><tr><td><b>Kiềm</b></td><td>OH<sup>−</sup> &gt; H<sup>+</sup></td><td>&gt; 7,5</td></tr></tbody></table></div>',
          desc: 'Phản ứng đất ảnh hưởng đến hoạt động vi sinh vật, khả năng cung cấp dinh dưỡng và sự cân bằng mùn – khoáng. Đất trung tính thường thuận lợi cho cây và hệ sinh thái đất.',
          traps: 'Theo đúng trang SGK lớp cung cấp: pH 6,6–7,5 là trung tính; đừng dùng ngưỡng của nguồn khác khi làm đề này.'
        }
      ]
    },
    {
      title: 'Bài 4 · Sử dụng, cải tạo và bảo vệ đất trồng',
      badge: 'Đất chua · Đất mặn · Đất xám bạc màu',
      items: [
        {
          name: '1. Nguyên tắc sử dụng và bảo vệ đất',
          freq: 'Nền tảng Bài 4',
          forms: 'Nhận biết · Thông hiểu',
          formula: '<ul class="agri-key-list"><li>Chọn cây trồng phù hợp với loại đất.</li><li>Kết hợp sản xuất với cải tạo; tăng phân hữu cơ và phân vi sinh.</li><li>Canh tác bền vững: luân canh, tăng vụ, xen canh, gối vụ, làm ruộng bậc thang.</li><li>Bố trí mùa vụ hợp lí, thích ứng với biến đổi khí hậu.</li></ul>',
          desc: 'Sử dụng đất bền vững phải vừa tạo sản phẩm vừa duy trì hoặc nâng cao độ phì, hạn chế xói mòn và suy thoái.',
          traps: 'Khai thác liên tục mà không hoàn trả dinh dưỡng là trái với nguyên tắc sử dụng đất bền vững.'
        },
        {
          name: '2. Đất chua: đặc điểm và nguyên nhân',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Nhận biết · Giải thích',
          formula: '<b>Đặc điểm:</b> H<sup>+</sup> &gt; OH<sup>−</sup>, pH &lt; 6,6; thường có nhiều Al<sup>3+</sup> và Fe<sup>3+</sup> tự do.<br><b>Nguyên nhân:</b> mưa rửa trôi Ca<sup>2+</sup>, Mg<sup>2+</sup>, K<sup>+</sup>; cây lấy dinh dưỡng nhưng không hoàn trả; dùng phân sinh lí chua như amoni sunfat, kali clorua; chất hữu cơ phân giải yếm khí tạo axit hữu cơ.',
          desc: 'Đất chua làm thay đổi hoạt động vi sinh vật, độ dễ tiêu của dinh dưỡng và có thể gây độc nhôm, sắt hoặc làm lân bị cố định.',
          traps: 'Không phải mọi loại phân hóa học đều làm chua đất như nhau. Câu hỏi thường nêu cụ thể phân sinh lí chua.'
        },
        {
          name: '3. Cải tạo đất chua',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Thông hiểu · Vận dụng',
          formula: '<ol class="agri-steps"><li><b>Bón vôi:</b> trung hòa độ chua, kết tủa Al<sup>3+</sup>/Fe<sup>3+</sup> di động, hạn chế độc và cố định lân; cải thiện vi sinh vật, mùn, cấu trúc và pH.</li><li><b>Thủy lợi:</b> làm kênh tưới – tiêu để rửa chua.</li><li><b>Canh tác:</b> hạn chế làm đất mùa mưa ở nơi dốc; che phủ bằng tàn dư hoặc màng phủ; trồng cây phân xanh.</li></ol>',
          desc: 'Biện pháp hiệu quả là phối hợp hóa học, thủy lợi và canh tác, không chỉ dựa vào một lần bón vôi.',
          traps: 'Bón vôi có mục tiêu chính là giảm độ chua và độc Al/Fe; không xem vôi là nguồn cung cấp đầy đủ mọi chất dinh dưỡng cho cây.'
        },
        {
          name: '4. Đất mặn: đặc điểm, nguyên nhân và cải tạo',
          freq: 'Chắc chắn ôn cho đúng/sai',
          forms: 'Đúng/sai · Tình huống thực tế',
          formula: '<div class="agri-answer-frame"><p><b>Khái niệm:</b> đất mặn là đất có nồng độ muối tan cao, gây bất lợi cho sinh trưởng của phần lớn cây trồng.</p><p><b>Nguyên nhân:</b> nước biển xâm nhập; nước ngầm mặn dâng theo mao quản rồi bốc hơi làm muối tích tụ; tưới hoặc tiêu thoát nước không hợp lí cũng có thể làm mặn tăng.</p><p><b>Đặc điểm:</b> chứa nhiều muối tan, thường gặp NaCl và Na<sub>2</sub>SO<sub>4</sub>; cây khó hút nước, có thể bị ngộ độc ion; hoạt động của vi sinh vật và độ phì đất giảm.</p><p><b>Cải tạo:</b> ngăn nước mặn, xây dựng hệ thống tưới – tiêu và dùng nước ngọt rửa mặn; bón vôi khi phù hợp kết hợp rửa; tăng phân hữu cơ; chọn cây hoặc giống chịu mặn.</p></div>',
          desc: 'Chuỗi cần nhớ: <b>muối tan tích tụ → nồng độ dung dịch đất tăng → rễ khó hút nước → cây sinh trưởng kém</b>. Muốn cải tạo bền vững phải phối hợp thủy lợi, bón phân và bố trí cây trồng, trong đó rửa mặn chỉ hiệu quả khi có đường tiêu thoát nước.',
          example: 'Ở vùng ven biển, đê ngăn mặn giúp hạn chế nguồn muối mới; kênh tưới – tiêu đưa nước ngọt vào hòa tan muối và dẫn nước mặn ra ngoài.',
          traps: 'Không nhầm đất mặn với đất chua hoặc đất có nhiều sét. Bón vôi đơn độc mà không rửa và tiêu nước không thể đưa lượng muối đã hòa tan ra khỏi đất.'
        },
        {
          name: '5. Đất xám bạc màu: đặc điểm và nguyên nhân',
          freq: 'Chắc chắn ôn cho tự luận',
          forms: 'Tự luận · Thông hiểu',
          formula: '<b>Đặc điểm:</b> tầng canh tác mỏng; thành phần cơ giới nhẹ; nghèo dinh dưỡng; đất chua; ít vi sinh vật có ích.<br><b>Nguyên nhân tự nhiên:</b> thường ở vùng chuyển tiếp chân núi, địa hình dốc nên bị rửa trôi.<br><b>Nguyên nhân canh tác:</b> độc canh lâu năm, làm đất và bố trí mùa vụ không hợp lí, nhất là canh tác trong mùa mưa.',
          desc: 'Đất xám bạc màu phân bố rộng, trong đó có Đông Nam Bộ và Tây Nguyên. Suy giảm dinh dưỡng và rửa trôi kéo dài làm độ phì thấp.',
          example: '<b>Độ phì đất</b> là khả năng đáp ứng nhu cầu của cây về dinh dưỡng, nước, không khí, nhiệt độ và môi trường lí – hóa thuận lợi để cây sinh trưởng bình thường.',
          traps: 'Không nhầm đất xám bạc màu với đất mặn; cũng không mô tả loại đất này là giàu mùn hoặc có tầng canh tác dày.'
        },
        {
          name: '6. Cải tạo đất xám bạc màu',
          freq: 'Chắc chắn ôn cho tự luận',
          forms: 'Tự luận · Vận dụng',
          formula: '<div class="agri-answer-frame"><b>Ba nhóm biện pháp phải đủ:</b><p><strong>Phân bón:</strong> bón hữu cơ, vô cơ, phân xanh; chú trọng phân hữu cơ để tăng dinh dưỡng và độ phì; bón vôi để nâng pH và cải thiện tính chất vật lí.</p><p><strong>Thủy lợi:</strong> tưới, tiêu hợp lí để tránh rửa trôi dinh dưỡng.</p><p><strong>Canh tác:</strong> xây dựng hệ thống cây trồng phù hợp, chọn giống ngắn ngày; luân canh, tăng vụ, xen canh cây họ Đậu để vừa tăng thu nhập vừa cải tạo đất.</p></div>',
          desc: 'Bài tự luận tốt cần nối biện pháp với tác dụng: hữu cơ tăng mùn và độ phì; vôi nâng pH; tưới tiêu hợp lí giảm rửa trôi; cây họ Đậu hỗ trợ cải thiện đất.',
          traps: 'Không chỉ ghi “bón nhiều phân hóa học”. Cách này thiếu ý và có thể làm đất mất cân đối hoặc chua hơn nếu dùng không hợp lí.'
        }
      ]
    },
    {
      title: 'Bài 5 · Giá thể trồng cây',
      badge: 'Than bùn · Xơ dừa · Trấu hun · Perlite',
      items: [
        {
          name: '1. Khái niệm, nhóm và vai trò của giá thể',
          freq: 'Nền tảng Bài 5',
          forms: 'Nhiều lựa chọn · Tự luận',
          formula: '<b>Giá thể</b> là vật liệu dùng để trồng cây, có khả năng giữ nước và tạo độ thoáng giúp hạt nảy mầm, rễ phát triển và hấp thu dinh dưỡng.<br><b>Hai nhóm:</b> hữu cơ tự nhiên (than bùn, mùn cưa, trấu hun, xơ dừa) và vật liệu trơ làm giá đỡ (perlite, gốm).',
          desc: 'Giá thể giúp gieo trồng, chăm sóc thuận tiện. Khi được xử lí và phối trộn dinh dưỡng cân đối, giá thể hỗ trợ tạo cây khỏe, sạch và an toàn.',
          traps: 'Không mặc định mọi giá thể đều giàu dinh dưỡng; nhiều loại chủ yếu tạo độ thoáng và giữ nước nên phải bổ sung dinh dưỡng.'
        },
        {
          name: '2. Giá thể than bùn',
          freq: 'Chắc chắn ôn cho tự luận',
          forms: 'Đặc điểm · Ưu/nhược · Quy trình',
          formula: '<div class="agri-process"><p><b>Nguồn gốc:</b> xác thực vật phân hủy trong điều kiện yếm khí.</p><p><b>Ưu:</b> xốp, nhẹ, thoáng khí; giữ ẩm và giữ dinh dưỡng tốt.</p><p><b>Nhược:</b> nghèo các chất dinh dưỡng thiết yếu nên phải bổ sung.</p><p><b>Quy trình:</b> thu gom → phơi khô, nghiền → phối trộn vôi, phụ gia và chế phẩm vi sinh rồi ủ → kiểm tra chất lượng, đóng gói.</p></div>',
          desc: 'Khi trình bày tự luận, nêu đủ nguồn gốc, ưu điểm, hạn chế và bốn bước sản xuất.',
          traps: 'Than bùn giữ dinh dưỡng tốt không có nghĩa bản thân nó đã cung cấp đủ dinh dưỡng thiết yếu.'
        },
        {
          name: '3. Giá thể trấu hun',
          freq: 'Chắc chắn ôn cho tự luận',
          forms: 'Đặc điểm · Ưu/nhược · Quy trình',
          formula: '<div class="agri-process"><p><b>Nguồn gốc:</b> vỏ trấu được đốt trong điều kiện yếm khí.</p><p><b>Ưu:</b> sạch, tơi xốp, giữ nước và phân; không mang nấm, vi khuẩn; thân thiện môi trường; giàu K giúp cây cứng và chịu rét tốt hơn.</p><p><b>Nhược:</b> nghèo dinh dưỡng; hấp thụ nhiệt cao nên bất lợi khi trời nóng.</p><p><b>Quy trình:</b> thu gom → hun yếm khí → trải nguội, phun nước, loại tạp → trộn chế phẩm vi sinh → kiểm tra, đóng gói.</p></div>',
          desc: 'Từ khóa quan trọng nhất của trấu hun là <b>đốt yếm khí</b>, tơi xốp, giàu kali nhưng nghèo dinh dưỡng tổng thể.',
          traps: 'Không viết “đốt cháy hoàn toàn thành tro”. Trấu hun cần giữ cấu trúc xốp của vỏ trấu.'
        },
        {
          name: '4. Giá thể xơ dừa',
          freq: 'Chắc chắn ôn cho tự luận',
          forms: 'Đặc điểm · Ưu/nhược · Quy trình',
          formula: '<div class="agri-process"><p><b>Nguồn gốc:</b> vỏ dừa nghiền, loại chất gây độc cho cây rồi bổ sung vi sinh vật.</p><p><b>Ưu:</b> nhẹ, xốp, thoáng; giữ ẩm nhưng thoát nước nhanh; cải thiện trao đổi cation; tạo môi trường cho vi sinh vật có ích, kể cả vi sinh vật cố định đạm.</p><p><b>Nhược:</b> tannin và lignin khó phân hủy có thể cản rễ hút nước, dinh dưỡng.</p><p><b>Quy trình:</b> thu gom, phơi, nghiền → ngâm nước 2–3 ngày → ngâm nước vôi 5–7 ngày với tỉ lệ 2 kg vôi/100 L nước → phối trộn, ủ chế phẩm vi sinh → kiểm tra, đóng gói.</p></div>',
          desc: 'Khâu khử tannin và lignin là điểm hay hỏi. Phải xử lí xơ dừa trước khi dùng để tránh gây bất lợi cho rễ.',
          traps: 'Không dùng xơ dừa tươi chưa xử lí rồi khẳng định luôn an toàn cho cây.'
        },
        {
          name: '5. Giá thể perlite',
          freq: 'Trọng tâm nhiều lựa chọn',
          forms: 'Đặc điểm · Ưu/nhược · Quy trình',
          formula: '<div class="agri-process"><p><b>Nguồn gốc:</b> quặng perlite tự nhiên nghiền cỡ 0,2–1 mm, nung ở 800–850°C.</p><p><b>Đặc điểm/ưu:</b> trắng, xốp, nhẹ; thành phần chính SiO<sub>2</sub>; cung cấp silicon, thoáng khí, bền vật lí, trơ hóa học; làm tơi đất, giữ nước và nhiệt, thuận lợi cho rễ, phù hợp mái nhà nhờ nhẹ.</p><p><b>Nhược:</b> có thể giải phóng nhôm làm giảm pH.</p><p><b>Quy trình:</b> nghiền quặng → nung → làm nguội, kiểm tra và đóng gói.</p></div>',
          desc: 'Perlite thuộc nhóm vật liệu trơ làm giá đỡ, khác với nhóm giá thể hữu cơ tự nhiên.',
          traps: 'Không nhầm perlite với trấu hun: perlite là khoáng tự nhiên nung nở, không phải phụ phẩm thực vật.'
        },
        {
          name: '6. Khung trả lời tự luận về giá thể',
          freq: 'Chốt điểm tự luận',
          forms: 'Tự luận 1,5 điểm',
          formula: '<ol class="agri-steps"><li>Mở đầu bằng <b>khái niệm/nguồn gốc</b> của từng giá thể.</li><li>Nêu ít nhất <b>hai ưu điểm</b> gắn với giữ nước – thoáng khí – dinh dưỡng.</li><li>Nêu đúng <b>một nhược điểm đặc trưng</b>.</li><li>Trình bày <b>quy trình theo mũi tên</b>, đúng thứ tự.</li><li>Nếu đề hỏi so sánh, kết luận điểm giống và khác nổi bật.</li></ol>',
          desc: 'Với than bùn – xơ dừa – trấu hun, có thể viết thành bảng bốn cột: nguồn gốc | ưu điểm | nhược điểm | quy trình. Cách này rõ, ít bỏ ý.',
          traps: 'Đừng gộp quy trình của ba loại. Xơ dừa phải có bước ngâm nước và ngâm vôi; trấu phải hun yếm khí; than bùn phải phối vôi, phụ gia, vi sinh rồi ủ.'
        }
      ]
    },
    {
      title: 'Hai chuyên đề đúng/sai và hai khung tự luận',
      badge: 'Ôn sát gợi ý của cô',
      items: [
        {
          name: '1. Checklist đúng/sai về ánh sáng',
          freq: 'Câu đúng/sai số 1',
          forms: '4 ý đúng/sai',
          formula: '<ul class="agri-check-list"><li>✓ Ánh sáng cần cho quang hợp và tạo chất hữu cơ.</li><li>✓ Nhu cầu cường độ ánh sáng khác nhau theo loài.</li><li>✓ Quang chu kì có thể điều khiển sự ra hoa.</li><li>✗ Mọi cây đều cần ánh sáng như nhau.</li><li>✗ Chỉ cường độ, không phải thời gian chiếu sáng, mới ảnh hưởng cây.</li></ul>',
          desc: 'Khi gặp tình huống nhà kính, tách riêng hai biến: <b>độ mạnh của ánh sáng</b> và <b>độ dài ngày</b>. Sau đó xét tác động lên quang hợp hoặc ra hoa.',
          traps: 'Từ tuyệt đối như “mọi”, “luôn”, “không bao giờ” thường là dấu hiệu cần kiểm tra kĩ.'
        },
        {
          name: '2. Checklist đúng/sai về đất mặn',
          freq: 'Câu đúng/sai số 2',
          forms: '4 ý đúng/sai',
          formula: '<ul class="agri-check-list"><li>✓ Nồng độ muối tan cao gây bất lợi cho phần lớn cây trồng.</li><li>✓ Nước biển xâm nhập và nước ngầm mặn bốc hơi có thể làm đất mặn.</li><li>✓ Muối cao làm rễ khó hút nước dù đất vẫn có nước.</li><li>✓ Cần ngăn mặn, tưới – tiêu hợp lí và dùng nước ngọt rửa mặn.</li><li>✗ Chỉ bón vôi một lần là loại hết muối khỏi đất.</li><li>✗ Mọi giống cây đều chịu mặn như nhau.</li></ul>',
          desc: 'Khi xét một tình huống, hãy tách bốn ý: <b>nguồn muối – tác hại lên cây – đường đưa muối ra khỏi đất – giống cây phù hợp</b>. Biện pháp thủy lợi giữ vai trò đặc biệt quan trọng.',
          traps: 'Có nước trong đất không có nghĩa rễ hút được nước: nồng độ muối cao làm cây khó hút nước. Rửa mặn phải đi kèm tiêu thoát nước, nếu không muối vẫn lưu lại trong tầng đất.'
        },
        {
          name: '3. Dàn ý tự luận đất xám bạc màu',
          freq: 'Câu tự luận số 2',
          forms: 'Trình bày đầy đủ 4 phần',
          formula: '<div class="agri-answer-frame"><p><b>① Đặc điểm:</b> tầng canh tác mỏng, cơ giới nhẹ, nghèo dinh dưỡng, chua, ít vi sinh vật có ích.</p><p><b>② Nguyên nhân:</b> địa hình dốc gây rửa trôi; độc canh, làm đất và mùa vụ không hợp lí.</p><p><b>③ Phân bố:</b> rộng, có Đông Nam Bộ và Tây Nguyên.</p><p><b>④ Cải tạo:</b> hữu cơ/vô cơ/phân xanh và vôi; tưới tiêu hợp lí; giống ngắn ngày, luân canh, tăng vụ, xen canh cây họ Đậu.</p></div>',
          desc: 'Nếu đề yêu cầu “tất cả những gì liên quan”, hãy viết theo đúng bốn đề mục trên rồi gắn tác dụng cho từng biện pháp.',
          traps: 'Một bài chỉ liệt kê biện pháp mà bỏ đặc điểm, nguyên nhân hoặc tác dụng sẽ khó đạt trọn điểm.'
        }
      ]
    }
  ]
};
