<template>
  <div id="app" class="overflow-hidden vh:h-1000">
    <BrioLayout>
      <router-view />
    </BrioLayout>

    <Notification />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    BrioLayout: () => import("@/layouts/BrioLayout"),
    Notification: () => import("@/components/Notification")
  }
};
</script>
