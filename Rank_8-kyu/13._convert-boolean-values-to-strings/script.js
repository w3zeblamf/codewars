/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 13: Convert boolean values to strings 
//**'Yes' or 'No'.
//*====================================================

/* Details: 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

//Solution 1 (My Solution):
//=========================

function boolToWord(bool) {
  return bool ? 'Yes' : 'NO';
}

console.log(boolToWord(true));
console.log(boolToWord(false));


//Other Solutions
//===============

//Solution 2:

// function boolToWord(bool) {
//   if (bool === true) {
//     return 'Yes';
//   } else {
//     return 'No';
//   }
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
