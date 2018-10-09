module.exports = {
   evolutionForChai(a, b) {
      if (a == 0) {
         return Infinity;
      }
      return (100 * (b - a)) / a;
   },
   a: 2,
};
