/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 08: Disemvowel Trolls
//*====================================================

/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

//Solution 1 (My Solution):
//=========================

function disemvowel(str) {
  const removeVowels = str.replace(/[aeiou]/gi, '');
  //The 'i' added after 'g' in the regex will remove any case-sensitive.)
  return removeVowels;
}

console.log(disemvowel('This website is for losers LOL!')); // T hs wbst s fr lsrs LL!

//Other Solutions
//===============

//Solution 2:
//===========

function disemvowel(str) {
  const removeVowels = str.replace(/[aeiouAEIOU]/g, '');
  return removeVowels;
}

console.log(disemvowel('This website is for losers LOL!')); // T hs wbst s fr lsrs LL!

//MDN Web Docs reference:
//=======================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

