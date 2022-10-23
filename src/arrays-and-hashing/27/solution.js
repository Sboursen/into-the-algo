"use strict";
exports.__esModule = true;
function removeElement(nums, val) {
    var _a;
    var k = nums.length;
    var i = 0;
    while (i < k) {
        if (nums[i] === val) {
            _a = [nums[k - 1], nums[i]], nums[i] = _a[0], nums[k - 1] = _a[1];
            k -= 1;
        }
        else {
            i += 1;
        }
    }
    return k;
}
exports["default"] = removeElement;
