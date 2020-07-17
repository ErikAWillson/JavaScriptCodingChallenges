/**Write a JavaScript function to clone an array. */

console.log(array_Clone([1, 2, 4, 0]).join() == [1, 2, 4, 0].join());
console.log(array_Clone([1, 2, [4, 0]]).join() == [1, 2, [4, 0]].join());

function array_Clone(arr) {
    return arr.slice();
}