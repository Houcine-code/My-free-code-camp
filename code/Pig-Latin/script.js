function translatePigLatin(str) {
  let arr = str.split("");
  let j = 0;
  let suffix = arr;
  if(arr[0] == "a" || arr[0] == "i" || arr[0] == "e" || arr[0] == "o" || arr[0] == "u" ){
    arr.push("way");
    arr = arr.join("");
  }
  else{
    let i = 0;
    while(i < arr.length){
      if(arr[i] != "a" && arr[i] != "i" && arr[i] != "e" && arr[i] != "o" && arr[i] != "u"){
        j++;
      }
      else{
        break;
      }
      i++;
    }
    suffix = arr.slice(0,j);
    arr = [...arr,...suffix];
    for(let k = 0; k < j; k++){
      arr.shift();
    }
    arr.push("ay");
    arr = arr.join("");
  }
  return arr;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
