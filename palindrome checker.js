//to exclude whitespace/symbols comment appropriate code back in
function palindrome(str) {
  var palStrOne = "";
  var palStrTwo = "";
  
  const strLower = str.toLowerCase();
  //const strRegex = /[^a-z0-9]/g;
  const strPal = strLower;//.replaceAll(strRegex, "");

  for (let a = 0; a < (strPal.length - 1)/2; a++) { //half 1
    palStrOne = palStrOne + strPal.charAt(a);
  }

  for (let b = strPal.length; b > (strPal.length - 1)/2; b--) {
    palStrTwo = palStrTwo + strPal.charAt(b);
  }
  
  if (palStrOne === palStrTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));

