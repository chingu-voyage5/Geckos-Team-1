<template>
  <section>
    <h2>Register</h2>
    <form>
      <label>E-mail:</label>
      <input type='email' required placeholder='bob@example.com' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required v-model='data.password'>
      <button role='button'>Register</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  }
};
</script>

<style scoped lang="scss">

</style>
