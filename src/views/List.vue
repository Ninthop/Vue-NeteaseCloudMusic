<template>
	<div class="list">
		<list-header :playList="playList" />
		<song-content :playList="playList" @listen="playMusic" @playAll="playAll"/>
	</div>
</template>

<script>
import ListHeader from '../components/SongList/header'
import SongContent from '../components/SongList/songContent'
import { getSonglist } from '@/api/Home/my.js'

export default {
	name: 'List',
	data () {
		return {
			playList: {}
		}
	},
	components: {
		ListHeader,
		SongContent
	},
	methods: {
		playMusic ({song, index}) {
			this.$store.dispatch('playMusic', {song, index})
		},
		playAll (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
		}
	},
	activated() {
		// console.log(this.$route.params.id)
		getSonglist({
			id: this.$route.params.id
		})
		.then(res => {
			// console.log(res.playlist.tracks)
			this.playList = res.playlist
		})
		// console.log(this.$store.state.fullScreen)
	}
}
</script>

<style lang="stylus" scoped>
</style>