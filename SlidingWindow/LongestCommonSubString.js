/* 
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

//? Solution

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length % 2;

  let left = 0,
    right = 0;
  let maxLength = -Infinity;
  const set = new Set();

  while (right < s.length) {
    // If s[right] has not been seen yet
    if (!set.has(s[right])) {
      // Add it to the set
      set.add(s[right]);
      // Increase size of window to right
      right++;
      // Update maxLength; set size represents length of unique substring
      maxLength = Math.max(maxLength, set.size);
    } else {
      // We've seen s[right] so we need to shrink the window
      // Delete s[left] from set
      set.delete(s[left]);
      // Shrink window from left
      left++;
    }
  }
  return maxLength;
};
