function btod(x){
  let b = x.split("").reverse(), d = 0;;
  for(let i in b){
    d+=Math.pow(2,i)*b[i];
  }
  return d;
}
console.log(btod("01111000"));
/*function dtob(x){
