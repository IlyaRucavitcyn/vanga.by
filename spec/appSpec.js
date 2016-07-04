var request = require('supertest');
var app = require('../app');

describe("Server requesting GET '/'", function() {
    it("returns 200 status", function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it("returns not 200 status", function(done) {
        request(app)
            .get('/123')
            .expect(function(res) {
                if (res.status === 200) throw new Error("The server status is wrong!!!");
            })
            .end(done)
    });
});
