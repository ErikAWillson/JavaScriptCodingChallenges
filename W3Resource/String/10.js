/**Write a JavaScript function that takes a string which has lower and upper case letters as a parameter 
 * and converts upper case letters to lower case, 
 * and lower case letters to upper case. */

console.log(swapcase_alt('AaBbc') == "aAbBC");

function swapcase(str) {
    return str.split('').map(value => {
        if (value.match(/[a-z]/) != null) {
            return value.toUpperCase();
        } else if (value.match(/[A-Z]/) != null) {
            return value.toLowerCase();
        } else {
            return value;
        }
    }).join("");
}

function swapcase_alt(str) {
    return str.split('').map(value => {
        let lowVal = value.toLowerCase();
        if (value == lowVal) {
            return value.toUpperCase();
        }
        return lowVal;
    }).join("");
}