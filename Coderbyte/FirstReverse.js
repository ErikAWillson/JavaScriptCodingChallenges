/* Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.  */

let input = "Hello World and Coders";
let output = FirstReverse(input);
console.log("Output: " + output);
console.log(output === "sredoC dna dlroW olleH");

input = "coderbyte";
output = FirstReverse(input);
console.log("Output: " + output);
console.log(output === "etybredoc");

input = "I Love Code";
output = FirstReverse(input);
console.log("Output: " + output);
console.log(output === "edoC evoL I");

function FirstReverse(str) { 
    return str.split('').reverse().join(''); 
}