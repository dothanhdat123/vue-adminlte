import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'examples/Dashboard.v2.vue'
import Deposit from 'components/Deposit.vue'
import Game from 'components/Game.vue'
import User from 'components/User.vue'
import Withdraw from 'components/Withdraw.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
  ],
  linkActiveClass: 'active',
  scrollBehavior: () => ({y: 0})
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info')).token != null) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         params: {nextUrl: to.fullPath}
//       })
//     }
//   } else {
//     if (sessionStorage.getItem('info') && JSON.parse(sessionStorage.getItem('info')).token != null) {
//       if (to.fullPath) {
//         next({
//           path: '/dashboard',
//           params: {nextUrl: to.fullPath}
//         })
//       }
//     }
//     next()
//   }
// })

