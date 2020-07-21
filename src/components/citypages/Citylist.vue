<template>
  <div>
     
    <div v-for="(item,index) in citt" :key="index">
        <div class="citylist-header">{{index}}</div>
        <ul class="citylist-grid"> 
          <li class="li hidden1" v-for="i in item" :key="i.id">{{i.name}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["citt"],
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
<style  lang='scss' scoped>
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