const assert = require('node:assert/strict');
global.window = {};
require('./dist/chemistry-illustrative-02.js');
const exam = window.chemistryIllustrative02[0];
assert.equal(exam.subject, 'chemistry');
assert.equal(exam.questions.length, 16);
assert.equal(exam.tf.length, 2);
assert.deepEqual(exam.tf.map(group => group.items.length), [4, 4]);
assert.equal(exam.short.length, 4);
assert.equal(exam.essay.length, 3);
assert.deepEqual(exam.questions.map(q => q[2]), [2,1,0,1,1,2,1,0,1,1,3,2,2,1,0,1]);
assert.deepEqual(exam.tf.map(q => q.items.map(item => item[1])), [[true,true,false,true],[true,true,false,true]]);
assert.deepEqual(exam.short.map(q => q.answer), ['5','12','9','3']);
for (const [index, q] of exam.questions.entries()) {
  assert.equal(q.length, 4, `MC ${index+1}`);
  assert.equal(q[1].length, 4, `MC ${index+1} choices`);
  assert(q[0].length > 35, `MC ${index+1} stem`);
  assert(q[1].every(option => option.length > 1), `MC ${index+1} option`);
}
const math = [
  ...exam.questions.flatMap(q => [q[0], ...q[1], q[3]]),
  ...exam.tf.flatMap(g => [g.stem, ...g.items.map(item => item[0])]),
  ...exam.short.map(q => q.question),
  ...exam.essay.map(q => q.question)
];
for (const text of math) assert.equal((text.match(/\$/g) || []).length % 2, 0, `unbalanced math: ${text}`);
assert(math.join(' ').includes('\\cdot10^{-19}'), 'electron charge formula');
console.log('Chemistry PDF exam structure, keys, and math delimiters: OK');
