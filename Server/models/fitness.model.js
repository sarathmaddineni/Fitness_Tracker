var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
    FirstName:{type: String},
    LastName:{type: String},
    Height:{type: String},
    Weight:{type: String},
    Email:{type: String, unique: true},
    Phone: {type: String},
    PassWord:{type: String},
    status:{type: String},
});

var uploads=new mongoose.Schema({
    From:{type: String},
    uploaderName:{type: String},
    Title:{type: String},
    Desc:{type: String},
    File:{type: String},
    Time:{type: String},
    status:{type: String}
});
var FriendsSchema=new mongoose.Schema({
    From:{type: String},
    To:{type: String},
    status:{type: String},
    FromFirstName:{type: String},
    FromLastName:{type: String},
    FromEmail:{type: String},
    FromPhone: {type: String},
    ToFirstName:{type: String},
    ToLastName:{type: String},
    ToEmail:{type: String},
    ToPhone: {type: String},
});
var User=mongoose.model("User", UserSchema);
var Uploads=mongoose.model("Uploads", uploads);
var Friends=mongoose.model("Friends", FriendsSchema);
module.exports={User, Uploads, Friends};