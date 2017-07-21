import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ContentDetail from '@/components/content-detail'
import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/content-detail',
      component: ContentDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

