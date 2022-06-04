/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 05: Reverse Words
//*==============================================

/* Details:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/ 

//Solution 1: (My Solution)
//=========================

function reverseWords(str) {
  const reversedone = str.split('').reverse().join('').split(' ').reverse().join(' ');
  return reversedone
}

console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe
console.log(reverseWords('"double  spaces'));  // elbuod" secaps


//Other solutions

//Solution 2:
//============

// function reverseWords(str) {
//   var newStr = '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr.split(' ').reverse().join(' ');
// }

// console.log(reverseWords('This is an example!')); // sihT si na !elpmaxe
// console.log(reverseWords('"double  spaces')); // elbuod" secaps



//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join