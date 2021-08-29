function fearNotLetter(str) {
  let txt = "";
  let str2 = str.slice();
  let strg = str.slice().toLowerCase();
  strg = strg.split("");
  let az = "abcdefghijklmnopqrstuvwxyz";
  let a_z = az.split("");
  let s = az.indexOf(strg[0]);
  let a_z2 = a_z.slice(s);
  let j = 0;
  for(let i in str2){
    if(str2[i] != a_z2[j]){
      txt += a_z2[j];
      break;
    }
    else{
      j++;
    }
  }
  if(txt == "") return undefined
  else return txt;
}

console.log(fearNotLetter("abcdefghjklmno"));
