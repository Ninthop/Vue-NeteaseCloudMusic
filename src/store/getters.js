const getters = {
	playing: state => state.playing,
	fullScreen: state => state.fullScreen,
	playlist: state => state.playlist,
	sequenceList: state => state.sequenceList,
	mode: state => state.mode,
	currentIndex: state => state.currentIndex,
	songUrl: state => state.songUrl,
	currentSong: (state) => {
		return state.playlist[state.currentIndex] || {}
	}
}

export default getters