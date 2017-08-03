const Prompt = require("syncprompt");
var game = [[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]];

class Player {
	constructor(){
		this.player = player;
	}
}

class Board{
	constructor(stateOfPlay) {
		this.playerTurn = "O";
		this.numOfMoves = 0;
		this.state = "Game in progress";
		this.maxNumTurns = 9;
		this.currentMove = [];
	}

	_checkPlayerTurn(){
		if (this.numOfMoves < 8) {
			if (this.playerTurn === "X") {
				this.playerTurn = "O";
			}
			else if (this.playerTurn === "O") {
				this.playerTurn = "X";
			}
			// console.log(this.playerTurn + " it's your move");
		}
		else {
		this.state = "Game over";
		console.log(this.state);

		return;
		};
	}

	_printPlayerMove(a, b){
		if (this.player === "O") {
			console.log(Prompt("Player O it's your turn"));

			// let register = parseInt(playO);
			// console.log(register);
		}
		else {
			let coordinates = [];
			let	input = Prompt("Player X it's your turn");
			let output = input.split(" ");
			coordinates = [parseInt(output[0]), parseInt(output[1])];
			game[coordinates[0]][coordinates[1]] = "X";
			console.log(game);

			// let register = parseInt(playX);
			// console.log(register);
		}
	}

	// _checkMove(){
	// 	if (currentMove ==){}

	// }

	// _playingBoard(){
	// 	console.log("	   1	   2	   3");
	// 	console.log("	_______________________");
	// 	console.log("	1|" + game[0][0] +	"|" + game[0][1] +	"|" + game[0][2]	"|");
	// 	console.log("	_______________________");
	// 	console.log("	2|"	+ game[1][0] +  "|" + game[1][1] +	"|" + game[1][2] +	"|");
	// 	console.log("	_______________________");
	// 	console.log("	3|" + game[2][0] +	"|" + game[2][1] +	"|" + game[2][2] +	"|");
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
		this._printPlayerMove();
	}
}

let board = new Board();
board.startGame();



