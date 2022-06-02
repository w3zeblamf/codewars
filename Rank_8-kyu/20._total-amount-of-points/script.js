/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//**Kata training 20: Total amount of points
//*====================================================

/* Details: 
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//Solution 1 (My Solution):
//=========================

function points(games) {
  //To store total games points
  let totalMatchPoints = 0;
  //Loop the matches (10) in the championship
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) totalMatchPoints += 3;
    if (games[i][0] === games[i][2]) totalMatchPoints += 1;
  }
  //Results of all matches
  return totalMatchPoints;
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
); // 30 Points

//Other Solutions
//===============

//Solution 2
// function points(games) {
//   // Variable to store total points
//   let totalPoints = 0;
//   // Looping through all games
//   games.forEach((game) => {
//     const x = game[0];
//     const y = game[2];
//     if (x > y) {
//       // totalPoints = totalPoints + 3;
//       totalPoints += 3;
//     } else if (x === y) {
//       totalPoints += 1;
//     }
//   });
//   // Returning total points
//   return totalPoints;
// }


//MDN Web Docs reference:
//=======================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration