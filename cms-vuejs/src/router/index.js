import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '@/views/Blog'
import Admin from '@/views/Admin'
import Login from '@/views/Login'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  el: '#app',
  routes: [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'blog' }
      },
      {
        path: '/admin',
        name: 'admin',
        component: Admin
      },
      {
        path: '/blog',
        name: 'blog',
        component: Blog
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
  ]
})

export default router