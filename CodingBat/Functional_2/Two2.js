/** Given a list of non-negative integers, 
 * return a list of those numbers multiplied by 2, 
 * omitting any of the resulting numbers that end in 2. */

let output = two2([1, 2, 3]);
console.log("Output: " + output);
console.log(output.join("") == [4, 6].join(""));

output = two2([2, 6, 11]);
console.log("Output: " + output);
console.log(output.join("") == [4].join(""));

output = two2([0]);
console.log("Output: " + output);
console.log(output.join("") == [0].join(""));

output = two2([]);
console.log("Output: " + output);
console.log(output.join("") == [].join(""));

function two2(nums) {
    return nums.map(value => {
        return value * 2;
    }).filter(value => {
        return value % 10 != 2;
    });
}