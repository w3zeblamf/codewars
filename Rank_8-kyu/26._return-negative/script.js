/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 26: Return Negative
//*====================================================

/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */

//Solution 1 (My Solution):
//=========================

function makeNegative(num) {
  const positiveToNegative = num * -1;
  const alreadyNegative = -num * -1;

  if (num > 0) {
    return positiveToNegative;
  } else if (num < 0) {
    return alreadyNegative;
  } else {
    return 0;
  }
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(-0.12));


//Other Solutions
//===============

//Solution 2:

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(-0.12));


//MDN Web Docs and Stack Overflow references:
//===========================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs


