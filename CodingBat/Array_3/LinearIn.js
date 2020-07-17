/* Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. 
The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order. */

let input = [];
let output = linearIn([1, 2, 4, 6], [2, 4]);
console.log("Output: " + output);
console.log(output === true);

input = [];
output = linearIn([1, 2, 4, 6], [2, 3, 4]);
console.log("Output: " + output);
console.log(output === false);

input = [];
output = linearIn([1, 2, 4, 4, 6], [2, 4]);
console.log("Output: " + output);
console.log(output === true);

function linearIn(outer, inner) {
    let comparison = inner.filter(value => {
        return outer.indexOf(value) != -1;
    });
    return inner.join() == comparison.join();
}