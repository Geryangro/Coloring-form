import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import register from '@/components/register'
import transfer from '@/components/transfer'
import searchpage from '@/components/searchpage'
import slideshow from '@/components/slideshow'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    },
    {
      path: '/slideshow',
      name: 'slideshow',
      component: slideshow
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
