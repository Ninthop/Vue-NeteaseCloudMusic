import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Loading } from 'element-ui'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import './assets/style/varibles.styl'
import './assets/style/mixin.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)

new Vue({
  router,
  store,
  fastClick,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')

router.beforeEach ((to, from, next) => {
	if (to.meta.logined) {
		if (Boolean(store.state.loginType)) {
			next ()
		}else {
			next({
				path: '/login'
			})
		}
	}
	next ()
})