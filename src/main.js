// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/base.css'
import './css/main.css'
// import Es6Promise from "es6-promise";
import Resource from 'vue-resource'

// Es6Promise.polyfill();

Vue.use(Resource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
