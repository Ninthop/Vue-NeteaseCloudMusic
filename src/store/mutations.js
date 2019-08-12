const mutations = {
    Login (state, num) {
        state.loginType = num
        try {
            sessionStorage.loginType = num
        } catch (error) {}
	},
	changeUid (state, uid) {
        state.uid = uid
        try {
            sessionStorage.uid = uid
        } catch (error) {}
    }
}

export default mutations