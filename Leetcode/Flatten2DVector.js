/* Design and implement an iterator to flatten a 2d vector. 
It should support the following operations: next and hasNext. */

class Vector2D {
    constructor(arrArr) {
        this.vector = arrArr.join().split(',');
        this.iterator = 0;
    }

    next() {
        return this.vector[this.iterator++];
    }

    hasNext() {
        return this.iterator < this.vector.length;
    }
}

// Test (converted from Java)
let iterator = new Vector2D([[1,2],[3],[4]]);
console.log(iterator.next()); // return 1
console.log(iterator.next()); // return 2
console.log(iterator.next()); // return 3
console.log(iterator.hasNext()); // return true
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 4
console.log(iterator.hasNext()); // return false
