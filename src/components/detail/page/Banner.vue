<template>
<div>
    <!-- banner -->
    <div class="banner">
    <div class="banner-img" @click="showbannerFn1">
        <img
        src="//img1.qunarzz.com/sight/p0/1505/b6/b691b2e22a915ea0.water.jpg_600x330_0219e7d2.jpg"
        alt
        />
    </div>
    <div class="banner-title">金海湖风景区(3A景区)</div>
    </div>
    <!--列表-->
    <div class="scalbanner" @click="showbannerFn" v-show="showbanner">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <img class="img" :src="item.src" alt />
        </swiper-slide>
    </swiper>
        <div class="swiper-pagination" slot="pagination"></div>

    </div>
</div>
</template>
<script>
export default {
data() {
    return {
    swiperOption: {
        pagination: {
        el: ".swiper-pagination",
        type:'fraction'
        },
        loop: true
    },
    showbanner: false,
    bannerList: [
        {
        id: "01",
        src:
            "//img1.qunarzz.com/sight/p0/1505/b6/b691b2e22a915ea0.water.jpg_600x330_0219e7d2.jpg"
        },
        {
        id: "02",
        src:
            "//img1.qunarzz.com/sight/p0/1505/b6/b691b2e22a915ea0.water.jpg_600x330_0219e7d2.jpg"
        }
    ]
    };
},
methods: {
    showbannerFn1() {
    this.showbanner = true;
    },
    showbannerFn() {
    this.showbanner = false;
    }
}
};
</script>
<style lang="scss" scoped>
.banner {
overflow: hidden;
position: relative;
width: 100%;
.banner-img {
    padding-bottom: 3rem;
    height: 0;
    width: 100%;
    background: #ccc;
    img {
    width: 100%;
    }
}
.banner-title {
    font-size: 0.28rem;
color: #fff;
    position: absolute;
    bottom: 0;
    left: 0.2rem;
}
}
.scalbanner {
background: #000;
position: fixed;
top: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
img {
width: 100%;
    
}
.swiper-pagination{
    color: #fff;
    font-size: .28rem;
    position: absolute;
    bottom: .6rem;
}
}
</style>




