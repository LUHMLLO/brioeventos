<template>
  <div class="row">
    <div class="col-12 md:col-3 xs:col-6 pb-0" v-for="(Dbutton, index) in dashboard_buttons" :key="index">
      <router-link to="">
        <div class="height-100 w-100 p-relative overflow-hidden" :class="[theme.radius]">
          <div class="image-wrapper image-background image-overlay-4 image-blur-2">
            <img :src="Dbutton.bg" alt="" />
          </div>
          <div class="w-100 h-100 p-10 p-absolute d-flex flex-column justify-between">
            <div class="mt-0 w-100">
              <span :class="[theme.radius, theme.chip, theme.secondary_background]" v-if="Dbutton.icon">
                <i :class="Dbutton.icon"></i>
              </span>
              <span :class="[theme.radius, theme.chip, theme.secondary_background]" v-if="!Dbutton.icon" v-html="Dbutton.featured" />
            </div>
            <div class="m-y-auto w-100 sm:height-20 sm:m-y-10">
              <p class="font-sm uppercase font-bold m-0" :class="[theme.secondary_color]" v-html="Dbutton.name" />
            </div>
            <div class="mb-0 w-100">
              <span :class="[theme.radius, theme.chip, theme.secondary_background]">
                <i class="uil uil-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dashboard_buttons: [
        {
          featured: "Visítanos",
          name: null,
          icon: null,
          bg: require("@/assets/printo.png")
        },
        {
          name: "sala de exposición",
          icon: "uil uil-presentation-plus",
          bg: "https://images.unsplash.com/photo-1518998053901-5348d3961a04"
        },
        {
          name: "sesiones",
          icon: "uil uil-users-alt",
          bg: "https://images.unsplash.com/photo-1591616369924-833532b76ebc"
        },
        {
          name: "mensajes",
          icon: "uil uil-comments-alt",
          bg: "https://images.unsplash.com/photo-1611746869696-d09bce200020"
        }
      ]
    };
  }
};
</script>
