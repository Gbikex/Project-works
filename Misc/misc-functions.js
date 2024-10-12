
// Reverse string function

//Solution 1

const reverseString = function(inputString ) {

  let result = '';
 
  let inputToSplit = inputString.split("");

  for (let i = inputToSplit.length -1; i >= 0;i--){
    result += inputToSplit[i];
   }
  }

//Solution 2
/*
  return string.split("").reverse().join("");
*/

//////////////////////////////////////////////////

// Repeat string function

const repeatString = function(string,num) {
  
  string ='hey';
  num = 3;
  let result = '';

  for (let i = 1; i <= num; i++){
   result += string;

  };
  }
//////////////////////////////////////////////////

// Removes one value from an array

const removeFromArray = function(str,nm) {

  let splice = '';

  nm  = 3;
  str = [1, 2, 3, 4];
  
  for (let i = 0; i <= str.length; i++){
     if (str[i] === nm ){
      splice = str.splice(i,1);
      return str;
    }
  }
};

//////////////////////////////////////////////////

// Removes two value from an array


const removeFromArray2 = function(str,nm) {

  let splice = '';

  nm  = 2;
  nm2 = 3;
  str = [1, 2, 3, 4];
  
  for (let i = 0; i <= str.length; i++){
     if (str[i] === nm || str[i] === nm2){
      splice = str.splice(i,2);
      return str;
    }
  }
};

//////////////////////////////////////////////////
