

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LogIn from "./components/login.vue";
import Register from "./components/register.vue";
import Dashbord from "./components/dashboard.vue";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

require("./assets/main.scss");

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
{path: "/Home", component: HelloWorld},
{path: "/register", component: Register},
{path: "/", component: LogIn},
{path: "/login", component: LogIn},
{path: "/dashbord", component: Dashbord}
]

const router= new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
