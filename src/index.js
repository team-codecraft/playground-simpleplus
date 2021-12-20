function Psp() {
	Psp.prototype.plus = function () {

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
