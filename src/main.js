import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueLazyload from 'vue-lazyload'
import Vant from 'vant';
//vuex
import store from './store/index.js'
Vue.use(Vant);
//css
// import 'u-reset';
import './assets/css/u-reset.css'
import './assets/css/iconfont.css'
import 'vant/lib/index.css';

//js
import fastclick from 'fastclick'
fastclick.attach(document.body);

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/404.jpg'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})
//axios
import axios from 'axios';
Vue.prototype.$http=axios;
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
