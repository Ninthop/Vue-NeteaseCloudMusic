<template>
	<div class="recent">
		<recent-list :title="title" :playList="recentPlay" :songNum="recentPlay.length" @listen="playMusic"/>
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
	},
	methods: {
		playMusic (song) {
			this.$store.dispatch('playSingleMusic', song)
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>