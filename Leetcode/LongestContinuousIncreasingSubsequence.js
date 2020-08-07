/*  Given an unsorted array of integers, 
find the length of longest continuous increasing subsequence (subarray).  */

let answer = 3;
let output = findLengthOfLCIS([1,3,5,4,7]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 1;
output = findLengthOfLCIS([2,2,2,2,2]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 0;
output = findLengthOfLCIS([]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 4;
output = findLengthOfLCIS([2, -1, 3, -6, -4, 0, 10]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function findLengthOfLCIS(nums) {
    var maxLength = 0;
    let currentLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i-1] == null || nums[i] > nums[i-1]) {
            currentLength++;
            if (currentLength > maxLength) maxLength = currentLength;
        } else {
            currentLength = 1;
        }
    }
    return maxLength;
}