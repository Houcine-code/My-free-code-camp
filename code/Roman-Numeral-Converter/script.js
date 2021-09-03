let a = [ 'M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
let b = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
function convertToRoman(num) {
  let i = 0;
  let n = (num.toString().split("").reverse()).map(function(x,y,z){x = Number(x)*Math.pow(10,i);i++;return x}).reverse();
  let r = [];
  for(let i in n){
    for(let j in b){
      if(n[i] % b[j] == 0 && n[i] / b[j] < 4){
        while(n[i] % b[j] == 0 && n[i] != 0){
          r.push(a[j]);
          n[i] = n[i] - b[j];
        }
      }
      else if(n[i] - b[j] > 0 ){
      r.push(a[j]);
      n[i] = n[i] - b[j];
      }
      
    }
  }
  return r.join("");
}
console.log(convertToRoman(1000));
