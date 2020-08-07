/* Given an array of integers arr. 
Return the number of sub-arrays with odd sum. */

let answer = 4;
let output = numOfSubArrays([1,3,5]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 0;
output = numOfSubArrays([2,4,6]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 16;
output = numOfSubArrays([1,2,3,4,5,6,7]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 4;
output = numOfSubArrays([100,100,99,99]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 1;
output = numOfSubArrays([7]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function numOfSubArrays(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum % 2 != 0) count++;
        }
    }
    
    return count;
}

function numOfSubArrays2(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum % 2 != 0) count++;
        }
    }
    
    return count;
}