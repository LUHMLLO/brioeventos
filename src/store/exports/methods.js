import Vue from 'vue'
Vue.mixin({  

  methods:{

    toggleSidebar() {
      if (!this.sidebarState) {
        this.$store.dispatch("sidebar_action");
      } else {
        this.$store.dispatch("sidebar_action");
      }
      console.log(this.sidebarState)
    },


  }
})