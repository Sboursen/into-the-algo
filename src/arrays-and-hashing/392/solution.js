"use strict";
exports.__esModule = true;
function isSubsequence(s, t) {
    var sIndex = 0;
    var tIndex = 0;
    for (; tIndex < t.length; tIndex += 1) {
        if (s[sIndex] === t[tIndex])
            sIndex += 1;
    }
    return sIndex === s.length;
}
exports["default"] = isSubsequence;
