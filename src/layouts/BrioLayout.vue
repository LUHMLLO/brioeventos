<template>
  <div id="layout" class="p-relative">
    <div class="image-wrapper image-background">
      <img src="@/assets/fondoAzul.png" alt="" />
    </div>
    <div class="container p-relative">
      <div class="d-flex w-100 vh:h-1000">
        <div class="flex-shrink-1 flex-grow-0 w-15 md:d-none" :class="[theme.secondary_background]">
          <Sidebar />
        </div>
        <div class="flex-shrink-0 flex-grow-1 overflow-hidden overflow-y-scroll" :class="[theme.primary_background]">
          <Header />
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
