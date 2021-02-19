import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui组件
import './plugins/elements.js'
// axios引入
import './http'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
