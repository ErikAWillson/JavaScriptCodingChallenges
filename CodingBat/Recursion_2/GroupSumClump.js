/* Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target, 
with this additional constraint: if there are numbers in the array that are adjacent and the identical value, they must either all be chosen, or none of them chosen. 
For example, with the array {1, 2, 2, 2, 5, 2}, either all three 2's in the middle must be chosen or not, all as a group. 
(one loop can be used to find the extent of the identical values). */

 let output = [];
output = groupSumClump(0, [2, 4, 8], 10);
console.log("Output: " + output);
console.log(output === true);

output = groupSumClump(0, [1, 2, 4, 8, 1], 14);
console.log("Output: " + output);
console.log(output === true);

output = groupSumClump(0, [2, 4, 4, 8], 14);
console.log("Output: " + output);
console.log(output === false);

output = groupSumClump(0, [1, 2, 2, 2, 5, 2], 12);
console.log("Output: " + output);
console.log(output === true);

output = groupSumClump(0, [1, 1, 2, 1], 12);
console.log("Output: " + output);
console.log(output === false);

function groupSumClump(start, nums, target) {
    if (start >= nums.length) return target == 0;

    let value = nums[start];

    let occurances = 1;
    for (let i = start + 1; i < nums.length; i++) {
        if (nums[i] == value) {
            occurances++;
        } else {
            break;
        }
    }

    let sum = value * occurances;

    let withValue = groupSumClump(start + occurances, nums, target - sum);
    let withoutValue = groupSumClump(start + occurances, nums, target);

    return withValue || withoutValue

}