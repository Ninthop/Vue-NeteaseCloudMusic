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
import { mapGetters } from 'vuex'

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
	computed: {
		...mapGetters([
			'loginType'
		])
	},
	methods: {
		myApi() {
			let bool = this.loginType
			if (bool) {
				apiMy.getUserlist({
					uid: this.$store.state.uid,
					timestamp: (new Date()).getTime()
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
	},
	mounted () {
		this.myApi();
	}
}
</script>

<style lang="stylus" scoped>
	.home-my
		background #f5f5f5
</style>
