/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 4: Even or Odd
//*=============================

/* 
Details: 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

//Solution 1 (My Solution):
//=========================

function even_or_odd(number) {
  if (number % 2) {
    return `${number} is an 'Odd' number`;
  } else {
    return `${number} is an Even number`
  }
}

console.log(even_or_odd(2));
console.log(even_or_odd(-9));
console.log(even_or_odd(-8));
console.log(even_or_odd(5));

//Other Solutions
//===============

//Solution 2:

// const even_or_odd = (number) => (number % 2) ? 'Odd': 'Even';

// console.log(even_or_odd(2));
// console.log(even_or_odd(-9));
// console.log(even_or_odd(-8));
// console.log(even_or_odd(5));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder