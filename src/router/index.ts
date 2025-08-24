import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EquipeView from '@/views/EquipeView.vue'
import DestinoView from '@/views/DestinoView.vue'
import TecnologiaView from '@/views/TecnologiaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: EquipeView
    },
    {
      path: '/destino',
      name: 'destino',
      component: DestinoView
    },
    {
      path: '/tecnologia',
      name: 'tecnologia',
      component: TecnologiaView
    },
  ],
})

export default router
