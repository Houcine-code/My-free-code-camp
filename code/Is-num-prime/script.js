function checkprimes(n) {
  let d = 0,status;
  for(let i = 2; i < n; i++){
    if(n % i == 0){ 
      d++;
    }
  }
  if(d) status = false;
  else if (n == 1) status = false;
  else status = true;
  return status;
}
console.log(checkprimes(9));
