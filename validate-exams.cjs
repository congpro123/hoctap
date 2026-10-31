const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const extra=vm.runInNewContext(fs.readFileSync('dist/extra-exams.js','utf8')+'\nextraExams;');
assert.equal(extra.length,17);
assert.equal(extra.filter(x=>x.subject==='physics').length,7);
assert.equal(extra.filter(x=>x.subject==='chemistry').length,10);
assert.equal(new Set(extra.map(x=>x.id)).size,extra.length);
for(const e of extra){
  assert.equal(e.questions.length,12,e.id);
  assert.equal(e.tf.length,2,e.id);
  assert.equal(e.short.length,3,e.id);
  assert.equal(new Set(e.questions.map(q=>q[0])).size,12,e.id);
  assert.ok(e.source.url.startsWith('https://'),e.id);
  for(const q of e.questions){assert.equal(q[1].length,4,e.id);assert.ok(Number.isInteger(q[2])&&q[2]>=0&&q[2]<4,e.id);}
  for(const q of e.tf){assert.equal(q.items.length,4,e.id);for(const [statement,answer] of q.items){assert.ok(statement);assert.equal(typeof answer,'boolean');}}
  for(const q of e.short){assert.ok(Number.isFinite(q.answer),e.id);assert.ok(q.explain,e.id);}
}
console.log('Đã kiểm tra 17 bộ đề mới: 7 Vật lý, 10 Hóa học.');
