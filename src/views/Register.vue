<template>
  <section id="register">
    <h2>Register</h2>
    <span class='notification'
      v-if="success"
    >{{notification}}</span>
    <form>
      <label>E-mail:</label>
      <input type='email' required placeholder='bob@example.com' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required v-model='data.password'>
      <button role='button' class='btn btn--register'
        @click.prevent='registerUser'>
        Register
      </button>
    </form>
  </section>
</template>

<script>
import firebase from '../firebase.js'

export default {
  name: "Register",
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      success: false,
      notification: ''
    }
  },
  methods: {
    registerUser() {
      var vm = this;
      const email = vm.data.email;
      const pass = vm.data.email;
      //Firebase Login
      firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(function(err) {
          console.error(`Error code ${err.code}: ${err.message}`)
          vm.success = false;
          vm.notification = 'Failed to Register User'
        })

      //Notification Displays Success
      vm.success = true;
      vm.notification = 'Successfully Registered User. Please Login!'
    }
  }
}
</script>

<style scoped lang="scss">
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3.2rem;
    color: goldenrod;
  }
  #register {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    max-width: 70%;
  }
  label, input {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    margin: 12px;
  }
  label {
    font-size: 1.3rem;
    font-family: 'Arial', Arial, Helvetica, sans-serif;
  }
  .btn {
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(12,12,13,0.1);
    color: #000;
    font-size: 1.2rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2px;

    &--register {
      margin-left: 12px;
      background-color: lightseagreen;
    }
  }

</style>