<template>
  <div id="layout" class="p-relative">
    <div class="image-wrapper image-background">
      <img src="@/assets/fondoAzul.png" alt="" />
    </div>
    <div class="container sm:p-0 sm:w-100 p-relative">
      <div class="d-flex w-100 vh:h-1000">
        <div class="flex-shrink-1 flex-grow-0 w-15 md:d-none" :class="[theme.secondary_background]">
          <Sidebar />
        </div>
        <div class="flex-shrink-0 flex-grow-1 overflow-hidden overflow-y-scroll p-relative scrollbar-none md:w-100" :class="[theme.primary_background]">
          <div class="p-absolute top left w-100 z-index-11">
            <Header/>
          </div>
          <div id="content" class="mt-50 pt-50">
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
