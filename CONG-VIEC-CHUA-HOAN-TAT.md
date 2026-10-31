# Thay 30 bộ đề từ PDF người dùng cung cấp

Trạng thái tại commit `58ba96a`: **mới chuẩn bị dữ liệu, chưa cập nhật trang web**. Bản công khai vẫn dùng 30 bài luyện trước đó.

## Đã chuẩn bị

- `dist/supplied/` có 30 PDF đề và 30 PDF lời giải, tách từ 6 tệp trong các thư mục `toán`, `lý`, `hoá` mà người dùng cung cấp.
- `dist/supplied-exams.js` có danh mục 30 đề, thời gian làm bài, đáp án và phần giải thích trích từ PDF đáp án. Mỗi môn có 10 đề, mỗi đề có 12 câu nhiều lựa chọn, 2 câu đúng/sai (8 ý), 4 câu trả lời ngắn.
- `build-supplied-exams.cjs` tạo lại dữ liệu trên máy có các tệp PDF gốc và công cụ `pdftotext`, `pypdf`.

## Chưa làm

1. Chưa nối `supplied-exams.js` và các PDF mới với giao diện, phòng thi, chấm điểm và xem lại bài. `index.html` vẫn tải kho đề cũ.
2. Chưa kiểm tra thủ công toàn bộ 30 đề: ranh giới trang khi tách PDF, công thức, hình vẽ, đáp án và lời giải. Một số PDF được cắt theo trang nên có thể kèm phần cuối hoặc đầu đề liền kề.
3. Chưa xác minh độc lập tên trường, năm học và nhãn “đề chính thức” ghi trong tài liệu. Nếu hiển thị trên trang, cần ghi rõ đây là thông tin theo PDF người dùng cung cấp.
4. Chưa xử lý việc xem lại bài làm cũ sau khi thay kho đề, để các kết quả đã lưu vẫn ghép với đúng câu hỏi và đáp án cũ.
5. Chưa chạy kiểm thử giao diện/phòng thi với kho đề mới và chưa lưu phiên bản hay triển khai lên trang công khai.

Các bước trên là việc còn lại nếu tiếp tục yêu cầu thay đề. Theo chỉ dẫn mới nhất của người dùng, hiện chỉ ghi chú và đẩy Git, chưa thay bản công khai.
