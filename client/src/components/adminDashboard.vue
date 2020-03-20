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
              Manage Users
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
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
