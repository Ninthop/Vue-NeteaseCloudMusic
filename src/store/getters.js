const getters = {
	playing: state => state.playing,
	fullScreen: state => state.fullScreen,
	playlist: state => state.playlist,
	sequenceList: state => state.sequenceList,
	mode: state => state.mode,
	currentIndex: state => state.currentIndex,
	songUrl: state => state.songUrl,
	show: state => state.show,
	searchAdvice: state => state.searchAdvice,
	hotSearch: state => state.hotSearch,
	searchResult: state => state.searchResult,
	resultShow: state => state.resultShow,
	searchType: state => state.searchType,
	keyWords: state => state.keyWords,
	currentSong: (state) => {
		return state.playlist[state.currentIndex] || {}
	}
}

export default getters