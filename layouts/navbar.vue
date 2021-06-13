<template>
    <div>
        <b-row class="top">
            <b-col cols="11"></b-col>
            <b-col cols="1" md="auto">
                <b-dropdown>
                    <template #button-content>
                        <b-icon icon="gear"></b-icon>
                    </template>
                    <b-dropdown-item-button v-if="$auth.$state.user.is_admin" @click="goToAdminPage">
                        Admin
                    </b-dropdown-item-button>
                     <b-dropdown-item-button @click="loggout">
                        logout
                    </b-dropdown-item-button> 
                </b-dropdown>
            </b-col>
        </b-row>
        <Nuxt/>
    </div>
</template>
<script>
export default {
    methods:{
        async loggout(){
            await this.$auth.logout()
            location.reload();
        },
        goToAdminPage(){
            this.$router.push('/admin/')
        }
    }
}
</script>
<style>
.top{
    background-color:#264653; 
    padding-top: 15px; 
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
}

</style>