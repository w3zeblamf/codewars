/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 02: Find the next perfect square!
//*================================================

/* Details: 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/


//Solution 1 (My Solution):
//=========================

function findNextSquare(sq) {
  const baseSquare = Math.sqrt(sq);
  if (baseSquare !== Math.floor(baseSquare)) {
    return -1;
  } else {
    return (baseSquare + 1) * (baseSquare + 1);
  }

  // Return the next square if sq is a perfect square, -1 otherwise
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));


//MDN Web Docs reference:
//=======================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor