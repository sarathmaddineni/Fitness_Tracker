<template>
    <section>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
      <div class="navbar-brand">
          <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
              View Friend Requests
            </a>
            <a class="navbar-item" href="#">
              Find Friends
            </a>
            <a class="navbar-item" href="#">
              View Friends
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
        <input class="input is-info" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea is-info" placeholder="Textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Upload</label>
      <div class="control">
      <div id="file-js-example" class="file has-name">
      <label class="file-label">
        <input class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name">
          No file uploaded
        </span>
      </label>
    </div>
      </div>
    </div>
    <div class="field">
                  <button class="button is-info">
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
          <span  v-for="item in data" :key="item.message">
          <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src=".././assets/images/exercise.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4"> {{item.title}}</p>
            <p class="subtitle is-6">{{item.desc}}</p>
          </div>
         
        </div>
          <div class="columns">
            <div class="column is-6">
              {{item.uploadedname}}
            </div>
            <div class="column is-6">
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <hr v-if="item.length!=2">
          </span>
        </div>
      </div>
    </div>
      </div>
      <div class="column is-3">
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
              XXXXXXXXX
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Email</b>
            </div>
            <div class="column is-8">
              XXXXXXXXX
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Phone</b>
            </div>
            <div class="column is-8">
              XXXXXXXXX
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
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
    position: static !important;
}
.image.is-32x32 {
    height: 26px;
    width: 42px;
}
.navbar.is-primary {
    background-color: #4f9cb7;
}
</style>
<script>
export default {
    data(){
      return {
        data:  [
      {
        "title":"Supermans",
        "desc":"Who doesn't want to think they have super powers?  Great stretch as well when you picture trying to touch the opposing walls with your fingers and toes.",
        "img":".././assets/images/exercise.jpg",
        "uploadedname":"sample"
      },
       {
        "title":"Push-up",
        "desc":"The Push-up is an oldie but goodie.  You can modify intensity by changing hand placement.",
        "img":".././assets/images/exercise.jpg",
        "uploadedname":"test"
      },
       {
        "title":"Contralateral Limb Raises",
        "desc":"Don’t let the name scare you – this is great for toning those troubling upper body areas.",
        "img":".././assets/images/exercise.jpg",
        "uploadedname":"sample"
      }
    ]
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
