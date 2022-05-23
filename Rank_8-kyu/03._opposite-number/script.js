/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 3: Opposite number
//*================================

/* Details:
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34 */

//Solution 1 (My Solution)
function opposite(number) {

  return number * (-1);
  
}

console.log(opposite(2));

//Other solutions: 

//Solution 2: 

// function opposite1(number1) {
//   return -number1;
// }

// console.log(opposite1(-4));

//Solution 3:

// const opposite3 = (number3) => -number3;

// console.log(opposite(9));