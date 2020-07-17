/* We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. 
For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). 
Return the size of the largest mirror section found in the given array. */

let input = [];
let output = maxMirror([1, 2, 3, 8, 9, 3, 2, 1]);
console.log("Output: " + output);
console.log(output == 3);

input = [];
output = maxMirror([1, 2, 1, 4]);
console.log("Output: " + output);
console.log(output == 3);

input = [];
output = maxMirror([7, 1, 2, 9, 7, 2, 1]);
console.log("Output: " + output);
console.log(output == 2);

input = [];
output = maxMirror([1, 4, 5, 6, 6, 5, 4, 1, 5, 4, 1]);
console.log("Output: " + output);
console.log(output == 8);

function maxMirror(nums) {
    let result = 0;
    let numsStr = nums.join();
    let reverseNums = nums.reverse();
    let reverseNumsStr = reverseNums.join();

    for (i = 0; i < nums.length; i++) {
        for (j = 1; j + i <= nums.length; j++) {
            if (reverseNumsStr.indexOf(numsStr.substr(i,j*2 - 1)) != -1 && j > result) {
                result = j;
            }
        }
    }

    return result;
}