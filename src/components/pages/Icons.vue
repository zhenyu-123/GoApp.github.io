<template>
  <div class="icons">
    <swiper :options="swiperOptions1">
      <swiper-slide v-for="(items,index2) in page" :key="index2">
        <div class="items" v-for="(item,index1) in items" :key="index1">
          <img :src="item.src" alt />
          <span>{{item.title}}</span>
        </div>
      </swiper-slide>
        <div class="swiper-pagination   dd" slot="pagination"></div>

    </swiper>
  </div>
</template>
<script>

 
export default {
  props:['iconlist'],
  data() {
    return {
      swiperOptions1: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    //列表的分页器
    page() {
      let pagesarry = [];
      this.iconlist.forEach((v, i) => {
        // i 下标 0-9
        let indx = Math.floor(i / 8);
        if (!pagesarry[indx]) {
          //!0
          pagesarry[indx] = []; //不存在，就赋值一个空数组
        }
        pagesarry[indx].push(v);
      });
      return pagesarry;
    }
  }
};
</script>
<style lang="scss" scoped>
.dd{
    background: red;
    position: absolute;
    top: 3.8rem;
}
.swiper-container{
overflow: initial;
}
.icons {
  width: 100%;
  overflow: hidden; //轮播点
  height: 4.4rem; //轮播点
  .items {
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    //  background:#ccc;
    text-align: center;
    float: left;
    img {
      width: 1.1rem;
      height: 1.1rem;
      display: block;
      margin: auto;
      padding-top: 0.2rem;
    }
    span {
      font-size: 0.28rem;
      color: #212121;
      display: block;
      margin-top: 0.1rem;
    }
  }
}
</style>