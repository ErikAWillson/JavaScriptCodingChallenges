/**Write a JavaScript function to parameterize a string. */

console.log(string_parameterize("Robin Singh from USA.") == "robin-singh-from-usa");

function string_parameterize(str) {
    return str.toLowerCase().trim().replace(/[^0-9a-z\s]/g, '').replace(/\s/g, '-');
}