function aatoop(x){
  return Math.round(2*Math.PI*Math.sqrt(Math.pow(x+6367.4447,3)/398600.4418));
}
function orbitalPeriod(arr) {
  let res = [];
  for(let i in arr){
  res.push(rdc([arr[i]]));
  }
  function rdc(z){
    z = z.reduce(function(x,y){ 
    x = y;
    x.orbitalPeriod = aatoop(y.avgAlt);
    delete x.avgAlt;
    return x
    },{});
    return z;
  }
  return res;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 413.6}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
//average altitude to orbital periods t = 2pr(a^3/gm)
/*function aatoop(x){
  return Math.round(2*Math.PI*Math.sqrt(Math.pow(x+6367.4447,3)/398600.4418));
}
console.log(aatoop(35873.5553))*/
