/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = []
    for (let i = 0; i < 2; i++) {
        ans.push(...nums)
    }
    return ans
};