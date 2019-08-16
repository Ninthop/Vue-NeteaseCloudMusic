<template>
	<div class="player" v-show="playlist.length > 0" @touchmove.prevent>
		<div class="full-player" v-show="fullScreen">
			<!-- 背景遮罩，模糊处理 -->
			<div class="bgimg-fa" v-if="currentSong.al">
				<div class="bgimg" 
					:style="{  
						background: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), rgba(0, 0, 0, .8)), url('${formatBigPic(currentSong.al.picUrl)}') no-repeat center center`, 
						filter: 'blur(1rem)'
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

			<div class="lyric" ref="lyriclist">
				<div class="lyric-wrapper">
					<div class="lyric-content" v-if="currentLyric">
						<p 
							class="text"
							ref="everyLyric"
							:class="{'current': currentLineNum == index}"
							v-for="(line, index) of currentLyric.lines"
							:key="index"
						>
						{{ line.txt }}
						</p>
					</div>
				</div>
			</div>

			<div class="time-wrapper">
				<span class="time time-start">{{ formatTime(currentTime) }}</span>
				<div class="progress-bar-wrapper">
					<progress-bar :percent="percent" @setPercent="setPer" />
				</div>
				<span class="time time-end">{{ formatAlltime(currentSong.dt) }}</span>
			</div>

			<div class="player-bottom">
				<span class="collect">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shoucangdaogedan"></use>
					</svg>
				</span>

				<span class="pre-song" @click="preSong">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xiayishoubofang-copy"></use>
					</svg>
				</span>

				<span class="play-status" @click="playingSong">
					<svg class="icon" aria-hidden="true">
						<use :xlink:href="playIcon"></use>
					</svg>
				</span>	
			
				<span class="next-song" @click="nextSong">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xiayishoubofang"></use>
					</svg>
				</span>

				<span class="play-mode" @click="setMode">
					<svg class="icon" aria-hidden="true">
						<use :xlink:href="modeIcon"></use>
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
				<svg class="icon play" aria-hidden="true" @click.stop="playingSong">
					<use :xlink:href="miniPlayIcon"></use>
				</svg>
				<svg class="icon list" aria-hidden="true">
					<use xlink:href="#icon-bianjigedanxinxi"></use>
				</svg>
			</div>
		</div>
		<audio 
			ref="audio" 
			@canplay="ready" 
			@error="error" 
			@timeupdate="Time"
			@ended="end"
			:src="songUrl"
		></audio>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSong } from '../api/Song/song'
import ProgressBar from '../components/Player/PorgressBar'
import { playMode } from '_com/config/playMode'
import { shuffle } from '@/lib/util.js'
import Lyric from 'lyric-parser'

export default {
	name: 'Player',
	data () {
		return {
			songReady: false,
			currentTime: 0,
			currentLineNum: 0,
			show: true,
			currentLyric: null
		}
	},
	components: {
		ProgressBar
	},
	methods: {
		routerBack () {
			// console.log(this.currentSong),
			this.$store.commit('setFullScreen', false)
		},
		openFullScreen () {
			this.$store.commit('setFullScreen', true)
		},
		toggleStatus () {
			if (!this.songReady) {
				return
			}
			// console.log(!this.playing)
			this.$store.commit('setPlayingStatus', !this.playing)
		},
		preSong () {
			if (!this.songReady) {
				return
			}
			let newIndex = this.currentIndex - 1
			if (newIndex == -1) {
				newIndex = this.playlist.length - 1
			}
			this.$store.dispatch('getLyric', this.playlist[newIndex].id)
			this.$store.commit('setCurrentIndex', newIndex)
			if (!this.playing) {
				this.toggleStatus()
			}
			this.songReady = false
		},
		nextSong () {
			if (!this.songReady) {
				return
			}
			let newIndex = this.currentIndex + 1
			if (newIndex == this.playlist.length) {
				newIndex = 0
			}
			this.$store.dispatch('getLyric', this.playlist[newIndex].id)
			this.$store.commit('setCurrentIndex', newIndex)
			if (!this.playing) {
				this.toggleStatus()
			}
			this.songReady = false
		},
		ready () {
			this.songReady = true
		},
		error () {
			this.songReady = true
		},
		Time (e) {
			this.currentTime = e.target.currentTime
		},
		end () {
			if (this.mode == playMode.loop) {
				this.loop()
			}else {
				this.nextSong()				
			}
		},
		loop () {
			this.$refs.audio.currentTime = 0
			this.$refs.audio.play()
		},
		formatTime (time) {
			time = time | 0
			const minute = time / 60 | 0
			const second = this.completion(time % 60, 2)
			return `${minute}:${second}`
		},
		formatAlltime (time) {
			time = time / 1000 | 0
			time = time | 0
			const minute = time / 60 | 0
			const second = this.completion(time % 60, 2)
			return `${minute}:${second}`
		},
		completion (num, n) {
			let length = num.toString().length
			while (length < n) {
				num = '0' + num
				length++
			}
			return num
		},
		formatBigPic(url) {
			if (!url) return ''
			return `${url}?param=200y200`
		},
		setPer (per) {
			// console.log(this.$refs.audio.currentTime)
			this.$refs.audio.currentTime = (this.currentSong.dt/1000) * per
			if (!this.playing) {
				this.playingSong()
			}
		},
		setMode () {
			const mode = (this.mode + 1) % 3
			this.$store.commit('setMode', mode)
			let songlist = null
			if (mode == playMode.random) {
				songlist = shuffle(this.sequenceList)
			}else {
				songlist = this.sequenceList
			}
			this.$store.commit('setPlaylist', songlist)
			this.formatCurrentIndex(songlist)
		},
		formatCurrentIndex (list) {
			let index = list.findIndex(item => {
				return item.id === this.currentSong.id
			})
			this.$store.commit('setCurrentIndex', index)
		},
		playingSong () {
			if (!this.songReady) {
				return
			}
			const audio = this.$refs.audio
			const newStatus = !this.playing
			this.$store.commit('setPlayingStatus', newStatus)
			return newStatus ? audio.play() : audio.pause()
		},
		getLyric () {
			this.currentLyric = new Lyric(this.lyric, this.handleLyric)
			if (this.playing) {
				this.currentLyric.play()
			}
			console.log(this.currentLyric.lines)
		},
		handleLyric ({lineNum, txt}) {
			this.currentLineNum = lineNum
		}
	},
	computed: {
		...mapGetters([
			'playlist',
			'fullScreen',
			'currentSong',
			'songUrl',
			'playing',
			'currentIndex',
			'mode',
			'sequenceList',
			'lyric'
		]),
		playIcon () {
			return this.playing ? '#icon-bofang1' : '#icon-bofang'
		},
		miniPlayIcon () {
			return this.playing ? '#icon-bofang-zanting' : '#icon-zanting'
		},
		modeIcon () {
			return this.mode == playMode.sequence ? '#icon-mayi-shunxubofang' : 
					(this.mode == playMode.loop ? '#icon-danquxunhuan' : '#icon-suijibofang')
		},
		percent () {
			// console.log(this.currentTime / (this.currentSong.dt/1000))
			return this.currentTime / (this.currentSong.dt/1000)
		}
	},
	watch: {
		songUrl () {
			this.$nextTick(() => {
				this.$refs.audio.play()
				this.getLyric()
				this.$store.commit('setPlayingStatus', true)
			})
		},
		currentSong (newSong) {
			getSong({
				id: newSong.id
			})
			.then(res => {
				// console.log(res.data[0].url)
				this.$store.commit('setSongUrl', res.data[0].url)
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
				transform scale(5)
				@media all and (min-width 768px)
					transform scale(10)
				
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
				height 65%
				border .1rem solid red
				.cover-img
					height 18rem
					width 18rem
					border-radius 50%
					border .5rem solid rgba(149, 175, 192, .5)
			.lyric
				width 100%
				position absolute
				top 10%
				height 65%
				z-index 300
				display flex
				justify-content center
				.lyric-wrapper
					height 95%
					width 80%
					overflow hidden
					.text
						line-height 2rem
						text-align center
						color gray
						font-size $font-size-medium
						transition 0.3s
						&.current
							color white
							transition 0.3s
			.player-bottom
				display flex
				justify-content space-around
				margin-top 5%
				span 
					svg
						height 4rem
						width 4rem
			.time-wrapper
				position relative
				z-index 100
				display flex
				align-items center
				width 90%
				margin 2rem auto
				.time
					color white
					font-size $font-size-small
					// flex 0 0 3.2rem
					width 3.2rem
					&.time-start
						text-align left
					&.time-end
						text-align right
				.progress-bar-wrapper
					flex 1
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
				padding-top .2rem
				.mini-title
					font-size $font-size-normal
					margin-bottom .2rem
					ellipsis-one()
					max-width 18rem
					min-height 1.2rem
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