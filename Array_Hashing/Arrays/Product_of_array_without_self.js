/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//? Solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var output = [];
  var pre = 1,
    post = 1;
  output.push(1);
  var i = 0;
  while (output.length < nums.length) {
    pre *= nums[i];
    output.push(pre);
    i += 1;
  }
  i = nums.length - 1;
  while (i >= 1) {
    output[i - 1] *= nums[i] * post;
    post *= nums[i];
    i -= 1;
  }
  return output;
};

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//   const length = nums.length;
//   const result = new Array(length).fill(1);

//   // Calculate the product of elements before the current index
//   let productBefore = 1;
//   for (let i = 0; i < length; i++) {
//     result[i] *= productBefore;
//     productBefore *= nums[i];
//   }
// console.log(result)
//   // Calculate the product of elements after the current index
//   let productAfter = 1;
//   for (let i = length - 1; i >= 0; i--) {
//     result[i] *= productAfter;
//     productAfter *= nums[i];
//   }

//   return result;
// };
