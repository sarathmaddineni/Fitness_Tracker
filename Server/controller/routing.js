var express=require("express");
const router=express.Router();
var mongoose=require("mongoose");
var Models=require("../models/fitness.model");


//register user
router.post('/Register', function (req, res) {
    //  console.log("Req: "+JSON.stringify(req.body));
      var user=new Models.User();
      user.FirstName=req.body.FirstName;
      user.LastName=req.body.LastName;
      user.Email=req.body.Email;
      user.Phone=req.body.PhoneNumber;
      user.PassWord=req.body.Password;
      user.status=true
  console.log(user);
  user.save((err, doc)=>{
      if(!err){
         // console.log("Saved..!");
          res.send({
              "statusCode":200,
              "msg":"Succussfully saved user..!"
          });
      }else{
          console.log("Error in saving data"+err);
      }
  })
  
  });

//login user
router.post('/Login', function (req, res) {
    // console.log(req.body.email);
    // console.log(req.body.password);
    Models.User.findOne({"Email":req.body.email}, (err, doc)=>{
        if(!err){
           var response=doc;
           if(doc){
               if(response.Email==req.body.email && response.PassWord==req.body.password){
                   console.log(response);
                    if(response.status=='true'){
                        res.send({
                            "statusCode":200,
                            "userData":response,
                            "msg":"User LoggedIn..!"
                        })
                    }else{
                        res.send({
                            "statusCode":205,
                            "userData":response,
                            "msg":"You'r account is in InActive mode. Please contact admin to active your acoount."
                        })
                    }                   
               }else{
                    res.send({
                        "statusCode":203,
                        "msg":"Password Incorrect..!"
                    })
               }
           }else{
                res.send({
                    "statusCode":400,
                    "msg":"User User Not Found..!"
                })
           }
        }else{
            console.log("Err: "+err);
        }
    })

});



router.post('/allUserData', function (req, res) {
    Models.User.find({_id: { $nin: req.body.id }}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Err: "+err);
        }
    })

});
//get all Active Users
router.get('/getAllActiveUsers', function (req, res) {
    Models.User.find({status: true}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Err: "+err);
        }
    })

});
module.exports= router;