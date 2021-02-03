<template>
    <div id="BrioEventos" class="bg-grey-lighten-5  padding-x-80 md:padding-x-40 sm:padding-x-0 vh-100 overflow-hidden">

        <div class="image-wrapper image-background image-blur-2">
            <img src="./assets/background.jpg" alt="">
        </div>

        
        <div id="content" class="d-flex depth-6">

            <div class="col-2 md:col-3 sm:d-none padding-0   overflow-hidden vh-100 overflow-scroll scrollbar-none">
                <Sidebar/>
            </div>
            <div class="col-10 md:col-9 sm:col-12 padding-0 bg-white  overflow-hidden vh-100 overflow-scroll scrollbar-none depth-1-grey-lighten-1">               

                <div id="header" class="height-400">

                        <div class="image-wrapper image-background">
                            <img src="./assets/logo-square.jpg" alt="">
                            <div class="w-100 h-100" />
                        </div>
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
    },
    data(){
        return{
            generalClasses: ['depth-1-grey-lighten-3 bg-white z-index-12','vh-100']
        };
    },
};
</script>