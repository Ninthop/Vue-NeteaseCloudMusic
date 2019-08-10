import axios from 'axios'
import * as util from '@/lib/util.js'

const error = () => {
    alert('连接错误，请刷新重试')
}

const service = axios.create({ 
    baseURL: 'http://localhost:3000',
    timeout: 1000 * 10
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
        error()
        Promise.reject(err)
    }
)

export default service