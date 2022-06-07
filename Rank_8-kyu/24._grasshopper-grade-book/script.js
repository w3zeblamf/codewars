/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 24: Grasshopper - Grade book
//*====================================================

/* Details: 
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

//Solution 1 (My Solution):
//=========================

function getGrade(s1, s2, s3) {
  const sumGrade = [s1, s2, s3];
  const scoreAverage = sumGrade.reduce((a, b) => a + b, 0) / sumGrade.length;

  return scoreAverage >= 90 && scoreAverage <= 100
    ? 'A'
    : scoreAverage >= 80
    ? 'B'
    : scoreAverage >= 70
    ? 'C'
    : scoreAverage >= 60
    ? 'D'
    : 'F';
}

console.log(getGrade(90, 90, 93)); // 'A'
console.log(getGrade(70, 70, 100));// 'B'
console.log(getGrade(70, 70, 70)); // 'C'
console.log(getGrade(65, 70, 59)); // 'D'
console.log(getGrade(44, 55, 52)); // 'F'


//Other Solutions
//===============

//Solution 2:

// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }

// console.log(getGrade(90, 90, 93)); // 'A'
// console.log(getGrade(70, 70, 100)); // 'B'
// console.log(getGrade(70, 70, 70)); // 'C'
// console.log(getGrade(65, 70, 59)); // 'D'
// console.log(getGrade(44, 55, 52)); // 'F'


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

