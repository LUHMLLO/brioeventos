<template>
  <div id="dashboard">
    <!------------------------------------------------->
    <section class="row offset-x-16">
      <div class="col-9 md:col-12 md:pb-0">
        <VideoPlayer class="mb-16" :class="[theme.radius]" />
        <EventList class="m-y-16" />
      </div>
      <div class="col-3 md:col-12 p-0">
        <DashboardButtons />
      </div>
    </section>
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

/*
<!------------------------------------------------->
<section class="row offset-x-16">
  <div class="col-4 sm:col-12">
  </div>
  <div class="col-4 sm:col-12">
    <EventList />
  </div>
  <div class="col-4 sm:col-12">
    <EventList />
  </div>
</section>
<!------------------------------------------------->
*/
