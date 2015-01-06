var canned = require('canned');
var  http = require('http');
var opts = { cors: true, logger: process.stdout };
var _ = require('underscore');

can = canned('.', opts)

var express = require('express');
var app = express();

var PORT=5000;

app.use(function(req, res, next) {
  var delay = parseFloat(req.headers['x-delay']);
  if (delay) {
    setTimeout(function() {
      next();
    }, delay);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/static'));
app.use(can);

http.createServer(app).listen(PORT, function() {
  console.log('Server listens at port:', PORT);
})
