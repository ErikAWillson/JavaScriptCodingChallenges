/**We'll say that a "triple" in a string is a char appearing three times in a row. 
 * Return the number of triples in the given string. The triples may overlap. */

let output = countTriple("abcXXXabc");
console.log("Output: " + output);
console.log(output == 1);

output = countTriple("xxxabyyyycd");
console.log("Output: " + output);
console.log(output == 3);

output = countTriple("a");
console.log("Output: " + output);
console.log(output == 0);

function countTriple(str) {
    let count = 0;
    str.split('').forEach((value, index, self) => {
        if (value == self[index - 1] && value == self[index + 1]) count++;
    });
    return count;
}