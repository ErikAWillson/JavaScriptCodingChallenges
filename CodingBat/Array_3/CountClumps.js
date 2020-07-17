/* Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. 
Return the number of clumps in the given array. */

let input = [];
let output = countClumps([1, 2, 2, 3, 4, 4]);
console.log("Output: " + output);
console.log(output == 2);

input = [];
output = countClumps([1, 1, 2, 1, 1]);
console.log("Output: " + output);
console.log(output == 2);

input = [];
output = countClumps([1, 1, 1, 1, 1]);
console.log("Output: " + output);
console.log(output == 1);

function countClumps(nums) {
    let result = 0;
    let current = nums[0];
    let potentialNewClump = true;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] != current) {
            current = nums[i];
            potentialNewClump = true;
        } else if (potentialNewClump) {
            result++;
            potentialNewClump = false;
        }
    }

    return result;
}