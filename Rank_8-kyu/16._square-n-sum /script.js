/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 16:
//*====================================================

/* Details: 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

//Solution 1 (My Solution):
//=========================

function squareSum(numbers) {
  let sumNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumber += numbers[i] ** 2;
  }
  return sumNumber;
}

console.log(squareSum([1, 2, 2]));

//Other Solutions
//===============

//Solution 2:

// function squareSum(numbers){
//   var sum = 0;
//   numbers.forEach(function(n) {
//     sum += n * n
//   });
//   return sum;
// }

//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

