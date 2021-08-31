var Person = function(firstAndLast) {
  // Only change code below this line
  this.setFirstName = function(x) {
    f[0] = x;
  };
  this.setLastName = function(x) {
    l[0] = x;
  };
  this.setFullName = function(x) {
    let y = x.split(" ");
    f[0] = y[0];
    l[0] = y[1];
  };
  // Complete the method below and implement the others similarly
  let fal = firstAndLast.split(" ");
  let f = [fal[0]], l = [fal[1]], fl = [f,l];
  this.getFirstName = function(x = f.toString()) {
    return x;
  };
  this.getLastName = function(x = l.toString()) {
    return x;
  };
  this.getFullName = function(x = fl.join(" ")) {
    return x;
  };
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
bob.setLastName("Curry");
console.log(bob.getFullName());
