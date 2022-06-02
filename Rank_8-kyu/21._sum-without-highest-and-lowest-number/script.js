/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 21: Sum without highest and lowest number
//*=======================================================

/* Details:
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

//Solution 1: (My Solution)
//=========================

function sumArray(array) {
  if (array && array.length > 1) {
    const arrayOrdered = array.sort((a, b) => a - b).slice(1, -1);
    //array.sort((a, b) => a - b) = sorted array
    //[6, 2, 1, 8, 10]            = [1,  2,  6,  8,  10]
    //.slice(1, -1) = extracts the second element through the second-to-last element in the sequence.
    //.slice(1, -1) = [2, 6, 8]
    return arrayOrdered.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    //.reduce(...) = return the sum of all the elements in the array
  }

  return 0;
}

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6
console.log(sumArray([])); // 0


//Other solutions

//Solution 2:
//============

// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// console.log(sumArray([6, 2, 1, 8, 10])); // 16
// console.log(sumArray([1, 1, 11, 2, 3])); // 6
// console.log(sumArray([])); // 0



//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
