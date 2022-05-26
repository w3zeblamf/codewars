/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 14: Beginner Series #1 School Paperwork
//*====================================================

/* Details: 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

*/

//Solution 1 (My Solution):
//=========================

function paperwork(n, m) {
  const blankpages = n * m;
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return blankpages;
  }
}

console.log(paperwork( 5, 5)); // 25
console.log(paperwork( -5, 5)); //0


//Other Solutions
//===============

//Solution 2:

// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }

// console.log(paperwork( 5, 5)); // 25
// console.log(paperwork( -5, 5)); //0


//MDN Web Docs reference:
//=======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

