let game = [[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "]];
let playerTurn = "O";
let numOfMoves = 1;

function playerMove(x, y) {

	if (x === undefined || y === undefined){
		console.log("Please enter two coordinates");
	}
	else {
		x = x - 1;
		y = y - 1;
		if (x > 2 || x < 0 || y > 2 || y < 0) {
		console.log("This is not a valid move, please enter coordinates between 1 and 3");
		// playerMove();
		}
		else if (game[x][y] === "O" || game[x][y] === "X"){
			console.log("This space is already taken");
			// playerMove();
		}  
		else {
		game[x][y] = playerTurn;
		// console.log(y);
		playingBoard();
		}	
	}	
}

function checkPlayerTurn(){
	if (playerTurn === "X") {
		playerTurn = "O";

	}
	else if (playerTurn === "O") {
		playerTurn = "X";
	}
	numOfMoves++;
	console.log(playerTurn + " make your move by typing playerMove(x, y) with your coordinates");
	// console.log(this.numOfMoves);
}


function playingBoard(){
	console.log("	   1	   2	   3");
	console.log("	_______________________"); 
	console.log("	1|   " + game[0][0] +	"   |   " + game[0][1] +	"   |   " + game[0][2] +	"  |");
	console.log("	_______________________");
	console.log("	2|   "	+ game[1][0] +  "   |   " + game[1][1] +	"   |   " + game[1][2] +	"  |");
	console.log("	_______________________");
	console.log("	3|   " + game[2][0] +	"   |   " + game[2][1] +	"   |   " + game[2][2] +	"  |");
	checkWinner();
}

function checkWinner(){
	if (numOfMoves > 9){
	console.log("It's a draw! To play again type startGame()");
	return;
	}
	// rows
	else if ((game[0][0] === "X" && game[0][1] === "X" && game[0][2] === "X") || 
		(game[1][0] === "X" && game[1][1] === "X" && game[1][2] === "X") ||
		(game[2][0] === "X" && game[2][1] === "X" && game[2][2] === "X") ||
		//columns
		(game[0][0] === "X" && game[1][0] === "X" && game[2][0] === "X") || 
		(game[0][1] === "X" && game[1][1] === "X" && game[2][1] === "X") ||
		(game[0][2] === "X" && game[1][2] === "X" && game[2][2] === "X") ||
		//diagonals
		(game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") || 
		(game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X")){
		return "Game Over! Player X wins! To play again type startGame()";
	}
	else if ((game[0][0] === "O" && game[0][1] === "O" && game[0][2] === "O") || 
		(game[1][0] === "O" && game[1][1] === "O" && game[1][2] === "O") ||
		(game[2][0] === "O" && game[2][1] === "O" && game[2][2] === "O") ||
		//columns
		(game[0][0] === "O" && game[1][0] === "O" && game[2][0] === "O") || 
		(game[0][1] === "O" && game[1][1] === "O" && game[2][1] === "O") ||
		(game[0][2] === "O" && game[1][2] === "O" && game[2][2] === "O") ||
		//diagonals
		(game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O") || 
		(game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O")){
		return "Game Over! Player O wins! To play again type startGame()";
	}

	checkPlayerTurn();
}

function startGame() {
	console.log("	   1	   2	   3");
	console.log("	_______________________");
	console.log("	1|      |      |      |");
	console.log("	_______________________");
	console.log("	2|      |      |      |");
	console.log("	_______________________");
	console.log("	3|      |      |      |");
	checkPlayerTurn();
}

startGame();
