# -App
仿去哪儿App

###项目技术 swiper、scss、stylus、vue.js、axios、vuex、fastclick、layzload
### 起步
* 安装fastclick包(解决浏览器300毫秒延迟)
```
npm run fastclick
```
* main.js中
```
import fastclick from 'fastclick'
fastclick.attach(document.body);

```
* 下载u-reset和iconfont文件，导入assets文件夹中
```
import './assets/css/u-reset.css'
import './assets/css/iconfont.css'
```
### 轮播
在github中搜索vue-swiper

### 分类分页效果同样用swiper实现
应该的数据格式：
```
pages:{
[]，
[]
}
```
*** 代码 ***
```
  computed: {
    //列表的分页器
    page() {
      let pagesarry = [];
      this.iconlist.forEach((v, i) => {
        // i 下标 0-9
        let indx = Math.floor(i / 8);
        if (!pagesarry[indx]) {
          //!0
          pagesarry[indx] = []; //不存在，就赋值一个空数组
        }
        pagesarry[indx].push(v);
      });
      return pagesarry;
    }
  }
```
### better-scroll(多用列表滚动，弹性滚动)
```
let wrapper=this.$refs.wrapper;
    console.log(wrapper);
    new BScroll(wrapper)
```
注意的坑：
* 最外层的元素要用定为放大 top:.88rem(要有一点距离)
* 在字母跳转对应页面的时候，如果没有最外层的top，会靠上
