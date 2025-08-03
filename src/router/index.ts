import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('../views/EquipeView.vue')
    },
    {
      path: '/destino',
      name: 'destino',
      component: () => import('../views/DestinoView.vue')
    },
    {
      path: '/tecnologia',
      name: 'tecnologia',
      component: () => import('../views/TecnologiaView.vue')
    }
  ],
})

export default router
