function Psp() {
	Psp.prototype.plus = function () {

	}

	Psp.prototype.minus = function (a,b) {
		var c,d;
		
		switch(typeof a) {
			case 'string':
				c = Number(a);
				break;
			case 'number':
				c = a;
				break;
		}

		switch(typeof b) {
			case 'string':
				d = Number(b);
				break;
			case 'number':
				d = a;
				break;
		}

		if (c === undefined || d === undefined) {
			return null;
		}

		return c-d;
		
	}
}
module.exports = Psp;
