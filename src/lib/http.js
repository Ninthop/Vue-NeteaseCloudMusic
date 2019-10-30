import axios from 'axios'
import * as util from '@/lib/util.js'
import { logout } from '@/api/User/user.js'
import store from '../store/index'
import router from '../router/'

//本地运行需自行下载 网易云音乐node接口服务
const error = err => {
	alert('连接错误，请重新连接或登陆')
	console.log(err.response.data)
	if (err.response.data.msg == "需要登录") {
		logout()
		.then(() => {
			store.dispatch('logout')
			router.replace('/')
		})
	}
}

const service = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
	timeout: 1000 * 10,
	withCredentials: true
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

service.interceptors.request.use(
    config => {
        util.startLoading()
        return config
    },
    err => {
        util.endLoading()
        error()
        Promise.reject(err)
    }
)

service.interceptors.response.use(
    res => {
        util.endLoading()
        return res.data
    },
    err => {
        util.endLoading()
        error(err)
        Promise.reject(err)
    }
)

export default service