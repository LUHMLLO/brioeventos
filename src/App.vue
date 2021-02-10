<template>
  <div id="app" class="overflow-hidden vh:h-1000">
    <BrioLayout>
      <router-view />
    </BrioLayout>
  </div>
</template>


<script>
export default {
  name: "Home",
  components: {
    BrioLayout: () => import("@/layouts/BrioLayout")
  }
};
</script>
