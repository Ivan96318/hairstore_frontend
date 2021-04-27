<template>
    <div>
        <b-row align-h="around" class="row-setting">
            <b-col cols="3" @click="goTo('/admin/user/')">
                <b-card title="Usuarios" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="person-fill" width="200px" height="200px"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="3" @click="goTo('/')">
                <b-card title="Empleados" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="person-check-fill" width="200" height="200"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="3" @click="goTo('/')">
                <b-card title="Trabajos" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="scissors" width="200" height="200"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="row-setting" align-h="around">
            <b-col cols="3" @click="goTo('/')">
                <b-card title="Productos" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="grid-3x3-gap-fill" width="200" height="200"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="3" @click="goTo('/')">
                <b-card title="Clientes" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="people-fill" width="200" height="200"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="3" @click="goTo('/')">
                <b-card title="contabilidad" align="center" class="cursor-pointer">
                    <b-card-text>
                        <b-icon icon="cash" width="200" height="200"></b-icon>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>   
export default {
    layout: 'navbar',
    data(){
        return{

        }
    },
    methods:{
        goTo(rute){
            this.$router.push(rute)
        }
    }
}
</script>
<style>
.row-setting{
    margin-top: 20px;

}
.cursor-pointer{
    cursor: pointer;
    border-style: solid;
}
</style>