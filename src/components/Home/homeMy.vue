<template>
	<div class="home-my">
		<my-toplist :userSubcount="userSubcount" />
		<my-songlist :songList="songList" :userSubcount="userSubcount" />
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
			songList: [],
			userSubcount: {}
		}
	},
	components: {
		MyToplist,
		MySonglist
	},
	mounted () {
		apiMy.getUserlist({
			uid: this.$store.state.uid
		})
		.then(res => {
			// console.log(res.playlist)
			this.songList = res.playlist
		})

		apiMy.getUserSubcount()
		.then(res => {
			// console.log(res)
			this.userSubcount = res
		})
	}
}
</script>

<style lang="stylus" scoped>
	.home-my
		background-color #f5f5f5
</style>
