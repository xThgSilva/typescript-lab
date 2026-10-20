/* Process Numbers
Create a generic function called processNumbers that processes an array of numbers using a callback function.

The function should:
- Receive an array of numbers.
- Receive a callback that accepts a single number and returns a number.
- Apply the callback to each element of the array.
- Return a new array containing the processed values.

Examples
- The following call should return [2, 4, 6, 8, 10]:
    processNumbers([1, 2, 3, 4, 5], (number) => number * 2);

- The following call should return [11, 12, 13]:
    processNumbers([1, 2, 3], (number) => number + 10);

The callback should determine how each number is transformed, while processNumbers should be responsible for applying the
callback to every element.
*/

function processNumbers(numbers: number[], callback: (number: number) => number): number[] {
    return numbers.map((number) => callback(number));
};

console.log(processNumbers([1, 2, 3, 4, 5], (number) => number * 2));