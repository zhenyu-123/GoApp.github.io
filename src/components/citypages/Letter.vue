<template>
  <div>
    <div class="letter">
      <div class="letter-li" v-for="(item,index) in cities[1]" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cities"],
  data() {
    return {
    };
  },
  methods: {
   
  },
  mounted() {

  }
};
</script>
<style lang='scss' scoped>
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
</style>