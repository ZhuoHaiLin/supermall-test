<template>
 <div>
  <NavTab> 
      <div slot="left" @click="backClick">
      <img  class="back"  src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="navtab" >
          <div v-for="(item,index) in titles" :key="index" @click="itemclick(index)" class="navtab-item" :class="{active:currentIndex===index}"> {{item}}</div>
      </div>
   </NavTab>
   </div>
</template>

<script>
import NavTab from "common/navbar/NavTab";
export default {
  components: {
    NavTab,
  },
  data() {
      return {
          titles:['商品', '参数', '评论', '推荐'],
          currentIndex:0
      }
  },
  methods: {
      itemclick(index){
          this.currentIndex=index
          this.$emit('tabitemclick',index)
          

      },backClick(){
          this.$router.back()

      }
  },
};
</script>

<style  scoped>
.navtab{
    display: flex;
    font-size: 13px;
}
.navtab-item{
    flex: 1;
}
.back{
    margin-top: 10px;
}
.active{
    color: var(--color-tint);
}
</style>