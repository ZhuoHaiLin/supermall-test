<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgClick" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banner: {
      type: Array,
      default(){
        return []
      },
    },
  },
  data() {
    return {
      istab: false,
    };
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer();
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer();
      }
    },

    imgClick() {
      if (!this.istab) {
        this.$emit("swiperClick");
        this.istab = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
