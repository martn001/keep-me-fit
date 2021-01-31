import Vue from 'vue'
import App from './App.vue'
import { vuetify } from './plugins';
import { router } from './router';
import store from './application/store';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
