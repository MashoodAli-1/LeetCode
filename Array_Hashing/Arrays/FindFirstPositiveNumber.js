/* 
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
*/

//? Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  n = nums.length;
  console.log(n, n + 1);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    var index = Math.abs(nums[i]) - 1;
    if (index < n && nums[index] > 0) {
      nums[index] *= -1;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};
