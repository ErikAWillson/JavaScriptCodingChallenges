/**We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. 
 * Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger. */

let output = notAlone([1, 2, 3], 2);
console.log("Output: " + output);
console.log(output.join("") == [1, 3, 3].join(""));

output = notAlone([1, 2, 3, 2, 5, 2], 2);
console.log("Output: " + output);
console.log(output.join("") == [1, 3, 3, 5, 5, 2].join(""));

output = notAlone([3, 4], 3);
console.log("Output: " + output);
console.log(output.join("") == [3, 4].join(""));

function notAlone(nums, val) {
    for (i = 1; i < nums.length - 1; i++) {
        if (nums[i] != val) continue;

        let left = nums[i-1];
        let right = nums[i+1];
        if (left != val && right != val) 
            nums[i] = left >= right ? left : right;
    }
    return nums;
}