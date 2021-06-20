<template>
    <div class="Cart">
       <NavTab class="navtab">
           <div slot="center">购物车({{cartListLength}})</div>
       </NavTab>
       <CartList class="cart-list" :cartList="cartList"></CartList>

       <BottomBar></BottomBar>


    </div>
</template>

<script>
import NavTab from 'common/navbar/NavTab'
import CartList from  './childComps/CartList'
import BottomBar from './childComps/BottomBar'
    export default {
        components:{
            NavTab,
            CartList,
            BottomBar
        },
        computed:{
            cartListLength(){
                return this.$store.state.cartList.length
            },
            cartList(){
                return this.$store.state.cartList

            }

        }
        
    }
</script>

<style  scoped>
.Cart{
    height: 100vh;
    /* position: relative;
    z-index: 1; */
    /* background-color: #fff; */
}
.navtab{
    background-color: var( --color-tint);
    color:#fff;
    font-weight: 700;
}

.cart-list{
    position: absolute;
    top:44px;
    bottom: 49px;
    width: 100%;
}

</style>