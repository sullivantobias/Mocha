const Percentage = require('../libs/Percentage');
const assert = require('assert');

describe('Percentage', function() {
   describe('#evolution', function() {
      /** first test */
      it('should make an evolution', function() {
         assert.equal(Percentage.evolution(100, 200), 100);
         assert.equal(Percentage.evolution(100, 300), 200);
         assert.equal(Percentage.evolution(100, 0), -100);
      });
      /** second test more specific */
      it('should handle divide by 0', function() {
         assert.equal(Percentage.evolution(0, 100), Infinity);
      });
      /** third test more specific */
      it('should round values', function() {
         assert.equal(Percentage.evolution(30, 100), 233.33);
      });
   });
});
