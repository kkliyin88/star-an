// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import Axios from 'axios'
import 'iview/dist/styles/iview.css';
import './style/main.css';

import { Carousel,CarouselItem} from 'iview';
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
