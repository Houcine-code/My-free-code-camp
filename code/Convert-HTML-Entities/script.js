function convertHTML(str) {
  let strg = str;
  let char = ["&","\"","\'","<",">"];
  let charhtml = ["&amp;","&quot;","&apos;","&lt;","&gt;"];
  for(let i in char){
    let regex = new RegExp(char[i],"g");
    strg = strg.replace(regex, charhtml[i])
  }
  return strg;
}

console.log(convertHTML("DoStuff in \"quo\'tlce & Ga< bbana"));
