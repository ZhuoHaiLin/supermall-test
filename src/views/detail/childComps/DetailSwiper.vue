<template>
  <Swiper class="swipers" v-if="topImages.length">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: Array,
    default() {
      return [];
    },
  },
};
</script>

<style scoped>
.swipers {
  height: 240px;
}
</style>