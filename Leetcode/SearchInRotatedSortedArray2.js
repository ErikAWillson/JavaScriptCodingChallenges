/* Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false. */

let answer = true;
let output = search([2,5,6,0,0,1,2], 0);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = false;
output = search([2,5,6,0,0,1,2], 3);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function search(nums, target) {
    return nums.indexOf(target) > 0;
}