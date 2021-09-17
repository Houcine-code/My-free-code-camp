function func(str) {
let txt = [...str.split(' ')];
return txt.sort(function(a,b){return b.length - a.length})[0].length
}
