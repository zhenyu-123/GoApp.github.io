<template>
<div>
  <swiper class="header-swiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in banners" :key="index">
      <img class="banner-img" :src="item.src" alt />
    </swiper-slide>
    <div  class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>

</template>
<script>
export default {
  props: ["banners"],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 1000
        }
      }
    };
  },
  components: {}
};
</script>
<style scoped>
.header-swiper {
  /* width:100%; */
  height: 0;
  background: #ccc;
  padding-bottom: 26.67%;
}

.header-swiper /deep/.swiper-pagination-bullet {
  background: #fff;
}
.header-swiper .banner-img {
  width: 100%;
  height: 2rem;
}
.swiper-pagination{
  /* background: #fff; */
}
</style>