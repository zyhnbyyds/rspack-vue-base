import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '../utils/request'

const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
]

export const dynamicRoutes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
]

export const staticRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...constantRoutes,
    ...dynamicRoutes,
    ...staticRoutes,
  ],
})

router.beforeEach((to, _from, next) => {
  const token = getToken()
  if (to.name) {
    if (!router.hasRoute(to.name)) {
      console.log(router.hasRoute(to.name))

      next({ name: 'notFound' })
      return
    }
  }

  if (to.path !== '/login' && !token) {
    next({ name: 'login' })
  }
  else if (to.path === '/login' && token) {
    next({ name: 'home' })
  }
  else {
    next()
  }
})
