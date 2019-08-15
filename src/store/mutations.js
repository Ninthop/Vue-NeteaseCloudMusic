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
	},
	setPlayingStatus (state, bool) {
		state.playing = bool
	},
	setFullScreen (state, bool) {
		state.fullScreen = bool
	},
	setPlaylist (state, list) {
		state.playlist = list
	},
	setSequenceList (state, list) {
		state.sequenceList = list
	},
	setMode (state, mode) {
		state.mode = mode
	},
	setCurrentIndex (state, index) {
		state.currentIndex = index
	},
	setSongUrl (state, url) {
		state.songUrl = url
	}
}

export default mutations