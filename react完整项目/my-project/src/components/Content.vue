<template>
  <div class="main">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="right-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
export default {
  components:{
    Sidebar
  }
}
</script>

<style>

</style>
