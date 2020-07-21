<template>
  <div>
<Header></Header>
<Banner></Banner>
<div class="fill"></div>
  </div>
</template>
<script>
import Header from './page/header.vue';
import Banner from './page/Banner.vue';
export default {
  components:{
    Header,
    Banner
  },
  activated(){
    window.document.documentElement.scrollTop=0;
  }
}
</script>
<style lang="scss" scoped>
.fill{
  width: 100%;
  height: 1000px;
}
</style>