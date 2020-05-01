import Vue from 'vue'

const files=require.context('./',true,/index.vue$/)

files.keys().forEach(item=>{
    const Com=files(item).default
    Vue.component('my-'+Com.name,Com)
})