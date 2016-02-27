var request = require('supertest');
var app = require('../app');

describe("Localhost server", function() {
  describe("GET /", function() {
    it("returns status code", function(done) {
      request(app).get('/')
        .expect(200, done);
      });
      it("returns status code", function(done) {
        request(app).get('/123')
          .expect(function(res){
            // console.log(res.status);
            if(res.status === 200) throw new Error("The server status is wrong!!!");
          })
          .end(done)
      });
    });
  });
