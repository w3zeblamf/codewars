/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 23: DNA to RNA Conversion
//*=======================================================

/* Details:

*/

//Solution 1: (My Solution)
//=========================

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('GCAT')); //'GCAU'


//Other solutions

//Solution 2:
//============

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

console.log(DNAtoRNA('GCAT')); //'GCAU'


//MDN/w3schools Web Docs reference:
//=================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//https://www.w3schools.com/jsref/jsref_replace.asp