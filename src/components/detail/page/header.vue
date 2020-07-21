<template>
  <div>
    <!-- 返回 -->
    <div class="bannerBack" @click="backHome" >
      <i class="iconfont icon-zuoyoujiantou1"></i>
    </div>

    <!-- header -->
    <div class="header" :style="opcityStyle" v-show="isshow">
      <div class="header-left" @click="tohome">
        <i class="iconfont icon-zuoyoujiantou1"></i>
      </div>
      <span class="city-list">北京国际鲜花港</span>
      <div class="header-left"></div>
    </div>
    <!-- fill -->
    <!-- <div class="fill"></div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false,
      opcityStyle:{
          opacity:0
      } 
    };
  },
  mounted() {
    this.initStyle();
  },
  methods: {
    //渐变
    initStyle() {
      let that = this;
      window.addEventListener("scroll", () => {
        let distance = document.documentElement.scrollTop;
        if (distance > 40) {
          let opcitys = (distance / 200) > 1 ? 1 : (distance / 200);
    console.log(10)
          that.opcityStyle.opacity = opcitys;
          that.isshow = true;
        } else {
          that.isshow = false;
        }
      });
    },
    backHome() {
      this.$router.push("/");
    },
    tohome() {
      this.$router.push({ name: "home" });
    }
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.bannerBack {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  opacity: 0.5;
  background: #000;
  z-index: 9;

  .icon-zuoyoujiantou1 {
    display: block;
    text-align: left;
    margin-left: 0.06rem;
    margin-top: 0.04rem;
    font-size: 0.4rem;
    color: #fff;
    font-weight: bold;
  }
}

.city-list {
  flex: 1;
  text-align: center;
}

.header {
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #fff;
  background-color: #00bcd4;

  .header-left {
    display: inline-block;
    width: 0.6rem;
    height: 100%;
    font-weight: bold;
    text-align: center;
    font-size: 0.4rem;
  }
}

.fill {
  width: 100%;
  height: 1000px;
}
</style>