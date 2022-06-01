/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 19: Remove String Spaces
//*====================================================

/* Details: 
Simple, remove the spaces from the string, then return the resultant string.
 */

//Solution 1 (My Solution):
//=========================

function noSpace(x) {
  let spaceRemove = x.split(' ').join('');

  return spaceRemove;
}

console.log(noSpace('site/ code wars .com/'));


//Other Solutions
//===============

//Solution 2:

// function noSpace(x) {
//   var result = '';
//   for (var index = 0; index < x.length; index++) {
//     if (x[index] !== ' ') {
//       result += x[index];
//     }
//   }
//   return result;
// }

// console.log(noSpace('site/ code wars .com/'));

//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join