function palindrome(str) {
  let s = str.split(/\s|-|_|\.|\W\D/);
  s = s.join("");
  s = s.split("")
  let r = s.slice().reverse();
  console.log(s.toString());
  return r.toString().toLowerCase() == s.toString().toLowerCase();
}



console.log(palindrome("My age is 0, 0 si ega ym."));
