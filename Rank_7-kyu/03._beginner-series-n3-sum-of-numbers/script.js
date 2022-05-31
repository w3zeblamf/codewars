/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 03: Beginner Series #3 Sum of Numbers
//*====================================================

/* Details: 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

//Solution 1 (My Solution):
//=========================

function getSum(a, b) {
  let minNum = Math.min(a, b);
  let maxNum = Math.max(a, b);
  return ((maxNum - minNum + 1) * (minNum + maxNum)) / 2;
}

console.log(getSum(-1, 2));


//Other Solutions
//===============

//Solution 2:

// function GetSum( a,b )
// {
//   if (a == b) return a;
//   else if (a < b) return a + GetSum(a+1, b);
//   else return a + GetSum(a-1,b);
// }

// console.log(GetSum(-1, 2));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max