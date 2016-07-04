var request = require('supertest');
var app = require('../app');
var database = require('../db').connecting({
    url: "mongodb://vanga:hello1234@ds011705.mlab.com:11705/currencies",
    dbname: "test",
    collection: "testingCollection",
});

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

describe('Database testing ', function() {
    it('whether SINGLETON pattern really works', function() {
        var cloneDataBase = require('../db').connecting({
            url: "mongodb://vanga:hello1234@ds011705.mlab.com:11705/currencies",
            dbname: "test",
            collection: "testingCollection",
        });
        expect(cloneDataBase).toBe(database);
    });
});

describe('Database testing ', function() {
    var result = [];
    beforeEach(function() {
        database.dropData();
        database.insertData({
            material: 'cupper'
        });
    });

    it('whether data is added to the database', function() {
        database.findData({
            material: 'cupper'
        }, function(result) {
            expect(result).toBeDefined();
            expect(result.length).toBe(1);
        });
    });
});
