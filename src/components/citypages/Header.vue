<template>
  <div>
    <div class="header">
      <div class="header-left" @click="tohome">
        <i class="iconfont icon-zuoyoujiantou1"></i>
      </div>
      <span class="city-list">
          城市列表
      </span>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        tohome(){
            this.$router.push({'name':'home'});
        }
    }
};
</script>
<style lang='stylus' scoped>
.city-list{
    position:absolute;
    top:0;
    left:42%
}
.header {
  position: fixed;
  z-index 9;
  width: 100%;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #fff;
 
  background-color: #00bcd4;

 
  .header-left {
    width: 0.6rem;
    height: 100%;
    font-weight: bold;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>