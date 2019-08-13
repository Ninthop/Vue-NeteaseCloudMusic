const state = {
	uid: localStorage.uid || {},
	userInfo: localStorage.userInfo || {},
	loginType: localStorage.loginType || 0,
	playStatus: localStorage.playStatus || false
}

export default state