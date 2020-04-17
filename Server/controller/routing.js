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

//Uploading fiteness data
router.post('/uploadFitness', function (req, res) {
    var upload=new Models.Uploads();
    upload.From=req.body.id;
    upload.uploaderName=req.body.uploaderName;
    upload.Title=req.body.title;
    upload.Desc=req.body.desc;;
    upload.File=req.body.file;
    upload.Time=req.body.time;
    upload.status=true;
   // console.log("Data: "+upload);
    upload.save((err, doc)=>{
        if(!err){
           // console.log("Saved..!");
            res.send({
                "statusCode":200,
                "msg":"Succussfully sent request..!"
            });
        }else{
            console.log("Error in saving data"+err);
        }
    })
  });
//get all active post
  router.get('/getAllFitnessPosts', function (req, res) {
    Models.Uploads.find({status: true}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Error in saving data"+err);
        }
    })
  });
  //get all Inactive posts data
  router.get('/getAllInactiveFitnessPosts', function (req, res) {
    Models.Uploads.find({status:"InActive"}, (err, doc)=>{
        if(!err){
           // console.log("Inactive Data: "+doc);
            res.send(doc);
        }else{
            console.log("Error in saving data"+err);
        }
    })
  });
  //get indivudual posts data
  router.post('/getIndivudualFitnessPosts', function (req, res) {
console.log("req: "+JSON.stringify(req.body));
// Models.Uploads.remove((err, doc)=>{
//     if(!err){
//         console.log("DOne");
//     }else{
//         console.log("Error");
//     }
// });
// Models.User.remove((err, doc)=>{
//     if(!err){
//         console.log("DOne");
//     }else{
//         console.log("Error");
//     }
// });
// Models.Friends.remove((err, doc)=>{
//     if(!err){
//         console.log("DOne");
//     }else{
//         console.log("Error");
//     }
// });
Models.Friends.find({ $or: [ { To:req.body._id  }, { From:req.body._id  } ] }, (err, doc, async)=>{
        if(!err){
            var data=[];
            for(var i=0;i<doc.length;i++){
                if(doc[i].status=="true"){
                    data.push(doc[i].From);
                    data.push(doc[i].To);
                }
            }
           var uniqueItems = Array.from(new Set(data))
           var postData=[];
           if(data==""){
            uniqueItems=[req.body._id];
           }
           for(var i=0;i<uniqueItems.length;i++){
               console.log("Id: "+uniqueItems[i]);
            Models.Uploads.find({From:uniqueItems[i]}, (err, result, await)=>{
                if(!err){
                    if(result!=''){
                        postData.push(result);
                    }
                }else{
                    console.log("Error"+ err);
                }
            });
           }
           setTimeout(function(){ 
            console.log("FinalData: "+postData);
               res.send(postData);
             }, 500);           
        }else{
            console.log("Error in saving data"+err);
        }
    })
  });



module.exports= router;