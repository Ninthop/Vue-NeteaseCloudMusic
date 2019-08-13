import request from '@/lib/http.js'

const getUserInfo = data => {
	return request({
		url: '/user/detail',
		method: 'get',
		params: data
	})
}

const logout = () => {
	return request({
		url: '/logout',
		method: 'get'
	})
}

export {
	getUserInfo,
	logout
}