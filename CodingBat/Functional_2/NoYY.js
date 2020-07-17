/**Given a list of strings, return a list where each string has "y" added at its end, 
 * omitting any resulting strings that contain "yy" as a substring anywhere. */

let output = noYY(["a", "b", "c"]);
console.log("Output: " + output);
console.log(output.join("") == ["ay", "by", "cy"].join(""));

output = noYY(["a", "b", "cy"]);
console.log("Output: " + output);
console.log(output.join("") == ["ay", "by"].join(""));

output = noYY(["xx", "ya", "zz"]);
console.log("Output: " + output);
console.log(output.join("") == ["xxy", "yay", "zzy"].join(""));

function noYY(strArr) {
    return strArr
        .map(value => value + "y")
        .filter(value => value.indexOf("yy") == -1);
}