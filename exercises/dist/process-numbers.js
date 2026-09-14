"use strict";

function processNumbers(numbers, callback) {
    return numbers.map((number) => callback(number));
}
;
console.log(processNumbers([1, 2, 3, 4, 5], (number) => number * 2));
