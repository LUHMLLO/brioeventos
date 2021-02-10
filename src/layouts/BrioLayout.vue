<template>
  <div id="layout" class="p-relative">
    <div class="image-wrapper image-background">
      <img src="@/assets/fondoAzul.png" alt="" />
    </div>
    <div class="container sm:p-0 sm:w-100 p-relative">
      <div class="d-flex w-100 vh:h-1000">
        <div class="p-0" :class="[checkSidebarStatus, theme.secondary_background]">
          <Sidebar />
        </div>
        <div class="col-10 sm:col-12 p-0 overflow-hidden overflow-y-scroll p-relative scrollbar-none" :class="[theme.primary_background]">
          <div class="p-fixed top left w-100 h-100 bg-black-fade-6 z-index-10" @click="toggleSidebar" v-if="this.sidebarStatus" />
          <div class="p-sticky m-0 top left w-100 z-index-10">
            <Navbar />
            <Header />
          </div>
          <div id="content">
            <div class="p-16">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrioLayout",
  components: {
    Navbar: () => import("@/components/Navbar"),
    Sidebar: () => import("@/components/Sidebar"),
    Header: () => import("@/components/Header")
  },
  computed: {
    checkSidebarStatus: function() {
      return {
        "w-75 vh:h-1000 p-fixed top left z-index-11 depth-6": this.sidebarStatus,
        "col-2 p-relative sm:d-none": !this.sidebarStatus
      };
    }
  }
};
</script>
