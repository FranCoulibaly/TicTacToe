const Prompt = require("syncprompt");
var game = [[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]];
var move = Prompt("Player " + this.playerTurn + ", make your move.")

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
	}

	_checkPlayerTurn(){
		
		if (this.numOfMoves < 8) {
			if (this.playerTurn === "X") {
				this.playerTurn = "O";
			}
			else if (this.playerTurn === "O") {
				this.playerTurn = "X";
			}
			console.log(move);
			this.numOfMoves++;
			this._checkPlayerTurn();
		}
		else {
		this.state = "Game over";
		console.log(this.state);
		process.exit();
		}
	}

	// _makeMove(){
	// 	coOrds = parseInt(move);
	// 	console.log(coOrds);

	// }
	_emptyBoard(){
		console.log("	   1	   2	   3");
		console.log("	_______________________");
		console.log("	1|	|	|	|");
		console.log("	_______________________");
		console.log("	2|	|	|	|");
		console.log("	_______________________");
		console.log("	3|	|	|	|");
	}
	startGame(){
		this._emptyBoard();
		this._checkPlayerTurn();
	}
}

let board = new Board();
board.startGame();



