import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
  import ('./view/home.vue')


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})