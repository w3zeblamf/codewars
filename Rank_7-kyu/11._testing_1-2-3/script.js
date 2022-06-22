/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 12: Testing 1-2-3
//*====================================================

/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */

//Solution 1 (My Solution):
//=========================

var number = function (array) {
  const testResult = array.map((arrIndex, lineNumber) => `${lineNumber + 1}: ${arrIndex}`);
  return testResult;
};

console.log(number(['a', 'b', 'c']));


//Other Solutions
//===============

//Solution 2:

var number1 = function (array) {
  if (array.length == 0) return [];

  for (let i = 0; i < array.length; i++) 
    array[i] = `${i + 1 + ': '}`+ array[i];
    
    return array
  
};

console.log(number1(['d', 'e', 'f']));


//MDN Web Docs reference
//======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer

