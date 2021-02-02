import Vue from 'vue'
Vue.mixin({
    components:{
        Slider:()=>import('@/components/Slider'),
    }
})