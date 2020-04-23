<template>
<section>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="dashbord"> <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28"></router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#">
                       <router-link to="ViewRequest"> View Friend Requests</router-link>
                    </a>
                    <a class="navbar-item" href="#">
                       <router-link to="FindFriends"> Find Friends</router-link>
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
        <div class="columns">
            <div class="column is-6">
                <h2><b><u>Find Friends</u></b></h2>
            </div>
             <div class="column is-6">
                 <div class="field">
                    <div class="control">
                        <!-- <input class="input is-info" type="text" v-model="searchQuery" placeholder="Search..."> -->
                    </div>
                 </div>
            </div>
        </div>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
                    <td>{{item.FirstName}} </td>
                    <td>{{item.LastName}}</td>
                    <td>{{item.Email}}</td>
                    <td>{{item.Phone}}</td>
                    <td><a href="javascript:void(0)"  v-on:click="addFriend(item)"><u>Add Friend</u></a></td>
                </tr>
                <tr  v-if="items.length==0">
                    <td colspan="6" class="has-text-centered">No Data</td>
                </tr>
            </tbody>
        </table>
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
  data:()=>({
       searchQuery: null,
        column: null,
        items:  null
    }),
  methods:{
      addFriend: function(data){
        debugger;
        var userData=JSON.parse(sessionStorage.getItem("userData"));
        axios.post("http://localhost:3000/addFriend", {data, userData})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ; 
                this.$alert("Request Sent."); 
              // this.items=response;
            })    
            .catch((errors) => {    
                console.log("Error: "+errors);    
            })
      },
      sendRequest: function(index){
          this.$alert("Request Sent.");           
      }
  },
created(){
    var id=JSON.parse(sessionStorage.getItem("userData"))._id;
       axios.post("http://localhost:3000/allUserData", {id})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.items=response.data;
                            
            })    
            .catch((errors) => {    
                console.log("Error: "+errors);    
            })
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
    