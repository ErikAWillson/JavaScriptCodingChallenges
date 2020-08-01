/* Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points. */

let answer = ["255.255.11.135", "255.255.111.35"];
let output = restoreIPAddress("25525511135");
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function restoreIPAddress(str) {
    let output = [];

    recursiveBuild(output, "", str, 1);

    return output;
}

function recursiveBuild(output, current, remaining, depth) {
    if (depth > 4) {
        if (remaining.length == 0) output.push(current);

        return;
    }

    let ip = current;
    if (depth > 1) ip = ip.concat(".");
    
    if (remaining.length - 1 >= 4-depth){
        recursiveBuild(output, ip.concat(remaining[0]), remaining.slice(1, remaining.length), depth + 1);
        
        if (remaining.length - 2 >= 4-depth){
            recursiveBuild(output, ip.concat(remaining.slice(0,2)), remaining.slice(2, remaining.length), depth + 1);

            if (remaining.length - 3 >= 4-depth && parseInt(remaining.slice(0,3)) <= 255){
                recursiveBuild(output, ip.concat(remaining.slice(0,3)), remaining.slice(3, remaining.length), depth + 1);
            }
        }
    }
}