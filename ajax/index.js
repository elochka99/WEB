// подключение express
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
const urlencodedParser = bodyParser.urlencoded({extended: false});
var collection = null;
mongoClient.connect(function(err, client) {
    const db = client.db("Parser_el");
    collection = db.collection("underwear");

});



const app = express();
app.use('/js', express.static('publick/js'));
app.get("/", function(request, response){
    response.sendFile(__dirname + "/publick/1.html");
});

app.get("/get-data", function(request, response){
    collection.find().toArray(function(err, results){
        console.log(results[0]['pants']);
        response.send(results[0]['pants']);
    });

});
app.post("/add-data", urlencodedParser ,function(request, response){
    console.log(request.body['rezult']);
    collection.update({'code':"1"}, {'$push': {'pants': request.body['rezult']}});
    response.send("ok")
});
app.listen(8000);

