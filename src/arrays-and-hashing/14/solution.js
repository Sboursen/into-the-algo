"use strict";
exports.__esModule = true;
function longestCommonPrefix(strs) {
    if (strs.length === 1)
        return strs[0];
    var prefix = '';
    var i = 0;
    while (i <= 200) {
        for (var j = 1; j < strs.length; j += 1) {
            if (strs[j][i] === undefined
                || strs[j - 1][i] === undefined
                || strs[j - 1][i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
        i += 1;
    }
    return prefix;
}
exports["default"] = longestCommonPrefix;
