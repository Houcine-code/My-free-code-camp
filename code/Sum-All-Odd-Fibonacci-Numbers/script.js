function fibs(num) {
  let i = 0, arr = [1,1];
  while(i < num){
    arr.push(arr[i]+arr[i+1]);
    i++;
  }
  return arr;
}
function sumFibs(a){
let x = fibs(a).filter(x => x % 2==1);
let sum = 0,i = 0;
while(x[i] <= a){
  sum+=x[i];
  i++;
}
return sum;
}
console.log(sumFibs(75025));
