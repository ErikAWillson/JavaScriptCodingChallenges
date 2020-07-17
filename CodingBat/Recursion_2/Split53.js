/* Given an array of ints, is it possible to divide the ints into two groups, so that the sum of the two groups is the same, with these constraints: 
all the values that are multiple of 5 must be in one group, 
and all the values that are a multiple of 3 (and not a multiple of 5) must be in the other.
 (No loops needed.) */

 let output = [];
 output = split53([1, 1]);
 console.log("Output: " + output);
 console.log(output === true);
 
 output = split53([1, 1, 1]);
 console.log("Output: " + output);
 console.log(output === false);
 
 output = split53([2, 4, 2]);
 console.log("Output: " + output);
 console.log(output === true);

 function split53(nums) {
    return split53Recursive(0, nums, 0, 0);
 }

 function split53Recursive(index, nums, fives, threes) {
    if (index >= nums.length) return fives == threes;

    let value = nums[index];
    if (value % 5 == 0) {
        return split53Recursive(index + 1, nums, fives + value, threes);
    } else if (value % 3 == 0) {
        return split53Recursive(index + 1, nums, fives, threes + value);
    }

    return split53Recursive(index + 1, nums, fives + value, threes) 
            || split53Recursive(index + 1, nums, fives, threes + value)
 }

 function total(arr) {
     return arr.reduce((a,b)=>a+b, 0);
 }