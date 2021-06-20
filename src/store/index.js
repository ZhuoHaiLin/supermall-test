
import Vue from 'vue'
import Vuex from 'vuex'

//安装vuex 插件
Vue.use(Vuex)


// 创建vuex实例
const store =new Vuex.Store({
    state:{
        cartList:[]
    },

    //单一的方法使用
    // mutations:{
    //     addCart(state,payload){
    //     // let oldProduct=null  //第一种方法
    //     // for(let item  in  state.cartList){
    //     //     if(item.iid===payload.iid){
    //     //         oldProduct=item
    //     //     }
    //     // }
    //     let oldProduct=state.cartList.find(item=>item.iid===payload.iid)
    //     if(oldProduct){
    //         oldProduct.count+=1
    //     }else{
    //        payload.count=1
    //        state.cartList.push(payload)
    //     }
    //     }
    // },

    //分布式的vuex使用
    mutations:{
        addCounter(state,payload){
            payload.count++
        },

        addToCart(state,payload){

            state.cartList.push(payload)
        },

    },
    actions:{
 
        addCart(context,payload){

            return new Promise((resolve)=>{
                let oldProduct =context.state.cartList.find(item=>item.iid===payload.iid)
                if(oldProduct){
                  context.commit('addCounter',oldProduct)
                  resolve('商品加1')
                }else{
                  payload.count=1
                  payload.checked=true
                  context.commit('addToCart',payload)
                  resolve('商品加等于1')
                }

            })
           
        },

    
    }



})

//挂载到原型上
export default store