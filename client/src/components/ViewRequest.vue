<template>
<section class="background">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="dashbord"><img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28"></router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item activebackground" href="#">
                       <router-link to="ViewRequest" class="activetext"> View Friend Requests</router-link>
                    </a>
                    <a class="navbar-item" href="#">
                         <router-link to="FindFriends">Find Friends</router-link>
                    </a>
                    <a class="navbar-item" href="#">
                        <router-link to="ViewFriends">View Friends</router-link>
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
    <div class="section container text-center">
        <h2><b><u>View Friend Requests</u></b></h2>
         <div v-for="(item, index) in items" :key="item.message" >       
            <div class="card">
                <div class="card-content">
                    <div class="media">
                    <div class="media-content">
                         <div class="columns">
                            <div class="column is-4">
                                <b>S.No :</b> {{index+1}}<br><br>
                                <b>Email: </b>{{item.FromEmail}}                            
                            </div>
                             <div class="column is-4">
                                <b>First Name: </b>{{item.FromFirstName}}<br><br>
                                <b>Phone No:</b>{{item.FromPhone}}
                            </div>
                             <div class="column is-4">
                             <b>First Name: </b>{{item.FromLastName}}<br><br>
                             <a href="javascript:void(0)"  type="button"  class = "button is-primary is-outlined"  v-on:click="AcceptRequest(item)">Accept</a>&nbsp;&nbsp;<a href="javascript:void(0)" class = "button is-danger is-outlined" v-on:click="DeleteRequest(item)"><u>Delete</u></a>
                            </div>
                         </div>
                       
                    </div>
                    </div>
                </div>
            </div>
            
            <br>
         </div>
         <p v-if="items.length==0" class="has-text-centered">No Data</p>
        <!-- <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>First Name</th>
                    <th><abbr title="Played">Last Name</abbr></th>
                    <th><abbr title="Won">Email</abbr></th>
                    <th><abbr title="Drawn">Phone Num</abbr></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item, index) in items" :key="item.message">
                    <th>{{index+1}}</th>
                    <td>{{item.FromFirstName}} </td>
                    <td>{{item.FromLastName}}</td>
                    <td>{{item.FromEmail}}</td>
                    <td>{{item.FromPhone}}</td>
                    <td><a href="javascript:void(0)"  v-on:click="AcceptRequest(item)"><u>Accept</u></a>,&nbsp;&nbsp;<a href="javascript:void(0)" v-on:click="DeleteRequest(item)"><u>Delete</u></a></td>
                </tr>
                  <tr  v-if="items.length==0">
                    <td colspan="6" class="has-text-centered">No Data</td>
                </tr>
            </tbody>
        </table> -->
    </div>
</section>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },data:()=>({
       searchQuery: null,
        column: null,
        items: null
    }), 
    created(){debugger;
      this.getRequestData();
    },
  methods:{
      getRequestData: function(){
         var id=JSON.parse(sessionStorage.getItem("userData"))._id;
       axios.post("http://localhost:3000/getindivudualRequestsData", {id})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.items=response.data;
                            
            })    
            .catch((errors) => {    
                console.log("Error: "+errors);    
            })
      },
      DeleteRequest: function(data){
          var id=data._id;debugger;
            axios.post("http://localhost:3000/rejectRequest", {id})    
            .then((response) => {    
                debugger;
                 this.$alert("Request Deleted.");
                console.log("Logged in"+JSON.stringify(response)) ;  
                this.items=response.data;
                                
                })    
                .catch((errors) => {    
                    console.log("Error: "+errors);    
                })
         
         //this.rows.$remove(index);
           
      },
       AcceptRequest: function(data){
            var id=data._id;debugger;
            axios.post("http://localhost:3000/acceptRequest", {id})    
            .then((response) => {    
                debugger;
                console.log("Logged in"+JSON.stringify(response)) ;  
                this.$alert("Request Accepted.");
                this.items=response.data;
                this.getRequestData();     
                })    
                .catch((errors) => {    
                    console.log("Error: "+errors);    
                })
            
           
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
    