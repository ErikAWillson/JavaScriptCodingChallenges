/* In a given integer array A, we must move every element of A to either list B or list C. 
(B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, 
and B and C are both non-empty. */

// Tests
let answer = true;
let output = splitArraySameAverage([1,2,3,4,5,6,7,8]);
console.log("Ouput = " + output);
console.log(output == answer); // 'true' (which is yellow on my terminal and therefore stands out) == correct


answer = true;
output = splitArraySameAverage([1, 5, 7, 2, 0]); // 7, 5, 2, 1, 0
console.log("Ouput = " + output);
console.log(output == answer);


answer = false;
output = splitArraySameAverage([4, 3, 5, 9, 11]);
console.log("Ouput = " + output);
console.log(output == answer);

function splitArraySameAverage(A) {
    return recursiveSplit(A, 0, 0, 0, 0);
}

// B and C are the respective sums, b and c are the respective number of values contained in the hypothetical arrays
function recursiveSplit(A, B, C, b, c) {
    if (A.length == 0) return (B/b) == (C/c);

    return recursiveSplit(A.slice(1, A.length), B + A[0], C, b + 1, c) 
        || recursiveSplit(A.slice(1, A.length), B, C + A[0], b, c + 1);
}