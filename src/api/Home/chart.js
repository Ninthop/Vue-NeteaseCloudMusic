import request from '@/lib/http.js'

const getAllToplist = data => {
	return request({
		url: '/toplist/detail',
		method: 'get',
		params: data
	})
}

const getToplistSong = data => {
	return request({
		url: '/toplist',
		method: 'get',
		params: data
	})
}

export {
	getAllToplist,
	getToplistSong
}