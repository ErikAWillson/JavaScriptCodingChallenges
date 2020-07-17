/* Given n>=0, create an array with the pattern 
{1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n} 
(spaces added to show the grouping). 
Note that the length of the array will be 1 + 2 + 3 ... + n, 
which is known to sum to exactly n*(n + 1)/2. */

let input = [];
let output = seriesUp(3);
console.log("Output: " + output);
console.log(output.join() ===  [1, 1, 2, 1, 2, 3].join());

input = [];
output = seriesUp(4);
console.log("Output: " + output);
console.log(output.join() === [1, 1, 2, 1, 2, 3, 1, 2, 3, 4].join());

input = [];
output = seriesUp(2);
console.log("Output: " + output);
console.log(output.join() === [1, 1, 2].join());

function seriesUp(n) {
    let result = [];
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            result.push(j + 1);
        }
    }
    
    return result;
}