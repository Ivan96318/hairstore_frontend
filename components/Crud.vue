<template>
  <div>
    <b-row align-h="end" class="add">
        <b-col cols="1" class="button-add">
            <b-button variant="primary" @click="show_modal = true">
                Nuevo<b-icon icon="plus"></b-icon>
            </b-button>
        </b-col>
    </b-row>
    <b-row class="row-table">
        <b-col class="col-table">
            <b-table :items="dataTable" :fields="tableFields" >
                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>
                 <template #cell(actions)="row">
                     <slot name="edit-button" v-bind:row="row"></slot>
                    <!--b-button @click="editRegister(row.item,row.index)" variant="info">Edit</b-button-->
                </template>
                <template #cell(delete)="row" >
                    <b-button @click="Delete(row.item, row.index)" variant="danger">Delete</b-button>
                </template>
            </b-table>         
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <b-pagination v-if="paginate" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="pagination" align="fill" @input="updateTable(currentPage)"></b-pagination>
        </b-col>
    </b-row>
    <!-- modal create -->
    <b-modal v-model="show_modal" size="lg" @hidden="handleOnClose">
        <template #modal-title>
            {{ modalStatus ? 'Crear':'Editar' }} {{ title }}
        </template>
        <div class="d-block">
            <slot name="body-modal"></slot>
        </div>
        <template #modal-footer>
            <slot name="footer-modal"></slot>
        </template>
    </b-modal>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataTable: [],
            currentPage: 1,
            totalRows: 1,
            perPage: 5,
            show_modal: false
        }
    },
    props:{
        api_get: String,
        tableFields: Array,
        params: Object,
        paginate: Boolean,
        title: String,
        handleOnClose: Function,
        modalStatus: Boolean
    },
    methods:{
        //method from pagination
        updateTable(currentPage){
            this.$axios.get(this.api_get,{params:{page:currentPage}}).then(({data}) =>{
                this.dataTable = data.data;
                this.totalRows = data.count
            });
        },
        createRegister(){
            this.$axios.post(this.api_get,this.params).then(({data}) =>{
                this.$bvToast.toast(data.rs,{
                    title: data.success ? "Success":"Error",
                    variant: data.success ? 'success':'danger',
                    solid: true
                })
                if(data.success){
                    this.load()
                }
            }).catch(error =>{
                this.$bvToast.toast(error,{
                    title: "Error",
                    variant: 'danger',
                    solid: true
                })
            })
        },
        load(){
            if(!this.paginate){
                this.params["no_paginate"] = true
            }
            this.$axios.get(this.api_get,{params:this.params}).then(({data}) =>{
                if(this.paginate){
                    this.dataTable = data.data;
                    this.totalRows = data.count;
                } else {
                    this.dataTable = data
                }
            });
        }
    }
}
</script>

<style>
.pagination{
    width: 30%;
}
</style>