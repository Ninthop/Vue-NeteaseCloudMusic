import request from '@/lib/http.js'

const getBanner = data => {
	return request({
		url: '/banner',
		method: 'get',
		params: data
	})
}

export {
	getBanner
}