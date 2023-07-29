/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

//? Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  var set = new Set(nums);
  console.log(set);
  var count = 1;

  for (var num of set) {
    if (!set.has(num - 1)) {
      var len = 0;
      while (set.has(num + len)) {
        len += 1;
      }
      count = Math.max(count, len);
    }
  }
  return count;
};
