<template>
  <div>
    <div class="location border-top  ">
      <div class="left border-right">
        <i class="iconfont icon-location"></i>
        <span>北京大兴</span>
      </div>
      <div class="right">
        <i class="iconfont icon-diqiu"></i>
        <span>玩水季</span>
      </div>
    </div>
    <!-- 特卖 -->
    <div class="tian"></div>
  
    <div class="sell border-right">
      <div class="sell-left">
        <div class="left-l">
          <p class="p1">门票特卖</p>
          <p class="p2">天天好价1折起</p>
        </div>
        <div class="left-r">
          <img src="@/assets/img/piao.png" alt />
        </div>
      </div>
      <div class="sell-right">
        <div class="right-l">
          <p class="p1">暑假大促</p>
          <p class="p2">领卷立减15元</p>
        </div>
        <div class="right-r">
          <img src="@/assets/img/package.png" alt />
        </div>
      </div>
    </div>
    
    <div class="tian"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.location {
  position: relative;
  width: 100%;
  line-height: 0.8rem;

  display: flex;
  .left {
    flex: 1;
    font-size: 0.28rem;
    text-align: center;
        i{
    font-size: 0.28rem;
        
    }
  }
  .right {
    text-align: center;
    flex: 1;
    font-size: 0.28rem;
    i{
    font-size: 0.28rem;
        
    }
  }
}
// 特卖
.tian {
  width: 100%;
  height: 0.4rem;
  background-color: #eee;
}
.sell {
  position: relative;
  width: 100%;
  display: flex;
  padding: .15rem 0;
  .sell-left {
    flex: 1;
    display: flex;
    .left-l {
      font-size: 0.26rem;
      margin-left: 10%;
    }
    .left-r {
      flex: 1;
      text-align: center;
      img {
        width: 0.5rem;
        margin-top: 0.14rem;
      }
    }
  }

  .sell-right {
    display: flex;
    flex: 1;
    .right-l {
      margin-left: 10%;
      line-height: 0.4rem;
      font-size: 0.26rem;
    }
    .right-r {
      flex: 1;
      text-align: center;
      img {
        width: 0.5rem;
        margin-top: 0.14rem;
      }
    }
  }
}
</style>