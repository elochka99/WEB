
var express = require('express');
var app = express();

app.get("/vasia", function(req, res) {
	res.status(200).send("Hello, world!");
})

app.get("/*", function(req, res) {
	res.status(200).send(req.url);
})


app.listen('8000', 'localhost', function() {
  console.log('listen on port 8000');
})


 