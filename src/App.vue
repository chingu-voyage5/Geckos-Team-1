<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  methods: {
    setUser() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    /*
    When app is created run the setUser method
    Uses Vuex to check if a user is logged in
    */
    this.setUser();
  }
}
</script>

<style lang="scss">
  #app {
    margin: 55px auto;
    width: 70%;
    height: 100%;
  }
</style>
