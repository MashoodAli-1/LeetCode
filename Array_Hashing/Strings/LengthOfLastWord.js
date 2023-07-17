/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

//? solution

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var count = 0;
  if (s[s.length - 1] === " ") {
    for (var i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
        count += 1;
      } else if (count !== 0 && s[i] === " ") {
        break;
      }
    }
  } else {
    for (var i = s.length - 1; i >= 0; i--) {
      if (s[i] === " ") {
        break;
      }
      count += 1;
    }
  }
  return count;
};
