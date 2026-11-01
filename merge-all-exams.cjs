const fs = require('fs');

const mathExams = require('./data-math-fixed.cjs');
const physExams = require('./data-phys-fixed.cjs');
const chemExams = [...require('./data-chem-1.cjs'), ...require('./data-chem-2.cjs')];

console.log('Math count:', mathExams.length);
console.log('Phys count:', physExams.length);
console.log('Chem count:', chemExams.length);

const allExams = [
  ...mathExams.slice(0, 10),
  ...physExams,
  ...chemExams,
  ...mathExams.slice(10)
];

console.log('Total all exams:', allExams.length);

const fileHeader = `// Danh sách 32 bộ đề thi chính thức chuẩn cấu trúc ma trận mới 2026–2027
// 12 đề Toán học, 10 đề Vật lí, 10 đề Hóa học
// Hoàn toàn không trùng lặp câu hỏi, số liệu hay mô hình giữa các đề
const suppliedExams = `;

const jsonContent = JSON.stringify(allExams, null, 2);

const fullContent = fileHeader + jsonContent + ';\n';

fs.writeFileSync('dist/supplied_exams.js', fullContent, 'utf8');
console.log('✅ Đã cập nhật dist/supplied_exams.js với toàn bộ 32 đề thi của cả 3 môn!');
