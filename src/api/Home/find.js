import request from '@/lib/http.js'

const getBanner = data => {
	return request({
		url: '/banner',
		method: 'get',
		params: data
	})
}

const getRecList = data => {
	return request({
		url: '/personalized',
		methods: 'get',
		params: data
	})
}

const getAlbum = data => {
	return request({
		url: '/album/newest',
		methods: 'get',
		params: data
	})
}
export {
	getBanner,
	getRecList,
	getAlbum
}