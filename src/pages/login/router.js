import Vue from 'vue'
import Router from 'vue-router'

const Phone = () =>
  import ('./view/phone.vue')
const Code = () =>
  import ('./view/code.vue')
const Agreement = () =>
  import ('./view/agreement.vue')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/phone'
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    }, {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})