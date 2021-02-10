const state = {
  notification: false
};
const getters = {
  notificationStatus: state => state.notification
};
const mutations = {
  notification_mutation(state) {
    state.notification = !state.notification;
    console.log("launching notification");

    setTimeout(() => {
      state.notification = !state.notification;
      console.log("closing notification");
    }, 2500);
  }
};
const actions = {
  launch_notification({ commit }) {
    return commit("notification_mutation");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
