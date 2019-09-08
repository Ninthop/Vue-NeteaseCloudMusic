const getters = {
	loginType: state => state.loginType,
	playing: state => state.playing,
	fullScreen: state => state.fullScreen,
	playlist: state => state.playlist,
	sequenceList: state => state.sequenceList,
	mode: state => state.mode,
	currentIndex: state => state.currentIndex,
	songUrl: state => state.songUrl,
	show: state => state.show,
	playlistIsShown: state => state.playlistIsShown,
	recentPlay: state => state.recentPlay,
	searchAdvice: state => state.searchAdvice,
	hotSearch: state => state.hotSearch,
	searchResult: state => state.searchResult,
	resultShow: state => state.resultShow,
	searchType: state => state.searchType,
	keyWords: state => state.keyWords,
	everydaySong: state => state.everydaySong,
	currentSong: (state) => {
		return state.playlist[state.currentIndex] || {}
	}
}

export default getters