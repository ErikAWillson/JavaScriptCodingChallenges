/* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer.  */

let input = 4;
let output = FirstFactorial(input);
console.log("Output: " + output);
console.log(output === 24);

input = 8;
output = FirstFactorial(input);
console.log("Output: " + output);
console.log(output === 40320);

function FirstFactorial(num) { 
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result; 
  
}

