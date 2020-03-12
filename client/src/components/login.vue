<template>
    <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-4-widescreen box">
          <!-- <form action="" class=""> -->
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g.. xxxxxx@gmail.com" class="input is-info" ref="emailInput" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input is-info" ref="passInput" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-info" v-on:click="login">
                Login
              </button>
            </div>
             <div class="text-center">
                <p class="text-grey-dark text-sm">Don't have an account? <a href="#" class="text-blue font-bold"><router-link to="register">Create an Account</router-link></a>.</p>
            </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped lang="scss">
.is-fullheight {
  background-image: url('.././assets/images/fitness.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
   background-size: cover;
}
</style>
<script>
export default {
    methods: {
    login: function() {
      debugger;
      var emailInput=this.$refs.emailInput.value;
      var passInput=this.$refs.passInput.value;
      var error=0;
      var logindata=[
        {"email": "sample@gmail.com", "password":"12345"},
        {"email": "test@gmail.com", "password":"12345"},
        {"email": "fitness@gmail.com", "password":"12345"}
      ]
      if(emailInput==""){
        this.$alert("Please enter email.");
        this.$refs.emailInput.$el.focus();
        return false;
      }
      if(passInput==""){
        this.$alert("Please enter password.");
        this.$refs.passInput.$el.focus();
        return false;
      }
      for(var i=0;i<logindata.length;i++){
        if(emailInput==logindata[i].email){
          if(passInput==logindata[i].password){
              this.$router.push({path: '/dashbord'});
              return false;
          }
        }else{
          error++;
        }
      }
      if(error>0){
        this.$alert("User not found.");
      }
    }
  }
}
</script>
