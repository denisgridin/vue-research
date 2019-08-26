import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/normalize.css'

Vue.use(ElementUI)
// Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
