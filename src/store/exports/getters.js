import Vue from 'vue'
import { mapGetters} from "vuex";

Vue.mixin({  
  
    computed: {      
    ...mapGetters({
      sidebarState: 'sidebar_Getter',
      theaterMode: 'theaterMode_Getter',
    }),    
  },

})