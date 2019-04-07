
var http = require('http');
 
http.createServer(function (request, response) {
  response.end('Hello World\n');
}).listen(3000, "127.0.0.1",function(){
    console.log("Server running at http://localhost:3000/");
});
 
