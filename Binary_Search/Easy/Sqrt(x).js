/* 
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

// ? Solution
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1 || x === 0) return x;
  var left = 0,
    right = x;
  var res = 0;
  while (left <= right) {
    var mid = Math.floor(left + (right - left) / 2); // Round down to the nearest integer
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
      res = mid;
    } else {
      return mid;
    }
  }
  return res;
};
