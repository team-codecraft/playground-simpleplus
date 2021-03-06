const Psp = require('../src/index.js');
const { expect } = require('chai');
let psp = new Psp();

describe('Test suit plus', function () {


  it('4 + 5 = 9', function () {
		expect(psp.plus(4, 5)).to.equal(9);
  });

	it('5 + 4 = 9', function () {
		expect(psp.plus(5, 4)).to.equal(9);
  });

	it('A + 4 = false', function () {
		expect(psp.plus('A', 4)).to.be.false;
  });

	it('3 + 3 + 4 = 10', function () {
		expect(psp.plus(3, 3, 4)).to.equal(10);
  });

	it('1 + 1 + 1 + 1 = 4', function () {
		expect(psp.plus(1, 1, 1, 1)).to.equal(4);
  });

	it('null = false', function () {
		expect(psp.plus()).to.be.false;
  });


});

describe('Test suit minus', function () {

	it('5 - 4 = 1', function () {
		expect(psp.minus(5, 4)).to.equal(1);
  });

	it('4 - 5 = -1', function () {
		expect(psp.minus(4, 5)).to.equal(-1);
  });
  
	it('"a" - 5 = false', function () {
		expect(psp.minus("a", 5)).to.equal(false);
  });
  
	it('4 - 5 - 3 = -4', function () {
		expect(psp.minus(4, 5, 3)).to.equal(-4);
  });
  
	it('4 - 5 - 3 - 10 = -14', function () {
		expect(psp.minus(4, 5, 3, 10)).to.equal(-14);
  });

	it('A - 4 = false', function () {
		expect(psp.minus('A', 4)).to.be.false;
  });

	it('3 - 3 - 4 = -4', function () {
		expect(psp.minus(3, 3, 4)).to.equal(-4);
  });

	it('1 - 1 - 1 - 1 = -2', function () {
		expect(psp.minus(1, 1, 1, 1)).to.equal(-2);
  });

	it('1 - A - 1 - 1 = false', function () {
		expect(psp.minus(1, 'A', 1, 1)).to.equal(false);
	});

});
