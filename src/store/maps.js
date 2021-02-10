import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
Vue.mixin({
  computed: {
    ...mapGetters({
      notificationStatus: "notificationStatus"
    }),
    ...mapActions({
      launch_notification: "launch_notification"
    })
  },
  methods: {
    toggleNotification: function() {
      this.$store.dispatch("launch_notification");
    }
  }
});
