import Vue from 'vue'
Vue.mixin({
    components:{
        Navbar:()=>import('@/components/Navbar'),
        Sidebar:()=>import('@/components/Sidebar'),
    }
})