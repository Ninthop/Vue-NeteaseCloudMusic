<template>
	<div class="list">
		<list-header :playList="playList" />
		<song-content :playList="playList" />
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
	activated() {
		// console.log(this.$route.params.id)
		getSonglist({
			id: this.$route.params.id
		})
		.then(res => {
			// console.log(res)
			this.playList = res.playlist
		})
	}
}
</script>

<style lang="stylus" scoped>
</style>