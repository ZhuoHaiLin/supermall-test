<template>
  <div id="home">
    <nav-tab class="nav-bar"><div slot="center">购物街</div></nav-tab>
       <TabControl
        class="tabcontrols"
        @tabClick="tabClick"
        ref="tabControlone"
        v-show="isTabFixed"
        :titles="['流行', '新款', '精选']"
      ></TabControl>

    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showtitles"
      :pull-up-load="true"
      :probe-type="3"
    >
      <home-swiper
        :banner="banners"
        ref="hSwiper"
         @swiperClick="swiperClick"
      ></home-swiper>

      <!-- 轮播图下面的组件 -->
      <RecommendView :recommends="recommends"></RecommendView>

      <!-- 本周留行的图片 -->
      <FeatureView></FeatureView>

      <TabControl
        ref="tabControltwo"
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
      ></TabControl>

      <GoodsList :goodsList="showtitles"></GoodsList>
    </Scroll>
    <!-- 点击回到顶部 -->
    <BackTop @backtop="backtopClick" v-show="showBackTop" class="backtop">
      <img src="~assets/img/common/top.png" />
    </BackTop>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavTab from "common/navbar/NavTab";
import TabControl from "content/tabControl/TabControl";
import GoodsList from "./childComps/GoodsList";
import Scroll from "common/scroll/Scroll";
import BackTop from "content/backTop/BackTop";

import { getHomeData, getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavTab,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: false,
      saveY:0
    };
  },

  created() {
    this.getHomeMulti();
    this.getHomeGoodList("pop");
    this.getHomeGoodList("new");
    this.getHomeGoodList("sell");
  },
  computed: {
    showtitles() {
      return this.goodsList[this.currentType].list;
    },
  },
  mounted() {
    //解决scroll 的监听高度无法滑动的问题
    // this.$bus.$on('imgClick',()=>{
    //  this.$refs.scroll.refresh()
    // })
   // this.tabClick(0)
  },
  methods: {
    swiperClick() {
      this.tabOffsetTop=this.$refs.tabControltwo.$el.offsetTop;
      // console.log(this.tabOffsetTop)
    },

    getHomeMulti() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        
      });
    },

    getHomeGoodList(type) {
      //  const pages =this.goodsList[type].page
      getHomeData(type, this.goodsList[type].page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
        //  this.$refs.scroll.refresh() // 第一次加载时无法确定图片数据的多少scroll
        // 插件会出现无法向上滑动，需要重新加载一下这个方法

        this.$refs.scroll.finishPullUp();
      });
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }

     // if(this.$refs.tabControl1!==undefined){
         this.$refs.tabControlone.currnindex=index
         this.$refs.tabControltwo.currnindex=index
    //  }
     
    },
    loadMore() {
      this.getHomeGoodList(this.currentType);
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollTY()
    },

    contentScroll(position) {
      //  // 1.决定tabFixed是否显示
       this.isTabFixed = position.y < -this.tabOffsetTop

      // 2.决定backTop是否显示
      this.showBackTop = position.y < -1000;
    },
    backtopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
  },
};
</script>

<style  scoped>
#home {
   height: 100vh;
   position: relative;
  /* padding-bottom: 44px; */
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: var(--color-background);
 
   position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; 
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}

.tabcontrols {
  
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
}
.backtop {
  position: fixed;
  bottom: 55px;
  right: 20px;
}
</style>