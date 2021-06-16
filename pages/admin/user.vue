<template>
    <div>
        <crud :api_get="'account/api/users/'" :tableFields="fields" :params="params" :paginate="true" :title="'Usuario'" ref="user_crud" :handleOnClose="handleOnCloseModal" :modalStatus="pass_available">
            <template v-slot:body-modal>
                <b-form >
                    <b-form-group label="Nombre(s)" label-for="first-name-input">
                        <b-form-input id="first-name-input" v-model="params.first_name" placeholder="Ingresa el nombre" :state="isFieldValid('first_name')"></b-form-input>
                        <b-form-invalid-feedback>This field has is required</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Apellidos" label-for="last-name-input">
                        <b-form-input id="last-name-input" v-model="params.last_name" placeholder="Ingesa los apellidos" :state="isFieldValid('last_name')"></b-form-input>
                        <b-form-invalid-feedback>This field has is required</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Nombre de usuario" label-for="username-input">
                        <b-form-input id="username-input" v-model="params.username" placeholder="Ingresa el nombre de usuario" :state="isFieldValid('username')"></b-form-input>
                        <b-form-invalid-feedback>This field has is required</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Correo Electronico" label-for="email-input">
                        <b-form-input id="email-input" v-model="params.email" placeholder="Ingresa el email" type="email" :state="isFieldValid('email')"></b-form-input>
                        <b-form-invalid-feedback>This field has is required</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Contraseña" label-for="password-input" v-if="pass_available">
                        <b-form-input id="password-input" v-model="params.password" placeholder="Ingresa la contraseña" type="password" :state="isFieldValid('password')"></b-form-input>
                        <b-form-invalid-feedback>This field must have at leat 5 letters</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-checkbox v-model="params.is_admin">
                        Es Admin
                    </b-form-checkbox>
                </b-form>
            </template>
            <template v-slot:footer-modal>
                <b-button variant="danger" class="float-right" @click="closeModal">Cerrar</b-button>
                <b-button variant="primary" class="float-right" @click="pass_available ? createUser() : editUser()">{{ pass_available ? 'Crear':'Editar' }}</b-button>
            </template>
            <template #edit-button="{row}">
                <b-button @click="editRegister(row.item, row.index)" variant="info">Edit</b-button>
            </template>
        </crud>
    </div>
</template>
<script>
import Crud from '~/components/Crud'
export default {
    layout: 'navbar',
    components:{
        Crud
    },
    data(){
        return{
            fields:[
                {key:'index',label: '#', class: 'text-center'},
                {key:'username',label: 'Usuario', class: 'text-center'},
                {key: 'email',label:'Correo Electronico', class: 'text-center'},
                {key: 'is_admin', label: 'Admin', class: 'text-center'},
                {key: 'actions', label: 'Edit', class: 'text-center'},
                {key: 'delete', label: 'Delete', class: 'text-ceter'}
            ],
            params:{
                first_name:'',
                last_name:'',
                username:'',
                email:'',
                is_admin: false,
                password: '',
                tipo: 0,
                id: 0
            },
            pass_available: true,
            show_alert: 0
        }
    },
    methods:{
        createUser(){
            if(this.params.first_name.length > 0 && this.params.last_name.length > 0 &&
            this.params.username.length > 0 && this.params.email.length > 0 &&
            this.params.password.length > 4){
                this.$refs.user_crud.createRegister()
                this.closeModal()
            }
        },
        editUser(){
            if(this.params.first_name.length > 0 && this.params.last_name.length > 0 &&
            this.params.username.length > 0 && this.params.email.length > 0){
                this.$refs.user_crud.editRegister()
                this.closeModal()
            }
        },
        closeModal(){
            this.$refs.user_crud.show_modal = false
            this.params.first_name = "";
            this.params.last_name = "";
            this.params.username = "";
            this.params.email = "";
            this.params.password = "";
            this.pass_available = true;
        },
        isFieldValid(field){
            if(field == "password"){
                return this.params[field].length > 4 ? true:false;
            }
            return this.params[field].length > 0 ? true:false;
        },
        editRegister(item,index){
            this.pass_available = false
            this.params.id = item.id
            this.params.first_name = item.first_name
            this.params.last_name = item.last_name || "NA"
            this.params.username = item.username
            this.params.email = item.email
            this.$refs.user_crud.show_modal = true
        },
        handleOnCloseModal(){
            this.closeModal()
        },
    },
    mounted(){
        this.$refs.user_crud.load()
    }
}
</script>
<style>
.add{
    margin-top: 20px;
    
}
.button-add{
    margin-right: 10px;
}
.row-table{
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>