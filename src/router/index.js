import Vue from 'vue'
import router from 'vue-router'
import home from '@/components/Home.vue'
import city from '@/components/City.vue'
import detail from "@/components/detail/Detail.vue"
Vue.use(router);
export default new router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        }
        ,
        {
            path: "/city",
            name: "city",
            component: city
        },
        {
            path: "/detail",
            name: "detail",
            component:detail
        }
    ],
    mode: "hash"
})
