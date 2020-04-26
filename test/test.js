var assert = require('chai').assert;

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      const arr = [1, 2, 3];
      const isFound = arr.indexOf(4);
      assert(isFound, -1);
    });
  });
});
