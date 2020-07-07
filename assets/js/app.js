import { words } from './word-array.js';

const gameGraphicDOM = document.querySelector('.game-graphic'),
	gameWordDOM = document.querySelector('.game-word'),
	guessedLettersDOM = document.getElementById('guessed-letters-list'),
	remainingGuessesDOM = document.getElementById('game-remaining-guesses'),
	guessForm = document.getElementById('guess-form'),
	guessText = document.getElementById('guess-text'),
	guessButton = document.getElementById('guess-button'),
	gameStatusMessage = document.getElementById('status-message');

const gameState = {
	gameOver: true,
	word: '',
	guessedLetters: [],
	wordLetters: [],
	correctGuesses: 0,
	remainingGuesses: 6
};

const gameController = {
	setGameWord: (arr) => {
		let idx = Math.floor(Math.random() * arr.length);
		return arr[idx];
	},
	startGame() {
		gameState.word = this.setGameWord(words);
		this.renderWordDOM(gameState.word);
		gameState.remainingGuesses = 6;
		gameState.gameOver = false;
		console.log(`Word set to ${gameState.word}`);
	},
	checkForGameOver: () => {
		// TODO: render word upon loss
		if (gameState.correctGuesses === gameState.wordLetters.length) {
			gameStatusMessage.innerHTML = `Congratulations! You win!`;
			guessForm.style.display = 'none';
			gameState.gameOver = true;
		}
		if (gameState.remainingGuesses === 0) {
			gameStatusMessage.innerHTML = `Game over! The word was: <p class="word-final">${gameState.word.toUpperCase()}</p>`;
			guessForm.style.display = 'none';
			gameState.gameOver = true;
		}
	},
	renderWordDOM: (word) => {
		for (let i = 0; i < word.length; i++) {
			const letterSpace = document.createElement('div');
			letterSpace.setAttribute('class', 'game-letter');
			letterSpace.setAttribute('id', `letter-${i}`);
			letterSpace.innerHTML = '_';
			gameState.wordLetters.push(word[i].toUpperCase());
			gameWordDOM.appendChild(letterSpace);
		}
	},
	renderCorrectGuess: (letter, i) => {
		console.log(letter, i);
	},
	renderGuessedLetters: () => {
		guessedLettersDOM.innerHTML = gameState.guessedLetters;
	},
	checkGuess(letter) {
		const guessedArr = gameState.guessedLetters;
		const wordArr = gameState.wordLetters;
		// Check if letter has already been guessed
		if (guessedArr.includes(letter)) {
			gameStatusMessage.innerHTML = `'${letter}' has already been guessed. Try again!`;
			return;
		}
		// Check if letter is in wordLetters array
		if (!wordArr.includes(letter)) {
			guessedArr.push(letter);
			// Update status message, decrement remaining guesses, check for game over

			gameStatusMessage.innerHTML = `Sorry! There was no '${letter}' in the word. Try again!`;
			gameState.remainingGuesses--;
			remainingGuessesDOM.innerHTML = `Remaining guesses: ${gameState.remainingGuesses}`;
			this.renderGuessedLetters();
			this.checkForGameOver();
		} else {
			let count = 0;
			for (let i = 0; i < wordArr.length; i++) {
				if (wordArr[i] === letter) {
					count++;
					// Render correctly guessed letter in DOM
					document.getElementById(
						`letter-${i}`
					).innerHTML = `<div class="game-letter" id="letter-${i}">${letter}</div>`;
				}
			}
			// Update game state
			guessedArr.push(letter);
			gameState.correctGuesses += count;
			gameStatusMessage.innerHTML = `<h3 id="status-message">There ${count > 1
				? 'are'
				: 'is'} ${count} '${letter}'${count > 1 ? 's!' : '!'} Good job!</h3>`;
			remainingGuessesDOM.innerHTML = `Remaining guesses: ${gameState.remainingGuesses}`;
			this.renderGuessedLetters();
			this.checkForGameOver();
		}
	}
};

// TODO: disable button if input less than or greater than 1
guessText.addEventListener('keyup', () => {
	if (guessText.value.length !== 1) {
		console.log(guessButton, 'DISABLING');
		guessButton.disabled = true;
	} else {
		console.log(guessButton, 'ENABLING');
		guessButton.disabled = false;
	}
});

guessButton.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(guessText.value.toUpperCase());
	gameController.checkGuess(guessText.value.toUpperCase());
	guessText.value = '';
});

gameController.startGame();
console.log(gameState);
