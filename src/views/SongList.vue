<template>
	<div class="list">
		<list-header :playList="playList" />
		<song-content :playList="tracks" @playAll="playAll" :trackCount="trackCount"/>
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
			playList: {},
			tracks: [],
			trackCount: 0
		}
	},
	components: {
		ListHeader,
		SongContent
	},
	methods: {
		playAll (allSong) {
			this.$store.dispatch('playAllMusic', allSong)
		}
	},
	beforeDestroy() {
		this.$store.commit('toggleLoad', 1)
	},
	created() {
		// console.log(this.$route.params.id)
		this.$store.commit('toggleLoad', 0)
		getSonglist({
			id: this.$route.params.id,
			timestamp: (new Date()).getTime()
		})
		.then(res => {
			// console.log(res)
			this.playList = res.playlist
			this.tracks = res.playlist.tracks
			this.trackCount = res.playlist.tracks.length
		})
		// console.log(this.$store.state.fullScreen)
	}
}
</script>

<style lang="stylus" scoped>
	.list
		overflow-y auto
</style>