/* Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.  */

let strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
let resArr = FindIntersection(strArr);
console.log(resArr);
console.log("Successful: " + (resArr === "1,4,13"));

strArr = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
resArr = FindIntersection(strArr);
console.log(resArr);
console.log("Successful: " + (resArr === "1,9,10"));

strArr = ["1, 3, 9, 10, 17, 18", ""];
resArr = FindIntersection(strArr);
console.log(resArr);
console.log("Successful: " + (resArr === false));

strArr = ["", "1, 4, 9, 10"];
resArr = FindIntersection(strArr);
console.log(resArr);
console.log("Successful: " + (resArr === false));

strArr = ["1, 3, 9", "2, 4, 8, 10"];
resArr = FindIntersection(strArr);
console.log(resArr);
console.log("Successful: " + (resArr === false));


function FindIntersection(strArr) {
    // code goes here
    let strArr0 = strArr[0].split(", ");
    let strArr1 = strArr[1].split(", ");
    strArr = "";

    strArr0.forEach(str => {
        let index = strArr1.indexOf(str);
        if (index != -1) {
            strArr = strArr.concat(str).concat(",");
            strArr1.splice(0, index + 1);
        }
    });
    if (strArr != "") return strArr.slice(0, -1);

    return false
}