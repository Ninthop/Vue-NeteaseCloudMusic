import {playMode} from '_com/config/playMode'

const state = {
	//登陆相关
	uid: localStorage.uid || {},
	userInfo: localStorage.userInfo || {},
	loginType: localStorage.loginType || 0,
	
	//播放器相关
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],  //顺序播放列表
	mode: playMode.sequence,
	currentIndex: -1,
	songUrl: '',
	show: true,  //歌词cd页面切换
	playlistIsShown: false,
	recentPlay: [],

	//搜索相关
	searchAdvice: {},
	hotSearch: {},
	searchResult: {},
	searchType: 1,
	resultShow: false,
	keyWords: '',

	//主页按钮
	everydaySong: [],

	//控制loading
	loadIsShown: 1
}

export default state