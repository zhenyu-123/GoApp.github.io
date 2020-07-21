<template>
  <div>
    <div class="header">
      <div class="header-left">
        <i class="iconfont icon-zuoyoujiantou1"></i>
      </div>
      <div class="header-searth">
        <i class="iconfont icon-soushuo"></i>
        <span>搜索目的地</span>
      </div>
      <div class="header-right">
        <router-link to="city">
          {{citys}}
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState} from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['citys'])
  },
  methods: {

  },
  components: {},
  mounted(){
// console.log(this.$store.state)
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/sty.styl';

.header {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #fff;
  display: -webkit-flex;
  display: flex;
  background-color: #00bcd4;

  // background-color:$bgColor ;
  .header-left {
    width: 0.6rem;
    height: 100%;
    font-weight: bold;
    text-align: center;
    font-size: 0.4rem;
  }

  .header-searth {
    flex: 1;
    background-color: #fff;
    height: 0.6rem;
    margin: 0.12rem 0;
    padding-left: 0.2rem;
    line-height: 0.6rem;
    color: #e4e7ea;
    font-size: 0.28rem;
    border-radius: 0.5rem;
  }

  .header-right {
    padding: 0 0.2rem;
    font-size: 0.28rem;
  }

  .header-right a {
    color: #fff;
  }
}
</style>