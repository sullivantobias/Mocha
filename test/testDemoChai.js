const Percentage = require('../libs/PercentageForChai');

require('chai').should();
const expect = require('chai').expect;

describe('Percentage', function() {
   describe('#evolution', function() {
      /** first test */
      it('should make an evolution', function() {
         Percentage.evolutionForChai(100, 200).should.be.equal(100);
         Percentage.evolutionForChai(100, 300).should.be.equal(200);
      });
      it('should be a function', function() {
         expect(Percentage.evolutionForChai).to.be.a('function');
      });
      it('should be a variable', function() {
         expect(Percentage.a).to.be.a('number');
      });
   });
});
