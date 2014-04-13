var canned = require('canned');
var  http = require('http');
var opts = { cors: true, logger: process.stdout };

can = canned('.', opts)

var express = require('express');
var app = express();


// app.use(function(req, res, next) {
//   setTimeout(function() {
//   next();
//   }, 3000);
// });

app.use(express.static(__dirname + '/static'));
app.use(can);

http.createServer(app).listen(5000)
