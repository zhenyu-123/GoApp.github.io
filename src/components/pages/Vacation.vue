<template>
  <div class="box">
    <div class="vacation-top">
      <p>周末去哪儿</p>
    </div>
    <!-- list -->
    <ul class="vacation" v-for="item in vacationlist" :key="item.id">
      <li class="vacation-box">
        <img :src="item.src" alt />
      </li>
      <p class="p1 hidden1">{{item.title}}</p>
      <p class="p2 hidden1">{{item.description}}</p>
    </ul>
  </div>
</template>
<script>
export default {
   props: ["vacationlist"],
  data() {
    return {
       
    };
  }
};
</script>
<style lang="scss" scoped>
 .vacation{
    padding: .2rem .2rem;
    .vacation-box{
        width: 100%;
        height: 3.3rem; 
        img{
            width: 100%;
            height: 100%;
        }
    }
    .p1{
        font-size: .32rem;
        padding: .2rem 0;
    }
    .p2{
        font-size: .32rem;
        padding-bottom: .2rem;
    }
    
}


.vacation-top {
  padding: 0 0.2rem;
  background: #dfe0e13b;
  p {
    padding: 0.3rem 0;
    font-size: 0.32rem;
  }
}
</style>