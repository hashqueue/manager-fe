import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('../components/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: {
          title: '欢迎'
        },
        component: () => import('../views/Welcome.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
