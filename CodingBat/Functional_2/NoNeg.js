/* Given a list of integers, return a list of the integers, omitting any that are less than 0. */

let output = [];
output = noNeg([1, -2]);
console.log("Output: " + output);
console.log(output == "1");

output = noNeg([-3, -3, 3, 3]);
console.log("Output: " + output);
console.log(output == "3,3");

output = noNeg([-1, -1, -1]);
console.log("Output: " + output);
console.log(output == "");

function noNeg(nums) {
    return nums.filter(value => {
        return value > 0;
    });
}