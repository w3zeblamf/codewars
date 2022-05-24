/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training : Calculate average
//*===============================================

/* Details: 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//Solution 1 (My Solution):
//=========================

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0; //Initialize the sum variable to accumulate the numbers.
  for (var i = 0; i < array.length; i++) {
    //Loop through the numbers and add each number to the result.
    result += array[i];
  }
  return result/array.length; //Divide the sum of numbers by the number of numbers in the array.
}

console.log(find_average([4, 4, 4, 4]));
console.log(find_average([]));


//Other Solutions
//===============

//Solution 2:

// find_average = array => array.length === 0 ? 0 : array.reduce((prev, curr) => prev + curr) / array.length;

// console.log(find_average([4, 4, 4, 4]));
// console.log(find_average([]));

//MDN Web Docs reference:
//=======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

