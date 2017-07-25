const Prompt = require("syncprompt");
var game = [];

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
		if (this.playerTurn === "X") {
			this.playerTurn = "O";
			Prompt("Player O, make your move.")
		}
		else if (this.playerTurn === "O") {
			this.playerTurn = "X";
			Prompt("Player X, make your move.")
		}

	}
}

function emptyBoard(){
	console.log("	   1	   2	   3");
	console.log("	_______________________");
	console.log("	1|	|	|	|");
	console.log("	_______________________");
	console.log("	2|	|	|	|");
	console.log("	_______________________");
	console.log("	3|	|	|	|");
	}
	
emptyBoard();

