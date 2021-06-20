<template>
    <div class="goodsitem" @click="itemdetailClick">
        <!-- <img @load="imgClick" :src="goods.show.img" alt=""> @load="imgClick 图片加载监听事件 -->
        <img  v-lazy="shouImage" alt="">
        <div class="goods-info">
            <p>{{goods.title}}</p>
            <span class="price">¥{{goods.price}}</span>
            <span class="collect">{{goods.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            goods:Object,
            default(){
                return Object
            }
        },
        methods: {
            // imgClick(){
            //     this.$bus.$emit('imgClick')
            // }
            itemdetailClick(){
                this.$router.push({path:'/detail',query:{id:this.goods.iid}})
            }
        },
        computed:{
            shouImage(){
                return this.goods.image || this.goods.show.img
            }
        }
    }
</script>

<style  scoped>
.goodsitem {
   position: relative;
    padding-bottom: 40px;
    width: 48%;
    

}

.goodsitem img{
    width: 100%;
    border-radius: 5%;
}

.goods-info{
    font-size: 12px;
    text-align: center;
    overflow: hidden;
     position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
.goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>