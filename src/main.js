import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import apolloClient from "./graphql/apollo";


Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

import './components/export'
import './layouts/export'

import './store/exports/getters'
import './store/exports/methods'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
