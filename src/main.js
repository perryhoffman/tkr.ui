// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import App from './App'
import Navbar from './components/Navbar'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false
// Vue.http.headers.common['Authorization'] = 'Bearer :' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyIsInR5cGUiOi…VzIn0.y7xT_72Cd1e3uASyJmMeRVR-ceQ8fH8mNCknhujBHOA';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
