function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let src_len = 0;
  for(let x in source){
    if(source.hasOwnProperty(x)){
    src_len++
    }
  }
    for(let y in collection){
      let k = 0;
      for(let z in collection[y]){
  for(let x in source){
        if(z == x && collection[y][z] == source[x]){
          k++;
        }}
      }
      if(k == src_len){
        arr.push(collection[y]);
      }
    }
  // Only change code above this line
  return arr;
}

let x = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log(x);
