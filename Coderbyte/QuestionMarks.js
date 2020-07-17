/* Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
If so, then your program should return the string true, otherwise it should return the string false. 
If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are 
exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.  */

let input = "aa6?9";
let output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === false);

input = "acc?7??sss?3rr1??????5";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === true);

input = "arrb6???4xxbl5???eee5";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === true);

input = "4???4???4";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === false);

input = "4???6???4";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === true);

input = "5??aaaaaaaaaaaaaaaaaaa?5?5";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === false);

input = "ARRB6???4XXBl5???eEe5";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === true);

input = "4E???4E???4";
output = QuestionsMarks(input);
console.log("Output: " + output);
console.log(output === false);


function QuestionsMarks_Alternate(str) {
    var res=false;
	for(var i=0;i<str.length;i++){
		for(var j=i+1;j<str.length;j++){
			if(Number(str[i])+Number(str[j])===10){
				res=true;
				if(str.slice(i,j).split('?').length-1<3){
					return false
				}
			}
		}
	}
	return res;
}

function QuestionsMarks(str) { 
    // code goes here  

    let result = false;

    str = str.replace(/[a-z]/gi, "");

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "?") {
            let first = parseInt(str.charAt(i));
            let sub = str.substring(i + 1);
            let second = findNextNumber(sub);
            
            if (second === NaN) break;

            if (first + second === 10) {
                if (sub.substring(0,sub.indexOf(second)).length != 3) {
                    result = false;
                    break;
                } else {
                    result = true;
                }
            }

        };
    }

    return result;
}
function findNextNumber(str) {
    strNumbers = str.replace(/\?/g, "");
    return parseInt(strNumbers.charAt(0));
}



// solved for all pairs that have exactly 3 ?'s between them add up to 10 ---- NOT FOR all pairs that add up to exactly 10 should have exactly 3 ?'s between them
function WrongAssumption(str) {
     
    // code goes here  
    let result = false;

    str = str.replace(/[a-z]/gi, "");

    while(true) {
        //pause
        pause();
        //end of pause

        let index = str.search(/[0-9]\?\?\?[0-9]/);
        if (index === -1) {
            console.log("I am IF");
            break;
        }
        else if (Number(str.charAt(index)) + Number(str.charAt(index + 4)) === 10) {
            result = true;
            str = str.substring(index, -1);
            console.log("I am ELSEIF");
        } else {
            result = false;
            console.log("I am ELSE - " + str.charAt(index) + ";" + str.charAt(index + 4));
            break;
        }
    }

    return result; 
}

function pause() {
    var start = new Date().getTime();
    // console.log(start);
    while (true) {
        let end = new Date().getTime();
        // console.log(end - start);
        if (end - start > 500) {
            break;
        }
    }
}