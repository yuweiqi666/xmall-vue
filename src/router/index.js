import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import register from '@/views/register'
import homepage from '@/views/homepage'
import shopcar from '@/views/shopcar'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/homepage' },
  { path: '/homepage', component: homepage },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/shopcar', component: shopcar }

]

const router = new VueRouter({
  routes
})

export default router
