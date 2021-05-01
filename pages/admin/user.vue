<template>
    <div>
        <crud :api_get="'account/api/users/'" :tableFields="fields" :params="params" :paginate="false"></crud>
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
                {key:'username',label: 'Usuario', class: 'text-center'},
                {key: 'email',label:'Correo Electronico', class: 'text-center'},
                {key: 'is_admin', label: 'Admin', class: 'text-center'},
                {key: 'actions', label: 'Edit', class: 'text-center'},
                {key: 'delete', label: 'Delete', class: 'text-ceter'}
            ],
            params:{
                
            }
        }
    },
    mounted(){
       /* this.$axios.get('account/api/users/').then(({data}) =>{
            this.items = data
        })
        */
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