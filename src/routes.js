import Home from "./views/Home.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Error404 from "./views/Error404.vue";

/*
** Site Routes
*/
export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/404",
    name: "404",
    component: Error404
  },
  {
    path: "*",
    redirect: "/404"
  }
];
