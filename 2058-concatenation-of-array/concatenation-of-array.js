/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = nums
    let l = nums.length
    for (let i = 0; i < l; i++) {
        ans.push(nums[i])
    }
    return ans
};