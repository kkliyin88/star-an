
import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/page/home'], resolve)
//菜单一
const about = resolve => require(['@/page/about'], resolve);
const products = resolve => require(['@/page/products'], resolve);
const levelOne = resolve => require(['@/page/products/levelOne'], resolve);
const levelTwo = resolve => require(['@/page/products/levelTwo'], resolve);
const applications = resolve => require(['@/page/applications'], resolve);
const applicationsLevelOne = resolve => require(['@/page/applications/levelOne'], resolve);
const services = resolve => require(['@/page/services'], resolve);
const videos = resolve => require(['@/page/videos'], resolve);
const contcat = resolve => require(['@/page/contcat'], resolve);
Vue.use(Router);
export const menu = [
  {
    path: '/about',
    component: about,
    meta: { title: 'about' },
	flag:true,
  },
   {
     path: '/products',
     component: products,
     meta: { title: 'products' },
	 flag:true,
   },
   {   
   	meta: { title: 'levelOne' },
   	component: levelOne,
   	path: '/products/levelOne',
	flag:false,
   },
   {   
   	meta: { title: 'levelTwo' },
   	component: levelTwo,
   	path: '/products/levelTwo',
	flag:false,
   },
   {
     path: '/applications',
     component: applications,
     meta: { title: 'applications' },
	 flag:true,
   },
   {
     path: '/applications/levelOne',
     component: applicationsLevelOne,
     meta: { title: 'applications' },
   	 flag:false,
   },
    {
     path: '/services',
     component: services,
     meta: { title: 'services' },
	  flag:true,
   },
   {
     path: '/videos',
     component: videos,
     meta: { title: 'videos' },
	  flag:true,
   },
   {
     path: '/contacts',
     component: contcat,
     meta: { title: 'contacts' },
	  flag:true,
   },
]
export default new Router({
  routes: [
	{ path: '*', redirect: '/about' },
    {
      path:'/',
	  redirect:'/about',
      component: Home,
      children: [
       ...menu
      ]
    },
  ]
})
