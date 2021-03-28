<template>
     <b-container style="margin-top:10%;">
         <b-row class="justify-content-md-center" align-v="center" >
             <b-col cols="6">
                 <b-card bg-variant="light">
                     <b-form>
                         <b-form-group label="Email" label-for="email-input" >
                             <b-form-input id="email-input" v-model="userData.email"></b-form-input>
                         </b-form-group>
                         <b-form-group label="Password" label-for="password-input">
                             <b-form-input id="password-input" type="password" v-model="userData.password"></b-form-input>
                         </b-form-group>
                         <b-button variant="success" @click="login(userData)">Login</b-button>
                         <b-button >Olvide mi contraseña</b-button>
                     </b-form>
                 </b-card>
             </b-col>
         </b-row>
     </b-container>
</template>
<script>
export default {
    data: ()=>({
        userData:{
            email:'',
            password:''
        }
    }),
  
    methods:{
        async login(userData){
            try{
                await this.$auth.loginWith('local',{
                    data: userData
                });
                this.$router.push('/')
            }catch(error){
                this.$bvToast.toast("Email or password incorrect",{
                    variant: "danger",
                    solid: true
                })
            }
        },
    },
    mounted(){
        console.log("mounted login")
    }
}
</script>
<style scoped>
.input-register-button{
    margin-left: 50px;
}
</style>