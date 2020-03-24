import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouer from './cinema'
import mineRouter from './mine'
Vue.use(VueRouter)

const routes = [
 
movieRouter,
cinemaRouer,
mineRouter,
 {
    path:'/*',
    redirect:'/movie'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
