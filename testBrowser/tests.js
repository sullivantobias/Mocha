const expect = chai.expect;

describe('Twitter', function() {
   beforeEach(function() {
      this.$test = $('<div></div>');
      $('body').append(this.$test);
      this.twitter = new Twitter();
   });

   it('should not have text', function() {
      this.$test.append(
         '<a href="#" data-twitter="https://www.google.com/">Loading</a>'
      );
      this.twitter.twitterText();
      expect(this.$test.text()).to.be.equal('');
   });

   it('should be a number = 1', function() {
      this.twitter.simpleTest();
      expect(this.twitter.simpleTest()).to.be.a('number');
      expect(this.twitter.simpleTest()).to.be.equal(2, 'wrong number');
   });

   afterEach(function() {
      this.$test.remove();
   });
});
