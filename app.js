var express = require('express')
var app = express()

var exports = module.exports = {};

app.get('/', function(req, res) {
  res.send('Hello World');
})

var server = app.listen(3000, '0.0.0.0', function() {
  console.log('App is listening on 0.0.0.0 port 3000');
})

exports.closeServer = function() {
  server.close();
};
