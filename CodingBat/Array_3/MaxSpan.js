/* Consider the leftmost and rightmost appearances of some value in an array. 
We'll say that the "span" is the number of elements between the two inclusive. 
A single value has a span of 1. Returns the largest span found in the given array.
 (Efficiency is not a priority.) */

 let input = [1, 2, 1, 1, 3];
 let output = maxSpan(input);
 console.log("Output: " + output);
 console.log(output === 4);
 
 input = [1, 4, 2, 1, 4, 1, 4];
 output = maxSpan(input);
 console.log("Output: " + output);
 console.log(output === 6);
 
 input = [1, 4, 2, 1, 4, 4, 4];
 output = maxSpan(input);
 console.log("Output: " + output);
 console.log(output === 6);

 input = [];
 output = maxSpan(input);
 console.log("Output: " + output);
 console.log(output === 0);

 function maxSpan(nums) {
    const uniqueValues = nums.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    let max = 0;
    uniqueValues.forEach(value => {
        let span = nums.lastIndexOf(value) - nums.indexOf(value) + 1;
        max = span > max ? span : max;
    });

    return max;
 }