function steamrollArray(arr) {
  let ar = [];
  for(let i in arr){
    isArray(arr[i]);
    function isArray(x){
      if(!Array.isArray(x)) ar.push(x);
      else {
        for(let j in x){
          if(Array.isArray(x[j])) isArray(x[j]);
          else ar.push(x[j]);
        }
      }
    };
  }
  return ar;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
