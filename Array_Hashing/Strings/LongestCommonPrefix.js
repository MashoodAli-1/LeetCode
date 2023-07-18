/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

//? Solution

/**
 * @dev first sort the array and compare the first and last element of 
        string array 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  s1 = strs[0];
  s2 = strs[strs.length - 1];
  s3 = "";
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      s3 += s1[i];
    } else {
      break;
    }
  }
  return s3;
};
