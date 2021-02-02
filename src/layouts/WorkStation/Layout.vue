<template>
    <div id="WorkStation" class="d-flex flex-stretch vh-100 overflow-hidden">

        <div class="padding-0" :class="[generalClasses, !this.sidebarState ? 'sm:d-none':'sm:vw-45']">
            <Sidebar/>
        </div>

        <div class="h-100 overflow-scroll scrollbar-none sm:w-100" style="width: 100% !important;">
            <Navbar class="h-10 depth-1-grey-lighten-3"/>
            <div id="view-content" class="bg-grey-lighten-5 w-100 min-vh-100 padding-25">
                <div class="bg-white round-2 padding-25 h-100 w-100 margin-auto depth-1-grey-lighten-3">
                    <h1 class="margin-bottom-25">{{$route.name}}</h1>
                    <slot/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Layout_WorkStation',
    components:{
        Navbar:()=>import('./components/Navbar'),
        Sidebar:()=>import('./components/Sidebar'),
    },
    data(){
        return{
            generalClasses: ['depth-1-grey-lighten-3 bg-white z-index-12','vh-100']
        };
    },
};
</script>