function rot13ltr(ltr) {
  let a = [], n = [];
  for(let i = 65 ; i <= 77 ; i++){
  a.push(String.fromCharCode(i))
  }
  for(let i = 78 ; i <= 90 ; i++){
  n.push(String.fromCharCode(i))
  }
  let ai = a.indexOf(ltr), ni = n.indexOf(ltr)
  if(n.indexOf(ltr) == -1){
    if((/\w/.test(ltr))) return n[ai]
    else return ltr;
    }
  else{ return a[ni]}
}
function rot13(str) {
  let arr = str.split("")
  for(let i in arr){
    arr[i] = rot13ltr(arr[i])
  }
  return arr.join("");
}

console.log(rot13("NA."));
