/* Remember to use 'strict' mode in all scripts now!
You can use strict mode in all your programs. It helps you to write cleaner code,
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//*Kata training 22: Calculate BMI
//*=======================================================

/* Details:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//Solution 1: (My Solution)
//=========================

function bmi(weight, height) {
  const bmicalc = weight / height ** 2;

  if (bmicalc <= 18.5) {
    return 'Underweight';
  } else if (bmicalc <= 25.0) {
    return 'Normal';
  } else if (bmicalc <= 30.0) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

console.log(bmi(70, 1.85));

//Other solutions

//Solution 2:
//============

// function bmi(weight, height) {
//   const calcbmi = weight / height ** 2;
//   return calcbmi <= 18.5
//     ? 'Underweight'
//     : calcbmi <= 25.0
//     ? 'Normal'
//     : calcbmi <= 30 - 0
//     ? 'Overweight'
//     : 'Obese';
// }

// console.log(bmi(70, 1.78));

//Solution 3:
//============
// function bmi(weight, height) {
//   const calcbmi = weight / height ** 2;
//   switch (true) {
//     case calcbmi <= 18.5:
//       return 'Underweight';
//     case calcbmi <= 25.0:
//       return 'Normal';
//     case calcbmi <= 30.0:
//       return 'Overweight';
//     case calcbmi > 30:
//       return 'Obese';
//   }
// }

// console.log(bmi(70, 1.78));


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch