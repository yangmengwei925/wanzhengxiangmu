<template>
    <div class="babyl">
       <div class="headers">
            <router-link v-for="(item,i) in navdata" :key="i" :to="item.path">
                {{item.title}}
            </router-link>
        </div>
        <div class="main">
            <router-view></router-view>
        </div> 
        <my-foot></my-foot>
    </div>
</template>

<script>
export default {
    computed:{
        navdata(){
            return this.$router.options.routes.find(item=>item.path==='/look').children.filter(item=>item.meta&&item.meta.title).map(item=>({
                title:item.meta.title,
                path:item.path
            }))
        }
    }
}
</script>