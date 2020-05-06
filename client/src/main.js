

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LogIn from "./components/login.vue";
import Register from "./components/register.vue";
import Dashbord from "./components/dashboard.vue";
import adminDashboard  from "./components/adminDashboard.vue";
import manageUsers from "./components/manageUsers.vue";
import VueSimpleAlert from "vue-simple-alert";
import ViewFriends from "./components/ViewFriends.vue";
import ViewRequest from "./components/ViewRequest.vue";
import FindFriends from "./components/FindFriends.vue";
import ActivatePost from "./components/activatePost.vue";
import ActivateUsers from "./components/activateUsers.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueLoading from 'vuejs-loading-plugin';

Vue.use(VueSimpleAlert);
Vue.use(require('vue-moment'));
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Loadind...', // default 'Loading'
  background: 'rgb(255,255,255)', // set custom background]
});

require("./assets/main.scss");

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
{path: "/Home", component: HelloWorld},
{path: "/register", component: Register},
{path: "/", component: LogIn},
{path: "/login", component: LogIn},
{path: "/dashbord", component: Dashbord},
{path: "/AdminDashboard", component: adminDashboard},
{path: "/ManageUsers", component: manageUsers},
{path: "/ViewFriends", component: ViewFriends},
{path: "/ViewRequest", component: ViewRequest},
{path: "/FindFriends", component: FindFriends},
{path: "/ActivatePost", component: ActivatePost},
{path: "/ActivateUsers", component: ActivateUsers},
]

const router= new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
