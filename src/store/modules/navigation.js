const state = {
  sidebar: false
};
const getters = {
  sidebarStatus: state => state.sidebar
};
const mutations = {
  sidebar_mutation(state) {
    state.sidebar = !state.sidebar;
  }
};
const actions = {
  toggle_sidebar({ commit }) {
    return commit("sidebar_mutation");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
