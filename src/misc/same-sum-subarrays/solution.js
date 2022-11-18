"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function sameSumSubarray(nums) {
    var subArrays = [];
    var totalSum = nums.reduce(function (t, e) { return t + e; }, 0);
    if (totalSum % 2 === 1)
        return -1;
    var target = totalSum / 2;
    var n = nums.length / 2;
    nums.sort(function (a, b) { return b - a; });
    var backtracking = function (index, currentSum, currentSet) {
        if (currentSum === target && currentSet.length === n) {
            subArrays.push(currentSet);
            return;
        }
        if (currentSum > target || currentSet.length > n) {
            return;
        }
        if (index >= 2 * n)
            return;
        var number = nums[index];
        backtracking(index + 1, currentSum + number, __spreadArray(__spreadArray([], currentSet, true), [number], false));
        backtracking(index + 1, currentSum, currentSet);
    };
    backtracking(0, 0, []);
    if (subArrays.length < 2)
        return -1;
    return subArrays.map(function (arr) { return arr.reverse().join(','); }).join(',');
}
exports["default"] = sameSumSubarray;
console.log(sameSumSubarray([1, 2, 3, 4]));
console.log(sameSumSubarray([16, 22, 35, 8, 20, 1, 21, 11]));
