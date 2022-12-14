import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyNuist from '../views/MyNuist.vue'
import WeatherView from '../views/WeatherView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FeedBack from '../views/FeedBack.vue'
import FeedbackList from '../views/FeedbackList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/mynuist',
    name: 'mynuist',
    component: MyNuist
  },{
    path: '/weather',
    name: 'weather',
    component: WeatherView,
    meta: {
      requireAuth: true
    }
  },{
    path: '/feedback',
    name: 'feedback',
    component: FeedBack,
    meta: {
      requireAuth: true
    }
  },{
    path: '/allfeedback',
    name: 'allfeedback',
    component: FeedbackList,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
