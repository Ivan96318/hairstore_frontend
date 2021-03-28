<template>
    <b-container style="margin-top:10%;">
        <b-row class="justify-content-md-center">
            <b-col cols="6">
                <b-card bg-variant="light">
                    <b-form>
                        <b-form-group label="Email" label-for="email-input">
                            <b-form-input id="email-input" v-model="form_register.email" type="email" placeholder="Enter Email" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="Username" label-for="username-input">
                            <b-form-input id="username-input" v-model="form_register.username" type="text" placeholder="Enter Username" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="First Name" label-for="first_name-input">
                            <b-form-input id="first_name-input" v-model="form_register.first_name" type="text" placeholder="Enter First Name" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" label-for="pass-input">
                            <b-form-input id="pass-input" v-model="form_register.password" type="password" placeholder="Enter Password"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Confirm Password" label-for="pass-two-input">
                            <b-form-input id="pass-two-input" v-model="form_register.second_password" type="password" placeholder="Confirm Password"></b-form-input>
                        </b-form-group>
                        <b-button variant="success" @click="register()">Register</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    //auth: false,
    layout: 'navbar',
    data(){
        return{
            form_register:{
                email: "",
                username: "",
                first_name: "",
                password: "",
                second_password: ""
            }
        }
    },
    methods:{
        async register(){
            await this.$axios.$post('create-user/',this.form_register).then((response) =>{
                this.$bvToast.toast("Success at create user",{
                    title: "Success",
                    variant: "success",
                    solid: true
                })

            }).catch((error) => {
                this.$bvToast.toast("Error at create user",{
                    title: "Error",
                    variant: "danger",
                    solid: true
                })
            })
        },
        reset(){
            this.$router.push('/login')
        }
    },
    mounted(){
        console.log("mounted register")
    }
}
</script>