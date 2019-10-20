<template>
	<div class="newSong">
		<new-song-q :playList="playList" :title="title" />
	</div>
</template>

<script>
import { getNewSong } from '@/api/Home/find'
import NewSongQ from '_com/base/otherList'

export default {
	name: 'NewSong',
	components: {
		NewSongQ
	},
	data () {
		return {
			title: "新歌速递",
			playList: []
		}
	},
	created () {
		getNewSong({
			type: 0
		})
		.then(res => {
			this.playList = res.data
			// console.log(res)
		})
	}
}
</script>

<style lang="stylus" scoped>
</style>