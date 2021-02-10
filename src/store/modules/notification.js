const state = {
  notification: false
};
const getters = {
  notificationStatus: state => state.notification
};
const mutations = {
  notification_mutation(state) {    
    state.notification = !state.notification;
    setTimeout(() => {
      state.notification = !state.notification;
    }, 10000);
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
