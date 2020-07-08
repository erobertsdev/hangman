const head = document.getElementById('head'),
	torso = document.getElementById('torso'),
	leftArm = document.getElementById('left-arm'),
	rightArm = document.getElementById('right-arm'),
	leftLeg = document.getElementById('left-leg'),
	rightLeg = document.getElementById('right-leg');

export const drawMan = (guessesRemaining) => {
	switch (guessesRemaining) {
		case 5:
			head.classList.remove('hide');
			head.style.opacity = '1';
			head.style.visibility = 'inherit';
			break;
		case 4:
			torso.classList.remove('hide');
			torso.style.opacity = '1';
			torso.style.visibility = 'inherit';
			break;
		case 3:
			leftArm.classList.remove('hide');
			leftArm.style.opacity = '1';
			leftArm.style.visibility = 'inherit';
			break;
		case 2:
			rightArm.classList.remove('hide');
			rightArm.style.opacity = '1';
			rightArm.style.visibility = 'inherit';
			break;
		case 1:
			leftLeg.classList.remove('hide');
			leftLeg.style.opacity = '1';
			leftLeg.style.visibility = 'inherit';
			break;
		case 0:
			rightLeg.classList.remove('hide');
			rightLeg.style.opacity = '1';
			rightLeg.style.visibility = 'inherit';
			break;
	}
};
