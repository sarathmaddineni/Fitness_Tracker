var mongoose=require("mongoose");
var url = "mongodb://localhost:27017/User";
 
// A Client to MongoDB
//var MongoClient = require('mongodb').MongoClient;
 
// Make a connection to MongoDB Service
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, function(err, db) {
  if (err) throw err;
  console.log("Connected to MongoDB!");
  //db.close();
});

require("./fitness.model");