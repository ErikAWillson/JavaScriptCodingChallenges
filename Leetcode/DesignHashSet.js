/* Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

    add(value): Insert a value into the HashSet. 
    contains(value) : Return whether the value exists in the HashSet or not.
    remove(value): Remove a value in the HashSet. 
        If the value does not exist in the HashSet, do nothing.
*/

class MyHashSet {
    constructor() {
        this.arr = [];
    }

    add(value) {
        if (this.arr.indexOf(value) == -1) this.arr.push(value);
    }

    remove(value) {
        let index = this.arr.indexOf(value);
        if (index != -1) this.arr.splice(index, index +1);
    }

    contains(value) {
        return this.arr.indexOf(value) != -1;
    }
}

let hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
console.log(hashSet.contains(1) == true);    // returns true
console.log(hashSet.contains(3) == false);    // returns false (not found)
hashSet.add(2);          
console.log(hashSet.contains(2) == true);    // returns true
hashSet.remove(2);          
console.log(hashSet.contains(2) == false);    // returns false (already removed)