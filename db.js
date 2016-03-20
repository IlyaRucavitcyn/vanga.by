module.exports = (function() {
    var mongojs = require('mongojs'),
        connection,
        collection,
        self = this;

    function setConnection(obj) {
        var db = mongojs(obj.url + obj.dbname, [obj.collection]);
        collection = obj.collection;
        return db;
    };

    function insertData(data) {
        connection[collection].insert(data);
    };

    function findData(data, done) {
        var result = [];
        connection[collection].find(data, function(err, docs) {
            if (err) {
                console.log('Error');
                return;
            } else if (docs.length !== 0) {
                console.log('The document has been found');
                docs.forEach(function(item) {
                    result.push(item);
                });
                if (done) {
                    done(result);
                }

            } else {
                console.log('There is no such information');
                if (done) {
                    done(result);
                }
            }
        });
    };

    function dropData() {
        connection[collection].drop();
    };

    return {
        setConnection: setConnection,
        insertData: insertData,
        findData: findData,
        dropData: dropData,
        connecting: function(obj) {
            var self = this;

            if (connection) {
                return self;
            } else {
                connection = setConnection(obj);
                return self;
            }
        }
    };
}());
