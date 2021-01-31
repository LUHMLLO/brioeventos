import Vue from 'vue'
Vue.mixin({
    components:{
        Navigation:()=>import('@/layouts/Navigation'),
    }
})