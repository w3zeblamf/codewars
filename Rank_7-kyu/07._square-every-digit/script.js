/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 07: Square Every Digit
//*====================================================

/* Details: 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

//Solution 1 (My Solution):
//=========================

function squareDigits(num) {
  const numConcat = num.toString()
  .split('')
  .map((x) => x ** 2)
  .join('');
    
  return Number(numConcat);
}

console.log(squareDigits(9119)); // 811181
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114


//Other Solutions
//===============

//Solution 2:
//===========

// function squareDigits(num) {
//   const string = num.toString();
//   const result = [];
//   for (var i = 0; i < string.length; i++) {
//     result[i] = string[i] * string[i]; 
//              //= string[i] ** 2 
//   }

//   return Number(result.join(''));
// }

// console.log(squareDigits(9119)); // 811181
// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(2112)); // 4114

//MDN Web Docs reference:
//=======================

