<template>
  <section class="background">
       <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
      <div class="navbar-brand">
         <router-link to="AdminDashboard"> <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28"></router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item activebackground" href="#">
              <router-link to="ActivatePost" class="activetext">Activate Posts</router-link>
            </a> 
            <a class="navbar-item" href="#">
              <router-link to="ManageUsers"> Manage Accounts</router-link>
            </a>
            <a class="navbar-item" href="#">
                <router-link to="ActivateUsers"> Activate Users</router-link>
            </a>
        </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <figure class="image is-32x32">
              <img class="is-rounded" src=".././assets/images/profile.jpg">
            </figure>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <router-link to="login">Log Out</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav> 
    <div class="container">
     <div class="columns">
      <div class="column is-8">
        <div class="card">
     
      <div class="card-content">
        <div class="content">
          <span  v-for="item in postData" :key="item.message">
          <div class="media">
          <div class="media-left is-4">
            <figure class="image is-64x64">
              <img v-bind:src="item.File" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content is-6">
            <p class="title is-4"> {{item.Title}}</p>
            <p class="subtitle is-6">{{item.Desc}}</p>
              <div class="columns">
            <div class="column is-12">
              <b>Weight Loss :</b> {{item.calloss}}
            </div>          
          </div>
          <div class="columns">
              <div class="column is-12">
             <b>Exercise Time:</b> {{item.exTime}}
            </div>
          </div>
          </div>
          <div class="is-2">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <!-- <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> -->
                 <span class="icon is-small">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
                <!-- </button> -->
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                   <div class="dropdown-item dropclass"  v-on:click="ActivatePost(item)" style="border-bottom:1px solid #ccc">
                    Activate
                  </div>
                   <div class="dropdown-item dropclass"  v-on:click="Remove(item)">
                    Remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="columns">
            <div class="column is-6">
              {{item.uploaderName}}
            </div>
            <div class="column is-6 has-text-right">
              <time datetime="2016-1-1">{{item.Time  |  moment("MMMM Do YYYY, h:mm:ss a")}}</time>
            </div>
          </div>
          <hr>
          </span>
        </div>
      </div>
    </div>
      </div>
      <div class="column is-4">
        <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src=".././assets/images/profile.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-4">
              <b>Name</b>
            </div>
            <div class="column is-8">
              Admin
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Email</b>
            </div>
            <div class="column is-8">
              fitness@gmail.com
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Phone</b>
            </div>
            <div class="column is-8">
              123456
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div> 
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
        profile:null,
        fileBase64: null,
        postData:  null
      }
    },
    created(){    
          this.getAllInActivePosts();  
    },
    methods:{
      getAllInActivePosts: function() {  
           this.$loading(true)
          axios.get("http://localhost:3000/getAllInactiveFitnessPosts")    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.postData=response.data;   
                 this.$loading(false)               
            })    
            .catch((errors) => { 
                this.$loading(false)    
                console.log("Server Side Error");
            })
      },
      ActivatePost: function(data){
         // alert("Id: "+data._id);
         this.$loading(true) 
           axios.post("http://localhost:3000/activatePost", {data})    
           .then((response) => {    
               this.$loading(false) 
               console.log("Logged in"+JSON.stringify(response)) ;  
                //this.postData=response.data; 
                 this.$alert("Post actived successfulyy.");
                this.getAllInActivePosts();                 
            })    
            .catch((errors) => {    
                this.$loading(false) 
                console.log("Server Side Error");
            });
      },
      Remove: function(data){
          this.$loading(true) 
         // alert("Id: "+data._id);
           axios.post("http://localhost:3000/deletePost", {data})    
           .then((response) => {  
               this.$loading(false)   
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.$alert("Post has been deleted.");
                this.getAllInActivePosts();                    
            })    
            .catch((errors) => {   
                this.$loading(false)  
                console.log("Server Side Error");
            })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropclass:hover{
  cursor: pointer;
}
</style>
