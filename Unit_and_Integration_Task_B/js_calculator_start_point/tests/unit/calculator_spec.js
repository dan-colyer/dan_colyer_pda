var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // - calculator.add()
  it('it should add number to the previous total', function () {
    calculator.add(2);
    calculator.operatorClick();
    calculator.add(5);
    assert.equal(calculator.runningTotal, 7);
  });

  // - calculator.subtract()
  it('it should subtract the number with previous total', function () {
    calculator.add(9);
    calculator.operatorClick();
    calculator.subtract(1);
    assert.equal(calculator.runningTotal, 8);
  });

  // - calculator.multiply()
  it('it should multiply a number with previous total', function() {
    calculator.add(5);
    calculator.operatorClick();
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 25)
  });

  // - calculator.divide()
  it('it should divide a number with previous total', function(){
    calculator.add(24);
    calculator.operatorClick();
    calculator.divide(8);
    assert.equal(calculator.runningTotal, 3)
  });

  // - calculator.numberClick()
  it('it should click the number', function(){
    calculator.numberClick(10)
    assert.equal(calculator.runningTotal, 10)
  });

  // - calculator.operatorClick()
  it('it should get back the clicked operator', function(){
    calculator.numberClick(6)
    calculator.operatorClick('+');
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 11)
  });

  // - calculator.clearClick()
  it('it should clear the total;', function(){
    calculator.numberClick(3);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  });

});
