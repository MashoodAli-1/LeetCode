/* 
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

Example 1:

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
*/

//? solution
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  var stack = [];
  var sum = 0;
  for (var i = 0; i < operations.length; i++) {
    if (!"CD+".includes(operations[i])) {
      stack.push(operations[i]);
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      let num = stack.pop();
      let newNum = parseInt(num) * 2;
      stack.push(num);
      stack.push(newNum.toString());
    } else if (operations[i] === "+") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2);
      stack.push(num1);
      let num3 = parseInt(num1) + parseInt(num2);
      stack.push(num3.toString());
    }
  }
  for (var i = 0; i < stack.length; i++) {
    sum += parseInt(stack[i]);
  }
  return sum;
};
