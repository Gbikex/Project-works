
// Reverse string function

//Solution 1

const reverseString = function(inputString ) {

  let result = '';
 
  let inputToSplit = inputString.split("");

  for (let i = inputToSplit.length -1; i >= 0;i--){
    result += inputToSplit[i];
   }
  }
  return result;

//Solution 2
/*
  return string.split("").reverse().join("");
*/
//////////////////////////////////////////////////