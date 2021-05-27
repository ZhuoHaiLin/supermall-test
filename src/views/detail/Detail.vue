<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" ></DetailNavBar>
    <Scroll ref="scroll" class="content">
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
    <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
    <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>

    </Scroll>

    
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
import Scroll from 'common/scroll/Scroll'


import { getDetail, Goods,Shop,GoodsParam } from "network/detail";

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
    DetailCommentInfo
   
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo: {},
      commentInfo:{}
    };
  },

  created() {
       this.iid=this.$route.query.id
       this.GetDetailData();
  },
  mounted() {},

  activated() {
    // this.initData(); 初始化数据
    //this.GetDetailData();
  },
  methods: {
    // initData() {
    //   let _self = this;
    //   _self.iid = this.$route.query.id;
    // },

    imageLoad(){
      this.$refs.scroll.refresh()

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

        console.log('goos',this.goods)
      });
    },
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