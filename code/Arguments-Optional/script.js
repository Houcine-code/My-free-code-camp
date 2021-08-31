function addTogether(x,y) {
  if(arguments.length == 2){
    if(typeof x == "number" && typeof y == "number") return x + y;
    else return undefined;
  }
  else{
    if(typeof x == "number"){
    return function(y){
      if(typeof y == "number") return x + y;
      else return undefined;
    }
    }
    else{
    }
  }
}
var sumTwoAnd = addTogether(2);
console.log(addTogether(2,3));
console.log(addTogether(23,30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(3));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(sumTwoAnd(2));
