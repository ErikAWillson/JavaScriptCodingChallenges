/* Given two strings, base and remove
, return a version of the base string where all instances of the remove string have been removed (not case sensitive). 
You may assume that the remove string is length 1 or more. 
Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x". */

let input1 = "Hello there";
let input2 = "llo";
let output = withoutString(input1, input2);
console.log("Output: " + output);
console.log(output === "He there");

input1 = "Hello there";
input2 = "e";
output = withoutString(input1, input2);
console.log("Output: " + output);
console.log(output === "Hllo thr");

input1 = "Hello there";
input2 = "x";
output = withoutString(input1, input2);
console.log("Output: " + output);
console.log(output === "Hello there");

input1 = "xxx";
input2 = "xx";
output = withoutString(input1, input2);
console.log("Output: " + output);
console.log(output === "x");

function withoutString(base, remove) {
    let regex = new RegExp(remove, "g");

    return base.replace(regex, "");
}