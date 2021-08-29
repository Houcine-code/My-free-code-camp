let txt = "Sfsfasdsa";
function myReplace(str, before, after) {
  let strg = str.slice();
  let regex = /[A-Z]/;
  let aftr = after.split("");
  if(regex.test(before.charAt(0)) == regex.test(after.charAt(0))){
  strg = strg.replace(before,after);
  }
  else {
    if(regex.test(before.charAt(0))){
    aftr[0] = aftr[0].toUpperCase();
    aftr = aftr.join("");
    strg = strg.replace(before,aftr);
    }
    else{
    aftr[0] = aftr[0].toLowerCase();  
    aftr = aftr.join("");
    strg = strg.replace(before,aftr);
    }
  }
  return strg;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
