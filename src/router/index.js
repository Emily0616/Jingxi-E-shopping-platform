import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
// import itemShow from '@/components/itemShow'
// import login from '@/components/login'
import issues from '@/components/issues'
import welcome from '@/components/welcome'
import shopcart_pay from '@/components/shopcart_pay'
import confirm_pay from '@/components/confirm_pay'
import setting from '@/components/setting'
import shop from '@/components/shop'
// import setting from '@/components/setting'
// import itemList from '@/components/itemList'

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'shop',
      component: shop
    },
    // {
    //   path: '/itemShow',
    //   name: 'itemShow',
    //   component: itemShow
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/issues',
    //   name: 'issues',
    //   component: issues
    // },
    // {
    //   path: '/welcome',
    //   name: 'welcome',
    //   component: welcome
    // },
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: setting
    // },
    // {
    //   path: '/itemList',
    //   name: 'itemList',
    //   component: itemList
    // },
    // {
    //   path: '/Home',
    //   name: 'Home',
    //   component: Home
    // }
  ],
  mode: "history"
})
