"use strict";
exports.__esModule = true;
function isPalindrome(s) {
    var left = 0;
    var right = s.length - 1;
    var isAlphanumeric = function (char) { return /[0-9a-z]/i.test(char); };
    while (left < right) {
        var leftChar = s[left].toUpperCase();
        var rightChar = s[right].toUpperCase();
        if (isAlphanumeric(leftChar) && isAlphanumeric(rightChar)) {
            if (leftChar !== rightChar)
                return false;
            left += 1;
            right -= 1;
        }
        if (!isAlphanumeric(leftChar)) {
            left += 1;
        }
        if (!isAlphanumeric(rightChar)) {
            right -= 1;
        }
    }
    return true;
}
exports["default"] = isPalindrome;
