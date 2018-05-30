import Vue from "vue";
import VueRouter from "vue-router";
import Firebase from "firebase";
import App from "./App.vue";
import { store } from "./store/store";
import { routes } from "./routes";

//Firebase Configuration
const config = {
  apiKey: "AIzaSyBHXsWN43n2ALikrRuigq7tCRuDhTyJXBo",
  authDomain: "gecko-team-01.firebaseapp.com",
  databaseURL: "https://gecko-team-01.firebaseio.com",
  projectId: "gecko-team-01",
  storageBucket: "gecko-team-01.appspot.com",
  messagingSenderId: "1087908997098"
};

//Initialize Firebase
Firebase.initializeApp(config);

/*
** Sets up and uses Vue Router
** Passed in routes and mode to history
*/
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

/*
** Checks before each page load whether the page needs authentication
** - If true -> checks if user is signed in
** - If false -> redirects to login page
*/

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

/*
** Wraps the entire Vue instance in a Firebase onAuthStateChanged method
** Stops execution of navigation guard 'beforeEach' method until Firebase init ends
*/
Firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");
});
