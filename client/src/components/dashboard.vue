<template>
    <section class="background">
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
      <div class="navbar-brand">
          <router-link to="dashbord"> <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28"></router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
      <div class="columns">
      <div class="column is-4">
        <div class="card">
    
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h2 class="title is-3">Upload your Exercise</h2>
            
            <div class="field">
      <label class="label">Title of Exercise</label>
      <div class="control">
        <input class="input is-info"  type="text" placeholder="Title of Exercise">
         
        
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea is-info"  ref="Desc"  placeholder="Description"></textarea>
      </div>
    </div>
     <div class="field">
      <label class="label">Weight Loss(calories)</label>
      <div class="control">
        <input class="input is-info"  ref="calloss" type="text" placeholder="Weight Loss">
      </div>
    </div>
    <div class="field">
      <label class="label">Exercise Time</label>
      <div class="control">
        <input class="input is-info"  ref="exTime" type="text" placeholder="Weight Loss">
      </div>
    </div>
    <div class="field">
      <label class="label">Upload</label>
      <div class="control">
      <div id="file-js-example" class="file has-name">
      <label class="file-label">
         <input  @change="uploadImage" type="file" name="photo" accept="image/*">
      </label>
    </div>
      </div>
    </div>
    <div class="field">
                  <button class="button is-info"  v-on:click="uploadFitnessData">  
                    Submit
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div class="column is-5">
        <div class="card">
     
      <div class="card-content">
        <div class="content">
          <span  v-for="item in postData" :key="item.message">
          <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img  v-bind:src="item.File" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
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
        </div>
          <div class="columns">
            <div class="column is-6">
              {{item.uploaderName}}
            </div>
            <div class="column is-6">
              <time datetime="2016-1-1">{{item.Time |  moment("MMMM Do YYYY, h:mm:ss a")}}</time>
            </div>
          </div>
          <hr style="background-color: #85c3be;">
          </span>
          <div style="text-align:center">
             <img v-if="postData.length==0" src=".././assets/images/nodata.png">
          </div>         
        </div>
      </div>
    </div>
      </div>
      <div class="column is-3">
        <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-if="!profile.filePath" src=".././assets/images/profile.jpg" alt="Placeholder image">
           <img v-if="profile.filePath"  v-bind:src="profile.filePath" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-4">
              <b>Name</b>
            </div>
            <div class="column is-8">
              {{profile.FirstName+" "+profile.LastName}}
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Email</b>
            </div>
            <div class="column is-8 breaktext">
              {{profile.Email}}
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Phone</b>
            </div>
            <div class="column is-8">
             {{profile.Phone}}
            </div>
          </div>
            <div class="columns">
            <div class="column is-4">
              <b>Height</b>
            </div>
            <div class="column is-8">
             {{profile.Height}}
            </div>
          </div>
            <div class="columns">
            <div class="column is-4">
              <b>Weight</b>
            </div>
            <div class="column is-8">
             {{profile.Weight}}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card{
  margin: 20px;
}
.background{
      background-color: #e0e0e0 !important;
}
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
    position: static !important;
}
.image.is-32x32 {
    height: 26px;
    width: 42px;
}
.navbar.is-primary {
    background-color: #00d1b2;
    color: #fff;
}
.breaktext{
  word-break: break-all;
}

</style>
<script>
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);
function encodeImageFileAsURL(element) {debugger;
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}
import axios from "axios";
var filePath;
export default {
    data(){
      return {
       profile:null,
        fileBase64: null,
        postData:  null,
          waterMark : 'ball',
      sportsData: ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
      }
    },
     created(){
     // debugger;
     this.getAllPostData();            
    },
     methods:{
       format_date(value){
         if (value) {
           console.log("Executed");
           return moment(String(value)).format('YYYYMMDD')
          }
      },
      getAllPostData: function(){
         this.profile=JSON.parse(sessionStorage.getItem("userData"));
      //  axios.get("http://localhost:3000/getAllFitnessPosts")    
      //      .then((response) => {    
      //          console.log("Logged in"+JSON.stringify(response)) ;  
      //           this.postData=response.data;                  
      //       })    
      //       .catch((errors) => {    
      //           console.log("Server Side Error");
      //       }) 
            this.$loading(true)
             axios.post("http://localhost:3000/getIndivudualFitnessPosts", this.profile)    
           .then((response) => {    
              // console.log("Logged in"+JSON.stringify(response)) ;
               console.log("Data: "+JSON.stringify(response.data)) ; 
              var finalData=response.data;
              var itemData=[];
              for(var i=0;i<finalData.length; i++){
                for(var j=0;j<finalData[i].length;j++){
                  itemData.push(finalData[i][j]);
                }
              }
              this.postData=itemData; 
              console.log("Data: "+JSON.stringify( this.postData));     
              this.$loading(false)
            })    
            .catch((errors) => {  
              this.$loading(false)  
                console.log("Server Side Error");
            })
      },
      uploadImage: function() {   debugger; 
      var file = document
        .querySelector('input[type=file]')
        .files[0];
        if(file.name!=""){
          document.getElementsByClassName("file-name").innerHTML="file.name";
         // $(".file-name").html(file.name);
        }else{
           document.getElementsByClassName("file-name").innerHTML="No file uploaded";
        }
      var reader = new FileReader();
      reader.onload = function(e) {
        filePath=e.target.result;
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(file);      
    },
    uploadFitnessData: function(){
      var time=new Date();
      var file=filePath;
      var title=this.$refs.Title.value;
      var desc=this.$refs.Desc.value;
      var calloss=this.$refs.calloss.value;
      var exTime=this.$refs.exTime.value;
      var id=JSON.parse(sessionStorage.getItem("userData"))._id;
      var uploaderName=JSON.parse(sessionStorage.getItem("userData")).FirstName+" "+JSON.parse(sessionStorage.getItem("userData")).LastName;
      var data={
        title:title,
        desc:desc,
        exTime:exTime,
        calloss:calloss,
        file:file,
        time:time,
        id:id,
        uploaderName:uploaderName
      }
      console.log("Data: "+JSON.stringify(data));
      this.$loading(true)
        axios.post("http://localhost:3000/uploadFitness", data)    
           .then((response) => {    
              // console.log("Logged in"+JSON.stringify(response)) ;  
             // this.postData=response.data;   
             this.getAllPostData();    
             this.$alert("Data Uploaded.");    
             this.$loading(false);           
            })    
            .catch((errors) => {   
              this.$loading(false) 
                console.log("Server Side Error");  
            }) 
    }
     }
}
	document.addEventListener('DOMContentLoaded', () => {

	  // Get all "navbar-burger" elements
	  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	  // Check if there are any navbar burgers
	  if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
		  el.addEventListener('click', () => {

			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);

			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');

		  });
		});
	  }

	});
//  var file = document.getElementById("file");
// file.onchange = function(){
//     if(file.files.length > 0)
//     {

//       document.getElementById('filename').innerHTML =	file.files[0].name;

//     }
// };
</script>
