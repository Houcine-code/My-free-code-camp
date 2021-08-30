function checkprimes(num) {
  let d = 0,status = 0;
  for(let i = 2; i < num; i++){
    if(num % i == 0){ 
      d++;
    }
  }
  if(d) status = false;
  else status = true;
  return status
}
console.log(checkprimes(10));
