const mutations = {
    changeLoginStatus (state, num) {
		state.loginType = num
        try {
            localStorage.loginType = num
        } catch (error) {}
	},
	changeUid (state, uid) {
		state.uid = uid
        try {
            localStorage.uid = uid
        } catch (error) {}
	},
	changeUserInfo (state, userInfo) {
		state.userInfo = userInfo
        try {
            localStorage.userInfo = userInfo
        } catch (error) {}
    }
}

export default mutations