var express = require('express');
    fs = require('fs');
    require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var Text = new Buffer(1024);
    Text = fs.readFile("index.html");
    var Message = Text.toString('utf-8');
    response.send(Message);
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
