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


});

describe('Test suit minus', function () {

	it('5 - 4 = 1', function () {
		expect(psp.minus(5, 4)).to.equal(1);
  });

	it('4 - 5 = -1', function () {
		expect(psp.minus(4, 5)).to.equal(-1);
  });

});
