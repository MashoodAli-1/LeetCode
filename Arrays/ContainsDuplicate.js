/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var numsDict = {};
  for (var i = 0; i < nums.length; i++) {
    if (numsDict[nums[i]]) {
      numsDict[nums[i]] += 1;
    } else {
      numsDict[nums[i]] = 1;
    }
  }
  for (var key in numsDict) {
    if (numsDict[key] > 1) {
      return true;
    }
  }
  return false;
};

/**
 * @dev set that contains the same elements as the nums array.The Set object
 * automatically removes any duplicate values that are added to it.
 *so we just need to compare size of actual array and the set
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  console.log(set.values());
  if (set.size == nums.length) {
    return false;
  }
  return true;
};
