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

const getUserSubcount = () => {
	return request({
		url: '/user/subcount',
		method: 'get'
	})
}

const getUserSubArtist = () => {
	return request({
		url: '/artist/sublist',
		method: 'get'
	})
}

const getUserSubMV = () => {
	return request({
		url: '/mv/sublist',
		method: 'get'
	})
}

const getUserSubAlbum = () => {
	return request({
		url: '/album/sublist',
		method: 'get'
	})
}

const getAblum = data => {
	return request({
		url: '/album',
		method: 'get',
		params: data
	})
}

export {
	getSonglist,
	getUserlist,
	getUserSubcount,
	getUserSubArtist,
	getUserSubMV,
	getUserSubAlbum,
	getAblum
}