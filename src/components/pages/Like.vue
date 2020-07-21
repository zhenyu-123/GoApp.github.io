<template>
  <div>
      <div class="tian"></div>
    <!-- 头部 -->
    <div class="like">
      <div class="like-top">
        <img src="@/assets/img/hot.png" alt />猜你喜欢
      </div>
      <!-- 列表 -->
      <ul   class="like-box border-bottom" v-for="item in likelist" :key="item.id">
        <li class="like-item" @click="detail(item.id)">
          <div class="like-left">
            <img v-lazy='item.src'  alt />
          </div>
          <div class="like-right">
            <p class="p1">{{item.title}}</p>
            <p class="p2">{{item.common}}</p>
            <div class="right-box">
              <span class="r-1">￥{{item.price}}</span> 起
              <span class="r-2">{{item.rigon}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  // props:['likelist'],
    data(){
        return{
                 "likelist": [
            {
                "id": "01",
                "src": require("@/assets/img/like.jpg"),
                "title": "金海湖风景区",
                "common": "1314条评论",
                "price": "14",
                "rigon": "平谷区"
            },
            {
                "id": "02",
                "src": require("@/assets/img/like.jpg"),
                "title": "金海湖风景区",
                "common": "1314条评论",
                "price": "14",
                "rigon": "平谷区"
            }
        ]
        }
    },
    methods:{
      detail(id){
        this.$router.push({name:'detail',query:{"id":id}})
      }
    }
};
</script>
<style lang="scss" scoped>
.like-box {
  width: 100%;
  position: relative;
  padding-top: .2rem;
  .like-item {
      padding: 0 .2rem;
  
    overflow: hidden;
    .like-left {
      float: left;
      img{
          width: 2rem;
          height: 2rem;
      }
    }
    .like-right{
        padding-left: 2.2rem;

        .p1{
            font-size: .32rem;
            margin: .3rem 0;
        }
        .p2{
            font-size: .2rem;
        }
        .right-box{
            position: relative;
            width: 100%;
            margin: .2rem 0;
            .r-1{
                font-size: .32rem;
                color: #f48e11;
            }
            .r-2{
                font-size: .28rem;
                line-height: .45rem;
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
  }
}

// 猜你喜欢
.like {
}
.like-top {
  font-size: 0.28rem;
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;

  img {
    width: 0.4rem;
    height: 0.4rem;
    margin-bottom: -0.1rem;
  }
}
</style>