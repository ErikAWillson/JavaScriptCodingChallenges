/**Write a JavaScript function to check whether an `input` is an array or not. */

console.log(is_array('w3resource') == false);
console.log(is_array([1, 2, 4, 0]) == true);
console.log(is_array(1) == false);

function is_array(input) {
    return toString.call(input) === "[object Array]";
}