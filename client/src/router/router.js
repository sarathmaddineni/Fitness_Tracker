import Vue from 'vue'
import VueRouter from "vue-router";
import LogIn from "../components/login.vue";
import Register from "../components/register.vue";
import Dashbord from "../components/dashboard.vue";
import adminDashboard  from "../components/adminDashboard.vue";
import manageUsers from "../components/manageUsers.vue";
import ViewFriends from "../components/ViewFriends.vue";
import ViewRequest from "../components/ViewRequest.vue";
import FindFriends from "../components/FindFriends.vue";

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
{path: "/FindFriends", component: FindFriends}
]

const router= new VueRouter({
  routes
});

export default router