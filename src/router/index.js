import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ContentDetail from '@/components/content-detail'

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
    }
  ]
})

