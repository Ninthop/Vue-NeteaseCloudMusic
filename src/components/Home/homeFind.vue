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
import { mapGetters } from 'vuex';


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
	computed: {
		...mapGetters([
			'loginType'
		])
	},
	methods: {
		getRec () {
			let bool = this.loginType
			// console.log(bool)
			if (bool == 1) {
				console.log('已登陆')
				apiFind.getLoginRec ({
					timestamp: new Date().getTime()
				})
				.then(res => {
					this.recList = res.recommend
					// console.log(res.recommend)
				})
			}else {
				console.log('未登陆')
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
	watch: {
		loginType () {
			this.getRec()
		}
	},
	mounted () {
		apiFind.getBanner ({
			type: 1
		})
		.then(res => {
			this.list = res.banners
			// console.log(res)
		}),
		// this.getRec(),
		apiFind.getAlbum ()
		.then(res => {
			this.albumList = res.albums
		}),
		this.getRec()
	}
	// activated () {
	// 	this.getRec()
	// }
}
</script>

<style lang="stylus" scoped>
	.home-find
		.findRec
			margin-top 1rem
</style>
