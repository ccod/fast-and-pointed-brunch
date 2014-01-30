var
  path = require('path'),
  request = require('request'),
  expect = require('expect.js'),
  server = require(path.join(__dirname, '..', '..', 'server', 'server.js')),
  PORT = 3434;

before(function(done) {
  server.startServer(PORT);
  return done();
});

describe("server API", function() {
  describe("/name", function() {

    it("returns a dummy name", function(done) {
      request("http://localhost:" + PORT + "/api/name", function(error, response, body) {
        expect(JSON.parse(body).name).to.eql("Bob");
        done();
      });
    });
  });
});
