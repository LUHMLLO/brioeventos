<template>
  <div id="dashboard">
    <!------------------------------------------------->
    <section class="row offset-x-16 offset-t-16">
      <div class="col-8 sm:col-12">
        <VideoPlayer class="overflow-hidden" :class="[theme.radius]" />
      </div>

      <div class="col-4 sm:col-12 p-0">
        <DashboardButtons />
      </div>
    </section>
    <!------------------------------------------------->
    <section class="row offset-x-16">
      <div class="col-4 sm:col-12">
        <EventList />
      </div>
      <div class="col-4 sm:col-12">
        <EventList />
      </div>
      <div class="col-4 sm:col-12">
        <EventList />
      </div>
    </section>
    <!------------------------------------------------->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    VideoPlayer: () => import("@/components/VideoPlayer"),
    DashboardButtons: () => import("@/components/DashboardButtons"),
    EventList: () => import("@/components/EventList")
  }
};
</script>
