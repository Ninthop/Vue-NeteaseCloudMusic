<template>
	<div class="EverydayRecList">
		<recent-list :title="title" :playList="everydaySong" :songNum="everydaySong.length" @listen="playMusic"/>
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
	methods: {
		playMusic (song) {
			this.$store.dispatch('playSingleMusic', song)
		}
	},
	computed: {
		...mapGetters([
			'everydaySong'
		])
	},
	mounted () {
		this.$store.dispatch('getEverydaySong')
	}
}
</script>

<style lang="stylus" scoped>

</style>