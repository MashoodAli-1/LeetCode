/* 
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

//? Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Time complexity: O(n)
// Space complexity: O(n)

var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (i > k) set.delete(nums[i - k - 1]);

    if (!set.has(nums[i])) set.add(nums[i]);
    else return true;
  }

  return false;
};
