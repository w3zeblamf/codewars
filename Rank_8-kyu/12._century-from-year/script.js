/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 12: Century From Year
//*===============================================

/* Details: 
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

//Solution 1 (My Solution):
//=========================

function centuryFromYear(year) {
  const centuryData =
    year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return centuryData;
}

console.log(centuryFromYear(605221));
console.log(centuryFromYear(2001));
console.log(centuryFromYear(90));


//Other Solutions
//===============

//Solution 2:

// function centuryFromYear(year) {
//   return Math.ceil(year/100); // Math.cell() : to round up to nearest century (100)
// }
  
// console.log(centuryFromYear(605221));
// console.log(centuryFromYear(2001));
// console.log(centuryFromYear(90));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil