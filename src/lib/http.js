import axios from 'axios'
import * as util from '@/lib/util.js'

const error = err => {
	alert('连接错误，请重新连接或登陆')
	console.log(err.response)
}

const service = axios.create({ 
    baseURL: 'http://localhost:3000',
	timeout: 1000 * 10,
	withCredentials: true
});

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