var express = require('express');
    fs = require('js');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var Text = fs.readFile("index.html").toString('utf-8');
    response.send(Text);
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
