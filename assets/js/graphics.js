const gameGraphicDOM = document.querySelector('.game-graphic');

export const drawMan = (guessesRemaining) => {
	switch (guessesRemaining) {
		case 5:
			gameGraphicDOM.innerHTML = `<p>O</p>`;
			break;
		case 4:
			gameGraphicDOM.innerHTML = `<p>O</p>
            <p>|</p>`;
			break;
		case 3:
			gameGraphicDOM.innerHTML = `<p>O</p>
            <p>--|</p>`;
			break;
		case 2:
			gameGraphicDOM.innerHTML = `<p>O</p>
            <p>--|--</p>`;
			break;
		case 1:
			gameGraphicDOM.innerHTML = `<p>O</p>
            <p>--|--<p>
            <p>/</p>`;
			break;
		case 0:
			gameGraphicDOM.innerHTML = gameGraphicDOM.innerHTML = `<p>O</p>
            <p>--|--<p>
            <p>/ \\</p>`;
			break;
	}
};
