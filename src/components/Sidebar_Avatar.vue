<template>
  <div class="p-16 xs:p-y-32 d-flex w-100 content-center" :class="[theme.accent_background, theme.secondary_color]">
    <div class="avatar overflow-hidden m-y-auto ml-0 mr-5 xs:mr-16" :class="[theme.radius]">
      <img src="@/assets/printo.png" alt="avatar" />
    </div>
    <div class="d-flex w-100 content-center justify-between">
      <h6 class="m-y-auto ml-0 font-xs xs:font-base">nombre de usuario</h6>
      <div class="dropdown-wrapper m-y-auto mr-0 font-sm p-relative">
        <button class="uil uil-ellipsis-v toggle p-0 bg-transparent border-none  xs:font-base" :class="[theme.secondary_color]" />
        <div class="flex-grow-1 whitespace-nowrap dropdown top right left tangible z-index-11 depth-1 flex-column p-y-4" :class="[theme.accent_background, theme.radius]">
          <a class="d-inline-flex content-center p-x-10 p-y-4 w-100" @click="toggleNotification">
            <i class="font-sm m-y-auto mr-5 ml-0 uil uil-bell" />
            <span class="font-xs font-bold m-y-auto ml-0 uppercase" v-html="'notificación demo'" />
          </a>
          <router-link :to="route.name" class="d-inline-flex content-center p-x-10 p-y-4 w-100" v-for="(route, index) in app_routes" :key="index + 100">
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
        { name: "ajustes", icon: "uil uil-setting" },
        { name: "cerrar sesión", icon: "uil uil-signout" }
      ]
    };
  }
};
</script>
