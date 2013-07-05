var express = require('express');
var fs = require('fs');
var Text = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    Text = new Buffer(1024);
    Text = fs.readFile("index.html");
    var Message = Text.toString();
    response.send(Message);
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
