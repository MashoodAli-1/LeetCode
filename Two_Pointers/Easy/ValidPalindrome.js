/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

//? Solution-1
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var str = s.trim().toLowerCase().split(" ").join("");
  var str2 = str.replace(/[^a-zA-Z0-9\s]/g, "");
  var str3 = str2.split("").reverse().join("");
  console.log(str2, str3);
  if (str2 === str3) {
    return true;
  } else {
    return false;
  }
};

//? Solution-2
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var str = s.trim().toLowerCase().split(" ").join("");
  var str2 = str.replace(/[^a-zA-Z0-9\s]/g, "");
  let left = 0;
  let right = str2.length - 1;

  while (left < right) {
    if (str2[left] !== str2[right]) return false;

    left++;
    right--;
  }

  return true;
};
