const words = [ 'Oliver', 'Clementine', 'Bear', 'Beats', 'Bottle', 'Peach', 'Rabbit', 'Bat' ],
	gameGraphicDOM = document.querySelector('.game-graphic'),
	gameWordDOM = document.querySelector('.game-word');

const gameState = {
	gameOver: true,
	word: '',
	guessedLetters: [],
	playerGuessCount: 0
};

const gameController = {
	setGameWord: (arr) => {
		let idx = Math.floor(Math.random() * arr.length);
		return arr[idx];
	},

	startGame() {
		gameState.word = this.setGameWord(words);
		gameState.playerGuessCount = 0;
		gameState.gameOver = false;
		console.log(`Word set to ${gameState.word}`);
	}
};

gameController.startGame();
console.log(gameState);
