const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
for (const path of ['dist/physics-paper-exams.js', 'dist/physics-katex-overrides.js']) {
  vm.runInContext(fs.readFileSync(path, 'utf8'), context);
}
const images = text => [...String(text || '').matchAll(/src="([^"]+)/g)].map(match => match[1].split('/').pop());
let errors = 0;
const assert = (condition, message) => { if (!condition) { console.error(`ERROR ${message}`); errors++; } };
for (const exam of context.window.physicsPaperExams) {
  console.log(`\n${exam.id}`);
  const sections = [
    ['MC', exam.questions.map(q => [q[0], q[1]])],
    ['TF', exam.tf.map(q => [q.stem, q.items.map(item => item[0])])],
    ['SHORT', exam.short.map(q => [q.question, []])],
    ['ESSAY', exam.essay.map(q => [q.question, []])]
  ];
  for (const [section, items] of sections) items.forEach(([stem, options], index) => {
    const stemImages = images(stem);
    const optionImages = options.flatMap(images);
    const suspect = /Lần đo<br>|Trả lời:|ĐÁP ÁN VÀ HDC|[.…]{8,}/i.test(String(stem));
    assert(!suspect, `${exam.id} ${section}${index + 1}: leaked answer or broken table`);
    assert(!/(?:Câu|Bài)\s+\d+[.:]\s*(?:Câu|Bài)\s+\d+/i.test(stem), `${exam.id} ${section}${index + 1}: duplicated question number`);
    for (const src of [...String(stem).matchAll(/src="([^"]+)/g), ...options.flatMap(option => [...String(option).matchAll(/src="([^"]+)/g)])]) {
      assert(fs.existsSync(`dist/${src[1]}`), `${exam.id} ${section}${index + 1}: missing ${src[1]}`);
    }
    if (stemImages.length || optionImages.length || suspect) {
      const text = String(stem).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 110);
      console.log(`${section}${index + 1} stemImg=${stemImages.join(',')} optImg=${optionImages.join(',')} ${suspect ? 'SUSPECT ' : ''}${text}`);
    }
  });
}
assert(context.window.physicsPaperExams.length === 7, 'Expected seven physics exams');
assert(context.window.physicsPaperExams.find(exam => exam.id === 'vatli-10-tailieu-so-4').questions[6][0].includes('<table'), 'Số 4 Câu 7 must render a data table');
process.exitCode = errors ? 1 : 0;
