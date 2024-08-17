import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import detailRouter from './detail'

Vue.use(VueRouter)

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  detailRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

export default router
