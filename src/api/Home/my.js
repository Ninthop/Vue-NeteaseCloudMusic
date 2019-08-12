import request from '@/lib/http.js'

const getSonglist = data => {
	return request({
		url: '/playlist/detail',
		method: 'get',
		params: data
	})
}

const getUserlist = data => {
	return request({
		url: '/user/playlist',
		method: 'get',
		params: data
	})
}

export {
	getSonglist,
	getUserlist
}