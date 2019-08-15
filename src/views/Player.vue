<template>
	<div class="player" v-show="playlist.length > 0">
		<div class="full-player" v-show="fullScreen">
			<!-- 背景遮罩，模糊处理 -->
			<div class="bgimg-fa" v-if="currentSong.al">
				<div class="bgimg" 
					:style="{  
						background: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), rgba(0, 0, 0, .8)), url('${currentSong.al.picUrl}') center center`, 
						filter: 'blur(2rem)'
					}"
				>
				</div>
			</div>

			<span class="header">
				<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
				<span class="play-title" v-if="currentSong.al">
					<span class="song-name">{{ currentSong.name }}</span>
					<div class="all-ar">
						<span class="song-ar" v-for="author of currentSong.ar" :key="author.id">
							{{ author.name }}
						</span>
					</div>
				</span>
				<span class="share">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-fenxiang"></use>
					</svg>
				</span>
			</span>

			<div class="player-cover" v-if="currentSong.al">
				<img :src="currentSong.al.picUrl | formatPic" alt="" class="cover-img">
			</div>

			<div class="player-bottom">
				<span class="collect">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shoucangdaogedan"></use>
					</svg>
				</span>

				<span class="pre-song">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xiayishoubofang-copy"></use>
					</svg>
				</span>

				<span class="play-status">
					<svg class="icon" aria-hidden="true" @click="toggleStatus">
						<use :xlink:href="playIcon"></use>
					</svg>
				</span>	
			
				<span class="next-song">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xiayishoubofang"></use>
					</svg>
				</span>

				<span class="next-song">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-pinglun"></use>
					</svg>
				</span>
			</div>
		</div>
		<div class="mini-player" v-show="!fullScreen" @click="openFullScreen">
			<div class="mini-cover" v-if="currentSong.al">
				<img :src="currentSong.al.picUrl | formatPic" alt="" class="mini-cover-img">
			</div>
			<div class="mini-info">
				<span class="mini-title">{{ currentSong.name }}</span>
				<span class="mini-ar">
					<span class="song-ar" v-for="author of currentSong.ar" :key="author.id">
						{{ author.name }}
					</span>
				</span>
			</div>
			<div class="mini-play">
				<svg class="icon play" aria-hidden="true" @click.stop="toggleStatus">
					<use :xlink:href="miniPlayIcon"></use>
				</svg>
				<svg class="icon list" aria-hidden="true">
					<use xlink:href="#icon-bianjigedanxinxi"></use>
				</svg>
			</div>
		</div>
		<audio ref="audio" :src="songUrl"></audio>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Player',
	methods: {
		routerBack () {
			// console.log(this.currentSong),
			this.$store.commit('setFullScreen', false)
		},
		openFullScreen () {
			this.$store.commit('setFullScreen', true)
		},
		toggleStatus () {
			console.log(!this.playing)
			this.$store.commit('setPlayingStatus', !this.playing)
		}
	},
	computed: {
		...mapGetters([
			'playlist',
			'fullScreen',
			'currentSong',
			'songUrl',
			'playing'
		]),
		playIcon () {
			return this.playing ? '#icon-bofang1' : '#icon-bofang'
		},
		miniPlayIcon () {
			return this.playing ? '#icon-bofang-zanting' : '#icon-zanting'
		}
	},
	watch: {
		songUrl () {
			this.$nextTick(() => {
				this.$refs.audio.play()
			})
		},
		playing (newStatus) {
			const audio = this.$refs.audio
			this.$nextTick(() => {
				return newStatus ? audio.play() : audio.pause()
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import ('~_s/varibles.styl')
	@import ('~_s/mixin.styl')
	.player
		.full-player
			position fixed
			z-index 100
			top 0
			bottom 0
			left 0
			right 0
			// background-color gray
			.bgimg-fa
				position absolute
				top 0
				height 100%
				width 100%
				z-index -1
				overflow hidden
			.bgimg
				position absolute
				top 0
				height 100%
				width 100%
				overflow hidden
				background-size cover
				transform scale(1.2)
			.header
				display flex
				flex-direction row
				align-items center
				width 100%
				.play-title
					display flex
					flex-direction column
					color white
					margin-top 1rem
					.song-name
						font-size $font-size-medium
						font-weight 400
						margin-bottom .5rem
						ellipsis-one()
						max-width 20rem
						@media all and (min-width 768px)
							max-width 100rem
					.all-ar
						display flex
						flex-direction row
						color #95afc0
						span.song-ar
							&:after
								content '/'
								margin-right .3rem
							&:nth-last-child(1)
								&:after
									content ''
				.back
					height 3rem
					margin 1rem 1rem
				.share
					position absolute
					right 1rem
			.player-cover
				display flex
				justify-content center
				align-items center
				height 60%
				.cover-img
					height 18rem
					width 18rem
					border-radius 50%
					border .5rem solid rgba(149, 175, 192, .5)
			.player-bottom
				display flex
				justify-content space-around
				margin-top 20%
				span 
					svg
						height 4rem
						width 4rem
		.mini-player
			position fixed
			z-index 100
			left 0
			right 0
			bottom 0
			height 7%
			width 100%
			background-color white
			border-top .1rem solid lightgray
			display flex
			flex-direction row
			.mini-cover
				height 100%
				display flex
				align-items center
				margin-left .5rem
				.mini-cover-img
					height 80%
					border-radius 50%
			.mini-info
				display flex
				flex-direction column
				justify-content center
				margin-left 1rem
				margin-top .5rem
				.mini-title
					font-size $font-size-normal
					margin-bottom .2rem
					ellipsis-one()
					max-width 18rem
					@media all and (min-width 768px)
						max-width 100rem
				.mini-ar
					color gray
					span.song-ar
						&:after
							content '/'
							margin-right .3rem
						&:nth-last-child(1)
							&:after
								content ''
			.mini-play
				position absolute
				right 3%
				top 50%
				transform translateY(-50%)
				.play
					margin-right .8rem
					height 2.5rem
					width 2.5rem
				.list
					height 2.5rem
					width 2.5rem
</style>