<template>
<section class="background">
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
                       <router-link to="FindFriends">  Find Friends</router-link>
                    </a>
                    <a class="navbar-item activebackground" href="#">
                        <router-link to="ViewFriends" class="activetext">View Friends</router-link>
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
        <h2><b><u>View Friends</u></b></h2>
         <div v-for="(item, index) in items" :key="item.message" >       
            <div class="card">
                <div class="card-content">
                    <div class="media">
                    <div class="media-content">
                         <div class="columns">
                            <div class="column is-4">
                                <b>S.No :</b> {{index+1}}<br><br>
                                <p v-if="RoleID!=item.From"><b>Email: </b>{{item.FromEmail}}  </p>
                                <p v-if="RoleID==item.From"><b>Email: </b>{{item.ToEmail}}       </p>                      
                            </div>
                             <div class="column is-4">
                               <p v-if="RoleID!=item.From"> <b>First Name: </b>{{item.FromFirstName}}<br><br> </p>
                                <p v-if="RoleID!=item.From"><b>Phone No:</b>{{item.FromPhone}} </p>
                                <p v-if="RoleID==item.From">  <b>First Name: </b>{{item.ToFirstName}}<br><br> </p>
                                <p v-if="RoleID==item.From"><b>Phone No:</b>{{item.ToPhone}} </p>
                            </div>
                             <div class="column is-4">
                             <p v-if="RoleID!=item.From"><b>Last Name: </b>{{item.FromLastName}}<br><br></p>     
                             <p v-if="RoleID==item.From"><b>Last Name: </b>{{item.ToLastName}}<br><br> </p>                            
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.message">
                    <th>{{index+1}}</th>
                    <td v-if="RoleID!=item.From">{{item.FromFirstName}} </td>
                    <td v-if="RoleID!=item.From">{{item.FromLastName}}</td>
                    <td v-if="RoleID!=item.From">{{item.FromEmail}}</td>
                    <td v-if="RoleID!=item.From">{{item.FromPhone}}</td>
                    <td v-if="RoleID==item.From">{{item.ToFirstName}} </td>
                    <td v-if="RoleID==item.From">{{item.ToLastName}}</td>
                    <td v-if="RoleID==item.From">{{item.ToEmail}}</td>
                    <td v-if="RoleID==item.From">{{item.ToPhone}}</td>
                </tr>
                 <tr  v-if="items.length==0">
                    <td colspan="5" class="has-text-centered">No Data</td>
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
  },
   data:()=>({
       searchQuery: null,
        column: null,
        items: null,
        RoleID:JSON.parse(sessionStorage.getItem("userData"))._id
    }),
  created(){debugger;
       var id=JSON.parse(sessionStorage.getItem("userData"))._id;
       axios.post("http://localhost:3000/getindivudualFriendsData", {id})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.items=response.data;
                            
            })    
            .catch((errors) => {    
                console.log("Error: "+errors);    
            })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
    