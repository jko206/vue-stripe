import { createRouter, createWebHistory } from 'vue-router'
import TestingComp from '../components/TestingComp.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  routes: [{ path: '/', component: TestingComp }],
})

export default router
