import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyNuist from '../views/MyNuist.vue'
import WeatherView from '../views/WeatherView.vue'

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
  },{
    path: '/weather',
    name: 'weather',
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
