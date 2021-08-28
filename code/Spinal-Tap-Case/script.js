const regex1 = /a/g;
const str1 = 'table football, foosball';
regex1.test(str1);
console.log(regex1.lastIndex);
function spinalCase(str) {
  let res = str.split(/\s|-|_/);
  let res2 = [];
  for(let i in res){
    if(res[i].indexOf(/[a-z]*[A-Z][a-z]*/) >= 0 ){
    res2.push(res[i]);
    }
  }
  return res2;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
