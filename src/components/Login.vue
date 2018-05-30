<template>
  <section id="login">
    <h2>Login</h2>
    <span v-if='error'>{{msg}}</span>
    <form>
      <label>E-mail:</label>
      <input type='email' required placeholder='bob@example.com' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required v-model='data.password'>
      <button role='button'
        @click.prevent="loginUser()"
      >Login</button>
    </form>
  </section>
</template>

<script>
import firebase from 'firebase';

export default {
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      error: false,
      msg: ''
    }
  },
  methods: {
    loginUser() {
      let vm = this;
      const EMAIL = vm.data.email,
            PASS = vm.data.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(EMAIL, PASS)
        .then(
          user => {
            this.$router.replace('dashboard');
          }
        )
        .catch(function(error) {
          console.error(`Error code ${error.code}: ${error.message}`)
          vm.error = true;
          vm.msg = `${error.message}`
          vm.data.email = vm.data.password = "";
        })

    }
  }
}
</script>

<style>

</style>

