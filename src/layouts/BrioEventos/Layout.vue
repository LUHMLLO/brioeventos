<template>
    <div id="BrioEventos" class="bg-grey-lighten-5  padding-x-80 md:padding-x-40 sm:padding-x-0 vh-100 overflow-hidden">

        <div class="image-wrapper image-background image-blur-2">
            <img src="./assets/background.jpg" alt="">
        </div>

        
        <div id="content" class="d-flex depth-6">
            <div class=" padding-0 bg-grey-lighten-5 overflow-hidden vh-100 overflow-scroll scrollbar-none" :class="this.sidebarState ? 'col-8 z-index-12 depth-6':'sm:d-none col-2 md:col-3'">
                <Sidebar/>
            </div>
            <div class="col-10 md:col-9 sm:col-12 padding-0 bg-white  overflow-hidden vh-100  scrollbar-none depth-1-grey-lighten-1" :class="this.sidebarState ? '':'overflow-scroll'">
                <div class="p-fixed top left bg-black-fade-8 vw-100 vh-100 padding-100 z-index-12 cursor-pointer" @pointerdown="toggleSidebar" v-if="this.sidebarState"/> 
                <div class="cover depth-1" :class="this.theaterMode ? '':'margin-bottom-15'">
                    <div class="image-wrapper height-250">
                        <img src="./assets/logo-square.jpg" alt="">
                    </div>
                    <Navbar class="d-none sm:d-block"/>
                </div>
                <div class="padding-x-25">
                    <slot/>
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
export default {
    name: 'Layout_BrioEventos',
    components:{
        Sidebar:()=>import('./components/Sidebar'),
        Navbar:()=>import('./components/Navbar'),
    },
    data(){
        return{
            generalClasses: ['depth-1-grey-lighten-3 bg-white z-index-12','vh-100']
        };
    },
};
</script>