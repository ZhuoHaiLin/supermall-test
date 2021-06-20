<template>
    <div class="bottom-menu"> 
          <CheckButton class="select-all"   @click.native="ckeckedClick"   :isChecked="isSelectAll" ></CheckButton>
          <span>全选</span>
          <span class="total-price">合计：¥{{totalPrice}}</span>
          <span class="buy-product">去计算({{cartCount}})</span>
    </div>

</template>

<script>
   
    import  CheckButton  from './CheckButton'
    export default {
        name:"bottombar",
        components:{
            CheckButton
        },
        computed:{
          totalPrice(){
            return  this.$store.state.cartList.filter(item=>{
              return item.checked
            }).reduce((preValue,item)=>{
              return preValue+item.price*item.count

            },0).toFixed(2)
          },

          cartCount(){
            return this.$store.state.cartList.filter(item=>item.checked).length
          },

          isSelectAll(){
           
            if (this.$store.state.cartList.length===0) return false
            return  !this.$store.state.cartList.find(item=>!item.checked)

          }

        },
        methods: {

          ckeckedClick(){
             console.log('sdsd',this.isSelectAll)
              //第一种情况 没有选择的情况全部选中 点击一次全部选中
              //第二种情况部分选中，点击一次全部选中
              if(this.isSelectAll){
                 this.$store.state.cartList.forEach(e => {
                    e.checked=false
                });
              }else{
                 this.$store.state.cartList.forEach(e => {
                    e.checked=true
                });
              }

          }
          
        },

    }
</script>

<style  scoped>
.bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>