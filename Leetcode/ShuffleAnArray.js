/* Shuffle a set of numbers without duplicates. 
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle(); */

class Solution {
    constructor(arr) {
        this.initArr = arr;
        this.currentArr = arr;
    }

    shuffle() {
        let temp = this.initArr.slice();
        this.currentArr = [];

        for (let i = 0; i < this.initArr.length; i++) {
            let index = Math.round(Math.random() * (temp.length - 1));
            this.currentArr.push(temp[index]);
            temp.splice(index, 1);
        }

        return this.currentArr;
    }

    reset() {
        this.currentArr = this.initArr.slice();
        return this.currentArr;
    }

    value() {
        return this.currentArr;
    }
}

let nums = [1,2,3,4,5,6,7,8,9,0];
var obj = new Solution(nums);
console.log("Reset: " + obj.reset());
console.log("Shuffle: " + obj.shuffle());