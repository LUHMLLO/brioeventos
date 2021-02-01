const state = {
    sidebarState: false,
};

const getters = {
    sidebar_Getter: state => state.sidebarState,
};

const mutations = {
    sidebar_mutation(state) {
        state.sidebarState = !state.sidebarState;
    },
};

const actions = {
    sidebar_action({commit}) {
        return commit('sidebar_mutation');
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}