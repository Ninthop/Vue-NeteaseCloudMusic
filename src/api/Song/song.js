import request from '@/lib/http.js'

const getSong = data => {
	return request({
		url: '/song/url',
		method: 'get',
		params: data
	})
}

const getLyric = data => {
	return request({
		url: '/lyric',
		method: 'get',
		params: data
	})
}

export {
	getSong,
	getLyric
}