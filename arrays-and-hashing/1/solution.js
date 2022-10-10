"use strict";
exports.__esModule = true;
function twoSum(nums, target) {
    var complementMap = {};
    var solution;
    for (var i = 0; i < nums.length; i += 1) {
        var num = nums[i];
        if (complementMap[num] !== undefined) {
            solution = [complementMap[num], i];
            break;
        }
        complementMap[target - num] = i;
    }
    return solution;
}
exports["default"] = twoSum;
