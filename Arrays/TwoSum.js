/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

//? Solution

/** 
 * Time Complexity = O(N)
 * Space Complexity = O(N)
Initialize:
    map = new Map() to store indexs of values

Loop for each element of the array

  (a) num = target - nums[i]
  (b) if(num exist in the map) 
            return the indexes 
  (c) else 
        set the index of num[i] in the map
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var num = target - nums[i];
    if (map.has(num)) {
      return [i, map.get(num)];
    }
    map.set(nums[i], i);
  }
};
