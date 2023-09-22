/* 
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/

// ? Solution
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) return [];
  const ht = new Map();
  const res = [];
  for (let i = 0; i < s.length; i++) {
    let j = i + 10;
    if (j <= s.length) {
      const subString = s.slice(i, j);
      if (ht.has(subString)) {
        ht.set(subString, ht.get(subString) + 1);
      } else {
        ht.set(subString, 1);
      }
    }
  }

  for (const [key, value] of ht) {
    if (value >= 2) {
      res.push(key);
    }
  }
  return res;
};

// var findRepeatedDnaSequences = function(s) {
//   if(s.length < 10) return []
//   var output = new Set()
//   var hashMap = new Map()
//   var map = []
//   var i = 0,j = 10
//   while((j - i == 10) && j < s.length){
//     map.push(s.substring(i,j))
//     hashMap.set(s.substring(i,j),hashMap.get(s.substring(i,j))| 0 + 1)
//     i += 1
//     j += 1
//   }
//   console.log(hashMap)
//   // for (var i = 0;i<map.length;i++){
//   //   if(hashMap.has(map[i])){
//   //     output.set(map[i])
//   //   }
//   // }
//   console.log(hashMap)
// //   var out = []
// //   var set = new Set(map)
// //   for(var i = 0;i<map.length;i++){
// //     if(set.has(map[i])){
// //       out.push
// //     }
// //   }
// };
