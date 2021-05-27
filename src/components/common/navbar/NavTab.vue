<template>
    <div class="nav-bar">
        <div class="nav-left"><slot name="left"></slot></div>
        <div class="nav-center"><slot name="center"></slot></div>
        <div class="nav-right"><slot name="right"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style  scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height:44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100,100,.1);
}

.nav-center{
    flex: 1;
    
}

.nav-left{
    width:60px;
    
}
.nav-right{
    width:60px;
    
}


</style>