import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/auth/Login.vue'
import ComponentTest from '../views/componentTest/ComponentTest.vue'
import XZUIComponentDemo from '../views/xzUIComponentDemo/ComponentTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/component-test',
    name: 'component-test',
    component: ComponentTest
  },
  {
    path: '/xz-ui-component-demo',
    name: 'xz-ui-component-demo',
    component: XZUIComponentDemo
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router