/* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */

let input = "hello*3";
let output = LetterChanges(input);
console.log("Output: " + output);
console.log(output === "Ifmmp*3");

input = "fun times!";
output = LetterChanges(input);
console.log("Output: " + output);
console.log(output === "gvO Ujnft!");

function LetterChanges(str) { 
    let result = "";

    let strArr = str.split('');
    strArr.forEach( c => {
        if (c.match(/[a-y]/i)) {
            let value = c.charCodeAt(0);
            c = String.fromCharCode(value + 1);
        } else if (c.match(/[z]/i)) {
            c = "A";
        }

        if (c.match(/[eiou]/)) c = c.toUpperCase();

        result += c;
    });

    return result; 
  
}