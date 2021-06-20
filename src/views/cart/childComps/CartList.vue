<template>
    <div class="carlist">
        <Srcoll ref="srcoll" class="content">
            <!-- <div> -->
            <CartListItem v-for="(item,index) in cartList" :key="index" :itemInfo="item"></CartListItem>
            <!-- </div> -->
        </Srcoll>
    </div>
</template>

<script>
  import Srcoll from 'common/scroll/Scroll'
  import CartListItem from './CartListItem'
    export default {
        props:{
            cartList:{
                type:Array,
                default(){
                    return []
                }
            }

        },
        components:{
            Srcoll,CartListItem
        },
        activated() {
            this.$refs.srcoll.refresh()
        },
        
    }
</script>

<style  scoped>
.carlist{
    height: calc(100% - 44px - 49px - 44px);
}
.content {
  height:100% ;
  overflow: hidden;
  }

</style>