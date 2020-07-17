/* Given a list of strings, return a list of the strings, omitting any string length 3 or 4. */

let output = [];
output = no34(["a", "bb", "ccc"]);
console.log("Output: " + output);
let answer = ["a", "bb"];
console.log("Answer: " + answer)
console.log(output.join() == answer.join());

output = no34(["a", "bb", "ccc", "dddd"]);
console.log("Output: " + output);
answer = ["a", "bb"];
console.log("Answer: " + answer)
console.log(output.join() == answer.join());

output = no34(["ccc", "dddd", "apple"]);
console.log("Output: " + output);
answer = ["apple"];
console.log("Answer: " + answer)
console.log(output.join() == answer.join());

function no34(strArr) {
    return strArr.filter(value => {
        return value.length != 3 && value.length != 4;
    });
}