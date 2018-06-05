<template>
  <section id="register">
    <form>
      <h2>Register</h2>
      <span class='notification'
      v-if="success"
      >{{notification}}</span>
      <label>E-mail:</label>
      <input type='email' required placeholder='E-mail' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required placeholder='Password' v-model='data.password'>
      <div class='login--section'>
        <router-link to="/login">Already signed up? Login in here</router-link>
        <button role='button' class='btn btn--register'
          @click.prevent='registerUser'>
          Register
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import firebase from "firebase";

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
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(
          user => {
            swal("success", "ok")
            this.$router.replace('dashboard');
          },
          error => {
            console.error(`Error code ${error.code}: ${error.message}`)
            swal("Error", `${error.message}`, "error")
            vm.success = false;
            vm.notification = `${error.message}`
          }
        )
    }
  }
}
</script>

<style scoped lang="scss">
 h2 {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 2.8rem;
    color: #5fcfcb;
    text-align: center;
    margin-bottom: 42px;
    letter-spacing: 2.8px;
    font-variant-caps: all-small-caps;
  }
  #login {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 70%;
    background-color: #fff;
    padding: 15px 15px 30px 15px;
    margin: 55px auto;
    box-shadow: 4px 4px 16px rgba(12,12,13,0.1);

    @media screen and (min-width: 800px) {
      width: 50%;
    }
  }
  label, input {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    margin: 12px;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
  }
  label {
    font-size: 1.3rem;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
  }
  input {
    border: 0;
    border-bottom: 1px solid rgba(12,12,13,0.1);
    outline: none;
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

  .login--section {
    display: flex;
    flex-direction: column;

    > a {
      padding-left: 12px;
      padding-bottom: 12px;
      text-decoration: none;
      color: #669999;
    }
  }

  .notifications {
    color: red;
  }
</style>