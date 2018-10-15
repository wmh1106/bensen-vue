import Vue from 'vue'
import Router from 'vue-router'

// import Details from './view/details/index.vue'
// import Change from './view/change/index.vue'
// import List from './view/list/index.vue'
// import Ranking from './view/ranking/index.vue'
// import Date from './view/date/index.vue'

const Details = () => import('./view/details/index.vue')
const Change = () => import('./view/change/index.vue')
const List = () => import('./view/list/index.vue')
const Ranking = () => import('./view/ranking/index.vue')
const Date = () => import('./view/date/index.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/change'
    },
    {
      path: '/change',
      name: 'change',
      component: Change
    }, {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }, {
      path: '/date',
      name: 'date',
      component: Date
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
})
