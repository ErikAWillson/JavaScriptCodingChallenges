/* Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive). */

let input = "This is not";
let output = equalIsNot(input);
console.log("Output: " + output);
console.log(output === false);

input = "This is notnot";
output = equalIsNot(input);
console.log("Output: " + output);
console.log(output === true);

input = "noisxxnotyynotxisi";
output = equalIsNot(input);
console.log("Output: " + output);
console.log(output === true);

input = "";
output = equalIsNot(input);
console.log("Output: " + output);
console.log(output === true);

function equalIsNot(str) {
    let isCount = (str.match(/is/g) || []).length;
    let notCount = (str.match(/not/g) || []).length;

    console.log("Is's = " + isCount);
    console.log("Nots = " + notCount);
    return isCount === notCount;
}