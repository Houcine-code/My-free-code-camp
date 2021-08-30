function dropElements(arr, func) {
  let x = arr.slice();
  let i = 0;
  while(!func(x[i])){
    console.log(i);
    i++;
  }
  return x.slice(i);
}

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n >= 3; }));
