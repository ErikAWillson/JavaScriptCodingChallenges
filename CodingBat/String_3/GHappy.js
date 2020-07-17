/* We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. 
Return true if all the g's in the given string are happy. */

let input = "xxggxx";
let output = gHappy(input);
console.log("Output: " + output);
console.log(output === true);

input = "xxgxx";
output = gHappy(input);
console.log("Output: " + output);
console.log(output === false);

input = "xxggyygxx";
output = gHappy(input);
console.log("Output: " + output);
console.log(output === false);

function gHappy(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g'
                && (i - 1 >= 0 && str[i - 1] !== 'g') 
                && (i + 1 < str.length && str[i + 1] !== 'g')) {
            return false;            
        }
    }
    
    return true;
}