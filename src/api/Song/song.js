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

const getSongDetail = data => {
	return request({
		url: '/song/detail',
		method: 'get',
		params: data
	})
}

const JuageCopyRight = data => {
	return request({
		url: '/check/music',
		method: 'get',
		params: data
	})
}

const getSingerSong = data => {
	return request({
		url: '/artists',
		method: 'get',
		params: data
	})
}

export {
	getSong,
	getLyric,
	getSongDetail,
	JuageCopyRight,
	getSingerSong
}