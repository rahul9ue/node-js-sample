var express = require('express');
var fs = require('fs');
var buffer = new Buffer(100);
fs.readFileSync('index.html', 'utf8', function (err,data) {
if(err)
{
return console.log(err);
}
buffer.write(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
