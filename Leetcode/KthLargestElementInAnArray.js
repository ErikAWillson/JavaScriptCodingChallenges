/* Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element. */

// Assuming that there is a kth largest element in the array

let answer = 5;
let output = findKthLargest([3,2,1,5,6,4], 2);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 4;
output = findKthLargest([3,2,3,1,2,4,5,5,6], 4);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function findKthLargest(nums, k) {
    return nums.sort((a, b) => {
        return a - b;
    })[nums.length - k];
}