/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

//? Solution-1
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = new Map();
  var arr = [];
  for (var i = 0; i < strs.length; i++) {
    map.set(
      strs[i].split("").sort().join(""),
      map.get(strs[i].split("").sort().join("")) || []
    );
    map.get(strs[i].split("").sort().join("")).push(strs[i]);
  }

  arr = [];
  for (const [key, value] of map.entries()) {
    arr.push(value);
  }

  return arr;
};

//? Solution-2
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (var str of strs) {
    var s = str.split("").sort().join("");
    if (!map[s]) {
      map[s] = [];
    }
    map[s].push(str);
  }
  console.log(map);
  console.log(Object.values(map));
  return Object.values(map);
};
