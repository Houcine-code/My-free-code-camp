function uniteUnique(arr) {
  let a = [];
  for(let i = 0; i < arguments.length; i++){
    a.push(...arguments[i].filter(x => a.indexOf(x) == -1));
  };
  return a;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
