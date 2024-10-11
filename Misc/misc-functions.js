
// Reverse string function

const reverseString = function(inputString ) {

  let result = '';
 
  let inputToSplit = inputString.split("");

  for (let i = inputToSplit.length -1; i >= 0;i--){
    result += inputToSplit[i];
  }

  return result;

  /////////////////////////////////////////////////