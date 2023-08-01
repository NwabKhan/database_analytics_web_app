import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CnicResult from '../views/CnicResult.vue'
import FbrResult from '../views/FbrResult.vue'
import TelcoResult from '../views/TelcoResult.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },  
    {
      path: '/cnicresult',
      name: 'cnic',
      component: CnicResult
    },  
    {
      path: '/fbrresult',
      name: 'fbr',
      component: FbrResult
    },  
    {
      path: '/telcoresult',
      name: 'telco',
      component: TelcoResult
    },  
  ]
})

export default router
