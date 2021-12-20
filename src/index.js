function Psp() {
	Psp.prototype.plus = function (...args) {
		const result = args.reduce((acc, cur) => acc + cur);
		return typeof result === 'number' ? result : false;
	}

	Psp.prototype.minus = function (...rest) {
		if (typeof rest[0] !== 'number') return false;

		var answer = rest[0];

		rest.slice(1).forEach((v) => {
			if (typeof v !== 'number') return false;
			else answer-= v;
		})

		return answer;

	}
}
module.exports = Psp;
