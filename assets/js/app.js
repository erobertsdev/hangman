const words = [ 'Oliver', 'Clementine', 'Bear', 'Beats', 'Bottle', 'Peach', 'Rabbit', 'Bat' ],
	gameGraphicDOM = document.querySelector('.game-graphic'),
	gameWordDOM = document.querySelector('.game-word'),
	guessText = document.getElementById('guess-text'),
	guessButton = document.getElementById('guess-button');

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
		for (let i = 0; i < word.length; i++) {
			const letterSpace = document.createElement('div');
			letterSpace.innerHTML = `<div class="game-letter" id="letter-${i}">_</div>`;
			gameState.wordLetters.push(word[i].toLowerCase());
			gameWordDOM.appendChild(letterSpace);
		}
	},
	renderCorrectGuess: (letter, i) => {
		console.log(letter, i);
	},
	checkGuess: (letter) => {
		const wordArr = gameState.wordLetters;
		// Check if letter is in wordLetters array
		if (!wordArr.includes(letter)) {
			console.log(`Word does not include a ${letter}! :(`);
		} else {
			for (let i = 0; i < wordArr.length; i++) {
				if (wordArr[i] === letter) {
					// Render correctly guessed letter in DOM
					console.log(`Found a ${letter} at position ${i}.`);
					document.getElementById(
						`letter-${i}`
					).innerHTML = `<div class="game-letter" id="letter-${i}">${letter}</div>`;
				}
			}
		}
	}
};

guessButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(guessText.value.toLowerCase());
	gameController.checkGuess(guessText.value.toLowerCase());
});

gameController.startGame();
console.log(gameState);
