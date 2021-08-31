function btod(x){
  let b = x.split("").reverse(), d = 0;;
  for(let i in b){
    d+=Math.pow(2,i)*b[i];
  }
  return d;
}
function binaryAgent(str) {
  let bin = str.split(" ");
  for(let i in bin){
    bin[i] = String.fromCharCode(btod(bin[i]));
  }
  return bin.join("");
}

let g = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(g);
