<template>
	<div class="song-content">
		<div class="content-head">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-yinzhi"></use>
			</svg>
			<div class="play-all" @click="playAllSong(playList.tracks)">
				播放全部
				<span class="song-num">(共{{ playList.trackCount }}首)</span>
			</div>
		</div>

		<div 
			class="song" 
			v-for="(item, index) of playList.tracks" 
			:key="index"
		>
			<song 
				:songDetial="item" 
				:songRtUrl="item.rtUrls" 
				:index="index" 
				:artists="item.ar" 
				:album="item.al" />
		</div>
	</div>
</template>

<script>
import Song from '_com/base/song'

export default {
	name: 'SongContent',
	props: {
		playList: Object
	},
	components: {
		Song
	},
	methods: {
		playAllSong (allSong) {
			this.$emit('playAll', allSong)
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.song-content
		position relative
		top -1.5rem
		background-color white
		width 100%
		border-top-left-radius 1.5rem
		border-top-right-radius 1.5rem
		.content-head
			padding 1rem 1rem 0 1rem
			display flex
			.play-all
				font-size $font-size-medium
				display flex
				align-items center
				margin-left .5rem
				.song-num
					margin-left 1rem
					color gray
					font-size $font-size-normal
		.song
			display flex
			flex-direction row
			margin 2rem 0
</style>