/* Given n>=0, create an array length n*n with the following pattern, 
shown here for n=3 : 
{0, 0, 1,    0, 2, 1,    3, 2, 1} 
(spaces added to show the 3 groups). */

let input = [];
let output = squareUp(3);
console.log("Output: " + output);
console.log(output.join() ===  [0, 0, 1, 0, 2, 1, 3, 2, 1].join());

input = [];
output = squareUp(2);
console.log("Output: " + output);
console.log(output.join() === [0, 1, 2, 1].join());

input = [];
output = squareUp(4);
console.log("Output: " + output);
console.log(output.join() === [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1].join());

function squareUp(n) {
    let result = [];
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            let position = i*n + j;
            let isNonZero = j >= n - i - 1;
            let currentValue = n - j;
            if (isNonZero) {
                result[position] = currentValue;
            } else {
                result[position] = 0;
            }
        }
    }
    return result;
}