<template>
  <div>
    <div class="hot-top">
      <div class="top-left">
        <img src="@/assets/img/hot.png" alt />
        <!-- 
        2-->
        <span>本周热卖榜单</span>
      </div>
      <div class="top-right">
        <span>全部榜单 ></span>
      </div>
    </div>

    <div class="hot-list1">
      <div class="hot-item" v-for="item in list" :key="item.id">
        <img :src="item.src" alt />
        <p class="p1">{{item.p1}}</p>
        <p class="p2" >{{item.p2}}</p>
        <p class="p3" v-cloak>{{item.p3}}</p>
      </div>
    </div>
     

  </div>
</template>
<script>
export default {
  props:['list'],
  data() {
    return {

    }
  }
};
</script>
<style lang="scss" scoped>
//list
  .hot-list1::-webkit-scrollbar {
        display: none;
    }
.hot-list1 {
  overflow-x: scroll;
  display: flex;
  padding-bottom: .15rem;
  .hot-item {
    padding: 0.03rem 0.2rem;
    width: 3.4rem;
    // float: left;
    display: inline-block;
    img {
      width: 100%;
      height: auto;
    }
    .p1 {
      font-size: 0.14rem;
      font-weight: 450;
      line-height: 1.5;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .p2 {
      font-size: 0.13rem;
      font-weight: 100;
      color: #555;
      margin-bottom: 0 !important;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .p3 {
      color: #ff7400;

      font-size: 0.18rem;
      font-weight: 550;
    }
  }
}
//top
.hot-top {
  padding: 0.2rem 0;
  width: 100%;
  overflow: hidden;
  font-size: 0.28rem;
  .top-left {
    padding-top: 0.1rem;
    float: left;
    overflow: hidden;
    margin-left: 0.2rem;
    img {
      width: 0.4rem;
      float: left;
    }
    span {
      float: left;
    }
  }
  .top-right {
    float: right;
    padding-top: 0.1rem;
    margin-right: 0.2rem;
  }
}
</style>