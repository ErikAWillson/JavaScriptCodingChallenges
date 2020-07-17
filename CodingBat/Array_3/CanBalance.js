/* Given a non-empty array, return true if there is a place to split the array 
so that the sum of the numbers on one side is equal to the sum of the numbers on the other side. */

let input = [1, 2, 1, 1, 3];
let output = canBalance(input);
console.log("Output: " + output);
console.log(output === true);

input = [1, 4, 2, 1, 4, 1, 4];
output = canBalance(input);
console.log("Output: " + output);
console.log(output === false);

input = [1, 4, 2, 1, 4, 4, 4];
output = canBalance(input);
console.log("Output: " + output);
console.log(output === false);

input = [1, 1, 1, 2, 1];
output = canBalance(input);
console.log("Output: " + output);
console.log(output === true);

input = [2, 1, 1, 2, 1];
output = canBalance(input);
console.log("Output: " + output);
console.log(output === false);

input = [10, 10];
output = canBalance(input);
console.log("Output: " + output);
console.log(output === true);

function canBalance(nums) {
    const total = nums.reduce((a, b) => a + b, 0);

    let sum = 0;
    var canItBalance = false;
    nums.forEach((value, index, self) => {
        sum += value;
        if ((total / sum == 2) && (total % sum == 0)) {
            canItBalance = true;
        }
    });

    return canItBalance;
}