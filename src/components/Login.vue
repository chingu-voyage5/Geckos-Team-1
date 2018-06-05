<template>
  <section id="login">
    <form>
      <h2>Login</h2>
      <p v-if='error' class='message'>{{msg}}</p>
      <label>E-mail:</label>
      <input type='email' required placeholder='E-mail' v-model='data.email'>
      <label>Password:</label>
      <input type='password' required placeholder='Password' v-model='data.password'>
      <div class='login--section'>
        <router-link tag='a' to="/register">Haven't signed up? Register here</router-link>
        <button role='button' class='btn btn--login'
          @click.prevent="loginUser()"
        >Login</button>
      </div>
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

<style lang='scss' scoped>
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

    &--login {
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

