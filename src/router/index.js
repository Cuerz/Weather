import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyNuist from '../views/MyNuist.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mynuist',
    name: 'mynuist',
    component: MyNuist
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
