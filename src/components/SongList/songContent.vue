<template>
	<div class="song-content">
		<div class="content-head">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-yinzhi"></use>
			</svg>
			<div class="play-all">
				播放全部
				<span class="song-num">(共{{ playList.trackCount }}首)</span>
			</div>
		</div>

		<div 
			class="song" 
			v-for="(item, index) of playList.tracks" 
			:key="item.id"
			@click="listenMusic(playList.tracks, index)"
		>
			<div class="index">{{ index+1 }}</div>
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
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SongContent',
		props: {
			playList: Object
		},
		methods: {
			listenMusic (song, index) {
				this.$emit('listen', {song, index})
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
			.index
				height 3rem
				width 3rem
				display flex
				justify-content center
				align-items center
				// border .1rem solid red
				font-size $font-size-normal
				color gray
			.song-body
				display flex
				flex-direction column
				justify-content center
				width 80%
				margin-left .5rem
				ellipsis-one()
				.song-title
					font-size $font-size-medium
					margin-bottom .5rem
					ellipsis-one()
					min-height 1.5rem
				.author-and-cover
					display flex
					flex-direction row
					color gray
					span.ar
						&:after
							content '/'
							margin-right .3rem
						&:nth-last-child(3)
							&:after
								content ''
					.cover
						ellipsis-one()
					.separator
						padding 0 .2rem
						
</style>