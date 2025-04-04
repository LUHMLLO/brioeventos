import Vue from "vue";
import Vuex from "vuex";
import notification from "./modules/notification";
import navigation from "./modules/navigation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notification,
    navigation
  }
});
