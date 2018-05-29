<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <div class='nav--link__group'>
      <router-link to="/login" class='link--login'>Login</router-link>
      <router-link to="/register" class='link--register'>Register</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  #nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .nav--link__group {

    > a {
      padding: 20px;
      margin-right: 10px;
      box-shadow: 2px 2px 4px rgba(12,12,13,0.1);
      color: #000;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }

  .link--login {
    background-color: lightgreen;
  }
  .link--register {
    background-color: lightcyan;
  }
</style>
