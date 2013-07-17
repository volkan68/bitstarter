var express = require('express');
var fs = require('fs');
var buff = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buff = fs.readFileSync("./index.html");
    var Text = buff.toString('utf8');
    response.send(Text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
