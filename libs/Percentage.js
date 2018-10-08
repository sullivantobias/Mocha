module.exports = {
   evolution(a, b) {
      if (a == 0) {
         return Infinity;
      }
      const value = (100 * (b - a)) / a;
      return value.toFixed(2);
   },
   wait(time, callback) {
      setTimeout(function() {
         callback(18);
      }, time);
   },
};
