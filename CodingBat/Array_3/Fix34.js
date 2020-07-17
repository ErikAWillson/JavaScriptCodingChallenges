/* Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. 
Do not move the 3's, but every other number may move. 
The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

This solution should also work for the 'harder' fix45 problem*/

let input = [1, 3, 1, 4];
let output = fix34(input);
console.log("Output: " + output);
console.log(output == "1,3,4,1");

input = [1, 3, 1, 4, 4, 3, 1];
output = fix34(input);
console.log("Output: " + output);
console.log(output == [1, 3, 4, 1, 1, 3, 4].join());

input = [3, 2, 2, 4];
output = fix34(input);
console.log("Output: " + output);
console.log(output == [3, 4, 2, 2].join());

function fix34(nums) {
    const otherNumbers = nums.filter((value) => {
        return value !== 3 && value !== 4;
    });

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 3) {
            result = result.concat([3,4]);
            i++;
        } else {
            result.push(otherNumbers.shift());
        }
    }

    return result;
}