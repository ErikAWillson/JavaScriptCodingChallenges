/**Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. 
 * Return 0 if there are no digits in the string.*/

let output = sumDigits("aa1bc2d3");
console.log("Output: " + output);
console.log(output == 6);

output = sumDigits("aa11b33");
console.log("Output: " + output);
console.log(output == 8);

output = sumDigits("Chocolate");
console.log("Output: " + output);
console.log(output == 0);

function sumDigits(str) {
    let sum = 0;
    for (c of str) {
        if (!isNaN(c)) sum += parseInt(c);
    }

    return sum;
}