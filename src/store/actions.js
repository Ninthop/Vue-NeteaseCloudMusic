import { getUserInfo } from '@/api/User/user.js'
import { playMode } from '_com/config/playMode'
import { getLyric } from '@/api/Song/song'


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

	playMusic({commit, dispatch}, {song, index}) {
		dispatch('getLyric', song[index].id)
		commit('setSequenceList', song)
		commit('setPlaylist', song)
		commit('setCurrentIndex', index)
		commit('setFullScreen', true)
		commit('setPlayingStatus', true)
	},

	playAllMusic({commit, dispatch}, allSong) {
		dispatch('getLyric', allSong[0].id)
		commit('setSequenceList', allSong)
		commit('setPlaylist', allSong)
		commit('setCurrentIndex', 0)
		commit('setFullScreen', true)
		commit('setPlayingStatus', true)
		commit('setMode', playMode.sequence)
	},

	getLyric({commit, rootState}, id) {
		getLyric({
			id: id
		})
		.then(lyric => {
			let lrc = lyric.lrc.lyric
			commit('setLyric', lrc)
			// console.log(lrc)
		})
	}
}

export default actions