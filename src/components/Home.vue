<template>
  <div>
    <!-- <picker></picker> -->
    <headers></headers>
    <swiper :banners="banners"></swiper>
    <Icons :iconlist="iconlist"></Icons>
    <Location></Location>
    <Hot :list="list"></Hot>
    <like :likelist="likelist"></like>
    <vacation :vacationlist="vacationlist"></vacation>
  </div>
</template>
<script lang="ts">
import { mapState } from "vuex";
import headers from "./pages/header.vue";
import swiper from "./pages/Swiper.vue";
import Icons from "./pages/Icons.vue";
import Location from "./pages/Location.vue";
import Hot from "./pages/Hot.vue";
import like from "./pages/Like.vue";
import vacation from "./pages/Vacation.vue";
// import picker from './demo/picker.vue'
export default {
  data() {
    return {
      banners: [],
      iconlist: [],
      vacationlist: [],
      list: [],
      likelist: [],
      changcity: ""
    };
  },
  methods: {
    //判断当前城市是否改变，改变的则发送请求
    ischange() {
      if (this.changcity != this.citys) {
        //state的数据不等于当前的数据时候，发送请求
        this.getHttp();
      }
    },
    getHttp() {
      this.$http
        .get("/api/datahome")
        .then(res => {
          res.data.data.forEach(item => {
            //如果返回值的城市和仓库的城市一样.改变当前城市下的数据
            if (item.citys == this.citys) {
              this.banners = item.banners;
              this.iconlist = item.iconlist;
              this.vacationlist = item.vacationlist;
              this.list = item.list;
              this.likelist = item.likelist;
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["citys"]) //拿到当前状态的城市
  },
  mounted() {
    this.changcity = this.citys; //保存当前的状态
    //发送请求
    this.getHttp();
  },
  activated() {
    //判斷城市是否改变
    this.ischange();
    // console.log(this.citys);
    // console.log(this.changcity);
  },
  deactivated(){
// console.log('被 keep-alive 缓存的组件。')
  },
  components: {
    headers,
    swiper,
    Icons,
    Location,
    Hot,
    like,
    vacation
    // picker
  }
};
</script>