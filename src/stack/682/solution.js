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
function calPoints(operations) {
    var result = [];
    var push = function (stack, operand) { return __spreadArray(__spreadArray([], stack, true), [Number(operand)], false); };
    var sum = function (stack) { return __spreadArray(__spreadArray([], stack, true), [
        stack[stack.length - 1] + stack[stack.length - 2],
    ], false); };
    var double = function (stack) { return __spreadArray(__spreadArray([], stack, true), [2 * stack[stack.length - 1]], false); };
    var invalidate = function (stack) { return stack.slice(0, -1); };
    var ops = {
        '+': sum,
        D: double,
        C: invalidate
    };
    operations.forEach(function (operation) {
        if (ops[operation])
            result = ops[operation](result);
        else
            result = push(result, operation);
    });
    return result.reduce(function (total, number) { return total + number; }, 0);
}
exports["default"] = calPoints;
