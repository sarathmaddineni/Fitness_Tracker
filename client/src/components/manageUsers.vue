<template>
<section>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <img src=".././assets/images/mainlogo.jpg" width="85" alt="text" height="28">
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
    <div class="section container text-center">
        <h2><b><u>Manage Users</u></b></h2>
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
                <tr>
                    <th>1</th>
                    <td>Sample </td>
                    <td>Sam</td>
                    <td>sample@gmail.com</td>
                    <td>+1(111)-111-1234</td>
                    <td><a href="#"><u>InActive</u></a>,&nbsp;&nbsp;<a href="#"><u>Edit</u></a>,&nbsp;&nbsp;<a href="#"><u>Delete</u></a></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Sample </td>
                    <td>Sam</td>
                    <td>sample@gmail.com</td>
                    <td>+1(111)-111-1234</td>
                    <td><a href="#"><u>InActive</u></a>,&nbsp;&nbsp;<a href="#"><u>Edit</u></a>,&nbsp;&nbsp;<a href="#"><u>Delete</u></a></td>
                </tr>
            </tbody>
        </table>
    </div>
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
    