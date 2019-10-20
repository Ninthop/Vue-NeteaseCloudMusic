<template>
	<div class="singer-content">
		<div class="content-head">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-yinzhi"></use>
			</svg>
			<div class="play-all" @click="playAllSong(playList)">
				播放全部
				<span class="song-num">(共{{ playList.length }}首)</span>
			</div>
		</div>

		<div 
			class="song" 
			v-for="(item, index) of playList" 
			:key="index"
		>
			<!-- <div class="index">{{ index+1 }}</div>
			<div class="song-body">
				<span class="song-title">
					{{ item.name }}
					<span class="rtUrl" v-if="item.rtUrl">{{ item.rtUrls }}</span>
				</span>
				<span class="author-and-cover">
					<span class="ar" v-for="(author,index) of item.ar" :key="index">
						{{ author.name }}
					</span>
					<span class="separator">-</span>
					<span class="cover">{{ item.al.name }}</span>
					<span class="vip" v-if="item.fee == 1 || item.fee == 16">Vip</span>
					<span class="vip" v-if="item.fee == 4">需购专辑</span>
				</span>
			</div> -->
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
		playList: Array
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
	.singer-content
		position absolute
		top 40%
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