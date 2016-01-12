'use strict';

const square = (x) => parseInt(x, 10) * parseInt(x, 10);

const happy = (number) => {
	return String(number)
		.split('')
		.map((number) => square(number))
		.reduce((previous, current) => previous + current);
};

const isHappy = (number) => {
	if (number === 1) {
		return true;
	} else if (number === 4) {
		return false;
	}

	return isHappy(happy(number));
};

module.exports = function (number) {
	if (typeof number !== 'number') {
		throw new TypeError('Expected a number');
	}

	return isHappy(number);
};
