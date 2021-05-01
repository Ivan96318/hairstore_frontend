<template>
  <div>
    <b-row align-h="end" class="add">
        <b-col cols="1" class="button-add">
            <b-button variant="primary">
                Nuevo<b-icon icon="plus"></b-icon>
            </b-button>
        </b-col>
    </b-row>
    <b-row class="row-table">
        <b-col class="col-table">
            <b-table :items="dataTable" :fields="tableFields" >
                <template #cell(actions)="row">
                    <b-button @click="Edit(row.item,row.index)" variant="info">Edit</b-button>
                </template>
                <template #cell(delete)="row">
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
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataTable: [],
            currentPage: 1,
            totalRows: 1,
            perPage: 5
        }
    },
    props:{
        api_get: String,
        tableFields: Array,
        params: Object,
        paginate: Boolean
    },
    mounted(){
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
    },
    methods:{
        updateTable(currentPage){
            this.$axios.get(this.api_get,{params:{page:currentPage}}).then(({data}) =>{
                this.dataTable = data.data;
                this.totalRows = data.count
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