function Psp() {
	Psp.prototype.plus = function (...args) {
		if(!args.length) {
			return false;
		}
		const result = args.reduce((acc, cur) => acc + cur);
		return typeof result === 'number' ? result : false;
	}

	Psp.prototype.minus = function (...rest) {
		if (typeof rest[0] !== 'number') return false;

		var answer = rest[0];

		for (let index = 1; index < rest.length; index++) {
			const element = rest[index];
			if (typeof element !== 'number') {
				answer = false;
				break;
			} else {
				answer-= element;
			} 
		}


		return answer;

	}
}
module.exports = Psp;
