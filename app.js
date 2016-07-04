var express = require('express'),
    storage = require('./Models/currency'),
    fs = require('fs');

var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.set('views', './Views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/send', function(request, response) {
    storage.create(request.body);
    response.send('В базу данных положили '+request.body.currency+' по '+request.body.rate+' бел.рублей');
});

app.get('/build', function(request, response) {
    storage.all(function(opt){
      response.send(JSON.stringify(opt));
    })
});

module.exports = app;
