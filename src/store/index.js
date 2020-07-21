import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//存到本地
//思路：设置默认值，改本地存储以后，再次刷新，会将本地的值赋给state
let  defaultCity='北京';
defaultCity=localStorage.defaultCity;

const state={
    citys:defaultCity
}
export default new Vuex.Store({
    state,
    getters:{

    },
    mutations:{
        changecity(state,data){
           state.citys=data;//改变当前的state数据
           localStorage.defaultCity=data;//把修改后的数据存到本地
        }
    },
    actions:{

    } 
})