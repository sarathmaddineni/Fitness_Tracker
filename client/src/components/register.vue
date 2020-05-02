<template>
        <section class="hero is-fullheight section">
 <div class="hero-body">
 <div class="container has-text-centered">
 <div class="box">
 <form action="" method="post">
 <h1 class="title">Create Account</h1>
<div class="field is-horizontal">
 <div class="field-body">
 <div class="field">
 <div class="control">
 <label class="label">First Name</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="FirstName" type="text" value="" />
 </div>
</div>
<div class="field">
 <div class="control">
 <label class="label">Last Name</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="LastName" type="text" value="" />
 </div>
</div>
</div>
</div>
<div class="field is-horizontal">
 <div class="field-body">
 <div class="field">
 <div class="control">
 <label class="label">Height</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="height" type="text" value="" />
 </div>
</div>
<div class="field">
 <div class="control">
 <label class="label">Weight</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="weight" type="text" value="" />
 </div>
</div>
</div>
</div>
<div class="field is-horizontal">
 <div class="field-body">
 <div class="field">
 <div class="control">
 <label class="label">Email</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="Email" type="text" value="" />
 </div>
</div>
<div class="field">
 <div class="control">
 <label class="label">Phone Number</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="PhoneNumber"  type="text" value="" />
 </div>
</div>
</div>
</div>
<div class="field is-horizontal">
 <div class="field-body">
 <div class="field">
 <div class="control">
 <label class="label">Password</label>
 <input class="input is-info" id="txtfname" name="txtfname"  ref="Password" type="password" value="" />
 </div>
</div>
<div class="field">
 <div class="control">
 <label class="label">Confirm Password</label>
 <input class="input is-info" id="txtfname" name="txtfname" ref="ConfirmPassword" type="password" value="" />
 </div>
</div>
</div>
</div>
<div class="field is-horizontal">
 <div class="field-body">
 <div class="field">
 <div class="control">

 </div>
</div>
<div class="field">
 <div class="control">
 <input class="button is-info is-fullwidth" id="txtfname" name="txtfname"  v-on:click="Register" type="button" value="Sign Up" />
 </div>
</div>
 <div class="text-right">
                <p class="text-grey-dark text-sm">Already have an account? <a href="#" class="text-blue font-bold"><router-link to="login">LogIn here</router-link></a>.</p>
            </div>
<div class="field">
 <div class="control">

 </div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
</template>
<style scoped lang="scss">
.section {
  background-image: url('.././assets/images/fitness.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
   background-size: cover;
}
</style>
<script>
import axios from "axios";
export default {
  methods:{
    Register(){
      var FirstName=this.$refs.FirstName.value;
      var LastName=this.$refs.LastName.value;
      var Height=this.$refs.height.value;
      var Weight=this.$refs.weight.value;
      var Email=this.$refs.Email.value;
      var PhoneNumber=this.$refs.PhoneNumber.value;
      var Password=this.$refs.Password.value;
      var ConfirmPassword=this.$refs.ConfirmPassword.value;
       if(FirstName==""){
        this.$alert("Please enter First Name.");
        return false;
      }
      if(LastName==""){
        this.$alert("Please enter Last Name.");
        return false;
      }
       if(Height==""){
        this.$alert("Please enter height of the person.");
        return false;
      }
      if(Weight==""){
        this.$alert("Please enter weight of the person.");
        return false;
      }
       if(Email==""){
        this.$alert("Please enter email.");
        return false;
      }
      if(PhoneNumber==""){
        this.$alert("Please enter Phone Number.");
        return false;
      } 
      if(Password==""){
        this.$alert("Please enter password.");
        return false;
      }
      if(ConfirmPassword==""){
        this.$alert("Please enter confirm password.");
        return false;
      }
      if(Password!=ConfirmPassword){
        this.$alert("Password and Confirm Password should be same.");
        return false;
      }
      let data = {    
              FirstName:FirstName,
              LastName:LastName,
              Height:Height,
              Weight:Weight,
              Email:Email,
              PhoneNumber:PhoneNumber,
              Password:Password  
           }    
      axios.post("http://localhost:3000/Register", data)    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
               debugger;
               var res=response;
               if(res.data.statusCode==200){
                   this.$alert("User saved successfully...!");
                   this.$router.push({path: '/login'});
               }
                if(res.data.statusCode==500){
                   this.$alert(JSON.stringify(res.data.msg.errmsg));
                  // this.$router.push({path: '/login'});
               }
               else{
                   this.$alert("Error in saving user.");
               }                   
            })    
            .catch((errors) => {    
                console.log("Cannot log in")    
            }) 
    }
  }
}
</script>