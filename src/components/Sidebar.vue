<template>
  <div class="sidebar overflow-visible w-100">
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
        <div class="p-16 w-100 d-flex flex-column justify-start">
          <!-------------------------------------->
          <div class="input-wrapper p-x-10 p-y-5 bg-grey-lighten-2 color-grey m-y-16" :class="[theme.radius]">
            <i class="uil uil-search font-xs xs:font-base" />
            <input class="font-sm xs:font-base" type="text" placeholder="Buscar..." />
          </div>
          <!-------------------------------------->
          <h6 class="font-xs xs:font-base color-grey mb-5 xs:mb-10">Main</h6>
          <router-link :to="route.name" class="d-inline-flex content-center p-y-8" :class="[theme.radius, activeRoute(route)]" v-for="(route, index) in main_routes" :key="index">
            <i class="font-sm xs:font-xl m-y-auto mr-5 xs:mr-10 ml-0" :class="[route.icon]" />
            <span class="font-xs xs:font-base font-bold m-y-auto ml-0 xs:mt-6 uppercase" v-html="route.name" />
          </router-link>
          <!-------------------------------------->
          <h6 class="font-xs xs:font-base color-grey mb-5 xs:mb-10">Extras</h6>
          <router-link :to="route.name" class="d-inline-flex content-center p-y-8" :class="[theme.radius, activeRoute(route)]" v-for="(route, index) in extra_routes" :key="index + 100">
            <i class="font-sm xs:font-xl m-y-auto mr-5 xs:mr-10 ml-0" :class="[route.icon]" />
            <span class="font-xs xs:font-base font-bold m-y-auto ml-0 xs:mt-6 uppercase" v-html="route.name" />
          </router-link>
          <!-------------------------------------->
        </div>
        <!-------------------------------------->
      </div>
      <div class="sidebar-section overflow-visible">
        <!-------------------------------------->
        <SidebarAvatar />
        <!-------------------------------------->
      </div>
      <!-------------------------------------->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {
    SidebarAvatar: () => import("@/components/Sidebar_Avatar")
  },
  data() {
    return {
      main_routes: [
        { name: "dashboard", icon: "uil uil-create-dashboard" },
        { name: "agenda", icon: "uil uil-schedule" },
        { name: "expositores", icon: "uil uil-podium" },
        { name: "juegos", icon: "uil uil-streering" }
      ],
      extra_routes: [
        { name: "descargas", icon: "uil uil-download-alt" },
        { name: "favoritos", icon: "uil uil-heart" },
        { name: "encuesta", icon: "uil uil-clipboard-alt" },
        { name: "soporte", icon: "uil uil-question-circle" }
      ]
    };
  },
  methods: {
    activeRoute: function(route) {
      let routerRoute = this.$route.path;
      let vRoute = "/" + route.name;
      if (routerRoute === vRoute) {
        return `p-x-10 ${this.theme.secondary_color} ${this.theme.accent_background}`;
      }
    }
  }
};
</script>
