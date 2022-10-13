"use strict";
exports.__esModule = true;
function isIsomorphic(s, t) {
    if (s.length !== t.length)
        return false;
    var stMap = {};
    var tsMap = {};
    for (var i = 0; i < s.length; i += 1) {
        var sChar = s[i];
        var tChar = t[i];
        if (stMap[sChar] === undefined) {
            if (tsMap[tChar] !== undefined)
                return false;
            stMap[sChar] = tChar;
            tsMap[tChar] = sChar;
        }
        else if (stMap[sChar] !== tChar)
            return false;
    }
    return true;
}
exports["default"] = isIsomorphic;
