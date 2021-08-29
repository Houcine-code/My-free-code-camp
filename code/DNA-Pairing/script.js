function pairElement(str) {
  function pairing(x){
    return (x == "G") ? "C"
    :(x == "C") ? "G"
    :(x == "A") ? "T"
    :(x == "T") ? "A"
    : "Error";
  }
  let strg = str.split("");
  for(let i in strg){
    strg[i] = [strg[i],pairing(str[i])]
  }
  return strg;
}

console.log(pairElement("GCG"));
