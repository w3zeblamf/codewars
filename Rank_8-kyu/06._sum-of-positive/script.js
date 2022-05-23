/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 6: Sum of positive
//*===============================================

/* Details: 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


//Solution 1 (My Solution):
//=========================

function positiveSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
      //total = total + arr[i];
    }
  }
  return total;
}

console.log(positiveSum([5, -4, 2, 3]));


//Other Solutions
//===============

//Solution 2:

// function positiveSum(arr) {
//   return arr.reduce((a,b) => a + (b > 0 ? b:0), 0);
// }

// console.log(positiveSum([5, -4, 2, 3]));


//MDN Web Docs reference:
//=======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce