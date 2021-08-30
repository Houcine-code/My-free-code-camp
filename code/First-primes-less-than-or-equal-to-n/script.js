function checkprimes(n) {
  let d = 0,status = 0;
  for(let i = 2; i < n; i++){
    if(n % i == 0){ 
      d++;
    }
  }
  if(d) status = false;
  else status = true;
  return status
}
function sumPrimes(num){
let primes = [];
for(let i = 2; i <= num; i++){
  if(checkprimes(i)) primes.push(i);
}
return primes.reduce((x,y) => x+y,0);
}
console.log(sumPrimes(10));
