const assert = require('assert');
/** declaration of the test with decribe */
describe('first test', function() {
   /** for each test we declare with 'it' */
   it('should do something', function() {
      const a = 10;
      assert.equal(a + 20, 30);
   });
});
