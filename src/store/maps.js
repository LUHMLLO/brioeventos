import Vue from "vue";
import { mapGetters } from "vuex";
Vue.mixin({
  computed: {
    ...mapGetters({
      notificationStatus: "notificationStatus",
      sidebarStatus: "sidebarStatus"
    })
  },
  methods: {
    toggleNotification: function() {
      this.$store.dispatch("launch_notification");
    },
    toggleSidebar: function() {
      this.$store.dispatch("toggle_sidebar");
    }
  }
});
