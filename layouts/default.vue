<template>
  <div>
    <div class="contain">
      <div v-if="$auth.loggedIn" class="navbar">  
         <b-button variant="primary" @click="loggout()"  id="logout">
            Logout
         </b-button>
      </div>
      <div v-else class="navbar">
        <b-button  variant="primary" @click="login" id="login">
          <b-icon icon="arrow-up" ></b-icon>
            Login
        </b-button>
        <b-button variant="primary" @click="redirect" id="register">
          <b-icon icon="alarm-fill"></b-icon>
            Register
        </b-button>
      </div>
    </div>
    <Nuxt/>
  </div>
</template>
<script>

export default {
  components:{
    
  },
  methods:{
    login(){
      this.$router.push("/login")
    },
    redirect(){
      this.$router.push("/register")
    },
    async loggout(){
      await this.$auth.logout()
      location.reload();

    },
  },
  mounted(){
  
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
.contain{
  background-color:#264653; 
  width: 100%; 
  padding-top: 25px; 
  padding-bottom: 25px;
}
.navbar{
  position: relative;
}
#login{
  right: 10px;
  position: absolute;
}
#register{
  right: 110px;
  position: absolute;
}

#logout{
  right: 10px;
  position: absolute;
}
</style>
