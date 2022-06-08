/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 25: Sum Mixed Array
//*====================================================

/* Details: 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

 */

//Solution 1 (My Solution):
//=========================

function sumMix(x){
  const arrOfNum = x.map(str => {
  return Number(str);
});

const sumArray = arrOfNum.reduce((a,b) => a + b, 0)
return sumArray
}

console.log(sumMix([2,'1',4])) // 7

//Other Solutions
//===============

//Solution 2:

//===========
// function sumMix(x) {
//   if (Array.isArray(x)) {
//     var sum = 0;
//     x.forEach(function (element) {
//       sum += Number(element);
//     });
//   }
//   return sum;
// }

// console.log(sumMix([2,'1',4])) // 


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

