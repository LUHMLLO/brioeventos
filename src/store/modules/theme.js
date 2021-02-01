const state = {
    themeState: false,
    currentTheme: {},
    themes: [
        {
            theme: 'Light',
            p_color: 'color-dark-powder',
            p_background: 'bg-baby-powder',
            s_background: 'bg-grey-lighten-3',
            hover: 'bg-white-fade-8-hover',
            active: 'bg-white-active',
        },
        {
            theme: 'Dark',
            p_color: 'color-baby-powder',
            p_background: 'bg-dark-powder',
            s_background: 'bg-grey-darken-4',
            hover: 'bg-black-fade-2-hover',
            active: 'bg-black-fade-6-active',
        }
    ]
};



const getters = {
    currentTheme_getter: state => state.currentTheme,
    themeState_getter: state => state.themeState,
};



const mutations = {
    check_state(state){
        state.themeState = JSON.parse(localStorage.getItem("themeState"))
    },
    toggle_state(state){
        state.themeState = !state.themeState
        localStorage.setItem('themeState',JSON.stringify(state.themeState))
    },
    toggle_theme(state) {   

        if(!state.themeState){
            state.currentTheme = state.themes[0] //state.themeState is true, toggle light mode
        }
        else{
            state.currentTheme = state.themes[1] //state.themeState is true, toggle dark mode
        }

    },
};



const actions = {
    async toggle_theme({commit}){
        await commit('toggle_state');
        commit('toggle_theme');
    },
    async set_theme({commit}){    
        await commit('check_state')    
        commit('toggle_theme');
    },
};



export default {
    state,
    getters,
    actions,
    mutations
}