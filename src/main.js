import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
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
