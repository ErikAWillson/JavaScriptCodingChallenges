/* You may recall that an array A is a mountain array if and only if:

    A.length >= 3
    There exists some i with 0 < i < A.length - 1 such that:
        A[0] < A[1] < ... A[i-1] < A[i]
        A[i] > A[i+1] > ... > A[A.length - 1]

Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  
If such an index doesn't exist, return -1.

You can't access the mountain array directly.  You may only access the array using a MountainArray interface:

    MountainArray.get(k) returns the element of the array at index k (0-indexed).
    MountainArray.length() returns the length of the array.

Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  
Also, any solutions that attempt to circumvent the judge will result in disqualification. */

class MountainArray {
    constructor(arr) {
        this.arr = arr;
        this.numberOfCalls = 0;
    }

    get(k) {
        if (this.numberOfCalls++ >= 100) return -1 * this.numberOfCalls;
        return this.arr[k];
    }

    length() {
        if (this.numberOfCalls++ >= 100) return -1 * this.numberOfCalls;
        return this.arr.length;
    }

    // Testing purposes
    callNumber() {
        return this.numberOfCalls;
    }
}

// Solution 2
// Now that I understand the Mountain, I see a simpler one-pass solution.
// I'm making note of this challenge, and I'll return when it's not as fresh in my mind.

// Solution 1
// This solution utilizes binary searches to find i and perform a search on the left side of the mountain.
// The right side is searched if the left side does not contain the value.
var findI = function(mountain, maxIndex) {
    let min = 0;
    let max = maxIndex;
    let i = -1;

    while (true) {
        i = Math.round((max + min) / 2);

        let iValue = mountain.get(i);
        let iMoreValue = mountain.get(i+1);
        let iLessValue = mountain.get(i-1);

        if (iValue > iMoreValue && iValue > iLessValue) {
            return {index: i, value: iValue};
        }

        if (iMoreValue > iLessValue) {
            min = i;
        } else {
            max = i;
        }
    }
}

var findTargetIndex = function(mountain, target, i, maxIndex) {
    if (i.value == target) return i.index;
    
    let min = 0;
    let max = i.index;
    let index = -1;

    while (true) {
        index = Math.round((max + min) / 2);
        let num = mountain.get(index);

        if (num == target) {
            return index;
        } else if (num < target) {
            min = index;
        } else {
            max = index;
        }

        if (min == max || min+1 == max) {
            if (target == mountain.get(min)) return min;
            break;
        }
    }

    min = i.index;
    max = maxIndex;

    while (true) {
        index = Math.round((max + min) / 2);
        let num = mountain.get(index);

        if (num == target) {
            return index;
        } else if (num < target) {
            max = index;
        } else {
            min = index;
        }

        if (min == max || min+1 == max) {
            if (target == mountain.get(max)) return max;
            break;
        }
    }

    return -1;
}

var findInMountainArray = function(mountain, target) {
    let maxIndex = mountain.length() - 1;
    let i = findI(mountain, maxIndex);
    
    return findTargetIndex(mountain, target, i, maxIndex);;
}

// Tests
let answer = 2;
let output = findInMountainArray(new MountainArray([1,2,3,4,5,3,1]), 3);
console.log("Ouput = " + output);
console.log(output == answer);

answer = -1;
output = findInMountainArray(new MountainArray([0,1,2,4,2,1]), 3);
console.log("Ouput = " + output);
console.log(output == answer);

answer = 4;
output = findInMountainArray(new MountainArray([0,1,2,4,3,2,1]), 3);
console.log("Ouput = " + output);
console.log(output == answer);

answer = 0;
output = findInMountainArray(new MountainArray([0,1,2,4,2,1]), 0);
console.log("Ouput = " + output);
console.log(output == answer);

answer = 5;
output = findInMountainArray(new MountainArray([1,2,4,2,1,0]), 0);
console.log("Ouput = " + output);
console.log(output == answer);
