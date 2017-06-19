var request = require("request");
var helloWorldApp = require("../app.js");
var base_url ="http://localhost:3000/"

describe("Hello Universe Server Spec", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
        request(base_url, function(error, response, body) {
          // TODO: ADD fix for error or request exception
          // expect(error).toBe(null); doesnt seem to work. Using --captureExceptions when running jasmine-node

          expect(response.statusCode).toBe(200);
          done();
        });
    });
    it("returns Hello Universe", function(done) {
      request(base_url, function(error, response, body) {
        expect(body).toEqual('Hello Universe');

        // Closing server from app.js
        console.log('Closing server..');
        helloWorldApp.closeServer();
        done();
      })
    } )
  });
});
