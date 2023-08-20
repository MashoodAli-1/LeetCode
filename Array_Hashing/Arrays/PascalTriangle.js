/* 
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:



Example 1:

Input: numRows = 5
Output: [[1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

*/

//? Solution

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  res = [[1], [1, 1]];
  var leftIncrement = 0,
    rightIncrement = 1;

  for (var row = 2; row < numRows; row++) {
    var lastArray = res[res.length - 1];
    var nextArray = [1];
    for (var col = 1; col < lastArray.length; col++) {
      var l = lastArray[leftIncrement],
        r = lastArray[rightIncrement];
      nextArray.push(l + r);
      leftIncrement += 1;
      rightIncrement += 1;
    }
    nextArray.push(1);
    res.push(nextArray);
    leftIncrement = 0;
    rightIncrement = 1;
  }
  return res;
};
