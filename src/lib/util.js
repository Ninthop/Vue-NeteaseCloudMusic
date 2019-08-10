import { Loading } from 'element-ui'

let loading
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

const endLoading = () => {
    loading.close()
}

export {
    startLoading,
    endLoading
}