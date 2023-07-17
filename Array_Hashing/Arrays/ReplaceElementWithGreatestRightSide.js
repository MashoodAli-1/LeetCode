/** 
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
*/

//? solution

/**
 * @dev
    first initialize a temp variable which i use for swaping
    loop start from the end/right side of array:
      if last index:
        first store last value of array in temp 
        assign last index with -1 value
      else:
        if arr[i] > temp:
            swap(arr[i],temp)
        else:
            arr[i] = temp
    
    return arr
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  var temp = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      temp = arr[i];
      arr[i] = -1;
    } else {
      if (arr[i] > temp) {
        [temp, arr[i]] = [arr[i], temp];
      } else {
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};
