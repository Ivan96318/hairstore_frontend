<template>
  <div class="authentication-buttons">
    <div v-if="$auth.loggedIn">
         {{ $auth.user.email }}
         <button type="button"  to="/logout" class="btn btn-primary">
            <i class="bi bi-emoji-laughing"></i>
         </button>
    </div>
    <div v-else>
      <b-button to="/login" variant="primary" @click="login">
        <b-icon icon="arrow-up"></b-icon>
          Login
      </b-button>
      <b-button variant="primary" to="/register"  @click="redirect">
        <b-icon icon="alarm-fill"></b-icon>
          Register
      </b-button>
         
    </div>
  </div>
</template>
<script>


export default {
  components:{
    
  },
  methods:{
    login(){
      console.log("login button pressed")
    },
    redirect(){
      console.log("register button pressed")
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
