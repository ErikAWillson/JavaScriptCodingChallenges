/** Write a JavaScript function to hide email addresses to protect from unauthorized user.  */

console.log(protect_email("robin_singh@example.com") == "robin...@example.com");

function protect_email(str) {
    let strArr = str.split('@');
    let first = strArr[0].substr(0, strArr[0].length / 2);
    return first + "...@" + strArr[1];
}