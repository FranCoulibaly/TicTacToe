const Prompt = require("syncprompt");
var game = [[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "]];

class Player {
	constructor(){
		this.player = player;
	}
}

class Board{
	constructor(stateOfPlay) {
		this.playerTurn = "X";
		this.numOfMoves = -1;
		this.state = "Game in progress";
		this.maxNumTurns = 9;
		this.currentMove = [];
	}

	_checkPlayerTurn(){
		if (this.playerTurn === "X") {
			this.playerTurn = "O";

		}
		else if (this.playerTurn === "O") {
			this.playerTurn = "X";
		}
		this.numOfMoves++;
		// console.log(this.numOfMoves);
		this._printPlayerMove();
		// console.log(this.playerTurn + " it's your move");
	

// Not currently working		
		// console.log("Game over!")
		// return;
	}

	_checkWinner(){
		// rows
		if ((game[0][0] === "X" && game[0][1] === "X" && game[0][2] === "X") || 
			(game[1][0] === "X" && game[1][1] === "X" && game[1][2] === "X") ||
			(game[2][0] === "X" && game[2][1] === "X" && game[2][2] === "X") ||
			//columns
			(game[0][0] === "X" && game[1][0] === "X" && game[2][0] === "X") || 
			(game[0][1] === "X" && game[1][1] === "X" && game[2][1] === "X") ||
			(game[0][2] === "X" && game[1][2] === "X" && game[2][2] === "X") ||
			//diagonals
			(game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") || 
			(game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X")){
			console.log("Player X wins!");
			return;
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
			console.log("Player O wins!");
			return;
		}
		else if (this.numOfMoves > 8){
			console.log("It's a draw!");
			return;
		}
		this._checkPlayerTurn();
	}

	_printPlayerMove(){
		let	input = Prompt("Player " + this.playerTurn + " it's your turn");
		let output = input.split(" ");
		let x = parseInt(output[0]);
		let y = parseInt(output[1]);

// Not currently working
		if (y === NaN || x === NaN) {
			console.log("Please give two coordinates");
			this._printPlayerMove();
		}
		else if (x > 2 || x < 0 || y > 2 || y < 0) {
			console.log("This is not a valid move, please enter coordinates between 0 and 2");
			this._printPlayerMove();
		}
		else if (game[x][y] === "O" || game[x][y] === "X"){
			console.log("This space is already taken");
			this._printPlayerMove();
		} 
		else {
		game[x][y] = this.playerTurn;
		// console.log(y);
		this._playingBoard();
		}	
	}


	_playingBoard(){
		console.log("	   0	   1	   2");
		console.log("	_______________________"); 
		console.log("	0|   " + game[0][0] +	"   |   " + game[0][1] +	"   |   " + game[0][2] +	"  |");
		console.log("	_______________________");
		console.log("	1|   "	+ game[1][0] +  "   |   " + game[1][1] +	"   |   " + game[1][2] +	"  |");
		console.log("	_______________________");
		console.log("	2|   " + game[2][0] +	"   |   " + game[2][1] +	"   |   " + game[2][2] +	"  |");
		this._checkWinner();
	}


	_emptyBoard(){
		console.log("	   0	   1	   2");
		console.log("	_______________________");
		console.log("	0|	|	|	|");
		console.log("	_______________________");
		console.log("	1|	|	|	|");
		console.log("	_______________________");
		console.log("	2|	|	|	|");
		this._checkPlayerTurn();
	}

	startGame(){
		this._emptyBoard();

	}
}

let board = new Board();
board.startGame();



