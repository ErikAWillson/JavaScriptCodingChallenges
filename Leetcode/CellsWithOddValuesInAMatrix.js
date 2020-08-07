/* Given n and m which are the dimensions of a matrix initialized by zeros 
and given an array indices where indices[i] = [ri, ci]. 
For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices. */

let answer = 6;
let output = oddCells(2, 3, [[0,1],[1,1]]);
console.log("Ouput = " + output);
console.log(output == answer);

answer = 0;
output = oddCells(2, 2, [[1,1],[0,0]]);
console.log("Ouput = " + output);
console.log(output == answer);

function oddCells(n, m, indicies) {
    var matrix = initializeMatrix(n, m);

    indicies.forEach(value => {
        addOneTo(matrix, value[0], true);
        addOneTo(matrix, value[1], false);
    })

    return countOddValues(n, m, matrix);
}

function countOddValues(numRows, numColumns, matrix) {
    let count = 0;
    for (let i = 0; i < numRows; i++) {
        let oddRow = matrix[i].filter(value => value % 2 == 1);
        count += oddRow.length;
    }
    return count;
}

function addOneTo(matrix, index, isRow) {
    if (isRow) {
        for (let i = 0; i < matrix[index].length; i++) {
            matrix[index][i]++;
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][index]++;
        }
    }
} 

function initializeMatrix(n, m) {
    var rows = [];
    for (let i = 0; i < n; i++) {
        let columns = new Array(m).fill(0);
        rows.push(columns);
    }
    return rows;
}