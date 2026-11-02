const fs = require('fs');

const chem1 = require('./data-chem-1.cjs');
const chem2 = require('./data-chem-2.cjs');
const allNewChem = [...chem1, ...chem2];

console.log('Tổng số đề Hóa học mới:', allNewChem.length);

const originalContent = fs.readFileSync('dist/supplied_exams.js', 'utf8');

// Tách phần trước hoahoc-10-de-01 và phần sau hoahoc-10-de-10
const startMarker = '"id": "hoahoc-10-de-01",';
const endMarker = '"id": "hoahoc-10-de-11",';

const startIndex = originalContent.indexOf(startMarker);
const endIndex = originalContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Không tìm thấy điểm phân tách!', { startIndex, endIndex });
  process.exit(1);
}

const preChem = originalContent.slice(0, originalContent.lastIndexOf('  {\n', startIndex));
const postChem = originalContent.slice(originalContent.lastIndexOf('  {\n', endIndex));

// Format allNewChem thành chuỗi JSON
const chemJson = allNewChem.map(exam => {
  return '  ' + JSON.stringify(exam, null, 2).replace(/\n/g, '\n  ');
}).join(',\n');

const newSuppliedContent = preChem + chemJson + ',\n' + postChem;

fs.writeFileSync('dist/supplied_exams.js', newSuppliedContent, 'utf8');
console.log('✅ Đã cập nhật dist/supplied_exams.js thành công!');
