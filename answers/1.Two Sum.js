/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers, 
 * return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 */

const twoSum = function (nums, target) {
  let map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const value = target - nums[i]
    if (!map[value]) {
      map[num] = i
    } else {
      return [map[value], i]
    }
  }
};