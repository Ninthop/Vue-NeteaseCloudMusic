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
	mounted () {
		apiFind.getBanner ({
			type: 1
		})
		.then(res => {
			this.list = res.banners
			// console.log(res)
		}),

		apiFind.getRecList ({
			limit: 6
		})
		.then(res => {
			this.recList = res.result
			console.log(res)
		}),

		apiFind.getAlbum ()
		.then(res => {
			this.albumList = res.albums
		})
	}
}
</script>

<style lang="stylus" scoped>
	.home-find
		.findRec
			margin-top 1rem
</style>
