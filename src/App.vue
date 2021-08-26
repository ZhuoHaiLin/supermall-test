<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view></router-view>
    </keep-alive>
    
    <main-tab-bar v-if="this.$route.path!='/login'"></main-tab-bar>
   
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabbar/MainTabBar.vue'
  // import MainTabBar from 'content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  
  // mounted() {
  //   console.log(this.$route)
  // },
}
</script>

<style>
  @import "assets/css/base.css";
</style>
