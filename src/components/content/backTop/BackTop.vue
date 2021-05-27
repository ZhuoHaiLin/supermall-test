<template>
    <div class="batktop" @click="backtopClick">
         <slot></slot>
    </div>
</template>

<script>
    export default {
        methods: {
            backtopClick(){
                this.$emit('backtop')
            }
        },
        
    }
</script>

<style  scoped>
.batktop img{
    width: 43px;
    height: 43px;
}

</style>