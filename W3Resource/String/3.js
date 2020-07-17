/* Write a JavaScript function to split a string and convert it into an array of words. */

console.log(string_to_array("Robin Singh").join() == ["Robin", "Singh"].join());

function string_to_array(str) {
    return str.split(' ');
}