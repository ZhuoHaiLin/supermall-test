import BackTop from "content/backTop/BackTop";

export const backTopMixin={
    components:{
        BackTop
    },
    data(){
        return {
            showBackTop: false
        }
    },
    methods:{
        backtopClick(){
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        listenShowBackTop(position){
            this.showBackTop= position.y <-1000
        }
    
    }

}