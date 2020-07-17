/**Write a JavaScript function to capitalize the first letter of each word in a string. */

console.log(capitalize_Words('js string exercises') == "Js String Exercises");

function capitalize_Words(str) {
    let strArr = str.split(' ');
    strArr = strArr.map(value => {
        return value[0].toUpperCase() + value.substr(1, value.length - 1);
    });
    return strArr.join(' ');
}