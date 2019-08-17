import Vue from 'vue'
// import index from './views/SlotDemo/index'
import index from './views/V-Bind/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
