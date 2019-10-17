
import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/page/home'], resolve)
//菜单一
const about = resolve => require(['@/page/about'], resolve);
const products = resolve => require(['@/page/products'], resolve);
const applications = resolve => require(['@/page/applications'], resolve);
const services = resolve => require(['@/page/services'], resolve);
const videos = resolve => require(['@/page/videos'], resolve);
const contcat = resolve => require(['@/page/contcat'], resolve);
Vue.use(Router);
export const menu = [
  {
    path: '/about',
    component: about,
    meta: { title: 'about' }
  },
   {
     path: '/products',
     component: products,
     meta: { title: 'products' }
   },
   {
     path: '/applications',
     component: applications,
     meta: { title: 'applications' }
   },
    {
     path: '/services',
     component: services,
     meta: { title: 'services' }
   },
   {
     path: '/videos',
     component: videos,
     meta: { title: 'videos' }
   },
   {
     path: '/contcat',
     component: contcat,
     meta: { title: 'contcat' }
   },
]
export default new Router({
  routes: [
    {
      path:'/',
      component: Home,
      children: [
       ...menu
      ]
    },
  ]
})
