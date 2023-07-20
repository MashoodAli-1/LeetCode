/* 
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"

Input: nums  = [90,80,30,70]
Output: "90807030"
*/

//? Solution

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let rst = "";
  nums.sort(comparator);
  console.log(nums);
  for (const num of nums) {
    rst += num;
  }
  return rst == 0 ? "0" : rst;
};

var comparator = function (a, b) {
  const s1 = "" + a + b,
    s2 = "" + b + a;
  return s2 - s1;
};
