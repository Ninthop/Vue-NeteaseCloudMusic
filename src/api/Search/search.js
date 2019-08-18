import request from '@/lib/http.js'

const getSearchResult = data => {
	return request({
		url: '/search',
		method: 'get',
		params: data
	})
}

const getHotSearchS = data => {
	return request({
		url: '/search/hot',
		method: 'get',
		params: data
	})
}

const getSearchAdvice = data => {
	return request({
		url: '/search/suggest',
		method: 'get',
		params: data
	})
}

export {
	getSearchResult,
	getHotSearchS,
	getSearchAdvice
}