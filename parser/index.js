let osmosis = require("osmosis");
let fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

osmosis
  .get("https://jasmine.ua/en/collections/intimo")
  .find(".products__grid")
  .set({
    // title: [".cat-product .cat-product__title"]

    title: [".cat-product  .cat-product__title"],
    subtitle: [".cat-product  .cat-product__sub-title"],
    info:[".cat-product .cat-product__info-wrapper .cat-product__info .price-box--grid-item .price-box__price"]
  })
  .data(function(listing) {
    // console.log(listing);
    let data = {},
      titles = {};
    // for (let i = 0; i < listing.related.length; i++) {

    for (let i = 0; i < listing.title.length; i++) {
      titles[i] = JSON.stringify({"title": listing.title[i],
            "subtitle" : listing.subtitle[i],
            "info":listing.info[i]});

      // titles[i] = listing.title[i];

      // titles.title = listing.title[i];
      // title.subtitle = listing.subtitle[i];
      // titles.info = listing.info[i];
    }

    data.pants = titles;
    console.log(data);
    fs.appendFileSync("index.html", JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
    mongoClient.connect(function(err, client) {
      const db = client.db("Parser_el");
      const collection = db.collection("underwear");
      collection.insertOne(data, function(err, result) {
        if (err) {
          return console.log(err);
        }
        console.log(result.ops);
        client.close();
      });
    });
  });
