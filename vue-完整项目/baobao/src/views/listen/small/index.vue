<template>
    <div class="small">
        <my-SItem :lists="lists"></my-SItem>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lists:[]
        }
    },
    created(){
        this.$http.getLookdata({
            type:"getlist",pagesize:30,listid:5
        }).then(res=>{
            this.lists=res.data.list.slice(1)
            console.log(this.lists)
        })
    }
}
</script>