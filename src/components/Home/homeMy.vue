<template>
	<div class="home-my">
		<my-toplist />
		<my-songlist :songList="songList" />
	</div>
</template>

<script>
import MyToplist from './My/topList'
import MySonglist from './My/songList'
import * as apiMy from '@/api/Home/my.js'

export default {
	name: 'HomeMy',
	data () {
		return {
			songList: []
		}
	},
	components: {
		MyToplist,
		MySonglist
	},
	methods: {
		getUserlist () {
			apiMy.getUserlist({
				uid: this.$store.state.uid
			})
			.then(res => {
				console.log(res.playlist)
				this.songList = res.playlist
			})
		}
	},
	mounted () {
		this.getUserlist ()
	}
}
</script>

<style lang="stylus" scoped>
	.home-my
		background-color #f5f5f5
</style>
