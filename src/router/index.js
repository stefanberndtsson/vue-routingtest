import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'

function queryHandler(route) {
  console.log("queryHandler", route.query)
  return {
    name: route.query.name,
    info: route.query.info,
    role: route.query.role
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: queryHandler
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2,
    props: queryHandler
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
