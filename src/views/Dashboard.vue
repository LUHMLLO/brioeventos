<template>
  <BrioLayout>
    <div id="dashboard">
      <!------------------------------------------------->
      <section class="d-flex offset-x-5 offset-t-5 flex-wrap pb-5">
        <div class="flex-grow-1 flex-shrink-0 w-65 md:w-100" :class="theme.col_padding">
          <div class="w-100 s:h-300 bg-grey-darken-4 overflow-hidden" :class="[theme.radius]">
            <VideoPlayer />
          </div>
        </div>

        <div class="flex-grow-0 flex-shrink-0 w-35 md:w-100 md:s:h-150 sm:h-100 debug">
          <DashboardButtons class="d-flex flex-wrap w-100 h-100" />
        </div>
      </section>
      <!------------------------------------------------->
      <section class="d-flex flex-wrap">
        <div class="w-50 p-15 md:w-100" :class="[theme.radius,theme.secondary_background]">
          <h6 class="font-sm mt-0 mb-15">Eventos Proximos</h6>
          
          <div class="d-flex content-start justify-start mb-20" v-for="(dummy,index) in 10" :key="index">
            <div class="flex-grow-0 flex-shrink-0">  
              <div class="avatar overflow-hidden mt-3" :class="[theme.radius]">
                <img src="@/assets/printo.png" alt="">
              </div>
            </div>
            <div class="pl-10">
              <h6 class="font-sm m-0">Ea repellat neque impedit beatae sequi nemo blanditiis officia modi.</h6>
              <p class="font-xs m-y-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit unde cumque ea nulla temporibus quis cupiditate minima error dolores repudiandae. </p>
              <span :class="[theme.radius,theme.chip]">
                10:10am
              </span>
            </div>
          </div>

        </div>
        <div class="w-50">
          
        </div>
      </section>
      <!------------------------------------------------->
    </div>
  </BrioLayout>
</template>

<script>
export default {
  name: "Home",
  components: {
    BrioLayout: () => import("@/layouts/BrioLayout"),
    VideoPlayer: () => import("@/components/VideoPlayer"),
    DashboardButtons: () => import("@/components/DashboardButtons")
  }
};
</script>
