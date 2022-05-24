/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 9: Abbreviate a Two Word Name
//*===============================================

/* Details: 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F 

*/

//Solution 1 (My Solution):
//=========================

function abbrevName(name) {
  return name
    .toUpperCase()
    .split(' ')
    .map((x) => x[0])
    .join('.');
}

console.log(abbrevName('albez figueroa')); // A.F

//Other Solutions
//===============

//Solution 2:

// function abbrevName(name) {

//   const [firstName, lastName] = name.split(' ')
//   const firstInitial = firstName.charAt(0).toUpperCase()
//   const secondInitial = lastName.charAt(0).toUpperCase()
//   return firstInitial + '.' + secondInitial

// }

// console.log(abbrevName('manuel figueroa')); // A.F


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt