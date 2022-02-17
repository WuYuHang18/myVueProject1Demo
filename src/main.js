/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp, h } from 'vue';
import App from './App'
import router from './router'
import '@/mock/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
Vue.use(ElementUI)

/* eslint-disable no-new */
createApp({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: () => h(App)
}).use(router).mount('#app')
