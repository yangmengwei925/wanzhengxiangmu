import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/setRem'
import './assets/reset.css'
import './components/'
import '@/static/font/iconfont.css'
import '@/api/'
import '@/utils/dir';
import alert from '@/plugins/alert.js'

Vue.use(alert);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
