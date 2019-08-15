import request from '@/lib/http.js'

const getSong = data => {
	return request({
		url: '/song/url',
		method: 'get',
		params: data
	})
}

export {
	getSong
}