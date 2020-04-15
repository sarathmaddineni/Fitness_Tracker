var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
    FirstName:{type: String},
    LastName:{type: String},
    Email:{type: String},
    Phone: {type: String},
    PassWord:{type: String},
    status:{type: String},
});

var User=mongoose.model("User", UserSchema);
module.exports={User};