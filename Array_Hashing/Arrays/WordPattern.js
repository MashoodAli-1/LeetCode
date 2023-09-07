/* 
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/

// ? Solution-1
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  if (pattern.length !== s.split(" ").length) return false;
  const arr = s.split(" "),
    temp = {};

  if (
    arr.length !== pattern.length ||
    new Set([...pattern]).size !== new Set(arr).size
  )
    return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!temp[pattern[i]]) {
      temp[pattern[i]] = arr[i];
    } else if (temp[pattern[i]] !== arr[i]) {
      return false;
    }
  }
  return true;
};
