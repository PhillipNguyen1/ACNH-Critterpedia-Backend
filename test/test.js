var assert = require('chai').assert;
var request = require('supertest');
// require = require('really-need');

// Unit test example
describe('indexOf()', function () {
  it('should return -1 when the value is not present', function () {
    var arr = [1, 2, 3];
    var isFound = arr.indexOf(4);
    assert(isFound, -1);
  });
});

// Integration test example. Requires application to be built first to test
xdescribe('GET /', function () {
  var server;
  beforeEach(function () {
    delete require.cache[require.resolve('../app')]; // Removes cache to get a fresh instance of the server
    server = require('../app');
  });
  afterEach(function () {
    server.close(); // closes the server after every test.
  });

  it('respond with Hello World!', function (done) {
    request(server).get('/').expect('Hello World!', done);
  });
});
