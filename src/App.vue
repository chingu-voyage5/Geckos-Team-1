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
