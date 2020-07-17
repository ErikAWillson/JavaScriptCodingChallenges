/**Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. */

console.log(first([7, 9, 0, -2]) == 7);
console.log(first([],3).join() == [].join());
console.log(first([7, 9, 0, -2],3).join() == [7, 9, 0].join());
console.log(first([7, 9, 0, -2],6).join() == [7, 9, 0, -2].join());
console.log(first([7, 9, 0, -2],-3).join() == [].join());

console.log(first(null,-3).join() == [].join());

console.log(first([7, 9, 0, -2],null) == 7);

function first(arr, num) {
    if (num == undefined || num == null) return arr[0];

    let result = [];
    for (i = 0; i < num && i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}