/**Write a JavaScript function to extract a specified number of characters from a string */

console.log(truncate_string("Robin Singh",4) == "Robi");

function truncate_string(str, num) {
    return str.substr(0,4);
}