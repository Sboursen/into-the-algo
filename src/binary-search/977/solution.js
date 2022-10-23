"use strict";
exports.__esModule = true;
function sortedSquares(nums) {
    var left = 0;
    var right = nums.length - 1;
    var result = [];
    while (left <= right) {
        if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
            result.push(Math.pow(nums[left], 2));
            left += 1;
        }
        else {
            result.push(Math.pow(nums[right], 2));
            right -= 1;
        }
    }
    return result.reverse();
}
exports["default"] = sortedSquares;
