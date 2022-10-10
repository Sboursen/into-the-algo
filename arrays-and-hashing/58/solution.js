"use strict";
exports.__esModule = true;
function lengthOfLastWord(s) {
    var length = 0;
    var index = s.length - 1;
    while (s[index] === ' ' && index > 0)
        index -= 1;
    while (s[index] !== ' ' && index >= 0) {
        length += 1;
        index -= 1;
    }
    return length;
}
exports["default"] = lengthOfLastWord;
