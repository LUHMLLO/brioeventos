<template>
  <div class="p-16 d-flex width-300 flex-shrink-1 content-center p-fixed bottom right z-index-11 transition" :class="[notificationStatus ? 'opacity-100' : 'opacity-0 hidden']">
    <div class="w-100 h-100 p-16 depth-6" :class="[theme.radius, theme.accent_background, theme.secondary_color]">
      <label class="font-sm pb-5 border-b border-grey-ligthen-2 w-100 d-block">Notificación</label>
      <div class="d-flex w-100 content-center m-y-5">
        <div class="avatar overflow-hidden m-y-auto ml-0 mr-5" :class="[theme.radius]">
          <img src="@/assets/printo.png" alt="" />
        </div>
        <h6 class="font-md m-y-auto ml-0">{{ notificationOwner }}</h6>
      </div>
      <small class="font-sm d-block">{{ notificationText }}</small>
      <a class="font-sm d-inline-block mt-5 pb-2 border-b border-grey-ligthen-2" @click.stop="refreshApp">{{ notificationButtonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notificationOwner: {
      type: String
    },
    notificationText: {
      type: String
    },
    notificationButtonText: {
      type: String
    }
  },
  data() {
    return {
      refreshing: false,
      registration: null
    };
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (this.refreshing) return;
        this.refreshing = true;
        window.location.reload();
      });
    }
  },
  methods: {
    showRefreshUI(e) {
      this.registration = e.detail;
      this.toggleNotification();
      this.notificationOwner = "¡Nueva versión disponible!";
      this.notificationText = "Se ha detectado una actualización más reciente, se cargará automáticamente la próxima vez que acceda a la plataforma o puede ejecutar la actualización de inmediato";
      this.notificationButtonText = "Actualizar ahora";
    },
    refreshApp() {
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    }
  }
};
</script>

<style scoped>
.transition {
  transition-duration: 0.5s;
  transition-property: all !important;
  transition-timing-function: ease-in-out;
}
</style>
