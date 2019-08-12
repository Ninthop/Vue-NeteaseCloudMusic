const state = {
	uid: sessionStorage.uid || {},
	loginType: sessionStorage.loginType || 0,
	playStatus: sessionStorage.playStatus || false
}

export default state