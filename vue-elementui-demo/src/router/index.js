import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Config from '@/components/Config'
import Application from '@/components/Application'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Config',
      component: Config
    },
    {
      path: '/Application',
      component: Application
    }
  ]
})
