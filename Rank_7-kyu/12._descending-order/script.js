/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 12: Descending Order
//*====================================================

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

//Solution 1 (My Solution):
//=========================

function descendingOrder(n) {
  const highestNumber = n.toString().split('').sort().reverse().join('');
  return Number(highestNumber) > 0 ? Number(highestNumber) : 0;

  // 0 = Negative number or It's not an integer
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));


//Other Solutions
//===============

//Solution 2:



//MDN Web Docs and Stack Overflow references:
//===========================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
