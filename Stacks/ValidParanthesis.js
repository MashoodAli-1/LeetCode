/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

//? Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const Stack = [];
  var counter = 0;
  while (counter < s.length) {
    if (!")]}".includes(s[counter])) {
      Stack.push(s[counter]);
    } else {
      if (s[counter] === ")") {
        let chr = Stack.pop();
        if (chr !== "(") return false;
      } else if (s[counter] === "]") {
        let chr = Stack.pop();
        if (chr !== "[") return false;
      } else if (s[counter] === "}") {
        let chr = Stack.pop();
        if (chr !== "{") return false;
      }
    }
    counter += 1;
  }

  return Stack.length === 0 ? true : false;
};
