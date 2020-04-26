const assert = require('chai').assert;
var request = require('supertest');
var app = require('../app.js');

// Unit test example
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      const arr = [1, 2, 3];
      const isFound = arr.indexOf(4);
      assert(isFound, -1);
    });
  });
});

// Integration test example. Requires application to be built first to test
describe('GET /', function () {
  it('respond with Hello World!', function (done) {
    // navigate to root and check the response is 'hello world'
    request(app).get('/').expect('Hello World!', done);
  });
});
