/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 17: String repeat
//*====================================================

/* Details: 
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

//Solution 1 (My Solution):
//=========================

function repeatStr(n, s) {
  let repetition = `${s.repeat(n)}`;
  return repetition;
}

console.log(repeatStr(6, 'I'));
console.log(repeatStr(5, 'Hello'));

//Other Solutions
//===============

//Solution 2:

// function repeatStr(n, s) {
//   var str = '';
//   for (var i = 0; i < n; i++) str += s;
//   return str;
// }

// console.log(repeatStr(6, 'I'));
// console.log(repeatStr(5, 'Hello'));

//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

