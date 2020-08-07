/* Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year. */

let answer = 9;
let output = dayOfYear("2019-01-09");
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 41;
output = dayOfYear("2019-02-10");
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 60;
output = dayOfYear("2003-03-01");
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = 61;
output = dayOfYear("2004-03-01");
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function dayOfYear(str) {
    let year = parseInt(str.slice(0,4));
    let start = new Date(year,0,0);
    let end = new Date(year, parseInt(str.slice(5,7)) - 1, parseInt(str.slice(8,10)));
    let deltaMil = end - start;
    let deltaDays = deltaMil / (1000 * 60 * 60 * 24);
    return deltaDays;
}