function dtob(x){
  let d = x, b = [0,0,0,0,0,0,0,0];
  let j = 7;
  while(d != 1){
    if(d % 2 == 0){
      b[j] = 0 | b[j];
      j--;
    }
    else{
      b[j] = 1 | b[j];
      j--;
    }
      d = parseInt(d / 2);
  }
  b[j] = 1 | b[j];;
  return b.join("");
}

console.log(dtob(156));
