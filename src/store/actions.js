import { getUserInfo } from '@/api/User/user.js'
import { getSongDetail } from '@/api/Song/song.js'
import { getAlbumSong } from '@/api/Home/find.js'
import { getHotSearchS, getSearchResult } from '@/api/Search/search'
import { playMode } from '_com/config/playMode'
import axios from 'axios'

const actions = {
    changeUserInfo ({commit, rootState}) {
		getUserInfo({
			uid: rootState.uid
		})
		.then(res => {
			commit('changeUserInfo', res)
			console.log(res)
		})
	},

	getAdvice ({commit}, newWords) {
		axios({
			method: 'get',
			url:'http://localhost:3000/search/suggest',
			params: {
				keywords: newWords, 
				type: 'mobile', 
				timestamp: (new Date()).getTime()
			}
		})
		.then(res => {
			var advice = {}
			if (res.data.msg || !res.data.result.allMatch) {
				advice = {keyword: `暂未搜索到与"${newWords}"相关的内容`}
			}else {
				advice = res.data.result.allMatch
			}
			commit('setAdvice', advice)
		})
		.catch(
			function (err) {
				alert('连接错误，请重新连接或检查网络')
			}
		);
	},

	getHotRearch ({commit}) {
		getHotSearchS()
		.then(res => {
			commit('setHotSearch', res.result.hots)
			// console.log(res.result.hots)
		})
	},

	login ({commit, dispatch}, data) {
		console.log(data)
		commit('changeLoginStatus', data.loginType)
		commit('changeUid', data.account.id)
		dispatch('changeUserInfo')
	},

	logout ({commit}) {
		let num = 0
		commit('changeLoginStatus', num)
		commit('changeUid', {})
		commit('changeUserInfo', {})
	},

	playMusic({commit}, {song, index}) {
		commit('setSequenceList', song)
		commit('setPlaylist', song)
		commit('setCurrentIndex', index)
		commit('setFullScreen', true)
		commit('setPlayingStatus', true)
	},

	getAlbumSong ({commit}, id) {
		getAlbumSong({
			id: id
		})
		.then(res => {
			commit('setSequenceList', res.songs)
			commit('setPlaylist', res.songs)
			commit('setCurrentIndex', 0)
			commit('setFullScreen', true)
			commit('setPlayingStatus', true)
			console.log(res.songs)
		})
	},

	playAllMusic({commit}, allSong) {
		commit('setSequenceList', allSong)
		commit('setPlaylist', allSong)
		commit('setCurrentIndex', 0)
		commit('setFullScreen', true)
		commit('setPlayingStatus', true)
		commit('setMode', playMode.sequence)
	},

	getSearchResultType ({commit, rootState}) {
		getSearchResult({
			keywords: rootState.keyWords,
			type: rootState.searchType
		})
		.then(res => {
			commit('setSearchResult',res.result)
			// console.log(res.result)
		})
	},

	playSingleMusic({commit,rootState}, song) {
		getSongDetail({
			ids: song.id
		})
		.then(res => {
			commit('setSequenceList', res.songs)
			// commit('setPlaylist', [])
			commit('addPlaylist', res.songs[0])
			commit('setCurrentIndex', rootState.playlist.length - 1)
			commit('setFullScreen', true)
			commit('setPlayingStatus', true)
			console.log(res.songs[0])
		})
	},
}

export default actions