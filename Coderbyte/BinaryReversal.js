/* Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, 
take its binary representation (padded to the nearest N * 8 bits), 
reverse that string of bits, 
and then finally return the new reversed string in decimal form. 
For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. 
Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244. */

let input = "213";
let output = BinaryReversal(input);
console.log("Output: " + output);
console.log(output === 171);

input = "4567";
output = BinaryReversal(input);
console.log("Output: " + output);
console.log(output === 60296);

input = "47";
output = BinaryReversal(input);
console.log("Output: " + output);
console.log(output === 244);

function BinaryReversal(str) { 

    // Turn decimal string to binary string
    let binary = parseInt(str, 10).toString(2);

    // Determine amount of required padding
    let mod = binary.length % 8;
    let padding = mod > 0 ? 8 - mod : 0;    

    // Add required padding
    for (let i = 0; i < padding; i++) {
        binary = "0".concat(binary);
    }

    // Reverse binary
    binary = binary.split("")
        .reverse()
        .join("");

    // Convert binary string into decimal integer
    let digit = parseInt(binary, 2);

    return digit; 
  
}