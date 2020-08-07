/* Given a square grid of integers arr, 
a falling path with non-zero shifts is a choice of exactly one element from each row of arr, 
such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts. */

let answer = 13;
let output = minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function minFallingPathSum(arr) {
    let paths = [];

    for (let i = 0; i < arr[0].length; i++) {
        recursivePathFinder(arr, 0, i, 0, paths);
    }
    
    return paths.sort()[0];
}

function recursivePathFinder(arr, currentLevel, currentIndex, currentSum , pathSums) {
    let newSum = currentSum + arr[currentLevel][currentIndex];
    
    if (currentLevel + 1 >= arr.length) {
        pathSums.push(newSum);
    } else{
        let nextRightIndex = (currentIndex == (arr[currentLevel].length - 1)) ? 0 : currentIndex + 1;
        let nextLeftIndex = (currentIndex == 0) ? arr[currentLevel].length - 1 : currentIndex - 1;
        recursivePathFinder(arr, currentLevel + 1, nextRightIndex, newSum, pathSums);
        recursivePathFinder(arr, currentLevel + 1, nextLeftIndex, newSum, pathSums);
    }
}