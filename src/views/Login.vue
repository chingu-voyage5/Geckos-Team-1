<template>
  <section id="login">
    <h2>Login</h2>
    <form>
      <label>E-mail:</label>
      <input type='email' required placeholder='bob@example.com' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required v-model='data.password'>
      <button role='button'>Login</button>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>

