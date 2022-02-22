import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Secure from '@/views/Secure.vue'
import authService from '@/services/authService'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    meta: {
      authName: authService.authName
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/' // todo: create and return 404 page
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

authService.useRouter(router)

export default router
