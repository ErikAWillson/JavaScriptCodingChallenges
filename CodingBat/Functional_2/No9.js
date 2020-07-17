/* Given a list of non-negative integers, return a list of those numbers except omitting any that end with 9. 
(Note: % by 10) */

let output = [];
output = no9([1, 2, 19]);
console.log("Output: " + output);
console.log(output == "1,2");

output = no9([9, 19, 29, 3]);
console.log("Output: " + output);
console.log(output == "3");

output = no9([1, 2, 3]);
console.log("Output: " + output);
console.log(output == "1,2,3");

function no9(nums) {
    return nums.filter(value => {
        return value % 10 != 9;
    });
}