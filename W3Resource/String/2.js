/* Write a JavaScript function to check whether a string is blank or not. */

console.log(is_Blank('') == true);
console.log(is_Blank('abc') == false);

function is_Blank(str) {
    return str.length == 0;
}