/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 10: Will you make it?
//*===============================================

/* Details: 
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

*/

//Solution 1 (My Solution):
//=========================

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(50, 25, 1));


//Other Solutions
//===============

//Solution 2:

// function zeroFuel1(distanceToPump, mpg, fuelLeft) {
//   return distanceToPump > mpg * fuelLeft ? false : true;
// }

// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(50, 25, 1));


//MDN Web Docs reference:
//=======================
//No reference