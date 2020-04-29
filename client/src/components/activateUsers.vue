<template>
<section>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
               <router-link to="AdminDashboard"> <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28"></router-link>
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
                         <router-link to="ActivatePost">Activate Posts</router-link>
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
    <div class="section container text-center">
        <h2><b><u>Manage Users</u></b></h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Num</th>
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
                    <td>
                         <a href="javascript:void(0)" type="button" v-on:click="activeUser(item)" class = "button is-primary is-outlined">
                            <span>Activate</span>
                            <span class = "icon is-small">
                                <i class = "fas fa-check"></i>
                            </span>
                        </a>&nbsp;
                        <a href="javascript:void(0)" type="button" v-on:click="deleteUser(item)" class = "button is-danger is-outlined">
                            <span>Delete</span>
                            <span class = "icon is-small">
                                <i class = "fas fa-trash"></i>
                            </span>
                        </a>
                    </td>
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
        items: null
    }),
   created(){       
        this.getAllUser();
    },
    methods:{
        getAllUser:function(){
            this.$loading(true)
            axios.get("http://localhost:3000/getAllInActiveUsers")    
            .then((response) => {  
                 this.$loading(false)
                //console.log(response);
                this.items=response.data;
              
                })    
                .catch((errors) => {  
                    this.$loading(false) 
                    console.log("Error: "+errors);    
                })
        },
        activeUser: function(data){
            this.$loading(true)
            axios.post("http://localhost:3000/activeUser", {data})    
            .then((response) => {  
                //console.log(response);
                 this.$alert("User actived successfully.");
                 this.$loading(false)
                 this.getAllUser();
                })    
                .catch((errors) => {  
                    this.$loading(false)  
                    console.log("Error: "+errors);    
                })
        },
         deleteUser: function(data){
             this.$loading(true)
             axios.post("http://localhost:3000/deleteUser", {data})    
            .then((response) => {  
                //console.log(response);
                 this.$alert("User has been deleted.");
                this.$loading(false)
                 this.getAllUser();
                })    
                .catch((errors) => { 
                    this.$loading(false)   
                    console.log("Error: "+errors);    
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
