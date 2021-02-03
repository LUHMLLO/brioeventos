const state = {
    theaterMode: false,
};

const getters = {
    theaterMode_Getter: state => state.theaterMode,
};

const mutations = {
    theaterMode_mutation(state) {
        state.theaterMode = !state.theaterMode;
    },
};

const actions = {
    theaterMode_action({commit}) {
        return commit('theaterMode_mutation');
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}