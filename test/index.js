const Psp = require('../src/index')

const assert = require('chai').assert;
const expect = require('chai').expect


describe('Test suit', function () {
  it('should be ok', function (done) {
    done();
  });

  it("4 - 5 = -1", () => {
    expect(Psp.minus(4,5)).to.equal(-1);
  })
});
