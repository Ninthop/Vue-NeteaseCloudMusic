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

function Random (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const shuffle = arr => {
	for (let i = 0; i < arr.length; i++) {
		let j = Random(0, i)
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	return arr
}

export {
    startLoading,
	endLoading,
	shuffle
}