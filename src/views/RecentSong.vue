<template>
	<div class="recent">
		<recent-list :title="title" :playList="recentPlay" />
	</div>
</template>

<script>
import RecentList from '../common/base/otherList'
import { mapGetters } from 'vuex';

export default {
	name: 'RecentSong',
	data () {
		return {
			title: '最近听过',
		}
	},
	components: {
		RecentList
	},
	computed: {
		...mapGetters([
			'recentPlay'
		])
	}
}
</script>

<style lang="stylus" scoped>

</style>