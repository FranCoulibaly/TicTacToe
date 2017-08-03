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
		this.numOfMoves = 0;
		this.state = "Game in progress";
		this.maxNumTurns = 9;
		this.currentMove = [];
	}

	_checkPlayerTurn(){
		if (this.numOfMoves < 8) {
			if (this.playerTurn === "X") {
				this.playerTurn = "O";
				this.numOfMoves++;
				this._printPlayerMove();
			}
			else if (this.playerTurn === "O") {
				this.playerTurn = "X";
				this.numOfMoves++;
				this._printPlayerMove();
			}
			// console.log(this.playerTurn + " it's your move");
		}
		else {
			return "It's a draw, game over!";
		};

	}

	_printPlayerMove(){
		let coordinates = [];
		if (this.playerTurn === "O") {
			let	input = Prompt("Player O it's your turn");
			let output = input.split(" ");
			coordinates = [parseInt(output[0]), parseInt(output[1])];

			if (game[coordinates[0]][coordinates[1]] === "O" || game[coordinates[0]][coordinates[1]] === "X"){
				console.log("This space is already taken");
				this._printPlayerMove();
			} 
			else {
			game[coordinates[0]][coordinates[1]] = "O";
			// console.log(game);
			this._playingBoard();
			}
		}

		else if (this.playerTurn === "X"){
			let	input = Prompt("Player X it's your turn");
			let output = input.split(" ");
			coordinates = [parseInt(output[0]), parseInt(output[1])];
			if (game[coordinates[0]][coordinates[1]] === "O" || game[coordinates[0]][coordinates[1]] === "X"){
				console.log("This space is already taken");
				this._printPlayerMove();
			} 
			else {
			game[coordinates[0]][coordinates[1]] = "X";
			// console.log(game);
			this._playingBoard();
			}
		}	
	}


	_playingBoard(){
		console.log("	   1	   2	   3");
		console.log("	_______________________"); 
		console.log("	1|   " + game[0][0] +	"   |   " + game[0][1] +	"   |   " + game[0][2] +	"  |");
		console.log("	_______________________");
		console.log("	2|   "	+ game[1][0] +  "   |   " + game[1][1] +	"   |   " + game[1][2] +	"  |");
		console.log("	_______________________");
		console.log("	3|   " + game[2][0] +	"   |   " + game[2][1] +	"   |   " + game[2][2] +	"  |");
		this._checkPlayerTurn();
	}


	_emptyBoard(){
		console.log("	   1	   2	   3");
		console.log("	_______________________");
		console.log("	1|	|	|	|");
		console.log("	_______________________");
		console.log("	2|	|	|	|");
		console.log("	_______________________");
		console.log("	3|	|	|	|");
		this._checkPlayerTurn();
	}

	startGame(){
		this._emptyBoard();

	}
}

let board = new Board();
board.startGame();



