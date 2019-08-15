import {playMode} from '_com/config/playMode'

const state = {
	uid: localStorage.uid || {},
	userInfo: localStorage.userInfo || {},
	loginType: localStorage.loginType || 0,
	playStatus: localStorage.playStatus || false,
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	songUrl: ''
}

export default state