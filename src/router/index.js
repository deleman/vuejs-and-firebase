import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Show from '@/components/Show'
import Single from '@/components/Single'
import VueResource from 'vue-resource'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/footer',
      component: Footer
    },
    {
      path: '/show',
      component: Show
    },
    {
      path: '/single/:id',
      component: Single
    }
  ],
  mode: 'history'
})
