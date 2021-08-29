function fibs(num) {
  let i = 0, arr = [1,1];
  while(i < num){
    arr.push(arr[i]+arr[i+1]);
    i++;
  }
  return arr;
}
console.log(fibs(20));
