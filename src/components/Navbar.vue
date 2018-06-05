<template>
  <nav id="nav">
    <router-link class='brand' to="/">AppTrackr</router-link>
    <div class='nav--link__group'>
      <router-link to="/dashboard" class='link--dashboard' v-if="user">Dashboard</router-link>
      <router-link to="/login" class='link--login' v-if="!user">Login</router-link>
      <router-link to="/register" class='link--register' v-if="!user">Register</router-link>
      <a class='link--logout' @click="signOut"  v-if="user">Sign Out</a>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase';
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
}
</script>

<style lang='scss'>
  #nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
  .nav--link__group {

    > a {
      padding: 9px 12px;
      margin-left: 10px;
      box-shadow: 2px 2px 4px rgba(12,12,13,0.1);
      color: #000;
      font-size: 1.12rem;
      text-decoration: none;
    }
  }

  .link--login, .link--dashboard {
    background-color: lightgreen;
  }
  .link--register, .link--logout {
    background-color: lightcyan;
    cursor: pointer;
  }
  .brand {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1.4px;
  }
</style>
