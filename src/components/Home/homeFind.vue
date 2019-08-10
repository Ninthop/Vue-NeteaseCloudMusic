<template>
	<div class="home-find">
		<find-banner :bannerList='list' />
	</div>
</template>

<script>
import FindBanner from './Find/banner.vue'
import * as apiFind from '@/api/Home/find.js'

export default {
	name: 'HomeFind',
	data () {
		return {
			list: []
		}
	},
	components: {
		FindBanner
	},
	mounted () {
		apiFind.getBanner ({
			type: 1
		})
		.then(res => {
			this.list = res.banners
			console.log(res)
		})
	}
}
</script>

<style lang="stylus" scoped>

</style>
