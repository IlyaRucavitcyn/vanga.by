var fs = require('fs');
var mongojs = require('mongojs');

module.exports = (function() {
    var currentData = mongojs('mongodb://localhost:27017/currency', ['currencies']).currencies;

    function create(dataNew) {
        currentData.insert(dataNew);
    };

    function all(callback) {
        currentData.find(function(err, doc) {
            if (err) {
                console.log('An error occured');
                return;
            };
            if (callback) {
                callback(doc);
            }
        });
    };

    return {
        create: create,
        all: all,
        setStorage: function(path) {
            var self = this;
            filepath = path;
            return self;
        }
    };

}());
