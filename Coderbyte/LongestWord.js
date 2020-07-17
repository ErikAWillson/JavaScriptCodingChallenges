/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 If there are two or more words that are the same length,
  return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty.  */

let input = "fun&!! time";
let output = LongestWord(input);
console.log("Output: " + output);
console.log(output === "time");

input = "I love dogs";
output = LongestWord(input);
console.log("Output: " + output);
console.log(output === "love");

input = "a beautiful sentence^&!";
output = LongestWord(input);
console.log("Output: " + output);
console.log(output === "beautiful");

input = "letter after letter!!";
output = LongestWord(input);
console.log("Output: " + output);
console.log(output === "letter");

input = "a confusing /:sentence:/[ this is not!!!!!!!~";
output = LongestWord(input);
console.log("Output: " + output);
console.log(output === "confusing");

function LongestWord(sen) { 
    let result = "";
    let senArr = sen.replace(/[^a-z ]/gi, "").split(" ");
    senArr.forEach(str => {
        result = str.length > result.length ? str : result;
    });

    return result; 
  
}