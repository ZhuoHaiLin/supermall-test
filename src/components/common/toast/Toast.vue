<template>
    <div class="toast" v-show="isshow">
        <div >{{message}}</div>
    </div>
</template>

<script>
    export default {
         //第一种方法
        // props:{
        //     message:{
        //         type:String,
        //         default:''
        //     },
        //     show:{
        //         type:Boolean,
        //         default:false
        //     }
        // },
        //第二种方法
        data() {
            return {
                isshow:false,
                message:''

                
            }
        },
        methods: {
            showMessage(message,duration=2000){
                this.isshow=true;
                this.message=message

                setTimeout(()=>{
                    this.isshow=false;
                    this.message=''

                },duration)

            }
        },
        
    }
</script>

<style  scoped>
.toast{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    background: rgba(0, 0, 0, .75);
    padding: 8px 10px ;
    z-index: 999;
}


</style>