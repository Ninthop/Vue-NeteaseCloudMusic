import { getUserInfo } from '@/api/User/user.js'
import { getSong } from '../api/Song/song'

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
	playMusic({commit, rootState}, {song, index}) {
		commit('setSequenceList', song)
		commit('setPlaylist', song)
		commit('setCurrentIndex', index)
		commit('setFullScreen', true)
		commit('setPlayingStatus', true)
		// console.log(rootState.fullScreen)
		// let list = rootState.playlist
		// console.log(list.length)
		// console.log(rootState.playlist[rootState.currentIndex])
		getSong({
			id: rootState.playlist[rootState.currentIndex].id
		})
		.then(res => {
			console.log(res.data[0].url)
			commit('setSongUrl', res.data[0].url)
		})
	}
}

export default actions