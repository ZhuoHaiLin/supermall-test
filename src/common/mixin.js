export const backTopMixin={
    data:function(){
        return {
            showBackTop: false
        }
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0, 0, 300);
        }
    }

}