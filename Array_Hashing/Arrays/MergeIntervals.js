/* 
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

//? Solution
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort(compare);
  var interval1, interval2;
  for (var i = 0; i < intervals.length; i++) {
    interval1 = intervals[i];
    if (intervals[i + 1]) interval2 = intervals[i + 1];

    if (
      (interval1[1] <= interval2[1] || interval1[1] >= interval2[1]) &&
      interval1[1] >= interval2[0]
    ) {
      intervals[i][1] = Math.max(interval1[1], interval2[1]);
      intervals.splice(i + 1, 1);
      if (i === intervals.length - 1) break;
      i -= 1;
    }
  }

  return intervals;
};
const compare = (a, b) => {
  if (a[0] > b[0]) {
    return 1;
  } else {
    return -1;
  }
};
