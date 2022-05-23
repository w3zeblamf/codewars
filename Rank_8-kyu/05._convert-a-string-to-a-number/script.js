/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 5: Convert a String to a Number!
//*===============================================

/* Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Details:
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number. */


//Solution 1 (My Solution):
//=========================

const StringToNumber = function(str) {
  
  return parseInt(str) // parseInt('10') = 0

}

console.log((StringToNumber('100')));
console.log((StringToNumber('-40')));


//Other Solutions
//===============

//Solution 2:

//var StringToNumber = (str) => Number(str)

//console.log(StringToNumber('200'))

//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt