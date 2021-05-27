<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @tabitemclick="tabitemclick" ref="navbar" ></DetailNavBar>
    <Scroll ref="scroll" class="content"  @scroll="contentScroll" :probe-type="3">
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
    <DetailParamInfo  ref="paraminfo" :paramInfo="paramInfo"></DetailParamInfo>
    <DetailCommentInfo ref="commentinfo" :commentInfo="commentInfo"></DetailCommentInfo>
    <GoodsList  ref="recommend" :goodsList="recommendList"></GoodsList>

    </Scroll>

    <DetailBottomBar></DetailBottomBar>

    
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from  './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'



import Scroll from 'common/scroll/Scroll'

import GoodsList from '../home/childComps/GoodsList'


import { getDetail, Goods,Shop,GoodsParam,getRecommend } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
   
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo: {},
      commentInfo:{},
      recommendList:[],
      themeTopYs:[],
      currentIndex:0 
    };
  },

  created() {
       this.iid=this.$route.query.id
       this.GetDetailData();
       this.GetRecommendData()
  },

  activated() {
    // this.initData(); 初始化数据
    //this.GetDetailData();
  },
  updated() {
 
  },
  methods: {
    // initData() {
    //   let _self = this;
    //   _self.iid = this.$route.query.id;
    // },
   

    imageLoad(){
      this.$refs.scroll.refresh()

   //方法一， 滑动定位到正确的标签栏
    this.themeTopYs=[]
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.paraminfo.$el.offsetTop)
    this.themeTopYs.push(this.$refs.commentinfo.$el.offsetTop)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
  
   //方法二，滑动定位到正确的标签栏
   this.themeTopYs.push(Number.MAX_VALUE)
    // console.log(this.themeTopYs)
    },

    GetDetailData() {
      getDetail(this.iid).then((res) => {
        const data=res.result
        this.topImages = data.itemInfo.topImages;
        //获取商品的数据
        this.goods=new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺的信息
        this.shop=new Shop(data.shopInfo)
        //获取商品信息
        this.detailInfo = data.detailInfo
        //保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        //保存评论信息
         if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }

        //console.log('goos',this.goods)
      });
    },
  
  //推荐列表的数据
    GetRecommendData(){
      getRecommend().then(res=>{
        this.recommendList=res.data.list

      })
    },
    tabitemclick(index){
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position){

      let positionY=-position.y

      let length=this.themeTopYs.length

      // [0, 9232, 9974, 10169]

      // 1、在0和9232 之间 index=0
      // 2、在9232和9975 之间  index=1
      // 3、在9975和10169 之间  index=2
      // 4、大于10169 之后   index=3
      
      //方法一
      // for(let i=0;i<length;i++){
      //   if(this.currentIndex!==i && ((i<length-1 && positionY >= this.themeTopYs[i] && 
      //   positionY < this.themeTopYs[i+1])||(i === length-1 && positionY >= this.themeTopYs[i]))){
      //     this.currentIndex=i;
      //     this.$refs.navbar.currentIndex=this.currentIndex
      //   }
      // }

      //方法二 用一个最大值做比价
      for (let i = 0; i <length-1; i++) {
         if( this.currentIndex!==i &&  (positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) ){
           this.currentIndex=i;
           this.$refs.navbar.currentIndex=this.currentIndex
         }
        
      }


 
    }


  },
};
</script>

<style  scoped>

#detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color:#fff;
  }

  .content {
  height: calc(100% - 44px);
  }
</style>