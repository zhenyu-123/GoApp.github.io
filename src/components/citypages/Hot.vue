<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <!-- 热门城市 -->
      <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <li @click="toletter(item.name)"  class="hot-li" v-for="item in hotCiti[0]" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="hot-title">字母排序</div>
      </div>
      <!-- 字母排序 -->
      <div class="letter">
        <div class="letter-li" @click="letters(item)" v-for="(item,index) in cities[1]" :key="index">{{item}}</div>
      </div>
      <!-- 字母 -->
      <div  v-for="(item,index) in citt" :key="index" :ref="index" >
        <div class="citylist-header">{{index}}</div>
        <ul class="citylist-grid">
          <li class="li hidden1"   @click="toletter(i.name)" v-for="i in item" :key="i.id">{{i.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import {mapMutations} from 'vuex';
export default {
  props: ["hotCiti", "cities", "citt"],
  data(){
    return{
      scroll:''
    }
  },
  computed:{
  },
  methods:{
    ...mapMutations(['changecity']),//改变状态的方法

    //滚动
    letters(words){
      // console.log(this.$refs)
      this.scroll.scrollToElement(this.$refs[words][0]);
    },
    //点击字母跳到首页
    toletter(letter){
      this.$router.push('/')
      this.changecity(letter);
    }
  },
  mounted(){
   let wrapper=this.$refs.wrapper;
   this.scroll=new BScroll(wrapper,{ mouseWheel: true, click: true, tap: true });//定义一个实例 
  }
};
</script>
<style lang='scss' scoped>
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: .88rem;
  background: #dbdcdc36;

}
.content{

}
// 热门城市
.hot {
  // padding-top: 0.88rem;
}
.hot-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
  background: #dbdcdc36;
}
.hot-list::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 33.33%;
  left: 33.33%;
  border-right: solid #ddd 0.02rem;
  border-left: solid #ddd 0.02rem;
}
.hot-list {
  overflow: hidden;
  position: relative;
  .hot-li {
    position: relative;
    float: left;
    width: 33.33%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: solid #ddd 0.02rem;
  }
}
.hot-list .hot-li:nth-last-child(-n + 3) {
  border-bottom: solid #fff 0.02rem !important;
}
//字母排序
.red {
  background: red;
}
.letter {
  width: 100%;
  overflow: hidden;
  .letter-li {
    text-align: center;
    line-height: 0.9rem;
    width: 16.666%;
    height: 0.9rem;
    float: left;
    font-size: 0.28rem;
  }
}
//字母
.citylist-header {
  background: #dbdcdc36;
  padding: 0.3rem;
}
.citylist-grid {
  overflow: hidden;
  .li {
    box-sizing: border-box;
    line-height: 0.9rem;
    text-align: center;
    width: 25%;
    height: 0.9rem;
    float: left;
    border-bottom: 0.02rem solid #ddd;
    border-right: 0.02rem solid #ddd;
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>