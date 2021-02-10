<template>
  <div class="p-16 d-flex w-100 content-center" :class="[theme.accent_background, theme.secondary_color]">
    <div class="avatar overflow-hidden m-y-auto ml-0 mr-5" :class="[theme.radius]">
      <img src="@/assets/printo.png" alt="" />
    </div>
    <div class="d-flex w-100 content-center justify-between">
      <h6 class="m-y-auto ml-0 font-xs">nombre de usuario</h6>
      <div class="dropdown-wrapper m-y-auto mr-0 font-sm p-relative">
        <button class="uil uil-ellipsis-v toggle p-0 bg-transparent border-none" :class="[theme.secondary_color]" />
        <div class="flex-grow-1 whitespace-nowrap dropdown top right left tangible z-index-11 depth-1 flex-column p-y-4" :class="[theme.accent_background, theme.radius]">
          <router-link :to="route.name" class="d-inline-flex content-center p-x-10 p-y-4 w-100" :class="[theme.radius]" v-for="(route, index) in app_routes" :key="index + 100">
            <i class="font-sm m-y-auto mr-5 ml-0" :class="[route.icon]" />
            <span class="font-xs font-bold m-y-auto ml-0 uppercase" v-html="route.name" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar_Avatar",
  data() {
    return {
      app_routes: [
        { name: "notificación demo", icon: "uil uil-bell", function: true },
        { name: "ajustes", icon: "uil uil-setting" },
        { name: "cerrar sesión", icon: "uil uil-signout" }
      ]
    };
  }
};
</script>
