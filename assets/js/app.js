const words = [ 'Oliver', 'Clementine', 'Bear', 'Beats', 'Bottle', 'Peach', 'Rabbit', 'Bat' ],
	gameGraphicDOM = document.querySelector('.game-graphic'),
	gameWordDOM = document.querySelector('.game-word');

const gameState = {
	gameOver: true,
	word: '',
	guessedLetters: [],
	wordLetters: [],
	playerGuessCount: 0
};

const gameController = {
	setGameWord: (arr) => {
		let idx = Math.floor(Math.random() * arr.length);
		return arr[idx];
	},
	startGame() {
		gameState.word = this.setGameWord(words);
		this.renderWordDOM(gameState.word);
		gameState.playerGuessCount = 0;
		gameState.gameOver = false;
		console.log(`Word set to ${gameState.word}`);
	},
	renderWordDOM: (word) => {
		for (let letter of word) {
			const letterSpace = document.createElement('div');
			letterSpace.innerHTML = `<div class="game-letter">_</div>`;
			gameState.wordLetters.push(letter);
			gameWordDOM.appendChild(letterSpace);
		}
	}
};

gameController.startGame();
console.log(gameState);
