/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 18: Sum Arrays
//*====================================================

/* Details: 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
 */

//Solution 1 (My Solution):
//=========================

function sum(numbers) {
  let arraySum = 0;
  for (let i = 0; i < numbers.length; i++) {
    arraySum += numbers[i];
  }

  if (numbers === []) {
    return 0;
  } else {
    return arraySum;
  }
}

console.log(sum([-2.398]));
console.log(sum([0]));
console.log(sum([1, 2, 3, 4]));

//Other Solutions
//===============

//Solution 2:

// sum = function (numbers) {
//   return numbers.reduce(function (prev, cur) {
//     return prev + cur;
//   }, 0);
// };

// console.log(sum([-2.398]));
// console.log(sum([0]));
// console.log(sum([1, 2, 3, 4]));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
