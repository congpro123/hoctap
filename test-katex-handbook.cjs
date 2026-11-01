const fs = require('fs');
const vm = require('vm');
const katex = require('./dist/vendor/katex/katex.min.js');

const handbookCode = fs.readFileSync('./dist/handbook.js', 'utf8');

const sandbox = {
  window: {},
  document: {
    getElementById: () => ({ innerHTML: '', addEventListener: () => {} }),
    querySelector: () => ({ innerHTML: '' }),
    querySelectorAll: () => []
  },
  renderMathInElement: () => {},
  console: console
};
vm.createContext(sandbox);
vm.runInContext(handbookCode + '\nsandboxHand = handbookData;', sandbox);

const handbookData = sandbox.sandboxHand;

console.log('--- KIỂM TRA TOÀN BỘ CÔNG THỨC TOÁN TRONG SỔ TAY VỚI KATEX ---');

let totalBlocks = 0;
let totalInlines = 0;
let errors = 0;

for (const subjKey of Object.keys(handbookData)) {
  const subj = handbookData[subjKey];
  for (const sec of subj.sections) {
    for (const item of sec.items) {
      const texts = [item.formula || '', item.desc || '', item.traps || ''];
      for (const text of texts) {
        // Find $$...$$
        const blockMatches = text.match(/\$\$([\s\S]*?)\$\$/g) || [];
        for (const m of blockMatches) {
          totalBlocks++;
          const math = m.slice(2, -2);
          try {
            katex.renderToString(math, { displayMode: true, throwOnError: true });
          } catch (err) {
            console.error(`❌ Lỗi Block Math trong [${subj.name} - ${sec.title} - ${item.name}]:`, math, err.message);
            errors++;
          }
        }

        // Clean out blocks then find inline $...$
        const clean = text.replace(/\$\$([\s\S]*?)\$\$/g, '');
        const inlineMatches = clean.match(/\$([^$]+)\$/g) || [];
        for (const m of inlineMatches) {
          totalInlines++;
          const math = m.slice(1, -1);
          try {
            katex.renderToString(math, { displayMode: false, throwOnError: true });
          } catch (err) {
            console.error(`❌ Lỗi Inline Math trong [${subj.name} - ${sec.title} - ${item.name}]:`, math, err.message);
            errors++;
          }
        }
      }
    }
  }
}

console.log(`Đã kiểm tra ${totalBlocks} công thức khối ($$...$$) và ${totalInlines} công thức nội dòng ($...$)`);
if (errors === 0) {
  console.log('✅ 100% CÔNG THỨC ĐỀU HỢP LỆ VÀ ĐƯỢC RENDER HOÀN HẢO BỞI KATEX!');
} else {
  console.error(`❌ Phát hiện ${errors} lỗi cú pháp LaTeX!`);
  process.exit(1);
}
