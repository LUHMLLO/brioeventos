<template>
  <div id="layout" class="p-relative">
    <div class="image-wrapper image-background">
      <img src="@/assets/fondoAzul.png" alt="" />
    </div>
    <div class="container debug sm:p-0 sm:w-100 p-relative">
      <div class="d-flex w-100 vh:h-1000">
        <div class="col-2 p-0" :class="[theme.secondary_background]">
          <Sidebar />
        </div>
        <div class="col-10 p-0 overflow-hidden overflow-y-scroll p-relative scrollbar-none" :class="[theme.primary_background]">
          <div class="p-sticky m-0 top left w-100 z-index-11">
            <Header/>
          </div>
          <div id="content">
            <div class="p-20">
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
    Sidebar: () => import("@/components/Sidebar"),
    Header: () => import("@/components/Header")
  }
};
</script>
