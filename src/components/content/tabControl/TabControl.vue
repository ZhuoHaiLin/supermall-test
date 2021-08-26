<template>
    <div class="tabcontrol">
        <div class="tabcontrol-item" @click="tabClick(index)" :class="{active:currnindex===index}" v-for="(item,index) in titles" :key="index">
            <span>{{item}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            titles:Array,
            default(){
                return []
            }
        },
        data() {
            return {
                currnindex:0
            }
        },
        methods: {
            tabClick(index){

                this.currnindex=index
                this.$emit('tabClick',index)
            }
        },      
        
    }
</script>

<style  scoped>
.tabcontrol{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    background: #fff;
}
.tabcontrol-item{
    flex: 1;

}

.tabcontrol-item span{
    padding: 5px;
  
}
.active{
  
   color: var(--color-high-text);
}
.active span {
    border-bottom: 2px solid var(--color-high-text);
  }

</style>