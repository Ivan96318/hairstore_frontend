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
            <b-table :items="dataTable" :fields="tableFields" :current-page="currentPage" :per-page="perPage">
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
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="pagination" align="fill"></b-pagination>
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
        tableFields: Array
    },
    mounted(){
        this.$axios.get(this.api_get).then(({data}) =>{
            this.dataTable = data;
            this.totalRows = data.length
           
        })
    }
}
</script>

<style>
.pagination{
    width: 30%;
}
</style>