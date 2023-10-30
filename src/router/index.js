import { createRouter, createWebHistory } from '@ionic/vue-router';

import PaginaUno from '../views/PaginaUno.vue';
import PaginaDos from '../views/PaginaDos.vue';

import Index from '../views/perfil/Index.vue';
import Fotos from '../views/perfil/Fotos.vue';
import Destacados from '../views/perfil/Destacados.vue';
import Likes from '../views/perfil/Likes.vue';

const routes = [
  {
    path: '/',
    redirect: '/pagina1'
  },
  {
    path: '/pagina1',
    name: 'Pagina Uno',
    component: PaginaUno
  },
  {
    path: '/pagina2/:mensaje',
    name: 'Pagina Dos',
    component: PaginaDos
  },
  {
    path: '/perfil/',
    component: Index,
    children: [
      {
        path: 'fotos',
        component: Fotos,
      },
      {
        path: 'likes',
        component: Likes,
      },
      {
        path: 'destacados',
        component: Destacados,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
