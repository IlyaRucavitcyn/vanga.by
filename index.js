
var app = require('./app');

// exports.closeServer = function(){
//   console.log('Node app is closed on port', app.get('port'));
//   server.close();
// };
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
