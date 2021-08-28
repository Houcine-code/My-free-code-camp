function camelCasetostring(x){
  let str = x.match(/[A-Z][a-z]*|[a-z][a-z]*/g);
   return str.map(tocapital).join("-");
}
function tocapital(strg){
return strg.charAt(0).toLowerCase() + strg.substring(1);
}

function spinalCase(str) {
  let res = str.split(/\s|-|_/);
  for(let i in res){
    let regex = /[a-z][A-Z]/g;
    regex.test(res[i]);
    if(regex.lastIndex > 1){
    res[i] = camelCasetostring(res[i]);
    }
    else{
    res[i] = res[i].toLowerCase();
    }
  }
  let res2 = res.join("-");
  return res2;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
