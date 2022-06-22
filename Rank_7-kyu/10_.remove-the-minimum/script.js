/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 10: Remove the minimum
//*====================================================

/* 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
 */

//Solution 1 (My Solution):
//=========================

function removeSmallest(array) {
  const clone = [...array];
  clone.splice(array.indexOf(Math.min(...array)), 1);
  return clone;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([5, 3, 2, 1, 4]));


//Other Solutions
//===============

//Solution 2:

// function removeSmallest(numbers) {
//   const indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return numbers.filter((a, b) => b !== indexOfMin);
// }

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));


//MDN Web Docs and Stack Overflow references:
//===========================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

