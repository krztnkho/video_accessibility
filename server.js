
var express = require('express');
        //path=require('path');
var app = express();



app.use(express.static(__dirname + '/'));




// curl localhost:9090
app.get('/', function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();});
//logging in
app.listen(8000, function () {
        console.log('App listening on localhost:8000');
});