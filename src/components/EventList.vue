<template>
  <div class="p-16" :class="[theme.radius, theme.secondary_background]">
    <h6 class="font-xs color-grey mt-0 mb-15">Eventos Proximos</h6>
    <div class="height-100 sm:height-180 overflow-hidden overflow-y-scroll scrollbar-none">
      <div class="d-flex content-start justify-start mb-20" v-for="(dummy, index) in 10" :key="index">
        <div class="flex-grow-0 flex-shrink-0">
          <div class="avatar overflow-hidden mt-3" :class="[theme.radius]">
            <img src="@/assets/printo.png" alt="" />
          </div>
        </div>
        <div class="pl-10">
          <h6 class="font-xs m-0">Ea repellat neque impedit beatae sequi nemo blanditiis officia modi.</h6>
          <p class="font-xs m-y-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit unde cumque ea nulla temporibus quis cupiditate minima error dolores repudiandae.</p>
          <span :class="[theme.radius, theme.chip]"> 10:10am </span>
        </div>
      </div>
    </div>
  </div>
</template>
