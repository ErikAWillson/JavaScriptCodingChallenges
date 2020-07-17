/**Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th. */

let output = humanize(1);
console.log(output);
console.log(output == "1st");

output = humanize(20);
console.log(output);
console.log(output == "20th");

output = humanize(302);
console.log(output);
console.log(output == "302nd");

output = humanize(311);
console.log(output);
console.log(output == "311th");

function humanize(num) {
    let mod = num % 100;
    if (mod >= 11 && mod <= 13) return num + "th";

    switch (num % 10) {
        case 1: return num + "st";
        case 2: return num + "nd";
        case 3: return num + "rd";
        default: return num + "th";
    }
}