/* A Tic-Tac-Toe board is given as a string array board. 
Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  
The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

    Players take turns placing characters into empty squares (" ").
    The first player always places "X" characters, while the second player always places "O" characters.
    "X" and "O" characters are always placed into empty squares, never filled ones.
    The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
    The game also ends if all squares are non-empty.
    No more moves can be played if the game is over.
*/

var isRatioOk = function(board, result) {
    let fullboard = board.join();
    let xCount = (fullboard.match(new RegExp("X", "g")) || []).length;
    let oCount = (fullboard.match(new RegExp("O", "g")) || []).length;

    if (result == "O" && xCount != oCount) return false;

    return xCount == oCount || xCount == oCount + 1;
};

var winningResults = function(board) {
    let topRow = (board[0] == "XXX" || board[0] == "OOO") ? board[0][0] : "";
    let middleRow = (board[1] == "XXX" || board[1] == "OOO") ? board[1][0] : "";
    let bottomRow = (board[2] == "XXX" || board[2] == "OOO") ? board[2][0] : "";

    let firstColumn = (board[0][0] == board[1][0] && board[0][0] == board[2][0]) 
        ?  board[0][0] : "";
    let secondColumn = (board[0][1] == board[1][1] && board[0][1] == board[2][1]) 
        ?  board[0][1] : "";
    let thirdColumn = (board[0][2] == board[1][2] && board[0][2] == board[2][2]) 
        ?  board[0][2] : "";

    let firstDiagonal = (board[0][0] == board[1][1] && board[0][0] == board[2][2])
        ? board[0][0] : "";
    let secondDiagonal = (board[2][0] == board[1][1] && board[2][0] == board[0][2])
        ? board[2][0] : "";

    let totalWins = topRow.concat(middleRow).concat(bottomRow).concat(firstColumn)
        .concat(secondColumn).concat(thirdColumn).concat(firstDiagonal).concat(secondDiagonal);
    
    if (totalWins.length == 0) {
        return "noWin";
    } else if (totalWins.length == 1) {
        return totalWins;
    } else {
        return "";
    }
}

var validTicTacToe = function(board) {
    let result = winningResults(board);
    if (result == "") return false;

    return isRatioOk(board, result);
};

let nums = ["O  ", "   ", "   "];
let answer = false;
let output = validTicTacToe(nums);
console.log("Ouput = " + output);
console.log(output == answer);

nums = ["XOX", " X ", "   "];
answer = false;
output = validTicTacToe(nums);
console.log("Ouput = " + output);
console.log(output == answer);

nums = ["XXX", "   ", "OOO"];
answer = false;
output = validTicTacToe(nums);
console.log("Ouput = " + output);
console.log(output == answer);

nums = ["XOX", "O O", "XOX"];
answer = true;
output = validTicTacToe(nums);
console.log("Ouput = " + output);
console.log(output == answer);
