import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../views/Daily')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/Link')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
