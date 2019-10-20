<template>
	<div class="EverydayRecList">
		<recent-list :title="title" :playList="everydaySong" />
	</div>
</template>

<script>
import RecentList from '../common/base/otherList'
import { mapGetters } from 'vuex';

export default {
	name: 'EverydayRec',
	data () {
		return {
			title: '每日推荐',
		}
	},
	components: {
		RecentList
	},
	computed: {
		...mapGetters([
			'everydaySong'
		])
	},
	mounted () {
		console.log(1)
		this.$store.dispatch('getEverydaySong')
	}
}
</script>

<style lang="stylus" scoped>

</style>