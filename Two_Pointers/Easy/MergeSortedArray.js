/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     // if(m !== n) return
//     var  i = 0
//     n = 0
//     while(m < nums1.length-1 || n < nums2.length-1){
//         if(i === m){
//             nums1[i] = nums2[n]
//             n +=1
//             m +=1
//             i +=1
//         }
//         else if(nums1[i]<nums2[n]){
//             i++
//         }
//         else if(nums1[i]>nums2[n]){
//             nums1[m] = nums1[i]
//             nums1[i] = nums2[n]
//             i +=1
//             m +=1
//             n +=1
//         }
//     }
// };
var merge = function (nums1, m, nums2, n) {
  var last = m + n - 1;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[last] = nums2[n - 1];
      n -= 1;
    }
    last -= 1;
  }

  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n -= 1;
    last -= 1;
  }
};
