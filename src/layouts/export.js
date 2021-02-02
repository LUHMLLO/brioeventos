import Vue from 'vue'
Vue.mixin({
    components:{
        Layout_WorkStation:()=>import('./WorkStation/Layout.vue'),
        Layout_BrioEventos:()=>import('./BrioEventos/Layout.vue'),
    }
})