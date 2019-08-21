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
		method: 'get',
		params: data
	})
}

const getAlbum = data => {
	return request({
		url: '/album/newest',
		method: 'get',
		params: data
	})
}

const getLoginRec = data => {
	return request({
		url: '/recommend/resource',
		method: 'get',
		params: data
	})
}

const refreshLogin = () => {
	return request({
		url: '/login/refresh',
		method: 'get'
	})
}

const getAlbumSong = data => {
	return request({
		url: '/album',
		method: 'get',
		params: data
	})
}

const getEverydaySong = data => {
	return request({
		url: '/recommend/songs',
		method: 'get',
		params: data
	})
}

const getNewSong = data => {
	return request({
		url: '/top/song',
		method: 'get',
		params: data
	})
}

export {
	getBanner,
	getRecList,
	getAlbum,
	getLoginRec,
	refreshLogin,
	getAlbumSong,
	getEverydaySong,
	getNewSong
}