const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map();
const document={getElementById:id=>{if(!elements.has(id))elements.set(id,{textContent:'',innerHTML:''});return elements.get(id)},querySelectorAll:()=>[],addEventListener:()=>{}};
const localStorage={getItem:()=>null};
const context=vm.createContext({document,localStorage,window:{scrollTo(){}},Intl,Date,Math,Number,String,Array,Set,Map});
for(const file of ['extra-exams.js','math-exams.js','app.js','ui-upgrades.js','scoring.js','dedup.js'])vm.runInContext(fs.readFileSync(`dist/${file}`,'utf8'),context,{filename:file});
const exams=vm.runInContext('exams',context);
assert.equal(exams.length,30);
const old=vm.runInContext("historicalExamForResult({id:'TO10-GKI-10'})",context);
const revised=vm.runInContext("historicalExamForResult({id:'TO10-GKI-10',questionSetVersion:2})",context);
assert.ok(old&&revised);assert.notEqual(old,revised);
for(const subject of ['physics','chemistry','math']){
  const group=exams.filter(e=>e.subject===subject);assert.equal(group.length,10);
  for(const [part,key,field,expected] of [['mc','questions',0,120],['tf','tf','stem',20],['short','short','text',30]]){
    const rows=group.flatMap(e=>e[key]);assert.equal(rows.length,expected);
    assert.equal(new Set(rows.map(q=>q[field])).size,expected,`${subject} ${part} trùng câu`);
  }
  for(const e of group){for(const q of e.questions){assert.equal(q[1].length,4);assert.ok(Number.isInteger(q[2])&&q[2]>=0&&q[2]<4)}for(const q of e.tf){assert.equal(q.items.length,4);assert.ok(q.items.every(i=>typeof i[1]==='boolean'))}for(const q of e.short)assert.ok(Number.isFinite(q.answer))}
}
console.log('30 đề: không trùng câu giữa các đề cùng môn; đáp án đúng định dạng.');
