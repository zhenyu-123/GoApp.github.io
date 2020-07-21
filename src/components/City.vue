<template>
  <div>
    <headers></headers>
    <hot :hotCiti='[hotCities]' :cities='[citt,letter]' :citt='citt'></hot>
    <!-- <Letter :cities='[citt,letter]'></Letter>
    <Citylist :citt='citt'></Citylist> -->
  </div>
</template>

<script>
import headers from "./citypages/Header.vue";
import hot from "./citypages/Hot.vue";
// import Letter from "./citypages/Letter.vue";
// import Citylist from "./citypages/Citylist.vue";
export default {
  data() {
    return {
      hotCities:[],
      letter:[],
      citt:[]
    };
  },
  components: {
    headers,
    hot
  },
  mounted() {
      this.$http.get('/api/city').then((res)=>{
 
      this.citt=res.data.data.cities
      this.letter=Object.keys(res.data.data.cities)
      this.hotCities=res.data.data.hotCities
      })
  },
  created(){
    
  }
};
</script>
<style lang='scss' scoped>
</style>