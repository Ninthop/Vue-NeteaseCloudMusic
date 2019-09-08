<template>
	<div class="player" v-show="playlist.length > 0" @touchmove.prevent>
		<transition name="fullScreen">
			<div class="full-player" v-show="fullScreen">
				<!-- 背景遮罩，模糊处理 -->
				<div class="bgimg-fa" v-if="currentSong.al">
					<div class="bgimg" 
						:style="{  
							background: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), rgba(0, 0, 0, .8)), url('${formatBigPic(currentSong.al.picUrl || currentSong.artist.img1v1Url)}') no-repeat center center`, 
							filter: 'blur(1rem)'
						}"
					>
					</div>
				</div>
				<!-- 头部信息 -->
				<span class="header">
					<img src="@/assets/static/back.png" alt="返回图标" class="back" @click="routerBack">
					<span class="play-title" v-if="currentSong.al">
						<span class="song-name">{{ currentSong.name }}</span>
						<div class="all-ar">
							<span class="song-ar" v-for="(author, index) of currentSong.ar" :key="index">
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
				<!-- 中间cd部分和歌词部分切换 -->
				<div class="middle">
					<fade>
						<div class="player-cover" v-show="this.show" v-if="currentSong.al" @click="changeShow">
							<img :src="currentSong.al.picUrl | formatPic" alt="" class="cover-img">
						</div>
					</fade>
					<fade>
						<div class="lyric-wrapper" @click="changeShow" v-show="!this.show">
							<div class="lyric-content" ref="lyriclist">
								<div>
									<p v-if="this.currentLyric == null" class="text-none" ref="lyricLine">没有歌词。</p>
									<p ref="lyricLine"
									class="text"
									v-else
									:class="{'current': currentLineNum == index}"
									v-for="(line,index) in currentLyricLines"
									:key="index">{{line.txt}}</p>
								</div>
							</div>
						</div>
					</fade>
				</div>
				<!-- 时间轴 -->
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
		</transition>
		<!-- 缩小后的播放器 -->
		<transition name="miniPlayer">
			<div class="mini-player" v-show="!fullScreen" @click="openFullScreen" ref="mini">
				<div class="mini-cover" v-if="currentSong.al">
					<img :src="currentSong.al.picUrl | formatPic" alt="" class="mini-cover-img">
				</div>
				<div class="playing-lyric mini-info" v-if="this.currentLyric == null && this.playing">
					<span class="mini-title">{{ currentSong.name }}</span>
					<span class="mini-ar">
						<span class="song-ar" v-for="(author,index) of currentSong.ar" :key="index">
							{{ author.name }}
						</span>
					</span>
				</div>
				<div class="playing-lyric mini-info" v-else-if="this.playing">
					<p>{{ this.playingLyric }}</p>
				</div>
				<div class="mini-info" v-else>
					<span class="mini-title">{{ currentSong.name }}</span>
					<span class="mini-ar">
						<span class="song-ar" v-for="(author,index) of currentSong.ar" :key="index">
							{{ author.name }}
						</span>
					</span>
				</div>
				<div class="mini-play">
					<svg class="icon play" aria-hidden="true" @click.stop="playingSong">
						<use :xlink:href="miniPlayIcon"></use>
					</svg>
					<svg class="icon list" aria-hidden="true" @click.stop="playlistShow">
						<use xlink:href="#icon-bianjigedanxinxi"></use>
					</svg>
				</div>
			</div>
		</transition>

		<play-list />
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
import PlayList from '../components/Player/playList'
import { playMode } from '_com/config/playMode'
import { shuffle } from '@/lib/util.js'
import Lyric from 'lyric-parser'
import Fade from '../common/animate/fade'
import Bscroll from 'better-scroll'
import { getLyric } from '@/api/Song/song'


export default {
	name: 'Player',
	data () {
		return {
			songReady: false,
			currentTime: 0,
			currentLineNum: 0,
			currentLyric: null,
			currentLyricLines: null,
			playingLyric: ''
		}
	},
	components: {
		ProgressBar,
		Fade,
		PlayList
	},
	methods: {
		routerBack () {
			// console.log(this.currentSong),
			this.$store.commit('setFullScreen', false)
			this.$store.commit('setShow', true)
		},
		openFullScreen () {
			this.$store.commit('setFullScreen', true)
		},
		// 切换播放状态
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
			if (this.playlist.length == 1) {
				this.loop()
			}else {
				let newIndex = this.currentIndex - 1
				if (newIndex == -1) {
					newIndex = this.playlist.length - 1
				}
				this.$store.commit('setCurrentIndex', newIndex)
				if (!this.playing) {
					this.toggleStatus()
				}
			}
			this.songReady = false
		},
		nextSong () {
			if (!this.songReady) {
				return
			}
			if (this.playlist.length == 1) {
				this.loop()
			}else {
				let newIndex = this.currentIndex + 1
				if (newIndex == this.playlist.length) {
					newIndex = 0
				}
				this.$store.commit('setCurrentIndex', newIndex)
				if (!this.playing) {
					this.toggleStatus()
				}
			}
			this.songReady = false
		},
		// 音频处理
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
		// 单曲循环
		loop () {
			this.$refs.audio.currentTime = 0
			this.$refs.audio.play()
			if (this.currentLyric) {
				this.currentLyric.seek(0)
			}
		},
		// 音频开始时间初始化
		formatTime (time) {
			time = time | 0
			const minute = time / 60 | 0
			const second = this.completion(time % 60, 2)
			return `${minute}:${second}`
		},
		// 音频总时长初始化
		formatAlltime (time) {
			time = time / 1000 | 0
			time = time | 0
			const minute = time / 60 | 0
			const second = this.completion(time % 60, 2)
			return `${minute}:${second}`
		},
		// 音频补0
		completion (num, n) {
			let length = num.toString().length
			while (length < n) {
				num = '0' + num
				length++
			}
			return num
		},
		// 图片压缩
		formatBigPic(url) {
			if (!url) return ''
			return `${url}?param=200y200`
		},
		// 时间轴百分比设置
		setPer (per) {
			// console.log(this.$refs.audio.currentTime)
			this.$refs.audio.currentTime = (this.currentSong.dt/1000) * per
			if (!this.playing) {
				this.playingSong()
			}
			if (this.currentLyric) {
				this.currentLyric.seek(this.$refs.audio.currentTime * 1000)
			}
		},
		// 播放模式设置
		setMode () {
			const mode = (this.mode + 1) % 3
			this.$store.commit('setMode', mode)
			let cursonglist = null
			// 发现直接调用shuffle会导致sequenceList被污染，原因未知，于是先用arr取出sequenceList的内容
			let arr = [...this.sequenceList]
			// console.log(this.sequenceList)
			// console.log(cursonglist)
			if (mode == playMode.random) {
				// console.log(cursonglist)
				// console.log(this.sequenceList)
				cursonglist = shuffle(arr)
				// console.log(this.sequenceList)
			}else {
				// console.log(this.sequenceList)
				cursonglist = this.sequenceList
				// console.log(this.sequenceList)
			}
			this.formatCurrentIndex(cursonglist)
			this.$store.commit('setPlaylist', cursonglist)
		},
		// 更改播放模式时，定住当前序号
		formatCurrentIndex (list) {
			let index = list.findIndex(item => {
				return item.id == this.currentSong.id
			})
			this.$store.commit('setCurrentIndex', index)
		},
		// 播放切换
		playingSong () {
			if (!this.songReady) {
				return
			}
			const audio = this.$refs.audio
			const newStatus = !this.playing
			this.$store.commit('setPlayingStatus', newStatus)
			if (this.currentLyric) {
				this.currentLyric.togglePlay()
			}
			return newStatus ? audio.play() : audio.pause()
		},
		// 获取歌词，并使用lyric-parse处理
		getCurrentLyric () {
			getLyric({
				id: this.currentSong.id
			})
			.then(res => {
				if (res.nolyric){
					this.currentLyric = null
					this.currentLineNum = 0
					// console.log('没有歌词')
				}else {
					this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyric)
					this.currentLyricLines = this.currentLyric.lines
					// console.log('lyric')
					if (this.playing) {
						this.currentLyric.play()
					}
					// console.log(this.currentLyric)
				}
			})
		},
		// lyric回调函数
		handleLyric ({lineNum, txt}) {
			this.currentLineNum = lineNum
			if (lineNum > 4) {
				let curLine = this.$refs.lyricLine[lineNum - 4]
				this.scrollToElement(curLine, 1000)
			}else {
				this.scrollTo(0, 0, 1000)
			}
			this.playingLyric = txt
		},
		// 切换cd和歌词显示
		changeShow () {
			this.$store.commit('setShow', !this.show)
		},
		playlistShow () {
			this.$store.commit('setplaylistIsShown', true)
		},
		refresh() {
			this.scroll && this.scroll.refresh()
		},
		scrollTo() {
			this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
		},
		scrollToElement() {
			this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.lyriclist, {click: true})
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
			'show'
		]),
		// 播放图标
		playIcon () {
			return this.playing ? '#icon-bofang1' : '#icon-bofang'
		},
		// 迷你播放图标
		miniPlayIcon () {
			return this.playing ? '#icon-bofang-zanting' : '#icon-zanting'
		},
		// 播放模式图标
		modeIcon () {
			return this.mode == playMode.sequence ? '#icon-mayi-shunxubofang' : 
					(this.mode == playMode.loop ? '#icon-danquxunhuan' : '#icon-suijibofang')
		},
		// 百分比计算
		percent () {
			// console.log(this.currentTime / (this.currentSong.dt/1000))
			return this.currentTime / (this.currentSong.dt/1000)
		}
	},
	watch: {
		// 监听音乐url变化，获取歌词并更改状态，达到切换就播放的效果
		songUrl () {
			if (this.currentLyric) {
				this.currentLyric.stop()
			}
			setTimeout(() => {
				this.$refs.audio.play()
				this.getCurrentLyric()
				this.$store.commit('setPlayingStatus', true)
			}, 200)
		},
		// 监听当前歌曲变化，获取新歌的url
		currentSong (newSong) {
			getSong({
				id: newSong.id
			})
			.then(res => {
				this.$store.commit('setSongUrl', res.data[0].url)
				// console.log(this.$store.state.recentPlay)
				this.$store.commit('addRecentPlay', newSong)
			})
		},
		show () {
			setTimeout(() => {
				this.refresh()
			}, 20)
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
			&.fullScreen-enter-active, &.fullScreen-leave-active
				transition all 0.4s
				.header, .player-bottom, .player-cover
					transition all 0.4s cubic-bezier(.29,.31,.34,1.11)
			&.fullScreen-enter, &.fullScreen-leave-to
				opacity 0
				.header
					transform translate3d(0, -10rem, 0)
				.player-bottom
					transform translate3d(0, 10rem, 0)
				.player-cover
					transform scale(2)
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
					max-width 20rem
					.song-name
						font-size $font-size-medium
						font-weight 400
						margin-bottom .5rem
						ellipsis-one()
						max-width 20rem
						min-height 2rem
						@media all and (min-width 768px)
							max-width 100rem
					.all-ar
						display flex
						flex-direction row
						color #95afc0
						font-size $font-size-small
						ellipsis-one()
						max-width 20rem
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
			.middle
				position relative
				height 65%
				.player-cover
					position relative
					z-index 100
					display flex
					justify-content center
					align-items center
					height 100%
					// border .1rem solid red
					.cover-img
						height 65%
						// width 80%
						border-radius 50%
						border .5rem solid rgba(149, 175, 192, .5)
						box-shadow 0 0 3rem .2rem lightgray
				.lyric-wrapper
					position absolute
					top 0
					width 100%
					height 100%
					display flex
					justify-content center
					align-items center
					.lyric-content
						height 90%
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
								box-shadow 0 .7rem .7rem -.7rem gray; 
								transition 0.3s
						.text-none
							display flex
							justify-content center
							align-items center
							height 50vh
							line-height 2rem
							color white
							font-size $font-size-medium
							transition 0.3s
			.player-bottom
				display flex
				justify-content space-around
				margin-top 5%
				span 
					svg
						height 5rem
						width 5rem
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
			height 8%
			width 100%
			background-color white
			border-top .1rem solid lightgray
			display flex
			flex-direction row
			&.miniPlayer-enter-active, &.miniPlayer-leave-active
				transition all 0.4s
			&.miniPlayer-enter, &.miniPlayer-leave-to
				transform translateY(100%)
				opacity 0
			.mini-cover
				height 100%
				display flex
				align-items center
				margin-left .5rem
				.mini-cover-img
					height 80%
					border-radius 50%
			.mini-info
				position absolute
				left 15%
				top 50%
				transform translateY(-50%)
				display flex
				flex-direction column
				justify-content center
				// border .1rem solid red
				// margin-left 1rem
				// padding-top .2rem
				.mini-title
					font-size $font-size-normal
					margin-bottom .2rem
					ellipsis-one()
					max-width 15rem
					min-height 1.2rem
					@media all and (min-width 768px)
						max-width 100rem
				.mini-ar
					color gray
					font-size $font-size-small
					span.song-ar
						&:after
							content '/'
							margin-right .3rem
						&:nth-last-child(1)
							&:after
								content none
			.playing-lyric
				p
					line-height 1.4rem
					max-width 18rem
					font-size $font-size-normal
					// min-height 1.2rem
					min-height 1.6rem
					ellipsis-one()
					@media all and (min-width 768px)
						max-width 100rem
			.mini-play
				position absolute
				right 3%
				top 50%
				transform translateY(-50%)
				.play
					margin-right 2rem
					height 3rem
					width 3rem
				.list
					height 3rem
					width 3rem
</style>