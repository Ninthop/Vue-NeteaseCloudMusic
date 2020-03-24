import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Loading, Tabs, TabPane } from 'element-ui'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import './assets/style/varibles.styl'
import './assets/style/mixin.styl'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import infiniteScroll from "vue-infinite-scroll"

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$axios = axios;
Vue.use(infiniteScroll)
axios.defaults.withCredentials = true;

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

Vue.filter('formatDate',
	function(date) {
		if (date < 100000) {
			return date
		}else {
			let newDate = `${data / 10000}.${(date/1000)%100}`
			return newDate
		}
	}
)

