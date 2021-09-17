import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // = router:router,  键和值相同,可以省略
  store,
  render: h => h(App)
})

// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })
