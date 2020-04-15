var express=require("express");
var bodyParser=require('body-parser');
var router=require("./controller/routing")
var mongoose=require("./models/mongoose");
var shema=require("./models/fitness.model");
var cors = require('cors')
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use("/", router);
app.listen(3000, ()=>{
    console.log("Server running with port number 3000.");
})