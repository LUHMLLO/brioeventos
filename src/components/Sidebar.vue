<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <!-------------------------------------->
      <div class="sidebar-section">
        <!-------------------------------------->
        <div class="w-100 height-100 p-relative">
          <div class="image-wrapper h-100">
            <img src="@/assets/logo-b.png" alt="" />
          </div>
        </div>
        <!-------------------------------------->
        <div class="p-16 d-flex flex-column justify-start">
          <!-------------------------------------->
          <div class="input-wrapper p-x-10 p-y-5 bg-grey-lighten-2 color-grey mb-16" :class="[theme.radius]">
            <i class="uil uil-search font-xs" />
            <input class="font-sm" type="text" placeholder="Buscar..." />
          </div>
          <!-------------------------------------->
          <router-link :to="route.name" class="d-inline-flex content-center p-y-8" :class="[theme.radius, activeRoute(route)]" v-for="(route, index) in site_routes" :key="index">
            <i class="font-sm m-y-auto mr-5 ml-0" :class="[route.icon]" />
            <span class="font-xs font-bold m-y-auto ml-0 uppercase" v-html="route.name" />
          </router-link>
          <!-------------------------------------->
        </div>
        <!-------------------------------------->
      </div>
      <div class="sidebar-section">
        <!-------------------------------------->
        <!-------------------------------------->
      </div>
      <!-------------------------------------->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      site_routes: [
        { name: "dashboard", icon: "uil uil-create-dashboard" },
        { name: "agenda", icon: "uil uil-schedule" },
        { name: "exhibitors", icon: "uil uil-podium" },
        { name: "downloads", icon: "uil uil-download-alt" },
        { name: "survey", icon: "uil uil-clipboard-alt" },
        { name: "support", icon: "uil uil-question-circle" },
        { name: "games", icon: "uil uil-streering" }
      ],
      app_routes: [
        { name: "settings", icon: "uil uil-setting" },
        { name: "signout", icon: "uil uil-signout" }
      ],
    };
  },
  methods: {
    activeRoute: function (route) {
      let routerRoute = this.$route.path;
      let vRoute = "/" + route.name;
      if(routerRoute === vRoute){
        return `p-x-10 ${this.theme.secondary_color} ${this.theme.accent_background}`
      }
      
    }
  }
};
</script>
