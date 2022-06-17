/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 09: Vowel Count
//*====================================================

/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

//Solution 1 (My Solution):
//=========================


function getCount(str) {
  const findVowels = str.match(/[aeiou]/g, '');
  //const findConsonant = str.match(/^[aeiou]/g, '');
  return !findVowels ? 0 : findVowels.length;
}

console.log(getCount('abracadabra'));
console.log(getCount('my pyx'));


//Other Solutions
//===============

//Solution 2:

//===========
// function getCount(str) {
//   return str.match(/a|e|i|o|u/g, '') ? str.match(/a|e|i|o|u/g, '').length : 0;
// }

// console.log(getCount('abracadabra'));
// console.log(getCount('my pyx'));



//MDN Web Docs and Stack Overflow references:
//===========================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

//https://stackoverflow.com/questions/46908449/how-to-count-how-many-consonants-are-in-a-string

