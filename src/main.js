import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // = router:router,  键和值相同,可以省略
  render: h => h(App)
})

// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })
