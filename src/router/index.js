import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'examples/Dashboard.v2.vue'
import Deposit from 'components/Deposit.vue'
import Game from 'components/Game.vue'
import User from 'components/User.vue'
import Withdraw from 'components/Withdraw.vue'
import DefaultContainer from 'components/default.vue'
import Login from 'auth/Login.vue'

Vue.use(Router)
let router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      name: 'DefaultContainer',
      component: DefaultContainer,
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
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info')).token != null) {
      next()
    } else {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    }
  } else next()
})
export default router

