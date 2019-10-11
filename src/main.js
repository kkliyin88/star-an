// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'normalize.css'
import Axios from 'axios'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './style/main.css';
import './style/iviewStyle.css';
Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
router.beforeEach((to, from, next) => {
  NProgress.start()
  const user = localStorage.getItem('lz_userName');
  const pass = localStorage.getItem('lz_passNumber');
   if (!user && !pass && to.path !== '/login') {
     next('/login');
  }else{
       localStorage.setItem('lz_userName', user);
       localStorage.setItem('lz_passNumber', pass);
       next()
   }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
