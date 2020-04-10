import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'examples/Dashboard.v2.vue'
import Deposit from 'components/Deposit.vue'
import Game from 'components/Game.vue'
import User from 'components/User.vue'
import Withdraw from 'components/Withdraw.vue'
import DefaultContainer from 'components/default.vue'
import Login from 'auth/Login.vue'

// hightchart
import UserHightChart from 'components/hightChart/user.vue'
import RevenueHightChart from 'components/hightChart/revenue.vue'
import VolumeHightChart from 'components/hightChart/volume.vue'

Vue.use(Router)
let router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      name: 'DefaultContainer',
      component: DefaultContainer,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/Deposit',
          name: 'Deposit',
          component: Deposit
        },
        {
          path: '/Game',
          name: 'Game',
          component: Game
        },
        {
          path: '/User',
          name: 'User',
          component: User
        },
        {
          path: '/Withdraw',
          name: 'Withdraw',
          component: Withdraw
        },
        {
          path: '/UserHightChart',
          name: 'UserHightChart',
          component: UserHightChart
        },
        {
          path: '/RevenueHightChart',
          name: 'RevenueHightChart',
          component: RevenueHightChart
        },
        {
          path: '/VolumeHightChart',
          name: 'VolumeHightChart',
          component: VolumeHightChart
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    console.log(sessionStorage.getItem('info'))
    if (sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info')).access_token != null) {
      next()
    } else {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    }
  } else {
    if (sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info')).token != null) {
      if (to.fullPath === '/login') {
        next({
          path: '/',
          params: {nextUrl: to.fullPath}
        })
      }
    }
    next()
  }
})
export default router

