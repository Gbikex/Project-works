
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

//Add function remove same value multiple times from array

const sumAll = function(nm,nm1) {

  let sumAll = 0;
  let result = 0;

  nm = 10;
  nm1 = [90, 1];
 
  if (nm < 0 || nm1 < 0) {
    result = 'ERROR';
  } else if (Number.isInteger(nm) !== true || Number.isInteger(nm1) !== true) {
    result = 'ERROR';
  }
  
  else{
  
    if (nm > nm1) {
        nm = [nm1, nm1 = nm][0];
    };  

    for (let i = nm; i <= nm1 ; i++) {
      if (nm <= nm1) {
     
        sumAll += nm;
        result += sumAll;

      }
    }
  };

  return result;

};

//////////////////////////////////////////////////

//Add up values in an array

const sum = function(arr) {

  arr =[1,3,5,7,9];

  let result = 0;

  for (let i= 0; i < arr.length ; i++ ) {

    result += arr[i];
    console.log(result);

  }
  return result;


};

//////////////////////////////////////////////////

//Multiplication of numbers in an array

const multiply = function(arr) {

  arr = [2, 4, 6, 8, 10, 12, 14];

  let result = 1;

  for (let i = 0; i < arr.length; i++) {

    result *= arr[i];
    console.log(result);
 
  }

  return result;

};

//////////////////////////////////////////////////

// Calculate factorial
const factorial = function(factNum) {
	
  factNum = 10;
  result = 1;

  if (factNum === 0 || factNum === 1 ){
    return 1;
  }else {
    for(let i = 1; i < factNum; i++) {

    result *= i;
  
    }
  
    return factNum * result;

  }

};

//////////////////////////////////////////////////