<template>
	<div class="home-find">
		<find-banner :bannerList='list' />
		<find-icon />
		<find-rec :recList="recList" class="findRec" />
		<find-album :albumList="albumList" />
	</div>
</template>

<script>
import FindBanner from './Find/banner.vue'
import FindIcon from './Find/icon.vue'
import FindRec from './Find/recommand.vue'
import FindAlbum from './Find/newAlbum.vue'
import * as apiFind from '@/api/Home/find.js'

var time = new Date()

export default {
	name: 'HomeFind',
	data () {
		return {
			list: [],
			recList: [],
			albumList: []
		}
	},
	components: {
		FindBanner,
		FindIcon,
		FindAlbum,
		FindRec
	},
	methods: {
		getRec () {
			let bool = this.$store.state.loginType
			// console.log(bool)
			if (bool == 1) {
				// console.log('需要登陆')
				apiFind.getLoginRec ({
					timestamp: time.getTime(),
				})
				.then(res => {
					this.recList = res.recommend
					// console.log(res.recommend)
				})
			}else {
				// console.log('不要登陆')
				apiFind.getRecList ({
					limit: 16
				})
				.then(res => {
					this.recList = res.result
					// console.log(res)
				})
			}
		}
	},
	mounted () {
		// console.log(this.$store.state.uid)
		if (localStorage.loginType == 1) {
			apiFind.refreshLogin()
			.then(res => {
				// console.log(res)
			})
		}
		apiFind.getBanner ({
			type: 1
		})
		.then(res => {
			this.list = res.banners
			// console.log(res)
		}),
		this.getRec(),
		apiFind.getAlbum ()
		.then(res => {
			this.albumList = res.albums
		})
	},
	activated () {
		this.getRec()
	}
}
</script>

<style lang="stylus" scoped>
	.home-find
		.findRec
			margin-top 1rem
</style>
