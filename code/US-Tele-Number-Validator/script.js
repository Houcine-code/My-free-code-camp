function telephoneCheck(str) {
  let num = str.split(/\s|-|\(|\)/);
  num = num.join("");
  if(num.length == 10){
    if(str.indexOf(")") > 4||(str.indexOf("(") >= 0 && str.indexOf(")") == -1)||(str.indexOf(")") >= 0 && str.indexOf("(") == -1)|| str.replace(/[^-]/g, "").length >= 3){ return false;}
    else
    return true;
  }
  else if(num.length == 11 && num[0] == 1){
    if(str[0] != 1 || (str.indexOf("(") > 0 && str.indexOf(")") == -1)||(str.indexOf(")") > 0 && str.indexOf("(") == -1)){
    return false;
    }
    else
    return true;
  }
  else{
    return false;
  }
}
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("(6054756961)"));
