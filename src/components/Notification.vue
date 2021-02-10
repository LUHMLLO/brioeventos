<template>
  <div class="p-16 d-flex width-300 flex-shrink-1 content-center p-fixed bottom right z-index-11 transition" :class="[notificationStatus ? 'opacity-100' : 'opacity-0 hidden']">
    <div class="w-100 h-100 p-16 depth-6" :class="[theme.radius, theme.accent_background, theme.secondary_color]">
      <label class="font-xs pb-5 border-b border-grey-ligthen-2 w-100 d-block">Evento actual</label>
      <div class="d-flex w-100 content-center m-y-5">
        <div class="avatar overflow-hidden m-y-auto ml-0 mr-5" :class="[theme.radius]">
          <img src="@/assets/printo.png" alt="" />
        </div>
        <h6 class="font-sm m-y-auto ml-0">Blue Moon</h6>
      </div>
      <small class="font-xs d-block">molestiae excepturi incidunt, repudiandae iste, placeat asperiores nulla quia cum!</small>
      <a href="#" class="font-xs d-inline-block mt-5 pb-2 border-b border-grey-ligthen-2">Visítanos</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      registration: null,
      snackBtnText: '',
      snackWithBtnText: '',
      snackWithButtons: false,
    };
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        window.location.reload();
      });
    }
  },
  methods: {
    showRefreshUI(e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail;
      console.log(this.registration);
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    },
  },
};
</script>

<style scoped>
.transition {
  transition-duration: 0.5s;
  transition-property: all !important;
  transition-timing-function: ease-in-out;
}
</style>
