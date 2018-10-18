import Vue from 'vue'
import competition from './index.vue'

import '@/assets/style/public.scss'
import '@/assets/style/border.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(competition)
}).$mount('#app')
