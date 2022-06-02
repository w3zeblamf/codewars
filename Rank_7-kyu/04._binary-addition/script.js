/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 04: Binary Addition
//*==============================================

/* Details:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//Solution 1: (My Solution)
//=========================

function addBinary(a,b) {

  const decimalNumber = a + b;
  const binaryNumber = decimalNumber.toString(2)
  //The toString() method returns a string representing the specified Number object.
  //toString(radix) = toString(2)
  //radix: An integer in the range 2 through 36 specifying the base to use for representing numeric values.
  //In this case, we're converting to base 2(binary), so we'll use 2 as the radix.
  return binaryNumber
  //return `${a} , ${b} --> ${binaryNumber} (${a} + ${b} = ${decimalNumber} in decimal or ${binaryNumber} in binary)`
  } 
  
  console.log(addBinary(1,2));


//Other solutions

//Solution 2:
//============

//const addBinary = (a, b) => (a + b).toString(2);

//console.log(addBinary(1,2));

//MDN Web Docs reference:
//=======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString