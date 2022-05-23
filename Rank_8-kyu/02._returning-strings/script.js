/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 2: Returning Strings
//*===================================

/* Details:: 
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly] */

//Solution 1 (My Solution)

function greet(name){

  return `Hello, ${name} how are you doing today?`

}
console.log(greet('Albez'));

//Other solutions
//================

//Solution 2 ( arrow function):
// const greet1 = (name1) => `Hello, ${name1} how are you doing today?`;

// console.log(greet1('Manuel'));


// Solution 3: 
// function greet3(name3) {
//   return "Hello, " + name3 + " how are you doing today?";
// }

// console.log(greet3('Figueroa'));


//MDN web docs reference:
//========================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals