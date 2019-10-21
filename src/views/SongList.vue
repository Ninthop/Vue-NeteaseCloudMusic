<template>
	<div class="list">
		<list-header :playList="playList" />
		<song-content :playList="playList" @playAll="playAll"/>
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
			id: this.$route.params.id
		})
		.then(res => {
			// console.log(res)
			this.playList = res.playlist
		})
		// console.log(this.$store.state.fullScreen)
	}
}
</script>

<style lang="stylus" scoped>
</style>