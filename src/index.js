function Psp() {
	Psp.prototype.plus = function (...args) {
		if(!args.length) {
			return false;
		}
		const result = args.reduce((acc, cur) => acc + cur);
		return typeof result === 'number' ? result : false;
	}

	Psp.prototype.minus = function () {

	}
}
module.exports = Psp;
