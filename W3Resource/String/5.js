/**Write a JavaScript function to convert a string in abbreviated form. */

console.log(abbrev_name("Robin Singh") == "Robin S.");

function abbrev_name(str) {
    let strArr = str.split(" ");
    return strArr[0] + " " + strArr[1][0] + '.';
}