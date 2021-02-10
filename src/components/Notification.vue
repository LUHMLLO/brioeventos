<template>
  <div class="p-16 d-flex width-300 flex-shrink-1 content-center p-fixed bottom right z-index-11 md:d-none transition" :class="[notificationStatus ? 'opacity-100' : 'opacity-0 hidden']">
    <div class="w-100 h-100 p-16 depth-6" :class="[theme.radius, theme.accent_background, theme.secondary_color]">
      <label class="font-xs pb-5 border-b border-grey-ligthen-2 w-100 d-block">Evento actual</label>
      <div class="d-flex w-100 content-center m-y-5">
        <div class="avatar overflow-hidden m-y-auto ml-0 mr-5" :class="[theme.radius]">
          <img src="@/assets/printo.png" alt="" />
        </div>
        <h6 class="font-sm m-y-auto ml-0">Blue Moon</h6>
      </div>
      <small class="font-xs d-block">molestiae excepturi incidunt, repudiandae iste, placeat asperiores nulla quia cum!</small>
      <a href="#" class="font-xs d-inline-block mt-5 pb-2 border-b border-grey-ligthen-2">Visítanos</a>
    </div>
  </div>
</template>

<style scoped>
.transition {
  transition-duration: 0.5s;
  transition-property: all !important;
  transition-timing-function: ease-in-out;
}
</style>
