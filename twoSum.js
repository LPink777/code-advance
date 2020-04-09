/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = (nums, target) => {
  let targetMap = new Map();
  for (const key in nums) {
    if (targetMap.has(target - nums[key])) {
      return [targetMap.get(target - nums[key]), Number(key)]
    }
    targetMap.set(nums[key], Number(key));
  }
}

console.log(twoSum([1,2,3,4,5], 6))


// @lc code=end

