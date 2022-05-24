/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 8: Fake Binary
//*===============================================

/* Details: 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//Solution 1 (My Solution):
//=========================
function fakeBin(x) {
  return x.split('').map((a) => a < 5 ? 0 : 1).join('');
}

console.log(fakeBin('9234958')); // 1000111
console.log(1234);

//Other Solutions
//===============

//Solution 2:

// function fakeBin(str) {
//   var newStr = '';
//   for (var i = 0; i < str.length; i++) {
//     if (Number(str[i]) >= 5) {
//       newStr += '1';
//     } else {
//       newStr += '0';
//     }
//   }
//   return newStr;
// }

// console.log(fakeBin('9234958')); // 1000111

//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join