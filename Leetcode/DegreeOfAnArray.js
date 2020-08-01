/* Given a non-empty array of non-negative integers nums,
 the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums,
 that has the same degree as nums. */

let nums = [1,2,2,3,1];
let answer = 2;
let output = findSubarrayLength(nums);
console.log("Ouput = " + output);
console.log(output == answer);

nums = [1,2,2,3,1,4,2];
answer = 6;
output = findSubarrayLength(nums);
console.log("Ouput = " + output);
console.log(output == answer);

// This is a one pass solution, avoiding multiple loops or sorting algarithms
function findSubarrayLength(nums) {
    var maxDegree = 1;
    var smallestLength = 1;
    var numObjects = [];
    
    nums.forEach((value, index) => {
        let numObj = numObjects[value];
        if (numObj == null) {
            numObjects[value] = {
                degree: 1,
                firstOccurance: index,
                lastOccurance: index
            }
        } else {
            numObj.degree++;
            numObj.lastOccurance = index;

            if (numObj.degree == maxDegree) {
                let length = numObj.lastOccurance - numObj.firstOccurance + 1;
                if (length < smallestLength) {
                    smallestLength = length;
                }
            } else if (numObj.degree > maxDegree) {
                maxDegree = numObj.degree;
                smallestLength = numObj.lastOccurance - numObj.firstOccurance + 1;
            }

        }

    });

    return smallestLength;
}
