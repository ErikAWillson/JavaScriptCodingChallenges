/**Write a JavaScript function to capitalize the first letter of a string. */

console.log(capitalize('js string exercises') == "Js string exercises");

function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1, str.length - 1);
}