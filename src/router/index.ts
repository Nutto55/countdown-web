import { createRouter, createWebHistory } from 'vue-router'
import * as Pages from '@/pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pages.Home
    },
    {
      path: '/form',
      name: 'form',
      component: Pages.FormDetail
    }
  ]
})

export default router
