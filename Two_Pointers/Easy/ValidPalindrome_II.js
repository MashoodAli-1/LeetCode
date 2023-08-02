/* 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
*/

//? Solution
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var validPalindrome = function(s) {
//   let left = 0
//   let right = s.length-1
//   let doubleNotEqualCount = 0
//   while(left<right){
//     if(s[left] === s[right]){
//       left+=1
//       right-=1
//     }
//     else if(s[left] !== s[right]){
//       console.log(s[left],s[right])
//       if(s[left+1] === s[right]){
//         doubleNotEqualCount+=1
//         left+=1
//       }
//       else if(s[left] === s[right-1]){
//         doubleNotEqualCount+=1
//         right-=1
//       }
//       else{
//         return false
//       }
//     }
//     else{
//       return false
//     }
//   }
//   if(doubleNotEqualCount <=1){
//     return true
//   }
//   else{
//     return false
//   }
// };

var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
      continue;
    }

    return !!(isPalidrome(i + 1, j, s) || isPalidrome(i, j - 1, s));
  }

  return true;
};

const isPalidrome = (start, end, s) => {
  for (let i = start, j = end; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};
