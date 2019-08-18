import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Loading, Tabs } from 'element-ui'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import './assets/style/varibles.styl'
import './assets/style/mixin.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)
Vue.use(Tabs)


new Vue({
  router,
  store,
  fastClick,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')

router.beforeEach ((to, from, next) => {
	// console.log(store.state.loginType)
	if (to.meta.logined) {
		if (store.state.loginType == 1) {
			// console.log(store.state.loginType)
			next ()
		}else {
			next({
				path: '/login'
			})
		}
	}
	next ()
})


Vue.filter('formatPic',
	function(url) {
		if (!url) return ''
		return `${url}?param=200y200`
	}
)

