/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 11: Can we divide it?
//*===============================================

/* Details: 
Your task is to create the function isDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases: 
(45, 1, 6)   ->  false
(45, 5, 15)  ->  true
*/

//Solution 1 (My Solution):
//=========================

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

console.log(isDivideBy(-12, 2, -6)); // true
console.log(isDivideBy(-12, 2, -5)); // false


//Other Solutions
//===============

//Solution 2:

// const isDivideBy = (number, a, b) => {
//   if (number % a === 0 && number % b === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isDivideBy(-12, 2, -6)); // true
// console.log(isDivideBy(-12, 2, -5)); // false


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND