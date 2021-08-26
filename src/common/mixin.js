import BackTop from "content/backTop/BackTop";

import {POP, NEW, SELL} from "./const";

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
           console.log('执行混入函数')
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        listenShowBackTop(position){
            this.showBackTop= position.y <-1000
        }
    
    }

}

export const tabControlMixin = {
    data() {
      return {
        currentType: POP
      }
    },
    methods: {
      tabClick(index) {
        
        switch (index) {
          case 0:
            this.currentType = POP
            break
          case 1:
            this.currentType = NEW
            break
          case 2:
            this.currentType = SELL
            break
        }
        console.log('执行混入函数')
        console.log(this.currentType);
      }
    }
  }