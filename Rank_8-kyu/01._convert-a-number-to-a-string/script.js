/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 1: Convert a Number to a String!
//*==============================================

/* Details:
We need a function that can transform a number into a string.
What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999" */

//Solution 1: (My Solution)
//=========================

function numberToString(num) {
  return num.toString() // 123.toString() = '123'
}

console.log(numberToString(123)); // '123'
console.log(typeof(numberToString(123))); // string


//Other solutions

//Solution 2:
//============

// function numberToString2(num) {
//   return `${num}`;
// }

// console.log(numberToString2(520)); // '520'

//Solution 3:

// function numberToString3(num) {

//   let str = '';

//   str += num; // str = srt + num = ' ' + num

//   return str;
// }

// console.log(numberToString3(625)); // '625


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString