"use strict";
exports.__esModule = true;
function groupAnagrams(strs) {
    var _a;
    var numberOfLetters = 26;
    var result = [[]];
    var generatePrimes = function () {
        var primes = [2];
        var addIfPrime = function (number) {
            for (var i_1 = 0; i_1 < primes.length; i_1 += 1) {
                var p = primes[i_1];
                if (number % p === 0) {
                    return;
                }
            }
            primes.push(number);
        };
        var i = 3;
        while (primes.length < numberOfLetters) {
            addIfPrime(i);
            i += 1;
        }
        return primes;
    };
    var primes = generatePrimes();
    var letterToPrime = {};
    var aCharCode = 'a'.charCodeAt(0);
    for (var i = 0; i < numberOfLetters; i += 1) {
        letterToPrime[String.fromCharCode(aCharCode + i)] = primes[i];
    }
    var wordToNumber = {};
    for (var i = 0; i < strs.length; i += 1) {
        var str = strs[i];
        var number = str
            .split('')
            .reduce(function (product, char) { return product * letterToPrime[char]; }, 1);
        wordToNumber[number] = (_a = wordToNumber[number]) !== null && _a !== void 0 ? _a : [];
        wordToNumber[number].push(str);
    }
    result = Array.from(Object.values(wordToNumber));
    return result;
}
exports["default"] = groupAnagrams;
