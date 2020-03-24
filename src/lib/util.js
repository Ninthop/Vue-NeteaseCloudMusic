import { Loading } from 'element-ui'
import store from '../store/index'

let loading
const startLoading = () => {
	// store.state.loadIsShown = 1
	console.log(store.state.loadIsShown)
	if (store.state.loadIsShown == 1) {
		loading = Loading.service({
			lock: true,
			text: '加载中……',
			background: 'rgba(0, 0, 0, 0.7)'
		})
	}
}

const endLoading = () => {
	if (store.state.loadIsShown == 1) {
		store.commit('toggleLoad', 1)
		loading.close()
	}
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

const sleep = time => {
	return new Promise((resolve) => setTimeout(resolve, time));
}

export {
	startLoading,
	endLoading,
	shuffle,
	sleep
}