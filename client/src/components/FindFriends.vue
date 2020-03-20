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
                       <router-link to="ViewRequest"> View Friend Requests</router-link>
                    </a>
                    <a class="navbar-item" href="#">
                        Find Friends
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
                        <input class="input is-info" type="text" v-model="searchQuery" placeholder="Search...">
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
                <tr  v-for="item in items" :key="item.message">
                    <th>{{item.SNo}}</th>
                    <td>{{item.firstName}} </td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.Email}}</td>
                    <td>{{item.Phone}}</td>
                    <td><a href="javascript:void(0)"><u>{{item.Status}}</u></a></td>
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
  },
  data:()=>({
       searchQuery: null,
        column: null,
        items:  [
      {
        "SNo":1,
        "firstName":"Sample",
        "lastName":"S",
        "Email":"sample@gmail.com",
        "Phone":"+1(111) 123-1234",
        "Status":"Add Friend"
      },
       {
       "SNo":2,
       "firstName":"Sample",
        "lastName":"S",
        "Email":"sample@gmail.com",
        "Phone":"+1(111) 123-1234",
        "Status":"Status Pending"
      },
       {
        "SNo":3,
       "firstName":"Sample",
        "lastName":"S",
        "Email":"sample@gmail.com",
        "Phone":"+1(111) 123-1234",
        "Status":"Friends"
      }
    ]
    }),
  methods:{
      sendRequest: function(index){
          this.$alert("Request Sent.");           
      }
  },
computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      // FILTER ONLY BY NAME
      if (filterKey) {
        data = data.filter( function (row) {
          return row.name.toLowerCase().includes(filterKey)
        })
      }
      // ==============
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
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
    