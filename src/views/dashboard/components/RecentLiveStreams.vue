<template>
    <section class="section">
        
        <h6 class="margin-bottom-15">Recent lives</h6>

        <Slider class="offset-right-25 offset-left-25">

            <div class="col-5 md:col-7 sm:col-9 xs:col-11 livechildren" v-for="(stream,index) in liveStreams" :key="index">
                <router-link to="">   
                <div class="round-1 overflow-hidden depth-1-grey-lighten-3 depth-2-grey-lighten-1-hover cursor-pointer height-200 md:height-300">                   
                    <div class="image-wrapper image-background round-1 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a">
                    </div>
                    <div class="w-100 padding-x-15 padding-y-10 p-absolute bottom left bg-black-fade-8 color-baby-powder d-flex flex-between">
                        <div>
                        <h6 class="font-size-12">{{stream.name}}</h6>                      
                        <div class="d-flex flex-start align-content-center align-items-center">
                            <i class="font-size-10 margin-auto margin-x-0" :class="setStatus(stream)"></i>
                            <span class="color-baby-powder font-size-8 margin-auto margin-x-5">{{stream.status}}</span>
                        </div>
                        </div>
                        <i class="uil uil-arrow-right"></i>
                    </div>
                </div>
                </router-link>
            </div>


        </Slider>

    </section>
</template>

<script>
export default {
    name: 'RecentLiveStreams',
    data(){
        return{

            liveStreams: [
                {
                    status: 'live',
                    name: '5G network revolution',
                },
                {
                    status: 'live',
                    name: '5G network revolution',
                },
                {
                    status: 'finished',
                    name: '5G network revolution',
                },
                {
                    status: 'finished',
                    name: '5G network revolution',
                },
            ]

        }
    },
    methods:{
        setStatus: function(stream) {
            return {
                'uil uil-video color-red': stream.status == 'live',
                'uil uil-film color-green': stream.status == 'finished'
            }
        },
    }
}
</script>

<style scoped>

.livechildren:first-child{
    padding-left: 1.5625rem !important;
}
.livechildren:last-child{
    padding-right: 1.5625rem !important;
}

</style>