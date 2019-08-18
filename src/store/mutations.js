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
	},
	setShow (state) {
		state.show = !state.show
	},
	setAdvice(state, advice) {
		state.searchAdvice = advice
	},
	setHotSearch(state, hot) {
		state.hotSearch = hot
	},
	setSearchResult(state, searchResult) {
		state.searchResult = searchResult
	},
	setResultShow(state, bool) {
		state.resultShow = bool
	},
	setSearchType(state, type) {
		state.searchType = type
	},
	setKeyWords(state, keyWords) {
		state.keyWords = keyWords
	}
}

export default mutations