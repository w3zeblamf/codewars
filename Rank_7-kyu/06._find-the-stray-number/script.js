/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 06: Find the stray number
//*====================================================

/* Details: 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
 */

//Solution 1 (My Solution):
//=========================

function stray(numbers) {
  const arrOrder = numbers.sort();
  return arrOrder[0] !== arrOrder[1]
    ? arrOrder[0]
    : arrOrder[arrOrder.length - 1];
}

console.log(stray([1, 1, 1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3


//Other Solutions
//===============

//Solution 2:
//===========
// function stray(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       return numbers[i];
//     }
//   }
// }
// stray([1, 1, 1, 1, 2]);  // 2
// stray([4, 4, 8, 4, 4]);  // 8


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
