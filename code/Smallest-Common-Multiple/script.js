function numberRange(arr) {
  let ar = arr.sort(function(a,b){return a-b});
  let ar2 = [];
  for(let i = ar[0] + 1 ; i < ar[1]; i++){
    ar2.push(i);
  }
  ar = [ar[0],...ar2,ar[1]];
  return ar;
}
function smallestCommons(arr) {
  let ar = numberRange(arr);
  var g = ar[ar.length -1];
  while(g){
    if(ar.every(function(z){return g % z == 0})){
      break;
    }
    g++;
  }
  return g;
}

console.log(smallestCommons([1,5]));
