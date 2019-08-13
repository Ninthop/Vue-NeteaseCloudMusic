import { getUserInfo } from '@/api/User/user.js'

const actions = {
    changeUserInfo ({commit, rootState}) {
		getUserInfo({
			uid: rootState.uid
		})
		.then(res => {
			commit('changeUserInfo', res)
			console.log(res)
		})
	}
}

export default actions